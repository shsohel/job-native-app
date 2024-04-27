import { useEffect, useState } from 'react';
const {
  EXPO_PUBLIC_API_KEY_B,
  EXPO_PUBLIC_API_BASE_URL,
  EXPO_PUBLIC_API_VERSION,
} = process.env;
import axios from "axios";
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const options = {
  //   method: "POST",
  //   // url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  //   url: `${EXPO_PUBLIC_API_BASE_URL}/${EXPO_PUBLIC_API_VERSION}/${endpoint}`,
  //   // headers: {
  //   //   "X-RapidAPI-Key": EXPO_PUBLIC_API_KEY_B,
  //   //   "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  //   // },
  //   params: { ...query },
  // };
  // console.log(options);

  const fetchData = async () => {
    setIsLoading(true);
    const params = new URLSearchParams(query);
    const url = `${EXPO_PUBLIC_API_BASE_URL}/${EXPO_PUBLIC_API_VERSION}/${endpoint}?${params}`;
    try {
      const response = await axios.post(url, {});
      setData(response.data.data);
    } catch (error) {
      setError(error);
      alert("There is an error!");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data, isLoading, error, refetch };
};
export default useFetch;
