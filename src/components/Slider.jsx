import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React from 'react';
import { Arrow, Container } from './styled/Slider.styled';

const Slider = () => (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined />
        </Arrow>
        <Arrow direction="right">
            <ArrowRightOutlined />
        </Arrow>
    </Container>
);

export default Slider;
