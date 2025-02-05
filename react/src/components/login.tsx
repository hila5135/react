import { Modal, Button, Box, TextField } from "@mui/material";
import { FormEvent, useContext, useRef, useState } from "react";
import { UserContext } from "./userContext";
import axios from "axios";
import { cyan } from "@mui/material/colors";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: `2px solid ${cyan[300]}`,
  boxShadow: 24,
  p: 4,
};
const buttonStyle = {
  background: "black",
  color: "white",
  borderRadius: "10px",
  border: `2px solid ${cyan[300]}`,
  "&:hover": { backgroundColor: "white", borderColor: cyan[300], color: "#4dd0e1" }
};
const textFieldStyle = {
  mb: 2,
  backgroundColor: "white",
  "& label.Mui-focused": { color: "#4dd0e1" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#4dd0e1" },
    "&.Mui-focused fieldset": { borderColor: "#4dd0e1" }
  }
};
const Login = ({ successLogin, typeAction, close }: { successLogin: Function; typeAction: string, close: Function }) => {
  const context = useContext(UserContext);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(true)
  const [userID, setUserId] = useState<string>();
  const handleSubmitLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const link =
        typeAction === "Sign"
          ? "http://localhost:3000/api/user/register"
          : "http://localhost:3000/api/user/login";
      const res = await axios.post(link, {
        firstName: firstNameRef.current?.value,
        password: passwordRef.current?.value,
      });
      setUserId(res.data.userId);
      context?.userDispatch({
        type: "CREATE",
        data: {
          id: res.data.userId,
          firstName: firstNameRef.current?.value || '',
          password: passwordRef.current?.value || ''
        }
      });
      setOpen(false);
      successLogin();
    } catch (e: any) {
      if (e.status === 400 || e.status === 401) {
        alert(typeAction === "Sign" ? "User already exists" : "User not found");
      }
      console.error(e);
    }
  }
  return (
    <Modal
      open={open}
      onClose={() => close()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmitLogin}>
          <TextField label="FirstName" inputRef={firstNameRef} fullWidth sx={textFieldStyle} />
          <TextField label="Password" inputRef={passwordRef} type="password" fullWidth sx={textFieldStyle} />
          <Button type="submit" variant="contained"
            sx={buttonStyle}
          >
            {typeAction}
          </Button>
        </form>
      </Box>
    </Modal>
  )
}
export default Login;