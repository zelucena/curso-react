import React, { useCallback } from 'react'
import { useTodoContext, types } from 'pages/TodoApp/state/Todo'
import { Row, Col, Table } from 'react-bootstrap'
import TodoItem from 'pages/TodoApp/components/TodoItem'
export default function TodoList () {
    const { todos, dispatchToTodos } = useTodoContext()

    const handleDelete = useCallback(id => {
        dispatchToTodos({type: types.REMOVE_TODO, payload: { id }})
    }, [dispatchToTodos])

    const handleToggleStatus = useCallback(id => {
        dispatchToTodos({type: types.TOGGLE_STATUS, payload: { id }})
    }, [dispatchToTodos])

    return (
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
                        {todos.map((todo, index) =>
                            (
                            <tr key={todo.id}>
                                <TodoItem
                                    index={index}
                                    todo={todo}
                                    handleDelete={() => handleDelete(todo.id)}
                                    handleToggleStatus={() => handleToggleStatus(todo.id)}
                                />
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}