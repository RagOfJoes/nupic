import PropTypes from 'prop-types';
import NeumorphInput from './NEUInput';
import refType from '@material-ui/utils/refType';

NeumorphInput.propTypes = {
	/**
	 * This prop helps users to fill forms faster, especially on mobile devices.
	 * The name can be confusing, as it's more like an autofill.
	 * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
	 */
	autoComplete: PropTypes.string,
	/**
	 * If `true`, the `input` element will be focused during the first mount.
	 */
	autoFocus: PropTypes.bool,
	/**
	 * @ignore
	 */
	children: PropTypes.node,
	/**
	 * Override or extend the styles applied to the component.
	 * See [CSS API](#css) below for more details.
	 */
	classes: PropTypes.object,
	/**
	 * @ignore
	 */
	className: PropTypes.string,
	/**
	 * The color of the component. It supports those theme colors that make sense for this component.
	 */
	color: PropTypes.oneOf(['primary', 'secondary']),
	/**
	 * The default value of the `input` element.
	 */
	defaultValue: PropTypes.any,
	/**
	 * If `true`, the `input` element will be disabled.
	 */
	disabled: PropTypes.bool,
	/**
	 * If `true`, the label will be displayed in an error state.
	 */
	error: PropTypes.bool,
	/**
	 * Props applied to the [`FormHelperText`](/api/form-helper-text/) element.
	 */
	FormHelperTextProps: PropTypes.object,
	/**
	 * If `true`, the input will take up the full width of its container.
	 */
	fullWidth: PropTypes.bool,
	/**
	 * The helper text content.
	 */
	helperText: PropTypes.node,
	/**
	 * @ignore
	 */
	hiddenLabel: PropTypes.bool,
	/**
	 * The id of the `input` element.
	 * Use this prop to make `label` and `helperText` accessible for screen readers.
	 */
	id: PropTypes.string,
	/**
	 * Props applied to the [`InputLabel`](/api/input-label/) element.
	 */
	InputLabelProps: PropTypes.object,
	/**
	 * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
	 */
	inputProps: PropTypes.object,
	/**
	 * Props applied to the Input element.
	 * It will be a [`FilledInput`](/api/filled-input/),
	 * [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
	 * component depending on the `variant` prop value.
	 */
	InputProps: PropTypes.object,
	/**
	 * Pass a ref to the `input` element.
	 */
	inputRef: refType,
	/**
	 * The label content.
	 */
	label: PropTypes.node,
	/**
	 * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
	 */
	margin: PropTypes.oneOf(['dense', 'none', 'normal']),
	/**
	 * If `true`, a textarea element will be rendered instead of an input.
	 */
	multiline: PropTypes.bool,
	/**
	 * Name attribute of the `input` element.
	 */
	name: PropTypes.string,
	/**
	 * @ignore
	 */
	onBlur: PropTypes.func,
	/**
	 * Callback fired when the value is changed.
	 *
	 * @param {object} event The event source of the callback.
	 * You can pull out the new value by accessing `event.target.value` (string).
	 */
	onChange: PropTypes.func,
	/**
	 * @ignore
	 */
	onFocus: PropTypes.func,
	/**
	 * The short hint displayed in the input before the user enters a value.
	 */
	placeholder: PropTypes.string,
	/**
	 * If `true`, the label is displayed as required and the `input` element will be required.
	 */
	required: PropTypes.bool,
	/**
	 * Number of rows to display when multiline option is set to true.
	 */
	rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	/**
	 * Maximum number of rows to display when multiline option is set to true.
	 */
	rowsMax: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	/**
	 * Render a [`Select`](/api/select/) element while passing the Input element to `Select` as `input` parameter.
	 * If this option is set you must pass the options of the select as children.
	 */
	select: PropTypes.bool,
	/**
	 * Props applied to the [`Select`](/api/select/) element.
	 */
	SelectProps: PropTypes.object,
	/**
	 * The size of the text field.
	 */
	size: PropTypes.oneOf(['medium', 'small']),
	/**
	 * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
	 */
	type: PropTypes.string,
	/**
	 * The value of the `input` element, required for a controlled component.
	 */
	value: PropTypes.any,
};

export default NeumorphInput;
