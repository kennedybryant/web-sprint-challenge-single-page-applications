import * as yup from 'yup';

export default yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required'),

    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'Size is required'),

    pepperoni: yup  
        .boolean(),
    meatballs: yup
        .boolean(),
    bacon: yup
        .boolean(),
    sausage: yup 
        .boolean(),

    instructions: yup
        .string()
})