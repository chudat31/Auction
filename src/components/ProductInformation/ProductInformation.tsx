import "./styles.scss";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Header from "../../pages/Header/Header";
import React from "react";
import { useParams } from "react-router-dom";
function ProductInformation() {

  const { id } = useParams();

  const [name, setName] = useState("");

  const [price, setPrice] = useState();

  const [description, setDescription] = useState("");

  const [image, setImage] = useState("");

  const [userPaidHighest, setUserPaidHighest] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8089/product/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setName(res.data.data.name);
        setPrice(res.data.data.price);
        setDescription(res.data.data.description);
        setImage(res.data.data.image);
        setUserPaidHighest(res.data.data.username)
      });
  },[id]);

  return (
    <React.Fragment>
      <Header/>
      <h1>THÔNG TIN SẢN PHẨM</h1>
      <div>
        <div id="two">
          <p>
            <strong>Tên sản phẩm: </strong> { name }
          </p>
          <p>
            <strong>Mô tả: </strong> { description }
          </p>
          <p>
            <strong>Giá đấu cao nhất hiện tại: </strong> {price}{' '}USD
          </p>
          <p>
            <strong>Người trả giá cao nhất: </strong> {userPaidHighest}
          </p>
          <img src={image} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductInformation;
