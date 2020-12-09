import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import routes from './routes'

const AppRouter = () => {
    const history = createBrowserHistory();
    
    return (
        <Router history={history}>
            <Switch>
                {routes.map(({layout: Layout, component: Component, ...route}, index) => 
                        <Route
                            {...route}
                            key={index}
                            render={() => (
                                <Layout>
                                    <Component />
                                </Layout>
                            )}
                        />
                )}
            </Switch>
        </Router>
    );
}

export default AppRouter;