/* Core */
import { useQuery } from 'react-query';

/* Other */
import { api } from '../api';

export const useGetWeatherData = () => {
    const query = useQuery('data', api.getWeather);

    return query;
};
