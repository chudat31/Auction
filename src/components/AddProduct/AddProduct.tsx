import "./styles.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import Header from "../../pages/Header/Header";
import { toast } from "react-toastify";

function NewProduct() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const image = "https://dichbiensoxe.com/wp-content/uploads/2023/02/kiem-tra-bien-so-xe-may-dep-hay-xau-1.png"

  const addId = (event: any) => {
    setId(event.target.value);
  };

  const addName = (event: any) => {
    setName(event.target.value);
  };
  const addPrice = (event: any) => {
    setPrice(event.target.value);
  };
  const addDescription = (event: any) => {
    setDescription(event.target.value);
  };
  const attributes = [
    {
      id: id,
      name: "mã sản phẩm",
    },
    {
      id: name,
      name: "tên sản phẩm",
    },
    {
      id: description,
      name: "nhãn hàng",
    },
    {
      id: price,
      name: "giá thành",
    },
  ];

  const addProduct = async (event: any) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:8089/product",
        {
          id,
          name,
          price,
          description,
          image
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      toast.success("Thêm mới vật phẩm thành công");
      setId("");
      setName("");
      setPrice("");
      setDescription("");
    } catch (error) {
      if (attributes.some((attribute) => !attribute.id)) {
        toast.loading("Vui lòng đợi...");
        attributes.forEach((attribute) => {
          if (!attribute.id) {
            window.setTimeout(() => {
              toast.error("Vui lòng nhập " + attribute.name);
            }, 3000);
          }
        });
      } else {
        toast.error("Yêu cầu không thành công do có lỗi xảy ra");
      }
    }
  };
  return (
    <div className="add_product">
      <Header />
      <div className="form_block">
        <h1>
          <i>THÊM MỚI SẢN PHẨM ĐẤU GIÁ</i>
        </h1>
        <Form onSubmit={addProduct}>
          <Form.Group className="mb-3" controlId="">
            <Form.Control
              value={id}
              onInput={addId}
              type="number"
              placeholder="Mã sản phẩm"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Control
              value={name}
              onInput={addName}
              type="text"
              placeholder="Tên sản phẩm"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Control
              value={description}
              onInput={addDescription}
              type="text"
              placeholder="Mô tả"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Control
              value={price}
              onInput={addPrice}
              type="text"
              placeholder="Giá đấu (USD)"
            />
          </Form.Group>

          <Form.Group>
            <Button
              className="btn rounded-pill"
              variant="success"
              type="submit"
            >
              Thêm sản phẩm
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default NewProduct;
