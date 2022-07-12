import React, { useState } from 'react';
import styled from 'styled-components';

import { DropdownItem } from 'components/Dropdown/DropdownItem';

export const Dropdown = ({ label, items }) => {
	const [isOpen, setOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	const handleOpen = () => setOpen(!isOpen);

	return (
		<Wrapper>
			<Control onClick={handleOpen} type="button">
				{selectedItem === null ? label : items[selectedItem - 1].label}
			</Control>
			{isOpen && (
				<Menu>
					{items.map(({ label, value }) => (
						<DropdownItem
							key={value}
							onClick={() => {
								setSelectedItem(value);
								setOpen(!isOpen);
							}}
							label={label}
						/>
					))}
				</Menu>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	max-width: 300px;
`;

const Control = styled.button`
	border: 1px solid #010b13;
	border-radius: 5px;
	cursor: pointer;

	padding: 10px 20px;
	margin-bottom: 5px;
`;

const Menu = styled.div`
	border-radius: 5px;
	box-shadow: 0 10px 24px 0 rgba(34, 41, 47, 0.1);
	overflow-y: auto;
	width: 230px;

	padding: 5px 0;
`;
