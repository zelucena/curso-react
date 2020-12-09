import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-apollo'
import { Form, Row, Col, Button, Modal } from 'react-bootstrap'
import { toast } from 'react-toastify'
import defaultValues from './defaultValues'
import validationSchema from './validationSchema'
import { useAPIContext } from 'pages/Graphql/api/APIContext'


const CadastroAutor = ({show, handleClose}) => {
    const { mutations, queries } = useAPIContext()
    const [adicionarAutor] = useMutation(mutations.ADICIONAR_AUTOR)
    const { handleSubmit, errors, register, formState } = useForm({
        defaultValues,
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = values => {
        adicionarAutor({
            variables: {
                name: values.authorName,
            },
            refetchQueries: [{ query: queries.AUTHORS }]
        }).catch(e => {
            toast.error(e.message)
        })
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor="authorName">Autor</Form.Label>
                                <Form.Control
                                    name="authorName"
                                    id="authorName"
                                    autoComplete="off"
                                    ref={register}
                                    isInvalid={errors?.authorName}
                                />
                                <Form.Control.Feedback type="invalid">{errors?.authorName?.message}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Modal.Footer>
                        <Row className="align-items-center">
                            <Col>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    disabled={formState.isSubmitting}
                                >
                                    Enviar
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    variant="danger"
                                    onClick={handleClose}
                                    disabled={formState.isSubmitting}
                                >
                                    Cancelar
                                </Button>
                            </Col>
                        </Row>
                    </Modal.Footer>
                </Modal.Body>
            </Form>
        </Modal>
    )
}

export default CadastroAutor

CadastroAutor.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func.isRequired,
}

CadastroAutor.defaultValues = {
    show: false,
}