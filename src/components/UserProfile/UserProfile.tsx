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

  const [idx, setIdx] = useState();

  const [isAdmin, setIsAdmin] = useState(false);

  const [isAuctionEnded, setIsAuctionEnded] = useState(false);

  const [currentTime, setCurrentTime] = useState(new Date().getTime());

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
    .get(`http://localhost:8089/users/detail/${localStorage.getItem("username")}`)
      .then((res) => {
        setUsername(res?.data?.data?.username);
        setPhoneNumber(res?.data?.data?.phone_number);
        setRole(res?.data?.data?.roles?.[0]?.name);
        if (role === "admin") setIsAdmin(true);
        setIdx(res?.data?.data?.id);
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
            <strong>Email: </strong> {username}
          </p>
          <p>
            <strong>Vai trò: </strong> {role}
          </p>
          <p>
            <strong>Số điện thoại: </strong> {phoneNumber}
          </p>
          <p>
            <strong>ID nhận dạng: </strong> {idx}
          </p>
        </div>
      </div>
      <div className="button-block">
        <button className="history-button">
          <Link style={{ textDecoration: "none" }} to={`/history/${username}`}>
            Xem lịch sử đấu giá
          </Link>
        </button>
        {!isAdmin && !isAuctionEnded && (
          <button className="history-button">
            <Link
              style={{ textDecoration: "none" }}
              to={`/product/highest/${username}`}
            >
              Sản phẩm bạn đang đưa giá cao nhất
            </Link>
          </button>
        )}
        {!isAdmin && isAuctionEnded && (
          <button className="history-button">
            <Link
              style={{ textDecoration: "none" }}
              to={`/product/highest/${username}`}
            >
              Sản phẩm bạn đấu giá thành công
            </Link>
          </button>
        )}
      </div>
    </React.Fragment>
  );
}

export default UserProfile;
