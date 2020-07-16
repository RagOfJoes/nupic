import PropTypes from 'prop-types';
import NeumorphSelect from './NEUSelect';

NeumorphSelect.propTypes = {
	/**
	 * If `true`, the width of the popover will automatically be set according to the items inside the
	 * menu, otherwise it will be at least the width of the select input.
	 */
	autoWidth: PropTypes.bool,
	/**
	 * The option elements to populate the select with.
	 * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
	 *
	 * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
	 */
	children: PropTypes.node,
	/**
	 * Override or extend the styles applied to the component.
	 * See [CSS API](#css) below for more details.
	 */
	classes: PropTypes.object,
	/**
	 * The default element value. Use when the component is not controlled.
	 */
	defaultValue: PropTypes.any,
	/**
	 * If `true`, a value is displayed even if no items are selected.
	 *
	 * In order to display a meaningful value, a function should be passed to the `renderValue` prop which returns the value to be displayed when no items are selected.
	 * You can only use it when the `native` prop is `false` (default).
	 */
	displayEmpty: PropTypes.bool,
	/**
	 * The icon that displays the arrow.
	 */
	IconComponent: PropTypes.elementType,
	/**
	 * The `id` of the wrapper element or the `select` element when `native`.
	 */
	id: PropTypes.string,
	/**
	 * An `Input` element; does not have to be a material-ui specific `Input`.
	 */
	input: PropTypes.element,
	/**
	 * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
	 * When `native` is `true`, the attributes are applied on the `select` element.
	 */
	inputProps: PropTypes.object,
	/**
	 * See [OutlinedInput#label](/api/outlined-input/#props)
	 */
	label: PropTypes.node,
	/**
	 * The ID of an element that acts as an additional label. The Select will
	 * be labelled by the additional label and the selected value.
	 */
	labelId: PropTypes.string,
	/**
	 * See [OutlinedInput#label](/api/outlined-input/#props)
	 */
	labelWidth: PropTypes.number,
	/**
	 * Props applied to the [`Menu`](/api/menu/) element.
	 */
	MenuProps: PropTypes.object,
	/**
	 * If `true`, `value` must be an array and the menu will support multiple selections.
	 */
	multiple: PropTypes.bool,
	/**
	 * If `true`, the component will be using a native `select` element.
	 */
	native: PropTypes.bool,
	/**
	 * Callback function fired when a menu item is selected.
	 *
	 * @param {object} event The event source of the callback.
	 * You can pull out the new value by accessing `event.target.value` (any).
	 * @param {object} [child] The react element that was selected when `native` is `false` (default).
	 */
	onChange: PropTypes.func,
	/**
	 * Callback fired when the component requests to be closed.
	 * Use in controlled mode (see open).
	 *
	 * @param {object} event The event source of the callback.
	 */
	onClose: PropTypes.func,
	/**
	 * Callback fired when the component requests to be opened.
	 * Use in controlled mode (see open).
	 *
	 * @param {object} event The event source of the callback.
	 */
	onOpen: PropTypes.func,
	/**
	 * Control `select` open state.
	 * You can only use it when the `native` prop is `false` (default).
	 */
	open: PropTypes.bool,
	/**
	 * Render the selected value.
	 * You can only use it when the `native` prop is `false` (default).
	 *
	 * @param {any} value The `value` provided to the component.
	 * @returns {ReactNode}
	 */
	renderValue: PropTypes.func,
	/**
	 * Props applied to the clickable div element.
	 */
	SelectDisplayProps: PropTypes.object,
	/**
	 * The input value. Providing an empty string will select no options.
	 * This prop is required when the `native` prop is `false` (default).
	 * Set to an empty string `''` if you don't want any of the available options to be selected.
	 *
	 * If the value is an object it must have reference equality with the option in order to be selected.
	 * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
	 */
	value: PropTypes.any,
	/**
	 * The variant to use.
	 */
	variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
};

export default NeumorphSelect;
