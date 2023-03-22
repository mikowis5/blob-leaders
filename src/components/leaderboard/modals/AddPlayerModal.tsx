import Events, { OpenAddPlayerEventData } from "../../../events/Events";
import useModal from "../../../hooks/modalHook";
import { ModalBg, ModalContainer } from "../../common/Modal";
import styled, { keyframes, Keyframes } from 'styled-components';
import Row from "../../common/Row";
import ButtonCircle from "../../ui/ButtonCircle";
import { FaCheck, FaPlusCircle, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useSetAtom } from "jotai";
import { selectNextCharacterId } from "../../../state/characters/selectors/selectNextCharacterId";
import PlayerCharacter from "../../player/PlayerCharacter";
import { getCharacterStyle } from "../../../data/characterStyles";
import introAnimation from './../../player/animations/introAnimation'
import IntroBgAnimation from "../../animations/IntroBgAnimation";
import ClassInfo from "../../animations/ClassInfo";
import { addPlayerAction } from "../../../state/leaderboard/actions/addPlayerAction";
import { renamePlayerAction } from "../../../state/leaderboard/actions/renamePlayerAction";
import Sound from 'react-sound';
import testSound from "../../../assets/sfx/reload_sfx.mp3";

const PopupAnimation = keyframes`
  0% { transform: scale(65%); opacity: 0; }
  100% { transform: scale(100%); opacity: 1; }
`;

const HideAnimation = keyframes`
  0% { transform: scale(100%); opacity: 1; }
  100% { transform: scale(50%); opacity: 0; }
`;

const CenterScene = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding-bottom: 75px;
  box-sizing: border-box;
`;

const InputModal = styled.div<{ animation: Keyframes }>`
  z-index: 1;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  animation: ${({ animation }) => animation};
  animation-duration: 0.25s;
  animation-fill-mode: forwards;

  input {
    box-sizing: border-box;
    width: 100%;
    padding: 1rem 0.55rem;
    border-radius: 15px;
    margin-bottom: 1rem;
    font-size: 30px;
  }

`;

const AddPlayerModal = () => {

  const renamePlayer = useSetAtom(renamePlayerAction);
  const addPlayer = useSetAtom(addPlayerAction);
  const getNextCharacterId = useSetAtom(selectNextCharacterId);
  const [newCharacterId, setNewCharacterId] = useState<number|null>(2);
  const [modalAnimation, setModalAnimation] = useState(PopupAnimation);
  const [inputValue, setInputValue] = useState("");
  const [playerId, setPlayerId] = useState<number|null>(null);
  const [hiding, setHiding] = useState(false);
  const { isModalVisible, hideModal } = useModal(Events.OpenAddPlayerEvent, ( data?: OpenAddPlayerEventData ) => {

    if(data && data.playerId) {
      setPlayerId(data.playerId);
    } else {
      setPlayerId(null);
    }

    setInputValue("");
    setNewCharacterId(null);
    setHiding(false);
    setModalAnimation(PopupAnimation);
  });

  const handleInputOnChange = (e: any) => {
    setInputValue(( "" + e.target.value ).toUpperCase());
  }

  const confirmAddingClass = () => {
    if(inputValue.length < 1 || newCharacterId) return;

    if(playerId) {
      renamePlayer({ playerId, classNumber: inputValue });
      hideModal();
      return;
    }

    const characterId = getNextCharacterId();

    if(characterId) {
      setModalAnimation(HideAnimation);
      setNewCharacterId(characterId);
      setTimeout(() => {
        setHiding(true);
        addPlayer({
          characterId,
          classNumber: inputValue
        });
      }, 5000);
    }

    setTimeout(() => {
      setHiding(true);
      setNewCharacterId(null);
      hideModal();
    }, 5500);
  }

  return (
    <>
      {
        (isModalVisible) &&
        <ModalContainer style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <InputModal animation={modalAnimation} >
            <span style={{ opacity: 0.25 }}>Nowa klasa</span>
            <h1 style={{ marginTop: 0 }}>{ playerId ? "Podaj nową nazwę:" : "Podaj nazwę klasy:" }</h1>
            <input value={inputValue} onChange={handleInputOnChange} maxLength={7} />
            <Row style={{ justifyContent: 'space-between' }}>
              <ButtonCircle size='xl' onClick={() => hideModal()}>
                <FaTimes size={20}/>
              </ButtonCircle>
              <ButtonCircle 
                onClick={() => confirmAddingClass()} 
                color='green' 
                size='xl' 
                opacity={(inputValue.length > 0 ? 1 : 0.25)}
              >
                <FaCheck size={20}/>
              </ButtonCircle>
            </Row>
          </InputModal>
          {
            newCharacterId && 
            <CenterScene>
              {getCharacterStyle(newCharacterId).leaderSfx && !hiding && <Sound
                url={getCharacterStyle(newCharacterId).leaderSfx ?? ""}
                playStatus="PLAYING"
                loop={false}
                volume={75}
              />}
              <div style={{ transform: 'scale(1.5)', zIndex: 2 }}>
                <PlayerCharacter animation={introAnimation} characterStyle={getCharacterStyle(newCharacterId)}/>
              </div>
              <IntroBgAnimation characterStyle={getCharacterStyle(newCharacterId)} />
              <ClassInfo topText={"Klasa " + inputValue} bottomText="Wchodzi do gry!" />
            </CenterScene>
          }
          <ModalBg style={{ transition: '0.35s', opacity: hiding ? 0 : 1 }} />
        </ModalContainer>
      }
    </>
  );
}

export default AddPlayerModal;