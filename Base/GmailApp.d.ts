/** Module: GmailApp */

type GmailApp = typeof GmailApp;
declare namespace GmailApp {
	/**
	 * Creates a draft email message. The size of the email (including headers) is <a
	 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below creates a draft email with the current date and time.
	 * var now = new Date();
	 * GmailApp.createDraft(&quot;mike@example.com&quot;, &quot;current time&quot;, &quot;The time is: &quot; + now.toString());
	 * </code></pre>
	 * 
	 * @param recipient - comma separated list of email addresses
	 * @param subject - subject of the email
	 * @param body - body of the email
	 * 
	 * @returns the newly created GmailDraft
	 */
	function createDraft(
		recipient: string,
		subject: string,
		body: string
	): GmailApp.GmailDraft
	/**
	 * Creates a draft email message with optional arguments. The email can contain plain text or an
	 * HTML body. The size of the email (including headers, but excluding attachments) is <a
	 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Create a draft email with a file from Google Drive attached as a PDF.
	 * var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
	 * GmailApp.createDraft(&#39;mike@example.com&#39;, &#39;Attachment example&#39;, &#39;Please see attached file.&#39;, {
	 *     attachments: [file.getAs(MimeType.PDF)],
	 *     name: &#39;Automatic Emailer Script&#39;
	 * });
	 * </code></pre>
	 * 
	 * @param recipient - the addresses of the recipient
	 * @param subject - the subject line
	 * @param body - the body of the email
	 * @param options - a JavaScript object that specifies advanced parameters, as listed below
	 * 
	 * @returns the newly created GmailDraft
	 */
	function createDraft(
		recipient: string,
		subject: string,
		body: string,
		options: object
	): GmailApp.GmailDraft

	/**
	 * Create a new user label of the given name.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Creates the label @FOO and logs label: FOO
	 * Logger.log(&quot;label: &quot; + GmailApp.createLabel(&quot;FOO&quot;));
	 * </code></pre>
	 * 
	 * @param name - the name of the new label
	 * 
	 * @returns the newly created label
	 */
	function createLabel(
		name: string
	): GmailApp.GmailLabel
	/**
	 * Deletes the specified label.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Have to get the label by name first
	 * var label = GmailApp.getUserLabelByName(&quot;FOO&quot;);
	 * GmailApp.deleteLabel(label);
	 * </code></pre>
	 * 
	 * @param label - the label to delete
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function deleteLabel(
		label: GmailApp.GmailLabel
	): GmailApp
	/**
	 * Gets a list of the emails that are set up as aliases for this account in Gmail.
	 * 
	 * <p>You can send a message from any of these aliases by using the "from" optional argument.
	 * 
	 * <pre class="prettyprint">
	 * // Log the aliases for this Gmail account and send an email as the first one.
	 * var me = Session.getActiveUser().getEmail();
	 * var aliases = GmailApp.getAliases();
	 * Logger.log(aliases);
	 * if (aliases.length > 0) {
	 *   GmailApp.sendEmail(me, 'From an alias', 'A message from an alias!', {'from': aliases[0]});
	 * } else {
	 *   GmailApp.sendEmail(me, 'No aliases found', 'You have no aliases.');
	 * }
	 * </pre>
	 * 
	 * @returns an array of aliases for this account
	 */
	function getAliases(): string[]
	/**
	 * Retrieves all chat threads irrespective of labels.
	 * 
	 * <p>This call will fail when the size of all threads is too large for the system to handle.
	 * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
	 * specify ranges of the threads to retrieve in each call.
	 * 
	 * <pre class="prettyprint"><code>
	 * var threads = GmailApp.getChatThreads();
	 * Logger.log(&quot;# of chat threads: &quot; + threads.length);
	 * </code></pre>
	 * 
	 * @returns an array of chat Gmail threads
	 */
	function getChatThreads(): GmailApp.GmailThread[]
	/**
	 * Retrieves a range of chat threads irrespective of labels.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Get first 50 chat threads
	 * var threads = GmailApp.getChatThreads(0,50);
	 * // Will log no more than 50.0
	 * Logger.log(threads.length);
	 * Logger.log(threads[0].getFirstMessageSubject());
	 * </code></pre>
	 * 
	 * @param start - the index of the first thread to retrieve
	 * @param max - the maximum number of threads to retrieve
	 * 
	 * @returns an array of chat Gmail threads
	 */
	function getChatThreads(
		start: number,
		max: number
	): GmailApp.GmailThread[]

	/**
	 * Retrieve an email message draft by ID.
	 * 
	 * <p>Use this in conjunction with getId() on Gmail drafts.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Get the first draft message in your drafts folder
	 * var draft = GmailApp.getDrafts()[0];
	 * // Get its ID
	 * var draftId = draft.getId();
	 * // Now fetch the same draft using that ID.
	 * var draftById = GmailApp.getDraft(draftId);
	 * // Should always log true as they should be the same message
	 * Logger.log(draft.getMessage().getSubject() == draftById.getMessage().getSubject());
	 * </code></pre>
	 * 
	 * @param draftId - the ID of the draft to retrieve
	 * 
	 * @returns the draft with the given ID
	 */
	function getDraft(
		draftId: string
	): GmailApp.GmailDraft
	/**
	 * Retrieves all draft messages.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Logs the number of draft messages
	 * var drafts = GmailApp.getDraftMessages();
	 * Logger.log(drafts.length);
	 * </code></pre>
	 * 
	 * @returns an array of draft Gmail messages
	 */
	function getDraftMessages(): GmailApp.GmailMessage[]
	/**
	 * Gets all Gmail draft messages.
	 * 
	 * <pre class="prettyprint"><code>
	 * var drafts = GmailApp.getDrafts();
	 * for (var i = 0; i &lt; drafts.length; i++) {
	 *   Logger.log(drafts[i].getId());
	 * }
	 * </code></pre>
	 * 
	 * @returns an array of Gmail draft messages
	 */
	function getDrafts(): GmailApp.GmailDraft[]
	/**
	 * Retrieves all Inbox threads irrespective of labels.
	 * 
	 * <p>This call will fail when the size of all threads is too large for the system to handle.
	 * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
	 * specify ranges of the threads to retrieve in each call.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Log the subject lines of your Inbox
	 * var threads = GmailApp.getInboxThreads();
	 * for (var i = 0; i &lt; threads.length; i++) {
	 *   Logger.log(threads[i].getFirstMessageSubject());
	 * }
	 * </code></pre>
	 * 
	 * @returns an array of Gmail threads in the Inbox
	 */
	function getInboxThreads(): GmailApp.GmailThread[]
	/**
	 * Retrieves a range of Inbox threads irrespective of labels.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Log the subject lines of up to the first 50 emails in your Inbox
	 * var threads = GmailApp.getInboxThreads(0, 50);
	 * for (var i = 0; i &lt; threads.length; i++) {
	 *   Logger.log(threads[i].getFirstMessageSubject());
	 * }
	 * </code></pre>
	 * 
	 * @param start - the index of the first thread to retrieve
	 * @param max - the maximum number of threads to retrieve
	 * 
	 * @returns an array of Gmail threads in the Inbox
	 */
	function getInboxThreads(
		start: number,
		max: number
	): GmailApp.GmailThread[]

	/**
	 * Gets the number of unread threads in the inbox.
	 * 
	 * <pre class="prettyprint"><code>
	 * Logger.log(&quot;Messages unread in inbox: &quot; + GmailApp.getInboxUnreadCount());
	 * </code></pre>
	 * 
	 * @returns the number of threads in the inbox that have unread messages
	 */
	function getInboxUnreadCount(): number
	/**
	 * Gets a message by ID.
	 * 
	 * <p>Use this in conjunction with getId() on Gmail messages.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Get the first message in the first thread of your inbox
	 * var message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
	 * // Get its ID
	 * var messageId = message.getId();
	 * // Now fetch the same message using that ID.
	 * var messageById = GmailApp.getMessageById(messageId);
	 * // Should always log true as they should be the same message
	 * Logger.log(message.getSubject() == messageById.getSubject());
	 * </code></pre>
	 * 
	 * @param id - the ID of the message to retrieve
	 * 
	 * @returns the message with the given ID
	 */
	function getMessageById(
		id: string
	): GmailApp.GmailMessage
	/**
	 * Retrieve all messages in the specified thread.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Log all the subject lines in the first thread of your inbox
	 * var thread = GmailApp.getInboxThreads(0, 1)[0];
	 * var messages = GmailApp.getMessagesForThread(thread);
	 * for (var i = 0 ; i &lt; messages.length; i++) {
	 *   Logger.log(&quot;subject: &quot; + messages[i].getSubject());
	 * }
	 * </code></pre>
	 * 
	 * @param thread - the thread of messages to retrieve
	 * 
	 * @returns array of messages corresponding to this thread
	 */
	function getMessagesForThread(
		thread: GmailApp.GmailThread
	): GmailApp.GmailMessage[]
	/**
	 * Retrieve all messages in the specified threads.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Log the subject lines of all messages in the first two threads of your inbox
	 * var thread = GmailApp.getInboxThreads(0, 2);
	 * var messages = GmailApp.getMessagesForThreads(thread);
	 * for (var i = 0 ; i &lt; messages.length; i++) {
	 *   for (var j = 0; j &lt; messages[i].length; j++) {
	 *     Logger.log(&quot;subject: &quot; + messages[i][j].getSubject());
	 *   }
	 * }
	 * </code></pre>
	 * 
	 * @param threads - the threads of messages to retrieve
	 * 
	 * @returns an array of arrays of messages, where each item in the outer array corresponds to a
	 *     thread and the inner array contains the messages in that thread
	 */
	function getMessagesForThreads(
		threads: GmailApp.GmailThread[]
	): GmailApp.GmailMessage[][]
	/**
	 * Retrieves all Priority Inbox threads irrespective of labels.
	 * 
	 * <p>This call will fail when the size of all threads is too large for the system to handle.
	 * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
	 * specify ranges of the threads to retrieve in each call.
	 * 
	 * <pre class="prettyprint"><code>
	 * Logger.log(&quot;# of messages in your Priority Inbox: &quot; +
	 *            GmailApp.getPriorityInboxThreads().length);
	 * </code></pre>
	 * 
	 * @returns an array of Gmail threads in the Priority Inbox
	 */
	function getPriorityInboxThreads(): GmailApp.GmailThread[]
	/**
	 * Retrieves a range of Priority Inbox threads irrespective of labels.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Will log some number 2 or less
	 * Logger.log(&quot;# of messages in your Priority Inbox: &quot; +
	 *            GmailApp.getPriorityInboxThreads(0, 2).length);
	 * </code></pre>
	 * 
	 * @param start - the index of the first thread to retrieve
	 * @param max - the maximum number of threads to retrieve
	 * 
	 * @returns an array of Gmail threads in the Priority Inbox
	 */
	function getPriorityInboxThreads(
		start: number,
		max: number
	): GmailApp.GmailThread[]

	/**
	 * Gets the number of unread threads in the Priority Inbox.
	 * 
	 * <pre class="prettyprint"><code>
	 * Logger.log(&quot;Number of unread emails in your Priority Inbox : &quot; +
	 *            GmailApp.getPriorityInboxUnreadCount());
	 * </code></pre>
	 * 
	 * @returns the number of threads in the Priority Inbox that have unread messages
	 */
	function getPriorityInboxUnreadCount(): number
	/**
	 * Retrieves all spam threads irrespective of labels.
	 * 
	 * <p>This call will fail when the size of all threads is too large for the system to handle.
	 * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
	 * specify ranges of the threads to retrieve in each call.
	 * 
	 * <pre class="prettyprint"><code>
	 * Logger.log(&quot;# of total spam threads: &quot; + GmailApp.getSpamThreads().length);
	 * </code></pre>
	 * 
	 * @returns an array of Gmail threads in the spam folder
	 */
	function getSpamThreads(): GmailApp.GmailThread[]
	/**
	 * Retrieves a range of spam threads irrespective of labels.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Will log a number at most 5
	 * Logger.log(&quot;# of total spam threads: &quot; + GmailApp.getSpamThreads(0, 5).length);
	 * </code></pre>
	 * 
	 * @param start - the index of the first thread to retrieve
	 * @param max - the maximum number of threads to retrieve
	 * 
	 * @returns an array of Gmail threads in the spam folder
	 */
	function getSpamThreads(
		start: number,
		max: number
	): GmailApp.GmailThread[]

	/**
	 * Gets the number of unread threads that are spam.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Unless you actually read stuff in your spam folder, this should be the same as
	 * // the number of messages in your spam folder.
	 * Logger.log(&quot;# unread threads that are spam: &quot; + GmailApp.getSpamUnreadCount());
	 * </code></pre>
	 * 
	 * @returns the number spam threads that have unread messages
	 */
	function getSpamUnreadCount(): number
	/**
	 * Retrieves all starred threads irrespective of labels.
	 * 
	 * <p>This call will fail when the size of all threads is too large for the system to handle.
	 * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
	 * specify ranges of the threads to retrieve in each call.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Logs the number of starred threads
	 * Logger.log(&quot;# Starred threads: &quot; + GmailApp.getStarredThreads().length);
	 * </code></pre>
	 * 
	 * @returns an array of starred Gmail threads
	 */
	function getStarredThreads(): GmailApp.GmailThread[]
	/**
	 * Retrieves a range of starred threads irrespective of labels.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Logs the number of starred threads to a maximum of 5
	 * Logger.log(&quot;# Starred threads: &quot; + GmailApp.getStarredThreads(0, 5).length);
	 * </code></pre>
	 * 
	 * @param start - the index of the first thread to retrieve
	 * @param max - the maximum number of threads to retrieve
	 * 
	 * @returns an array of starred Gmail threads
	 */
	function getStarredThreads(
		start: number,
		max: number
	): GmailApp.GmailThread[]

	/**
	 * Gets the number of unread threads that are starred.
	 * 
	 * <pre class="prettyprint"><code>
	 * Logger.log(&quot;# unread and starred: &quot; + GmailApp.getStarredUnreadCount());
	 * </code></pre>
	 * 
	 * @returns the number of starred threads that have unread messages
	 */
	function getStarredUnreadCount(): number
	/**
	 * Gets a thread by ID.
	 * 
	 * <p>Use this in conjunction with getId() on Gmail threads.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Thread IDs can also be found in the location bar when you have a thread open in Gmail
	 * // get first inbox thread
	 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
	 * // Get the same thread by ID
	 * var threadById = GmailApp.getThreadById(firstThread.getId());
	 * // Verify they are the same
	 * Logger.log(firstThread.getFirstMessageSubject() == threadById.getFirstMessageSubject());
	 * </code></pre>
	 * 
	 * @param id - the ID of the thread to retrieve
	 * 
	 * @returns the thread with the given ID or null if not found
	 */
	function getThreadById(
		id: string
	): GmailApp.GmailThread
	/**
	 * Retrieves all trash threads irrespective of labels.
	 * 
	 * <p>This call will fail when the size of all threads is too large for the system to handle.
	 * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
	 * specify ranges of the threads to retrieve in each call.
	 * 
	 * <pre class="prettyprint"><code>
	 * Logger.log(&quot;# of total trash threads: &quot; + GmailApp.getTrashThreads().length);
	 * </code></pre>
	 * 
	 * @returns an array of Gmail threads in the trash
	 */
	function getTrashThreads(): GmailApp.GmailThread[]
	/**
	 * Retrieves a range of trash threads irrespective of labels.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Will log a number at most 5
	 * Logger.log(&quot;# of total trash threads: &quot; + GmailApp.getTrashThreads(0, 5).length);
	 * </code></pre>
	 * 
	 * @param start - the index of the first thread to retrieve
	 * @param max - the maximum number of threads to retrieve
	 * 
	 * @returns an array of Gmail threads in the trash
	 */
	function getTrashThreads(
		start: number,
		max: number
	): GmailApp.GmailThread[]

	/**
	 * Retrieves a label given the label name.
	 * 
	 * <pre class="prettyprint"><code>
	 * var labelObject = GmailApp.getUserLabelByName(&quot;myLabel&quot;);
	 * </code></pre>
	 * 
	 * @param name - the name of the label to retrieve
	 * 
	 * @returns the Gmail label with the given name
	 */
	function getUserLabelByName(
		name: string
	): GmailApp.GmailLabel
	/**
	 * Retrieves a list of user-created labels.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Logs all of the names of your labels
	 * var labels = GmailApp.getUserLabels();
	 * for (var i = 0; i &lt; labels.length; i++) {
	 *   Logger.log(&quot;label: &quot; + labels[i].getName());
	 * }
	 * </code></pre>
	 * 
	 * @returns array of user created labels
	 */
	function getUserLabels(): GmailApp.GmailLabel[]
	/**
	 * Marks this message read and forces the message to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Mark the first message in the first thread of your inbox as read
	 * var message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
	 * GmailApp.markMessageRead(message);
	 * </code></pre>
	 * 
	 * @param message - the message to mark as read
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function markMessageRead(
		message: GmailApp.GmailMessage
	): GmailApp
	/**
	 * Marks this message unread and forces the message to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Mark the first message in the first thread of your inbox as unread
	 * var message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
	 * GmailApp.markMessageUnread(message);
	 * </code></pre>
	 * 
	 * @param message - the message to mark as unread
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function markMessageUnread(
		message: GmailApp.GmailMessage
	): GmailApp
	/**
	 * Marks these messages read and forces the messages to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Mark first three messages in the first inbox thread as read.
	 * // Assumes that the first inbox thread has 3 messages in it.
	 * var threadMessages = GmailApp.getInboxThreads(0, 1)[0].getMessages();
	 * var messages = [threadMessages[0], threadMessages[1], threadMessages[2]];
	 * GmailApp.markMessagesRead(thread.getMessages());
	 * </code></pre>
	 * 
	 * @param messages - an array of messages to mark as read
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function markMessagesRead(
		messages: GmailApp.GmailMessage[]
	): GmailApp
	/**
	 * Marks these messages unread and forces the messages to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Mark first three messages in the first inbox thread as unread.
	 * // Assumes that the first inbox thread has 3 messages in it
	 * var threadMessages = GmailApp.getInboxThreads(0, 1)[0].getMessages();
	 * var messages = [threadMessages[0], threadMessages[1], threadMessages[2]];
	 * GmailApp.markMessagesUnread(thread.getMessages());
	 * </code></pre>
	 * 
	 * @param messages - an array of messages to mark as unread
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function markMessagesUnread(
		messages: GmailApp.GmailMessage[]
	): GmailApp
	/**
	 * Marks this thread as important and forces the thread to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Marks first inbox thread as important
	 * var thread = GmailApp.getInboxThreads(0, 1)[0];
	 * GmailApp.markThreadImportant(thread);
	 * </code></pre>
	 * 
	 * @param thread - the thread to mark as important
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function markThreadImportant(
		thread: GmailApp.GmailThread
	): GmailApp
	/**
	 * Marks this thread as read and forces the thread to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Marks first inbox thread as read
	 * var thread = GmailApp.getInboxThreads(0, 1)[0];
	 * GmailApp.markThreadRead(thread);
	 * </code></pre>
	 * 
	 * @param thread - the thread to mark as read
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function markThreadRead(
		thread: GmailApp.GmailThread
	): GmailApp
	/**
	 * Marks this thread as unimportant and forces the thread to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Marks first inbox thread as unimportant
	 * var thread = GmailApp.getInboxThreads(0, 1)[0];
	 * GmailApp.markThreadUnimportant(thread);
	 * </code></pre>
	 * 
	 * @param thread - the thread to mark as unimportant
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function markThreadUnimportant(
		thread: GmailApp.GmailThread
	): GmailApp
	/**
	 * Marks this thread unread and forces the thread to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Marks first inbox thread as unread
	 * var thread = GmailApp.getInboxThreads(0, 1)[0];
	 * GmailApp.markThreadUnread(thread);
	 * </code></pre>
	 * 
	 * @param thread - the thread to mark as unread
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function markThreadUnread(
		thread: GmailApp.GmailThread
	): GmailApp
	/**
	 * Marks these threads as important and forces the threads to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Marks first two threads in inbox as important
	 * var threads = GmailApp.getInboxThreads(0, 2);
	 * GmailApp.markThreadsImportant(threads);
	 * </code></pre>
	 * 
	 * @param threads - an array of threads to mark as important
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function markThreadsImportant(
		threads: GmailApp.GmailThread[]
	): GmailApp
	/**
	 * Marks these threads as read and forces the threads to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Marks first two threads in inbox as read
	 * var threads = GmailApp.getInboxThreads(0, 2);
	 * GmailApp.markThreadsRead(threads);
	 * </code></pre>
	 * 
	 * @param threads - an array of threads to mark as read
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function markThreadsRead(
		threads: GmailApp.GmailThread[]
	): GmailApp
	/**
	 * Marks these threads as unimportant and forces the threads to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Marks first two threads in inbox as unimportant
	 * var threads = GmailApp.getInboxThreads(0, 2);
	 * GmailApp.markThreadsUnimportant(threads);
	 * </code></pre>
	 * 
	 * @param threads - an array of threads to mark as unimportant
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function markThreadsUnimportant(
		threads: GmailApp.GmailThread[]
	): GmailApp
	/**
	 * Marks these threads as unread and forces the threads to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Marks first two threads in inbox as unread
	 * var threads = GmailApp.getInboxThreads(0, 2);
	 * GmailApp.markThreadsUnread(threads);
	 * </code></pre>
	 * 
	 * @param threads - an array of threads to mark as unread
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function markThreadsUnread(
		threads: GmailApp.GmailThread[]
	): GmailApp
	/**
	 * Moves the message to the trash and forces the message to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Move the first message in your inbox to trash
	 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
	 * var firstMessage = firstThread.getMessages()[0];
	 * GmailApp.moveMessageToTrash(firstMessage);
	 * </code></pre>
	 * 
	 * @param message - the message to be trashed
	 * 
	 * @returns the Gmail service (useful for chaining)
	 */
	function moveMessageToTrash(
		message: GmailApp.GmailMessage
	): GmailApp
	/**
	 * Moves the specified messages to the trash and forces the messages to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Move first two messages in your inbox to trash
	 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
	 * var messages = firstThread.getMessages();
	 * var toDelete = [messages[0], messages[1]];
	 * GmailApp.moveMessagesToTrash(toDelete);
	 * </code></pre>
	 * 
	 * @param messages - the messages to be trashed
	 * 
	 * @returns the Gmail service (useful for chaining)
	 */
	function moveMessagesToTrash(
		messages: GmailApp.GmailMessage[]
	): GmailApp
	/**
	 * Moves this thread to the archive and forces the thread to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Archive the first thread in your inbox
	 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
	 * GmailApp.moveThreadToArchive(firstThread);
	 * </code></pre>
	 * 
	 * @param thread - the thread to be archive
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function moveThreadToArchive(
		thread: GmailApp.GmailThread
	): GmailApp
	/**
	 * Moves this thread to the inbox and forces the thread to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Find a thread not already in your inbox
	 * var thread = GmailApp.search(&quot;-in:inbox&quot;)[0]; // Get the first one
	 * GmailApp.moveThreadToInbox(thread);
	 * </code></pre>
	 * 
	 * @param thread - the thread to be moved to the inbox
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function moveThreadToInbox(
		thread: GmailApp.GmailThread
	): GmailApp
	/**
	 * Moves this thread to spam and forces the thread to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Tag first thread in inbox as spam
	 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
	 * GmailApp.moveThreadToSpam(firstThread);
	 * </code></pre>
	 * 
	 * @param thread - the thread to be moved to spam
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function moveThreadToSpam(
		thread: GmailApp.GmailThread
	): GmailApp
	/**
	 * Moves this thread to the trash and forces the thread to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Move first thread in inbox to trash
	 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
	 * GmailApp.moveThreadToTrash(firstThread);
	 * </code></pre>
	 * 
	 * @param thread - the thread to be trashed
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function moveThreadToTrash(
		thread: GmailApp.GmailThread
	): GmailApp
	/**
	 * Moves these threads to the archive and forces the threads to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Move first two threads in your inbox to the archive
	 * var firstTwoThreads = GmailApp.getInboxThreads(0,2);
	 * GmailApp.moveThreadsToArchive(firstTwoThreads);
	 * </code></pre>
	 * 
	 * @param threads - an array of threads to be archived
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function moveThreadsToArchive(
		threads: GmailApp.GmailThread[]
	): GmailApp
	/**
	 * Moves these threads to the inbox and forces the threads to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Find two threads not already in your inbox
	 * var firstTwoThreads = GmailApp.search(&quot;-in:inbox&quot;, 0, 2);
	 * GmailApp.moveThreadsToInbox(firstTwoThreads);
	 * </code></pre>
	 * 
	 * @param threads - an array of threads to be moved to the inbox
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function moveThreadsToInbox(
		threads: GmailApp.GmailThread[]
	): GmailApp
	/**
	 * Moves these threads to spam and forces the threads to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Move first two threads in your inbox to spam
	 * var firstTwoThreads = GmailApp.getInboxThreads(0,2);
	 * GmailApp.moveThreadsToSpam(firstTwoThreads);
	 * </code></pre>
	 * 
	 * @param threads - an array of threads to be moved to spam
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function moveThreadsToSpam(
		threads: GmailApp.GmailThread[]
	): GmailApp
	/**
	 * Moves these threads to the trash and forces the threads to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Move first two threads in your inbox to trash
	 * var firstTwoThreads = GmailApp.getInboxThreads(0,2);
	 * GmailApp.moveThreadsToTrash(firstTwoThreads);
	 * </code></pre>
	 * 
	 * @param threads - an array of threads to be trashed
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function moveThreadsToTrash(
		threads: GmailApp.GmailThread[]
	): GmailApp
	/**
	 * Reloads the message and associated state from Gmail (useful in case the labels, read state,
	 * etc., have changed).
	 * 
	 * <pre class="prettyprint"><code>
	 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
	 * var firstMessage = firstThread.getMessages()[0];
	 * // ...Do something that may take a while here....
	 * GmailApp.refreshMessage(firstMessage);
	 * // ...Do more stuff with firstMessage...
	 * </code></pre>
	 * 
	 * @param message - the message to be refreshed
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function refreshMessage(
		message: GmailApp.GmailMessage
	): GmailApp
	/**
	 * Reloads the messages and associated state from Gmail (useful in case the labels, read state,
	 * etc., have changed).
	 * 
	 * <pre class="prettyprint"><code>
	 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
	 * var coupleOfMessages = firstThread.getMessages().slice(0, 2);
	 * // ...Do something that may take a while here....
	 * GmailApp.refreshMessages(coupleOfMessages);
	 * // ...Do more stuff with coupleOfMessages...
	 * </code></pre>
	 * 
	 * @param messages - the messages to be refreshed
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function refreshMessages(
		messages: GmailApp.GmailMessage[]
	): GmailApp
	/**
	 * Reloads the thread and associated state from Gmail (useful in case the labels, read state,
	 * etc., have changed).
	 * 
	 * <pre class="prettyprint"><code>
	 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
	 * // ...Do something that may take a while here....
	 * GmailApp.refreshThread(firstThread);
	 * // ... Do more stuff with the thread ...
	 * </code></pre>
	 * 
	 * @param thread - the thread to be refreshed
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function refreshThread(
		thread: GmailApp.GmailThread
	): GmailApp
	/**
	 * Reloads the threads and associated state from Gmail (useful in case the labels, read state,
	 * etc., have changed).
	 * 
	 * <pre class="prettyprint"><code>
	 * var threads = GmailApp.getInboxThreads(0, 3);
	 * // ...Do something that may take a while here....
	 * GmailApp.refreshThreads(threads);
	 * // ... Do more stuff with threads ...
	 * </code></pre>
	 * 
	 * @param threads - the threads to be refreshed
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function refreshThreads(
		threads: GmailApp.GmailThread[]
	): GmailApp
	/**
	 * Search Gmail with the given query.
	 * 
	 * <p>This call will fail when the size of all threads is too large for the system to handle.
	 * Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
	 * specify ranges of the threads to retrieve in each call.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Find starred messages with subject IMPORTANT
	 * var threads = GmailApp.search(&#39;is:starred subject:&quot;IMPORTANT&quot;&#39;);
	 * </code></pre>
	 * 
	 * @param query - the search query, as you would type it into Gmail
	 * 
	 * @returns an array of Gmail threads matching this query
	 */
	function search(
		query: string
	): GmailApp.GmailThread[]
	/**
	 * Search Gmail with the given query.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Find starred messages with subject IMPORTANT and return second batch of 10.
	 * // Assumes there are at least 11 of them, otherwise this will return an empty array.
	 * var threads = GmailApp.search(&#39;is:starred subject:&quot;IMPORTANT&quot;&#39;, 10, 10);
	 * </code></pre>
	 * 
	 * @param query - the search query, as you would type it into Gmail
	 * @param start - the index of the starting thread
	 * @param max - the maximum number of threads to return
	 * 
	 * @returns an array of Gmail threads matching this query
	 */
	function search(
		query: string,
		start: number,
		max: number
	): GmailApp.GmailThread[]

	/**
	 * Sends an email message. The size of the email (including headers) is <a
	 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below will send an email with the current date and time.
	 * var now = new Date();
	 * GmailApp.sendEmail(&quot;mike@example.com&quot;, &quot;current time&quot;, &quot;The time is: &quot; + now.toString());
	 * </code></pre>
	 * 
	 * @param recipient - comma separated list of email addresses
	 * @param subject - subject of the email (250 characters maximum)
	 * @param body - body of the email
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function sendEmail(
		recipient: string,
		subject: string,
		body: string
	): GmailApp
	/**
	 * Sends an email message with optional arguments. The email can contain plain text or an HTML
	 * body. The size of the email (including headers, but excluding attachments) is <a
	 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Send an email with a file from Google Drive attached as a PDF.
	 * var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
	 * GmailApp.sendEmail(&#39;mike@example.com&#39;, &#39;Attachment example&#39;, &#39;Please see the attached file.&#39;, {
	 *     attachments: [file.getAs(MimeType.PDF)],
	 *     name: &#39;Automatic Emailer Script&#39;
	 * });
	 * </code></pre>
	 * 
	 * @param recipient - the addresses of the recipient
	 * @param subject - the subject line (250 characters maximum)
	 * @param body - the body of the email
	 * @param options - a JavaScript object that specifies advanced parameters, as listed below
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function sendEmail(
		recipient: string,
		subject: string,
		body: string,
		options: object
	): GmailApp

	/**
	 * Sets the <a href="/gmail/add-ons/concepts/scopes#access_tokens">current message access
	 * token</a> that enables the script to access the current <code><a target='_blank' href='https://developers.google.com/apps-script/reference/gmail/gmail-message.html'>GmailMessage</a></code> properties.
	 * 
	 * <p>Only <a href="/gmail/add-ons/">Gmail add-on</a> projects using Gmail <a
	 * href="/gmail/add-ons/concepts/scopes#gmail_add-on_scopes">current message scopes</a> require
	 * this method.
	 * 
	 * <pre class="prettyprint"><code>
	 * function handleAddonActionEvent(e) {
	 *   var accessToken = e.messageMetadata.accessToken;
	 *   var messageId = e.messageMetadata.messageId;
	 *   GmailApp.setCurrentMessageAccessToken(accessToken);
	 *   var mailMessage = GmailApp.getMessageById(messageId);
	 *   // Do something with mailMessage
	 * }
	 * </code></pre>
	 * 
	 * @param accessToken - the temporary access token obtained from a Gmail add-on <a
	 *     href="/gmail/add-ons/concepts/actions#action_event_objects">action event object</a>.
	 */
	function setCurrentMessageAccessToken(
		accessToken: string
	): void
	/**
	 * Adds a star to this message and forces the message to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Stars the first message in the first thread in your inbox
	 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
	 * var message = firstThread.getMessages()[0];
	 * GmailApp.starMessage(message);
	 * </code></pre>
	 * 
	 * @param message - the message to star
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function starMessage(
		message: GmailApp.GmailMessage
	): GmailApp
	/**
	 * Adds stars to these messages and forces the messages to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Stars the first three messages in the first thread in your inbox
	 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
	 * var coupleOfMessages = firstThread.getMessages().slice(0, 3);
	 * GmailApp.starMessages(coupleOfMessages);
	 * </code></pre>
	 * 
	 * @param messages - an array of messages to star
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function starMessages(
		messages: GmailApp.GmailMessage[]
	): GmailApp
	/**
	 * Removes a star from this message and forces the message to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Unstars the first message in the first thread in your inbox
	 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
	 * var message = firstThread.getMessages()[0];
	 * GmailApp.unstarMessage(message);
	 * </code></pre>
	 * 
	 * @param message - the message to unstar
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function unstarMessage(
		message: GmailApp.GmailMessage
	): GmailApp
	/**
	 * Removes stars from these messages and forces the messages to refresh.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Unstars the first three messages in the first thread in your inbox
	 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
	 * var coupleOfMessages = firstThread.getMessages().slice(0, 3);
	 * GmailApp.unstarMessages(coupleOfMessages);
	 * </code></pre>
	 * 
	 * @param messages - an array of messages to unstar
	 * 
	 * @returns the Gmail service, useful for chaining
	 */
	function unstarMessages(
		messages: GmailApp.GmailMessage[]
	): GmailApp

	class GmailAttachment {
		private constructor();

		/**
		 * Returns a copy of this blob.
		 * 
		 * @returns The new copy.
		 */
		copyBlob(): Blob
		/**
		 * Gets all the blobs that are contained within this (possibly composite) blob.
		 * 
		 * @returns The blobs contained within the blob.
		 */
		getAllBlobs(): Blob[]
		/**
		 * Return the data inside this object as a blob converted to the specified content type. This
		 * method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
		 * assumes that the part of the filename that follows the last period (if any) is an existing
		 * extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
		 * "ShoppingList.12.25.pdf".
		 * 
		 * <p>To view the daily quotas for conversions, see <a
		 * href="https://developers.google.com/apps-script/guides/services/quotas">Quotas for Google
		 * Services</a>. Newly created G Suite domains might be temporarily subject to stricter quotas.
		 * 
		 * @param contentType - The MIME type to convert to. For most blobs, <code>&#39;application/pdf&#39;</code> is
		 *     the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of <code>&#39;image/bmp&#39;</code>, <code>&#39;image/gif&#39;</code>, <code>&#39;image/jpeg&#39;</code>, or <code>&#39;image/png&#39;</code> are also
		 *     valid.
		 * 
		 * @returns The data as a blob.
		 */
		getAs(
			contentType: string
		): Blob
		/**
		 * Gets the data stored in this blob.
		 * 
		 * @returns The stored bytes.
		 */
		getBytes(): number[]
		/**
		 * Gets the content type of the bytes in this blob.
		 * 
		 * @returns The content type of this data, if known, or <code>null</code>.
		 */
		getContentType(): string
		/**
		 * Gets the data of this blob as a String with UTF-8 encoding.
		 * 
		 * @returns The data as a string.
		 */
		getDataAsString(): string
		/**
		 * Gets the data of this blob as a string with the specified encoding.
		 * 
		 * @param charset - The charset to use in encoding the data in this blob as a string.
		 * 
		 * @returns The data as a string.
		 */
		getDataAsString(
			charset: string
		): string

		/**
		 * Gets the SHA1 content hash for this attachment. This method does not count against the Gmail
		 * read quota.
		 * 
		 * @returns The SHA1 content hash, as a string.
		 */
		getHash(): string
		/**
		 * Gets the name of this blob.
		 * 
		 * @returns The name of this data, if known, or <code>null</code>.
		 */
		getName(): string
		/**
		 * Gets the size of this attachment. This method is faster than calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/gmail/gmail-attachment.html#getBytes()'>getBytes()</a></code><code>.length</code> and does not count against the Gmail read quota.
		 * 
		 * @returns The size of the attachment, in bytes.
		 */
		getSize(): number
		/**
		 * Returns whether this blob is a G Suite file (Sheets, Docs, etc.).
		 * 
		 * @returns <code>true</code> if this blob is a G Suite file; <code>false</code> if not.
		 */
		isGoogleType(): Boolean
		/**
		 * Sets the data stored in this blob.
		 * 
		 * @param data - The new data.
		 * 
		 * @returns This blob, for chaining.
		 */
		setBytes(
			data: number[]
		): Blob
		/**
		 * Sets the content type of the bytes in this blob.
		 * 
		 * @param contentType - The new contentType.
		 * 
		 * @returns This blob, for chaining.
		 */
		setContentType(
			contentType: string
		): Blob
		/**
		 * Sets the content type of the bytes in this blob based on the file extension. The contentType is
		 * <code>null</code> if it cannot be guessed from its extension.
		 * 
		 * @returns This blob, for chaining.
		 */
		setContentTypeFromExtension(): Blob
		/**
		 * Sets the data of this blob from a string with UTF-8 encoding.
		 * 
		 * @param string - The string data.
		 * 
		 * @returns This blob, for chaining.
		 */
		setDataFromString(
			string: string
		): Blob
		/**
		 * Sets the data of this blob from a string with the specified encoding.
		 * 
		 * @param string - The string data.
		 * @param charset - The charset to use in interpreting the string as bytes.
		 * 
		 * @returns This blob, for chaining.
		 */
		setDataFromString(
			string: string,
			charset: string
		): Blob

		/**
		 * Sets the name of this blob.
		 * 
		 * @param name - The new name.
		 * 
		 * @returns This blob, for chaining.
		 */
		setName(
			name: string
		): Blob

	}

	class GmailDraft {
		private constructor();

		/**
		 * Deletes this draft message.
		 * 
		 * <pre class="prettyprint"><code>
		 * var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
		 * draft.deleteDraft();
		 * draft.getMessage(); // Throws exception!
		 * </code></pre>
		 */
		deleteDraft(): void
		/**
		 * Gets the ID of this draft message.
		 * 
		 * <pre class="prettyprint"><code>
		 * var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
		 * var draftId = draft.getId();
		 * var draftById = GmailApp.getDraft(draftId);
		 * Logger.log(draft.getMessage().getSubject() == draftById.getMessage().getSubject());
		 * </code></pre>
		 * 
		 * @returns the draft ID
		 */
		getId(): string
		/**
		 * Returns a GmailMessage representing this draft.
		 * 
		 * <pre class="prettyprint"><code>
		 * var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
		 * var message = draft.getMessage();
		 * Logger.log(message.getSubject());
		 * </code></pre>
		 * 
		 * @returns the message that represents the contents of this draft
		 */
		getMessage(): GmailApp.GmailMessage
		/**
		 * Returns the ID of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/gmail/gmail-message.html'>GmailMessage</a></code> representing this draft.
		 * 
		 * <pre class="prettyprint"><code>
		 * var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
		 * var messageId = draft.getMessageId();
		 * Logger.log(messageId == draft.getMessage().getId());
		 * </code></pre>
		 * 
		 * @returns the message ID
		 */
		getMessageId(): string
		/**
		 * Sends this draft email message. The size of the email (including headers) is <a
		 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
		 * var msg = draft.send(); // Send it
		 * Logger.log(msg.getDate()); // Should be approximately the current timestamp
		 * </code></pre>
		 * 
		 * @returns the newly sent message
		 */
		send(): GmailApp.GmailMessage
		/**
		 * Replaces the contents of this draft message. The size of the email (including headers) is <a
		 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below will update a draft email with the current date and time.
		 * var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
		 * var now = new Date();
		 * draft.update(&quot;mike@example.com&quot;, &quot;current time&quot;, &quot;The time is: &quot; + now.toString());
		 * </code></pre>
		 * 
		 * @param recipient - comma separated list of email addresses
		 * @param subject - subject of the email (250 characters maximum)
		 * @param body - body of the email
		 * 
		 * @returns the newly updated draft
		 */
		update(
			recipient: string,
			subject: string,
			body: string
		): GmailApp.GmailDraft
		/**
		 * Replaces the contents of this draft message using optional arguments. The email can contain
		 * plain text or an HTML body. The size of the email (including headers) is <a
		 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Update a draft email with a file from Google Drive attached as a PDF.
		 * var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
		 * var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
		 * draft.update(&#39;mike@example.com&#39;, &#39;Attachment example&#39;, &#39;Please see attached file.&#39;, {
		 *     attachments: [file.getAs(MimeType.PDF)],
		 *     name: &#39;Automatic Emailer Script&#39;
		 * });
		 * </code></pre>
		 * 
		 * @param recipient - comma separated list of email addresses
		 * @param subject - subject of the email (250 characters maximum)
		 * @param body - body of the email
		 * @param options - a JavaScript object that specifies advanced parameters, as listed below
		 * 
		 * @returns the newly updated draft
		 */
		update(
			recipient: string,
			subject: string,
			body: string,
			options: object
		): GmailApp.GmailDraft


	}

	class GmailLabel {
		private constructor();

		/**
		 * Adds this label to the given thread and forces the thread to refresh (<code><a target='_blank' href='https://developers.google.com/apps-script/reference/gmail/gmail-thread.html#refresh()'>GmailThread.refresh()</a></code>).
		 * 
		 * <pre class="prettyprint"><code>
		 * // label the first thread in the inbox with the label MyLabel
		 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * label.addToThread(firstThread);
		 * </code></pre>
		 * 
		 * @param thread - The thread to be labeled.
		 * 
		 * @returns This label, for chaining.
		 */
		addToThread(
			thread: GmailApp.GmailThread
		): GmailApp.GmailLabel
		/**
		 * Adds this label to the given threads and forces the threads to refresh.
		 * 
		 * <pre class="prettyprint"><code>
		 * // label the first three threads in the inbox with the label MyLabel
		 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
		 * var threads = GmailApp.getInboxThreads(0,3);
		 * label.addToThreads(threads);
		 * </code></pre>
		 * 
		 * @param threads - An array of threads to be labeled.
		 * 
		 * @returns This label, for chaining.
		 */
		addToThreads(
			threads: GmailApp.GmailThread[]
		): GmailApp.GmailLabel
		/**
		 * Deletes this label.
		 * 
		 * <pre class="prettyprint"><code>
		 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
		 * label.deleteLabel();
		 * </code></pre>
		 */
		deleteLabel(): void
		/**
		 * Gets the name of this label.
		 * 
		 * <pre class="prettyprint"><code>
		 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
		 * Logger.log(label.getName()); //logs MyLabel
		 * </code></pre>
		 * 
		 * @returns The name of the label.
		 */
		getName(): string
		/**
		 * Gets the threads that are marked with this label.
		 * 
		 * <p>This calls fail when the size of all threads is too large for the system to handle. Where
		 * the thread size is unknown, and potentially very large, please use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/gmail/gmail-label.html#getThreads(Integer,Integer)'>getThreads(start, max)</a></code> and specify ranges of the threads to retrieve in each call.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the subject lines of the threads labeled with MyLabel
		 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
		 * var threads = label.getThreads();
		 * for (var i = 0; i &lt; threads.length; i++) {
		 *   Logger.log(threads[i].getFirstMessageSubject());
		 * }
		 * </code></pre>
		 * 
		 * @returns An array of threads marked with this label.
		 */
		getThreads(): GmailApp.GmailThread[]
		/**
		 * Gets a range of threads marked with this label.
		 * 
		 * <pre class="prettyprint"><code>
		 * // log the subject lines of up to the first 30 threads with the label MyLabel
		 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
		 * var threads = label.getThreads(0, 30);
		 * for (var i = 0; i &lt; threads.length; i++) {
		 *   Logger.log(threads[i].getFirstMessageSubject());
		 * }
		 * </code></pre>
		 * 
		 * @param start - The index of the starting thread.
		 * @param max - The maximum number of threads to return.
		 * 
		 * @returns An array of threads marked with this label.
		 */
		getThreads(
			start: number,
			max: number
		): GmailApp.GmailThread[]

		/**
		 * Gets the number of unread threads tagged with this label.
		 * 
		 * <pre class="prettyprint"><code>
		 * // log the number of unread threads labeled with MyLabel
		 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
		 * Logger.log(label.getUnreadCount());
		 * </code></pre>
		 * 
		 * @returns The number of unread labeled threads.
		 */
		getUnreadCount(): number
		/**
		 * Removes this label from the given thread and forces the thread to refresh.
		 * 
		 * <pre class="prettyprint"><code>
		 * // remove the label MyLabel from the first thread in the inbox
		 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * label.removeFromThread(firstThread);
		 * </code></pre>
		 * 
		 * @param thread - The thread be unlabeled.
		 * 
		 * @returns This label, for chaining.
		 */
		removeFromThread(
			thread: GmailApp.GmailThread
		): GmailApp.GmailLabel
		/**
		 * Removes this label from the given threads and forces the threads to refresh.
		 * 
		 * <pre class="prettyprint"><code>
		 * // remove the label MyLabel from the first three threads in the inbox
		 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
		 * var threads = GmailApp.getInboxThreads(0,3);
		 * label.removeFromThreads(threads);
		 * </code></pre>
		 * 
		 * @param threads - An array of threads to be unlabeled.
		 * 
		 * @returns This label, for chaining.
		 */
		removeFromThreads(
			threads: GmailApp.GmailThread[]
		): GmailApp.GmailLabel

	}

	class GmailMessage {
		private constructor();

		/**
		 * Creates a draft message replying to the sender of this message using the reply-to address. The
		 * size of the email (including headers) is <a
		 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Create a draft reply to the original message with an acknowledgment.
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * var message = firstThread.getMessages()[0];
		 * message.createDraftReply(&quot;Got your message&quot;);
		 * </code></pre>
		 * 
		 * @param body - The body of the email.
		 * 
		 * @returns The newly created draft message.
		 */
		createDraftReply(
			body: string
		): GmailApp.GmailDraft
		/**
		 * Creates a draft message replying to the sender of this message using the reply-to address, with
		 * optional arguments.
		 * 
		 * <p>The email can contain both plain text and an HTML body. The size of the email (including
		 * headers) is <a href="/apps-script/guides/services/quotas#current_limitations">quota
		 * limited</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Create a draft response with an HTML text body.
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * var message = firstThread.getMessages()[0];
		 * message.createDraftReply(&quot;incapable of HTML&quot;, {
		 *   htmlBody: &quot;&lt;b&gt;some HTML body text&lt;/b&gt;&quot;,
		 *   cc: &quot;another@example.com&quot;
		 * });
		 * </code></pre>
		 * 
		 * @param body - The body of the email.
		 * @param options - A JavaScript object that specifies advanced parameters, as listed below.
		 * 
		 * @returns The newly created draft message.
		 */
		createDraftReply(
			body: string,
			options: object
		): GmailApp.GmailDraft

		/**
		 * Creates a draft message replying to the sender using the reply-to address and all recipients of
		 * this message. The size of the email (including headers) is <a
		 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Create a draft response to all recipients (except those bcc&#39;d) with an acknowledgment.
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * var message = firstThread.getMessages()[0];
		 * message.createDraftReplyAll(&quot;Got your message&quot;);
		 * </code></pre>
		 * 
		 * @param body - The body of the email.
		 * 
		 * @returns The newly created draft message.
		 */
		createDraftReplyAll(
			body: string
		): GmailApp.GmailDraft
		/**
		 * Creates a draft message replying to the sender of this message using the reply-to address and
		 * all recipients, with optional arguments.
		 * 
		 * <p>The email can contain both plain text and an HTML body. The size of the email (including
		 * headers) is <a href="/apps-script/guides/services/quotas#current_limitations">quota
		 * limited</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Create a draft response to all recipients (except those bcc&#39;d) using an HTML text body.
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * var message = firstThread.getMessages()[0];
		 * message.createDraftReplyAll(&quot;incapable of HTML&quot;, {
		 *   htmlBody: &quot;&lt;b&gt;some HTML body text&lt;/b&gt;&quot;,
		 *   cc: &quot;another@example.com&quot;
		 * });
		 * </code></pre>
		 * 
		 * @param body - The body of the email.
		 * @param options - A JavaScript object that specifies advanced parameters, as listed below.
		 * 
		 * @returns The newly created draft message.
		 */
		createDraftReplyAll(
			body: string,
			options: object
		): GmailApp.GmailDraft

		/**
		 * Forwards this message to new recipients. The size of the email (including headers) is <a
		 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Forward first message of first inbox thread to recipient1 &amp; recipient2, both @example.com
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * var message = firstThread.getMessages()[0];
		 * message.forward(&quot;recipient1@example.com,recipient2@example.com&quot;);
		 * </code></pre>
		 * 
		 * @param recipient - A comma-separated list of email addresses.
		 * 
		 * @returns This message, useful for chaining.
		 */
		forward(
			recipient: string
		): GmailApp.GmailMessage
		/**
		 * Forwards this message to new recipients, with optional arguments.
		 * 
		 * <p>The email can contain both plain text, and also an HTML body. The size of the email
		 * (including headers) is <a href="/apps-script/guides/services/quotas#current_limitations">quota
		 * limited</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * var message = firstThread.getMessages()[0];
		 * message.forward(&quot;recipient1@example.com,recipient2@example.com&quot;, {
		 *   cc: &quot;myboss@example.com&quot;,
		 *   bcc: &quot;mybosses-boss@example.com,vp@example.com&quot;
		 * });
		 * </code></pre>
		 * 
		 * @param recipient - A comma-separated list of email addresses.
		 * @param options - A JavaScript object that specifies advanced parameters, as listed below.
		 * 
		 * @returns This message, useful for chaining.
		 */
		forward(
			recipient: string,
			options: object
		): GmailApp.GmailMessage

		/**
		 * Gets all the attachments for this message.
		 * 
		 * @returns An array of Blob attachments for this message.
		 */
		getAttachments(): GmailApp.GmailAttachment[]
		/**
		 * Gets all the attachments for this message.
		 * 
		 * @param options - A JavaScript object that specifies advanced parameters, as listed below.
		 * 
		 * @returns An array of Blob attachments for this message.
		 */
		getAttachments(
			options: object
		): GmailApp.GmailAttachment[]

		/**
		 * Gets the comma-separated recipients bcc'd on this message.
		 * 
		 * <p>This is empty for all received messages, by definition.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * Logger.log(message.getBcc()); // Log bcc&#39;d addresses
		 * </code></pre>
		 * 
		 * @returns The comma-separated recipients bcc'd on this message.
		 */
		getBcc(): string
		/**
		 * Gets the HTML content of the body of this message.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * Logger.log(message.getBody()); // Log contents of the body
		 * </code></pre>
		 * 
		 * @returns The body content of this message.
		 */
		getBody(): string
		/**
		 * Gets the comma-separated recipients cc'd on this message.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * Logger.log(message.getCc()); // Log cc&#39;d addresses
		 * </code></pre>
		 * 
		 * @returns The comma-separated recipients cc'd on this message.
		 */
		getCc(): string
		/**
		 * Gets the date and time of this message.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * Logger.log(message.getDate()); // Log date and time of the message
		 * </code></pre>
		 * 
		 * @returns The date and time of this message.
		 */
		getDate(): Date
		/**
		 * Gets the sender of this message.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * Logger.log(message.getFrom()); // Log from address of the message
		 * </code></pre>
		 * 
		 * @returns The email address of the message sender.
		 */
		getFrom(): string
		/**
		 * Gets the value of an RFC 2822 header given the header name.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox.
		 * var message = thread.getMessages()[0];         // Get the first message.
		 * Logger.log(message.getHeader(&quot;Message-ID&quot;));   // Logs the Message-ID RFC 2822 header.
		 * </code></pre>
		 * 
		 * @param name - The name of the RFC header, without the colon separating it from the value.
		 * 
		 * @returns The value of the header, or an empty string if the header doesn't exist in the message.
		 */
		getHeader(
			name: string
		): string
		/**
		 * Gets the ID of this message.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * var id = message.getId();
		 * var messageById = GmailApp.getMessageById(id);
		 * Logger.log(message.getSubject() == messageById.getMessage()); // Always logs true
		 * </code></pre>
		 * 
		 * @returns The message ID.
		 */
		getId(): string
		/**
		 * Gets the content of the body of this message without HTML formatting. This is more complex than
		 * <code>getBody()</code> and takes longer.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * Logger.log(message.getPlainBody()); // Log contents of the body
		 * </code></pre>
		 * 
		 * @returns The plain body content of this message.
		 */
		getPlainBody(): string
		/**
		 * Gets the raw content of this message. This is equivalent to "Show Original" in the Gmail UI.
		 * 
		 * @returns The raw content of this message.
		 */
		getRawContent(): string
		/**
		 * Gets the reply-to address of this message (usually the sender).
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * Logger.log(message.getReplyTo()); // Logs reply-to address
		 * </code></pre>
		 * 
		 * @returns The email address for replies.
		 */
		getReplyTo(): string
		/**
		 * Gets the subject of this message.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * Logger.log(message.getSubject()); // Log subject line
		 * </code></pre>
		 * 
		 * @returns The subject of this message.
		 */
		getSubject(): string
		/**
		 * Gets the thread that contains this message.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * Logger.log(message.getThread().getFirstMessageSubject() ==
		 *            thread.getFirstMessageSubject()); // Always logs true
		 * </code></pre>
		 * 
		 * @returns The GmailThread that contains this message.
		 */
		getThread(): GmailApp.GmailThread
		/**
		 * Gets the comma-separated recipients of this message.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * Logger.log(message.getTo()); // Log the recipient of message
		 * </code></pre>
		 * 
		 * @returns The comma-separated recipients of this message.
		 */
		getTo(): string
		/**
		 * Gets whether this message is a draft.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * Logger.log(&quot;is draft? &quot; + message.isDraft());
		 * </code></pre>
		 * 
		 * @returns Whether this message is a draft.
		 */
		isDraft(): Boolean
		/**
		 * Gets whether this message is a chat.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * Logger.log(&quot;is a chat? &quot; + message.isInChats());
		 * </code></pre>
		 * 
		 * @returns Whether this message is a chat.
		 */
		isInChats(): Boolean
		/**
		 * Gets whether this message is in the inbox.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * Logger.log(&quot;is in inbox? &quot; + message.isInInbox());
		 * </code></pre>
		 * 
		 * @returns Whether this message is in the inbox.
		 */
		isInInbox(): Boolean
		/**
		 * Returns <code>true</code> if this message is in the priority inbox; returns <code>false</code> otherwise.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getPriorityInboxThreads(0,1)[0]; // Get first thread in priority inbox
		 * var messages = thread.getMessages();
		 * for (var i = 0; i &lt; messages.length; i++) {
		 *   // At least one of the messages is in priority inbox
		 *   Logger.log(&quot;is in priority inbox? &quot; + messages[i].isInPriorityInbox());
		 * }
		 * </code></pre>
		 * 
		 * @returns Whether this message is in the priority inbox.
		 */
		isInPriorityInbox(): Boolean
		/**
		 * Gets whether this message is in the trash.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * Logger.log(&quot;is in the trash? &quot; + message.isInTrash());
		 * </code></pre>
		 * 
		 * @returns Whether this message is in the trash.
		 */
		isInTrash(): Boolean
		/**
		 * Gets whether this message is starred.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * Logger.log(&quot;is starred? &quot; + message.isStarred());
		 * </code></pre>
		 * 
		 * @returns Whether this message is starred.
		 */
		isStarred(): Boolean
		/**
		 * Gets whether this message is unread.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * Logger.log(&quot;is unread? &quot; + message.isUnread());
		 * </code></pre>
		 * 
		 * @returns The unread status of this message.
		 */
		isUnread(): Boolean
		/**
		 * Marks the message as read.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * message.markRead(); // Mark as read
		 * </code></pre>
		 * 
		 * @returns This GmailMessage, useful for chaining.
		 */
		markRead(): GmailApp.GmailMessage
		/**
		 * Marks the message as unread.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * message.markUnread(); // Mark as unread
		 * </code></pre>
		 * 
		 * @returns This GmailMessage, useful for chaining.
		 */
		markUnread(): GmailApp.GmailMessage
		/**
		 * Moves the message to the trash.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * message.moveToTrash(); // Move message to trash
		 * </code></pre>
		 * 
		 * @returns This GmailMessage, useful for chaining.
		 */
		moveToTrash(): GmailApp.GmailMessage
		/**
		 * Reloads this message and associated state from Gmail (useful in case the labels, read state,
		 * etc., have changed).
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * // .. Do bunch of stuff here
		 * message.refresh(); // Make sure it&#39;s up to date
		 * // Do more stuff to message
		 * </code></pre>
		 * 
		 * @returns This message for chaining.
		 */
		refresh(): GmailApp.GmailMessage
		/**
		 * Replies to the sender of this message using the reply-to address. The size of the email
		 * (including headers) is <a href="/apps-script/guides/services/quotas#current_limitations">quota
		 * limited</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Respond to author of message with acknowledgment
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * var message = firstThread.getMessages()[0];
		 * message.reply(&quot;Got your message&quot;);
		 * </code></pre>
		 * 
		 * @param body - The body of the email.
		 * 
		 * @returns This message, useful for chaining.
		 */
		reply(
			body: string
		): GmailApp.GmailMessage
		/**
		 * Replies to the sender of this message using the reply-to address, with optional arguments.
		 * 
		 * <p>The email can contain both plain text, and also an HTML body. The size of the email
		 * (including headers) is <a href="/apps-script/guides/services/quotas#current_limitations">quota
		 * limited</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Respond with HTML body text
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * var message = firstThread.getMessages()[0];
		 * message.reply(&quot;incapable of HTML&quot;, {
		 *   htmlBody: &quot;&lt;b&gt;some HTML body text&lt;/b&gt;&quot;,
		 *   noReply: true
		 * });
		 * </code></pre>
		 * 
		 * @param body - The body of the email.
		 * @param options - A JavaScript object that specifies advanced parameters, as listed below.
		 * 
		 * @returns This message, useful for chaining.
		 */
		reply(
			body: string,
			options: object
		): GmailApp.GmailMessage

		/**
		 * Replies to the sender using the reply-to address and all recipients of this message. The size
		 * of the email (including headers) is <a
		 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Respond to all recipients (except bcc&#39;d) of last email in thread with acknowledgment
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * var message = firstThread.getMessages()[0];
		 * message.replyAll(&quot;Got your message&quot;);
		 * </code></pre>
		 * 
		 * @param body - The body of the email.
		 * 
		 * @returns This message,useful for chaining.
		 */
		replyAll(
			body: string
		): GmailApp.GmailMessage
		/**
		 * Replies to the sender of this message using the reply-to address and all recipients, with
		 * optional arguments.
		 * 
		 * <p>The email can contain both plain text, and also an HTML body. The size of the email
		 * (including headers) is <a href="/apps-script/guides/services/quotas#current_limitations">quota
		 * limited</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Respond with HTML body text
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * var message = firstThread.getMessages()[0];
		 * messageThread.replyAll(&quot;incapable of HTML&quot;, {
		 *   htmlBody: &quot;&lt;b&gt;some HTML body text&lt;/b&gt;&quot;,
		 *   noReply: true
		 * });
		 * </code></pre>
		 * 
		 * @param body - The body of the email.
		 * @param options - A JavaScript object that specifies advanced parameters, as listed below.
		 * 
		 * @returns This message, useful for chaining.
		 */
		replyAll(
			body: string,
			options: object
		): GmailApp.GmailMessage

		/**
		 * Stars the message.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * message.star(); // Star the message
		 * </code></pre>
		 * 
		 * @returns This GmailMessage, useful for chaining.
		 */
		star(): GmailApp.GmailMessage
		/**
		 * Unstars the message.
		 * 
		 * <pre class="prettyprint"><code>
		 * var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
		 * var message = thread.getMessages()[0]; // Get first message
		 * message.unstar(); // Unstar the message
		 * </code></pre>
		 * 
		 * @returns This GmailMessage, useful for chaining.
		 */
		unstar(): GmailApp.GmailMessage

	}

	class GmailThread {
		private constructor();

		/**
		 * Adds this label to the thread.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Add label MyLabel to the first thread in the inbox
		 * var label = GmailApp.getUserLabelByName(&quot;MyLabel&quot;);
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * firstThread.addLabel(label);
		 * </code></pre>
		 * 
		 * @param label - the label to apply to this thread
		 * 
		 * @returns this thread, useful for chaining
		 */
		addLabel(
			label: GmailApp.GmailLabel
		): GmailApp.GmailThread
		/**
		 * Creates a draft message replying to the sender of the last message in this thread using the
		 * reply-to address. The size of the email (including headers) is <a
		 * href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Create a draft reply to the message author with an acknowledgement.
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * firstThread.createDraftReply(&quot;Got your message&quot;);
		 * </code></pre>
		 * 
		 * @param body - the body of the email
		 * 
		 * @returns the newly created draft message
		 */
		createDraftReply(
			body: string
		): GmailApp.GmailDraft
		/**
		 * Creates a draft message replying to the sender of the last message in this thread using the
		 * reply-to address, with optional arguments.
		 * 
		 * <p>The email can contain both plain text and an HTML body. The size of the email (including
		 * headers) is <a href="/apps-script/guides/services/quotas#current_limitations">quota
		 * limited</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Create a draft response with an HTML text body.
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * firstThread.createDraftReply(&quot;incapable of HTML&quot;, {
		 *   htmlBody: &quot;&lt;b&gt;some HTML body text&lt;/b&gt;&quot;,
		 *   cc: &quot;another@example.com&quot;
		 * });
		 * </code></pre>
		 * 
		 * @param body - the body of the email
		 * @param options - a JavaScript object that specifies advanced parameters, as listed below
		 * 
		 * @returns the newly created draft message
		 */
		createDraftReply(
			body: string,
			options: object
		): GmailApp.GmailDraft

		/**
		 * Creates a draft message replying to the sender of the last message in this thread, using the
		 * reply-to address and all recipients of this message. The size of the email (including headers)
		 * is <a href="/apps-script/guides/services/quotas#current_limitations">quota limited</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Create a draft reply to all recipients (except those bcc&#39;d) of the last email in this
		 * // thread.
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * var message = firstThread.getMessages()[0];
		 * message.createDraftReplyAll(&quot;Got your message&quot;);
		 * </code></pre>
		 * 
		 * @param body - the body of the email
		 * 
		 * @returns the newly created draft message
		 */
		createDraftReplyAll(
			body: string
		): GmailApp.GmailDraft
		/**
		 * Creates a draft message replying to the sender of the last message in this thread, using the
		 * reply-to address and all recipients, with optional arguments.
		 * 
		 * <p>The email can contain both plain text and an HTML body. The size of the email (including
		 * headers) is <a href="/apps-script/guides/services/quotas#current_limitations">quota
		 * limited</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Create a draft reply, using an HTML text body, to all recipients (except those bcc&#39;d) of
		 * // the last email of in this thread.
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * firstThread.createDraftReplyAll(&quot;incapable of HTML&quot;, {
		 *   htmlBody: &quot;&lt;b&gt;some HTML body text&lt;/b&gt;&quot;,
		 *   cc: &quot;another@example.com&quot;
		 * });
		 * </code></pre>
		 * 
		 * @param body - the body of the email
		 * @param options - a JavaScript object that specifies advanced parameters, as listed below
		 * 
		 * @returns the newly created draft message
		 */
		createDraftReplyAll(
			body: string,
			options: object
		): GmailApp.GmailDraft

		/**
		 * Gets the subject of the first message in the thread.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the subject of the first message in the first thread in the inbox
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * Logger.log(firstThread.getFirstMessageSubject());
		 * </code></pre>
		 * 
		 * @returns the subject of the first message in the thread
		 */
		getFirstMessageSubject(): string
		/**
		 * Gets the ID of this thread. The ID of a thread varies based on the messages it contains; for a
		 * consistent ID for a particular message in the thread, call <code>getMessages()[0].getId()</code>
		 * instead.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the subject of the first message in the first thread in the inbox.
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * var id = firstThread.getId();
		 * // Get same thread by its ID.
		 * var thread = GmailApp.getThreadById(id);
		 * Logger.log(thread.getFirstMessageSubject() == firstThread.getFirstMessageSubject()); // True
		 * </code></pre>
		 * 
		 * @returns the ID of this thread
		 */
		getId(): string
		/**
		 * Returns the user-created labels on this thread.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the names of the labels attached to the first thread in the inbox
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * var labels = firstThread.getLabels();
		 * for (var i = 0; i &lt; labels.length; i++) {
		 *   Logger.log(labels[i].getName());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of labels for this thread
		 */
		getLabels(): GmailApp.GmailLabel[]
		/**
		 * Gets the date of this thread's most recent message.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the date of the most recent message on the first thread in the inbox
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * Logger.log(firstThread.getLastMessageDate());
		 * </code></pre>
		 * 
		 * @returns the date of the most recent message in the thread
		 */
		getLastMessageDate(): Date
		/**
		 * Returns the number of messages in the thread.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the number of messages in the thread
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * Logger.log(firstThread.getMessageCount());
		 * </code></pre>
		 * 
		 * @returns the number of messages in the thread
		 */
		getMessageCount(): number
		/**
		 * Gets the messages in this thread.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the subjects of the messages in the thread
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * var messages = firstThread.getMessages();
		 * for (var i = 0; i &lt; messages.length; i++) {
		 *   Logger.log(messages[i].getSubject());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of Gmail messages in this thread
		 */
		getMessages(): GmailApp.GmailMessage[]
		/**
		 * Gets a permalink for this thread.
		 * 
		 * <p>Note that this only works with the classic Gmail interface, not Inbox.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the permalink for the first thread in the inbox
		 * var thread = GmailApp.getInboxThreads(0,1)[0];
		 * Logger.log(thread.getPermalink());
		 * </code></pre>
		 * 
		 * @returns the permalink for this thread
		 */
		getPermalink(): string
		/**
		 * Returns whether the thread has any starred messages.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log if this thread has starred messages
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * Logger.log(&#39;has starred : &#39; + firstThread.hasStarredMessages());
		 * </code></pre>
		 * 
		 * @returns true if the thread has any starred messages
		 */
		hasStarredMessages(): Boolean
		/**
		 * Returns whether the thread is marked important.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log if this thread is marked important
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * Logger.log(&#39;Important? : &#39; + firstThread.isImportant());
		 * </code></pre>
		 * 
		 * @returns true if the thread is marked important
		 */
		isImportant(): Boolean
		/**
		 * Returns whether the thread is labeled a chat.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log if this thread is a chat
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * Logger.log(&#39;is in chats? : &#39; + firstThread.isInChats());
		 * </code></pre>
		 * 
		 * @returns true if the thread is labeled a chat
		 */
		isInChats(): Boolean
		/**
		 * Returns whether the thread is in the inbox.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log if this thread is in the inbox
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * Logger.log(&#39;is in the inbox? : &#39; + firstThread.isInInbox());
		 * </code></pre>
		 * 
		 * @returns true if the thread is in the inbox
		 */
		isInInbox(): Boolean
		/**
		 * Returns true if this thread is in the priority inbox; returns false otherwise.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log if this thread is in the priority inbox
		 * var firstThread = GmailApp.getPriorityInboxThreads(0,1)[0];
		 * Logger.log(&quot;is in priority inbox? &quot; + firstThread.isInPriorityInbox());
		 * </code></pre>
		 * 
		 * @returns true if the thread is in the priority inbox
		 */
		isInPriorityInbox(): Boolean
		/**
		 * Returns whether the thread is marked as spam.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log if this thread is in the spam folder
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * Logger.log(&#39;Spam? &#39; + firstThread.isInSpam());
		 * </code></pre>
		 * 
		 * @returns true if the thread is marked as spam
		 */
		isInSpam(): Boolean
		/**
		 * Returns whether the thread is in the trash.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log if this thread is in the trash
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * Logger.log(&#39;Trashed? &#39; + firstThread.isInTrash());
		 * </code></pre>
		 * 
		 * @returns true if the thread is in the trash
		 */
		isInTrash(): Boolean
		/**
		 * Returns whether the thread has any unread messages.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log if this thread is unread
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * Logger.log(&#39;Unread? &#39; + firstThread.isUnread());
		 * </code></pre>
		 * 
		 * @returns true if there are unread messages
		 */
		isUnread(): Boolean
		/**
		 * Marks this thread as important.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Mark first inbox thread as important
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * firstThread.markImportant();
		 * </code></pre>
		 * 
		 * @returns this thread, useful for chaining
		 */
		markImportant(): GmailApp.GmailThread
		/**
		 * Marks this thread as read.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Mark first inbox thread as read
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * firstThread.markRead();
		 * </code></pre>
		 * 
		 * @returns this thread, useful for chaining
		 */
		markRead(): GmailApp.GmailThread
		/**
		 * Marks this thread as unimportant.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Mark first inbox thread as unimportant
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * firstThread.markUnimportant();
		 * </code></pre>
		 * 
		 * @returns this thread, useful for chaining
		 */
		markUnimportant(): GmailApp.GmailThread
		/**
		 * Marks this thread as unread.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Mark first inbox thread as unread
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * firstThread.markUnread();
		 * </code></pre>
		 * 
		 * @returns this thread, useful for chaining
		 */
		markUnread(): GmailApp.GmailThread
		/**
		 * Moves this thread to the archive.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Archive first inbox thread
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * firstThread.moveToArchive();
		 * </code></pre>
		 * 
		 * @returns this thread, useful for chaining
		 */
		moveToArchive(): GmailApp.GmailThread
		/**
		 * Moves this thread to the inbox.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Move first non-inbox thread to inbox
		 * var firstThread = GmailApp.search(&quot;-in:inbox&quot;)[0];
		 * firstThread.moveToInbox();
		 * </code></pre>
		 * 
		 * @returns this thread, useful for chaining
		 */
		moveToInbox(): GmailApp.GmailThread
		/**
		 * Moves this thread to spam.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Move first inbox thread to spam
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * firstThread.moveToSpam();
		 * </code></pre>
		 * 
		 * @returns this thread, useful for chaining
		 */
		moveToSpam(): GmailApp.GmailThread
		/**
		 * Moves this thread to the trash.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Move first inbox thread to trash
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * firstThread.moveToTrash();
		 * </code></pre>
		 * 
		 * @returns this thread, useful for chaining
		 */
		moveToTrash(): GmailApp.GmailThread
		/**
		 * Reloads this thread, and associated state from Gmail (useful in case the labels, read state,
		 * etc., have changed).
		 * 
		 * <pre class="prettyprint"><code>
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * // ...Do something that may take a while here....
		 * firstThread.refresh(); // Make sure it&#39;s up-to-date
		 * // ...Do more stuff with firstThread ...
		 * </code></pre>
		 * 
		 * @returns this thread, useful for chaining
		 */
		refresh(): GmailApp.GmailThread
		/**
		 * Removes this label from the thread.
		 * 
		 * <pre class="prettyprint"><code>
		 * var myLabel = GmailApp.getUserLabelByName(&#39;&lt;your label&gt;&#39;);
		 * var threads = myLabel.getThreads();
		 * for (var x in threads) {
		 *   var thread = threads[x];
		 *   thread.removeLabel(myLabel);
		 * }
		 * </code></pre>
		 * 
		 * @param label - the label to remove from this thread
		 * 
		 * @returns this thread, useful for chaining
		 */
		removeLabel(
			label: GmailApp.GmailLabel
		): GmailApp.GmailThread
		/**
		 * Reply to the sender of the last message on this thread using the replyTo address.
		 * 
		 * <p>Note that the total size of the email (including all headers) may not exceed 20KB.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Respond to author of last email in thread with acknowledgment
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * firstThread.reply(&quot;Got your message&quot;);
		 * </code></pre>
		 * 
		 * @param body - the body of the email
		 * 
		 * @returns this thread, useful for chaining
		 */
		reply(
			body: string
		): GmailApp.GmailThread
		/**
		 * Reply to the sender of the last message on this thread using the replyTo address, with optional
		 * arguments. The email can contain both plain text, and also an HTML body. Note that the total
		 * size of the email (including all headers, but excluding attachments) may not exceed 20KB.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Respond with HTML body text.
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * firstThread.reply(&quot;incapable of HTML&quot;, {
		 *   htmlBody: &quot;some HTML body text&quot;,
		 *   noReply: true
		 * });
		 * </code></pre>
		 * 
		 * @param body - the body of the email
		 * @param options - a JavaScript object that specifies advanced parameters, as listed below
		 * 
		 * @returns this thread, useful for chaining
		 */
		reply(
			body: string,
			options: object
		): GmailApp.GmailThread

		/**
		 * Reply to the sender (using the replyTo address), and all recipients of the last message on this
		 * thread.
		 * 
		 * <p>Note that the total size of the email (including all headers) may not exceed 20KB.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Respond to all with acknowledgment to the first thread in the inbox
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * firstThread.replyAll(&quot;Got your message&quot;);
		 * </code></pre>
		 * 
		 * @param body - the body of the email
		 * 
		 * @returns this thread, useful for chaining
		 */
		replyAll(
			body: string
		): GmailApp.GmailThread
		/**
		 * Reply to the sender (using the <code>replyTo</code> address), and all recipients of the last message
		 * on this thread, with optional arguments. The email can contain both plain text, and also an
		 * HTML body. Note that the total size of the email (including all headers, but excluding
		 * attachments) may not exceed 20KB.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Respond with HTML body text.
		 * var firstThread = GmailApp.getInboxThreads(0,1)[0];
		 * firstThread.replyAll(&quot;incapable of HTML&quot;, {
		 *   htmlBody: &quot;some HTML body text&quot;,
		 *   noReply: true
		 * });
		 * </code></pre>
		 * 
		 * @param body - the body of the email
		 * @param options - a JavaScript object that specifies advanced parameters, as listed below
		 * 
		 * @returns this thread, useful for chaining
		 */
		replyAll(
			body: string,
			options: object
		): GmailApp.GmailThread


	}

}
