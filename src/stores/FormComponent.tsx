import * as React from 'react';

import styled from '@emotion/styled';

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    margin: auto;
    width: 100%;
    max-width: 600px;
`;
const Button = styled.button`
    margin-left: 15px;
    height: 48px;
    width: 100px;
    font-size: 18px;
    font-weight: 500;
    color: black;
    background-color: whitesmoke;
    border-radius: 5px;
    :hover {
        background: lightgray;
    }
`;
const Input = styled.input`
    border: 0;
    min-width: 400px;
    height: 48px;
    font-size: 20px;
    font-weight: 500;
    border-bottom: 2px solid darkgray;
    color: #223254;
    padding-left: 10px;
`;

interface FormPropsTypes {
    getRecipe: (e: any) => void;
};

class FormComponent extends React.Component<FormPropsTypes> {

    searchInput: HTMLInputElement | null;

    constructor(props: FormPropsTypes) {
        super(props);
        this.searchInput = null;
    }

    handleFormSubmit = (e: any) => {
        e.preventDefault();
        const recipeName = e.target.elements.namedItem('searchItem').value;

        this.props.getRecipe(recipeName);

        if (this.searchInput) {
            this.searchInput.value = '';
        }
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>
                    <Input type="text" name="searchItem" placeholder="Enter recipe name..." ref={el => this.searchInput = el} />
                    <Button>Search</Button>
                </Form>
            </div>
        )
    }
};

export default FormComponent;
