/** Module: Browser */

type Browser = typeof Browser;
declare namespace Browser {

	/**
	 * Pops up a dialog box with a text input box in the user's browser.
	 * 
	 * <p>The inputBox method raises a client-side input box that displays the given prompt to the
	 * user. Note that this function causes the server-side script to be suspended. It resumes
	 * automatically after the user clears the dialog, but JDBC connections don't persist across the
	 * suspension.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below sets the value of name to the name input by the user, or &#39;cancel&#39;.
	 * var name = Browser.inputBox(&#39;Enter your name&#39;);
	 * </code></pre>
	 * 
	 * This method is not recommended. Instead, use a <a
	 * href="/apps-script/guides/dialogs#prompt_dialogs">UI prompt</a>.
	 * 
	 * @param prompt - The text to be displayed in the dialog box.
	 * 
	 * @returns The text entered by the user (or 'cancel' for a canceled or dismissed dialog).
	 */
	function inputBox(
		prompt: string
	): string
	/**
	 * Pops up a dialog box with a text input box in the user's browser.
	 * 
	 * <p>The inputBox method raises a client-side input box that displays the given prompt to the
	 * user, and offers a choice of buttons to be displayed. Note that this function causes the
	 * server-side script to be suspended. It resumes automatically after the user clears the dialog,
	 * but JDBC connections don't persist across the suspension.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below sets the value of name to the name input by the user, or &#39;cancel&#39;.
	 * var name = Browser.inputBox(&#39;Enter your name&#39;, Browser.Buttons.OK_CANCEL);
	 * </code></pre>
	 * 
	 * This method is not recommended. Instead, use a <a
	 * href="/apps-script/guides/dialogs#prompt_dialogs">UI prompt</a>.
	 * 
	 * @param prompt - The text to be displayed in the dialog box.
	 * @param buttons - The type of button set to use.
	 * 
	 * @returns The text entered by the user (or 'cancel' for a canceled or dismissed dialog).
	 */
	function inputBox(
		prompt: string,
		buttons: ButtonSet
	): string
	/**
	 * Pops up a dialog box with a text input box in the user's browser.
	 * 
	 * <p>The inputBox method raises a client side input box with the given title, that displays the
	 * given prompt to the user, and offers a choice of buttons to be displayed. Note that this
	 * function causes the server-side script to be suspended. It resumes automatically after the user
	 * clears the dialog, but JDBC connections don't persist across the suspension.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below sets the value of name to the name input by the user, or &#39;cancel&#39;.
	 * var name = Browser.inputBox(&#39;ID Check&#39;, &#39;Enter your name&#39;, Browser.Buttons.OK_CANCEL);
	 * </code></pre>
	 * 
	 * This method is not recommended. Instead, use a <a
	 * href="/apps-script/guides/dialogs#prompt_dialogs">UI prompt</a>.
	 * 
	 * @param title - The title for the dialog box.
	 * @param prompt - The text to be displayed in the dialog box.
	 * @param buttons - The type of button set to use.
	 * 
	 * @returns The text entered by the user (or 'cancel' for a canceled or dismissed dialog).
	 */
	function inputBox(
		title: string,
		prompt: string,
		buttons: ButtonSet
	): string

	/**
	 * Pops up a dialog box with the given message and an OK button in the user's browser.
	 * 
	 * <p>The msgBox method raises a client-side message box that displays the given message to the
	 * user. Note that this method causes the server-side script to be suspended. It resumes
	 * automatically after the user clears the dialog, but JDBC connections don't persist across the
	 * suspension.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below displays &quot;hello world&quot; in a dialog box with an OK button
	 * Browser.msgBox(&#39;hello world&#39;);
	 * </code></pre>
	 * 
	 * This method is not recommended. Instead, use a <a
	 * href="/apps-script/guides/dialogs#alert_dialogs">UI alert</a> dialog.
	 * 
	 * @param prompt - The text to be displayed in the dialog box.
	 * 
	 * @returns The lower case text of the button that is clicked by the user (or 'cancel' for a
	 *     dismissed dialog).
	 */
	function msgBox(
		prompt: string
	): string
	/**
	 * Pops up a dialog box with the given message and specified buttons in the user's browser.
	 * 
	 * <p>The msgBox method raises a client-side message box that displays the given message to the
	 * user, and offers a choice of buttons to be displayed. Note that this method causes the
	 * server-side script to be suspended. It resumes automatically after the user clears the dialog,
	 * but JDBC connections don't persist across the suspension.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below displays &quot;hello world&quot; in a dialog box with OK and Cancel buttons.
	 * Browser.msgBox(&#39;hello world&#39;, Browser.Buttons.OK_CANCEL);
	 * </code></pre>
	 * 
	 * This method is not recommended. Instead, use a <a
	 * href="/apps-script/guides/dialogs#alert_dialogs">UI alert</a> dialog.
	 * 
	 * @param prompt - The text to be displayed in the dialog box.
	 * @param buttons - The type of button set to use.
	 * 
	 * @returns The lower case text of the button that is clicked by the user (or 'cancel' for a
	 *     dismissed dialog).
	 */
	function msgBox(
		prompt: string,
		buttons: ButtonSet
	): string
	/**
	 * Pops up a dialog box with the given title, message and specified buttons in the user's browser.
	 * 
	 * <p>The msgBox method raises a client-side message box with the given title, that displays the
	 * given message to the user, and offers a choice of buttons to be displayed. Note that this
	 * method causes the server-side script to be suspended. It resumes automatically after the user
	 * clears the dialog, but JDBC connections don't persist across the suspension.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below displays &quot;hello world&quot; in a dialog box with a custom title and Yes and
	 * // No buttons
	 * Browser.msgBox(&#39;Greetings&#39;, &#39;hello world&#39;, Browser.Buttons.YES_NO);
	 * </code></pre>
	 * 
	 * This method is not recommended. Instead, use a <a
	 * href="/apps-script/guides/dialogs#alert_dialogs">UI alert</a> dialog.
	 * 
	 * @param title - The title of the dialog box.
	 * @param prompt - The text to be displayed in the dialog box.
	 * @param buttons - The type of button set to use.
	 * 
	 * @returns The lower case text of the button that is clicked by the user (or 'cancel' for a
	 *     dismissed dialog).
	 */
	function msgBox(
		title: string,
		prompt: string,
		buttons: ButtonSet
	): string


}
