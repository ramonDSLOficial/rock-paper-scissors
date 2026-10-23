import React from 'react';

import { Container } from './styles';

interface ModalRulesBtnProps {
	modalRulesRef: React.RefObject<HTMLDialogElement | null>;
}

const ModalRulesBtn: React.FC<ModalRulesBtnProps> = ({ modalRulesRef }) => {
	const openRulesModal = (): void => modalRulesRef.current?.showModal();

	return (
		<Container
			aria-haspopup="dialog"
			aria-expanded={modalRulesRef.current?.open ?? undefined}
			aria-controls="rules"
			onClick={openRulesModal}
		>
			rules
		</Container>
	);
};

export default ModalRulesBtn;
