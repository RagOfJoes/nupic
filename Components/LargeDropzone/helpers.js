/**
 * Gets pre-existing File or newly uploaded file
 * and creates a thumbnail
 * @param {File|String} file
 */
export const getPreview = (file) => {
	return Object.assign(file, {
		preview: file.url || URL.createObjectURL(file),
	});
};

/**
 * Convert a number to appropriate
 * by value
 * @param {Number} bytes
 */
export const bytesToSize = (bytes) => {
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	if (bytes == 0) return '0 Byte';
	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

/**
 * @param {String} name
 */
export const formatFileName = (name) => {
	const date = moment().format('YYYYMMDD');
	const randomString = Math.random().toString(36).substring(2, 7);
	const cleanFileName = name.toLowerCase().replace(/[^a-z0-9]/g, '-');

	return `images/${date}-${randomString}-${cleanFileName}`.substring(0, 60);
};
