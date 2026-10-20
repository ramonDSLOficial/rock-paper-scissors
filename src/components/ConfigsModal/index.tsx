import React, { useId } from 'react';

import { Container, ResetScore, Settings } from './styles';
import Option from './Option';
import CloseModalBtn from '../CloseModalBtn';
import { useGameStore } from '../../store/gameStore';

interface ConfigsModalProps {
	modalConfigsRef: React.RefObject<HTMLDialogElement>;
}

const ConfigsModal: React.FC<ConfigsModalProps> = ({ modalConfigsRef }) => {
	const { hasExtraMoves, changeAvailableMoves, isMultiplayer, changeGameMode, clearScores } =
		useGameStore();
	const closeModalConfigs = (): void => modalConfigsRef.current.close();
	const titleId = useId();

	return (
		<Container id="configs" aria-labelledby={titleId} ref={modalConfigsRef}>
			<h2 id={titleId}>Game Configurations</h2>

			<Settings aria-label="settings">
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

				<ResetScore onClick={clearScores} title='reset score'>reset score</ResetScore>
			</Settings>

			<CloseModalBtn
				title="close configs"
				aria-controls="configs"
				onClick={closeModalConfigs}
			/>
		</Container>
	);
};

export default ConfigsModal;
