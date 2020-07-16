import moment from 'moment';

/**
 * @param {String} name
 */
export const formatFileName = (name) => {
	const date = moment().format('YYYYMMDD');
	const randomString = Math.random().toString(36).substring(2, 7);
	const cleanFileName = name.toLowerCase().replace(/[^a-z0-9]/g, '-');

	return `images/${date}-${randomString}-${cleanFileName}`.substring(0, 60);
};

export const formatEntries = (name) => {
	const date = moment().format('YYYYMMDD');
	const randomString = Math.random().toString(36).substring(2, 7);
	const cleanFileName = name.toLowerCase().replace(/[^a-z0-9]/g, '-');

	return `entries/${date}-${randomString}-${cleanFileName}`.substring(0, 60);
};
