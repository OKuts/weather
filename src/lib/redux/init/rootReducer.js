// Core
import { combineReducers } from 'redux';

// Reducers
import {
    filterReducer as filter,
    forecastReducer as forecast,
} from '../reducers';

export const rootReducer = combineReducers({
    filter, forecast,
});
