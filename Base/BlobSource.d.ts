declare class BlobSource {
	private constructor();

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

}

