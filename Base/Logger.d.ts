/** Module: Logger */

type Logger = typeof Logger;
declare namespace Logger {
	/**
	 * Clears the log.
	 */
	function clear(): void
	/**
	 * Returns a complete list of messages in the current log. This method can be used to save or
	 * email the entire log output generated during script execution.
	 * 
	 * <pre class="prettyprint">
	 * // Generate a log, then email it to the person who ran the script.
	 * var files = DriveApp.getFiles();
	 * while (files.hasNext()) {
	 *   Logger.log(files.next().getName());
	 * }
	 * var recipient = Session.getActiveUser().getEmail();
	 * var subject = 'A list of files in your Google Drive';
	 * var body = Logger.getLog();
	 * MailApp.sendEmail(recipient, subject, body);
	 * </pre>
	 * 
	 * @returns the log from the logging console
	 */
	function getLog(): string
	/**
	 * Writes the string to the logging console. To view the logged output, select <strong>View > Show
	 * logs</strong>. This can be very useful for debugging scripts.
	 * 
	 * @param data - the message to log
	 * 
	 * @returns the Logger, for chaining.
	 */
	function log(
		data: object
	): Logger
	/**
	 * Writes a formatted string to the logging console, using the format and values provided. The
	 * string can include multiple <code>%s</code> placeholders, which are replaced with corresponding
	 * values from the list of arguments, converted to strings.
	 * 
	 * <pre class="prettyprint">
	 * // Log the number of Google Groups you belong to.
	 * var groups = GroupsApp.getGroups();
	 * Logger.log('You are a member of %s Google Groups.', groups.length);
	 * </pre>
	 * 
	 * @param format - a format string that contains as many instances of <code>%s</code> as the number of
	 *     <code>values</code> arguments
	 * @param values - a variable number of values to insert into the format string
	 * 
	 * @returns the Logger, for chaining
	 */
	function log(
		format: string,
		...values: Array<object>
	): Logger


}
