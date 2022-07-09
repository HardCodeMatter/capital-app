import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import styles from './Navbar.module.css';

export const Navbar = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}>
				<Link to="/">
					CAPITAL<span>APP</span>
				</Link>
			</div>
			<div className={styles.link}>
				<NavLink to="/">Dashboard</NavLink>
				<NavLink to="/generator">Generator</NavLink>
			</div>
		</div>
	);
};
