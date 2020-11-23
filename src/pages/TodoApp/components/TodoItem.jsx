import React from 'react'
import { Button, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
export default function TodoItem({ index, handleToggleStatus, handleDelete, todo }) {
    const { title, completed } = todo

    return (
        <>
            <td>
                {index}
            </td>
            <td>
                <span className={completed ? "text-muted" : ""}>{title}</span>
            </td>
            <td>
                <Form.Check
                    type="checkbox"
                    value={completed}
                    onChange={handleToggleStatus}
                />
            </td>
            <td>
                <Button
                    type="button"
                    variant="danger"
                    size="sm"
                    className="ml-2"
                    onClick={handleDelete}
                >
                    Deletar
                </Button>
            </td>
        </>
    )
}

TodoItem.propTypes = {
    index: PropTypes.number,
    handleDelete: PropTypes.func.isRequired,
    handleToggleStatus: PropTypes.func.isRequired,
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }),
}