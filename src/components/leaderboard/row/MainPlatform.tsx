import styled from 'styled-components';
import { selectRowHeight } from '../../../state/ui/selectors/selectRowHeight';
import { useAtomValue } from 'jotai';
import platformBg from '../../../assets/img/platforms/basic_platform.png'


const Platform = styled.div<{ rowHeight: number, backgroundImage: string }>`
  height: ${({ rowHeight }) => rowHeight}px;
  background-image: url('${({ backgroundImage }) => backgroundImage}');
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-size: 100% 100%;
  margin-left: -10px;
  margin-right: -10px;
  flex: 1;
  z-index: 1;
  position: relative;
`;

type Props = {
  children?: string | JSX.Element | JSX.Element[]
}
const MainPlatform: React.FC<Props> = ({children} : Props) => {

  const rowHeight = useAtomValue(selectRowHeight);

  return (
    <Platform rowHeight={rowHeight} backgroundImage={platformBg}>
      {children}
    </Platform>
  );

}

export default MainPlatform;