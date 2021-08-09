import React from 'react';
// Instruments

export const Current_weather = ({ selectedDayData }) => {
    const { temperature, rain_probability, humidity } = selectedDayData;

    return (
        <div className = 'current-weather'>
            <p className = 'temperature'>{ temperature }</p>
            <p className = 'meta'>
                <span className = 'rainy'>{ `% ${rain_probability}` }</span>
                <span className = 'humidity'>{ `% ${humidity}` }</span>
            </p>
        </div>
    );
};
