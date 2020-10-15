/** Module: ContentService */

type ContentService = typeof ContentService;
declare namespace ContentService {

	/**
	 * Create a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/content/text-output.html'>TextOutput</a></code> object.
	 * 
	 * <pre class="prettyprint"><code>
	 * function doGet() {
	 *   var output = ContentService.createTextOutput();
	 *   output.append(&quot;Hello world!&quot;);
	 *   return output;
	 * }
	 * </code></pre>
	 * 
	 * @returns the new TextOutput object.
	 */
	function createTextOutput(): ContentService.TextOutput
	/**
	 * Create a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/content/text-output.html'>TextOutput</a></code> object that can serve the given content.
	 * 
	 * <pre class="prettyprint"><code>
	 * function doGet() {
	 *   var output = ContentService.createTextOutput(&quot;Hello world!&quot;);
	 *   return output;
	 * }
	 * </code></pre>
	 * 
	 * @param content - the content to serve.
	 * 
	 * @returns the new TextOutput object.
	 */
	function createTextOutput(
		content: string
	): ContentService.TextOutput


	enum MimeType {
		ATOM = "ATOM",
		CSV = "CSV",
		ICAL = "ICAL",
		JAVASCRIPT = "JAVASCRIPT",
		JSON = "JSON",
		RSS = "RSS",
		TEXT = "TEXT",
		VCARD = "VCARD",
		XML = "XML",
	}

	class TextOutput {
		private constructor();

		/**
		 * Appends new content to the content that will be served.
		 * 
		 * @param addedContent - the content to append
		 * 
		 * @returns this TextOutput itself, useful for chaining
		 */
		append(
			addedContent: string
		): ContentService.TextOutput
		/**
		 * Clears the current content.
		 * 
		 * @returns this TextOutput itself, useful for chaining
		 */
		clear(): ContentService.TextOutput
		/**
		 * Tells browsers to download rather than display this content.
		 * 
		 * <p>Some browsers will ignore this setting. Setting this to null will clear it back to the
		 * default behavior of displaying rather than downloading.
		 * 
		 * @param filename - the filename to tell the browser to use
		 * 
		 * @returns the TextOutput object, useful for chaining
		 */
		downloadAsFile(
			filename: string
		): ContentService.TextOutput
		/**
		 * Gets the content that will be served.
		 * 
		 * @returns the content that will be served
		 */
		getContent(): string
		/**
		 * Returns the file name to download this file as, or null if it should be displayed rather than
		 * downloaded.
		 * 
		 * @returns the file name
		 */
		getFileName(): string
		/**
		 * Get the mime type this content will be served with.
		 * 
		 * @returns the mime type this will be served with
		 */
		getMimeType(): ContentService.MimeType
		/**
		 * Sets the content that will be served.
		 * 
		 * @param content - the content to serve
		 * 
		 * @returns this TextOutput itself, useful for chaining
		 */
		setContent(
			content: string
		): ContentService.TextOutput
		/**
		 * Sets the mime type for content that will be served. The default is plain text.
		 * 
		 * @param mimeType - the mime type
		 * 
		 * @returns this TextOutput itself, useful for chaining
		 */
		setMimeType(
			mimeType: ContentService.MimeType
		): ContentService.TextOutput

	}

}
