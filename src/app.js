import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Components
import {
    Current_weather, Filter, Forecast, Head,
} from './components';
// Instruments
import { useGetWeatherData } from './hooks';
import { getActiveForecast, getFilterData } from './lib/redux/selectors';
import { forecastActions } from './lib/redux/actions';
import { getFilteredForecast } from './helpers';

export const App = () => {
    const { data: weatherData, isFetchedAfterMount } = useGetWeatherData();
    const dispatch = useDispatch();
    const activeDayId = useSelector(getActiveForecast);
    const filterData = useSelector(getFilterData);
    const selectedDayData = weatherData?.find((item) => item.id === activeDayId);
    const filteredWeatherData = getFilteredForecast(weatherData, filterData);

    useEffect(() => {
        if (filteredWeatherData.length) {
            dispatch(forecastActions.setForecast(filteredWeatherData[ 0 ].id));
        }
    }, [isFetchedAfterMount, filterData]);

    useEffect(() => {
        if (!filteredWeatherData[ 0 ]) {
            dispatch(forecastActions.setForecast(null));
        }
    }, [filteredWeatherData]);

    return (
        <main>
            <Filter />
            { filteredWeatherData && activeDayId
                ? (
                    <>
                        <Head selectedDayData = { selectedDayData } />
                        <Current_weather selectedDayData = { selectedDayData } />
                        <Forecast weatherList = { filteredWeatherData } />
                    </>
                )
                : (
                    <div className = 'forecast'>
                        <p className = 'message'>По заданным критериям нет доступных дней</p>
                    </div>
                )
            }
            { !weatherData && <h1>Loading ....</h1> }
        </main>
    );
};
