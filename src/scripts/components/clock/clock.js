import React from "react";
// import { LoadingSpinner } from '../../shared';
import { useGetTime, useFormatTime } from './hooks';

function Clock() {
  const time = useGetTime();

  return (
    <>
      <h4 className="clock">Time at load is { time.prettyInitialTime }</h4>
      <h4 className="clock">Current Time is { time.prettyTime }</h4>
    </>
  );
}

export default Clock;
