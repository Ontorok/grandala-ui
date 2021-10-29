import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React from 'react';
import sliderImage from '../assets/images/1.jpg';
import sliderImage2 from '../assets/images/2.jpg';
import {
    Arrow,
    Button,
    Container,
    Description,
    Image,
    ImageContainer,
    InfoContainer,
    Slide,
    Title,
    Wrapper
} from './styled/Slider.styled';

const Slider = () => (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined />
        </Arrow>

        <Wrapper>
            <Slide bgColor='F9FCF2'>
                <ImageContainer>
                    <Image src={sliderImage} />
                </ImageContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Description>
                        DON&#39;T COMPROMISE ON STYLE!! GET FLAT 30% OFF FOR NEW ARRIVALES!!!
                    </Description>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
            <Slide bgColor='ECFDF6'>
                <ImageContainer>
                    <Image src={sliderImage2} />
                </ImageContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Description>
                        DON&#39;T COMPROMISE ON STYLE!! GET FLAT 30% OFF FOR NEW ARRIVALES!!!
                    </Description>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>

        <Arrow direction="right">
            <ArrowRightOutlined />
        </Arrow>
    </Container>
);

export default Slider;
