import { useCallback, useMemo, useState, useEffect } from "react";

export const useHeartBeat = (nbrOfMinutes) => {
  const setTimeIntervalValue = useCallback((nbrOfMinutes) => {
    if (typeof nbrOfMinutes === "number" && nbrOfMinutes > 0) {
      return nbrOfMinutes * 60 * 1000;
    } else {
      throw new Error(`nbrOfMinutes must be a number greater than zero!`);
    }
  }, []);

  const timeInterval = useMemo(() => {
    return setTimeIntervalValue(nbrOfMinutes);
  }, [nbrOfMinutes, setTimeIntervalValue]);

  const [heartBeat, setHeartBeat] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeartBeat(!heartBeat);
    }, timeInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [timeInterval, heartBeat]);

  return heartBeat;
};
