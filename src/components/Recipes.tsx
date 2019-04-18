import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Spinner from './Spinner';
import { RecipeType } from '../stores/AppStore';

import styled from '@emotion/styled';

const Wrapper = styled.div`
    max-width: 1400px;
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
    justify-content: space-around;
    align-items: flex-start;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 350px;
    padding: 0 10px 20px;
`;
const Image = styled.img`
    max-width: 300px;
    max-height: 300px;
`;
const Text = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    align-items: flex-start;
`;
const RecipeTitle = styled.h4`
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
`;
const Publisher = styled.h5`
    color: darkgrey;
    font-size: 15px;
    padding-top: 10px;
    font-weight: 500px;
    span {
        text-transform: uppercase;
    }
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
        color: black;
    }
`;

interface RecipesPropsTypes {
    recipes: Array<RecipeType>,
    loading: boolean
}

class Recipes extends React.Component<RecipesPropsTypes> {
    render() {
        return (
            <Wrapper>
                {
                    this.props.loading ? <Spinner />
                    : this.props.recipes.map((recipe) => {
                        return (
                            <Container key={recipe.recipe_id}>
                                <Image src={recipe.image_url} alt={recipe.title}/>
                                <Text>
                                    <RecipeTitle>{recipe.title.length < 25 ? `${recipe.title}` : `${recipe.title.substring(0, 20)}...`}</RecipeTitle>
                                    <Publisher><span>Publisher: </span>{recipe.publisher}</Publisher>
                                </Text>
                                <NavLink to={{
                                        pathname: `/recipe/${recipe.recipe_id}`,
                                        state: { recipe: recipe.title }
                                        }}><SmallButton>View Recipe</SmallButton>
                                </NavLink>
                            </Container>
                        )
                    })
                }
            </Wrapper>
        )
    }
};

export default Recipes;