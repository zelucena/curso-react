import * as yup from 'yup'

export default yup.object().shape({
    titulo: yup
        .string()
        .trim()
        .required("Campo obrigatório"),
    autor: yup
        .string()
        .trim()
        .required("Campo obrigatório"),
})