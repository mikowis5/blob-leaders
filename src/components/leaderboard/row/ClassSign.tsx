import styled from 'styled-components';

const Sign = styled.div`
  margin-right: 25px;
  transform: rotate3d(1, 6, 1, 25deg) translateY(-10px);
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #999;
  width: 100px;
  text-align: center;
  position: relative;

  h1 {
    margin: 0;
    text-align: center;
    font-size: 35px;
  }
`;

const SignBack = styled.div`
    z-index: 0;
    content: '';
    width: 25px;
    height: 25px;
    background: white;
    border: 3px solid #999;
    position: absolute;
    right: 25px;
    bottom: 19px;
    transform: rotate(-8deg);
`;

type Props = {
  classNumber: string
}
const ClassSign = ({ classNumber }: Props) => {
  return (
    <div style={{ position: 'relative' }}>
      <SignBack/>
      <Sign>
        <h1>{classNumber}</h1>
      </Sign>
    </div>
  );
}

export default ClassSign;