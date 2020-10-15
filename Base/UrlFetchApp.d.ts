/** Module: UrlFetchApp */

type UrlFetchApp = typeof UrlFetchApp;
declare namespace UrlFetchApp {
	/**
	 * Makes a request to fetch a URL.
	 * 
	 * <p>This works over HTTP as well as HTTPS.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below logs the HTML code of the Google home page.
	 * var response = UrlFetchApp.fetch(&quot;http://www.google.com/&quot;);
	 * Logger.log(response.getContentText());
	 * </code></pre>
	 * 
	 * @param url - The URL to fetch.
	 * 
	 * @returns The HTTP response data.
	 */
	function fetch(
		url: string
	): UrlFetchApp.HTTPResponse
	/**
	 * Makes a request to fetch a URL using optional advanced parameters.
	 * 
	 * <p>This works over HTTP as well as HTTPS.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Make a GET request and log the returned content.
	 * var response = UrlFetchApp.fetch(&#39;http://www.google.com/&#39;);
	 * Logger.log(response.getContentText());
	 * </code></pre>
	 * 
	 * <pre class="prettyprint"><code>
	 * // Make a POST request with form data.
	 * var resumeBlob = Utilities.newBlob(&#39;Hire me!&#39;, &#39;text/plain&#39;, &#39;resume.txt&#39;);
	 * var formData = {
	 *   &#39;name&#39;: &#39;Bob Smith&#39;,
	 *   &#39;email&#39;: &#39;bob@example.com&#39;,
	 *   &#39;resume&#39;: resumeBlob
	 * };
	 * // Because payload is a JavaScript object, it is interpreted as
	 * // as form data. (No need to specify contentType; it automatically
	 * // defaults to either &#39;application/x-www-form-urlencoded&#39;
	 * // or &#39;multipart/form-data&#39;)
	 * var options = {
	 *   &#39;method&#39; : &#39;post&#39;,
	 *   &#39;payload&#39; : formData
	 * };
	 * UrlFetchApp.fetch(&#39;https://httpbin.org/post&#39;, options);
	 * </code></pre>
	 * 
	 * <pre class="prettyprint"><code>
	 * // Make a POST request with a JSON payload.
	 * var data = {
	 *   &#39;name&#39;: &#39;Bob Smith&#39;,
	 *   &#39;age&#39;: 35,
	 *   &#39;pets&#39;: [&#39;fido&#39;, &#39;fluffy&#39;]
	 * };
	 * var options = {
	 *   &#39;method&#39; : &#39;post&#39;,
	 *   &#39;contentType&#39;: &#39;application/json&#39;,
	 *   // Convert the JavaScript object to a JSON string.
	 *   &#39;payload&#39; : JSON.stringify(data)
	 * };
	 * UrlFetchApp.fetch(&#39;https://httpbin.org/post&#39;, options);
	 * </code></pre>
	 * 
	 * @param url - The URL to fetch.
	 * @param params - The optional JavaScript object specifying advanced parameters as defined below.
	 * 
	 * @returns The HTTP response data.
	 */
	function fetch(
		url: string,
		params: object
	): UrlFetchApp.HTTPResponse

	/**
	 * Makes multiple requests to fetch multiple URLs using optional advanced parameters.
	 * 
	 * <p>This works over HTTP as well as HTTPS.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Make both a POST request with form data, and a GET request.
	 * var resumeBlob = Utilities.newBlob(&#39;Hire me!&#39;, &#39;text/plain&#39;, &#39;resume.txt&#39;);
	 * var formData = {
	 *   &#39;name&#39;: &#39;Bob Smith&#39;,
	 *   &#39;email&#39;: &#39;bob@example.com&#39;,
	 *   &#39;resume&#39;: resumeBlob
	 * };
	 * // Because payload is a JavaScript object, it is interpreted as
	 * // as form data. (No need to specify contentType; it defaults to either
	 * // &#39;application/x-www-form-urlencoded&#39; or &#39;multipart/form-data&#39;)
	 * var request1 = {
	 *   &#39;url&#39;: &#39;https://httpbin.org/post&#39;,
	 *   &#39;method&#39; : &#39;post&#39;,
	 *   &#39;payload&#39; : formData
	 * };
	 * // A request may also just be a URL.
	 * var request2 = &#39;https://httpbin.org/get?key=value&#39;;
	 * UrlFetchApp.fetchAll([request1, request2]);
	 * </code></pre>
	 * 
	 * @param requests - An array of either URLs or JavaScript objects specifying requests as defined
	 *     below.
	 * 
	 * @returns An array of HTTP response data from each input request.
	 */
	function fetchAll(
		requests: object[]
	): UrlFetchApp.HTTPResponse[]
	/**
	 * Returns the request that is made if the operation was invoked.
	 * 
	 * <p>This method does not actually issue the request.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below logs the value for every key of the returned map.
	 * var response = UrlFetchApp.getRequest(&quot;http://www.google.com/&quot;);
	 * for(i in response) {
	 *   Logger.log(i + &quot;: &quot; + response[i]);
	 * }
	 * </code></pre>
	 * 
	 * @param url - The URL to look up.
	 * 
	 * @returns A map of Field Name to Value. The map has at least the following keys: <code>url</code>,
	 *     <code>method</code>, <code>contentType</code>, <code>payload</code>, and <code>headers</code>.
	 */
	function getRequest(
		url: string
	): object
	/**
	 * Returns the request that is made if the operation were invoked.
	 * 
	 * <p>This method does not actually issue the request.
	 * 
	 * @param url - The URL to look up.
	 * @param params - An optional JavaScript object specifying advanced parameters as defined below.
	 * 
	 * @returns A map of Field Name to Value. The map has at least the following keys: <code>url</code>,
	 *     <code>method</code>, <code>contentType</code>, <code>payload</code>, and <code>headers</code>.
	 */
	function getRequest(
		url: string,
		params: object
	): object


	class HTTPResponse {
		private constructor();

		/**
		 * Returns an attribute/value map of headers for the HTTP response, with headers that have
		 * multiple values returned as arrays.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the HTTP headers from the response
		 * // received when fetching the Google home page.
		 * var response = UrlFetchApp.fetch(&quot;http://www.google.com/&quot;);
		 * Logger.log(response.getAllHeaders());
		 * </code></pre>
		 * 
		 * @returns a JavaScript key/value map of HTTP headers
		 */
		getAllHeaders(): object
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
		 * Gets the raw binary content of an HTTP response.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the value of the first byte of the Google home page.
		 * var response = UrlFetchApp.fetch(&quot;http://www.google.com/&quot;);
		 * Logger.log(response.getContent()[0]);
		 * </code></pre>
		 * 
		 * @returns the content as a raw binary array
		 */
		getContent(): number[]
		/**
		 * Gets the content of an HTTP response encoded as a string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the HTML code of the Google home page.
		 * var response = UrlFetchApp.fetch(&quot;http://www.google.com/&quot;);
		 * Logger.log(response.getContentText());
		 * </code></pre>
		 * 
		 * @returns the content of the HTTP response, as a string
		 */
		getContentText(): string
		/**
		 * Returns the content of an HTTP response encoded as a string of the given charset.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the HTML code of the Google home page with the UTF-8 charset.
		 * var response = UrlFetchApp.fetch(&quot;http://www.google.com/&quot;);
		 * Logger.log(response.getContentText(&quot;UTF-8&quot;));
		 * </code></pre>
		 * 
		 * @param charset - a string representing the charset to be used for encoding the HTTP response
		 *     content
		 * 
		 * @returns the content of the HTTP response, encoded using the given charset
		 */
		getContentText(
			charset: string
		): string

		/**
		 * Returns an attribute/value map of headers for the HTTP response.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the HTTP headers from the response
		 * // received when fetching the Google home page.
		 * var response = UrlFetchApp.fetch(&quot;http://www.google.com/&quot;);
		 * Logger.log(response.getHeaders());
		 * </code></pre>
		 * 
		 * @returns a JavaScript key/value map of HTTP headers
		 */
		getHeaders(): object
		/**
		 * Get the HTTP status code (200 for OK, etc.) of an HTTP response.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the HTTP status code from the response received
		 * // when fetching the Google home page.
		 * // It should be 200 if the request succeeded.
		 * var response = UrlFetchApp.fetch(&quot;http://www.google.com/&quot;);
		 * Logger.log(response.getResponseCode());
		 * </code></pre>
		 * 
		 * @returns HTTP response code (e.g. 200 for OK)
		 */
		getResponseCode(): number

	}

}
