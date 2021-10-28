import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React from 'react';
// import sliderImage from '../assets/images/1.jpg';
import sliderImage from '../assets/images/1.jpg';
import {
    Arrow,
    Container,
    Image,
    ImageContainer,
    InfoContainer,
    Slide,
    Wrapper
} from './styled/Slider.styled';

const Slider = () => (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined />
        </Arrow>

        <Wrapper>
            <Slide>
                <ImageContainer>
                    <Image src={sliderImage} />
                </ImageContainer>
                <InfoContainer />
            </Slide>
        </Wrapper>

        <Arrow direction="right">
            <ArrowRightOutlined />
        </Arrow>
    </Container>
);

export default Slider;
