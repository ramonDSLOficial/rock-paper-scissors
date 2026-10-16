import React, { useId, type InputHTMLAttributes } from 'react';

import { Container, Input, Label } from './styles';

interface OptionProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

const Option: React.FC<OptionProps> = ({ label, checked, onChange }) => {
    const inputId = useId()
    
	return (
		<Container>
			<Input id={inputId} checked={checked} onChange={onChange} />
			<Label htmlFor={inputId}>{label}</Label>
		</Container>
	);
};

export default Option;
