import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Dashboard } from '../Dashboard';
import { Generator } from '../Generator';

import { Navbar } from '../../components/Navbar';

import styles from './App.module.css';

export const App = () => {
	return (
		<BrowserRouter>
			<Navbar />

			<div className={styles.wrapper}>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/generator" element={<Generator />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
