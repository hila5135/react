import axios from "axios"
import { makeAutoObservable } from "mobx"

export type RecipeType = {
    id: string,
    title: string,
    description: string,
    authorId: string,
    ingredients: string[],
    instructions: string
}

class RecipesStore {
    list: RecipeType[] = [];
    constructor() {
        makeAutoObservable(this);
        this.getRecipes();
    }
    async getRecipes() {
        try {
            const res = await axios.get('http://localhost:3000/api/recipes/');
            this.list = res.data;
        } catch (e: any) {
            if (e.status == 401)
                alert("something not good")
            console.log(e)
        }
    }
    async addRecipe(recipe: RecipeType, author: string) {
        try {
            const res = await axios.post('http://localhost:3000/api/recipes/',
                {
                    title: recipe.title,
                    description: recipe.description,
                    ingredients: recipe.ingredients,
                    instructions: recipe.instructions
                }
                , { headers: { "user-id": author }, }
            )
            this.getRecipes();
        } catch (e: any) {
            if (e.status != 201)
                alert('Error:recipe not added');
            console.log(e);
        }
    }
    getRecipeById(id: string) {
        return this.list.find(r => r.id == id);
    }
}

export default new RecipesStore()