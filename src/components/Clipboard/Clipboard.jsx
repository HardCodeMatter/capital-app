import React from 'react';

import styles from './Clipboard.module.css';

export const Clipboard = ({ children, placeholder, width }) => {
	const handleCopy = (e) => {
		const selectedText = e.target.innerHTML.split(' ').join('_');
		navigator.clipboard.writeText(selectedText);
	};

	return (
		<div
			onClick={(e) => handleCopy(e)}
			style={{ width }}
			className={styles.wrapper}
		>
			{children.includes(null) ? placeholder : children}
		</div>
	);
};
