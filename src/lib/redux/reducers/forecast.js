// Other
import { forecastTypes } from '../types';

const initialState = {
    selectDateId: null,
};

export const forecastReducer = (state = initialState, action) => {
    switch (action.type) {
    case forecastTypes.SET_SELECT_ID: {
        return {
            ...state,
            selectDateId: action.payload,
        };
    }
    default: {
        return state;
    }
    }
};
