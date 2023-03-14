import styled, { keyframes } from 'styled-components';

const Animation = keyframes`
  0% { opacity: 0; transform: rotate3d(1, 1, 0, 35deg); }
  25% { opacity: 1; transform: rotate3d(1, 1, 0, 32.5deg); }
  90% { opacity: 1; transform: rotate3d(1, 1, 0, 25deg); }
  100% { opacity: 0; transform: rotate3d(1, 1, 0, 25deg); }
`;

const ClassHeader = styled.div`
  position: absolute;
  background: black;
  font-size: 70px;
  padding: 15px;
  font-weight: black;
  color: white;

  animation: ${Animation};
  animation-duration: 3.9s;
  animation-fill-mode: both;
  animation-delay: 1.3s;

  z-index: 4;
  margin-top: 400px;
`;

const EntersGameHeader = styled.div`
  position: absolute;
  background: white;
  font-size: 50px;
  padding: 15px;
  font-weight: 900;
  color: black;

  animation: ${Animation};
  animation-duration: 3.9s;
  animation-fill-mode: both;
  animation-delay: 1.25s;

  z-index: 3;
  margin-top: 550px;
`;

type Props = {
  topText: string,
  bottomText: string
}
const ClassInfo = ({ topText, bottomText }: Props) => {

  return (
    <>
      <ClassHeader>{topText}</ClassHeader>
      <EntersGameHeader>{bottomText}</EntersGameHeader>
    </>
  );

}

export default ClassInfo;