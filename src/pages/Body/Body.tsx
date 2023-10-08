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
    name: "Bình cổ loại I",
    image: "https://vcdn1-giaitri.vnecdn.net/2021/11/04/covatdatnhatthegioiava-1636023-5073-3672-1636023207.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=9mNd0bQEXN4YCmElPXokvg",
    description: "Bình cổ từ thời nhà Minh.",
    price: "$5,000",
  },
  {
    id: "2",
    name: "Tượng gốm cổ",
    image: "https://file1.dangcongsan.vn/DATA/Upload/News/2014/4/Tuong_gom_co_1.jpg",
    description: "Tượng gốm thể hiện hình ảnh một phụ nữ thời nhà Hán.",
    price: "$8,000",
  },
  {
    id: "3",
    name: "Đồng hồ cổ chạm khắc",
    image: "https://benhviendongho.com/wp-content/uploads/2019/10/dong-ho-bo-tui-918x1024.jpg",
    description: "Đồng hồ từ thế kỷ 18.",
    price: "$15,000",
  },
  {
    id: "4",
    name: "Tranh cổ loại II",
    image: "https://kenh14cdn.com/203336854389633024/2021/10/4/photo-1-16333399373831049725114.jpg",
    description: "Tranh vẽ tay từ thời nhà Nguyễn.",
    price: "$7,000",
  },
  {
    id: "5",
    name: "Đèn dầu cổ",
    image: "https://dienmaynhapkhau.net/vnt_upload/product/06_2020/den_dau_co_trang_tri_GV_HL_SWL63_1.jpg",
    description: "Đèn dầu thời thuộc địa.",
    price: "$3,000",
  },
  {
    id: "6",
    name: "Nhẫn ngọc cổ",
    image: "https://cf.shopee.vn/file/e7f318589b3936cdad3a5b5d712f48d1",
    description: "Nhẫn ngọc từ thời nhà Lý.",
    price: "$10,000",
  },
  {
    id: "7",
    name: "Dây chuyền vàng cổ",
    image: "https://riogems.net/wp-content/uploads/2022/02/Day-chuyen-VANG-mat-xich-18K-cho-nam-6-scaled.jpg",
    description: "Dây chuyền vàng thế kỷ 17.",
    price: "$12,000",
  },
  {
    id: "8",
    name: "Gương cổ loại I",
    image: "https://riogems.net/wp-content/uploads/2022/02/Day-chuyen-VANG-mat-xich-18K-cho-nam-6-scaled.jpg",
    description: "Gương cổ chạm khắc phong cảnh.",
    price: "$2,500",
  },
  {
    id: "9",
    name: "Sách cổ loại II",
    image: "https://riogems.net/wp-content/uploads/2022/02/Day-chuyen-VANG-mat-xich-18K-cho-nam-6-scaled.jpg",
    description: "Sách ghi chép lịch sử thế kỷ 16.",
    price: "$6,500",
  },
  {
    id: "10",
    name: "Máy ảnh cổ",
    image: "https://riogems.net/wp-content/uploads/2022/02/Day-chuyen-VANG-mat-xich-18K-cho-nam-6-scaled.jpg",
    description: "Máy ảnh phim cổ từ thập niên 1950.",
    price: "$4,000",
  },
];

function Body() {
  // const [cars, setCars] = useState<any>([]);
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   // Sử dụng mock API để lấy dữ liệu
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
  //     .then((response) => {
  //       setCars(response.data);
  //       setLoaded(true);
  //     });
  // }, []);

  return (
    <Container>
      <Header>
        {/* <FiCar size={40} style={{ marginRight: '10px' }} /> */}
        Đấu Giá Đồ Cổ
      </Header>
      <ProductItem products={antiques} />
    </Container>
  );
}

export default Body;
