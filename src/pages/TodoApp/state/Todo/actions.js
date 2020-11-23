import { v4 as uuidv4 } from 'uuid'

export function addTodo (state, payload) {
    const { title } = payload

    const todo = { id: uuidv4(), title, completed: false }
    return [
        ...state,
        todo
    ]
}

export function toggleStatus (state, payload) {
    const { id } = payload

    return state.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo;
    })
}

export function setTodoTitle (state, payload) {
    const { id, title } = payload

    return state.map(todo => {
        if (todo.id === id) {
            todo.title = title
        }
        return todo
    })
}

export function removeTodo (state, payload) {
    const { id } = payload
    return state.filter(todo => todo.id !== id)
}
