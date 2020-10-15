/** Module: XmlService */

type XmlService = typeof XmlService;
declare namespace XmlService {

	/**
	 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/cdata.html'>CDATASection</a></code> node with the given value.
	 * 
	 * @param text - the value to set
	 * 
	 * @returns the newly created <code>CDATASection</code> node
	 */
	function createCdata(
		text: string
	): XmlService.Cdata
	/**
	 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/comment.html'>Comment</a></code> node with the given value.
	 * 
	 * @param text - the value to set
	 * 
	 * @returns the newly created <code>Comment</code> node
	 */
	function createComment(
		text: string
	): XmlService.Comment
	/**
	 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocumentType</a></code> node for the root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node
	 * with the given name.
	 * 
	 * @param elementName - the name of the root <code>Element</code> node to specify in the <code>DocType</code>
	 *     declaration
	 * 
	 * @returns the newly created <code>DocumentType</code> node
	 */
	function createDocType(
		elementName: string
	): XmlService.DocType
	/**
	 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocumentType</a></code> node for the root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node
	 * with the given name, and the given system ID for the external subset data.
	 * 
	 * @param elementName - the name of the root <code>Element</code> node to specify in the <code>DocType</code>
	 *     declaration
	 * @param systemId - the system ID of the external subset data to set
	 * 
	 * @returns the newly created <code>DocumentType</code> node
	 */
	function createDocType(
		elementName: string,
		systemId: string
	): XmlService.DocType
	/**
	 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocumentType</a></code> node for the root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node
	 * with the given name, and the given public ID and system ID for the external subset data.
	 * 
	 * @param elementName - the name of the root <code>Element</code> node to specify in the <code>DocType</code>
	 *     declaration
	 * @param publicId - the public ID of the external subset data to set
	 * @param systemId - the system ID of the external subset data to set
	 * 
	 * @returns the newly created <code>DocumentType</code> node
	 */
	function createDocType(
		elementName: string,
		publicId: string,
		systemId: string
	): XmlService.DocType

	/**
	 * Creates an empty XML document.
	 * 
	 * @returns the newly created document
	 */
	function createDocument(): XmlService.Document
	/**
	 * Creates an XML document with the given root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node.
	 * 
	 * @param rootElement - the root <code>Element</code> node to set
	 * 
	 * @returns the newly created document
	 */
	function createDocument(
		rootElement: XmlService.Element
	): XmlService.Document

	/**
	 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node with the given local name and no namespace.
	 * 
	 * @param name - the local name to set
	 * 
	 * @returns the newly created <code>Element</code> node
	 */
	function createElement(
		name: string
	): XmlService.Element
	/**
	 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node with the given local name and namespace.
	 * 
	 * @param name - the local name to set
	 * @param namespace - the namespace to set
	 * 
	 * @returns the newly created <code>Element</code> node
	 */
	function createElement(
		name: string,
		namespace: XmlService.Namespace
	): XmlService.Element

	/**
	 * Creates an unattached <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/text.html'>Text</a></code> node with the given value.
	 * 
	 * @param text - the value to set
	 * 
	 * @returns the newly created <code>Text</code> node
	 */
	function createText(
		text: string
	): XmlService.Text
	/**
	 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/format.html'>Format</a></code> object for outputting a compact XML document. The formatter
	 * defaults to <code>UTF-8</code> encoding, no indentation, and no additional line breaks, but includes
	 * the XML declaration and its encoding.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Log an XML document in compact form.
	 * var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;Text!&lt;/b&gt;&lt;b&gt;More text!&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
	 * var document = XmlService.parse(xml);
	 * var output = XmlService.getCompactFormat()
	 *     .format(document);
	 * Logger.log(output);
	 * </code></pre>
	 * 
	 * @returns the newly created formatter
	 */
	function getCompactFormat(): XmlService.Format
	/**
	 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/namespace.html'>Namespace</a></code> with the given URI.
	 * 
	 * @param uri - the URI for the namespace
	 * 
	 * @returns the newly created namespace
	 */
	function getNamespace(
		uri: string
	): XmlService.Namespace
	/**
	 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/namespace.html'>Namespace</a></code> with the given prefix and URI.
	 * 
	 * @param prefix - the prefix for the namespace
	 * @param uri - the URI for the namespace
	 * 
	 * @returns the newly created namespace
	 */
	function getNamespace(
		prefix: string,
		uri: string
	): XmlService.Namespace

	/**
	 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/namespace.html'>Namespace</a></code> that represents the absence of a real namespace.
	 * 
	 * @returns the newly created namespace
	 */
	function getNoNamespace(): XmlService.Namespace
	/**
	 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/format.html'>Format</a></code> object for outputting a human-readable XML document. The formatter
	 * defaults to <code>UTF-8</code> encoding, two-space indentation, <code>\r\n</code> line separators after
	 * every node, and includes the XML declaration and its encoding.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Log an XML document in human-readable form.
	 * var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;Text!&lt;/b&gt;&lt;b&gt;More text!&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
	 * var document = XmlService.parse(xml);
	 * var output = XmlService.getPrettyFormat()
	 *     .format(document);
	 * Logger.log(output);
	 * </code></pre>
	 * 
	 * @returns the newly created formatter
	 */
	function getPrettyFormat(): XmlService.Format
	/**
	 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/format.html'>Format</a></code> object for outputting a raw XML document. The formatter defaults to
	 * <code>UTF-8</code> encoding, no indentation and no line breaks other than those provided in the XML
	 * document itself, and includes the XML declaration and its encoding.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Log an XML document in raw form.
	 * var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;Text!&lt;/b&gt;&lt;b&gt;More text!&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
	 * var document = XmlService.parse(xml);
	 * var output = XmlService.getRawFormat()
	 *     .format(document);
	 * Logger.log(output);
	 * </code></pre>
	 * 
	 * @returns the newly created formatter
	 */
	function getRawFormat(): XmlService.Format
	/**
	 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/namespace.html'>Namespace</a></code> with the standard <code>xml</code> prefix.
	 * 
	 * @returns the newly created namespace
	 */
	function getXmlNamespace(): XmlService.Namespace
	/**
	 * Creates an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/document.html'>Document</a></code> from the given XML, without validating the XML.
	 * 
	 * <pre class="prettyprint"><code>
	 * var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;Text!&lt;/b&gt;&lt;b&gt;More text!&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
	 * var doc = XmlService.parse(xml);
	 * </code></pre>
	 * 
	 * @param xml - the XML to parse
	 * 
	 * @returns the newly created document
	 */
	function parse(
		xml: string
	): XmlService.Document

	class Attribute {
		private constructor();

		/**
		 * Gets the local name of the attribute. If the attribute has a namespace prefix, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/attribute.html#getNamespace()'>getNamespace()</a></code>.<code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/namespace.html#getPrefix()'>getPrefix()</a></code> to get the prefix.
		 * 
		 * @returns the local name of the attribute
		 */
		getName(): string
		/**
		 * Gets the namespace for the attribute.
		 * 
		 * @returns the namespace for the attribute
		 */
		getNamespace(): XmlService.Namespace
		/**
		 * Gets the value of the attribute.
		 * 
		 * @returns the value of the attribute
		 */
		getValue(): string
		/**
		 * Sets the local name of the attribute. To set a namespace prefix for the attribute, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/attribute.html#setNamespace(Namespace)'>setNamespace(namespace)</a></code> in conjunction with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/xml-service.html#getNamespace(String,String)'>XmlService.getNamespace(prefix, uri)</a></code>.
		 * 
		 * @param name - the local name to set
		 * 
		 * @returns the attribute, for chaining
		 */
		setName(
			name: string
		): XmlService.Attribute
		/**
		 * Sets the namespace for the attribute. The namespace must have a prefix.
		 * 
		 * @param namespace - the namespace to set
		 * 
		 * @returns the attribute, for chaining
		 */
		setNamespace(
			namespace: XmlService.Namespace
		): XmlService.Attribute
		/**
		 * Sets the value of the attribute.
		 * 
		 * @param value - the value to set
		 * 
		 * @returns the attribute, for chaining
		 */
		setValue(
			value: string
		): XmlService.Attribute

	}

	class Cdata {
		private constructor();

		/**
		 * Appends the given text to any content that already exists in the node.
		 * 
		 * @param text - the text to append to the node
		 * 
		 * @returns the <code>Text</code> node, for chaining
		 */
		append(
			text: string
		): XmlService.Text
		/**
		 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
		 * this method has no effect.
		 * 
		 * @returns the detached node
		 */
		detach(): XmlService.Content
		/**
		 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
		 * returns <code>null</code>.
		 * 
		 * @returns the parent <code>Element</code> node
		 */
		getParentElement(): XmlService.Element
		/**
		 * Gets the text value of the <code>Text</code> node.
		 * 
		 * @returns the text value of the <code>Text</code> node
		 */
		getText(): string
		/**
		 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
		 * they appear in the document.
		 * 
		 * @returns the text value of all nodes that are direct or indirect children of the node
		 */
		getValue(): string
		/**
		 * Sets the text value of the <code>Text</code> node.
		 * 
		 * @param text - the text value to set
		 * 
		 * @returns the <code>Text</code> node, for chaining
		 */
		setText(
			text: string
		): XmlService.Text

	}

	class Comment {
		private constructor();

		/**
		 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
		 * this method has no effect.
		 * 
		 * @returns the detached node
		 */
		detach(): XmlService.Content
		/**
		 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
		 * returns <code>null</code>.
		 * 
		 * @returns the parent <code>Element</code> node
		 */
		getParentElement(): XmlService.Element
		/**
		 * Gets the text value of the <code>Comment</code> node.
		 * 
		 * @returns the text value of the <code>Comment</code> node
		 */
		getText(): string
		/**
		 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
		 * they appear in the document.
		 * 
		 * @returns the text value of all nodes that are direct or indirect children of the node
		 */
		getValue(): string
		/**
		 * Sets the text value of the <code>Comment</code> node.
		 * 
		 * @param text - the text value to set
		 * 
		 * @returns the <code>Comment</code> node, for chaining
		 */
		setText(
			text: string
		): XmlService.Comment

	}

	class Content {
		private constructor();

		/**
		 * Casts the node as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/cdata.html'>CDATASection</a></code> node for the purposes of autocomplete. If the
		 * node's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>CDATA</code>, this method returns <code>null</code>.
		 * 
		 * @returns the <code>CDATASection</code> node
		 */
		asCdata(): XmlService.Cdata
		/**
		 * Casts the node as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/comment.html'>Comment</a></code> node for the purposes of autocomplete. If the node's
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>COMMENT</code>, this method returns <code>null</code>.
		 * 
		 * @returns the <code>Comment</code> node, or <code>null</code> if the node's content type is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>COMMENT</a></code>
		 */
		asComment(): XmlService.Comment
		/**
		 * Casts the node as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocumentType</a></code> node for the purposes of autocomplete. If
		 * the node's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>DOCTYPE</code>, this method returns <code>null</code>.
		 * 
		 * @returns the <code>DocumentType</code> node
		 */
		asDocType(): XmlService.DocType
		/**
		 * Casts the node as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node for the purposes of autocomplete. If the node's
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>ELEMENT</code>, this method returns <code>null</code>.
		 * 
		 * @returns the <code>Element</code> node
		 */
		asElement(): XmlService.Element
		/**
		 * Casts the node as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/entity-ref.html'>EntityReference</a></code> node for the purposes of autocomplete.
		 * If the node's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>ENTITYREF</code>, this method returns
		 * <code>null</code>.
		 * 
		 * @returns the <code>EntityReference</code> node
		 */
		asEntityRef(): XmlService.EntityRef
		/**
		 * Casts the node as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/processing-instruction.html'>ProcessingInstruction</a></code> node for the purposes of autocomplete. If
		 * the node's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>PROCESSINGINSTRUCTION</code>, this method
		 * returns <code>null</code>.
		 * 
		 * @returns the <code>ProcessingInstruction</code> node
		 */
		asProcessingInstruction(): XmlService.ProcessingInstruction
		/**
		 * Casts the node as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/text.html'>Text</a></code> node for the purposes of autocomplete. If the node's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code> is not already <code>TEXT</code>, this method returns <code>null</code>.
		 * 
		 * @returns the <code>Text</code> node
		 */
		asText(): XmlService.Text
		/**
		 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
		 * this method has no effect.
		 * 
		 * @returns the detached node
		 */
		detach(): XmlService.Content
		/**
		 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
		 * returns <code>null</code>.
		 * 
		 * @returns the parent <code>Element</code> node
		 */
		getParentElement(): XmlService.Element
		/**
		 * Gets the node's content type.
		 * 
		 * @returns the node's content type
		 */
		getType(): XmlService.ContentType
		/**
		 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
		 * they appear in the document.
		 * 
		 * @returns the text value of all nodes that are direct or indirect children of the node
		 */
		getValue(): string

	}

	enum ContentType {
		/**
		 * An XML <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/cdata.html'>CDATASection</a></code> node.
		 */
		CDATA = "CDATA",
		/**
		 * An XML <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/comment.html'>Comment</a></code> node.
		 */
		COMMENT = "COMMENT",
		/**
		 * An XML <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocumentType</a></code> node.
		 */
		DOCTYPE = "DOCTYPE",
		/**
		 * An XML <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node.
		 */
		ELEMENT = "ELEMENT",
		/**
		 * An XML <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/entity-ref.html'>EntityReference</a></code> node.
		 */
		ENTITYREF = "ENTITYREF",
		/**
		 * An XML <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/processing-instruction.html'>ProcessingInstruction</a></code> node.
		 */
		PROCESSINGINSTRUCTION = "PROCESSINGINSTRUCTION",
		/**
		 * An XML <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/text.html'>Text</a></code> node.
		 */
		TEXT = "TEXT",
	}

	class DocType {
		private constructor();

		/**
		 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
		 * this method has no effect.
		 * 
		 * @returns the detached node
		 */
		detach(): XmlService.Content
		/**
		 * Gets the name of the root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node specified in the <code>DocType</code> declaration.
		 * 
		 * @returns the name of the root <code>Element</code> node specified in the <code>DocType</code> declaration
		 */
		getElementName(): string
		/**
		 * Gets the internal subset data for the <code>DocumentType</code> node.
		 * 
		 * @returns the internal subset data
		 */
		getInternalSubset(): string
		/**
		 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
		 * returns <code>null</code>.
		 * 
		 * @returns the parent <code>Element</code> node
		 */
		getParentElement(): XmlService.Element
		/**
		 * Gets the public ID of the external subset data for the <code>DocumentType</code> node.
		 * 
		 * @returns the public ID of the external subset data
		 */
		getPublicId(): string
		/**
		 * Gets the system ID of the external subset data for the <code>DocumentType</code> node.
		 * 
		 * @returns the system ID of the external subset data
		 */
		getSystemId(): string
		/**
		 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
		 * they appear in the document.
		 * 
		 * @returns the text value of all nodes that are direct or indirect children of the node
		 */
		getValue(): string
		/**
		 * Sets the name of the root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node to specify in the <code>DocType</code>
		 * declaration.
		 * 
		 * @param name - the name of the root <code>Element</code> node to specify in the <code>DocType</code>
		 *     declaration
		 * 
		 * @returns the <code>DocumentType</code> node, for chaining
		 */
		setElementName(
			name: string
		): XmlService.DocType
		/**
		 * Sets the internal subset data for the <code>DocumentType</code> node.
		 * 
		 * @param data - the internal subset data to set
		 * 
		 * @returns the <code>DocumentType</code> node, for chaining
		 */
		setInternalSubset(
			data: string
		): XmlService.DocType
		/**
		 * Sets the public ID of the external subset data for the <code>DocumentType</code> node.
		 * 
		 * @param id - the public ID of the external subset data to set
		 * 
		 * @returns the <code>DocumentType</code> node, for chaining
		 */
		setPublicId(
			id: string
		): XmlService.DocType
		/**
		 * Sets the system ID of the external subset data for the <code>DocumentType</code> node.
		 * 
		 * @param id - the system ID of the external subset data to set
		 * 
		 * @returns the <code>DocumentType</code> node, for chaining
		 */
		setSystemId(
			id: string
		): XmlService.DocType

	}

	class Document {
		private constructor();

		/**
		 * Inserts the given node at the given index among all nodes that are immediate children of the
		 * document. The <code>content</code> argument can be a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content.html'>Content</a></code> object or any node object
		 * that corresponds to a type listed in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code>. Note, however, that a document
		 * can only have one child <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node, which is implicitly the root <code>Element</code>
		 * node.
		 * 
		 * @param index - the index at which to insert the node among all nodes that are immediate children
		 *     of the document
		 * @param content - the node to insert
		 * 
		 * @returns the document, for chaining
		 */
		addContent(
			index: number,
			content: XmlService.Content
		): XmlService.Document
		/**
		 * Appends the given node to the end of the document. The <code>content</code> argument can be a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content.html'>Content</a></code> object or any node object that corresponds to a type listed in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code>. Note, however, that a document can only have one child <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code>
		 * node, which is implicitly the root <code>Element</code> node.
		 * 
		 * @param content - the node to append
		 * 
		 * @returns the document, for chaining
		 */
		addContent(
			content: XmlService.Content
		): XmlService.Document

		/**
		 * Creates unattached copies of all nodes that are immediate children of the document.
		 * 
		 * @returns an array of unattached copies of all nodes that are immediate children of the
		 *     document
		 */
		cloneContent(): XmlService.Content[]
		/**
		 * Detaches and returns the document's root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the document does not have
		 * a root <code>Element</code> node, this method returns <code>null</code>.
		 * 
		 * @returns the detached <code>Element</code> node, or <code>null</code> if the document does not have a root
		 *     <code>Element</code> node
		 */
		detachRootElement(): XmlService.Element
		/**
		 * Gets all nodes that are immediate children of the document.
		 * 
		 * @returns an array of all nodes that are immediate children of the document
		 */
		getAllContent(): XmlService.Content[]
		/**
		 * Gets the node at the given index among all nodes that are immediate children of the
		 * document. If there is no node at the given index, this method returns <code>null</code>.
		 * 
		 * @param index - the index for the node among all nodes that are immediate children of the
		 *     document
		 * 
		 * @returns the node, or <code>null</code> if there is no node at the given index
		 */
		getContent(
			index: number
		): XmlService.Content
		/**
		 * Gets the number of nodes that are immediate children of the document.
		 * 
		 * @returns the number of nodes that are immediate children of the document
		 */
		getContentSize(): number
		/**
		 * Gets all nodes that are direct or indirect children of the document, in the order they
		 * appear in the document.
		 * 
		 * @returns an array of all nodes that are direct or indirect children of the document
		 */
		getDescendants(): XmlService.Content[]
		/**
		 * Gets the document's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocType</a></code> declaration. If the document does not have a <code>DocumentType</code> node, this method returns <code>null</code>.
		 * 
		 * @returns the <code>DocumentType</code> node, or <code>null</code> if the document does not have a <code>DocumentType</code> node
		 */
		getDocType(): XmlService.DocType
		/**
		 * Gets the document's root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the document does not have a root <code>Element</code> node, this method returns <code>null</code>.
		 * 
		 * @returns the root <code>Element</code> node, or <code>null</code> if the document does not have a root
		 *     <code>Element</code> node
		 */
		getRootElement(): XmlService.Element
		/**
		 * Determines whether the document has a root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node.
		 * 
		 * @returns <code>true</code> if the document has a root <code>Element</code> node; <code>false</code> if not
		 */
		hasRootElement(): Boolean
		/**
		 * Removes all nodes that are immediate children of the document.
		 * 
		 * @returns an array of all nodes that were immediate children of the document before they
		 *     were removed
		 */
		removeContent(): XmlService.Content[]
		/**
		 * Removes the node at the given index among all nodes that are immediate children of the
		 * document. If there is no node at the given index, this method returns <code>null</code>.
		 * 
		 * @param index - the index for the node among all nodes that are immediate children of the
		 *     document
		 * 
		 * @returns the node that was removed, or <code>null</code> if there is no node at the given index
		 */
		removeContent(
			index: number
		): XmlService.Content
		/**
		 * Removes the given node, if the node is an immediate child of the document. The <code>content</code> argument can be a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content.html'>Content</a></code> object or any node object that corresponds to a
		 * type listed in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code>.
		 * 
		 * @param content - the node to remove
		 * 
		 * @returns <code>true</code> if the node was an immediate child and was removed; <code>false</code> if not
		 */
		removeContent(
			content: XmlService.Content
		): Boolean

		/**
		 * Sets the document's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/doc-type.html'>DocType</a></code> declaration. If the document already has a different
		 * <code>DocType</code> node, this method overwrites the old node. This method throws an exception if
		 * the document already contains the same <code>DocType</code> node that is being set.
		 * 
		 * @param docType - the <code>DocumentType</code> to set
		 * 
		 * @returns the document, for chaining
		 */
		setDocType(
			docType: XmlService.DocType
		): XmlService.Document
		/**
		 * Sets the document's root <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the document already has a root <code>Element</code> node, this method overwrites the old node.
		 * 
		 * @param element - the root <code>Element</code> node to set
		 * 
		 * @returns the document, for chaining
		 */
		setRootElement(
			element: XmlService.Element
		): XmlService.Document

	}

	class Element {
		private constructor();

		/**
		 * Inserts the given node at the given index among all nodes that are immediate children of the
		 * <code>Element</code> node. The <code>content</code> argument can be a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> object or any
		 * node object that corresponds to a type listed in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code>.
		 * 
		 * @param index - the index at which to insert the node among all nodes that are immediate children
		 *     of the <code>Element</code> node
		 * @param content - the node to insert
		 * 
		 * @returns the <code>Element</code> node, for chaining
		 */
		addContent(
			index: number,
			content: XmlService.Content
		): XmlService.Element
		/**
		 * Appends the given node as the last child of the <code>Element</code> node. The <code>content</code>
		 * argument can be a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> object or any node object that corresponds to a type
		 * listed in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code>.
		 * 
		 * @param content - the node to append
		 * 
		 * @returns the <code>Element</code> node, for chaining
		 */
		addContent(
			content: XmlService.Content
		): XmlService.Element

		/**
		 * Creates unattached copies of all nodes that are immediate children of the {@code Element} node.
		 * 
		 * @returns an array of unattached copies of all nodes that are immediate children of the
		 *     {@code Element} node
		 */
		cloneContent(): XmlService.Content[]
		/**
		 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
		 * this method has no effect.
		 * 
		 * @returns the detached node
		 */
		detach(): XmlService.Content
		/**
		 * Gets all nodes that are immediate children of the {@code Element} node.
		 * 
		 * @returns an array of all nodes that are immediate children of the {@code Element} node
		 */
		getAllContent(): XmlService.Content[]
		/**
		 * Gets the attribute for this <code>Element</code> node with the given name and no namespace. If there
		 * is no such attribute, this method returns <code>null</code>.
		 * 
		 * @param name - the name of the attribute
		 * 
		 * @returns the attribute, or <code>null</code> if there is no attribute with the given name and no
		 *     namespace
		 */
		getAttribute(
			name: string
		): XmlService.Attribute
		/**
		 * Gets the attribute for this <code>Element</code> node with the given name and namespace. If there is
		 * no such node, this method returns <code>null</code>.
		 * 
		 * @param name - the name of the attribute
		 * @param namespace - the namespace of the attribute
		 * 
		 * @returns the attribute, or <code>null</code> if there is no attribute with the given name and
		 *     namespace
		 */
		getAttribute(
			name: string,
			namespace: XmlService.Namespace
		): XmlService.Attribute

		/**
		 * Gets all attributes for this <code>Element</code> node, in the order they appear in the document.
		 * 
		 * @returns an array of all attributes for this <code>Element</code> node
		 */
		getAttributes(): XmlService.Attribute[]
		/**
		 * Gets the first <code>Element</code> node with the given name and no namespace that is an immediate
		 * child of this <code>Element</code> node. If there is no such node, this method returns <code>null</code>.
		 * 
		 * @param name - the name of the child <code>Element</code> node
		 * 
		 * @returns the <code>Element</code> node, or <code>null</code> if there is no immediate child <code>Element</code> node with the given name and no namespace
		 */
		getChild(
			name: string
		): XmlService.Element
		/**
		 * Gets the first <code>Element</code> node with the given name and namespace that is an immediate
		 * child of this <code>Element</code> node. If there is no such node, this method returns <code>null</code>.
		 * 
		 * @param name - the name of the child <code>Element</code> node
		 * @param namespace - the namespace of the child <code>Element</code> node
		 * 
		 * @returns the <code>Element</code> node, or <code>null</code> if there is no immediate child <code>Element</code> node with the given name and namespace
		 */
		getChild(
			name: string,
			namespace: XmlService.Namespace
		): XmlService.Element

		/**
		 * Gets the text value of the node with the given name and no namespace, if the node is an
		 * immediate child of the <code>Element</code> node. If there is no such node, this method returns
		 * <code>null</code>.
		 * 
		 * @param name - the name of the child node
		 * 
		 * @returns the text value of the child node, or <code>null</code> if there is no immediate child node
		 *     with the given name and no namespace
		 */
		getChildText(
			name: string
		): string
		/**
		 * Gets the text value of the node with the given name and namespace, if the node is an immediate
		 * child of the <code>Element</code> node. If there is no such node, this method returns <code>null</code>.
		 * 
		 * @param name - the name of the child node
		 * @param namespace - the namespace of the child node
		 * 
		 * @returns the text value of the child node, or <code>null</code> if there is no immediate child node
		 *     with the given name and namespace
		 */
		getChildText(
			name: string,
			namespace: XmlService.Namespace
		): string

		/**
		 * Gets all <code>Element</code> nodes that are immediate children of this <code>Element</code> node, in the
		 * order they appear in the document.
		 * 
		 * @returns an array of all <code>Element</code> nodes that are immediate children of this <code>Element</code> node
		 */
		getChildren(): XmlService.Element[]
		/**
		 * Gets all <code>Element</code> nodes with the given name and no namespace that are immediate children
		 * of this <code>Element</code> node, in the order they appear in the document.
		 * 
		 * @param name - the name of the child <code>Element</code> nodes
		 * 
		 * @returns an array of all <code>Element</code> nodes with the given name and no namespace that are
		 *     immediate children of this <code>Element</code> node
		 */
		getChildren(
			name: string
		): XmlService.Element[]
		/**
		 * Gets all <code>Element</code> nodes with the given name and namespace that are immediate children of
		 * this <code>Element</code> node, in the order they appear in the document.
		 * 
		 * @param name - the name of the child <code>Element</code> nodes
		 * @param namespace - the namespace of the child <code>Element</code> nodes
		 * 
		 * @returns an array of all <code>Element</code> nodes with the given name and namespace that are
		 *     immediate children of this <code>Element</code> node
		 */
		getChildren(
			name: string,
			namespace: XmlService.Namespace
		): XmlService.Element[]

		/**
		 * Gets the node at the given index among all nodes that are immediate children of the
		 * {@code Element} node. If there is no node at the given index, this method returns <code>null</code>.
		 * 
		 * @param index - the index for the node among all nodes that are immediate children of the
		 *     {@code Element} node
		 * 
		 * @returns the node, or <code>null</code> if there is no node at the given index
		 */
		getContent(
			index: number
		): XmlService.Content
		/**
		 * Gets the number of nodes that are immediate children of the {@code Element} node.
		 * 
		 * @returns the number of nodes that are immediate children of the {@code Element} node
		 */
		getContentSize(): number
		/**
		 * Gets all nodes that are direct or indirect children of the {@code Element} node, in the order they
		 * appear in the document.
		 * 
		 * @returns an array of all nodes that are direct or indirect children of the {@code Element} node
		 */
		getDescendants(): XmlService.Content[]
		/**
		 * Gets the XML document that contains the {@code Element} node.
		 * 
		 * @returns the document that contains the {@code Element} node
		 */
		getDocument(): XmlService.Document
		/**
		 * Gets the local name of the <code>Element</code> node. If the node has a namespace prefix, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html#getQualifiedName()'>getQualifiedName()</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html#getNamespace()'>getNamespace()</a></code>.<code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/namespace.html#getPrefix()'>getPrefix()</a></code> to
		 * get the prefix.
		 * 
		 * @returns the local name of the <code>Element</code> node
		 */
		getName(): string
		/**
		 * Gets the namespace for the <code>Element</code> node.
		 * 
		 * @returns the namespace for the <code>Element</code> node
		 */
		getNamespace(): XmlService.Namespace
		/**
		 * Gets the namespace with the given prefix for the <code>Element</code> node.
		 * 
		 * @param prefix - the prefix for the namespace
		 * 
		 * @returns the namespace with the given prefix for the <code>Element</code> node
		 */
		getNamespace(
			prefix: string
		): XmlService.Namespace

		/**
		 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
		 * returns <code>null</code>.
		 * 
		 * @returns the parent <code>Element</code> node
		 */
		getParentElement(): XmlService.Element
		/**
		 * Gets the local name and namespace prefix of the <code>Element</code> node, in the form <code>[namespacePrefix]:[localName]</code>. If the node does not have a namespace prefix, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html#getName()'>getName()</a></code>.
		 * 
		 * @returns the local name and namespace prefix of the <code>Element</code> node, in the form <code>[namespacePrefix]:[localName]</code>
		 */
		getQualifiedName(): string
		/**
		 * Gets the text value of the <code>Element</code> node.
		 * 
		 * @returns the text value of the <code>Element</code> node
		 */
		getText(): string
		/**
		 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
		 * they appear in the document.
		 * 
		 * @returns the text value of all nodes that are direct or indirect children of the node
		 */
		getValue(): string
		/**
		 * Determines whether this <code>Element</code> node is a direct or indirect parent of a given <code>Element</code> node.
		 * 
		 * @param other - the other <code>Element</code> node
		 * 
		 * @returns <code>true</code> if this <code>Element</code> node is a direct or indirect parent of the given
		 *     <code>Element</code> node; <code>false</code> if not
		 */
		isAncestorOf(
			other: XmlService.Element
		): Boolean
		/**
		 * Determines whether the <code>Element</code> node is the document's root node.
		 * 
		 * @returns <code>true</code> if the <code>Element</code> node is the document's root node; <code>false</code> if
		 *     not
		 */
		isRootElement(): Boolean
		/**
		 * Removes the attribute for this <code>Element</code> node with the given name and no namespace, if
		 * such an attribute exists.
		 * 
		 * @param attributeName - the name of the attribute
		 * 
		 * @returns <code>true</code> if the attribute existed and was removed; <code>false</code> if not
		 */
		removeAttribute(
			attributeName: string
		): Boolean
		/**
		 * Removes the attribute for this <code>Element</code> node with the given name and namespace, if such
		 * an attribute exists.
		 * 
		 * @param attributeName - the name of the attribute
		 * @param namespace - the namespace of the attribute
		 * 
		 * @returns <code>true</code> if the attribute existed and was removed; <code>false</code> if not
		 */
		removeAttribute(
			attributeName: string,
			namespace: XmlService.Namespace
		): Boolean
		/**
		 * Removes the given attribute for this <code>Element</code> node, if such an attribute exists.
		 * 
		 * @param attribute - the attribute
		 * 
		 * @returns <code>true</code> if the attribute existed and was removed; <code>false</code> if not
		 */
		removeAttribute(
			attribute: XmlService.Attribute
		): Boolean

		/**
		 * Removes all nodes that are immediate children of the {@code Element} node.
		 * 
		 * @returns an array of all nodes that were immediate children of the {@code Element} node before they
		 *     were removed
		 */
		removeContent(): XmlService.Content[]
		/**
		 * Removes the node at the given index among all nodes that are immediate children of the
		 * {@code Element} node. If there is no node at the given index, this method returns <code>null</code>.
		 * 
		 * @param index - the index for the node among all nodes that are immediate children of the
		 *     {@code Element} node
		 * 
		 * @returns the node that was removed, or <code>null</code> if there is no node at the given index
		 */
		removeContent(
			index: number
		): XmlService.Content
		/**
		 * Removes the given node, if the node is an immediate child of the {@code Element} node. The <code>content</code> argument can be a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> object or any node object that corresponds to a
		 * type listed in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/content-type.html'>ContentType</a></code>.
		 * 
		 * @param content - the node to remove
		 * 
		 * @returns <code>true</code> if the node was an immediate child and was removed; <code>false</code> if not
		 */
		removeContent(
			content: XmlService.Content
		): Boolean

		/**
		 * Sets the attribute for this <code>Element</code> node with the given name, value, and no namespace.
		 * 
		 * @param name - the name of the attribute to set
		 * @param value - the value of the attribute to set
		 * 
		 * @returns the <code>Element</code> node, for chaining
		 */
		setAttribute(
			name: string,
			value: string
		): XmlService.Element
		/**
		 * Sets the attribute for this <code>Element</code> node with the given name, value, and namespace.
		 * 
		 * @param name - the name of the attribute to set
		 * @param value - the value of the attribute to set
		 * @param namespace - the namespace of the attribute to set
		 * 
		 * @returns the <code>Element</code> node, for chaining
		 */
		setAttribute(
			name: string,
			value: string,
			namespace: XmlService.Namespace
		): XmlService.Element
		/**
		 * Sets the given attribute for this <code>Element</code> node.
		 * 
		 * @param attribute - the attribute to set
		 * 
		 * @returns the <code>Element</code> node, for chaining
		 */
		setAttribute(
			attribute: XmlService.Attribute
		): XmlService.Element

		/**
		 * Sets the local name of the <code>Element</code> node. To set a namespace prefix for the node, use
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html#setNamespace(Namespace)'>setNamespace(namespace)</a></code> in conjunction with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/xml-service.html#getNamespace(String,String)'>XmlService.getNamespace(prefix, uri)</a></code>.
		 * 
		 * @param name - the local name to set
		 * 
		 * @returns the <code>Element</code> node, for chaining
		 */
		setName(
			name: string
		): XmlService.Element
		/**
		 * Sets the namespace for the <code>Element</code> node.
		 * 
		 * @param namespace - the namespace to set
		 * 
		 * @returns the <code>Element</code> node, for chaining
		 */
		setNamespace(
			namespace: XmlService.Namespace
		): XmlService.Element
		/**
		 * Sets the text value of the <code>Element</code> node. If the node already contains a text value or
		 * any child nodes, this method overwrites the old content. To append or insert content instead,
		 * use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html#addContent(Content)'>addContent(content)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html#addContent(Integer,Content)'>addContent(index, content)</a></code>.
		 * 
		 * @param text - the text to set
		 * 
		 * @returns the <code>Element</code> node, for chaining
		 */
		setText(
			text: string
		): XmlService.Element

	}

	class EntityRef {
		private constructor();

		/**
		 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
		 * this method has no effect.
		 * 
		 * @returns the detached node
		 */
		detach(): XmlService.Content
		/**
		 * Gets the name of the <code>EntityReference</code> node.
		 * 
		 * @returns the name of the <code>EntityReference</code> node
		 */
		getName(): string
		/**
		 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
		 * returns <code>null</code>.
		 * 
		 * @returns the parent <code>Element</code> node
		 */
		getParentElement(): XmlService.Element
		/**
		 * Gets the public ID of the <code>EntityReference</code> node. If the node does not have a public ID,
		 * this method returns <code>null</code>.
		 * 
		 * @returns the public ID of the <code>EntityReference</code> node, or <code>null</code> if it has none
		 */
		getPublicId(): string
		/**
		 * Gets the system ID of the <code>EntityReference</code> node. If the node does not have a system ID,
		 * this method returns <code>null</code>.
		 * 
		 * @returns the system ID of the <code>EntityReference</code> node, or <code>null</code> if it has none
		 */
		getSystemId(): string
		/**
		 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
		 * they appear in the document.
		 * 
		 * @returns the text value of all nodes that are direct or indirect children of the node
		 */
		getValue(): string
		/**
		 * Sets the name of the <code>EntityReference</code> node.
		 * 
		 * @param name - the name to set
		 * 
		 * @returns the <code>EntityReference</code> node, for chaining
		 */
		setName(
			name: string
		): XmlService.EntityRef
		/**
		 * Sets the public ID of the <code>EntityReference</code> node.
		 * 
		 * @param id - the public ID to set
		 * 
		 * @returns the <code>EntityReference</code> node, for chaining
		 */
		setPublicId(
			id: string
		): XmlService.EntityRef
		/**
		 * Sets the system ID of the <code>EntityReference</code> node.
		 * 
		 * @param id - the system ID to set
		 * 
		 * @returns the <code>EntityReference</code> node, for chaining
		 */
		setSystemId(
			id: string
		): XmlService.EntityRef

	}

	class Format {
		private constructor();

		/**
		 * Outputs the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/document.html'>Document</a></code> as a formatted string.
		 * 
		 * @param document - the document to format
		 * 
		 * @returns the formatted document
		 */
		format(
			document: XmlService.Document
		): string
		/**
		 * Outputs the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node as a formatted string.
		 * 
		 * @param element - the element to format
		 * 
		 * @returns the formatted element
		 */
		format(
			element: XmlService.Element
		): string

		/**
		 * Sets the character encoding that the formatter should use. The <code>encoding</code> argument must
		 * be an accepted XML encoding like <code>ISO-8859-1</code>, <code>US-ASCII</code>, <code>UTF-8</code>, or <code>UTF-16</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log an XML document with encoding that does not support certain special characters.
		 * var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;ಠ‿ಠ&lt;/b&gt;&lt;b&gt;ಠ‿ಠ&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
		 * var document = XmlService.parse(xml);
		 * var output = XmlService.getRawFormat()
		 *     .setEncoding(&#39;ISO-8859-1&#39;)
		 *     .format(document);
		 * Logger.log(output);
		 * </code></pre>
		 * 
		 * @param encoding - the encoding to use
		 * 
		 * @returns the formatter, for chaining
		 */
		setEncoding(
			encoding: string
		): XmlService.Format
		/**
		 * Sets the string used to indent child nodes relative to their parents. Setting an indent other
		 * than <code>null</code> will cause the formatter to insert a line break after every node.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log an XML document with each child node indented four spaces.
		 * var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;Text!&lt;/b&gt;&lt;b&gt;More text!&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
		 * var document = XmlService.parse(xml);
		 * var output = XmlService.getCompactFormat()
		 *     .setIndent(&#39;    &#39;)
		 *     .format(document);
		 * Logger.log(output);
		 * </code></pre>
		 * 
		 * @param indent - the indent to use
		 * 
		 * @returns the formatter, for chaining
		 */
		setIndent(
			indent: string
		): XmlService.Format
		/**
		 * Sets the string to insert whenever the formatter would normally insert a line break. The three
		 * pre-defined formatters have different conditions under which they insert a line break. The
		 * default line separator is <code>\r\n</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log an XML document with several spaces and a pipe character in place of line breaks.
		 * var xml = &#39;&lt;root&gt;&lt;a&gt;&lt;b&gt;Text!&lt;/b&gt;&lt;b&gt;More text!&lt;/b&gt;&lt;/a&gt;&lt;/root&gt;&#39;;
		 * var document = XmlService.parse(xml);
		 * var output = XmlService.getRawFormat()
		 *     .setLineSeparator(&#39; | &#39;)
		 *     .format(document);
		 * Logger.log(output);
		 * </code></pre>
		 * 
		 * @param separator - the separator to use
		 * 
		 * @returns the formatter, for chaining
		 */
		setLineSeparator(
			separator: string
		): XmlService.Format
		/**
		 * Sets whether the formatter should omit the XML declaration, such as <code>&lt;?xml version=&quot;1.0&quot;
		 * encoding=&quot;UTF-8&quot;?&gt;</code>.
		 * 
		 * @param omitDeclaration - <code>true</code> to omit the XML declaration; <code>false</code> to include it
		 * 
		 * @returns the formatter, for chaining
		 */
		setOmitDeclaration(
			omitDeclaration: Boolean
		): XmlService.Format
		/**
		 * Sets whether the formatter should omit the encoding in the XML declaration, such as the
		 * encoding field in <code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</code>.
		 * 
		 * @param omitEncoding - <code>true</code> to omit the encoding in the XML declaration; <code>false</code> to
		 *     include it
		 * 
		 * @returns the formatter, for chaining
		 */
		setOmitEncoding(
			omitEncoding: Boolean
		): XmlService.Format

	}

	class Namespace {
		private constructor();

		/**
		 * Gets the prefix for the namespace.
		 * 
		 * @returns the prefix for the namespace
		 */
		getPrefix(): string
		/**
		 * Gets the URI for the namespace.
		 * 
		 * @returns the URI for the namespace
		 */
		getURI(): string

	}

	class ProcessingInstruction {
		private constructor();

		/**
		 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
		 * this method has no effect.
		 * 
		 * @returns the detached node
		 */
		detach(): XmlService.Content
		/**
		 * Gets the raw data for every instruction in the <code>ProcessingInstruction</code> node.
		 * 
		 * @returns the raw data for every instruction in the <code>ProcessingInstruction</code> node
		 */
		getData(): string
		/**
		 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
		 * returns <code>null</code>.
		 * 
		 * @returns the parent <code>Element</code> node
		 */
		getParentElement(): XmlService.Element
		/**
		 * Gets the target for the <code>ProcessingInstruction</code> node.
		 * 
		 * @returns the target for the <code>ProcessingInstruction</code> node
		 */
		getTarget(): string
		/**
		 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
		 * they appear in the document.
		 * 
		 * @returns the text value of all nodes that are direct or indirect children of the node
		 */
		getValue(): string

	}

	class Text {
		private constructor();

		/**
		 * Appends the given text to any content that already exists in the node.
		 * 
		 * @param text - the text to append to the node
		 * 
		 * @returns the <code>Text</code> node, for chaining
		 */
		append(
			text: string
		): XmlService.Text
		/**
		 * Detaches the node from its parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent,
		 * this method has no effect.
		 * 
		 * @returns the detached node
		 */
		detach(): XmlService.Content
		/**
		 * Gets the node's parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/xml-service/element.html'>Element</a></code> node. If the node does not have a parent, this method
		 * returns <code>null</code>.
		 * 
		 * @returns the parent <code>Element</code> node
		 */
		getParentElement(): XmlService.Element
		/**
		 * Gets the text value of the <code>Text</code> node.
		 * 
		 * @returns the text value of the <code>Text</code> node
		 */
		getText(): string
		/**
		 * Gets the text value of all nodes that are direct or indirect children of the node, in the order
		 * they appear in the document.
		 * 
		 * @returns the text value of all nodes that are direct or indirect children of the node
		 */
		getValue(): string
		/**
		 * Sets the text value of the <code>Text</code> node.
		 * 
		 * @param text - the text value to set
		 * 
		 * @returns the <code>Text</code> node, for chaining
		 */
		setText(
			text: string
		): XmlService.Text

	}

}
