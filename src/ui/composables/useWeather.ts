import { useWeatherStore } from "../stores/weatherStore";
import { getTemperature } from "../helpers/getWeather";

export const useWeather = async () => {

    const { setTepmerature } = useWeatherStore();
    const temperature = await getTemperature();

    // set the temperature in the store
    setTepmerature(temperature)
};
