import * as React from 'react';
import { observable, action, computed } from 'mobx';

export const API_key = '5564c17e1d8b80a0525061786ac5e2e8';

export interface RecipeType {
    f2f_url: string,
    image_url: string,
    publisher: string,
    publisher_url: string,
    recipe_id: string,
    social_rank: number,
    source_url: string,
    title: string
};

export class AppStore {

    @observable recipes: Array<RecipeType> = [];

    @observable activeRecipe: RecipeType | null = null;

    @action getRecipes = async (searchItem: string) => {
        const API_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_key}&q=${searchItem}&count=12`);
        const data = await API_call.json();

        this.recipes = data.recipes;
    };

    @action getSingleRecipe = async (recipe_id: string) => {
        const req = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_key}&rId=${recipe_id}`);
        const res = await req.json();

        this.activeRecipe = res.recipes[0];
        console.log('blabla ze stora', this.activeRecipe)
    };

};

export default React.createContext(
    new AppStore()
);