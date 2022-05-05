import React, { useEffect, useState } from "react";

import { HvButton } from "@hitachivantara/uikit-react-core";

import { HvProgressBar } from "..";

// eslint-disable-next-line react/prop-types
export const ProgressBarSimulator = ({ inc, error, undeterminate, ariaLabel, ariaLive }) => {
  const [status, setStatus] = useState("inProgress");
  const [value, setValue] = useState(0);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (value === 100) {
        setRun(false);
        clearInterval(interval);
        setStatus("completed");
      } else if (error && value === error) {
        clearInterval(interval);
        setStatus("error");
      } else if (run) setValue(inc);
    }, 150);
    return () => clearInterval(interval);
  }, [inc, value, run, error]);

  const reset = () => {
    setValue(0);
    setStatus("inProgress");
  };

  const start = () => {
    setRun(true);
  };

  return (
    <div style={{ width: 400 }}>
      <HvProgressBar
        value={value}
        status={status}
        undeterminate={undeterminate}
        labelProps={{
          "aria-label": ariaLabel,
          "aria-busy": false,
          "aria-live": ariaLive,
        }}
      />
      <div style={{ marginTop: 10 }}>
        <HvButton onClick={start}>Start</HvButton>
        <HvButton style={{ marginLeft: 10 }} onClick={reset}>
          Reset
        </HvButton>
      </div>
    </div>
  );
};

export { ProgressBarSimulator as default };