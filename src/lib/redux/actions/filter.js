// Other
import { filterTypes } from '../types';

export const filterActions = Object.freeze({
    setFilter: (filterWeather) => {
        return {
            type:    filterTypes.SET_FILTER,
            payload: filterWeather,
        };
    },
    resetFilter: () => {
        return {
            type: filterTypes.RESET_FILTER,
        };
    },
});
