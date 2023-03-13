import styled from 'styled-components';
import {ReactComponent as BlobSvg} from './../../assets/blob.svg';
import PlayerStyle from './PlayerStyle.type';
import shadeColor from '../../utils/shadeColor';


const BlobContainer = styled.div<{ styleSet: PlayerStyle }>`
  position: relative;

  .eye-pupil {
    background: ${({ styleSet }) => styleSet.eyeColor};
    border: 1px solid ${({ styleSet }) => shadeColor(styleSet.eyeColor, -30)};
  }
  .eye-lid {
    background: ${({ styleSet }) => shadeColor(styleSet.bodyColor, -40)};
  }
  .eye-lid-bottom {
    border-top: 2px solid ${({ styleSet }) => shadeColor(styleSet.bodyColor, -60)};
  }
  .eye-lid-top {
    border-bottom: 2px solid ${({ styleSet }) => shadeColor(styleSet.bodyColor, -60)};
  }
  .eye {
    border: 4px solid ${({ styleSet }) => shadeColor(styleSet.bodyColor, -50)};
  }
  .blob-hand {
    background: ${({ styleSet }) => styleSet.bodyColor};
    border: 4px solid ${({ styleSet }) => shadeColor(styleSet.bodyColor, -50)};
  }
  .blob-mouth {
    background: ${({ styleSet }) => shadeColor(styleSet.bodyColor, -50)};
  }
  svg {
    fill: ${({ styleSet }) => styleSet.bodyColor};
    filter:
      drop-shadow(-2px -2px 0px ${({ styleSet }) => shadeColor(styleSet.bodyColor, -50)})
      drop-shadow(3px -2px 0px ${({ styleSet }) => shadeColor(styleSet.bodyColor, -50)})
      drop-shadow(3px 3px 0px ${({ styleSet }) => shadeColor(styleSet.bodyColor, -50)})
      drop-shadow(-2px 3px 0px ${({ styleSet }) => shadeColor(styleSet.bodyColor, -50)})
  }
`;

type Props = {
  characterStyle: PlayerStyle
}
const PlayerCharacter = ({ characterStyle } : Props) => {
  return (
    <BlobContainer styleSet={characterStyle} >
      <div className="eye-left eye-container animated">
        <div className="eye-brow animated"/>
        <div className="eye animated">
          <div className="eye-pupil">
            <div className="pupil-shrinkle"/>
          </div>
          <div className="eye-lid eye-lid-top animated"/>
          <div className="eye-lid eye-lid-bottom animated"/>
        </div>
      </div>
      <div className="eye-right eye-container animated">
        <div className="eye-brow animated"/>
        <div className="eye animated">
          <div className="eye-pupil">
            <div className="pupil-shrinkle"/>
          </div>
          <div className="eye-lid eye-lid-top animated"/>
          <div className="eye-lid eye-lid-bottom animated"/>
        </div>
      </div>
      <div className="blob">
        <div className="blob-body animated">
          <BlobSvg/>
        </div>
        <div className="blob-mouth"/>
          <div className="blob-hand left-hand animated"/>
          <div className="blob-hand right-hand animated"/>
          <div className="blob-shadow"/>
      </div>
    </BlobContainer>
  );
};

export default PlayerCharacter;