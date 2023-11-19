import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthenComponent from "../../components/Authenication/AuthenComponent";

const Header = () => {
  
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/home"
            style={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}
          >
            AUCTION
          </Typography>
          <Button color="inherit" component={Link} to="/home">
            Trang chủ
          </Button>
          <Button color="inherit" component={Link} to="/introduction">
            Về chúng tôi
          </Button>
          <Button color="inherit" component={Link} to="/search">
            Tìm kiếm sản phẩm
          </Button>
          <AuthenComponent />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
