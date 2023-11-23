import "./style.scss";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function AuthenComponent() {
  const [checkedUser, setCheckedUser] = useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [checkAdmin, setCheckAdmin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8089/users/detail/${localStorage.getItem("username")}`)
      .then((res) => {
        setCheckedUser(true);
        setUsername(res?.data?.data?.username);
        if (res?.data?.data?.roles?.[0]?.name === "admin") {
          setCheckAdmin(true);
        }
      });
  }, [username]);

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username")
    setCheckedUser(false);
    navigate("/login");
  };
  return (
    <React.Fragment>
      {checkedUser && !checkAdmin && username && (
        <Button color="inherit" component={Link} to="/contact">
          Gửi phản hồi
        </Button>
      )}
      {checkedUser && checkAdmin && (
        <Button color="inherit" component={Link} to="/feedbacklist">
          Danh sách phản hồi
        </Button>
      )}
      {checkedUser && checkAdmin && (
        <Button color="inherit" component={Link} to="/add/product">
          Thêm sản phẩm
        </Button>
      )}

      {checkedUser && !username && (
        <Button color="inherit" component={Link} to="/login">
          Đăng nhập
        </Button>
      )}

      {checkedUser && !username && (
        <Button color="inherit" component={Link} to="/register">
          Đăng ký
        </Button>
      )}
      {checkedUser && username && (
        <Button color="inherit" component={Link} to="/user/detail">
          Thông tin người dùng
        </Button>
      )}
      {checkedUser && username && (
        <Button onClick={logOut} color="inherit">
          Đăng xuất
        </Button>
      )}
    </React.Fragment>
  );
}

export default AuthenComponent;
