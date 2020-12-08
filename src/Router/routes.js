import TodoApp from 'pages/TodoApp';
import Graphql from 'pages/Graphql';
import { Status404 } from 'pages/StatusHTML';
import DefaultLayout from 'Layout'

export default [
    {
        path: '/',
        exact: true,
        Component: TodoApp,
        Layout: DefaultLayout,
    },
    {
        path: '/graphql',
        exact: true,
        Component: Graphql,
        Layout: DefaultLayout,
    },
    {
        Component: Status404,
        Layout: DefaultLayout,
    }
]