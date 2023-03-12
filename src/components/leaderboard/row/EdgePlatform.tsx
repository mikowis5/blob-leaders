import styled from 'styled-components';
import { selectRowHeight } from '../../../state/ui/selectors/selectRowHeight';
import { useAtomValue } from 'jotai';
import leftPlatform from '../../../assets/img/platforms/standing_platform.png'
import rightPlatform from '../../../assets/img/platforms/points_platform.png';


const Platform = styled.div<{ rowHeight: number, backgroundImage: string }>`
  width: ${({ rowHeight }) => rowHeight}px;
  height: ${({ rowHeight }) => rowHeight}px;
  background-image: url('${({ backgroundImage }) => backgroundImage}');
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;

const No = styled.span<{ fontSize: number, marginLeft: number, textOpacity: number }>`
  font-size: ${({ fontSize }) => fontSize}px;
  -webkit-text-stroke: 3px black;
  text-stroke: 3px black;
  color: white;
  font-weight: 900;
  margin-bottom: 10%;
  margin-left: ${({ marginLeft }) => marginLeft}%;
  opacity: ${({ textOpacity }) => textOpacity};
`;

type Props = {
  displayNumber: string | number,
  placement: 'left' | 'right'
}
const EdgePlatform: React.FC<Props> = ({displayNumber, placement}: Props) => {

  const rowHeight = useAtomValue(selectRowHeight);
  const fontSize = rowHeight * 0.55;
  const backgroundImage = placement === 'left' ? leftPlatform : rightPlatform;
  const textOpacity = placement === 'left' ? .8 : 1;

  return (
    <Platform rowHeight={rowHeight} backgroundImage={backgroundImage}>
      <No 
        fontSize={fontSize} 
        marginLeft={5}
        textOpacity={textOpacity}
      >{displayNumber}</No>
    </Platform>
  );

}

export default EdgePlatform;