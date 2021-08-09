// Other
import { forecastTypes } from '../types';

export const forecastActions = Object.freeze({
    setForecast: (id) => {
        return {
            type:    forecastTypes.SET_SELECT_ID,
            payload: id,
        };
    },
});
