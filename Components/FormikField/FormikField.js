import { getIn } from 'formik';
import React, { memo } from 'react';
import NEUInput from 'Components/NEUInput';

export default memo(({ field, form, ...props }) => {
	const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);

	return <NEUInput fullWidth margin="dense" helperText={errorText} error={!!errorText} {...field} {...props} />;
});
