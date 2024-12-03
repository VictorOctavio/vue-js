import { defineStore } from "pinia";
import { ref } from "vue";

interface Weather {
    temperature: number,
    description: string,
    icon: string,
}

export const useWeatherStore = defineStore('weather', () => {  
    const weather = ref<Weather>({
        temperature: 0,
        description: '',
        icon: '',
    })

    const setTepmerature = (temperature: number) => {
        weather.value.temperature = temperature;
    }

    return { weather, setTepmerature }
})