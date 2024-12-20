import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    nickname: yup.string().required(),
});
