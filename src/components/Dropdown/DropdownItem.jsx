import React from 'react';
import styled from 'styled-components';

export const DropdownItem = ({ onClick, label }) => {
	return <Wrapper onClick={onClick}>{label}</Wrapper>;
};

const Wrapper = styled.div`
	padding: 10px 20px;

	&:hover {
		background-color: rgba(75, 75, 75, 0.09);
	}
`;
