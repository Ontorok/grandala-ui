import { sliderItems } from "@fake-data/data";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
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
} from "./Slider.styled";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const onSlideChange = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    const slider = setTimeout(() => {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }, 3000);

    return () => clearTimeout(slider);
  }, [slideIndex]);

  return (
    <Container>
      <Arrow direction="left" onClick={() => onSlideChange("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item, index) => {
          return (
            <Slide key={item.id} bgColor={item.bgColor}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>

      <Arrow direction="right" onClick={() => onSlideChange("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
