// Other
import { filterTypes } from '../types';

const initialState = {
    filterData: {
        sky:            '',
        maxTemperature: '',
        minTemperature: '',
    },
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
    case filterTypes.SET_FILTER: {
        return {
            ...state,
            filterData: {
                sky:            action.payload.sky,
                maxTemperature: action.payload.maxTemperature,
                minTemperature: action.payload.minTemperature,
            },
        };
    }
    case filterTypes.RESET_FILTER:
        return {
            ...state,
            filterData: {
                sky:            '',
                maxTemperature: '',
                minTemperature: '',
            },
        };
    default:
        return state;
    }
};
