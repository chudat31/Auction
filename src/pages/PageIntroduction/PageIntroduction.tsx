import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import Header from '../Header/Header';

const IntroComponent = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '50px 0' }}>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          Chào mừng đến với Trang Web Đấu Giá
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Trang web đấu giá của chúng tôi mang đến cho bạn trải nghiệm đấu giá trực tuyến tuyệt vời. 
          Dễ dàng đặt lược và theo dõi các phiên đấu giá hấp dẫn ngay tại đây.
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Hãy tham gia ngay để có cơ hội sở hữu những sản phẩm độc đáo với giá hấp dẫn.
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <Button href="/home" variant="contained" color="primary" size="large">
            Bắt đầu Đấu Giá
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default IntroComponent;
