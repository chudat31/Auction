import "./style.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
// import * as ReactBootstrap from "react-bootstrap";
function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name")
    navigate("/login");
  };

  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  // const [phoneNum, setPhoneNum] = useState("");
  // const [role, setRole] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8089/users/detail", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((respone:any) => {
        setUsername(respone.data.data.username);
        if (respone.data.data.username === "chudat31") {
          setIsAdmin(true);
        } else setIsAdmin(false);
        // setPhoneNum(respone.data.data.phone_number);
        // setRole(respone.data.data.roles[0].name);
        setIsLogin(true);
      })
      .catch(() => {
        setIsLogin(false);
      });
  }, []);

  return (
    <Navbar
      className="navbar_header"
      fixed="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="features" id="responsive-navbar-nav">
        {isLogin && (
          <Nav className="me-auto">
            <Nav.Item className="home">
              <Link to="/">HOME</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/aboutus">ABOUT US</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/listproduct">PRODUCT LIST</Link>
            </Nav.Item>
            {isAdmin && (
              <Nav.Item>
                <Link to="/newproduct">NEW PRODUCT</Link>
              </Nav.Item>
            )}
          </Nav>
        )}

        <Nav>
          {!isLogin && (
            <Nav.Item>
              <Link to="/register">REGISTER</Link>
            </Nav.Item>
          )}

          {!isLogin && (
            <Nav.Item>
              <Link to="/login">LOGIN</Link>
            </Nav.Item>
          )}

          {isLogin && (
            <Nav.Item>
              <p style={{ color: "white" }}>Welcome, {username}</p>
              <Link to={"/search"}>SEARCH</Link>
              <Link to={"/login"} onClick={handleLogout}>
                LOGOUT
              </Link>
            </Nav.Item>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
