import React from "react";
import "./styles.scss"
import { Container, Typography, TextField, Button } from "@mui/material";
const ContactComponent = () => {
  return (
    <Container>
      <Typography style={{marginTop:16}} variant="h4" align="center" gutterBottom>
        Phản hồi cho chúng tôi
      </Typography>
      <form style={{marginBottom:'16px'}}>
        <TextField
          label="Nội dung phản hồi"
          variant="outlined"
          multiline
          rows={6}
        />
        <Button variant="contained" color="primary">
          Gửi
        </Button>
      </form>
      <Typography variant="body1">
        <strong>Thông Tin Về Các Sản Phẩm Đồ Cổ:</strong> Chào mừng bạn đến với
        trang web đấu giá đồ cổ của chúng tôi! Chúng tôi tự hào giới thiệu một
        bộ sưu tập đồ cổ đa dạng và độc đáo. Tại đây, bạn sẽ khám phá những
        chiếc đồng hồ cổ, các tác phẩm nghệ thuật cổ điển, đồ trang trí và nhiều
        sản phẩm khác thuộc các thời kỳ lịch sử. Mỗi sản phẩm đều được chọn lựa
        kỹ lưỡng, đảm bảo tính chất nguyên vẹn và giữ gìn giá trị lịch sử. Dù
        bạn là người mới bắt đầu hay là người đam mê sưu tầm đồ cổ, chúng tôi
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
      đồ cổ cùng với những người đồng lòng. Trang web đấu giá của chúng tôi là
      nơi gặp gỡ của những người yêu đồ cổ, nơi mà những chiếc đồ cổ trở nên
      sống động qua các câu chuyện và giá trị lịch sử.
    </Container>
  );
};

export default ContactComponent;
