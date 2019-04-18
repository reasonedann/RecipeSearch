import React from 'react';

import { RouteComponentProps, NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';

import { AppStore } from './AppStore';
import AppContext from './AppStore';

import styled from '@emotion/styled';

const Image = styled.img`
    max-width: 450px;
    max-height: 450px;
    padding: 40px 0 30px;
    border-radius: 5px;
`;
const SmallButton = styled.button`
    width: 100px;
    height: 30px;
    background: whitesmoke;
    text-decoration: none;
    font-size: 13px;
    border: 1px solid lightgray;
    border-radius: 5px;
    font-weight: 400;
    :hover {
        background-color: lightgray;
    }
    a  {
        text-decoration: none;
    }
`;
const RecipeTitle = styled.h3`
    text-transform: uppercase;
    padding-bottom: 20px;
`;
const PublisherName = styled.h4`
    padding: 15px 0 10px;
`;
const Web = styled.p`
    padding: 5px 0 30px;
`;

interface RecipePropsTypes {
    store: AppStore,
    recipeId: string
};


@observer
class Recipe extends React.Component<RecipePropsTypes> {

    componentDidMount = () => {
        const recipeId = this.props.recipeId;

        this.props.store.getSingleRecipe(recipeId);
    };

    render() {
        const recipe = this.props.store.activeRecipe;
        return (
            <div>
                {recipe &&
                    <div>
                        <Image src={recipe.image_url} alt={recipe.title}/>
                        <RecipeTitle>{recipe.title}</RecipeTitle>
                        <PublisherName>Publisher: {recipe.publisher}</PublisherName>
                        <Web>Website: <a href={recipe.publisher_url}>{recipe.publisher_url}</a></Web>
                        <NavLink to="/"><SmallButton>Go Home</SmallButton></NavLink>
                    </div>
                }
            </div>
        )
    }
};

export default (props: RouteComponentProps & {match: {params: {id: string}}}) =>
    <AppContext.Consumer>
        {(store) => <Recipe store={store} recipeId={props.match.params.id}/>}
    </AppContext.Consumer>;