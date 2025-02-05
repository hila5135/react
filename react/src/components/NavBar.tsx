import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./userContext";
const NavBar = () => {
    const context = useContext(UserContext);
    return (
        <>
            <nav style={{ position: "fixed", top: "5px", right: "50px", display: "flex", gap: "30px" }}>
                <Link to='/' style={{ color: "#4dd0e1"}}>Home</Link>
                <Link to='/allRecipes'  style={{ color: "#4dd0e1"}}>Show-Recipes</Link>
                {context?.user && context.user.id && (<Link to='/addRecipe' style={{ color: "#4dd0e1"}}>Add-Recipe</Link>)}
            </nav>

        </>
    )

}
export default NavBar;