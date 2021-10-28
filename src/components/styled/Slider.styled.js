import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`;

export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f7f0f0;
    color: #000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === 'left' && '10px'};
    right: ${(props) => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

export const Wrapper = styled.div`
    height: 100%;
`;

export const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`;

export const Image = styled.img`
    height: 80%;
`;

export const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
