import React, { useEffect, useState } from "react";
import "./styles.scss";
import Header from "../../pages/Header/Header";
import axios from "axios";
import { Table } from "react-bootstrap";
import moment from "moment";
const FeedbackList = () => {
  const [listFeedback, setListFeedback] = useState<any>([]);
  useEffect(() => {
    axios
      .get("http://localhost:8089/feedback", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setListFeedback(res.data.data);
      });
  }, []);

  return (
    <div>
      <Header />
      <h2 style={{textAlign:'center'}}>Danh sách phản hồi của người dùng</h2>
      <table>
        <thead>
          <tr>
            <th>Thời gian</th>
            <th>Nội dung</th>
            <th>Người dùng</th>
            <th>Số điện thoại liên lạc</th>
          </tr>
        </thead>
        <tbody>
          {listFeedback.length > 0 ? (
            <>
              {listFeedback.map((feedback: any, index: number) => (
                <tr key={index}>
                  <td className="time">
                    {moment
                      .utc(feedback.datetime)
                      .format("MMMM Do YYYY, h:mm:ss a")}
                  </td>
                  <td className="content">{feedback.content?.split('"content":"')[1].split('"')[0]}</td>
                  <td className="username">{feedback.user.username}</td>
                  <td className="phone_number">{feedback.user.phone_number}</td>
                </tr>
              ))}
            </>
          ) : (
            <td colSpan={4}>Không có phản hồi</td>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackList;
