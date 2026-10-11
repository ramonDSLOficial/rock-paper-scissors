import React from 'react';

import { CloseBtn, Container } from './styles';
import Option from './Option';

interface ConfigsModalProps {
	modalConfigsRef: React.RefObject<HTMLDialogElement>;
}

const ConfigsModal: React.FC<ConfigsModalProps> = ({ modalConfigsRef }) => {
	const closeModalRules = (): void => modalConfigsRef.current.close();
	return (
		<Container ref={modalConfigsRef}>
			<h2>Game Configurations</h2>

      <fieldset>
        <Option label='extra moves' />
        <Option label='pvp' />
      </fieldset>

			<CloseBtn title="close rules" onClick={closeModalRules}>
				<img src="./images/icon-close.svg" alt="" />
			</CloseBtn>
		</Container>
	);
};

export default ConfigsModal;
