import React from 'react';

import { Container } from './styles';
import Option from './Option';
import CloseModalBtn from '../CloseModalBtn';

interface ConfigsModalProps {
	modalConfigsRef: React.RefObject<HTMLDialogElement>;
}

const ConfigsModal: React.FC<ConfigsModalProps> = ({ modalConfigsRef }) => {
	const closeModalConfigs = (): void => modalConfigsRef.current.close();

	return (
		<Container ref={modalConfigsRef}>
			<h2>Game Configurations</h2>

      <fieldset>
        <Option label='extra moves' />
        <Option label='pvp' />
      </fieldset>

			<CloseModalBtn title='close configs' onClick={closeModalConfigs} />
		</Container>
	);
};

export default ConfigsModal;
