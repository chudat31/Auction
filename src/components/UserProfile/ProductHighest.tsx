import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../pages/Header/Header";
import "./historylist.scss";

const ProductHighest = () => {
  const { username } = useParams();
  const [data, setData] = useState<any>([]);

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
        <h3>Sản phẩm bạn đang đưa giá cao nhất</h3>
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
                <td><Link style={{textDecoration:'none'}} to={`/detail/${item?.id}`}>{item.name}</Link></td>
                <td>{item.price}{' '}(USD)</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};
export default ProductHighest;
