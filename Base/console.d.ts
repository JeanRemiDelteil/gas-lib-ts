/** Module: console */

type console = typeof console;
declare namespace console {
	/**
	 * Outputs a blank ERROR level message to Stackdriver Logging.
	 */
	function error(): void
	/**
	 * Outputs an ERROR level message to Stackdriver Logging.
	 * 
	 * @param formatOrObject - a string containing zero or more substitution strings, or a JavaScript
	 *     object to be logged as a JavaScript object if no other parameters.
	 * @param values - objects with which to replace substitution strings within the message. This gives
	 *     you additional control over the format of the output.
	 */
	function error(
		formatOrObject: object,
		...values: Array<object>
	): void

	/**
	 * Outputs blank INFO level message to Stackdriver Logging.
	 */
	function info(): void
	/**
	 * Outputs an INFO level message to Stackdriver Logging.
	 * 
	 * @param formatOrObject - a string containing zero or more substitution strings, or a JavaScript
	 *     object to be logged as a JavaScript object if no other parameters.
	 * @param values - objects with which to replace substitution strings within the message. This gives
	 *     you additional control over the format of the output.
	 */
	function info(
		formatOrObject: object,
		...values: Array<object>
	): void

	/**
	 * Outputs a blank DEBUG level message to Stackdriver Logging.
	 */
	function log(): void
	/**
	 * Outputs a DEBUG level message to Stackdriver Logging.
	 * 
	 * @param formatOrObject - a string containing zero or more substitution strings, or a JavaScript
	 *     object to be logged as a JavaScript object if no other parameters.
	 * @param values - objects with which to replace substitution strings within the message. This gives
	 *     you additional control over the format of the output.
	 */
	function log(
		formatOrObject: object,
		...values: Array<object>
	): void

	/**
	 * Starts a timer you can use to track how long an operation takes.
	 * 
	 * @param label - The name to give the new timer.
	 */
	function time(
		label: string
	): void
	/**
	 * Stops a timer that was previously started by calling <code>console.time()</code>. The time duration
	 * is logged in Stackdriver.
	 * 
	 * @param label - the name of the timer to stop.
	 */
	function timeEnd(
		label: string
	): void
	/**
	 * Outputs a blank WARNING level message to Stackdriver Logging.
	 */
	function warn(): void
	/**
	 * Outputs a WARNING level message to Stackdriver Logging.
	 * 
	 * @param formatOrObject - a string containing zero or more substitution strings, or a JavaScript
	 *     object to be logged as a JavaScript object if no other parameters.
	 * @param values - objects with which to replace substitution strings within the message. This gives
	 *     you additional control over the format of the output.
	 */
	function warn(
		formatOrObject: object,
		...values: Array<object>
	): void


}
