import React from 'react';

import { CloseBtn, Container } from './styles';

interface ConfigsModalProps {
	modalConfigsRef: React.RefObject<HTMLDialogElement>;
}

const ConfigsModal: React.FC<ConfigsModalProps> = ({ modalConfigsRef }) => {
	const closeModalRules = (): void => modalConfigsRef.current.close();
	return (
		<Container ref={modalConfigsRef}>
			<h2>Game Configurations</h2>

			<CloseBtn title="close rules" onClick={closeModalRules}>
				<img src="./images/icon-close.svg" alt="" />
			</CloseBtn>
		</Container>
	);
};

export default ConfigsModal;
