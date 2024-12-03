import axios from "axios"

// const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-27.4678&longitude=-58.8344&hourly=temperature_2m'

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-27.4678&longitude=-58.8344&current=temperature_2m&timezone=auto&forecast_days=1'

export const getTemperature = async () => {
    const response = await axios.get(API_URL);    
    return response.data.current.temperature_2m;
}