<template>
    <div class="wrapper">
        <h2>Register Form</h2>
        <Form class="wrapper-form" :validation-schema="validationSchema" @submit="onSubmit">
            <div class="wrapper-form-elem">
                <label for="nickname">Nickname:</label>
                <Field name="nickname" id="nickname" type="text" 
                placeholder="Nickname" />
                <ErrorMessage name="nickname"/>
            </div>
            <div class="wrapper-form-elem">
                <label for="email">Email:</label>
                <Field name="email" id="email" type="text" placeholder="Email"/>
                <ErrorMessage name="email"/>
            </div>
            <button type="submit">Register</button>
        </Form>
    </div>
</template>

<script setup>
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import { validationSchema } from '../schemas/validationSchema';

    const onSubmit = () => {
        console.log('submit..');
        alert('submit..');
    }
</script>

<style scoped>
    .wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .wrapper-form{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .wrapper-form-elem{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 3px;
    }
</style>