import React from 'react';

import { Container } from './styles';
interface ConfigsModalBtnProps {
	modalConfigsRef: React.RefObject<HTMLDialogElement | null>;
}

const ConfigsModalBtn: React.FC<ConfigsModalBtnProps> = ({ modalConfigsRef }) => {
	const openModalConfigs = (): void => modalConfigsRef.current?.showModal();

	return (
		<Container
			aria-haspopup="dialog"
			aria-expanded={modalConfigsRef.current?.open ?? undefined}
			aria-controls="configs"
			onClick={openModalConfigs}
		>
			<img src="./images/config.svg" alt="game configs" />
		</Container>
	);
};

export default ConfigsModalBtn;
