import { useCallback, useMemo, useEffect } from "react";

export const useHeartBeat = (intervalValue, action) => {
  const setHeartBeatValue = useCallback((intervalValue) => {
    if (typeof intervalValue === "number" && intervalValue > 0) {
      return intervalValue * 60 * 1000;
    } else {
      throw new Error(`HeartBeat value must be a number greater than zero!`);
    }
  }, []);

  const timeInterval = useMemo(() => {
    return setHeartBeatValue(intervalValue);
  }, [intervalValue, setHeartBeatValue]);

  useEffect(() => {
    if (!action || typeof action !== "function") {
      throw new Error(
        `Action type provided for the HeartBeat must be a function!`
      );
    }
    const intervalId = setInterval(() => {
      action();
    }, timeInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [timeInterval, action]);
};
