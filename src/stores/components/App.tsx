import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AppMain from './AppMain';
import Recipe from '../../components/Recipe';

import styled from '@emotion/styled';

const AppContainer = styled.div`
    margin: 0 auto;
    text-align: center;
`;

export default class App extends React.Component {
    render() {
        return (
            <AppContainer>
                <HashRouter>
                    <Switch>
                        <Route
                            path="/"
                            component={AppMain}
                            exact={true}
                        />
                        <Route
                            path="/recipe/:id"
                            component={Recipe}
                        />
                    </Switch>
                </HashRouter>
        </AppContainer>
        )
    }
};