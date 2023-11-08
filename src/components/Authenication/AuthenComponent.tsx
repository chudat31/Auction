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
    .get("http://localhost:8089/users/detail", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      setCheckedUser(true);
      setUsername(res.data.data.username);
      if (res.data.data.roles[0].name === "admin") {
        setCheckAdmin(true);
      }
    });
  },[username]);
  

  const logOut = () => {
    localStorage.removeItem("token");
    setCheckedUser(false);
    navigate("/login");
  };
  return (
    <React.Fragment>
        {!checkedUser && (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}

          {!checkedUser && (
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          )}
          {checkedUser && (
            <Button color="inherit" component={Link} to="/user/detail">
              User Profile
            </Button>
          )}
          {checkedUser && (
            <Button onClick={logOut} color="inherit">
              Logout
            </Button>
          )}
    </React.Fragment>
  )
}

export default AuthenComponent;
