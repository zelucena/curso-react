import * as types from './types'
import * as actions from './actions'

export default function reducer (state, action) {
    switch (action.type) {
    case types.ADD_TODO:
        return actions.addTodo(state, action.payload)
    case types.REMOVE_TODO:
        return actions.removeTodo(state, action.payload)
    case types.TOGGLE_STATUS:
        return actions.toggleStatus(state, action.payload)
    case types.SET_TODO_TITLE:
        return actions.setTodoTitle(state, action.payload)
    default:
        throw new Error('Action não definida')
    }
}
