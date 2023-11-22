import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  margin-bottom: 10px;
  &:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 16px;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  color: #007bff;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const BidButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: pink;
  }
`;

interface Product {
  name: string;
  price: string;
  description: string;
  image: string;
  id: string;
}

interface ProductItemProps {
  products: Product[];
}

const ProductItem: React.FC<ProductItemProps> = ({ products }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const [isAuctionEnded, setIsAuctionEnded] = useState(false);
  const [checkedUser, setCheckedUser] = useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [checkAdmin, setCheckAdmin] = useState(false);
  const id = 1;

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    axios
      .get(`http://localhost:8089/time/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
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
  }, [username]);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  }

  async function handleDelete(id: any) {
    try {
      await axios.delete(`http://localhost:8089/product/delete/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      toast.success("Deleting successfully");
    } catch (e) {
      toast.error("Something went wrong");
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {products.map((product, index) => (
        <ProductContainer key={index}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductInfo>
            <ProductName>
              <Link
                style={{ textDecoration: "none" }}
                to={`/detail/${product.id}`}
              >
                {product.name}
              </Link>
            </ProductName>
            <strong>Giá đấu cao nhất hiện tại:</strong>
            <ProductPrice> {product.price}</ProductPrice>
            {!isAuctionEnded && !checkAdmin && (
              <BidButton onClick={() => openModal(product)}>Trả giá</BidButton>
            )}
            {checkAdmin && (
              <DeleteButton onClick={() => {
                handleDelete(product.id)
              }}>Loại bỏ</DeleteButton>
            )}
          </ProductInfo>
        </ProductContainer>
      ))}
      {showModal && selectedProduct && (
        <Modal product={selectedProduct} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ProductItem;
