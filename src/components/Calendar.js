import React, { useState, useEffect, useCallback, useRef } from "react";

import "./Calendar.scss";

const Calendar = () => {
  const currentDate = useRef(new Date().toLocaleDateString());
  const getLocalTime = useCallback(() => new Date().toLocaleTimeString(), []);
  const [currentTime, setCurrentTime] = useState(() => getLocalTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getLocalTime());
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="calendar">
      <span className="calendar__time">{currentTime}</span>
      <span className="calendar__date"> - {currentDate.current}</span>
    </div>
  );
};

export default Calendar;
