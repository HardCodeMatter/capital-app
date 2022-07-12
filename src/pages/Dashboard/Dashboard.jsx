import React from 'react';

import { Dropdown } from 'components/Dropdown/Dropdown';

export const Dashboard = () => {
	const items = [
		{ label: 'Los Santos Police', value: 1 },
		{ label: 'San Fierro Police', value: 2 },
		{ label: 'Las Venturas Police', value: 3 },
		{ label: 'Federal Bureau', value: 4 },
	];

	return (
		<div>
			<Dropdown label="Organization" items={items} />
		</div>
	);
};
