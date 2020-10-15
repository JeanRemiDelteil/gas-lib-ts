/** Module: DriveApp */

type DriveApp = typeof DriveApp;
declare namespace DriveApp {

	/**
	 * Adds the given file to the root of the user's Drive. This method does not move the file out of its
	 * existing parent folder; a file can have more than one parent simultaneously.
	 * 
	 * @param child - The child file to add.
	 * 
	 * @returns The new parent of the file added as a child.
	 */
	function addFile(
		child: DriveApp.File
	): DriveApp.Folder
	/**
	 * Adds the given folder to the root of the user's Drive. This method does not move the folder out of
	 * its existing parent folder; a folder can have more than one parent simultaneously.
	 * 
	 * @param child - The child folder to add.
	 * 
	 * @returns The new parent of the folder added as a child.
	 */
	function addFolder(
		child: DriveApp.Folder
	): DriveApp.Folder
	/**
	 * Resumes a file iteration using a continuation token from a previous iterator. This method is
	 * useful if processing an iterator in one execution would exceed the maximum execution time.
	 * Continuation tokens are generally valid for one week.
	 * 
	 * @param continuationToken - a continuation token from a previous file iterator
	 * 
	 * @returns a collection of files that remained in a previous iterator when the continuation token
	 *     was generated
	 */
	function continueFileIterator(
		continuationToken: string
	): DriveApp.FileIterator
	/**
	 * Resumes a folder iteration using a continuation token from a previous iterator. This method is
	 * useful if processing an iterator in one execution would exceed the maximum execution time.
	 * Continuation tokens are generally valid for one week.
	 * 
	 * @param continuationToken - a continuation token from a previous folder iterator
	 * 
	 * @returns a collection of folders that remained in a previous iterator when the continuation
	 *     token was generated
	 */
	function continueFolderIterator(
		continuationToken: string
	): DriveApp.FolderIterator
	/**
	 * Creates a file in the root of the user's Drive from a given <code>Blob</code> of arbitrary data.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Create an image file in Google Drive using the Maps service.
	 * var blob = Maps.newStaticMap().setCenter(&#39;76 9th Avenue, New York NY&#39;).getBlob();
	 * DriveApp.createFile(blob);
	 * </code></pre>
	 * 
	 * @param blob - The data for the new file.
	 * 
	 * @returns The new file.
	 */
	function createFile(
		blob: BlobSource
	): DriveApp.File
	/**
	 * Creates a text file in the root of the user's Drive with the given name and contents. Throws an
	 * exception if <code>content</code> is larger than 50 MB.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Create a text file with the content &quot;Hello, world!&quot;
	 * DriveApp.createFile(&#39;New Text File&#39;, &#39;Hello, world!&#39;);
	 * </code></pre>
	 * 
	 * @param name - The name of the new file.
	 * @param content - The content for the new file.
	 * 
	 * @returns The new file.
	 */
	function createFile(
		name: string,
		content: string
	): DriveApp.File
	/**
	 * Creates a file in the root of the user's Drive with the given name, contents, and MIME type. Throws
	 * an exception if <code>content</code> is larger than 10MB.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Create an HTML file with the content &quot;Hello, world!&quot;
	 * DriveApp.createFile(&#39;New HTML File&#39;, &#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;, MimeType.HTML);
	 * </code></pre>
	 * 
	 * @param name - The name of the new file.
	 * @param content - The content for the new file.
	 * @param mimeType - The MIME type of the new file.
	 * 
	 * @returns The new file.
	 */
	function createFile(
		name: string,
		content: string,
		mimeType: string
	): DriveApp.File

	/**
	 * Creates a folder in the root of the user's Drive with the given name.
	 * 
	 * @param name - The name of the new folder.
	 * 
	 * @returns The new folder.
	 */
	function createFolder(
		name: string
	): DriveApp.Folder
	/**
	 * Creates a shortcut to the provided Drive item ID, and returns it.
	 * 
	 * @param targetId - The file ID of the target file or folder.
	 * 
	 * @returns The new shortcut.
	 */
	function createShortcut(
		targetId: string
	): DriveApp.File
	/**
	 * Enables or disables enforceSingleParent behavior for all calls affecting item parents.
	 * 
	 * <p>See the <a
	 * href="https://cloud.google.com/blog/products/g-suite/simplifying-google-drives-folder-structure-and-sharing-models"
	 * target="_blank"> Simplifying Google Drive’s folder structure and sharing models</a> blog for
	 * more details.
	 * 
	 * @param value - The new state of the enforceSingleParent flag.
	 */
	function enforceSingleParent(
		value: Boolean
	): void
	/**
	 * Gets the file with the given ID. Throws a scripting exception if the file does not exist or the
	 * user does not have permission to access it.
	 * 
	 * @param id - the ID of the file
	 * 
	 * @returns the file with the given ID
	 */
	function getFileById(
		id: string
	): DriveApp.File
	/**
	 * Gets a collection of all files in the user's Drive.
	 * 
	 * @returns A collection of all files in the user's Drive.
	 */
	function getFiles(): DriveApp.FileIterator
	/**
	 * Gets a collection of all files in the user's Drive that have the given name.
	 * 
	 * @param name - The name of the files to find.
	 * 
	 * @returns A collection of all files in the user's Drive that have the given name.
	 */
	function getFilesByName(
		name: string
	): DriveApp.FileIterator
	/**
	 * Gets a collection of all files in the user's Drive that have the given MIME type.
	 * 
	 * @param mimeType - The MIME type of the files to find.
	 * 
	 * @returns A collection of all files in the user's Drive that have the given MIME
	 *     type.
	 */
	function getFilesByType(
		mimeType: string
	): DriveApp.FileIterator
	/**
	 * Gets the folder with the given ID. Throws a scripting exception if the folder does not exist or
	 * the user does not have permission to access it.
	 * 
	 * @param id - the ID of the folder
	 * 
	 * @returns the folder with the given ID
	 */
	function getFolderById(
		id: string
	): DriveApp.Folder
	/**
	 * Gets a collection of all folders in the user's Drive.
	 * 
	 * @returns A collection of all folders in the user's Drive.
	 */
	function getFolders(): DriveApp.FolderIterator
	/**
	 * Gets a collection of all folders in the user's Drive that have the given name.
	 * 
	 * @param name - The name of the folders to find.
	 * 
	 * @returns A collection of all folders in the user's Drive that have the given name.
	 */
	function getFoldersByName(
		name: string
	): DriveApp.FolderIterator
	/**
	 * Gets the folder at the root of the user's Drive.
	 * 
	 * @returns the root folder of the user's Drive
	 */
	function getRootFolder(): DriveApp.Folder
	/**
	 * Gets the number of bytes the user is allowed to store in Drive.
	 * 
	 * @returns the number of bytes the user is allowed to store in Drive
	 */
	function getStorageLimit(): number
	/**
	 * Gets the number of bytes the user is currently storing in Drive.
	 * 
	 * @returns the number of bytes the user is currently storing in Drive
	 */
	function getStorageUsed(): number
	/**
	 * Gets a collection of all the files in the trash of the user's Drive.
	 * 
	 * @returns a collection of files in the trash
	 */
	function getTrashedFiles(): DriveApp.FileIterator
	/**
	 * Gets a collection of all the folders in the trash of the user's Drive.
	 * 
	 * @returns a collection of folders in the trash
	 */
	function getTrashedFolders(): DriveApp.FolderIterator
	/**
	 * Removes the given file from the root of the user's Drive. This method does not delete the file, but
	 * if a file is removed from all of its parents, it cannot be seen in Drive except by searching
	 * for it or using the "All items" view.
	 * 
	 * @param child - The child file to remove.
	 * 
	 * @returns The previous parent of the child.
	 */
	function removeFile(
		child: DriveApp.File
	): DriveApp.Folder
	/**
	 * Removes the given folder from the root of the user's Drive. This method does not delete the folder
	 * or its contents, but if a folder is removed from all of its parents, it cannot be seen in Drive
	 * except by searching for it or using the "All items" view.
	 * 
	 * @param child - The child folder to remove.
	 * 
	 * @returns The previous parent of the child.
	 */
	function removeFolder(
		child: DriveApp.Folder
	): DriveApp.Folder
	/**
	 * Gets a collection of all files in the user's Drive that match the given search
	 * criteria. The search criteria are detailed in the <a
	 * href="/drive/api/v2/ref-search-terms">Google Drive SDK documentation</a>. Note that the <code>params</code> argument is a query string that may contain string values, so take care to escape
	 * quotation marks correctly (for example <code>&quot;title contains &#39;Gulliver\\&#39;s Travels&#39;&quot;</code> or
	 * <code>&#39;title contains &quot;Gulliver\&#39;s Travels&quot;&#39;</code>).
	 * 
	 * <pre class="prettyprint"><code>
	 * // Log the name of every file in the user&#39;s Drive that modified after February 28,
	 * // 2013 whose name contains &quot;untitled&quot;.
	 * var files = DriveApp.searchFiles(
	 *     &#39;modifiedDate &gt; &quot;2013-02-28&quot; and title contains &quot;untitled&quot;&#39;);
	 * while (files.hasNext()) {
	 *   var file = files.next();
	 *   Logger.log(file.getName());
	 * }
	 * </code></pre>
	 * 
	 * @param params - The search criteria, as detailed in the <a
	 *     href="/drive/api/v2/ref-search-terms">Google Drive SDK documentation</a>.
	 * 
	 * @returns A collection of all files in the user's Drive that match the search
	 *     criteria.
	 */
	function searchFiles(
		params: string
	): DriveApp.FileIterator
	/**
	 * Gets a collection of all folders in the user's Drive that match the given search
	 * criteria. The search criteria are detailed in the <a
	 * href="/drive/api/v2/ref-search-terms">Google Drive SDK documentation</a>. Note that the <code>params</code> argument is a query string that may contain string values, so take care to escape
	 * quotation marks correctly (for example <code>&quot;title contains &#39;Gulliver\\&#39;s Travels&#39;&quot;</code> or
	 * <code>&#39;title contains &quot;Gulliver\&#39;s Travels&quot;&#39;</code>).
	 * 
	 * <pre class="prettyprint"><code>
	 * // Log the name of every folder in the user&#39;s Drive that you own and is starred.
	 * var folders = DriveApp.searchFolders(&#39;starred = true and &quot;me&quot; in owners&#39;);
	 * while (folders.hasNext()) {
	 *   var folder = folders.next();
	 *   Logger.log(folder.getName());
	 * }
	 * </code></pre>
	 * 
	 * @param params - The search criteria, as detailed in the <a
	 *     href="/drive/api/v2/ref-search-terms">Google Drive SDK documentation</a>.
	 * 
	 * @returns A collection of all folders in the user's Drive that match the search
	 *     criteria.
	 */
	function searchFolders(
		params: string
	): DriveApp.FolderIterator

	enum Access {
		/**
		 * Anyone on the Internet can find and access. No sign-in required.
		 * 
		 * <p>Domain administrators can prohibit this setting for users of a G Suite domain. If the
		 * setting is disabled, passing this value to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code>
		 * throws an exception.
		 */
		ANYONE = "ANYONE",
		/**
		 * Anyone who has the link can access. No sign-in required.
		 * 
		 * <p>Domain administrators can prohibit this setting for users of a G Suite domain. If the
		 * setting is disabled, passing this value to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code>
		 * throws an exception.
		 */
		ANYONE_WITH_LINK = "ANYONE_WITH_LINK",
		/**
		 * People in your domain can find and access. Sign-in required.
		 * 
		 * <p>This setting is available only for users of a G Suite domain. For other types of Google
		 * accounts, passing this value to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an
		 * exception.
		 */
		DOMAIN = "DOMAIN",
		/**
		 * People in your domain who have the link can access. Sign-in required.
		 * 
		 * <p>This setting is available only for users of a G Suite domain. For other types of Google
		 * accounts, passing this value to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an
		 * exception.
		 */
		DOMAIN_WITH_LINK = "DOMAIN_WITH_LINK",
		/**
		 * Only people explicitly granted permission can access. Sign-in required.
		 */
		PRIVATE = "PRIVATE",
	}

	class File {
		private constructor();

		/**
		 * Add the given user to the list of commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user was
		 * already on the list of viewers, this method promotes the user out of the list of viewers.
		 * 
		 * @param emailAddress - The email address of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
		 */
		addCommenter(
			emailAddress: string
		): DriveApp.File
		/**
		 * Add the given user to the list of commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user was
		 * already on the list of viewers, this method promotes the user out of the list of viewers.
		 * 
		 * @param user - A representation of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
		 */
		addCommenter(
			user: User
		): DriveApp.File

		/**
		 * Add the given array of users to the list of commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If any
		 * of the users were already on the list of viewers, this method promotes them out of the list of
		 * viewers.
		 * 
		 * @param emailAddresses - An array of email addresses of the users to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
		 */
		addCommenters(
			emailAddresses: string[]
		): DriveApp.File
		/**
		 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user was already
		 * on the list of viewers, this method promotes the user out of the list of viewers.
		 * 
		 * @param emailAddress - The email address of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
		 */
		addEditor(
			emailAddress: string
		): DriveApp.File
		/**
		 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user was already
		 * on the list of viewers, this method promotes the user out of the list of viewers.
		 * 
		 * @param user - A representation of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
		 */
		addEditor(
			user: User
		): DriveApp.File

		/**
		 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If any of the
		 * users were already on the list of viewers, this method promotes them out of the list of
		 * viewers.
		 * 
		 * @param emailAddresses - An array of email addresses of the users to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
		 */
		addEditors(
			emailAddresses: string[]
		): DriveApp.File
		/**
		 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user was already
		 * on the list of editors, this method has no effect.
		 * 
		 * @param emailAddress - The email address of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
		 */
		addViewer(
			emailAddress: string
		): DriveApp.File
		/**
		 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user was already
		 * on the list of editors, this method has no effect.
		 * 
		 * @param user - A representation of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
		 */
		addViewer(
			user: User
		): DriveApp.File

		/**
		 * Adds the given array of users to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If any of the
		 * users were already on the list of editors, this method has no effect for them.
		 * 
		 * @param emailAddresses - An array of email addresses of the users to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
		 */
		addViewers(
			emailAddresses: string[]
		): DriveApp.File
		/**
		 * Gets the permission granted to the given user.
		 * 
		 * @param email - the email address of the user whose permissions should be checked
		 * 
		 * @returns the permissions granted to the user
		 */
		getAccess(
			email: string
		): DriveApp.Permission
		/**
		 * Gets the permission granted to the given user.
		 * 
		 * @param user - a representation of the user whose permissions should be checked
		 * 
		 * @returns the permissions granted to the user
		 */
		getAccess(
			user: User
		): DriveApp.Permission

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
		 * Gets the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> was created.
		 * 
		 * @returns the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> was created
		 */
		getDateCreated(): Date
		/**
		 * Gets the description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
		 * 
		 * @returns the description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
		 */
		getDescription(): string
		/**
		 * Gets the URL that can be used to download the file. Only users with permission to open the file
		 * in Google Drive can access the URL. You can use this URL in a browser to download the file, but
		 * you can't use to fetch the file with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/../url-fetch/url-fetch-app.html'>UrlFetchApp</a></code>. If you want the contents of the
		 * file in the script, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#getBlob()'>getBlob()</a></code>.
		 * 
		 * @returns The URL that can be used to download the file.
		 */
		getDownloadUrl(): string
		/**
		 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user who executes the script
		 * does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, this method returns an empty array.
		 * 
		 * @returns An array of users with edit permission.
		 */
		getEditors(): DriveApp.User[]
		/**
		 * Gets the ID of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
		 * 
		 * @returns the ID of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
		 */
		getId(): string
		/**
		 * Gets the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> was last updated.
		 * 
		 * @returns the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> was last updated
		 */
		getLastUpdated(): Date
		/**
		 * Gets the MIME type of the file.
		 * 
		 * @returns The MIME type of the file.
		 */
		getMimeType(): string
		/**
		 * Gets the name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
		 * 
		 * @returns the name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
		 */
		getName(): string
		/**
		 * Gets the owner of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
		 * 
		 * @returns a <code>User</code> object representing the owner
		 */
		getOwner(): DriveApp.User
		/**
		 * Gets a collection of folders that are immediate parents of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
		 * 
		 * @returns a collection of folders that are immediate parents of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
		 */
		getParents(): DriveApp.FolderIterator
		/**
		 * Gets which class of users can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, besides any individual
		 * users who have been explicitly given access.
		 * 
		 * @returns which class of users can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
		 */
		getSharingAccess(): DriveApp.Access
		/**
		 * Gets the permission granted to those users who can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>,
		 * besides any individual users who have been explicitly given access.
		 * 
		 * @returns the permissions granted to users who can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
		 */
		getSharingPermission(): DriveApp.Permission
		/**
		 * Gets the number of bytes used to store the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> in Drive. Note that G
		 * Suite application files do not count toward Drive storage limits and thus return <code>0</code>
		 * bytes.
		 * 
		 * @returns the number of bytes used to store the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> in Drive
		 */
		getSize(): number
		/**
		 * If this is a Shortcut, returns the ID of the item it points to.
		 * 
		 * <p>Otherwise it returns <code>null</code>.
		 * 
		 * @returns The target item ID.
		 */
		getTargetId(): string
		/**
		 * If this is a Shortcut, returns the mime type of the item it points to.
		 * 
		 * <p>Otherwise it returns <code>null</code>.
		 * 
		 * @returns The target item mime type.
		 */
		getTargetMimeType(): string
		/**
		 * Gets a thumbnail image for the file, or <code>null</code> if no thumbnail exists.
		 * 
		 * @returns The thumbnail image for the file.
		 */
		getThumbnail(): Blob
		/**
		 * Gets the URL that can be used to open the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> in a Google App like
		 * Drive or Docs.
		 * 
		 * @returns the URL that can be used to view this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> in a Google App like
		 *     Drive or Docs
		 */
		getUrl(): string
		/**
		 * Gets the list of viewers and commenters for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. If the user who
		 * executes the script does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, this method
		 * returns an empty array.
		 * 
		 * @returns An array of users with view or comment permission.
		 */
		getViewers(): DriveApp.User[]
		/**
		 * Determines whether users with edit permissions to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> are allowed to
		 * share with other users or change the permissions.
		 * 
		 * @returns <code>true</code> if users with edit permissions are allowed to share with other users or
		 *     change the permissions; <code>false</code> if not
		 */
		isShareableByEditors(): Boolean
		/**
		 * Determines whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> has been starred in the user's Drive.
		 * 
		 * @returns <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is starred in the user's Drive; <code>false</code> if not
		 */
		isStarred(): Boolean
		/**
		 * Determines whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is in the trash of the user's Drive.
		 * 
		 * @returns <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is in the trash of the user's Drive;
		 *     <code>false</code> if not
		 */
		isTrashed(): Boolean
		/**
		 * Creates a copy of the file.
		 * 
		 * @returns The new copy.
		 */
		makeCopy(): DriveApp.File
		/**
		 * Creates a copy of the file in the destination directory.
		 * 
		 * @param destination - The directory to copy the file into.
		 * 
		 * @returns The new copy.
		 */
		makeCopy(
			destination: DriveApp.Folder
		): DriveApp.File
		/**
		 * Creates a copy of the file and names it with the name provided.
		 * 
		 * @param name - The filename that should be applied to the new copy.
		 * 
		 * @returns The new copy.
		 */
		makeCopy(
			name: string
		): DriveApp.File
		/**
		 * Creates a copy of the file in the destination directory and names it with the name provided.
		 * 
		 * @param name - The filename that should be applied to the new copy.
		 * @param destination - The directory to copy the file into.
		 * 
		 * @returns The new copy.
		 */
		makeCopy(
			name: string,
			destination: DriveApp.Folder
		): DriveApp.File

		/**
		 * Moves this item to the provided destination folder.
		 * 
		 * <p>The current user must be the owner of the file or have at least edit access to the item's
		 * current parent folder in order to move the item to the destination folder.
		 * 
		 * @param destination - The folder that becomes the new parent.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
		 */
		moveTo(
			destination: DriveApp.Folder
		): DriveApp.File
		/**
		 * Removes the given user from the list of commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. This method
		 * does not block users from access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users
		 * who have general access — for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's
		 * entire domain.
		 * 
		 * @param emailAddress - The email address of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
		 */
		removeCommenter(
			emailAddress: string
		): DriveApp.File
		/**
		 * Removes the given user from the list of commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. This method
		 * does not block users from access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users
		 * who have general access — for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's
		 * entire domain.
		 * 
		 * @param user - A representation of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
		 */
		removeCommenter(
			user: User
		): DriveApp.File

		/**
		 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. This method doesn't
		 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users who have
		 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's entire
		 * domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of viewers.
		 * 
		 * @param emailAddress - The email address of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
		 */
		removeEditor(
			emailAddress: string
		): DriveApp.File
		/**
		 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. This method doesn't
		 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users who have
		 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's entire
		 * domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of viewers.
		 * 
		 * @param user - A representation of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
		 */
		removeEditor(
			user: User
		): DriveApp.File

		/**
		 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. This
		 * method has no effect if the user is an editor, not a viewer or commenter. This method also
		 * doesn't block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users who
		 * have general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's
		 * entire domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of editors.
		 * 
		 * @param emailAddress - The email address of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> for chaining.
		 */
		removeViewer(
			emailAddress: string
		): DriveApp.File
		/**
		 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. This
		 * method has no effect if the user is an editor, not a viewer. This method also doesn't block
		 * users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users who have general
		 * access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's entire domain, or
		 * if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of editors.
		 * 
		 * @param user - A representation of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> for chaining.
		 */
		removeViewer(
			user: User
		): DriveApp.File

		/**
		 * Revokes the access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> granted to the given user. This method does
		 * not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users
		 * who have general access — for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's
		 * entire domain.
		 * 
		 * @param user - the email address of the user whose access should be revoked
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
		 */
		revokePermissions(
			user: string
		): DriveApp.File
		/**
		 * Revokes the access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> granted to the given user. This method does
		 * not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> if they belong to a class of users
		 * who have general access — for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is shared with the user's
		 * entire domain.
		 * 
		 * @param user - a representation of the user whose access should be revoked
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
		 */
		revokePermissions(
			user: User
		): DriveApp.File

		/**
		 * Overwrites the content of the file with a given replacement. Throws an exception if <code>content</code> is larger than 10MB.
		 * 
		 * <p><aside class="warning">Beware: this change is irreversible.</aside>
		 * 
		 * @param content - The new content for the file.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining.
		 */
		setContent(
			content: string
		): DriveApp.File
		/**
		 * Sets the description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
		 * 
		 * @param description - the new description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
		 */
		setDescription(
			description: string
		): DriveApp.File
		/**
		 * Sets the name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
		 * 
		 * @param name - the new name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
		 */
		setName(
			name: string
		): DriveApp.File
		/**
		 * Changes the owner of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. This method also gives the previous owner
		 * explicit edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
		 * 
		 * @param emailAddress - the email address of the user who should become the new owner
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
		 */
		setOwner(
			emailAddress: string
		): DriveApp.File
		/**
		 * Changes the owner of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. This method also gives the previous owner
		 * explicit edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>.
		 * 
		 * @param user - a representation of the user who should become the new owner
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
		 */
		setOwner(
			user: User
		): DriveApp.File

		/**
		 * Sets whether users with edit permissions to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> are allowed to share
		 * with other users or change the permissions. The default for a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is
		 * <code>true</code>.
		 * 
		 * @param shareable - <code>true</code> if users with edit permissions should be allowed to share with
		 *     other users or change the permissions; <code>false</code> if not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
		 */
		setShareableByEditors(
			shareable: Boolean
		): DriveApp.File
		/**
		 * Sets which class of users can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> and what permissions
		 * those users are granted, besides any individual users who have been explicitly given access.
		 * 
		 * <pre class="prettyprint">
		 * // Creates a folder that anyone on the Internet can read from and write to. (Domain
		 * // administrators can prohibit this setting for users of a G Suite domain.)
		 * var folder = DriveApp.createFolder('Shared Folder');
		 * folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
		 * </pre>
		 * 
		 * @param accessType - which class of users should be able to access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
		 * @param permissionType - the permissions that should be granted to users who can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
		 */
		setSharing(
			accessType: DriveApp.Access,
			permissionType: DriveApp.Permission
		): DriveApp.File
		/**
		 * Sets whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is starred in the user's Drive. The default for
		 * new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>s is <code>false</code>.
		 * 
		 * @param starred - <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> should be starred in the user's
		 *     Drive; <code>false</code> if not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
		 */
		setStarred(
			starred: Boolean
		): DriveApp.File
		/**
		 * Sets whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> is in the trash of the user's Drive. Only the
		 * owner may trash the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>. The default for new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>s is <code>false</code>.
		 * 
		 * @param trashed - <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code> should be moved to the trash of
		 *     the user's Drive; <code>false</code> if not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html'>File</a></code>, for chaining
		 */
		setTrashed(
			trashed: Boolean
		): DriveApp.File

	}

	class FileIterator {
		private constructor();

		/**
		 * Gets a token that can be used to resume this iteration at a later time. This method is useful
		 * if processing an iterator in one execution would exceed the maximum execution time.
		 * Continuation tokens are generally valid for one week.
		 * 
		 * @returns a continuation token that can be used to resume this iteration with the items that
		 *     remained in the iterator when the token was generated
		 */
		getContinuationToken(): string
		/**
		 * Determines whether calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file-iterator.html#next()'>next()</a></code> will return an item.
		 * 
		 * @returns <code>true</code> if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file-iterator.html#next()'>next()</a></code> will return an item; <code>false</code> if not
		 */
		hasNext(): Boolean
		/**
		 * Gets the next item in the collection of files or folders. Throws an exception if no items
		 * remain.
		 * 
		 * @returns the next item in the collection
		 */
		next(): DriveApp.File

	}

	class Folder {
		private constructor();

		/**
		 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If the user was already
		 * on the list of viewers, this method promotes the user out of the list of viewers.
		 * 
		 * @param emailAddress - The email address of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining.
		 */
		addEditor(
			emailAddress: string
		): DriveApp.Folder
		/**
		 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If the user was already
		 * on the list of viewers, this method promotes the user out of the list of viewers.
		 * 
		 * @param user - A representation of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining.
		 */
		addEditor(
			user: User
		): DriveApp.Folder

		/**
		 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If any of the
		 * users were already on the list of viewers, this method promotes them out of the list of
		 * viewers.
		 * 
		 * @param emailAddresses - An array of email addresses of the users to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining.
		 */
		addEditors(
			emailAddresses: string[]
		): DriveApp.Folder
		/**
		 * Adds the given file to the current folder. This method does not move the file out of its
		 * existing parent folder; a file can have more than one parent simultaneously.
		 * 
		 * @param child - The child file to add.
		 * 
		 * @returns The new parent of the file added as a child.
		 */
		addFile(
			child: DriveApp.File
		): DriveApp.Folder
		/**
		 * Adds the given folder to the current folder. This method does not move the folder out of
		 * its existing parent folder; a folder can have more than one parent simultaneously.
		 * 
		 * @param child - The child folder to add.
		 * 
		 * @returns The new parent of the folder added as a child.
		 */
		addFolder(
			child: DriveApp.Folder
		): DriveApp.Folder
		/**
		 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If the user was already
		 * on the list of editors, this method has no effect.
		 * 
		 * @param emailAddress - The email address of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining.
		 */
		addViewer(
			emailAddress: string
		): DriveApp.Folder
		/**
		 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If the user was already
		 * on the list of editors, this method has no effect.
		 * 
		 * @param user - A representation of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining.
		 */
		addViewer(
			user: User
		): DriveApp.Folder

		/**
		 * Adds the given array of users to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If any of the
		 * users were already on the list of editors, this method has no effect for them.
		 * 
		 * @param emailAddresses - An array of email addresses of the users to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining.
		 */
		addViewers(
			emailAddresses: string[]
		): DriveApp.Folder
		/**
		 * Creates a file in the current folder from a given <code>Blob</code> of arbitrary data.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Create an image file in Google Drive using the Maps service.
		 * var blob = Maps.newStaticMap().setCenter(&#39;76 9th Avenue, New York NY&#39;).getBlob();
		 * DriveApp.getRootFolder().createFile(blob);
		 * </code></pre>
		 * 
		 * @param blob - The data for the new file.
		 * 
		 * @returns The new file.
		 */
		createFile(
			blob: BlobSource
		): DriveApp.File
		/**
		 * Creates a text file in the current folder with the given name and contents. Throws an
		 * exception if <code>content</code> is larger than 50 MB.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Create a text file with the content &quot;Hello, world!&quot;
		 * DriveApp.getRootFolder().createFile(&#39;New Text File&#39;, &#39;Hello, world!&#39;);
		 * </code></pre>
		 * 
		 * @param name - The name of the new file.
		 * @param content - The content for the new file.
		 * 
		 * @returns The new file.
		 */
		createFile(
			name: string,
			content: string
		): DriveApp.File
		/**
		 * Creates a file in the current folder with the given name, contents, and MIME type. Throws
		 * an exception if <code>content</code> is larger than 10MB.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Create an HTML file with the content &quot;Hello, world!&quot;
		 * DriveApp.getRootFolder().createFile(&#39;New HTML File&#39;, &#39;&lt;b&gt;Hello, world!&lt;/b&gt;&#39;, MimeType.HTML);
		 * </code></pre>
		 * 
		 * @param name - The name of the new file.
		 * @param content - The content for the new file.
		 * @param mimeType - The MIME type of the new file.
		 * 
		 * @returns The new file.
		 */
		createFile(
			name: string,
			content: string,
			mimeType: string
		): DriveApp.File

		/**
		 * Creates a folder in the current folder with the given name.
		 * 
		 * @param name - The name of the new folder.
		 * 
		 * @returns The new folder.
		 */
		createFolder(
			name: string
		): DriveApp.Folder
		/**
		 * Creates a shortcut to the provided Drive item ID, and returns it.
		 * 
		 * @param targetId - The file ID of the target file or folder.
		 * 
		 * @returns The new shortcut.
		 */
		createShortcut(
			targetId: string
		): DriveApp.File
		/**
		 * Gets the permission granted to the given user.
		 * 
		 * @param email - the email address of the user whose permissions should be checked
		 * 
		 * @returns the permissions granted to the user
		 */
		getAccess(
			email: string
		): DriveApp.Permission
		/**
		 * Gets the permission granted to the given user.
		 * 
		 * @param user - a representation of the user whose permissions should be checked
		 * 
		 * @returns the permissions granted to the user
		 */
		getAccess(
			user: User
		): DriveApp.Permission

		/**
		 * Gets the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> was created.
		 * 
		 * @returns the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> was created
		 */
		getDateCreated(): Date
		/**
		 * Gets the description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
		 * 
		 * @returns the description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
		 */
		getDescription(): string
		/**
		 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If the user who executes the script
		 * does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, this method returns an empty array.
		 * 
		 * @returns An array of users with edit permission.
		 */
		getEditors(): DriveApp.User[]
		/**
		 * Gets a collection of all files that are children of the current folder.
		 * 
		 * @returns A collection of all files that are children of the current folder.
		 */
		getFiles(): DriveApp.FileIterator
		/**
		 * Gets a collection of all files that are children of the current folder and have the given name.
		 * 
		 * @param name - The name of the files to find.
		 * 
		 * @returns A collection of all files that are children of the current folder and have the given name.
		 */
		getFilesByName(
			name: string
		): DriveApp.FileIterator
		/**
		 * Gets a collection of all files that are children of the current folder and have the given MIME type.
		 * 
		 * @param mimeType - The MIME type of the files to find.
		 * 
		 * @returns A collection of all files that are children of the current folder and have the given MIME
		 *     type.
		 */
		getFilesByType(
			mimeType: string
		): DriveApp.FileIterator
		/**
		 * Gets a collection of all folders that are children of the current folder.
		 * 
		 * @returns A collection of all folders that are children of the current folder.
		 */
		getFolders(): DriveApp.FolderIterator
		/**
		 * Gets a collection of all folders that are children of the current folder and have the given name.
		 * 
		 * @param name - The name of the folders to find.
		 * 
		 * @returns A collection of all folders that are children of the current folder and have the given name.
		 */
		getFoldersByName(
			name: string
		): DriveApp.FolderIterator
		/**
		 * Gets the ID of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
		 * 
		 * @returns the ID of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
		 */
		getId(): string
		/**
		 * Gets the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> was last updated.
		 * 
		 * @returns the date the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> was last updated
		 */
		getLastUpdated(): Date
		/**
		 * Gets the name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
		 * 
		 * @returns the name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
		 */
		getName(): string
		/**
		 * Gets the owner of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
		 * 
		 * @returns a <code>User</code> object representing the owner
		 */
		getOwner(): DriveApp.User
		/**
		 * Gets a collection of folders that are immediate parents of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
		 * 
		 * @returns a collection of folders that are immediate parents of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
		 */
		getParents(): DriveApp.FolderIterator
		/**
		 * Gets which class of users can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, besides any individual
		 * users who have been explicitly given access.
		 * 
		 * @returns which class of users can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
		 */
		getSharingAccess(): DriveApp.Access
		/**
		 * Gets the permission granted to those users who can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>,
		 * besides any individual users who have been explicitly given access.
		 * 
		 * @returns the permissions granted to users who can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
		 */
		getSharingPermission(): DriveApp.Permission
		/**
		 * Gets the number of bytes used to store the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> in Drive. Note that G
		 * Suite application files do not count toward Drive storage limits and thus return <code>0</code>
		 * bytes.
		 * 
		 * @returns the number of bytes used to store the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> in Drive
		 */
		getSize(): number
		/**
		 * Gets the URL that can be used to open the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> in a Google App like
		 * Drive or Docs.
		 * 
		 * @returns the URL that can be used to view this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> in a Google App like
		 *     Drive or Docs
		 */
		getUrl(): string
		/**
		 * Gets the list of viewers and commenters for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. If the user who
		 * executes the script does not have edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, this method
		 * returns an empty array.
		 * 
		 * @returns An array of users with view or comment permission.
		 */
		getViewers(): DriveApp.User[]
		/**
		 * Determines whether users with edit permissions to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> are allowed to
		 * share with other users or change the permissions.
		 * 
		 * @returns <code>true</code> if users with edit permissions are allowed to share with other users or
		 *     change the permissions; <code>false</code> if not
		 */
		isShareableByEditors(): Boolean
		/**
		 * Determines whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> has been starred in the user's Drive.
		 * 
		 * @returns <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is starred in the user's Drive; <code>false</code> if not
		 */
		isStarred(): Boolean
		/**
		 * Determines whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is in the trash of the user's Drive.
		 * 
		 * @returns <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is in the trash of the user's Drive;
		 *     <code>false</code> if not
		 */
		isTrashed(): Boolean
		/**
		 * Moves this item to the provided destination folder.
		 * 
		 * <p>The current user must be the owner of the file or have at least edit access to the item's
		 * current parent folder in order to move the item to the destination folder.
		 * 
		 * @param destination - The folder that becomes the new parent.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining.
		 */
		moveTo(
			destination: DriveApp.Folder
		): DriveApp.Folder
		/**
		 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. This method doesn't
		 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> if they belong to a class of users who have
		 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is shared with the user's entire
		 * domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of viewers.
		 * 
		 * @param emailAddress - The email address of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining.
		 */
		removeEditor(
			emailAddress: string
		): DriveApp.Folder
		/**
		 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. This method doesn't
		 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> if they belong to a class of users who have
		 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is shared with the user's entire
		 * domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of viewers.
		 * 
		 * @param user - A representation of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining.
		 */
		removeEditor(
			user: User
		): DriveApp.Folder

		/**
		 * Removes the given file from the current folder. This method does not delete the file, but
		 * if a file is removed from all of its parents, it cannot be seen in Drive except by searching
		 * for it or using the "All items" view.
		 * 
		 * @param child - The child file to remove.
		 * 
		 * @returns The previous parent of the child.
		 */
		removeFile(
			child: DriveApp.File
		): DriveApp.Folder
		/**
		 * Removes the given folder from the current folder. This method does not delete the folder
		 * or its contents, but if a folder is removed from all of its parents, it cannot be seen in Drive
		 * except by searching for it or using the "All items" view.
		 * 
		 * @param child - The child folder to remove.
		 * 
		 * @returns The previous parent of the child.
		 */
		removeFolder(
			child: DriveApp.Folder
		): DriveApp.Folder
		/**
		 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. This
		 * method has no effect if the user is an editor, not a viewer or commenter. This method also
		 * doesn't block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> if they belong to a class of users who
		 * have general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is shared with the user's
		 * entire domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of editors.
		 * 
		 * @param emailAddress - The email address of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> for chaining.
		 */
		removeViewer(
			emailAddress: string
		): DriveApp.Folder
		/**
		 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. This
		 * method has no effect if the user is an editor, not a viewer. This method also doesn't block
		 * users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> if they belong to a class of users who have general
		 * access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is shared with the user's entire domain, or
		 * if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of editors.
		 * 
		 * @param user - A representation of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> for chaining.
		 */
		removeViewer(
			user: User
		): DriveApp.Folder

		/**
		 * Revokes the access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> granted to the given user. This method does
		 * not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> if they belong to a class of users
		 * who have general access — for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is shared with the user's
		 * entire domain.
		 * 
		 * @param user - the email address of the user whose access should be revoked
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
		 */
		revokePermissions(
			user: string
		): DriveApp.Folder
		/**
		 * Revokes the access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> granted to the given user. This method does
		 * not block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> if they belong to a class of users
		 * who have general access — for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is shared with the user's
		 * entire domain.
		 * 
		 * @param user - a representation of the user whose access should be revoked
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
		 */
		revokePermissions(
			user: User
		): DriveApp.Folder

		/**
		 * Gets a collection of all files that are children of the current folder and match the given search
		 * criteria. The search criteria are detailed in the <a
		 * href="/drive/api/v2/ref-search-terms">Google Drive SDK documentation</a>. Note that the <code>params</code> argument is a query string that may contain string values, so take care to escape
		 * quotation marks correctly (for example <code>&quot;title contains &#39;Gulliver\\&#39;s Travels&#39;&quot;</code> or
		 * <code>&#39;title contains &quot;Gulliver\&#39;s Travels&quot;&#39;</code>).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the name of every file that are children of the current folder and modified after February 28,
		 * // 2013 whose name contains &quot;untitled&quot;.
		 * var files = DriveApp.getRootFolder().searchFiles(
		 *     &#39;modifiedDate &gt; &quot;2013-02-28&quot; and title contains &quot;untitled&quot;&#39;);
		 * while (files.hasNext()) {
		 *   var file = files.next();
		 *   Logger.log(file.getName());
		 * }
		 * </code></pre>
		 * 
		 * @param params - The search criteria, as detailed in the <a
		 *     href="/drive/api/v2/ref-search-terms">Google Drive SDK documentation</a>.
		 * 
		 * @returns A collection of all files that are children of the current folder and match the search
		 *     criteria.
		 */
		searchFiles(
			params: string
		): DriveApp.FileIterator
		/**
		 * Gets a collection of all folders that are children of the current folder and match the given search
		 * criteria. The search criteria are detailed in the <a
		 * href="/drive/api/v2/ref-search-terms">Google Drive SDK documentation</a>. Note that the <code>params</code> argument is a query string that may contain string values, so take care to escape
		 * quotation marks correctly (for example <code>&quot;title contains &#39;Gulliver\\&#39;s Travels&#39;&quot;</code> or
		 * <code>&#39;title contains &quot;Gulliver\&#39;s Travels&quot;&#39;</code>).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the name of every folder that are children of the current folder and you own and is starred.
		 * var folders = DriveApp.getRootFolder().searchFolders(&#39;starred = true and &quot;me&quot; in owners&#39;);
		 * while (folders.hasNext()) {
		 *   var folder = folders.next();
		 *   Logger.log(folder.getName());
		 * }
		 * </code></pre>
		 * 
		 * @param params - The search criteria, as detailed in the <a
		 *     href="/drive/api/v2/ref-search-terms">Google Drive SDK documentation</a>.
		 * 
		 * @returns A collection of all folders that are children of the current folder and match the search
		 *     criteria.
		 */
		searchFolders(
			params: string
		): DriveApp.FolderIterator
		/**
		 * Sets the description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
		 * 
		 * @param description - the new description for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
		 */
		setDescription(
			description: string
		): DriveApp.Folder
		/**
		 * Sets the name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
		 * 
		 * @param name - the new name of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
		 */
		setName(
			name: string
		): DriveApp.Folder
		/**
		 * Changes the owner of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. This method also gives the previous owner
		 * explicit edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
		 * 
		 * @param emailAddress - the email address of the user who should become the new owner
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
		 */
		setOwner(
			emailAddress: string
		): DriveApp.Folder
		/**
		 * Changes the owner of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. This method also gives the previous owner
		 * explicit edit access to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>.
		 * 
		 * @param user - a representation of the user who should become the new owner
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
		 */
		setOwner(
			user: User
		): DriveApp.Folder

		/**
		 * Sets whether users with edit permissions to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> are allowed to share
		 * with other users or change the permissions. The default for a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is
		 * <code>true</code>.
		 * 
		 * @param shareable - <code>true</code> if users with edit permissions should be allowed to share with
		 *     other users or change the permissions; <code>false</code> if not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
		 */
		setShareableByEditors(
			shareable: Boolean
		): DriveApp.Folder
		/**
		 * Sets which class of users can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> and what permissions
		 * those users are granted, besides any individual users who have been explicitly given access.
		 * 
		 * <pre class="prettyprint">
		 * // Creates a folder that anyone on the Internet can read from and write to. (Domain
		 * // administrators can prohibit this setting for users of a G Suite domain.)
		 * var folder = DriveApp.createFolder('Shared Folder');
		 * folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
		 * </pre>
		 * 
		 * @param accessType - which class of users should be able to access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
		 * @param permissionType - the permissions that should be granted to users who can access the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
		 */
		setSharing(
			accessType: DriveApp.Access,
			permissionType: DriveApp.Permission
		): DriveApp.Folder
		/**
		 * Sets whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is starred in the user's Drive. The default for
		 * new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>s is <code>false</code>.
		 * 
		 * @param starred - <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> should be starred in the user's
		 *     Drive; <code>false</code> if not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
		 */
		setStarred(
			starred: Boolean
		): DriveApp.Folder
		/**
		 * Sets whether the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> is in the trash of the user's Drive. Only the
		 * owner may trash the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>. The default for new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>s is <code>false</code>.
		 * 
		 * @param trashed - <code>true</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code> should be moved to the trash of
		 *     the user's Drive; <code>false</code> if not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder.html'>Folder</a></code>, for chaining
		 */
		setTrashed(
			trashed: Boolean
		): DriveApp.Folder

	}

	class FolderIterator {
		private constructor();

		/**
		 * Gets a token that can be used to resume this iteration at a later time. This method is useful
		 * if processing an iterator in one execution would exceed the maximum execution time.
		 * Continuation tokens are generally valid for one week.
		 * 
		 * @returns a continuation token that can be used to resume this iteration with the items that
		 *     remained in the iterator when the token was generated
		 */
		getContinuationToken(): string
		/**
		 * Determines whether calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder-iterator.html#next()'>next()</a></code> will return an item.
		 * 
		 * @returns <code>true</code> if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/folder-iterator.html#next()'>next()</a></code> will return an item; <code>false</code> if not
		 */
		hasNext(): Boolean
		/**
		 * Gets the next item in the collection of files or folders. Throws an exception if no items
		 * remain.
		 * 
		 * @returns the next item in the collection
		 */
		next(): DriveApp.Folder

	}

	enum Permission {
		/**
		 * Users who can access the file or folder are able only to view it, copy it, or comment on it.
		 * Passing this value to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception if
		 * the type of file does not support it.
		 */
		COMMENT = "COMMENT",
		/**
		 * Users who can access the file or folder are able to edit it. Unless <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setShareableByEditors(Boolean)'>File.setShareableByEditors(shareable)</a></code> is set to <code>false</code>, users can also change the sharing
		 * settings. Passing this value to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an
		 * exception if the type of file does not support it.
		 */
		EDIT = "EDIT",
		/**
		 * Users who can edit, trash, and move content within a shared drive. This value can be returned,
		 * but passing it to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception.
		 */
		FILE_ORGANIZER = "FILE_ORGANIZER",
		/**
		 * The user does not have any permissions for the file or folder. This value can be returned, but
		 * passing it to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception unless it
		 * is set in combination with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/access.html#ANYONE'>Access.ANYONE</a></code>.
		 */
		NONE = "NONE",
		/**
		 * Users who can organize files and folders within a shared drive. This value can be returned, but
		 * passing it to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception.
		 */
		ORGANIZER = "ORGANIZER",
		/**
		 * The user owns the file or folder. This value can be returned, but passing it to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception.
		 */
		OWNER = "OWNER",
		/**
		 * Users who can access the file or folder are able only to view it or copy it. Passing this value
		 * to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> throws an exception if the type of file
		 * does not support it.
		 */
		VIEW = "VIEW",
	}

	class User {
		private constructor();

		/**
		 * Gets the domain name associated with the user's account.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the domain names associated with all users who have edit access to a file.
		 * var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
		 * var editors = file.getEditors();
		 * for (var i = 0; i &lt; editors.length; i++) {
		 *   Logger.log(editors[i].getDomain());
		 * }
		 * </code></pre>
		 * 
		 * @returns the domain name associated with the user's account
		 */
		getDomain(): string
		/**
		 * Gets the user's email address. The user's email address is only available if the user has
		 * chosen to share the address from the Google+ account settings page, or if the user belongs to
		 * the same domain as the user running the script and the domain administrator has allowed all
		 * users within the domain to see other users' email addresses.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the email address of all users who have edit access to a file.
		 * var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
		 * var editors = file.getEditors();
		 * for (var i = 0; i &lt; editors.length; i++) {
		 *   Logger.log(editors[i].getEmail());
		 * }
		 * </code></pre>
		 * 
		 * @returns the user's email's address, or a blank string if the email address is not available
		 */
		getEmail(): string
		/**
		 * Gets the user's name. This method returns <code>null</code> if the user's name is not available.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the names of all users who have edit access to a file.
		 * var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
		 * var editors = file.getEditors();
		 * for (var i = 0; i &lt; editors.length; i++) {
		 *   Logger.log(editors[i].getName());
		 * }
		 * </code></pre>
		 * 
		 * @returns the user's name, or <code>null</code> if the name is not available
		 */
		getName(): string
		/**
		 * Gets the URL for the user's photo. This method returns <code>null</code> if the user's photo is not
		 * available.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the URLs for the photos of all users who have edit access to a file.
		 * var file = DriveApp.getFileById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
		 * var editors = file.getEditors();
		 * for (var i = 0; i &lt; editors.length; i++) {
		 *   Logger.log(editors[i].getPhotoUrl());
		 * }
		 * </code></pre>
		 * 
		 * @returns the URL for the user's photo, or <code>null</code> if the photo is not available
		 */
		getPhotoUrl(): string
		/**
		 * Gets the user's email address.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the email address of the person running the script.
		 * Logger.log(Session.getActiveUser().getUserLoginId());
		 * </code></pre>
		 * 
		 * @returns The user's email's address.
		 */
		getUserLoginId(): string

	}

}
