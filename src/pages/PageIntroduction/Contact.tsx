import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Container, Typography, TextField, Button } from "@mui/material";
import Header from "../Header/Header";
import axios from "axios";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
const ContactComponent = () => {
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const addContent = (event: any) => {
    setContent(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8089/users/detail/${localStorage.getItem("username")}`)
      .then((res) => {
        setUserId(res.data.data.id);
      });
  },[]);


  async function handleClick() {
    try {
      await axios.post(
        `http://localhost:8089/feedback/${userId}`,
        {
          content:content,
        },
      );
      toast.success("Thêm phản hồi thành công");
      setContent("");
    } catch (e) {
      toast.error("Có lỗi xảy ra");
    }
  }
  return (
    <Container>
      <Header />
      <Typography
        style={{ marginTop: 16 }}
        variant="h4"
        align="center"
        gutterBottom
      >
        Phản hồi cho chúng tôi
      </Typography>
      <Form style={{ marginBottom: "16px" }}>
        <TextField
          label="Nội dung phản hồi"
          variant="outlined"
          multiline
          rows={6}
          value={content}
          onChange={addContent}
        />
        <Button onClick={handleClick} variant="contained" color="primary">
          Gửi
        </Button>
      </Form>
      <Typography variant="body1">
        <strong>Thông Tin Về Các Sản Phẩm Biển Số Xe:</strong> Chào mừng bạn đến với
        trang web đấu giá biển số của chúng tôi! Chúng tôi tự hào giới thiệu một
        bộ sưu tập biển số đa dạng và độc đáo. Tại đây, bạn sẽ khám phá những
        chiếc biển số đẹp đang có trong bộ sưu tập của chúng tôi. Mỗi sản phẩm đều được chọn lựa
        kỹ lưỡng, đảm bảo tính chất nguyên vẹn và giữ gìn giá trị. Dù
        bạn là người mới bắt đầu hay là người đam mê sưu tầm biển số, chúng tôi
        tin rằng bạn sẽ tìm thấy những món đồ độc đáo để bổ sung vào bộ sưu tập
        của mình.
      </Typography>
      <Typography variant="body1">
        <strong>Giới Thiệu Về Trang Web Đấu Giá:</strong> Trang web đấu giá của
        chúng tôi là nơi tuyệt vời để trải nghiệm sự hứng khởi của việc đấu giá
        trực tuyến. Với giao diện trực quan và tiện ích đấu giá an toàn, chúng
        tôi tạo điều kiện thuận lợi cho việc mua và bán đồ cổ. Bạn có thể dễ
        dàng tham gia vào các phiên đấu giá, đặt giá và theo dõi tiến độ của
        mình mọi nơi, mọi lúc. Chúng tôi cam kết đảm bảo tính minh bạch và công
        bằng trong quy trình đấu giá, đồng thời bảo vệ quyền lợi của cả người
        mua và người bán.
      </Typography>
      Hãy tham gia vào cộng đồng của chúng tôi và khám phá niềm đam mê sưu tầm
      biển số xe đẹp cùng với những người đồng lòng. Trang web đấu giá của chúng tôi là
      nơi gặp gỡ của những người biển số xe, nơi mà những chiếc biển số trở nên
      sống động.
    </Container>
  );
};

export default ContactComponent;
