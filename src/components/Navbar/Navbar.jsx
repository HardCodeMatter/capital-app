import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

export const Navbar = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}>
				CAPITAL<span>APP</span>
			</div>
			<div className={styles.link}>
				<NavLink to="/">Dashboard</NavLink>
				<NavLink to="/generator">Generator</NavLink>
			</div>
		</div>
	);
};
