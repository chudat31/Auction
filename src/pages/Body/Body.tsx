import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { CSSTransition } from "react-transition-group";
import ProductItem from "../../components/ProductItem/ProductItem";
import CountdownTimer from "./CoundownTimer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 2rem;
`;

function Body() {
  const [products, setProducts] = useState<any>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8089/product", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => setProducts(res.data.data));
  }, []);

  return (
    <Container>
      <CountdownTimer />
      <Header>
        Đấu Giá Biển Số Xe
      </Header>
      <ProductItem products={products} />
    </Container>
  );
}

export default Body;
