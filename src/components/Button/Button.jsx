import React from 'react';

import styles from './Button.module.css';

export const Button = ({ title, onClick, width }) => {
	return (
		<button style={{ width }} className={styles.button} onClick={onClick}>
			{title}
		</button>
	);
};
