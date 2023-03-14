import { emitCustomEvent } from 'react-custom-events';
import { FaPlusCircle } from 'react-icons/fa';
import styled from 'styled-components';
import Events from '../../events/Events';
import Row from '../common/Row';
import ButtonCircle from './ButtonCircle';


const SidebarContainer = styled.div`
  flex: 1;
  height: calc(100% - 60px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  padding-left: 0;
  flex-direction: column;
`;

const Sidebar = () => {

  const openPlayerModalHandler = () => emitCustomEvent(Events.OpenAddPlayerEvent);

  return (
    <SidebarContainer>
      <div/>
      <Row>
        <ButtonCircle color='green' size='lg' onClick={openPlayerModalHandler}>
          <FaPlusCircle size={20}/>
        </ButtonCircle>
      </Row>
    </SidebarContainer>
  );

}

export default Sidebar;