import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./style.scss";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);

    try {
      const response = await axios.post("http://localhost:8089/users/login", urlencoded);
      localStorage.setItem("token", response.data.access_token);
      toast.success("Đăng nhập thành công");
      navigate("/introduction");
    } catch (error) {
      console.error(error);
      toast.error("Thất bại, có lỗi xảy ra");
    }
  };

  return (
    <div className="login">
      <div className="login_block">
        <h4>Login</h4>
        <form onSubmit={submitForm}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={handleChangeUsername}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={handleChangePassword}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
          <h5>
            Already have an account? <Link to={"/register"}>Register</Link>
          </h5>
        </form>
      </div>
    </div>
  );
}

export default Login;
