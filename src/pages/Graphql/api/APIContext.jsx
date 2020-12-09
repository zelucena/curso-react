import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import client from './client'
import * as queries from './queries'
import * as mutations from './mutations'

const Context = createContext()

export function useAPI () {
    return { client, queries, mutations }
}

export function APIProvider({ children }){
    return (
        <Context.Provider value={{
            client,
            queries,
            mutations,
        }}>
            {children}
        </Context.Provider>
    )
}

APIProvider.propTypes = {
    children: PropTypes.any.isRequired
}

export function useAPIContext() {
    const context = useContext(Context)

    if (!context){
        throw new Error('useAPIProvider deve ser utilizado dentro de um APIProvider')
    }
    return context
}