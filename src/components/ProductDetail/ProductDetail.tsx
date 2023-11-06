import "./style.scss";
import { useRef, useState,} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../../pages/Header/Header";
import React from "react";
function ProductDetail() {
  const nameRef = useRef<any>();

  const [isSearch, setIsSearch] = useState<boolean>();

  const [nameEnter, setNameEnter] = useState("");

  const [id, setId] = useState();

  const [name, setName] = useState("");

  const [description, setDescription] = useState("");

  const [imageLink, setImageLink] = useState("");

  const [price, setPrice] = useState();

  const [cert_id, setCert_id] = useState();

  const handleSubmit = () => {
    axios
      .get(`http://localhost:8089/product/search/${nameEnter}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((respone) => {
        window.setTimeout(() => {
          setIsSearch(true);
          setId(respone.data.data.id);
          setName(respone.data.data.name);
          setDescription(respone.data.data.description);
          setImageLink(respone.data.data.image);
          setPrice(respone.data.data.price);
          setCert_id(respone.data.data.cert_id);
          setNameEnter("");
        }, 3500);
      })
      .catch((e) => {
        window.setTimeout(() => {
          setIsSearch(false);
          setNameEnter("");
        }, 3500);
      });
  };
  const handleChangeName = (e:any) => {
    setNameEnter(e.target.value)
  }
  return (
    <div className="search container-fluid">
      <Header />
      <h1>
        <i>Tìm kiếm thông tin sản phẩm</i>
      </h1>
      <Form className="d-flex">
        <input
          value={nameEnter}
          ref={nameRef}
          onInput={handleChangeName}
          type="search"
          placeholder="Tên sản phẩm"
          className="me-2"
          aria-label="Search"
        />
        <Button onClick={handleSubmit} variant="success">
          Search
        </Button>
      </Form>
      {isSearch === true && (
        <div className="infomation">
          <h4>Mã sản phẩm: {id} </h4>
          <h5>Tên sản phẩm: {name} </h5>
          <h5>Mô tả: {description} </h5>
          <img src={imageLink} alt="" />
          <h5>Giá thành: {price} </h5>
          <h5>Mã chứng nhận: {cert_id} </h5>
        </div>
      )}
      {isSearch === false && <h3>No item was found</h3>}
    </div>
  )
}

export default ProductDetail;
