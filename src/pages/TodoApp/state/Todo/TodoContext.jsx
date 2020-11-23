import React, { useReducer, createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import reducer from './reducer'

const Context = createContext();

export function TodoProvider ({ children }) {
    const [todos, dispatchToTodos] = useReducer(reducer, [])
    return (
        <Context.Provider value={{
            todos, dispatchToTodos
        }}>
            {children}
        </Context.Provider>
    )
}

export function useTodoContext() {
    const context = useContext(Context);
    if (!context) {
        throw new Error("Deve utilizar dentro de um TodoContext")
    }
    return context;
}

TodoProvider.propTypes = {
    children: PropTypes.node.isRequired
}
