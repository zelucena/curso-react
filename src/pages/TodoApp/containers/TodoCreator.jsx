import React, { useRef, useEffect } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { useFormik } from 'formik'
import { useTodoContext, types as todoTypes } from 'pages/TodoApp/state/Todo'
import validationSchema from 'pages/TodoApp/validationSchema'

export default function TodoCreator () {
    const inputRef = useRef(null)

    const { dispatchToTodos } = useTodoContext();
    const { handleSubmit, getFieldProps, errors } = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema,
        validateOnMount: true,
        validateOnChange: true,
        validateOnBlur: false,
        onSubmit: (values, { setFieldValue }) => {
            dispatchToTodos({type: todoTypes.ADD_TODO, payload: values});
            setFieldValue('title', '', false)
        }
    })

    useEffect(() => {
        inputRef.current.focus()
    }, []);

    return (
        <Form onSubmit={handleSubmit} className="mb-4">
            <Row>
                <Col>
                <Form.Group>
                    <Form.Control
                        type="text"
                        autoComplete="off"
                        placeholder="Nova tarefa..."
                        ref={inputRef}
                        isInvalid={errors.title}
                        {...getFieldProps('title')}
                    />
                    <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
                </Form.Group>          
            </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <Button
                        type="submit"
                        variant="primary"
                    >
                        Adicionar tarefa
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
    