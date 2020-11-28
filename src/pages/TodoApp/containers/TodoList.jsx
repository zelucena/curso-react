import React, { useState, useCallback } from 'react'
import { useTodoContext, types, models } from 'pages/TodoApp/state/Todo'
import { filtros, useFiltroContext } from 'pages/TodoApp/state/Filtro'
import { Row, Col, Table } from 'react-bootstrap'
import { TodoItem, ModalItem } from 'pages/TodoApp/components'
import swal from 'sweetalert'

export default function TodoList () {
    const [modal, setModal] = useState(null);
    const [currentTodo, setCurrentTodo] = useState(models.todo);
    const { todos, dispatchToTodos } = useTodoContext()
    const { filtro } = useFiltroContext();

    const handleDelete = useCallback(id => {
        swal({
            title: "Você deseja deletar?",
            text: "Ao deletar, o item não pode ser recuperado!",
            icon: "warning",
            buttons: ["Cancelar", "OK"],
            dangerMode: true,
          })
          .then(continuar => {
            if (continuar) {
                dispatchToTodos({type: types.REMOVE_TODO, payload: { id }})
            }
          })
    }, [dispatchToTodos])

    const handleToggleStatus = useCallback(id => {
        dispatchToTodos({type: types.TOGGLE_STATUS, payload: { id }})
    }, [dispatchToTodos])

    const handleEdit = todo => {
        setModal(true);
        setCurrentTodo(todo);
    }

    const onModalConfirm = todo => {
        dispatchToTodos({type: types.SET_TODO_TITLE, payload: todo})
        setModal(false)
    }

    const onModalClose = () => {
        setModal(false)
    }

    return (
    <>
        {modal && <ModalItem
            show={modal}
            todo={currentTodo}
            onModalConfirm={onModalConfirm}
            onModalClose={onModalClose}
        />}
        <Row>
            <Col>
                <Table striped hover >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tarefa</th>
                            <th>Completado</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.reduce((filtrados, todo, index) => {
                            if (filtro === filtros.FILTRO_ABERTOS && todo.completed){
                                return filtrados;
                            }
                            if (filtro === filtros.FILTRO_COMPLETADOS && !todo.completed) {
                                return filtrados;
                            }
                            filtrados.push((
                                <tr key={todo.id}>
                                    <TodoItem
                                        index={index}
                                        todo={todo}
                                        handleEdit={() => handleEdit(todo)}
                                        handleDelete={() => handleDelete(todo.id)}
                                        handleToggleStatus={() => handleToggleStatus(todo.id)}
                                    />
                                </tr>
                            ))
                            return filtrados;
                        }, [])}
                    </tbody>
                </Table>
            </Col>
        </Row>
    </>
    )
}