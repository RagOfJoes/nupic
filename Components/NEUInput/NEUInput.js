import * as React from 'react';
import NEUSelect from 'Components/NEUSelect';
import { getInsetNeumorph } from 'lib/colors';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import withStyles from '@material-ui/core/styles/withStyles';
import FormHelperText from '@material-ui/core/FormHelperText';

export const styles = ({ shape }) => ({
	root: {
		overflow: 'hidden',
		borderRadius: shape.borderRadius,
		...getInsetNeumorph({ spread: 2, blurLength: 4 }),

		'&:hover': {
			backgroundColor: 'transparent',
		},

		'&:before': {
			borderBottom: 'transparent',
		},

		'&:hover:before': {
			borderBottom: 'transparent',
		},

		'&:after': {
			borderBottom: 'transparent',
		},
	},
	focused: {
		backgroundColor: 'transparent !important',
	},
	multiline: {
		minHeight: 78,
	},
});

export const selectStyles = ({}) => ({
	select: {
		'&:focus': {
			backgroundColor: 'transparent',
		},
	},
});

const NeumorphInput = React.forwardRef(function (props, ref) {
	const {
		autoComplete,
		autoFocus = false,
		children,
		classes,
		className,
		color = 'primary',
		defaultValue,
		disabled = false,
		error = false,
		FormHelperTextProps,
		fullWidth = false,
		helperText,
		hiddenLabel,
		id,
		InputLabelProps,
		inputProps,
		InputProps,
		inputRef,
		label,
		multiline,
		name,
		onBlur,
		onChange,
		onFocus,
		placeholder,
		required = false,
		rows,
		rowsMax,
		select,
		SelectProps,
		type,
		value = '',
		...other
	} = props;

	const InputMore = {};

	const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
	const inputLabelId = label && id ? `${id}-label` : undefined;

	if (select) {
		// unset defaults from textbox inputs
		if (!SelectProps || !SelectProps.native) {
			InputMore.id = undefined;
		}
		InputMore['aria-describedby'] = undefined;
	}

	const InputElement = (
		<FilledInput
			id={id}
			name={name}
			type={type}
			rows={rows}
			value={value}
			onBlur={onBlur}
			rowsMax={rowsMax}
			onFocus={onFocus}
			classes={classes}
			inputRef={inputRef}
			onChange={onChange}
			multiline={multiline}
			autoFocus={autoFocus}
			fullWidth={fullWidth}
			inputProps={inputProps}
			placeholder={placeholder}
			autoComplete={autoComplete}
			defaultValue={defaultValue}
			aria-describedby={helperTextId}
			{...InputMore}
			{...InputProps}
		/>
	);

	return (
		<FormControl
			ref={ref}
			error={error}
			color={color}
			variant="filled"
			disabled={disabled}
			required={required}
			fullWidth={fullWidth}
			className={className}
			hiddenLabel={hiddenLabel}
			{...other}
		>
			<InputLabel htmlFor={id} id={inputLabelId} {...InputLabelProps}>
				{label}
			</InputLabel>

			{select ? (
				<NEUSelect
					id={id}
					value={value}
					input={InputElement}
					labelId={inputLabelId}
					aria-describedby={helperTextId}
					{...SelectProps}
				>
					{children}
				</NEUSelect>
			) : (
				InputElement
			)}

			{helperText && (
				<FormHelperText id={helperTextId} {...FormHelperTextProps}>
					{helperText}
				</FormHelperText>
			)}
		</FormControl>
	);
});

export default withStyles(styles, { name: 'NEUInput' })(NeumorphInput);
