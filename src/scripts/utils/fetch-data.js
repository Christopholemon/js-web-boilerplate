import { useState, useEffect } from "react";

const forcedDelay = window.location.search.indexOf('delay') > -1 ? 3000 : 1;

export default function useFetchData(url) {
  const [data, setData] = useState(null); // set a default state

  async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();

      setTimeout( () => {
        setData(data);
      }, forcedDelay);
      
  };

  useEffect(() => {
    fetchData();
  }, [url]); // only refresh when the URL changes. Runs on an infinite loop when checking data... but i'm not sure why, data shouldnt change after its done

  return data;
}