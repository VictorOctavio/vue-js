import { defineStore } from "pinia";
import { ref } from "vue";

type RegisterForm = {
    nickname: string,
    email: string,
}

export const useRegisterStore = defineStore('register', () => {
    
    const registerForm = ref<RegisterForm>({
        nickname: '',
        email: '',
    })


    const saveRegisterForm = (form: RegisterForm) => {
        registerForm.value = form;
    }


    return { saveRegisterForm, registerForm }
})