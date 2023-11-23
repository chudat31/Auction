import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import moment from "moment";

const TimerContainer = styled.div`
  position: absolute;
  top: 15%;
  right: 10px;
  padding: 0.5rem;
  background-color: lightgray; // Style as desired
  border-radius: 5px;
`;

const CountdownTimer = () => {
  const id = 1;
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    axios
      .get(`http://localhost:8089/time/${id}`)
      .then((res) => {
        const [year, month, day, hour, minute] = res.data?.time;
        setTime(new Date(year, month - 1, day, hour, minute));
      });
  }, [id]);

  const calculateTimeLeft = () => {
    const difference = +time - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        ngày: Math.floor(difference / (1000 * 60 * 60 * 24)),
        giờ: Math.floor((difference / (1000 * 60 * 60)) % 24),
        phút: Math.floor((difference / 1000 / 60) % 60),
        giây: Math.floor((difference / 1000) % 60),
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

  const timerComponents: any = [];

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
      <b>Thời gian đấu giá còn lại: </b>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>Hết thời gian đấu giá!</span>
      )}
    </TimerContainer>
  );
};

export default CountdownTimer;
