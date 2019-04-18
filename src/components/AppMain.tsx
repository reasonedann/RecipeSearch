import React from 'react';
import { observer } from 'mobx-react';

import FormComponent from './FormComponent';
import Recipes from './Recipes';

import { AppStore } from '../stores/AppStore';
import AppContext from '../stores/AppStore';

import styled from '@emotion/styled';


const Title = styled.h1`
    padding: 30px 0;
    font-size: 40px;
    background: silver;
`;

interface AppPropsTypes {
    store: AppStore,
};

@observer
class AppMain extends React.Component<AppPropsTypes> {

    getRecipe = (e: string) => {
        this.props.store.getRecipes(e);
    };

    componentDidMount = () => {
        const json = localStorage.getItem("recipes");
        if (json) {
            const recipes = JSON.parse(json);
            this.props.store.recipes = recipes;
        }
    };

    componentDidUpdate = () => {
        const recipes = JSON.stringify(this.props.store.recipes);
        localStorage.setItem("recipes", recipes);
    };

    render() {
        return (
            <div>
                <Title>Recipe Search</Title>
                <FormComponent getRecipe={this.getRecipe} />
                <Recipes recipes={this.props.store.recipes} loading={this.props.store.loading}/>
            </div>
        )
    }
};

export default () =>
    <AppContext.Consumer>
        {(store) => <AppMain store={store} />}
    </AppContext.Consumer>;