import { Doughnut } from '@doughnuts-and-dls/api-interfaces';
import axios from 'axios';
import { useQuery } from 'react-query';
import { environment } from '../environments/environment.prod';

const apiClient = axios.create({ baseURL: environment.apiUrl });

export function useDoughnuts() {
  const { isLoading, isError, data, refetch, error } = useQuery(
    'doughnuts',
    async () => {
      const { data } = await apiClient.get('/doughnuts');
      return data as Doughnut[];
    }
  );

  return {
    doughnuts: data,
    doughnutsLoading: isLoading,
    refetchDoughnuts: refetch
  };
}
