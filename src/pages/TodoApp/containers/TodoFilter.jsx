import React from 'react'
import { Form } from 'react-bootstrap'
import { filtros, useFiltroContext, types } from 'pages/TodoApp/state/Filtro'

const TodoFilter = () => {
    const { dispatch } = useFiltroContext();

    const handleChange = event => {
        const { value } = event.target;
        dispatch({type: types.TOGGLE_FILTER, payload: value})   
    }

    return (
        <Form.Control as="select" onChange={handleChange}>
            <option value={filtros.FILTRO_TODOS}>Todos</option>
            <option value={filtros.FILTRO_COMPLETADOS}>Completados</option>
            <option value={filtros.FILTRO_ABERTOS}>Em aberto</option>
        </Form.Control>
    )
}

export default TodoFilter;