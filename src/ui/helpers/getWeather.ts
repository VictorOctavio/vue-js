import axios from "axios"

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-27.4678&longitude=-58.8344&hourly=temperature_2m'

export const getTemperature = async () => {
    const response = await axios.get(API_URL);
    return response.data.hourly.temperature_2m[0];
}