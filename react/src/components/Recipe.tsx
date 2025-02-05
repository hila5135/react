import { observer } from "mobx-react-lite"
import RecipesStore from "./RecipesStore"
import { useParams } from "react-router-dom";

const Recipe = observer(() => {
    const { id } = useParams();
    if (!id) {
        return <div>recipe not found</div>;
    }
    const recipe = RecipesStore.getRecipeById(id);

    return (<>
        {recipe && (
            <div style={{ textAlign: 'left' }}>
                <h3>{recipe.title}</h3>
                <p><strong>Description:</strong> {recipe.description}</p>
                <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
                <p><strong>Instructions:</strong> {recipe.instructions}</p>
            </div>
        )}
    </>)
})

export default Recipe;

