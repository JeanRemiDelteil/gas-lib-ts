/** Module: CacheService */

type CacheService = typeof CacheService;
declare namespace CacheService {
	/**
	 * Gets the cache instance scoped to the current document and script. Document caches are specific
	 * to the current document which contains the script. Use these to store script information that
	 * is specific to the current document. If this method is called outside of the context of a
	 * containing document (such as from a standalone script or web app), this method returns <code>null</code>.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Gets a cache that is specific to the current document containing the script
	 * var cache = CacheService.getDocumentCache();
	 * </code></pre>
	 * 
	 * @returns a document cache instance, or <code>null</code> if there is no containing document
	 */
	function getDocumentCache(): CacheService.Cache
	/**
	 * Gets the cache instance scoped to the script. Script caches are common to all users of the
	 * script. Use these to store information that is not specific to the current user.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Gets a cache that is common to all users of the script
	 * var cache = CacheService.getScriptCache();
	 * </code></pre>
	 * 
	 * @returns a script cache instance
	 */
	function getScriptCache(): CacheService.Cache
	/**
	 * Gets the cache instance scoped to the current user and script. User caches are specific to the
	 * current user of the script. Use these to store script information that is specific to the
	 * current user.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Gets a cache that is specific to the current user of the script
	 * var cache = CacheService.getUserCache();
	 * </code></pre>
	 * 
	 * @returns a user cache instance
	 */
	function getUserCache(): CacheService.Cache

	class Cache {
		private constructor();

		/**
		 * Gets the cached value for the given key, or null if none is found.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Gets the value from the cache for the key &#39;foo&#39;.
		 * var value = cache.get(&#39;foo&#39;);
		 * </code></pre>
		 * 
		 * @param key - the key to look up in the cache
		 * 
		 * @returns the cached value, or null if none was found
		 */
		get(
			key: string
		): string
		/**
		 * Returns a JavaScript Object containing all key/value pairs found in the cache for an array of
		 * keys.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Gets a set of values from the cache
		 * var values = cache.getAll([&#39;foo&#39;, &#39;x&#39;, &#39;missing&#39;]);
		 * // If there were values in the cache for &#39;foo&#39; and &#39;x&#39; but not &#39;missing&#39;, then &#39;values&#39; would
		 * // be: {&#39;foo&#39;: &#39;somevalue&#39;, &#39;x&#39;: &#39;othervalue&#39;}
		 * </code></pre>
		 * 
		 * @param keys - the keys to lookup
		 * 
		 * @returns a JavaScript Object containing the key/value pairs for all keys found in the cache
		 */
		getAll(
			keys: string[]
		): object
		/**
		 * Adds a key/value pair to the cache.
		 * 
		 * <p>The maximum length of a key is 250 characters. The maximum amount of data that can be stored
		 * per key is 100KB. The value will expire from the cache after 600 seconds (10 minutes).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Puts the value &#39;bar&#39; into the cache using the key &#39;foo&#39;
		 * cache.put(&#39;foo&#39;, &#39;bar&#39;);
		 * </code></pre>
		 * 
		 * @param key - the key to store the value under
		 * @param value - the value to be cached
		 */
		put(
			key: string,
			value: string
		): void
		/**
		 * Adds a key/value pair to the cache, with an expiration time (in seconds).
		 * 
		 * <p>The maximum length of a key is 250 characters. The maximum amount of data that can be stored
		 * per key is 100KB. The specified expiration time is only a suggestion; cached data may be
		 * removed before this time if a lot of data is cached.
		 * 
		 * <pre class="prettyprint">
		 * // Puts the value 'bar' into the cache using the key 'foo', but only for the next 20 seconds.
		 * cache.put('foo', 'bar', 20);
		 * </pre>
		 * 
		 * @param key - the key to store the value under
		 * @param value - the value to be cached
		 * @param expirationInSeconds - the maximum time the value remains in the cache, in seconds. The
		 *     minimum is 1 second and the maximum is 21600 seconds (6 hours).
		 */
		put(
			key: string,
			value: string,
			expirationInSeconds: number
		): void

		/**
		 * Adds a set of key/value pairs to the cache.
		 * 
		 * <p>Similar to repeated calls to "put", but more efficient as it only makes one call to the
		 * memcache server to set all values. The maximum length of a key is 250 characters. The maximum
		 * amount of data that can be stored per key is 100KB. The values will expire from the cache after
		 * 600 seconds (10 minutes).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Puts a set of values into the cache with the keys &#39;foo&#39;, &#39;x&#39;, and &#39;key&#39;.
		 * var values = {
		 *   &#39;foo&#39;: &#39;bar&#39;,
		 *   &#39;x&#39;:&#39;y&#39;,
		 *   &#39;key&#39;: &#39;value&#39;
		 * };
		 * cache.putAll(values);
		 * </code></pre>
		 * 
		 * @param values - a JavaScript Object containing string keys and values
		 */
		putAll(
			values: object
		): void
		/**
		 * Adds a set of key/value pairs to the cache, with an expiration time (in seconds).
		 * 
		 * <p>Similar to repeated calls to "put", but more efficient as it only makes one call to the
		 * memcache server to set all values. The maximum length of a key is 250 characters. The maximum
		 * amount of data that can be stored per key is 100KB. The specified expiration time is only a
		 * suggestion; cached data may be removed before this time if a lot of data is cached.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Puts a set of values into the cache with the keys &#39;foo&#39;, &#39;x&#39;, and &#39;key&#39;.
		 * var values = {
		 *   &#39;foo&#39;: &#39;bar&#39;,
		 *   &#39;x&#39;:&#39;y&#39;,
		 *   &#39;key&#39;: &#39;value&#39;
		 * };
		 * cache.putAll(values, 20);
		 * </code></pre>
		 * 
		 * @param values - A JavaScript Object containing string keys and values
		 * @param expirationInSeconds - The maximum time the value remains in the cache, in seconds The
		 *     minimum allowed expiration is 1 second, and the maximum allowed expiration is 21600 seconds
		 *     (6 hours). The default expiration is 600 seconds (10 minutes).
		 */
		putAll(
			values: object,
			expirationInSeconds: number
		): void

		/**
		 * Removes an entry from the cache using the given key.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Removes any cache entries for &#39;foo&#39;
		 * cache.remove(&#39;foo&#39;);
		 * </code></pre>
		 * 
		 * @param key - the key to remove from the cache
		 */
		remove(
			key: string
		): void
		/**
		 * Removes a set of entries from the cache.
		 * 
		 * <pre class="prettyprint">
		 * // Removes entries from the cache with keys 'foo' and 'x'
		 * cache.removeAll(['foo', 'x']);
		 * </pre>
		 * 
		 * @param keys - the array of keys to remove
		 */
		removeAll(
			keys: string[]
		): void

	}

}
