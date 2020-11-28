import React from 'react';
import { useFormik } from 'formik'
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'react-bootstrap';
import validationSchema from 'pages/TodoApp/validationSchema'

const ModalItem = ({ show, todo, onModalClose, onModalConfirm }) => {
    const { getFieldProps, errors, handleSubmit } = useFormik({
        initialValues: {
            title: todo.title,
        },
        validationSchema,
        onSubmit: (values, formikBag) => {
            onModalConfirm({...todo, ...values});
            formikBag.setFieldValue('title', '', false);
        }
    });
    return (
        <Modal show={show} onHide={onModalClose}>
            <form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Editar item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    type="text"
                    autoComplete="off"
                    isInvalid={errors.title}
                    {...getFieldProps('title')}
                />
                <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={onModalClose}
                    type="button"
                >
                    Fechar
                </Button>
                <Button
                    variant="primary"
                    type="submit"
                >
                    Salvar alterações
                </Button>
            </Modal.Footer>
            </form>
        </Modal>
    )
}

export default ModalItem;

ModalItem.propTypes = {
    show: PropTypes.bool,
    todo: PropTypes.objectOf(PropTypes.object),
    onModalClose: PropTypes.func.isRequired,
    onModalConfirm: PropTypes.func.isRequired,
}

ModalItem.defaultProps = {
    show: false,
}