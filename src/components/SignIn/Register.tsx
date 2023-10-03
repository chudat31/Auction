import "./style.scss";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import {toast} from "react-toastify"
import Header from "../../pages/Header/Header";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [errorPhoneNumber, setErrorPhoneNumber] = useState("");

  const submitForm = () => {
    if(phone_number.length!==10) {
        toast.error("Please enter valid phone number")
    }
  }
  const validatePhoneNumber = (input: string) => {
    const pattern = /^(\+\d{1,3})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
    const isValidPhoneNumber = pattern.test(input);
    return isValidPhoneNumber;
  };

  const handleChangeUsername = (event:any) => {
    setUsername(event.target.value);
  }

  const handleChangePassword = (event:any) => {
    setPassword(event.target.value);
  }
  
  const handleChangePhone = (event:any) => {
    setPhone_number(event.target.value)
    if (event.target.value && !validatePhoneNumber(event.target.value)) {
      setErrorPhoneNumber('Số điện thoại không hợp lệ');
    } else {
      setErrorPhoneNumber('');
    }
  };

  return (
    <div className="register">
      <Header />
      <img
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <div className="register_block">
        <h4>Create A New Account</h4>
        <Form onSubmit={submitForm} className="">
          <Form.Group className="mb-3" controlId="">
            <Form.Control
              value={username}
              onChange={handleChangeUsername}
              type="text"
              
            />
            <span></span>
            <Form.Label>
              Username
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Control
              value={password}
              onChange={handleChangePassword}
              type="password"
              
            />
            <span></span>
            <Form.Label>
              Password
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Control
              value={phone_number}
              onChange={handleChangePhone}
              type="text"
            />
            <span></span>
            <Form.Label>
              Phone Number
            </Form.Label>
          </Form.Group>
          <h5>Have you ever have an account? <Link to={"/login"}>Login</Link></h5>
          <Button className="btn btn-primary" type="submit" >
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
