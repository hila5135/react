import RecipesStore from "./RecipesStore";
import { RecipeType } from "./RecipesStore";
import { Box, Button, Grid, Grid2, IconButton, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Outlet, useNavigate } from "react-router-dom"; //  שימוש ב-Outlet ו-useNavigate
import { cyan } from "@mui/material/colors";
const AllRecipes = observer(() => {
    const navigate = useNavigate();

    const handleNavigate = (recipe: RecipeType) => {
        navigate(`${recipe.id}`);
    }

    return (
        <Grid2 container spacing={2} marginLeft={"200px"}>
            <Grid2 size={{ xs: 10, md: 5 }}>
                <Box sx={{ padding: 2 }}>
                    <h2>My Recipes Book</h2>
                    {RecipesStore.list.map((recipe) => (
                        <Button key={recipe.id} onClick={() => handleNavigate(recipe)} fullWidth sx={{ color: cyan[300] }}>
                            {recipe.title}
                        </Button>
                    ))}
                </Box>
            </Grid2>

            <Grid2 size={{ xs: 8, md: 6 }}>
                <Box sx={{
                    padding: 2,
                    border: '1px solid #ccc',
                    height: '100%',
                    boxShadow: '0px 4px 10px rgba(64, 224, 208, 0.5)',
                }}>
                    <Outlet />
                </Box>
            </Grid2>
        </Grid2>
    );
});

export default AllRecipes;
