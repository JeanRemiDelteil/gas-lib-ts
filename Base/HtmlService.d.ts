/** Module: HtmlService */

type HtmlService = typeof HtmlService;
declare namespace HtmlService {

	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/html-output.html'>HtmlOutput</a></code> object that can be returned from the script.
	 * 
	 * <pre class="prettyprint"><code>
	 * var output = HtmlService.createHtmlOutput();
	 * </code></pre>
	 * 
	 * @returns the new HtmlOutput object
	 */
	function createHtmlOutput(): HtmlService.HtmlOutput
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/html-output.html'>HtmlOutput</a></code> object from a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/../base/blob-source.html'>BlobSource</a></code> resource.
	 * 
	 * <pre class="prettyprint"><code>
	 * function createFromBlob(blob) {
	 *   var output = HtmlService.createHtmlOutput(blob);
	 *   return output;
	 * }
	 * </code></pre>
	 * 
	 * @param blob - the object to get HTML out of
	 * 
	 * @returns the new <code>HtmlOutput</code> object
	 */
	function createHtmlOutput(
		blob: BlobSource
	): HtmlService.HtmlOutput
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/html-output.html'>HtmlOutput</a></code> object that can be returned from the script.
	 * 
	 * <pre class="prettyprint"><code>
	 * var output = HtmlService.createHtmlOutput(&#39;&lt;b&gt;Hello world!&lt;/b&gt;&#39;);
	 * </code></pre>
	 * 
	 * @param html - the content to serve
	 * 
	 * @returns the new HtmlOutput object
	 */
	function createHtmlOutput(
		html: string
	): HtmlService.HtmlOutput

	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/html-output.html'>HtmlOutput</a></code> object from a file in the code editor.
	 * 
	 * <pre class="prettyprint"><code>
	 * var output = HtmlService.createHtmlOutputFromFile(&#39;myPage&#39;);
	 * </code></pre>
	 * 
	 * @param filename - the name of the file to use
	 * 
	 * @returns the new <code>HtmlOutput</code> object
	 */
	function createHtmlOutputFromFile(
		filename: string
	): HtmlService.HtmlOutput
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/html-template.html'>HtmlTemplate</a></code> object from a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/../base/blob-source.html'>BlobSource</a></code> resource.
	 * 
	 * <pre class="prettyprint"><code>
	 * function createFromBlob(blob) {
	 *   var template = HtmlService.createTemplate(blob);
	 *   return output;
	 * }
	 * </code></pre>
	 * 
	 * @param blob - The object to get HTML out of.
	 * 
	 * @returns the new <code>HtmlTemplate</code> object
	 */
	function createTemplate(
		blob: BlobSource
	): HtmlService.HtmlTemplate
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/html-template.html'>HtmlTemplate</a></code> object that can be returned from the script.
	 * 
	 * <pre class="prettyprint"><code>
	 * var template = HtmlService.createTemplate(&#39;&lt;b&gt;The time is &amp;lt;?= new Date() ?&amp;gt;&lt;/b&gt;&#39;);
	 * </code></pre>
	 * 
	 * @param html - the content of the template
	 * 
	 * @returns the new <code>HtmlTemplate</code> object
	 */
	function createTemplate(
		html: string
	): HtmlService.HtmlTemplate

	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/html-template.html'>HtmlTemplate</a></code> object from a file in the code editor.
	 * 
	 * <pre class="prettyprint"><code>
	 * var template = HtmlService.createTemplateFromFile(&#39;myTemplate&#39;);
	 * </code></pre>
	 * 
	 * @param filename - the name of the file to use
	 * 
	 * @returns the new <code>HtmlTemplate</code> object
	 */
	function createTemplateFromFile(
		filename: string
	): HtmlService.HtmlTemplate
	/**
	 * Gets the user-agent string for the current browser. Returns <code>null</code> for most script
	 * executions if not used in a web app's <code>doGet()</code> or <code>doPost()</code> function.
	 * 
	 * @returns the user-agent string
	 */
	function getUserAgent(): string

	class HtmlOutput {
		private constructor();

		/**
		 * Adds a meta tag to the page. Meta tags included directly in an Apps Script HTML file are
		 * ignored. Only the following meta tags are allowed:
		 * 
		 * <pre class="prettyprint"><code>
		 * &lt;meta name=&quot;apple-mobile-web-app-capable&quot; content=&quot;...&quot;/&gt;
		 * &lt;meta name=&quot;google-site-verification&quot; content=&quot;...&quot;/&gt;
		 * &lt;meta name=&quot;mobile-web-app-capable&quot; content=&quot;...&quot;/&gt;
		 * &lt;meta name=&quot;viewport&quot; content=&quot;...&quot;/&gt;
		 * </code></pre>
		 * 
		 * <pre class="prettyprint"><code>
		 * var output = HtmlService.createHtmlOutput(&#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;);
		 * output.addMetaTag(&#39;viewport&#39;, &#39;width=device-width, initial-scale=1&#39;);
		 * </code></pre>
		 * 
		 * @param name - The value of the meta tag's name attribute.
		 * @param content - The value of the meta tag's content attribute.
		 * 
		 * @returns This output, for chaining.
		 */
		addMetaTag(
			name: string,
			content: string
		): HtmlService.HtmlOutput
		/**
		 * Appends new content to the content of this <code>HtmlOutput</code>. Use this only for content from a
		 * trusted source, because it is not escaped.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log &quot;&lt;b&gt;Hello, world!&lt;/b&gt;&lt;p&gt;Hello again, world.&lt;/p&gt;&quot;
		 * var output = HtmlService.createHtmlOutput(&#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;);
		 * output.append(&#39;&lt;p&gt;Hello again, world.&lt;/p&gt;&#39;);
		 * Logger.log(output.getContent());
		 * </code></pre>
		 * 
		 * @param addedContent - The content to append.
		 * 
		 * @returns This output, for chaining.
		 */
		append(
			addedContent: string
		): HtmlService.HtmlOutput
		/**
		 * Appends new content to the content of this <code>HtmlOutput</code>, using contextual escaping.
		 * 
		 * <p>This method correctly escapes content based on the current state of the <code>HtmlOutput</code>,
		 * so that the result is a safe string with no markup or side affects. Use this instead of using
		 * append whenever you are adding content from an untrusted source, such as from a user, to avoid
		 * accidentally allowing a cross site scripting (XSS) bug where content or markup that you append
		 * causes unexpected code execution.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log &quot;&lt;b&gt;Hello, world!&lt;/b&gt;&amp;lt;p&amp;gt;Hello again, world.&amp;lt;/p&amp;gt;&quot;
		 * var output = HtmlService.createHtmlOutput(&#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;);
		 * output.appendUntrusted(&#39;&lt;p&gt;Hello again, world.&lt;/p&gt;&#39;);
		 * Logger.log(output.getContent());
		 * </code></pre>
		 * 
		 * @param addedContent - The content to append.
		 * 
		 * @returns This output, for chaining.
		 */
		appendUntrusted(
			addedContent: string
		): HtmlService.HtmlOutput
		/**
		 * Returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/html-template.html'>HtmlTemplate</a></code> backed by this <code>HtmlOutput</code>. This method can be used to
		 * build up a template incrementally. Future changes to <code>HtmlOutput</code> affect the contents of
		 * the <code>HtmlTemplate</code> as well.
		 * 
		 * <pre class="prettyprint"><code>
		 * var output = HtmlService.createHtmlOutput(&#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;);
		 * var template = output.asTemplate();
		 * </code></pre>
		 * 
		 * @returns The new <code>HtmlTemplate</code>.
		 */
		asTemplate(): HtmlService.HtmlTemplate
		/**
		 * Clears the current content.
		 * 
		 * <pre class="prettyprint"><code>
		 * var output = HtmlService.createHtmlOutput(&#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;);
		 * output.clear();
		 * </code></pre>
		 * 
		 * @returns This output, for chaining.
		 */
		clear(): HtmlService.HtmlOutput
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
		 * Return the data inside this object as a blob.
		 * 
		 * @returns The data as a blob.
		 */
		getBlob(): Blob
		/**
		 * Gets the content of this <code>HtmlOutput</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log &quot;&lt;b&gt;Hello, world!&lt;/b&gt;&quot;
		 * var output = HtmlService.createHtmlOutput(&#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;);
		 * Logger.log(output.getContent());
		 * </code></pre>
		 * 
		 * @returns The content that is served.
		 */
		getContent(): string
		/**
		 * Gets the URL for a favicon link tag added to the page by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/html-output.html#setFaviconUrl(String)'>setFaviconUrl(iconUrl)</a></code>. Favicon link tags included directly in an Apps Script HTML file are
		 * ignored.
		 * 
		 * <pre class="prettyprint"><code>
		 * var output = HtmlService.createHtmlOutput(&#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;);
		 * output.setFaviconUrl(&#39;http://www.example.com/image.png&#39;);
		 * Logger.log(output.getFaviconUrl();
		 * </code></pre>
		 * 
		 * @returns The URL of the favicon image.
		 */
		getFaviconUrl(): string
		/**
		 * Gets the initial height of the <a
		 * href="https://developers.google.com/apps-script/guides/dialogs">custom dialog</a> in Google
		 * Docs, Sheets, or Forms. If the <code>HtmlOutput</code> is published as a web app instead, this
		 * method returns <code>null</code>. To resize a dialog that is already open, call <a
		 * href="https://developers.google.com/apps-script/guides/html/communication#resizing_dialogs_in_google_apps">
		 * <code>google.script.host.setHeight(height)</code></a> in client-side code.
		 * 
		 * <pre class="prettyprint"><code>
		 * var output = HtmlService.createHtmlOutput(&#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;);
		 * output.setHeight(200);
		 * Logger.log(output.getHeight());
		 * </code></pre>
		 * 
		 * @returns The height, in pixels.
		 */
		getHeight(): number
		/**
		 * Gets an array of objects that represent meta tags added to the page by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/html-output.html#addMetaTag(String,String)'>addMetaTag(name, content)</a></code>. Meta tags included directly in an Apps Script HTML file are
		 * ignored.
		 * 
		 * <pre class="prettyprint"><code>
		 * var output = HtmlService.createHtmlOutput(&#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;);
		 * output.addMetaTag(&#39;viewport&#39;, &#39;width=device-width, initial-scale=1&#39;);
		 * 
		 * var tags = output.getMetaTags();
		 * Logger.log(&#39;&lt;meta name=&quot;%s&quot; content=&quot;%s&quot;/&gt;&#39;, tags[0].getName(), tags[0].getContent());
		 * </code></pre>
		 * 
		 * @returns An array of objects that represent meta tags added to the page by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/html-output.html#addMetaTag(String,String)'>addMetaTag(name, content)</a></code>.
		 */
		getMetaTags(): HtmlService.HtmlOutputMetaTag[]
		/**
		 * Gets the title of the output page. Note that the &lt;title&gt; HTML element is ignored.
		 * 
		 * <pre class="prettyprint"><code>
		 * var output = HtmlService.createHtmlOutput(&#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;);
		 * Logger.log(output.getTitle());
		 * </code></pre>
		 * 
		 * @returns The title of the page.
		 */
		getTitle(): string
		/**
		 * Gets the initial width of the <a
		 * href="https://developers.google.com/apps-script/guides/dialogs">custom dialog</a> in Google
		 * Docs, Sheets, or Forms. If the <code>HtmlOutput</code> is published as a web app instead, this
		 * method returns <code>null</code>. To resize a dialog that is already open, call <a
		 * href="https://developers.google.com/apps-script/guides/html/communication#resizing_dialogs_in_google_apps">
		 * <code>google.script.host.setWidth(width)</code></a> in client-side code.
		 * 
		 * <pre class="prettyprint"><code>
		 * var output = HtmlService.createHtmlOutput(&#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;);
		 * output.setWidth(200);
		 * Logger.log(output.getWidth());
		 * </code></pre>
		 * 
		 * @returns The width in pixels.
		 */
		getWidth(): number
		/**
		 * Sets the content of this <code>HtmlOutput</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var output = HtmlService.createHtmlOutput();
		 * output.setContent(&#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;);
		 * </code></pre>
		 * 
		 * @param content - The content to serve.
		 * 
		 * @returns This output, for chaining.
		 */
		setContent(
			content: string
		): HtmlService.HtmlOutput
		/**
		 * Adds a link tag for a favicon to the page. Favicon link tags included directly in an Apps
		 * Script HTML file are ignored.
		 * 
		 * <pre class="prettyprint"><code>
		 * var output = HtmlService.createHtmlOutput(&#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;);
		 * output.setFaviconUrl(&#39;http://www.example.com/image.png&#39;);
		 * </code></pre>
		 * 
		 * @param iconUrl - The URL of the favicon image, with the image extension indicating the image
		 *     type.
		 * 
		 * @returns This output, for chaining.
		 */
		setFaviconUrl(
			iconUrl: string
		): HtmlService.HtmlOutput
		/**
		 * Sets the initial height of the <a
		 * href="https://developers.google.com/apps-script/guides/dialogs">custom dialog</a> in Google
		 * Docs, Sheets, or Forms. If the <code>HtmlOutput</code> is published as a web app instead, this
		 * method has no effect. To resize a dialog that is already open, call <a
		 * href="https://developers.google.com/apps-script/guides/html/communication#resizing_dialogs_in_google_apps">
		 * <code>google.script.host.setHeight(height)</code></a> in client-side code.
		 * 
		 * <pre class="prettyprint"><code>
		 * var output = HtmlService.createHtmlOutput(&#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;);
		 * output.setHeight(200);
		 * </code></pre>
		 * 
		 * @param height - The new height in pixels; <code>null</code> results in a default value.
		 * 
		 * @returns This output, for chaining.
		 */
		setHeight(
			height: number
		): HtmlService.HtmlOutput
		/**
		 * This method now has no effect &mdash; previously it set the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/sandbox-mode.html'>sandbox
		 * mode</a></code> used for client-side scripts. To protect users from being served malicious HTML or
		 * JavaScript, client-side code served from HTML service executes in a security sandbox that
		 * imposes restrictions on the code. Originally this method allowed script authors to choose
		 * between different versions of the sandbox, but now all scripts now use <code>IFRAME</code> mode
		 * regardless of what sandbox mode is set. For more information, see the <a
		 * href="/apps-script/guides/html/restrictions">guide to restrictions in HTML service</a>.
		 * 
		 * <p>The <code>IFRAME</code> mode imposes many fewer restrictions than the other sandbox modes and
		 * runs fastest, but does not work at all in certain older browsers, including Internet Explorer
		 * 9. The sandbox mode can be read in a client-side script by inspecting <code>google.script.sandbox.mode</code>. Note that this property returns the actual mode on the client,
		 * which may differ from the mode requested on the server if the requested mode is not supported
		 * in the user's browser.
		 * 
		 * <pre class="prettyprint"><code>
		 * &lt;!-- Read the sandbox mode (in a client-side script). --&gt;
		 * &lt;script&gt;
		 *   alert(google.script.sandbox.mode);
		 * &lt;/script&gt;
		 * </code></pre>
		 * 
		 * @param mode - The sandbox mode to use.
		 * 
		 * @returns This output, for chaining.
		 */
		setSandboxMode(
			mode: HtmlService.SandboxMode
		): HtmlService.HtmlOutput
		/**
		 * Sets the title of the output page. For web apps, this is the title of the entire page, while
		 * for <code>HtmlOutput</code> shown in Google Sheets, this is the dialog title.
		 * 
		 * <pre class="prettyprint"><code>
		 * var output = HtmlService.createHtmlOutput(&#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;);
		 * output.setTitle(&#39;My First Page&#39;);
		 * </code></pre>
		 * 
		 * @param title - The new title.
		 * 
		 * @returns This output, for chaining.
		 */
		setTitle(
			title: string
		): HtmlService.HtmlOutput
		/**
		 * Sets the initial width of a <a
		 * href="https://developers.google.com/apps-script/guides/dialogs">custom dialog</a> in Google
		 * Docs, Sheets, or Forms. If the <code>HtmlOutput</code> is published as a web app instead, this
		 * method has no effect. To resize a dialog that is already open, call <a
		 * href="https://developers.google.com/apps-script/guides/html/communication#resizing_dialogs_in_google_apps">
		 * <code>google.script.host.setWidth(width)</code></a> in client-side code.
		 * 
		 * <pre class="prettyprint"><code>
		 * var output = HtmlService.createHtmlOutput(&#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;);
		 * output.setWidth(200);
		 * </code></pre>
		 * 
		 * @param width - The new width in pixels; <code>null</code> results in a default value.
		 * 
		 * @returns This output, for chaining.
		 */
		setWidth(
			width: number
		): HtmlService.HtmlOutput
		/**
		 * Sets the state of the page's <code>X-Frame-Options</code> header, which controls clickjacking
		 * prevention.
		 * 
		 * <p>Setting <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/x-frame-options-mode.html#ALLOWALL'>XFrameOptionsMode.ALLOWALL</a></code> lets any site iframe the page, so the
		 * developer should implement their own protection against clickjacking.
		 * 
		 * <p>If a script does not set an <code>X-Frame-Options</code> mode, Apps Script uses <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/x-frame-options-mode.html#DEFAULT'>XFrameOptionsMode.DEFAULT</a></code> mode as the default.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Serve HTML with no X-Frame-Options header (in Apps Script server-side code).
		 * var output = HtmlService.createHtmlOutput(&#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;);
		 * output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
		 * </code></pre>
		 * 
		 * @param mode - The XFrame options mode to set.
		 * 
		 * @returns This output, for chaining.
		 */
		setXFrameOptionsMode(
			mode: HtmlService.XFrameOptionsMode
		): HtmlService.HtmlOutput

	}

	class HtmlOutputMetaTag {
		private constructor();

		/**
		 * Gets the content of this meta tag.
		 * 
		 * @returns the content of this meta tag.
		 */
		getContent(): string
		/**
		 * Gets the name of this <code>HtmlOutputMetaTag</code>.
		 * 
		 * @returns the name of this meta tag.
		 */
		getName(): string

	}

	class HtmlTemplate {
		private constructor();

		/**
		 * Evaluates this template and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/html-output.html'>HtmlOutput</a></code> object. Any properties set on this
		 * <code>HtmlTemplate</code> object will be in scope when evaluating. To debug errors in a template,
		 * examine the code using the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/html-template.html#getCode()'>getCode()</a></code> method.
		 * 
		 * <pre class="prettyprint"><code>
		 * // A template which evaluates to whatever is bound to &#39;foo&#39;.
		 * var template = HtmlService.createTemplate(&#39;&lt;?= foo ?&gt;&#39;);
		 * template.foo = &#39;Hello World!&#39;;
		 * Logger.log(template.evaluate().getContent());  // will log &#39;Hello World!&#39;
		 * </code></pre>
		 * 
		 * @returns an HtmlOutput object
		 */
		evaluate(): HtmlService.HtmlOutput
		/**
		 * Generates a string of JavaScript code, based on the template file, that can be evaluated. This
		 * method produces a string of JavaScript code based on the template file. Calling <code>
		 * eval(&lt;code&gt;)</code> will return a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/html-output.html'>HtmlOutput</a></code> object with the content of the
		 * template after running all embedded server scripts. The generated code is intended to be
		 * human-readable, and so if you need to debug a template you can call <code>
		 * Logger.log(&lt;code&gt;)</code> to see what was produced.
		 * 
		 * <p>Evaluating this code will implicitly bind in all variables in the current scope. In general,
		 * it's preferable to use the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/html-template.html#evaluate()'>evaluate()</a></code> method, which takes explicit bindings.
		 * 
		 * <pre class="prettyprint"><code>
		 * var template = HtmlService.createTemplate(&#39;&lt;b&gt;The time is &amp;lt;?= new Date() ?&amp;gt;&lt;/b&gt;&#39;);
		 * Logger.log(template.getCode());
		 * </code></pre>
		 * 
		 * @returns a string based on the template, which can be evaluated
		 */
		getCode(): string
		/**
		 * Generates a string of JavaScript code that can be evaluated, with each line of the code
		 * containing the original line from the template as a comment. This method produces a string of
		 * JavaScript code based on the template file. Calling <code>eval(&lt;code&gt;)</code> will return
		 * a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/html-output.html'>HtmlOutput</a></code> object with the content of the template after running all embedded
		 * server scripts. The generated code is intended to be human-readable, and so if you need to
		 * debug a template you can call <code>Logger.log(&lt;code&gt;)</code> to see what was produced.
		 * 
		 * <p>Evaluating this code will implicitly bind in all variables in the current scope. In general,
		 * it's preferable to use the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/html/html-template.html#evaluate()'>evaluate()</a></code> method, which takes explicit bindings.
		 * 
		 * <pre class="prettyprint"><code>
		 * var template = HtmlService.createTemplate(&#39;&lt;b&gt;The time is &amp;lt;?= new Date() ?&amp;gt;&lt;/b&gt;&#39;);
		 * Logger.log(template.getCodeWithComments());
		 * </code></pre>
		 * 
		 * @returns an string based on the template, which can be evaluated
		 */
		getCodeWithComments(): string
		/**
		 * Returns the unprocessed content of this template.
		 * 
		 * <pre class="prettyprint"><code>
		 * var template = HtmlService.createTemplate(&#39;&lt;b&gt;The time is &amp;lt;?= new Date() ?&amp;gt;&lt;/b&gt;&#39;);
		 * Logger.log(template.getRawContent());
		 * </code></pre>
		 * 
		 * @returns the template's raw content
		 */
		getRawContent(): string

	}

	enum SandboxMode {
		/**
		 * A legacy sandbox mode that emulates ECMAScript 5 strict mode using only the features available
		 * in ECMAScript 3. This mode was the default prior to February 2014.
		 * 
		 * <p><code>EMULATED</code> was <a href="/apps-script/guides/support/sunset">sunset as of December 10,
		 * 2015</a>. All scripts attempting use <code>EMULATED</code> will now use <code>IFRAME</code> instead.
		 */
		EMULATED = "EMULATED",
		/**
		 * A sandbox mode that uses iframe sandboxing instead of the Caja sandbox technology used by the
		 * <code>EMULATED</code> and <code>NATIVE</code> modes. This mode is the default for new scripts as of
		 * November 12, 2015 and for all scripts as of July 6, 2016.
		 * 
		 * <p>This mode imposes many fewer restrictions than the other sandbox modes and runs fastest, but
		 * does not work at all in certain older browsers, including Internet Explorer 9.
		 */
		IFRAME = "IFRAME",
		/**
		 * A sandbox mode that is built on top of ECMAScript 5 strict mode. A sandbox mode built on top of
		 * ECMAScript 5 strict mode. This mode was <a href="/apps-script/guides/support/sunset">sunset as
		 * of July 6, 2016</a>. All scripts now use <code>IFRAME</code> mode.
		 */
		NATIVE = "NATIVE",
	}

	enum XFrameOptionsMode {
		/**
		 * No <code>X-Frame-Options</code> header will be set. This will let any site iframe the page, so the
		 * developer should implement their own protection against clickjacking.
		 */
		ALLOWALL = "ALLOWALL",
		/**
		 * Sets the default value for the <code>X-Frame-Options</code> header, which preserves normal security
		 * assumptions. If a script does not set an <code>X-Frame-Options</code> mode, Apps Script uses this
		 * mode as the default.
		 */
		DEFAULT = "DEFAULT",
	}

}
