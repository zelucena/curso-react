import React, { useReducer, createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import Reducer from './reducer'
import * as filtros from './filtros'

const Context = createContext(null)

export const useFiltro = () => {
    return Context
}

export const FiltroProvider = ({ children }) => {
    const [filtro, dispatch] = useReducer(Reducer, filtros.FILTRO_TODOS)
    return (
        <Context.Provider value={{
            filtro, dispatch
        }}>
            {children}
        </Context.Provider>
    )
}

FiltroProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export const useFiltroContext = () => {
    const context = useContext(Context)

    if (!context){
        throw new Error("Deve ser utilizado dentro de FiltroContext")
    }

    return context
}
