import moment from 'moment';
import { useSnackbar } from 'notistack';
import { useQuery } from '@apollo/client';
import { GetEntries } from 'lib/graphql/Queries';
import { handleAuthError } from 'lib/graphql/handlers';
import React, { useState, useContext, useMemo, createContext } from 'react';

const CalendarContext = createContext({
	data: {},
	error: null,
	loading: false,
	fetchMore: () => {},

	entryModalOpen: false,
	toggleEntryModal: () => {},

	selectedDate: new Date(),
	setSelectedDate: () => {},

	selectedEntry: { id: '', date: { creation: new Date() } },
	setSelectedEntry: () => {},

	month: 0,
	setMonth: () => {},

	year: 0,
	setYear: () => {},

	isFetching: false,
	toggleFetching: () => {},
});

const CalendarProvider = ({ children }) => {
	const { enqueueSnackbar } = useSnackbar();

	const today = moment();

	const [entryModalOpen, toggleEntryModal] = useState(false);

	const [selectedDate, setSelectedDate] = useState();
	const [selectedEntry, setSelectedEntry] = useState();

	const [month, setMonth] = useState(today.month());
	const [year, setYear] = useState(today.year());
	const [isFetching, toggleFetching] = useState(true);

	const { data, error, loading, fetchMore } = useQuery(GetEntries, {
		variables: { month: month + 1, year },
		onCompleted: () => toggleFetching(false),
		onError: async (e) => await handleAuthError(e, null, enqueueSnackbar),
	});

	const value = useMemo(
		() => ({
			loading,
			fetchMore,
			error: error?.message,
			data: data?.getEntries,

			entryModalOpen,
			toggleEntryModal,

			selectedEntry,
			setSelectedEntry,

			selectedDate,
			setSelectedDate,

			month,
			setMonth,

			year,
			setYear,

			isFetching,
			toggleFetching,
		}),
		[month, year, data, error, loading, entryModalOpen, selectedEntry]
	);

	return <CalendarContext.Provider value={value}>{children}</CalendarContext.Provider>;
};

export default CalendarProvider;

export const useCalendar = () => useContext(CalendarContext);
