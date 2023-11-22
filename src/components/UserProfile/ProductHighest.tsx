import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../pages/Header/Header";
import "./historylist.scss";

const ProductHighest = () => {
  const { username } = useParams();
  const [data, setData] = useState<any>([]);

  const [isAuctionEnded, setIsAuctionEnded] = useState(false);

  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  const id = 1;

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    axios
      .get(`http://localhost:8089/time/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const [year, month, day, hour, minute] = res.data?.time;
        setTime(new Date(year, month - 1, day, hour, minute));
      });
  }, [id]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      setCurrentTime(now);
      setIsAuctionEnded(now >= time.getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  useEffect(() => {
    axios
      .get(`http://localhost:8089/product/highest/${username}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data.data);
      });
  }, [username]);

  return (
    <div className="popup-container">
      <Header />
      {!isAuctionEnded ? (
        <h3>Sản phẩm bạn đang đưa giá cao nhất</h3>
      ) : (
        <h3>Chúc mừng bạn đã đấu giá thành công {data?.length} vật phẩm</h3>
      )}
      <table>
        <thead>
          <tr>
            <th>Tên vật phẩm</th>
            <th>Giá đấu của bạn</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: any) => (
            <tr key={index}>
              <td>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/detail/${item?.id}`}
                >
                  {item.name}
                </Link>
              </td>
              <td>{item.price} (USD)</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductHighest;
