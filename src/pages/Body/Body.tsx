import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { CSSTransition } from "react-transition-group";
import ProductItem from "../../components/ProductItem/ProductItem";

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

const antiques = [
  {
    id: "1",
    name: "Biển Số 1",
    image: "https://storage.googleapis.com/f1-cms/2021/05/eff2a14f-20210519_075849.jpg",
    description: "Biển số xe ngũ quý 9.",
    price: "3,500,000,000 VNĐ",
  },
  {
    id: "2",
    name: "Biển số 2",
    image: "https://congthuong-cdn.mastercms.vn/stores/news_dataimages/2023/032023/31/15/in_article/bien-so-xe-sau-khi-anh-truong-tan-phat-nhan-ve-thi-co-khach-tra-mua-chiec-xe-co-bien-so-nay-voi-gia-15-ty-dong20230331152420.jpg?rt=20230331152421",
    description: "Biển số xe ngũ quý 8.",
    price: "5,000,000,000 VNĐ",
  },
  {
    id: "3",
    name: "Biển số 3",
    image: "https://otohoanglong.vn/wp-content/uploads/2022/08/62623.jpg",
    description: "Biển số xe đẹp Tài - Lộc.",
    price: "200,000,000 VNĐ",
  },
  {
    id: "4",
    name: "Biển số 4",
    image: "https://ttol.vietnamnetjsc.vn/images/2019/05/17/15/42/vo-oi1.jpg",
    description: "Biển số xe ngũ quý 6.",
    price: "6,000,000,000 VNĐ",
  },
  {
    id: "5",
    name: "Biển số 4",
    image: "https://ttol.vietnamnetjsc.vn/images/2019/05/17/15/42/vo-oi1.jpg",
    description: "Biển số xe ngũ quý 6.",
    price: "6,000,000,000 VNĐ",
  },
  {
    id: "6",
    name: "Biển số 4",
    image: "https://ttol.vietnamnetjsc.vn/images/2019/05/17/15/42/vo-oi1.jpg",
    description: "Biển số xe ngũ quý 6.",
    price: "6,000,000,000 VNĐ",
  },
  {
    id: "7",
    name: "Biển số 4",
    image: "https://ttol.vietnamnetjsc.vn/images/2019/05/17/15/42/vo-oi1.jpg",
    description: "Biển số xe ngũ quý 6.",
    price: "6,000,000,000 VNĐ",
  },
  {
    id: "8",
    name: "Biển số 4",
    image: "https://ttol.vietnamnetjsc.vn/images/2019/05/17/15/42/vo-oi1.jpg",
    description: "Biển số xe ngũ quý 6.",
    price: "6,000,000,000 VNĐ",
  },
  {
    id: "9",
    name: "Biển số 4",
    image: "https://ttol.vietnamnetjsc.vn/images/2019/05/17/15/42/vo-oi1.jpg",
    description: "Biển số xe ngũ quý 6.",
    price: "6,000,000,000 VNĐ",
  },
  {
    id: "10",
    name: "Biển số 4",
    image: "https://ttol.vietnamnetjsc.vn/images/2019/05/17/15/42/vo-oi1.jpg",
    description: "Biển số xe ngũ quý 6.",
    price: "6,000,000,000 VNĐ",
  },
];

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
      <Header>
        {/* <FiCar size={40} style={{ marginRight: '10px' }} /> */}
        Đấu Giá Biển Số Xe
      </Header>
      <ProductItem products={products} />
    </Container>
  );
}

export default Body;
