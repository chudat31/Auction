import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Product {
  name: string;
  price: string;
  description: string;
  image: string;
  id: string;
}

interface ModalProps {
  product: Product;
  onClose: () => void;
}

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 500px;
  max-width: 100%;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h3``;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Modal: React.FC<ModalProps> = ({ product, onClose }) => {
  const [bidPrice, setBidPrice] = useState("");
  const [error, setError] = useState("");
  const updateHandle = async (e: any) => {
    try {
      await axios.patch(
        `http://localhost:8089/product/update/${product.id}`,
        {
          price: bidPrice,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      toast.success("Trả giá thành công");
    } catch (error) {
      toast.error("Trả giá thất bại");
    }
  };
  const handleBidChange = (e: any) => {
    setBidPrice(e.target.value);
    setError("");
  };
  const submitBid = (id: any) => {
    if (parseFloat(bidPrice) <= parseFloat(product.price)) {
      setError("Giá đề xuất phải lớn hơn giá hiện tại");
    } else if (!bidPrice) {
      setError("Vui lòng điền giá muốn đề xuất");
    } else {
      updateHandle(id);
      onClose();
    }
  };
  return (
    <ModalBackdrop>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Trả giá cho {product.name}</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          <p>Đơn vị: VNĐ(Việt Nam đồng)</p>
          <p>Tên sản phẩm: {product.name}</p>
          <p>Giá hiện tại: {product.price}</p>
          <form>
            <label htmlFor="bidPrice">Giá đề xuất:</label>
            <Input
              type="number"
              id="bidPrice"
              name="bidPrice"
              value={bidPrice}
              onChange={handleBidChange}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </form>
        </ModalBody>
        <ModalFooter>
          <SubmitButton
            onClick={() => {
              submitBid(product.id);
            }}
          >
            Trả giá
          </SubmitButton>
        </ModalFooter>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default Modal;
