import React from 'react'
import { TodoCreator, TodoList, TodoFilter } from 'pages/TodoApp/containers'
import { TodoProvider } from 'pages/TodoApp/state/Todo'
import { FiltroProvider } from 'pages/TodoApp/state/Filtro'

export default function TodoApp() {
    return (
        <TodoProvider>
            <FiltroProvider>
                <h1>Adicionar tarefas...</h1>
                <TodoCreator />
                <TodoList />
                <TodoFilter />
            </FiltroProvider>
        </TodoProvider>
    )
}
