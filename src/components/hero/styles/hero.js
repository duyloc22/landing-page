import styled, { keyframes } from "styled-components";

const slide = keyframes`
    0% {
      transform:translateX(-25%);
    }
    100% {
      transform:translateX(25%);
    }
  `;

export const Container = styled.div``;
export const Inner = styled.div`
    height: 250px;
    overflow: hidden;
    position: relative;
`;
export const Bg = styled.div`
    animation-name: ${slide};
    animation-iteration-count: infinite;
    animation-duration: ${({ delay }) => (delay ? `${delay}s` : "3s")};
    animation-direction: ${({ direction }) => (direction ? direction : "alternate")};
    background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
    opacity: 0.5;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -50%;
    right: -50%;
    z-index: -1;
`;
export const Wrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 0.25em;
    box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    left: 50%;
    padding: 20px 50px;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
`;
export const Content = styled.h3``;
