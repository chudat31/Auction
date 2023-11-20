import "./style.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../pages/Header/Header";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
function UserProfile() {
  const [username, setUsername] = useState<any>();

  const [phoneNumber, setPhoneNumber] = useState("");

  const [role, setRole] = useState("");

  const [id, setId] = useState();

  const [isAdmin, setIsAdmin] = useState(false);

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
        if (role === "admin") setIsAdmin(true);
        setId(res.data.data.id);
      });
  }, [role]);

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
            <strong>Tên đăng nhập: </strong> {username}
          </p>
          <p>
            <strong>Vai trò: </strong> {role}
          </p>
          <p>
            <strong>Số điện thoại: </strong> {phoneNumber}
          </p>
          <p>
            <strong>ID nhận dạng: </strong> {id}
          </p>
        </div>
      </div>
      <div className="button-block">
        <button className="history-button">
          <Link style={{ textDecoration: "none" }} to={`/history/${username}`}>
            Xem lịch sử đấu giá
          </Link>
        </button>
        {!isAdmin && (
          <button className="history-button">
            <Link
              style={{ textDecoration: "none" }}
              to={`/product/highest/${username}`}
            >
              Sản phẩm bạn đang đưa giá cao nhất
            </Link>
          </button>
        )}
      </div>
    </React.Fragment>
  );
}

export default UserProfile;
