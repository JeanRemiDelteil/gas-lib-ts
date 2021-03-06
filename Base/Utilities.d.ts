/** Module: Utilities */

type Utilities = typeof Utilities;
declare namespace Utilities {

	/**
	 * Decodes a base-64 encoded string into a UTF-8 byte array.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This is the base64 encoded form of &quot;Google グループ&quot;
	 * var base64data = &quot;R29vZ2xlIOOCsOODq+ODvOODlw==&quot;;
	 * 
	 * // This logs:
	 * //     [71, 111, 111, 103, 108, 101, 32, -29, -126, -80,
	 * //      -29, -125, -85, -29, -125, -68, -29, -125, -105]
	 * var decoded = Utilities.base64Decode(base64data);
	 * Logger.log(decoded);
	 * 
	 * // If we want a String instead of a byte array:
	 * // This logs the original &quot;Google グループ&quot;
	 * Logger.log(Utilities.newBlob(decoded).getDataAsString());
	 * </code></pre>
	 * 
	 * @param encoded - an array of bytes of data to decode
	 * 
	 * @returns the raw data represented by the base-64 encoded argument as a byte array
	 */
	function base64Decode(
		encoded: string
	): number[]
	/**
	 * Decodes a base-64 encoded string into a byte array in a specific character set.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This is the base64 encoded form of &quot;Google グループ&quot;
	 * var base64data = &quot;R29vZ2xlIOOCsOODq+ODvOODlw==&quot;;
	 * 
	 * var decoded = Utilities.base64Decode(base64data, Utilities.Charset.UTF_8);
	 * 
	 * // This logs:
	 * //     [71, 111, 111, 103, 108, 101, 32, -29, -126, -80,
	 * //      -29, -125, -85, -29, -125, -68, -29, -125, -105]
	 * Logger.log(decoded);
	 * 
	 * // If we want a String instead of a byte array:
	 * // This logs the original &quot;Google グループ&quot;
	 * Logger.log(Utilities.newBlob(decoded).getDataAsString());
	 * </code></pre>
	 * 
	 * @param encoded - the string of data to decode
	 * @param charset - a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/charset.html'>Charset</a></code> specifying the charset of the input
	 * 
	 * @returns the raw data represented by the base-64 encoded argument as a byte array
	 */
	function base64Decode(
		encoded: string,
		charset: Utilities.Charset
	): number[]

	/**
	 * Decodes a base-64 web-safe encoded string into a UTF-8 byte array.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This is the base64 web-safe encoded form of &quot;Google グループ&quot;
	 * var base64data = &quot;R29vZ2xlIOOCsOODq-ODvOODlw==&quot;;
	 * 
	 * var decoded = Utilities.base64DecodeWebSafe(base64data);
	 * 
	 * // This logs:
	 * //     [71, 111, 111, 103, 108, 101, 32, -29, -126, -80,
	 * //      -29, -125, -85, -29, -125, -68, -29, -125, -105]
	 * Logger.log(decoded);
	 * 
	 * // If we want a String instead of a byte array:
	 * // This logs the original &quot;Google グループ&quot;
	 * Logger.log(Utilities.newBlob(decoded).getDataAsString());
	 * </code></pre>
	 * 
	 * @param encoded - an array of bytes of web-safe data to decode
	 * 
	 * @returns the raw data represented by the base-64 web-safe encoded argument as a byte array
	 */
	function base64DecodeWebSafe(
		encoded: string
	): number[]
	/**
	 * Decodes a base-64 web-safe encoded string into a byte array in a specific character set.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This is the base64 web-safe encoded form of &quot;Google グループ&quot;
	 * var base64data = &quot;R29vZ2xlIOOCsOODq-ODvOODlw==&quot;;
	 * 
	 * var decoded = Utilities.base64DecodeWebSafe(base64data, Utilities.Charset.UTF_8);
	 * 
	 * // This logs:
	 * //     [71, 111, 111, 103, 108, 101, 32, -29, -126, -80,
	 * //      -29, -125, -85, -29, -125, -68, -29, -125, -105]
	 * Logger.log(decoded);
	 * 
	 * // If we want a String instead of a byte array:
	 * // This logs the original &quot;Google グループ&quot;
	 * Logger.log(Utilities.newBlob(decoded).getDataAsString());
	 * </code></pre>
	 * 
	 * @param encoded - the string of web-safe data to decode
	 * @param charset - a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/charset.html'>Charset</a></code> specifying the charset of the input
	 * 
	 * @returns the raw data represented by the base-64 web-safe encoded argument as a byte array
	 */
	function base64DecodeWebSafe(
		encoded: string,
		charset: Utilities.Charset
	): number[]

	/**
	 * Generates a base-64 encoded string from the given byte array. Base 64 is a common encoding
	 * accepted by a variety of tools that cannot accept binary data. Base 64 is commonly used in
	 * internet protocols such as email, HTTP, or in XML documents.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Instantiates a blob here for clarity
	 * var blob = Utilities.newBlob(&quot;A string here&quot;);
	 * 
	 * // Writes &#39;QSBzdHJpbmcgaGVyZQ==&#39; to the log.
	 * var encoded = Utilities.base64Encode(blob.getBytes());
	 * Logger.log(encoded);
	 * </code></pre>
	 * 
	 * @param data - a byte[] of data to encode
	 * 
	 * @returns the base-64 encoded representation of the passed in data
	 */
	function base64Encode(
		data: number[]
	): string
	/**
	 * Generates a base-64 encoded string from the given string. Base 64 is a common encoding accepted
	 * by a variety of tools that cannot accept binary data. Base 64 is commonly used in internet
	 * protocols such as email, HTTP, or in XML documents.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Writes &#39;QSBzdHJpbmcgaGVyZQ==&#39; to the log.
	 * var encoded = Utilities.base64Encode(&quot;A string here&quot;);
	 * Logger.log(encoded);
	 * </code></pre>
	 * 
	 * @param data - the string to encode
	 * 
	 * @returns the base-64 encoded representation of the input string
	 */
	function base64Encode(
		data: string
	): string
	/**
	 * Generates a base-64 encoded string from the given string in a specific character set. A Charset
	 * is a way of encoding characters such that they can be encoded. These are typically done in a
	 * binary format, which can generally be incompatible with certain data transmission protocols. To
	 * make the data compatible, they are generally encoded into base 64, which is a common encoding
	 * accepted by a variety of tools that cannot accept binary data. Base 64 is commonly used in
	 * internet protocols such as email, HTTP, or in XML documents.
	 * 
	 * <pre class="prettyprint"><code>
	 * // &quot;Google Groups&quot; in Katakana (Japanese)
	 * var input = &quot;Google グループ&quot;;
	 * 
	 * // Writes &quot;R29vZ2xlIOOCsOODq+ODvOODlw==&quot; to the log
	 * var encoded = Utilities.base64Encode(input, Utilities.Charset.UTF_8);
	 * Logger.log(encoded);
	 * 
	 * </code></pre>
	 * 
	 * @param data - the string of data to encode
	 * @param charset - a <code>Charset</code> specifying the charset of the input
	 * 
	 * @returns the base-64 encoded representation of the input string with the given <code>Charset</code>
	 */
	function base64Encode(
		data: string,
		charset: Utilities.Charset
	): string

	/**
	 * Generates a base-64 web-safe encoded string from the given byte array. Base 64 is a common
	 * encoding accepted by a variety of tools that cannot accept binary data. Base 64 web-safe is
	 * commonly used in internet protocols such as email, HTTP, or in XML documents.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Instantiates a blob here for clarity
	 * var blob = Utilities.newBlob(&quot;A string here&quot;);
	 * 
	 * // Writes &#39;QSBzdHJpbmcgaGVyZQ==&#39; to the log.
	 * var encoded = Utilities.base64EncodeWebSafe(blob.getBytes());
	 * Logger.log(encoded);
	 * </code></pre>
	 * 
	 * @param data - an array of bytes of data to encode
	 * 
	 * @returns the base-64 web-safe encoded representation of the passed in data
	 */
	function base64EncodeWebSafe(
		data: number[]
	): string
	/**
	 * Generates a base-64 web-safe encoded string from the given string. Base 64 is a common encoding
	 * accepted by a variety of tools that cannot accept binary data. Base 64 web-safe is commonly
	 * used in internet protocols such as email, HTTP, or in XML documents.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Writes &#39;QSBzdHJpbmcgaGVyZQ==&#39; to the log.
	 * var encoded = Utilities.base64EncodeWebSafe(&quot;A string here&quot;);
	 * Logger.log(encoded);
	 * </code></pre>
	 * 
	 * @param data - the string to encode
	 * 
	 * @returns the base-64 web-safe encoded representation of the input string
	 */
	function base64EncodeWebSafe(
		data: string
	): string
	/**
	 * Generates a base-64 web-safe encoded string from the given string in a specific character set.
	 * A Charset is a way of encoding characters such that they can be encoded. These are typically
	 * done in a binary format, which can generally be incompatible with certain data transmission
	 * protocols. To make the data compatible, they are generally encoded into base 64, which is a
	 * common encoding accepted by a variety of tools that cannot accept binary data. Base 64 web-safe
	 * is commonly used in internet protocols such as email, HTTP, or in XML documents.
	 * 
	 * <pre class="prettyprint"><code>
	 * // &quot;Google Groups&quot; in Katakana (Japanese)
	 * var input = &quot;Google グループ&quot;;
	 * 
	 * // Writes &quot;R29vZ2xlIOOCsOODq-ODvOODlw==&quot; to the log
	 * var encoded = Utilities.base64EncodeWebSafe(input, Utilities.Charset.UTF_8);
	 * Logger.log(encoded);
	 * 
	 * </code></pre>
	 * 
	 * @param data - the string of data to encode
	 * @param charset - a <code>Charset</code> specifying the charset of the input
	 * 
	 * @returns the base-64 web-safe encoded representation of the input string with the given <code>Charset</code>
	 */
	function base64EncodeWebSafe(
		data: string,
		charset: Utilities.Charset
	): string

	/**
	 * Compute a digest using the specified algorithm on the specified <code>Byte[]</code> value.
	 * 
	 * <pre class="prettyprint"><code>
	 * var input = Utilities.base64Decode(&quot;aW5wdXQgdG8gaGFzaA0K&quot;) // == base64encode(&quot;input to hash&quot;)
	 * var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, input);
	 * Logger.log(digest);
	 * </code></pre>
	 * 
	 * @param algorithm - a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/digest-algorithm.html'>DigestAlgorithm</a></code> to use
	 * @param value - an input string value to compute a digest for
	 * 
	 * @returns a byte[] representing the output digest
	 */
	function computeDigest(
		algorithm: DigestAlgorithm,
		value: number[]
	): number[]
	/**
	 * Compute a digest using the specified algorithm on the specified <code>String</code> value.
	 * 
	 * <pre class="prettyprint"><code>
	 * var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, &quot;input to hash&quot;);
	 * Logger.log(digest);
	 * </code></pre>
	 * 
	 * @param algorithm - a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/digest-algorithm.html'>DigestAlgorithm</a></code> to use
	 * @param value - an input string value to compute a digest for
	 * 
	 * @returns a byte[] representing the output digest
	 */
	function computeDigest(
		algorithm: DigestAlgorithm,
		value: string
	): number[]
	/**
	 * Compute a digest using the specified algorithm on the specified <code>String</code> value with the
	 * given character set.
	 * 
	 * <pre class="prettyprint"><code>
	 * var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5,
	 *                                      &quot;input to hash&quot;,
	 *                                      Utilities.Charset.US_ASCII);
	 * Logger.log(digest);
	 * </code></pre>
	 * 
	 * @param algorithm - a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/digest-algorithm.html'>DigestAlgorithm</a></code> to use
	 * @param value - an input string value to compute a digest for
	 * @param charset - a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/charset.html'>Charset</a></code> representing the input character set
	 * 
	 * @returns a byte[] representing the output digest
	 */
	function computeDigest(
		algorithm: DigestAlgorithm,
		value: string,
		charset: Utilities.Charset
	): number[]

	/**
	 * Signs the provided value using HMAC-SHA256 with the given key.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This writes an array of bytes to the log.
	 * var input = Utilities.base64Decode(&quot;aW5wdXQgdG8gaGFzaA0K&quot;) // == base64encode(&quot;input to hash&quot;)
	 * var key = Utilities.base64Decode(&quot;a2V5&quot;); // == base64encode(&quot;key&quot;)
	 * var signature = Utilities.computeHmacSha256Signature(input, key);
	 * Logger.log(signature);
	 * </code></pre>
	 * 
	 * @param value - the input value to generate a hash for
	 * @param key - a key to use to generate the hash with
	 * 
	 * @returns a byte[] representing the output signature
	 */
	function computeHmacSha256Signature(
		value: number[],
		key: number[]
	): number[]
	/**
	 * Signs the provided value using HMAC-SHA256 with the given key.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This writes an array of bytes to the log.
	 * var signature = Utilities.computeHmacSha256Signature(&quot;this is my input&quot;,
	 *                                                       &quot;my key - use a stronger one&quot;);
	 * Logger.log(signature);
	 * </code></pre>
	 * 
	 * @param value - the input value to generate a hash for
	 * @param key - a key to use to generate the hash with
	 * 
	 * @returns a byte[] representing the output signature
	 */
	function computeHmacSha256Signature(
		value: string,
		key: string
	): number[]
	/**
	 * Signs the provided value using HMAC-SHA256 with the given key and character set.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This writes an array of bytes to the log.
	 * var signature = Utilities.computeHmacSha256Signature(&quot;this is my input&quot;,
	 *                                                      &quot;my key - use a stronger one&quot;,
	 *                                                      Utilities.Charset.US_ASCII);
	 * Logger.log(signature);
	 * </code></pre>
	 * 
	 * @param value - the input value to generate a hash for
	 * @param key - a key to use to generate the hash with
	 * @param charset - a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/charset.html'>Charset</a></code> representing the input character set
	 * 
	 * @returns a byte[] representing the output signature
	 */
	function computeHmacSha256Signature(
		value: string,
		key: string,
		charset: Utilities.Charset
	): number[]

	/**
	 * Compute a message authentication code using the specified algorithm on the specified key and
	 * value.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This writes an array of bytes to the log.
	 * var input = Utilities.base64Decode(&quot;aW5wdXQgdG8gaGFzaA0K&quot;) // == base64encode(&quot;input to hash&quot;)
	 * var key = Utilities.base64Decode(&quot;a2V5&quot;); // == base64encode(&quot;key&quot;)
	 * var signature = Utilities.computeHmacSignature(Utilities.MacAlgorithm.HMAC_MD5, input, key);
	 * Logger.log(signature);
	 * </code></pre>
	 * 
	 * @param algorithm - a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/mac-algorithm.html'>MacAlgorithm</a></code> algorithm to use to hash the input value
	 * @param value - the input value to generate a hash for
	 * @param key - a key to use to generate the hash with
	 * 
	 * @returns a byte[] representing the output signature
	 */
	function computeHmacSignature(
		algorithm: Utilities.MacAlgorithm,
		value: number[],
		key: number[]
	): number[]
	/**
	 * Compute a message authentication code using the specified algorithm on the specified key and
	 * value.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This writes an array of bytes to the log.
	 * var signature = Utilities.computeHmacSignature(Utilities.MacAlgorithm.HMAC_MD5,
	 *                                                &quot;input to hash&quot;,
	 *                                                &quot;key&quot;);
	 * Logger.log(signature);
	 * </code></pre>
	 * 
	 * @param algorithm - a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/mac-algorithm.html'>MacAlgorithm</a></code> algorithm to use to hash the input value
	 * @param value - the input value to generate a hash for
	 * @param key - a key to use to generate the hash with
	 * 
	 * @returns a byte[] representing the output signature
	 */
	function computeHmacSignature(
		algorithm: Utilities.MacAlgorithm,
		value: string,
		key: string
	): number[]
	/**
	 * Compute a message authentication code using the specified algorithm on the specified key and
	 * value.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This writes an array of bytes to the log.
	 * var signature = Utilities.computeHmacSignature(Utilities.MacAlgorithm.HMAC_MD5,
	 *                                                &quot;input to hash&quot;,
	 *                                                &quot;key&quot;,
	 *                                                Utilities.Charset.US_ASCII);
	 * Logger.log(signature);
	 * </code></pre>
	 * 
	 * @param algorithm - a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/mac-algorithm.html'>MacAlgorithm</a></code> algorithm to use to hash the input value
	 * @param value - the input value to generate a hash for
	 * @param key - a key to use to generate the hash with
	 * @param charset - a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/charset.html'>Charset</a></code> representing the input character set
	 * 
	 * @returns a byte[] representing the output signature
	 */
	function computeHmacSignature(
		algorithm: Utilities.MacAlgorithm,
		value: string,
		key: string,
		charset: Utilities.Charset
	): number[]

	/**
	 * Signs the provided value using RSA-SHA1 with the given key.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This writes an array of bytes to the log.
	 * var signature = Utilities.computeRsaSha1Signature(&quot;this is my input&quot;,
	 *     &quot;-----BEGIN PRIVATE KEY-----\nprivatekeyhere\n-----END PRIVATE KEY-----\n&quot;);
	 * Logger.log(signature);
	 * </code></pre>
	 * 
	 * @param value - The input value to generate a hash for.
	 * @param key - A PEM formatted key to use to generate the signature.
	 * 
	 * @returns A byte[] representing the output signature.
	 */
	function computeRsaSha1Signature(
		value: string,
		key: string
	): number[]
	/**
	 * Signs the provided value using RSA-SHA1 with the given key and charset.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This writes an array of bytes to the log.
	 * var signature = Utilities.computeRsaSha1Signature(&quot;this is my input&quot;,
	 *     &quot;-----BEGIN PRIVATE KEY-----\nprivatekeyhere\n-----END PRIVATE KEY-----\n&quot;
	 *     Utilities.Charset.US_ASCII);
	 * Logger.log(signature);
	 * </code></pre>
	 * 
	 * @param value - The input value to generate a hash for.
	 * @param key - A PEM formatted key to use to generate the signature.
	 * @param charset - A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/charset.html'>Charset</a></code> representing the input character set.
	 * 
	 * @returns A byte[] representing the output signature.
	 */
	function computeRsaSha1Signature(
		value: string,
		key: string,
		charset: Utilities.Charset
	): number[]

	/**
	 * Signs the provided value using RSA-SHA256 with the given key.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This writes an array of bytes to the log.
	 * var signature = Utilities.computeRsaSha256Signature(&quot;this is my input&quot;,
	 *     &quot;-----BEGIN PRIVATE KEY-----\nprivatekeyhere\n-----END PRIVATE KEY-----\n&quot;);
	 * Logger.log(signature);
	 * </code></pre>
	 * 
	 * @param value - the input value to generate a hash for
	 * @param key - a PEM formatted key to use to generate the signature
	 * 
	 * @returns a byte[] representing the output signature
	 */
	function computeRsaSha256Signature(
		value: string,
		key: string
	): number[]
	/**
	 * Signs the provided value using RSA-SHA256 with the given key.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This writes an array of bytes to the log.
	 * var signature = Utilities.computeRsaSha256Signature(&quot;this is my input&quot;,
	 *     &quot;-----BEGIN PRIVATE KEY-----\nprivatekeyhere\n-----END PRIVATE KEY-----\n&quot;);
	 * Logger.log(signature);
	 * </code></pre>
	 * 
	 * @param value - the input value to generate a hash for
	 * @param key - a PEM formatted key to use to generate the signature
	 * @param charset - a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/charset.html'>Charset</a></code> representing the input character set
	 * 
	 * @returns a byte[] representing the output signature
	 */
	function computeRsaSha256Signature(
		value: string,
		key: string,
		charset: Utilities.Charset
	): number[]

	/**
	 * Signs the provided value using the specified RSA algorithm with the given key.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This writes an array of bytes to the log.
	 * var signature = Utilities.computeRsaSignature(Utilities.RsaAlgorithm.RSA_SHA_256,
	 *     &quot;this is my input&quot;,
	 *     &quot;-----BEGIN PRIVATE KEY-----\nprivatekeyhere\n-----END PRIVATE KEY-----\n&quot;);
	 * Logger.log(signature);
	 * </code></pre>
	 * 
	 * @param algorithm - A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/rsa-algorithm.html'>RsaAlgorithm</a></code> algorithm to use to hash the input value.
	 * @param value - The input value to generate a hash for.
	 * @param key - A PEM formatted key to use to generate the signature.
	 * 
	 * @returns A byte[] representing the output signature.
	 */
	function computeRsaSignature(
		algorithm: Utilities.RsaAlgorithm,
		value: string,
		key: string
	): number[]
	/**
	 * Signs the provided value using the specified RSA algorithm with the given key and charset.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This writes an array of bytes to the log.
	 * var signature = Utilities.computeRsaSignature(Utilities.RsaAlgorithm.RSA_SHA_256,
	 *     &quot;this is my input&quot;,
	 *     &quot;-----BEGIN PRIVATE KEY-----\nprivatekeyhere\n-----END PRIVATE KEY-----\n&quot;,
	 *     Utilities.Charset.US_ASCII);
	 * Logger.log(signature);
	 * </code></pre>
	 * 
	 * @param algorithm - A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/rsa-algorithm.html'>RsaAlgorithm</a></code> algorithm to use to hash the input value.
	 * @param value - The input value to generate a hash for.
	 * @param key - A PEM formatted key to use to generate the signature.
	 * @param charset - A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/charset.html'>Charset</a></code> representing the input character set.
	 * 
	 * @returns A byte[] representing the output signature.
	 */
	function computeRsaSignature(
		algorithm: Utilities.RsaAlgorithm,
		value: string,
		key: string,
		charset: Utilities.Charset
	): number[]

	/**
	 * Formats date according to specification described in Java SE SimpleDateFormat class. Please
	 * visit the specification at <a
	 * href="http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html">
	 * http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html</a>
	 * 
	 * <pre class="prettyprint"><code>
	 * // This formats the date as Greenwich Mean Time in the format
	 * // year-month-dateThour-minute-second.
	 * var formattedDate = Utilities.formatDate(new Date(), &quot;GMT&quot;, &quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss&#39;Z&#39;&quot;);
	 * Logger.log(formattedDate);
	 * </code></pre>
	 * 
	 * @param date - a <code>Date</code> to format as a String
	 * @param timeZone - the output timezone of the result
	 * @param format - a format per the <code>SimpleDateFormat</code> specification
	 * 
	 * @returns the input date as a formatted string
	 */
	function formatDate(
		date: Date,
		timeZone: string,
		format: string
	): string
	/**
	 * Performs <code>sprintf</code>-like string formatting using '%'-style format strings.
	 * 
	 * <pre class="prettyprint"><code>
	 * // &quot; 123.456000&quot;
	 * Utilities.formatString(&#39;%11.6f&#39;, 123.456);
	 * 
	 * // &quot;   abc&quot;
	 * Utilities.formatString(&#39;%6s&#39;, &#39;abc&#39;);
	 * </code></pre>
	 * 
	 * @param template - The format string that controls what gets returned.
	 * @param args - Objects to use to fill in the '%' placeholders in the template.
	 * 
	 * @returns the formatted string.
	 */
	function formatString(
		template: string,
		...args: Array<object>
	): string
	/**
	 * Get a UUID as a string (equivalent to using the <a
	 * href="https://docs.oracle.com/javase/7/docs/api/java/util/UUID.html"><code>java.util.UUID.randomUUID()</code></a> method). This identifier is not guaranteed to be unique across
	 * all time and space. As such, do not use in situations where guaranteed uniqueness is required.
	 * 
	 * <pre class="prettyprint"><code>
	 * //This assigns a UUID as a temporary ID for a data object you are creating in your script.
	 * var myDataObject = {
	 *    tempId: Utilities.getUuid();
	 * };
	 * </code></pre>
	 * 
	 * @returns a string representation of the UUID
	 */
	function getUuid(): string
	/**
	 * <code>gzip</code>-compresses the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/../base/blob.html'>Blob</a></code> data and returns it in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/../base/blob.html'>Blob</a></code> object.
	 * 
	 * <pre class="prettyprint"><code>
	 * var textBlob = Utilities.newBlob(&quot;Some text to compress using gzip compression&quot;);
	 * 
	 * // Create the compressed blob.
	 * var gzipBlob = Utilities.gzip(textBlob);
	 * </code></pre>
	 * 
	 * @param blob - a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/../base/blob.html'>Blob</a></code> object to compress using <code>gzip</code>.
	 * 
	 * @returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/../base/blob.html'>Blob</a></code> containing the compressed data.
	 */
	function gzip(
		blob: BlobSource
	): Blob
	/**
	 * <code>gzip</code>-compresses the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/../base/blob.html'>Blob</a></code> data and returns it in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/../base/blob.html'>Blob</a></code> object. This version of the method allows a filename to be specified.
	 * 
	 * <pre class="prettyprint"><code>
	 * var textBlob = Utilities.newBlob(&quot;Some text to compress using gzip compression&quot;);
	 * 
	 * // Create the compressed blob.
	 * var gzipBlob = Utilities.gzip(textBlob, &quot;text.gz&quot;);
	 * </code></pre>
	 * 
	 * @param blob - a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/../base/blob.html'>Blob</a></code> object to compress using <code>gzip</code>.
	 * @param name - the name of the <code>gzip</code> file to be created
	 * 
	 * @returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/../base/blob.html'>Blob</a></code> containing the compressed data.
	 */
	function gzip(
		blob: BlobSource,
		name: string
	): Blob

	/**
	 * Return an object corresponding to the JSON string passed in.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Returns the object { name: &quot;John Smith&quot;, company: &quot;Virginia Company&quot;}
	 * var obj = Utilities.jsonParse(&#39;{&quot;name&quot;:&quot;John Smith&quot;,&quot;company&quot;:&quot;Virginia Company&quot;}&#39;);
	 * </code></pre>
	 * 
	 * @param jsonString - a String representation of a JavaScript object to deserialize
	 * 
	 * @returns a JavaScript object representation of the input
	 */
	function jsonParse(
		jsonString: string
	): object
	/**
	 * Return a JSON string of the object passed in.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Logs: {&quot;name&quot;:&quot;John Smith&quot;,&quot;company&quot;:&quot;Virginia Company&quot;}
	 * var person = { name: &quot;John Smith&quot;, company: &quot;Virginia Company&quot; };
	 * var json = Utilities.jsonStringify(person);
	 * Logger.log(json);
	 * </code></pre>
	 * 
	 * @param obj - the JavaScript object to serialize to JSON
	 * 
	 * @returns a JSON serialized JavaScript object
	 */
	function jsonStringify(
		obj: object
	): string
	/**
	 * Create a new Blob object from a byte array. Blobs are used in many Apps Script APIs that take
	 * binary data as input.
	 * 
	 * @param data - the bytes for the blob
	 * 
	 * @returns the newly created Blob
	 */
	function newBlob(
		data: number[]
	): Blob
	/**
	 * Create a new Blob object from a byte array and content type. Blobs are used in many Apps Script
	 * APIs that take binary data as input.
	 * 
	 * @param data - the bytes for the blob
	 * @param contentType - the content type of the blob - can be null
	 * 
	 * @returns the newly created Blob
	 */
	function newBlob(
		data: number[],
		contentType: string
	): Blob
	/**
	 * Create a new Blob object from a byte array, content type, and name. Blobs are used in many Apps
	 * Script APIs that take binary data as input.
	 * 
	 * @param data - the bytes for the blob
	 * @param contentType - - the content type of the blob - can be null
	 * @param name - the name of the blob - can be null
	 * 
	 * @returns the newly created Blob
	 */
	function newBlob(
		data: number[],
		contentType: string,
		name: string
	): Blob
	/**
	 * Create a new Blob object from a string. Blobs are used in many Apps Script APIs that take
	 * binary data as input.
	 * 
	 * @param data - the string for the blob, assumed UTF-8
	 * 
	 * @returns the newly created Blob
	 */
	function newBlob(
		data: string
	): Blob
	/**
	 * Create a new Blob object from a string and content type. Blobs are used in many Apps Script
	 * APIs that take binary data as input.
	 * 
	 * @param data - the string for the blob, assumed UTF-8
	 * @param contentType - the content type of the blob - can be null
	 * 
	 * @returns the newly created Blob
	 */
	function newBlob(
		data: string,
		contentType: string
	): Blob
	/**
	 * Create a new Blob object from a string, content type, and name. Blobs are used in many Apps
	 * Script APIs that take binary data as input.
	 * 
	 * @param data - the string for the blob, assumed UTF-8
	 * @param contentType - the content type of the blob - can be null
	 * @param name - the name of the blob - can be null
	 * 
	 * @returns the newly created Blob
	 */
	function newBlob(
		data: string,
		contentType: string,
		name: string
	): Blob

	/**
	 * Returns a tabular 2D array representation of a CSV string.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This creates a two-dimensional array of the format [[a, b, c], [d, e, f]]
	 * var csvString = &quot;a,b,c\nd,e,f&quot;;
	 * var data = Utilities.parseCsv(csvString);
	 * </code></pre>
	 * 
	 * @param csv - a string containing a single or multiline data in comma-separated value (CSV) format
	 * 
	 * @returns a two-dimensional array containing the values in the CSV string
	 */
	function parseCsv(
		csv: string
	): string[][]
	/**
	 * Returns a tabular 2D array representation of a CSV string using a custom delimiter.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This creates a two-dimensional array of the format [[a, b, c], [d, e, f]]
	 * var csvString = &quot;a\tb\tc\nd\te\tf&quot;;
	 * var data = Utilities.parseCsv(csvString, &#39;\t&#39;);
	 * </code></pre>
	 * 
	 * @param csv - a string containing a single or multiline data in comma-separated value (CSV) format
	 * @param delimiter - between values
	 * 
	 * @returns a two-dimensional array containing the values in the CSV string
	 */
	function parseCsv(
		csv: string,
		delimiter: string
	): string[][]

	/**
	 * Sleeps for specified number of milliseconds. Immediately puts the script to sleep for the
	 * specified number of milliseconds. The maximum allowed value is 300000 (or 5 minutes).
	 * 
	 * @param milliseconds - The number of milliseconds to sleep.
	 */
	function sleep(
		milliseconds: number
	): void
	/**
	 * Uncompresses a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/../base/blob.html'>Blob</a></code> object and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/../base/blob.html'>Blob</a></code> containing the uncompressed
	 * data.
	 * 
	 * <pre class="prettyprint"><code>
	 * var textBlob = Utilities.newBlob(&quot;Some text to compress using gzip compression&quot;);
	 * 
	 * // Create the compressed blob.
	 * var gzipBlob = Utilities.gzip(textBlob, &quot;text.gz&quot;);
	 * 
	 * // Uncompress the data.
	 * var uncompressedBlob = Utilities.ungzip(gzipBlob);
	 * </code></pre>
	 * 
	 * @param blob - the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/../base/blob.html'>Blob</a></code> of compressed data.
	 * 
	 * @returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/utilities/../base/blob.html'>Blob</a></code> representing the decompressed data.
	 */
	function ungzip(
		blob: BlobSource
	): Blob
	/**
	 * Takes a Blob representing a zip file and returns its component files.
	 * 
	 * <pre class="prettyprint"><code>
	 * var googleFavIconUrl = &quot;https://www.google.com/favicon.ico&quot;;
	 * var googleLogoUrl = &quot;https://www.google.com/images/srpr/logo3w.png&quot;;
	 * 
	 * // Fetch the Google favicon.ico file and get the Blob data
	 * var faviconBlob = UrlFetchApp.fetch(googleFavIconUrl).getBlob();
	 * var logoBlob = UrlFetchApp.fetch(googleLogoUrl).getBlob();
	 * 
	 * // zip now references a blob containing an archive of both faviconBlob and logoBlob
	 * var zip = Utilities.zip([faviconBlob, logoBlob], &quot;google_images.zip&quot;);
	 * 
	 * // This now unzips the blobs
	 * var files = Utilities.unzip(zip);
	 * </code></pre>
	 * 
	 * @param blob - the zip file blob.
	 * 
	 * @returns a Blob[] representing the component blobs, each named with the full path inside the zip
	 */
	function unzip(
		blob: BlobSource
	): Blob[]
	/**
	 * Creates a new Blob object that is a zip file containing the data from the Blobs passed in.
	 * 
	 * <pre class="prettyprint"><code>
	 * var googleFavIconUrl = &quot;https://www.google.com/favicon.ico&quot;;
	 * var googleLogoUrl = &quot;https://www.google.com/images/srpr/logo3w.png&quot;;
	 * 
	 * // Fetch the Google favicon.ico file and get the Blob data
	 * var faviconBlob = UrlFetchApp.fetch(googleFavIconUrl).getBlob();
	 * var logoBlob = UrlFetchApp.fetch(googleLogoUrl).getBlob();
	 * 
	 * // zip now references a blob containing an archive of both faviconBlob and logoBlob
	 * var zip = Utilities.zip([faviconBlob, logoBlob]);
	 * </code></pre>
	 * 
	 * @param blobs - a array of blobs to zip up
	 * 
	 * @returns a new blob containing the inputs as an archive
	 */
	function zip(
		blobs: BlobSource[]
	): Blob
	/**
	 * Creates a new Blob object that is a zip file containing the data from the Blobs passed in. This
	 * version of the method allows a filename to be specified.
	 * 
	 * <pre class="prettyprint"><code>
	 * var googleFavIconUrl = &quot;https://www.google.com/favicon.ico&quot;;
	 * var googleLogoUrl = &quot;https://www.google.com/images/srpr/logo3w.png&quot;;
	 * 
	 * // Fetch the Google favicon.ico file and get the Blob data
	 * var faviconBlob = UrlFetchApp.fetch(googleFavIconUrl).getBlob();
	 * var logoBlob = UrlFetchApp.fetch(googleLogoUrl).getBlob();
	 * 
	 * // zip now references a blob containing an archive of both faviconBlob and logoBlob
	 * var zip = Utilities.zip([faviconBlob, logoBlob], &quot;google_images.zip&quot;);
	 * </code></pre>
	 * 
	 * @param blobs - a array of blobs to zip up
	 * @param name - the name of the zip file to be created
	 * 
	 * @returns a new blob containing the inputs as an archive
	 */
	function zip(
		blobs: BlobSource[],
		name: string
	): Blob


	enum Charset {
		US_ASCII = "US_ASCII",
		UTF_8 = "UTF_8",
	}

	enum MacAlgorithm {
		HMAC_MD5 = "HMAC_MD5",
		HMAC_SHA_1 = "HMAC_SHA_1",
		HMAC_SHA_256 = "HMAC_SHA_256",
		HMAC_SHA_384 = "HMAC_SHA_384",
		HMAC_SHA_512 = "HMAC_SHA_512",
	}

	enum RsaAlgorithm {
		RSA_SHA_1 = "RSA_SHA_1",
		RSA_SHA_256 = "RSA_SHA_256",
	}

}
