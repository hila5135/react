import { createBrowserRouter } from "react-router"
import HomePage from "./components/HomePage"
import AppLayout from "./components/AppLayout"
import AllRecipes from "./components/AllRecipes"
import AddRecipe from "./components/AddRecipe"
import Recipe from "./components/Recipe"



export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <>main error</>,
        children:
            [
                {
                    path: '/allRecipes', element: <AllRecipes />, children:
                        [{
                            path: ':id', element: <Recipe />
                        }]
                },
                { path: '/addRecipe', element: <AddRecipe /> },

            ]

    }

])
export default myRouter;

