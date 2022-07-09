import React from 'react';
import { Navigate } from 'react-router-dom';

import styles from './Dashboard.module.css';

export const Dashboard = () => {
	return (
		<div>
			<Navigate to="/generator" replace />
		</div>
	);
};
