import axios from 'axios';
import { useState, useEffect } from 'react';
import { getUsername } from '../helper/helper';

axios.defaults.baseURL = 'http://localhost:8080';

export default function useFetch(query) {
  const [getData, setData] = useState({ isLoading: false, apiData: undefined, status: null, serverError: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(prev => ({ ...prev, isLoading: true }));

        const { email } = await getUsername();
        const { data, status } = !query ? await axios.get(`/api/user/${email}`) : await axios.get(`/api/${query}`);

        if (status === 201) { // 201 status is not common for GET requests; typically, a successful GET request returns a 200 status
          setData(prev => ({ ...prev, apiData:data, status: status }));
        }
      } catch (error) {
        setData(prev => ({ ...prev, serverError: error }));
      } finally {
        setData(prev => ({ ...prev, isLoading: false }));
      }
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return [getData, setData];
}
