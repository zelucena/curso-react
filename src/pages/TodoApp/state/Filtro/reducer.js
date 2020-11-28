import * as types from './types'
import * as actions from './actions'

export default function reducer(state, action) {
    switch (action.type) {
        case types.TOGGLE_FILTER:
            return actions.toggleFilter(state, action.payload)
        default:
            throw new Error('Ação não definida')
    }
}
