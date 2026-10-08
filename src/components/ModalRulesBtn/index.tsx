import React from 'react';

import { Container } from './styles';

interface ModalRulesBtnProps {
	modalRulesRef: React.RefObject<HTMLDialogElement>
}

const ModalRulesBtn: React.FC<ModalRulesBtnProps> = ({ modalRulesRef }) => {
	const openRulesModal = (): void => modalRulesRef.current.showModal()

	return <Container onClick={openRulesModal}>rules</Container>;
};

export default ModalRulesBtn;
