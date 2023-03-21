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

  &:hover {
    cursor: pointer;

    h1 {
      opacity: 0.5;
      transform: translateY(-3px);
      transition: 0.25s;
    }

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
  classNumber: string,
  onClick?: React.MouseEventHandler<HTMLElement>
}
const ClassSign = ({ classNumber, onClick = () => {} }: Props) => {
  return (
    <div onClick={onClick} style={{ position: 'relative' }}>
      <SignBack/>
      <Sign>
        <h1>{classNumber}</h1>
      </Sign>
    </div>
  );
}

export default ClassSign;