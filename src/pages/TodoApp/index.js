import React from 'react'
import TodoCreator from 'pages/TodoApp/containers/TodoCreator'
import TodoList from 'pages/TodoApp/containers/TodoList'
import { TodoProvider } from 'pages/TodoApp/state/Todo'
export default function TodoApp () {
    return (
        <TodoProvider>
            <h1>Adicionar tarefas...</h1>
            <TodoCreator />
            <TodoList />
        </TodoProvider>
    )
}
