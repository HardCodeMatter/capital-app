import React from 'react';

import styles from './Radio.module.css';

export const Radio = ({ option, onChange, label, name }) => {
	return (
		<label className={styles.wrapper}>
			<input
				className={styles.radio}
				name={name}
				type="radio"
				value={label}
				checked={option === label}
				onChange={onChange}
			/>
			<span className={styles.label}>{label}</span>
		</label>
	);
};
