import moment from 'moment';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Layout from 'Components/Layout';
import Header from 'Components/Header';
import Grid from '@material-ui/core/Grid';
import Calendar from 'Components/Calendar';
import Button from '@material-ui/core/Button';

export default function Home() {
	const [month, setMonth] = useState(moment().month());
	const [year, setYear] = useState(moment().year());
	return (
		<>
			<NextSeo title="Home" />

			<Header />
			<Layout>
				<Grid container>
					<Grid item xs={12}>
						<Calendar month={month} year={year} />
					</Grid>

					<Grid item>
						<Button
							onClick={() => {
								if (month === 0) {
									setMonth(11);
									setYear(year - 1);
									return;
								}

								setMonth(month - 1);
							}}
						>
							Previous
						</Button>
					</Grid>

					<Grid item>
						<Button
							onClick={() => {
								if (month === 11) {
									setMonth(0);
									setYear(year + 1);
									return;
								}

								setMonth(month + 1);
							}}
						>
							Next
						</Button>
					</Grid>
				</Grid>
			</Layout>
		</>
	);
}
