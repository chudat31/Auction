import "./style.scss";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Header from "../../pages/Header/Header";
import React from "react";
function UserProfile() {

  const [username, setUsername] = useState<boolean>();

  const [phoneNumber, setPhoneNumber] = useState("");

  const [role, setRole] = useState("");

  const [id, setId] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8089/users/detail", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUsername(res.data.data.username);
        setPhoneNumber(res.data.data.phone_number);
        setRole(res.data.data.roles[0].name);
        setId(res.data.data.id);
      });
  },[]);

  return (
    <React.Fragment>
      <Header />
      <h1>THÔNG TIN NGƯỜI DÙNG</h1>
      <div>
        <div id="one">
          <img
            src="http://hinhnenhd.com/avt-trang-fb/tai-ngay-avt-trang-fb-moi-nhat-dep-nhat-doc-dao-12/"
            alt=""
          />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div id="two">
          <p>
            <strong>Tên đăng nhập: </strong> { username }
          </p>
          <p>
            <strong>Vai trò: </strong> { role }
          </p>
          <p>
            <strong>Số điện thoại: </strong> {phoneNumber }
          </p>
          <p>
            <strong>ID nhận dạng: </strong> { id }
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserProfile;
