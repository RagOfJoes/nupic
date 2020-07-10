import Header from 'Components/Header';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default function Home() {
	return (
		<>
			<Header />
			<Container>
				<Grid container>
					<Typography variant="h2">Hello World!</Typography>
				</Grid>
			</Container>
		</>
	);
}
