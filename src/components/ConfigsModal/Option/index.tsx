import React, { useId } from 'react';

import { Container, Input, Label } from './styles';

interface OptionProps {
    label: string
}

const Option: React.FC<OptionProps> = ({ label }) => {
    const inputId = useId()
    
	return (
		<Container>
			<Input id={inputId} />
			<Label htmlFor={inputId}>{label}</Label>
		</Container>
	);
};

export default Option;
