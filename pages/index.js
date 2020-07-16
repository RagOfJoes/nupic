import { NextSeo } from 'next-seo';
import Layout from 'Components/Layout';
import Header from 'Components/Header';
import Grid from '@material-ui/core/Grid';

export default () => {
	return (
		<>
			<NextSeo title="Home" />

			<Header />
			<Layout>
				<Grid container>
					<Grid item xs={12}>
						Home
					</Grid>
				</Grid>
			</Layout>
		</>
	);
};
