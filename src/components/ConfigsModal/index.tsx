import React from 'react';

import { Container, Fieldset } from './styles';
import Option from './Option';
import CloseModalBtn from '../CloseModalBtn';
import { useGameStore } from '../../store/gameStore';

interface ConfigsModalProps {
	modalConfigsRef: React.RefObject<HTMLDialogElement>;
}

const ConfigsModal: React.FC<ConfigsModalProps> = ({ modalConfigsRef }) => {
	const { hasExtraMoves, changeAvailableMoves, isMultiplayer, changeGameMode } =
		useGameStore();
	const closeModalConfigs = (): void => modalConfigsRef.current.close();

	return (
		<Container ref={modalConfigsRef}>
			<h2>Game Configurations</h2>

			<Fieldset>
				<Option
					label="extra moves"
					checked={hasExtraMoves}
					onChange={changeAvailableMoves}
				/>
				<Option
					label="pvp"
					checked={isMultiplayer}
					onChange={changeGameMode}
				/>
			</Fieldset>

			<CloseModalBtn title="close configs" onClick={closeModalConfigs} />
		</Container>
	);
};

export default ConfigsModal;
