import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  return [data];
};

export default useFetch;

//consume data like this

//const [data] = useFetch(url);
