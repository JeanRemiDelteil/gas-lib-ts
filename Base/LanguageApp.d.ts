/** Module: LanguageApp */

type LanguageApp = typeof LanguageApp;
declare namespace LanguageApp {
	/**
	 * Automatically translates some text from a source language to a destination language.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below will write &quot;Esta es una prueba&quot; to the log.
	 *   var spanish = LanguageApp.translate(&#39;This is a test&#39;, &#39;en&#39;, &#39;es&#39;);
	 *   Logger.log(spanish);
	 * </code></pre>
	 * 
	 * A list of language codes is available <a href="/translate/docs/languages">here</a>.
	 * 
	 * @param text - the text to translate
	 * @param sourceLanguage - the language code in which text is written. If it is set to the empty
	 *     string, the source language code will be auto-detected
	 * @param targetLanguage - the language code to which the text should be translated
	 * 
	 * @returns the translated text
	 */
	function translate(
		text: string,
		sourceLanguage: string,
		targetLanguage: string
	): string
	/**
	 * Automatically translates some text from a source language to a destination language.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below will write &quot;Esta es una &lt;strong&gt;prueba&lt;/strong&gt;&quot; to the log.
	 *   var spanish = LanguageApp.translate(&#39;This is a &amp;lt;strong&amp;gt;test&amp;lt;/strong&amp;gt;&#39;,
	 *                                       &#39;en&#39;, &#39;es&#39;, {contentType: &#39;html&#39;});
	 *   Logger.log(spanish);
	 * </code></pre>
	 * 
	 * A list of language codes is available <a href="/translate/docs/languages">here</a>.
	 * 
	 * @param text - the text to translate
	 * @param sourceLanguage - the language code in which text is written. If it is set to the empty
	 *     string, the source language code will be auto-detected
	 * @param targetLanguage - the language code to which the text should be translated
	 * @param advancedArgs - optional JavaScript object fields
	 * 
	 * @returns the translated text
	 */
	function translate(
		text: string,
		sourceLanguage: string,
		targetLanguage: string,
		advancedArgs: object
	): string


}
