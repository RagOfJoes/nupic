import moment from 'moment';
import { memo } from 'react';
import CustomCell from './Cell';
import Chip from '@material-ui/core/Chip';
import Cell from 'Components/Calendar/Cell';
import Typography from '@material-ui/core/Typography';
import { DAYS_ARRAY, WEEKS_ARRAY } from 'lib/constants';

export default memo(({ data, month, year, onCellClick }) => {
	let date = 1;
	const formattedMonth = moment(`${month}/${year}`, 'M/YYYY');

	const daysInMonth = formattedMonth.daysInMonth();
	const firstDay = formattedMonth.startOf('month').day();

	const prevMonth = formattedMonth.subtract(1, 'month');
	const prevMonthDays = prevMonth.daysInMonth();

	// Object that has a key/valu pair of [timestamp]: index
	// for quick lookup
	const dataObj = {};
	data?.edges.map((v, i) => {
		const key = new Date(v?.date.creation);
		dataObj[key] = i;
	});

	return WEEKS_ARRAY.map((week) => {
		return DAYS_ARRAY.map((day) => {
			if (week === 0 && day < firstDay) {
				const prevMonthDay = prevMonthDays - (firstDay - day - 1);
				return (
					<Cell key={`${day}-${week}-${month}-${year}`}>
						<Typography variant="body1">{prevMonthDay}</Typography>
					</Cell>
				);
			} else if (date > daysInMonth) {
				const nextMonthDay = date++ - daysInMonth;

				return (
					<Cell key={`${day}-${week}-${month}-${year}`}>
						<Typography variant="body1">{nextMonthDay}</Typography>
					</Cell>
				);
			}

			const currDate = new Date(`${month}/${date}/${year}`);
			const cellData = data?.edges[dataObj[currDate]];
			return (
				<CustomCell
					active
					mood={cellData?.mood}
					badgeInvisible={!cellData}
					key={`${day}-${week}-${month}-${year}`}
					badgeContent={<Typography variant="body1">{date++}</Typography>}
					onClick={() => {
						if (cellData) {
							onCellClick(currDate, cellData);
							return;
						}

						onCellClick(currDate);
					}}
				>
					{cellData && (
						<Chip
							size="small"
							style={{ cursor: 'pointer', overflow: 'hidden', textOverflow: 'ellipsis' }}
							label={
								<Typography noWrap variant="body2">
									{cellData.title}
								</Typography>
							}
						/>
					)}
				</CustomCell>
			);
		});
	});
});
