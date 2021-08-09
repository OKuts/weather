import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
// Instruments
import { forecastActions } from '../lib/redux/actions';
import { getActiveForecast } from '../lib/redux/selectors';

export const Forecast = ({ weatherList }) => {
    const dispatch = useDispatch();
    const activeForecast = useSelector(getActiveForecast);

    const handleForecastSelect = (id) => {
        dispatch(forecastActions.setForecast(id));
    };

    const weatherListJSX = weatherList.map((item, i) => {
        const { id, type } = item;

        return (
            <div
                key = { id }
                className = {
                    // eslint-disable-next-line no-mixed-operators
                    i === 0 && !activeForecast || id === activeForecast
                        ? `${type} day selected`
                        : `${type} day` }
                onClick = { () => handleForecastSelect(id) }>
                <p>{ format(item.day, 'eeee', { locale: ru }) }</p>
                <span>{ item.temperature }</span>
            </div>
        );
    });

    return (
        <div className = 'forecast'>
            { weatherListJSX }
        </div>
    );
};
