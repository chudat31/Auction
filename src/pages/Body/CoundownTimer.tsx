import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
  position: absolute;
  top: 15%; 
  right: 10px; 
  padding: 0.5rem;
  background-color: lightgray; // Style as desired
  border-radius: 5px;
`;

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-11-29") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        ngày: Math.floor(difference / (1000 * 60 * 60 * 24)),
        giờ: Math.floor((difference / (1000 * 60 * 60)) % 24),
        phút: Math.floor((difference / 1000 / 60) % 60),
        giây: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents:any = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <TimerContainer>
      <b>Thời gian đấu giá còn lại: </b>{timerComponents.length ? timerComponents : <span>Hết thời gian đấu giá!</span>}
    </TimerContainer>
  );
};

export default CountdownTimer;
