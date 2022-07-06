import React from 'react';

import styles from './RadioGroup.module.css';

export const RadioGroup = ({ children, label }) => {
	return (
		<div>
			<div className={styles.label}>{label}</div>
			<div className={styles.children}>{children}</div>
		</div>
	);
};
