import { useState } from "react";
import { useCustomEventListener } from "react-custom-events";
import Events from "../events/Events";

type ModalHookReturn = {
  isModalVisible: boolean,
  showModal: Function,
  hideModal: Function,
}
const useModal = (eventToListen: Events, openCallback: (eventData: any) => void): ModalHookReturn => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);

  useCustomEventListener(eventToListen, (data: any) => {
    openCallback(data);
    setIsModalVisible(true);
  });

  return { isModalVisible, showModal, hideModal };

}

export default useModal;