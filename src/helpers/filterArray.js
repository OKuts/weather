export const getFilteredForecast = (weatherData, { sky, maxTemperature, minTemperature }) => {
    if (!weatherData) return [];

    return weatherData.filter((day) => {
        if (maxTemperature && day.temperature <= maxTemperature) return false;
        if (maxTemperature && day.temperature >= minTemperature) return false;
        if (sky && day.type !== sky) return false;

        return true;
    }).slice(0, 7);
};
