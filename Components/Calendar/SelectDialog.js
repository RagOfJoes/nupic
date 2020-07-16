import { memo, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import useSelectStyles from './Select.style';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { MONTHS, YEARS_ARRAY } from 'lib/constants';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

export default memo(({ open, toggleOpen, initMonth, initYear, onSave }) => {
	const styles = useSelectStyles();
	const [year, setYear] = useState(initYear);
	const [month, setMonth] = useState(initMonth);

	useEffect(() => {
		setYear(initYear);
		setMonth(initMonth);
	}, [initMonth, initYear]);

	const handleClose = () => {
		setMonth(initMonth);
		setYear(initYear);
		toggleOpen(false);
	};

	const handleSave = () => {
		if (typeof onSave === 'function') onSave(month, year);
	};
	return (
		<Dialog fullWidth open={open} PaperProps={{ elevation: 0 }} onClose={handleClose}>
			<DialogTitle>Jump To</DialogTitle>

			<DialogContent dividers>
				<Grid container spacing={2} alignItems="center">
					<Grid item xs={12} sm={6}>
						<Select
							fullWidth
							value={month}
							classes={{ root: styles.underline, icon: styles.icon }}
							onChange={(e) => setMonth(e.target.value)}
							renderValue={(v) => {
								return <Typography className={styles.title}>{MONTHS[v].displayName}</Typography>;
							}}
							MenuProps={{
								PaperProps: {
									elevation: 1,
								},
							}}
						>
							{MONTHS.map((m, i) => (
								<MenuItem key={m.code} value={i}>
									{m.displayName}
								</MenuItem>
							))}
						</Select>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Select
							fullWidth
							value={year}
							onChange={(e) => setYear(e.target.value)}
							classes={{ root: styles.underline, icon: styles.icon }}
							renderValue={(v) => {
								return <Typography className={styles.title}>{v}</Typography>;
							}}
							MenuProps={{
								PaperProps: {
									elevation: 1,
									style: {
										maxHeight: 300,
									},
								},
							}}
						>
							{YEARS_ARRAY().map((y, i) => (
								<MenuItem key={`${y}-${i}`} value={y}>
									{y}
								</MenuItem>
							))}
						</Select>
					</Grid>
				</Grid>
			</DialogContent>

			<DialogActions>
				<Button onClick={handleClose}>cancel</Button>

				<Button onClick={handleSave}>ok</Button>
			</DialogActions>
		</Dialog>
	);
});
