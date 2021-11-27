import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  // create a states to load our fetched data, the data itself and also state for an error if there is one
  const [data, setData] = useState([]); /// we set this to an array which is the array of data we will get back from the api
  const [isLoading, setIsLoading] = useState(false); // We set this to a boolean because on page load it will appear and when data is fetched it will be set to falst back
  const [error, setError] = useState(""); //

  useEffect(() => {
    setIsLoading(true); // we set the false state to true so when the page loads we see 'loading...'
    axios
      .get(url)
      .then((response) => {
        // setIsLoading(false) // set the  'loading...' so it disappears once the data is fetched.
        setData(response.data);
      })
      .catch((err) => {
        // setIsLoading(false) // set the  'loading...' so it disappears if there is error.
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, error }; // we return the data, isLoading and the error which we will destructure in out App component
};

export default useFetch;
