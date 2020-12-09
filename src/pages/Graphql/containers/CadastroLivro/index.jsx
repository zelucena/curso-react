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


const CadastroLivro = ({authorsQuery, show, handleClose}) => {
    const { mutations, queries } = useAPIContext()
    const [adicionarLivro] = useMutation(mutations.ADICIONAR_LIVRO)
    const { handleSubmit, errors, register, formState } = useForm({
        defaultValues,
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = values => {
        adicionarLivro({
            variables: {
                title: values.titulo,
                authorsId: [values.autor],
            },
            refetchQueries: [{ query: queries.BOOKS }]
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
                                <Form.Label htmlFor="titulo">Título</Form.Label>
                                <Form.Control
                                    name="titulo"
                                    id="titulo"
                                    autoComplete="off"
                                    ref={register}
                                    isInvalid={errors?.titulo}
                                />
                                <Form.Control.Feedback type="invalid">{errors?.titulo?.message}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor="autor">Autor</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="autor"
                                    id="autor"
                                    ref={register}
                                    isInvalid={errors?.autor}
                                >
                                    {authorsQuery?.data?.authors?.map(autor => (
                                        <option key={autor.id} value={autor.id}>{autor.name}</option>
                                    ))}
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">{errors?.autor?.message}</Form.Control.Feedback>
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

export default CadastroLivro

CadastroLivro.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func.isRequired,
    authorsQuery: PropTypes.object.isRequired,
}

CadastroLivro.defaultValues = {
    show: false,
}