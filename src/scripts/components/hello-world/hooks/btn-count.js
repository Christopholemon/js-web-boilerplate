import { useState } from "react";

export default function useCount(initialValue, increment) {
  const [value, setValue] = useState(initialValue);

  function handleChange() {
    setValue(value + increment);
  }

  return {
    value,
    onClick: handleChange
  };
};