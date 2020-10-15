/** Module: UserProperties */

type UserProperties = typeof UserProperties;
declare namespace UserProperties {
	/**
	 * Deletes all properties.
	 * 
	 * <pre class="prettyprint"><code>
	 * UserProperties.deleteAllProperties();
	 * </code></pre>
	 * 
	 * @returns this object, for chaining
	 */
	function deleteAllProperties(): UserProperties
	/**
	 * Deletes the property with the given key.
	 * 
	 * <pre class="prettyprint"><code>
	 * UserProperties.deleteProperty(&#39;special&#39;);
	 * </code></pre>
	 * 
	 * @param key - key for property to delete
	 * 
	 * @returns this object, for chaining
	 */
	function deleteProperty(
		key: string
	): UserProperties
	/**
	 * Get all of the available keys.
	 */
	function getKeys(): string[]
	/**
	 * Get all of the available properties at once.
	 * 
	 * <p>This gives a copy, not a live view, so changing the properties on the returned object won't
	 * update them in storage and vice versa.
	 * 
	 * <pre class="prettyprint"><code>
	 * UserProperties.setProperties({
	 *   &quot;cow&quot;     : &quot;moo&quot;,
	 *   &quot;sheep&quot;   : &quot;baa&quot;,
	 *   &quot;chicken&quot; : &quot;cluck&quot;
	 * });
	 * 
	 * // Logs &quot;A cow goes: moo&quot;
	 * Logger.log(&quot;A cow goes: %s&quot;, UserProperties.getProperty(&quot;cow&quot;));
	 * 
	 * // This makes a copy. Any changes that happen here will not
	 * // be written back to properties.
	 * var animalSounds = UserProperties.getProperties();
	 * 
	 * // Logs:
	 * // A chicken goes cluck!
	 * // A cow goes moo!
	 * // A sheep goes baa!
	 * for(var kind in animalSounds) {
	 *   Logger.log(&quot;A %s goes %s!&quot;, kind, animalSounds[kind]);
	 * }
	 * </code></pre>
	 * 
	 * @returns a copy of the properties containing key-value pairs
	 */
	function getProperties(): object
	/**
	 * Returns the value associated with the provided key, or null if there is no such value.
	 * 
	 * <pre class="prettyprint"><code>
	 * var specialValue = UserProperties.getProperty(&#39;special&#39;);
	 * </code></pre>
	 * 
	 * @param key - key for the value to retrieve
	 * 
	 * @returns the value associated with the key
	 */
	function getProperty(
		key: string
	): string
	/**
	 * Bulk-sets all the properties drawn from the given object.
	 * 
	 * <pre class="prettyprint"><code>
	 * UserProperties.setProperties({special: &#39;sauce&#39;, &#39;meaning&#39;: 42});
	 * </code></pre>
	 * 
	 * @param properties - an object containing the properties to set.
	 * 
	 * @returns this object, for chaining
	 */
	function setProperties(
		properties: object
	): UserProperties
	/**
	 * Bulk-sets all the properties drawn from the given object.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This deletes all other properties
	 * UserProperties.setProperties({special: &#39;sauce&#39;, &#39;meaning&#39;: 42}, true);
	 * </code></pre>
	 * 
	 * @param properties - an object containing the properties to set.
	 * @param deleteAllOthers - whether to delete all existing properties.
	 * 
	 * @returns this object, for chaining
	 */
	function setProperties(
		properties: object,
		deleteAllOthers: Boolean
	): UserProperties

	/**
	 * Persists the specified in value with the provided key. Any existing value associated with this
	 * key will be overwritten.
	 * 
	 * <pre class="prettyprint"><code>
	 * UserProperties.setProperty(&#39;special&#39;, &#39;sauce&#39;);
	 * </code></pre>
	 * 
	 * @param key - key for property
	 * @param value - value to associate with the key
	 * 
	 * @returns this object, for chaining
	 */
	function setProperty(
		key: string,
		value: string
	): UserProperties

}
