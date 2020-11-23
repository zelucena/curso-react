import * as types from './types'

export default function reducer (_, action) {
    switch (action.type) {
    case types.TOGGLE_FILTER:
        return action.payload.filter
    default:
        throw new Error('Action não definida')
    }
}
