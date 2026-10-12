import React from 'react';

import { Container } from './styles';
interface ConfigsModalBtnProps {
    modalConfigsRef: React.RefObject<HTMLDialogElement>
}

const ConfigsModalBtn: React.FC<ConfigsModalBtnProps> = ({ modalConfigsRef }) => {
  const openModalConfigs = (): void => modalConfigsRef.current.showModal()

  return (
    <Container onClick={openModalConfigs}>
        <img src="./images/config.svg" alt="game configs" />
    </Container>
  );
}

export default ConfigsModalBtn;