/** Module: SlidesApp */

type SlidesApp = typeof SlidesApp;
declare namespace SlidesApp {

	/**
	 * Creates and opens a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>.
	 * 
	 * @param name - The name to be given to the created presentation.
	 * 
	 * @returns the presentation with the given name.
	 */
	function create(
		name: string
	): SlidesApp.Presentation
	/**
	 * Returns the currently active presentation to which the script is <a
	 * href="/apps-script/scripts_containers">container-bound</a>, or <code>null</code> if there is no
	 * active presentation. To interact with a presentation to which the script is not
	 * container-bound, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slides-app.html#openById(String)'>openById(id)</a></code> instead.
	 * 
	 * <pre class="prettyprint">
	 * // Get the current presentation to which this script is bound.
	 * var presentation = SlidesApp.getActivePresentation();
	 * </pre>
	 * 
	 * If the presentation is already open, the same presentation instance is returned.
	 */
	function getActivePresentation(): SlidesApp.Presentation
	/**
	 * Returns an instance of the presentation's user-interface environment that allows the script to
	 * add features like menus, dialogs, and sidebars. A script can only interact with the UI for the
	 * current instance of an open presentation, and only if the script is <a
	 * href="/apps-script/scripts_containers">bound</a> to the presentation. For more information, see
	 * the guides to <a href="/apps-script/guides/menus">menus</a> and <a
	 * href="/apps-script/guides/dialogs">dialogs and sidebars</a>.
	 * 
	 * <pre class="prettyprint">
	 * // Add a custom menu to the active presentation, including a separator and a sub-menu.
	 * function onOpen(e) {
	 *   SlidesApp.getUi()
	 *       .createMenu('My Menu')
	 *       .addItem('My menu item', 'myFunction')
	 *       .addSeparator()
	 *       .addSubMenu(SlidesApp.getUi().createMenu('My sub-menu')
	 *           .addItem('One sub-menu item', 'mySecondFunction')
	 *           .addItem('Another sub-menu item', 'myThirdFunction'))
	 *       .addToUi();
	 * }
	 * </pre>
	 */
	function getUi(): Ui
	/**
	 * Returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/affine-transform-builder.html'>AffineTransformBuilder</a></code> to build an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/affine-transform.html'>AffineTransform</a></code>. The builder
	 * is preset with the identity affine transform.
	 */
	function newAffineTransformBuilder(): SlidesApp.AffineTransformBuilder
	/**
	 * Opens the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> with the given ID.
	 * 
	 * <pre class="prettyprint">
	 * // Open a presentation by ID.
	 * var presentation = SlidesApp.openById('docId');
	 * </pre>
	 * 
	 * If the presentation is already open, the same presentation instance is returned.
	 * 
	 * @param id
	 * 
	 * @returns the presentation with the given ID
	 */
	function openById(
		id: string
	): SlidesApp.Presentation
	/**
	 * Opens the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> with the given URL.
	 * 
	 * <pre class="prettyprint">
	 * // Open a presentation by URL.
	 * var presentation = SlidesApp.openByUrl('https://docs.google.com/presentation/d/docId/edit');
	 * </pre>
	 * 
	 * If the presentation is already open, the same presentation instance is returned.
	 * 
	 * @param url
	 * 
	 * @returns the presentation with the given URL
	 */
	function openByUrl(
		url: string
	): SlidesApp.Presentation

	class AffineTransform {
		private constructor();

		/**
		 * Gets the X coordinate scaling element.
		 */
		getScaleX(): Number
		/**
		 * Gets the Y coordinate scaling element.
		 */
		getScaleY(): Number
		/**
		 * Gets the X coordinate shearing element.
		 */
		getShearX(): Number
		/**
		 * Gets the Y coordinate shearing element.
		 */
		getShearY(): Number
		/**
		 * Gets the X coordinate translation element in points.
		 */
		getTranslateX(): Number
		/**
		 * Gets the Y coordinate translation element in points.
		 */
		getTranslateY(): Number
		/**
		 * Returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/affine-transform-builder.html'>AffineTransformBuilder</a></code> based on this transform.
		 */
		toBuilder(): SlidesApp.AffineTransformBuilder

	}

	class AffineTransformBuilder {
		private constructor();

		/**
		 * Creates an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/affine-transform.html'>AffineTransform</a></code> object initialized with the elements set in the builder.
		 */
		build(): SlidesApp.AffineTransform
		/**
		 * Sets the X coordinate scaling element and returns the builder.
		 * 
		 * @param scaleX
		 */
		setScaleX(
			scaleX: Number
		): SlidesApp.AffineTransformBuilder
		/**
		 * Sets the Y coordinate scaling element and returns the builder.
		 * 
		 * @param scaleY
		 */
		setScaleY(
			scaleY: Number
		): SlidesApp.AffineTransformBuilder
		/**
		 * Sets the X coordinate shearing element and returns the builder.
		 * 
		 * @param shearX
		 */
		setShearX(
			shearX: Number
		): SlidesApp.AffineTransformBuilder
		/**
		 * Sets the Y coordinate shearing element and returns the builder.
		 * 
		 * @param shearY
		 */
		setShearY(
			shearY: Number
		): SlidesApp.AffineTransformBuilder
		/**
		 * Sets the X coordinate translation element in points, and returns the builder.
		 * 
		 * @param translateX
		 */
		setTranslateX(
			translateX: Number
		): SlidesApp.AffineTransformBuilder
		/**
		 * Sets the Y coordinate translation element in points, and returns the builder.
		 * 
		 * @param translateY
		 */
		setTranslateY(
			translateY: Number
		): SlidesApp.AffineTransformBuilder

	}

	enum AlignmentPosition {
		/**
		 * Align to the center.
		 */
		CENTER = "CENTER",
		/**
		 * Align to the horizontal center.
		 */
		HORIZONTAL_CENTER = "HORIZONTAL_CENTER",
		/**
		 * Align to the vertical center.
		 */
		VERTICAL_CENTER = "VERTICAL_CENTER",
	}

	enum ArrowStyle {
		/**
		 * Filled arrow. Corresponds to ECMA-376 ST_LineEndType value 'triangle'.
		 */
		FILL_ARROW = "FILL_ARROW",
		/**
		 * Filled circle. Corresponds to ECMA-376 ST_LineEndType value 'oval'.
		 */
		FILL_CIRCLE = "FILL_CIRCLE",
		/**
		 * Filled diamond. Corresponds to ECMA-376 ST_LineEndType value 'diamond'.
		 */
		FILL_DIAMOND = "FILL_DIAMOND",
		/**
		 * Filled square.
		 */
		FILL_SQUARE = "FILL_SQUARE",
		/**
		 * No arrow.
		 */
		NONE = "NONE",
		/**
		 * Hollow arrow.
		 */
		OPEN_ARROW = "OPEN_ARROW",
		/**
		 * Hollow circle.
		 */
		OPEN_CIRCLE = "OPEN_CIRCLE",
		/**
		 * Hollow diamond.
		 */
		OPEN_DIAMOND = "OPEN_DIAMOND",
		/**
		 * Hollow square.
		 */
		OPEN_SQUARE = "OPEN_SQUARE",
		/**
		 * Arrow with notched back. Corresponds to ECMA-376 ST_LineEndType value 'stealth'.
		 */
		STEALTH_ARROW = "STEALTH_ARROW",
		/**
		 * An arrow style that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	class AutoText {
		private constructor();

		/**
		 * Returns the type of auto text. Returns <code>null</code> if the auto text has been deleted.
		 */
		getAutoTextType(): SlidesApp.AutoTextType
		/**
		 * Returns the index of the auto text. Returns <code>null</code> if the auto text has been deleted.
		 */
		getIndex(): number
		/**
		 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> spanning the auto text. Returns <code>null</code> if the auto text has
		 * been deleted.
		 */
		getRange(): SlidesApp.TextRange

	}

	enum AutoTextType {
		/**
		 * A slide number.
		 */
		SLIDE_NUMBER = "SLIDE_NUMBER",
		/**
		 * An auto text type that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	class Border {
		private constructor();

		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/dash-style.html'>DashStyle</a></code> of the border.
		 */
		getDashStyle(): SlidesApp.DashStyle
		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line-fill.html'>LineFill</a></code> of the border.
		 */
		getLineFill(): SlidesApp.LineFill
		/**
		 * Gets the thickness of the border in points. Returns <code>null</code> if the element does not have a
		 * border.
		 */
		getWeight(): Number
		/**
		 * Gets whether the border is visible or not.
		 */
		isVisible(): Boolean
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/dash-style.html'>DashStyle</a></code> of the border.
		 * 
		 * <p>Setting a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/dash-style.html'>DashStyle</a></code> on a transparent border makes it visible.
		 * 
		 * @param style
		 */
		setDashStyle(
			style: SlidesApp.DashStyle
		): SlidesApp.Border
		/**
		 * Sets the border to be transparent.
		 */
		setTransparent(): SlidesApp.Border
		/**
		 * Sets the thickness of the border in points.
		 * 
		 * <p>Setting a weight on a transparent border makes it visible.
		 * 
		 * @param points
		 */
		setWeight(
			points: Number
		): SlidesApp.Border

	}

	enum CellMergeState {
		/**
		 * The cell is merged and it is the head (i.e. upper left) cell within the merged set of cells.
		 * 
		 * <p>As an example, assume the following table.
		 * 
		 * <pre class="prettyprint">
		 * -------------------
		 * |(0,0)|(0,1)|(0,2)|
		 * -------------------
		 * </pre>
		 * 
		 * If the first two cells are merged to form the following table, cell (0,0) is the head cell and
		 * (0,1) is a merged cell.
		 * 
		 * <pre class="prettyprint">
		 * -------------------
		 * |(0,0)      |(0,2)|
		 * -------------------
		 * </pre>
		 */
		HEAD = "HEAD",
		/**
		 * The cell is merged but is not the head (i.e. upper left) cell.
		 * 
		 * <p>As an example, assume the following table.
		 * 
		 * <pre class="prettyprint">
		 * -------------------
		 * |(0,0)|(0,1)|(0,2)|
		 * -------------------
		 * </pre>
		 * 
		 * If the first two cells are merged to form the following table, cell (0,0) is the head cell and
		 * (0,1) is a merged cell.
		 * 
		 * <pre class="prettyprint">
		 * -------------------
		 * |(0,0)      |(0,2)|
		 * -------------------
		 * </pre>
		 */
		MERGED = "MERGED",
		/**
		 * The cell is not merged.
		 */
		NORMAL = "NORMAL",
	}

	class Color {
		private constructor();

		/**
		 * Converts this color to an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/rgb-color.html'>RgbColor</a></code>.
		 */
		asRgbColor(): RgbColor
		/**
		 * Converts this color to a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color.html'>ThemeColor</a></code>.
		 */
		asThemeColor(): SlidesApp.ThemeColor
		/**
		 * Get the type of this color.
		 * 
		 * @returns The color type.
		 */
		getColorType(): ColorType

	}

	class ColorScheme {
		private constructor();

		/**
		 * Returns the concrete <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code> associated with the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code> in this color
		 * scheme.
		 * 
		 * <p>The returned color is guaranteed to not be an instance of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color.html'>ThemeColor</a></code>.
		 * 
		 * @param theme - The theme color to derive the concrete color from.
		 * 
		 * @returns The concrete color corresponding the theme color type in this scheme.
		 */
		getConcreteColor(
			theme: SlidesApp.ThemeColorType
		): SlidesApp.Color
		/**
		 * Returns a list of all possible theme color types in a color scheme.
		 * 
		 * @returns The possible theme color types in this scheme.
		 */
		getThemeColors(): SlidesApp.ThemeColorType[]
		/**
		 * Sets the concrete color associated with the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code> in this color scheme to the
		 * given color in RGB format.
		 * 
		 * @param type - The theme color type.
		 * @param red - The red value of the color to set the theme color type to (between 0 and 255).
		 * @param green - The green value of the color to set the theme color type to (between 0 and 255).
		 * @param blue - The blue value of the color to set the theme color type to (between 0 and 255).
		 * 
		 * @returns This color scheme, for chaining.
		 */
		setConcreteColor(
			type: SlidesApp.ThemeColorType,
			red: number,
			green: number,
			blue: number
		): SlidesApp.ColorScheme
		/**
		 * Sets the concrete color associated with the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code> in this color scheme to the
		 * given color.
		 * 
		 * @param type - The theme color type.
		 * @param color - The color to set the theme color type to.
		 * 
		 * @returns This color scheme, for chaining.
		 */
		setConcreteColor(
			type: SlidesApp.ThemeColorType,
			color: SlidesApp.Color
		): SlidesApp.ColorScheme
		/**
		 * Sets the concrete color associated with the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code> in this color scheme to the
		 * given color in HEX format.
		 * 
		 * <p>The hex string must be in the format '#RRGGBB'.
		 * 
		 * @param type - The theme color type.
		 * @param hexColor - The hex color to set the theme color type to, such as '#F304a7'.
		 * 
		 * @returns This color scheme, for chaining.
		 */
		setConcreteColor(
			type: SlidesApp.ThemeColorType,
			hexColor: string
		): SlidesApp.ColorScheme


	}

	class ConnectionSite {
		private constructor();

		/**
		 * Returns the index of the connection site. The index is unique among all the connection sites on
		 * the same page element.
		 * 
		 * <p>In most cases, it corresponds to the predefined connection site index from the ECMA-376
		 * standard. More information on those connection sites can be found in the description of the
		 * "cnx" attribute in section 20.1.9.9 and Annex H. "Predefined DrawingML Shape and Text
		 * Geometries" of "Office Open XML File Formats-Fundamentals and Markup Language Reference", part
		 * 1 of <a href="http://www.ecma-international.org/publications/standards/Ecma-376.htm">ECMA-376
		 * 5th edition</a>.
		 * 
		 * @returns The index of the connection site.
		 */
		getIndex(): number
		/**
		 * Returns the <code>PageElement</code> that the connection site is on.
		 * 
		 * @returns The page element of the connection site.
		 */
		getPageElement(): SlidesApp.PageElement

	}

	enum ContentAlignment {
		/**
		 * Aligns the content to the bottom of the content holder. Corresponds to ECMA-376
		 * ST_TextAnchoringType 'b'.
		 */
		BOTTOM = "BOTTOM",
		/**
		 * Aligns the content to the middle of the content holder. Corresponds to ECMA-376
		 * ST_TextAnchoringType 'ctr'.
		 */
		MIDDLE = "MIDDLE",
		/**
		 * Aligns the content to the top of the content holder. Corresponds to ECMA-376
		 * ST_TextAnchoringType 't'.
		 */
		TOP = "TOP",
		/**
		 * A content alignment that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	enum DashStyle {
		/**
		 * Dashed line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dash'.
		 */
		DASH = "DASH",
		/**
		 * Alternating dashes and dots. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dashDot'.
		 */
		DASH_DOT = "DASH_DOT",
		/**
		 * Dotted line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dot'.
		 */
		DOT = "DOT",
		/**
		 * Line with large dashes. Corresponds to ECMA-376 ST_PresetLineDashVal value 'lgDash'.
		 */
		LONG_DASH = "LONG_DASH",
		/**
		 * Alternating large dashes and dots. Corresponds to ECMA-376 ST_PresetLineDashVal value
		 * 'lgDashDot'.
		 */
		LONG_DASH_DOT = "LONG_DASH_DOT",
		/**
		 * Solid line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'solid'. This is the default
		 * dash style.
		 */
		SOLID = "SOLID",
		/**
		 * A dash style that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	class Fill {
		private constructor();

		/**
		 * Get the solid fill of this background, or <code>null</code> if the fill type is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/fill-type.html#SOLID'>FillType.SOLID</a></code>.
		 * 
		 * @returns The solid fill setting, or <code>null</code> if this fill type is not solid.
		 */
		getSolidFill(): SlidesApp.SolidFill
		/**
		 * Get the type of this fill.
		 * 
		 * @returns The type of this fill.
		 */
		getType(): SlidesApp.FillType
		/**
		 * Whether the background is visible.
		 * 
		 * @returns <code>true</code> if the background is visible; <code>false</code> otherwise.
		 */
		isVisible(): Boolean
		/**
		 * Sets the solid fill to the given RGB values.
		 * 
		 * @param red
		 * @param green
		 * @param blue
		 */
		setSolidFill(
			red: number,
			green: number,
			blue: number
		): void
		/**
		 * Sets the solid fill to the given alpha and RGB values.
		 * 
		 * @param red
		 * @param green
		 * @param blue
		 * @param alpha
		 */
		setSolidFill(
			red: number,
			green: number,
			blue: number,
			alpha: Number
		): void
		/**
		 * Sets the solid fill to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code>.
		 * 
		 * @param color
		 */
		setSolidFill(
			color: SlidesApp.Color
		): void
		/**
		 * Sets the solid fill to the given alpha and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code>.
		 * 
		 * @param color
		 * @param alpha
		 */
		setSolidFill(
			color: SlidesApp.Color,
			alpha: Number
		): void
		/**
		 * Sets the solid fill to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
		 * 
		 * @param color
		 */
		setSolidFill(
			color: SlidesApp.ThemeColorType
		): void
		/**
		 * Sets the solid fill to the given alpha and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
		 * 
		 * @param color
		 * @param alpha
		 */
		setSolidFill(
			color: SlidesApp.ThemeColorType,
			alpha: Number
		): void
		/**
		 * Sets the solid fill to the given hex color string.
		 * 
		 * <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
		 * '#FFC0CB'.
		 * 
		 * @param hexString
		 */
		setSolidFill(
			hexString: string
		): void
		/**
		 * Sets the solid fill to the given alpha and hex color string.
		 * 
		 * <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
		 * '#FFC0CB'.
		 * 
		 * @param hexString
		 * @param alpha
		 */
		setSolidFill(
			hexString: string,
			alpha: Number
		): void

		/**
		 * Sets the background to transparent.
		 */
		setTransparent(): void

	}

	enum FillType {
		/**
		 * No fill, so the background is transparent.
		 */
		NONE = "NONE",
		/**
		 * A solid color fill.
		 */
		SOLID = "SOLID",
		/**
		 * A fill type that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	class Group {
		private constructor();

		/**
		 * Aligns the element to the specified alignment position on the page.
		 * 
		 * @param alignmentPosition - The position to align this page element to on the page.
		 * 
		 * @returns This page element, for chaining.
		 */
		alignOnPage(
			alignmentPosition: SlidesApp.AlignmentPosition
		): SlidesApp.Group
		/**
		 * Brings the page element forward on the page by one element.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		bringForward(): SlidesApp.Group
		/**
		 * Brings the page element to the front of the page.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		bringToFront(): SlidesApp.Group
		/**
		 * Duplicates the page element.
		 * 
		 * <p>The duplicate page element is placed on the same page at the same position as the original.
		 * 
		 * @returns The new duplicate of this page element.
		 */
		duplicate(): SlidesApp.PageElement
		/**
		 * Gets the collection of page elements in the group. The minimum size of a group is 2.
		 * 
		 * @returns The list of page elements in this group.
		 */
		getChildren(): SlidesApp.PageElement[]
		/**
		 * Returns the list of <code>ConnectionSite</code>s on the page element, or an empty list if the page
		 * element does not have any connection sites.
		 * 
		 * @returns The connection sites list, which may be empty if this element has no connection sites.
		 */
		getConnectionSites(): SlidesApp.ConnectionSite[]
		/**
		 * Returns the page element's description. The description is combined with the title to display
		 * and read alt text.
		 * 
		 * @returns The page element's description.
		 */
		getDescription(): string
		/**
		 * Gets the element's height in points, which is the height of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @returns The page element's inherent height in points, or <code>null</code> if the page element does
		 *     not have a height.
		 */
		getHeight(): Number
		/**
		 * Returns the element's inherent height in points.
		 * 
		 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
		 * conjunction with the element's transform to determine the element's final visual appearance.
		 * 
		 * @returns The page element's inherent height in points, or <code>null</code> if the page element does
		 *     not have a height.
		 */
		getInherentHeight(): Number
		/**
		 * Returns the element's inherent width in points.
		 * 
		 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
		 * conjunction with the element's transform to determine the element's final visual appearance.
		 * 
		 * @returns The page element's inherent width in points, or <code>null</code> if the page element does
		 *     not have a width.
		 */
		getInherentWidth(): Number
		/**
		 * Returns the element's horizontal position in points, measured from the upper-left corner of the
		 * page when the element has no rotation.
		 * 
		 * @returns This element's horizonal position in points, from the upper-left corner of the page.
		 */
		getLeft(): Number
		/**
		 * Returns the unique ID for this object. Object IDs used by pages and page elements share the
		 * same namespace.
		 * 
		 * @returns The unique ID for this object.
		 */
		getObjectId(): string
		/**
		 * Returns the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
		 * 
		 * @returns The page element's type.
		 */
		getPageElementType(): SlidesApp.PageElementType
		/**
		 * Returns the group this page element belongs to, or <code>null</code> if the element is not in a
		 * group.
		 * 
		 * @returns The group this page element belongs to, or <code>null</code>.
		 */
		getParentGroup(): SlidesApp.Group
		/**
		 * Returns the page this page element is on.
		 * 
		 * @returns The page this element resides on.
		 */
		getParentPage(): SlidesApp.Page
		/**
		 * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
		 * means no rotation.
		 * 
		 * @returns The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).
		 */
		getRotation(): Number
		/**
		 * Returns the page element's title. The title is combined with the description to display and
		 * read alt text.
		 * 
		 * @returns The page element's title.
		 */
		getTitle(): string
		/**
		 * Gets the element's vertical position in points, measured from the upper-left corner of the page
		 * when the element has no rotation.
		 * 
		 * @returns This element's vertical position in points, from the upper-left corner of the page.
		 */
		getTop(): Number
		/**
		 * Gets the page element's transform.
		 * 
		 * <p>The initial transform for a newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> is always the identity transform:
		 * 1.0 scale parameters, and 0.0 shear and translate parameters.
		 * 
		 * @returns The page element's transform.
		 */
		getTransform(): SlidesApp.AffineTransform
		/**
		 * Returns the element's width in points, which is the width of the element's bounding box when
		 * the element has no rotation.
		 * 
		 * @returns The page element's inherent width in points, or <code>null</code> if the page element does
		 *     not have a width.
		 */
		getWidth(): Number
		/**
		 * Preconcatenates the provided transform to the existing transform of the page element.
		 * 
		 * <pre class="prettyprint"><code>
		 * newTransform = argument * existingTransform
		 * </code></pre>
		 * 
		 * <p>For example, to move a page elements 36 points to the left:
		 * 
		 * <pre class="prettyprint"><code>
		 * element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
		 *     .setTranslateX(-36.0)
		 *     .build());
		 * </code></pre>
		 * 
		 * <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
		 * 
		 * @param transform - The transform to preconcatenate onto this page element's transform.
		 * 
		 * @returns This page element, for chaining.
		 */
		preconcatenateTransform(
			transform: SlidesApp.AffineTransform
		): SlidesApp.Group
		/**
		 * Removes the page element.
		 * 
		 * <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
		 * group itself is also removed.
		 * 
		 * <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
		 * are also removed.
		 */
		remove(): void
		/**
		 * Scales the element's height by the specified ratio. The element's height is the height of its
		 * bounding box when the element has no rotation.
		 * 
		 * @param ratio - The ratio to scale this page element's height by.
		 * 
		 * @returns This page element, for chaining.
		 */
		scaleHeight(
			ratio: Number
		): SlidesApp.Group
		/**
		 * Scales the element's width by the specified ratio. The element's width is the width of its
		 * bounding box when the element has no rotation.
		 * 
		 * @param ratio - The ratio to scale this page element's width by.
		 * 
		 * @returns This page element, for chaining.
		 */
		scaleWidth(
			ratio: Number
		): SlidesApp.Group
		/**
		 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
		 * selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var pageElement = slide.getPageElements()[0];
		 * // Only select this page element and replace any previous selection.
		 * pageElement.select();
		 * </code></pre>
		 */
		select(): void
		/**
		 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>Pass <code>true</code> to this method to select only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and remove any
		 * previous selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 * 
		 * <p>Pass <code>false</code> to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code>
		 * objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.
		 * 
		 * <p>The following conditions must be met while selecting a page element using a <code>false</code>
		 * parameter:
		 * 
		 * <ol>
		 *   <li>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 *   <li>There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected.
		 * </ol>
		 * 
		 * <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
		 * first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * // First select the slide page, as the current page selection.
		 * slide.selectAsCurrentPage();
		 * // Then select all the page elements in the selected slide page.
		 * var pageElements = slide.getPageElements();
		 * for (var i = 0; i &lt; pageElements.length; i++) {
		 *   pageElements[i].select(false);
		 * }
		 * </code></pre>
		 * 
		 * @param replace - If <code>true</code>, the selection replaces any previous selection; otherwise the
		 *     selection is added to any previous selection.
		 */
		select(
			replace: Boolean
		): void

		/**
		 * Sends the page element backward on the page by one element.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		sendBackward(): SlidesApp.Group
		/**
		 * Sends the page element to the back of the page.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		sendToBack(): SlidesApp.Group
		/**
		 * Sets the page element's alt text description.
		 * 
		 * <p>The method is not supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the first page element&#39;s alt text description to &quot;new alt text description&quot;.
		 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
		 * pageElement.setDescription(&#39;new alt text description&#39;);
		 * Logger.log(pageElement.getDescription());
		 * </code></pre>
		 * 
		 * @param description - The string to set the alt text description to.
		 * 
		 * @returns This page element.
		 */
		setDescription(
			description: string
		): SlidesApp.Group
		/**
		 * Sets the element's height in points, which is the height of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @param height - The new height of this page element to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setHeight(
			height: Number
		): SlidesApp.Group
		/**
		 * Sets the element's horizontal position in points, measured from the upper-left corner of the
		 * page when the element has no rotation.
		 * 
		 * @param left - The new horizontal position to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setLeft(
			left: Number
		): SlidesApp.Group
		/**
		 * Sets the element's clockwise rotation angle around its center in degrees.
		 * 
		 * @param angle - The new clockwise rotation angle to set, in degrees.
		 * 
		 * @returns This page element, for chaining.
		 */
		setRotation(
			angle: Number
		): SlidesApp.Group
		/**
		 * Sets the page element's alt text title.
		 * 
		 * <p>The method is not supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the first page element&#39;s alt text title to &quot;new alt text title&quot;.
		 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
		 * pageElement.setTitle(&#39;new alt text title&#39;);
		 * Logger.log(pageElement.getTitle());
		 * </code></pre>
		 * 
		 * @param title - The string to set the alt text title to.
		 * 
		 * @returns This page element.
		 */
		setTitle(
			title: string
		): SlidesApp.Group
		/**
		 * Sets the element's vertical position in points, measured from the upper-left corner of the page
		 * when the element has no rotation.
		 * 
		 * @param top - The new vertical position to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setTop(
			top: Number
		): SlidesApp.Group
		/**
		 * Sets the transform of the page element with the provided transform.
		 * 
		 * <p>Updating the transform of a group changes the absolute transform of the page elements in
		 * that group, which can change their visual appearance.
		 * 
		 * <p>Updating the transform of a page element that is in a group only changes the transform of
		 * that page element; it doesn't affect the transforms of the group or other page elements in the
		 * group.
		 * 
		 * <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html#getTransform()'>getTransform()</a></code>.
		 * 
		 * @param transform - The transform that is set for this page element.
		 * 
		 * @returns This element, for chaining.
		 */
		setTransform(
			transform: SlidesApp.AffineTransform
		): SlidesApp.Group
		/**
		 * Sets the element's width in points, which is the width of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @param width - The new width of this page element to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setWidth(
			width: Number
		): SlidesApp.Group
		/**
		 * Ungroups the elements of the group.
		 * 
		 * <p>The group itself is removed.
		 * 
		 * <p>Groups inside other groups cannot be ungrouped.
		 */
		ungroup(): void

	}

	class Image {
		private constructor();

		/**
		 * Aligns the element to the specified alignment position on the page.
		 * 
		 * @param alignmentPosition - The position to align this page element to on the page.
		 * 
		 * @returns This page element, for chaining.
		 */
		alignOnPage(
			alignmentPosition: SlidesApp.AlignmentPosition
		): SlidesApp.Image
		/**
		 * Brings the page element forward on the page by one element.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		bringForward(): SlidesApp.Image
		/**
		 * Brings the page element to the front of the page.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		bringToFront(): SlidesApp.Image
		/**
		 * Duplicates the page element.
		 * 
		 * <p>The duplicate page element is placed on the same page at the same position as the original.
		 * 
		 * @returns The new duplicate of this page element.
		 */
		duplicate(): SlidesApp.PageElement
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
		 * Return the data inside this image as a blob.
		 * 
		 * @returns The image data as a blob.
		 */
		getBlob(): Blob
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/border.html'>Border</a></code> of the image.
		 * 
		 * @returns The border of the image.
		 */
		getBorder(): SlidesApp.Border
		/**
		 * Returns the list of <code>ConnectionSite</code>s on the page element, or an empty list if the page
		 * element does not have any connection sites.
		 * 
		 * @returns The connection sites list, which may be empty if this element has no connection sites.
		 */
		getConnectionSites(): SlidesApp.ConnectionSite[]
		/**
		 * Gets a URL to the image.
		 * 
		 * <p>This URL is tagged with the account of the requester, so anyone with the URL effectively
		 * accesses the image as the original requester. Access to the image may be lost if the
		 * presentation's sharing settings change. The returned URL expires after a short period of time.
		 */
		getContentUrl(): string
		/**
		 * Returns the page element's description. The description is combined with the title to display
		 * and read alt text.
		 * 
		 * @returns The page element's description.
		 */
		getDescription(): string
		/**
		 * Gets the element's height in points, which is the height of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @returns The page element's inherent height in points, or <code>null</code> if the page element does
		 *     not have a height.
		 */
		getHeight(): Number
		/**
		 * Returns the element's inherent height in points.
		 * 
		 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
		 * conjunction with the element's transform to determine the element's final visual appearance.
		 * 
		 * @returns The page element's inherent height in points, or <code>null</code> if the page element does
		 *     not have a height.
		 */
		getInherentHeight(): Number
		/**
		 * Returns the element's inherent width in points.
		 * 
		 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
		 * conjunction with the element's transform to determine the element's final visual appearance.
		 * 
		 * @returns The page element's inherent width in points, or <code>null</code> if the page element does
		 *     not have a width.
		 */
		getInherentWidth(): Number
		/**
		 * Returns the element's horizontal position in points, measured from the upper-left corner of the
		 * page when the element has no rotation.
		 * 
		 * @returns This element's horizonal position in points, from the upper-left corner of the page.
		 */
		getLeft(): Number
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> or <code>null</code> if there is no link.
		 * 
		 * <pre class="prettyprint">
		 * var link = shape.getLink();
		 * if (link != null) {
		 *   Logger.log('Shape has a link of type: ' + link.getLinkType());
		 * }
		 * </pre>
		 */
		getLink(): SlidesApp.Link
		/**
		 * Returns the unique ID for this object. Object IDs used by pages and page elements share the
		 * same namespace.
		 * 
		 * @returns The unique ID for this object.
		 */
		getObjectId(): string
		/**
		 * Returns the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
		 * 
		 * @returns The page element's type.
		 */
		getPageElementType(): SlidesApp.PageElementType
		/**
		 * Returns the group this page element belongs to, or <code>null</code> if the element is not in a
		 * group.
		 * 
		 * @returns The group this page element belongs to, or <code>null</code>.
		 */
		getParentGroup(): SlidesApp.Group
		/**
		 * Returns the page this page element is on.
		 * 
		 * @returns The page this element resides on.
		 */
		getParentPage(): SlidesApp.Page
		/**
		 * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
		 * means no rotation.
		 * 
		 * @returns The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).
		 */
		getRotation(): Number
		/**
		 * Gets the image's source URL, if available.
		 * 
		 * <p>When an image is inserted by URL, returns the URL provided during image insertion.
		 * 
		 * @returns The image URL or <code>null</code> if the image does not have a source URL.
		 */
		getSourceUrl(): string
		/**
		 * Returns the page element's title. The title is combined with the description to display and
		 * read alt text.
		 * 
		 * @returns The page element's title.
		 */
		getTitle(): string
		/**
		 * Gets the element's vertical position in points, measured from the upper-left corner of the page
		 * when the element has no rotation.
		 * 
		 * @returns This element's vertical position in points, from the upper-left corner of the page.
		 */
		getTop(): Number
		/**
		 * Returns the page element's transform.
		 * 
		 * <p>The visual appearance of the page element is determined by its absolute transform. To
		 * compute the absolute transform, preconcatenate a page element's transform with the transforms
		 * of all of its parent groups. If the page element is not in a group, its absolute transform is
		 * the same as the value in this field.
		 * 
		 * @returns The page element's transform.
		 */
		getTransform(): SlidesApp.AffineTransform
		/**
		 * Returns the element's width in points, which is the width of the element's bounding box when
		 * the element has no rotation.
		 * 
		 * @returns The page element's inherent width in points, or <code>null</code> if the page element does
		 *     not have a width.
		 */
		getWidth(): Number
		/**
		 * Preconcatenates the provided transform to the existing transform of the page element.
		 * 
		 * <pre class="prettyprint"><code>
		 * newTransform = argument * existingTransform
		 * </code></pre>
		 * 
		 * <p>For example, to move a page elements 36 points to the left:
		 * 
		 * <pre class="prettyprint"><code>
		 * element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
		 *     .setTranslateX(-36.0)
		 *     .build());
		 * </code></pre>
		 * 
		 * <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
		 * 
		 * @param transform - The transform to preconcatenate onto this page element's transform.
		 * 
		 * @returns This page element, for chaining.
		 */
		preconcatenateTransform(
			transform: SlidesApp.AffineTransform
		): SlidesApp.Image
		/**
		 * Removes the page element.
		 * 
		 * <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
		 * group itself is also removed.
		 * 
		 * <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
		 * are also removed.
		 */
		remove(): void
		/**
		 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>.
		 * 
		 * <pre class="prettyprint">
		 * shape.removeLink();
		 * </pre>
		 */
		removeLink(): void
		/**
		 * Replaces this image with an image described by a <a
		 * href="/apps-script/reference/base/blob-source"><code>BlobSource</code></a> object.
		 * 
		 * <p>Inserting the image fetches it from the <a href="/apps-script/reference/base/blob-source">
		 * <code>BlobSource</code></a> once and a copy is stored for display inside the presentation.
		 * Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in either in
		 * PNG, JPEG, or GIF format.
		 * 
		 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
		 * to the size of the existing image.
		 * 
		 * <pre class="prettyprint"><code>
		 * var image = SlidesApp.getActivePresentation().getSlides()[0].getImages()[0];
		 * // Get the Drive image file with the given ID.
		 * var driveImage = DriveApp.getFileById(fileId);
		 * image.replace(driveImage);
		 * </code></pre>
		 * 
		 * @param blobSource - The image data.
		 * 
		 * @returns This <code>Image</code> after the replacement.
		 */
		replace(
			blobSource: BlobSource
		): SlidesApp.Image
		/**
		 * Replaces this image with an image described by a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> object, optionally cropping
		 * the image to fit.
		 * 
		 * <p>Inserting the image fetches it from the <a href="/apps-script/reference/base/blob-source">
		 * <code>BlobSource</code></a> once and a copy is stored for display inside the presentation.
		 * Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in either in
		 * PNG, JPEG, or GIF format.
		 * 
		 * <pre class="prettyprint"><code>
		 * var image = SlidesApp.getActivePresentation().getSlides()[0].getImages()[0];
		 * // Get the Drive image file with the given ID.
		 * var driveImage = DriveApp.getFileById(fileId);
		 * // Replace and crop the drive image.
		 * image.replace(driveImage, true);
		 * </code></pre>
		 * 
		 * @param blobSource - The image data.
		 * @param crop - If <code>true</code>, crops the image to fit the existing image's size. Otherwise, the
		 *     image is scaled and centered.
		 * 
		 * @returns This <code>Image</code> after the replacement.
		 */
		replace(
			blobSource: BlobSource,
			crop: Boolean
		): SlidesApp.Image
		/**
		 * Replaces this image with another image downloaded from the provided URL.
		 * 
		 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
		 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
		 * in either in PNG, JPEG, or GIF format.
		 * 
		 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
		 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>getSourceUrl()</a></code>.
		 * 
		 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
		 * to the size of the existing image.
		 * 
		 * @param imageUrl - The URL to download the image from.
		 * 
		 * @returns This <code>Image</code> after the replacement.
		 */
		replace(
			imageUrl: string
		): SlidesApp.Image
		/**
		 * Replaces this image with another image downloaded from the provided URL, optionally cropping
		 * the image to fit.
		 * 
		 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
		 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
		 * in either in PNG, JPEG, or GIF format.
		 * 
		 * <p>The provided URL must be no larger than 2kB.
		 * 
		 * @param imageUrl - The URL to download the image from.
		 * @param crop - If <code>true</code>, crops the image to fit the existing image's size. Otherwise, the
		 *     image is scaled and centered.
		 * 
		 * @returns This <code>Image</code> after the replacement.
		 */
		replace(
			imageUrl: string,
			crop: Boolean
		): SlidesApp.Image

		/**
		 * Scales the element's height by the specified ratio. The element's height is the height of its
		 * bounding box when the element has no rotation.
		 * 
		 * @param ratio - The ratio to scale this page element's height by.
		 * 
		 * @returns This page element, for chaining.
		 */
		scaleHeight(
			ratio: Number
		): SlidesApp.Image
		/**
		 * Scales the element's width by the specified ratio. The element's width is the width of its
		 * bounding box when the element has no rotation.
		 * 
		 * @param ratio - The ratio to scale this page element's width by.
		 * 
		 * @returns This page element, for chaining.
		 */
		scaleWidth(
			ratio: Number
		): SlidesApp.Image
		/**
		 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
		 * selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var pageElement = slide.getPageElements()[0];
		 * // Only select this page element and replace any previous selection.
		 * pageElement.select();
		 * </code></pre>
		 */
		select(): void
		/**
		 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>Pass <code>true</code> to this method to select only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and remove any
		 * previous selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 * 
		 * <p>Pass <code>false</code> to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code>
		 * objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.
		 * 
		 * <p>The following conditions must be met while selecting a page element using a <code>false</code>
		 * parameter:
		 * 
		 * <ol>
		 *   <li>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 *   <li>There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected.
		 * </ol>
		 * 
		 * <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
		 * first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * // First select the slide page, as the current page selection.
		 * slide.selectAsCurrentPage();
		 * // Then select all the page elements in the selected slide page.
		 * var pageElements = slide.getPageElements();
		 * for (var i = 0; i &lt; pageElements.length; i++) {
		 *   pageElements[i].select(false);
		 * }
		 * </code></pre>
		 * 
		 * @param replace - If <code>true</code>, the selection replaces any previous selection; otherwise the
		 *     selection is added to any previous selection.
		 */
		select(
			replace: Boolean
		): void

		/**
		 * Sends the page element backward on the page by one element.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		sendBackward(): SlidesApp.Image
		/**
		 * Sends the page element to the back of the page.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		sendToBack(): SlidesApp.Image
		/**
		 * Sets the page element's alt text description.
		 * 
		 * <p>The method is not supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the first page element&#39;s alt text description to &quot;new alt text description&quot;.
		 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
		 * pageElement.setDescription(&#39;new alt text description&#39;);
		 * Logger.log(pageElement.getDescription());
		 * </code></pre>
		 * 
		 * @param description - The string to set the alt text description to.
		 * 
		 * @returns This page element.
		 */
		setDescription(
			description: string
		): SlidesApp.Image
		/**
		 * Sets the element's height in points, which is the height of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @param height - The new height of this page element to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setHeight(
			height: Number
		): SlidesApp.Image
		/**
		 * Sets the element's horizontal position in points, measured from the upper-left corner of the
		 * page when the element has no rotation.
		 * 
		 * @param left - The new horizontal position to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setLeft(
			left: Number
		): SlidesApp.Image
		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the zero-based index of the slide.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the first slide of the presentation.
		 * shape.setLinkSlide(0);
		 * </pre>
		 * 
		 * @param slideIndex - The zero-based index to the slide.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkSlide(
			slideIndex: number
		): SlidesApp.Link
		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code>, the link is set by the given slide ID.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the first slide of the presentation.
		 * var slide = presentation.getSlides()[0];
		 * shape.setLinkSlide(slide);
		 * </pre>
		 * 
		 * @param slide - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to be linked.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkSlide(
			slide: SlidesApp.Slide
		): SlidesApp.Link
		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the relative position of the slide.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the first slide of the presentation.
		 * shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
		 * </pre>
		 * 
		 * @param slidePosition - The relative <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code>.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkSlide(
			slidePosition: SlidesApp.SlidePosition
		): SlidesApp.Link

		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given non-empty URL string.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the URL.
		 * shape.setLinkUrl("https://slides.google.com");
		 * </pre>
		 * 
		 * @param url - The URL string.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkUrl(
			url: string
		): SlidesApp.Link
		/**
		 * Sets the element's clockwise rotation angle around its center in degrees.
		 * 
		 * @param angle - The new clockwise rotation angle to set, in degrees.
		 * 
		 * @returns This page element, for chaining.
		 */
		setRotation(
			angle: Number
		): SlidesApp.Image
		/**
		 * Sets the page element's alt text title.
		 * 
		 * <p>The method is not supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the first page element&#39;s alt text title to &quot;new alt text title&quot;.
		 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
		 * pageElement.setTitle(&#39;new alt text title&#39;);
		 * Logger.log(pageElement.getTitle());
		 * </code></pre>
		 * 
		 * @param title - The string to set the alt text title to.
		 * 
		 * @returns This page element.
		 */
		setTitle(
			title: string
		): SlidesApp.Image
		/**
		 * Sets the element's vertical position in points, measured from the upper-left corner of the page
		 * when the element has no rotation.
		 * 
		 * @param top - The new vertical position to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setTop(
			top: Number
		): SlidesApp.Image
		/**
		 * Sets the transform of the page element with the provided transform.
		 * 
		 * <p>Updating the transform of a group changes the absolute transform of the page elements in
		 * that group, which can change their visual appearance.
		 * 
		 * <p>Updating the transform of a page element that is in a group only changes the transform of
		 * that page element; it doesn't affect the transforms of the group or other page elements in the
		 * group.
		 * 
		 * <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getTransform()'>getTransform()</a></code>.
		 * 
		 * @param transform - The transform that is set for this page element.
		 * 
		 * @returns This element, for chaining.
		 */
		setTransform(
			transform: SlidesApp.AffineTransform
		): SlidesApp.Image
		/**
		 * Sets the element's width in points, which is the width of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @param width - The new width of this page element to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setWidth(
			width: Number
		): SlidesApp.Image

	}

	class Layout {
		private constructor();

		/**
		 * Gets the page's background.
		 * 
		 * @returns The page's background.
		 */
		getBackground(): SlidesApp.PageBackground
		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color-scheme.html'>ColorScheme</a></code> associated with the page.
		 * 
		 * @returns The page's color scheme.
		 */
		getColorScheme(): SlidesApp.ColorScheme
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> objects on the page.
		 */
		getGroups(): SlidesApp.Group[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> objects on the page.
		 */
		getImages(): SlidesApp.Image[]
		/**
		 * Gets the name of the layout.
		 */
		getLayoutName(): string
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> objects on the page.
		 */
		getLines(): SlidesApp.Line[]
		/**
		 * Gets the master that the layout is based on.
		 */
		getMaster(): SlidesApp.Master
		/**
		 * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
		 * namespace.
		 */
		getObjectId(): string
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page with the given ID, or <code>null</code> if none exists.
		 * 
		 * @param id - The ID of the page element that is being retrieved.
		 * 
		 * @returns The page element with the given ID.
		 */
		getPageElementById(
			id: string
		): SlidesApp.PageElement
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects rendered on the page.
		 */
		getPageElements(): SlidesApp.PageElement[]
		/**
		 * Gets the type of the page.
		 * 
		 * @returns The page type.
		 */
		getPageType(): SlidesApp.PageType
		/**
		 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> or
		 * <code>null</code> if a matching placeholder is not present.
		 * 
		 * <p>If there are multiple placeholders with the same type, it returns the one with minimal
		 * placeholder index. If there are multiple matching placeholders with the same index, it returns
		 * the first placeholder from the page's page elements collection.
		 * 
		 * <pre class="prettyprint">
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
		 * </pre>
		 * 
		 * @param placeholderType
		 */
		getPlaceholder(
			placeholderType: SlidesApp.PlaceholderType
		): SlidesApp.PageElement
		/**
		 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> and
		 * a placeholder index, or <code>null</code> if the placeholder is not present.
		 * 
		 * <p>If there are multiple placeholders with the same type and index, it returns the first
		 * placeholder from the page's page elements collection.
		 * 
		 * <pre class="prettyprint">
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
		 * </pre>
		 * 
		 * @param placeholderType
		 * @param placeholderIndex
		 */
		getPlaceholder(
			placeholderType: SlidesApp.PlaceholderType,
			placeholderIndex: number
		): SlidesApp.PageElement

		/**
		 * Returns the list of placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects in the page.
		 * 
		 * <pre class="prettyprint">
		 * var master = SlidesApp.getActivePresentation().getMasters()[0];
		 * Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
		 * </pre>
		 */
		getPlaceholders(): SlidesApp.PageElement[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> objects on the page.
		 */
		getShapes(): SlidesApp.Shape[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> objects on the page.
		 */
		getSheetsCharts(): SlidesApp.SheetsChart[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> objects on the page.
		 */
		getTables(): SlidesApp.Table[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> objects on the page.
		 */
		getVideos(): SlidesApp.Video[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> objects on the page.
		 */
		getWordArts(): SlidesApp.WordArt[]
		/**
		 * Groups all the specified page elements.
		 * 
		 * <p>There should be at least two page elements on the same page that are not already in another
		 * group. Some page elements, such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Videos</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Tables</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html#getPlaceholderType()'>placeholder Shapes</a></code> cannot be grouped.
		 * 
		 * @param pageElements - The elements to group together.
		 * 
		 * @returns The new group.
		 */
		group(
			pageElements: SlidesApp.PageElement[]
		): SlidesApp.Group
		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a group between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var group = otherPresentationSlide.getGroups()[0];
		 * currentPresentationSlide.insertGroup(group); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param group - The group to be copied and inserted.
		 * 
		 * @returns The inserted group.
		 */
		insertGroup(
			group: SlidesApp.Group
		): SlidesApp.Group
		/**
		 * Inserts an image at the top left corner of the page with a default size from the specified
		 * image blob.
		 * 
		 * <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once and a copy is stored for
		 * display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
		 * megapixels, and must be in either in PNG, JPEG, or GIF format.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * // Get the Drive image file with the given ID.
		 * var image = DriveApp.getFileById(fileId);
		 * slide.insertImage(image);
		 * </code></pre>
		 * 
		 * @param blobSource - The image data.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			blobSource: BlobSource
		): SlidesApp.Image
		/**
		 * Inserts an image on the page with the provided position and size from the specified image blob.
		 * 
		 * <p>The image is fetched from the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once at insertion time and a copy
		 * is stored for display inside the presentation. Images must be less than 50MB in size, cannot
		 * exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.
		 * 
		 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
		 * to the provided size.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * // Get the Drive image file with the given ID.
		 * var image = DriveApp.getFileById(fileId);
		 * var position = {left: 0, top: 0};
		 * var size = {width: 300, height: 100};
		 * slide.insertImage(image, position.left, position.top, size.width, size.height);
		 * </code></pre>
		 * 
		 * @param blobSource - The image data.
		 * @param left - The horizontal position of the image in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the image in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the image in points.
		 * @param height - The height of the image in points.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			blobSource: BlobSource,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Image
		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy an image between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var image = otherPresentationSlide.getImages[0];
		 * currentPresentationSlide.insertImage(image);
		 * </code></pre>
		 * 
		 * @param image - The image to be copied and inserted.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			image: SlidesApp.Image
		): SlidesApp.Image
		/**
		 * Inserts an image at the top left corner of the page with a default size from the provided URL.
		 * 
		 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
		 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
		 * in either in PNG, JPEG, or GIF format.
		 * 
		 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
		 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
		 * 
		 * @param imageUrl - The image URL.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			imageUrl: string
		): SlidesApp.Image
		/**
		 * Inserts an image on the page with the provided position and size from the provided URL.
		 * 
		 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
		 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
		 * in either in PNG, JPEG, or GIF format.
		 * 
		 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
		 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
		 * 
		 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
		 * to the provided size.
		 * 
		 * @param imageUrl - The image URL.
		 * @param left - The horizontal position of the image in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the image in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the image in points.
		 * @param height - The height of the image in points.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			imageUrl: string,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Image

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a line between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var line = otherPresentationSlide.getLines[0];
		 * currentPresentationSlide.insertLine(line);
		 * </code></pre>
		 * 
		 * @param line - The line to be copied and inserted.
		 * 
		 * @returns The inserted line.
		 */
		insertLine(
			line: SlidesApp.Line
		): SlidesApp.Line
		/**
		 * Inserts a line on the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert a line in the first slide of the presentation.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var startPoint = {left: 10, top: 10};
		 * var endPoint = {left: 40, top: 40};
		 * slide.insertLine(
		 *     SlidesApp.LineCategory.STRAIGHT,
		 *     startPoint.left,
		 *     startPoint.top,
		 *     endPoint.left,
		 *     endPoint.top);
		 * </code></pre>
		 * 
		 * @param lineCategory - The category of the line to insert.
		 * @param startLeft - The horizontal position of the start point of the line, measured in points
		 *     from the upper left corner of the page.
		 * @param startTop - The vertical position of the start point of the line, measured in points from
		 *     the upper left corner of the page.
		 * @param endLeft - The horizontal position of the end point of the line, measured in points from
		 *     the upper left corner of the page.
		 * @param endTop - The vertical position of the end point of the line, measured in points from the
		 *     upper left corner of the page.
		 * 
		 * @returns The inserted line.
		 */
		insertLine(
			lineCategory: SlidesApp.LineCategory,
			startLeft: Number,
			startTop: Number,
			endLeft: Number,
			endTop: Number
		): SlidesApp.Line
		/**
		 * Inserts a line on the page connecting two <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/connection-site.html'>connection sites</a></code>. The two
		 * connection sites must be on this page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert a line in the first slide of the presentation connecting two shapes.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
		 * var shape2 = slide.insertShape(SlidesApp.ShapeType.CLOUD);
		 * slide.insertLine(
		 *     SlidesApp.LineCategory.BENT,
		 *     shape1.getConnectionSites()[0],
		 *     shape2.getConnectionSites()[1]);
		 * </code></pre>
		 * 
		 * @param lineCategory - The category of the line to insert.
		 * @param startConnectionSite - The connection site where the start of the line is to be connected.
		 * @param endConnectionSite - The connection site where the end of the line is to be connected.
		 * 
		 * @returns The inserted line.
		 */
		insertLine(
			lineCategory: SlidesApp.LineCategory,
			startConnectionSite: SlidesApp.ConnectionSite,
			endConnectionSite: SlidesApp.ConnectionSite
		): SlidesApp.Line

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a page element between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var pageElement = otherPresentationSlide.getPageElements[0];
		 * 
		 * // Also available for Layout, Master, and Page.
		 * currentPresentationSlide.insertPageElement(pageElement);
		 * </code></pre>
		 * 
		 * @param pageElement - The page element to be copied and inserted.
		 * 
		 * @returns The inserted page element.
		 */
		insertPageElement(
			pageElement: SlidesApp.PageElement
		): SlidesApp.PageElement
		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a shape between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var shape = otherPresentationSlide.getShapes[0];
		 * currentPresentationSlide.insertShape(shape); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param shape - The shape to be copied and inserted.
		 * 
		 * @returns The inserted shape.
		 */
		insertShape(
			shape: SlidesApp.Shape
		): SlidesApp.Shape
		/**
		 * Inserts a shape on the page.
		 * 
		 * <p>The shape is inserted with a default size at the top left corner of the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert a shape in the first slide of the presentation.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * 
		 * // Also available for Layout, Master, and Page.
		 * slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
		 * </code></pre>
		 * 
		 * @param shapeType - The type of shape to insert.
		 * 
		 * @returns The inserted shape.
		 */
		insertShape(
			shapeType: SlidesApp.ShapeType
		): SlidesApp.Shape
		/**
		 * Inserts a shape on the page.
		 * 
		 * @param shapeType - The type of shape to insert.
		 * @param left - The horizontal position of the shape, measured from the upper left corner of the
		 *     page.
		 * @param top - The vertical position of the shape, measured from the upper left corner of the page.
		 * @param width - The width of the shape.
		 * @param height - The height of the shape.
		 * 
		 * @returns The inserted shape.
		 */
		insertShape(
			shapeType: SlidesApp.ShapeType,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Shape

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a sheets chart between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var sheetsChart = otherPresentationSlide.getSheetsCharts[0];
		 * 
		 * // Also available for Layout, Master, and Page.
		 * currentPresentationSlide.insertSheetsChart(sheetsChart);
		 * </code></pre>
		 * 
		 * @param sheetsChart - The sheets chart to be copied and inserted.
		 * 
		 * @returns The inserted sheets chart.
		 */
		insertSheetsChart(
			sheetsChart: SlidesApp.SheetsChart
		): SlidesApp.SheetsChart
		/**
		 * Inserts a Google Sheets chart on the page.
		 * 
		 * <p>The chart is inserted with a default size at the top left corner of the page.
		 * 
		 * <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
		 * updated. Other collaborators can see the link to the source spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
		 * var chart = sheet.getCharts()[0];
		 * // Insert the spreadsheet chart in the first slide.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.insertSheetsChart(chart);
		 * </code></pre>
		 * 
		 * @param sourceChart - The chart in a spreadsheet to be inserted in the page.
		 * 
		 * @returns The inserted chart in the page.
		 */
		insertSheetsChart(
			sourceChart: SpreadsheetApp.EmbeddedChart
		): SlidesApp.SheetsChart
		/**
		 * Inserts a Google Sheets chart on the page with the provided position and size.
		 * 
		 * <p>In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
		 * to the provided size.
		 * 
		 * <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
		 * updated. Other collaborators can see the link to the source spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
		 * var chart = sheet.getCharts()[0];
		 * // Insert the spreadsheet chart in the first slide.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var position = {left: 0, top: 0};
		 * var size = {width: 200, height: 200};
		 * 
		 * // Also available for Layout, Master, and Page.
		 * slide.insertSheetsChart(
		 *     chart,
		 *     position.left,
		 *     position.top,
		 *     size.width,
		 *     size.height);
		 * </code></pre>
		 * 
		 * @param sourceChart - The chart in a spreadsheet to be inserted in the page.
		 * @param left - The horizontal position of the chart in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the chart in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the chart in points.
		 * @param height - The height of the chart in points.
		 * 
		 * @returns The inserted chart in the page.
		 */
		insertSheetsChart(
			sourceChart: SpreadsheetApp.EmbeddedChart,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.SheetsChart

		/**
		 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.
		 * 
		 * <p>The image of the chart is inserted with a default size at the top left corner of the page.
		 * 
		 * <p>The inserted image of chart is not linked with the source Google Sheets chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
		 * var chart = sheet.getCharts()[0];
		 * // Insert the spreadsheet chart in the first slide.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.insertSheetsChartAsImage(chart); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param sourceChart - The chart in a spreadsheet to be inserted in the page.
		 * 
		 * @returns The inserted image of the chart in the page.
		 */
		insertSheetsChartAsImage(
			sourceChart: SpreadsheetApp.EmbeddedChart
		): SlidesApp.Image
		/**
		 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page with the provided position and
		 * size.
		 * 
		 * <p>In order to maintain the chart image's aspect ratio, the image is scaled and centered with
		 * respect to the provided size.
		 * 
		 * <p>The inserted image of the chart is not linked with the source Google Sheets chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
		 * var chart = sheet.getCharts()[0];
		 * // Insert the spreadsheet chart in the first slide.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var position = {left: 0, top: 0};
		 * var size = {width: 200, height: 200};
		 * 
		 * // Also available for Layout, Master, and Page.
		 * slide.insertSheetsChartAsImage(
		 *     chart,
		 *     position.left,
		 *     position.right,
		 *     size.width,
		 *     size.height);
		 * </code></pre>
		 * 
		 * @param sourceChart - The chart in a spreadsheet to be inserted in the page.
		 * @param left - The horizontal position of the chart in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the chart in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the chart in points.
		 * @param height - The height of the chart in points.
		 * 
		 * @returns The inserted image of the chart in the page.
		 */
		insertSheetsChartAsImage(
			sourceChart: SpreadsheetApp.EmbeddedChart,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Image

		/**
		 * Inserts a table on the page.
		 * 
		 * <p>The table is centered on the page with default size and evenly distributed rows and columns.
		 * 
		 * @param numRows - The number of rows in the table.
		 * @param numColumns - The number of columns in the table.
		 * 
		 * @returns The inserted table.
		 */
		insertTable(
			numRows: number,
			numColumns: number
		): SlidesApp.Table
		/**
		 * Inserts a table on the page with the provided position and size.
		 * 
		 * <p>Rows and columns are evenly distributed in the created table.
		 * 
		 * @param numRows - The number of rows in the table.
		 * @param numColumns - The number of columns in the table.
		 * @param left - The horizontal position of the table, measured from the upper left corner of the
		 *     page.
		 * @param top - The vertical position of the table, measured from the upper left corner of the page.
		 * @param width - The width of the table.
		 * @param height - The minimum height of the table. The actual height of the rendered table depends
		 *     on factors such as text font size.
		 * 
		 * @returns The inserted table.
		 */
		insertTable(
			numRows: number,
			numColumns: number,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Table
		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a table between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var table = otherPresentationSlide.getTables[0];
		 * currentPresentationSlide.insertTable(table); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param table - The table to be copied and inserted.
		 * 
		 * @returns The inserted table.
		 */
		insertTable(
			table: SlidesApp.Table
		): SlidesApp.Table

		/**
		 * Inserts a text box <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> containing the provided string on the page.
		 * 
		 * <p>The text box shape is inserted with a default size at the top left corner of the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert text box with &quot;Hello&quot; on the first slide of presentation.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.insertTextBox(&#39;Hello&#39;); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param text - The string the text box shape should contain.
		 * 
		 * @returns The inserted text box shape.
		 */
		insertTextBox(
			text: string
		): SlidesApp.Shape
		/**
		 * Inserts a text box <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> containing the provided string on the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert text box with &quot;Hello&quot; on the first slide of presentation. This text box is a square
		 * // with a length of 10 points on each side.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.insertTextBox(&#39;Hello&#39;, 0, 0, 10, 10); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param text - The string the text box shape should contain.
		 * @param left - The horizontal position of the text box shape, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the text box shape, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the text box shape.
		 * @param height - The height of the text box shape.
		 * 
		 * @returns The inserted text box shape.
		 */
		insertTextBox(
			text: string,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Shape

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a video between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var video = otherPresentationSlide.getVideos[0];
		 * currentPresentationSlide.insertVideo(video); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param video - The video to be copied and inserted.
		 * 
		 * @returns The inserted video.
		 */
		insertVideo(
			video: SlidesApp.Video
		): SlidesApp.Video
		/**
		 * Inserts a video at the top left corner of the page with a default size.
		 * 
		 * <p>Only YouTube videos are currently supported.
		 * 
		 * @param videoUrl - The URL of the video to insert.
		 * 
		 * @returns The inserted video.
		 */
		insertVideo(
			videoUrl: string
		): SlidesApp.Video
		/**
		 * Inserts a video on the page with the provided position and size.
		 * 
		 * <p>Only YouTube videos are currently supported.
		 * 
		 * @param videoUrl - The URL of the video to insert.
		 * @param left - The horizontal position of the video in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the video in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the video in points.
		 * @param height - The height of the video in points.
		 * 
		 * @returns The inserted video.
		 */
		insertVideo(
			videoUrl: string,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Video

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a word art between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var wordArt = otherPresentationSlide.getWordArts[0];
		 * 
		 * // Also available for Layout, Master, and Page.
		 * currentPresentationSlide.insertWordArt(wordArt);
		 * </code></pre>
		 * 
		 * @param wordArt - The group to be copied and inserted.
		 * 
		 * @returns The inserted word art.
		 */
		insertWordArt(
			wordArt: SlidesApp.WordArt
		): SlidesApp.WordArt
		/**
		 * Removes the page.
		 */
		remove(): void
		/**
		 * Replaces all instances of text matching find text with replace text. The search is case
		 * insensitive.
		 * 
		 * @param findText - The text to find.
		 * @param replaceText - The text to replace the matched text.
		 * 
		 * @returns the number of occurrences changed
		 */
		replaceAllText(
			findText: string,
			replaceText: string
		): number
		/**
		 * Replaces all instances of text matching find text with replace text.
		 * 
		 * @param findText - The text to find.
		 * @param replaceText - The text to replace the matched text.
		 * @param matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
		 *     case insensitive.
		 * 
		 * @returns the number of occurrences changed
		 */
		replaceAllText(
			findText: string,
			replaceText: string,
			matchCase: Boolean
		): number

		/**
		 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> in the active presentation as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> and removes any previous selection.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Select the first slide as the current page selection and replace any previous selection.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.selectAsCurrentPage(); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 */
		selectAsCurrentPage(): void

	}

	class Line {
		private constructor();

		/**
		 * Aligns the element to the specified alignment position on the page.
		 * 
		 * @param alignmentPosition - The position to align this page element to on the page.
		 * 
		 * @returns This page element, for chaining.
		 */
		alignOnPage(
			alignmentPosition: SlidesApp.AlignmentPosition
		): SlidesApp.Line
		/**
		 * Brings the page element forward on the page by one element.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		bringForward(): SlidesApp.Line
		/**
		 * Brings the page element to the front of the page.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		bringToFront(): SlidesApp.Line
		/**
		 * Duplicates the page element.
		 * 
		 * <p>The duplicate page element is placed on the same page at the same position as the original.
		 * 
		 * @returns The new duplicate of this page element.
		 */
		duplicate(): SlidesApp.PageElement
		/**
		 * Returns the list of <code>ConnectionSite</code>s on the page element, or an empty list if the page
		 * element does not have any connection sites.
		 * 
		 * @returns The connection sites list, which may be empty if this element has no connection sites.
		 */
		getConnectionSites(): SlidesApp.ConnectionSite[]
		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/dash-style.html'>DashStyle</a></code> of the line.
		 * 
		 * @returns The style of the dashing used with this line.
		 */
		getDashStyle(): SlidesApp.DashStyle
		/**
		 * Returns the page element's description. The description is combined with the title to display
		 * and read alt text.
		 * 
		 * @returns The page element's description.
		 */
		getDescription(): string
		/**
		 * Returns the end point of the line, measured from the upper-left corner of the page.
		 * 
		 * @returns The ending point of the line.
		 */
		getEnd(): SlidesApp.Point
		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/arrow-style.html'>ArrowStyle</a></code> of the arrow at the end of the line.
		 * 
		 * @returns The style of the arrow at the end of this line.
		 */
		getEndArrow(): SlidesApp.ArrowStyle
		/**
		 * Returns the connection at the end of the line, or <code>null</code> if there is no connection.
		 * 
		 * @returns The connection at the end of the line.
		 */
		getEndConnection(): SlidesApp.ConnectionSite
		/**
		 * Gets the element's height in points, which is the height of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @returns The page element's inherent height in points, or <code>null</code> if the page element does
		 *     not have a height.
		 */
		getHeight(): Number
		/**
		 * Returns the element's inherent height in points.
		 * 
		 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
		 * conjunction with the element's transform to determine the element's final visual appearance.
		 * 
		 * @returns The page element's inherent height in points, or <code>null</code> if the page element does
		 *     not have a height.
		 */
		getInherentHeight(): Number
		/**
		 * Returns the element's inherent width in points.
		 * 
		 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
		 * conjunction with the element's transform to determine the element's final visual appearance.
		 * 
		 * @returns The page element's inherent width in points, or <code>null</code> if the page element does
		 *     not have a width.
		 */
		getInherentWidth(): Number
		/**
		 * Returns the element's horizontal position in points, measured from the upper-left corner of the
		 * page when the element has no rotation.
		 * 
		 * @returns This element's horizonal position in points, from the upper-left corner of the page.
		 */
		getLeft(): Number
		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line-category.html'>LineCategory</a></code> of the line.
		 * 
		 * @returns The line category.
		 */
		getLineCategory(): SlidesApp.LineCategory
		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line-fill.html'>LineFill</a></code> of the line.
		 * 
		 * @returns The fill setting of this line.
		 */
		getLineFill(): SlidesApp.LineFill
		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line-type.html'>LineType</a></code> of the line.
		 * 
		 * @returns The type of this line.
		 */
		getLineType(): SlidesApp.LineType
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> or <code>null</code> if there is no link.
		 * 
		 * <pre class="prettyprint">
		 * var link = shape.getLink();
		 * if (link != null) {
		 *   Logger.log('Shape has a link of type: ' + link.getLinkType());
		 * }
		 * </pre>
		 */
		getLink(): SlidesApp.Link
		/**
		 * Returns the unique ID for this object. Object IDs used by pages and page elements share the
		 * same namespace.
		 * 
		 * @returns The unique ID for this object.
		 */
		getObjectId(): string
		/**
		 * Returns the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
		 * 
		 * @returns The page element's type.
		 */
		getPageElementType(): SlidesApp.PageElementType
		/**
		 * Returns the group this page element belongs to, or <code>null</code> if the element is not in a
		 * group.
		 * 
		 * @returns The group this page element belongs to, or <code>null</code>.
		 */
		getParentGroup(): SlidesApp.Group
		/**
		 * Returns the page this page element is on.
		 * 
		 * @returns The page this element resides on.
		 */
		getParentPage(): SlidesApp.Page
		/**
		 * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
		 * means no rotation.
		 * 
		 * @returns The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).
		 */
		getRotation(): Number
		/**
		 * Returns the start point of the line, measured from the upper-left corner of the page.
		 * 
		 * @returns The starting point of the line.
		 */
		getStart(): SlidesApp.Point
		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/arrow-style.html'>ArrowStyle</a></code> of the arrow at the beginning of the line.
		 * 
		 * @returns The style of the arrow at the beginning of this line.
		 */
		getStartArrow(): SlidesApp.ArrowStyle
		/**
		 * Returns the connection at the beginning of the line, or <code>null</code> if there is no connection.
		 * 
		 * @returns The connection at the beginning of the line.
		 */
		getStartConnection(): SlidesApp.ConnectionSite
		/**
		 * Returns the page element's title. The title is combined with the description to display and
		 * read alt text.
		 * 
		 * @returns The page element's title.
		 */
		getTitle(): string
		/**
		 * Gets the element's vertical position in points, measured from the upper-left corner of the page
		 * when the element has no rotation.
		 * 
		 * @returns This element's vertical position in points, from the upper-left corner of the page.
		 */
		getTop(): Number
		/**
		 * Returns the page element's transform.
		 * 
		 * <p>The visual appearance of the page element is determined by its absolute transform. To
		 * compute the absolute transform, preconcatenate a page element's transform with the transforms
		 * of all of its parent groups. If the page element is not in a group, its absolute transform is
		 * the same as the value in this field.
		 * 
		 * @returns The page element's transform.
		 */
		getTransform(): SlidesApp.AffineTransform
		/**
		 * Returns the thickness of the line in points.
		 * 
		 * @returns The thickness of the line in points.
		 */
		getWeight(): Number
		/**
		 * Returns the element's width in points, which is the width of the element's bounding box when
		 * the element has no rotation.
		 * 
		 * @returns The page element's inherent width in points, or <code>null</code> if the page element does
		 *     not have a width.
		 */
		getWidth(): Number
		/**
		 * Returns <code>true</code> if the line is a connector, or <code>false</code> if not.
		 * 
		 * <p>Connector is a type of line that is used to connect connections sites on applicable page
		 * elements. Each end of the connector can be connected to at most one connection site.
		 * 
		 * @returns <code>True</code> if the line is a connector, or <code>false</code> if not.
		 */
		isConnector(): Boolean
		/**
		 * Preconcatenates the provided transform to the existing transform of the page element.
		 * 
		 * <pre class="prettyprint"><code>
		 * newTransform = argument * existingTransform
		 * </code></pre>
		 * 
		 * <p>For example, to move a page elements 36 points to the left:
		 * 
		 * <pre class="prettyprint"><code>
		 * element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
		 *     .setTranslateX(-36.0)
		 *     .build());
		 * </code></pre>
		 * 
		 * <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
		 * 
		 * @param transform - The transform to preconcatenate onto this page element's transform.
		 * 
		 * @returns This page element, for chaining.
		 */
		preconcatenateTransform(
			transform: SlidesApp.AffineTransform
		): SlidesApp.Line
		/**
		 * Removes the page element.
		 * 
		 * <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
		 * group itself is also removed.
		 * 
		 * <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
		 * are also removed.
		 */
		remove(): void
		/**
		 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>.
		 * 
		 * <pre class="prettyprint">
		 * shape.removeLink();
		 * </pre>
		 */
		removeLink(): void
		/**
		 * Reroutes the start and end of the line to the closest two connection sites on the connected
		 * page elements. The start and end of the line must be connected to different page elements.
		 * 
		 * @returns The line.
		 */
		reroute(): SlidesApp.Line
		/**
		 * Scales the element's height by the specified ratio. The element's height is the height of its
		 * bounding box when the element has no rotation.
		 * 
		 * @param ratio - The ratio to scale this page element's height by.
		 * 
		 * @returns This page element, for chaining.
		 */
		scaleHeight(
			ratio: Number
		): SlidesApp.Line
		/**
		 * Scales the element's width by the specified ratio. The element's width is the width of its
		 * bounding box when the element has no rotation.
		 * 
		 * @param ratio - The ratio to scale this page element's width by.
		 * 
		 * @returns This page element, for chaining.
		 */
		scaleWidth(
			ratio: Number
		): SlidesApp.Line
		/**
		 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
		 * selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var pageElement = slide.getPageElements()[0];
		 * // Only select this page element and replace any previous selection.
		 * pageElement.select();
		 * </code></pre>
		 */
		select(): void
		/**
		 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>Pass <code>true</code> to this method to select only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and remove any
		 * previous selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 * 
		 * <p>Pass <code>false</code> to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code>
		 * objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.
		 * 
		 * <p>The following conditions must be met while selecting a page element using a <code>false</code>
		 * parameter:
		 * 
		 * <ol>
		 *   <li>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 *   <li>There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected.
		 * </ol>
		 * 
		 * <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
		 * first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * // First select the slide page, as the current page selection.
		 * slide.selectAsCurrentPage();
		 * // Then select all the page elements in the selected slide page.
		 * var pageElements = slide.getPageElements();
		 * for (var i = 0; i &lt; pageElements.length; i++) {
		 *   pageElements[i].select(false);
		 * }
		 * </code></pre>
		 * 
		 * @param replace - If <code>true</code>, the selection replaces any previous selection; otherwise the
		 *     selection is added to any previous selection.
		 */
		select(
			replace: Boolean
		): void

		/**
		 * Sends the page element backward on the page by one element.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		sendBackward(): SlidesApp.Line
		/**
		 * Sends the page element to the back of the page.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		sendToBack(): SlidesApp.Line
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/dash-style.html'>DashStyle</a></code> of the line.
		 * 
		 * @param style - The style of the dashing to set for this line.
		 * 
		 * @returns This line, for chaining.
		 */
		setDashStyle(
			style: SlidesApp.DashStyle
		): SlidesApp.Line
		/**
		 * Sets the page element's alt text description.
		 * 
		 * <p>The method is not supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the first page element&#39;s alt text description to &quot;new alt text description&quot;.
		 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
		 * pageElement.setDescription(&#39;new alt text description&#39;);
		 * Logger.log(pageElement.getDescription());
		 * </code></pre>
		 * 
		 * @param description - The string to set the alt text description to.
		 * 
		 * @returns This page element.
		 */
		setDescription(
			description: string
		): SlidesApp.Line
		/**
		 * Sets the position of the end point of the line.
		 * 
		 * <p>The line path may be adjusted after the position changes.
		 * 
		 * @param left - The horizontal position of the end point of the line, measured in points from the
		 *     upper left corner of the page.
		 * @param top - The vertical position of the end point of the line, measured in points from the
		 *     upper left corner of the page.
		 * 
		 * @returns This line, for chaining.
		 */
		setEnd(
			left: Number,
			top: Number
		): SlidesApp.Line
		/**
		 * Sets the position of the end point of the line.
		 * 
		 * <p>The line path may be adjusted after the position changes.
		 * 
		 * @param point - The end point of the line, whose position is measured from the upper left corner
		 *     of the page.
		 * 
		 * @returns This line, for chaining.
		 */
		setEnd(
			point: SlidesApp.Point
		): SlidesApp.Line

		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/arrow-style.html'>ArrowStyle</a></code> of the arrow at the end of the line.
		 * 
		 * @param style - The style to set.
		 * 
		 * @returns This line, for chaining.
		 */
		setEndArrow(
			style: SlidesApp.ArrowStyle
		): SlidesApp.Line
		/**
		 * Sets the connection at the end of the line. It moves the end of the line to the specified
		 * connection site while keeping the other end intact.
		 * 
		 * @param connectionSite - The connection site the end connection is updated to, or <code>null</code> if
		 *     removing the end connection.
		 * 
		 * @returns The line.
		 */
		setEndConnection(
			connectionSite: SlidesApp.ConnectionSite
		): SlidesApp.Line
		/**
		 * Sets the element's height in points, which is the height of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @param height - The new height of this page element to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setHeight(
			height: Number
		): SlidesApp.Line
		/**
		 * Sets the element's horizontal position in points, measured from the upper-left corner of the
		 * page when the element has no rotation.
		 * 
		 * @param left - The new horizontal position to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setLeft(
			left: Number
		): SlidesApp.Line
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line-category.html'>LineCategory</a></code> of the line.
		 * 
		 * <p>You can only set the category on <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html#isConnector()'>connectors</a></code>. The connector may be
		 * rerouted after changing its category.
		 * 
		 * @param lineCategory - The line category to set.
		 * 
		 * @returns The line.
		 */
		setLineCategory(
			lineCategory: SlidesApp.LineCategory
		): SlidesApp.Line
		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the zero-based index of the slide.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the first slide of the presentation.
		 * shape.setLinkSlide(0);
		 * </pre>
		 * 
		 * @param slideIndex - The zero-based index to the slide.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkSlide(
			slideIndex: number
		): SlidesApp.Link
		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code>, the link is set by the given slide ID.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the first slide of the presentation.
		 * var slide = presentation.getSlides()[0];
		 * shape.setLinkSlide(slide);
		 * </pre>
		 * 
		 * @param slide - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to be linked.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkSlide(
			slide: SlidesApp.Slide
		): SlidesApp.Link
		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the relative position of the slide.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the first slide of the presentation.
		 * shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
		 * </pre>
		 * 
		 * @param slidePosition - The relative <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code>.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkSlide(
			slidePosition: SlidesApp.SlidePosition
		): SlidesApp.Link

		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given non-empty URL string.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the URL.
		 * shape.setLinkUrl("https://slides.google.com");
		 * </pre>
		 * 
		 * @param url - The URL string.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkUrl(
			url: string
		): SlidesApp.Link
		/**
		 * Sets the element's clockwise rotation angle around its center in degrees.
		 * 
		 * @param angle - The new clockwise rotation angle to set, in degrees.
		 * 
		 * @returns This page element, for chaining.
		 */
		setRotation(
			angle: Number
		): SlidesApp.Line
		/**
		 * Sets the position of the start point of the line.
		 * 
		 * <p>The line path may be adjusted after the position changes.
		 * 
		 * @param left - The horizontal position of the start point of the line, measured in points from the
		 *     upper left corner of the page.
		 * @param top - The vertical position of the start point of the line, measured in points from the
		 *     upper left corner of the page.
		 * 
		 * @returns This line, for chaining.
		 */
		setStart(
			left: Number,
			top: Number
		): SlidesApp.Line
		/**
		 * Sets the position of the start point of the line.
		 * 
		 * <p>The line path may be adjusted after the position changes.
		 * 
		 * @param point - The start point of the line, whose position is measured from the upper left corner
		 *     of the page.
		 * 
		 * @returns This line, for chaining.
		 */
		setStart(
			point: SlidesApp.Point
		): SlidesApp.Line

		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/arrow-style.html'>ArrowStyle</a></code> of the arrow at the beginning of the line.
		 * 
		 * @param style - The new arrow style to set.
		 * 
		 * @returns This line, for chaining.
		 */
		setStartArrow(
			style: SlidesApp.ArrowStyle
		): SlidesApp.Line
		/**
		 * Sets the connection at the beginning of the line. It moves the start of the line to the
		 * specified connection site while keeping the other end intact.
		 * 
		 * @param connectionSite - The connection site the start connection is updated to, or <code>null</code>
		 *     if removing the start connection.
		 * 
		 * @returns The line.
		 */
		setStartConnection(
			connectionSite: SlidesApp.ConnectionSite
		): SlidesApp.Line
		/**
		 * Sets the page element's alt text title.
		 * 
		 * <p>The method is not supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the first page element&#39;s alt text title to &quot;new alt text title&quot;.
		 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
		 * pageElement.setTitle(&#39;new alt text title&#39;);
		 * Logger.log(pageElement.getTitle());
		 * </code></pre>
		 * 
		 * @param title - The string to set the alt text title to.
		 * 
		 * @returns This page element.
		 */
		setTitle(
			title: string
		): SlidesApp.Line
		/**
		 * Sets the element's vertical position in points, measured from the upper-left corner of the page
		 * when the element has no rotation.
		 * 
		 * @param top - The new vertical position to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setTop(
			top: Number
		): SlidesApp.Line
		/**
		 * Sets the transform of the page element with the provided transform.
		 * 
		 * <p>Updating the transform of a group changes the absolute transform of the page elements in
		 * that group, which can change their visual appearance.
		 * 
		 * <p>Updating the transform of a page element that is in a group only changes the transform of
		 * that page element; it doesn't affect the transforms of the group or other page elements in the
		 * group.
		 * 
		 * <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html#getTransform()'>getTransform()</a></code>.
		 * 
		 * @param transform - The transform that is set for this page element.
		 * 
		 * @returns This element, for chaining.
		 */
		setTransform(
			transform: SlidesApp.AffineTransform
		): SlidesApp.Line
		/**
		 * Sets the thickness of the line in points.
		 * 
		 * @param points - The new thickness of the line in points.
		 * 
		 * @returns This line, for chaining.
		 */
		setWeight(
			points: Number
		): SlidesApp.Line
		/**
		 * Sets the element's width in points, which is the width of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @param width - The new width of this page element to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setWidth(
			width: Number
		): SlidesApp.Line

	}

	enum LineCategory {
		/**
		 * Bent connectors, including bent connector 2 to 5.
		 */
		BENT = "BENT",
		/**
		 * Curved connectors, including curved connector 2 to 5.
		 */
		CURVED = "CURVED",
		/**
		 * Straight connectors, including straight connector 1.
		 */
		STRAIGHT = "STRAIGHT",
		/**
		 * A line category that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	class LineFill {
		private constructor();

		/**
		 * Gets the type of the line fill.
		 */
		getFillType(): SlidesApp.LineFillType
		/**
		 * Gets the solid fill of the line, or <code>null</code> if the fill type is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line-fill-type.html#SOLID'>LineFillType.SOLID</a></code>.
		 */
		getSolidFill(): SlidesApp.SolidFill
		/**
		 * Sets the solid fill to the given RGB values.
		 * 
		 * @param red
		 * @param green
		 * @param blue
		 */
		setSolidFill(
			red: number,
			green: number,
			blue: number
		): void
		/**
		 * Sets the solid fill to the given alpha and RGB values.
		 * 
		 * @param red
		 * @param green
		 * @param blue
		 * @param alpha
		 */
		setSolidFill(
			red: number,
			green: number,
			blue: number,
			alpha: Number
		): void
		/**
		 * Sets the solid fill to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code>.
		 * 
		 * @param color
		 */
		setSolidFill(
			color: SlidesApp.Color
		): void
		/**
		 * Sets the solid fill to the given alpha and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code>.
		 * 
		 * @param color
		 * @param alpha
		 */
		setSolidFill(
			color: SlidesApp.Color,
			alpha: Number
		): void
		/**
		 * Sets the solid fill to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
		 * 
		 * @param color
		 */
		setSolidFill(
			color: SlidesApp.ThemeColorType
		): void
		/**
		 * Sets the solid fill to the given alpha and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
		 * 
		 * @param color
		 * @param alpha
		 */
		setSolidFill(
			color: SlidesApp.ThemeColorType,
			alpha: Number
		): void
		/**
		 * Sets the solid fill to the given hex color string.
		 * 
		 * <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
		 * '#FFC0CB'.
		 * 
		 * @param hexString
		 */
		setSolidFill(
			hexString: string
		): void
		/**
		 * Sets the solid fill to the given alpha and hex color string.
		 * 
		 * <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
		 * '#FFC0CB'.
		 * 
		 * @param hexString
		 * @param alpha
		 */
		setSolidFill(
			hexString: string,
			alpha: Number
		): void


	}

	enum LineFillType {
		/**
		 * No fill, so the line or outline is transparent.
		 */
		NONE = "NONE",
		/**
		 * A solid color fill.
		 */
		SOLID = "SOLID",
		/**
		 * A line fill type that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	enum LineType {
		/**
		 * Bent connector 2 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector2'.
		 */
		BENT_CONNECTOR_2 = "BENT_CONNECTOR_2",
		/**
		 * Bent connector 3 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector3'.
		 */
		BENT_CONNECTOR_3 = "BENT_CONNECTOR_3",
		/**
		 * Bent connector 4 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector4'.
		 */
		BENT_CONNECTOR_4 = "BENT_CONNECTOR_4",
		/**
		 * Bent connector 5 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector5'.
		 */
		BENT_CONNECTOR_5 = "BENT_CONNECTOR_5",
		/**
		 * Curved connector 2 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector2'.
		 */
		CURVED_CONNECTOR_2 = "CURVED_CONNECTOR_2",
		/**
		 * Curved connector 3 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector3'.
		 */
		CURVED_CONNECTOR_3 = "CURVED_CONNECTOR_3",
		/**
		 * Curved connector 4 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector4'.
		 */
		CURVED_CONNECTOR_4 = "CURVED_CONNECTOR_4",
		/**
		 * Curved connector 5 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector5'.
		 */
		CURVED_CONNECTOR_5 = "CURVED_CONNECTOR_5",
		/**
		 * Straight connector 1 form. Corresponds to ECMA-376 ST_ShapeType 'straightConnector1'.
		 */
		STRAIGHT_CONNECTOR_1 = "STRAIGHT_CONNECTOR_1",
		/**
		 * Straight line. Corresponds to ECMA-376 ST_ShapeType 'line'. This line type is not a connector.
		 */
		STRAIGHT_LINE = "STRAIGHT_LINE",
		/**
		 * A line type that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	class Link {
		private constructor();

		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html'>LinkType</a></code>.
		 * 
		 * <pre class="prettyprint">
		 * var link = shape.getLink();
		 * if (link != null) {
		 *   Logger.log('Shape has a link of type: ' + link.getLinkType());
		 * }
		 * </pre>
		 */
		getLinkType(): SlidesApp.LinkType
		/**
		 * Returns the linked <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> for non-URL links types, if it exists. Returns <code>null</code> if
		 * the slide doesn't exist in the presentation, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html'>LinkType</a></code> is <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html#URL'>LinkType.URL</a></code>.
		 * 
		 * <pre class="prettyprint">
		 * var link = shape.getLink();
		 * if (link != null && link.getLinkType() != SlidesApp.LinkType.URL) {
		 *   Logger.log('Shape has link to slide: ' + link.getLinkedSlide());
		 * }
		 * </pre>
		 */
		getLinkedSlide(): SlidesApp.Slide
		/**
		 * Returns the ID of the linked <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> or <code>null</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html'>LinkType</a></code> is not
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html#SLIDE_ID'>LinkType.SLIDE_ID</a></code>.
		 * 
		 * <p>Note that the slide with the returned ID might not exist.
		 * 
		 * <pre class="prettyprint">
		 * var link = shape.getLink();
		 * if (link != null && link.getLinkType() == SlidesApp.LinkType.SLIDE_ID) {
		 *   Logger.log('Shape has link to slide with ID: ' + link.getSlideId());
		 * }
		 * </pre>
		 */
		getSlideId(): string
		/**
		 * Returns the zero-based index of the linked <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> or <code>null</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html'>LinkType</a></code> is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html#SLIDE_INDEX'>LinkType.SLIDE_INDEX</a></code>.
		 * 
		 * <p>Note that the slide at the returned index might not exist.
		 * 
		 * <pre class="prettyprint">
		 * var link = shape.getLink();
		 * if (link != null && link.getLinkType() == SlidesApp.LinkType.SLIDE_INDEX) {
		 *   Logger.log('Shape has link to slide with index: ' + link.getSlideIndex());
		 * }
		 * </pre>
		 */
		getSlideIndex(): number
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code> of the linked <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> or <code>null</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html'>LinkType</a></code> is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html#SLIDE_POSITION'>LinkType.SLIDE_POSITION</a></code>.
		 * 
		 * <p>Note that the slide with the returned relative position might not exist.
		 * 
		 * <pre class="prettyprint">
		 * var link = shape.getLink();
		 * if (link != null && link.getLinkType() == SlidesApp.LinkType.SLIDE_POSITION) {
		 *   Logger.log('Shape has link to slide with relative position: ' + link.getSlidePosition());
		 * }
		 * </pre>
		 */
		getSlidePosition(): SlidesApp.SlidePosition
		/**
		 * Returns the URL to the external web page or <code>null</code> if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html'>LinkType</a></code> is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link-type.html#URL'>LinkType.URL</a></code>.
		 * 
		 * <pre class="prettyprint">
		 * var link = shape.getLink();
		 * if (link != null && link.getLinkType() == SlidesApp.LinkType.URL) {
		 *   Logger.log('Shape has link to URL: ' + link.getUrl());
		 * }
		 * </pre>
		 */
		getUrl(): string

	}

	enum LinkType {
		/**
		 * A link to a specific slide in this presentation, addressed by its ID.
		 */
		SLIDE_ID = "SLIDE_ID",
		/**
		 * A link to a specific slide in this presentation, addressed by its zero-based index.
		 */
		SLIDE_INDEX = "SLIDE_INDEX",
		/**
		 * A link to a specific slide in this presentation, addressed by its position.
		 */
		SLIDE_POSITION = "SLIDE_POSITION",
		/**
		 * A link type that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
		/**
		 * A link to an external web page.
		 */
		URL = "URL",
	}

	class List {
		private constructor();

		/**
		 * Returns the ID of the list.
		 */
		getListId(): string
		/**
		 * Returns all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/paragraph.html'>Paragraphs</a></code> in the list.
		 */
		getListParagraphs(): SlidesApp.Paragraph[]

	}

	enum ListPreset {
		/**
		 * A list with a `ARROW3D`, `CIRCLE` and `SQUARE` glyphs for the first 3 list nesting levels.
		 */
		ARROW3D_CIRCLE_SQUARE = "ARROW3D_CIRCLE_SQUARE",
		/**
		 * A list with a `ARROW`, `DIAMOND` and `DISC` glyphs for the first 3 list nesting levels.
		 */
		ARROW_DIAMOND_DISC = "ARROW_DIAMOND_DISC",
		/**
		 * A list with `CHECKBOX` glyphs for all list nesting levels.
		 */
		CHECKBOX = "CHECKBOX",
		/**
		 * A list with a `DIAMONDX`, `ARROW3D` and `SQUARE` glyphs for the first 3 list nesting levels.
		 */
		DIAMONDX_ARROW3D_SQUARE = "DIAMONDX_ARROW3D_SQUARE",
		/**
		 * A list with a `DIAMONDX`, `HOLLOWDIAMOND` and `SQUARE` glyphs for the first 3 list nesting
		 * levels.
		 */
		DIAMONDX_HOLLOWDIAMOND_SQUARE = "DIAMONDX_HOLLOWDIAMOND_SQUARE",
		/**
		 * A list with a `DIAMOND`, `CIRCLE` and `SQUARE` glyphs for the first 3 list nesting levels.
		 */
		DIAMOND_CIRCLE_SQUARE = "DIAMOND_CIRCLE_SQUARE",
		/**
		 * A list with `DIGIT`, `ALPHA` and `ROMAN` glyphs for the first 3 list nesting levels, followed
		 * by periods.
		 */
		DIGIT_ALPHA_ROMAN = "DIGIT_ALPHA_ROMAN",
		/**
		 * A list with `DIGIT`, `ALPHA` and `ROMAN` glyphs for the first 3 list nesting levels, followed
		 * by parenthesis.
		 */
		DIGIT_ALPHA_ROMAN_PARENS = "DIGIT_ALPHA_ROMAN_PARENS",
		/**
		 * A list with `DIGIT` glyphs separated by periods, where each nesting level uses the previous
		 * nesting level's glyph as a prefix. For example: '1.', '1.1.', '2.', '2.2.'.
		 */
		DIGIT_NESTED = "DIGIT_NESTED",
		/**
		 * A list with a `DISC`, `CIRCLE` and `SQUARE` glyphs for the first 3 list nesting levels.
		 */
		DISC_CIRCLE_SQUARE = "DISC_CIRCLE_SQUARE",
		/**
		 * A list with a `LEFTTRIANGLE`, `DIAMOND` and `DISC` glyphs for the first 3 list nesting levels.
		 */
		LEFTTRIANGLE_DIAMOND_DISC = "LEFTTRIANGLE_DIAMOND_DISC",
		/**
		 * A list with a `STAR`, `CIRCLE` and `SQUARE` glyphs for the first 3 list nesting levels.
		 */
		STAR_CIRCLE_SQUARE = "STAR_CIRCLE_SQUARE",
		/**
		 * A list with `UPPERALPHA`, `ALPHA` and `ROMAN` glyphs for the first 3 list nesting levels,
		 * followed by periods.
		 */
		UPPERALPHA_ALPHA_ROMAN = "UPPERALPHA_ALPHA_ROMAN",
		/**
		 * A list with `UPPERROMAN`, `UPPERALPHA` and `DIGIT` glyphs for the first 3 list nesting levels,
		 * followed by periods.
		 */
		UPPERROMAN_UPPERALPHA_DIGIT = "UPPERROMAN_UPPERALPHA_DIGIT",
		/**
		 * A list with `ZERODIGIT`, `ALPHA` and `ROMAN` glyphs for the first 3 list nesting levels,
		 * followed by periods.
		 */
		ZERODIGIT_ALPHA_ROMAN = "ZERODIGIT_ALPHA_ROMAN",
	}

	class ListStyle {
		private constructor();

		/**
		 * Applies the specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/list-preset.html'>ListPreset</a></code> to all of the paragraphs that overlap with the text.
		 * 
		 * <p>The nesting level of each paragraph is determined by counting leading tabs in front of each
		 * paragraph. To avoid excess space between the glyphs and the corresponding paragraph, these
		 * leading tabs are removed by this method.
		 * 
		 * <p>If the paragraph immediately before paragraphs being updated is in a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/list.html'>List</a></code> with a
		 * matching list preset and the paragraphs being updated are not already in a different list, the
		 * paragraphs being updated are added to that preceding list.
		 * 
		 * @param listPreset
		 */
		applyListPreset(
			listPreset: SlidesApp.ListPreset
		): SlidesApp.ListStyle
		/**
		 * Returns the rendered glyph for the text. Returns <code>null</code> if the text spans more than one
		 * paragraph or the text is not in a list.
		 */
		getGlyph(): string
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/list.html'>List</a></code> the text is in, or <code>null</code> if none of the text is in a list, or
		 * part of the text is in a list, or the text is in multiple lists. Call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/list-style.html#isInList()'>isInList()</a></code> to
		 * determine whether the text is in a list.
		 */
		getList(): SlidesApp.List
		/**
		 * Returns the 0-based nesting level of the text. Returns <code>null</code> if the text is not in a
		 * list or there are mixed values.
		 */
		getNestingLevel(): number
		/**
		 * Returns <code>true</code> if the text is in exactly one list, <code>false</code> if none of the text is
		 * in a list, and <code>null</code> if only some of the text is in a list or if the text is in multiple
		 * lists.
		 */
		isInList(): Boolean
		/**
		 * Removes the paragraphs that overlap with the text from any lists.
		 * 
		 * <p>The nesting level of each paragraph is visually preserved by adding indent to the start of
		 * the corresponding paragraph.
		 */
		removeFromList(): SlidesApp.ListStyle

	}

	class Master {
		private constructor();

		/**
		 * Gets the page's background.
		 * 
		 * @returns The page's background.
		 */
		getBackground(): SlidesApp.PageBackground
		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color-scheme.html'>ColorScheme</a></code> associated with the page.
		 * 
		 * @returns The page's color scheme.
		 */
		getColorScheme(): SlidesApp.ColorScheme
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> objects on the page.
		 */
		getGroups(): SlidesApp.Group[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> objects on the page.
		 */
		getImages(): SlidesApp.Image[]
		/**
		 * Gets this master's layouts.
		 */
		getLayouts(): SlidesApp.Layout[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> objects on the page.
		 */
		getLines(): SlidesApp.Line[]
		/**
		 * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
		 * namespace.
		 */
		getObjectId(): string
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page with the given ID, or <code>null</code> if none exists.
		 * 
		 * @param id - The ID of the page element that is being retrieved.
		 * 
		 * @returns The page element with the given ID.
		 */
		getPageElementById(
			id: string
		): SlidesApp.PageElement
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects rendered on the page.
		 */
		getPageElements(): SlidesApp.PageElement[]
		/**
		 * Gets the type of the page.
		 * 
		 * @returns The page type.
		 */
		getPageType(): SlidesApp.PageType
		/**
		 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> or
		 * <code>null</code> if a matching placeholder is not present.
		 * 
		 * <p>If there are multiple placeholders with the same type, it returns the one with minimal
		 * placeholder index. If there are multiple matching placeholders with the same index, it returns
		 * the first placeholder from the page's page elements collection.
		 * 
		 * <pre class="prettyprint">
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
		 * </pre>
		 * 
		 * @param placeholderType
		 */
		getPlaceholder(
			placeholderType: SlidesApp.PlaceholderType
		): SlidesApp.PageElement
		/**
		 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> and
		 * a placeholder index, or <code>null</code> if the placeholder is not present.
		 * 
		 * <p>If there are multiple placeholders with the same type and index, it returns the first
		 * placeholder from the page's page elements collection.
		 * 
		 * <pre class="prettyprint">
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
		 * </pre>
		 * 
		 * @param placeholderType
		 * @param placeholderIndex
		 */
		getPlaceholder(
			placeholderType: SlidesApp.PlaceholderType,
			placeholderIndex: number
		): SlidesApp.PageElement

		/**
		 * Returns the list of placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects in the page.
		 * 
		 * <pre class="prettyprint">
		 * var master = SlidesApp.getActivePresentation().getMasters()[0];
		 * Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
		 * </pre>
		 */
		getPlaceholders(): SlidesApp.PageElement[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> objects on the page.
		 */
		getShapes(): SlidesApp.Shape[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> objects on the page.
		 */
		getSheetsCharts(): SlidesApp.SheetsChart[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> objects on the page.
		 */
		getTables(): SlidesApp.Table[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> objects on the page.
		 */
		getVideos(): SlidesApp.Video[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> objects on the page.
		 */
		getWordArts(): SlidesApp.WordArt[]
		/**
		 * Groups all the specified page elements.
		 * 
		 * <p>There should be at least two page elements on the same page that are not already in another
		 * group. Some page elements, such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Videos</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Tables</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html#getPlaceholderType()'>placeholder Shapes</a></code> cannot be grouped.
		 * 
		 * @param pageElements - The elements to group together.
		 * 
		 * @returns The new group.
		 */
		group(
			pageElements: SlidesApp.PageElement[]
		): SlidesApp.Group
		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a group between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var group = otherPresentationSlide.getGroups()[0];
		 * currentPresentationSlide.insertGroup(group); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param group - The group to be copied and inserted.
		 * 
		 * @returns The inserted group.
		 */
		insertGroup(
			group: SlidesApp.Group
		): SlidesApp.Group
		/**
		 * Inserts an image at the top left corner of the page with a default size from the specified
		 * image blob.
		 * 
		 * <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once and a copy is stored for
		 * display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
		 * megapixels, and must be in either in PNG, JPEG, or GIF format.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * // Get the Drive image file with the given ID.
		 * var image = DriveApp.getFileById(fileId);
		 * slide.insertImage(image);
		 * </code></pre>
		 * 
		 * @param blobSource - The image data.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			blobSource: BlobSource
		): SlidesApp.Image
		/**
		 * Inserts an image on the page with the provided position and size from the specified image blob.
		 * 
		 * <p>The image is fetched from the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once at insertion time and a copy
		 * is stored for display inside the presentation. Images must be less than 50MB in size, cannot
		 * exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.
		 * 
		 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
		 * to the provided size.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * // Get the Drive image file with the given ID.
		 * var image = DriveApp.getFileById(fileId);
		 * var position = {left: 0, top: 0};
		 * var size = {width: 300, height: 100};
		 * slide.insertImage(image, position.left, position.top, size.width, size.height);
		 * </code></pre>
		 * 
		 * @param blobSource - The image data.
		 * @param left - The horizontal position of the image in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the image in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the image in points.
		 * @param height - The height of the image in points.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			blobSource: BlobSource,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Image
		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy an image between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var image = otherPresentationSlide.getImages[0];
		 * currentPresentationSlide.insertImage(image);
		 * </code></pre>
		 * 
		 * @param image - The image to be copied and inserted.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			image: SlidesApp.Image
		): SlidesApp.Image
		/**
		 * Inserts an image at the top left corner of the page with a default size from the provided URL.
		 * 
		 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
		 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
		 * in either in PNG, JPEG, or GIF format.
		 * 
		 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
		 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
		 * 
		 * @param imageUrl - The image URL.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			imageUrl: string
		): SlidesApp.Image
		/**
		 * Inserts an image on the page with the provided position and size from the provided URL.
		 * 
		 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
		 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
		 * in either in PNG, JPEG, or GIF format.
		 * 
		 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
		 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
		 * 
		 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
		 * to the provided size.
		 * 
		 * @param imageUrl - The image URL.
		 * @param left - The horizontal position of the image in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the image in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the image in points.
		 * @param height - The height of the image in points.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			imageUrl: string,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Image

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a line between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var line = otherPresentationSlide.getLines[0];
		 * currentPresentationSlide.insertLine(line);
		 * </code></pre>
		 * 
		 * @param line - The line to be copied and inserted.
		 * 
		 * @returns The inserted line.
		 */
		insertLine(
			line: SlidesApp.Line
		): SlidesApp.Line
		/**
		 * Inserts a line on the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert a line in the first slide of the presentation.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var startPoint = {left: 10, top: 10};
		 * var endPoint = {left: 40, top: 40};
		 * slide.insertLine(
		 *     SlidesApp.LineCategory.STRAIGHT,
		 *     startPoint.left,
		 *     startPoint.top,
		 *     endPoint.left,
		 *     endPoint.top);
		 * </code></pre>
		 * 
		 * @param lineCategory - The category of the line to insert.
		 * @param startLeft - The horizontal position of the start point of the line, measured in points
		 *     from the upper left corner of the page.
		 * @param startTop - The vertical position of the start point of the line, measured in points from
		 *     the upper left corner of the page.
		 * @param endLeft - The horizontal position of the end point of the line, measured in points from
		 *     the upper left corner of the page.
		 * @param endTop - The vertical position of the end point of the line, measured in points from the
		 *     upper left corner of the page.
		 * 
		 * @returns The inserted line.
		 */
		insertLine(
			lineCategory: SlidesApp.LineCategory,
			startLeft: Number,
			startTop: Number,
			endLeft: Number,
			endTop: Number
		): SlidesApp.Line
		/**
		 * Inserts a line on the page connecting two <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/connection-site.html'>connection sites</a></code>. The two
		 * connection sites must be on this page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert a line in the first slide of the presentation connecting two shapes.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
		 * var shape2 = slide.insertShape(SlidesApp.ShapeType.CLOUD);
		 * slide.insertLine(
		 *     SlidesApp.LineCategory.BENT,
		 *     shape1.getConnectionSites()[0],
		 *     shape2.getConnectionSites()[1]);
		 * </code></pre>
		 * 
		 * @param lineCategory - The category of the line to insert.
		 * @param startConnectionSite - The connection site where the start of the line is to be connected.
		 * @param endConnectionSite - The connection site where the end of the line is to be connected.
		 * 
		 * @returns The inserted line.
		 */
		insertLine(
			lineCategory: SlidesApp.LineCategory,
			startConnectionSite: SlidesApp.ConnectionSite,
			endConnectionSite: SlidesApp.ConnectionSite
		): SlidesApp.Line

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a page element between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var pageElement = otherPresentationSlide.getPageElements[0];
		 * 
		 * // Also available for Layout, Master, and Page.
		 * currentPresentationSlide.insertPageElement(pageElement);
		 * </code></pre>
		 * 
		 * @param pageElement - The page element to be copied and inserted.
		 * 
		 * @returns The inserted page element.
		 */
		insertPageElement(
			pageElement: SlidesApp.PageElement
		): SlidesApp.PageElement
		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a shape between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var shape = otherPresentationSlide.getShapes[0];
		 * currentPresentationSlide.insertShape(shape); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param shape - The shape to be copied and inserted.
		 * 
		 * @returns The inserted shape.
		 */
		insertShape(
			shape: SlidesApp.Shape
		): SlidesApp.Shape
		/**
		 * Inserts a shape on the page.
		 * 
		 * <p>The shape is inserted with a default size at the top left corner of the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert a shape in the first slide of the presentation.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * 
		 * // Also available for Layout, Master, and Page.
		 * slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
		 * </code></pre>
		 * 
		 * @param shapeType - The type of shape to insert.
		 * 
		 * @returns The inserted shape.
		 */
		insertShape(
			shapeType: SlidesApp.ShapeType
		): SlidesApp.Shape
		/**
		 * Inserts a shape on the page.
		 * 
		 * @param shapeType - The type of shape to insert.
		 * @param left - The horizontal position of the shape, measured from the upper left corner of the
		 *     page.
		 * @param top - The vertical position of the shape, measured from the upper left corner of the page.
		 * @param width - The width of the shape.
		 * @param height - The height of the shape.
		 * 
		 * @returns The inserted shape.
		 */
		insertShape(
			shapeType: SlidesApp.ShapeType,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Shape

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a sheets chart between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var sheetsChart = otherPresentationSlide.getSheetsCharts[0];
		 * 
		 * // Also available for Layout, Master, and Page.
		 * currentPresentationSlide.insertSheetsChart(sheetsChart);
		 * </code></pre>
		 * 
		 * @param sheetsChart - The sheets chart to be copied and inserted.
		 * 
		 * @returns The inserted sheets chart.
		 */
		insertSheetsChart(
			sheetsChart: SlidesApp.SheetsChart
		): SlidesApp.SheetsChart
		/**
		 * Inserts a Google Sheets chart on the page.
		 * 
		 * <p>The chart is inserted with a default size at the top left corner of the page.
		 * 
		 * <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
		 * updated. Other collaborators can see the link to the source spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
		 * var chart = sheet.getCharts()[0];
		 * // Insert the spreadsheet chart in the first slide.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.insertSheetsChart(chart);
		 * </code></pre>
		 * 
		 * @param sourceChart - The chart in a spreadsheet to be inserted in the page.
		 * 
		 * @returns The inserted chart in the page.
		 */
		insertSheetsChart(
			sourceChart: SpreadsheetApp.EmbeddedChart
		): SlidesApp.SheetsChart
		/**
		 * Inserts a Google Sheets chart on the page with the provided position and size.
		 * 
		 * <p>In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
		 * to the provided size.
		 * 
		 * <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
		 * updated. Other collaborators can see the link to the source spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
		 * var chart = sheet.getCharts()[0];
		 * // Insert the spreadsheet chart in the first slide.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var position = {left: 0, top: 0};
		 * var size = {width: 200, height: 200};
		 * 
		 * // Also available for Layout, Master, and Page.
		 * slide.insertSheetsChart(
		 *     chart,
		 *     position.left,
		 *     position.top,
		 *     size.width,
		 *     size.height);
		 * </code></pre>
		 * 
		 * @param sourceChart - The chart in a spreadsheet to be inserted in the page.
		 * @param left - The horizontal position of the chart in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the chart in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the chart in points.
		 * @param height - The height of the chart in points.
		 * 
		 * @returns The inserted chart in the page.
		 */
		insertSheetsChart(
			sourceChart: SpreadsheetApp.EmbeddedChart,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.SheetsChart

		/**
		 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.
		 * 
		 * <p>The image of the chart is inserted with a default size at the top left corner of the page.
		 * 
		 * <p>The inserted image of chart is not linked with the source Google Sheets chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
		 * var chart = sheet.getCharts()[0];
		 * // Insert the spreadsheet chart in the first slide.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.insertSheetsChartAsImage(chart); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param sourceChart - The chart in a spreadsheet to be inserted in the page.
		 * 
		 * @returns The inserted image of the chart in the page.
		 */
		insertSheetsChartAsImage(
			sourceChart: SpreadsheetApp.EmbeddedChart
		): SlidesApp.Image
		/**
		 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page with the provided position and
		 * size.
		 * 
		 * <p>In order to maintain the chart image's aspect ratio, the image is scaled and centered with
		 * respect to the provided size.
		 * 
		 * <p>The inserted image of the chart is not linked with the source Google Sheets chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
		 * var chart = sheet.getCharts()[0];
		 * // Insert the spreadsheet chart in the first slide.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var position = {left: 0, top: 0};
		 * var size = {width: 200, height: 200};
		 * 
		 * // Also available for Layout, Master, and Page.
		 * slide.insertSheetsChartAsImage(
		 *     chart,
		 *     position.left,
		 *     position.right,
		 *     size.width,
		 *     size.height);
		 * </code></pre>
		 * 
		 * @param sourceChart - The chart in a spreadsheet to be inserted in the page.
		 * @param left - The horizontal position of the chart in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the chart in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the chart in points.
		 * @param height - The height of the chart in points.
		 * 
		 * @returns The inserted image of the chart in the page.
		 */
		insertSheetsChartAsImage(
			sourceChart: SpreadsheetApp.EmbeddedChart,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Image

		/**
		 * Inserts a table on the page.
		 * 
		 * <p>The table is centered on the page with default size and evenly distributed rows and columns.
		 * 
		 * @param numRows - The number of rows in the table.
		 * @param numColumns - The number of columns in the table.
		 * 
		 * @returns The inserted table.
		 */
		insertTable(
			numRows: number,
			numColumns: number
		): SlidesApp.Table
		/**
		 * Inserts a table on the page with the provided position and size.
		 * 
		 * <p>Rows and columns are evenly distributed in the created table.
		 * 
		 * @param numRows - The number of rows in the table.
		 * @param numColumns - The number of columns in the table.
		 * @param left - The horizontal position of the table, measured from the upper left corner of the
		 *     page.
		 * @param top - The vertical position of the table, measured from the upper left corner of the page.
		 * @param width - The width of the table.
		 * @param height - The minimum height of the table. The actual height of the rendered table depends
		 *     on factors such as text font size.
		 * 
		 * @returns The inserted table.
		 */
		insertTable(
			numRows: number,
			numColumns: number,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Table
		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a table between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var table = otherPresentationSlide.getTables[0];
		 * currentPresentationSlide.insertTable(table); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param table - The table to be copied and inserted.
		 * 
		 * @returns The inserted table.
		 */
		insertTable(
			table: SlidesApp.Table
		): SlidesApp.Table

		/**
		 * Inserts a text box <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> containing the provided string on the page.
		 * 
		 * <p>The text box shape is inserted with a default size at the top left corner of the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert text box with &quot;Hello&quot; on the first slide of presentation.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.insertTextBox(&#39;Hello&#39;); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param text - The string the text box shape should contain.
		 * 
		 * @returns The inserted text box shape.
		 */
		insertTextBox(
			text: string
		): SlidesApp.Shape
		/**
		 * Inserts a text box <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> containing the provided string on the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert text box with &quot;Hello&quot; on the first slide of presentation. This text box is a square
		 * // with a length of 10 points on each side.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.insertTextBox(&#39;Hello&#39;, 0, 0, 10, 10); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param text - The string the text box shape should contain.
		 * @param left - The horizontal position of the text box shape, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the text box shape, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the text box shape.
		 * @param height - The height of the text box shape.
		 * 
		 * @returns The inserted text box shape.
		 */
		insertTextBox(
			text: string,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Shape

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a video between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var video = otherPresentationSlide.getVideos[0];
		 * currentPresentationSlide.insertVideo(video); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param video - The video to be copied and inserted.
		 * 
		 * @returns The inserted video.
		 */
		insertVideo(
			video: SlidesApp.Video
		): SlidesApp.Video
		/**
		 * Inserts a video at the top left corner of the page with a default size.
		 * 
		 * <p>Only YouTube videos are currently supported.
		 * 
		 * @param videoUrl - The URL of the video to insert.
		 * 
		 * @returns The inserted video.
		 */
		insertVideo(
			videoUrl: string
		): SlidesApp.Video
		/**
		 * Inserts a video on the page with the provided position and size.
		 * 
		 * <p>Only YouTube videos are currently supported.
		 * 
		 * @param videoUrl - The URL of the video to insert.
		 * @param left - The horizontal position of the video in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the video in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the video in points.
		 * @param height - The height of the video in points.
		 * 
		 * @returns The inserted video.
		 */
		insertVideo(
			videoUrl: string,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Video

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a word art between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var wordArt = otherPresentationSlide.getWordArts[0];
		 * 
		 * // Also available for Layout, Master, and Page.
		 * currentPresentationSlide.insertWordArt(wordArt);
		 * </code></pre>
		 * 
		 * @param wordArt - The group to be copied and inserted.
		 * 
		 * @returns The inserted word art.
		 */
		insertWordArt(
			wordArt: SlidesApp.WordArt
		): SlidesApp.WordArt
		/**
		 * Removes the page.
		 */
		remove(): void
		/**
		 * Replaces all instances of text matching find text with replace text. The search is case
		 * insensitive.
		 * 
		 * @param findText - The text to find.
		 * @param replaceText - The text to replace the matched text.
		 * 
		 * @returns the number of occurrences changed
		 */
		replaceAllText(
			findText: string,
			replaceText: string
		): number
		/**
		 * Replaces all instances of text matching find text with replace text.
		 * 
		 * @param findText - The text to find.
		 * @param replaceText - The text to replace the matched text.
		 * @param matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
		 *     case insensitive.
		 * 
		 * @returns the number of occurrences changed
		 */
		replaceAllText(
			findText: string,
			replaceText: string,
			matchCase: Boolean
		): number

		/**
		 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> in the active presentation as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> and removes any previous selection.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Select the first slide as the current page selection and replace any previous selection.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.selectAsCurrentPage(); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 */
		selectAsCurrentPage(): void

	}

	class NotesMaster {
		private constructor();

		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> objects on the page.
		 */
		getGroups(): SlidesApp.Group[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> objects on the page.
		 */
		getImages(): SlidesApp.Image[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> objects on the page.
		 */
		getLines(): SlidesApp.Line[]
		/**
		 * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
		 * namespace.
		 */
		getObjectId(): string
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page with the given ID, or <code>null</code> if none exists.
		 * 
		 * @param id - The ID of the page element that is being retrieved.
		 * 
		 * @returns The page element with the given ID.
		 */
		getPageElementById(
			id: string
		): SlidesApp.PageElement
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects rendered on the page.
		 */
		getPageElements(): SlidesApp.PageElement[]
		/**
		 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> or
		 * <code>null</code> if a matching placeholder is not present.
		 * 
		 * <p>If there are multiple placeholders with the same type, it returns the one with minimal
		 * placeholder index. If there are multiple matching placeholders with the same index, it returns
		 * the first placeholder from the page's page elements collection.
		 * 
		 * <pre class="prettyprint">
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
		 * </pre>
		 * 
		 * @param placeholderType
		 */
		getPlaceholder(
			placeholderType: SlidesApp.PlaceholderType
		): SlidesApp.PageElement
		/**
		 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> and
		 * a placeholder index, or <code>null</code> if the placeholder is not present.
		 * 
		 * <p>If there are multiple placeholders with the same type and index, it returns the first
		 * placeholder from the page's page elements collection.
		 * 
		 * <pre class="prettyprint">
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
		 * </pre>
		 * 
		 * @param placeholderType
		 * @param placeholderIndex
		 */
		getPlaceholder(
			placeholderType: SlidesApp.PlaceholderType,
			placeholderIndex: number
		): SlidesApp.PageElement

		/**
		 * Returns the list of placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects in the page.
		 * 
		 * <pre class="prettyprint">
		 * var master = SlidesApp.getActivePresentation().getMasters()[0];
		 * Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
		 * </pre>
		 */
		getPlaceholders(): SlidesApp.PageElement[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> objects on the page.
		 */
		getShapes(): SlidesApp.Shape[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> objects on the page.
		 */
		getSheetsCharts(): SlidesApp.SheetsChart[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> objects on the page.
		 */
		getTables(): SlidesApp.Table[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> objects on the page.
		 */
		getVideos(): SlidesApp.Video[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> objects on the page.
		 */
		getWordArts(): SlidesApp.WordArt[]

	}

	class NotesPage {
		private constructor();

		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> objects on the page.
		 */
		getGroups(): SlidesApp.Group[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> objects on the page.
		 */
		getImages(): SlidesApp.Image[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> objects on the page.
		 */
		getLines(): SlidesApp.Line[]
		/**
		 * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
		 * namespace.
		 */
		getObjectId(): string
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page with the given ID, or <code>null</code> if none exists.
		 * 
		 * @param id - The ID of the page element that is being retrieved.
		 * 
		 * @returns The page element with the given ID.
		 */
		getPageElementById(
			id: string
		): SlidesApp.PageElement
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects rendered on the page.
		 */
		getPageElements(): SlidesApp.PageElement[]
		/**
		 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> or
		 * <code>null</code> if a matching placeholder is not present.
		 * 
		 * <p>If there are multiple placeholders with the same type, it returns the one with minimal
		 * placeholder index. If there are multiple matching placeholders with the same index, it returns
		 * the first placeholder from the page's page elements collection.
		 * 
		 * <pre class="prettyprint">
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
		 * </pre>
		 * 
		 * @param placeholderType
		 */
		getPlaceholder(
			placeholderType: SlidesApp.PlaceholderType
		): SlidesApp.PageElement
		/**
		 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> and
		 * a placeholder index, or <code>null</code> if the placeholder is not present.
		 * 
		 * <p>If there are multiple placeholders with the same type and index, it returns the first
		 * placeholder from the page's page elements collection.
		 * 
		 * <pre class="prettyprint">
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
		 * </pre>
		 * 
		 * @param placeholderType
		 * @param placeholderIndex
		 */
		getPlaceholder(
			placeholderType: SlidesApp.PlaceholderType,
			placeholderIndex: number
		): SlidesApp.PageElement

		/**
		 * Returns the list of placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects in the page.
		 * 
		 * <pre class="prettyprint">
		 * var master = SlidesApp.getActivePresentation().getMasters()[0];
		 * Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
		 * </pre>
		 */
		getPlaceholders(): SlidesApp.PageElement[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> objects on the page.
		 */
		getShapes(): SlidesApp.Shape[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> objects on the page.
		 */
		getSheetsCharts(): SlidesApp.SheetsChart[]
		/**
		 * Gets the shape containing the speaker notes on the page.
		 */
		getSpeakerNotesShape(): SlidesApp.Shape
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> objects on the page.
		 */
		getTables(): SlidesApp.Table[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> objects on the page.
		 */
		getVideos(): SlidesApp.Video[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> objects on the page.
		 */
		getWordArts(): SlidesApp.WordArt[]
		/**
		 * Replaces all instances of text matching find text with replace text. The search is case
		 * insensitive.
		 * 
		 * @param findText - The text to find.
		 * @param replaceText - The text to replace the matched text.
		 * 
		 * @returns the number of occurrences changed
		 */
		replaceAllText(
			findText: string,
			replaceText: string
		): number
		/**
		 * Replaces all instances of text matching find text with replace text.
		 * 
		 * @param findText - The text to find.
		 * @param replaceText - The text to replace the matched text.
		 * @param matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
		 *     case insensitive.
		 * 
		 * @returns the number of occurrences changed
		 */
		replaceAllText(
			findText: string,
			replaceText: string,
			matchCase: Boolean
		): number


	}

	class Page {
		private constructor();

		/**
		 * Returns the page as a layout.
		 * 
		 * @returns The page as a layout.
		 */
		asLayout(): SlidesApp.Layout
		/**
		 * Returns the page as a master.
		 * 
		 * @returns The page as a master.
		 */
		asMaster(): SlidesApp.Master
		/**
		 * Returns the page as a slide.
		 * 
		 * @returns The page as a slide.
		 */
		asSlide(): SlidesApp.Slide
		/**
		 * Gets the page's background.
		 * 
		 * @returns The page's background.
		 */
		getBackground(): SlidesApp.PageBackground
		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color-scheme.html'>ColorScheme</a></code> associated with the page.
		 * 
		 * @returns The page's color scheme.
		 */
		getColorScheme(): SlidesApp.ColorScheme
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> objects on the page.
		 */
		getGroups(): SlidesApp.Group[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> objects on the page.
		 */
		getImages(): SlidesApp.Image[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> objects on the page.
		 */
		getLines(): SlidesApp.Line[]
		/**
		 * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
		 * namespace.
		 */
		getObjectId(): string
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page with the given ID, or <code>null</code> if none exists.
		 * 
		 * @param id - The ID of the page element that is being retrieved.
		 * 
		 * @returns The page element with the given ID.
		 */
		getPageElementById(
			id: string
		): SlidesApp.PageElement
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects rendered on the page.
		 */
		getPageElements(): SlidesApp.PageElement[]
		/**
		 * Gets the type of the page.
		 * 
		 * @returns The page type.
		 */
		getPageType(): SlidesApp.PageType
		/**
		 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> or
		 * <code>null</code> if a matching placeholder is not present.
		 * 
		 * <p>If there are multiple placeholders with the same type, it returns the one with minimal
		 * placeholder index. If there are multiple matching placeholders with the same index, it returns
		 * the first placeholder from the page's page elements collection.
		 * 
		 * <pre class="prettyprint">
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
		 * </pre>
		 * 
		 * @param placeholderType
		 */
		getPlaceholder(
			placeholderType: SlidesApp.PlaceholderType
		): SlidesApp.PageElement
		/**
		 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> and
		 * a placeholder index, or <code>null</code> if the placeholder is not present.
		 * 
		 * <p>If there are multiple placeholders with the same type and index, it returns the first
		 * placeholder from the page's page elements collection.
		 * 
		 * <pre class="prettyprint">
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
		 * </pre>
		 * 
		 * @param placeholderType
		 * @param placeholderIndex
		 */
		getPlaceholder(
			placeholderType: SlidesApp.PlaceholderType,
			placeholderIndex: number
		): SlidesApp.PageElement

		/**
		 * Returns the list of placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects in the page.
		 * 
		 * <pre class="prettyprint">
		 * var master = SlidesApp.getActivePresentation().getMasters()[0];
		 * Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
		 * </pre>
		 */
		getPlaceholders(): SlidesApp.PageElement[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> objects on the page.
		 */
		getShapes(): SlidesApp.Shape[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> objects on the page.
		 */
		getSheetsCharts(): SlidesApp.SheetsChart[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> objects on the page.
		 */
		getTables(): SlidesApp.Table[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> objects on the page.
		 */
		getVideos(): SlidesApp.Video[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> objects on the page.
		 */
		getWordArts(): SlidesApp.WordArt[]
		/**
		 * Groups all the specified page elements.
		 * 
		 * <p>There should be at least two page elements on the same page that are not already in another
		 * group. Some page elements, such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Videos</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Tables</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html#getPlaceholderType()'>placeholder Shapes</a></code> cannot be grouped.
		 * 
		 * @param pageElements - The elements to group together.
		 * 
		 * @returns The new group.
		 */
		group(
			pageElements: SlidesApp.PageElement[]
		): SlidesApp.Group
		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a group between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var group = otherPresentationSlide.getGroups()[0];
		 * currentPresentationSlide.insertGroup(group); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param group - The group to be copied and inserted.
		 * 
		 * @returns The inserted group.
		 */
		insertGroup(
			group: SlidesApp.Group
		): SlidesApp.Group
		/**
		 * Inserts an image at the top left corner of the page with a default size from the specified
		 * image blob.
		 * 
		 * <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once and a copy is stored for
		 * display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
		 * megapixels, and must be in either in PNG, JPEG, or GIF format.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * // Get the Drive image file with the given ID.
		 * var image = DriveApp.getFileById(fileId);
		 * slide.insertImage(image);
		 * </code></pre>
		 * 
		 * @param blobSource - The image data.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			blobSource: BlobSource
		): SlidesApp.Image
		/**
		 * Inserts an image on the page with the provided position and size from the specified image blob.
		 * 
		 * <p>The image is fetched from the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once at insertion time and a copy
		 * is stored for display inside the presentation. Images must be less than 50MB in size, cannot
		 * exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.
		 * 
		 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
		 * to the provided size.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * // Get the Drive image file with the given ID.
		 * var image = DriveApp.getFileById(fileId);
		 * var position = {left: 0, top: 0};
		 * var size = {width: 300, height: 100};
		 * slide.insertImage(image, position.left, position.top, size.width, size.height);
		 * </code></pre>
		 * 
		 * @param blobSource - The image data.
		 * @param left - The horizontal position of the image in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the image in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the image in points.
		 * @param height - The height of the image in points.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			blobSource: BlobSource,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Image
		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy an image between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var image = otherPresentationSlide.getImages[0];
		 * currentPresentationSlide.insertImage(image);
		 * </code></pre>
		 * 
		 * @param image - The image to be copied and inserted.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			image: SlidesApp.Image
		): SlidesApp.Image
		/**
		 * Inserts an image at the top left corner of the page with a default size from the provided URL.
		 * 
		 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
		 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
		 * in either in PNG, JPEG, or GIF format.
		 * 
		 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
		 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
		 * 
		 * @param imageUrl - The image URL.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			imageUrl: string
		): SlidesApp.Image
		/**
		 * Inserts an image on the page with the provided position and size from the provided URL.
		 * 
		 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
		 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
		 * in either in PNG, JPEG, or GIF format.
		 * 
		 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
		 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
		 * 
		 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
		 * to the provided size.
		 * 
		 * @param imageUrl - The image URL.
		 * @param left - The horizontal position of the image in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the image in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the image in points.
		 * @param height - The height of the image in points.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			imageUrl: string,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Image

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a line between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var line = otherPresentationSlide.getLines[0];
		 * currentPresentationSlide.insertLine(line);
		 * </code></pre>
		 * 
		 * @param line - The line to be copied and inserted.
		 * 
		 * @returns The inserted line.
		 */
		insertLine(
			line: SlidesApp.Line
		): SlidesApp.Line
		/**
		 * Inserts a line on the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert a line in the first slide of the presentation.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var startPoint = {left: 10, top: 10};
		 * var endPoint = {left: 40, top: 40};
		 * slide.insertLine(
		 *     SlidesApp.LineCategory.STRAIGHT,
		 *     startPoint.left,
		 *     startPoint.top,
		 *     endPoint.left,
		 *     endPoint.top);
		 * </code></pre>
		 * 
		 * @param lineCategory - The category of the line to insert.
		 * @param startLeft - The horizontal position of the start point of the line, measured in points
		 *     from the upper left corner of the page.
		 * @param startTop - The vertical position of the start point of the line, measured in points from
		 *     the upper left corner of the page.
		 * @param endLeft - The horizontal position of the end point of the line, measured in points from
		 *     the upper left corner of the page.
		 * @param endTop - The vertical position of the end point of the line, measured in points from the
		 *     upper left corner of the page.
		 * 
		 * @returns The inserted line.
		 */
		insertLine(
			lineCategory: SlidesApp.LineCategory,
			startLeft: Number,
			startTop: Number,
			endLeft: Number,
			endTop: Number
		): SlidesApp.Line
		/**
		 * Inserts a line on the page connecting two <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/connection-site.html'>connection sites</a></code>. The two
		 * connection sites must be on this page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert a line in the first slide of the presentation connecting two shapes.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
		 * var shape2 = slide.insertShape(SlidesApp.ShapeType.CLOUD);
		 * slide.insertLine(
		 *     SlidesApp.LineCategory.BENT,
		 *     shape1.getConnectionSites()[0],
		 *     shape2.getConnectionSites()[1]);
		 * </code></pre>
		 * 
		 * @param lineCategory - The category of the line to insert.
		 * @param startConnectionSite - The connection site where the start of the line is to be connected.
		 * @param endConnectionSite - The connection site where the end of the line is to be connected.
		 * 
		 * @returns The inserted line.
		 */
		insertLine(
			lineCategory: SlidesApp.LineCategory,
			startConnectionSite: SlidesApp.ConnectionSite,
			endConnectionSite: SlidesApp.ConnectionSite
		): SlidesApp.Line

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a page element between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var pageElement = otherPresentationSlide.getPageElements[0];
		 * 
		 * // Also available for Layout, Master, and Page.
		 * currentPresentationSlide.insertPageElement(pageElement);
		 * </code></pre>
		 * 
		 * @param pageElement - The page element to be copied and inserted.
		 * 
		 * @returns The inserted page element.
		 */
		insertPageElement(
			pageElement: SlidesApp.PageElement
		): SlidesApp.PageElement
		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a shape between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var shape = otherPresentationSlide.getShapes[0];
		 * currentPresentationSlide.insertShape(shape); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param shape - The shape to be copied and inserted.
		 * 
		 * @returns The inserted shape.
		 */
		insertShape(
			shape: SlidesApp.Shape
		): SlidesApp.Shape
		/**
		 * Inserts a shape on the page.
		 * 
		 * <p>The shape is inserted with a default size at the top left corner of the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert a shape in the first slide of the presentation.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * 
		 * // Also available for Layout, Master, and Page.
		 * slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
		 * </code></pre>
		 * 
		 * @param shapeType - The type of shape to insert.
		 * 
		 * @returns The inserted shape.
		 */
		insertShape(
			shapeType: SlidesApp.ShapeType
		): SlidesApp.Shape
		/**
		 * Inserts a shape on the page.
		 * 
		 * @param shapeType - The type of shape to insert.
		 * @param left - The horizontal position of the shape, measured from the upper left corner of the
		 *     page.
		 * @param top - The vertical position of the shape, measured from the upper left corner of the page.
		 * @param width - The width of the shape.
		 * @param height - The height of the shape.
		 * 
		 * @returns The inserted shape.
		 */
		insertShape(
			shapeType: SlidesApp.ShapeType,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Shape

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a sheets chart between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var sheetsChart = otherPresentationSlide.getSheetsCharts[0];
		 * 
		 * // Also available for Layout, Master, and Page.
		 * currentPresentationSlide.insertSheetsChart(sheetsChart);
		 * </code></pre>
		 * 
		 * @param sheetsChart - The sheets chart to be copied and inserted.
		 * 
		 * @returns The inserted sheets chart.
		 */
		insertSheetsChart(
			sheetsChart: SlidesApp.SheetsChart
		): SlidesApp.SheetsChart
		/**
		 * Inserts a Google Sheets chart on the page.
		 * 
		 * <p>The chart is inserted with a default size at the top left corner of the page.
		 * 
		 * <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
		 * updated. Other collaborators can see the link to the source spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
		 * var chart = sheet.getCharts()[0];
		 * // Insert the spreadsheet chart in the first slide.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.insertSheetsChart(chart);
		 * </code></pre>
		 * 
		 * @param sourceChart - The chart in a spreadsheet to be inserted in the page.
		 * 
		 * @returns The inserted chart in the page.
		 */
		insertSheetsChart(
			sourceChart: SpreadsheetApp.EmbeddedChart
		): SlidesApp.SheetsChart
		/**
		 * Inserts a Google Sheets chart on the page with the provided position and size.
		 * 
		 * <p>In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
		 * to the provided size.
		 * 
		 * <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
		 * updated. Other collaborators can see the link to the source spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
		 * var chart = sheet.getCharts()[0];
		 * // Insert the spreadsheet chart in the first slide.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var position = {left: 0, top: 0};
		 * var size = {width: 200, height: 200};
		 * 
		 * // Also available for Layout, Master, and Page.
		 * slide.insertSheetsChart(
		 *     chart,
		 *     position.left,
		 *     position.top,
		 *     size.width,
		 *     size.height);
		 * </code></pre>
		 * 
		 * @param sourceChart - The chart in a spreadsheet to be inserted in the page.
		 * @param left - The horizontal position of the chart in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the chart in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the chart in points.
		 * @param height - The height of the chart in points.
		 * 
		 * @returns The inserted chart in the page.
		 */
		insertSheetsChart(
			sourceChart: SpreadsheetApp.EmbeddedChart,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.SheetsChart

		/**
		 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.
		 * 
		 * <p>The image of the chart is inserted with a default size at the top left corner of the page.
		 * 
		 * <p>The inserted image of chart is not linked with the source Google Sheets chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
		 * var chart = sheet.getCharts()[0];
		 * // Insert the spreadsheet chart in the first slide.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.insertSheetsChartAsImage(chart); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param sourceChart - The chart in a spreadsheet to be inserted in the page.
		 * 
		 * @returns The inserted image of the chart in the page.
		 */
		insertSheetsChartAsImage(
			sourceChart: SpreadsheetApp.EmbeddedChart
		): SlidesApp.Image
		/**
		 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page with the provided position and
		 * size.
		 * 
		 * <p>In order to maintain the chart image's aspect ratio, the image is scaled and centered with
		 * respect to the provided size.
		 * 
		 * <p>The inserted image of the chart is not linked with the source Google Sheets chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
		 * var chart = sheet.getCharts()[0];
		 * // Insert the spreadsheet chart in the first slide.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var position = {left: 0, top: 0};
		 * var size = {width: 200, height: 200};
		 * 
		 * // Also available for Layout, Master, and Page.
		 * slide.insertSheetsChartAsImage(
		 *     chart,
		 *     position.left,
		 *     position.right,
		 *     size.width,
		 *     size.height);
		 * </code></pre>
		 * 
		 * @param sourceChart - The chart in a spreadsheet to be inserted in the page.
		 * @param left - The horizontal position of the chart in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the chart in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the chart in points.
		 * @param height - The height of the chart in points.
		 * 
		 * @returns The inserted image of the chart in the page.
		 */
		insertSheetsChartAsImage(
			sourceChart: SpreadsheetApp.EmbeddedChart,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Image

		/**
		 * Inserts a table on the page.
		 * 
		 * <p>The table is centered on the page with default size and evenly distributed rows and columns.
		 * 
		 * @param numRows - The number of rows in the table.
		 * @param numColumns - The number of columns in the table.
		 * 
		 * @returns The inserted table.
		 */
		insertTable(
			numRows: number,
			numColumns: number
		): SlidesApp.Table
		/**
		 * Inserts a table on the page with the provided position and size.
		 * 
		 * <p>Rows and columns are evenly distributed in the created table.
		 * 
		 * @param numRows - The number of rows in the table.
		 * @param numColumns - The number of columns in the table.
		 * @param left - The horizontal position of the table, measured from the upper left corner of the
		 *     page.
		 * @param top - The vertical position of the table, measured from the upper left corner of the page.
		 * @param width - The width of the table.
		 * @param height - The minimum height of the table. The actual height of the rendered table depends
		 *     on factors such as text font size.
		 * 
		 * @returns The inserted table.
		 */
		insertTable(
			numRows: number,
			numColumns: number,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Table
		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a table between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var table = otherPresentationSlide.getTables[0];
		 * currentPresentationSlide.insertTable(table); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param table - The table to be copied and inserted.
		 * 
		 * @returns The inserted table.
		 */
		insertTable(
			table: SlidesApp.Table
		): SlidesApp.Table

		/**
		 * Inserts a text box <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> containing the provided string on the page.
		 * 
		 * <p>The text box shape is inserted with a default size at the top left corner of the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert text box with &quot;Hello&quot; on the first slide of presentation.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.insertTextBox(&#39;Hello&#39;); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param text - The string the text box shape should contain.
		 * 
		 * @returns The inserted text box shape.
		 */
		insertTextBox(
			text: string
		): SlidesApp.Shape
		/**
		 * Inserts a text box <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> containing the provided string on the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert text box with &quot;Hello&quot; on the first slide of presentation. This text box is a square
		 * // with a length of 10 points on each side.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.insertTextBox(&#39;Hello&#39;, 0, 0, 10, 10); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param text - The string the text box shape should contain.
		 * @param left - The horizontal position of the text box shape, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the text box shape, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the text box shape.
		 * @param height - The height of the text box shape.
		 * 
		 * @returns The inserted text box shape.
		 */
		insertTextBox(
			text: string,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Shape

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a video between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var video = otherPresentationSlide.getVideos[0];
		 * currentPresentationSlide.insertVideo(video); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param video - The video to be copied and inserted.
		 * 
		 * @returns The inserted video.
		 */
		insertVideo(
			video: SlidesApp.Video
		): SlidesApp.Video
		/**
		 * Inserts a video at the top left corner of the page with a default size.
		 * 
		 * <p>Only YouTube videos are currently supported.
		 * 
		 * @param videoUrl - The URL of the video to insert.
		 * 
		 * @returns The inserted video.
		 */
		insertVideo(
			videoUrl: string
		): SlidesApp.Video
		/**
		 * Inserts a video on the page with the provided position and size.
		 * 
		 * <p>Only YouTube videos are currently supported.
		 * 
		 * @param videoUrl - The URL of the video to insert.
		 * @param left - The horizontal position of the video in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the video in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the video in points.
		 * @param height - The height of the video in points.
		 * 
		 * @returns The inserted video.
		 */
		insertVideo(
			videoUrl: string,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Video

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a word art between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var wordArt = otherPresentationSlide.getWordArts[0];
		 * 
		 * // Also available for Layout, Master, and Page.
		 * currentPresentationSlide.insertWordArt(wordArt);
		 * </code></pre>
		 * 
		 * @param wordArt - The group to be copied and inserted.
		 * 
		 * @returns The inserted word art.
		 */
		insertWordArt(
			wordArt: SlidesApp.WordArt
		): SlidesApp.WordArt
		/**
		 * Removes the page.
		 */
		remove(): void
		/**
		 * Replaces all instances of text matching find text with replace text. The search is case
		 * insensitive.
		 * 
		 * @param findText - The text to find.
		 * @param replaceText - The text to replace the matched text.
		 * 
		 * @returns the number of occurrences changed
		 */
		replaceAllText(
			findText: string,
			replaceText: string
		): number
		/**
		 * Replaces all instances of text matching find text with replace text.
		 * 
		 * @param findText - The text to find.
		 * @param replaceText - The text to replace the matched text.
		 * @param matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
		 *     case insensitive.
		 * 
		 * @returns the number of occurrences changed
		 */
		replaceAllText(
			findText: string,
			replaceText: string,
			matchCase: Boolean
		): number

		/**
		 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> in the active presentation as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> and removes any previous selection.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Select the first slide as the current page selection and replace any previous selection.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.selectAsCurrentPage(); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 */
		selectAsCurrentPage(): void

	}

	class PageBackground {
		private constructor();

		/**
		 * Get the stretched picture fill of this background, or <code>null</code> if the background fill type
		 * is not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-background-type.html#PICTURE'>PageBackgroundType.PICTURE</a></code>.
		 */
		getPictureFill(): SlidesApp.PictureFill
		/**
		 * Get the solid fill of this background, or <code>null</code> if the background fill type is not
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-background-type.html#SOLID'>PageBackgroundType.SOLID</a></code>.
		 */
		getSolidFill(): SlidesApp.SolidFill
		/**
		 * Get the type of this page background.
		 */
		getType(): SlidesApp.PageBackgroundType
		/**
		 * Whether the background is visible.
		 */
		isVisible(): Boolean
		/**
		 * Sets an image from the specified image blob as the page background. The image is stretched to
		 * match the dimensions of the page.
		 * 
		 * <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once and a copy is stored for
		 * display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
		 * megapixels, and must be in either in PNG, JPEG, or GIF format.
		 * 
		 * @param blobSource - The image data.
		 */
		setPictureFill(
			blobSource: BlobSource
		): void
		/**
		 * Sets the image at the provided URL as the page background. The image is stretched to match the
		 * dimensions of the page.
		 * 
		 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
		 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
		 * in either in PNG, JPEG, or GIF format.
		 * 
		 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
		 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/picture-fill.html#getSourceUrl()'>PictureFill.getSourceUrl()</a></code>.
		 * 
		 * @param imageUrl - The URL to download the image from.
		 */
		setPictureFill(
			imageUrl: string
		): void

		/**
		 * Sets the solid fill to the given RGB values.
		 * 
		 * @param red
		 * @param green
		 * @param blue
		 */
		setSolidFill(
			red: number,
			green: number,
			blue: number
		): void
		/**
		 * Sets the solid fill to the given alpha and RGB values.
		 * 
		 * @param red
		 * @param green
		 * @param blue
		 * @param alpha
		 */
		setSolidFill(
			red: number,
			green: number,
			blue: number,
			alpha: Number
		): void
		/**
		 * Sets the solid fill to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code>.
		 * 
		 * @param color
		 */
		setSolidFill(
			color: SlidesApp.Color
		): void
		/**
		 * Sets the solid fill to the given alpha and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color.html'>Color</a></code>.
		 * 
		 * @param color
		 * @param alpha
		 */
		setSolidFill(
			color: SlidesApp.Color,
			alpha: Number
		): void
		/**
		 * Sets the solid fill to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
		 * 
		 * @param color
		 */
		setSolidFill(
			color: SlidesApp.ThemeColorType
		): void
		/**
		 * Sets the solid fill to the given alpha and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
		 * 
		 * @param color
		 * @param alpha
		 */
		setSolidFill(
			color: SlidesApp.ThemeColorType,
			alpha: Number
		): void
		/**
		 * Sets the solid fill to the given hex color string.
		 * 
		 * <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
		 * '#FFC0CB'.
		 * 
		 * @param hexString
		 */
		setSolidFill(
			hexString: string
		): void
		/**
		 * Sets the solid fill to the given alpha and hex color string.
		 * 
		 * <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
		 * '#FFC0CB'.
		 * 
		 * @param hexString
		 * @param alpha
		 */
		setSolidFill(
			hexString: string,
			alpha: Number
		): void

		/**
		 * Sets the background to transparent.
		 */
		setTransparent(): void

	}

	enum PageBackgroundType {
		/**
		 * No fill, so the background is rendered white.
		 */
		NONE = "NONE",
		/**
		 * A picture that is stretched to fill the page.
		 */
		PICTURE = "PICTURE",
		/**
		 * A solid color fill.
		 */
		SOLID = "SOLID",
		/**
		 * A page background type that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	class PageElement {
		private constructor();

		/**
		 * Aligns the element to the specified alignment position on the page.
		 * 
		 * @param alignmentPosition - The position to align this page element to on the page.
		 * 
		 * @returns This page element, for chaining.
		 */
		alignOnPage(
			alignmentPosition: SlidesApp.AlignmentPosition
		): SlidesApp.PageElement
		/**
		 * Returns the page element as a group.
		 * 
		 * @returns This page element as a group.
		 */
		asGroup(): SlidesApp.Group
		/**
		 * Returns the page element as an image.
		 * 
		 * @returns This page element as an image.
		 */
		asImage(): SlidesApp.Image
		/**
		 * Returns the page element as a line.
		 * 
		 * @returns This page element as a line.
		 */
		asLine(): SlidesApp.Line
		/**
		 * Returns the page element as a shape.
		 * 
		 * @returns This page element as a shape.
		 */
		asShape(): SlidesApp.Shape
		/**
		 * Returns the page element as a linked chart embedded from Google Sheets.
		 * 
		 * @returns The page element as a chart.
		 */
		asSheetsChart(): SlidesApp.SheetsChart
		/**
		 * Returns the page element as a table.
		 * 
		 * @returns This page element as a table.
		 */
		asTable(): SlidesApp.Table
		/**
		 * Returns the page element as a video.
		 * 
		 * @returns This page element as a video.
		 */
		asVideo(): SlidesApp.Video
		/**
		 * Returns the page element as word art.
		 * 
		 * @returns This page element as word art.
		 */
		asWordArt(): SlidesApp.WordArt
		/**
		 * Brings the page element forward on the page by one element.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		bringForward(): SlidesApp.PageElement
		/**
		 * Brings the page element to the front of the page.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		bringToFront(): SlidesApp.PageElement
		/**
		 * Duplicates the page element.
		 * 
		 * <p>The duplicate page element is placed on the same page at the same position as the original.
		 * 
		 * @returns The new duplicate of this page element.
		 */
		duplicate(): SlidesApp.PageElement
		/**
		 * Returns the list of <code>ConnectionSite</code>s on the page element, or an empty list if the page
		 * element does not have any connection sites.
		 * 
		 * @returns The connection sites list, which may be empty if this element has no connection sites.
		 */
		getConnectionSites(): SlidesApp.ConnectionSite[]
		/**
		 * Returns the page element's description. The description is combined with the title to display
		 * and read alt text.
		 * 
		 * @returns The page element's description.
		 */
		getDescription(): string
		/**
		 * Gets the element's height in points, which is the height of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @returns The page element's inherent height in points, or <code>null</code> if the page element does
		 *     not have a height.
		 */
		getHeight(): Number
		/**
		 * Returns the element's inherent height in points.
		 * 
		 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
		 * conjunction with the element's transform to determine the element's final visual appearance.
		 * 
		 * @returns The page element's inherent height in points, or <code>null</code> if the page element does
		 *     not have a height.
		 */
		getInherentHeight(): Number
		/**
		 * Returns the element's inherent width in points.
		 * 
		 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
		 * conjunction with the element's transform to determine the element's final visual appearance.
		 * 
		 * @returns The page element's inherent width in points, or <code>null</code> if the page element does
		 *     not have a width.
		 */
		getInherentWidth(): Number
		/**
		 * Returns the element's horizontal position in points, measured from the upper-left corner of the
		 * page when the element has no rotation.
		 * 
		 * @returns This element's horizonal position in points, from the upper-left corner of the page.
		 */
		getLeft(): Number
		/**
		 * Returns the unique ID for this object. Object IDs used by pages and page elements share the
		 * same namespace.
		 * 
		 * @returns The unique ID for this object.
		 */
		getObjectId(): string
		/**
		 * Returns the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
		 * 
		 * @returns The page element's type.
		 */
		getPageElementType(): SlidesApp.PageElementType
		/**
		 * Returns the group this page element belongs to, or <code>null</code> if the element is not in a
		 * group.
		 * 
		 * @returns The group this page element belongs to, or <code>null</code>.
		 */
		getParentGroup(): SlidesApp.Group
		/**
		 * Returns the page this page element is on.
		 * 
		 * @returns The page this element resides on.
		 */
		getParentPage(): SlidesApp.Page
		/**
		 * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
		 * means no rotation.
		 * 
		 * @returns The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).
		 */
		getRotation(): Number
		/**
		 * Returns the page element's title. The title is combined with the description to display and
		 * read alt text.
		 * 
		 * @returns The page element's title.
		 */
		getTitle(): string
		/**
		 * Gets the element's vertical position in points, measured from the upper-left corner of the page
		 * when the element has no rotation.
		 * 
		 * @returns This element's vertical position in points, from the upper-left corner of the page.
		 */
		getTop(): Number
		/**
		 * Returns the page element's transform.
		 * 
		 * <p>The visual appearance of the page element is determined by its absolute transform. To
		 * compute the absolute transform, preconcatenate a page element's transform with the transforms
		 * of all of its parent groups. If the page element is not in a group, its absolute transform is
		 * the same as the value in this field.
		 * 
		 * @returns The page element's transform.
		 */
		getTransform(): SlidesApp.AffineTransform
		/**
		 * Returns the element's width in points, which is the width of the element's bounding box when
		 * the element has no rotation.
		 * 
		 * @returns The page element's inherent width in points, or <code>null</code> if the page element does
		 *     not have a width.
		 */
		getWidth(): Number
		/**
		 * Preconcatenates the provided transform to the existing transform of the page element.
		 * 
		 * <pre class="prettyprint"><code>
		 * newTransform = argument * existingTransform
		 * </code></pre>
		 * 
		 * <p>For example, to move a page elements 36 points to the left:
		 * 
		 * <pre class="prettyprint"><code>
		 * element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
		 *     .setTranslateX(-36.0)
		 *     .build());
		 * </code></pre>
		 * 
		 * <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
		 * 
		 * @param transform - The transform to preconcatenate onto this page element's transform.
		 * 
		 * @returns This page element, for chaining.
		 */
		preconcatenateTransform(
			transform: SlidesApp.AffineTransform
		): SlidesApp.PageElement
		/**
		 * Removes the page element.
		 * 
		 * <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
		 * group itself is also removed.
		 * 
		 * <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
		 * are also removed.
		 */
		remove(): void
		/**
		 * Scales the element's height by the specified ratio. The element's height is the height of its
		 * bounding box when the element has no rotation.
		 * 
		 * @param ratio - The ratio to scale this page element's height by.
		 * 
		 * @returns This page element, for chaining.
		 */
		scaleHeight(
			ratio: Number
		): SlidesApp.PageElement
		/**
		 * Scales the element's width by the specified ratio. The element's width is the width of its
		 * bounding box when the element has no rotation.
		 * 
		 * @param ratio - The ratio to scale this page element's width by.
		 * 
		 * @returns This page element, for chaining.
		 */
		scaleWidth(
			ratio: Number
		): SlidesApp.PageElement
		/**
		 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
		 * selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var pageElement = slide.getPageElements()[0];
		 * // Only select this page element and replace any previous selection.
		 * pageElement.select();
		 * </code></pre>
		 */
		select(): void
		/**
		 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>Pass <code>true</code> to this method to select only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and remove any
		 * previous selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 * 
		 * <p>Pass <code>false</code> to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code>
		 * objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.
		 * 
		 * <p>The following conditions must be met while selecting a page element using a <code>false</code>
		 * parameter:
		 * 
		 * <ol>
		 *   <li>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 *   <li>There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected.
		 * </ol>
		 * 
		 * <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
		 * first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * // First select the slide page, as the current page selection.
		 * slide.selectAsCurrentPage();
		 * // Then select all the page elements in the selected slide page.
		 * var pageElements = slide.getPageElements();
		 * for (var i = 0; i &lt; pageElements.length; i++) {
		 *   pageElements[i].select(false);
		 * }
		 * </code></pre>
		 * 
		 * @param replace - If <code>true</code>, the selection replaces any previous selection; otherwise the
		 *     selection is added to any previous selection.
		 */
		select(
			replace: Boolean
		): void

		/**
		 * Sends the page element backward on the page by one element.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		sendBackward(): SlidesApp.PageElement
		/**
		 * Sends the page element to the back of the page.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		sendToBack(): SlidesApp.PageElement
		/**
		 * Sets the page element's alt text description.
		 * 
		 * <p>The method is not supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the first page element&#39;s alt text description to &quot;new alt text description&quot;.
		 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
		 * pageElement.setDescription(&#39;new alt text description&#39;);
		 * Logger.log(pageElement.getDescription());
		 * </code></pre>
		 * 
		 * @param description - The string to set the alt text description to.
		 * 
		 * @returns This page element.
		 */
		setDescription(
			description: string
		): SlidesApp.PageElement
		/**
		 * Sets the element's height in points, which is the height of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @param height - The new height of this page element to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setHeight(
			height: Number
		): SlidesApp.PageElement
		/**
		 * Sets the element's horizontal position in points, measured from the upper-left corner of the
		 * page when the element has no rotation.
		 * 
		 * @param left - The new horizontal position to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setLeft(
			left: Number
		): SlidesApp.PageElement
		/**
		 * Sets the element's clockwise rotation angle around its center in degrees.
		 * 
		 * @param angle - The new clockwise rotation angle to set, in degrees.
		 * 
		 * @returns This page element, for chaining.
		 */
		setRotation(
			angle: Number
		): SlidesApp.PageElement
		/**
		 * Sets the page element's alt text title.
		 * 
		 * <p>The method is not supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the first page element&#39;s alt text title to &quot;new alt text title&quot;.
		 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
		 * pageElement.setTitle(&#39;new alt text title&#39;);
		 * Logger.log(pageElement.getTitle());
		 * </code></pre>
		 * 
		 * @param title - The string to set the alt text title to.
		 * 
		 * @returns This page element.
		 */
		setTitle(
			title: string
		): SlidesApp.PageElement
		/**
		 * Sets the element's vertical position in points, measured from the upper-left corner of the page
		 * when the element has no rotation.
		 * 
		 * @param top - The new vertical position to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setTop(
			top: Number
		): SlidesApp.PageElement
		/**
		 * Sets the transform of the page element with the provided transform.
		 * 
		 * <p>Updating the transform of a group changes the absolute transform of the page elements in
		 * that group, which can change their visual appearance.
		 * 
		 * <p>Updating the transform of a page element that is in a group only changes the transform of
		 * that page element; it doesn't affect the transforms of the group or other page elements in the
		 * group.
		 * 
		 * <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html#getTransform()'>getTransform()</a></code>.
		 * 
		 * @param transform - The transform that is set for this page element.
		 * 
		 * @returns This element, for chaining.
		 */
		setTransform(
			transform: SlidesApp.AffineTransform
		): SlidesApp.PageElement
		/**
		 * Sets the element's width in points, which is the width of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @param width - The new width of this page element to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setWidth(
			width: Number
		): SlidesApp.PageElement

	}

	class PageElementRange {
		private constructor();

		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> instances.
		 */
		getPageElements(): SlidesApp.PageElement[]

	}

	enum PageElementType {
		/**
		 * Represents a collection of page elements joined as a single unit.
		 */
		GROUP = "GROUP",
		/**
		 * Represents an image.
		 */
		IMAGE = "IMAGE",
		/**
		 * Represents a line.
		 */
		LINE = "LINE",
		/**
		 * Represents a generic shape that does not have a more specific classification.
		 */
		SHAPE = "SHAPE",
		/**
		 * Represents a linked chart embedded from Google Sheets.
		 */
		SHEETS_CHART = "SHEETS_CHART",
		/**
		 * Represents a table.
		 */
		TABLE = "TABLE",
		/**
		 * Represents a page element that is not supported and cannot be further classified.
		 */
		UNSUPPORTED = "UNSUPPORTED",
		/**
		 * Represents a video.
		 */
		VIDEO = "VIDEO",
		/**
		 * Represents word art.
		 */
		WORD_ART = "WORD_ART",
	}

	class PageRange {
		private constructor();

		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> instances.
		 */
		getPages(): SlidesApp.Page[]

	}

	enum PageType {
		/**
		 * A layout page.
		 */
		LAYOUT = "LAYOUT",
		/**
		 * A master page.
		 */
		MASTER = "MASTER",
		/**
		 * A slide page.
		 */
		SLIDE = "SLIDE",
		/**
		 * A page type that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	class Paragraph {
		private constructor();

		/**
		 * Returns the index of the paragraph's newline. Returns <code>null</code> if the newline has been
		 * deleted.
		 */
		getIndex(): number
		/**
		 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> spanning the text in the paragraph ended by this object's newline
		 * character. Returns <code>null</code> if the paragraph's newline has been deleted.
		 */
		getRange(): SlidesApp.TextRange

	}

	enum ParagraphAlignment {
		/**
		 * The paragraph is centered.
		 */
		CENTER = "CENTER",
		/**
		 * The paragraph is aligned to the end of the line. Right-aligned for left-to-right text,
		 * left-aligned otherwise.
		 */
		END = "END",
		/**
		 * The paragraph is justified.
		 */
		JUSTIFIED = "JUSTIFIED",
		/**
		 * The paragraph is aligned to the start of the line. Left-aligned for left-to-right text,
		 * right-aligned otherwise.
		 */
		START = "START",
		/**
		 * A paragraph alignment that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	class ParagraphStyle {
		private constructor();

		/**
		 * Returns the text end indentation for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points, or <code>null</code> if there are multiple paragraph styles on the given text.
		 * 
		 * <p>The side that corresponds to the end of the text is based on the current text direction.
		 */
		getIndentEnd(): Number
		/**
		 * Returns the indentation for the first line of paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points, or
		 * <code>null</code> if there are multiple paragraph styles on the given text.
		 */
		getIndentFirstLine(): Number
		/**
		 * Returns the text start indentation for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points, or <code>null</code> if there are multiple paragraph styles on the given text.
		 * 
		 * <p>The side that corresponds to the start of the text is based on the current text direction.
		 */
		getIndentStart(): Number
		/**
		 * Returns the line spacing, or <code>null</code> if there are multiple paragraph styles on the given
		 * text.
		 * 
		 * <p>This is a value that corresponds to the space between lines, as a percentage of normal.
		 * Normal is represented as 100.0.
		 */
		getLineSpacing(): Number
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/paragraph-alignment.html'>ParagraphAlignment</a></code> of paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>, or <code>null</code>
		 * if there are multiple paragraph styles on the given text.
		 */
		getParagraphAlignment(): SlidesApp.ParagraphAlignment
		/**
		 * Returns the extra space above paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points, or <code>null</code> if
		 * there are multiple paragraph styles on the given text.
		 */
		getSpaceAbove(): Number
		/**
		 * Returns the extra space below paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points, or <code>null</code> if
		 * there are multiple paragraph styles on the given text.
		 */
		getSpaceBelow(): Number
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/spacing-mode.html'>SpacingMode</a></code> for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>, or <code>null</code> if
		 * there are multiple paragraph styles on the given text.
		 */
		getSpacingMode(): SlidesApp.SpacingMode
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-direction.html'>TextDirection</a></code> for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>, or <code>null</code> if
		 * there are multiple paragraph styles on the given text.
		 */
		getTextDirection(): SlidesApp.TextDirection
		/**
		 * Sets the text end indentation for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points.
		 * 
		 * <p>The side that corresponds to the end of the text is based on the current text direction.
		 * 
		 * @param indent
		 */
		setIndentEnd(
			indent: Number
		): SlidesApp.ParagraphStyle
		/**
		 * Sets the indentation for the first line of paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points.
		 * 
		 * @param indent
		 */
		setIndentFirstLine(
			indent: Number
		): SlidesApp.ParagraphStyle
		/**
		 * Sets the text start indentation for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points.
		 * 
		 * <p>The side that corresponds to the start of the text is based on the current text direction.
		 * 
		 * @param indent
		 */
		setIndentStart(
			indent: Number
		): SlidesApp.ParagraphStyle
		/**
		 * Sets the line spacing.
		 * 
		 * <p>This is a value that corresponds to the space between lines, as a percentage of normal.
		 * Normal is represented as 100.0.
		 * 
		 * @param spacing
		 */
		setLineSpacing(
			spacing: Number
		): SlidesApp.ParagraphStyle
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/paragraph-alignment.html'>ParagraphAlignment</a></code> of paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>.
		 * 
		 * @param alignment
		 */
		setParagraphAlignment(
			alignment: SlidesApp.ParagraphAlignment
		): SlidesApp.ParagraphStyle
		/**
		 * Sets the extra space above paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points.
		 * 
		 * @param space
		 */
		setSpaceAbove(
			space: Number
		): SlidesApp.ParagraphStyle
		/**
		 * Sets the extra space below paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in points.
		 * 
		 * @param space
		 */
		setSpaceBelow(
			space: Number
		): SlidesApp.ParagraphStyle
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/spacing-mode.html'>SpacingMode</a></code> for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>.
		 * 
		 * @param mode
		 */
		setSpacingMode(
			mode: SlidesApp.SpacingMode
		): SlidesApp.ParagraphStyle
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-direction.html'>TextDirection</a></code> for paragraphs in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>.
		 * 
		 * @param direction
		 */
		setTextDirection(
			direction: SlidesApp.TextDirection
		): SlidesApp.ParagraphStyle

	}

	class PictureFill {
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
		 * Gets a URL to the image.
		 * 
		 * <p>This URL is tagged with the account of the requester, so anyone with the URL effectively
		 * accesses the image as the original requester. Access to the image may be lost if the
		 * presentation's sharing settings change. The URL expires after a short period of time.
		 */
		getContentUrl(): string
		/**
		 * Gets the image's source URL, if available.
		 * 
		 * <p>When an image is inserted by URL, returns the URL provided during image insertion.
		 * 
		 * @returns the image URL or <code>null</code> if the image does not have a source URL
		 */
		getSourceUrl(): string

	}

	enum PlaceholderType {
		/**
		 * Body text.
		 */
		BODY = "BODY",
		/**
		 * Title centered.
		 */
		CENTERED_TITLE = "CENTERED_TITLE",
		/**
		 * Chart or graph.
		 */
		CHART = "CHART",
		/**
		 * Clip art image.
		 */
		CLIP_ART = "CLIP_ART",
		/**
		 * Date and time.
		 */
		DATE_AND_TIME = "DATE_AND_TIME",
		/**
		 * Diagram.
		 */
		DIAGRAM = "DIAGRAM",
		/**
		 * Footer text.
		 */
		FOOTER = "FOOTER",
		/**
		 * Header text.
		 */
		HEADER = "HEADER",
		/**
		 * Multimedia.
		 */
		MEDIA = "MEDIA",
		/**
		 * Not a Placeholder.
		 */
		NONE = "NONE",
		/**
		 * Any content type.
		 */
		OBJECT = "OBJECT",
		/**
		 * Picture.
		 */
		PICTURE = "PICTURE",
		/**
		 * Slide image.
		 */
		SLIDE_IMAGE = "SLIDE_IMAGE",
		/**
		 * Number of a slide.
		 */
		SLIDE_NUMBER = "SLIDE_NUMBER",
		/**
		 * Subtitle.
		 */
		SUBTITLE = "SUBTITLE",
		/**
		 * Table.
		 */
		TABLE = "TABLE",
		/**
		 * Slide title.
		 */
		TITLE = "TITLE",
		/**
		 * A placeholder type that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	class Point {
		private constructor();

		/**
		 * Gets the horizontal coordinate, measured in points.
		 */
		getX(): Number
		/**
		 * Gets the vertical coordinate, measured in points.
		 */
		getY(): Number

	}

	enum PredefinedLayout {
		/**
		 * Layout with a big number heading.
		 */
		BIG_NUMBER = "BIG_NUMBER",
		/**
		 * Blank layout, with no placeholders.
		 */
		BLANK = "BLANK",
		/**
		 * Layout with a caption at the bottom.
		 */
		CAPTION_ONLY = "CAPTION_ONLY",
		/**
		 * Layout with a main point.
		 */
		MAIN_POINT = "MAIN_POINT",
		/**
		 * Layout with one title and one body, arranged in a single column.
		 */
		ONE_COLUMN_TEXT = "ONE_COLUMN_TEXT",
		/**
		 * Layout with a section title.
		 */
		SECTION_HEADER = "SECTION_HEADER",
		/**
		 * Layout with a title and subtitle on one side and description on the other.
		 */
		SECTION_TITLE_AND_DESCRIPTION = "SECTION_TITLE_AND_DESCRIPTION",
		/**
		 * Layout with a title and a subtitle.
		 */
		TITLE = "TITLE",
		/**
		 * Layout with a title and body.
		 */
		TITLE_AND_BODY = "TITLE_AND_BODY",
		/**
		 * Layout with a title and two columns.
		 */
		TITLE_AND_TWO_COLUMNS = "TITLE_AND_TWO_COLUMNS",
		/**
		 * Layout with only a title.
		 */
		TITLE_ONLY = "TITLE_ONLY",
		/**
		 * A layout that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	class Presentation {
		private constructor();

		/**
		 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If the user was already
		 * on the list of viewers, this method promotes the user out of the list of viewers.
		 * 
		 * @param emailAddress - The email address of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining.
		 */
		addEditor(
			emailAddress: string
		): SlidesApp.Presentation
		/**
		 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If the user was already
		 * on the list of viewers, this method promotes the user out of the list of viewers.
		 * 
		 * @param user - A representation of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining.
		 */
		addEditor(
			user: User
		): SlidesApp.Presentation

		/**
		 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If any of the
		 * users were already on the list of viewers, this method promotes them out of the list of
		 * viewers.
		 * 
		 * @param emailAddresses - An array of email addresses of the users to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining.
		 */
		addEditors(
			emailAddresses: string[]
		): SlidesApp.Presentation
		/**
		 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If the user was already
		 * on the list of editors, this method has no effect.
		 * 
		 * @param emailAddress - The email address of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining.
		 */
		addViewer(
			emailAddress: string
		): SlidesApp.Presentation
		/**
		 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If the user was already
		 * on the list of editors, this method has no effect.
		 * 
		 * @param user - A representation of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining.
		 */
		addViewer(
			user: User
		): SlidesApp.Presentation

		/**
		 * Adds the given array of users to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. If any of the
		 * users were already on the list of editors, this method has no effect for them.
		 * 
		 * @param emailAddresses - An array of email addresses of the users to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining.
		 */
		addViewers(
			emailAddresses: string[]
		): SlidesApp.Presentation
		/**
		 * Appends a slide to the end of the presentation using the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/predefined-layout.html#BLANK'>PredefinedLayout.BLANK</a></code>
		 * predefined layout based on the current master. The current master is one of the following:
		 * 
		 * <ul>
		 *   <li>The master of the current last slide.
		 *   <li>The first master in the presentation, if there is no slide.
		 * </ul>
		 * 
		 * @returns The new slide that is appended.
		 */
		appendSlide(): SlidesApp.Slide
		/**
		 * Appends a slide to the end of the presentation using the specified layout based on the current
		 * master. The current master is one of the following:
		 * 
		 * <ul>
		 *   <li>The master of the current last slide.
		 *   <li>The first master in the presentation, if there is no slide.
		 * </ul>
		 * 
		 * @param layout - The layout to use for the new slide; it should be present in the current master.
		 * 
		 * @returns The new slide that is appended.
		 */
		appendSlide(
			layout: SlidesApp.Layout
		): SlidesApp.Slide
		/**
		 * Appends a slide to the end of the presentation using the specified predefined layout based on
		 * the current master. The current master is one of the following:
		 * 
		 * <ul>
		 *   <li>The master of the current last slide.
		 *   <li>The first master in the presentation, if there is no slide.
		 * </ul>
		 * 
		 * @param predefinedLayout - The predefined layout to use for the new slide; it should be present in
		 *     the current master.
		 * 
		 * @returns The new slide that is appended.
		 */
		appendSlide(
			predefinedLayout: SlidesApp.PredefinedLayout
		): SlidesApp.Slide
		/**
		 * Appends a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to the end of the presentation.
		 * 
		 * <p>If the slide being copied is from a different presentation, the parent master and layout
		 * pages are copied as well if they do not already exist in this presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a slide from another presentation and appends it.
		 * var otherPresentation = SlidesApp.openById(&#39;presentationId&#39;);
		 * var currentPresentation = SlidesApp.getActivePresentation();
		 * var slide = otherPresentation.getSlides[0];
		 * currentPresentation.appendSlide(slide);
		 * </code></pre>
		 * 
		 * @param slide - The slide to be copied and appended.
		 * 
		 * @returns The new slide that is appended.
		 */
		appendSlide(
			slide: SlidesApp.Slide
		): SlidesApp.Slide
		/**
		 * Appends a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> from the source presentation to the end of the
		 * current presentation, and sets the slide link as specified by the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html'>SlideLinkingMode</a></code>.
		 * 
		 * <p>If the slide being copied is from a different presentation, the parent master and layout
		 * pages are copied as well if they do not already exist in the current presentation.
		 * 
		 * <p>If the link mode is <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html#LINKED'>SlideLinkingMode.LINKED</a></code>, the appended slide can be updated to
		 * match the provided source slide when <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html#refreshSlide()'>Slide.refreshSlide()</a></code> is called. Other collaborators
		 * can see the link to the source slide. <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html#LINKED'>SlideLinkingMode.LINKED</a></code> cannot be used with
		 * source slides from the current presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a slide from another presentation, then append and link it.
		 * var sourcePresentation = SlidesApp.openById(&#39;presentationId&#39;);
		 * var currentPresentation = SlidesApp.getActivePresentation();
		 * var slide = sourcePresentation.getSlides()[0];
		 * var appendedSlide = currentPresentation.appendSlide(slide, SlideApp.SlideLinkingMode.LINKED);
		 * </code></pre>
		 * 
		 * @param slide - The slide to be copied, appended, and linked.
		 * @param linkingMode - The link mode to use.
		 * 
		 * @returns The new slide.
		 */
		appendSlide(
			slide: SlidesApp.Slide,
			linkingMode: SlidesApp.SlideLinkingMode
		): SlidesApp.Slide

		/**
		 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>.
		 * 
		 * @returns An array of users with edit permission.
		 */
		getEditors(): User[]
		/**
		 * Gets the presentation's unique identifier. The presentation ID is used with <code>SlidesApp.openById()</code> to open a specific presentation instance.
		 * 
		 * @returns The ID of this presentation.
		 */
		getId(): string
		/**
		 * Gets the layouts in the presentation.
		 * 
		 * @returns The list of layouts in this presentation.
		 */
		getLayouts(): SlidesApp.Layout[]
		/**
		 * Gets the masters in the presentation.
		 * 
		 * @returns The list of masters in this presentation.
		 */
		getMasters(): SlidesApp.Master[]
		/**
		 * Gets the name or title of the presentation.
		 * 
		 * @returns The title of this presentation.
		 */
		getName(): string
		/**
		 * Gets the notes master of the presentation.
		 * 
		 * @returns The notes master of the presentation.
		 */
		getNotesMaster(): SlidesApp.NotesMaster
		/**
		 * Gets the page height of the notes master and notes pages in the presentation in points. They
		 * all have the same page height.
		 * 
		 * @returns The notes page height in points.
		 */
		getNotesPageHeight(): Number
		/**
		 * Gets the page width of the notes master and notes pages in the presentation in points. They all
		 * have the same page width.
		 * 
		 * @returns The notes page width in points.
		 */
		getNotesPageWidth(): Number
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> with the given ID, or <code>null</code> if none exists.
		 * 
		 * @param id - The ID of the page element that is being retrieved.
		 * 
		 * @returns The page element with the given ID.
		 */
		getPageElementById(
			id: string
		): SlidesApp.PageElement
		/**
		 * Gets the page height of the slides, layouts, and masters in the presentation in points. They
		 * all have the same page height.
		 * 
		 * @returns The page height in points.
		 */
		getPageHeight(): Number
		/**
		 * Gets the page width of the slides, layouts, and masters in the presentation in points. They all
		 * have the same page width.
		 * 
		 * @returns The page width in points.
		 */
		getPageWidth(): Number
		/**
		 * Gets the user’s selection in the active presentation. A script can only access the selection of
		 * the user who is running the script, and only if the script is <a
		 * href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>Note that the selection returned is the current effective selection. As the script performs
		 * various changes to the presentation, the selection is transformed to take them into account.
		 * For example if two shapes A and B are selected, and then the script removes shape B, the
		 * returned selection object is implicitly updated such that only shape A is selected.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Gets the current active page that is selected in the active presentation.
		 * var selection = SlidesApp.getActivePresentation().getSelection();
		 * var currentPage = selection.getCurrentPage();
		 * </code></pre>
		 * 
		 * @returns A representation of the user's selection, or <code>null</code> if the script is not bound to
		 *     the presentation or if there is no valid user selection.
		 */
		getSelection(): SlidesApp.Selection
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> with the given ID, or <code>null</code> if none exists.
		 * 
		 * @param id - The ID of the slide that is being retrieved.
		 * 
		 * @returns The slide with the given ID.
		 */
		getSlideById(
			id: string
		): SlidesApp.Slide
		/**
		 * Gets the slides in the presentation.
		 * 
		 * @returns The list of slides in this presentation.
		 */
		getSlides(): SlidesApp.Slide[]
		/**
		 * Retrieves the URL to access this presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * var presentation = SlidesApp.getActivePresentation();
		 * 
		 * // Send out the link to open the presentation.
		 * MailApp.sendEmail(&quot;&lt;email-address&gt;&quot;, presentation.getName(), presentation.getUrl());
		 * </code></pre>
		 * 
		 * @returns The URL to access the current presentation.
		 */
		getUrl(): string
		/**
		 * Gets the list of viewers and commenters for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>.
		 * 
		 * @returns An array of users with view or comment permission.
		 */
		getViewers(): User[]
		/**
		 * Inserts a slide at the specified index in the presentation using the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/predefined-layout.html#BLANK'>PredefinedLayout.BLANK</a></code> predefined layout based on the current master. The current master is
		 * one of the following:
		 * 
		 * <ul>
		 *   <li>The master of the previous slide.
		 *   <li>The master of the first slide, if the insertionIndex is zero.
		 *   <li>The first master in the presentation, if there is no slide.
		 * </ul>
		 * 
		 * @param insertionIndex - The zero-based index indicating where to insert the slide.
		 * 
		 * @returns The new slide that is inserted.
		 */
		insertSlide(
			insertionIndex: number
		): SlidesApp.Slide
		/**
		 * Inserts a slide at the specified index in the presentation using the specified layout based on
		 * the current master. The current master is one of the following:
		 * 
		 * <ul>
		 *   <li>The master of the previous slide.
		 *   <li>The master of the first slide, if the insertionIndex is zero.
		 *   <li>The first master in the presentation, if there is no slide.
		 * </ul>
		 * 
		 * @param insertionIndex - The zero-based index indicating where to insert the slide.
		 * @param layout - The layout to use for the new slide; it should be present in the current master.
		 * 
		 * @returns The new slide that is inserted.
		 */
		insertSlide(
			insertionIndex: number,
			layout: SlidesApp.Layout
		): SlidesApp.Slide
		/**
		 * Inserts a slide at the specified index in the presentation using the specified predefined
		 * layout based on the current master. The current master is one of the following:
		 * 
		 * <ul>
		 *   <li>The master of the previous slide.
		 *   <li>The master of the first slide, if the insertionIndex is zero.
		 *   <li>The first master in the presentation, if there is no slide.
		 * </ul>
		 * 
		 * @param insertionIndex - The zero-based index indicating where to insert the slide.
		 * @param predefinedLayout - The predefined layout to use for the new slide; it should be present in
		 *     the current master.
		 * 
		 * @returns The new slide that is inserted.
		 */
		insertSlide(
			insertionIndex: number,
			predefinedLayout: SlidesApp.PredefinedLayout
		): SlidesApp.Slide
		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> at the specified index in the presentation.
		 * 
		 * <p>If the slide being copied is from a different presentation, the parent master and layout
		 * pages are copied as well if they do not already exist in this presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a slide from another presentation and inserts it.
		 * var otherPresentation = SlidesApp.openById(&#39;presentationId&#39;);
		 * var currentPresentation = SlidesApp.getActivePresentation();
		 * var slide = otherPresentation.getSlides[0];
		 * var insertionIndex = 1;
		 * currentPresentation.insertSlide(insertionIndex, slide);
		 * </code></pre>
		 * 
		 * @param insertionIndex - The zero-based index indicating where to insert the slide.
		 * @param slide - The slide to be copied and inserted.
		 * 
		 * @returns The new slide that is inserted.
		 */
		insertSlide(
			insertionIndex: number,
			slide: SlidesApp.Slide
		): SlidesApp.Slide
		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> from the source presentation into the specified
		 * index in the current presentation, and sets the slide link as specified by the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html'>SlideLinkingMode</a></code>.
		 * 
		 * <p>If the slide being copied is from a different presentation, the parent master and layout
		 * pages are copied as well if they do not already exist in the current presentation.
		 * 
		 * <p>If the link mode is <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html#LINKED'>SlideLinkingMode.LINKED</a></code>, the inserted slide can be updated to
		 * match the provided source slide when <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html#refreshSlide()'>Slide.refreshSlide()</a></code> is called. Other collaborators
		 * can see the link to the source slide. <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html#LINKED'>SlideLinkingMode.LINKED</a></code> cannot be used with
		 * source slides from the current presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a slide from another presentation, then insert and link it.
		 * var sourcePresentation = SlidesApp.openById(&#39;presentationId&#39;);
		 * var currentPresentation = SlidesApp.getActivePresentation();
		 * var slide = sourcePresentation.getSlides()[0];
		 * var insertionIndex = 1;
		 * var insertedSlide =
		 *     currentPresentation.insertSlide(
		 *     insertionIndex, slide, SlidesApp.SlideLinkingMode.LINKED);
		 * </code></pre>
		 * 
		 * @param insertionIndex - The zero-based index indicating where to insert the slide.
		 * @param slide - The slide to be copied and inserted.
		 * @param linkingMode - The link mode to use.
		 * 
		 * @returns The new slide.
		 */
		insertSlide(
			insertionIndex: number,
			slide: SlidesApp.Slide,
			linkingMode: SlidesApp.SlideLinkingMode
		): SlidesApp.Slide

		/**
		 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. This method doesn't
		 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> if they belong to a class of users who have
		 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> is shared with the user's entire
		 * domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of viewers.
		 * 
		 * @param emailAddress - The email address of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining.
		 */
		removeEditor(
			emailAddress: string
		): SlidesApp.Presentation
		/**
		 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. This method doesn't
		 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> if they belong to a class of users who have
		 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> is shared with the user's entire
		 * domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of viewers.
		 * 
		 * @param user - A representation of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>, for chaining.
		 */
		removeEditor(
			user: User
		): SlidesApp.Presentation

		/**
		 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. This
		 * method has no effect if the user is an editor, not a viewer or commenter. This method also
		 * doesn't block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> if they belong to a class of users who
		 * have general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> is shared with the user's
		 * entire domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of editors.
		 * 
		 * @param emailAddress - The email address of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> for chaining.
		 */
		removeViewer(
			emailAddress: string
		): SlidesApp.Presentation
		/**
		 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code>. This
		 * method has no effect if the user is an editor, not a viewer. This method also doesn't block
		 * users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> if they belong to a class of users who have general
		 * access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> is shared with the user's entire domain, or
		 * if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of editors.
		 * 
		 * @param user - A representation of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> for chaining.
		 */
		removeViewer(
			user: User
		): SlidesApp.Presentation

		/**
		 * Replaces all instances of text matching find text with replace text. The search is case
		 * insensitive.
		 * 
		 * @param findText - The text to find.
		 * @param replaceText - The text to replace the matched text.
		 * 
		 * @returns the number of occurrences changed
		 */
		replaceAllText(
			findText: string,
			replaceText: string
		): number
		/**
		 * Replaces all instances of text matching find text with replace text.
		 * 
		 * @param findText - The text to find.
		 * @param replaceText - The text to replace the matched text.
		 * @param matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
		 *     case insensitive.
		 * 
		 * @returns the number of occurrences changed
		 */
		replaceAllText(
			findText: string,
			replaceText: string,
			matchCase: Boolean
		): number

		/**
		 * Saves the current <code>Presentation</code>. Causes pending updates to be flushed and applied.
		 * 
		 * <p>The <code>saveAndClose()</code> method is automatically invoked at the end of script execution
		 * for each open <code>Presentation</code>, even if the script execution terminated with an error.
		 * 
		 * <p>A closed <code>Presentation</code> cannot be edited. Use one of the open methods on <code>SlidesApp</code> to reopen a given presentation for editing.
		 */
		saveAndClose(): void
		/**
		 * Sets the name or title of the presentation.
		 * 
		 * @param name - The name to set for this presentation.
		 */
		setName(
			name: string
		): void

	}

	class Selection {
		private constructor();

		/**
		 * Returns the currently active <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> or <code>null</code> if there is no active page.
		 * 
		 * <pre class="prettyprint">
		 * var selection = SlidesApp.getActivePresentation().getSelection();
		 * var currentPage = selection.getCurrentPage();
		 * if (currentPage != null) {
		 *   Logger.log('Selected current active page ID: ' + currentPage.getObjectId());
		 * }
		 * </pre>
		 */
		getCurrentPage(): SlidesApp.Page
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-range.html'>PageElementRange</a></code> collection of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> instances that are
		 * selected or <code>null</code> if there are no <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> instances selected.
		 * 
		 * <pre class="prettyprint">
		 * var selection = SlidesApp.getActivePresentation().getSelection();
		 * var selectionType = selection.getSelectionType();
		 * if (selectionType == SlidesApp.SelectionType.PAGE_ELEMENT) {
		 *   var currentPage = selection.getCurrentPage();
		 *   var pageElements = selection.getPageElementRange().getPageElements();
		 *   Logger.log('Number of page elements selected: ' + pageElements.length);
		 * }
		 * </pre>
		 */
		getPageElementRange(): SlidesApp.PageElementRange
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-range.html'>PageRange</a></code> a collection of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> instances in the flimstrip that are
		 * selected or <code>null</code> if the selection is not of type <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection-type.html#PAGE'>SelectionType.PAGE</a></code>.
		 * 
		 * <pre class="prettyprint">
		 * var selection = SlidesApp.getActivePresentation().getSelection();
		 * var selectionType = selection.getSelectionType();
		 * if (selectionType == SlidesApp.SelectionType.PAGE) {
		 *   var pageRange = selection.getPageRange();
		 *   Logger.log('Number of pages in the flimstrip selected: ' + pageRange.getPages().length);
		 * }
		 * }</pre>
		 */
		getPageRange(): SlidesApp.PageRange
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection-type.html'>SelectionType</a></code>.
		 * 
		 * <pre class="prettyprint">
		 * var selection = SlidesApp.getActivePresentation().getSelection();
		 * var selectionType = selection.getSelectionType();
		 * if (selectionType == SlidesApp.SelectionType.CURRENT_PAGE) {
		 *   var currentPage = selection.getCurrentPage();
		 *   Logger.log('Selected current active page ID: ' + currentPage.getObjectId());
		 * }
		 * </pre>
		 */
		getSelectionType(): SlidesApp.SelectionType
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table-cell-range.html'>TableCellRange</a></code> collection of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table-cell.html'>TableCell</a></code> instances that are selected
		 * or <code>null</code> if there are no <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table-cell.html'>TableCell</a></code> instances selected.
		 * 
		 * <pre class="prettyprint">
		 * var selection = SlidesApp.getActivePresentation().getSelection();
		 * var selectionType = selection.getSelectionType();
		 * if (selectionType == SlidesApp.SelectionType.TABLE_CELL) {
		 *   var currentPage = selection.getCurrentPage();
		 *   var tableCells = selection.getTableCellRange().getTableCells();
		 *   var table = tableCells[0].getParentTable();
		 *   Logger.log('Number of table cells selected: ' + tableCells.length);
		 * }
		 * </pre>
		 */
		getTableCellRange(): SlidesApp.TableCellRange
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> that is selected or <code>null</code> if the selection is not of type
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection-type.html#TEXT'>SelectionType.TEXT</a></code>.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> represents two scenarios:
		 * 
		 * <p>1. Range of text selected. For example if a shape has text "Hello", and "He" is selected,
		 * the returned range has <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html#getStartIndex()'>TextRange.getStartIndex()</a></code> = 0, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html#getEndIndex()'>TextRange.getEndIndex()</a></code> =
		 * 2.
		 * 
		 * <p>2. Cursor position. For example if a shape has text "Hello", and cursor is after "H",
		 * ("H|ello"), the returned range has <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html#getStartIndex()'>TextRange.getStartIndex()</a></code> = 1 and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html#getEndIndex()'>TextRange.getEndIndex()</a></code> = 1.
		 * 
		 * <pre class="prettyprint">
		 * var selection = SlidesApp.getActivePresentation().getSelection();
		 * var selectionType = selection.getSelectionType();
		 * if (selectionType == SlidesApp.SelectionType.TEXT) {
		 *   var currentPage = selection.getCurrentPage();
		 *   var pageElement = selection.getPageElementRange().getPageElements()[0];
		 *   var textRange = selection.getTextRange();
		 *   Logger.log('Text selected: ' + textRange.asString());
		 * }
		 * </pre>
		 */
		getTextRange(): SlidesApp.TextRange

	}

	enum SelectionType {
		/**
		 * Current page selection.
		 */
		CURRENT_PAGE = "CURRENT_PAGE",
		/**
		 * No selection.
		 */
		NONE = "NONE",
		/**
		 * Page selection in the thumbnail flimstrip.
		 */
		PAGE = "PAGE",
		/**
		 * Page element selection.
		 */
		PAGE_ELEMENT = "PAGE_ELEMENT",
		/**
		 * Table cell selection.
		 */
		TABLE_CELL = "TABLE_CELL",
		/**
		 * Text selection.
		 */
		TEXT = "TEXT",
		/**
		 * A selection type that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	class Shape {
		private constructor();

		/**
		 * Aligns the element to the specified alignment position on the page.
		 * 
		 * @param alignmentPosition - The position to align this page element to on the page.
		 * 
		 * @returns This page element, for chaining.
		 */
		alignOnPage(
			alignmentPosition: SlidesApp.AlignmentPosition
		): SlidesApp.Shape
		/**
		 * Brings the page element forward on the page by one element.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		bringForward(): SlidesApp.Shape
		/**
		 * Brings the page element to the front of the page.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		bringToFront(): SlidesApp.Shape
		/**
		 * Duplicates the page element.
		 * 
		 * <p>The duplicate page element is placed on the same page at the same position as the original.
		 * 
		 * @returns The new duplicate of this page element.
		 */
		duplicate(): SlidesApp.PageElement
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/border.html'>Border</a></code> of the shape.
		 * 
		 * @returns The border setting of this shape.
		 */
		getBorder(): SlidesApp.Border
		/**
		 * Returns the list of <code>ConnectionSite</code>s on the page element, or an empty list if the page
		 * element does not have any connection sites.
		 * 
		 * @returns The connection sites list, which may be empty if this element has no connection sites.
		 */
		getConnectionSites(): SlidesApp.ConnectionSite[]
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/content-alignment.html'>ContentAlignment</a></code> of the text in the shape.
		 * 
		 * @returns The alignment of text within this shape.
		 */
		getContentAlignment(): SlidesApp.ContentAlignment
		/**
		 * Returns the page element's description. The description is combined with the title to display
		 * and read alt text.
		 * 
		 * @returns The page element's description.
		 */
		getDescription(): string
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/fill.html'>Fill</a></code> of the shape.
		 * 
		 * @returns The fill setting of this shape.
		 */
		getFill(): SlidesApp.Fill
		/**
		 * Gets the element's height in points, which is the height of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @returns The page element's inherent height in points, or <code>null</code> if the page element does
		 *     not have a height.
		 */
		getHeight(): Number
		/**
		 * Returns the element's inherent height in points.
		 * 
		 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
		 * conjunction with the element's transform to determine the element's final visual appearance.
		 * 
		 * @returns The page element's inherent height in points, or <code>null</code> if the page element does
		 *     not have a height.
		 */
		getInherentHeight(): Number
		/**
		 * Returns the element's inherent width in points.
		 * 
		 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
		 * conjunction with the element's transform to determine the element's final visual appearance.
		 * 
		 * @returns The page element's inherent width in points, or <code>null</code> if the page element does
		 *     not have a width.
		 */
		getInherentWidth(): Number
		/**
		 * Returns the element's horizontal position in points, measured from the upper-left corner of the
		 * page when the element has no rotation.
		 * 
		 * @returns This element's horizonal position in points, from the upper-left corner of the page.
		 */
		getLeft(): Number
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> or <code>null</code> if there is no link.
		 * 
		 * <pre class="prettyprint">
		 * var link = shape.getLink();
		 * if (link != null) {
		 *   Logger.log('Shape has a link of type: ' + link.getLinkType());
		 * }
		 * </pre>
		 */
		getLink(): SlidesApp.Link
		/**
		 * Returns the unique ID for this object. Object IDs used by pages and page elements share the
		 * same namespace.
		 * 
		 * @returns The unique ID for this object.
		 */
		getObjectId(): string
		/**
		 * Returns the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
		 * 
		 * @returns The page element's type.
		 */
		getPageElementType(): SlidesApp.PageElementType
		/**
		 * Returns the group this page element belongs to, or <code>null</code> if the element is not in a
		 * group.
		 * 
		 * @returns The group this page element belongs to, or <code>null</code>.
		 */
		getParentGroup(): SlidesApp.Group
		/**
		 * Returns the page this page element is on.
		 * 
		 * @returns The page this element resides on.
		 */
		getParentPage(): SlidesApp.Page
		/**
		 * Returns the parent page element of the placeholder. Returns <code>null</code> if the shape is not a
		 * placeholder or has no parent.
		 * 
		 * @returns The parent page elemnt of this shape placeholder, or <code>null</code> this shape is not a
		 *     placeholder or doesn't have a parent.
		 */
		getParentPlaceholder(): SlidesApp.PageElement
		/**
		 * Returns the placeholder index of the shape. If two or more instances of the same placeholder
		 * types are present in the same page, they each have their own unique index value. Returns <code>null</code> if the shape is not a placeholder.
		 * 
		 * @returns This shape's placeholder index, or <code>null</code> if the shape is not a placeholder.
		 */
		getPlaceholderIndex(): number
		/**
		 * Returns the placeholder type of the shape, or <code>PlaceholderType.NONE</code> if the shape is not
		 * a placeholder.
		 * 
		 * @returns The placeholder type of this shape.
		 */
		getPlaceholderType(): SlidesApp.PlaceholderType
		/**
		 * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
		 * means no rotation.
		 * 
		 * @returns The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).
		 */
		getRotation(): Number
		/**
		 * Returns the type of the shape.
		 * 
		 * @returns The type of this shape.
		 */
		getShapeType(): SlidesApp.ShapeType
		/**
		 * Returns the text content of the shape.
		 * 
		 * <p>Text within a shape always terminates with a newline character.
		 * 
		 * @returns The text content of this shape.
		 */
		getText(): SlidesApp.TextRange
		/**
		 * Returns the page element's title. The title is combined with the description to display and
		 * read alt text.
		 * 
		 * @returns The page element's title.
		 */
		getTitle(): string
		/**
		 * Gets the element's vertical position in points, measured from the upper-left corner of the page
		 * when the element has no rotation.
		 * 
		 * @returns This element's vertical position in points, from the upper-left corner of the page.
		 */
		getTop(): Number
		/**
		 * Returns the page element's transform.
		 * 
		 * <p>The visual appearance of the page element is determined by its absolute transform. To
		 * compute the absolute transform, preconcatenate a page element's transform with the transforms
		 * of all of its parent groups. If the page element is not in a group, its absolute transform is
		 * the same as the value in this field.
		 * 
		 * @returns The page element's transform.
		 */
		getTransform(): SlidesApp.AffineTransform
		/**
		 * Returns the element's width in points, which is the width of the element's bounding box when
		 * the element has no rotation.
		 * 
		 * @returns The page element's inherent width in points, or <code>null</code> if the page element does
		 *     not have a width.
		 */
		getWidth(): Number
		/**
		 * Preconcatenates the provided transform to the existing transform of the page element.
		 * 
		 * <pre class="prettyprint"><code>
		 * newTransform = argument * existingTransform
		 * </code></pre>
		 * 
		 * <p>For example, to move a page elements 36 points to the left:
		 * 
		 * <pre class="prettyprint"><code>
		 * element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
		 *     .setTranslateX(-36.0)
		 *     .build());
		 * </code></pre>
		 * 
		 * <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
		 * 
		 * @param transform - The transform to preconcatenate onto this page element's transform.
		 * 
		 * @returns This page element, for chaining.
		 */
		preconcatenateTransform(
			transform: SlidesApp.AffineTransform
		): SlidesApp.Shape
		/**
		 * Removes the page element.
		 * 
		 * <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
		 * group itself is also removed.
		 * 
		 * <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
		 * are also removed.
		 */
		remove(): void
		/**
		 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>.
		 * 
		 * <pre class="prettyprint">
		 * shape.removeLink();
		 * </pre>
		 */
		removeLink(): void
		/**
		 * Replaces this shape with an image provided by a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code>.
		 * 
		 * <p>The image is fetched from the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once at insertion time and a copy
		 * is stored for display inside the presentation. Images must be less than 50MB in size, cannot
		 * exceed 25 megapixels, and must be in PNG, JPEG, or GIF format.
		 * 
		 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
		 * to the size of the existing shape.
		 * 
		 * <pre class="prettyprint"><code>
		 * var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
		 * // Get the Drive image file with the given ID.
		 * var driveImage = DriveApp.getFileById(fileId);
		 * shape.replaceWithImage(driveImage);
		 * </code></pre>
		 * 
		 * @param blobSource - The image data.
		 * 
		 * @returns The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> that replaced the shape.
		 */
		replaceWithImage(
			blobSource: BlobSource
		): SlidesApp.Image
		/**
		 * Replaces this shape with an image provided by a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code>.
		 * 
		 * <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once and a copy is stored for
		 * display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
		 * megapixels, and must be in either in PNG, JPEG, or GIF format.
		 * 
		 * <pre class="prettyprint"><code>
		 * var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
		 * // Get the Drive image file with the given ID.
		 * var driveImage = DriveApp.getFileById(fileId);
		 * // Replace and crop the replaced image.
		 * shape.replaceWithImage(driveImage, true);
		 * </code></pre>
		 * 
		 * @param blobSource - The image data.
		 * @param crop - If <code>true</code>, crops the image to fit the existing shape's size. Otherwise, the
		 *     image is scaled and centered.
		 * 
		 * @returns The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> that replaced the shape.
		 */
		replaceWithImage(
			blobSource: BlobSource,
			crop: Boolean
		): SlidesApp.Image
		/**
		 * Replaces this shape with an image.
		 * 
		 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
		 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
		 * in either in PNG, JPEG, or GIF format.
		 * 
		 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
		 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
		 * 
		 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
		 * to the size of the existing shape.
		 * 
		 * @param imageUrl - The image URL to download the image from.
		 * 
		 * @returns The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> that replaced the shape.
		 */
		replaceWithImage(
			imageUrl: string
		): SlidesApp.Image
		/**
		 * Replaces this shape with an image.
		 * 
		 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
		 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
		 * in either in PNG, JPEG, or GIF format.
		 * 
		 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
		 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
		 * 
		 * @param imageUrl - The image URL to download the image from.
		 * @param crop - If <code>true</code>, crops the image to fit the existing shape's size. Otherwise, the
		 *     image is scaled and centered.
		 * 
		 * @returns The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> that replaced the shape.
		 */
		replaceWithImage(
			imageUrl: string,
			crop: Boolean
		): SlidesApp.Image

		/**
		 * Replaces this shape with an Google Sheets chart.
		 * 
		 * <p>The chart is linked with the source Google Sheets chart which allows it to be updated. Other
		 * collaborators can see the link to the source spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
		 * var chart = sheet.getCharts()[0];
		 * // Replace the shape with the Sheets chart.
		 * var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
		 * shape.replaceWithSheetsChart(chart);
		 * </code></pre>
		 * 
		 * @param sourceChart - The chart in a spreadsheet that replaces the shape.
		 * 
		 * @returns The chart that replaced the shape.
		 */
		replaceWithSheetsChart(
			sourceChart: SpreadsheetApp.EmbeddedChart
		): SlidesApp.SheetsChart
		/**
		 * Replaces this shape with an image of a Google Sheets chart.
		 * 
		 * <p>In order to maintain the Google Sheets chart's aspect ratio, the chart image is scaled and
		 * centered with respect to the size of the existing shape.
		 * 
		 * <p>The image of the chart is not linked with the source Google Sheets chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
		 * var chart = sheet.getCharts()[0];
		 * // Replace the shape with the Sheets chart as an image.
		 * var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
		 * shape.replaceWithSheetsChartAsImage(chart);
		 * </code></pre>
		 * 
		 * @param sourceChart - The chart in a spreadsheet that replaces the shape.
		 * 
		 * @returns The image of the chart that replaced the shape.
		 */
		replaceWithSheetsChartAsImage(
			sourceChart: SpreadsheetApp.EmbeddedChart
		): SlidesApp.Image
		/**
		 * Scales the element's height by the specified ratio. The element's height is the height of its
		 * bounding box when the element has no rotation.
		 * 
		 * @param ratio - The ratio to scale this page element's height by.
		 * 
		 * @returns This page element, for chaining.
		 */
		scaleHeight(
			ratio: Number
		): SlidesApp.Shape
		/**
		 * Scales the element's width by the specified ratio. The element's width is the width of its
		 * bounding box when the element has no rotation.
		 * 
		 * @param ratio - The ratio to scale this page element's width by.
		 * 
		 * @returns This page element, for chaining.
		 */
		scaleWidth(
			ratio: Number
		): SlidesApp.Shape
		/**
		 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
		 * selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var pageElement = slide.getPageElements()[0];
		 * // Only select this page element and replace any previous selection.
		 * pageElement.select();
		 * </code></pre>
		 */
		select(): void
		/**
		 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>Pass <code>true</code> to this method to select only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and remove any
		 * previous selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 * 
		 * <p>Pass <code>false</code> to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code>
		 * objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.
		 * 
		 * <p>The following conditions must be met while selecting a page element using a <code>false</code>
		 * parameter:
		 * 
		 * <ol>
		 *   <li>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 *   <li>There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected.
		 * </ol>
		 * 
		 * <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
		 * first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * // First select the slide page, as the current page selection.
		 * slide.selectAsCurrentPage();
		 * // Then select all the page elements in the selected slide page.
		 * var pageElements = slide.getPageElements();
		 * for (var i = 0; i &lt; pageElements.length; i++) {
		 *   pageElements[i].select(false);
		 * }
		 * </code></pre>
		 * 
		 * @param replace - If <code>true</code>, the selection replaces any previous selection; otherwise the
		 *     selection is added to any previous selection.
		 */
		select(
			replace: Boolean
		): void

		/**
		 * Sends the page element backward on the page by one element.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		sendBackward(): SlidesApp.Shape
		/**
		 * Sends the page element to the back of the page.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		sendToBack(): SlidesApp.Shape
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/content-alignment.html'>ContentAlignment</a></code> of the text in the shape.
		 * 
		 * @param contentAlignment - The alignment to set.
		 * 
		 * @returns This shape, for chaining.
		 */
		setContentAlignment(
			contentAlignment: SlidesApp.ContentAlignment
		): SlidesApp.Shape
		/**
		 * Sets the page element's alt text description.
		 * 
		 * <p>The method is not supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the first page element&#39;s alt text description to &quot;new alt text description&quot;.
		 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
		 * pageElement.setDescription(&#39;new alt text description&#39;);
		 * Logger.log(pageElement.getDescription());
		 * </code></pre>
		 * 
		 * @param description - The string to set the alt text description to.
		 * 
		 * @returns This page element.
		 */
		setDescription(
			description: string
		): SlidesApp.Shape
		/**
		 * Sets the element's height in points, which is the height of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @param height - The new height of this page element to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setHeight(
			height: Number
		): SlidesApp.Shape
		/**
		 * Sets the element's horizontal position in points, measured from the upper-left corner of the
		 * page when the element has no rotation.
		 * 
		 * @param left - The new horizontal position to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setLeft(
			left: Number
		): SlidesApp.Shape
		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the zero-based index of the slide.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the first slide of the presentation.
		 * shape.setLinkSlide(0);
		 * </pre>
		 * 
		 * @param slideIndex - The zero-based index to the slide.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkSlide(
			slideIndex: number
		): SlidesApp.Link
		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code>, the link is set by the given slide ID.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the first slide of the presentation.
		 * var slide = presentation.getSlides()[0];
		 * shape.setLinkSlide(slide);
		 * </pre>
		 * 
		 * @param slide - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to be linked.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkSlide(
			slide: SlidesApp.Slide
		): SlidesApp.Link
		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the relative position of the slide.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the first slide of the presentation.
		 * shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
		 * </pre>
		 * 
		 * @param slidePosition - The relative <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code>.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkSlide(
			slidePosition: SlidesApp.SlidePosition
		): SlidesApp.Link

		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given non-empty URL string.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the URL.
		 * shape.setLinkUrl("https://slides.google.com");
		 * </pre>
		 * 
		 * @param url - The URL string.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkUrl(
			url: string
		): SlidesApp.Link
		/**
		 * Sets the element's clockwise rotation angle around its center in degrees.
		 * 
		 * @param angle - The new clockwise rotation angle to set, in degrees.
		 * 
		 * @returns This page element, for chaining.
		 */
		setRotation(
			angle: Number
		): SlidesApp.Shape
		/**
		 * Sets the page element's alt text title.
		 * 
		 * <p>The method is not supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the first page element&#39;s alt text title to &quot;new alt text title&quot;.
		 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
		 * pageElement.setTitle(&#39;new alt text title&#39;);
		 * Logger.log(pageElement.getTitle());
		 * </code></pre>
		 * 
		 * @param title - The string to set the alt text title to.
		 * 
		 * @returns This page element.
		 */
		setTitle(
			title: string
		): SlidesApp.Shape
		/**
		 * Sets the element's vertical position in points, measured from the upper-left corner of the page
		 * when the element has no rotation.
		 * 
		 * @param top - The new vertical position to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setTop(
			top: Number
		): SlidesApp.Shape
		/**
		 * Sets the transform of the page element with the provided transform.
		 * 
		 * <p>Updating the transform of a group changes the absolute transform of the page elements in
		 * that group, which can change their visual appearance.
		 * 
		 * <p>Updating the transform of a page element that is in a group only changes the transform of
		 * that page element; it doesn't affect the transforms of the group or other page elements in the
		 * group.
		 * 
		 * <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html#getTransform()'>getTransform()</a></code>.
		 * 
		 * @param transform - The transform that is set for this page element.
		 * 
		 * @returns This element, for chaining.
		 */
		setTransform(
			transform: SlidesApp.AffineTransform
		): SlidesApp.Shape
		/**
		 * Sets the element's width in points, which is the width of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @param width - The new width of this page element to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setWidth(
			width: Number
		): SlidesApp.Shape

	}

	enum ShapeType {
		/**
		 * Curved arc shape. Corresponds to ECMA-376 ST_ShapeType 'arc'.
		 */
		ARC = "ARC",
		/**
		 * East arrow shape.
		 */
		ARROW_EAST = "ARROW_EAST",
		/**
		 * North arrow shape.
		 */
		ARROW_NORTH = "ARROW_NORTH",
		/**
		 * Northeast arrow shape.
		 */
		ARROW_NORTH_EAST = "ARROW_NORTH_EAST",
		/**
		 * Bent arrow shape. Corresponds to ECMA-376 ST_ShapeType 'bentArrow'.
		 */
		BENT_ARROW = "BENT_ARROW",
		/**
		 * Bent up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'bentUpArrow'.
		 */
		BENT_UP_ARROW = "BENT_UP_ARROW",
		/**
		 * Bevel shape. Corresponds to ECMA-376 ST_ShapeType 'bevel'.
		 */
		BEVEL = "BEVEL",
		/**
		 * Block arc shape. Corresponds to ECMA-376 ST_ShapeType 'blockArc'.
		 */
		BLOCK_ARC = "BLOCK_ARC",
		/**
		 * Brace pair shape. Corresponds to ECMA-376 ST_ShapeType 'bracePair'.
		 */
		BRACE_PAIR = "BRACE_PAIR",
		/**
		 * Bracket pair shape. Corresponds to ECMA-376 ST_ShapeType 'bracketPair'.
		 */
		BRACKET_PAIR = "BRACKET_PAIR",
		/**
		 * Can shape. Corresponds to ECMA-376 ST_ShapeType 'can'.
		 */
		CAN = "CAN",
		/**
		 * Chevron shape. Corresponds to ECMA-376 ST_ShapeType 'chevron'.
		 */
		CHEVRON = "CHEVRON",
		/**
		 * Chord shape. Corresponds to ECMA-376 ST_ShapeType 'chord'.
		 */
		CHORD = "CHORD",
		/**
		 * Cloud shape. Corresponds to ECMA-376 ST_ShapeType 'cloud'.
		 */
		CLOUD = "CLOUD",
		/**
		 * Callout cloud shape. Corresponds to ECMA-376 ST_ShapeType 'cloudCallout'.
		 */
		CLOUD_CALLOUT = "CLOUD_CALLOUT",
		/**
		 * Corner shape. Corresponds to ECMA-376 ST_ShapeType 'corner'.
		 */
		CORNER = "CORNER",
		/**
		 * Cube shape. Corresponds to ECMA-376 ST_ShapeType 'cube'.
		 */
		CUBE = "CUBE",
		/**
		 * Curved down arrow shape. Corresponds to ECMA-376 ST_ShapeType 'curvedDownArrow'.
		 */
		CURVED_DOWN_ARROW = "CURVED_DOWN_ARROW",
		/**
		 * Curved left arrow shape. Corresponds to ECMA-376 ST_ShapeType 'curvedLeftArrow'.
		 */
		CURVED_LEFT_ARROW = "CURVED_LEFT_ARROW",
		/**
		 * Curved right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'curvedRightArrow'.
		 */
		CURVED_RIGHT_ARROW = "CURVED_RIGHT_ARROW",
		/**
		 * Curved up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'curvedUpArrow'.
		 */
		CURVED_UP_ARROW = "CURVED_UP_ARROW",
		/**
		 * Custom shape.
		 */
		CUSTOM = "CUSTOM",
		/**
		 * Decagon shape. Corresponds to ECMA-376 ST_ShapeType 'decagon'.
		 */
		DECAGON = "DECAGON",
		/**
		 * Diagonal stripe shape. Corresponds to ECMA-376 ST_ShapeType 'diagStripe'.
		 */
		DIAGONAL_STRIPE = "DIAGONAL_STRIPE",
		/**
		 * Diamond shape. Corresponds to ECMA-376 ST_ShapeType 'diamond'.
		 */
		DIAMOND = "DIAMOND",
		/**
		 * Dodecagon shape. Corresponds to ECMA-376 ST_ShapeType 'dodecagon'.
		 */
		DODECAGON = "DODECAGON",
		/**
		 * Donut shape. Corresponds to ECMA-376 ST_ShapeType 'donut'.
		 */
		DONUT = "DONUT",
		/**
		 * Double wave shape. Corresponds to ECMA-376 ST_ShapeType 'doubleWave'.
		 */
		DOUBLE_WAVE = "DOUBLE_WAVE",
		/**
		 * Down arrow shape. Corresponds to ECMA-376 ST_ShapeType 'downArrow'.
		 */
		DOWN_ARROW = "DOWN_ARROW",
		/**
		 * Callout down arrow shape. Corresponds to ECMA-376 ST_ShapeType 'downArrowCallout'.
		 */
		DOWN_ARROW_CALLOUT = "DOWN_ARROW_CALLOUT",
		/**
		 * Ellipse shape. Corresponds to ECMA-376 ST_ShapeType 'ellipse'.
		 */
		ELLIPSE = "ELLIPSE",
		/**
		 * Ellipse ribbon shape. Corresponds to ECMA-376 ST_ShapeType 'ellipseRibbon'.
		 */
		ELLIPSE_RIBBON = "ELLIPSE_RIBBON",
		/**
		 * Ellipse ribbon 2 shape. Corresponds to ECMA-376 ST_ShapeType 'ellipseRibbon2'.
		 */
		ELLIPSE_RIBBON_2 = "ELLIPSE_RIBBON_2",
		/**
		 * Alternate process flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartAlternateProcess'.
		 */
		FLOW_CHART_ALTERNATE_PROCESS = "FLOW_CHART_ALTERNATE_PROCESS",
		/**
		 * Collate flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartCollate'.
		 */
		FLOW_CHART_COLLATE = "FLOW_CHART_COLLATE",
		/**
		 * Connector flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartConnector'.
		 */
		FLOW_CHART_CONNECTOR = "FLOW_CHART_CONNECTOR",
		/**
		 * Decision flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartDecision'.
		 */
		FLOW_CHART_DECISION = "FLOW_CHART_DECISION",
		/**
		 * Delay flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartDelay'.
		 */
		FLOW_CHART_DELAY = "FLOW_CHART_DELAY",
		/**
		 * Display flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartDisplay'.
		 */
		FLOW_CHART_DISPLAY = "FLOW_CHART_DISPLAY",
		/**
		 * Document flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartDocument'.
		 */
		FLOW_CHART_DOCUMENT = "FLOW_CHART_DOCUMENT",
		/**
		 * Extract flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartExtract'.
		 */
		FLOW_CHART_EXTRACT = "FLOW_CHART_EXTRACT",
		/**
		 * Input output flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartInputOutput'.
		 */
		FLOW_CHART_INPUT_OUTPUT = "FLOW_CHART_INPUT_OUTPUT",
		/**
		 * Internal storage flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartInternalStorage'.
		 */
		FLOW_CHART_INTERNAL_STORAGE = "FLOW_CHART_INTERNAL_STORAGE",
		/**
		 * Magnetic disk flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMagneticDisk'.
		 */
		FLOW_CHART_MAGNETIC_DISK = "FLOW_CHART_MAGNETIC_DISK",
		/**
		 * Magnetic drum flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMagneticDrum'.
		 */
		FLOW_CHART_MAGNETIC_DRUM = "FLOW_CHART_MAGNETIC_DRUM",
		/**
		 * Magnetic tape flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMagneticTape'.
		 */
		FLOW_CHART_MAGNETIC_TAPE = "FLOW_CHART_MAGNETIC_TAPE",
		/**
		 * Manual input flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartManualInput'.
		 */
		FLOW_CHART_MANUAL_INPUT = "FLOW_CHART_MANUAL_INPUT",
		/**
		 * Manual operation flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartManualOperation'.
		 */
		FLOW_CHART_MANUAL_OPERATION = "FLOW_CHART_MANUAL_OPERATION",
		/**
		 * Merge flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMerge'.
		 */
		FLOW_CHART_MERGE = "FLOW_CHART_MERGE",
		/**
		 * Multi-document flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMultidocument'.
		 */
		FLOW_CHART_MULTIDOCUMENT = "FLOW_CHART_MULTIDOCUMENT",
		/**
		 * Offline storage flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartOfflineStorage'.
		 */
		FLOW_CHART_OFFLINE_STORAGE = "FLOW_CHART_OFFLINE_STORAGE",
		/**
		 * Off-page connector flow shape. Corresponds to ECMA-376 ST_ShapeType
		 * 'flowChartOffpageConnector'.
		 */
		FLOW_CHART_OFFPAGE_CONNECTOR = "FLOW_CHART_OFFPAGE_CONNECTOR",
		/**
		 * Online storage flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartOnlineStorage'.
		 */
		FLOW_CHART_ONLINE_STORAGE = "FLOW_CHART_ONLINE_STORAGE",
		/**
		 * Or flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartOr'.
		 */
		FLOW_CHART_OR = "FLOW_CHART_OR",
		/**
		 * Predefined process flow shape. Corresponds to ECMA-376 ST_ShapeType
		 * 'flowChartPredefinedProcess'.
		 */
		FLOW_CHART_PREDEFINED_PROCESS = "FLOW_CHART_PREDEFINED_PROCESS",
		/**
		 * Preparation flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartPreparation'.
		 */
		FLOW_CHART_PREPARATION = "FLOW_CHART_PREPARATION",
		/**
		 * Process flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartProcess'.
		 */
		FLOW_CHART_PROCESS = "FLOW_CHART_PROCESS",
		/**
		 * Punched card flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartPunchedCard'.
		 */
		FLOW_CHART_PUNCHED_CARD = "FLOW_CHART_PUNCHED_CARD",
		/**
		 * Punched tape flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartPunchedTape'.
		 */
		FLOW_CHART_PUNCHED_TAPE = "FLOW_CHART_PUNCHED_TAPE",
		/**
		 * Sort flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartSort'.
		 */
		FLOW_CHART_SORT = "FLOW_CHART_SORT",
		/**
		 * Summing junction flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartSummingJunction'.
		 */
		FLOW_CHART_SUMMING_JUNCTION = "FLOW_CHART_SUMMING_JUNCTION",
		/**
		 * Terminator flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartTerminator'.
		 */
		FLOW_CHART_TERMINATOR = "FLOW_CHART_TERMINATOR",
		/**
		 * Folded corner shape. Corresponds to ECMA-376 ST_ShapeType 'foldedCorner'.
		 */
		FOLDED_CORNER = "FOLDED_CORNER",
		/**
		 * Frame shape. Corresponds to ECMA-376 ST_ShapeType 'frame'.
		 */
		FRAME = "FRAME",
		/**
		 * Half frame shape. Corresponds to ECMA-376 ST_ShapeType 'halfFrame'.
		 */
		HALF_FRAME = "HALF_FRAME",
		/**
		 * Heart shape. Corresponds to ECMA-376 ST_ShapeType 'heart'.
		 */
		HEART = "HEART",
		/**
		 * Heptagon shape. Corresponds to ECMA-376 ST_ShapeType 'heptagon'.
		 */
		HEPTAGON = "HEPTAGON",
		/**
		 * Hexagon shape. Corresponds to ECMA-376 ST_ShapeType 'hexagon'.
		 */
		HEXAGON = "HEXAGON",
		/**
		 * Home plate shape. Corresponds to ECMA-376 ST_ShapeType 'homePlate'.
		 */
		HOME_PLATE = "HOME_PLATE",
		/**
		 * Horizontal scroll shape. Corresponds to ECMA-376 ST_ShapeType 'horizontalScroll'.
		 */
		HORIZONTAL_SCROLL = "HORIZONTAL_SCROLL",
		/**
		 * Irregular seal 1 shape. Corresponds to ECMA-376 ST_ShapeType 'irregularSeal1'.
		 */
		IRREGULAR_SEAL_1 = "IRREGULAR_SEAL_1",
		/**
		 * Irregular seal 2 shape. Corresponds to ECMA-376 ST_ShapeType 'irregularSeal2'.
		 */
		IRREGULAR_SEAL_2 = "IRREGULAR_SEAL_2",
		/**
		 * Left arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftArrow'.
		 */
		LEFT_ARROW = "LEFT_ARROW",
		/**
		 * Callout left arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftArrowCallout'.
		 */
		LEFT_ARROW_CALLOUT = "LEFT_ARROW_CALLOUT",
		/**
		 * Left brace shape. Corresponds to ECMA-376 ST_ShapeType 'leftBrace'.
		 */
		LEFT_BRACE = "LEFT_BRACE",
		/**
		 * Left bracket shape. Corresponds to ECMA-376 ST_ShapeType 'leftBracket'.
		 */
		LEFT_BRACKET = "LEFT_BRACKET",
		/**
		 * Left right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftRightArrow'.
		 */
		LEFT_RIGHT_ARROW = "LEFT_RIGHT_ARROW",
		/**
		 * Callout left right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftRightArrowCallout'.
		 */
		LEFT_RIGHT_ARROW_CALLOUT = "LEFT_RIGHT_ARROW_CALLOUT",
		/**
		 * Left right up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftRightUpArrow'.
		 */
		LEFT_RIGHT_UP_ARROW = "LEFT_RIGHT_UP_ARROW",
		/**
		 * Left up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftUpArrow'.
		 */
		LEFT_UP_ARROW = "LEFT_UP_ARROW",
		/**
		 * Lightning bolt shape. Corresponds to ECMA-376 ST_ShapeType 'lightningBolt'.
		 */
		LIGHTNING_BOLT = "LIGHTNING_BOLT",
		/**
		 * Divide math shape. Corresponds to ECMA-376 ST_ShapeType 'mathDivide'.
		 */
		MATH_DIVIDE = "MATH_DIVIDE",
		/**
		 * Equal math shape. Corresponds to ECMA-376 ST_ShapeType 'mathEqual'.
		 */
		MATH_EQUAL = "MATH_EQUAL",
		/**
		 * Minus math shape. Corresponds to ECMA-376 ST_ShapeType 'mathMinus'.
		 */
		MATH_MINUS = "MATH_MINUS",
		/**
		 * Multiply math shape. Corresponds to ECMA-376 ST_ShapeType 'mathMultiply'.
		 */
		MATH_MULTIPLY = "MATH_MULTIPLY",
		/**
		 * Not equal math shape. Corresponds to ECMA-376 ST_ShapeType 'mathNotEqual'.
		 */
		MATH_NOT_EQUAL = "MATH_NOT_EQUAL",
		/**
		 * Plus math shape. Corresponds to ECMA-376 ST_ShapeType 'mathPlus'.
		 */
		MATH_PLUS = "MATH_PLUS",
		/**
		 * Moon shape. Corresponds to ECMA-376 ST_ShapeType 'moon'.
		 */
		MOON = "MOON",
		/**
		 * Notched right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'notchedRightArrow'.
		 */
		NOTCHED_RIGHT_ARROW = "NOTCHED_RIGHT_ARROW",
		/**
		 * No smoking shape. Corresponds to ECMA-376 ST_ShapeType 'noSmoking'.
		 */
		NO_SMOKING = "NO_SMOKING",
		/**
		 * Octagon shape. Corresponds to ECMA-376 ST_ShapeType 'octagon'.
		 */
		OCTAGON = "OCTAGON",
		/**
		 * Parallelogram shape. Corresponds to ECMA-376 ST_ShapeType 'parallelogram'.
		 */
		PARALLELOGRAM = "PARALLELOGRAM",
		/**
		 * Pentagon shape. Corresponds to ECMA-376 ST_ShapeType 'pentagon'.
		 */
		PENTAGON = "PENTAGON",
		/**
		 * Pie shape. Corresponds to ECMA-376 ST_ShapeType 'pie'.
		 */
		PIE = "PIE",
		/**
		 * Plaque shape. Corresponds to ECMA-376 ST_ShapeType 'plaque'.
		 */
		PLAQUE = "PLAQUE",
		/**
		 * Plus shape. Corresponds to ECMA-376 ST_ShapeType 'plus'.
		 */
		PLUS = "PLUS",
		/**
		 * Quad-arrow shape. Corresponds to ECMA-376 ST_ShapeType 'quadArrow'.
		 */
		QUAD_ARROW = "QUAD_ARROW",
		/**
		 * Callout quad-arrow shape. Corresponds to ECMA-376 ST_ShapeType 'quadArrowCallout'.
		 */
		QUAD_ARROW_CALLOUT = "QUAD_ARROW_CALLOUT",
		/**
		 * Rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'rect'.
		 */
		RECTANGLE = "RECTANGLE",
		/**
		 * Ribbon shape. Corresponds to ECMA-376 ST_ShapeType 'ribbon'.
		 */
		RIBBON = "RIBBON",
		/**
		 * Ribbon 2 shape. Corresponds to ECMA-376 ST_ShapeType 'ribbon2'.
		 */
		RIBBON_2 = "RIBBON_2",
		/**
		 * Right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'rightArrow'.
		 */
		RIGHT_ARROW = "RIGHT_ARROW",
		/**
		 * Callout right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'rightArrowCallout'.
		 */
		RIGHT_ARROW_CALLOUT = "RIGHT_ARROW_CALLOUT",
		/**
		 * Right brace shape. Corresponds to ECMA-376 ST_ShapeType 'rightBrace'.
		 */
		RIGHT_BRACE = "RIGHT_BRACE",
		/**
		 * Right bracket shape. Corresponds to ECMA-376 ST_ShapeType 'rightBracket'.
		 */
		RIGHT_BRACKET = "RIGHT_BRACKET",
		/**
		 * Right triangle shape. Corresponds to ECMA-376 ST_ShapeType 'rtTriangle'.
		 */
		RIGHT_TRIANGLE = "RIGHT_TRIANGLE",
		/**
		 * One round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'round1Rect'.
		 */
		ROUND_1_RECTANGLE = "ROUND_1_RECTANGLE",
		/**
		 * Two diagonal round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
		 * 'round2DiagRect'.
		 */
		ROUND_2_DIAGONAL_RECTANGLE = "ROUND_2_DIAGONAL_RECTANGLE",
		/**
		 * Two same-side round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
		 * 'round2SameRect'.
		 */
		ROUND_2_SAME_RECTANGLE = "ROUND_2_SAME_RECTANGLE",
		/**
		 * Round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'roundRect'.
		 */
		ROUND_RECTANGLE = "ROUND_RECTANGLE",
		/**
		 * Smiley face shape. Corresponds to ECMA-376 ST_ShapeType 'smileyFace'.
		 */
		SMILEY_FACE = "SMILEY_FACE",
		/**
		 * One snip corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'snip1Rect'.
		 */
		SNIP_1_RECTANGLE = "SNIP_1_RECTANGLE",
		/**
		 * Two diagonal snip corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'snip2DiagRect'.
		 */
		SNIP_2_DIAGONAL_RECTANGLE = "SNIP_2_DIAGONAL_RECTANGLE",
		/**
		 * Two same-side snip corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
		 * 'snip2SameRect'.
		 */
		SNIP_2_SAME_RECTANGLE = "SNIP_2_SAME_RECTANGLE",
		/**
		 * One snip one round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
		 * 'snipRoundRect'.
		 */
		SNIP_ROUND_RECTANGLE = "SNIP_ROUND_RECTANGLE",
		/**
		 * Speech shape.
		 */
		SPEECH = "SPEECH",
		/**
		 * Star burst shape.
		 */
		STARBURST = "STARBURST",
		/**
		 * Ten pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star10'.
		 */
		STAR_10 = "STAR_10",
		/**
		 * Twelve pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star12'.
		 */
		STAR_12 = "STAR_12",
		/**
		 * Sixteen pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star16'.
		 */
		STAR_16 = "STAR_16",
		/**
		 * Twenty four pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star24'.
		 */
		STAR_24 = "STAR_24",
		/**
		 * Thirty two pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star32'.
		 */
		STAR_32 = "STAR_32",
		/**
		 * Four pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star4'.
		 */
		STAR_4 = "STAR_4",
		/**
		 * Five pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star5'.
		 */
		STAR_5 = "STAR_5",
		/**
		 * Six pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star6'.
		 */
		STAR_6 = "STAR_6",
		/**
		 * Seven pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star7'.
		 */
		STAR_7 = "STAR_7",
		/**
		 * Eight pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star8'.
		 */
		STAR_8 = "STAR_8",
		/**
		 * Striped right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'stripedRightArrow'.
		 */
		STRIPED_RIGHT_ARROW = "STRIPED_RIGHT_ARROW",
		/**
		 * Sun shape. Corresponds to ECMA-376 ST_ShapeType 'sun'.
		 */
		SUN = "SUN",
		/**
		 * Teardrop shape. Corresponds to ECMA-376 ST_ShapeType 'teardrop'.
		 */
		TEARDROP = "TEARDROP",
		/**
		 * Text box shape.
		 */
		TEXT_BOX = "TEXT_BOX",
		/**
		 * Trapezoid shape. Corresponds to ECMA-376 ST_ShapeType 'trapezoid'.
		 */
		TRAPEZOID = "TRAPEZOID",
		/**
		 * Triangle shape. Corresponds to ECMA-376 ST_ShapeType 'triangle'.
		 */
		TRIANGLE = "TRIANGLE",
		/**
		 * A shape type that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
		/**
		 * Up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'upArrow'.
		 */
		UP_ARROW = "UP_ARROW",
		/**
		 * Callout up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'upArrowCallout'.
		 */
		UP_ARROW_CALLOUT = "UP_ARROW_CALLOUT",
		/**
		 * Up down arrow shape. Corresponds to ECMA-376 ST_ShapeType 'upDownArrow'.
		 */
		UP_DOWN_ARROW = "UP_DOWN_ARROW",
		/**
		 * U-turn arrow shape. Corresponds to ECMA-376 ST_ShapeType 'uturnArrow'.
		 */
		UTURN_ARROW = "UTURN_ARROW",
		/**
		 * Vertical scroll shape. Corresponds to ECMA-376 ST_ShapeType 'verticalScroll'.
		 */
		VERTICAL_SCROLL = "VERTICAL_SCROLL",
		/**
		 * Wave shape. Corresponds to ECMA-376 ST_ShapeType 'wave'.
		 */
		WAVE = "WAVE",
		/**
		 * Callout wedge ellipse shape. Corresponds to ECMA-376 ST_ShapeType 'wedgeEllipseCallout'.
		 */
		WEDGE_ELLIPSE_CALLOUT = "WEDGE_ELLIPSE_CALLOUT",
		/**
		 * Callout wedge rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'wedgeRectCallout'.
		 */
		WEDGE_RECTANGLE_CALLOUT = "WEDGE_RECTANGLE_CALLOUT",
		/**
		 * Callout wedge round rectangle shape. Corresponds to ECMA-376 ST_ShapeType
		 * 'wedgeRoundRectCallout'.
		 */
		WEDGE_ROUND_RECTANGLE_CALLOUT = "WEDGE_ROUND_RECTANGLE_CALLOUT",
	}

	class SheetsChart {
		private constructor();

		/**
		 * Aligns the element to the specified alignment position on the page.
		 * 
		 * @param alignmentPosition - The position to align this page element to on the page.
		 * 
		 * @returns This page element, for chaining.
		 */
		alignOnPage(
			alignmentPosition: SlidesApp.AlignmentPosition
		): SlidesApp.SheetsChart
		/**
		 * Returns the chart as an image or <code>null</code> if the chart is not an embedded image.
		 * 
		 * @returns This chart as an image, or <code>null</code> if the chart is not an embedded image.
		 */
		asImage(): SlidesApp.Image
		/**
		 * Brings the page element forward on the page by one element.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		bringForward(): SlidesApp.SheetsChart
		/**
		 * Brings the page element to the front of the page.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		bringToFront(): SlidesApp.SheetsChart
		/**
		 * Duplicates the page element.
		 * 
		 * <p>The duplicate page element is placed on the same page at the same position as the original.
		 * 
		 * @returns The new duplicate of this page element.
		 */
		duplicate(): SlidesApp.PageElement
		/**
		 * Gets the ID of the specific chart in the Google Sheets spreadsheet that is embedded.
		 * 
		 * @returns The ID of the embedded chart.
		 */
		getChartId(): number
		/**
		 * Returns the list of <code>ConnectionSite</code>s on the page element, or an empty list if the page
		 * element does not have any connection sites.
		 * 
		 * @returns The connection sites list, which may be empty if this element has no connection sites.
		 */
		getConnectionSites(): SlidesApp.ConnectionSite[]
		/**
		 * Returns the page element's description. The description is combined with the title to display
		 * and read alt text.
		 * 
		 * @returns The page element's description.
		 */
		getDescription(): string
		/**
		 * Returns the embed type of the Sheets chart.
		 * 
		 * @returns The embed type of this chart.
		 */
		getEmbedType(): SlidesApp.SheetsChartEmbedType
		/**
		 * Gets the element's height in points, which is the height of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @returns The page element's inherent height in points, or <code>null</code> if the page element does
		 *     not have a height.
		 */
		getHeight(): Number
		/**
		 * Returns the element's inherent height in points.
		 * 
		 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
		 * conjunction with the element's transform to determine the element's final visual appearance.
		 * 
		 * @returns The page element's inherent height in points, or <code>null</code> if the page element does
		 *     not have a height.
		 */
		getInherentHeight(): Number
		/**
		 * Returns the element's inherent width in points.
		 * 
		 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
		 * conjunction with the element's transform to determine the element's final visual appearance.
		 * 
		 * @returns The page element's inherent width in points, or <code>null</code> if the page element does
		 *     not have a width.
		 */
		getInherentWidth(): Number
		/**
		 * Returns the element's horizontal position in points, measured from the upper-left corner of the
		 * page when the element has no rotation.
		 * 
		 * @returns This element's horizonal position in points, from the upper-left corner of the page.
		 */
		getLeft(): Number
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> or <code>null</code> if there is no link.
		 * 
		 * <pre class="prettyprint">
		 * var link = shape.getLink();
		 * if (link != null) {
		 *   Logger.log('Shape has a link of type: ' + link.getLinkType());
		 * }
		 * </pre>
		 */
		getLink(): SlidesApp.Link
		/**
		 * Returns the unique ID for this object. Object IDs used by pages and page elements share the
		 * same namespace.
		 * 
		 * @returns The unique ID for this object.
		 */
		getObjectId(): string
		/**
		 * Returns the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
		 * 
		 * @returns The page element's type.
		 */
		getPageElementType(): SlidesApp.PageElementType
		/**
		 * Returns the group this page element belongs to, or <code>null</code> if the element is not in a
		 * group.
		 * 
		 * @returns The group this page element belongs to, or <code>null</code>.
		 */
		getParentGroup(): SlidesApp.Group
		/**
		 * Returns the page this page element is on.
		 * 
		 * @returns The page this element resides on.
		 */
		getParentPage(): SlidesApp.Page
		/**
		 * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
		 * means no rotation.
		 * 
		 * @returns The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).
		 */
		getRotation(): Number
		/**
		 * Gets the ID of the Google Sheets spreadsheet that contains the source chart.
		 * 
		 * @returns The ID of the spreadsheet that contains the source chart.
		 */
		getSpreadsheetId(): string
		/**
		 * Returns the page element's title. The title is combined with the description to display and
		 * read alt text.
		 * 
		 * @returns The page element's title.
		 */
		getTitle(): string
		/**
		 * Gets the element's vertical position in points, measured from the upper-left corner of the page
		 * when the element has no rotation.
		 * 
		 * @returns This element's vertical position in points, from the upper-left corner of the page.
		 */
		getTop(): Number
		/**
		 * Returns the page element's transform.
		 * 
		 * <p>The visual appearance of the page element is determined by its absolute transform. To
		 * compute the absolute transform, preconcatenate a page element's transform with the transforms
		 * of all of its parent groups. If the page element is not in a group, its absolute transform is
		 * the same as the value in this field.
		 * 
		 * @returns The page element's transform.
		 */
		getTransform(): SlidesApp.AffineTransform
		/**
		 * Returns the element's width in points, which is the width of the element's bounding box when
		 * the element has no rotation.
		 * 
		 * @returns The page element's inherent width in points, or <code>null</code> if the page element does
		 *     not have a width.
		 */
		getWidth(): Number
		/**
		 * Preconcatenates the provided transform to the existing transform of the page element.
		 * 
		 * <pre class="prettyprint"><code>
		 * newTransform = argument * existingTransform
		 * </code></pre>
		 * 
		 * <p>For example, to move a page elements 36 points to the left:
		 * 
		 * <pre class="prettyprint"><code>
		 * element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
		 *     .setTranslateX(-36.0)
		 *     .build());
		 * </code></pre>
		 * 
		 * <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
		 * 
		 * @param transform - The transform to preconcatenate onto this page element's transform.
		 * 
		 * @returns This page element, for chaining.
		 */
		preconcatenateTransform(
			transform: SlidesApp.AffineTransform
		): SlidesApp.SheetsChart
		/**
		 * Refreshes the chart by replacing it with the latest version of the chart from Google Sheets. If
		 * the chart is already up to date, does not make any change to the chart in the presentation.
		 */
		refresh(): void
		/**
		 * Removes the page element.
		 * 
		 * <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
		 * group itself is also removed.
		 * 
		 * <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
		 * are also removed.
		 */
		remove(): void
		/**
		 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>.
		 * 
		 * <pre class="prettyprint">
		 * shape.removeLink();
		 * </pre>
		 */
		removeLink(): void
		/**
		 * Scales the element's height by the specified ratio. The element's height is the height of its
		 * bounding box when the element has no rotation.
		 * 
		 * @param ratio - The ratio to scale this page element's height by.
		 * 
		 * @returns This page element, for chaining.
		 */
		scaleHeight(
			ratio: Number
		): SlidesApp.SheetsChart
		/**
		 * Scales the element's width by the specified ratio. The element's width is the width of its
		 * bounding box when the element has no rotation.
		 * 
		 * @param ratio - The ratio to scale this page element's width by.
		 * 
		 * @returns This page element, for chaining.
		 */
		scaleWidth(
			ratio: Number
		): SlidesApp.SheetsChart
		/**
		 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
		 * selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var pageElement = slide.getPageElements()[0];
		 * // Only select this page element and replace any previous selection.
		 * pageElement.select();
		 * </code></pre>
		 */
		select(): void
		/**
		 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>Pass <code>true</code> to this method to select only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and remove any
		 * previous selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 * 
		 * <p>Pass <code>false</code> to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code>
		 * objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.
		 * 
		 * <p>The following conditions must be met while selecting a page element using a <code>false</code>
		 * parameter:
		 * 
		 * <ol>
		 *   <li>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 *   <li>There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected.
		 * </ol>
		 * 
		 * <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
		 * first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * // First select the slide page, as the current page selection.
		 * slide.selectAsCurrentPage();
		 * // Then select all the page elements in the selected slide page.
		 * var pageElements = slide.getPageElements();
		 * for (var i = 0; i &lt; pageElements.length; i++) {
		 *   pageElements[i].select(false);
		 * }
		 * </code></pre>
		 * 
		 * @param replace - If <code>true</code>, the selection replaces any previous selection; otherwise the
		 *     selection is added to any previous selection.
		 */
		select(
			replace: Boolean
		): void

		/**
		 * Sends the page element backward on the page by one element.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		sendBackward(): SlidesApp.SheetsChart
		/**
		 * Sends the page element to the back of the page.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		sendToBack(): SlidesApp.SheetsChart
		/**
		 * Sets the page element's alt text description.
		 * 
		 * <p>The method is not supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the first page element&#39;s alt text description to &quot;new alt text description&quot;.
		 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
		 * pageElement.setDescription(&#39;new alt text description&#39;);
		 * Logger.log(pageElement.getDescription());
		 * </code></pre>
		 * 
		 * @param description - The string to set the alt text description to.
		 * 
		 * @returns This page element.
		 */
		setDescription(
			description: string
		): SlidesApp.SheetsChart
		/**
		 * Sets the element's height in points, which is the height of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @param height - The new height of this page element to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setHeight(
			height: Number
		): SlidesApp.SheetsChart
		/**
		 * Sets the element's horizontal position in points, measured from the upper-left corner of the
		 * page when the element has no rotation.
		 * 
		 * @param left - The new horizontal position to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setLeft(
			left: Number
		): SlidesApp.SheetsChart
		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the zero-based index of the slide.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the first slide of the presentation.
		 * shape.setLinkSlide(0);
		 * </pre>
		 * 
		 * @param slideIndex - The zero-based index to the slide.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkSlide(
			slideIndex: number
		): SlidesApp.Link
		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code>, the link is set by the given slide ID.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the first slide of the presentation.
		 * var slide = presentation.getSlides()[0];
		 * shape.setLinkSlide(slide);
		 * </pre>
		 * 
		 * @param slide - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to be linked.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkSlide(
			slide: SlidesApp.Slide
		): SlidesApp.Link
		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the relative position of the slide.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the first slide of the presentation.
		 * shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
		 * </pre>
		 * 
		 * @param slidePosition - The relative <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code>.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkSlide(
			slidePosition: SlidesApp.SlidePosition
		): SlidesApp.Link

		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given non-empty URL string.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the URL.
		 * shape.setLinkUrl("https://slides.google.com");
		 * </pre>
		 * 
		 * @param url - The URL string.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkUrl(
			url: string
		): SlidesApp.Link
		/**
		 * Sets the element's clockwise rotation angle around its center in degrees.
		 * 
		 * @param angle - The new clockwise rotation angle to set, in degrees.
		 * 
		 * @returns This page element, for chaining.
		 */
		setRotation(
			angle: Number
		): SlidesApp.SheetsChart
		/**
		 * Sets the page element's alt text title.
		 * 
		 * <p>The method is not supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the first page element&#39;s alt text title to &quot;new alt text title&quot;.
		 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
		 * pageElement.setTitle(&#39;new alt text title&#39;);
		 * Logger.log(pageElement.getTitle());
		 * </code></pre>
		 * 
		 * @param title - The string to set the alt text title to.
		 * 
		 * @returns This page element.
		 */
		setTitle(
			title: string
		): SlidesApp.SheetsChart
		/**
		 * Sets the element's vertical position in points, measured from the upper-left corner of the page
		 * when the element has no rotation.
		 * 
		 * @param top - The new vertical position to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setTop(
			top: Number
		): SlidesApp.SheetsChart
		/**
		 * Sets the transform of the page element with the provided transform.
		 * 
		 * <p>Updating the transform of a group changes the absolute transform of the page elements in
		 * that group, which can change their visual appearance.
		 * 
		 * <p>Updating the transform of a page element that is in a group only changes the transform of
		 * that page element; it doesn't affect the transforms of the group or other page elements in the
		 * group.
		 * 
		 * <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html#getTransform()'>getTransform()</a></code>.
		 * 
		 * @param transform - The transform that is set for this page element.
		 * 
		 * @returns This element, for chaining.
		 */
		setTransform(
			transform: SlidesApp.AffineTransform
		): SlidesApp.SheetsChart
		/**
		 * Sets the element's width in points, which is the width of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @param width - The new width of this page element to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setWidth(
			width: Number
		): SlidesApp.SheetsChart

	}

	enum SheetsChartEmbedType {
		/**
		 * Indicates that the chart is embedded as an image.
		 */
		IMAGE = "IMAGE",
		/**
		 * Represents a chart that is not supported and cannot be further classified.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	class Slide {
		private constructor();

		/**
		 * Duplicates the slide.
		 * 
		 * <p>The duplicate slide is created immediately following the original.
		 * 
		 * @returns The duplicated slide.
		 */
		duplicate(): SlidesApp.Slide
		/**
		 * Gets the page's background.
		 * 
		 * @returns The page's background.
		 */
		getBackground(): SlidesApp.PageBackground
		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/color-scheme.html'>ColorScheme</a></code> associated with the page.
		 * 
		 * @returns The page's color scheme.
		 */
		getColorScheme(): SlidesApp.ColorScheme
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> objects on the page.
		 */
		getGroups(): SlidesApp.Group[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> objects on the page.
		 */
		getImages(): SlidesApp.Image[]
		/**
		 * Gets the layout that the slide is based on or <code>null</code> if the slide is not based on a
		 * layout.
		 */
		getLayout(): SlidesApp.Layout
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> objects on the page.
		 */
		getLines(): SlidesApp.Line[]
		/**
		 * Returns the notes page associated with the slide.
		 */
		getNotesPage(): SlidesApp.NotesPage
		/**
		 * Gets the unique ID for the page. Object IDs used by pages and page elements share the same
		 * namespace.
		 */
		getObjectId(): string
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page with the given ID, or <code>null</code> if none exists.
		 * 
		 * @param id - The ID of the page element that is being retrieved.
		 * 
		 * @returns The page element with the given ID.
		 */
		getPageElementById(
			id: string
		): SlidesApp.PageElement
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects rendered on the page.
		 */
		getPageElements(): SlidesApp.PageElement[]
		/**
		 * Gets the type of the page.
		 * 
		 * @returns The page type.
		 */
		getPageType(): SlidesApp.PageType
		/**
		 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> or
		 * <code>null</code> if a matching placeholder is not present.
		 * 
		 * <p>If there are multiple placeholders with the same type, it returns the one with minimal
		 * placeholder index. If there are multiple matching placeholders with the same index, it returns
		 * the first placeholder from the page's page elements collection.
		 * 
		 * <pre class="prettyprint">
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
		 * </pre>
		 * 
		 * @param placeholderType
		 */
		getPlaceholder(
			placeholderType: SlidesApp.PlaceholderType
		): SlidesApp.PageElement
		/**
		 * Returns the placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object for a specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/placeholder-type.html'>PlaceholderType</a></code> and
		 * a placeholder index, or <code>null</code> if the placeholder is not present.
		 * 
		 * <p>If there are multiple placeholders with the same type and index, it returns the first
		 * placeholder from the page's page elements collection.
		 * 
		 * <pre class="prettyprint">
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
		 * </pre>
		 * 
		 * @param placeholderType
		 * @param placeholderIndex
		 */
		getPlaceholder(
			placeholderType: SlidesApp.PlaceholderType,
			placeholderIndex: number
		): SlidesApp.PageElement

		/**
		 * Returns the list of placeholder <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects in the page.
		 * 
		 * <pre class="prettyprint">
		 * var master = SlidesApp.getActivePresentation().getMasters()[0];
		 * Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
		 * </pre>
		 */
		getPlaceholders(): SlidesApp.PageElement[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> objects on the page.
		 */
		getShapes(): SlidesApp.Shape[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> objects on the page.
		 */
		getSheetsCharts(): SlidesApp.SheetsChart[]
		/**
		 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html'>SlideLinkingMode</a></code> indicating if the slide is linked to another slide.
		 * 
		 * @returns The slide linking mode.
		 */
		getSlideLinkingMode(): SlidesApp.SlideLinkingMode
		/**
		 * Returns the source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> ID or <code>null</code> if the slide is not linked.
		 * 
		 * <p>A slide only has a source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/presentation.html'>Presentation</a></code> ID when it is linked to a slide within
		 * another presentation.
		 * 
		 * @returns The source presentation ID or <code>null</code>.
		 */
		getSourcePresentationId(): string
		/**
		 * Returns the source slide ID or <code>null</code> if the slide is not linked.
		 * 
		 * <p>A slide only has a source slide ID when it is linked to a slide within another presentation.
		 * 
		 * @returns The source slide ID or <code>null</code>.
		 */
		getSourceSlideObjectId(): string
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> objects on the page.
		 */
		getTables(): SlidesApp.Table[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> objects on the page.
		 */
		getVideos(): SlidesApp.Video[]
		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> objects on the page.
		 */
		getWordArts(): SlidesApp.WordArt[]
		/**
		 * Groups all the specified page elements.
		 * 
		 * <p>There should be at least two page elements on the same page that are not already in another
		 * group. Some page elements, such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Videos</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Tables</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html#getPlaceholderType()'>placeholder Shapes</a></code> cannot be grouped.
		 * 
		 * @param pageElements - The elements to group together.
		 * 
		 * @returns The new group.
		 */
		group(
			pageElements: SlidesApp.PageElement[]
		): SlidesApp.Group
		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a group between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var group = otherPresentationSlide.getGroups()[0];
		 * currentPresentationSlide.insertGroup(group); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param group - The group to be copied and inserted.
		 * 
		 * @returns The inserted group.
		 */
		insertGroup(
			group: SlidesApp.Group
		): SlidesApp.Group
		/**
		 * Inserts an image at the top left corner of the page with a default size from the specified
		 * image blob.
		 * 
		 * <p>Inserting the image fetches it from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once and a copy is stored for
		 * display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
		 * megapixels, and must be in either in PNG, JPEG, or GIF format.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * // Get the Drive image file with the given ID.
		 * var image = DriveApp.getFileById(fileId);
		 * slide.insertImage(image);
		 * </code></pre>
		 * 
		 * @param blobSource - The image data.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			blobSource: BlobSource
		): SlidesApp.Image
		/**
		 * Inserts an image on the page with the provided position and size from the specified image blob.
		 * 
		 * <p>The image is fetched from the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/../base/blob-source.html'>BlobSource</a></code> once at insertion time and a copy
		 * is stored for display inside the presentation. Images must be less than 50MB in size, cannot
		 * exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.
		 * 
		 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
		 * to the provided size.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * // Get the Drive image file with the given ID.
		 * var image = DriveApp.getFileById(fileId);
		 * var position = {left: 0, top: 0};
		 * var size = {width: 300, height: 100};
		 * slide.insertImage(image, position.left, position.top, size.width, size.height);
		 * </code></pre>
		 * 
		 * @param blobSource - The image data.
		 * @param left - The horizontal position of the image in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the image in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the image in points.
		 * @param height - The height of the image in points.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			blobSource: BlobSource,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Image
		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy an image between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var image = otherPresentationSlide.getImages[0];
		 * currentPresentationSlide.insertImage(image);
		 * </code></pre>
		 * 
		 * @param image - The image to be copied and inserted.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			image: SlidesApp.Image
		): SlidesApp.Image
		/**
		 * Inserts an image at the top left corner of the page with a default size from the provided URL.
		 * 
		 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
		 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
		 * in either in PNG, JPEG, or GIF format.
		 * 
		 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
		 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
		 * 
		 * @param imageUrl - The image URL.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			imageUrl: string
		): SlidesApp.Image
		/**
		 * Inserts an image on the page with the provided position and size from the provided URL.
		 * 
		 * <p>Inserting the image fetches it from the URL once and a copy is stored for display inside the
		 * presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
		 * in either in PNG, JPEG, or GIF format.
		 * 
		 * <p>The provided URL must be no larger than 2kB. The URL itself is saved with the image and
		 * exposed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()'>Image.getSourceUrl()</a></code>.
		 * 
		 * <p>In order to maintain the image's aspect ratio, the image is scaled and centered with respect
		 * to the provided size.
		 * 
		 * @param imageUrl - The image URL.
		 * @param left - The horizontal position of the image in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the image in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the image in points.
		 * @param height - The height of the image in points.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			imageUrl: string,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Image

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/line.html'>Line</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a line between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var line = otherPresentationSlide.getLines[0];
		 * currentPresentationSlide.insertLine(line);
		 * </code></pre>
		 * 
		 * @param line - The line to be copied and inserted.
		 * 
		 * @returns The inserted line.
		 */
		insertLine(
			line: SlidesApp.Line
		): SlidesApp.Line
		/**
		 * Inserts a line on the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert a line in the first slide of the presentation.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var startPoint = {left: 10, top: 10};
		 * var endPoint = {left: 40, top: 40};
		 * slide.insertLine(
		 *     SlidesApp.LineCategory.STRAIGHT,
		 *     startPoint.left,
		 *     startPoint.top,
		 *     endPoint.left,
		 *     endPoint.top);
		 * </code></pre>
		 * 
		 * @param lineCategory - The category of the line to insert.
		 * @param startLeft - The horizontal position of the start point of the line, measured in points
		 *     from the upper left corner of the page.
		 * @param startTop - The vertical position of the start point of the line, measured in points from
		 *     the upper left corner of the page.
		 * @param endLeft - The horizontal position of the end point of the line, measured in points from
		 *     the upper left corner of the page.
		 * @param endTop - The vertical position of the end point of the line, measured in points from the
		 *     upper left corner of the page.
		 * 
		 * @returns The inserted line.
		 */
		insertLine(
			lineCategory: SlidesApp.LineCategory,
			startLeft: Number,
			startTop: Number,
			endLeft: Number,
			endTop: Number
		): SlidesApp.Line
		/**
		 * Inserts a line on the page connecting two <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/connection-site.html'>connection sites</a></code>. The two
		 * connection sites must be on this page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert a line in the first slide of the presentation connecting two shapes.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
		 * var shape2 = slide.insertShape(SlidesApp.ShapeType.CLOUD);
		 * slide.insertLine(
		 *     SlidesApp.LineCategory.BENT,
		 *     shape1.getConnectionSites()[0],
		 *     shape2.getConnectionSites()[1]);
		 * </code></pre>
		 * 
		 * @param lineCategory - The category of the line to insert.
		 * @param startConnectionSite - The connection site where the start of the line is to be connected.
		 * @param endConnectionSite - The connection site where the end of the line is to be connected.
		 * 
		 * @returns The inserted line.
		 */
		insertLine(
			lineCategory: SlidesApp.LineCategory,
			startConnectionSite: SlidesApp.ConnectionSite,
			endConnectionSite: SlidesApp.ConnectionSite
		): SlidesApp.Line

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a page element between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var pageElement = otherPresentationSlide.getPageElements[0];
		 * 
		 * // Also available for Layout, Master, and Page.
		 * currentPresentationSlide.insertPageElement(pageElement);
		 * </code></pre>
		 * 
		 * @param pageElement - The page element to be copied and inserted.
		 * 
		 * @returns The inserted page element.
		 */
		insertPageElement(
			pageElement: SlidesApp.PageElement
		): SlidesApp.PageElement
		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a shape between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var shape = otherPresentationSlide.getShapes[0];
		 * currentPresentationSlide.insertShape(shape); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param shape - The shape to be copied and inserted.
		 * 
		 * @returns The inserted shape.
		 */
		insertShape(
			shape: SlidesApp.Shape
		): SlidesApp.Shape
		/**
		 * Inserts a shape on the page.
		 * 
		 * <p>The shape is inserted with a default size at the top left corner of the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert a shape in the first slide of the presentation.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * 
		 * // Also available for Layout, Master, and Page.
		 * slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
		 * </code></pre>
		 * 
		 * @param shapeType - The type of shape to insert.
		 * 
		 * @returns The inserted shape.
		 */
		insertShape(
			shapeType: SlidesApp.ShapeType
		): SlidesApp.Shape
		/**
		 * Inserts a shape on the page.
		 * 
		 * @param shapeType - The type of shape to insert.
		 * @param left - The horizontal position of the shape, measured from the upper left corner of the
		 *     page.
		 * @param top - The vertical position of the shape, measured from the upper left corner of the page.
		 * @param width - The width of the shape.
		 * @param height - The height of the shape.
		 * 
		 * @returns The inserted shape.
		 */
		insertShape(
			shapeType: SlidesApp.ShapeType,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Shape

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/sheets-chart.html'>SheetsChart</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a sheets chart between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var sheetsChart = otherPresentationSlide.getSheetsCharts[0];
		 * 
		 * // Also available for Layout, Master, and Page.
		 * currentPresentationSlide.insertSheetsChart(sheetsChart);
		 * </code></pre>
		 * 
		 * @param sheetsChart - The sheets chart to be copied and inserted.
		 * 
		 * @returns The inserted sheets chart.
		 */
		insertSheetsChart(
			sheetsChart: SlidesApp.SheetsChart
		): SlidesApp.SheetsChart
		/**
		 * Inserts a Google Sheets chart on the page.
		 * 
		 * <p>The chart is inserted with a default size at the top left corner of the page.
		 * 
		 * <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
		 * updated. Other collaborators can see the link to the source spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
		 * var chart = sheet.getCharts()[0];
		 * // Insert the spreadsheet chart in the first slide.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.insertSheetsChart(chart);
		 * </code></pre>
		 * 
		 * @param sourceChart - The chart in a spreadsheet to be inserted in the page.
		 * 
		 * @returns The inserted chart in the page.
		 */
		insertSheetsChart(
			sourceChart: SpreadsheetApp.EmbeddedChart
		): SlidesApp.SheetsChart
		/**
		 * Inserts a Google Sheets chart on the page with the provided position and size.
		 * 
		 * <p>In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
		 * to the provided size.
		 * 
		 * <p>The inserted chart is linked with the source Google Sheets chart which allows it to be
		 * updated. Other collaborators can see the link to the source spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
		 * var chart = sheet.getCharts()[0];
		 * // Insert the spreadsheet chart in the first slide.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var position = {left: 0, top: 0};
		 * var size = {width: 200, height: 200};
		 * 
		 * // Also available for Layout, Master, and Page.
		 * slide.insertSheetsChart(
		 *     chart,
		 *     position.left,
		 *     position.top,
		 *     size.width,
		 *     size.height);
		 * </code></pre>
		 * 
		 * @param sourceChart - The chart in a spreadsheet to be inserted in the page.
		 * @param left - The horizontal position of the chart in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the chart in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the chart in points.
		 * @param height - The height of the chart in points.
		 * 
		 * @returns The inserted chart in the page.
		 */
		insertSheetsChart(
			sourceChart: SpreadsheetApp.EmbeddedChart,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.SheetsChart

		/**
		 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page.
		 * 
		 * <p>The image of the chart is inserted with a default size at the top left corner of the page.
		 * 
		 * <p>The inserted image of chart is not linked with the source Google Sheets chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
		 * var chart = sheet.getCharts()[0];
		 * // Insert the spreadsheet chart in the first slide.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.insertSheetsChartAsImage(chart); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param sourceChart - The chart in a spreadsheet to be inserted in the page.
		 * 
		 * @returns The inserted image of the chart in the page.
		 */
		insertSheetsChartAsImage(
			sourceChart: SpreadsheetApp.EmbeddedChart
		): SlidesApp.Image
		/**
		 * Inserts a Google Sheets chart as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/image.html'>Image</a></code> on the page with the provided position and
		 * size.
		 * 
		 * <p>In order to maintain the chart image's aspect ratio, the image is scaled and centered with
		 * respect to the provided size.
		 * 
		 * <p>The inserted image of the chart is not linked with the source Google Sheets chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.openById(&#39;spreadsheetId&#39;).getSheets()[0];
		 * var chart = sheet.getCharts()[0];
		 * // Insert the spreadsheet chart in the first slide.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var position = {left: 0, top: 0};
		 * var size = {width: 200, height: 200};
		 * 
		 * // Also available for Layout, Master, and Page.
		 * slide.insertSheetsChartAsImage(
		 *     chart,
		 *     position.left,
		 *     position.right,
		 *     size.width,
		 *     size.height);
		 * </code></pre>
		 * 
		 * @param sourceChart - The chart in a spreadsheet to be inserted in the page.
		 * @param left - The horizontal position of the chart in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the chart in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the chart in points.
		 * @param height - The height of the chart in points.
		 * 
		 * @returns The inserted image of the chart in the page.
		 */
		insertSheetsChartAsImage(
			sourceChart: SpreadsheetApp.EmbeddedChart,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Image

		/**
		 * Inserts a table on the page.
		 * 
		 * <p>The table is centered on the page with default size and evenly distributed rows and columns.
		 * 
		 * @param numRows - The number of rows in the table.
		 * @param numColumns - The number of columns in the table.
		 * 
		 * @returns The inserted table.
		 */
		insertTable(
			numRows: number,
			numColumns: number
		): SlidesApp.Table
		/**
		 * Inserts a table on the page with the provided position and size.
		 * 
		 * <p>Rows and columns are evenly distributed in the created table.
		 * 
		 * @param numRows - The number of rows in the table.
		 * @param numColumns - The number of columns in the table.
		 * @param left - The horizontal position of the table, measured from the upper left corner of the
		 *     page.
		 * @param top - The vertical position of the table, measured from the upper left corner of the page.
		 * @param width - The width of the table.
		 * @param height - The minimum height of the table. The actual height of the rendered table depends
		 *     on factors such as text font size.
		 * 
		 * @returns The inserted table.
		 */
		insertTable(
			numRows: number,
			numColumns: number,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Table
		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html'>Table</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a table between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var table = otherPresentationSlide.getTables[0];
		 * currentPresentationSlide.insertTable(table); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param table - The table to be copied and inserted.
		 * 
		 * @returns The inserted table.
		 */
		insertTable(
			table: SlidesApp.Table
		): SlidesApp.Table

		/**
		 * Inserts a text box <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> containing the provided string on the page.
		 * 
		 * <p>The text box shape is inserted with a default size at the top left corner of the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert text box with &quot;Hello&quot; on the first slide of presentation.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.insertTextBox(&#39;Hello&#39;); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param text - The string the text box shape should contain.
		 * 
		 * @returns The inserted text box shape.
		 */
		insertTextBox(
			text: string
		): SlidesApp.Shape
		/**
		 * Inserts a text box <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> containing the provided string on the page.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Insert text box with &quot;Hello&quot; on the first slide of presentation. This text box is a square
		 * // with a length of 10 points on each side.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.insertTextBox(&#39;Hello&#39;, 0, 0, 10, 10); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param text - The string the text box shape should contain.
		 * @param left - The horizontal position of the text box shape, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the text box shape, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the text box shape.
		 * @param height - The height of the text box shape.
		 * 
		 * @returns The inserted text box shape.
		 */
		insertTextBox(
			text: string,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Shape

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html'>Video</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a video between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var video = otherPresentationSlide.getVideos[0];
		 * currentPresentationSlide.insertVideo(video); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 * 
		 * @param video - The video to be copied and inserted.
		 * 
		 * @returns The inserted video.
		 */
		insertVideo(
			video: SlidesApp.Video
		): SlidesApp.Video
		/**
		 * Inserts a video at the top left corner of the page with a default size.
		 * 
		 * <p>Only YouTube videos are currently supported.
		 * 
		 * @param videoUrl - The URL of the video to insert.
		 * 
		 * @returns The inserted video.
		 */
		insertVideo(
			videoUrl: string
		): SlidesApp.Video
		/**
		 * Inserts a video on the page with the provided position and size.
		 * 
		 * <p>Only YouTube videos are currently supported.
		 * 
		 * @param videoUrl - The URL of the video to insert.
		 * @param left - The horizontal position of the video in points, measured from the upper left corner
		 *     of the page.
		 * @param top - The vertical position of the video in points, measured from the upper left corner of
		 *     the page.
		 * @param width - The width of the video in points.
		 * @param height - The height of the video in points.
		 * 
		 * @returns The inserted video.
		 */
		insertVideo(
			videoUrl: string,
			left: Number,
			top: Number,
			width: Number,
			height: Number
		): SlidesApp.Video

		/**
		 * Inserts a copy of the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html'>WordArt</a></code> on the page.
		 * 
		 * <p>The inserted element's position on this page is determined from the source element's
		 * position on its respective page.
		 * 
		 * <p>If the provided element is a placeholder being copied from within the current presentation,
		 * properties that inherit from master or layout pages also inherit on the inserted element.
		 * 
		 * <p>If the provided element is a placeholder being copied from a different presentation,
		 * properties that inherit from master or layout pages are copied onto the element from the source
		 * presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copy a word art between presentations.
		 * var otherPresentationSlide = SlidesApp.openById(&#39;presentationId&#39;).getSlides()[0];
		 * var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var wordArt = otherPresentationSlide.getWordArts[0];
		 * 
		 * // Also available for Layout, Master, and Page.
		 * currentPresentationSlide.insertWordArt(wordArt);
		 * </code></pre>
		 * 
		 * @param wordArt - The group to be copied and inserted.
		 * 
		 * @returns The inserted word art.
		 */
		insertWordArt(
			wordArt: SlidesApp.WordArt
		): SlidesApp.WordArt
		/**
		 * Move the slide to the specified index.
		 * 
		 * @param index - The index where the slide should be moved to, based on the slide arrangement
		 *     before the move. The index should be between zero and the number of slides in the
		 *     presentation, inclusive.
		 */
		move(
			index: number
		): void
		/**
		 * Refreshes the slide to reflect any changes made to the linked source slide. If this slide is
		 * not linked, returns without making any changes.
		 * 
		 * <p>The <code>refreshSlide</code> method copies the linked source slide's corresponding master and
		 * layout pages into the slide's presentation if they do not already exist. If they do already
		 * exist, they are likewise updated to reflect any changes made to the source.
		 * 
		 * <p><aside class="note"><b>Note</b>: The refresh overwrites any changes made to the current
		 * slide in order to reflect the state of the source slide.</aside>
		 * 
		 * <pre class="prettyprint"><code>
		 * var currentPresentation = SlidesApp.getActivePresentation();
		 * var sourcePresentation = SlidesApp.openById(&#39;sourcePresentationId&#39;);
		 * var sourceSlide = sourcePresentation.getSlides()[0];
		 * var linkedSlide = currentPresentation.append(sourceSlide, SlidesApp.SlideLinkingMode.LINKED);
		 * 
		 * sourceSlide.insertText(&#39;hello world&#39;); // Only the source slide has the text box.
		 * 
		 * linkedSlide.refreshSlide(); // The linked slide now has the text box.
		 * </code></pre>
		 */
		refreshSlide(): void
		/**
		 * Removes the page.
		 */
		remove(): void
		/**
		 * Replaces all instances of text matching find text with replace text. The search is case
		 * insensitive.
		 * 
		 * @param findText - The text to find.
		 * @param replaceText - The text to replace the matched text.
		 * 
		 * @returns the number of occurrences changed
		 */
		replaceAllText(
			findText: string,
			replaceText: string
		): number
		/**
		 * Replaces all instances of text matching find text with replace text.
		 * 
		 * @param findText - The text to find.
		 * @param replaceText - The text to replace the matched text.
		 * @param matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
		 *     case insensitive.
		 * 
		 * @returns the number of occurrences changed
		 */
		replaceAllText(
			findText: string,
			replaceText: string,
			matchCase: Boolean
		): number

		/**
		 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> in the active presentation as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code> and removes any previous selection.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Select the first slide as the current page selection and replace any previous selection.
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * slide.selectAsCurrentPage(); // Also available for Layout, Master, and Page.
		 * </code></pre>
		 */
		selectAsCurrentPage(): void
		/**
		 * Unlinks the current <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> from its source slide. If this slide is not linked, returns
		 * without making any changes.
		 * 
		 * <pre class="prettyprint"><code>
		 * var currentPresentation = SlidesApp.getActivePresentation();
		 * var sourcePresentation = SlidesApp.openById(&#39;sourcePresentationId&#39;);
		 * var sourceSlide = sourcePresentation.getSlides()[0];
		 * var linkedSlide = currentPresentation.append(sourceSlide, SlidesApp.SlideLinkingMode.LINKED);
		 * 
		 * linkedSlide.unlink();
		 * 
		 * linkedSlide.getSourcePresentationId(); // returns null
		 * linkedSlide.getSourceSlideObjectId();  // returns null
		 * linkedSlide.getSlideLinkingMode();     // returns SlidesApp.SlideLinkingMode.NOT_LINKED
		 * </code></pre>
		 */
		unlink(): void

	}

	enum SlideLinkingMode {
		/**
		 * Indicates that slides are linked.
		 */
		LINKED = "LINKED",
		/**
		 * Indicates that slides aren't linked.
		 */
		NOT_LINKED = "NOT_LINKED",
		/**
		 * A slide linking mode that isn't supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	enum SlidePosition {
		/**
		 * The first slide in the presentation.
		 */
		FIRST_SLIDE = "FIRST_SLIDE",
		/**
		 * The last slide in the presentation.
		 */
		LAST_SLIDE = "LAST_SLIDE",
		/**
		 * The next slide.
		 */
		NEXT_SLIDE = "NEXT_SLIDE",
		/**
		 * The previous slide.
		 */
		PREVIOUS_SLIDE = "PREVIOUS_SLIDE",
	}

	class SolidFill {
		private constructor();

		/**
		 * Get the opacity of the color, in the interval from [0, 1.0], where 1.0 means fully opaque.
		 */
		getAlpha(): Number
		/**
		 * Get the color of the fill.
		 */
		getColor(): SlidesApp.Color

	}

	enum SpacingMode {
		/**
		 * Paragraph spacing is skipped between list elements.
		 */
		COLLAPSE_LISTS = "COLLAPSE_LISTS",
		/**
		 * Paragraph spacing is always rendered.
		 */
		NEVER_COLLAPSE = "NEVER_COLLAPSE",
		/**
		 * A spacing mode that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	class Table {
		private constructor();

		/**
		 * Aligns the element to the specified alignment position on the page.
		 * 
		 * @param alignmentPosition - The position to align this page element to on the page.
		 * 
		 * @returns This page element, for chaining.
		 */
		alignOnPage(
			alignmentPosition: SlidesApp.AlignmentPosition
		): SlidesApp.Table
		/**
		 * Appends a new column to the right of the last column of the table.
		 * 
		 * @returns The new appended column.
		 */
		appendColumn(): SlidesApp.TableColumn
		/**
		 * Appends a new row below the last row of the table.
		 * 
		 * @returns The new appended row.
		 */
		appendRow(): SlidesApp.TableRow
		/**
		 * Brings the page element forward on the page by one element.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		bringForward(): SlidesApp.Table
		/**
		 * Brings the page element to the front of the page.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		bringToFront(): SlidesApp.Table
		/**
		 * Duplicates the page element.
		 * 
		 * <p>The duplicate page element is placed on the same page at the same position as the original.
		 * 
		 * @returns The new duplicate of this page element.
		 */
		duplicate(): SlidesApp.PageElement
		/**
		 * Returns the specified cell in the table.
		 * 
		 * @param rowIndex - The row index of the cell to retrieve.
		 * @param columnIndex - The column index of the cell to retrieve.
		 * 
		 * @returns The table cell retrieved.
		 */
		getCell(
			rowIndex: number,
			columnIndex: number
		): SlidesApp.TableCell
		/**
		 * Returns the specified column in the table.
		 * 
		 * @param columnIndex - The 0-based column index.
		 * 
		 * @returns The table column retrieved.
		 */
		getColumn(
			columnIndex: number
		): SlidesApp.TableColumn
		/**
		 * Returns the list of <code>ConnectionSite</code>s on the page element, or an empty list if the page
		 * element does not have any connection sites.
		 * 
		 * @returns The connection sites list, which may be empty if this element has no connection sites.
		 */
		getConnectionSites(): SlidesApp.ConnectionSite[]
		/**
		 * Returns the page element's description. The description is combined with the title to display
		 * and read alt text.
		 * 
		 * @returns The page element's description.
		 */
		getDescription(): string
		/**
		 * Gets the element's height in points, which is the height of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @returns The page element's inherent height in points, or <code>null</code> if the page element does
		 *     not have a height.
		 */
		getHeight(): Number
		/**
		 * Returns the element's inherent height in points.
		 * 
		 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
		 * conjunction with the element's transform to determine the element's final visual appearance.
		 * 
		 * @returns The page element's inherent height in points, or <code>null</code> if the page element does
		 *     not have a height.
		 */
		getInherentHeight(): Number
		/**
		 * Returns the element's inherent width in points.
		 * 
		 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
		 * conjunction with the element's transform to determine the element's final visual appearance.
		 * 
		 * @returns The page element's inherent width in points, or <code>null</code> if the page element does
		 *     not have a width.
		 */
		getInherentWidth(): Number
		/**
		 * Returns the element's horizontal position in points, measured from the upper-left corner of the
		 * page when the element has no rotation.
		 * 
		 * @returns This element's horizonal position in points, from the upper-left corner of the page.
		 */
		getLeft(): Number
		/**
		 * Returns the number of columns in the table.
		 * 
		 * @returns The number fo columns in this table.
		 */
		getNumColumns(): number
		/**
		 * Returns the number of rows in the table.
		 * 
		 * @returns The number of rows in this table.
		 */
		getNumRows(): number
		/**
		 * Returns the unique ID for this object. Object IDs used by pages and page elements share the
		 * same namespace.
		 * 
		 * @returns The unique ID for this object.
		 */
		getObjectId(): string
		/**
		 * Returns the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
		 * 
		 * @returns The page element's type.
		 */
		getPageElementType(): SlidesApp.PageElementType
		/**
		 * Returns the group this page element belongs to, or <code>null</code> if the element is not in a
		 * group.
		 * 
		 * @returns The group this page element belongs to, or <code>null</code>.
		 */
		getParentGroup(): SlidesApp.Group
		/**
		 * Returns the page this page element is on.
		 * 
		 * @returns The page this element resides on.
		 */
		getParentPage(): SlidesApp.Page
		/**
		 * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
		 * means no rotation.
		 * 
		 * @returns The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).
		 */
		getRotation(): Number
		/**
		 * Returns the specified row in the table.
		 * 
		 * @param rowIndex - The index of the row to retrieve.
		 * 
		 * @returns The table row retrieved.
		 */
		getRow(
			rowIndex: number
		): SlidesApp.TableRow
		/**
		 * Returns the page element's title. The title is combined with the description to display and
		 * read alt text.
		 * 
		 * @returns The page element's title.
		 */
		getTitle(): string
		/**
		 * Gets the element's vertical position in points, measured from the upper-left corner of the page
		 * when the element has no rotation.
		 * 
		 * @returns This element's vertical position in points, from the upper-left corner of the page.
		 */
		getTop(): Number
		/**
		 * Returns the page element's transform.
		 * 
		 * <p>The visual appearance of the page element is determined by its absolute transform. To
		 * compute the absolute transform, preconcatenate a page element's transform with the transforms
		 * of all of its parent groups. If the page element is not in a group, its absolute transform is
		 * the same as the value in this field.
		 * 
		 * @returns The page element's transform.
		 */
		getTransform(): SlidesApp.AffineTransform
		/**
		 * Returns the element's width in points, which is the width of the element's bounding box when
		 * the element has no rotation.
		 * 
		 * @returns The page element's inherent width in points, or <code>null</code> if the page element does
		 *     not have a width.
		 */
		getWidth(): Number
		/**
		 * Inserts a new column at the specified index of the table.
		 * 
		 * <p>If all the cells in the column to the left of the specified index are merged with other
		 * columns, the new column is inserted to the right of the common columns spanned by these cells.
		 * 
		 * @param index - The index at which to insert a new column.
		 * 
		 * @returns The new inserted column.
		 */
		insertColumn(
			index: number
		): SlidesApp.TableColumn
		/**
		 * Inserts a new row at the specified index of the table.
		 * 
		 * <p>If all the cells in the row above the specified index are merged with other rows, the new
		 * row is inserted below the common rows spanned by these cells.
		 * 
		 * @param index - The index at which to insert a new row.
		 * 
		 * @returns The new inserted row.
		 */
		insertRow(
			index: number
		): SlidesApp.TableRow
		/**
		 * Preconcatenates the provided transform to the existing transform of the page element.
		 * 
		 * <pre class="prettyprint"><code>
		 * newTransform = argument * existingTransform
		 * </code></pre>
		 * 
		 * <p>For example, to move a page elements 36 points to the left:
		 * 
		 * <pre class="prettyprint"><code>
		 * element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
		 *     .setTranslateX(-36.0)
		 *     .build());
		 * </code></pre>
		 * 
		 * <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
		 * 
		 * @param transform - The transform to preconcatenate onto this page element's transform.
		 * 
		 * @returns This page element, for chaining.
		 */
		preconcatenateTransform(
			transform: SlidesApp.AffineTransform
		): SlidesApp.Table
		/**
		 * Removes the page element.
		 * 
		 * <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
		 * group itself is also removed.
		 * 
		 * <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
		 * are also removed.
		 */
		remove(): void
		/**
		 * Scales the element's height by the specified ratio. The element's height is the height of its
		 * bounding box when the element has no rotation.
		 * 
		 * @param ratio - The ratio to scale this page element's height by.
		 * 
		 * @returns This page element, for chaining.
		 */
		scaleHeight(
			ratio: Number
		): SlidesApp.Table
		/**
		 * Scales the element's width by the specified ratio. The element's width is the width of its
		 * bounding box when the element has no rotation.
		 * 
		 * @param ratio - The ratio to scale this page element's width by.
		 * 
		 * @returns This page element, for chaining.
		 */
		scaleWidth(
			ratio: Number
		): SlidesApp.Table
		/**
		 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
		 * selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var pageElement = slide.getPageElements()[0];
		 * // Only select this page element and replace any previous selection.
		 * pageElement.select();
		 * </code></pre>
		 */
		select(): void
		/**
		 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>Pass <code>true</code> to this method to select only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and remove any
		 * previous selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 * 
		 * <p>Pass <code>false</code> to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code>
		 * objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.
		 * 
		 * <p>The following conditions must be met while selecting a page element using a <code>false</code>
		 * parameter:
		 * 
		 * <ol>
		 *   <li>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 *   <li>There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected.
		 * </ol>
		 * 
		 * <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
		 * first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * // First select the slide page, as the current page selection.
		 * slide.selectAsCurrentPage();
		 * // Then select all the page elements in the selected slide page.
		 * var pageElements = slide.getPageElements();
		 * for (var i = 0; i &lt; pageElements.length; i++) {
		 *   pageElements[i].select(false);
		 * }
		 * </code></pre>
		 * 
		 * @param replace - If <code>true</code>, the selection replaces any previous selection; otherwise the
		 *     selection is added to any previous selection.
		 */
		select(
			replace: Boolean
		): void

		/**
		 * Sends the page element backward on the page by one element.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		sendBackward(): SlidesApp.Table
		/**
		 * Sends the page element to the back of the page.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		sendToBack(): SlidesApp.Table
		/**
		 * Sets the page element's alt text description.
		 * 
		 * <p>The method is not supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the first page element&#39;s alt text description to &quot;new alt text description&quot;.
		 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
		 * pageElement.setDescription(&#39;new alt text description&#39;);
		 * Logger.log(pageElement.getDescription());
		 * </code></pre>
		 * 
		 * @param description - The string to set the alt text description to.
		 * 
		 * @returns This page element.
		 */
		setDescription(
			description: string
		): SlidesApp.Table
		/**
		 * Sets the element's height in points, which is the height of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @param height - The new height of this page element to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setHeight(
			height: Number
		): SlidesApp.Table
		/**
		 * Sets the element's horizontal position in points, measured from the upper-left corner of the
		 * page when the element has no rotation.
		 * 
		 * @param left - The new horizontal position to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setLeft(
			left: Number
		): SlidesApp.Table
		/**
		 * Sets the element's clockwise rotation angle around its center in degrees.
		 * 
		 * @param angle - The new clockwise rotation angle to set, in degrees.
		 * 
		 * @returns This page element, for chaining.
		 */
		setRotation(
			angle: Number
		): SlidesApp.Table
		/**
		 * Sets the page element's alt text title.
		 * 
		 * <p>The method is not supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the first page element&#39;s alt text title to &quot;new alt text title&quot;.
		 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
		 * pageElement.setTitle(&#39;new alt text title&#39;);
		 * Logger.log(pageElement.getTitle());
		 * </code></pre>
		 * 
		 * @param title - The string to set the alt text title to.
		 * 
		 * @returns This page element.
		 */
		setTitle(
			title: string
		): SlidesApp.Table
		/**
		 * Sets the element's vertical position in points, measured from the upper-left corner of the page
		 * when the element has no rotation.
		 * 
		 * @param top - The new vertical position to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setTop(
			top: Number
		): SlidesApp.Table
		/**
		 * Sets the transform of the page element with the provided transform.
		 * 
		 * <p>Updating the transform of a group changes the absolute transform of the page elements in
		 * that group, which can change their visual appearance.
		 * 
		 * <p>Updating the transform of a page element that is in a group only changes the transform of
		 * that page element; it doesn't affect the transforms of the group or other page elements in the
		 * group.
		 * 
		 * <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table.html#getTransform()'>getTransform()</a></code>.
		 * 
		 * @param transform - The transform that is set for this page element.
		 * 
		 * @returns This element, for chaining.
		 */
		setTransform(
			transform: SlidesApp.AffineTransform
		): SlidesApp.Table
		/**
		 * Sets the element's width in points, which is the width of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @param width - The new width of this page element to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setWidth(
			width: Number
		): SlidesApp.Table

	}

	class TableCell {
		private constructor();

		/**
		 * Returns the 0-based column index of the table cell.
		 */
		getColumnIndex(): number
		/**
		 * Returns the column span of the table cell.
		 */
		getColumnSpan(): number
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/content-alignment.html'>ContentAlignment</a></code> of the text in the table cell.
		 */
		getContentAlignment(): SlidesApp.ContentAlignment
		/**
		 * Returns the fill of the table cell.
		 */
		getFill(): SlidesApp.Fill
		/**
		 * Returns the head cell of this table cell. Returns <code>null</code> if this cell has not been merged
		 * or if this cell is the head cell.
		 */
		getHeadCell(): SlidesApp.TableCell
		/**
		 * Returns the merge state of the table cell.
		 */
		getMergeState(): SlidesApp.CellMergeState
		/**
		 * Returns the table column containing the current cell.
		 */
		getParentColumn(): SlidesApp.TableColumn
		/**
		 * Returns the table row containing the current cell.
		 */
		getParentRow(): SlidesApp.TableRow
		/**
		 * Returns the table containing the current cell.
		 */
		getParentTable(): SlidesApp.Table
		/**
		 * Returns the 0-based row index of the table cell.
		 */
		getRowIndex(): number
		/**
		 * Returns the row span of the table cell.
		 */
		getRowSpan(): number
		/**
		 * Returns the text content of the table cell. Returns <code>null</code> if the cell is merged but is
		 * not a head cell.
		 * 
		 * <p>Text within a table cell always terminates with a newline character.
		 */
		getText(): SlidesApp.TextRange
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/content-alignment.html'>ContentAlignment</a></code> of the text in the table cell.
		 * 
		 * @param contentAlignment
		 */
		setContentAlignment(
			contentAlignment: SlidesApp.ContentAlignment
		): SlidesApp.TableCell

	}

	class TableCellRange {
		private constructor();

		/**
		 * Returns the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table-cell.html'>TableCell</a></code> instances.
		 */
		getTableCells(): SlidesApp.TableCell[]

	}

	class TableColumn {
		private constructor();

		/**
		 * Returns the cell at the specified index.
		 * 
		 * @param cellIndex - The 0-based index of the cell to retrieve.
		 */
		getCell(
			cellIndex: number
		): SlidesApp.TableCell
		/**
		 * Returns the 0-based index of the column.
		 */
		getIndex(): number
		/**
		 * Returns the number of cells in this column.
		 */
		getNumCells(): number
		/**
		 * Returns the table containing the current column.
		 */
		getParentTable(): SlidesApp.Table
		/**
		 * Returns the width of the column in points.
		 */
		getWidth(): Number
		/**
		 * Removes the table column.
		 * 
		 * <p>If all the cells in the column are merged with other columns, the common columns spanned by
		 * these cells are removed.
		 * 
		 * <p>If no columns remain in the table after this removal, the whole table is removed.
		 */
		remove(): void

	}

	class TableRow {
		private constructor();

		/**
		 * Returns the cell at the specified index.
		 * 
		 * @param cellIndex - The 0-based index of the cell to retrieve.
		 * 
		 * @returns the cell.
		 */
		getCell(
			cellIndex: number
		): SlidesApp.TableCell
		/**
		 * Returns the 0-based index of the row.
		 */
		getIndex(): number
		/**
		 * Returns the minimum height of the row in points. The actual height depends on the length of the
		 * content of the cell.
		 */
		getMinimumHeight(): Number
		/**
		 * Returns the number of cells in this row.
		 */
		getNumCells(): number
		/**
		 * Returns the table containing the current row.
		 */
		getParentTable(): SlidesApp.Table
		/**
		 * Removes the table row.
		 * 
		 * <p>If all the cells in the row are merged with other rows, the common rows spanned by these
		 * cells are removed.
		 * 
		 * <p>If no rows remain in the table after this removal, the whole table is removed.
		 */
		remove(): void

	}

	enum TextBaselineOffset {
		/**
		 * The text is not vertically offset.
		 */
		NONE = "NONE",
		/**
		 * The text is vertically offset downwards.
		 */
		SUBSCRIPT = "SUBSCRIPT",
		/**
		 * The text is vertically offset upwards.
		 */
		SUPERSCRIPT = "SUPERSCRIPT",
		/**
		 * An text baseline offset that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	enum TextDirection {
		/**
		 * The text goes from left to right.
		 */
		LEFT_TO_RIGHT = "LEFT_TO_RIGHT",
		/**
		 * The text goes from right to left.
		 */
		RIGHT_TO_LEFT = "RIGHT_TO_LEFT",
		/**
		 * A text direction that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	class TextRange {
		private constructor();

		/**
		 * Appends a paragraph at the end of the text range. The paragraph maintains the styling of the
		 * end of the current text range.
		 * 
		 * <p>The provided text string is appended as a paragraph by adding at least one surrounding
		 * newline character to the string.
		 * 
		 * <p>When the provided text string contains newline characters (thus consisting of multiple
		 * paragraphs), the final paragraph added is returned.
		 * 
		 * @param text - The string to append as a paragraph.
		 * 
		 * @returns the appended <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/paragraph.html'>Paragraph</a></code>.
		 */
		appendParagraph(
			text: string
		): SlidesApp.Paragraph
		/**
		 * Appends a copy of the provided text range to the end of the current text range.
		 * 
		 * <p>The formatting of the inserted text will match that of the source text.
		 * 
		 * @param textRange - The text range to append.
		 * 
		 * @returns the text range representing the appended text
		 */
		appendRange(
			textRange: SlidesApp.TextRange
		): SlidesApp.TextRange
		/**
		 * Appends a copy of the provided text range to the end of the current text range.
		 * 
		 * <p>If set to match the formatting of the destination text, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/auto-text.html'>AutoText</a></code> within the provided
		 * text range are replaced with their rendered values. Furthermore, any non-text elements within
		 * the provided text range are not appended.
		 * 
		 * @param textRange - The text range to append.
		 * @param matchSourceFormatting - If <code>true</code>, match the formatting of the source text; if
		 *     <code>false</code>, match the formatting of the destination text.
		 * 
		 * @returns the text range representing the appended text
		 */
		appendRange(
			textRange: SlidesApp.TextRange,
			matchSourceFormatting: Boolean
		): SlidesApp.TextRange

		/**
		 * Appends text at the end of the text range. The text maintains the styling of the end of the
		 * existing text.
		 * 
		 * @param text - The string to append.
		 * 
		 * @returns the text range representing the appended text.
		 */
		appendText(
			text: string
		): SlidesApp.TextRange
		/**
		 * Returns the rendered text bounded by this range of the associated shape or table cell in a
		 * format appropriate to display to end users.
		 * 
		 * <p>AutoText elements, such as generated slide numbers, are replaced with their rendered values.
		 * Any non-text elements in the range are omitted.
		 */
		asRenderedString(): string
		/**
		 * Returns the raw text bounded by this range of the associated shape or table cell.
		 * 
		 * <p>AutoText elements such as generated slide numbers and any non-text elements in the range are
		 * replaced with the Unicode character U+E907.
		 */
		asString(): string
		/**
		 * Clears the text bounded by this range.
		 * 
		 * <p>Since the entire text in a Shape or TableCell must end in a newline, the final newline in
		 * the text is not removed.
		 */
		clear(): void
		/**
		 * Clears the text bounded by the start and end offsets in the range.
		 * 
		 * <p>Since the text must end in a newline, the final newline in text is not removed even if it's
		 * covered by the given offsets.
		 * 
		 * @param startOffset - The number of characters past the start index of the current text range used
		 *     to determine the inclusive start index of the range to clear. The start offset must be
		 *     equal to or greater than 0 and less than or equal to <code>endOffset</code>. <code>startOffset</code>
		 *     must also be less than the length of the current range.
		 * @param endOffset - The number of characters past the start index of the current text range used
		 *     to determine the exclusive end index of the range to clear. The <code>endOffset</code> must be
		 *     equal to or greater than <code>startOffset</code>. <code>endOffset</code> must also be less than or
		 *     equal to the length of the current range.
		 */
		clear(
			startOffset: number,
			endOffset: number
		): void

		/**
		 * Returns all the ranges matching the search pattern in the current text range. The search is
		 * case sensitive.
		 * 
		 * @param pattern - The regular expression pattern to search; any backslashes in the pattern should
		 *     be escaped.
		 */
		find(
			pattern: string
		): SlidesApp.TextRange[]
		/**
		 * Returns all the ranges matching the search pattern in the current text range starting from the
		 * start offset. The search is case sensitive.
		 * 
		 * @param pattern - The regular expression pattern to search; any backslashes in the pattern should
		 *     be escaped.
		 * @param startOffset - The number of characters past the start index of the current text range used
		 *     to determine the inclusive start index of the range to search. <code>startOffset</code> must
		 *     also be less than the length of the current range.
		 */
		find(
			pattern: string,
			startOffset: number
		): SlidesApp.TextRange[]

		/**
		 * Returns the auto texts within the current text range.
		 */
		getAutoTexts(): SlidesApp.AutoText[]
		/**
		 * Returns the exclusive, 0-based index for the last character in this range. If the start and end
		 * indices are equal, the range is considered to be empty.
		 */
		getEndIndex(): number
		/**
		 * Returns the number of characters in this range.
		 */
		getLength(): number
		/**
		 * Returns a collection of text ranges that correspond to all <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>s within the current
		 * text range or overlapping the current text range.
		 * 
		 * <p>Each returned range is guaranteed to span one link when it is created. Text modifications
		 * can cause it to no longer represent exactly one link.
		 * 
		 * <p>Each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> on the returned ranges can be accessed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#getLink()'>TextStyle.getLink()</a></code>.
		 * 
		 * <pre class="prettyprint">
		 * // Accesses the first link on a TextRange object.
		 * var linkTextRange = textRange.getLinks()[0];
		 * var textStyle = linkTextRange.getTextStyle();
		 * Logger.log(textStyle.hasLink()); // logs 'true'
		 * var link = textStyle.getLink();  // Link object
		 * </pre>
		 */
		getLinks(): SlidesApp.TextRange[]
		/**
		 * Returns the paragraphs in lists that overlap the current text range.
		 */
		getListParagraphs(): SlidesApp.Paragraph[]
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/list-style.html'>ListStyle</a></code> of the current text range.
		 */
		getListStyle(): SlidesApp.ListStyle
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/paragraph-style.html'>ParagraphStyle</a></code> of the current text range.
		 */
		getParagraphStyle(): SlidesApp.ParagraphStyle
		/**
		 * Returns the paragraphs that overlap the current text range.
		 */
		getParagraphs(): SlidesApp.Paragraph[]
		/**
		 * Returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> covering part of the range from which it is derived.
		 * 
		 * @param startOffset - The number of characters past the start index of the current text range used
		 *     to determine the inclusive start index of the returned range. The start offset must be
		 *     equal to or greater than 0 and less than or equal to <code>endOffset</code>. <code>startOffset</code>
		 *     must also be less than the length of the current range.
		 * @param endOffset - The number of characters past the start index of the current text range used
		 *     to determine the exclusive end index of the returned range. The <code>endOffset</code> must be
		 *     equal to or greater than <code>startOffset</code>. <code>endOffset</code> must also be less than or
		 *     equal to the length of the current range.
		 */
		getRange(
			startOffset: number,
			endOffset: number
		): SlidesApp.TextRange
		/**
		 * Returns the text runs that overlap the current text range. A text run is a segment of text
		 * where all the characters have the same text style.
		 * 
		 * <p>Each returned range is only guaranteed to span one run when it is created. Text or style
		 * modifications can cause it to no longer represent exactly one run.
		 */
		getRuns(): SlidesApp.TextRange[]
		/**
		 * Returns the inclusive, 0-based index for the first character in this range. If the start and
		 * end indices are equal, the range is considered to be empty.
		 */
		getStartIndex(): number
		/**
		 * Returns the text style of the range, or <code>null</code> if the range is empty.
		 */
		getTextStyle(): SlidesApp.TextStyle
		/**
		 * Inserts a paragraph at the start offset. The paragraph maintains the styling of the current
		 * text range at the start offset.
		 * 
		 * <p>The provided text string is inserted as a paragraph by adding at least one surrounding
		 * newline character to the string.
		 * 
		 * <p>When the provided text string contains newline characters (thus consisting of multiple
		 * paragraphs), the final paragraph added is returned.
		 * 
		 * @param startOffset - The number of characters past the start index of the current text range used
		 *     to determine the inclusive start index of the text to insert.
		 * @param text - The string to insert.
		 * 
		 * @returns the inserted <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/paragraph.html'>Paragraph</a></code>.
		 */
		insertParagraph(
			startOffset: number,
			text: string
		): SlidesApp.Paragraph
		/**
		 * Inserts a copy of the provided text range at the start offset.
		 * 
		 * <p>The formatting of the inserted text will match that of the source text.
		 * 
		 * @param startOffset - The number of characters past the start index of the current text range used
		 *     to determine the inclusive start index of the text to insert.
		 * @param textRange - The text range to insert.
		 * 
		 * @returns the text range representing the inserted text
		 */
		insertRange(
			startOffset: number,
			textRange: SlidesApp.TextRange
		): SlidesApp.TextRange
		/**
		 * Inserts a copy of the provided text range at the start offset.
		 * 
		 * <p>If set to match the formatting of the destination text, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/auto-text.html'>AutoText</a></code> within the provided
		 * text range are replaced with their rendered values. Furthermore, any non-text elements within
		 * the provided text range are not inserted.
		 * 
		 * @param startOffset - The number of characters past the start index of the current text range used
		 *     to determine the inclusive start index of the text to insert.
		 * @param textRange - The text range to insert.
		 * @param matchSourceFormatting - If <code>true</code>, match the formatting of the source text; if
		 *     <code>false</code>, match the formatting of the destination text.
		 * 
		 * @returns the text range representing the inserted text
		 */
		insertRange(
			startOffset: number,
			textRange: SlidesApp.TextRange,
			matchSourceFormatting: Boolean
		): SlidesApp.TextRange

		/**
		 * Inserts text at the start offset. The text maintains the styling of the existing text at the
		 * start offset.
		 * 
		 * @param startOffset - The number of characters past the start index of the current text range used
		 *     to determine the inclusive start index of the text to insert.
		 * @param text - The string to insert.
		 * 
		 * @returns the text range representing the inserted text.
		 */
		insertText(
			startOffset: number,
			text: string
		): SlidesApp.TextRange
		/**
		 * Returns <code>true</code> if there are no characters in this range, and returns <code>false</code>
		 * otherwise.
		 */
		isEmpty(): Boolean
		/**
		 * Replaces all instances of text matching find text with replace text. The search is case
		 * insensitive.
		 * 
		 * @param findText - The text to find.
		 * @param replaceText - The text to replace the matched text.
		 * 
		 * @returns the number of occurrences changed
		 */
		replaceAllText(
			findText: string,
			replaceText: string
		): number
		/**
		 * Replaces all instances of text matching find text with replace text.
		 * 
		 * @param findText - The text to find.
		 * @param replaceText - The text to replace the matched text.
		 * @param matchCase - If <code>true</code>, the search is case sensitive; if <code>false</code>, the search is
		 *     case insensitive.
		 * 
		 * @returns the number of occurrences changed
		 */
		replaceAllText(
			findText: string,
			replaceText: string,
			matchCase: Boolean
		): number

		/**
		 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> in the active presentation and removes any previous
		 * selection.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> or the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table-cell.html'>TableCell</a></code> is set
		 * as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/shape.html'>Shape</a></code> or the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/table-cell.html'>TableCell</a></code> is set as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getPageElementRange()'>selected page element</a></code>.
		 * 
		 * <ol>
		 *   The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html'>Selection</a></code> can be of two types:
		 *   <li>1. Range of text, use select on a non-empty TextRange to select the range of the
		 *       characters.
		 *   <li>2. Cursor position, use an empty TextRange to place the cursor at the desired index.
		 * </ol>
		 * 
		 * <pre class="prettyprint">
		 * var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
		 * shape.getText().setText("Hello");
		 * // Range selection: Select the text range "He".
		 * shape.getText().getRange(0, 2).select();
		 * // Cursor selection: Place the cursor after "H" like "H|ello".
		 * shape.getText().getRange(1, 1).select();
		 * </pre>
		 */
		select(): void
		/**
		 * Sets the text bounded by this range of the associated shape or table cell. The text maintains
		 * the styling of the start of the existing text.
		 * 
		 * @param newText - The string to set as the new text.
		 * 
		 * @returns the text range representing the set text
		 */
		setText(
			newText: string
		): SlidesApp.TextRange

	}

	class TextStyle {
		private constructor();

		/**
		 * Returns the background color of the text, or <code>null</code> if there are multiple styles on the
		 * text.
		 */
		getBackgroundColor(): SlidesApp.Color
		/**
		 * Returns the vertical offset of text from its normal position, or <code>null</code> if there are
		 * multiple styles on the text.
		 */
		getBaselineOffset(): SlidesApp.TextBaselineOffset
		/**
		 * Returns the font family of the text, or <code>null</code> if there are multiple styles on the text.
		 */
		getFontFamily(): string
		/**
		 * Returns the font size of the text in points, or <code>null</code> if there are multiple styles on
		 * the text.
		 */
		getFontSize(): Number
		/**
		 * Returns the font weight of the text, or <code>null</code> if there are multiple styles on the text.
		 * 
		 * <p>The weight is a multiple of 100 between 100 and 900, inclusive. This range corresponds to
		 * the numerical values described in the CSS 2.1 Specification, <a
		 * href="https://www.w3.org/TR/CSS21/fonts.html#font-boldness">section 15.6</a>, with
		 * non-numerical values disallowed. Weights greater than or equal to 700 are considered bold, in
		 * which case <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#isBold()'>isBold()</a></code> returns <code>true</code>. The default value is 400
		 * ("normal").
		 */
		getFontWeight(): number
		/**
		 * Returns the foreground color of the text, or <code>null</code> if there are multiple styles on the
		 * text.
		 */
		getForegroundColor(): SlidesApp.Color
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> on the text, or <code>null</code> if there is no link or if the link is on
		 * part of the text or if there are multiple links. Call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#hasLink()'>hasLink()</a></code> to determine whether
		 * the text has no link.
		 * 
		 * <pre class="prettyprint"><code>
		 * var textLink = shape.getText().getTextStyle().getLink();
		 * if (textLink != null) {
		 *   Logger.log(&#39;Shape text has a link of type: &#39; + textLink.getLinkType());
		 * }
		 * </code></pre>
		 */
		getLink(): SlidesApp.Link
		/**
		 * Returns <code>true</code> if there is link on the text, <code>false</code> if not, or <code>null</code> if the
		 * link is on part of the text or there are multiple links.
		 * 
		 * <p>Links cannot be set on newline characters. Therefore, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code> contains a
		 * newline character, this method always returns either <code>null</code> or <code>false</code>.
		 */
		hasLink(): Boolean
		/**
		 * Returns <code>true</code> if the background of the text is transparent, <code>false</code> if not, or
		 * <code>null</code> if there are multiple styles on the text.
		 */
		isBackgroundTransparent(): Boolean
		/**
		 * Returns <code>true</code> if the text is rendered as bold, <code>false</code> if not, or <code>null</code> if
		 * there are multiple styles on the text.
		 */
		isBold(): Boolean
		/**
		 * Returns <code>true</code> if the text is italicized, <code>false</code> if not, or <code>null</code> if there
		 * are multiple styles on the text.
		 */
		isItalic(): Boolean
		/**
		 * Returns <code>true</code> if the text is in small capital letters, <code>false</code> if not, or <code>null</code> if there are multiple styles on the text.
		 */
		isSmallCaps(): Boolean
		/**
		 * Returns <code>true</code> if the text is struck through, <code>false</code> if not, or <code>null</code> if
		 * there are multiple styles on the text.
		 */
		isStrikethrough(): Boolean
		/**
		 * Returns <code>true</code> if the text is underlined, <code>false</code> if not, or <code>null</code> if there
		 * are multiple styles on the text.
		 */
		isUnderline(): Boolean
		/**
		 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>.
		 * 
		 * <p>Removing a link removes the hyperlink foreground color and underline style on the text. If
		 * possible, these styles are applied to match the text preceding the link.
		 * 
		 * <pre class="prettyprint">
		 * text.getTextStyle().removeLink();
		 * </pre>
		 */
		removeLink(): SlidesApp.TextStyle
		/**
		 * Sets the background color of the text to the given RGB values from 0 to 255.
		 * 
		 * @param red
		 * @param green
		 * @param blue
		 */
		setBackgroundColor(
			red: number,
			green: number,
			blue: number
		): SlidesApp.TextStyle
		/**
		 * Sets the background color of the text.
		 * 
		 * @param color
		 */
		setBackgroundColor(
			color: SlidesApp.Color
		): SlidesApp.TextStyle
		/**
		 * Sets the background color of the text to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
		 * 
		 * @param color
		 */
		setBackgroundColor(
			color: SlidesApp.ThemeColorType
		): SlidesApp.TextStyle
		/**
		 * Sets the background color of the text to the given hex color string.
		 * 
		 * <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
		 * '#FFC0CB'.
		 * 
		 * @param hexColor
		 */
		setBackgroundColor(
			hexColor: string
		): SlidesApp.TextStyle

		/**
		 * Sets the background color of the text to transparent.
		 */
		setBackgroundColorTransparent(): SlidesApp.TextStyle
		/**
		 * Sets the vertical offset of the text relative to its normal position.
		 * 
		 * @param offset
		 */
		setBaselineOffset(
			offset: SlidesApp.TextBaselineOffset
		): SlidesApp.TextStyle
		/**
		 * Sets whether the text should be rendered as bold.
		 * 
		 * <p>Changing the text's boldness updates the font weight used to render the text.
		 * 
		 * @param bold
		 */
		setBold(
			bold: Boolean
		): SlidesApp.TextStyle
		/**
		 * Sets the font family of the text .
		 * 
		 * @param fontFamily
		 */
		setFontFamily(
			fontFamily: string
		): SlidesApp.TextStyle
		/**
		 * Sets the font family and weight of the text.
		 * 
		 * <p>The weight is a multiple of 100 between 100 and 900, inclusive. This range corresponds to
		 * the numerical values described in the CSS 2.1 Specification, <a
		 * href="https://www.w3.org/TR/CSS21/fonts.html#font-boldness">section 15.6</a>, with
		 * non-numerical values disallowed. Weights greater than or equal to 700 are considered bold, in
		 * which case <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#isBold()'>isBold()</a></code> returns <code>true</code>. The default value is 400
		 * ("normal").
		 * 
		 * @param fontFamily
		 * @param fontWeight
		 */
		setFontFamilyAndWeight(
			fontFamily: string,
			fontWeight: number
		): SlidesApp.TextStyle
		/**
		 * Sets the font size of the text, in points.
		 * 
		 * @param fontSize
		 */
		setFontSize(
			fontSize: Number
		): SlidesApp.TextStyle
		/**
		 * Sets the foreground color of the text to the given RGB values from 0 to 255.
		 * 
		 * @param red
		 * @param green
		 * @param blue
		 */
		setForegroundColor(
			red: number,
			green: number,
			blue: number
		): SlidesApp.TextStyle
		/**
		 * Sets the foreground color of the text.
		 * 
		 * @param foregroundColor
		 */
		setForegroundColor(
			foregroundColor: SlidesApp.Color
		): SlidesApp.TextStyle
		/**
		 * Sets the foreground color of the text to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html'>ThemeColorType</a></code>.
		 * 
		 * @param color
		 */
		setForegroundColor(
			color: SlidesApp.ThemeColorType
		): SlidesApp.TextStyle
		/**
		 * Sets the foreground color of the text to the given hex color string.
		 * 
		 * <p>The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
		 * '#FFC0CB'.
		 * 
		 * @param hexColor
		 */
		setForegroundColor(
			hexColor: string
		): SlidesApp.TextStyle

		/**
		 * Sets the whether the text is italicized.
		 * 
		 * @param italic
		 */
		setItalic(
			italic: Boolean
		): SlidesApp.TextStyle
		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the zero-based index of the slide.
		 * 
		 * <p>Setting a link changes the style of the text to be underlined and to have a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html#HYPERLINK'>ThemeColorType.HYPERLINK</a></code> foreground color. This can be changed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setForegroundColor(String)'>setForegroundColor(hexColor)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setUnderline(Boolean)'>setUnderline(underline)</a></code>.
		 * 
		 * <p>Since links cannot be set on newline characters, newline characters in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>
		 * are ignored.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the first slide of the presentation.
		 * text.getTextStyle().setLinkSlide(0);
		 * </pre>
		 * 
		 * @param slideIndex - The zero-based index to the slide.
		 */
		setLinkSlide(
			slideIndex: number
		): SlidesApp.TextStyle
		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code>, the link is set by the given slide ID.
		 * 
		 * <p>Setting a link changes the style of the text to be underlined and to have a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html#HYPERLINK'>ThemeColorType.HYPERLINK</a></code> foreground color. This can be changed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setForegroundColor(String)'>setForegroundColor(hexColor)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setUnderline(Boolean)'>setUnderline(underline)</a></code>.
		 * 
		 * <p>Since links cannot be set on newline characters, newline characters in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>
		 * are ignored.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the first slide of the presentation.
		 * var slide = presentation.getSlides()[0];
		 * text.getTextStyle().setLinkSlide(slide);
		 * </pre>
		 * 
		 * @param slide - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to be linked.
		 */
		setLinkSlide(
			slide: SlidesApp.Slide
		): SlidesApp.TextStyle
		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the relative position of the slide.
		 * 
		 * <p>Setting a link changes the style of the text to be underlined and to have a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html#HYPERLINK'>ThemeColorType.HYPERLINK</a></code> foreground color. This can be changed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setForegroundColor(String)'>setForegroundColor(hexColor)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setUnderline(Boolean)'>setUnderline(underline)</a></code>.
		 * 
		 * <p>Since links cannot be set on newline characters, newline characters in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>
		 * are ignored.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the first slide of the presentation.
		 * text.getTextStyle().setLinkSlide(SlidesApp.SlidePosition.FIRST_SLIDE);
		 * </pre>
		 * 
		 * @param slidePosition - The relative <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code>.
		 */
		setLinkSlide(
			slidePosition: SlidesApp.SlidePosition
		): SlidesApp.TextStyle

		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given non-empty URL string.
		 * 
		 * <p>Setting a link changes the style of the text to be underlined and to have a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/theme-color-type.html#HYPERLINK'>ThemeColorType.HYPERLINK</a></code> foreground color. This can be changed via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setForegroundColor(String)'>setForegroundColor(hexColor)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-style.html#setUnderline(Boolean)'>setUnderline(underline)</a></code>.
		 * 
		 * <p>Since links cannot be set on newline characters, newline characters in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/text-range.html'>TextRange</a></code>
		 * are ignored.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the URL.
		 * text.getTextStyle().setLinkUrl("https://slides.google.com");
		 * </pre>
		 * 
		 * @param url - The URL string.
		 */
		setLinkUrl(
			url: string
		): SlidesApp.TextStyle
		/**
		 * Sets whether the text is rendered in small capital letters.
		 * 
		 * @param smallCaps
		 */
		setSmallCaps(
			smallCaps: Boolean
		): SlidesApp.TextStyle
		/**
		 * Sets whether the text is struck through.
		 * 
		 * @param strikethrough
		 */
		setStrikethrough(
			strikethrough: Boolean
		): SlidesApp.TextStyle
		/**
		 * Sets whether the text is underlined.
		 * 
		 * @param underline
		 */
		setUnderline(
			underline: Boolean
		): SlidesApp.TextStyle

	}

	class ThemeColor {
		private constructor();

		/**
		 * Get the type of this color.
		 * 
		 * @returns The color type.
		 */
		getColorType(): ColorType
		/**
		 * Get the theme color type of this color.
		 */
		getThemeColorType(): SlidesApp.ThemeColorType

	}

	enum ThemeColorType {
		/**
		 * Represents the first accent color.
		 */
		ACCENT1 = "ACCENT1",
		/**
		 * Represents the second accent color.
		 */
		ACCENT2 = "ACCENT2",
		/**
		 * Represents the third accent color.
		 */
		ACCENT3 = "ACCENT3",
		/**
		 * Represents the fourth accent color.
		 */
		ACCENT4 = "ACCENT4",
		/**
		 * Represents the fifth accent color.
		 */
		ACCENT5 = "ACCENT5",
		/**
		 * Represents the sixth accent color.
		 */
		ACCENT6 = "ACCENT6",
		/**
		 * Represents the first dark color.
		 */
		DARK1 = "DARK1",
		/**
		 * Represents the second dark color.
		 */
		DARK2 = "DARK2",
		/**
		 * Represents the color to use for visited hyperlinks.
		 */
		FOLLOWED_HYPERLINK = "FOLLOWED_HYPERLINK",
		/**
		 * Represents the color to use for hyperlinks.
		 */
		HYPERLINK = "HYPERLINK",
		/**
		 * Represents the first light color.
		 */
		LIGHT1 = "LIGHT1",
		/**
		 * Represents the second light color.
		 */
		LIGHT2 = "LIGHT2",
		/**
		 * Represents a theme color that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	class Video {
		private constructor();

		/**
		 * Aligns the element to the specified alignment position on the page.
		 * 
		 * @param alignmentPosition - The position to align this page element to on the page.
		 * 
		 * @returns This page element, for chaining.
		 */
		alignOnPage(
			alignmentPosition: SlidesApp.AlignmentPosition
		): SlidesApp.Video
		/**
		 * Brings the page element forward on the page by one element.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		bringForward(): SlidesApp.Video
		/**
		 * Brings the page element to the front of the page.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		bringToFront(): SlidesApp.Video
		/**
		 * Duplicates the page element.
		 * 
		 * <p>The duplicate page element is placed on the same page at the same position as the original.
		 * 
		 * @returns The new duplicate of this page element.
		 */
		duplicate(): SlidesApp.PageElement
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/border.html'>Border</a></code> of the video.
		 * 
		 * @returns The border setting for this video.
		 */
		getBorder(): SlidesApp.Border
		/**
		 * Returns the list of <code>ConnectionSite</code>s on the page element, or an empty list if the page
		 * element does not have any connection sites.
		 * 
		 * @returns The connection sites list, which may be empty if this element has no connection sites.
		 */
		getConnectionSites(): SlidesApp.ConnectionSite[]
		/**
		 * Returns the page element's description. The description is combined with the title to display
		 * and read alt text.
		 * 
		 * @returns The page element's description.
		 */
		getDescription(): string
		/**
		 * Gets the element's height in points, which is the height of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @returns The page element's inherent height in points, or <code>null</code> if the page element does
		 *     not have a height.
		 */
		getHeight(): Number
		/**
		 * Returns the element's inherent height in points.
		 * 
		 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
		 * conjunction with the element's transform to determine the element's final visual appearance.
		 * 
		 * @returns The page element's inherent height in points, or <code>null</code> if the page element does
		 *     not have a height.
		 */
		getInherentHeight(): Number
		/**
		 * Returns the element's inherent width in points.
		 * 
		 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
		 * conjunction with the element's transform to determine the element's final visual appearance.
		 * 
		 * @returns The page element's inherent width in points, or <code>null</code> if the page element does
		 *     not have a width.
		 */
		getInherentWidth(): Number
		/**
		 * Returns the element's horizontal position in points, measured from the upper-left corner of the
		 * page when the element has no rotation.
		 * 
		 * @returns This element's horizonal position in points, from the upper-left corner of the page.
		 */
		getLeft(): Number
		/**
		 * Returns the unique ID for this object. Object IDs used by pages and page elements share the
		 * same namespace.
		 * 
		 * @returns The unique ID for this object.
		 */
		getObjectId(): string
		/**
		 * Returns the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
		 * 
		 * @returns The page element's type.
		 */
		getPageElementType(): SlidesApp.PageElementType
		/**
		 * Returns the group this page element belongs to, or <code>null</code> if the element is not in a
		 * group.
		 * 
		 * @returns The group this page element belongs to, or <code>null</code>.
		 */
		getParentGroup(): SlidesApp.Group
		/**
		 * Returns the page this page element is on.
		 * 
		 * @returns The page this element resides on.
		 */
		getParentPage(): SlidesApp.Page
		/**
		 * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
		 * means no rotation.
		 * 
		 * @returns The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).
		 */
		getRotation(): Number
		/**
		 * Gets the video source.
		 * 
		 * @returns The source of this video.
		 */
		getSource(): SlidesApp.VideoSourceType
		/**
		 * Gets an URL to the video thumbnail. This URL is tagged with the account of the requester.
		 * Anyone with the URL effectively accesses the thumbnail as the original requester. Access to the
		 * thumbnail may be lost if the presentation's sharing settings change. The URL expires after a
		 * short period of time.
		 * 
		 * @returns The URL of the video thumbnail.
		 */
		getThumbnailUrl(): string
		/**
		 * Returns the page element's title. The title is combined with the description to display and
		 * read alt text.
		 * 
		 * @returns The page element's title.
		 */
		getTitle(): string
		/**
		 * Gets the element's vertical position in points, measured from the upper-left corner of the page
		 * when the element has no rotation.
		 * 
		 * @returns This element's vertical position in points, from the upper-left corner of the page.
		 */
		getTop(): Number
		/**
		 * Returns the page element's transform.
		 * 
		 * <p>The visual appearance of the page element is determined by its absolute transform. To
		 * compute the absolute transform, preconcatenate a page element's transform with the transforms
		 * of all of its parent groups. If the page element is not in a group, its absolute transform is
		 * the same as the value in this field.
		 * 
		 * @returns The page element's transform.
		 */
		getTransform(): SlidesApp.AffineTransform
		/**
		 * Gets an URL to the video. The URL is valid as long as the source video exists and sharing
		 * settings do not change. Returns <code>null</code> when the video source is not supported.
		 * 
		 * @returns The URL of this video, or <code>null</code> if the video source is not supported.
		 */
		getUrl(): string
		/**
		 * Gets the video source's unique identifier for this video.
		 * 
		 * @returns The source ID for this video.
		 */
		getVideoId(): string
		/**
		 * Returns the element's width in points, which is the width of the element's bounding box when
		 * the element has no rotation.
		 * 
		 * @returns The page element's inherent width in points, or <code>null</code> if the page element does
		 *     not have a width.
		 */
		getWidth(): Number
		/**
		 * Preconcatenates the provided transform to the existing transform of the page element.
		 * 
		 * <pre class="prettyprint"><code>
		 * newTransform = argument * existingTransform
		 * </code></pre>
		 * 
		 * <p>For example, to move a page elements 36 points to the left:
		 * 
		 * <pre class="prettyprint"><code>
		 * element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
		 *     .setTranslateX(-36.0)
		 *     .build());
		 * </code></pre>
		 * 
		 * <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
		 * 
		 * @param transform - The transform to preconcatenate onto this page element's transform.
		 * 
		 * @returns This page element, for chaining.
		 */
		preconcatenateTransform(
			transform: SlidesApp.AffineTransform
		): SlidesApp.Video
		/**
		 * Removes the page element.
		 * 
		 * <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
		 * group itself is also removed.
		 * 
		 * <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
		 * are also removed.
		 */
		remove(): void
		/**
		 * Scales the element's height by the specified ratio. The element's height is the height of its
		 * bounding box when the element has no rotation.
		 * 
		 * @param ratio - The ratio to scale this page element's height by.
		 * 
		 * @returns This page element, for chaining.
		 */
		scaleHeight(
			ratio: Number
		): SlidesApp.Video
		/**
		 * Scales the element's width by the specified ratio. The element's width is the width of its
		 * bounding box when the element has no rotation.
		 * 
		 * @param ratio - The ratio to scale this page element's width by.
		 * 
		 * @returns This page element, for chaining.
		 */
		scaleWidth(
			ratio: Number
		): SlidesApp.Video
		/**
		 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
		 * selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var pageElement = slide.getPageElements()[0];
		 * // Only select this page element and replace any previous selection.
		 * pageElement.select();
		 * </code></pre>
		 */
		select(): void
		/**
		 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>Pass <code>true</code> to this method to select only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and remove any
		 * previous selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 * 
		 * <p>Pass <code>false</code> to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code>
		 * objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.
		 * 
		 * <p>The following conditions must be met while selecting a page element using a <code>false</code>
		 * parameter:
		 * 
		 * <ol>
		 *   <li>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 *   <li>There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected.
		 * </ol>
		 * 
		 * <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
		 * first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * // First select the slide page, as the current page selection.
		 * slide.selectAsCurrentPage();
		 * // Then select all the page elements in the selected slide page.
		 * var pageElements = slide.getPageElements();
		 * for (var i = 0; i &lt; pageElements.length; i++) {
		 *   pageElements[i].select(false);
		 * }
		 * </code></pre>
		 * 
		 * @param replace - If <code>true</code>, the selection replaces any previous selection; otherwise the
		 *     selection is added to any previous selection.
		 */
		select(
			replace: Boolean
		): void

		/**
		 * Sends the page element backward on the page by one element.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		sendBackward(): SlidesApp.Video
		/**
		 * Sends the page element to the back of the page.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		sendToBack(): SlidesApp.Video
		/**
		 * Sets the page element's alt text description.
		 * 
		 * <p>The method is not supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the first page element&#39;s alt text description to &quot;new alt text description&quot;.
		 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
		 * pageElement.setDescription(&#39;new alt text description&#39;);
		 * Logger.log(pageElement.getDescription());
		 * </code></pre>
		 * 
		 * @param description - The string to set the alt text description to.
		 * 
		 * @returns This page element.
		 */
		setDescription(
			description: string
		): SlidesApp.Video
		/**
		 * Sets the element's height in points, which is the height of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @param height - The new height of this page element to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setHeight(
			height: Number
		): SlidesApp.Video
		/**
		 * Sets the element's horizontal position in points, measured from the upper-left corner of the
		 * page when the element has no rotation.
		 * 
		 * @param left - The new horizontal position to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setLeft(
			left: Number
		): SlidesApp.Video
		/**
		 * Sets the element's clockwise rotation angle around its center in degrees.
		 * 
		 * @param angle - The new clockwise rotation angle to set, in degrees.
		 * 
		 * @returns This page element, for chaining.
		 */
		setRotation(
			angle: Number
		): SlidesApp.Video
		/**
		 * Sets the page element's alt text title.
		 * 
		 * <p>The method is not supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the first page element&#39;s alt text title to &quot;new alt text title&quot;.
		 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
		 * pageElement.setTitle(&#39;new alt text title&#39;);
		 * Logger.log(pageElement.getTitle());
		 * </code></pre>
		 * 
		 * @param title - The string to set the alt text title to.
		 * 
		 * @returns This page element.
		 */
		setTitle(
			title: string
		): SlidesApp.Video
		/**
		 * Sets the element's vertical position in points, measured from the upper-left corner of the page
		 * when the element has no rotation.
		 * 
		 * @param top - The new vertical position to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setTop(
			top: Number
		): SlidesApp.Video
		/**
		 * Sets the transform of the page element with the provided transform.
		 * 
		 * <p>Updating the transform of a group changes the absolute transform of the page elements in
		 * that group, which can change their visual appearance.
		 * 
		 * <p>Updating the transform of a page element that is in a group only changes the transform of
		 * that page element; it doesn't affect the transforms of the group or other page elements in the
		 * group.
		 * 
		 * <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/video.html#getTransform()'>getTransform()</a></code>.
		 * 
		 * @param transform - The transform that is set for this page element.
		 * 
		 * @returns This element, for chaining.
		 */
		setTransform(
			transform: SlidesApp.AffineTransform
		): SlidesApp.Video
		/**
		 * Sets the element's width in points, which is the width of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @param width - The new width of this page element to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setWidth(
			width: Number
		): SlidesApp.Video

	}

	enum VideoSourceType {
		/**
		 * A video source type that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
		/**
		 * YouTube video.
		 */
		YOUTUBE = "YOUTUBE",
	}

	class WordArt {
		private constructor();

		/**
		 * Aligns the element to the specified alignment position on the page.
		 * 
		 * @param alignmentPosition - The position to align this page element to on the page.
		 * 
		 * @returns This page element, for chaining.
		 */
		alignOnPage(
			alignmentPosition: SlidesApp.AlignmentPosition
		): SlidesApp.WordArt
		/**
		 * Brings the page element forward on the page by one element.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		bringForward(): SlidesApp.WordArt
		/**
		 * Brings the page element to the front of the page.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		bringToFront(): SlidesApp.WordArt
		/**
		 * Duplicates the page element.
		 * 
		 * <p>The duplicate page element is placed on the same page at the same position as the original.
		 * 
		 * @returns The new duplicate of this page element.
		 */
		duplicate(): SlidesApp.PageElement
		/**
		 * Returns the list of <code>ConnectionSite</code>s on the page element, or an empty list if the page
		 * element does not have any connection sites.
		 * 
		 * @returns The connection sites list, which may be empty if this element has no connection sites.
		 */
		getConnectionSites(): SlidesApp.ConnectionSite[]
		/**
		 * Returns the page element's description. The description is combined with the title to display
		 * and read alt text.
		 * 
		 * @returns The page element's description.
		 */
		getDescription(): string
		/**
		 * Gets the element's height in points, which is the height of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @returns The page element's inherent height in points, or <code>null</code> if the page element does
		 *     not have a height.
		 */
		getHeight(): Number
		/**
		 * Returns the element's inherent height in points.
		 * 
		 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
		 * conjunction with the element's transform to determine the element's final visual appearance.
		 * 
		 * @returns The page element's inherent height in points, or <code>null</code> if the page element does
		 *     not have a height.
		 */
		getInherentHeight(): Number
		/**
		 * Returns the element's inherent width in points.
		 * 
		 * <p>The page element's transform is relative to its inherent size. Use the inherent size in
		 * conjunction with the element's transform to determine the element's final visual appearance.
		 * 
		 * @returns The page element's inherent width in points, or <code>null</code> if the page element does
		 *     not have a width.
		 */
		getInherentWidth(): Number
		/**
		 * Returns the element's horizontal position in points, measured from the upper-left corner of the
		 * page when the element has no rotation.
		 * 
		 * @returns This element's horizonal position in points, from the upper-left corner of the page.
		 */
		getLeft(): Number
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> or <code>null</code> if there is no link.
		 * 
		 * <pre class="prettyprint">
		 * var link = shape.getLink();
		 * if (link != null) {
		 *   Logger.log('Shape has a link of type: ' + link.getLinkType());
		 * }
		 * </pre>
		 */
		getLink(): SlidesApp.Link
		/**
		 * Returns the unique ID for this object. Object IDs used by pages and page elements share the
		 * same namespace.
		 * 
		 * @returns The unique ID for this object.
		 */
		getObjectId(): string
		/**
		 * Returns the page element's type, represented as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element-type.html'>PageElementType</a></code> enum.
		 * 
		 * @returns The page element's type.
		 */
		getPageElementType(): SlidesApp.PageElementType
		/**
		 * Returns the group this page element belongs to, or <code>null</code> if the element is not in a
		 * group.
		 * 
		 * @returns The group this page element belongs to, or <code>null</code>.
		 */
		getParentGroup(): SlidesApp.Group
		/**
		 * Returns the page this page element is on.
		 * 
		 * @returns The page this element resides on.
		 */
		getParentPage(): SlidesApp.Page
		/**
		 * Gets the text that is rendered as word art.
		 * 
		 * @returns The text that is rendered as this word art.
		 */
		getRenderedText(): string
		/**
		 * Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
		 * means no rotation.
		 * 
		 * @returns The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).
		 */
		getRotation(): Number
		/**
		 * Returns the page element's title. The title is combined with the description to display and
		 * read alt text.
		 * 
		 * @returns The page element's title.
		 */
		getTitle(): string
		/**
		 * Gets the element's vertical position in points, measured from the upper-left corner of the page
		 * when the element has no rotation.
		 * 
		 * @returns This element's vertical position in points, from the upper-left corner of the page.
		 */
		getTop(): Number
		/**
		 * Returns the page element's transform.
		 * 
		 * <p>The visual appearance of the page element is determined by its absolute transform. To
		 * compute the absolute transform, preconcatenate a page element's transform with the transforms
		 * of all of its parent groups. If the page element is not in a group, its absolute transform is
		 * the same as the value in this field.
		 * 
		 * @returns The page element's transform.
		 */
		getTransform(): SlidesApp.AffineTransform
		/**
		 * Returns the element's width in points, which is the width of the element's bounding box when
		 * the element has no rotation.
		 * 
		 * @returns The page element's inherent width in points, or <code>null</code> if the page element does
		 *     not have a width.
		 */
		getWidth(): Number
		/**
		 * Preconcatenates the provided transform to the existing transform of the page element.
		 * 
		 * <pre class="prettyprint"><code>
		 * newTransform = argument * existingTransform
		 * </code></pre>
		 * 
		 * <p>For example, to move a page elements 36 points to the left:
		 * 
		 * <pre class="prettyprint"><code>
		 * element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
		 *     .setTranslateX(-36.0)
		 *     .build());
		 * </code></pre>
		 * 
		 * <p>You can also replace the page element's transform with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html#setTransform(AffineTransform)'>setTransform(transform)</a></code>.
		 * 
		 * @param transform - The transform to preconcatenate onto this page element's transform.
		 * 
		 * @returns This page element, for chaining.
		 */
		preconcatenateTransform(
			transform: SlidesApp.AffineTransform
		): SlidesApp.WordArt
		/**
		 * Removes the page element.
		 * 
		 * <p>If after a remove operation, a <code>Group</code> contains only one or no page elements, the
		 * group itself is also removed.
		 * 
		 * <p>If a placeholder <code>Shape</code> is removed on a master or layout, any empty inheriting shapes
		 * are also removed.
		 */
		remove(): void
		/**
		 * Removes a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code>.
		 * 
		 * <pre class="prettyprint">
		 * shape.removeLink();
		 * </pre>
		 */
		removeLink(): void
		/**
		 * Scales the element's height by the specified ratio. The element's height is the height of its
		 * bounding box when the element has no rotation.
		 * 
		 * @param ratio - The ratio to scale this page element's height by.
		 * 
		 * @returns This page element, for chaining.
		 */
		scaleHeight(
			ratio: Number
		): SlidesApp.WordArt
		/**
		 * Scales the element's width by the specified ratio. The element's width is the width of its
		 * bounding box when the element has no rotation.
		 * 
		 * @param ratio - The ratio to scale this page element's width by.
		 * 
		 * @returns This page element, for chaining.
		 */
		scaleWidth(
			ratio: Number
		): SlidesApp.WordArt
		/**
		 * Selects only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation and removes any previous
		 * selection. This is same as calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html#select(Boolean)'>select(replace)</a></code> with <code>true</code>.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>This sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * var pageElement = slide.getPageElements()[0];
		 * // Only select this page element and replace any previous selection.
		 * pageElement.select();
		 * </code></pre>
		 */
		select(): void
		/**
		 * Selects the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> in the active presentation.
		 * 
		 * <p>A script can only access the selection of the user who is running the script, and only if
		 * the script is <a href="/apps-script/scripts_containers">bound</a> to the presentation.
		 * 
		 * <p>Pass <code>true</code> to this method to select only the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> and remove any
		 * previous selection. This also sets the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> as the
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 * 
		 * <p>Pass <code>false</code> to select multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> objects. The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code>
		 * objects must be in the same <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>.
		 * 
		 * <p>The following conditions must be met while selecting a page element using a <code>false</code>
		 * parameter:
		 * 
		 * <ol>
		 *   <li>The parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page-element.html'>PageElement</a></code> object must be the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()'>current page selection</a></code>.
		 *   <li>There should not be multiple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code> objects selected.
		 * </ol>
		 * 
		 * <p>To make sure that’s the case the preferred approach is to select the parent <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html'>Page</a></code>
		 * first using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()'>Page.selectAsCurrentPage()</a></code> and then select the page elements in that page.
		 * 
		 * <pre class="prettyprint"><code>
		 * var slide = SlidesApp.getActivePresentation().getSlides()[0];
		 * // First select the slide page, as the current page selection.
		 * slide.selectAsCurrentPage();
		 * // Then select all the page elements in the selected slide page.
		 * var pageElements = slide.getPageElements();
		 * for (var i = 0; i &lt; pageElements.length; i++) {
		 *   pageElements[i].select(false);
		 * }
		 * </code></pre>
		 * 
		 * @param replace - If <code>true</code>, the selection replaces any previous selection; otherwise the
		 *     selection is added to any previous selection.
		 */
		select(
			replace: Boolean
		): void

		/**
		 * Sends the page element backward on the page by one element.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		sendBackward(): SlidesApp.WordArt
		/**
		 * Sends the page element to the back of the page.
		 * 
		 * <p>The page element must not be in a group.
		 * 
		 * @returns This page element, for chaining.
		 */
		sendToBack(): SlidesApp.WordArt
		/**
		 * Sets the page element's alt text description.
		 * 
		 * <p>The method is not supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the first page element&#39;s alt text description to &quot;new alt text description&quot;.
		 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
		 * pageElement.setDescription(&#39;new alt text description&#39;);
		 * Logger.log(pageElement.getDescription());
		 * </code></pre>
		 * 
		 * @param description - The string to set the alt text description to.
		 * 
		 * @returns This page element.
		 */
		setDescription(
			description: string
		): SlidesApp.WordArt
		/**
		 * Sets the element's height in points, which is the height of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @param height - The new height of this page element to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setHeight(
			height: Number
		): SlidesApp.WordArt
		/**
		 * Sets the element's horizontal position in points, measured from the upper-left corner of the
		 * page when the element has no rotation.
		 * 
		 * @param left - The new horizontal position to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setLeft(
			left: Number
		): SlidesApp.WordArt
		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the zero-based index of the slide.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the first slide of the presentation.
		 * shape.setLinkSlide(0);
		 * </pre>
		 * 
		 * @param slideIndex - The zero-based index to the slide.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkSlide(
			slideIndex: number
		): SlidesApp.Link
		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code>, the link is set by the given slide ID.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the first slide of the presentation.
		 * var slide = presentation.getSlides()[0];
		 * shape.setLinkSlide(slide);
		 * </pre>
		 * 
		 * @param slide - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> to be linked.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkSlide(
			slide: SlidesApp.Slide
		): SlidesApp.Link
		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide.html'>Slide</a></code> using the relative position of the slide.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the first slide of the presentation.
		 * shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
		 * </pre>
		 * 
		 * @param slidePosition - The relative <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/slide-position.html'>SlidePosition</a></code>.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkSlide(
			slidePosition: SlidesApp.SlidePosition
		): SlidesApp.Link

		/**
		 * Sets a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> to the given non-empty URL string.
		 * 
		 * <pre class="prettyprint">
		 * // Set a link to the URL.
		 * shape.setLinkUrl("https://slides.google.com");
		 * </pre>
		 * 
		 * @param url - The URL string.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/link.html'>Link</a></code> that was set
		 */
		setLinkUrl(
			url: string
		): SlidesApp.Link
		/**
		 * Sets the element's clockwise rotation angle around its center in degrees.
		 * 
		 * @param angle - The new clockwise rotation angle to set, in degrees.
		 * 
		 * @returns This page element, for chaining.
		 */
		setRotation(
			angle: Number
		): SlidesApp.WordArt
		/**
		 * Sets the page element's alt text title.
		 * 
		 * <p>The method is not supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/group.html'>Group</a></code> elements.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the first page element&#39;s alt text title to &quot;new alt text title&quot;.
		 * var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
		 * pageElement.setTitle(&#39;new alt text title&#39;);
		 * Logger.log(pageElement.getTitle());
		 * </code></pre>
		 * 
		 * @param title - The string to set the alt text title to.
		 * 
		 * @returns This page element.
		 */
		setTitle(
			title: string
		): SlidesApp.WordArt
		/**
		 * Sets the element's vertical position in points, measured from the upper-left corner of the page
		 * when the element has no rotation.
		 * 
		 * @param top - The new vertical position to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setTop(
			top: Number
		): SlidesApp.WordArt
		/**
		 * Sets the transform of the page element with the provided transform.
		 * 
		 * <p>Updating the transform of a group changes the absolute transform of the page elements in
		 * that group, which can change their visual appearance.
		 * 
		 * <p>Updating the transform of a page element that is in a group only changes the transform of
		 * that page element; it doesn't affect the transforms of the group or other page elements in the
		 * group.
		 * 
		 * <p>For details on how transforms impact visual appearance of page elements, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/slides/word-art.html#getTransform()'>getTransform()</a></code>.
		 * 
		 * @param transform - The transform that is set for this page element.
		 * 
		 * @returns This element, for chaining.
		 */
		setTransform(
			transform: SlidesApp.AffineTransform
		): SlidesApp.WordArt
		/**
		 * Sets the element's width in points, which is the width of the element's bounding box when the
		 * element has no rotation.
		 * 
		 * @param width - The new width of this page element to set, in points.
		 * 
		 * @returns This page element, for chaining.
		 */
		setWidth(
			width: Number
		): SlidesApp.WordArt

	}

}
