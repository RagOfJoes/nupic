import { memo, useState } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid';
import Carousel from '@brainhubeu/react-carousel';
import makeStyles from '@material-ui/core/styles/makeStyles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles(
	(theme) => ({
		image: {
			width: 'auto',
			maxHeight: 800,
			height: 'auto',
			display: 'block',
			borderRadius: theme.shape.borderRadius,
		},
		tabsRoot: {
			height: 20,
			minHeight: 'unset',
		},
		tabRoot: {
			minWidth: 30,
			minHeight: 'unset',
			padding: theme.spacing(1),
		},
		indicator: {
			display: 'none',
		},
		flexContainer: {
			justifyContent: 'center',
		},
	}),
	{ name: 'Carousel' }
);

export default memo(({ title, images, disableDots, carouselProps }) => {
	const classes = useStyles();
	const [slide, setSlide] = useState(0);

	return (
		<>
			<Carousel value={slide} dots={!disableDots} onChange={(v) => setSlide(v)} {...carouselProps}>
				{images.map((i) => {
					return <img src={i.url} key={i.name} alt={i.name} title={i.name} className={classes.image} />;
				})}
			</Carousel>
			{!disableDots && (
				<Grid item xs={12}>
					<Tabs
						value={slide}
						textColor="primary"
						scrollButtons="auto"
						variant="scrollable"
						indicatorColor="primary"
						onChange={(e, v) => setSlide(v)}
						classes={{ root: classes.tabsRoot, flexContainer: classes.flexContainer, indicator: classes.indicator }}
					>
						{images.map((i, index) => {
							return (
								<Tab
									key={i.url}
									disableRipple
									classes={{ root: classes.tabRoot }}
									label={<FiberManualRecordIcon style={{ fontSize: 8 }} />}
								/>
							);
						})}
					</Tabs>
				</Grid>
			)}
		</>
	);
});
