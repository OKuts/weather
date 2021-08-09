import React  from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// Instruments
import { filterActions } from '../lib/redux/actions';

export const Filter = () => {
    const dispatch = useDispatch();

    const defaultValues = {
        minTemperature: '',
        maxTemperature: '',
        sky:            '',
        isRadio:        false,
        isSubmittedMy:  false,
    };
    const {
        register, reset, handleSubmit, getValues, setValue, watch,
        formState: { isDirty },
    } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    const toggleFilter = handleSubmit((values) => {
        const { maxTemperature, minTemperature, sky } = values;
        dispatch(filterActions.setFilter({ maxTemperature, minTemperature, sky }));
        if (getValues('isSubmittedMy')) {
            dispatch(filterActions.resetFilter());
            reset(defaultValues);
        } else {
            setValue('isSubmittedMy', true);
        }
    });

    const changeSky = (skyType) => {
        if (!getValues('isSubmittedMy')) {
            setValue('isRadio', true);
            setValue('sky', skyType);
        }
    };

    return (
        <form onSubmit = { toggleFilter }>
            <div className = 'filter'>
                <span
                    { ...register('sky')  }
                    onClick = { () =>  changeSky('cloudy') }
                    className = { `checkbox ${watch('sky') === 'cloudy'  && 'selected'}` }>
                    Облачно
                </span>
                <span
                    { ...register('sky')  }
                    onClick = { () => changeSky('sunny') }
                    className = { `checkbox ${watch('sky') === 'sunny' && 'selected'}` }>
                    Солнечно
                </span>
                <p className = 'custom-input'>
                    <label htmlFor = 'min-temperature'>Минимальная температура</label>
                    <input
                        disabled = { getValues('isSubmittedMy') }
                        onInput = { (event) => setValue('minTemperature', event.target.value) }
                        id = 'min-temperature'
                        type = 'number'
                        { ...register('minTemperature')  } />
                </p>
                <p className = 'custom-input'>
                    <label htmlFor = 'max-temperature'>Максимальная температура</label>
                    <input
                        disabled = { getValues('isSubmittedMy') }
                        onInput = { (event) => setValue('maxTemperature', event.target.value) }
                        id = 'max-temperature'
                        type = 'number'
                        { ...register('maxTemperature') } />
                </p>
                <button
                    disabled = { !isDirty && !getValues('isRadio') }
                    type = 'submit'>
                    { !getValues('isSubmittedMy') ? 'Отфильтровать' : 'Сбросить' }
                </button>
            </div>
        </form>
    );
};
