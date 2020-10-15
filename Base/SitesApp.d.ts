/** Module: SitesApp */

type SitesApp = typeof SitesApp;
declare namespace SitesApp {

	/**
	 * Creates a new Site by copying an existing Site.
	 * 
	 * <p>Warning: Copying a site takes time, from seconds to possibly many minutes, depending on the
	 * size of the site. Although the method returns right away, the copy is still going on in the
	 * background, and not all pages in the copied site will be immediately available. This method can
	 * also be used to instantiate a new site based on a given template.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This creates a site. Note that this only works for G Suite domains.
	 * // There is no version of this API for consumer accounts.
	 * var site = SitesApp.createSite(&quot;example.com&quot;,
	 *                                &quot;homepage&quot;,
	 *                                &quot;My Home Page&quot;,
	 *                                &quot;This is a new site I created!&quot;);
	 * 
	 * var siteCopy = SitesApp.copySite(&quot;example.com&quot;,
	 *                                  &quot;homepage-clone&quot;,
	 *                                  &quot;Cloned Home Page&quot;,
	 *                                  &quot;Begun, these clone wars have.&quot;,
	 *                                  site);
	 * </code></pre>
	 * 
	 * @param domain - The G Suite hosted domain (e.g. example.com)
	 * @param name - The webspace name found in the URL (e.g. mySite)
	 * @param title - The title of the site
	 * @param summary - The description of the site
	 * @param site - The Site to copy from. This can either be a site or a template. If the parameter is
	 *     an existing site then the entire contents of the site will be copied. If the given Site is
	 *     a template, then a new Site is created based on that template.
	 * 
	 * @returns The site that was copied. Note that the copy is asynchronous, and the copy operation
	 *     may still be ongoing even though a reference to the site has been returned.
	 */
	function copySite(
		domain: string,
		name: string,
		title: string,
		summary: string,
		site: SitesApp.Site
	): SitesApp.Site
	/**
	 * Creates a new Site.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This creates a site. Note that this only works for G Suite domains.
	 * // There is no version of this API for consumer accounts.
	 * var site = SitesApp.createSite(&quot;example.com&quot;,
	 *                                &quot;homepage&quot;,
	 *                                &quot;My Home Page&quot;,
	 *                                &quot;This is a new site I created!&quot;);
	 * </code></pre>
	 * 
	 * @param domain - The G Suite hosted domain (e.g. example.com)
	 * @param name - the path name found in the URL (e.g. mySite)
	 * @param title - The title of the site
	 * @param summary - The description of the site
	 * 
	 * @returns The created site
	 */
	function createSite(
		domain: string,
		name: string,
		title: string,
		summary: string
	): SitesApp.Site
	/**
	 * Returns the active page, if the script is hosted in a container, or null otherwise.
	 * 
	 * <pre class="prettyprint"><code>
	 * var site = SitesApp.getActivePage();
	 * </code></pre>
	 * 
	 * @returns the active container if it is a sites page
	 */
	function getActivePage(): SitesApp.Page
	/**
	 * Returns the active container, if the script is hosted in a container, or null otherwise.
	 * 
	 * <pre class="prettyprint"><code>
	 * var site = SitesApp.getActiveSite();
	 * </code></pre>
	 * 
	 * @returns the active container if it is a site
	 */
	function getActiveSite(): SitesApp.Site
	/**
	 * Retrieves first 200 Sites belonging to this domain. To get all the sites, use the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/sites-app.html#getAllSites(String,Integer,Integer)'>getAllSites(domain, start, max)</a></code> method to page through the results.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This writes the first page of sites belonging to a G Suite
	 * // domain to the log.
	 * var sites = SitesApp.getAllSites(&quot;example.com&quot;);
	 * for(var i in sites) {
	 *   Logger.log(sites[i].getUrl());
	 * }
	 * </code></pre>
	 * 
	 * @param domain - The G Suite hosted domain (e.g. example.com)
	 * 
	 * @returns an array of sites belonging to the domain
	 */
	function getAllSites(
		domain: string
	): SitesApp.Site[]
	/**
	 * Retrieves all Sites belonging to this domain.
	 * 
	 * <pre class="prettyprint">
	 * // This writes the a list of sites in domain example.com to the log.
	 * var pageStart = 0;
	 * var pageSize = 50;
	 * while (true) {
	 *   Logger.log("Loading sites starting at %s", pageStart);
	 *   var sites = SitesApp.getAllSites("example.com", pageStart, pageSize);
	 *   if (sites.length == 0) {
	 *     break;
	 *   }
	 *   Logger.log("Got %s sites back", sites.length);
	 *   pageStart += sites.length;
	 *   for(var i in sites) {
	 *     Logger.log("Found site: %s", sites[i].getUrl());
	 *   }
	 * }
	 * </pre>
	 * 
	 * @param domain - The G Suite hosted domain (e.g. example.com)
	 * @param start - the index of the first site to return
	 * @param max - the maximum number of results to return
	 * 
	 * @returns an array of sites belonging to the domain
	 */
	function getAllSites(
		domain: string,
		start: number,
		max: number
	): SitesApp.Site[]

	/**
	 * Retrieves a Page by url.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This snippet retrieves the page at the given URL.
	 * // Returns null if the page does not exist or if the URL given is invalid.
	 * var page = SitesApp.getPageByUrl(
	 *                     &quot;https://sites.google.com/site/demositeappsscript/mylistpage&quot;);
	 * Logger.log(page.getName());
	 * </code></pre>
	 * 
	 * @param url - the public url
	 * 
	 * @returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code> instance corresponding to the page at the URL or null if the page does
	 *     not exist.
	 */
	function getPageByUrl(
		url: string
	): SitesApp.Page
	/**
	 * Retrieves a Site for the given Google Site, if the user is a consumer who does not have a
	 * hosted domain.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Returns a Site instance
	 * var site = SitesApp.getSite(&#39;mysite&#39;);
	 * </code></pre>
	 * 
	 * @param name - The webspace name found in the URL (e.g. mySite)
	 * 
	 * @returns A Site instance corresponding to a consumer site
	 */
	function getSite(
		name: string
	): SitesApp.Site
	/**
	 * Retrieves a Site for the given Google Site.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Returns a Site instance
	 * var site = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;);
	 * </code></pre>
	 * 
	 * @param domain - The G Suite hosted domain (e.g. example.com)
	 * @param name - The webspace name found in the URL (e.g. mySite)
	 * 
	 * @returns A Site instance corresponding to a hosted domain
	 */
	function getSite(
		domain: string,
		name: string
	): SitesApp.Site

	/**
	 * Retrieves a Site by url.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This snippet retrieves the site at the given URL
	 * // Throws an Invalid argument exception if the site does not exist or if
	 * // the URL given is invalid
	 * var site = SitesApp.getSiteByUrl(&quot;https://sites.google.com/site/demosite&quot;);
	 * Logger.log(site.getName());
	 * </code></pre>
	 * 
	 * @param url - the public url
	 * 
	 * @returns a Site found at the given URL
	 */
	function getSiteByUrl(
		url: string
	): SitesApp.Site
	/**
	 * Retrieves first page of Sites for a user, if the user is a consumer who does not have a hosted
	 * domain.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This writes the first page of sites owned by the user running
	 * // the script to the log.
	 * var sites = SitesApp.getSites();
	 * for(var i in sites) {
	 *   Logger.log(sites[i].getUrl());
	 * }
	 * </code></pre>
	 * 
	 * @returns An array of sites beloning to the user running the script
	 */
	function getSites(): SitesApp.Site[]
	/**
	 * Retrieves Sites for a user between the given bounds if the user is a consumer who does not have
	 * a hosted domain.
	 * 
	 * <pre class="prettyprint"><code>
	 * var sites = SitesApp.getSites(25, 50);
	 * for(var i in sites) {
	 *   Logger.log(sites[i].getUrl());
	 * }
	 * </code></pre>
	 * 
	 * @param start - the index of the first site to return
	 * @param max - the maximum number of results to return
	 * 
	 * @returns an array of all the sites owned for a user
	 */
	function getSites(
		start: number,
		max: number
	): SitesApp.Site[]
	/**
	 * Retrieves first page of Sites belonging to this user in this domain.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This writes the first page of sites owned by the user running
	 * // the script to the log.
	 * var sites = SitesApp.getSites(&quot;example.com&quot;);
	 * for(var i in sites) {
	 *   Logger.log(sites[i].getUrl());
	 * }
	 * </code></pre>
	 * 
	 * @param domain - The G Suite hosted domain (e.g. example.com)
	 * 
	 * @returns An array of sites beloning to the user running the script
	 */
	function getSites(
		domain: string
	): SitesApp.Site[]
	/**
	 * Retrieves all Sites belonging to this user in this domain for the given range given.
	 * 
	 * <pre class="prettyprint"><code>
	 * // This writes the a list of sites owned by the user running
	 * // the script in positions bounded by the start and max values to the log.
	 * var sites = SitesApp.getSites(&quot;example.com&quot;, 25, 50);
	 * for(var i in sites) {
	 *   Logger.log(sites[i].getUrl());
	 * }
	 * </code></pre>
	 * 
	 * @param domain - The G Suite hosted domain (e.g. example.com)
	 * @param start - the index of the first site to return
	 * @param max - the maximum number of results to return
	 * 
	 * @returns an array of sites belonging to the user
	 */
	function getSites(
		domain: string,
		start: number,
		max: number
	): SitesApp.Site[]


	class Attachment {
		private constructor();

		/**
		 * Deletes this attachment.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var attachments = pages[0].getAttachments();
		 * attachments[0].deleteAttachment();
		 * </code></pre>
		 */
		deleteAttachment(): void
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
		 * Return the type of this attachment (HOSTED or WEB).
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var attachments = pages[0].getAttachments();
		 * var attType = attachments[0].getAttachmentType();
		 * 
		 * // This will log &quot;Hosted&quot;
		 * Logger.log(attType);
		 * 
		 * // Since this returns an AttachmentType and not a String, for the
		 * // purposes of equivalence we want to either do this or cast the
		 * // type to a String
		 * if(attType ==  SitesService.AttachmentType.HOSTED) {
		 *   Logger.log(&quot;This is a match&quot;);
		 * }
		 * 
		 * // The above is the same as
		 * if(String(attType) == &quot;Hosted&quot;) {
		 *    Logger.log(&quot;This is also a match&quot;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the attachment type
		 */
		getAttachmentType(): SitesApp.AttachmentType
		/**
		 * Return the data inside this object as a blob.
		 * 
		 * @returns The data as a blob.
		 */
		getBlob(): Blob
		/**
		 * Return the mime type of this attachment. Fails for web attachments.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var attachments = pages[0].getAttachments();
		 * var contentType = attachments[0].getContentType();
		 * </code></pre>
		 * 
		 * @returns the attachment mime type
		 */
		getContentType(): string
		/**
		 * Return the date this attachment was first published.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var attachments = pages[0].getAttachments();
		 * var date = attachments[0].getDatePublished();
		 * </code></pre>
		 * 
		 * @returns the date of original publication
		 */
		getDatePublished(): Date
		/**
		 * Return the description of this attachment.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var attachments = pages[0].getAttachments();
		 * var description = attachments[0].getDescription();
		 * </code></pre>
		 * 
		 * @returns the attachment description
		 */
		getDescription(): string
		/**
		 * Return the date this attachment was last updated.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var attachments = pages[0].getAttachments();
		 * var date = attachments[0].getLastUpdated();
		 * </code></pre>
		 * 
		 * @returns the last updated date
		 */
		getLastUpdated(): Date
		/**
		 * Get the parent page of this attachment.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var attachments = pages[0].getAttachments();
		 * 
		 * // This is equal to pages[0]
		 * var parent = attachments[0].getParent();
		 * </code></pre>
		 * 
		 * @returns the parent page
		 */
		getParent(): SitesApp.Page
		/**
		 * Return the title of this attachment.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var attachments = pages[0].getAttachments();
		 * var title = attachments[0].getTitle();
		 * </code></pre>
		 * 
		 * @returns the attachment title
		 */
		getTitle(): string
		/**
		 * Return the download url for this attachment.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var attachments = pages[0].getAttachments();
		 * var url = attachments[0].getUrl();
		 * </code></pre>
		 * 
		 * @returns the download url
		 */
		getUrl(): string
		/**
		 * Set the mime type of this attachment. Fails for web attachments.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var attachments = pages[0].getAttachments();
		 * attachments[0].setContentType(&quot;text/plain&quot;);
		 * </code></pre>
		 * 
		 * @param contentType - the new mime type
		 * 
		 * @returns this Attachment for chaining
		 */
		setContentType(
			contentType: string
		): SitesApp.Attachment
		/**
		 * Set the descripton of this attachment.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var attachments = pages[0].getAttachments();
		 * 
		 * // This is an example of chaining in action
		 * attachments[0].setTitle(&quot;New Title&quot;)
		 *               .setDescription(&quot;New Description&quot;);
		 * </code></pre>
		 * 
		 * @param description - the new description
		 * 
		 * @returns this Attachment for chaining
		 */
		setDescription(
			description: string
		): SitesApp.Attachment
		/**
		 * Set the actual data of this attachment. Fails for web attachments.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;demositeappsscript&#39;).getChildren();
		 * var attachments = pages[0].getAttachments();
		 * 
		 * // This snippet demonstrates how to create a new text blob and attach it
		 * // to the page
		 * var blob = Utilities.newBlob(&quot;This data is now the attachment content&quot;);
		 * 
		 * // We must set a filename since we created the blob from String data
		 * // instead of something like a URL source
		 * blob.setName(&quot;attachment.txt&quot;);
		 * attachments[0].setTitle(&quot;New Title&quot;)
		 *               .setDescription(&quot;New Description&quot;)
		 *               .setContentType(&quot;text/plain&quot;)
		 *               .setFrom(blob);
		 * </code></pre>
		 * 
		 * @param blob - the new data
		 * 
		 * @returns this Attachment for chaining
		 */
		setFrom(
			blob: BlobSource
		): SitesApp.Attachment
		/**
		 * Set the parent page of this attachment.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var attachments = pages[0].getAttachments();
		 * // Sets the parent page to be the next sibling
		 * attachments[0].setParent(pages[1]);
		 * </code></pre>
		 * 
		 * @param parent - the new parent
		 * 
		 * @returns this Attachment for chaining
		 */
		setParent(
			parent: SitesApp.Page
		): SitesApp.Attachment
		/**
		 * Set the title of this attachment.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var attachments = pages[0].getAttachments();
		 * 
		 * // This is an example of chaining in action
		 * attachments[0].setTitle(&quot;New Title&quot;)
		 *               .setDescription(&quot;New Description&quot;);
		 * </code></pre>
		 * 
		 * @param title - the new title
		 * 
		 * @returns this Attachment for chaining
		 */
		setTitle(
			title: string
		): SitesApp.Attachment
		/**
		 * Sets the download url for this attachment. Only valid for web attachments.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;demositeappsscript&#39;).getChildren();
		 * var attachments = pages[0].getAttachments();
		 * 
		 * attachments[0].setTitle(&quot;New Web Attachment&quot;)
		 *               .setDescription(&quot;New Description&quot;)
		 *               .setUrl(&quot;http://example.com/files/your_file.txt&quot;);
		 * </code></pre>
		 * 
		 * @param url
		 * 
		 * @returns this Attachment for chaining
		 */
		setUrl(
			url: string
		): SitesApp.Attachment

	}

	enum AttachmentType {
		HOSTED = "HOSTED",
		WEB = "WEB",
	}

	class Column {
		private constructor();

		/**
		 * Deletes this column.
		 * 
		 * <pre class="prettyprint"><code>
		 * var page = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildByName(&#39;mylistpage&#39;);
		 * var columns = page.getColumns();
		 * columns[0].deleteColumn();
		 * </code></pre>
		 */
		deleteColumn(): void
		/**
		 * Gets the name of this column.
		 * 
		 * <pre class="prettyprint"><code>
		 * var page = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildByName(&#39;mylistpage&#39;);
		 * var columns = page.getColumns();
		 * var name = columns[0].getName();
		 * </code></pre>
		 * 
		 * @returns the column name
		 */
		getName(): string
		/**
		 * Returns the List Page this column belongs to.
		 * 
		 * <pre class="prettyprint"><code>
		 * var page = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildByName(&#39;mylistpage&#39;);
		 * var columns = page.getColumns();
		 * 
		 * // This returns a reference to page
		 * var parentPage = columns[0].getParent();
		 * </code></pre>
		 * 
		 * @returns the page this column belongs to
		 */
		getParent(): SitesApp.Page
		/**
		 * Sets the name of this column.
		 * 
		 * <pre class="prettyprint"><code>
		 * var page = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildByName(&#39;mylistpage&#39;);
		 * var columns = page.getColumns();
		 * columns[0].setName(&quot;New Name&quot;);
		 * </code></pre>
		 * 
		 * @param name - the new name
		 * 
		 * @returns this Column for chaining
		 */
		setName(
			name: string
		): SitesApp.Column

	}

	class Comment {
		private constructor();

		/**
		 * Deletes this comment.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var comments = pages[0].getComments();
		 * 
		 * // Let&#39;s delete all of Eric&#39;s comments
		 * for(var i = 0; i &lt; comments.length; i++) {
		 *   if(comments[i].getAuthorEmail() == &quot;eric@example.com&quot;) {
		 *     comments[i].deleteComment();
		 *   }
		 * }
		 * </code></pre>
		 */
		deleteComment(): void
		/**
		 * Gets the email address of the author of this comment.
		 * 
		 * @returns the author's email
		 */
		getAuthorEmail(): string
		/**
		 * Gets the name of the author of this comment.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var comments = pages[0].getComments();
		 * var comment = comments[0];
		 * var authorEmail = comment.getAuthorEmail();
		 * </code></pre>
		 * 
		 * @returns the author's name
		 */
		getAuthorName(): string
		/**
		 * Return the content of this comment as a String.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var comments = pages[0].getComments();
		 * var content = comments[0].getContent()
		 * </code></pre>
		 * 
		 * @returns the comment content
		 */
		getContent(): string
		/**
		 * Return the date this comment was originally published.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var comments = pages[0].getComments();
		 * var date = comments[0].getDatePublished();
		 * </code></pre>
		 * 
		 * @returns the date of original publication
		 */
		getDatePublished(): Date
		/**
		 * Return the date this comment was last updated.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var comments = pages[0].getComments();
		 * var date = comments[0].getLastUpdated();
		 * </code></pre>
		 * 
		 * @returns the last updated date
		 */
		getLastUpdated(): Date
		/**
		 * Get the parent page of this comment.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var comments = pages[0].getComments();
		 * var comment = comments[0];
		 * 
		 * // parentPage should be the same page as pages[0]
		 * var parentPage = comment.getParent();
		 * </code></pre>
		 * 
		 * @returns the parent page
		 */
		getParent(): SitesApp.Page
		/**
		 * Set the content of this comment.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var comments = pages[0].getComments();
		 * var comment = comments[0];
		 *  comment.setContent(&quot;New Content&quot;);
		 * 
		 * // Note that this returns a Comment, so you can chain the method calls
		 * var updatedContent = comment.setContent(&quot;New Content&quot;)
		 *                             .getContent();
		 * </code></pre>
		 * 
		 * @param content - the new content
		 * 
		 * @returns this Comment for chaining
		 */
		setContent(
			content: string
		): SitesApp.Comment
		/**
		 * Set the parent page of this comment.
		 * 
		 * <pre class="prettyprint"><code>
		 * var pages = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildren();
		 * var comments = pages[0].getComments();
		 * var comment = comments[0];
		 * 
		 * // Let&#39;s say we want to move the comment to its parent&#39;s next neighbor ..
		 * // This will only work if the example site has multiple children
		 * var newParentPage = comment.setParent(pages[1]).getParent();
		 * </code></pre>
		 * 
		 * @param parent - the new parent
		 * 
		 * @returns this Comment for chaining
		 */
		setParent(
			parent: SitesApp.Page
		): SitesApp.Comment

	}

	class ListItem {
		private constructor();

		/**
		 * Deletes this list item.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This code sample deletes all list items from a List page
		 * // Running this code sample against a Page that is a standard web page will
		 * // cause getListItems() to throw an exception
		 * var page = SitesApp.getSite(&#39;demositeappsscript&#39;).getChildByName(&#39;mylistpage&#39;);
		 * var items = page.getListItems();
		 * for(var i = 0; i &lt; items.length; i++) {
		 *   items[i].deleteListItem();
		 * }
		 * </code></pre>
		 */
		deleteListItem(): void
		/**
		 * Return the date this list item was first published.
		 * 
		 * <pre class="prettyprint"><code>
		 * var page = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildByName(&#39;mylistpage&#39;);
		 * var items = page.getListItems();
		 * var date = items[0].getDatePublished();
		 * </code></pre>
		 * 
		 * @returns the date of original publication
		 */
		getDatePublished(): Date
		/**
		 * Return the date this comment was last updated.
		 * 
		 * <pre class="prettyprint"><code>
		 * var page = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildByName(&#39;mylistpage&#39;);
		 * var items = page.getListItems();
		 * var date = items[0].getLastUpdated();
		 * </code></pre>
		 * 
		 * @returns the last updated date
		 */
		getLastUpdated(): Date
		/**
		 * Get the parent page of this list item.
		 * 
		 * <pre class="prettyprint"><code>
		 * var page = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildByName(&#39;mylistpage&#39;);
		 * var items = page.getListItems();
		 * // parentPage will equal page
		 * var parentPage = items[0].getParent();
		 * </code></pre>
		 * 
		 * @returns the parent page
		 */
		getParent(): SitesApp.Page
		/**
		 * Get the value of this ListItem for a numbered column.
		 * 
		 * <pre class="prettyprint"><code>
		 * var page = SitesApp.getSite(&quot;demositeappsscript&quot;).getChildByName(&quot;mylistpage&quot;);
		 * var listItem = page.getListItems()[0];
		 * 
		 * // Remember that rows are 0 indexed. This returns the item in the first column
		 * // of the list. If an index that is greater than the number of columns is used,
		 * // the script will throw an &quot;InvalidArgument: index&quot; exception.
		 * var value = listItem.getValueByIndex(5);
		 * </code></pre>
		 * 
		 * @param index - the column to get the value of
		 * 
		 * @returns the value of that column
		 */
		getValueByIndex(
			index: number
		): string
		/**
		 * Get the value of this ListItem for a named column.
		 * 
		 * <pre class="prettyprint"><code>
		 * var page = SitesApp.getSite(&quot;demositeappsscript&quot;).getChildByName(&quot;mylistpage&quot;);
		 * var listItem = page.getListItems()[0];
		 * 
		 * // Suppose we have a column named &quot;Owner&quot; - this will let us fetch the value
		 * // for the list item
		 * var value = listItem.getValueByName(&quot;Owner&quot;);
		 * Logger.log(value);
		 * </code></pre>
		 * 
		 * @param name - the column to get the value of
		 * 
		 * @returns the value of that column
		 */
		getValueByName(
			name: string
		): string
		/**
		 * Set the parent page of this list item.
		 * 
		 * <pre class="prettyprint"><code>
		 * var page = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getChildByName(&#39;mylistpage&#39;);
		 * var secondListPage = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;)
		 *                              .getChildByName(&#39;secondlistpage&#39;);
		 * var items = page.getListItems();
		 * 
		 * // Returns secondListPage
		 * var parentPage = items[0].setParent(secondListPage).getParent();
		 * </code></pre>
		 * 
		 * @param parent - the new parent
		 * 
		 * @returns this ListItem for chaining
		 */
		setParent(
			parent: SitesApp.Page
		): SitesApp.ListItem
		/**
		 * Set the value of this ListItem for a numbered column. For URL columns the value must be an
		 * XHTML anchor tag, with XML entities escaped.
		 * 
		 * <pre class="prettyprint"><code>
		 * var page = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;).getChildByName(&quot;mylistpage&quot;);
		 * var listItem = page.getListItems()[0];
		 * listItem.setValueByIndex(1, &#39;This is the new value&#39;);
		 * listItem.setValueByIndex(2, &#39;&lt;a href=&quot;http://www.example.com?a=1&amp;amp;b=2&quot;&gt;Example&lt;/a&gt;&#39;);
		 * </code></pre>
		 * 
		 * @param index - the column to set the value of
		 * @param value - the new value
		 * 
		 * @returns this ListItem for chaining
		 */
		setValueByIndex(
			index: number,
			value: string
		): SitesApp.ListItem
		/**
		 * Set the value of this ListItem for a numbered column. For URL columns the value must be an
		 * XHTML anchor tag, with XML entities escaped.
		 * 
		 * <pre class="prettyprint"><code>
		 * var page = SitesApp.getSite(&quot;demositeappsscript&quot;).getChildByName(&quot;mylistpage&quot;);
		 * var listItem = page.getListItems()[0];
		 * listItem.setValueByName(&#39;Owner&#39;, &#39;Eric&#39;);
		 * listItem.setValueByName(&#39;Page&#39;, &#39;&lt;a href=&quot;http://www.example.com?a=1&amp;amp;b=2&quot;&gt;Example&lt;/a&gt;&#39;);
		 * </code></pre>
		 * 
		 * @param name - the column to set the value of
		 * @param value - the new value
		 * 
		 * @returns this ListItem for chaining
		 */
		setValueByName(
			name: string,
			value: string
		): SitesApp.ListItem

	}

	class Page {
		private constructor();

		/**
		 * Add a new column to the list. Only valid for list pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * var page = site.getChildByName(&quot;listpage&quot;);
		 * // Only valid on List pages. Check for the type like so:
		 * //     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
		 * var columns = page.addColumn(&quot;new-column&quot;);
		 * </code></pre>
		 * 
		 * @param name - the new column's name
		 * 
		 * @returns the newly created column
		 */
		addColumn(
			name: string
		): SitesApp.Column
		/**
		 * Deprecated. Add a comment to the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * 
		 * page.addComment(&quot;This is a comment created automatically by a script using the account &quot; +
		 *                 &quot;of the user running the script&quot;);
		 * </code></pre>
		 * 
		 * @param content - the comment content
		 * 
		 * @returns the newly created comment
		 */
		addComment(
			content: string
		): SitesApp.Comment
		/**
		 * Add an attachment to the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * 
		 * // Create a new blob and attach it. Many useful functions also return
		 * // blobs file uploads, URLFetch
		 * var blob = Utilities.newBlob(&quot;Here is some data&quot;, &quot;text/plain&quot;, &quot;data.txt&quot;);
		 * 
		 * // Note that the filename must be unique or this call will fail
		 * page.addHostedAttachment(blob);
		 * </code></pre>
		 * 
		 * @param blob - the data for the attachment
		 * 
		 * @returns the newly created attachment
		 */
		addHostedAttachment(
			blob: BlobSource
		): SitesApp.Attachment
		/**
		 * Add an attachment to the page. This version of the function allows for a description.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * 
		 * // Create a new blob and attach it. Many useful: functions also return
		 * // blobs file uploads, URLFetch
		 * var blob = Utilities.newBlob(&quot;Here is some data&quot;, &quot;text/plain&quot;, &quot;data.txt&quot;);
		 * 
		 * // Note that the filename must be unique or this call will fail
		 * page.addHostedAttachment(blob, &quot;Some newly created data&quot;);
		 * </code></pre>
		 * 
		 * @param blob - the data for the attachment
		 * @param description - a description of the attachment
		 * 
		 * @returns the newly created attachment
		 */
		addHostedAttachment(
			blob: BlobSource,
			description: string
		): SitesApp.Attachment

		/**
		 * Add a list item to the list. Only valid for list pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * var page = site.getChildByName(&quot;listpage&quot;);
		 * // Only valid on List pages. Check for the type like so:
		 * //     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
		 * // Returns only one item
		 * page.addListItem([ &quot;John&quot;, &quot;Smith&quot;, &quot;123 Main St&quot;]);
		 * </code></pre>
		 * 
		 * @param values - the values for each column
		 * 
		 * @returns the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/list-item.html'>ListItem</a></code>
		 */
		addListItem(
			values: string[]
		): SitesApp.ListItem
		/**
		 * Add a web attachment to the page. Only valid for file cabinet pages.
		 * 
		 * <p>Web attachments are links - they are not actually hosted by Google Sites.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * // fetch the child - this must be a File Cabinet page
		 * // to programmatically check this, do a comparison:
		 * //    if(page.getPageType() == SitesApp.PageType.FILE_CABINET_PAGE)
		 * var page = site.getChildByName(&quot;files&quot;);
		 * page.addWebAttachment(&quot;Google Robots file&quot;,
		 *                       &quot;This is Google&#39;s robots.txt file&quot;,
		 *                       &quot;http://www.google.com/robots.txt&quot;);
		 * </code></pre>
		 * 
		 * @param title - the title of the attachment
		 * @param description - a description of the attachment
		 * @param url - the url of the file being attached
		 * 
		 * @returns the newly created attachment
		 */
		addWebAttachment(
			title: string,
			description: string,
			url: string
		): SitesApp.Attachment
		/**
		 * Create an announcements for this page. Only valid for announcement pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * // This snippet will only work with announcement pages - this is different
		 * // from a page that is an annoucement (individual announcements). To check
		 * // if this method can be called:
		 * //    if(page.getPageType() == SitesApp.PageType.ANNOUNCEMENTS_PAGE))
		 * var page = site.getChildByName(&quot;news&quot;);
		 * page.createAnnouncement(&quot;Breaking news!&quot;, &quot;&lt;h1&gt;Apps Script rocks!&lt;/h1&gt;&quot;);
		 * </code></pre>
		 * 
		 * @param title - the page title
		 * @param html - the page content
		 * 
		 * @returns the newly created Announcements
		 */
		createAnnouncement(
			title: string,
			html: string
		): SitesApp.Page
		/**
		 * Create an announcements for this page. Only valid for announcement pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * // This snippet will only work with announcement pages - this is different
		 * // from a page that is an annoucement (individual announcements). To check
		 * // if this method can be called:
		 * //    if(page.getPageType() == SitesApp.PageType.ANNOUNCEMENTS_PAGE))
		 * var page = site.getChildByName(&quot;news&quot;);
		 * page.createAnnouncement(&quot;Breaking news!&quot;,
		 *                         &quot;&lt;h1&gt;Apps Script rocks!&lt;/h1&gt;&quot;,
		 *                         true);
		 * </code></pre>
		 * 
		 * @param title - the page title
		 * @param html - the page content
		 * @param asDraft - whether to make the announcement a draft
		 * 
		 * @returns the newly created Announcements
		 */
		createAnnouncement(
			title: string,
			html: string,
			asDraft: Boolean
		): SitesApp.Page

		/**
		 * Create a new announcements page. Note that a parent site or page cannot have more than 500
		 * child pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This method can be called from both a Site instance
		 * // as well as a Page instance
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * 
		 * site.createAnnouncementsPage(&quot;New Announcement&quot;,
		 *                              &quot;new-announcement&quot;,
		 *                              &quot;&lt;h1&gt;Your announcement goes here&lt;/h1&gt;&quot;);
		 * 
		 * page.createAnnouncementsPage(&quot;New Announcement&quot;,
		 *                              &quot;new-announcement-child&quot;,
		 *                              &quot;&lt;h1&gt;Your announcement goes here&lt;/h1&gt;&quot;);
		 * </code></pre>
		 * 
		 * @param title - the page title
		 * @param name - the page name
		 * @param html - the page content
		 * 
		 * @returns the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
		 */
		createAnnouncementsPage(
			title: string,
			name: string,
			html: string
		): SitesApp.Page
		/**
		 * Create a new file-cabinet page. Note that a parent site or page cannot have more than 500 child
		 * pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This method can be called from either a site or a page.
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * 
		 * site.createFileCabinetPage(&quot;New File Cabinet&quot;,
		 *                            &quot;new-file-cabinet&quot;,
		 *                            &quot;&lt;h1&gt;Your HTML here&lt;/h1&gt;&quot;);
		 * 
		 * page.createFileCabinetPage(&quot;New File Cabinet&quot;,
		 *                              &quot;new-file-cabinet-child&quot;,
		 *                              &quot;&lt;h1&gt;Your HTML here&lt;/h1&gt;&quot;);
		 * </code></pre>
		 * 
		 * @param title - the page title
		 * @param name - the page name
		 * @param html - the page content
		 * 
		 * @returns The newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
		 */
		createFileCabinetPage(
			title: string,
			name: string,
			html: string
		): SitesApp.Page
		/**
		 * Create a new list page. Note that a parent site or page cannot have more than 500 child pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This method can be called from either a site or a page.
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * 
		 * site.createListPage(&quot;New List Page&quot;,
		 *                     &quot;new-list-page&quot;,
		 *                     &quot;&lt;h1&gt;Your List Page HTML here&lt;/h1&gt;&quot;,
		 *                     [ &quot;col1&quot;, &quot;col2&quot; ]);
		 * 
		 * page.createListPage(&quot;New List Page&quot;,
		 *                     &quot;new-list-page-child&quot;,
		 *                     &quot;&lt;h1&gt;Your List Page HTML here&lt;/h1&gt;&quot;,
		 *                     [ &quot;col1&quot;, &quot;col2&quot; ]);
		 * </code></pre>
		 * 
		 * @param title - the page title
		 * @param name - the page name
		 * @param html - the page content
		 * @param columnNames - the column names used for the list
		 * 
		 * @returns The newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
		 */
		createListPage(
			title: string,
			name: string,
			html: string,
			columnNames: string[]
		): SitesApp.Page
		/**
		 * Create a new page from a template. Note that a parent site or page cannot have more than 500
		 * child pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This method can be called from either a site or a page.
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var template = site.getTemplates()[0];
		 * 
		 * // If an invalid template is passed, this will throw an &quot;Invalid Argument&quot; error.
		 * site.createPageFromTemplate(&quot;ClonedPage&quot;, &quot;cloned-page&quot;, template);
		 * </code></pre>
		 * 
		 * @param title - the page title
		 * @param name - the page name
		 * @param template - the template page
		 * 
		 * @returns the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
		 */
		createPageFromTemplate(
			title: string,
			name: string,
			template: SitesApp.Page
		): SitesApp.Page
		/**
		 * Create a new web page. Note that a parent site or page cannot have more than 500 child pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This method can be called from either a site or a page.
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * 
		 * site.createAnnouncementsPage(&quot;New Announcement&quot;,
		 *                              &quot;new-announcement&quot;,
		 *                              &quot;&lt;h1&gt;Your announcement goes here&lt;/h1&gt;&quot;);
		 * 
		 * page.createAnnouncementsPage(&quot;New Announcement&quot;,
		 *                              &quot;new-announcement-child&quot;,
		 *                              &quot;&lt;h1&gt;Your announcement goes here&lt;/h1&gt;&quot;);
		 * </code></pre>
		 * 
		 * @param title - the page title
		 * @param name - the page name
		 * @param html - the page content
		 * 
		 * @returns The newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
		 */
		createWebPage(
			title: string,
			name: string,
			html: string
		): SitesApp.Page
		/**
		 * Deletes this page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * // Delete ALL the pages!
		 * var pages = site.getAllDescendants();
		 * for(var i in pages) {
		 *   pages[i].deletePage();
		 * }
		 * </code></pre>
		 */
		deletePage(): void
		/**
		 * Gets an array of descendant pages (direct and indirect), up to a limit of 200 pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var pages = site.getAllDescendants();
		 * </code></pre>
		 * 
		 * @returns an array of direct and indirect child pages
		 */
		getAllDescendants(): SitesApp.Page[]
		/**
		 * Gets an array of descendant pages, with optional advanced arguments.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var descendants = site.getAllDescendants({
		 *   type: SitesApp.PageType.WEB_PAGE,
		 *   start: 0,
		 *   max: 25,
		 *   includeDrafts: false,
		 *   includeDeleted: true,
		 *   search: &quot;target&quot;
		 * });
		 * 
		 * for(var i in descendants) {
		 *   Logger.log(descendants[i].getName());
		 * }
		 * </code></pre>
		 * 
		 * @param options - JavaScript object fields defined in the Advanced Arguments section below
		 * 
		 * @returns an array of direct and indirect child pages of the given type
		 */
		getAllDescendants(
			options: object
		): SitesApp.Page[]

		/**
		 * Get the announcements for this page. Only valid for announcement pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * // This snippet will only work with announcement pages - this is different
		 * // from a page that is an annoucement (individual announcements). To check
		 * // if this method can be called:
		 * //    if(page.getPageType() == SitesApp.PageType.ANNOUNCEMENTS_PAGE))
		 * var page = site.getChildByName(&quot;news&quot;);
		 * var announcements = page.getAnnouncements();
		 * 
		 * for(var i in announcements) {
		 *   Logger.log(announcements[i].getHtmlContent());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of Announcements
		 */
		getAnnouncements(): SitesApp.Page[]
		/**
		 * Get the announcements for this page. Only valid for announcement pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * // This snippet will only work with announcement pages - this is different
		 * // from a page that is an annoucement (individual announcements). To check
		 * // if this method can be called:
		 * //    if(page.getPageType() == SitesApp.PageType.ANNOUNCEMENTS_PAGE))
		 * var page = site.getChildByName(&quot;news&quot;);
		 * var announcements = page.getAnnouncements({ start: 0,
		 *                                             max: 20,
		 *                                             includeDrafts: false,
		 *                                             includeDeleted: false,
		 *                                             search: &quot;Breaking&quot; });
		 * 
		 * for(var i in announcements) {
		 *   Logger.log(announcements[i].getHtmlContent());
		 * }
		 * </code></pre>
		 * 
		 * @param optOptions - A JavaScript object containing advanced parameters
		 * 
		 * @returns an array of Announcements
		 */
		getAnnouncements(
			optOptions: object
		): SitesApp.Page[]

		/**
		 * Get the attachments for this page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * 
		 * var attachments = page.getAttachments();
		 * for(var i in attachments) {
		 *   Logger.log(attachments[i].getTitle());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of Attachments
		 */
		getAttachments(): SitesApp.Attachment[]
		/**
		 * Get the attachments for this page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * 
		 * // This returns only one attachment
		 * var attachments = page.getAttachments({ start: 0, max: 1});
		 * for(var i in attachments) {
		 *   Logger.log(attachments[i].getTitle());
		 * }
		 * </code></pre>
		 * 
		 * @param optOptions - a JavaScript object containing optional parameters
		 * 
		 * @returns an array of Attachments
		 */
		getAttachments(
			optOptions: object
		): SitesApp.Attachment[]

		/**
		 * Get the emails of the authors of the page
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * var authors = page.getAuthors();
		 * 
		 * for(var i in authors) {
		 *   Logger.log(authors[i]);
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of author email addresses
		 */
		getAuthors(): string[]
		/**
		 * Gets a particular child page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var pages = site.getChildByName(&quot;childPage&quot;);
		 * </code></pre>
		 * 
		 * @param name - the child page name
		 * 
		 * @returns the child page
		 */
		getChildByName(
			name: string
		): SitesApp.Page
		/**
		 * Gets an array of child pages, up to a limit of 200 pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var pages = site.getChildren();
		 * </code></pre>
		 * 
		 * @returns an array of direct child pages
		 */
		getChildren(): SitesApp.Page[]
		/**
		 * Gets an array of child pages, with optional advanced arguments.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var childPages = site.getChildren({
		 *   type: SitesApp.PageType.WEB_PAGE,
		 *   start: 0,
		 *   max: 25,
		 *   includeDrafts: false,
		 *   includeDeleted: true,
		 *   search: &quot;target&quot;
		 * });
		 * 
		 * for(var i in childPages) {
		 *   Logger.log(childPages[i].getName());
		 * }
		 * </code></pre>
		 * 
		 * @param options - JavaScript object fields defined in the Advanced Arguments section below
		 * 
		 * @returns an array of direct child pages of the given type
		 */
		getChildren(
			options: object
		): SitesApp.Page[]

		/**
		 * Get the columns for the list. Only valid for list pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * var page = site.getChildByName(&quot;listpage&quot;);
		 * // Only valid on List pages. Check for the type like so:
		 * //     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
		 * var columns = page.getColumns();
		 * 
		 * for(var i in columns) {
		 *   Logger.log(columns[i].getName());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/column.html'>Column</a></code> instances
		 */
		getColumns(): SitesApp.Column[]
		/**
		 * Deprecated. Get the comments for this page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * 
		 * var comments = page.getComments();
		 * for(var i in comments) {
		 *   Logger.log(comments[i].getContent());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of Comments.
		 */
		getComments(): SitesApp.Comment[]
		/**
		 * Deprecated. Get the comments for this page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * 
		 * // Return only one comment
		 * var comments = page.getComments({ start:0, max: 1});
		 * for(var i in comments) {
		 *   Logger.log(comments[i].getContent());
		 * }
		 * </code></pre>
		 * 
		 * @param optOptions - a JavaScript object containing optional parameters
		 * 
		 * @returns an array of Comments.
		 */
		getComments(
			optOptions: object
		): SitesApp.Comment[]

		/**
		 * Return the date this page was first published.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * Logger.log(page.getName() + &quot; was published &quot; + page.getDatePublished());
		 * </code></pre>
		 * 
		 * @returns the date of original publication
		 */
		getDatePublished(): Date
		/**
		 * Get the HTML content of the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * Logger.log(page.getHtmlContent());
		 * </code></pre>
		 * 
		 * @returns the html content
		 */
		getHtmlContent(): string
		/**
		 * Returns whether the page is in draft mode. Only valid for announcements.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * 
		 * Logger.log(&quot;Is this Announcement Page a draft?&quot;, page.getIsDraft());
		 * </code></pre>
		 * 
		 * @returns whether the page is in draft mode
		 */
		getIsDraft(): Boolean
		/**
		 * Return the last edit date, which includes only content edits.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * Logger.log(page.getName() + &quot; was last updated &quot; + page.getLastEdited());
		 * </code></pre>
		 * 
		 * @returns the date the page was last updated, including only content edits
		 */
		getLastEdited(): Date
		/**
		 * Return the last updated date, which includes non-content changes like moving.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * Logger.log(page.getName() + &quot; was last updated &quot; + page.getLastUpdated());
		 * </code></pre>
		 * 
		 * @returns the date the page was last updated with non-content changes
		 */
		getLastUpdated(): Date
		/**
		 * Get the list items for the list. Only valid for list pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * var page = site.getChildByName(&quot;listpage&quot;);
		 * // Only valid on List pages. Check for the type like so:
		 * //     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
		 * var items = page.getListItems();
		 * 
		 * for(var i in items) {
		 *   Logger.log(items[i].getValueByName(&quot;Status&quot;));
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/list-item.html'>ListItem</a></code> instances
		 */
		getListItems(): SitesApp.ListItem[]
		/**
		 * Get the list items for the list. Only valid for list pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * var page = site.getChildByName(&quot;listpage&quot;);
		 * // Only valid on List pages. Check for the type like so:
		 * //     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
		 * // Returns only one item
		 * var items = page.getListItems({ start:0, max: 1 });
		 * 
		 * for(var i in items) {
		 *   Logger.log(items[i].getValueByName(&quot;Status&quot;));
		 * }
		 * </code></pre>
		 * 
		 * @param optOptions - A JavaScript object of optional parameters
		 * 
		 * @returns an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/list-item.html'>ListItem</a></code> instances
		 */
		getListItems(
			optOptions: object
		): SitesApp.ListItem[]

		/**
		 * Return the page's name.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * Logger.log(page.getName());
		 * </code></pre>
		 * 
		 * @returns the name of this page
		 */
		getName(): string
		/**
		 * Deprecated. Replaced with getName for consistency.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * Logger.log(page.getPageName());
		 * </code></pre>
		 * 
		 * @returns the name of this page
		 */
		getPageName(): string
		/**
		 * Return the type of this page as a SitesApp.PageType enum.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * var pageType = page.getPageType();
		 * if(pageType == SitesApp.PageType.WEB_PAGE) {
		 *    Logger.log(page.getName() + &quot; is a Web Page&quot;);
		 * }
		 * </code></pre>
		 * 
		 * @returns a PageType enum telling whether this is a Web, List, Announcement or File Cabinet Page
		 */
		getPageType(): SitesApp.PageType
		/**
		 * Return the parent of this page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * Logger.log(page.getName() + &quot; parent: &quot; + page.getParent().getName());
		 * </code></pre>
		 * 
		 * @returns the parent page of this page
		 */
		getParent(): SitesApp.Page
		/**
		 * Deprecated. Returns the gData feed link of this page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * Logger.log(page.getSelfLink());
		 * </code></pre>
		 * 
		 * @returns the gData feed link
		 */
		getSelfLink(): string
		/**
		 * Returns the plain-text page content.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * Logger.log(page.getName() + &quot; content: &quot; + page.getTextContent());
		 * </code></pre>
		 * 
		 * @returns the plain-text content of the page
		 */
		getTextContent(): string
		/**
		 * Return the page's title.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * Logger.log(page.getTitle());
		 * </code></pre>
		 * 
		 * @returns the title of this page
		 */
		getTitle(): string
		/**
		 * Get the url of the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * Logger.log(page.getUrl());
		 * </code></pre>
		 * 
		 * @returns the url of the page
		 */
		getUrl(): string
		/**
		 * Returns whether a page has been deleted.
		 * 
		 * @returns whether the page has been deleted
		 */
		isDeleted(): Boolean
		/**
		 * Returns whether this page is a copyable template.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var firstTemplate = site.getTemplates()[0];
		 * if(firstTemplate.isTemplate()) {
		 *   Logger.log(&quot;This will always return true&quot;);
		 * }
		 * </code></pre>
		 * 
		 * @returns whether this page is a template
		 */
		isTemplate(): Boolean
		/**
		 * Publish this page as a copyable template.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * 
		 * // Turn this page into a publishable template
		 * page.publishedAsTemplate(&quot;template-name&quot;);
		 * </code></pre>
		 * 
		 * @param name - The name of the new template
		 * 
		 * @returns the newly published template
		 */
		publishAsTemplate(
			name: string
		): SitesApp.Page
		/**
		 * Gets an array of descendant pages that match a search query, up to a limit of 200 pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var matches = site.search(&quot;targetText&quot;);
		 * 
		 * for(var i in matches) {
		 *   Logger.log(matches[i].getName());
		 * }
		 * </code></pre>
		 * 
		 * @param query - the full text search query to match
		 * 
		 * @returns an array of direct and indirect child pages of the given type
		 */
		search(
			query: string
		): SitesApp.Page[]
		/**
		 * Gets an array of descendant pages that match a search query, with optional advanced arguments.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var childPages = site.getChildren({
		 *   type: SitesApp.PageType.WEB_PAGE,
		 *   start: 0,
		 *   max: 25,
		 *   includeDrafts: false,
		 *   includeDeleted: true,
		 *   search: &quot;target&quot;
		 * });
		 * 
		 * for(var i in childPages) {
		 *   Logger.log(childPages[i].getName());
		 * }
		 * </code></pre>
		 * 
		 * @param query - the full text search query to match
		 * @param options - JavaScript object fields defined in the Advanced Arguments section below
		 * 
		 * @returns an array of direct and indirect child pages of the given type
		 */
		search(
			query: string,
			options: object
		): SitesApp.Page[]

		/**
		 * Set the HTML content of the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * page.setHtmlContent(&quot;&lt;h1&gt;New Page Content&lt;/h1&gt;&quot;);
		 * </code></pre>
		 * 
		 * @param html - the new content
		 * 
		 * @returns this Page for chaining
		 */
		setHtmlContent(
			html: string
		): SitesApp.Page
		/**
		 * Sets whether the page is in draft mode. Only valid for announcements.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * 
		 * // Take the page out of draft mode
		 * page.setIsDraft(false);
		 * </code></pre>
		 * 
		 * @param draft - the new status
		 * 
		 * @returns this Page for chaining
		 */
		setIsDraft(
			draft: Boolean
		): SitesApp.Page
		/**
		 * Set this page's name.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * page.setName(&quot;new-name&quot;);
		 * </code></pre>
		 * 
		 * @param name - the new name
		 * 
		 * @returns this Page for chaining
		 */
		setName(
			name: string
		): SitesApp.Page
		/**
		 * Set the parent of this page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var child = site.getChildByName(&quot;childToBeMoved&quot;);
		 * var parent = site.getChildByName(&quot;newParent&quot;);
		 * child.setParent(parent);
		 * </code></pre>
		 * 
		 * @param parent - the new parent
		 * 
		 * @returns this Page for chaining
		 */
		setParent(
			parent: SitesApp.Page
		): SitesApp.Page
		/**
		 * Set the page's title.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * page.setTitle(&quot;New Title&quot;);
		 * </code></pre>
		 * 
		 * @param title - the new title
		 * 
		 * @returns this Page for chaining
		 */
		setTitle(
			title: string
		): SitesApp.Page

	}

	enum PageType {
		ANNOUNCEMENT = "ANNOUNCEMENT",
		ANNOUNCEMENTS_PAGE = "ANNOUNCEMENTS_PAGE",
		FILE_CABINET_PAGE = "FILE_CABINET_PAGE",
		LIST_PAGE = "LIST_PAGE",
		WEB_PAGE = "WEB_PAGE",
	}

	class Site {
		private constructor();

		/**
		 * Add a new collaborator to the site
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * site.addCollaborator(&quot;eric@example.com&quot;);
		 * </code></pre>
		 * 
		 * @param email - The email of the user to add as a collaborator
		 * 
		 * @returns this site for chaining
		 */
		addCollaborator(
			email: string
		): SitesApp.Site
		/**
		 * Add a new collaborator to the website
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var currentUser = Session.getActiveUser();
		 * site.addCollaborator(currentUser);
		 * </code></pre>
		 * 
		 * @param user - The user to add as a collaborator
		 * 
		 * @returns this site for chaining
		 */
		addCollaborator(
			user: User
		): SitesApp.Site

		/**
		 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>. If the user was already
		 * on the list of viewers, this method promotes the user out of the list of viewers.
		 * 
		 * @param emailAddress - The email address of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>, for chaining.
		 */
		addEditor(
			emailAddress: string
		): SitesApp.Site
		/**
		 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>. If the user was already
		 * on the list of viewers, this method promotes the user out of the list of viewers.
		 * 
		 * @param user - A representation of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>, for chaining.
		 */
		addEditor(
			user: User
		): SitesApp.Site

		/**
		 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>. If any of the
		 * users were already on the list of viewers, this method promotes them out of the list of
		 * viewers.
		 * 
		 * @param emailAddresses - An array of email addresses of the users to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>, for chaining.
		 */
		addEditors(
			emailAddresses: string[]
		): SitesApp.Site
		/**
		 * Add a new owner to the website
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * site.addOwner(&quot;eric@example.com&quot;);
		 * </code></pre>
		 * 
		 * @param email - The email of the user to add as an owner
		 * 
		 * @returns this site for chaining
		 */
		addOwner(
			email: string
		): SitesApp.Site
		/**
		 * Add a new owner to the website
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var currentUser = Session.getActiveUser();
		 * site.addOwner(currentUser);
		 * </code></pre>
		 * 
		 * @param user - The user to add as an owner
		 * 
		 * @returns this site for chaining
		 */
		addOwner(
			user: User
		): SitesApp.Site

		/**
		 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>. If the user was already
		 * on the list of editors, this method has no effect.
		 * 
		 * @param emailAddress - The email address of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>, for chaining.
		 */
		addViewer(
			emailAddress: string
		): SitesApp.Site
		/**
		 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>. If the user was already
		 * on the list of editors, this method has no effect.
		 * 
		 * @param user - A representation of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>, for chaining.
		 */
		addViewer(
			user: User
		): SitesApp.Site

		/**
		 * Adds the given array of users to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>. If any of the
		 * users were already on the list of editors, this method has no effect for them.
		 * 
		 * @param emailAddresses - An array of email addresses of the users to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>, for chaining.
		 */
		addViewers(
			emailAddresses: string[]
		): SitesApp.Site
		/**
		 * Create a new Announcement
		 * 
		 * @param title - The title of the Announcement page to create
		 * @param html - The HTML body of the page
		 * @param parent - The Parent page
		 * 
		 * @returns The created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
		 */
		createAnnouncement(
			title: string,
			html: string,
			parent: SitesApp.Page
		): SitesApp.Page
		/**
		 * Create a new announcements page. Note that a parent site or page cannot have more than 500
		 * child pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This method can be called from both a Site instance
		 * // as well as a Page instance
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * 
		 * site.createAnnouncementsPage(&quot;New Announcement&quot;,
		 *                              &quot;new-announcement&quot;,
		 *                              &quot;&lt;h1&gt;Your announcement goes here&lt;/h1&gt;&quot;);
		 * 
		 * page.createAnnouncementsPage(&quot;New Announcement&quot;,
		 *                              &quot;new-announcement-child&quot;,
		 *                              &quot;&lt;h1&gt;Your announcement goes here&lt;/h1&gt;&quot;);
		 * </code></pre>
		 * 
		 * @param title - the page title
		 * @param name - the page name
		 * @param html - the page content
		 * 
		 * @returns the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
		 */
		createAnnouncementsPage(
			title: string,
			name: string,
			html: string
		): SitesApp.Page
		/**
		 * Deprecated. Replaced with createComment on <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>.
		 * 
		 * <p>Create a new Comment.
		 * 
		 * @param inReplyTo - a GData feed url - meaningless and broken
		 * @param html - the comment content
		 * @param parent - the parent the comments shows up on
		 * 
		 * @returns the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/comment.html'>Comment</a></code>
		 */
		createComment(
			inReplyTo: string,
			html: string,
			parent: SitesApp.Page
		): SitesApp.Comment
		/**
		 * Create a new file-cabinet page. Note that a parent site or page cannot have more than 500 child
		 * pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This method can be called from either a site or a page.
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * 
		 * site.createFileCabinetPage(&quot;New File Cabinet&quot;,
		 *                            &quot;new-file-cabinet&quot;,
		 *                            &quot;&lt;h1&gt;Your HTML here&lt;/h1&gt;&quot;);
		 * 
		 * page.createFileCabinetPage(&quot;New File Cabinet&quot;,
		 *                              &quot;new-file-cabinet-child&quot;,
		 *                              &quot;&lt;h1&gt;Your HTML here&lt;/h1&gt;&quot;);
		 * </code></pre>
		 * 
		 * @param title - the page title
		 * @param name - the page name
		 * @param html - the page content
		 * 
		 * @returns The newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
		 */
		createFileCabinetPage(
			title: string,
			name: string,
			html: string
		): SitesApp.Page
		/**
		 * Deprecated. Replaced by createListItem on <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>.
		 * 
		 * <p>Create a new ListItem.
		 * 
		 * @param html - the item content - meaningless and broken.
		 * @param columnNames - the names of the columns, which are unnecessary
		 * @param values - the column values
		 * @param parent - the ListPage parent
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/list-item.html'>ListItem</a></code> for chaining.
		 */
		createListItem(
			html: string,
			columnNames: string[],
			values: string[],
			parent: SitesApp.Page
		): SitesApp.ListItem
		/**
		 * Create a new list page. Note that a parent site or page cannot have more than 500 child pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This method can be called from either a site or a page.
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * 
		 * site.createListPage(&quot;New List Page&quot;,
		 *                     &quot;new-list-page&quot;,
		 *                     &quot;&lt;h1&gt;Your List Page HTML here&lt;/h1&gt;&quot;,
		 *                     [ &quot;col1&quot;, &quot;col2&quot; ]);
		 * 
		 * page.createListPage(&quot;New List Page&quot;,
		 *                     &quot;new-list-page-child&quot;,
		 *                     &quot;&lt;h1&gt;Your List Page HTML here&lt;/h1&gt;&quot;,
		 *                     [ &quot;col1&quot;, &quot;col2&quot; ]);
		 * </code></pre>
		 * 
		 * @param title - the page title
		 * @param name - the page name
		 * @param html - the page content
		 * @param columnNames - the column names used for the list
		 * 
		 * @returns The newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
		 */
		createListPage(
			title: string,
			name: string,
			html: string,
			columnNames: string[]
		): SitesApp.Page
		/**
		 * Create a new page from a template. Note that a parent site or page cannot have more than 500
		 * child pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This method can be called from either a site or a page.
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var template = site.getTemplates()[0];
		 * 
		 * // If an invalid template is passed, this will throw an &quot;Invalid Argument&quot; error.
		 * site.createPageFromTemplate(&quot;ClonedPage&quot;, &quot;cloned-page&quot;, template);
		 * </code></pre>
		 * 
		 * @param title - the page title
		 * @param name - the page name
		 * @param template - the template page
		 * 
		 * @returns the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
		 */
		createPageFromTemplate(
			title: string,
			name: string,
			template: SitesApp.Page
		): SitesApp.Page
		/**
		 * Deprecated. Replaced by createWebAttachment on <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>.
		 * 
		 * <p>Create a new Web Attachment.
		 * 
		 * @param title - the attachment title
		 * @param url - the url of the attachment
		 * @param parent - the parent page
		 * 
		 * @returns this Attachment for chaining.
		 */
		createWebAttachment(
			title: string,
			url: string,
			parent: SitesApp.Page
		): SitesApp.Attachment
		/**
		 * Create a new web page. Note that a parent site or page cannot have more than 500 child pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This method can be called from either a site or a page.
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var page = site.getChildren()[0];
		 * 
		 * site.createAnnouncementsPage(&quot;New Announcement&quot;,
		 *                              &quot;new-announcement&quot;,
		 *                              &quot;&lt;h1&gt;Your announcement goes here&lt;/h1&gt;&quot;);
		 * 
		 * page.createAnnouncementsPage(&quot;New Announcement&quot;,
		 *                              &quot;new-announcement-child&quot;,
		 *                              &quot;&lt;h1&gt;Your announcement goes here&lt;/h1&gt;&quot;);
		 * </code></pre>
		 * 
		 * @param title - the page title
		 * @param name - the page name
		 * @param html - the page content
		 * 
		 * @returns The newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code>
		 */
		createWebPage(
			title: string,
			name: string,
			html: string
		): SitesApp.Page
		/**
		 * Deletes this site.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;);
		 * site.deleteSite();
		 * </code></pre>
		 */
		deleteSite(): void
		/**
		 * Gets an array of descendant pages (direct and indirect), up to a limit of 200 pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var pages = site.getAllDescendants();
		 * </code></pre>
		 * 
		 * @returns an array of direct and indirect child pages
		 */
		getAllDescendants(): SitesApp.Page[]
		/**
		 * Gets an array of descendant pages, with optional advanced arguments.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var descendants = site.getAllDescendants({
		 *   type: SitesApp.PageType.WEB_PAGE,
		 *   start: 0,
		 *   max: 25,
		 *   includeDrafts: false,
		 *   includeDeleted: true,
		 *   search: &quot;target&quot;
		 * });
		 * 
		 * for(var i in descendants) {
		 *   Logger.log(descendants[i].getName());
		 * }
		 * </code></pre>
		 * 
		 * @param options - JavaScript object fields defined in the Advanced Arguments section below
		 * 
		 * @returns an array of direct and indirect child pages of the given type
		 */
		getAllDescendants(
			options: object
		): SitesApp.Page[]

		/**
		 * Retrieves a list of announcements for the given Google Site.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * var pages = site.getAnnouncements();
		 * for(var i in pages) {
		 *   Logger.log(pages[i].getTitle());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of announcement @link Page} instances
		 */
		getAnnouncements(): SitesApp.Page[]
		/**
		 * Retrieves a list of announcements pages for the given Google Site.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * var pages = site.getAnnouncementsPages();
		 * for(var i in pages) {
		 *   Logger.log(pages[i].getTitle());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code> instances
		 */
		getAnnouncementsPages(): SitesApp.Page[]
		/**
		 * Retrieves a list of attachments for the given Google Site.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * var attachments = site.getAttachments();
		 * for(var i in attachments) {
		 *   // Only hosted attachments have content types
		 *   Logger.log(attachments[i].getContentType());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/attachment.html'>Attachment</a></code> instances
		 */
		getAttachments(): SitesApp.Attachment[]
		/**
		 * Gets a particular child page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var pages = site.getChildByName(&quot;childPage&quot;);
		 * </code></pre>
		 * 
		 * @param name - the child page name
		 * 
		 * @returns the child page
		 */
		getChildByName(
			name: string
		): SitesApp.Page
		/**
		 * Gets an array of child pages, up to a limit of 200 pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var pages = site.getChildren();
		 * </code></pre>
		 * 
		 * @returns an array of direct child pages
		 */
		getChildren(): SitesApp.Page[]
		/**
		 * Gets an array of child pages, with optional advanced arguments.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var childPages = site.getChildren({
		 *   type: SitesApp.PageType.WEB_PAGE,
		 *   start: 0,
		 *   max: 25,
		 *   includeDrafts: false,
		 *   includeDeleted: true,
		 *   search: &quot;target&quot;
		 * });
		 * 
		 * for(var i in childPages) {
		 *   Logger.log(childPages[i].getName());
		 * }
		 * </code></pre>
		 * 
		 * @param options - JavaScript object fields defined in the Advanced Arguments section below
		 * 
		 * @returns an array of direct child pages of the given type
		 */
		getChildren(
			options: object
		): SitesApp.Page[]

		/**
		 * Retrieves list of collaborators for the site
		 * 
		 * <pre class="prettyprint"><code>
		 * var collaborators = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getCollaborators();
		 * for(var i in collaborators) {
		 *   Logger.log(collaborators[i].getEmail())
		 * }
		 * </code></pre>
		 * 
		 * @returns an array containing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/../base/user.html'>User</a></code> instances representing collaborators
		 */
		getCollaborators(): User[]
		/**
		 * Retrieves a list of comments for the given Google Site.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * var comments = site.getComments();
		 * for(var i in comments) {
		 *   Logger.log(comments[i].getContent());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/comment.html'>Comment</a></code> instances
		 */
		getComments(): SitesApp.Comment[]
		/**
		 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>.
		 * 
		 * @returns An array of users with edit permission.
		 */
		getEditors(): User[]
		/**
		 * Retrieves a list of File Cabinet pages for the given Google Site.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * var pages = site.getFileCabinetPages();
		 * for(var i in pages) {
		 *   Logger.log(pages[i].getTitle());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code> instances
		 */
		getFileCabinetPages(): SitesApp.Page[]
		/**
		 * Retrieves a list of site List items for the given Google Site.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * var listItems = site.getListItems();
		 * for(var i in listItems) {
		 *   Logger.log(listItems[i].getLastUpdated());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/list-item.html'>ListItem</a></code> instances
		 */
		getListItems(): SitesApp.ListItem[]
		/**
		 * Retrieves a list of site List pages for the given Google Site.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * var pages = site.getListPages();
		 * for(var i in pages) {
		 *   Logger.log(pages[i].getTitle());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code> instances
		 */
		getListPages(): SitesApp.Page[]
		/**
		 * Return the name of the site
		 * 
		 * <pre class="prettyprint"><code>
		 * var name = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getName();
		 * </code></pre>
		 * 
		 * @returns the name of this Site instance
		 */
		getName(): string
		/**
		 * Retrieves list of owners for the site
		 * 
		 * <pre class="prettyprint"><code>
		 * var owners = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getOwners();
		 * for(var i in owners) {
		 *   Logger.log(owners[i].getEmail())
		 * }
		 * </code></pre>
		 * 
		 * @returns an array containing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/../base/user.html'>User</a></code> instances representing owners
		 */
		getOwners(): User[]
		/**
		 * Retrieves the feed url of this Site.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;);
		 * var url = site.getSelfLink();
		 * </code></pre>
		 * 
		 * @returns the url of this Site's feed
		 */
		getSelfLink(): string
		/**
		 * Return the siteName of the site
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;);
		 * var url = site.getSelfLink();
		 * </code></pre>
		 * 
		 * @returns the siteName of the site
		 */
		getSiteName(): string
		/**
		 * Return the summary of the web site
		 * 
		 * <pre class="prettyprint"><code>
		 * var summary = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getSummary();
		 * </code></pre>
		 * 
		 * @returns the summary of this site
		 */
		getSummary(): string
		/**
		 * Returns all template pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * var templates = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getTemplates();
		 * for(var i in templates) {
		 *   Logger.log(templates[i].getName())
		 * }
		 * </code></pre>
		 * 
		 * @returns an array containing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code> instances representing templates
		 */
		getTemplates(): SitesApp.Page[]
		/**
		 * Gets the theme of the site
		 * 
		 * <pre class="prettyprint"><code>
		 * var theme = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getTheme();
		 * </code></pre>
		 * 
		 * @returns the theme of this site
		 */
		getTheme(): string
		/**
		 * Return the title of the site
		 * 
		 * <pre class="prettyprint"><code>
		 * var title = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getTitle();
		 * </code></pre>
		 * 
		 * @returns the title of this site
		 */
		getTitle(): string
		/**
		 * Retrieves the url of this Site.
		 * 
		 * <pre class="prettyprint"><code>
		 * var url = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;).getUrl();
		 * </code></pre>
		 * 
		 * @returns the url of this Site instance
		 */
		getUrl(): string
		/**
		 * Gets the list of viewers and commenters for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>.
		 * 
		 * @returns An array of users with view or comment permission.
		 */
		getViewers(): User[]
		/**
		 * Retrieves a list of web attachments for the given Google Site.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * var attachments = site.getWebAttachments();
		 * for(var i in attachments) {
		 *   // Only web attachments have URLs
		 *   Logger.log(attachments[i].getUrl());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/attachment.html'>Attachment</a></code> instances
		 */
		getWebAttachments(): SitesApp.Attachment[]
		/**
		 * Retrieves a list of web pages for the given Google Site.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * 
		 * var pages = site.getWebPages();
		 * for(var i in pages) {
		 *   Logger.log(pages[i].getTitle());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/page.html'>Page</a></code> instances
		 */
		getWebPages(): SitesApp.Page[]
		/**
		 * Removes a collaborator from the site by user email
		 * 
		 * <pre class="prettyprint"><code>
		 * // This snippet removes the user with the given email from the collaborators list
		 * var site = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;);
		 * site.removeCollaborator(&quot;eric@example.com&quot;);
		 * </code></pre>
		 * 
		 * @param email - The email of the user to remove from the collaborators
		 * 
		 * @returns the site instance for method chaining
		 */
		removeCollaborator(
			email: string
		): SitesApp.Site
		/**
		 * Removes a collaborator from the site
		 * 
		 * <pre class="prettyprint"><code>
		 * // This snippet removes the current user from the list of collaborators
		 * var site = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;);
		 * site.removeCollaborator(Session.getActiveUser());
		 * </code></pre>
		 * 
		 * @param user - A user to remove from the list of collaborators
		 * 
		 * @returns the site instance for method chaining
		 */
		removeCollaborator(
			user: User
		): SitesApp.Site

		/**
		 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>. This method doesn't
		 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> if they belong to a class of users who have
		 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> is shared with the user's entire
		 * domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of viewers.
		 * 
		 * @param emailAddress - The email address of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>, for chaining.
		 */
		removeEditor(
			emailAddress: string
		): SitesApp.Site
		/**
		 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>. This method doesn't
		 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> if they belong to a class of users who have
		 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> is shared with the user's entire
		 * domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of viewers.
		 * 
		 * @param user - A representation of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>, for chaining.
		 */
		removeEditor(
			user: User
		): SitesApp.Site

		/**
		 * Removes owner from the site by user email
		 * 
		 * <pre class="prettyprint"><code>
		 * // This snippet removes the user with the given email from the owners list
		 * var site = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;);
		 * site.removeOwner(&quot;eric@example.com&quot;);
		 * </code></pre>
		 * 
		 * @param email - The email of the user to remove from the owners
		 * 
		 * @returns the site instance for method chaining
		 */
		removeOwner(
			email: string
		): SitesApp.Site
		/**
		 * Removes owner from the site
		 * 
		 * <pre class="prettyprint"><code>
		 * // This snippet removes the current user from the list of owners
		 * var site = SitesApp.getSite(&#39;example.com&#39;, &#39;mysite&#39;);
		 * site.removeOwner(Session.getActiveUser());
		 * </code></pre>
		 * 
		 * @param user - A user to remove from the list of owners
		 * 
		 * @returns the site instance for method chaining
		 */
		removeOwner(
			user: User
		): SitesApp.Site

		/**
		 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>. This
		 * method has no effect if the user is an editor, not a viewer or commenter. This method also
		 * doesn't block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> if they belong to a class of users who
		 * have general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> is shared with the user's
		 * entire domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of editors.
		 * 
		 * @param emailAddress - The email address of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> for chaining.
		 */
		removeViewer(
			emailAddress: string
		): SitesApp.Site
		/**
		 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>. This
		 * method has no effect if the user is an editor, not a viewer. This method also doesn't block
		 * users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> if they belong to a class of users who have general
		 * access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> is shared with the user's entire domain, or
		 * if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of editors.
		 * 
		 * @param user - A representation of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code> for chaining.
		 */
		removeViewer(
			user: User
		): SitesApp.Site

		/**
		 * Gets an array of descendant pages that match a search query, up to a limit of 200 pages.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var matches = site.search(&quot;targetText&quot;);
		 * 
		 * for(var i in matches) {
		 *   Logger.log(matches[i].getName());
		 * }
		 * </code></pre>
		 * 
		 * @param query - the full text search query to match
		 * 
		 * @returns an array of direct and indirect child pages of the given type
		 */
		search(
			query: string
		): SitesApp.Page[]
		/**
		 * Gets an array of descendant pages that match a search query, with optional advanced arguments.
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * var childPages = site.getChildren({
		 *   type: SitesApp.PageType.WEB_PAGE,
		 *   start: 0,
		 *   max: 25,
		 *   includeDrafts: false,
		 *   includeDeleted: true,
		 *   search: &quot;target&quot;
		 * });
		 * 
		 * for(var i in childPages) {
		 *   Logger.log(childPages[i].getName());
		 * }
		 * </code></pre>
		 * 
		 * @param query - the full text search query to match
		 * @param options - JavaScript object fields defined in the Advanced Arguments section below
		 * 
		 * @returns an array of direct and indirect child pages of the given type
		 */
		search(
			query: string,
			options: object
		): SitesApp.Page[]

		/**
		 * Set the summary of the web site
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * // All of the setter methods return the site instance so setters
		 * // can be chained
		 * site.setTitle(&quot;My Site&quot;)
		 *     .setSummary(&quot;This is my site&quot;)
		 *     .setTheme(&quot;simple&quot;);
		 * </code></pre>
		 * 
		 * @param summary - A string summary describing the site
		 * 
		 * @returns the site for method chaining
		 */
		setSummary(
			summary: string
		): SitesApp.Site
		/**
		 * Sets the theme of the site
		 * 
		 * <p>Theme must be a valid theme string. For an exhaustive list, write a test method and pass an
		 * invalid value to setTheme(). The script will throw a Service error and return an exhaustive
		 * list of available themes. The list of available themes is also available under Manage
		 * Site->Themes. Theme name strings are generally the same as the theme name on the Themes page in
		 * lower cases with spaces and special characters removed. For example, the string for "Terra:
		 * Water" would be "terrawater".
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * // All of the setter methods return the site instance so setters
		 * // can be chained
		 * site.setTitle(&quot;My Site&quot;)
		 *     .setSummary(&quot;This is my site&quot;)
		 *     .setTheme(&quot;simple&quot;);
		 * </code></pre>
		 * 
		 * @param theme - a string name for the theme to set for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/sites/site.html'>Site</a></code>
		 * 
		 * @returns the site for method chaining
		 */
		setTheme(
			theme: string
		): SitesApp.Site
		/**
		 * Set the title of the site
		 * 
		 * <pre class="prettyprint"><code>
		 * var site = SitesApp.getSite(&quot;example.com&quot;, &quot;mysite&quot;);
		 * // All of the setter methods return the site instance so setters
		 * // can be chained
		 * site.setTitle(&quot;My Site&quot;)
		 *     .setSummary(&quot;This is my site&quot;)
		 *     .setTheme(&quot;simple&quot;);
		 * </code></pre>
		 * 
		 * @param title - the new title of the site
		 * 
		 * @returns the site for method chaining
		 */
		setTitle(
			title: string
		): SitesApp.Site

	}

}
