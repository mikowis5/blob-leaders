import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  0% { opacity: 0; transform: scale(0.5); }
  5% { opacity: 1; transform: scale(1.2); }
  7.5% { opacity: 1; transform: scale(1); }
  55% { opacity: 1; }
  85% { opacity: 1; }
  100% { opacity: 0; }
`;

const BumpImage = styled.div<{ delay: number, duration: number, blur: number, bgImage: string }>`

  position: absolute;
  width: 550px;
  height: 450px;

  background-image: url('${({ bgImage }) => bgImage}');
  background-size: cover;

  margin-top: -200px;
  z-index: 3;

  animation: ${Animation};
  animation-delay: ${({ delay }) => delay}s;
  animation-duration: ${({ duration }) => duration}s;
  animation-fill-mode: both;

  transition: filter 0.5s;
  filter: blur(${({ blur }) => blur}px);


`;

export default BumpImage;