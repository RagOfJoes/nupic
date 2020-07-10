import Link from 'next/link';
import Logo from 'Components/Logo';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useHeaderStyle } from './Header.style';
import { Typography, Avatar } from '@material-ui/core';

export default () => {
	const styles = useHeaderStyle();
	return (
		<AppBar elevation={0} variant="outlined" color="default" position="fixed" className={styles.root}>
			<Grid container justify="center" direction="column">
				<Grid container wrap="nowrap" direction="row" component={Toolbar} justify="space-between">
					<Link href="/">
						<Grid item container spacing={1} alignItems="center">
							<Grid item className={styles.logo}>
								<Logo />
							</Grid>
						</Grid>
					</Link>
				</Grid>
			</Grid>
		</AppBar>
	);
};
