import * as types from './types'

export function toggleFilter (filter) {
    return {
        type: types.TOGGLE_FILTER,
        payload: {
            filter
        }
    }
}
