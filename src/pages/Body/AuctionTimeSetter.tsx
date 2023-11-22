import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

const AuctionTimerSetterContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const DateTimeInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 50%;
  max-width: 300px;
`;

const SetTimerButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

function AuctionTimerSetter() {
  const [auctionTime, setAuctionTime] = useState("");

  const id = 1;

  const handleTimeChange = (e: any) => {
    setAuctionTime(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Auction time set to:", auctionTime);
    const localDateTime = new Date(auctionTime).toISOString();
    const formattedDateTime = localDateTime.replace('T', ' ').slice(0, 19);
    console.log(formattedDateTime);
    
    axios
      .patch(
        `http://localhost:8089/time/update/${id}`,
        {
          time: formattedDateTime
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        toast.success("Thay đổi thời gian đấu giá thành công")
      });
  };

  return (
    <AuctionTimerSetterContainer>
      <DateTimeInput
        type="datetime-local"
        value={auctionTime}
        onChange={handleTimeChange}
      />
      <SetTimerButton onClick={handleSubmit}>Thay đổi thời gian đấu giá</SetTimerButton>
    </AuctionTimerSetterContainer>
  );
}

export default AuctionTimerSetter;
