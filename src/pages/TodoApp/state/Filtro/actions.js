import * as filtros from './filtros'

export function toggleFilter(_, payload) {
    if (!payload) {
        return filtros.FILTRO_TODOS
    }
    return payload
}
