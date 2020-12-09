import TodoApp from 'pages/TodoApp';
import Graphql from 'pages/Graphql';
import { Status404 } from 'pages/StatusHTML';
import DefaultLayout from 'Layout'

export default [
    {
        path: '/',
        exact: true,
        component: TodoApp,
        layout: DefaultLayout,
    },
    {
        path: '/graphql',
        exact: true,
        component: Graphql,
        layout: DefaultLayout,
    },
    {
        component: Status404,
        layout: DefaultLayout,
    }
]