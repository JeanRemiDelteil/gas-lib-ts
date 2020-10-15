/** Module: DocumentApp */

type DocumentApp = typeof DocumentApp;
declare namespace DocumentApp {

	/**
	 * Creates and returns a new document.
	 * 
	 * <pre class="prettyprint">
	 * // Create and open a new document.
	 * var doc = DocumentApp.create('Document Name');
	 * </pre>
	 * 
	 * @param name - the new document's name
	 * 
	 * @returns the new document instance
	 */
	function create(
		name: string
	): DocumentApp.Document
	/**
	 * Returns the document to which the script is <a
	 * href="/apps-script/scripts_containers">container-bound</a>. To interact with document to which
	 * the script is not container-bound, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document-app.html#openById(String)'>openById(id)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document-app.html#openByUrl(String)'>openByUrl(url)</a></code>
	 * instead.
	 * 
	 * <pre class="prettyprint">
	 * // Get the document to which this script is bound.
	 * var doc = DocumentApp.getActiveDocument();
	 * </pre>
	 * 
	 * @returns the document instance
	 */
	function getActiveDocument(): DocumentApp.Document
	/**
	 * Returns an instance of the document's user-interface environment that allows the script to add
	 * features like menus, dialogs, and sidebars. A script can only interact with the UI for the
	 * current instance of an open document, and only if the script is <a
	 * href="/apps-script/scripts_containers">bound</a> to the document. For more information, see the
	 * guides to <a href="/apps-script/guides/menus">menus</a> and <a
	 * href="/apps-script/guides/dialogs">dialogs and sidebars</a>.
	 * 
	 * <pre class="prettyprint">
	 * // Add a custom menu to the active document, including a separator and a sub-menu.
	 * function onOpen(e) {
	 *   DocumentApp.getUi()
	 *       .createMenu('My Menu')
	 *       .addItem('My menu item', 'myFunction')
	 *       .addSeparator()
	 *       .addSubMenu(DocumentApp.getUi().createMenu('My sub-menu')
	 *           .addItem('One sub-menu item', 'mySecondFunction')
	 *           .addItem('Another sub-menu item', 'myThirdFunction'))
	 *       .addToUi();
	 * }
	 * </pre>
	 * 
	 * @returns an instance of this document's user-interface environment
	 */
	function getUi(): Ui
	/**
	 * Returns the document with the specified ID. If the script is container-bound to the document,
	 * use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document-app.html#getActiveDocument()'>getActiveDocument()</a></code> instead.
	 * 
	 * <pre class="prettyprint">
	 * // Open a document by ID.
	 * var doc = DocumentApp.openById('DOCUMENT_ID_GOES_HERE');
	 * </pre>
	 * 
	 * @param id - the ID of the document to open
	 * 
	 * @returns the document instance
	 */
	function openById(
		id: string
	): DocumentApp.Document
	/**
	 * Opens and returns the document with the specified URL. If the script is container-bound to the
	 * document, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document-app.html#getActiveDocument()'>getActiveDocument()</a></code> instead.
	 * 
	 * <pre class="prettyprint">
	 * // Open a document by URL.
	 * var doc = DocumentApp.openByUrl(
	 *     'https://docs.google.com/document/d/1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3/edit');
	 * </pre>
	 * 
	 * @param url - the URL of the document to open
	 * 
	 * @returns the document instance
	 */
	function openByUrl(
		url: string
	): DocumentApp.Document

	enum Attribute {
		/**
		 * The background color of an element (Paragraph, Table, etc) or document.
		 */
		BACKGROUND_COLOR = "BACKGROUND_COLOR",
		/**
		 * The font weight setting, for rich text.
		 */
		BOLD = "BOLD",
		/**
		 * The border color, for table elements.
		 */
		BORDER_COLOR = "BORDER_COLOR",
		/**
		 * The border width in points, for table elements.
		 */
		BORDER_WIDTH = "BORDER_WIDTH",
		/**
		 * The code contents, for equation elements.
		 */
		CODE = "CODE",
		/**
		 * The font family setting, for rich text.
		 */
		FONT_FAMILY = "FONT_FAMILY",
		/**
		 * The font size setting in points, for rich text.
		 */
		FONT_SIZE = "FONT_SIZE",
		/**
		 * The foreground color setting, for rich text.
		 */
		FOREGROUND_COLOR = "FOREGROUND_COLOR",
		/**
		 * The glyph type, for list item elements.
		 */
		GLYPH_TYPE = "GLYPH_TYPE",
		/**
		 * The heading type, for paragraph elements (for example, <code>DocumentApp.ParagraphHeading.HEADING1</code>).
		 */
		HEADING = "HEADING",
		/**
		 * The height setting, for image elements.
		 */
		HEIGHT = "HEIGHT",
		/**
		 * The horizontal alignment, for paragraph elements (for example, <code>DocumentApp.HorizontalAlignment.CENTER</code>).
		 */
		HORIZONTAL_ALIGNMENT = "HORIZONTAL_ALIGNMENT",
		/**
		 * The end indentation setting in points, for paragraph elements.
		 */
		INDENT_END = "INDENT_END",
		/**
		 * The first line indentation setting in points, for paragraph elements.
		 */
		INDENT_FIRST_LINE = "INDENT_FIRST_LINE",
		/**
		 * The start indentation setting in points, for paragraph elements.
		 */
		INDENT_START = "INDENT_START",
		/**
		 * The font style setting, for rich text.
		 */
		ITALIC = "ITALIC",
		/**
		 * The text direction setting, for rich text.
		 */
		LEFT_TO_RIGHT = "LEFT_TO_RIGHT",
		/**
		 * The line spacing setting as a multiplier, for paragraph elements.
		 */
		LINE_SPACING = "LINE_SPACING",
		/**
		 * The link URL, for rich text. The default link style (foreground color, underline) is
		 * automatically applied.
		 */
		LINK_URL = "LINK_URL",
		/**
		 * The ID of the encompassing list, for list item elements.
		 */
		LIST_ID = "LIST_ID",
		/**
		 * The bottom margin setting in points, for paragraph elements.
		 */
		MARGIN_BOTTOM = "MARGIN_BOTTOM",
		/**
		 * The left margin setting in points, for paragraph elements.
		 */
		MARGIN_LEFT = "MARGIN_LEFT",
		/**
		 * The right margin setting in points, for paragraph elements.
		 */
		MARGIN_RIGHT = "MARGIN_RIGHT",
		/**
		 * The top margin setting in points, for paragraph elements.
		 */
		MARGIN_TOP = "MARGIN_TOP",
		/**
		 * The minimum height setting in points, for table row elements.
		 */
		MINIMUM_HEIGHT = "MINIMUM_HEIGHT",
		/**
		 * The item nesting level, for list item elements.
		 */
		NESTING_LEVEL = "NESTING_LEVEL",
		/**
		 * The bottom padding setting in points, for table cell elements.
		 */
		PADDING_BOTTOM = "PADDING_BOTTOM",
		/**
		 * The left padding setting in points, for table cell elements.
		 */
		PADDING_LEFT = "PADDING_LEFT",
		/**
		 * The right padding setting in points, for table cell elements.
		 */
		PADDING_RIGHT = "PADDING_RIGHT",
		/**
		 * The top padding setting in points, for table cell elements.
		 */
		PADDING_TOP = "PADDING_TOP",
		/**
		 * The page height setting in points, for documents.
		 */
		PAGE_HEIGHT = "PAGE_HEIGHT",
		/**
		 * The page width setting in points, for documents.
		 */
		PAGE_WIDTH = "PAGE_WIDTH",
		/**
		 * The bottom spacing setting in points, for paragraph elements.
		 */
		SPACING_AFTER = "SPACING_AFTER",
		/**
		 * The top spacing setting in points, for paragraph elements.
		 */
		SPACING_BEFORE = "SPACING_BEFORE",
		/**
		 * The strike-through setting, for rich text.
		 */
		STRIKETHROUGH = "STRIKETHROUGH",
		/**
		 * The underline setting, for rich text.
		 */
		UNDERLINE = "UNDERLINE",
		/**
		 * The vertical alignment setting, for table cell elements.
		 */
		VERTICAL_ALIGNMENT = "VERTICAL_ALIGNMENT",
		/**
		 * The width setting, for table cell and image elements.
		 */
		WIDTH = "WIDTH",
	}

	class Body {
		private constructor();

		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @returns the new horizontal rule
		 */
		appendHorizontalRule(): DocumentApp.HorizontalRule
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob.
		 * 
		 * <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param image - the image data
		 * 
		 * @returns the appended image
		 */
		appendImage(
			image: BlobSource
		): DocumentApp.InlineImage
		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * <p>Use this version of <code>appendImage</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
		 * 
		 * @param image - the image data
		 * 
		 * @returns the appended image
		 */
		appendImage(
			image: DocumentApp.InlineImage
		): DocumentApp.InlineImage

		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
		 * 
		 * <p>Use this version of <code>appendListItem</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
		 * 
		 * @param listItem - the list item to append
		 * 
		 * @returns the appended list item
		 */
		appendListItem(
			listItem: DocumentApp.ListItem
		): DocumentApp.ListItem
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> containing the specified text contents.
		 * 
		 * <p>Consecutive list items are added as part of the same list.
		 * 
		 * @param text - the list item's text contents
		 * 
		 * @returns the new list item
		 */
		appendListItem(
			text: string
		): DocumentApp.ListItem

		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @returns the new page break
		 */
		appendPageBreak(): DocumentApp.PageBreak
		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * <p>Use this version of <code>appendPageBreak</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.
		 * 
		 * @param pageBreak - the page break to append
		 * 
		 * @returns the appended page break
		 */
		appendPageBreak(
			pageBreak: DocumentApp.PageBreak
		): DocumentApp.PageBreak

		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * <p>Use this version of <code>appendParagraph</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param paragraph - the paragraph to append
		 * 
		 * @returns the appended paragraph
		 */
		appendParagraph(
			paragraph: DocumentApp.Paragraph
		): DocumentApp.Paragraph
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> containing the specified text contents.
		 * 
		 * @param text - the paragraph's text contents
		 * 
		 * @returns the new paragraph
		 */
		appendParagraph(
			text: string
		): DocumentApp.Paragraph

		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
		 * 
		 * <p>This method will also append an empty paragraph after the table, since Google Docs documents
		 * cannot end with a table.
		 * 
		 * @returns the new table
		 */
		appendTable(): DocumentApp.Table
		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
		 * 
		 * <p>Use this version of <code>appendTable</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
		 * This method will also append an empty paragraph after the table, since Google Docs documents
		 * cannot end with a table.
		 * 
		 * @param table - the table to append
		 * 
		 * @returns the appended table
		 */
		appendTable(
			table: DocumentApp.Table
		): DocumentApp.Table
		/**
		 * Appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> for each specified string value.
		 * 
		 * <p>This method will also append an empty paragraph after the table, since Google Docs documents
		 * cannot end with a table.
		 * 
		 * @param cells - the text contents of the table cells to add to the new table
		 * 
		 * @returns the appended table
		 */
		appendTable(
			cells: string[][]
		): DocumentApp.Table

		/**
		 * Clears the contents of the element.
		 * 
		 * @returns the current element
		 */
		clear(): DocumentApp.Body
		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.Body
		/**
		 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
		 * 
		 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
		 * 
		 * <p>Child elements fully contained within a deleted text range are removed from the element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Insert two paragraphs separated by a paragraph containing an
		 * // horizontal rule.
		 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
		 * body.insertHorizontalRule(0);
		 * body.insertParagraph(0, &quot;An example.&quot;);
		 * 
		 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
		 * body.editAsText().deleteText(14, 25);
		 * </code></pre>
		 * 
		 * @returns a text version of the current element
		 */
		editAsText(): DocumentApp.Text
		/**
		 * Searches the contents of the element for a descendant of the specified type.
		 * 
		 * @param elementType - the type of element to search for
		 * 
		 * @returns a search result indicating the position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for a descendant of the specified type, starting from the
		 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define the search parameters.
		 * var searchType = DocumentApp.ElementType.PARAGRAPH;
		 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
		 * var searchResult = null;
		 * 
		 * // Search until the paragraph is found.
		 * while (searchResult = body.findElement(searchType, searchResult)) {
		 *   var par = searchResult.getElement().asParagraph();
		 *   if (par.getHeading() == searchHeading) {
		 *     // Found one, update and stop.
		 *     par.setText(&#39;This is the first header.&#39;);
		 *     return;
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @param elementType - the type of element to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Searches the contents of the element for the specified text pattern using regular expressions.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * 
		 * @returns a search result indicating the position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for the specified text pattern, starting from a given
		 * search result.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the child element at the specified child index.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document.
		 * var firstChild = body.getChild(0);
		 * 
		 * // If it&#39;s a paragraph, set its contents.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
		 * }
		 * </code></pre>
		 * 
		 * @param childIndex - the index of the child element to retrieve
		 * 
		 * @returns the child element at the specified index
		 */
		getChild(
			childIndex: number
		): DocumentApp.Element
		/**
		 * Retrieves the child index for the specified child element.
		 * 
		 * @param child - the child element for which to retrieve the index
		 * 
		 * @returns the child index
		 */
		getChildIndex(
			child: DocumentApp.Element
		): number
		/**
		 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnotes</a></code> contained in the section.
		 * 
		 * @returns the section footnotes
		 */
		getFootnotes(): DocumentApp.Footnote[]
		/**
		 * Retrieves the set of attributes for the provided <code>ParagraphHeading</code>.
		 * 
		 * @param paragraphHeading - the heading whose attributes will be retrieved
		 * 
		 * @returns a map of the attributes and their current values
		 */
		getHeadingAttributes(
			paragraphHeading: DocumentApp.ParagraphHeading
		): object
		/**
		 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImages</a></code> contained in the section.
		 * 
		 * @returns the section images
		 */
		getImages(): DocumentApp.InlineImage[]
		/**
		 * Retrieves the link url.
		 * 
		 * @returns the link url, or null if the element contains multiple values for this attribute
		 */
		getLinkUrl(): string
		/**
		 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code> contained in the section.
		 * 
		 * @returns the section list items
		 */
		getListItems(): DocumentApp.ListItem[]
		/**
		 * Retrieves the bottom margin, in points.
		 * 
		 * @returns the bottom margin, in points
		 */
		getMarginBottom(): Number
		/**
		 * Retrieves the left margin, in points.
		 * 
		 * @returns the left margin, in points
		 */
		getMarginLeft(): Number
		/**
		 * Retrieves the right margin.
		 * 
		 * @returns the right margin, in points
		 */
		getMarginRight(): Number
		/**
		 * Retrieves the top margin.
		 * 
		 * @returns the top margin, in points
		 */
		getMarginTop(): Number
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the number of children.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Log the number of elements in the document.
		 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
		 *     &quot; elements in the document body.&quot;);
		 * </code></pre>
		 * 
		 * @returns the number of children
		 */
		getNumChildren(): number
		/**
		 * Retrieves the page height, in points.
		 * 
		 * @returns the page height, in points
		 */
		getPageHeight(): Number
		/**
		 * Retrieves the page width, in points.
		 * 
		 * @returns the page width, in points
		 */
		getPageWidth(): Number
		/**
		 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraphs</a></code> contained in the section (including <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code>).
		 * 
		 * @returns the section paragraphs
		 */
		getParagraphs(): DocumentApp.Paragraph[]
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Tables</a></code> contained in the section.
		 * 
		 * @returns the section tables
		 */
		getTables(): DocumentApp.Table[]
		/**
		 * Retrieves the contents of the element as a text string.
		 * 
		 * @returns the contents of the element as text string
		 */
		getText(): string
		/**
		 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * @returns the type of text alignment, or <code>null</code> if the text contains multiple types of text
		 *     alignments or if the text alignment has never been set
		 */
		getTextAlignment(): DocumentApp.TextAlignment
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> at the specified index.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * 
		 * @returns the new horizontal rule
		 */
		insertHorizontalRule(
			childIndex: number
		): DocumentApp.HorizontalRule
		/**
		 * Creates and inserts an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob, at the specified
		 * index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param image - the image data
		 * 
		 * @returns the inserted inline image
		 */
		insertImage(
			childIndex: number,
			image: BlobSource
		): DocumentApp.InlineImage
		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> at the specified index.
		 * 
		 * <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param image - the image to insert
		 * 
		 * @returns the inserted inline image
		 */
		insertImage(
			childIndex: number,
			image: DocumentApp.InlineImage
		): DocumentApp.InlineImage

		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param listItem - the list item to insert
		 * 
		 * @returns the inserted list item
		 */
		insertListItem(
			childIndex: number,
			listItem: DocumentApp.ListItem
		): DocumentApp.ListItem
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index, containing the specified
		 * text contents.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param text - the list item's text contents
		 * 
		 * @returns the new list item
		 */
		insertListItem(
			childIndex: number,
			text: string
		): DocumentApp.ListItem

		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> at the specified index.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * 
		 * @returns the new page break
		 */
		insertPageBreak(
			childIndex: number
		): DocumentApp.PageBreak
		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> at the specified index.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param pageBreak - the p[age break to insert
		 * 
		 * @returns the inserted page break
		 */
		insertPageBreak(
			childIndex: number,
			pageBreak: DocumentApp.PageBreak
		): DocumentApp.PageBreak

		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param paragraph - the paragraph to insert
		 * 
		 * @returns the inserted paragraph
		 */
		insertParagraph(
			childIndex: number,
			paragraph: DocumentApp.Paragraph
		): DocumentApp.Paragraph
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index, containing the specified
		 * text contents.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param text - the paragraph's text contents
		 * 
		 * @returns the new paragraph
		 */
		insertParagraph(
			childIndex: number,
			text: string
		): DocumentApp.Paragraph

		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert
		 * 
		 * @returns the new table
		 */
		insertTable(
			childIndex: number
		): DocumentApp.Table
		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param table - the table to insert
		 * 
		 * @returns the inserted table
		 */
		insertTable(
			childIndex: number,
			table: DocumentApp.Table
		): DocumentApp.Table
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing the specified cells, at the specified index.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param cells - the text contents of the table cells to add to the new table
		 * 
		 * @returns the new table
		 */
		insertTable(
			childIndex: number,
			cells: string[][]
		): DocumentApp.Table

		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Removes the specified child element.
		 * 
		 * @param child - the child element to remove
		 * 
		 * @returns the current element
		 */
		removeChild(
			child: DocumentApp.Element
		): DocumentApp.Body
		/**
		 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
		 * expressions.
		 * 
		 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
		 * Because of this you'll need to escape any backslashes in the pattern.
		 * 
		 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
		 * expression library, which limits the <a
		 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
		 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
		 * </code></pre>
		 * 
		 * @param searchPattern - the regex pattern to search for
		 * @param replacement - the text to use as replacement
		 * 
		 * @returns the current element
		 */
		replaceText(
			searchPattern: string,
			replacement: string
		): DocumentApp.Element
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.Body
		/**
		 * Sets the attributes for the provided <code>ParagraphHeading</code>.
		 * 
		 * @param paragraphHeading - the heading whose attributes will be set
		 * @param attributes - a map of attributes and the values to set them to
		 * 
		 * @returns the current element
		 */
		setHeadingAttributes(
			paragraphHeading: DocumentApp.ParagraphHeading,
			attributes: object
		): DocumentApp.Body
		/**
		 * Sets the link url.
		 * 
		 * @param url - the link url
		 * 
		 * @returns the current element
		 */
		setLinkUrl(
			url: string
		): DocumentApp.Body
		/**
		 * Sets the bottom margin, in points.
		 * 
		 * @param marginBottom - the bottom margin, in points
		 * 
		 * @returns the current element
		 */
		setMarginBottom(
			marginBottom: Number
		): DocumentApp.Body
		/**
		 * Sets the left margin, in points.
		 * 
		 * @param marginLeft - the left margin, in points
		 * 
		 * @returns the current element
		 */
		setMarginLeft(
			marginLeft: Number
		): DocumentApp.Body
		/**
		 * Sets the right margin, in points.
		 * 
		 * @param marginRight - the right margin
		 * 
		 * @returns the current element
		 */
		setMarginRight(
			marginRight: Number
		): DocumentApp.Body
		/**
		 * Sets the top margin.
		 * 
		 * @param marginTop - the top margin, in points
		 * 
		 * @returns the current element
		 */
		setMarginTop(
			marginTop: Number
		): DocumentApp.Body
		/**
		 * Sets the page height, in points.
		 * 
		 * @param pageHeight - the page height, in points
		 * 
		 * @returns the current element
		 */
		setPageHeight(
			pageHeight: Number
		): DocumentApp.Body
		/**
		 * Sets the page width, in points.
		 * 
		 * @param pageWidth - the page width, in points
		 * 
		 * @returns the current element
		 */
		setPageWidth(
			pageWidth: Number
		): DocumentApp.Body
		/**
		 * Sets the contents as plain text.
		 * 
		 * <p>Note: existing contents are cleared.
		 * 
		 * @param text - the new text contents
		 * 
		 * @returns the current element
		 */
		setText(
			text: string
		): DocumentApp.Body
		/**
		 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Make the entire first paragraph be superscript.
		 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
		 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
		 * </code></pre>
		 * 
		 * @param textAlignment - the type of text alignment to apply
		 * 
		 * @returns the current element
		 */
		setTextAlignment(
			textAlignment: DocumentApp.TextAlignment
		): DocumentApp.Body

	}

	class Bookmark {
		private constructor();

		/**
		 * Gets the ID of the <code>Bookmark</code>. The ID is unique within the document.
		 * 
		 * @returns the <code>Bookmark</code>'s ID, which is unique within the document
		 */
		getId(): string
		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html'>Position</a></code> of the <code>Bookmark</code> within the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. The <code>Position</code> remains accurate so long as the <code>Bookmark</code> is not deleted, even if the script
		 * changes the document structure.
		 * 
		 * @returns the position of the <code>Bookmark</code>
		 */
		getPosition(): DocumentApp.Position
		/**
		 * Deletes the <code>Bookmark</code>. Calling this method on a <code>Bookmark</code> that has already been
		 * deleted has no effect.
		 */
		remove(): void

	}

	class ContainerElement {
		private constructor();

		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html'>Body</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asBody(): DocumentApp.Body
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation.html'>Equation</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asEquation(): DocumentApp.Equation
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footer-section.html'>FooterSection</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asFooterSection(): DocumentApp.FooterSection
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote-section.html'>FootnoteSection</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asFootnoteSection(): DocumentApp.FootnoteSection
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/header-section.html'>HeaderSection</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asHeaderSection(): DocumentApp.HeaderSection
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asListItem(): DocumentApp.ListItem
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asParagraph(): DocumentApp.Paragraph
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asTable(): DocumentApp.Table
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asTableCell(): DocumentApp.TableCell
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-of-contents.html'>TableOfContents</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asTableOfContents(): DocumentApp.TableOfContents
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asTableRow(): DocumentApp.TableRow
		/**
		 * Clears the contents of the element.
		 * 
		 * @returns the current element
		 */
		clear(): DocumentApp.ContainerElement
		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.ContainerElement
		/**
		 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
		 * 
		 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
		 * 
		 * <p>Child elements fully contained within a deleted text range are removed from the element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Insert two paragraphs separated by a paragraph containing an
		 * // horizontal rule.
		 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
		 * body.insertHorizontalRule(0);
		 * body.insertParagraph(0, &quot;An example.&quot;);
		 * 
		 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
		 * body.editAsText().deleteText(14, 25);
		 * </code></pre>
		 * 
		 * @returns a text version of the current element
		 */
		editAsText(): DocumentApp.Text
		/**
		 * Searches the contents of the element for a descendant of the specified type.
		 * 
		 * @param elementType - the type of element to search for
		 * 
		 * @returns a search result indicating the position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for a descendant of the specified type, starting from the
		 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define the search parameters.
		 * var searchType = DocumentApp.ElementType.PARAGRAPH;
		 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
		 * var searchResult = null;
		 * 
		 * // Search until the paragraph is found.
		 * while (searchResult = body.findElement(searchType, searchResult)) {
		 *   var par = searchResult.getElement().asParagraph();
		 *   if (par.getHeading() == searchHeading) {
		 *     // Found one, update and stop.
		 *     par.setText(&#39;This is the first header.&#39;);
		 *     return;
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @param elementType - the type of element to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Searches the contents of the element for the specified text pattern using regular expressions.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * 
		 * @returns a search result indicating the position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for the specified text pattern, starting from a given
		 * search result.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the child element at the specified child index.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document.
		 * var firstChild = body.getChild(0);
		 * 
		 * // If it&#39;s a paragraph, set its contents.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
		 * }
		 * </code></pre>
		 * 
		 * @param childIndex - the index of the child element to retrieve
		 * 
		 * @returns the child element at the specified index
		 */
		getChild(
			childIndex: number
		): DocumentApp.Element
		/**
		 * Retrieves the child index for the specified child element.
		 * 
		 * @param child - the child element for which to retrieve the index
		 * 
		 * @returns the child index
		 */
		getChildIndex(
			child: DocumentApp.Element
		): number
		/**
		 * Retrieves the link url.
		 * 
		 * @returns the link url, or null if the element contains multiple values for this attribute
		 */
		getLinkUrl(): string
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the number of children.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Log the number of elements in the document.
		 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
		 *     &quot; elements in the document body.&quot;);
		 * </code></pre>
		 * 
		 * @returns the number of children
		 */
		getNumChildren(): number
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the contents of the element as a text string.
		 * 
		 * @returns the contents of the element as text string
		 */
		getText(): string
		/**
		 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * @returns the type of text alignment, or <code>null</code> if the text contains multiple types of text
		 *     alignments or if the text alignment has never been set
		 */
		getTextAlignment(): DocumentApp.TextAlignment
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Merges the element with the preceding sibling of the same type.
		 * 
		 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
		 * the current element are moved to the preceding sibling element.
		 * 
		 * <p>The current element is removed from the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append two paragraphs to the document.
		 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
		 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
		 * 
		 * // Merge the newly added paragraphs into a single paragraph.
		 * par2.merge();
		 * </code></pre>
		 * 
		 * @returns the merged element
		 */
		merge(): DocumentApp.ContainerElement
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.ContainerElement
		/**
		 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
		 * expressions.
		 * 
		 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
		 * Because of this you'll need to escape any backslashes in the pattern.
		 * 
		 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
		 * expression library, which limits the <a
		 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
		 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
		 * </code></pre>
		 * 
		 * @param searchPattern - the regex pattern to search for
		 * @param replacement - the text to use as replacement
		 * 
		 * @returns the current element
		 */
		replaceText(
			searchPattern: string,
			replacement: string
		): DocumentApp.Element
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.ContainerElement
		/**
		 * Sets the link url.
		 * 
		 * @param url - the link url
		 * 
		 * @returns the current element
		 */
		setLinkUrl(
			url: string
		): DocumentApp.ContainerElement
		/**
		 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Make the entire first paragraph be superscript.
		 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
		 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
		 * </code></pre>
		 * 
		 * @param textAlignment - the type of text alignment to apply
		 * 
		 * @returns the current element
		 */
		setTextAlignment(
			textAlignment: DocumentApp.TextAlignment
		): DocumentApp.ContainerElement

	}

	class Document {
		private constructor();

		/**
		 * Adds a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/bookmark.html'>Bookmark</a></code> at the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html'>Position</a></code>.
		 * 
		 * @param position - the position of the new bookmark
		 * 
		 * @returns the new bookmark
		 */
		addBookmark(
			position: DocumentApp.Position
		): DocumentApp.Bookmark
		/**
		 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If the user was already
		 * on the list of viewers, this method promotes the user out of the list of viewers.
		 * 
		 * @param emailAddress - The email address of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining.
		 */
		addEditor(
			emailAddress: string
		): DocumentApp.Document
		/**
		 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If the user was already
		 * on the list of viewers, this method promotes the user out of the list of viewers.
		 * 
		 * @param user - A representation of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining.
		 */
		addEditor(
			user: User
		): DocumentApp.Document

		/**
		 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If any of the
		 * users were already on the list of viewers, this method promotes them out of the list of
		 * viewers.
		 * 
		 * @param emailAddresses - An array of email addresses of the users to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining.
		 */
		addEditors(
			emailAddresses: string[]
		): DocumentApp.Document
		/**
		 * Adds a document footer section, if none exists.
		 * 
		 * @returns the document footer
		 */
		addFooter(): DocumentApp.FooterSection
		/**
		 * Adds a document header section, if none exists.
		 * 
		 * @returns the document header
		 */
		addHeader(): DocumentApp.HeaderSection
		/**
		 * Adds a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/named-range.html'>NamedRange</a></code>, which is a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range.html'>Range</a></code> that has a name and ID to allow
		 * later retrieval. Names are not necessarily unique; several different ranges in the same
		 * document may share the same name, much like a class in HTML. By contrast, IDs are unique within
		 * the document, like an ID in HTML. Once a <code>NamedRange</code> has been added to a document, it
		 * cannot be modified, only removed.
		 * 
		 * <p>A <code>NamedRange</code> can be accessed by any script that accesses the document. To avoid
		 * unintended conflicts between scripts, consider prefixing range names with a unique string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Change the user&#39;s selection to a range that includes every table in the document.
		 * var doc = DocumentApp.getActiveDocument();
		 * var rangeBuilder = doc.newRange();
		 * var tables = doc.getBody().getTables();
		 * for (var i = 0; i &lt; tables.length; i++) {
		 *   rangeBuilder.addElement(tables[i]);
		 * }
		 * doc.setSelection(rangeBuilder.build());
		 * </code></pre>
		 * 
		 * @param name - the name for the range, which does not need to be unique; range names must be at
		 *     least 1 character, and no more than 256 characters
		 * @param range - the range of elements to associate with the name; the range can be <a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html#getSelection()'>the active selection</a>, a <a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html#findText(String)'>search result</a>, or manually constructed with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html#newRange()'>newRange()</a></code>
		 * 
		 * @returns the new <code>NamedRange</code>
		 */
		addNamedRange(
			name: string,
			range: DocumentApp.Range
		): DocumentApp.NamedRange
		/**
		 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If the user was already
		 * on the list of editors, this method has no effect.
		 * 
		 * @param emailAddress - The email address of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining.
		 */
		addViewer(
			emailAddress: string
		): DocumentApp.Document
		/**
		 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If the user was already
		 * on the list of editors, this method has no effect.
		 * 
		 * @param user - A representation of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining.
		 */
		addViewer(
			user: User
		): DocumentApp.Document

		/**
		 * Adds the given array of users to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. If any of the
		 * users were already on the list of editors, this method has no effect for them.
		 * 
		 * @param emailAddresses - An array of email addresses of the users to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining.
		 */
		addViewers(
			emailAddresses: string[]
		): DocumentApp.Document
		/**
		 * Retrieves the current <code>Document</code> contents as a blob of the specified type.
		 * 
		 * @param contentType - the MIME type to convert to; currently only <code>&#39;application/pdf&#39;</code> is
		 *     supported
		 * 
		 * @returns the current document as a blob
		 */
		getAs(
			contentType: string
		): Blob
		/**
		 * Retrieves the current <code>Document</code> contents as a blob.
		 * 
		 * @returns the current document as a blob
		 */
		getBlob(): Blob
		/**
		 * Retrieves the active document's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html'>Body</a></code>.
		 * 
		 * <p>Documents may contain different types of sections (e.g. <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/header-section.html'>HeaderSection</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footer-section.html'>FooterSection</a></code>). The active section for a document is the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html'>Body</a></code>.
		 * 
		 * <p>Element methods in <code>Document</code> delegate to the active <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html'>Body</a></code>.
		 * 
		 * @returns the active document body section
		 */
		getBody(): DocumentApp.Body
		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/bookmark.html'>Bookmark</a></code> with the given ID. This method returns <code>null</code> if no such <code>Bookmark</code> exists.
		 * 
		 * @param id - the ID for the <code>Bookmark</code>
		 * 
		 * @returns the <code>Bookmark</code> with the given ID, or <code>null</code> if no such <code>Bookmark</code>
		 *     exists
		 */
		getBookmark(
			id: string
		): DocumentApp.Bookmark
		/**
		 * Gets all <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/bookmark.html'>Bookmark</a></code> objects in the document.
		 * 
		 * @returns an array of the <code>Bookmark</code> objects in the document
		 */
		getBookmarks(): DocumentApp.Bookmark[]
		/**
		 * Gets the user's cursor in the active document. A script can only access the cursor of the user
		 * who is running the script, and only if the script is <a
		 * href="/apps-script/scripts_containers">bound</a> to the document.
		 * 
		 * <pre class="prettyprint">
		 * // Insert some text at the cursor position and make it bold.
		 * var cursor = DocumentApp.getActiveDocument().getCursor();
		 * if (cursor) {
		 *   // Attempt to insert text at the cursor position. If the insertion returns null, the cursor's
		 *   // containing element doesn't allow insertions, so show the user an error message.
		 *   var element = cursor.insertText('ಠ‿ಠ');
		 *   if (element) {
		 *     element.setBold(true);
		 *   } else {
		 *     DocumentApp.getUi().alert('Cannot insert text here.');
		 *   }
		 * } else {
		 *   DocumentApp.getUi().alert('Cannot find a cursor.');
		 * }
		 * </pre>
		 * 
		 * @returns A representation of the user's cursor, or <code>null</code> if the user does not have a
		 *     cursor placed in the document or if the script is not bound to the document.
		 */
		getCursor(): DocumentApp.Position
		/**
		 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns An array of users with edit permission.
		 */
		getEditors(): User[]
		/**
		 * Retrieves the document's footer section, if one exists.
		 * 
		 * @returns the document footer
		 */
		getFooter(): DocumentApp.FooterSection
		/**
		 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnote</a></code> elements in the document body.
		 * 
		 * <p>Calls to <code>getFootnotes</code> cause an iteration over the document's elements. For large
		 * documents, avoid unnecessary calls to this method.
		 * 
		 * @returns the document footnotes
		 */
		getFootnotes(): DocumentApp.Footnote[]
		/**
		 * Retrieves the document's header section, if one exists.
		 * 
		 * @returns the document header
		 */
		getHeader(): DocumentApp.HeaderSection
		/**
		 * Retrieves the document's unique identifier. The document ID is used with <code>DocumentApp.openById()</code> to open a specific document instance.
		 * 
		 * @returns the document's ID
		 */
		getId(): string
		/**
		 * Gets the document's language code. This is the language shown in the document editor's <b>File
		 * > Language</b>, which may not be the actual language that the document contains.
		 * 
		 * @returns The document language, or <code>null</code> if not defined.
		 */
		getLanguage(): string
		/**
		 * Retrieves the title of the document.
		 * 
		 * @returns the document title
		 */
		getName(): string
		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/named-range.html'>NamedRange</a></code> with the given ID. This method returns <code>null</code> if no such
		 * <code>NamedRange</code> exists. Names are not necessarily unique; several different ranges in the
		 * same document may share the same name, much like a class in HTML. By contrast, IDs are unique
		 * within the document, like an ID in HTML.
		 * 
		 * @param id - the range's ID, which is unique within the document
		 * 
		 * @returns the <code>NamedRange</code> with the given ID, or <code>null</code> if no such range exists
		 */
		getNamedRangeById(
			id: string
		): DocumentApp.NamedRange
		/**
		 * Gets all <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/named-range.html'>NamedRange</a></code> objects in the document.
		 * 
		 * <p>A <code>NamedRange</code> can be accessed by any script that accesses the document. To avoid
		 * unintended conflicts between scripts, consider prefixing range names with a unique string.
		 * 
		 * @returns an array of the <code>NamedRange</code> objects in the document, possibly including multiple
		 *     ranges with the same name
		 */
		getNamedRanges(): DocumentApp.NamedRange[]
		/**
		 * Gets all <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/named-range.html'>NamedRange</a></code> objects in the document with the given name. Names are not
		 * necessarily unique; several different ranges in the same document may share the same name, much
		 * like a class in HTML. By contrast, IDs are unique within the document, like an ID in HTML.
		 * 
		 * <p>A <code>NamedRange</code> can be accessed by any script that accesses the document. To avoid
		 * unintended conflicts between scripts, consider prefixing range names with a unique string.
		 * 
		 * @param name - the range's name, which is not necessarily unique
		 * 
		 * @returns an array of the <code>NamedRange</code> objects in the document with the given name
		 */
		getNamedRanges(
			name: string
		): DocumentApp.NamedRange[]

		/**
		 * Gets the user's selection in the active document. A script can only access the selection of the
		 * user who is running the script, and only if the script is <a
		 * href="/apps-script/scripts_containers">bound</a> to the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Display a dialog box that tells the user how many elements are included in the selection.
		 * var selection = DocumentApp.getActiveDocument().getSelection();
		 * if (selection) {
		 *   var elements = selection.getRangeElements();
		 *   DocumentApp.getUi().alert(&#39;Number of selected elements: &#39; + elements.length);
		 * } else {
		 *   DocumentApp.getUi().alert(&#39;Nothing is selected.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns A representation of the user's selection, or <code>null</code> if the user does not have
		 *     anything selected in the document, if only the end of a paragraph is selected, if only the
		 *     end of a paragraph and a new line are selected, or if the script is not bound to the
		 *     document.
		 */
		getSelection(): DocumentApp.Range
		/**
		 * Gets all language codes that are supported in Google Docs files.
		 * 
		 * @returns An array of language codes.
		 */
		getSupportedLanguageCodes(): string[]
		/**
		 * Retrieves the URL to access the current document.
		 * 
		 * <pre class="prettyprint"><code>
		 * var doc = DocumentApp.getActiveDocument();
		 * 
		 * // Send out the link to open the document.
		 * MailApp.sendEmail(&quot;&lt;email-address&gt;&quot;, doc.getName(), doc.getUrl());
		 * </code></pre>
		 * 
		 * @returns the URL to access the current document
		 */
		getUrl(): string
		/**
		 * Gets the list of viewers and commenters for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns An array of users with view or comment permission.
		 */
		getViewers(): User[]
		/**
		 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html'>Position</a></code>, which is a reference to a location in the document, relative to
		 * a specific element. The user's cursor is represented as a <code>Position</code>, among other uses.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Append a paragraph, then place the user&#39;s cursor after the first word of the new paragraph.
		 * var doc = DocumentApp.getActiveDocument();
		 * var paragraph = doc.getBody().appendParagraph(&#39;My new paragraph.&#39;);
		 * var position = doc.newPosition(paragraph.getChild(0), 2);
		 * doc.setCursor(position);
		 * </code></pre>
		 * 
		 * @param element - the element that will contain the new <code>Position</code>; this must be either a
		 *     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element or a container element like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>
		 * @param offset - for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements, the number of characters before the <code>Position</code>;
		 *     for other elements, the number of child elements before the <code>Position</code> within the
		 *     same container element
		 * 
		 * @returns the new <code>Position</code>
		 */
		newPosition(
			element: DocumentApp.Element,
			offset: number
		): DocumentApp.Position
		/**
		 * Creates a builder used to construct <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range.html'>Range</a></code> objects from document elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Change the user&#39;s selection to a range that includes every table in the document.
		 * var doc = DocumentApp.getActiveDocument();
		 * var rangeBuilder = doc.newRange();
		 * var tables = doc.getBody().getTables();
		 * for (var i = 0; i &lt; tables.length; i++) {
		 *   rangeBuilder.addElement(tables[i]);
		 * }
		 * doc.setSelection(rangeBuilder.build());
		 * </code></pre>
		 * 
		 * @returns the new builder
		 */
		newRange(): DocumentApp.RangeBuilder
		/**
		 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. This method doesn't
		 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> if they belong to a class of users who have
		 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> is shared with the user's entire
		 * domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of viewers.
		 * 
		 * @param emailAddress - The email address of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining.
		 */
		removeEditor(
			emailAddress: string
		): DocumentApp.Document
		/**
		 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. This method doesn't
		 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> if they belong to a class of users who have
		 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> is shared with the user's entire
		 * domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of viewers.
		 * 
		 * @param user - A representation of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>, for chaining.
		 */
		removeEditor(
			user: User
		): DocumentApp.Document

		/**
		 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. This
		 * method has no effect if the user is an editor, not a viewer or commenter. This method also
		 * doesn't block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> if they belong to a class of users who
		 * have general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> is shared with the user's
		 * entire domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of editors.
		 * 
		 * @param emailAddress - The email address of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> for chaining.
		 */
		removeViewer(
			emailAddress: string
		): DocumentApp.Document
		/**
		 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>. This
		 * method has no effect if the user is an editor, not a viewer. This method also doesn't block
		 * users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> if they belong to a class of users who have general
		 * access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> is shared with the user's entire domain, or
		 * if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of editors.
		 * 
		 * @param user - A representation of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code> for chaining.
		 */
		removeViewer(
			user: User
		): DocumentApp.Document

		/**
		 * Saves the current <code>Document</code>. Causes pending updates to be flushed and applied.
		 * 
		 * <p>The <code>saveAndClose()</code> method is automatically invoked at the end of script execution
		 * for each open editable <code>Document</code>.
		 * 
		 * <p>A closed <code>Document</code> can't be edited. Use <code>DocumentApp.openById()</code> to reopen a
		 * given document for editing.
		 */
		saveAndClose(): void
		/**
		 * Sets the user's cursor in the active document, given a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html'>Position</a></code>. A script can only
		 * access the cursor of the user who is running the script, and only if the script is <a
		 * href="/apps-script/scripts_containers">bound</a> to the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Append a paragraph, then place the user&#39;s cursor after the first word of the new paragraph.
		 * var doc = DocumentApp.getActiveDocument();
		 * var paragraph = doc.getBody().appendParagraph(&#39;My new paragraph.&#39;);
		 * var position = doc.newPosition(paragraph.getChild(0), 2);
		 * doc.setCursor(position);
		 * </code></pre>
		 * 
		 * @param position - the new cursor location
		 * 
		 * @returns this <code>Document</code>, for chaining
		 */
		setCursor(
			position: DocumentApp.Position
		): DocumentApp.Document
		/**
		 * Sets the document's language code. This is the language shown in the document editor's <b>File
		 * > Language</b>, which may not be the actual language that the document contains. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html#getSupportedLanguageCodes()'>getSupportedLanguageCodes()</a></code> to get all the valid language codes.
		 * 
		 * @param languageCode - The language code.
		 * 
		 * @returns This <code>Document</code>, for chaining.
		 */
		setLanguage(
			languageCode: string
		): DocumentApp.Document
		/**
		 * Sets the document title.
		 * 
		 * @param name - the new document title
		 * 
		 * @returns the current document
		 */
		setName(
			name: string
		): DocumentApp.Document
		/**
		 * Sets the user's selection in the active document, given a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range.html'>Range</a></code>. A script can
		 * only access the selection of the user who is running the script, and only if the script is <a
		 * href="/apps-script/scripts_containers">bound</a> to the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Change the user&#39;s selection to a range that includes every table in the document.
		 * var doc = DocumentApp.getActiveDocument();
		 * var rangeBuilder = doc.newRange();
		 * var tables = doc.getBody().getTables();
		 * for (var i = 0; i &lt; tables.length; i++) {
		 *   rangeBuilder.addElement(tables[i]);
		 * }
		 * doc.setSelection(rangeBuilder.build());
		 * </code></pre>
		 * 
		 * @param range - the new range of elements to select
		 * 
		 * @returns this <code>Document</code>, for chaining
		 */
		setSelection(
			range: DocumentApp.Range
		): DocumentApp.Document

	}

	class Element {
		private constructor();

		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html'>Body</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asBody(): DocumentApp.Body
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation.html'>Equation</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asEquation(): DocumentApp.Equation
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation-function.html'>EquationFunction</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asEquationFunction(): DocumentApp.EquationFunction
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation-function-argument-separator.html'>EquationFunctionArgumentSeparator</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asEquationFunctionArgumentSeparator(): DocumentApp.EquationFunctionArgumentSeparator
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation-symbol.html'>EquationSymbol</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asEquationSymbol(): DocumentApp.EquationSymbol
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footer-section.html'>FooterSection</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asFooterSection(): DocumentApp.FooterSection
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnote</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asFootnote(): DocumentApp.Footnote
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote-section.html'>FootnoteSection</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asFootnoteSection(): DocumentApp.FootnoteSection
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/header-section.html'>HeaderSection</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asHeaderSection(): DocumentApp.HeaderSection
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asHorizontalRule(): DocumentApp.HorizontalRule
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-drawing.html'>InlineDrawing</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asInlineDrawing(): DocumentApp.InlineDrawing
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asInlineImage(): DocumentApp.InlineImage
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asListItem(): DocumentApp.ListItem
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asPageBreak(): DocumentApp.PageBreak
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asParagraph(): DocumentApp.Paragraph
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asTable(): DocumentApp.Table
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asTableCell(): DocumentApp.TableCell
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-of-contents.html'>TableOfContents</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asTableOfContents(): DocumentApp.TableOfContents
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asTableRow(): DocumentApp.TableRow
		/**
		 * Returns the current element as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code>.
		 * 
		 * <p>Use this method to aid auto-complete whenever a given element is known to be of a specific
		 * type.
		 * 
		 * @returns the current element
		 */
		asText(): DocumentApp.Text
		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.Element
		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Merges the element with the preceding sibling of the same type.
		 * 
		 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
		 * the current element are moved to the preceding sibling element.
		 * 
		 * <p>The current element is removed from the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append two paragraphs to the document.
		 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
		 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
		 * 
		 * // Merge the newly added paragraphs into a single paragraph.
		 * par2.merge();
		 * </code></pre>
		 * 
		 * @returns the merged element
		 */
		merge(): DocumentApp.Element
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.Element
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.Element

	}

	enum ElementType {
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/body.html'>Body</a></code> element.
		 */
		BODY_SECTION = "BODY_SECTION",
		/**
		 * The type corresponding to the <code><s>CommentSection</s></code> element.
		 */
		COMMENT_SECTION = "COMMENT_SECTION",
		/**
		 * The type that corresponds to the root of the document.
		 */
		DOCUMENT = "DOCUMENT",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation.html'>Equation</a></code> element.
		 */
		EQUATION = "EQUATION",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation-function.html'>EquationFunction</a></code> element.
		 */
		EQUATION_FUNCTION = "EQUATION_FUNCTION",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation-function-argument-separator.html'>EquationFunctionArgumentSeparator</a></code>
		 * element.
		 */
		EQUATION_FUNCTION_ARGUMENT_SEPARATOR = "EQUATION_FUNCTION_ARGUMENT_SEPARATOR",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/equation-symbol.html'>EquationSymbol</a></code> element.
		 */
		EQUATION_SYMBOL = "EQUATION_SYMBOL",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footer-section.html'>FooterSection</a></code> element.
		 */
		FOOTER_SECTION = "FOOTER_SECTION",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnote</a></code> element.
		 */
		FOOTNOTE = "FOOTNOTE",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote-section.html'>FootnoteSection</a></code> element.
		 */
		FOOTNOTE_SECTION = "FOOTNOTE_SECTION",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/header-section.html'>HeaderSection</a></code> element.
		 */
		HEADER_SECTION = "HEADER_SECTION",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> element.
		 */
		HORIZONTAL_RULE = "HORIZONTAL_RULE",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-drawing.html'>InlineDrawing</a></code> element.
		 */
		INLINE_DRAWING = "INLINE_DRAWING",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> element.
		 */
		INLINE_IMAGE = "INLINE_IMAGE",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> element.
		 */
		LIST_ITEM = "LIST_ITEM",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> element.
		 */
		PAGE_BREAK = "PAGE_BREAK",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> element.
		 */
		PARAGRAPH = "PARAGRAPH",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> element.
		 */
		TABLE = "TABLE",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> element.
		 */
		TABLE_CELL = "TABLE_CELL",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-of-contents.html'>TableOfContents</a></code> element.
		 */
		TABLE_OF_CONTENTS = "TABLE_OF_CONTENTS",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code> element.
		 */
		TABLE_ROW = "TABLE_ROW",
		/**
		 * The type corresponding to the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code>
		 * element.
		 */
		TEXT = "TEXT",
		/**
		 * The type corresponding to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/unsupported-element.html'>UnsupportedElement</a></code>. Unsupported elements
		 * represent document portions that do not support scripting.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	class Equation {
		private constructor();

		/**
		 * Clears the contents of the element.
		 * 
		 * @returns the current element
		 */
		clear(): DocumentApp.Equation
		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.Equation
		/**
		 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
		 * 
		 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
		 * 
		 * <p>Child elements fully contained within a deleted text range are removed from the element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Insert two paragraphs separated by a paragraph containing an
		 * // horizontal rule.
		 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
		 * body.insertHorizontalRule(0);
		 * body.insertParagraph(0, &quot;An example.&quot;);
		 * 
		 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
		 * body.editAsText().deleteText(14, 25);
		 * </code></pre>
		 * 
		 * @returns a text version of the current element
		 */
		editAsText(): DocumentApp.Text
		/**
		 * Searches the contents of the element for a descendant of the specified type.
		 * 
		 * @param elementType - the type of element to search for
		 * 
		 * @returns a search result indicating the position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for a descendant of the specified type, starting from the
		 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define the search parameters.
		 * var searchType = DocumentApp.ElementType.PARAGRAPH;
		 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
		 * var searchResult = null;
		 * 
		 * // Search until the paragraph is found.
		 * while (searchResult = body.findElement(searchType, searchResult)) {
		 *   var par = searchResult.getElement().asParagraph();
		 *   if (par.getHeading() == searchHeading) {
		 *     // Found one, update and stop.
		 *     par.setText(&#39;This is the first header.&#39;);
		 *     return;
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @param elementType - the type of element to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Searches the contents of the element for the specified text pattern using regular expressions.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * 
		 * @returns a search result indicating the position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for the specified text pattern, starting from a given
		 * search result.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the child element at the specified child index.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document.
		 * var firstChild = body.getChild(0);
		 * 
		 * // If it&#39;s a paragraph, set its contents.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
		 * }
		 * </code></pre>
		 * 
		 * @param childIndex - the index of the child element to retrieve
		 * 
		 * @returns the child element at the specified index
		 */
		getChild(
			childIndex: number
		): DocumentApp.Element
		/**
		 * Retrieves the child index for the specified child element.
		 * 
		 * @param child - the child element for which to retrieve the index
		 * 
		 * @returns the child index
		 */
		getChildIndex(
			child: DocumentApp.Element
		): number
		/**
		 * Retrieves the link url.
		 * 
		 * @returns the link url, or null if the element contains multiple values for this attribute
		 */
		getLinkUrl(): string
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the number of children.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Log the number of elements in the document.
		 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
		 *     &quot; elements in the document body.&quot;);
		 * </code></pre>
		 * 
		 * @returns the number of children
		 */
		getNumChildren(): number
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the contents of the element as a text string.
		 * 
		 * @returns the contents of the element as text string
		 */
		getText(): string
		/**
		 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * @returns the type of text alignment, or <code>null</code> if the text contains multiple types of text
		 *     alignments or if the text alignment has never been set
		 */
		getTextAlignment(): DocumentApp.TextAlignment
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Merges the element with the preceding sibling of the same type.
		 * 
		 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
		 * the current element are moved to the preceding sibling element.
		 * 
		 * <p>The current element is removed from the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append two paragraphs to the document.
		 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
		 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
		 * 
		 * // Merge the newly added paragraphs into a single paragraph.
		 * par2.merge();
		 * </code></pre>
		 * 
		 * @returns the merged element
		 */
		merge(): DocumentApp.Equation
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.Equation
		/**
		 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
		 * expressions.
		 * 
		 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
		 * Because of this you'll need to escape any backslashes in the pattern.
		 * 
		 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
		 * expression library, which limits the <a
		 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
		 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
		 * </code></pre>
		 * 
		 * @param searchPattern - the regex pattern to search for
		 * @param replacement - the text to use as replacement
		 * 
		 * @returns the current element
		 */
		replaceText(
			searchPattern: string,
			replacement: string
		): DocumentApp.Element
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.Equation
		/**
		 * Sets the link url.
		 * 
		 * @param url - the link url
		 * 
		 * @returns the current element
		 */
		setLinkUrl(
			url: string
		): DocumentApp.Equation
		/**
		 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Make the entire first paragraph be superscript.
		 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
		 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
		 * </code></pre>
		 * 
		 * @param textAlignment - the type of text alignment to apply
		 * 
		 * @returns the current element
		 */
		setTextAlignment(
			textAlignment: DocumentApp.TextAlignment
		): DocumentApp.Equation

	}

	class EquationFunction {
		private constructor();

		/**
		 * Clears the contents of the element.
		 * 
		 * @returns the current element
		 */
		clear(): DocumentApp.EquationFunction
		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.EquationFunction
		/**
		 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
		 * 
		 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
		 * 
		 * <p>Child elements fully contained within a deleted text range are removed from the element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Insert two paragraphs separated by a paragraph containing an
		 * // horizontal rule.
		 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
		 * body.insertHorizontalRule(0);
		 * body.insertParagraph(0, &quot;An example.&quot;);
		 * 
		 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
		 * body.editAsText().deleteText(14, 25);
		 * </code></pre>
		 * 
		 * @returns a text version of the current element
		 */
		editAsText(): DocumentApp.Text
		/**
		 * Searches the contents of the element for a descendant of the specified type.
		 * 
		 * @param elementType - the type of element to search for
		 * 
		 * @returns a search result indicating the position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for a descendant of the specified type, starting from the
		 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define the search parameters.
		 * var searchType = DocumentApp.ElementType.PARAGRAPH;
		 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
		 * var searchResult = null;
		 * 
		 * // Search until the paragraph is found.
		 * while (searchResult = body.findElement(searchType, searchResult)) {
		 *   var par = searchResult.getElement().asParagraph();
		 *   if (par.getHeading() == searchHeading) {
		 *     // Found one, update and stop.
		 *     par.setText(&#39;This is the first header.&#39;);
		 *     return;
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @param elementType - the type of element to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Searches the contents of the element for the specified text pattern using regular expressions.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * 
		 * @returns a search result indicating the position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for the specified text pattern, starting from a given
		 * search result.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the child element at the specified child index.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document.
		 * var firstChild = body.getChild(0);
		 * 
		 * // If it&#39;s a paragraph, set its contents.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
		 * }
		 * </code></pre>
		 * 
		 * @param childIndex - the index of the child element to retrieve
		 * 
		 * @returns the child element at the specified index
		 */
		getChild(
			childIndex: number
		): DocumentApp.Element
		/**
		 * Retrieves the child index for the specified child element.
		 * 
		 * @param child - the child element for which to retrieve the index
		 * 
		 * @returns the child index
		 */
		getChildIndex(
			child: DocumentApp.Element
		): number
		/**
		 * Retrieves the code corresponding to the equation function.
		 * 
		 * @returns the function code
		 */
		getCode(): string
		/**
		 * Retrieves the link url.
		 * 
		 * @returns the link url, or null if the element contains multiple values for this attribute
		 */
		getLinkUrl(): string
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the number of children.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Log the number of elements in the document.
		 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
		 *     &quot; elements in the document body.&quot;);
		 * </code></pre>
		 * 
		 * @returns the number of children
		 */
		getNumChildren(): number
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the contents of the element as a text string.
		 * 
		 * @returns the contents of the element as text string
		 */
		getText(): string
		/**
		 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * @returns the type of text alignment, or <code>null</code> if the text contains multiple types of text
		 *     alignments or if the text alignment has never been set
		 */
		getTextAlignment(): DocumentApp.TextAlignment
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Merges the element with the preceding sibling of the same type.
		 * 
		 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
		 * the current element are moved to the preceding sibling element.
		 * 
		 * <p>The current element is removed from the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append two paragraphs to the document.
		 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
		 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
		 * 
		 * // Merge the newly added paragraphs into a single paragraph.
		 * par2.merge();
		 * </code></pre>
		 * 
		 * @returns the merged element
		 */
		merge(): DocumentApp.EquationFunction
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.EquationFunction
		/**
		 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
		 * expressions.
		 * 
		 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
		 * Because of this you'll need to escape any backslashes in the pattern.
		 * 
		 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
		 * expression library, which limits the <a
		 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
		 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
		 * </code></pre>
		 * 
		 * @param searchPattern - the regex pattern to search for
		 * @param replacement - the text to use as replacement
		 * 
		 * @returns the current element
		 */
		replaceText(
			searchPattern: string,
			replacement: string
		): DocumentApp.Element
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.EquationFunction
		/**
		 * Sets the link url.
		 * 
		 * @param url - the link url
		 * 
		 * @returns the current element
		 */
		setLinkUrl(
			url: string
		): DocumentApp.EquationFunction
		/**
		 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Make the entire first paragraph be superscript.
		 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
		 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
		 * </code></pre>
		 * 
		 * @param textAlignment - the type of text alignment to apply
		 * 
		 * @returns the current element
		 */
		setTextAlignment(
			textAlignment: DocumentApp.TextAlignment
		): DocumentApp.EquationFunction

	}

	class EquationFunctionArgumentSeparator {
		private constructor();

		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.EquationFunctionArgumentSeparator
		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Merges the element with the preceding sibling of the same type.
		 * 
		 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
		 * the current element are moved to the preceding sibling element.
		 * 
		 * <p>The current element is removed from the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append two paragraphs to the document.
		 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
		 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
		 * 
		 * // Merge the newly added paragraphs into a single paragraph.
		 * par2.merge();
		 * </code></pre>
		 * 
		 * @returns the merged element
		 */
		merge(): DocumentApp.EquationFunctionArgumentSeparator
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.EquationFunctionArgumentSeparator
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.EquationFunctionArgumentSeparator

	}

	class EquationSymbol {
		private constructor();

		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.EquationSymbol
		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the code corresponding to the equation symbol.
		 * 
		 * @returns the symbol code
		 */
		getCode(): string
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Merges the element with the preceding sibling of the same type.
		 * 
		 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
		 * the current element are moved to the preceding sibling element.
		 * 
		 * <p>The current element is removed from the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append two paragraphs to the document.
		 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
		 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
		 * 
		 * // Merge the newly added paragraphs into a single paragraph.
		 * par2.merge();
		 * </code></pre>
		 * 
		 * @returns the merged element
		 */
		merge(): DocumentApp.EquationSymbol
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.EquationSymbol
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.EquationSymbol

	}

	enum FontFamily {
		/**
		 * The Amaranth font family.
		 */
		AMARANTH = "AMARANTH",
		/**
		 * The Arial font family.
		 */
		ARIAL = "ARIAL",
		/**
		 * The Arial Black font family.
		 */
		ARIAL_BLACK = "ARIAL_BLACK",
		/**
		 * The Arial Narrow font family.
		 */
		ARIAL_NARROW = "ARIAL_NARROW",
		/**
		 * The Arvo font family.
		 */
		ARVO = "ARVO",
		/**
		 * The Calibri font family.
		 */
		CALIBRI = "CALIBRI",
		/**
		 * The Cambria font family.
		 */
		CAMBRIA = "CAMBRIA",
		/**
		 * The Comic Sans MS font family.
		 */
		COMIC_SANS_MS = "COMIC_SANS_MS",
		/**
		 * The Consolas font family.
		 */
		CONSOLAS = "CONSOLAS",
		/**
		 * The Corsiva font family.
		 */
		CORSIVA = "CORSIVA",
		/**
		 * The Courier New font family.
		 */
		COURIER_NEW = "COURIER_NEW",
		/**
		 * The Dancing Script font family.
		 */
		DANCING_SCRIPT = "DANCING_SCRIPT",
		/**
		 * The Droid Sans font family.
		 */
		DROID_SANS = "DROID_SANS",
		/**
		 * The Droid Serif font family.
		 */
		DROID_SERIF = "DROID_SERIF",
		/**
		 * The Garamond font family.
		 */
		GARAMOND = "GARAMOND",
		/**
		 * The Georgia font family.
		 */
		GEORGIA = "GEORGIA",
		/**
		 * The Gloria Hallelujah font family.
		 */
		GLORIA_HALLELUJAH = "GLORIA_HALLELUJAH",
		/**
		 * The Great Vibes font family.
		 */
		GREAT_VIBES = "GREAT_VIBES",
		/**
		 * The Lobster font family.
		 */
		LOBSTER = "LOBSTER",
		/**
		 * The Merriweather font family.
		 */
		MERRIWEATHER = "MERRIWEATHER",
		/**
		 * The Pacifico font family.
		 */
		PACIFICO = "PACIFICO",
		/**
		 * The Philosopher font family.
		 */
		PHILOSOPHER = "PHILOSOPHER",
		/**
		 * The Poiret One font family
		 */
		POIRET_ONE = "POIRET_ONE",
		/**
		 * The Quattrocento font family.
		 */
		QUATTROCENTO = "QUATTROCENTO",
		/**
		 * The Roboto font family
		 */
		ROBOTO = "ROBOTO",
		/**
		 * The Shadows Into Light font family.
		 */
		SHADOWS_INTO_LIGHT = "SHADOWS_INTO_LIGHT",
		/**
		 * The Syncopate font family.
		 */
		SYNCOPATE = "SYNCOPATE",
		/**
		 * The Tahoma font family.
		 */
		TAHOMA = "TAHOMA",
		/**
		 * The Times New Roman font family.
		 */
		TIMES_NEW_ROMAN = "TIMES_NEW_ROMAN",
		/**
		 * The Trebuchet MS font family.
		 */
		TREBUCHET_MS = "TREBUCHET_MS",
		/**
		 * The Ubuntu font family.
		 */
		UBUNTU = "UBUNTU",
		/**
		 * The Verdana font family.
		 */
		VERDANA = "VERDANA",
	}

	class FooterSection {
		private constructor();

		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @returns the new horizontal rule
		 */
		appendHorizontalRule(): DocumentApp.HorizontalRule
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob.
		 * 
		 * <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param image - the image data
		 * 
		 * @returns the appended image
		 */
		appendImage(
			image: BlobSource
		): DocumentApp.InlineImage
		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * <p>Use this version of <code>appendImage</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
		 * 
		 * @param image - the image data
		 * 
		 * @returns the appended image
		 */
		appendImage(
			image: DocumentApp.InlineImage
		): DocumentApp.InlineImage

		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
		 * 
		 * <p>Use this version of <code>appendListItem</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
		 * 
		 * @param listItem - the list item to append
		 * 
		 * @returns the appended list item
		 */
		appendListItem(
			listItem: DocumentApp.ListItem
		): DocumentApp.ListItem
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> containing the specified text contents.
		 * 
		 * <p>Consecutive list items are added as part of the same list.
		 * 
		 * @param text - the list item's text contents
		 * 
		 * @returns the new list item
		 */
		appendListItem(
			text: string
		): DocumentApp.ListItem

		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * <p>Use this version of <code>appendParagraph</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param paragraph - the paragraph to append
		 * 
		 * @returns the appended paragraph
		 */
		appendParagraph(
			paragraph: DocumentApp.Paragraph
		): DocumentApp.Paragraph
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> containing the specified text contents.
		 * 
		 * @param text - the paragraph's text contents
		 * 
		 * @returns the new paragraph
		 */
		appendParagraph(
			text: string
		): DocumentApp.Paragraph

		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
		 * 
		 * <p>This method will also append an empty paragraph after the table, since Google Docs documents
		 * cannot end with a table.
		 * 
		 * @returns the new table
		 */
		appendTable(): DocumentApp.Table
		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
		 * 
		 * <p>Use this version of <code>appendTable</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
		 * This method will also append an empty paragraph after the table, since Google Docs documents
		 * cannot end with a table.
		 * 
		 * @param table - the table to append
		 * 
		 * @returns the appended table
		 */
		appendTable(
			table: DocumentApp.Table
		): DocumentApp.Table
		/**
		 * Appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> for each specified string value.
		 * 
		 * <p>This method will also append an empty paragraph after the table, since Google Docs documents
		 * cannot end with a table.
		 * 
		 * @param cells - the text contents of the table cells to add to the new table
		 * 
		 * @returns the appended table
		 */
		appendTable(
			cells: string[][]
		): DocumentApp.Table

		/**
		 * Clears the contents of the element.
		 * 
		 * @returns the current element
		 */
		clear(): DocumentApp.FooterSection
		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.FooterSection
		/**
		 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
		 * 
		 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
		 * 
		 * <p>Child elements fully contained within a deleted text range are removed from the element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Insert two paragraphs separated by a paragraph containing an
		 * // horizontal rule.
		 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
		 * body.insertHorizontalRule(0);
		 * body.insertParagraph(0, &quot;An example.&quot;);
		 * 
		 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
		 * body.editAsText().deleteText(14, 25);
		 * </code></pre>
		 * 
		 * @returns a text version of the current element
		 */
		editAsText(): DocumentApp.Text
		/**
		 * Searches the contents of the element for a descendant of the specified type.
		 * 
		 * @param elementType - the type of element to search for
		 * 
		 * @returns a search result indicating the position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for a descendant of the specified type, starting from the
		 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define the search parameters.
		 * var searchType = DocumentApp.ElementType.PARAGRAPH;
		 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
		 * var searchResult = null;
		 * 
		 * // Search until the paragraph is found.
		 * while (searchResult = body.findElement(searchType, searchResult)) {
		 *   var par = searchResult.getElement().asParagraph();
		 *   if (par.getHeading() == searchHeading) {
		 *     // Found one, update and stop.
		 *     par.setText(&#39;This is the first header.&#39;);
		 *     return;
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @param elementType - the type of element to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Searches the contents of the element for the specified text pattern using regular expressions.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * 
		 * @returns a search result indicating the position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for the specified text pattern, starting from a given
		 * search result.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the child element at the specified child index.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document.
		 * var firstChild = body.getChild(0);
		 * 
		 * // If it&#39;s a paragraph, set its contents.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
		 * }
		 * </code></pre>
		 * 
		 * @param childIndex - the index of the child element to retrieve
		 * 
		 * @returns the child element at the specified index
		 */
		getChild(
			childIndex: number
		): DocumentApp.Element
		/**
		 * Retrieves the child index for the specified child element.
		 * 
		 * @param child - the child element for which to retrieve the index
		 * 
		 * @returns the child index
		 */
		getChildIndex(
			child: DocumentApp.Element
		): number
		/**
		 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnotes</a></code> contained in the section.
		 * 
		 * @returns the section footnotes
		 */
		getFootnotes(): DocumentApp.Footnote[]
		/**
		 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImages</a></code> contained in the section.
		 * 
		 * @returns the section images
		 */
		getImages(): DocumentApp.InlineImage[]
		/**
		 * Retrieves the link url.
		 * 
		 * @returns the link url, or null if the element contains multiple values for this attribute
		 */
		getLinkUrl(): string
		/**
		 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code> contained in the section.
		 * 
		 * @returns the section list items
		 */
		getListItems(): DocumentApp.ListItem[]
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the number of children.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Log the number of elements in the document.
		 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
		 *     &quot; elements in the document body.&quot;);
		 * </code></pre>
		 * 
		 * @returns the number of children
		 */
		getNumChildren(): number
		/**
		 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraphs</a></code> contained in the section (including <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code>).
		 * 
		 * @returns the section paragraphs
		 */
		getParagraphs(): DocumentApp.Paragraph[]
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Tables</a></code> contained in the section.
		 * 
		 * @returns the section tables
		 */
		getTables(): DocumentApp.Table[]
		/**
		 * Retrieves the contents of the element as a text string.
		 * 
		 * @returns the contents of the element as text string
		 */
		getText(): string
		/**
		 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * @returns the type of text alignment, or <code>null</code> if the text contains multiple types of text
		 *     alignments or if the text alignment has never been set
		 */
		getTextAlignment(): DocumentApp.TextAlignment
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> at the specified index.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * 
		 * @returns the new horizontal rule
		 */
		insertHorizontalRule(
			childIndex: number
		): DocumentApp.HorizontalRule
		/**
		 * Creates and inserts an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob, at the specified
		 * index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param image - the image data
		 * 
		 * @returns the inserted inline image
		 */
		insertImage(
			childIndex: number,
			image: BlobSource
		): DocumentApp.InlineImage
		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> at the specified index.
		 * 
		 * <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param image - the image to insert
		 * 
		 * @returns the inserted inline image
		 */
		insertImage(
			childIndex: number,
			image: DocumentApp.InlineImage
		): DocumentApp.InlineImage

		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param listItem - the list item to insert
		 * 
		 * @returns the inserted list item
		 */
		insertListItem(
			childIndex: number,
			listItem: DocumentApp.ListItem
		): DocumentApp.ListItem
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index, containing the specified
		 * text contents.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param text - the list item's text contents
		 * 
		 * @returns the new list item
		 */
		insertListItem(
			childIndex: number,
			text: string
		): DocumentApp.ListItem

		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param paragraph - the paragraph to insert
		 * 
		 * @returns the inserted paragraph
		 */
		insertParagraph(
			childIndex: number,
			paragraph: DocumentApp.Paragraph
		): DocumentApp.Paragraph
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index, containing the specified
		 * text contents.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param text - the paragraph's text contents
		 * 
		 * @returns the new paragraph
		 */
		insertParagraph(
			childIndex: number,
			text: string
		): DocumentApp.Paragraph

		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert
		 * 
		 * @returns the new table
		 */
		insertTable(
			childIndex: number
		): DocumentApp.Table
		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param table - the table to insert
		 * 
		 * @returns the inserted table
		 */
		insertTable(
			childIndex: number,
			table: DocumentApp.Table
		): DocumentApp.Table
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing the specified cells, at the specified index.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param cells - the text contents of the table cells to add to the new table
		 * 
		 * @returns the new table
		 */
		insertTable(
			childIndex: number,
			cells: string[][]
		): DocumentApp.Table

		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Removes the specified child element.
		 * 
		 * @param child - the child element to remove
		 * 
		 * @returns the current element
		 */
		removeChild(
			child: DocumentApp.Element
		): DocumentApp.FooterSection
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.FooterSection
		/**
		 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
		 * expressions.
		 * 
		 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
		 * Because of this you'll need to escape any backslashes in the pattern.
		 * 
		 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
		 * expression library, which limits the <a
		 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
		 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
		 * </code></pre>
		 * 
		 * @param searchPattern - the regex pattern to search for
		 * @param replacement - the text to use as replacement
		 * 
		 * @returns the current element
		 */
		replaceText(
			searchPattern: string,
			replacement: string
		): DocumentApp.Element
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.FooterSection
		/**
		 * Sets the link url.
		 * 
		 * @param url - the link url
		 * 
		 * @returns the current element
		 */
		setLinkUrl(
			url: string
		): DocumentApp.FooterSection
		/**
		 * Sets the contents as plain text.
		 * 
		 * <p>Note: existing contents are cleared.
		 * 
		 * @param text - the new text contents
		 * 
		 * @returns the current element
		 */
		setText(
			text: string
		): DocumentApp.FooterSection
		/**
		 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Make the entire first paragraph be superscript.
		 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
		 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
		 * </code></pre>
		 * 
		 * @param textAlignment - the type of text alignment to apply
		 * 
		 * @returns the current element
		 */
		setTextAlignment(
			textAlignment: DocumentApp.TextAlignment
		): DocumentApp.FooterSection

	}

	class Footnote {
		private constructor();

		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.Footnote
		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the contents of the footnote element.
		 * 
		 * @returns the footnote section
		 */
		getFootnoteContents(): DocumentApp.FootnoteSection
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.Footnote
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.Footnote

	}

	class FootnoteSection {
		private constructor();

		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * <p>Use this version of <code>appendParagraph</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param paragraph - the paragraph to append
		 * 
		 * @returns the appended paragraph
		 */
		appendParagraph(
			paragraph: DocumentApp.Paragraph
		): DocumentApp.Paragraph
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> containing the specified text contents.
		 * 
		 * @param text - the paragraph's text contents
		 * 
		 * @returns the new paragraph
		 */
		appendParagraph(
			text: string
		): DocumentApp.Paragraph

		/**
		 * Clears the contents of the element.
		 * 
		 * @returns the current element
		 */
		clear(): DocumentApp.FootnoteSection
		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.FootnoteSection
		/**
		 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
		 * 
		 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
		 * 
		 * <p>Child elements fully contained within a deleted text range are removed from the element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Insert two paragraphs separated by a paragraph containing an
		 * // horizontal rule.
		 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
		 * body.insertHorizontalRule(0);
		 * body.insertParagraph(0, &quot;An example.&quot;);
		 * 
		 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
		 * body.editAsText().deleteText(14, 25);
		 * </code></pre>
		 * 
		 * @returns a text version of the current element
		 */
		editAsText(): DocumentApp.Text
		/**
		 * Searches the contents of the element for a descendant of the specified type.
		 * 
		 * @param elementType - the type of element to search for
		 * 
		 * @returns a search result indicating the position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for a descendant of the specified type, starting from the
		 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define the search parameters.
		 * var searchType = DocumentApp.ElementType.PARAGRAPH;
		 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
		 * var searchResult = null;
		 * 
		 * // Search until the paragraph is found.
		 * while (searchResult = body.findElement(searchType, searchResult)) {
		 *   var par = searchResult.getElement().asParagraph();
		 *   if (par.getHeading() == searchHeading) {
		 *     // Found one, update and stop.
		 *     par.setText(&#39;This is the first header.&#39;);
		 *     return;
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @param elementType - the type of element to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Searches the contents of the element for the specified text pattern using regular expressions.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * 
		 * @returns a search result indicating the position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for the specified text pattern, starting from a given
		 * search result.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the child element at the specified child index.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document.
		 * var firstChild = body.getChild(0);
		 * 
		 * // If it&#39;s a paragraph, set its contents.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
		 * }
		 * </code></pre>
		 * 
		 * @param childIndex - the index of the child element to retrieve
		 * 
		 * @returns the child element at the specified index
		 */
		getChild(
			childIndex: number
		): DocumentApp.Element
		/**
		 * Retrieves the child index for the specified child element.
		 * 
		 * @param child - the child element for which to retrieve the index
		 * 
		 * @returns the child index
		 */
		getChildIndex(
			child: DocumentApp.Element
		): number
		/**
		 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnotes</a></code> contained in the section.
		 * 
		 * @returns the section footnotes
		 */
		getFootnotes(): DocumentApp.Footnote[]
		/**
		 * Retrieves the link url.
		 * 
		 * @returns the link url, or null if the element contains multiple values for this attribute
		 */
		getLinkUrl(): string
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the number of children.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Log the number of elements in the document.
		 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
		 *     &quot; elements in the document body.&quot;);
		 * </code></pre>
		 * 
		 * @returns the number of children
		 */
		getNumChildren(): number
		/**
		 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraphs</a></code> contained in the section (including <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code>).
		 * 
		 * @returns the section paragraphs
		 */
		getParagraphs(): DocumentApp.Paragraph[]
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the contents of the element as a text string.
		 * 
		 * @returns the contents of the element as text string
		 */
		getText(): string
		/**
		 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * @returns the type of text alignment, or <code>null</code> if the text contains multiple types of text
		 *     alignments or if the text alignment has never been set
		 */
		getTextAlignment(): DocumentApp.TextAlignment
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param paragraph - the paragraph to insert
		 * 
		 * @returns the inserted paragraph
		 */
		insertParagraph(
			childIndex: number,
			paragraph: DocumentApp.Paragraph
		): DocumentApp.Paragraph
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index, containing the specified
		 * text contents.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param text - the paragraph's text contents
		 * 
		 * @returns the new paragraph
		 */
		insertParagraph(
			childIndex: number,
			text: string
		): DocumentApp.Paragraph

		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Removes the specified child element.
		 * 
		 * @param child - the child element to remove
		 * 
		 * @returns the current element
		 */
		removeChild(
			child: DocumentApp.Element
		): DocumentApp.FootnoteSection
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.FootnoteSection
		/**
		 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
		 * expressions.
		 * 
		 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
		 * Because of this you'll need to escape any backslashes in the pattern.
		 * 
		 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
		 * expression library, which limits the <a
		 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
		 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
		 * </code></pre>
		 * 
		 * @param searchPattern - the regex pattern to search for
		 * @param replacement - the text to use as replacement
		 * 
		 * @returns the current element
		 */
		replaceText(
			searchPattern: string,
			replacement: string
		): DocumentApp.Element
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.FootnoteSection
		/**
		 * Sets the link url.
		 * 
		 * @param url - the link url
		 * 
		 * @returns the current element
		 */
		setLinkUrl(
			url: string
		): DocumentApp.FootnoteSection
		/**
		 * Sets the contents as plain text.
		 * 
		 * <p>Note: existing contents are cleared.
		 * 
		 * @param text - the new text contents
		 * 
		 * @returns the current element
		 */
		setText(
			text: string
		): DocumentApp.FootnoteSection
		/**
		 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Make the entire first paragraph be superscript.
		 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
		 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
		 * </code></pre>
		 * 
		 * @param textAlignment - the type of text alignment to apply
		 * 
		 * @returns the current element
		 */
		setTextAlignment(
			textAlignment: DocumentApp.TextAlignment
		): DocumentApp.FootnoteSection

	}

	enum GlyphType {
		/**
		 * The default bullet, circular and filled.
		 */
		BULLET = "BULLET",
		/**
		 * A hollow bullet.
		 */
		HOLLOW_BULLET = "HOLLOW_BULLET",
		/**
		 * A latin, lowercase bullet.
		 */
		LATIN_LOWER = "LATIN_LOWER",
		/**
		 * A latin, uppercase bullet.
		 */
		LATIN_UPPER = "LATIN_UPPER",
		/**
		 * A number based bullet.
		 */
		NUMBER = "NUMBER",
		/**
		 * A roman numeral, lowercase bullet.
		 */
		ROMAN_LOWER = "ROMAN_LOWER",
		/**
		 * A roman numeral, uppercase bullet.
		 */
		ROMAN_UPPER = "ROMAN_UPPER",
		/**
		 * A square bullet.
		 */
		SQUARE_BULLET = "SQUARE_BULLET",
	}

	class HeaderSection {
		private constructor();

		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @returns the new horizontal rule
		 */
		appendHorizontalRule(): DocumentApp.HorizontalRule
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob.
		 * 
		 * <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param image - the image data
		 * 
		 * @returns the appended image
		 */
		appendImage(
			image: BlobSource
		): DocumentApp.InlineImage
		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * <p>Use this version of <code>appendImage</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
		 * 
		 * @param image - the image data
		 * 
		 * @returns the appended image
		 */
		appendImage(
			image: DocumentApp.InlineImage
		): DocumentApp.InlineImage

		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
		 * 
		 * <p>Use this version of <code>appendListItem</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
		 * 
		 * @param listItem - the list item to append
		 * 
		 * @returns the appended list item
		 */
		appendListItem(
			listItem: DocumentApp.ListItem
		): DocumentApp.ListItem
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> containing the specified text contents.
		 * 
		 * <p>Consecutive list items are added as part of the same list.
		 * 
		 * @param text - the list item's text contents
		 * 
		 * @returns the new list item
		 */
		appendListItem(
			text: string
		): DocumentApp.ListItem

		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * <p>Use this version of <code>appendParagraph</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param paragraph - the paragraph to append
		 * 
		 * @returns the appended paragraph
		 */
		appendParagraph(
			paragraph: DocumentApp.Paragraph
		): DocumentApp.Paragraph
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> containing the specified text contents.
		 * 
		 * @param text - the paragraph's text contents
		 * 
		 * @returns the new paragraph
		 */
		appendParagraph(
			text: string
		): DocumentApp.Paragraph

		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
		 * 
		 * <p>This method will also append an empty paragraph after the table, since Google Docs documents
		 * cannot end with a table.
		 * 
		 * @returns the new table
		 */
		appendTable(): DocumentApp.Table
		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
		 * 
		 * <p>Use this version of <code>appendTable</code> when appending a copy of an existing <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
		 * This method will also append an empty paragraph after the table, since Google Docs documents
		 * cannot end with a table.
		 * 
		 * @param table - the table to append
		 * 
		 * @returns the appended table
		 */
		appendTable(
			table: DocumentApp.Table
		): DocumentApp.Table
		/**
		 * Appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> for each specified string value.
		 * 
		 * <p>This method will also append an empty paragraph after the table, since Google Docs documents
		 * cannot end with a table.
		 * 
		 * @param cells - the text contents of the table cells to add to the new table
		 * 
		 * @returns the appended table
		 */
		appendTable(
			cells: string[][]
		): DocumentApp.Table

		/**
		 * Clears the contents of the element.
		 * 
		 * @returns the current element
		 */
		clear(): DocumentApp.HeaderSection
		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.HeaderSection
		/**
		 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
		 * 
		 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
		 * 
		 * <p>Child elements fully contained within a deleted text range are removed from the element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Insert two paragraphs separated by a paragraph containing an
		 * // horizontal rule.
		 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
		 * body.insertHorizontalRule(0);
		 * body.insertParagraph(0, &quot;An example.&quot;);
		 * 
		 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
		 * body.editAsText().deleteText(14, 25);
		 * </code></pre>
		 * 
		 * @returns a text version of the current element
		 */
		editAsText(): DocumentApp.Text
		/**
		 * Searches the contents of the element for a descendant of the specified type.
		 * 
		 * @param elementType - the type of element to search for
		 * 
		 * @returns a search result indicating the position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for a descendant of the specified type, starting from the
		 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define the search parameters.
		 * var searchType = DocumentApp.ElementType.PARAGRAPH;
		 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
		 * var searchResult = null;
		 * 
		 * // Search until the paragraph is found.
		 * while (searchResult = body.findElement(searchType, searchResult)) {
		 *   var par = searchResult.getElement().asParagraph();
		 *   if (par.getHeading() == searchHeading) {
		 *     // Found one, update and stop.
		 *     par.setText(&#39;This is the first header.&#39;);
		 *     return;
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @param elementType - the type of element to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Searches the contents of the element for the specified text pattern using regular expressions.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * 
		 * @returns a search result indicating the position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for the specified text pattern, starting from a given
		 * search result.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the child element at the specified child index.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document.
		 * var firstChild = body.getChild(0);
		 * 
		 * // If it&#39;s a paragraph, set its contents.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
		 * }
		 * </code></pre>
		 * 
		 * @param childIndex - the index of the child element to retrieve
		 * 
		 * @returns the child element at the specified index
		 */
		getChild(
			childIndex: number
		): DocumentApp.Element
		/**
		 * Retrieves the child index for the specified child element.
		 * 
		 * @param child - the child element for which to retrieve the index
		 * 
		 * @returns the child index
		 */
		getChildIndex(
			child: DocumentApp.Element
		): number
		/**
		 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/footnote.html'>Footnotes</a></code> contained in the section.
		 * 
		 * @returns the section footnotes
		 */
		getFootnotes(): DocumentApp.Footnote[]
		/**
		 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImages</a></code> contained in the section.
		 * 
		 * @returns the section images
		 */
		getImages(): DocumentApp.InlineImage[]
		/**
		 * Retrieves the link url.
		 * 
		 * @returns the link url, or null if the element contains multiple values for this attribute
		 */
		getLinkUrl(): string
		/**
		 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code> contained in the section.
		 * 
		 * @returns the section list items
		 */
		getListItems(): DocumentApp.ListItem[]
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the number of children.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Log the number of elements in the document.
		 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
		 *     &quot; elements in the document body.&quot;);
		 * </code></pre>
		 * 
		 * @returns the number of children
		 */
		getNumChildren(): number
		/**
		 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraphs</a></code> contained in the section (including <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code>).
		 * 
		 * @returns the section paragraphs
		 */
		getParagraphs(): DocumentApp.Paragraph[]
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Tables</a></code> contained in the section.
		 * 
		 * @returns the section tables
		 */
		getTables(): DocumentApp.Table[]
		/**
		 * Retrieves the contents of the element as a text string.
		 * 
		 * @returns the contents of the element as text string
		 */
		getText(): string
		/**
		 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * @returns the type of text alignment, or <code>null</code> if the text contains multiple types of text
		 *     alignments or if the text alignment has never been set
		 */
		getTextAlignment(): DocumentApp.TextAlignment
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> at the specified index.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * 
		 * @returns the new horizontal rule
		 */
		insertHorizontalRule(
			childIndex: number
		): DocumentApp.HorizontalRule
		/**
		 * Creates and inserts an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob, at the specified
		 * index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param image - the image data
		 * 
		 * @returns the inserted inline image
		 */
		insertImage(
			childIndex: number,
			image: BlobSource
		): DocumentApp.InlineImage
		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> at the specified index.
		 * 
		 * <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param image - the image to insert
		 * 
		 * @returns the inserted inline image
		 */
		insertImage(
			childIndex: number,
			image: DocumentApp.InlineImage
		): DocumentApp.InlineImage

		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param listItem - the list item to insert
		 * 
		 * @returns the inserted list item
		 */
		insertListItem(
			childIndex: number,
			listItem: DocumentApp.ListItem
		): DocumentApp.ListItem
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index, containing the specified
		 * text contents.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param text - the list item's text contents
		 * 
		 * @returns the new list item
		 */
		insertListItem(
			childIndex: number,
			text: string
		): DocumentApp.ListItem

		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param paragraph - the paragraph to insert
		 * 
		 * @returns the inserted paragraph
		 */
		insertParagraph(
			childIndex: number,
			paragraph: DocumentApp.Paragraph
		): DocumentApp.Paragraph
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index, containing the specified
		 * text contents.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param text - the paragraph's text contents
		 * 
		 * @returns the new paragraph
		 */
		insertParagraph(
			childIndex: number,
			text: string
		): DocumentApp.Paragraph

		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert
		 * 
		 * @returns the new table
		 */
		insertTable(
			childIndex: number
		): DocumentApp.Table
		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param table - the table to insert
		 * 
		 * @returns the inserted table
		 */
		insertTable(
			childIndex: number,
			table: DocumentApp.Table
		): DocumentApp.Table
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing the specified cells, at the specified index.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param cells - the text contents of the table cells to add to the new table
		 * 
		 * @returns the new table
		 */
		insertTable(
			childIndex: number,
			cells: string[][]
		): DocumentApp.Table

		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Removes the specified child element.
		 * 
		 * @param child - the child element to remove
		 * 
		 * @returns the current element
		 */
		removeChild(
			child: DocumentApp.Element
		): DocumentApp.HeaderSection
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.HeaderSection
		/**
		 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
		 * expressions.
		 * 
		 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
		 * Because of this you'll need to escape any backslashes in the pattern.
		 * 
		 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
		 * expression library, which limits the <a
		 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
		 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
		 * </code></pre>
		 * 
		 * @param searchPattern - the regex pattern to search for
		 * @param replacement - the text to use as replacement
		 * 
		 * @returns the current element
		 */
		replaceText(
			searchPattern: string,
			replacement: string
		): DocumentApp.Element
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.HeaderSection
		/**
		 * Sets the link url.
		 * 
		 * @param url - the link url
		 * 
		 * @returns the current element
		 */
		setLinkUrl(
			url: string
		): DocumentApp.HeaderSection
		/**
		 * Sets the contents as plain text.
		 * 
		 * <p>Note: existing contents are cleared.
		 * 
		 * @param text - the new text contents
		 * 
		 * @returns the current element
		 */
		setText(
			text: string
		): DocumentApp.HeaderSection
		/**
		 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Make the entire first paragraph be superscript.
		 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
		 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
		 * </code></pre>
		 * 
		 * @param textAlignment - the type of text alignment to apply
		 * 
		 * @returns the current element
		 */
		setTextAlignment(
			textAlignment: DocumentApp.TextAlignment
		): DocumentApp.HeaderSection

	}

	enum HorizontalAlignment {
		/**
		 * The center-alignment option.
		 */
		CENTER = "CENTER",
		/**
		 * The justify-alignment option.
		 */
		JUSTIFY = "JUSTIFY",
		/**
		 * The left-alignment option.
		 */
		LEFT = "LEFT",
		/**
		 * The right-alignment option.
		 */
		RIGHT = "RIGHT",
	}

	class HorizontalRule {
		private constructor();

		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.HorizontalRule
		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.HorizontalRule
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.HorizontalRule

	}

	class InlineDrawing {
		private constructor();

		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.InlineDrawing
		/**
		 * Returns the drawing's alternate description.
		 * 
		 * @returns the alternate title, or <code>null</code> if the element does not have an alternate title
		 */
		getAltDescription(): string
		/**
		 * Returns the drawing's alternate title.
		 * 
		 * @returns the alternate title, or <code>null</code> if the element does not have an alternate title
		 */
		getAltTitle(): string
		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Merges the element with the preceding sibling of the same type.
		 * 
		 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
		 * the current element are moved to the preceding sibling element.
		 * 
		 * <p>The current element is removed from the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append two paragraphs to the document.
		 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
		 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
		 * 
		 * // Merge the newly added paragraphs into a single paragraph.
		 * par2.merge();
		 * </code></pre>
		 * 
		 * @returns the merged element
		 */
		merge(): DocumentApp.InlineDrawing
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.InlineDrawing
		/**
		 * Sets the drawing's alternate description. If the given title is <code>null</code>, sets the
		 * description to the empty string.
		 * 
		 * @param description - the alternate title
		 * 
		 * @returns the current object
		 */
		setAltDescription(
			description: string
		): DocumentApp.InlineDrawing
		/**
		 * Sets the drawing's alternate title. If the given title is <code>null</code>, sets the title to the
		 * empty string.
		 * 
		 * @param title - the alternate title
		 * 
		 * @returns the current object
		 */
		setAltTitle(
			title: string
		): DocumentApp.InlineDrawing
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.InlineDrawing

	}

	class InlineImage {
		private constructor();

		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.InlineImage
		/**
		 * Returns the image's alternate description.
		 * 
		 * @returns the alternate title, or <code>null</code> if the element does not have an alternate title
		 */
		getAltDescription(): string
		/**
		 * Returns the image's alternate title.
		 * 
		 * @returns the alternate title, or <code>null</code> if the element does not have an alternate title
		 */
		getAltTitle(): string
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
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Return the data inside this object as a blob.
		 * 
		 * @returns The data as a blob.
		 */
		getBlob(): Blob
		/**
		 * Retrieves the image's height, in pixels.
		 * 
		 * @returns the image's height, in pixels
		 */
		getHeight(): number
		/**
		 * Retrieves the link URL.
		 * 
		 * @returns the link URL, or <code>null</code> if the element contains multiple values for this
		 *     attribute.
		 */
		getLinkUrl(): string
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Retrieves the image's width, in pixels.
		 * 
		 * @returns the image's width, in pixels
		 */
		getWidth(): number
		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Merges the element with the preceding sibling of the same type.
		 * 
		 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
		 * the current element are moved to the preceding sibling element.
		 * 
		 * <p>The current element is removed from the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append two paragraphs to the document.
		 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
		 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
		 * 
		 * // Merge the newly added paragraphs into a single paragraph.
		 * par2.merge();
		 * </code></pre>
		 * 
		 * @returns the merged element
		 */
		merge(): DocumentApp.InlineImage
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.InlineImage
		/**
		 * Sets the image's alternate description. If the given title is <code>null</code>, sets the
		 * description to the empty string.
		 * 
		 * @param description - the alternate title
		 * 
		 * @returns the current object
		 */
		setAltDescription(
			description: string
		): DocumentApp.InlineImage
		/**
		 * Sets the image's alternate title. If the given title is <code>null</code>, sets the title to the
		 * empty string.
		 * 
		 * @param title - the alternate title
		 * 
		 * @returns the current object
		 */
		setAltTitle(
			title: string
		): DocumentApp.InlineImage
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.InlineImage
		/**
		 * Sets the image's height, in pixels.
		 * 
		 * @param height - the image's height, in pixels
		 * 
		 * @returns the current object
		 */
		setHeight(
			height: number
		): DocumentApp.InlineImage
		/**
		 * Sets the link URL. If the given URL is <code>null</code> or an empty string, this method will create
		 * a link with an empty URL that may display as "Invalid link" in Google Docs.
		 * 
		 * @param url - the link URL
		 * 
		 * @returns the current object
		 */
		setLinkUrl(
			url: string
		): DocumentApp.InlineImage
		/**
		 * Sets the image's width, in pixels.
		 * 
		 * @param width - the image's width, in pixels
		 * 
		 * @returns the current object
		 */
		setWidth(
			width: number
		): DocumentApp.InlineImage

	}

	class ListItem {
		private constructor();

		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> from the specified image blob.
		 * 
		 * @param image - the image data
		 * 
		 * @returns the new positioned image
		 */
		addPositionedImage(
			image: BlobSource
		): DocumentApp.PositionedImage
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.
		 * 
		 * @returns the new horizontal rule
		 */
		appendHorizontalRule(): DocumentApp.HorizontalRule
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob.
		 * 
		 * @param image - the image data
		 * 
		 * @returns the appended image
		 */
		appendInlineImage(
			image: BlobSource
		): DocumentApp.InlineImage
		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
		 * 
		 * @param image - the image data
		 * 
		 * @returns the appended image
		 */
		appendInlineImage(
			image: DocumentApp.InlineImage
		): DocumentApp.InlineImage

		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.
		 * 
		 * <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>.
		 * If the current element is contained in a table cell, an exception will be thrown.
		 * 
		 * @returns the new page break element
		 */
		appendPageBreak(): DocumentApp.PageBreak
		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.
		 * 
		 * <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>.
		 * If the current element is contained in a table cell, an exception will be thrown.
		 * 
		 * @param pageBreak - the page break to append
		 * 
		 * @returns the appended page break element
		 */
		appendPageBreak(
			pageBreak: DocumentApp.PageBreak
		): DocumentApp.PageBreak

		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element.
		 * 
		 * @param text - the text element to append
		 * 
		 * @returns the appended text element
		 */
		appendText(
			text: DocumentApp.Text
		): DocumentApp.Text
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element with the specified contents.
		 * 
		 * @param text - the text contents
		 * 
		 * @returns the new text element
		 */
		appendText(
			text: string
		): DocumentApp.Text

		/**
		 * Clears the contents of the element.
		 * 
		 * @returns the current element
		 */
		clear(): DocumentApp.ListItem
		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.ListItem
		/**
		 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
		 * 
		 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
		 * 
		 * <p>Child elements fully contained within a deleted text range are removed from the element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Insert two paragraphs separated by a paragraph containing an
		 * // horizontal rule.
		 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
		 * body.insertHorizontalRule(0);
		 * body.insertParagraph(0, &quot;An example.&quot;);
		 * 
		 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
		 * body.editAsText().deleteText(14, 25);
		 * </code></pre>
		 * 
		 * @returns a text version of the current element
		 */
		editAsText(): DocumentApp.Text
		/**
		 * Searches the contents of the element for a descendant of the specified type.
		 * 
		 * @param elementType - the type of element to search for
		 * 
		 * @returns a search result indicating the position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for a descendant of the specified type, starting from the
		 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define the search parameters.
		 * var searchType = DocumentApp.ElementType.PARAGRAPH;
		 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
		 * var searchResult = null;
		 * 
		 * // Search until the paragraph is found.
		 * while (searchResult = body.findElement(searchType, searchResult)) {
		 *   var par = searchResult.getElement().asParagraph();
		 *   if (par.getHeading() == searchHeading) {
		 *     // Found one, update and stop.
		 *     par.setText(&#39;This is the first header.&#39;);
		 *     return;
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @param elementType - the type of element to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Searches the contents of the element for the specified text pattern using regular expressions.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * 
		 * @returns a search result indicating the position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for the specified text pattern, starting from a given
		 * search result.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-alignment.html'>HorizontalAlignment</a></code>.
		 * 
		 * @returns the alignment
		 */
		getAlignment(): DocumentApp.HorizontalAlignment
		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the child element at the specified child index.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document.
		 * var firstChild = body.getChild(0);
		 * 
		 * // If it&#39;s a paragraph, set its contents.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
		 * }
		 * </code></pre>
		 * 
		 * @param childIndex - the index of the child element to retrieve
		 * 
		 * @returns the child element at the specified index
		 */
		getChild(
			childIndex: number
		): DocumentApp.Element
		/**
		 * Retrieves the child index for the specified child element.
		 * 
		 * @param child - the child element for which to retrieve the index
		 * 
		 * @returns the child index
		 */
		getChildIndex(
			child: DocumentApp.Element
		): number
		/**
		 * Retrieves the list item's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/glyph-type.html'>GlyphType</a></code>.
		 * 
		 * @returns the glyph type
		 */
		getGlyphType(): DocumentApp.GlyphType
		/**
		 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph-heading.html'>ParagraphHeading</a></code>.
		 * 
		 * @returns the heading
		 */
		getHeading(): DocumentApp.ParagraphHeading
		/**
		 * Retrieves the end indentation, in points.
		 * 
		 * @returns the end indentation, in points
		 */
		getIndentEnd(): Number
		/**
		 * Retrieves the first line indentation, in points.
		 * 
		 * @returns the first line indentation, in points
		 */
		getIndentFirstLine(): Number
		/**
		 * Retrieves the start indentation.
		 * 
		 * @returns the start indentation
		 */
		getIndentStart(): Number
		/**
		 * Retrieves the line spacing, in points.
		 * 
		 * @returns the line spacing, in points
		 */
		getLineSpacing(): Number
		/**
		 * Retrieves the link url.
		 * 
		 * @returns the link url, or null if the element contains multiple values for this attribute
		 */
		getLinkUrl(): string
		/**
		 * Retrieves the list ID.
		 * 
		 * @returns the list ID
		 */
		getListId(): string
		/**
		 * Retrieves the list item's nesting level.
		 * 
		 * <p>By default, list items have a nesting level of zero. The nesting level determines the glyph
		 * that is used by the list item.
		 * 
		 * @returns the nesting level
		 */
		getNestingLevel(): number
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the number of children.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Log the number of elements in the document.
		 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
		 *     &quot; elements in the document body.&quot;);
		 * </code></pre>
		 * 
		 * @returns the number of children
		 */
		getNumChildren(): number
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Gets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> by the image's ID.
		 * 
		 * @param id - the image id
		 * 
		 * @returns the positioned image
		 */
		getPositionedImage(
			id: string
		): DocumentApp.PositionedImage
		/**
		 * Gets all <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> objects anchored to the paragraph.
		 * 
		 * @returns a list of positioned images
		 */
		getPositionedImages(): DocumentApp.PositionedImage[]
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the spacing after the element, in points.
		 * 
		 * @returns the spacing after the element, in points
		 */
		getSpacingAfter(): Number
		/**
		 * Retrieves the spacing before the element, in points.
		 * 
		 * @returns the spacing before the element, in points
		 */
		getSpacingBefore(): Number
		/**
		 * Retrieves the contents of the element as a text string.
		 * 
		 * @returns the contents of the element as text string
		 */
		getText(): string
		/**
		 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * @returns the type of text alignment, or <code>null</code> if the text contains multiple types of text
		 *     alignments or if the text alignment has never been set
		 */
		getTextAlignment(): DocumentApp.TextAlignment
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Creates and inserts a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * 
		 * @returns the new horizontal rule element
		 */
		insertHorizontalRule(
			childIndex: number
		): DocumentApp.HorizontalRule
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob, at the specified
		 * index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param image - the image data
		 * 
		 * @returns the inserted inline image element
		 */
		insertInlineImage(
			childIndex: number,
			image: BlobSource
		): DocumentApp.InlineImage
		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param image - the image data
		 * 
		 * @returns the inserted inline image element
		 */
		insertInlineImage(
			childIndex: number,
			image: DocumentApp.InlineImage
		): DocumentApp.InlineImage

		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> at the specified index.
		 * 
		 * <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>.
		 * If the current element is contained in a table cell, an exception will be thrown.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * 
		 * @returns the new page break element
		 */
		insertPageBreak(
			childIndex: number
		): DocumentApp.PageBreak
		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> at the specified index.
		 * 
		 * <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>.
		 * If the current element is contained in a table cell, an exception will be thrown.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param pageBreak - the p[age break to insert
		 * 
		 * @returns the inserted page break element
		 */
		insertPageBreak(
			childIndex: number,
			pageBreak: DocumentApp.PageBreak
		): DocumentApp.PageBreak

		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element at the specified index, with the specified text
		 * contents.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param text - the text element to insert
		 * 
		 * @returns the inserted text element
		 */
		insertText(
			childIndex: number,
			text: DocumentApp.Text
		): DocumentApp.Text
		/**
		 * Creates and inserts a new text element at the specified index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param text - the text contents
		 * 
		 * @returns the new text element
		 */
		insertText(
			childIndex: number,
			text: string
		): DocumentApp.Text

		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Retrieves the left-to-right setting.
		 * 
		 * @returns the left-to-right setting
		 */
		isLeftToRight(): Boolean
		/**
		 * Merges the element with the preceding sibling of the same type.
		 * 
		 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
		 * the current element are moved to the preceding sibling element.
		 * 
		 * <p>The current element is removed from the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append two paragraphs to the document.
		 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
		 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
		 * 
		 * // Merge the newly added paragraphs into a single paragraph.
		 * par2.merge();
		 * </code></pre>
		 * 
		 * @returns the merged element
		 */
		merge(): DocumentApp.ListItem
		/**
		 * Removes the specified child element.
		 * 
		 * @param child - the child element to remove
		 * 
		 * @returns the current element
		 */
		removeChild(
			child: DocumentApp.Element
		): DocumentApp.ListItem
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.ListItem
		/**
		 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> by the image's ID.
		 * 
		 * @param id
		 * 
		 * @returns whether or not the specified image was removed
		 */
		removePositionedImage(
			id: string
		): Boolean
		/**
		 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
		 * expressions.
		 * 
		 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
		 * Because of this you'll need to escape any backslashes in the pattern.
		 * 
		 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
		 * expression library, which limits the <a
		 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
		 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
		 * </code></pre>
		 * 
		 * @param searchPattern - the regex pattern to search for
		 * @param replacement - the text to use as replacement
		 * 
		 * @returns the current element
		 */
		replaceText(
			searchPattern: string,
			replacement: string
		): DocumentApp.Element
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-alignment.html'>HorizontalAlignment</a></code>.
		 * 
		 * @param alignment - the horizontal alignment
		 * 
		 * @returns the current element
		 */
		setAlignment(
			alignment: DocumentApp.HorizontalAlignment
		): DocumentApp.ListItem
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.ListItem
		/**
		 * Sets the list item's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/glyph-type.html'>GlyphType</a></code>.
		 * 
		 * @param glyphType - the glyph type
		 * 
		 * @returns the current element
		 */
		setGlyphType(
			glyphType: DocumentApp.GlyphType
		): DocumentApp.ListItem
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph-heading.html'>ParagraphHeading</a></code>.
		 * 
		 * @param heading - the heading
		 * 
		 * @returns the current element
		 */
		setHeading(
			heading: DocumentApp.ParagraphHeading
		): DocumentApp.ListItem
		/**
		 * Sets the end indentation, in points.
		 * 
		 * @param indentEnd - the end indentation, in points
		 * 
		 * @returns the current element
		 */
		setIndentEnd(
			indentEnd: Number
		): DocumentApp.ListItem
		/**
		 * Sets the first line indentation, in points.
		 * 
		 * @param indentFirstLine - the first line indentation, in points
		 * 
		 * @returns the current element
		 */
		setIndentFirstLine(
			indentFirstLine: Number
		): DocumentApp.ListItem
		/**
		 * Sets the start indentation, in points.
		 * 
		 * @param indentStart - the start indentation, in points
		 * 
		 * @returns the current element
		 */
		setIndentStart(
			indentStart: Number
		): DocumentApp.ListItem
		/**
		 * Sets the left-to-right setting.
		 * 
		 * @param leftToRight - the left-to-right setting
		 * 
		 * @returns the current element
		 */
		setLeftToRight(
			leftToRight: Boolean
		): DocumentApp.ListItem
		/**
		 * Sets the line spacing, as a quantity indicating the number of lines to use for spacing.
		 * 
		 * @param multiplier - the number of lines
		 * 
		 * @returns the current element
		 */
		setLineSpacing(
			multiplier: Number
		): DocumentApp.ListItem
		/**
		 * Sets the link url.
		 * 
		 * @param url - the link url
		 * 
		 * @returns the current element
		 */
		setLinkUrl(
			url: string
		): DocumentApp.ListItem
		/**
		 * Sets the list ID.
		 * 
		 * <p>The list ID is set to the same value for the specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>. The two <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItems</a></code> will be treated as members of the same list.
		 * 
		 * @param listItem - the list item whose list ID to use
		 * 
		 * @returns the current element
		 */
		setListId(
			listItem: DocumentApp.ListItem
		): DocumentApp.ListItem
		/**
		 * Sets the list item's nesting level.
		 * 
		 * <p>By default, list items have a nesting level of zero. The nesting level determines the glyph
		 * that is used by the list item.
		 * 
		 * @param nestingLevel - the nesting level
		 * 
		 * @returns the current element
		 */
		setNestingLevel(
			nestingLevel: number
		): DocumentApp.ListItem
		/**
		 * Sets the spacing after the element, in points.
		 * 
		 * @param spacingAfter - the spacing after the element, in points
		 * 
		 * @returns the current element
		 */
		setSpacingAfter(
			spacingAfter: Number
		): DocumentApp.ListItem
		/**
		 * Sets the spacing before the element, in points.
		 * 
		 * @param spacingBefore - the spacing before the element, in points
		 * 
		 * @returns the current element
		 */
		setSpacingBefore(
			spacingBefore: Number
		): DocumentApp.ListItem
		/**
		 * Sets the contents of the list item as text.
		 * 
		 * <p>Note: existing contents are cleared.
		 * 
		 * @param text - the new text contents
		 */
		setText(
			text: string
		): void
		/**
		 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Make the entire first paragraph be superscript.
		 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
		 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
		 * </code></pre>
		 * 
		 * @param textAlignment - the type of text alignment to apply
		 * 
		 * @returns the current element
		 */
		setTextAlignment(
			textAlignment: DocumentApp.TextAlignment
		): DocumentApp.ListItem

	}

	class NamedRange {
		private constructor();

		/**
		 * Gets the ID of this <code>NamedRange</code>. The ID is unique within the document.
		 * 
		 * @returns the range's ID, which is unique within the document
		 */
		getId(): string
		/**
		 * Gets the name of this <code>NamedRange</code>. The name is not necessarily unique.
		 * 
		 * @returns the range's name, which is not necessarily unique
		 */
		getName(): string
		/**
		 * Gets the range of elements associated with this <code>NamedRange</code>.
		 * 
		 * @returns the range of elements associated with the name and ID
		 */
		getRange(): DocumentApp.Range
		/**
		 * Removes this <code>NamedRange</code> from the document. This method does not delete the contents of
		 * the range; it merely the removes the reference. Calling this method on a <code>NamedRange</code>
		 * that has already been removed has no effect.
		 */
		remove(): void

	}

	class PageBreak {
		private constructor();

		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.PageBreak
		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.PageBreak
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.PageBreak

	}

	class Paragraph {
		private constructor();

		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> from the specified image blob.
		 * 
		 * @param image - the image data
		 * 
		 * @returns the new positioned image
		 */
		addPositionedImage(
			image: BlobSource
		): DocumentApp.PositionedImage
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.
		 * 
		 * @returns the new horizontal rule
		 */
		appendHorizontalRule(): DocumentApp.HorizontalRule
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob.
		 * 
		 * @param image - the image data
		 * 
		 * @returns the appended image
		 */
		appendInlineImage(
			image: BlobSource
		): DocumentApp.InlineImage
		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
		 * 
		 * @param image - the image data
		 * 
		 * @returns the appended image
		 */
		appendInlineImage(
			image: DocumentApp.InlineImage
		): DocumentApp.InlineImage

		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.
		 * 
		 * <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>.
		 * If the current element is contained in a table cell, an exception will be thrown.
		 * 
		 * @returns the new page break element
		 */
		appendPageBreak(): DocumentApp.PageBreak
		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code>.
		 * 
		 * <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>.
		 * If the current element is contained in a table cell, an exception will be thrown.
		 * 
		 * @param pageBreak - the page break to append
		 * 
		 * @returns the appended page break element
		 */
		appendPageBreak(
			pageBreak: DocumentApp.PageBreak
		): DocumentApp.PageBreak

		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element.
		 * 
		 * @param text - the text element to append
		 * 
		 * @returns the appended text element
		 */
		appendText(
			text: DocumentApp.Text
		): DocumentApp.Text
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element with the specified contents.
		 * 
		 * @param text - the text contents
		 * 
		 * @returns the new text element
		 */
		appendText(
			text: string
		): DocumentApp.Text

		/**
		 * Clears the contents of the element.
		 * 
		 * @returns the current element
		 */
		clear(): DocumentApp.Paragraph
		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.Paragraph
		/**
		 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
		 * 
		 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
		 * 
		 * <p>Child elements fully contained within a deleted text range are removed from the element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Insert two paragraphs separated by a paragraph containing an
		 * // horizontal rule.
		 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
		 * body.insertHorizontalRule(0);
		 * body.insertParagraph(0, &quot;An example.&quot;);
		 * 
		 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
		 * body.editAsText().deleteText(14, 25);
		 * </code></pre>
		 * 
		 * @returns a text version of the current element
		 */
		editAsText(): DocumentApp.Text
		/**
		 * Searches the contents of the element for a descendant of the specified type.
		 * 
		 * @param elementType - the type of element to search for
		 * 
		 * @returns a search result indicating the position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for a descendant of the specified type, starting from the
		 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define the search parameters.
		 * var searchType = DocumentApp.ElementType.PARAGRAPH;
		 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
		 * var searchResult = null;
		 * 
		 * // Search until the paragraph is found.
		 * while (searchResult = body.findElement(searchType, searchResult)) {
		 *   var par = searchResult.getElement().asParagraph();
		 *   if (par.getHeading() == searchHeading) {
		 *     // Found one, update and stop.
		 *     par.setText(&#39;This is the first header.&#39;);
		 *     return;
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @param elementType - the type of element to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Searches the contents of the element for the specified text pattern using regular expressions.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * 
		 * @returns a search result indicating the position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for the specified text pattern, starting from a given
		 * search result.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-alignment.html'>HorizontalAlignment</a></code>.
		 * 
		 * @returns the alignment
		 */
		getAlignment(): DocumentApp.HorizontalAlignment
		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the child element at the specified child index.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document.
		 * var firstChild = body.getChild(0);
		 * 
		 * // If it&#39;s a paragraph, set its contents.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
		 * }
		 * </code></pre>
		 * 
		 * @param childIndex - the index of the child element to retrieve
		 * 
		 * @returns the child element at the specified index
		 */
		getChild(
			childIndex: number
		): DocumentApp.Element
		/**
		 * Retrieves the child index for the specified child element.
		 * 
		 * @param child - the child element for which to retrieve the index
		 * 
		 * @returns the child index
		 */
		getChildIndex(
			child: DocumentApp.Element
		): number
		/**
		 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph-heading.html'>ParagraphHeading</a></code>.
		 * 
		 * @returns the heading
		 */
		getHeading(): DocumentApp.ParagraphHeading
		/**
		 * Retrieves the end indentation, in points.
		 * 
		 * @returns the end indentation, in points
		 */
		getIndentEnd(): Number
		/**
		 * Retrieves the first line indentation, in points.
		 * 
		 * @returns the first line indentation, in points
		 */
		getIndentFirstLine(): Number
		/**
		 * Retrieves the start indentation.
		 * 
		 * @returns the start indentation
		 */
		getIndentStart(): Number
		/**
		 * Retrieves the line spacing, in points.
		 * 
		 * @returns the line spacing, in points
		 */
		getLineSpacing(): Number
		/**
		 * Retrieves the link url.
		 * 
		 * @returns the link url, or null if the element contains multiple values for this attribute
		 */
		getLinkUrl(): string
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the number of children.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Log the number of elements in the document.
		 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
		 *     &quot; elements in the document body.&quot;);
		 * </code></pre>
		 * 
		 * @returns the number of children
		 */
		getNumChildren(): number
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Gets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> by the image's ID.
		 * 
		 * @param id - the image id
		 * 
		 * @returns the positioned image
		 */
		getPositionedImage(
			id: string
		): DocumentApp.PositionedImage
		/**
		 * Gets all <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> objects anchored to the paragraph.
		 * 
		 * @returns a list of positioned images
		 */
		getPositionedImages(): DocumentApp.PositionedImage[]
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the spacing after the element, in points.
		 * 
		 * @returns the spacing after the element, in points
		 */
		getSpacingAfter(): Number
		/**
		 * Retrieves the spacing before the element, in points.
		 * 
		 * @returns the spacing before the element, in points
		 */
		getSpacingBefore(): Number
		/**
		 * Retrieves the contents of the element as a text string.
		 * 
		 * @returns the contents of the element as text string
		 */
		getText(): string
		/**
		 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * @returns the type of text alignment, or <code>null</code> if the text contains multiple types of text
		 *     alignments or if the text alignment has never been set
		 */
		getTextAlignment(): DocumentApp.TextAlignment
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Creates and inserts a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * 
		 * @returns the new horizontal rule element
		 */
		insertHorizontalRule(
			childIndex: number
		): DocumentApp.HorizontalRule
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob, at the specified
		 * index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param image - the image data
		 * 
		 * @returns the inserted inline image element
		 */
		insertInlineImage(
			childIndex: number,
			image: BlobSource
		): DocumentApp.InlineImage
		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param image - the image data
		 * 
		 * @returns the inserted inline image element
		 */
		insertInlineImage(
			childIndex: number,
			image: DocumentApp.InlineImage
		): DocumentApp.InlineImage

		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> at the specified index.
		 * 
		 * <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>.
		 * If the current element is contained in a table cell, an exception will be thrown.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * 
		 * @returns the new page break element
		 */
		insertPageBreak(
			childIndex: number
		): DocumentApp.PageBreak
		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreak</a></code> at the specified index.
		 * 
		 * <p>Note: <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/page-break.html'>PageBreaks</a></code> may not be contained within <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCells</a></code>.
		 * If the current element is contained in a table cell, an exception will be thrown.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param pageBreak - the p[age break to insert
		 * 
		 * @returns the inserted page break element
		 */
		insertPageBreak(
			childIndex: number,
			pageBreak: DocumentApp.PageBreak
		): DocumentApp.PageBreak

		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element at the specified index, with the specified text
		 * contents.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param text - the text element to insert
		 * 
		 * @returns the inserted text element
		 */
		insertText(
			childIndex: number,
			text: DocumentApp.Text
		): DocumentApp.Text
		/**
		 * Creates and inserts a new text element at the specified index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param text - the text contents
		 * 
		 * @returns the new text element
		 */
		insertText(
			childIndex: number,
			text: string
		): DocumentApp.Text

		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Retrieves the left-to-right setting.
		 * 
		 * @returns the left-to-right setting
		 */
		isLeftToRight(): Boolean
		/**
		 * Merges the element with the preceding sibling of the same type.
		 * 
		 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
		 * the current element are moved to the preceding sibling element.
		 * 
		 * <p>The current element is removed from the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append two paragraphs to the document.
		 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
		 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
		 * 
		 * // Merge the newly added paragraphs into a single paragraph.
		 * par2.merge();
		 * </code></pre>
		 * 
		 * @returns the merged element
		 */
		merge(): DocumentApp.Paragraph
		/**
		 * Removes the specified child element.
		 * 
		 * @param child - the child element to remove
		 * 
		 * @returns the current element
		 */
		removeChild(
			child: DocumentApp.Element
		): DocumentApp.Paragraph
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.Paragraph
		/**
		 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/positioned-image.html'>PositionedImage</a></code> by the image's ID.
		 * 
		 * @param id - the image id
		 * 
		 * @returns whether or not the specified image was removed
		 */
		removePositionedImage(
			id: string
		): Boolean
		/**
		 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
		 * expressions.
		 * 
		 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
		 * Because of this you'll need to escape any backslashes in the pattern.
		 * 
		 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
		 * expression library, which limits the <a
		 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
		 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
		 * </code></pre>
		 * 
		 * @param searchPattern - the regex pattern to search for
		 * @param replacement - the text to use as replacement
		 * 
		 * @returns the current element
		 */
		replaceText(
			searchPattern: string,
			replacement: string
		): DocumentApp.Element
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-alignment.html'>HorizontalAlignment</a></code>.
		 * 
		 * @param alignment - the horizontal alignment
		 * 
		 * @returns the current element
		 */
		setAlignment(
			alignment: DocumentApp.HorizontalAlignment
		): DocumentApp.Paragraph
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.Paragraph
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph-heading.html'>ParagraphHeading</a></code>.
		 * 
		 * @param heading - the heading
		 * 
		 * @returns the current element
		 */
		setHeading(
			heading: DocumentApp.ParagraphHeading
		): DocumentApp.Paragraph
		/**
		 * Sets the end indentation, in points.
		 * 
		 * @param indentEnd - the end indentation, in points
		 * 
		 * @returns the current element
		 */
		setIndentEnd(
			indentEnd: Number
		): DocumentApp.Paragraph
		/**
		 * Sets the first line indentation, in points.
		 * 
		 * @param indentFirstLine - the first line indentation, in points
		 * 
		 * @returns the current element
		 */
		setIndentFirstLine(
			indentFirstLine: Number
		): DocumentApp.Paragraph
		/**
		 * Sets the start indentation, in points.
		 * 
		 * @param indentStart - the start indentation, in points
		 * 
		 * @returns the current element
		 */
		setIndentStart(
			indentStart: Number
		): DocumentApp.Paragraph
		/**
		 * Sets the left-to-right setting.
		 * 
		 * @param leftToRight - the left-to-right setting
		 * 
		 * @returns the current element
		 */
		setLeftToRight(
			leftToRight: Boolean
		): DocumentApp.Paragraph
		/**
		 * Sets the line spacing, as a quantity indicating the number of lines to use for spacing.
		 * 
		 * @param multiplier - the number of lines
		 * 
		 * @returns the current element
		 */
		setLineSpacing(
			multiplier: Number
		): DocumentApp.Paragraph
		/**
		 * Sets the link url.
		 * 
		 * @param url - the link url
		 * 
		 * @returns the current element
		 */
		setLinkUrl(
			url: string
		): DocumentApp.Paragraph
		/**
		 * Sets the spacing after the element, in points.
		 * 
		 * @param spacingAfter - the spacing after the element, in points
		 * 
		 * @returns the current element
		 */
		setSpacingAfter(
			spacingAfter: Number
		): DocumentApp.Paragraph
		/**
		 * Sets the spacing before the element, in points.
		 * 
		 * @param spacingBefore - the spacing before the element, in points
		 * 
		 * @returns the current element
		 */
		setSpacingBefore(
			spacingBefore: Number
		): DocumentApp.Paragraph
		/**
		 * Sets the contents of the paragraph as text.
		 * 
		 * <p>Note: existing contents are cleared.
		 * 
		 * @param text - the new text contents
		 */
		setText(
			text: string
		): void
		/**
		 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Make the entire first paragraph be superscript.
		 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
		 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
		 * </code></pre>
		 * 
		 * @param textAlignment - the type of text alignment to apply
		 * 
		 * @returns the current element
		 */
		setTextAlignment(
			textAlignment: DocumentApp.TextAlignment
		): DocumentApp.Paragraph

	}

	enum ParagraphHeading {
		/**
		 * The highest heading option.
		 */
		HEADING1 = "HEADING1",
		/**
		 * The second heading option.
		 */
		HEADING2 = "HEADING2",
		/**
		 * The third heading option
		 */
		HEADING3 = "HEADING3",
		/**
		 * The fourth heading option.
		 */
		HEADING4 = "HEADING4",
		/**
		 * The fifth heading option.
		 */
		HEADING5 = "HEADING5",
		/**
		 * The lowest heading option.
		 */
		HEADING6 = "HEADING6",
		/**
		 * The heading option for normal text.
		 */
		NORMAL = "NORMAL",
		/**
		 * The subtitle heading option.
		 */
		SUBTITLE = "SUBTITLE",
		/**
		 * The title heading option.
		 */
		TITLE = "TITLE",
	}

	class Position {
		private constructor();

		/**
		 * Gets the element that contains this <code>Position</code>. This will be either a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code>
		 * element or a container element like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>. In either case, the relative
		 * position within the element can be determined with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html#getOffset()'>getOffset()</a></code>.
		 * 
		 * @returns the container or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element in which this <code>Position</code> object is located
		 */
		getElement(): DocumentApp.Element
		/**
		 * Gets this <code>Position</code>'s relative location within the element that contains it. If the
		 * element is a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element, the offset is the number of characters before the <code>Position</code> (that is, the index of the character after this <code>Position</code>); for any other
		 * element, the offset is the number of child elements before this <code>Position</code> within the
		 * same container element (that is, the index of the child element after the <code>Position</code>).
		 * 
		 * @returns for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements, the number of characters before this <code>Position</code>; for
		 *     other elements, the number of child elements before this <code>Position</code> within the same
		 *     container element
		 */
		getOffset(): number
		/**
		 * Creates an artificial <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element that represents the text and formatting of the
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> that contains the <code>Position</code>, either directly or through a chain of child elements. To determine the <code>Position</code>'s offset in the returned <code>Text</code> element, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html#getSurroundingTextOffset()'>getSurroundingTextOffset()</a></code>.
		 * 
		 * @returns an element equivalent to the result of calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html#editAsText()'>editAsText()</a></code>
		 *     on the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> that contains the <code>Position</code>, either directly or through a chain of child elements
		 */
		getSurroundingText(): DocumentApp.Text
		/**
		 * Gets the offset of this <code>Position</code> within the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element returned by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/position.html#getSurroundingText()'>getSurroundingText()</a></code>. The offset is the number of characters before the <code>Position</code>
		 * (that is, the index of the character after this <code>Position</code>).
		 * 
		 * @returns the number of characters before this <code>Position</code> in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> that contains the <code>Position</code>, either directly or through a chain of child elements
		 */
		getSurroundingTextOffset(): number
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/bookmark.html'>Bookmark</a></code> at this <code>Position</code>.
		 * 
		 * @returns the new bookmark
		 */
		insertBookmark(): DocumentApp.Bookmark
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> at this <code>Position</code> from the specified image
		 * blob.
		 * 
		 * @param image - the image data to insert at this <code>Position</code>
		 * 
		 * @returns the new image element, or <code>null</code> if the element in which this <code>Position</code> is
		 *     located does not allow images to be inserted
		 */
		insertInlineImage(
			image: BlobSource
		): DocumentApp.InlineImage
		/**
		 * Inserts the specified text at this <code>Position</code>. This method creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code>
		 * element, even if the string is inserted within an existing <code>Text</code> element, so that it is
		 * easy to style the new element.
		 * 
		 * @param text - the string to insert at this <code>Position</code>
		 * 
		 * @returns the new text element, or <code>null</code> if the element in which this <code>Position</code> is
		 *     located does not allow text to be inserted
		 */
		insertText(
			text: string
		): DocumentApp.Text

	}

	class PositionedImage {
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
		/**
		 * Retrieves the image's height, in pixels.
		 * 
		 * @returns the image's height, in pixels
		 */
		getHeight(): number
		/**
		 * Gets the image's ID.
		 * 
		 * @returns the image ID
		 */
		getId(): string
		/**
		 * Gets an enum value that represents how the image is laid out.
		 * 
		 * @returns the image layout
		 */
		getLayout(): DocumentApp.PositionedLayout
		/**
		 * Gets the image's offset, in points, from the paragraph's left.
		 * 
		 * @returns the image offset from the left paragraph's left
		 */
		getLeftOffset(): Number
		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> the image is anchored to.
		 * 
		 * @returns the parent paragraph
		 */
		getParagraph(): DocumentApp.Paragraph
		/**
		 * Gets the image's offset, in points, from the paragraph's top.
		 * 
		 * @returns the image offset from the left paragraph's top
		 */
		getTopOffset(): Number
		/**
		 * Retrieves the image's width, in pixels.
		 * 
		 * @returns the image's width, in pixels
		 */
		getWidth(): number
		/**
		 * Sets the image's height, in pixels.
		 * 
		 * @param height - the image's height, in pixels
		 * 
		 * @returns the current object
		 */
		setHeight(
			height: number
		): DocumentApp.PositionedImage
		/**
		 * Sets the definition of how the image is laid out.
		 * 
		 * @param layout - an enum representing the layout mode
		 * 
		 * @returns this object for chaining
		 */
		setLayout(
			layout: DocumentApp.PositionedLayout
		): DocumentApp.PositionedImage
		/**
		 * Sets the image's offset, in points, from the paragraph's left.
		 * 
		 * @param offset - offset from the paragraph's left
		 * 
		 * @returns this object for chaining
		 */
		setLeftOffset(
			offset: Number
		): DocumentApp.PositionedImage
		/**
		 * Sets the image's offset, in points, from the paragraph's top.
		 * 
		 * @param offset - offset from the paragraph's top
		 * 
		 * @returns this object for chaining
		 */
		setTopOffset(
			offset: Number
		): DocumentApp.PositionedImage
		/**
		 * Sets the image's width, in pixels.
		 * 
		 * @param width - the image's width, in pixels
		 * 
		 * @returns the current object
		 */
		setWidth(
			width: number
		): DocumentApp.PositionedImage

	}

	enum PositionedLayout {
		/**
		 * The image is positioned above the text.
		 */
		ABOVE_TEXT = "ABOVE_TEXT",
		/**
		 * The image breaks the text on the left and right.
		 */
		BREAK_BOTH = "BREAK_BOTH",
		/**
		 * The image breaks the text on the left.
		 */
		BREAK_LEFT = "BREAK_LEFT",
		/**
		 * The image breaks the text on the right.
		 */
		BREAK_RIGHT = "BREAK_RIGHT",
		/**
		 * The image is wrapped by text.
		 */
		WRAP_TEXT = "WRAP_TEXT",
	}

	class Range {
		private constructor();

		/**
		 * Gets all elements in this <code>Range</code>, including any partial <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements (for example, in the case
		 * of a selection that includes only part of a <code>Text</code> element). To determine whether a
		 * <code>Text</code> element is only partially included in the range, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html#isPartial()'>RangeElement.isPartial()</a></code>.
		 * 
		 * @returns an array of elements, in the order they appear in the document
		 */
		getRangeElements(): DocumentApp.RangeElement[]
		/**
		 * Gets all elements that the user has selected in the open instance of the document, including
		 * any partially selected <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code>
		 * elements.
		 * 
		 * @returns an array of selected or partially selected elements, in the order they appear in the
		 *     document
		 */
		getSelectedElements(): DocumentApp.RangeElement[]

	}

	class RangeBuilder {
		private constructor();

		/**
		 * Adds an entire <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element.html'>Element</a></code> to this <code>RangeBuilder</code>.
		 * 
		 * @param element - the element to be added
		 * 
		 * @returns this builder, for chaining
		 */
		addElement(
			element: DocumentApp.Element
		): DocumentApp.RangeBuilder
		/**
		 * Adds a partial <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element to this <code>RangeBuilder</code>.
		 * 
		 * @param textElement - the text element to be partially added
		 * @param startOffset - the number of characters before the first character to be included (that is,
		 *     the index of the first character in the range)
		 * @param endOffsetInclusive - the number of characters before the last character to be included
		 *     (that is, the index of the last character in the range)
		 * 
		 * @returns this builder, for chaining
		 */
		addElement(
			textElement: DocumentApp.Text,
			startOffset: number,
			endOffsetInclusive: number
		): DocumentApp.RangeBuilder

		/**
		 * Adds two entire elements, and all elements between them, to this <code>RangeBuilder</code>.
		 * 
		 * @param startElement - the first element to be added
		 * @param endElementInclusive - the last element to be added
		 * 
		 * @returns this builder, for chaining
		 */
		addElementsBetween(
			startElement: DocumentApp.Element,
			endElementInclusive: DocumentApp.Element
		): DocumentApp.RangeBuilder
		/**
		 * Adds two partial <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements, and all elements between them, to the <code>RangeBuilder</code>.
		 * 
		 * @param startTextElement - the first text element to be partially added
		 * @param startOffset - the number of characters before the first character of <code>startTextElement</code> to be included (that is, the index of the first character in the range)
		 * @param endTextElementInclusive - the last text element to be partially added
		 * @param endOffsetInclusive - the number of characters before the last character of <code>endTextElementInclusive</code> to be included (that is, the index of the last character in the
		 *     range)
		 * 
		 * @returns this builder, for chaining
		 */
		addElementsBetween(
			startTextElement: DocumentApp.Text,
			startOffset: number,
			endTextElementInclusive: DocumentApp.Text,
			endOffsetInclusive: number
		): DocumentApp.RangeBuilder

		/**
		 * Adds the contents of another <code>Range</code> to this <code>RangeBuilder</code>.
		 * 
		 * @param range - the range whose elements should be added
		 * 
		 * @returns this builder, for chaining
		 */
		addRange(
			range: DocumentApp.Range
		): DocumentApp.RangeBuilder
		/**
		 * Constructs a <code>Range</code> from the settings applied to the builder.
		 * 
		 * @returns the newly constructed range
		 */
		build(): DocumentApp.Range
		/**
		 * Gets all elements in this <code>Range</code>, including any partial <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements (for example, in the case
		 * of a selection that includes only part of a <code>Text</code> element). To determine whether a
		 * <code>Text</code> element is only partially included in the range, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html#isPartial()'>RangeElement.isPartial()</a></code>.
		 * 
		 * @returns an array of elements, in the order they appear in the document
		 */
		getRangeElements(): DocumentApp.RangeElement[]
		/**
		 * Gets all elements that the user has selected in the open instance of the document, including
		 * any partially selected <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code>
		 * elements.
		 * 
		 * @returns an array of selected or partially selected elements, in the order they appear in the
		 *     document
		 */
		getSelectedElements(): DocumentApp.RangeElement[]

	}

	class RangeElement {
		private constructor();

		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element.html'>Element</a></code> that corresponds to this <code>RangeElement</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log debug information about a range element.
		 * Logger.log(&#39;Element type: &#39; + rangeElement.getElement().getType());
		 * if (rangeElement.isPartial()) {
		 *   Logger.log(&#39;The character range begins at &#39; + rangeElement.getStartOffset());
		 *   Logger.log(&#39;The character range ends at &#39; + rangeElement.getEndOffsetInclusive());
		 * } else {
		 *   Logger.log(&#39;The entire range element is included.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element that corresponds to this <code>RangeElement</code>
		 */
		getElement(): DocumentApp.Element
		/**
		 * Gets the position of the end of a partial range within the range element. If the element is a
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html#isPartial()'>isPartial()</a></code> returns <code>true</code>, the offset is the number of characters before the last
		 * character in the range (that is, the index of the last character in the range); in any other
		 * case, this method returns <code>-1</code>.
		 * 
		 * @returns for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements, the
		 *     number of character before the last character in the range; for other elements, <code>-1</code>
		 */
		getEndOffsetInclusive(): number
		/**
		 * Gets the position of the start of a partial range within the range element. If the element is a
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> element and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html#isPartial()'>isPartial()</a></code> returns <code>true</code>, the offset is the number of characters before the start of
		 * the range (that is, the index of the first character in the range); in any other case, this
		 * method returns <code>-1</code>.
		 * 
		 * @returns for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> elements, the
		 *     number of characters before the start of the range; for other elements, <code>-1</code>
		 */
		getStartOffset(): number
		/**
		 * Determines whether this range element covers the entire element or a partial selection of the
		 * element's characters. The beginning and end of a partial range element's range can be
		 * determined using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html#getStartOffset()'>getStartOffset()</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html#getEndOffsetInclusive()'>getEndOffsetInclusive()</a></code>, respectively.
		 * 
		 * @returns <code>true</code> if the element is partially included; <code>false</code> if not
		 */
		isPartial(): Boolean

	}

	class Table {
		private constructor();

		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code>.
		 * 
		 * @returns the new table row element
		 */
		appendTableRow(): DocumentApp.TableRow
		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code>.
		 * 
		 * @param tableRow - the table row to append
		 * 
		 * @returns the appended table row element
		 */
		appendTableRow(
			tableRow: DocumentApp.TableRow
		): DocumentApp.TableRow

		/**
		 * Clears the contents of the element.
		 * 
		 * @returns the current element
		 */
		clear(): DocumentApp.Table
		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.Table
		/**
		 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
		 * 
		 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
		 * 
		 * <p>Child elements fully contained within a deleted text range are removed from the element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Insert two paragraphs separated by a paragraph containing an
		 * // horizontal rule.
		 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
		 * body.insertHorizontalRule(0);
		 * body.insertParagraph(0, &quot;An example.&quot;);
		 * 
		 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
		 * body.editAsText().deleteText(14, 25);
		 * </code></pre>
		 * 
		 * @returns a text version of the current element
		 */
		editAsText(): DocumentApp.Text
		/**
		 * Searches the contents of the element for a descendant of the specified type.
		 * 
		 * @param elementType - the type of element to search for
		 * 
		 * @returns a search result indicating the position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for a descendant of the specified type, starting from the
		 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define the search parameters.
		 * var searchType = DocumentApp.ElementType.PARAGRAPH;
		 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
		 * var searchResult = null;
		 * 
		 * // Search until the paragraph is found.
		 * while (searchResult = body.findElement(searchType, searchResult)) {
		 *   var par = searchResult.getElement().asParagraph();
		 *   if (par.getHeading() == searchHeading) {
		 *     // Found one, update and stop.
		 *     par.setText(&#39;This is the first header.&#39;);
		 *     return;
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @param elementType - the type of element to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Searches the contents of the element for the specified text pattern using regular expressions.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * 
		 * @returns a search result indicating the position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for the specified text pattern, starting from a given
		 * search result.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the border color.
		 * 
		 * @returns the border color, formatted in CSS notation (like <code>'#ffffff'</code>)
		 */
		getBorderColor(): string
		/**
		 * Retrieves the border width, in points.
		 * 
		 * @returns the border width, in points
		 */
		getBorderWidth(): Number
		/**
		 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> at the specified row and cell indices.
		 * 
		 * @param rowIndex - the index of the row containing the cell to retrieve
		 * @param cellIndex - the index of the cell to retrieve
		 * 
		 * @returns the table cell
		 */
		getCell(
			rowIndex: number,
			cellIndex: number
		): DocumentApp.TableCell
		/**
		 * Retrieves the child element at the specified child index.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document.
		 * var firstChild = body.getChild(0);
		 * 
		 * // If it&#39;s a paragraph, set its contents.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
		 * }
		 * </code></pre>
		 * 
		 * @param childIndex - the index of the child element to retrieve
		 * 
		 * @returns the child element at the specified index
		 */
		getChild(
			childIndex: number
		): DocumentApp.Element
		/**
		 * Retrieves the child index for the specified child element.
		 * 
		 * @param child - the child element for which to retrieve the index
		 * 
		 * @returns the child index
		 */
		getChildIndex(
			child: DocumentApp.Element
		): number
		/**
		 * Retrieves the width of the specified table column, in points.
		 * 
		 * @param columnIndex - the column index
		 * 
		 * @returns the column width, in points
		 */
		getColumnWidth(
			columnIndex: number
		): Number
		/**
		 * Retrieves the link url.
		 * 
		 * @returns the link url, or null if the element contains multiple values for this attribute
		 */
		getLinkUrl(): string
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the number of children.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Log the number of elements in the document.
		 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
		 *     &quot; elements in the document body.&quot;);
		 * </code></pre>
		 * 
		 * @returns the number of children
		 */
		getNumChildren(): number
		/**
		 * Retrieves the number of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRows</a></code>.
		 * 
		 * @returns the number of table rows
		 */
		getNumRows(): number
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code> at the specified row index.
		 * 
		 * @param rowIndex - the index of the row to retrieve
		 * 
		 * @returns the table row
		 */
		getRow(
			rowIndex: number
		): DocumentApp.TableRow
		/**
		 * Retrieves the contents of the element as a text string.
		 * 
		 * @returns the contents of the element as text string
		 */
		getText(): string
		/**
		 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * @returns the type of text alignment, or <code>null</code> if the text contains multiple types of text
		 *     alignments or if the text alignment has never been set
		 */
		getTextAlignment(): DocumentApp.TextAlignment
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * 
		 * @returns the current element
		 */
		insertTableRow(
			childIndex: number
		): DocumentApp.TableRow
		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param tableRow - the table row to insert
		 * 
		 * @returns the inserted table row element
		 */
		insertTableRow(
			childIndex: number,
			tableRow: DocumentApp.TableRow
		): DocumentApp.TableRow

		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Removes the specified child element.
		 * 
		 * @param child - the child element to remove
		 * 
		 * @returns the current element
		 */
		removeChild(
			child: DocumentApp.Element
		): DocumentApp.Table
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.Table
		/**
		 * Removes the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code> at the specified row index.
		 * 
		 * @param rowIndex - the index of the row to remove
		 * 
		 * @returns the removed row
		 */
		removeRow(
			rowIndex: number
		): DocumentApp.TableRow
		/**
		 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
		 * expressions.
		 * 
		 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
		 * Because of this you'll need to escape any backslashes in the pattern.
		 * 
		 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
		 * expression library, which limits the <a
		 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
		 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
		 * </code></pre>
		 * 
		 * @param searchPattern - the regex pattern to search for
		 * @param replacement - the text to use as replacement
		 * 
		 * @returns the current element
		 */
		replaceText(
			searchPattern: string,
			replacement: string
		): DocumentApp.Element
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.Table
		/**
		 * Sets the border color.
		 * 
		 * @param color - the border color, formatted in CSS notation (like <code>'#ffffff'</code>)
		 * 
		 * @returns the current element
		 */
		setBorderColor(
			color: string
		): DocumentApp.Table
		/**
		 * Sets the border width, in points.
		 * 
		 * @param width - the border width, in points
		 * 
		 * @returns the current element
		 */
		setBorderWidth(
			width: Number
		): DocumentApp.Table
		/**
		 * Sets the width of the specified column, in points.
		 * 
		 * @param columnIndex - the column index
		 * @param width - the border width, in points
		 * 
		 * @returns the current element
		 */
		setColumnWidth(
			columnIndex: number,
			width: Number
		): DocumentApp.Table
		/**
		 * Sets the link url.
		 * 
		 * @param url - the link url
		 * 
		 * @returns the current element
		 */
		setLinkUrl(
			url: string
		): DocumentApp.Table
		/**
		 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Make the entire first paragraph be superscript.
		 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
		 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
		 * </code></pre>
		 * 
		 * @param textAlignment - the type of text alignment to apply
		 * 
		 * @returns the current element
		 */
		setTextAlignment(
			textAlignment: DocumentApp.TextAlignment
		): DocumentApp.Table

	}

	class TableCell {
		private constructor();

		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @returns the new horizontal rule
		 */
		appendHorizontalRule(): DocumentApp.HorizontalRule
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param image - the image data
		 * 
		 * @returns the new image
		 */
		appendImage(
			image: BlobSource
		): DocumentApp.InlineImage
		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code>.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param image - the image data
		 * 
		 * @returns the appended image
		 */
		appendImage(
			image: DocumentApp.InlineImage
		): DocumentApp.InlineImage

		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
		 * 
		 * @param listItem - the list item to append
		 * 
		 * @returns the appended list item
		 */
		appendListItem(
			listItem: DocumentApp.ListItem
		): DocumentApp.ListItem
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code>.
		 * 
		 * @param text - the text contents
		 * 
		 * @returns the new list item
		 */
		appendListItem(
			text: string
		): DocumentApp.ListItem

		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param paragraph - the paragraph to append
		 * 
		 * @returns the appended paragraph
		 */
		appendParagraph(
			paragraph: DocumentApp.Paragraph
		): DocumentApp.Paragraph
		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param text - the text contents
		 * 
		 * @returns the new paragraph
		 */
		appendParagraph(
			text: string
		): DocumentApp.Paragraph

		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
		 * 
		 * @returns the new table
		 */
		appendTable(): DocumentApp.Table
		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code>.
		 * 
		 * @param table - the table to append
		 * 
		 * @returns the appended table
		 */
		appendTable(
			table: DocumentApp.Table
		): DocumentApp.Table
		/**
		 * Appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing the specified cells.
		 * 
		 * @param cells - the text contents of the table cells to add to the new table
		 * 
		 * @returns the appended table
		 */
		appendTable(
			cells: string[][]
		): DocumentApp.Table

		/**
		 * Clears the contents of the element.
		 * 
		 * @returns the current element
		 */
		clear(): DocumentApp.TableCell
		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.TableCell
		/**
		 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
		 * 
		 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
		 * 
		 * <p>Child elements fully contained within a deleted text range are removed from the element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Insert two paragraphs separated by a paragraph containing an
		 * // horizontal rule.
		 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
		 * body.insertHorizontalRule(0);
		 * body.insertParagraph(0, &quot;An example.&quot;);
		 * 
		 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
		 * body.editAsText().deleteText(14, 25);
		 * </code></pre>
		 * 
		 * @returns a text version of the current element
		 */
		editAsText(): DocumentApp.Text
		/**
		 * Searches the contents of the element for a descendant of the specified type.
		 * 
		 * @param elementType - the type of element to search for
		 * 
		 * @returns a search result indicating the position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for a descendant of the specified type, starting from the
		 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define the search parameters.
		 * var searchType = DocumentApp.ElementType.PARAGRAPH;
		 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
		 * var searchResult = null;
		 * 
		 * // Search until the paragraph is found.
		 * while (searchResult = body.findElement(searchType, searchResult)) {
		 *   var par = searchResult.getElement().asParagraph();
		 *   if (par.getHeading() == searchHeading) {
		 *     // Found one, update and stop.
		 *     par.setText(&#39;This is the first header.&#39;);
		 *     return;
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @param elementType - the type of element to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Searches the contents of the element for the specified text pattern using regular expressions.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * 
		 * @returns a search result indicating the position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for the specified text pattern, starting from a given
		 * search result.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the background color.
		 * 
		 * @returns the background color, formatted in CSS notation (like <code>'#ffffff'</code>)
		 */
		getBackgroundColor(): string
		/**
		 * Retrieves the child element at the specified child index.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document.
		 * var firstChild = body.getChild(0);
		 * 
		 * // If it&#39;s a paragraph, set its contents.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
		 * }
		 * </code></pre>
		 * 
		 * @param childIndex - the index of the child element to retrieve
		 * 
		 * @returns the child element at the specified index
		 */
		getChild(
			childIndex: number
		): DocumentApp.Element
		/**
		 * Retrieves the child index for the specified child element.
		 * 
		 * @param child - the child element for which to retrieve the index
		 * 
		 * @returns the child index
		 */
		getChildIndex(
			child: DocumentApp.Element
		): number
		/**
		 * Retrieves the column span, which is the number of columns of table cells this cell spans.
		 * Non-merged cells have a col span of 1.
		 * 
		 * @returns the column span or 0 for a cell which is merged over by another cell
		 */
		getColSpan(): number
		/**
		 * Retrieves the link url.
		 * 
		 * @returns the link url, or null if the element contains multiple values for this attribute
		 */
		getLinkUrl(): string
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the number of children.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Log the number of elements in the document.
		 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
		 *     &quot; elements in the document body.&quot;);
		 * </code></pre>
		 * 
		 * @returns the number of children
		 */
		getNumChildren(): number
		/**
		 * Retrieves the bottom padding, in points.
		 * 
		 * @returns the bottom padding, in points
		 */
		getPaddingBottom(): Number
		/**
		 * Retrieves the left padding, in points.
		 * 
		 * @returns the left padding, in points
		 */
		getPaddingLeft(): Number
		/**
		 * Retrieves the right padding, in points.
		 * 
		 * @returns the right padding, in points
		 */
		getPaddingRight(): Number
		/**
		 * Retrieves the top padding, in points.
		 * 
		 * @returns the top padding, in points
		 */
		getPaddingTop(): Number
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-row.html'>TableRow</a></code> containing the current <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>.
		 * 
		 * @returns the table row containing the current cell
		 */
		getParentRow(): DocumentApp.TableRow
		/**
		 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing the current <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>.
		 * 
		 * @returns the table containing the current cell
		 */
		getParentTable(): DocumentApp.Table
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the row span, which is the number of rows of table cells this cell spans. Non-merged
		 * cells have a row span of 1.
		 * 
		 * @returns the row span or 0 for a cell which is merged over by another cell
		 */
		getRowSpan(): number
		/**
		 * Retrieves the contents of the element as a text string.
		 * 
		 * @returns the contents of the element as text string
		 */
		getText(): string
		/**
		 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * @returns the type of text alignment, or <code>null</code> if the text contains multiple types of text
		 *     alignments or if the text alignment has never been set
		 */
		getTextAlignment(): DocumentApp.TextAlignment
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/vertical-alignment.html'>VerticalAlignment</a></code>.
		 * 
		 * @returns the vertical alignment
		 */
		getVerticalAlignment(): DocumentApp.VerticalAlignment
		/**
		 * Retrieves the width of the column containing the cell, in points.
		 * 
		 * @returns the column width, in points
		 */
		getWidth(): Number
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code> at the specified index.
		 * 
		 * <p>The horizontal rule will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * 
		 * @returns the new horizontal rule
		 */
		insertHorizontalRule(
			childIndex: number
		): DocumentApp.HorizontalRule
		/**
		 * Creates and inserts an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> from the specified image blob, at the specified
		 * index.
		 * 
		 * <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param image - the image data
		 * 
		 * @returns the inserted inline image
		 */
		insertImage(
			childIndex: number,
			image: BlobSource
		): DocumentApp.InlineImage
		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> at the specified index.
		 * 
		 * <p>The image will be contained in a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code>.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param image - the image to insert
		 * 
		 * @returns the inserted inline image
		 */
		insertImage(
			childIndex: number,
			image: DocumentApp.InlineImage
		): DocumentApp.InlineImage

		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param listItem - the list item to insert
		 * 
		 * @returns inserted new list item
		 */
		insertListItem(
			childIndex: number,
			listItem: DocumentApp.ListItem
		): DocumentApp.ListItem
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/list-item.html'>ListItem</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param text - the text contents
		 * 
		 * @returns the new list item
		 */
		insertListItem(
			childIndex: number,
			text: string
		): DocumentApp.ListItem

		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param paragraph - the paragraph to insert
		 * 
		 * @returns the inserted paragraph
		 */
		insertParagraph(
			childIndex: number,
			paragraph: DocumentApp.Paragraph
		): DocumentApp.Paragraph
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/paragraph.html'>Paragraph</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param text - the text contents
		 * 
		 * @returns the new paragraph
		 */
		insertParagraph(
			childIndex: number,
			text: string
		): DocumentApp.Paragraph

		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * 
		 * @returns the new table
		 */
		insertTable(
			childIndex: number
		): DocumentApp.Table
		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param table - the table to insert
		 * 
		 * @returns the inserted table
		 */
		insertTable(
			childIndex: number,
			table: DocumentApp.Table
		): DocumentApp.Table
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing the specified cells, at the specified index.
		 * 
		 * @param childIndex - the index at which to insert
		 * @param cells - the text contents of the table cells to add to the new table
		 * 
		 * @returns the new table
		 */
		insertTable(
			childIndex: number,
			cells: string[][]
		): DocumentApp.Table

		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Merges the element with the preceding sibling of the same type.
		 * 
		 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
		 * the current element are moved to the preceding sibling element.
		 * 
		 * <p>The current element is removed from the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append two paragraphs to the document.
		 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
		 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
		 * 
		 * // Merge the newly added paragraphs into a single paragraph.
		 * par2.merge();
		 * </code></pre>
		 * 
		 * @returns the merged element
		 */
		merge(): DocumentApp.TableCell
		/**
		 * Removes the specified child element.
		 * 
		 * @param child - the child element to remove
		 * 
		 * @returns the current element
		 */
		removeChild(
			child: DocumentApp.Element
		): DocumentApp.TableCell
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.TableCell
		/**
		 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
		 * expressions.
		 * 
		 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
		 * Because of this you'll need to escape any backslashes in the pattern.
		 * 
		 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
		 * expression library, which limits the <a
		 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
		 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
		 * </code></pre>
		 * 
		 * @param searchPattern - the regex pattern to search for
		 * @param replacement - the text to use as replacement
		 * 
		 * @returns the current element
		 */
		replaceText(
			searchPattern: string,
			replacement: string
		): DocumentApp.Element
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.TableCell
		/**
		 * Sets the background color.
		 * 
		 * @param color - the background color, formatted in CSS notation (like <code>'#ffffff'</code>)
		 * 
		 * @returns the current element
		 */
		setBackgroundColor(
			color: string
		): DocumentApp.TableCell
		/**
		 * Sets the link url.
		 * 
		 * @param url - the link url
		 * 
		 * @returns the current element
		 */
		setLinkUrl(
			url: string
		): DocumentApp.TableCell
		/**
		 * Sets the bottom padding, in points.
		 * 
		 * @param paddingBottom - the bottom padding, in points
		 * 
		 * @returns the current element
		 */
		setPaddingBottom(
			paddingBottom: Number
		): DocumentApp.TableCell
		/**
		 * Sets the left padding, in points.
		 * 
		 * @param paddingLeft - the left padding, in points
		 * 
		 * @returns the current element
		 */
		setPaddingLeft(
			paddingLeft: Number
		): DocumentApp.TableCell
		/**
		 * Sets the right padding, in points.
		 * 
		 * @param paddingTop - the right padding, in points
		 * 
		 * @returns the current element
		 */
		setPaddingRight(
			paddingTop: Number
		): DocumentApp.TableCell
		/**
		 * Sets the top padding, in points.
		 * 
		 * @param paddingTop - the top padding, in points
		 * 
		 * @returns the current element
		 */
		setPaddingTop(
			paddingTop: Number
		): DocumentApp.TableCell
		/**
		 * Sets the contents as plain text.
		 * 
		 * <p>Note: existing contents are cleared.
		 * 
		 * @param text - the new text contents
		 * 
		 * @returns the current element
		 */
		setText(
			text: string
		): DocumentApp.TableCell
		/**
		 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Make the entire first paragraph be superscript.
		 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
		 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
		 * </code></pre>
		 * 
		 * @param textAlignment - the type of text alignment to apply
		 * 
		 * @returns the current element
		 */
		setTextAlignment(
			textAlignment: DocumentApp.TextAlignment
		): DocumentApp.TableCell
		/**
		 * Sets the vertical alignment.
		 * 
		 * @param alignment - the vertical alignment
		 * 
		 * @returns the current element
		 */
		setVerticalAlignment(
			alignment: DocumentApp.VerticalAlignment
		): DocumentApp.TableCell
		/**
		 * Sets the width of the column containing the current cell, in points.
		 * 
		 * @param width - the column width, in points
		 * 
		 * @returns the current element
		 */
		setWidth(
			width: Number
		): DocumentApp.TableCell

	}

	class TableOfContents {
		private constructor();

		/**
		 * Clears the contents of the element.
		 * 
		 * @returns the current element
		 */
		clear(): DocumentApp.TableOfContents
		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.TableOfContents
		/**
		 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
		 * 
		 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
		 * 
		 * <p>Child elements fully contained within a deleted text range are removed from the element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Insert two paragraphs separated by a paragraph containing an
		 * // horizontal rule.
		 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
		 * body.insertHorizontalRule(0);
		 * body.insertParagraph(0, &quot;An example.&quot;);
		 * 
		 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
		 * body.editAsText().deleteText(14, 25);
		 * </code></pre>
		 * 
		 * @returns a text version of the current element
		 */
		editAsText(): DocumentApp.Text
		/**
		 * Searches the contents of the element for a descendant of the specified type.
		 * 
		 * @param elementType - the type of element to search for
		 * 
		 * @returns a search result indicating the position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for a descendant of the specified type, starting from the
		 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define the search parameters.
		 * var searchType = DocumentApp.ElementType.PARAGRAPH;
		 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
		 * var searchResult = null;
		 * 
		 * // Search until the paragraph is found.
		 * while (searchResult = body.findElement(searchType, searchResult)) {
		 *   var par = searchResult.getElement().asParagraph();
		 *   if (par.getHeading() == searchHeading) {
		 *     // Found one, update and stop.
		 *     par.setText(&#39;This is the first header.&#39;);
		 *     return;
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @param elementType - the type of element to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Searches the contents of the element for the specified text pattern using regular expressions.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * 
		 * @returns a search result indicating the position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for the specified text pattern, starting from a given
		 * search result.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the child element at the specified child index.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document.
		 * var firstChild = body.getChild(0);
		 * 
		 * // If it&#39;s a paragraph, set its contents.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
		 * }
		 * </code></pre>
		 * 
		 * @param childIndex - the index of the child element to retrieve
		 * 
		 * @returns the child element at the specified index
		 */
		getChild(
			childIndex: number
		): DocumentApp.Element
		/**
		 * Retrieves the child index for the specified child element.
		 * 
		 * @param child - the child element for which to retrieve the index
		 * 
		 * @returns the child index
		 */
		getChildIndex(
			child: DocumentApp.Element
		): number
		/**
		 * Retrieves the link url.
		 * 
		 * @returns the link url, or null if the element contains multiple values for this attribute
		 */
		getLinkUrl(): string
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the number of children.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Log the number of elements in the document.
		 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
		 *     &quot; elements in the document body.&quot;);
		 * </code></pre>
		 * 
		 * @returns the number of children
		 */
		getNumChildren(): number
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the contents of the element as a text string.
		 * 
		 * @returns the contents of the element as text string
		 */
		getText(): string
		/**
		 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * @returns the type of text alignment, or <code>null</code> if the text contains multiple types of text
		 *     alignments or if the text alignment has never been set
		 */
		getTextAlignment(): DocumentApp.TextAlignment
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.TableOfContents
		/**
		 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
		 * expressions.
		 * 
		 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
		 * Because of this you'll need to escape any backslashes in the pattern.
		 * 
		 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
		 * expression library, which limits the <a
		 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
		 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
		 * </code></pre>
		 * 
		 * @param searchPattern - the regex pattern to search for
		 * @param replacement - the text to use as replacement
		 * 
		 * @returns the current element
		 */
		replaceText(
			searchPattern: string,
			replacement: string
		): DocumentApp.Element
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.TableOfContents
		/**
		 * Sets the link url.
		 * 
		 * @param url - the link url
		 * 
		 * @returns the current element
		 */
		setLinkUrl(
			url: string
		): DocumentApp.TableOfContents
		/**
		 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Make the entire first paragraph be superscript.
		 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
		 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
		 * </code></pre>
		 * 
		 * @param textAlignment - the type of text alignment to apply
		 * 
		 * @returns the current element
		 */
		setTextAlignment(
			textAlignment: DocumentApp.TextAlignment
		): DocumentApp.TableOfContents

	}

	class TableRow {
		private constructor();

		/**
		 * Creates and appends a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>.
		 * 
		 * @returns the new table cell
		 */
		appendTableCell(): DocumentApp.TableCell
		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code>.
		 * 
		 * @param tableCell - the table cell to append
		 * 
		 * @returns the appended table cell
		 */
		appendTableCell(
			tableCell: DocumentApp.TableCell
		): DocumentApp.TableCell
		/**
		 * Appends the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> containing the specified text.
		 * 
		 * @param textContents - the cell's text contents
		 * 
		 * @returns the appended table cell element
		 */
		appendTableCell(
			textContents: string
		): DocumentApp.TableCell

		/**
		 * Clears the contents of the element.
		 * 
		 * @returns the current element
		 */
		clear(): DocumentApp.TableRow
		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.TableRow
		/**
		 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
		 * 
		 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
		 * 
		 * <p>Child elements fully contained within a deleted text range are removed from the element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Insert two paragraphs separated by a paragraph containing an
		 * // horizontal rule.
		 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
		 * body.insertHorizontalRule(0);
		 * body.insertParagraph(0, &quot;An example.&quot;);
		 * 
		 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
		 * body.editAsText().deleteText(14, 25);
		 * </code></pre>
		 * 
		 * @returns a text version of the current element
		 */
		editAsText(): DocumentApp.Text
		/**
		 * Searches the contents of the element for a descendant of the specified type.
		 * 
		 * @param elementType - the type of element to search for
		 * 
		 * @returns a search result indicating the position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for a descendant of the specified type, starting from the
		 * specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/range-element.html'>RangeElement</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define the search parameters.
		 * var searchType = DocumentApp.ElementType.PARAGRAPH;
		 * var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
		 * var searchResult = null;
		 * 
		 * // Search until the paragraph is found.
		 * while (searchResult = body.findElement(searchType, searchResult)) {
		 *   var par = searchResult.getElement().asParagraph();
		 *   if (par.getHeading() == searchHeading) {
		 *     // Found one, update and stop.
		 *     par.setText(&#39;This is the first header.&#39;);
		 *     return;
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @param elementType - the type of element to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search element
		 */
		findElement(
			elementType: DocumentApp.ElementType,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Searches the contents of the element for the specified text pattern using regular expressions.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * 
		 * @returns a search result indicating the position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for the specified text pattern, starting from a given
		 * search result.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> at the specified cell index.
		 * 
		 * @param cellIndex - the index of the cell to retrieve
		 * 
		 * @returns the table cell
		 */
		getCell(
			cellIndex: number
		): DocumentApp.TableCell
		/**
		 * Retrieves the child element at the specified child index.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document.
		 * var firstChild = body.getChild(0);
		 * 
		 * // If it&#39;s a paragraph, set its contents.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   firstChild.asParagraph().setText(&quot;This is the first paragraph.&quot;);
		 * }
		 * </code></pre>
		 * 
		 * @param childIndex - the index of the child element to retrieve
		 * 
		 * @returns the child element at the specified index
		 */
		getChild(
			childIndex: number
		): DocumentApp.Element
		/**
		 * Retrieves the child index for the specified child element.
		 * 
		 * @param child - the child element for which to retrieve the index
		 * 
		 * @returns the child index
		 */
		getChildIndex(
			child: DocumentApp.Element
		): number
		/**
		 * Retrieves the link url.
		 * 
		 * @returns the link url, or null if the element contains multiple values for this attribute
		 */
		getLinkUrl(): string
		/**
		 * Retrieves the minimum height, in points.
		 * 
		 * @returns the minimum height, in points
		 */
		getMinimumHeight(): Number
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the number of cells in the row.
		 * 
		 * @returns the number of cells
		 */
		getNumCells(): number
		/**
		 * Retrieves the number of children.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the body section of the active document.
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Log the number of elements in the document.
		 * Logger.log(&quot;There are &quot; + body.getNumChildren() +
		 *     &quot; elements in the document body.&quot;);
		 * </code></pre>
		 * 
		 * @returns the number of children
		 */
		getNumChildren(): number
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table.html'>Table</a></code> containing the current row.
		 * 
		 * @returns the table containing the current row
		 */
		getParentTable(): DocumentApp.Table
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the contents of the element as a text string.
		 * 
		 * @returns the contents of the element as text string
		 */
		getText(): string
		/**
		 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * @returns the type of text alignment, or <code>null</code> if the text contains multiple types of text
		 *     alignments or if the text alignment has never been set
		 */
		getTextAlignment(): DocumentApp.TextAlignment
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Creates and inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * 
		 * @returns the new table cell
		 */
		insertTableCell(
			childIndex: number
		): DocumentApp.TableCell
		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> at the specified index.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param tableCell - the table cell to insert
		 * 
		 * @returns the inserted table cell
		 */
		insertTableCell(
			childIndex: number,
			tableCell: DocumentApp.TableCell
		): DocumentApp.TableCell
		/**
		 * Inserts the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> at the specified index, containing the given text.
		 * 
		 * @param childIndex - the index at which to insert the element
		 * @param textContents - the cell's text contents
		 * 
		 * @returns the inserted table cell
		 */
		insertTableCell(
			childIndex: number,
			textContents: string
		): DocumentApp.TableCell

		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Merges the element with the preceding sibling of the same type.
		 * 
		 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
		 * the current element are moved to the preceding sibling element.
		 * 
		 * <p>The current element is removed from the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append two paragraphs to the document.
		 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
		 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
		 * 
		 * // Merge the newly added paragraphs into a single paragraph.
		 * par2.merge();
		 * </code></pre>
		 * 
		 * @returns the merged element
		 */
		merge(): DocumentApp.TableRow
		/**
		 * Removes the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/table-cell.html'>TableCell</a></code> at the specified cell index.
		 * 
		 * @param cellIndex - the index of the cell to remove
		 * 
		 * @returns the removed cell
		 */
		removeCell(
			cellIndex: number
		): DocumentApp.TableCell
		/**
		 * Removes the specified child element.
		 * 
		 * @param child - the child element to remove
		 * 
		 * @returns the current element
		 */
		removeChild(
			child: DocumentApp.Element
		): DocumentApp.TableRow
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.TableRow
		/**
		 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
		 * expressions.
		 * 
		 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
		 * Because of this you'll need to escape any backslashes in the pattern.
		 * 
		 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
		 * expression library, which limits the <a
		 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
		 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
		 * </code></pre>
		 * 
		 * @param searchPattern - the regex pattern to search for
		 * @param replacement - the text to use as replacement
		 * 
		 * @returns the current element
		 */
		replaceText(
			searchPattern: string,
			replacement: string
		): DocumentApp.Element
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.TableRow
		/**
		 * Sets the link url.
		 * 
		 * @param url - the link url
		 * 
		 * @returns the current element
		 */
		setLinkUrl(
			url: string
		): DocumentApp.TableRow
		/**
		 * Sets the minimum height, in points.
		 * 
		 * @param minHeight - the minimum height, in points
		 * 
		 * @returns the current element
		 */
		setMinimumHeight(
			minHeight: Number
		): DocumentApp.TableRow
		/**
		 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Make the entire first paragraph be superscript.
		 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
		 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
		 * </code></pre>
		 * 
		 * @param textAlignment - the type of text alignment to apply
		 * 
		 * @returns the current element
		 */
		setTextAlignment(
			textAlignment: DocumentApp.TextAlignment
		): DocumentApp.TableRow

	}

	class Text {
		private constructor();

		/**
		 * Adds the specified text to the end of this text region.
		 * 
		 * @param text - the text to append
		 * 
		 * @returns the current element
		 */
		appendText(
			text: string
		): DocumentApp.Text
		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.Text
		/**
		 * Deletes a range of text.
		 * 
		 * @param startOffset - the character offset of the first character to delete
		 * @param endOffsetInclusive - the character offset of the last character to delete
		 * 
		 * @returns the current element
		 */
		deleteText(
			startOffset: number,
			endOffsetInclusive: number
		): DocumentApp.Text
		/**
		 * Obtains a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html'>Text</a></code> version of the current element, for editing.
		 * 
		 * <p>Use <code>editAsText</code> for manipulating the elements contents as rich text. The <code>editAsText</code> mode ignores non-text elements (such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/inline-image.html'>InlineImage</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/horizontal-rule.html'>HorizontalRule</a></code>).
		 * 
		 * <p>Child elements fully contained within a deleted text range are removed from the element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Insert two paragraphs separated by a paragraph containing an
		 * // horizontal rule.
		 * body.insertParagraph(0, &quot;An editAsText sample.&quot;);
		 * body.insertHorizontalRule(0);
		 * body.insertParagraph(0, &quot;An example.&quot;);
		 * 
		 * // Delete &quot; sample.\n\n An&quot; removing the horizontal rule in the process.
		 * body.editAsText().deleteText(14, 25);
		 * </code></pre>
		 * 
		 * @returns a text version of the current element
		 */
		editAsText(): DocumentApp.Text
		/**
		 * Searches the contents of the element for the specified text pattern using regular expressions.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * 
		 * @returns a search result indicating the position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string
		): DocumentApp.RangeElement
		/**
		 * Searches the contents of the element for the specified text pattern, starting from a given
		 * search result.
		 * 
		 * <p>A subset of the JavaScript regular expression features are not fully supported, such as
		 * capture groups and mode modifiers.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * @param searchPattern - the pattern to search for
		 * @param from - the search result to search from
		 * 
		 * @returns a search result indicating the next position of the search text, or null if there is no
		 *     match
		 */
		findText(
			searchPattern: string,
			from: DocumentApp.RangeElement
		): DocumentApp.RangeElement

		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the attributes at the specified character offset.
		 * 
		 * <p>The result is an object containing a property for each valid text attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * @param offset - the character offset
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(
			offset: number
		): object

		/**
		 * Retrieves the background color setting.
		 * 
		 * @returns the background color, formatted in CSS notation (like <code>'#ffffff'</code>), or null
		 *     if the element contains multiple values for this attribute
		 */
		getBackgroundColor(): string
		/**
		 * Retrieves the background color at the specified character offset.
		 * 
		 * @param offset - the character offset
		 * 
		 * @returns the background color, formatted in CSS notation (like <code>'#ffffff'</code>)
		 */
		getBackgroundColor(
			offset: number
		): string

		/**
		 * Retrieves the font family setting. The name can be any font from the Font menu in Docs or <a
		 * href="https://www.google.com/fonts">Google Fonts</a>, and is case-sensitive. The methods <code>getFontFamily()</code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html#setFontFamily(String)'>setFontFamily(fontFamilyName)</a></code> now use string names for fonts instead of
		 * the <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/document/font-family.html'>FontFamily</a></s></code> enum. Although this enum is
		 * deprecated, it will remain available for compatibility with older scripts.
		 * 
		 * @returns the font family, or null if the element contains multiple values for this attribute
		 */
		getFontFamily(): string
		/**
		 * Retrieves the font family at the specified character offset. The name can be any font from the
		 * Font menu in Docs or <a href="https://www.google.com/fonts">Google Fonts</a>, and is
		 * case-sensitive. The methods <code>getFontFamily()</code> and <code>setFontFamily(fontFamilyName)</code>
		 * now use string names for fonts instead of the <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/document/font-family.html'>FontFamily</a></s></code> enum. Although this enum is
		 * deprecated, it will remain available for compatibility with older scripts.
		 * 
		 * @param offset - the character offset
		 * 
		 * @returns the font family
		 */
		getFontFamily(
			offset: number
		): string

		/**
		 * Retrieves the font size setting.
		 * 
		 * @returns the font size, or null if the element contains multiple values for this attribute
		 */
		getFontSize(): Number
		/**
		 * Retrieves the font size at the specified character offset.
		 * 
		 * @param offset - the character offset
		 * 
		 * @returns the font size
		 */
		getFontSize(
			offset: number
		): Number

		/**
		 * Retrieves the foreground color setting.
		 * 
		 * @returns the foreground color, formatted in CSS notation (like <code>'#ffffff'</code>), or null
		 *     if the element contains multiple values for this attribute
		 */
		getForegroundColor(): string
		/**
		 * Retrieves the foreground color at the specified character offset.
		 * 
		 * @param offset - the character offset
		 * 
		 * @returns the foreground color, formatted in CSS notation (like <code>'#ffffff'</code>)
		 */
		getForegroundColor(
			offset: number
		): string

		/**
		 * Retrieves the link url.
		 * 
		 * @returns the link url, or null if the element contains multiple values for this attribute
		 */
		getLinkUrl(): string
		/**
		 * Retrieves the link url at the specified character offset.
		 * 
		 * @param offset - the character offset
		 * 
		 * @returns the link url
		 */
		getLinkUrl(
			offset: number
		): string

		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the contents of the element as a text string.
		 * 
		 * @returns the contents of the element as text string
		 */
		getText(): string
		/**
		 * Gets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * @returns the type of text alignment, or <code>null</code> if the text contains multiple types of text
		 *     alignments or if the text alignment has never been set
		 */
		getTextAlignment(): DocumentApp.TextAlignment
		/**
		 * Gets the text alignment for a single character. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * @param offset - the offset of the character
		 * 
		 * @returns the type of text alignment, or <code>null</code> if the text alignment has never been set
		 */
		getTextAlignment(
			offset: number
		): DocumentApp.TextAlignment

		/**
		 * Retrieves the set of text indices that correspond to the start of distinct text formatting
		 * runs.
		 * 
		 * @returns the set of text indices at which text formatting changes
		 */
		getTextAttributeIndices(): number[]
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Inserts the specified text at the given character offset.
		 * 
		 * @param offset - the character offset at which to insert
		 * @param text - the text to insert
		 * 
		 * @returns the current element
		 */
		insertText(
			offset: number,
			text: string
		): DocumentApp.Text
		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Retrieves the bold setting.
		 * 
		 * @returns whether the text is bold, or null if the element contains multiple values for this
		 *     attribute
		 */
		isBold(): Boolean
		/**
		 * Retrieves the bold setting at the specified character offset.
		 * 
		 * @param offset - the character offset
		 * 
		 * @returns the bold setting
		 */
		isBold(
			offset: number
		): Boolean

		/**
		 * Retrieves the italic setting.
		 * 
		 * @returns whether the text is italic, or null if the element contains multiple values for this
		 *     attribute
		 */
		isItalic(): Boolean
		/**
		 * Retrieves the italic setting at the specified character offset.
		 * 
		 * @param offset - the character offset
		 * 
		 * @returns the italic setting
		 */
		isItalic(
			offset: number
		): Boolean

		/**
		 * Retrieves the strikethrough setting.
		 * 
		 * @returns whether the text is strikethrough, or null if the element contains multiple values for
		 *     this attribute
		 */
		isStrikethrough(): Boolean
		/**
		 * Retrieves the strikethrough setting at the specified character offset.
		 * 
		 * @param offset - the character offset
		 * 
		 * @returns the strikethrough setting
		 */
		isStrikethrough(
			offset: number
		): Boolean

		/**
		 * Retrieves the underline setting.
		 * 
		 * @returns whether the text is underlined, or null if the element contains multiple values for
		 *     this attribute
		 */
		isUnderline(): Boolean
		/**
		 * Retrieves the underline setting at the specified character offset.
		 * 
		 * @param offset - the character offset
		 * 
		 * @returns the underline setting
		 */
		isUnderline(
			offset: number
		): Boolean

		/**
		 * Merges the element with the preceding sibling of the same type.
		 * 
		 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
		 * the current element are moved to the preceding sibling element.
		 * 
		 * <p>The current element is removed from the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append two paragraphs to the document.
		 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
		 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
		 * 
		 * // Merge the newly added paragraphs into a single paragraph.
		 * par2.merge();
		 * </code></pre>
		 * 
		 * @returns the merged element
		 */
		merge(): DocumentApp.Text
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.Text
		/**
		 * Replaces all occurrences of a given text pattern with a given replacement string, using regular
		 * expressions.
		 * 
		 * <p>The search pattern is passed as a string, not a JavaScript regular expression object.
		 * Because of this you'll need to escape any backslashes in the pattern.
		 * 
		 * <p>This methods uses Google's <a href="https://github.com/google/re2">RE2</a> regular
		 * expression library, which limits the <a
		 * href="https://github.com/google/re2/wiki/Syntax">supported syntax</a>.
		 * 
		 * <p>The provided regular expression pattern is independently matched against each text block
		 * contained in the current element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Clear the text surrounding &quot;Apps Script&quot;, with or without text.
		 * body.replaceText(&quot;^.*Apps ?Script.*$&quot;, &quot;Apps Script&quot;);
		 * </code></pre>
		 * 
		 * @param searchPattern - the regex pattern to search for
		 * @param replacement - the text to use as replacement
		 * 
		 * @returns the current element
		 */
		replaceText(
			searchPattern: string,
			replacement: string
		): DocumentApp.Element
		/**
		 * Applies the specified attributes to the given character range.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * @param startOffset - the text range's start offset
		 * @param endOffsetInclusive - the text range's end offset
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			startOffset: number,
			endOffsetInclusive: number,
			attributes: object
		): DocumentApp.Text
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.Text

		/**
		 * Sets the background color for the specified character range.
		 * 
		 * @param startOffset - the text range's start offset
		 * @param endOffsetInclusive - the text range's end offset
		 * @param color - the background color, formatted in CSS notation (like <code>'#ffffff'</code>)
		 * 
		 * @returns the current element
		 */
		setBackgroundColor(
			startOffset: number,
			endOffsetInclusive: number,
			color: string
		): DocumentApp.Text
		/**
		 * Sets the background color.
		 * 
		 * @param color - the background color, formatted in CSS notation (like <code>'#ffffff'</code>)
		 * 
		 * @returns the current element
		 */
		setBackgroundColor(
			color: string
		): DocumentApp.Text

		/**
		 * Sets the bold setting.
		 * 
		 * @param bold - the bold setting
		 * 
		 * @returns the current element
		 */
		setBold(
			bold: Boolean
		): DocumentApp.Text
		/**
		 * Sets the bold setting for the specified character range.
		 * 
		 * @param startOffset - the text range's start offset
		 * @param endOffsetInclusive - the text range's end offset
		 * @param bold - the bold setting
		 * 
		 * @returns the current element
		 */
		setBold(
			startOffset: number,
			endOffsetInclusive: number,
			bold: Boolean
		): DocumentApp.Text

		/**
		 * Sets the font family for the specified character range. The name can be any font from the Font
		 * menu in Docs or <a href="https://www.google.com/fonts">Google Fonts</a>, and is case-sensitive.
		 * Unrecognized font names will render as Arial. The methods <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html#getFontFamily(Integer)'>getFontFamily(offset)</a></code> and
		 * <code>setFontFamily(fontFamilyName)</code> now use string names for fonts instead of the <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/document/font-family.html'>FontFamily</a></s></code> enum. Although this enum is
		 * deprecated, it will remain available for compatibility with older scripts.
		 * 
		 * @param startOffset - the text range's start offset
		 * @param endOffsetInclusive - the text range's end offset
		 * @param fontFamilyName - the name of the font family, from the Font menu in Docs or Google Fonts
		 * 
		 * @returns the current element
		 */
		setFontFamily(
			startOffset: number,
			endOffsetInclusive: number,
			fontFamilyName: string
		): DocumentApp.Text
		/**
		 * Sets the font family. The name can be any font from the Font menu in Docs or <a
		 * href="https://www.google.com/fonts">Google Fonts</a>, and is case-sensitive. Unrecognized font
		 * names will render as Arial. The methods <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/text.html#getFontFamily()'>getFontFamily()</a></code> and <code>setFontFamily(fontFamilyName)</code> now use string names for fonts instead of the <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/document/font-family.html'>FontFamily</a></s></code> enum. Although this enum is
		 * deprecated, it will remain available for compatibility with older scripts.
		 * 
		 * @param fontFamilyName - the name of the font family, from the Font menu in Docs or Google Fonts
		 * 
		 * @returns the current element
		 */
		setFontFamily(
			fontFamilyName: string
		): DocumentApp.Text

		/**
		 * Sets the font size for the specified character range.
		 * 
		 * @param startOffset - the text range's start offset
		 * @param endOffsetInclusive - the text range's end offset
		 * @param size - the font size
		 * 
		 * @returns the current element
		 */
		setFontSize(
			startOffset: number,
			endOffsetInclusive: number,
			size: Number
		): DocumentApp.Text
		/**
		 * Sets the font size.
		 * 
		 * @param size - the font size
		 * 
		 * @returns the current element
		 */
		setFontSize(
			size: Number
		): DocumentApp.Text

		/**
		 * Sets the foreground color for the specified character range.
		 * 
		 * @param startOffset - the text range's start offset
		 * @param endOffsetInclusive - the text range's end offset
		 * @param color - the foreground color, formatted in CSS notation (like <code>'#ffffff'</code>)
		 * 
		 * @returns the current element
		 */
		setForegroundColor(
			startOffset: number,
			endOffsetInclusive: number,
			color: string
		): DocumentApp.Text
		/**
		 * Sets the foreground color.
		 * 
		 * @param color - the foreground color, formatted in CSS notation (like <code>'#ffffff'</code>)
		 * 
		 * @returns the current element
		 */
		setForegroundColor(
			color: string
		): DocumentApp.Text

		/**
		 * Sets the italic setting.
		 * 
		 * @param italic - the italic setting
		 * 
		 * @returns the current element
		 */
		setItalic(
			italic: Boolean
		): DocumentApp.Text
		/**
		 * Sets the italic setting for the specified character range.
		 * 
		 * @param startOffset - the text range's start offset
		 * @param endOffsetInclusive - the text range's end offset
		 * @param italic - the italic setting
		 * 
		 * @returns the current element
		 */
		setItalic(
			startOffset: number,
			endOffsetInclusive: number,
			italic: Boolean
		): DocumentApp.Text

		/**
		 * Sets the link url for the specified character range.
		 * 
		 * @param startOffset - the text range's start offset
		 * @param endOffsetInclusive - the text range's end offset
		 * @param url - the link url
		 * 
		 * @returns the current element
		 */
		setLinkUrl(
			startOffset: number,
			endOffsetInclusive: number,
			url: string
		): DocumentApp.Text
		/**
		 * Sets the link url.
		 * 
		 * @param url - the link url
		 * 
		 * @returns the current element
		 */
		setLinkUrl(
			url: string
		): DocumentApp.Text

		/**
		 * Sets the strikethrough setting.
		 * 
		 * @param strikethrough - the strikethrough setting
		 * 
		 * @returns the current element
		 */
		setStrikethrough(
			strikethrough: Boolean
		): DocumentApp.Text
		/**
		 * Sets the strikethrough setting for the specified character range.
		 * 
		 * @param startOffset - the text range's start offset
		 * @param endOffsetInclusive - the text range's end offset
		 * @param strikethrough - the strikethrough setting
		 * 
		 * @returns the current element
		 */
		setStrikethrough(
			startOffset: number,
			endOffsetInclusive: number,
			strikethrough: Boolean
		): DocumentApp.Text

		/**
		 * Sets the text contents.
		 * 
		 * @param text - the new text contents
		 * 
		 * @returns the current element
		 */
		setText(
			text: string
		): DocumentApp.Text
		/**
		 * Sets the text alignment. The available types of alignment are <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Make the entire first paragraph be superscript.
		 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
		 * text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
		 * </code></pre>
		 * 
		 * @param textAlignment - the type of text alignment to apply
		 * 
		 * @returns the current element
		 */
		setTextAlignment(
			textAlignment: DocumentApp.TextAlignment
		): DocumentApp.Text
		/**
		 * Sets the text alignment for a given character range. The available types of alignment are
		 * <code>DocumentApp.TextAlignment.NORMAL</code>, <code>DocumentApp.TextAlignment.SUBSCRIPT</code>, and
		 * <code>DocumentApp.TextAlignment.SUPERSCRIPT</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Make the first character in the first paragraph be superscript.
		 * var text = DocumentApp.getActiveDocument().getBody().getParagraphs()[0].editAsText();
		 * text.setTextAlignment(0, 0, DocumentApp.TextAlignment.SUPERSCRIPT);
		 * </code></pre>
		 * 
		 * @param startOffset - the start offset of the character range
		 * @param endOffsetInclusive - the end offset of the character range (inclusive)
		 * @param textAlignment - the type of text alignment to apply
		 * 
		 * @returns the current element
		 */
		setTextAlignment(
			startOffset: number,
			endOffsetInclusive: number,
			textAlignment: DocumentApp.TextAlignment
		): DocumentApp.Text

		/**
		 * Sets the underline setting.
		 * 
		 * @param underline - the underline setting
		 * 
		 * @returns the current element
		 */
		setUnderline(
			underline: Boolean
		): DocumentApp.Text
		/**
		 * Sets the underline setting for the specified character range.
		 * 
		 * @param startOffset - the text range's start offset
		 * @param endOffsetInclusive - the text range's end offset
		 * @param underline - the underline setting
		 * 
		 * @returns the current element
		 */
		setUnderline(
			startOffset: number,
			endOffsetInclusive: number,
			underline: Boolean
		): DocumentApp.Text


	}

	enum TextAlignment {
		/**
		 * The normal text alignment.
		 */
		NORMAL = "NORMAL",
		/**
		 * The subscript text alignment.
		 */
		SUBSCRIPT = "SUBSCRIPT",
		/**
		 * The superscript text alignment.
		 */
		SUPERSCRIPT = "SUPERSCRIPT",
	}

	class UnsupportedElement {
		private constructor();

		/**
		 * Returns a detached, deep copy of the current element.
		 * 
		 * <p>Any child elements present in the element are also copied. The new element will not have a
		 * parent.
		 * 
		 * @returns the new copy
		 */
		copy(): DocumentApp.UnsupportedElement
		/**
		 * Retrieves the element's attributes.
		 * 
		 * <p>The result is an object containing a property for each valid element attribute where each
		 * property name corresponds to an item in the <code>DocumentApp.Attribute</code> enumeration.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append a styled paragraph.
		 * var par = body.appendParagraph(&#39;A bold, italicized paragraph.&#39;);
		 * par.setBold(true);
		 * par.setItalic(true);
		 * 
		 * // Retrieve the paragraph&#39;s attributes.
		 * var atts = par.getAttributes();
		 * 
		 * // Log the paragraph attributes.
		 * for (var att in atts) {
		 *   Logger.log(att + &quot;:&quot; + atts[att]);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element's attributes
		 */
		getAttributes(): object
		/**
		 * Retrieves the element's next sibling element.
		 * 
		 * <p>The next sibling has the same parent and follows the current element.
		 * 
		 * @returns the next sibling element
		 */
		getNextSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's parent element.
		 * 
		 * <p>The parent element contains the current element.
		 * 
		 * @returns the parent element
		 */
		getParent(): DocumentApp.ContainerElement
		/**
		 * Retrieves the element's previous sibling element.
		 * 
		 * <p>The previous sibling has the same parent and precedes the current element.
		 * 
		 * @returns the previous sibling element
		 */
		getPreviousSibling(): DocumentApp.Element
		/**
		 * Retrieves the element's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code>.
		 * 
		 * <p>Use <code>getType()</code> to determine the exact type of a given element.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Obtain the first element in the document body.
		 * 
		 * var firstChild = body.getChild(0);
		 * 
		 * // Use getType() to determine the element&#39;s type.
		 * if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
		 *   Logger.log(&#39;The first element is a paragraph.&#39;);
		 * } else {
		 *   Logger.log(&#39;The first element is not a paragraph.&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @returns the element type
		 */
		getType(): DocumentApp.ElementType
		/**
		 * Determines whether the element is at the end of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/document.html'>Document</a></code>.
		 * 
		 * @returns whether the element is at the end of the document
		 */
		isAtDocumentEnd(): Boolean
		/**
		 * Merges the element with the preceding sibling of the same type.
		 * 
		 * <p>Only elements of the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/document/element-type.html'>ElementType</a></code> may be merged. Any child elements contained in
		 * the current element are moved to the preceding sibling element.
		 * 
		 * <p>The current element is removed from the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Append two paragraphs to the document.
		 * var par1 = body.appendParagraph(&#39;Paragraph 1.&#39;);
		 * var par2 = body.appendParagraph(&#39;Paragraph 2.&#39;);
		 * 
		 * // Merge the newly added paragraphs into a single paragraph.
		 * par2.merge();
		 * </code></pre>
		 * 
		 * @returns the merged element
		 */
		merge(): DocumentApp.UnsupportedElement
		/**
		 * Removes the element from its parent.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Remove all images in the document body.
		 * var imgs = body.getImages();
		 * for (var i = 0; i &lt; imgs.length; i++) {
		 *   imgs[i].removeFromParent();
		 * }
		 * </code></pre>
		 * 
		 * @returns the removed element
		 */
		removeFromParent(): DocumentApp.UnsupportedElement
		/**
		 * Sets the element's attributes.
		 * 
		 * <p>The specified attributes parameter must be an object where each property name is an item in
		 * the <code>DocumentApp.Attribute</code> enumeration and each property value is the new value to be
		 * applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * var body = DocumentApp.getActiveDocument().getBody();
		 * 
		 * // Define a custom paragraph style.
		 * var style = {};
		 * style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
		 *     DocumentApp.HorizontalAlignment.RIGHT;
		 * style[DocumentApp.Attribute.FONT_FAMILY] = &#39;Calibri&#39;;
		 * style[DocumentApp.Attribute.FONT_SIZE] = 18;
		 * style[DocumentApp.Attribute.BOLD] = true;
		 * 
		 * // Append a plain paragraph.
		 * var par = body.appendParagraph(&#39;A paragraph with custom style.&#39;);
		 * 
		 * // Apply the custom style.
		 * par.setAttributes(style);
		 * </code></pre>
		 * 
		 * @param attributes - the element's attributes
		 * 
		 * @returns the current element
		 */
		setAttributes(
			attributes: object
		): DocumentApp.UnsupportedElement

	}

	enum VerticalAlignment {
		/**
		 * The bottom-alignment option.
		 */
		BOTTOM = "BOTTOM",
		/**
		 * The center-alignment option.
		 */
		CENTER = "CENTER",
		/**
		 * The top-alignment option.
		 */
		TOP = "TOP",
	}

}
