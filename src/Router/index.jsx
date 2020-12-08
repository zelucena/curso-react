import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from "history"
import routes from './routes'

const AppRouter = () => {
    const history = createBrowserHistory();
    return (
        <BrowserRouter history={history}>
            <Switch>
                {routes.map(({Component, Layout, ...route}, index) => 
                    <Route {...route} key={index} render={() => (
                        <Layout>
                            <Component />
                        </Layout>
                    )} />
                )}
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;