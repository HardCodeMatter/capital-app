import React, { useState } from 'react';

import nameList from '../../utils/names.json';

import { RadioGroup } from '../../components/RadioGroup';
import { Radio } from '../../components/Radio';
import { Button } from '../../components/Button';

import styles from './Generator.module.css';

export const Generator = () => {
	const [nationalityOption, setNationalityOption] = useState('American');
	const [genderOption, setGenderOption] = useState('Male');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const handleNationality = (e) => {
		setNationalityOption(e.target.value);
	};

	const handleGender = (e) => {
		setGenderOption(e.target.value);
	};

	const handleClick = () => {
		const randomFirstName = nameList
			.filter(({ nationality }) => nationality === nationalityOption)
			.map(({ gender }) =>
				gender[0].key === genderOption
					? gender[0].firstName[
							Math.floor(
								Math.random() * gender[0].firstName.length
							)
					  ]
					: gender[1].firstName[
							Math.floor(
								Math.random() * gender[1].firstName.length
							)
					  ]
			);

		const randomLastName = nameList
			.filter(({ nationality }) => nationality === nationalityOption)
			.map(
				({ lastName }) =>
					lastName[Math.floor(Math.random() * lastName.length)]
			);

		setFirstName(randomFirstName);
		setLastName(randomLastName);
	};

	return (
		<div className={styles.wrapper}>
			<div>
				<div className={styles.radio__group}>
					<RadioGroup label="Choose a gender of character.">
						<Radio
							option={genderOption}
							onChange={(e) => handleGender(e)}
							label="Male"
							name="Gender"
						/>
						<Radio
							option={genderOption}
							onChange={(e) => handleGender(e)}
							label="Female"
							name="Gender"
						/>
					</RadioGroup>

					<RadioGroup label="Choose a nationality.">
						<Radio
							option={nationalityOption}
							onChange={(e) => handleNationality(e)}
							label="American"
							name="Nationality"
						/>
						<Radio
							option={nationalityOption}
							onChange={(e) => handleNationality(e)}
							label="Italian"
							name="Nationality"
						/>
						<Radio
							option={nationalityOption}
							onChange={(e) => handleNationality(e)}
							label="Russian"
							name="Nationality"
						/>
					</RadioGroup>
				</div>

				<div className={styles.name__list}>
					{firstName} {lastName}
				</div>
			</div>

			<div className={styles.button}>
				<Button title="Generate name" onClick={handleClick} />
			</div>
		</div>
	);
};
