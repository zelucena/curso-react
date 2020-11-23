import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import Context from './Context'
import Reducer from './reducer'

export default function Provider ({ children }) {
    const [filter, dispatchToFilter] = useReducer(Reducer, 'all')
    return (
        <Context.Provider value={{
            filter, dispatchToFilter
        }}>
            {children}
        </Context.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.node.isRequired
}
