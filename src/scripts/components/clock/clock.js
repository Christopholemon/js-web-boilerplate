import React from "react";
import { default as useClock } from './hooks';

function Clock() {
  const time = useClock.useGetTime();

  return (
    <>
      <h4 className="clock">Time at load is { time.prettyInitialTime }</h4>
      <h4 className="clock">Current Time is { time.prettyTime }</h4>
    </>
  );
}

export default Clock;
