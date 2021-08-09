import React from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export const Head = ({ selectedDayData : { day, type } }) => {
    return (
        <div className = 'head'>
            <div className = { `icon ${type}` }></div>
            <div className = 'current-date'>
                <p>{ format(day, 'eeee', { locale: ru }) }</p>
                <span>
                    { `${format(day, 'd')} ${format(day, 'MMMM', { locale: ru })}` }
                </span>
            </div>
        </div>
    );
};
