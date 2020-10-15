declare class Blob {
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
	 * Gets the name of this blob.
	 * 
	 * @returns The name of this data, if known, or <code>null</code>.
	 */
	getName(): string
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

