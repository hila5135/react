import { User, userReducer } from "./user";
import { useReducer } from "react";
import { UserContext } from "./userContext";
import Login from "./login";
import { useState } from "react";
import Username_avatar from "./username_avatar";
import { Box, Button } from "@mui/material";
import { cyan } from "@mui/material/colors";


const HomePage = () => {

    const initialUser: User = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        phone: ''
    }
    const [isLogin, setIsLogin] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [type, setType] = useState('Login');

    const handleLoginSuccess = () => {
        setIsLogin((prev) => {
            if (!prev) setIsLoginOpen(false);
            return !prev;
        });
    }
    return (<>
        {!isLogin && (
            <Box
                sx={{ position: "absolute", top: 10, left: 10, display: "flex", gap: 2 }}>
                <Button variant="contained"
                    sx={{
                        background: "black", color: "white",
                        borderRadius: "10px", border: `2px solid ${cyan[300]}`,
                        "&:hover": { backgroundColor: "white", borderColor: cyan[300], color: "#4dd0e1" },
                    }}
                    onClick={() => { setIsLoginOpen(true); setType('Sign'); }}>
                    Sign
                </Button>

                <Button
                    variant="contained"
                    sx={{
                        background: "black", color: "white",
                        borderRadius: "10px", border: `2px solid ${cyan[300]}`,
                        "&:hover": { backgroundColor: "white", borderColor: cyan[300], color: "#4dd0e1" },
                    }}
                    onClick={() => { setIsLoginOpen(true); setType('Login'); }}
                >
                    Login
                </Button>
            </Box>

        )
        }

        {isLoginOpen && <Login successLogin={handleLoginSuccess} typeAction={type} close={() => setIsLoginOpen(false)} />}
        {isLogin && <Username_avatar />}
    </>)
}
export default HomePage;