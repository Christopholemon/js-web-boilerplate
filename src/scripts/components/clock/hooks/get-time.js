// On clicking tab, change state and show/hide different

import { useState, useEffect } from "react";

export default function useGetTime() {

  // Initial setup from new Date
  const [initialTime, setInitialTime] = useState(new Date());
  const [initialPrettyTime, setInitialPrettyTime] = useState(initialTime.toLocaleTimeString());
  
  // Running clock
  const [time, setTime] = useState(new Date());
  const [prettyTime, setPrettyTime] = useState(time.toLocaleTimeString());

  // let perfTimer = performance.now();
  
  useEffect(() => {
    const clockTimer = setTimeout(() => {
      const newTime = new Date();
      const newPrettyTime = newTime.toLocaleTimeString();

      // let tempPerfTimer = Math.round(performance.now() - perfTimer);
      // console.log(">> RERUN CLOCK", tempPerfTimer, newPrettyTime);

      setTime(newTime);
      setPrettyTime(newPrettyTime);
    }, 1000);

    return () => {
      clearTimeout(clockTimer);
    }

  }, [time])

  return {
    "rawInitialTime": initialTime,
    "prettyInitialTime": initialPrettyTime,
    "rawTime": time,
    "prettyTime": prettyTime
  }
}