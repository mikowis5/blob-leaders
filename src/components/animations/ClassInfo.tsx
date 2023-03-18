import styled, { keyframes } from 'styled-components';

const Animation = keyframes`
  0% { opacity: 0; transform: rotate3d(1, 1, 0, 35deg); }
  25% { opacity: 1; transform: rotate3d(1, 1, 0, 32.5deg); }
  90% { opacity: 1; transform: rotate3d(1, 1, 0, 25deg); }
  100% { opacity: 0; transform: rotate3d(1, 1, 0, 25deg); }
`;

const ClassHeader = styled.div<{ delay: number, duration: number }>`
  position: absolute;
  background: black;
  font-size: 70px;
  padding: 15px;
  font-weight: black;
  color: white;

  animation: ${Animation};
  animation-duration: ${({ duration }) => duration}s;
  animation-fill-mode: both;
  animation-delay: ${({ delay }) => delay}s;

  z-index: 4;
  margin-top: 400px;
`;

const EntersGameHeader = styled.div<{ delay: number, duration: number }>`
  position: absolute;
  background: white;
  font-size: 50px;
  padding: 15px;
  font-weight: 900;
  color: black;

  animation: ${Animation};
  animation-duration: ${({ duration }) => duration}s;
  animation-fill-mode: both;
  animation-delay: ${({ delay }) => delay}s;

  z-index: 3;
  margin-top: 550px;
`;

type Props = {
  topText: string,
  bottomText: string,
  delay?: number,
  duration?: number
}
const ClassInfo = ({ topText, bottomText, delay=1.25, duration=3.9 }: Props) => {

  return (
    <>
      <ClassHeader duration={duration} delay={delay}>{topText}</ClassHeader>
      <EntersGameHeader duration={duration} delay={delay}>{bottomText}</EntersGameHeader>
    </>
  );

}

export default ClassInfo;