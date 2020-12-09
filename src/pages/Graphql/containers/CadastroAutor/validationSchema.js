import * as yup from 'yup'

export default yup.object().shape({
    authorName: yup
        .string()
        .trim()
        .required("Campo obrigatório")
})