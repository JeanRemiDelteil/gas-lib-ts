/** Module: FormApp */

type FormApp = typeof FormApp;
declare namespace FormApp {

	/**
	 * Creates and returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>. Throws an exception if the given title is <code>null</code>
	 * or empty.
	 * 
	 * <pre class="prettyprint">
	 * // Create and open a form.
	 * var form = FormApp.create('Form Name');
	 * </pre>
	 * 
	 * @param title - the name of the new form
	 * 
	 * @returns the new form
	 */
	function create(
		title: string
	): FormApp.Form
	/**
	 * Returns an instance of a CheckboxGridValidationBuilder which can be used to set validation on a
	 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-grid-item.html'>CheckboxGridItem</a></code>.
	 */
	function createCheckboxGridValidation(): FormApp.CheckboxGridValidationBuilder
	/**
	 * Returns an instance of a CheckboxValidationBuilder which can be used to set validation on a
	 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>.
	 */
	function createCheckboxValidation(): FormApp.CheckboxValidationBuilder
	/**
	 * Returns an instance of a QuizFeedbackBuilder which can be used to set feedback on a gradeable
	 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code>.
	 */
	function createFeedback(): FormApp.QuizFeedbackBuilder
	/**
	 * Returns an instance of a GridValidationBuilder which can be used to set validation on a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/grid-item.html'>GridItem</a></code>.
	 */
	function createGridValidation(): FormApp.GridValidationBuilder
	/**
	 * Returns an instance of a ParagraphTextValidationBuilder which can be used to set validation on
	 * a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>.
	 */
	function createParagraphTextValidation(): FormApp.ParagraphTextValidationBuilder
	/**
	 * Returns an instance of a TextValidationBuilder which can be used to set validation on a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>.
	 */
	function createTextValidation(): FormApp.TextValidationBuilder
	/**
	 * Returns the form to which the script is <a
	 * href="/apps-script/scripts_containers">container-bound</a>. To interact with forms to which the
	 * script is not container-bound, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-app.html#openById(String)'>openById(id)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-app.html#openByUrl(String)'>openByUrl(url)</a></code>
	 * instead.
	 * 
	 * <pre class="prettyprint">
	 * // Get the form to which this script is bound.
	 * var form = FormApp.getActiveForm();
	 * </pre>
	 * 
	 * @returns the form to which the script is bound, or <code>null</code> if the script is not bound to a
	 *     form
	 */
	function getActiveForm(): FormApp.Form
	/**
	 * Returns an instance of the form editor's user-interface environment that allows the script to
	 * add features like menus, dialogs, and sidebars. A script can only interact with the UI for the
	 * current instance of an open form editor (not the view that a respondent sees), and only if the
	 * script is <a href="/apps-script/scripts_containers">bound</a> to the form. For more
	 * information, see the guides to <a href="/apps-script/guides/menus">menus</a> and <a
	 * href="/apps-script/guides/dialogs">dialogs and sidebars</a>.
	 * 
	 * <pre class="prettyprint">
	 * // Add a custom menu to the active form, including a separator and a sub-menu.
	 * function onOpen(e) {
	 *   FormApp.getUi()
	 *       .createMenu('My Menu')
	 *       .addItem('My menu item', 'myFunction')
	 *       .addSeparator()
	 *       .addSubMenu(FormApp.getUi().createMenu('My sub-menu')
	 *           .addItem('One sub-menu item', 'mySecondFunction')
	 *           .addItem('Another sub-menu item', 'myThirdFunction'))
	 *       .addToUi();
	 * }
	 * </pre>
	 * 
	 * @returns an instance of this form's user-interface environment
	 */
	function getUi(): Ui
	/**
	 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code> with the specified ID. Throws an exception if the ID is invalid or the
	 * user does not have permission to open the form.
	 * 
	 * <pre class="prettyprint">
	 * // Open a form by ID.
	 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
	 * </pre>
	 * 
	 * @param id - the ID of the form to open
	 * 
	 * @returns the form with the given ID
	 */
	function openById(
		id: string
	): FormApp.Form
	/**
	 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code> with the specified URL. Throws an exception if the URL is invalid or
	 * the user does not have permission to open the form.
	 * 
	 * <pre class="prettyprint">
	 * // Open a form by URL.
	 * var form = FormApp.openByUrl(
	 *     'https://docs.google.com/forms/d/1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3/edit'
	 *     );
	 * </pre>
	 * 
	 * @param url - the URL of the form to open
	 * 
	 * @returns the form with the given URL
	 */
	function openByUrl(
		url: string
	): FormApp.Form

	enum Alignment {
		/**
		 * Align the image to the center of the form.
		 */
		CENTER = "CENTER",
		/**
		 * Align the image to the left side of the form.
		 */
		LEFT = "LEFT",
		/**
		 * Align the image to the right side of the form.
		 */
		RIGHT = "RIGHT",
	}

	class CheckboxGridItem {
		private constructor();

		/**
		 * Removes any data validation for this grid item.
		 * 
		 * @returns this item, for chaining
		 */
		clearValidation(): FormApp.CheckboxGridItem
		/**
		 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this checkbox grid item. The argument <code>responses</code>
		 * must be a <code>String[][]</code> array of arrays containing as many values as the number of inputs
		 * in the checkbox grid. A <code>null</code> element for a non-required checkbox grid question
		 * indicates no response to that row. Throws an exception if any of the values does not match a
		 * valid choice.
		 * 
		 * @param responses - an array of arrays of valid answers for this checkbox grid item
		 * 
		 * @returns the item response
		 */
		createResponse(
			responses: string[][]
		): FormApp.ItemResponse
		/**
		 * Creates a copy of this item and appends it to the end of the form.
		 * 
		 * @returns a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-grid-item.html'>CheckboxGridItem</a></code>, for chaining
		 */
		duplicate(): FormApp.CheckboxGridItem
		/**
		 * Gets the values for every column in the grid.
		 * 
		 * @returns an array of column values, which respondents see as labels when viewing the form
		 */
		getColumns(): string[]
		/**
		 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @returns the item's help text or description text
		 */
		getHelpText(): string
		/**
		 * Gets the item's unique identifier.
		 * 
		 * @returns the item's ID
		 */
		getId(): number
		/**
		 * Gets the index of the item among all the items in the form.
		 * 
		 * @returns the index of the item
		 */
		getIndex(): number
		/**
		 * Gets the values for every row in the grid.
		 * 
		 * @returns an array of row values, which respondents see as labels when viewing the form
		 */
		getRows(): string[]
		/**
		 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @returns the item's title or header text
		 */
		getTitle(): string
		/**
		 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
		 * 
		 * @returns the item's type
		 */
		getType(): FormApp.ItemType
		/**
		 * Determines whether the respondent must answer the question.
		 * 
		 * @returns whether the respondent must answer the question
		 */
		isRequired(): Boolean
		/**
		 * Sets the columns of the grid based on an array of values. Throws an exception if the given
		 * array is empty.
		 * 
		 * @param columns - an array of column values, which respondents see as labels when viewing the form
		 * 
		 * @returns this item, for chaining
		 */
		setColumns(
			columns: string[]
		): FormApp.CheckboxGridItem
		/**
		 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @param text - the new help text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-grid-item.html'>CheckboxGridItem</a></code>, for chaining
		 */
		setHelpText(
			text: string
		): FormApp.CheckboxGridItem
		/**
		 * Sets whether the respondent must answer the question.
		 * 
		 * @param enabled - whether the respondent must answer the question
		 * 
		 * @returns the current item (for chaining)
		 */
		setRequired(
			enabled: Boolean
		): FormApp.CheckboxGridItem
		/**
		 * Sets the rows of the grid based on an array of values. Throws an exception if the given array
		 * is empty.
		 * 
		 * @param rows - an array of row values, which respondents see as labels when viewing the form
		 * 
		 * @returns this item, for chaining
		 */
		setRows(
			rows: string[]
		): FormApp.CheckboxGridItem
		/**
		 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @param title - the new title or header text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-grid-item.html'>CheckboxGridItem</a></code>, for chaining
		 */
		setTitle(
			title: string
		): FormApp.CheckboxGridItem
		/**
		 * Sets the data validation for this checkbox grid item. Passing in null or a validation without
		 * any require functions called will remove any prior validation.
		 * 
		 * @param validation - a CheckboxGridValidation to apply to this item.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-grid-item.html'>CheckboxGridItem</a></code>, for chaining
		 */
		setValidation(
			validation: FormApp.CheckboxGridValidation
		): FormApp.CheckboxGridItem

	}

	class CheckboxGridValidation {
		private constructor();

	}

	class CheckboxGridValidationBuilder {
		private constructor();

		/**
		 * Requires limit of one response per column for a grid item.
		 * 
		 * @returns this validation builder, for chaining
		 */
		requireLimitOneResponsePerColumn(): FormApp.CheckboxGridValidationBuilder

	}

	class CheckboxItem {
		private constructor();

		/**
		 * Removes any data validation for this checkbox item.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
		 */
		clearValidation(): FormApp.CheckboxItem
		/**
		 * Creates a new choice.
		 * 
		 * @param value - the choice's value, which respondents see as a label when viewing the form
		 * 
		 * @returns the new choice
		 */
		createChoice(
			value: string
		): FormApp.Choice
		/**
		 * Creates a new choice.
		 * 
		 * @param value - the choice's value, which respondents see as a label when viewing the form
		 * @param isCorrect - whether the choice is a correct answer
		 * 
		 * @returns the new choice
		 */
		createChoice(
			value: string,
			isCorrect: Boolean
		): FormApp.Choice

		/**
		 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this checkbox item. The argument <code>responses</code> is a
		 * <code>String[]</code> array containing values that need to be checked. Throws an exception if any
		 * value does not match a valid choice for this item, unless <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html#showOtherOption(Boolean)'>showOtherOption(enabled)</a></code> is set to <code>true</code>.
		 * 
		 * @param responses - an array of valid answers for this multiple-choice item
		 * 
		 * @returns the item response
		 */
		createResponse(
			responses: string[]
		): FormApp.ItemResponse
		/**
		 * Creates a copy of this item and appends it to the end of the form.
		 * 
		 * @returns a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
		 */
		duplicate(): FormApp.CheckboxItem
		/**
		 * Gets all choices for an item.
		 * 
		 * @returns an array of choices
		 */
		getChoices(): FormApp.Choice[]
		/**
		 * Returns the feedback that is shown to respondents when they respond correctly to a question.
		 * 
		 * @returns the feedback, if any.
		 */
		getFeedbackForCorrect(): FormApp.QuizFeedback
		/**
		 * Returns the feedback that is shown to respondents when they respond incorrectly to a question.
		 * 
		 * @returns the feedback, if any.
		 */
		getFeedbackForIncorrect(): FormApp.QuizFeedback
		/**
		 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @returns the item's help text or description text
		 */
		getHelpText(): string
		/**
		 * Gets the item's unique identifier.
		 * 
		 * @returns the item's ID
		 */
		getId(): number
		/**
		 * Gets the index of the item among all the items in the form.
		 * 
		 * @returns the index of the item
		 */
		getIndex(): number
		/**
		 * Returns the point value of a gradeable item.
		 * 
		 * @returns the number of points a question is worth.
		 */
		getPoints(): number
		/**
		 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @returns the item's title or header text
		 */
		getTitle(): string
		/**
		 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
		 * 
		 * @returns the item's type
		 */
		getType(): FormApp.ItemType
		/**
		 * Determines whether the item has an "other" option.
		 * 
		 * @returns <code>true</code> if the item has an "other" option; <code>false</code> if not
		 */
		hasOtherOption(): Boolean
		/**
		 * Determines whether the respondent must answer the question.
		 * 
		 * @returns whether the respondent must answer the question
		 */
		isRequired(): Boolean
		/**
		 * Sets the choices for an item from an array of strings. Throws an exception if the given array
		 * is empty.
		 * 
		 * <pre class="prettyprint">
		 * // Open a form by ID and add a new list item.
		 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
		 * var item = form.addListItem();
		 * item.setTitle('Do you prefer cats or dogs?');
		 * item.setChoiceValues(['Dogs', 'Cats']);
		 * </pre>
		 * 
		 * @param values - the array of choice values, which respondents see as labels when viewing the form
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
		 */
		setChoiceValues(
			values: string[]
		): FormApp.CheckboxItem
		/**
		 * Sets an array of choices for an item. Throws an exception if the given array is empty or
		 * contains a <code>null</code> element.
		 * 
		 * <pre class="prettyprint">
		 * // Open a form by ID and add a new list item.
		 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
		 * var item = form.addListItem();
		 * item.setTitle('Do you prefer cats or dogs?')
		 * item.setChoices([
		 *     item.createChoice('Cats'),
		 *     item.createChoice('Dogs')
		 * ]);
		 * </pre>
		 * 
		 * @param choices - an array of choices
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
		 */
		setChoices(
			choices: FormApp.Choice[]
		): FormApp.CheckboxItem
		/**
		 * Sets the feedback to be shown to respondents when they respond correctly to a question.
		 * 
		 * <pre class="prettyprint">
		 * // Open a form by ID and add a new list item.
		 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
		 * var item = form.addListItem();
		 * item.setTitle('Do you prefer cats or dogs?');
		 * // Set "Dogs" as the correct answer to this question.
		 * item.setChoices([
		 *   item.createChoice('Dogs', true),
		 *   item.createChoice('Cats', false)]);
		 * // Add feedback which will be shown for correct responses; ie "Dogs".
		 * item.setFeedbackForCorrect(
		 *     FormApp.createFeedback().setDisplayText("Dogs rule, cats drool.").build());
		 * </pre>
		 * 
		 * @param feedback - the new feedback. A null value will clear the feedback.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
		 */
		setFeedbackForCorrect(
			feedback: FormApp.QuizFeedback
		): FormApp.CheckboxItem
		/**
		 * Sets the feedback to be shown to respondents when they respond incorrectly to a question.
		 * 
		 * @param feedback - the new feedback
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
		 */
		setFeedbackForIncorrect(
			feedback: FormApp.QuizFeedback
		): FormApp.CheckboxItem
		/**
		 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @param text - the new help text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
		 */
		setHelpText(
			text: string
		): FormApp.CheckboxItem
		/**
		 * Sets the number of points a gradeable item is worth. The default for new items is 0.
		 * 
		 * @param points - the number of a points a question item is worth
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
		 */
		setPoints(
			points: number
		): FormApp.CheckboxItem
		/**
		 * Sets whether the respondent must answer the question.
		 * 
		 * @param enabled - whether the respondent must answer the question
		 * 
		 * @returns the current item (for chaining)
		 */
		setRequired(
			enabled: Boolean
		): FormApp.CheckboxItem
		/**
		 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @param title - the new title or header text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
		 */
		setTitle(
			title: string
		): FormApp.CheckboxItem
		/**
		 * Sets the data validation for this checkbox item. Passing in null or a validation without any
		 * require functions called will remove any prior validation.
		 * 
		 * @param validation - a CheckboxValidation to apply to this item.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
		 */
		setValidation(
			validation: FormApp.CheckboxValidation
		): FormApp.CheckboxItem
		/**
		 * Sets whether the item has an "other" option. The default for a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code> or
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code> is <code>false</code>.
		 * 
		 * @param enabled - <code>true</code> if the item has an "other" option; <code>false</code> if not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code>, for chaining
		 */
		showOtherOption(
			enabled: Boolean
		): FormApp.CheckboxItem

	}

	class CheckboxValidation {
		private constructor();

	}

	class CheckboxValidationBuilder {
		private constructor();

		/**
		 * Require at least this many choices to be selected.
		 * 
		 * @param number
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-validation-builder.html'>CheckboxValidationBuilder</a></code>, for chaining
		 */
		requireSelectAtLeast(
			number: number
		): FormApp.CheckboxValidationBuilder
		/**
		 * Require at most this many choices to be selected.
		 * 
		 * @param number
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-validation-builder.html'>CheckboxValidationBuilder</a></code>, for chaining
		 */
		requireSelectAtMost(
			number: number
		): FormApp.CheckboxValidationBuilder
		/**
		 * Require exactly this many choices to be selected.
		 * 
		 * @param number
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-validation-builder.html'>CheckboxValidationBuilder</a></code>, for chaining
		 */
		requireSelectExactly(
			number: number
		): FormApp.CheckboxValidationBuilder

	}

	class Choice {
		private constructor();

		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code> set as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-navigation-type.html'>GO_TO_PAGE</a></code> destination
		 * if the responder selects this choice and completes the current page. This method applies only
		 * to choices associated with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItems</a></code>; for other choices,
		 * it returns <code>null</code>.
		 * 
		 * @returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-navigation-type.html'>GO_TO_PAGE</a></code> destination for this choice, or <code>null</code> if there is none
		 */
		getGotoPage(): FormApp.PageBreakItem
		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-navigation-type.html'>PageNavigationType</a></code> that occurs if the responder selects this choice and
		 * completes the current page. This method applies only to choices associated with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItems</a></code>; for other choices, it returns <code>null</code>.
		 * 
		 * @returns the navigation action for this choice, or <code>null</code> if there is none
		 */
		getPageNavigationType(): FormApp.PageNavigationType
		/**
		 * Gets the choice's value, which respondents see as a label when viewing the form.
		 * 
		 * @returns the choice's value
		 */
		getValue(): string
		/**
		 * Gets whether the choice is a correct answer for the question. This method only applies to
		 * questions that are part of a quiz; for non-quiz forms, it returns false.
		 * 
		 * @returns Whether the choice is a correct answer.
		 */
		isCorrectAnswer(): Boolean

	}

	class DateItem {
		private constructor();

		/**
		 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this date item. The time fields of the <code>Date</code>
		 * object are ignored; by default, only the year, month, and day fields are used. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html#setIncludesYear(Boolean)'>setIncludesYear(enabled)</a></code> is set to <code>false</code>, the year is
		 * ignored as well.
		 * 
		 * @param response - a <code>Date</code> object that represents a month, day, and possibly year
		 * 
		 * @returns the item response
		 */
		createResponse(
			response: Date
		): FormApp.ItemResponse
		/**
		 * Creates a copy of this item and appends it to the end of the form.
		 * 
		 * @returns a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html'>DateItem</a></code>, for chaining
		 */
		duplicate(): FormApp.DateItem
		/**
		 * Returns the feedback that is shown to respondents when they respond to a gradeable question.
		 * 
		 * @returns the feedback, if any.
		 */
		getGeneralFeedback(): FormApp.QuizFeedback
		/**
		 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @returns the item's help text or description text
		 */
		getHelpText(): string
		/**
		 * Gets the item's unique identifier.
		 * 
		 * @returns the item's ID
		 */
		getId(): number
		/**
		 * Gets the index of the item among all the items in the form.
		 * 
		 * @returns the index of the item
		 */
		getIndex(): number
		/**
		 * Returns the point value of a gradeable item.
		 * 
		 * @returns the number of points a question is worth.
		 */
		getPoints(): number
		/**
		 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @returns the item's title or header text
		 */
		getTitle(): string
		/**
		 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
		 * 
		 * @returns the item's type
		 */
		getType(): FormApp.ItemType
		/**
		 * Determines whether the date item includes a year option.
		 * 
		 * @returns <code>true</code> if the date includes a year setting; <code>false</code> if not
		 */
		includesYear(): Boolean
		/**
		 * Determines whether the respondent must answer the question.
		 * 
		 * @returns whether the respondent must answer the question
		 */
		isRequired(): Boolean
		/**
		 * Sets the feedback to be shown to respondents when they respond to a gradeable question that
		 * doesn't have a correct or incorrect answer (ie questions that require manual grading).
		 * 
		 * @param feedback - the new feedback
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html'>DateItem</a></code>, for chaining
		 */
		setGeneralFeedback(
			feedback: FormApp.QuizFeedback
		): FormApp.DateItem
		/**
		 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @param text - the new help text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html'>DateItem</a></code>, for chaining
		 */
		setHelpText(
			text: string
		): FormApp.DateItem
		/**
		 * Sets whether the date item includes a year setting. The default for new date items is <code>true</code>.
		 * 
		 * @param enableYear - <code>true</code> if the date includes a year setting; <code>false</code> if not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html'>DateItem</a></code>, for chaining
		 */
		setIncludesYear(
			enableYear: Boolean
		): FormApp.DateItem
		/**
		 * Sets the number of points a gradeable item is worth. The default for new items is 0.
		 * 
		 * @param points - the number of a points a question item is worth
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html'>DateItem</a></code>, for chaining
		 */
		setPoints(
			points: number
		): FormApp.DateItem
		/**
		 * Sets whether the respondent must answer the question.
		 * 
		 * @param enabled - whether the respondent must answer the question
		 * 
		 * @returns the current item (for chaining)
		 */
		setRequired(
			enabled: Boolean
		): FormApp.DateItem
		/**
		 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @param title - the new title or header text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html'>DateItem</a></code>, for chaining
		 */
		setTitle(
			title: string
		): FormApp.DateItem

	}

	class DateTimeItem {
		private constructor();

		/**
		 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this date-time item. The seconds field of the <code>Date</code> object is ignored; by default, the year, month, day, hour, and minute fields are used. If
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html#setIncludesYear(Boolean)'>setIncludesYear(enabled)</a></code> is set to <code>false</code>, the year is
		 * ignored as well.
		 * 
		 * @param response - a <code>Date</code> object that represents a month, day, hour, minute, and possibly
		 *     year
		 * 
		 * @returns the item response
		 */
		createResponse(
			response: Date
		): FormApp.ItemResponse
		/**
		 * Creates a copy of this item and appends it to the end of the form.
		 * 
		 * @returns a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html'>DateTimeItem</a></code>, for chaining
		 */
		duplicate(): FormApp.DateTimeItem
		/**
		 * Returns the feedback that is shown to respondents when they respond to a gradeable question.
		 * 
		 * @returns the feedback, if any.
		 */
		getGeneralFeedback(): FormApp.QuizFeedback
		/**
		 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @returns the item's help text or description text
		 */
		getHelpText(): string
		/**
		 * Gets the item's unique identifier.
		 * 
		 * @returns the item's ID
		 */
		getId(): number
		/**
		 * Gets the index of the item among all the items in the form.
		 * 
		 * @returns the index of the item
		 */
		getIndex(): number
		/**
		 * Returns the point value of a gradeable item.
		 * 
		 * @returns the number of points a question is worth.
		 */
		getPoints(): number
		/**
		 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @returns the item's title or header text
		 */
		getTitle(): string
		/**
		 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
		 * 
		 * @returns the item's type
		 */
		getType(): FormApp.ItemType
		/**
		 * Determines whether the date item includes a year option.
		 * 
		 * @returns <code>true</code> if the date includes a year setting; <code>false</code> if not
		 */
		includesYear(): Boolean
		/**
		 * Determines whether the respondent must answer the question.
		 * 
		 * @returns whether the respondent must answer the question
		 */
		isRequired(): Boolean
		/**
		 * Sets the feedback to be shown to respondents when they respond to a gradeable question that
		 * doesn't have a correct or incorrect answer (ie questions that require manual grading).
		 * 
		 * @param feedback - the new feedback
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html'>DateTimeItem</a></code>, for chaining
		 */
		setGeneralFeedback(
			feedback: FormApp.QuizFeedback
		): FormApp.DateTimeItem
		/**
		 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @param text - the new help text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html'>DateTimeItem</a></code>, for chaining
		 */
		setHelpText(
			text: string
		): FormApp.DateTimeItem
		/**
		 * Sets whether the date item includes a year setting. The default for new date items is <code>true</code>.
		 * 
		 * @param enableYear - <code>true</code> if the date includes a year setting; <code>false</code> if not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html'>DateTimeItem</a></code>, for chaining
		 */
		setIncludesYear(
			enableYear: Boolean
		): FormApp.DateTimeItem
		/**
		 * Sets the number of points a gradeable item is worth. The default for new items is 0.
		 * 
		 * @param points - the number of a points a question item is worth
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html'>DateTimeItem</a></code>, for chaining
		 */
		setPoints(
			points: number
		): FormApp.DateTimeItem
		/**
		 * Sets whether the respondent must answer the question.
		 * 
		 * @param enabled - whether the respondent must answer the question
		 * 
		 * @returns the current item (for chaining)
		 */
		setRequired(
			enabled: Boolean
		): FormApp.DateTimeItem
		/**
		 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @param title - the new title or header text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-time-item.html'>DateTimeItem</a></code>, for chaining
		 */
		setTitle(
			title: string
		): FormApp.DateTimeItem

	}

	enum DestinationType {
		/**
		 * A Google Sheets spreadsheet as a destination for form responses.
		 */
		SPREADSHEET = "SPREADSHEET",
	}

	class DurationItem {
		private constructor();

		/**
		 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this date item. The arguments <code>hours</code>, <code>minutes</code>, and <code>seconds</code> are best represented as integers from <code>0</code> to <code>72</code> for
		 * <code>hours</code> and <code>0</code> to <code>59</code> for <code>minutes</code> and <code>seconds</code>. Values that
		 * exceed those bounds are clamped: for example, <code>24, 60, 90</code> is interpreted as 24:59:59.
		 * 
		 * @param hours - the hours, represented as an integer from <code>0</code> to <code>72</code>
		 * @param minutes - the minutes, represented as an integer from <code>0</code> to <code>59</code>
		 * @param seconds - the seconds, represented as an integer from <code>0</code> to <code>59</code>
		 * 
		 * @returns the item response
		 */
		createResponse(
			hours: number,
			minutes: number,
			seconds: number
		): FormApp.ItemResponse
		/**
		 * Creates a copy of this item and appends it to the end of the form.
		 * 
		 * @returns a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/duration-item.html'>DurationItem</a></code>, for chaining
		 */
		duplicate(): FormApp.DurationItem
		/**
		 * Returns the feedback that is shown to respondents when they respond to a gradeable question.
		 * 
		 * @returns the feedback, if any.
		 */
		getGeneralFeedback(): FormApp.QuizFeedback
		/**
		 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @returns the item's help text or description text
		 */
		getHelpText(): string
		/**
		 * Gets the item's unique identifier.
		 * 
		 * @returns the item's ID
		 */
		getId(): number
		/**
		 * Gets the index of the item among all the items in the form.
		 * 
		 * @returns the index of the item
		 */
		getIndex(): number
		/**
		 * Returns the point value of a gradeable item.
		 * 
		 * @returns the number of points a question is worth.
		 */
		getPoints(): number
		/**
		 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @returns the item's title or header text
		 */
		getTitle(): string
		/**
		 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
		 * 
		 * @returns the item's type
		 */
		getType(): FormApp.ItemType
		/**
		 * Determines whether the respondent must answer the question.
		 * 
		 * @returns whether the respondent must answer the question
		 */
		isRequired(): Boolean
		/**
		 * Sets the feedback to be shown to respondents when they respond to a gradeable question that
		 * doesn't have a correct or incorrect answer (ie questions that require manual grading).
		 * 
		 * @param feedback - the new feedback
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/duration-item.html'>DurationItem</a></code>, for chaining
		 */
		setGeneralFeedback(
			feedback: FormApp.QuizFeedback
		): FormApp.DurationItem
		/**
		 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @param text - the new help text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/duration-item.html'>DurationItem</a></code>, for chaining
		 */
		setHelpText(
			text: string
		): FormApp.DurationItem
		/**
		 * Sets the number of points a gradeable item is worth. The default for new items is 0.
		 * 
		 * @param points - the number of a points a question item is worth
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/duration-item.html'>DurationItem</a></code>, for chaining
		 */
		setPoints(
			points: number
		): FormApp.DurationItem
		/**
		 * Sets whether the respondent must answer the question.
		 * 
		 * @param enabled - whether the respondent must answer the question
		 * 
		 * @returns the current item (for chaining)
		 */
		setRequired(
			enabled: Boolean
		): FormApp.DurationItem
		/**
		 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @param title - the new title or header text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/duration-item.html'>DurationItem</a></code>, for chaining
		 */
		setTitle(
			title: string
		): FormApp.DurationItem

	}

	enum FeedbackType {
		/**
		 * Feedback that is automatically displayed to respondents for a question answered correctly.
		 * Correct feedback can only be attached to a question type that supports autograding (e.g. radio,
		 * checkbox, select)
		 */
		CORRECT = "CORRECT",
		/**
		 * Feedback that is automatically displayed to respondents when they submit their response.
		 * General feedback can only be attached to question types that do not support auto-grading, but
		 * are gradeable (ie everything but grid)
		 */
		GENERAL = "GENERAL",
		/**
		 * Feedback that is automatically displayed to respondents for a question answered incorrectly.
		 * Incorrect feedback can only be attached to a question type that supports autograding (e.g.
		 * radio, checkbox, select)
		 */
		INCORRECT = "INCORRECT",
	}

	class Form {
		private constructor();

		/**
		 * Appends a new question item, presented as a grid of columns and rows, that allows the
		 * respondent to select multiple choices per row from a sequence of checkboxes.
		 * 
		 * @returns the newly created item
		 */
		addCheckboxGridItem(): FormApp.CheckboxGridItem
		/**
		 * Appends a new question item that allows the respondent to select one or more checkboxes, as
		 * well as an optional "other" field.
		 * 
		 * @returns the newly created item
		 */
		addCheckboxItem(): FormApp.CheckboxItem
		/**
		 * Appends a new question item that allows the respondent to indicate a date.
		 * 
		 * @returns the newly created item
		 */
		addDateItem(): FormApp.DateItem
		/**
		 * Appends a new question item that allows the respondent to indicate a date and time.
		 * 
		 * @returns the newly created item
		 */
		addDateTimeItem(): FormApp.DateTimeItem
		/**
		 * Appends a new question item that allows the respondent to indicate a length of time.
		 * 
		 * @returns the newly created item
		 */
		addDurationItem(): FormApp.DurationItem
		/**
		 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>. If the user was already
		 * on the list of viewers, this method promotes the user out of the list of viewers.
		 * 
		 * @param emailAddress - The email address of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining.
		 */
		addEditor(
			emailAddress: string
		): FormApp.Form
		/**
		 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>. If the user was already
		 * on the list of viewers, this method promotes the user out of the list of viewers.
		 * 
		 * @param user - A representation of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining.
		 */
		addEditor(
			user: User
		): FormApp.Form

		/**
		 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>. If any of the
		 * users were already on the list of viewers, this method promotes them out of the list of
		 * viewers.
		 * 
		 * @param emailAddresses - An array of email addresses of the users to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining.
		 */
		addEditors(
			emailAddresses: string[]
		): FormApp.Form
		/**
		 * Appends a new question item, presented as a grid of columns and rows, that allows the
		 * respondent to select one choice per row from a sequence of radio buttons.
		 * 
		 * @returns the newly created item
		 */
		addGridItem(): FormApp.GridItem
		/**
		 * Appends a new layout item that displays an image.
		 * 
		 * @returns the newly created item
		 */
		addImageItem(): FormApp.ImageItem
		/**
		 * Appends a new question item that allows the respondent to select one choice from a drop-down
		 * list.
		 * 
		 * @returns the newly created item
		 */
		addListItem(): FormApp.ListItem
		/**
		 * Appends a new question item that allows the respondent to select one choice from a list of
		 * radio buttons or an optional "other" field.
		 * 
		 * @returns the newly created item
		 */
		addMultipleChoiceItem(): FormApp.MultipleChoiceItem
		/**
		 * Appends a new layout item that marks the start of a page.
		 * 
		 * @returns the newly created item
		 */
		addPageBreakItem(): FormApp.PageBreakItem
		/**
		 * Appends a new question item that allows the respondent to enter a block of text.
		 * 
		 * @returns the newly created item
		 */
		addParagraphTextItem(): FormApp.ParagraphTextItem
		/**
		 * Appends a new question item that allows the respondent to choose one option from a numbered
		 * sequence of radio buttons.
		 * 
		 * @returns the newly created item
		 */
		addScaleItem(): FormApp.ScaleItem
		/**
		 * Appends a new layout item that visually indicates the start of a section.
		 * 
		 * @returns the newly created item
		 */
		addSectionHeaderItem(): FormApp.SectionHeaderItem
		/**
		 * Appends a new question item that allows the respondent to enter a single line of text.
		 * 
		 * @returns the newly created item
		 */
		addTextItem(): FormApp.TextItem
		/**
		 * Appends a new question item that allows the respondent to indicate a time of day.
		 * 
		 * @returns the newly created item
		 */
		addTimeItem(): FormApp.TimeItem
		/**
		 * Appends a new layout item that displays a video.
		 * 
		 * @returns the newly created item
		 */
		addVideoItem(): FormApp.VideoItem
		/**
		 * Determines whether the form displays a link to edit a response after submitting it.
		 * 
		 * <p>Regardless of this setting, the method <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#getEditResponseUrl()'>FormResponse.getEditResponseUrl()</a></code> allows a
		 * script author who has edit access to the form to generate a URL that can be used to edit a
		 * response.
		 * 
		 * @returns <code>true</code> if the form displays an "Edit your response" link; <code>false</code> if not
		 */
		canEditResponse(): Boolean
		/**
		 * Determines whether the form collects respondents' email addresses.
		 * 
		 * @returns <code>true</code> if the form collects email addresses; <code>false</code> if not
		 */
		collectsEmail(): Boolean
		/**
		 * Creates a new response to the form. To answer a question item, create an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code>
		 * from the item, then attach it to this form response by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#withItemResponse(ItemResponse)'>FormResponse.withItemResponse(response)</a></code>. To save the assembled response, call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#submit()'>FormResponse.submit()</a></code>.
		 * 
		 * @returns the newly created form response
		 */
		createResponse(): FormApp.FormResponse
		/**
		 * Deletes all submitted responses from the form's response store. This method does not delete
		 * copies of responses stored in an external response destination (like a spreadsheet), but does
		 * clear the form's summary view.
		 * 
		 * <p><aside class="warning">Beware: this method is irreversible.</aside>
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
		 */
		deleteAllResponses(): FormApp.Form
		/**
		 * Deletes the given item. Throws a scripting exception if the item has already been deleted.
		 * 
		 * @param item - the item to be deleted
		 */
		deleteItem(
			item: FormApp.Item
		): void
		/**
		 * Deletes the item at a given index among all the items in the form. Throws a scripting exception
		 * if no item exists at the given index.
		 * 
		 * @param index - the index of the item among all the items in the form
		 */
		deleteItem(
			index: number
		): void

		/**
		 * Deletes a single response from the form's response store. This method does not delete copies of
		 * responses stored in an external response destination (like a spreadsheet), but does remove the
		 * response from the form's summary view. The response ID can be retrieved with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#getId()'>FormResponse.getId()</a></code>.
		 * 
		 * <p><aside class="warning"><b>Warning</b>: This method is irreversible.</aside>
		 * 
		 * @param responseId - the ID of the form response to delete
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
		 */
		deleteResponse(
			responseId: string
		): FormApp.Form
		/**
		 * Gets the form's confirmation message.
		 * 
		 * @returns the form's confirmation message
		 */
		getConfirmationMessage(): string
		/**
		 * Gets the custom message that will be displayed if the form is not accepting responses, or an
		 * empty string if no custom message has been set.
		 * 
		 * @returns the custom message that will be displayed if the form is not accepting responses, or an
		 *     empty string if no custom message has been set
		 */
		getCustomClosedFormMessage(): string
		/**
		 * Gets the form's description.
		 * 
		 * @returns the form's description
		 */
		getDescription(): string
		/**
		 * Gets the ID of the form's response destination.
		 * 
		 * @returns the ID of the form's response destination
		 */
		getDestinationId(): string
		/**
		 * Gets the type of the form's response destination.
		 * 
		 * @returns the type of the form's response destination
		 */
		getDestinationType(): FormApp.DestinationType
		/**
		 * Gets the URL that can be used to access the form's edit mode.
		 * 
		 * @returns the URL to edit the form
		 */
		getEditUrl(): string
		/**
		 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>.
		 * 
		 * @returns An array of users with edit permission.
		 */
		getEditors(): User[]
		/**
		 * Gets the ID of the form.
		 * 
		 * @returns the ID of the form
		 */
		getId(): string
		/**
		 * Gets the item with a given ID. Returns <code>null</code> if the ID does not correspond to an item in
		 * the form.
		 * 
		 * @param id - the item's ID
		 * 
		 * @returns the item with the given ID, or <code>null</code> if the item does not exist in the form
		 */
		getItemById(
			id: number
		): FormApp.Item
		/**
		 * Gets an array of all items in the form.
		 * 
		 * @returns an array of all items in the form
		 */
		getItems(): FormApp.Item[]
		/**
		 * Gets an array of all items of a given type.
		 * 
		 * @param itemType - the type of items to retrieve
		 * 
		 * @returns an array of all items of that type
		 */
		getItems(
			itemType: FormApp.ItemType
		): FormApp.Item[]

		/**
		 * Gets the URL that can be used to respond to the form.
		 * 
		 * @returns the URL to respond to the form
		 */
		getPublishedUrl(): string
		/**
		 * Gets a single form response based on its response ID. Response IDs can be retrieved from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#getId()'>FormResponse.getId()</a></code>.
		 * 
		 * @param responseId - the ID for the form response
		 * 
		 * @returns the form response
		 */
		getResponse(
			responseId: string
		): FormApp.FormResponse
		/**
		 * Gets an array of all of the form's responses.
		 * 
		 * @returns an array of all of the form's responses
		 */
		getResponses(): FormApp.FormResponse[]
		/**
		 * Gets an array of all of the form's responses after a given date and time.
		 * 
		 * @param timestamp - the earliest date and time for which form responses should be returned
		 * 
		 * @returns the list of form responses
		 */
		getResponses(
			timestamp: Date
		): FormApp.FormResponse[]

		/**
		 * Determines whether the order of the questions on each page of the form is randomized.
		 * 
		 * @returns <code>true</code> if the order of the questions on each page of the form is randomized;
		 *     <code>false</code> if not
		 */
		getShuffleQuestions(): Boolean
		/**
		 * Gets the URL that can be used to view a summary of the form's responses. Unless <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#setPublishingSummary(Boolean)'>setPublishingSummary(enabled)</a></code> is set to <code>true</code>, only users with edit permission to the form
		 * will be able to access the URL.
		 * 
		 * @returns the URL to view a summary of responses
		 */
		getSummaryUrl(): string
		/**
		 * Gets the form's title.
		 * 
		 * @returns the form's title
		 */
		getTitle(): string
		/**
		 * Determines whether the form allows only one response per respondent. If the value is <code>true</code>, the script cannot submit form responses at all.
		 * 
		 * @returns <code>true</code> if the form allows only one response per respondent; <code>false</code> if not
		 */
		hasLimitOneResponsePerUser(): Boolean
		/**
		 * Determines whether the form displays a progress bar.
		 * 
		 * @returns <code>true</code> if the form displays a progress bar; <code>false</code> if not
		 */
		hasProgressBar(): Boolean
		/**
		 * Determines whether the form displays a link to submit another response after a respondent
		 * completes the form.
		 * 
		 * @returns <code>true</code> if the form displays a "Submit another response" link; <code>false</code> if
		 *     not
		 */
		hasRespondAgainLink(): Boolean
		/**
		 * Determines whether the form is currently accepting responses.
		 * 
		 * @returns <code>true</code> if the form is accepting responses; <code>false</code> if not
		 */
		isAcceptingResponses(): Boolean
		/**
		 * Determines whether the form displays a link to view a summary of responses after a respondent
		 * completes the form.
		 * 
		 * @returns <code>true</code> if the form displays a "See previous responses" link; <code>false</code> if not
		 */
		isPublishingSummary(): Boolean
		/**
		 * Determines whether the form is a quiz.
		 * 
		 * @returns <code>true</code> if the form is accepting responses; <code>false</code> if not
		 */
		isQuiz(): Boolean
		/**
		 * Moves a given item to an given index among all the items in the form. Throws a scripting
		 * exception if the given index is out of bounds.
		 * 
		 * @param item - the item to move
		 * @param toIndex - the new index for the item among all the items in the form
		 * 
		 * @returns the item that was moved
		 */
		moveItem(
			item: FormApp.Item,
			toIndex: number
		): FormApp.Item
		/**
		 * Moves an item at a given index among all the items in the form to another given index. Throws a
		 * scripting exception if the <code>to</code> index is out of bounds.
		 * 
		 * @param from - the current index of the item among all the items in the form
		 * @param to - the new index for the item among all the items in the form
		 * 
		 * @returns the item that was moved
		 */
		moveItem(
			from: number,
			to: number
		): FormApp.Item

		/**
		 * Unlinks the form from its current response destination. The unlinked former destination still
		 * retains a copy of all previous responses. All forms, including those that do not have a
		 * destination set explicitly, <a href="https://support.google.com/drive/answer/2917686">save a
		 * copy of responses in the form's response store</a>. If the form does not currently have a
		 * response destination, this method has no effect.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
		 */
		removeDestination(): FormApp.Form
		/**
		 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>. This method doesn't
		 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code> if they belong to a class of users who have
		 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code> is shared with the user's entire
		 * domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of viewers.
		 * 
		 * @param emailAddress - The email address of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining.
		 */
		removeEditor(
			emailAddress: string
		): FormApp.Form
		/**
		 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>. This method doesn't
		 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code> if they belong to a class of users who have
		 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code> is shared with the user's entire
		 * domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of viewers.
		 * 
		 * @param user - A representation of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining.
		 */
		removeEditor(
			user: User
		): FormApp.Form

		/**
		 * Determines whether the form requires respondents to log in to an account in the same domain or
		 * a subdomain before responding.
		 * 
		 * @returns <code>true</code> if the form requires users to log in; <code>false</code> if not
		 */
		requiresLogin(): Boolean
		/**
		 * Sets whether the form is currently accepting responses. The default for new forms is <code>true</code>.
		 * 
		 * @param enabled - <code>true</code> if the form should accept responses; <code>false</code> if not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
		 */
		setAcceptingResponses(
			enabled: Boolean
		): FormApp.Form
		/**
		 * Sets whether the form displays a link to edit a response after submitting it. The default for
		 * new forms is <code>false</code>.
		 * 
		 * <p>Regardless of this setting, the method <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#getEditResponseUrl()'>FormResponse.getEditResponseUrl()</a></code> allows a
		 * script author who has edit permission to the form to generate a URL that can be used to edit a
		 * response.
		 * 
		 * @param enabled - <code>true</code> if the form should display an "Edit your response" link; <code>false</code> if not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
		 */
		setAllowResponseEdits(
			enabled: Boolean
		): FormApp.Form
		/**
		 * Sets whether the form collects respondents' email addresses. The default for new forms is
		 * <code>false</code>.
		 * 
		 * @param collect - <code>true</code> if the form should collect email addresses; <code>false</code> if not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
		 */
		setCollectEmail(
			collect: Boolean
		): FormApp.Form
		/**
		 * Sets the form's confirmation message.
		 * 
		 * @param message - the form's new confirmation message
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
		 */
		setConfirmationMessage(
			message: string
		): FormApp.Form
		/**
		 * Sets the message to display if the form is not accepting responses. If no message is set, the
		 * form will use a default message.
		 * 
		 * @param message - the message to display if the form is not accepting responses
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
		 */
		setCustomClosedFormMessage(
			message: string
		): FormApp.Form
		/**
		 * Sets the form's description.
		 * 
		 * @param description - the form's new description
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
		 */
		setDescription(
			description: string
		): FormApp.Form
		/**
		 * Sets the destination where form responses are saved. All forms, including those that do not
		 * have a destination set explicitly, <a
		 * href="https://support.google.com/drive/answer/2917686">save a copy of responses in the form's
		 * response store</a>.
		 * 
		 * @param type - the type of the form's response destination
		 * @param id - the ID of the form's response destination
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
		 */
		setDestination(
			type: FormApp.DestinationType,
			id: string
		): FormApp.Form
		/**
		 * Sets whether the form is a quiz. The default for new forms is <code>false</code>.
		 * 
		 * <p>Graded questions are only allowed in Quizzes, so setting this to false will cause all
		 * grading options to be removed from all questions.
		 * 
		 * <p>Quiz settings are only available in the new Forms UI; making a form a Quiz will opt the form
		 * into using the new UI.
		 * 
		 * @param enabled - <code>true</code> if quiz features should be enabled for the form; <code>false</code> if
		 *     not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
		 */
		setIsQuiz(
			enabled: Boolean
		): FormApp.Form
		/**
		 * Sets whether the form allows only one response per respondent. The default for new forms is
		 * <code>false</code>. If the value is set to <code>true</code>, the script cannot submit form responses at
		 * all.
		 * 
		 * @param enabled - <code>true</code> if the form should allow only one response per respondent; <code>false</code> if not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
		 */
		setLimitOneResponsePerUser(
			enabled: Boolean
		): FormApp.Form
		/**
		 * Sets whether the form has a progress bar. The default for new forms is <code>false</code>.
		 * 
		 * @param enabled - <code>true</code> if the form should display a progress bar; <code>false</code> if not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
		 */
		setProgressBar(
			enabled: Boolean
		): FormApp.Form
		/**
		 * Sets whether the form displays a link to view a summary of responses after a respondent submits
		 * the form. The default for new forms is <code>false</code>.
		 * 
		 * @param enabled - <code>true</code> if the form should display a "See previous responses" link; <code>false</code> if not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
		 */
		setPublishingSummary(
			enabled: Boolean
		): FormApp.Form
		/**
		 * Sets whether the form requires respondents to log in to an account in the same domain or a
		 * subdomain before responding. The default for new forms is <code>false</code> unless a domain
		 * administrator changes the default.
		 * 
		 * <p>This feature is available only for forms created by G Suite users. Users of other types of
		 * Google accounts cannot be required to log in.
		 * 
		 * @param requireLogin - <code>true</code> if the form requires users to log in; <code>false</code> if not
		 * 
		 * @returns the current form (for chaining)
		 */
		setRequireLogin(
			requireLogin: Boolean
		): FormApp.Form
		/**
		 * Sets whether the form displays a link to submit another response after a respondent completes
		 * the form. The default for new forms is <code>true</code>.
		 * 
		 * @param enabled - <code>true</code> if the form should display a "Submit another response" link; <code>false</code> if not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
		 */
		setShowLinkToRespondAgain(
			enabled: Boolean
		): FormApp.Form
		/**
		 * Sets whether the order of the questions on each page of the form is randomized.
		 * 
		 * @param shuffle - <code>true</code> if the order of the questions on each page of the form should be
		 *     randomized; <code>false</code> if not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
		 */
		setShuffleQuestions(
			shuffle: Boolean
		): FormApp.Form
		/**
		 * Sets the form's title.
		 * 
		 * @param title - the form's new title
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
		 */
		setTitle(
			title: string
		): FormApp.Form
		/**
		 * Converts a long URL for a form to a short URL. Throws an exception if the long URL does not
		 * belong to Google Forms.
		 * 
		 * @param url
		 * 
		 * @returns a URL in the form <code>http://goo.gl/forms/1234</code>
		 */
		shortenFormUrl(
			url: string
		): string
		/**
		 * Submits grades for the given FormResponses.
		 * 
		 * @param responses
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html'>Form</a></code>, for chaining
		 */
		submitGrades(
			responses: FormApp.FormResponse[]
		): FormApp.Form

	}

	class FormResponse {
		private constructor();

		/**
		 * Generates a URL that can be used to edit a response that has already been submitted. If the
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#setAllowResponseEdits(Boolean)'>Form.setAllowResponseEdits(enabled)</a></code> setting is disabled, the link leads to a page that
		 * explains that editing form responses is disabled. Anyone who visits the link can edit the
		 * response, although they need an account with access to the form if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#setRequireLogin(Boolean)'>Form.setRequireLogin(requireLogin)</a></code> setting is enabled. If the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#setCollectEmail(Boolean)'>Form.setCollectEmail(collect)</a></code>
		 * setting is enabled, the form records the email address of the user who edited the response
		 * instead of the email address of the original respondent.
		 * 
		 * <p>For a form response that the script has created but not yet submitted, this method returns
		 * <code>null</code>.
		 * 
		 * @returns the URL to change a submitted response
		 */
		getEditResponseUrl(): string
		/**
		 * Gets all item responses contained in a form response, in the same order that the items appear
		 * in the form. This method works similarly to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#getItemResponses()'>getItemResponses()</a></code>, but to allow for grading
		 * a missing answer, it still returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> if the corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code>
		 * can be graded (ie has a point value), even if there isn't an actual response. However, if the
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code> isn't gradable, this method excludes that item from its returned array.
		 * 
		 * @returns an array of responses to every question item within the form for which the respondent
		 *     could receive a score.
		 */
		getGradableItemResponses(): FormApp.ItemResponse[]
		/**
		 * Gets the item response contained in a form response for a given item. This method works
		 * similarly to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html#getResponseForItem(Item)'>getResponseForItem(item)</a></code>, but to allow for grading a missing answer, it still
		 * returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> if the corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code> can be graded (ie has a point
		 * value), even if there isn't an actual response. However, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code> isn't gradable,
		 * this method returns <code>null</code>.
		 * 
		 * @param item
		 * 
		 * @returns the response for a given item, or <code>null</code> if none exists and the item is ungraded
		 */
		getGradableResponseForItem(
			item: FormApp.Item
		): FormApp.ItemResponse
		/**
		 * Gets the ID of the form response. This method returns <code>null</code> if the form response has not
		 * been submitted.
		 * 
		 * @returns the ID of the form response, or <code>null</code> if the form response has not been
		 *     submitted
		 */
		getId(): string
		/**
		 * Gets all item responses contained in a form response, in the same order that the items appear
		 * in the form. If the form response does not contain a response for a given <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>,
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/date-item.html'>DateItem</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/time-item.html'>TimeItem</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code>
		 * returned for that item will have an empty string as the response. If the form response omits a
		 * response for any other item type, this method excludes that item from its returned array.
		 * 
		 * @returns an array of responses to every question item within the form for which the respondent
		 *     provided an answer
		 */
		getItemResponses(): FormApp.ItemResponse[]
		/**
		 * Gets the email address of the person who submitted a response, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#setCollectEmail(Boolean)'>Form.setCollectEmail(collect)</a></code> setting is enabled.
		 * 
		 * <p>For a form response that the script has created but not yet submitted, this method returns
		 * <code>null</code>.
		 * 
		 * @returns the email address of the person who submitted this response, if available, or <code>null</code> if the script created this response but has not yet submitted it
		 */
		getRespondentEmail(): string
		/**
		 * Gets the item response contained in this form response for a given item.
		 * 
		 * @param item
		 * 
		 * @returns the response for a given item, or <code>null</code> if none exists
		 */
		getResponseForItem(
			item: FormApp.Item
		): FormApp.ItemResponse
		/**
		 * Gets the timestamp for a form response submission.
		 * 
		 * <p>For a form response that the script has created but not yet submitted, this method returns
		 * <code>null</code>.
		 * 
		 * @returns the timestamp at which this response was submitted, or <code>null</code> if the script
		 *     created this response but has not yet submitted it
		 */
		getTimestamp(): Date
		/**
		 * Submits the response. Throws a scripting exception if the response has already been submitted.
		 * 
		 * @returns a newly created response saved to the form's response store
		 */
		submit(): FormApp.FormResponse
		/**
		 * Generates a URL for the form in which the answers are pre-filled based on the answers in this
		 * form response.
		 * 
		 * @returns the URL for a form with pre-filled answers
		 */
		toPrefilledUrl(): string
		/**
		 * Adds the given item response's grades to a form response. This method applies only to form
		 * responses that have already been submitted, and only affects stored grades once they are
		 * submitted. This method also only updates the item response's grades; it does not affect the
		 * actual response (since the response has already been submitted). If this method is called
		 * multiple times for the same item, only the last grade is retained. If the ItemResponse contains
		 * no grades, this method will remove grades for the item.
		 * 
		 * <pre class="prettyprint">
		 * // Programmatically award partial credit for a given response
		 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
		 * var formResponses = form.getResponses();
		 * var formItems = form.getItems();
		 * for (var i = 0; i < formResponses.length; i++) {
		 *   var formResponse = formResponses[i];
		 *   for (var j = 0; j < formItems.length; j++) {
		 *     var item = formItems[j];
		 *     var points = item.asMultipleChoiceItem().getPoints();
		 *     var itemResponse = formResponse.getGradableResponseForItem(item);
		 *     Logger.log('Award half credit for answers containing the word "Kennedy"');
		 *     var answer = itemResponse.getResponse();
		 *     if (answer != null && answer.includes('Kennedy')) {
		 *       itemResponse.setScore(points / 2);
		 *       formResponse.withItemGrade(itemResponse);
		 *     }
		 *   }
		 * }
		 * form.submitGrades(formResponses);
		 * </pre>
		 * 
		 * @param gradedResponse
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html'>FormResponse</a></code>, for chaining
		 */
		withItemGrade(
			gradedResponse: FormApp.ItemResponse
		): FormApp.FormResponse
		/**
		 * Adds the given item response to a form response. This method applies only to form responses
		 * that the script has created but not yet submitted; it cannot affect stored responses. If this
		 * method is called multiple times for the same item, only the last item response is retained.
		 * 
		 * @param response
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form-response.html'>FormResponse</a></code>, for chaining
		 */
		withItemResponse(
			response: FormApp.ItemResponse
		): FormApp.FormResponse

	}

	class GridItem {
		private constructor();

		/**
		 * Removes any data validation for this grid item.
		 * 
		 * @returns this item, for chaining
		 */
		clearValidation(): FormApp.GridItem
		/**
		 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this grid item. The argument <code>responses</code> must be a
		 * <code>String[]</code> array containing as many values as the number of rows in the grid. A <code>null</code> element for a non-required grid question indicates no response to that row. Throws an
		 * exception if any of the values does not match a valid choice.
		 * 
		 * @param responses - an array of valid answers for this grid item
		 * 
		 * @returns the item response
		 */
		createResponse(
			responses: string[]
		): FormApp.ItemResponse
		/**
		 * Creates a copy of this item and appends it to the end of the form.
		 * 
		 * @returns a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/grid-item.html'>GridItem</a></code>, for chaining
		 */
		duplicate(): FormApp.GridItem
		/**
		 * Gets the values for every column in the grid.
		 * 
		 * @returns an array of column values, which respondents see as labels when viewing the form
		 */
		getColumns(): string[]
		/**
		 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @returns the item's help text or description text
		 */
		getHelpText(): string
		/**
		 * Gets the item's unique identifier.
		 * 
		 * @returns the item's ID
		 */
		getId(): number
		/**
		 * Gets the index of the item among all the items in the form.
		 * 
		 * @returns the index of the item
		 */
		getIndex(): number
		/**
		 * Gets the values for every row in the grid.
		 * 
		 * @returns an array of row values, which respondents see as labels when viewing the form
		 */
		getRows(): string[]
		/**
		 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @returns the item's title or header text
		 */
		getTitle(): string
		/**
		 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
		 * 
		 * @returns the item's type
		 */
		getType(): FormApp.ItemType
		/**
		 * Determines whether the respondent must answer the question.
		 * 
		 * @returns whether the respondent must answer the question
		 */
		isRequired(): Boolean
		/**
		 * Sets the columns of the grid based on an array of values. Throws an exception if the given
		 * array is empty.
		 * 
		 * @param columns - an array of column values, which respondents see as labels when viewing the form
		 * 
		 * @returns this item, for chaining
		 */
		setColumns(
			columns: string[]
		): FormApp.GridItem
		/**
		 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @param text - the new help text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/grid-item.html'>GridItem</a></code>, for chaining
		 */
		setHelpText(
			text: string
		): FormApp.GridItem
		/**
		 * Sets whether the respondent must answer the question.
		 * 
		 * @param enabled - whether the respondent must answer the question
		 * 
		 * @returns the current item (for chaining)
		 */
		setRequired(
			enabled: Boolean
		): FormApp.GridItem
		/**
		 * Sets the rows of the grid based on an array of values. Throws an exception if the given array
		 * is empty.
		 * 
		 * @param rows - an array of row values, which respondents see as labels when viewing the form
		 * 
		 * @returns this item, for chaining
		 */
		setRows(
			rows: string[]
		): FormApp.GridItem
		/**
		 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @param title - the new title or header text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/grid-item.html'>GridItem</a></code>, for chaining
		 */
		setTitle(
			title: string
		): FormApp.GridItem
		/**
		 * Sets the data validation for this grid item. Passing in null or a validation without any
		 * require functions called will remove any prior validation.
		 * 
		 * @param validation - a GridValidation to apply to this item.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/grid-item.html'>GridItem</a></code>, for chaining
		 */
		setValidation(
			validation: FormApp.GridValidation
		): FormApp.GridItem

	}

	class GridValidation {
		private constructor();

	}

	class GridValidationBuilder {
		private constructor();

		/**
		 * Requires limit of one response per column for a grid item.
		 * 
		 * @returns this validation builder, for chaining
		 */
		requireLimitOneResponsePerColumn(): FormApp.GridValidationBuilder

	}

	class ImageItem {
		private constructor();

		/**
		 * Creates a copy of this item and appends it to the end of the form.
		 * 
		 * @returns a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItem</a></code>, for chaining
		 */
		duplicate(): FormApp.ImageItem
		/**
		 * Gets the image's horizontal alignment.
		 * 
		 * @returns the horizontal alignment
		 */
		getAlignment(): FormApp.Alignment
		/**
		 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @returns the item's help text or description text
		 */
		getHelpText(): string
		/**
		 * Gets the item's unique identifier.
		 * 
		 * @returns the item's ID
		 */
		getId(): number
		/**
		 * Gets the image that is currently assigned to the item.
		 * 
		 * @returns the image data
		 */
		getImage(): Blob
		/**
		 * Gets the index of the item among all the items in the form.
		 * 
		 * @returns the index of the item
		 */
		getIndex(): number
		/**
		 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @returns the item's title or header text
		 */
		getTitle(): string
		/**
		 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
		 * 
		 * @returns the item's type
		 */
		getType(): FormApp.ItemType
		/**
		 * Gets the image's width in pixels.
		 * 
		 * @returns the width in pixels
		 */
		getWidth(): number
		/**
		 * Sets the image's horizontal alignment.
		 * 
		 * @param alignment - the horizontal alignment
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItem</a></code>, for chaining
		 */
		setAlignment(
			alignment: FormApp.Alignment
		): FormApp.ImageItem
		/**
		 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @param text - the new help text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItem</a></code>, for chaining
		 */
		setHelpText(
			text: string
		): FormApp.ImageItem
		/**
		 * Sets the image itself.
		 * 
		 * @param image - the image data
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItem</a></code>, for chaining
		 */
		setImage(
			image: BlobSource
		): FormApp.ImageItem
		/**
		 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @param title - the new title or header text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItem</a></code>, for chaining
		 */
		setTitle(
			title: string
		): FormApp.ImageItem
		/**
		 * Sets the image's width in pixels. Only the image's width can be set. Height is set
		 * automatically to maintain the image's proportions.
		 * 
		 * @param width - the width in pixels
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItem</a></code>, for chaining
		 */
		setWidth(
			width: number
		): FormApp.ImageItem

	}

	class Item {
		private constructor();

		/**
		 * Returns the item as a checkbox grid item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>CHECKBOX_GRID</code>.
		 * 
		 * @returns the checkbox grid item
		 */
		asCheckboxGridItem(): FormApp.CheckboxGridItem
		/**
		 * Returns the item as a checkbox item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>CHECKBOX</code>.
		 * 
		 * @returns the checkbox item
		 */
		asCheckboxItem(): FormApp.CheckboxItem
		/**
		 * Returns the item as a date item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>DATE</code>.
		 * 
		 * @returns the date item
		 */
		asDateItem(): FormApp.DateItem
		/**
		 * Returns the item as a date-time item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>DATETIME</code>.
		 * 
		 * @returns the date-time item
		 */
		asDateTimeItem(): FormApp.DateTimeItem
		/**
		 * Returns the item as a duration item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>DURATION</code>.
		 * 
		 * @returns the duration item
		 */
		asDurationItem(): FormApp.DurationItem
		/**
		 * Returns the item as a grid item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>GRID</code>.
		 * 
		 * @returns the grid item
		 */
		asGridItem(): FormApp.GridItem
		/**
		 * Returns the item as an image item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>IMAGE</code>.
		 * 
		 * @returns the image item
		 */
		asImageItem(): FormApp.ImageItem
		/**
		 * Returns the item as a list item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>LIST</code>.
		 * 
		 * @returns the list item
		 */
		asListItem(): FormApp.ListItem
		/**
		 * Returns the item as a multiple-choice item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>MULTIPLE_CHOICE</code>.
		 * 
		 * @returns the multiple-choice item
		 */
		asMultipleChoiceItem(): FormApp.MultipleChoiceItem
		/**
		 * Returns the item as a page-break item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>PAGE_BREAK</code>.
		 * 
		 * @returns the page-break item
		 */
		asPageBreakItem(): FormApp.PageBreakItem
		/**
		 * Returns the item as a paragraph-text item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>PARAGRAPH_TEXT</code>.
		 * 
		 * @returns the paragraph-text item
		 */
		asParagraphTextItem(): FormApp.ParagraphTextItem
		/**
		 * Returns the item as a scale item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>SCALE</code>.
		 * 
		 * @returns the scale item
		 */
		asScaleItem(): FormApp.ScaleItem
		/**
		 * Returns the item as a section-header item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>SECTION_HEADER</code>.
		 * 
		 * @returns the section-header item
		 */
		asSectionHeaderItem(): FormApp.SectionHeaderItem
		/**
		 * Returns the item as a text item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>TEXT</code>.
		 * 
		 * @returns the text item
		 */
		asTextItem(): FormApp.TextItem
		/**
		 * Returns the item as a time item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>TIME</code>.
		 * 
		 * @returns the time item
		 */
		asTimeItem(): FormApp.TimeItem
		/**
		 * Returns the item as a video item. Throws a scripting exception if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code> was not already <code>VIDEO</code>.
		 * 
		 * @returns the video item
		 */
		asVideoItem(): FormApp.VideoItem
		/**
		 * Creates a copy of this item and appends it to the end of the form.
		 * 
		 * @returns a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code>, for chaining
		 */
		duplicate(): FormApp.Item
		/**
		 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @returns the item's help text or description text
		 */
		getHelpText(): string
		/**
		 * Gets the item's unique identifier.
		 * 
		 * @returns the item's ID
		 */
		getId(): number
		/**
		 * Gets the index of the item among all the items in the form.
		 * 
		 * @returns the index of the item
		 */
		getIndex(): number
		/**
		 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @returns the item's title or header text
		 */
		getTitle(): string
		/**
		 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
		 * 
		 * @returns the item's type
		 */
		getType(): FormApp.ItemType
		/**
		 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @param text - the new help text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code>, for chaining
		 */
		setHelpText(
			text: string
		): FormApp.Item
		/**
		 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @param title - the new title or header text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item.html'>Item</a></code>, for chaining
		 */
		setTitle(
			title: string
		): FormApp.Item

	}

	class ItemResponse {
		private constructor();

		/**
		 * Gets the feedback that was given for the respondent's submitted answer.
		 * 
		 * @returns a <code>QuizFeedback</code> for the question item
		 */
		getFeedback(): object
		/**
		 * Gets the question item that this response answers.
		 * 
		 * @returns the question item that this response answers
		 */
		getItem(): FormApp.Item
		/**
		 * Gets the answer that the respondent submitted. For most types of question items, this returns a
		 * <code>String</code>.
		 * 
		 * <p>For <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code> questions, this returns a <code>String[]</code> array containing the
		 * responder's choices. The order of the strings in the array may vary.
		 * 
		 * <p>For <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/grid-item.html'>GridItem</a></code> questions, this returns a <code>String[]</code> array in which the answer at
		 * index <code>n</code> corresponds to the question at row <code>n + 1</code> in the grid. If a respondent
		 * did not answer a question in the grid, that answer is returned as <code>&#39;&#39;</code>.
		 * 
		 * <p>For <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-grid-item.html'>CheckboxGridItem</a></code> questions, this returns a <code>String[][]</code> array in which the
		 * answers at row index <code>n</code> corresponds to the question at row <code>n + 1</code> in the checkbox
		 * grid. If a respondent did not answer a question in the grid, that answer is returned as <code>&#39;&#39;</code>.
		 * 
		 * @returns a <code>String</code> or <code>String[]</code> or <code>String[][]</code> of answers to the question
		 *     item
		 */
		getResponse(): object
		/**
		 * Gets the score for the respondent's submitted answer.
		 * 
		 * @returns a <code>Double</code> representing the score for the question item
		 */
		getScore(): object
		/**
		 * Sets the feedback that should be displayed for the respondent's submitted answer.
		 * 
		 * <p>This method does not actually save the feedback in Forms until <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#submitGrades(FormResponse)'>Form.submitGrades(responses)</a></code> is called with the updated FormResponses. See <code>setScore()</code> for an example.
		 * 
		 * @param feedback
		 * 
		 * @returns a <code>ItemResponse</code> for chaining
		 */
		setFeedback(
			feedback: object
		): FormApp.ItemResponse
		/**
		 * Sets the score for the respondent's submitted answer. A null value will clear the existing
		 * score.
		 * 
		 * <p>This method does not actually save the score in Forms until <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/form.html#submitGrades(FormResponse)'>Form.submitGrades(responses)</a></code> is called with the updated FormResponses.
		 * 
		 * <pre class="prettyprint">
		 * // For a multiple choice question with options: "Always true", "Sometimes true", and "Never",
		 * // award half credit for responses that answered "Sometimes true".
		 * var formResponses = FormApp.getActiveForm().getResponses();
		 * // Go through each form response
		 * for (var i = 0; i < formResponses.length; i++) {
		 *   var response = formResponses[i];
		 *   var items = FormApp.getActiveForm().getItems();
		 *   // Assume it's the first item
		 *   var item = items[0];
		 *   var itemResponse = response.getGradableResponseForItem(item);
		 *   // Give half credit for "Sometimes true".
		 *   if (itemResponse != null && itemResponse.getResponse() == 'Sometimes true') {
		 *     var points = item.asMultipleChoiceItem().getPoints();
		 *     itemResponse.setScore(points * .5);
		 *     // This saves the grade, but does not submit to Forms yet.
		 *     response.withItemGrade(itemResponse);
		 *   }
		 * }
		 * // Grades are actually submitted to Forms here.
		 * FormApp.getActiveForm().submitGrades(formResponses);
		 * </pre>
		 * 
		 * @param score
		 * 
		 * @returns a <code>ItemResponse</code> for chaining
		 */
		setScore(
			score: object
		): FormApp.ItemResponse

	}

	enum ItemType {
		/**
		 * A question item that allows the respondent to select one or more checkboxes, as well as an
		 * optional "other" field.
		 */
		CHECKBOX = "CHECKBOX",
		/**
		 * A question item, presented as a grid of columns and rows, that allows the respondent to select
		 * multiple choices per row from a sequence of checkboxes.
		 */
		CHECKBOX_GRID = "CHECKBOX_GRID",
		/**
		 * A question item that allows the respondent to indicate a date.
		 */
		DATE = "DATE",
		/**
		 * A question item that allows the respondent to indicate a date and time.
		 */
		DATETIME = "DATETIME",
		/**
		 * A question item that allows the respondent to indicate a length of time.
		 */
		DURATION = "DURATION",
		/**
		 * A question item, presented as a grid of columns and rows, that allows the respondent to select
		 * one choice per row from a sequence of radio buttons.
		 */
		GRID = "GRID",
		/**
		 * A layout item that displays an image.
		 */
		IMAGE = "IMAGE",
		/**
		 * A question item that allows the respondent to select one choice from a drop-down list.
		 */
		LIST = "LIST",
		/**
		 * A question item that allows the respondent to select one choice from a list of radio buttons or
		 * an optional "other" field.
		 */
		MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
		/**
		 * A layout item that marks the start of a page.
		 */
		PAGE_BREAK = "PAGE_BREAK",
		/**
		 * A question item that allows the respondent to enter a block of text.
		 */
		PARAGRAPH_TEXT = "PARAGRAPH_TEXT",
		/**
		 * A question item that allows the respondent to choose one option from a numbered sequence of
		 * radio buttons.
		 */
		SCALE = "SCALE",
		/**
		 * A layout item that visually indicates the start of a section.
		 */
		SECTION_HEADER = "SECTION_HEADER",
		/**
		 * A question item that allows the respondent to enter a single line of text.
		 */
		TEXT = "TEXT",
		/**
		 * A question item that allows the respondent to indicate a time of day.
		 */
		TIME = "TIME",
		/**
		 * A layout item that displays a YouTube video.
		 */
		VIDEO = "VIDEO",
	}

	class ListItem {
		private constructor();

		/**
		 * Creates a new choice.
		 * 
		 * @param value - the choice's value, which respondents see as a label when viewing the form
		 * 
		 * @returns the new choice
		 */
		createChoice(
			value: string
		): FormApp.Choice
		/**
		 * Creates a new choice.
		 * 
		 * @param value - the choice's value, which respondents see as a label when viewing the form
		 * @param isCorrect - whether the choice is a correct answer
		 * 
		 * @returns the new choice
		 */
		createChoice(
			value: string,
			isCorrect: Boolean
		): FormApp.Choice
		/**
		 * Creates a new choice with a page-navigation option that jumps to a given page-break item. This
		 * is equivalent to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html#createChoice(String,PageNavigationType)'>createChoice(value, navigationType)</a></code> with <code>navigationType</code> set to <code>FormApp.PageNavigationType.GO_TO_PAGE</code>. Choices that use page
		 * navigation cannot be combined in the same item with choices that do not use page navigation.
		 * 
		 * <p>The page navigation occurs after the respondent completes a page that contains the option,
		 * and only if the respondent chose that option. If the respondent chose multiple options with
		 * page-navigation instructions on the same page, only the last navigation option has any effect.
		 * Page navigation also has no effect on the last page of a form.
		 * 
		 * @param value - the choice's value, which respondents see as a label when viewing the form
		 * @param navigationItem - the item to navigate to
		 * 
		 * @returns the new choice
		 */
		createChoice(
			value: string,
			navigationItem: FormApp.PageBreakItem
		): FormApp.Choice
		/**
		 * Creates a new choice with a page-navigation option. Choices that use page navigation cannot be
		 * combined in the same item with choices that do not use page navigation.
		 * 
		 * <p>The page navigation occurs after the respondent completes a page that contains the option,
		 * and only if the respondent chose that option. If the respondent chose multiple options with
		 * page-navigation instructions on the same page, only the last navigation option has any effect.
		 * Page navigation also has no effect on the last page of a form.
		 * 
		 * @param value - the choice's value, which respondents see as a label when viewing the form
		 * @param navigationType - the choice's navigation type
		 * 
		 * @returns the new choice
		 */
		createChoice(
			value: string,
			navigationType: FormApp.PageNavigationType
		): FormApp.Choice

		/**
		 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this list item. Throws an exception if the <code>response</code> argument does not match a valid choice for this item.
		 * 
		 * @param response - a valid answer for this list item
		 * 
		 * @returns the item response
		 */
		createResponse(
			response: string
		): FormApp.ItemResponse
		/**
		 * Creates a copy of this item and appends it to the end of the form.
		 * 
		 * @returns a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
		 */
		duplicate(): FormApp.ListItem
		/**
		 * Gets all choices for an item.
		 * 
		 * @returns an array of choices
		 */
		getChoices(): FormApp.Choice[]
		/**
		 * Returns the feedback that is shown to respondents when they respond correctly to a question.
		 * 
		 * @returns the feedback, if any.
		 */
		getFeedbackForCorrect(): FormApp.QuizFeedback
		/**
		 * Returns the feedback that is shown to respondents when they respond incorrectly to a question.
		 * 
		 * @returns the feedback, if any.
		 */
		getFeedbackForIncorrect(): FormApp.QuizFeedback
		/**
		 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @returns the item's help text or description text
		 */
		getHelpText(): string
		/**
		 * Gets the item's unique identifier.
		 * 
		 * @returns the item's ID
		 */
		getId(): number
		/**
		 * Gets the index of the item among all the items in the form.
		 * 
		 * @returns the index of the item
		 */
		getIndex(): number
		/**
		 * Returns the point value of a gradeable item.
		 * 
		 * @returns the number of points a question is worth.
		 */
		getPoints(): number
		/**
		 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @returns the item's title or header text
		 */
		getTitle(): string
		/**
		 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
		 * 
		 * @returns the item's type
		 */
		getType(): FormApp.ItemType
		/**
		 * Determines whether the respondent must answer the question.
		 * 
		 * @returns whether the respondent must answer the question
		 */
		isRequired(): Boolean
		/**
		 * Sets the choices for an item from an array of strings. Throws an exception if the given array
		 * is empty.
		 * 
		 * <pre class="prettyprint">
		 * // Open a form by ID and add a new list item.
		 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
		 * var item = form.addListItem();
		 * item.setTitle('Do you prefer cats or dogs?');
		 * item.setChoiceValues(['Dogs', 'Cats']);
		 * </pre>
		 * 
		 * @param values - the array of choice values, which respondents see as labels when viewing the form
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
		 */
		setChoiceValues(
			values: string[]
		): FormApp.ListItem
		/**
		 * Sets an array of choices for an item. Throws an exception if the given array is empty or
		 * contains a <code>null</code> element.
		 * 
		 * <pre class="prettyprint">
		 * // Open a form by ID and add a new list item.
		 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
		 * var item = form.addListItem();
		 * item.setTitle('Do you prefer cats or dogs?')
		 * item.setChoices([
		 *     item.createChoice('Cats'),
		 *     item.createChoice('Dogs')
		 * ]);
		 * </pre>
		 * 
		 * @param choices - an array of choices
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
		 */
		setChoices(
			choices: FormApp.Choice[]
		): FormApp.ListItem
		/**
		 * Sets the feedback to be shown to respondents when they respond correctly to a question.
		 * 
		 * <pre class="prettyprint">
		 * // Open a form by ID and add a new list item.
		 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
		 * var item = form.addListItem();
		 * item.setTitle('Do you prefer cats or dogs?');
		 * // Set "Dogs" as the correct answer to this question.
		 * item.setChoices([
		 *   item.createChoice('Dogs', true),
		 *   item.createChoice('Cats', false)]);
		 * // Add feedback which will be shown for correct responses; ie "Dogs".
		 * item.setFeedbackForCorrect(
		 *     FormApp.createFeedback().setDisplayText("Dogs rule, cats drool.").build());
		 * </pre>
		 * 
		 * @param feedback - the new feedback. A null value will clear the feedback.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
		 */
		setFeedbackForCorrect(
			feedback: FormApp.QuizFeedback
		): FormApp.ListItem
		/**
		 * Sets the feedback to be shown to respondents when they respond incorrectly to a question.
		 * 
		 * @param feedback - the new feedback
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
		 */
		setFeedbackForIncorrect(
			feedback: FormApp.QuizFeedback
		): FormApp.ListItem
		/**
		 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @param text - the new help text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
		 */
		setHelpText(
			text: string
		): FormApp.ListItem
		/**
		 * Sets the number of points a gradeable item is worth. The default for new items is 0.
		 * 
		 * @param points - the number of a points a question item is worth
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
		 */
		setPoints(
			points: number
		): FormApp.ListItem
		/**
		 * Sets whether the respondent must answer the question.
		 * 
		 * @param enabled - whether the respondent must answer the question
		 * 
		 * @returns the current item (for chaining)
		 */
		setRequired(
			enabled: Boolean
		): FormApp.ListItem
		/**
		 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @param title - the new title or header text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code>, for chaining
		 */
		setTitle(
			title: string
		): FormApp.ListItem

	}

	class MultipleChoiceItem {
		private constructor();

		/**
		 * Creates a new choice.
		 * 
		 * @param value - the choice's value, which respondents see as a label when viewing the form
		 * 
		 * @returns the new choice
		 */
		createChoice(
			value: string
		): FormApp.Choice
		/**
		 * Creates a new choice.
		 * 
		 * @param value - the choice's value, which respondents see as a label when viewing the form
		 * @param isCorrect - whether the choice is a correct answer
		 * 
		 * @returns the new choice
		 */
		createChoice(
			value: string,
			isCorrect: Boolean
		): FormApp.Choice
		/**
		 * Creates a new choice with a page-navigation option that jumps to a given page-break item. This
		 * is equivalent to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html#createChoice(String,PageNavigationType)'>createChoice(value, navigationType)</a></code> with <code>navigationType</code> set to <code>FormApp.PageNavigationType.GO_TO_PAGE</code>. Choices that use page
		 * navigation cannot be combined in the same item with choices that do not use page navigation.
		 * 
		 * <p>The page navigation occurs after the respondent completes a page that contains the option,
		 * and only if the respondent chose that option. If the respondent chose multiple options with
		 * page-navigation instructions on the same page, only the last navigation option has any effect.
		 * Page navigation also has no effect on the last page of a form.
		 * 
		 * @param value - the choice's value, which respondents see as a label when viewing the form
		 * @param navigationItem - the item to navigate to
		 * 
		 * @returns the new choice
		 */
		createChoice(
			value: string,
			navigationItem: FormApp.PageBreakItem
		): FormApp.Choice
		/**
		 * Creates a new choice with a page-navigation option. Choices that use page navigation cannot be
		 * combined in the same item with choices that do not use page navigation.
		 * 
		 * <p>The page navigation occurs after the respondent completes a page that contains the option,
		 * and only if the respondent chose that option. If the respondent chose multiple options with
		 * page-navigation instructions on the same page, only the last navigation option has any effect.
		 * Page navigation also has no effect on the last page of a form.
		 * 
		 * @param value - the choice's value, which respondents see as a label when viewing the form
		 * @param navigationType - the choice's navigation type
		 * 
		 * @returns the new choice
		 */
		createChoice(
			value: string,
			navigationType: FormApp.PageNavigationType
		): FormApp.Choice

		/**
		 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this multiple-choice item. Throws an exception if the
		 * <code>response</code> argument does not match a valid choice for this item, unless <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html#showOtherOption(Boolean)'>showOtherOption(enabled)</a></code> is set to <code>true</code>.
		 * 
		 * @param response - a valid answer for this multiple-choice item
		 * 
		 * @returns the item response
		 */
		createResponse(
			response: string
		): FormApp.ItemResponse
		/**
		 * Creates a copy of this item and appends it to the end of the form.
		 * 
		 * @returns a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
		 */
		duplicate(): FormApp.MultipleChoiceItem
		/**
		 * Gets all choices for an item.
		 * 
		 * @returns an array of choices
		 */
		getChoices(): FormApp.Choice[]
		/**
		 * Returns the feedback that is shown to respondents when they respond correctly to a question.
		 * 
		 * @returns the feedback, if any.
		 */
		getFeedbackForCorrect(): FormApp.QuizFeedback
		/**
		 * Returns the feedback that is shown to respondents when they respond incorrectly to a question.
		 * 
		 * @returns the feedback, if any.
		 */
		getFeedbackForIncorrect(): FormApp.QuizFeedback
		/**
		 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @returns the item's help text or description text
		 */
		getHelpText(): string
		/**
		 * Gets the item's unique identifier.
		 * 
		 * @returns the item's ID
		 */
		getId(): number
		/**
		 * Gets the index of the item among all the items in the form.
		 * 
		 * @returns the index of the item
		 */
		getIndex(): number
		/**
		 * Returns the point value of a gradeable item.
		 * 
		 * @returns the number of points a question is worth.
		 */
		getPoints(): number
		/**
		 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @returns the item's title or header text
		 */
		getTitle(): string
		/**
		 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
		 * 
		 * @returns the item's type
		 */
		getType(): FormApp.ItemType
		/**
		 * Determines whether the item has an "other" option.
		 * 
		 * @returns <code>true</code> if the item has an "other" option; <code>false</code> if not
		 */
		hasOtherOption(): Boolean
		/**
		 * Determines whether the respondent must answer the question.
		 * 
		 * @returns whether the respondent must answer the question
		 */
		isRequired(): Boolean
		/**
		 * Sets the choices for an item from an array of strings. Throws an exception if the given array
		 * is empty.
		 * 
		 * <pre class="prettyprint">
		 * // Open a form by ID and add a new list item.
		 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
		 * var item = form.addListItem();
		 * item.setTitle('Do you prefer cats or dogs?');
		 * item.setChoiceValues(['Dogs', 'Cats']);
		 * </pre>
		 * 
		 * @param values - the array of choice values, which respondents see as labels when viewing the form
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
		 */
		setChoiceValues(
			values: string[]
		): FormApp.MultipleChoiceItem
		/**
		 * Sets an array of choices for an item. Throws an exception if the given array is empty or
		 * contains a <code>null</code> element.
		 * 
		 * <pre class="prettyprint">
		 * // Open a form by ID and add a new list item.
		 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
		 * var item = form.addListItem();
		 * item.setTitle('Do you prefer cats or dogs?')
		 * item.setChoices([
		 *     item.createChoice('Cats'),
		 *     item.createChoice('Dogs')
		 * ]);
		 * </pre>
		 * 
		 * @param choices - an array of choices
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
		 */
		setChoices(
			choices: FormApp.Choice[]
		): FormApp.MultipleChoiceItem
		/**
		 * Sets the feedback to be shown to respondents when they respond correctly to a question.
		 * 
		 * <pre class="prettyprint">
		 * // Open a form by ID and add a new list item.
		 * var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
		 * var item = form.addListItem();
		 * item.setTitle('Do you prefer cats or dogs?');
		 * // Set "Dogs" as the correct answer to this question.
		 * item.setChoices([
		 *   item.createChoice('Dogs', true),
		 *   item.createChoice('Cats', false)]);
		 * // Add feedback which will be shown for correct responses; ie "Dogs".
		 * item.setFeedbackForCorrect(
		 *     FormApp.createFeedback().setDisplayText("Dogs rule, cats drool.").build());
		 * </pre>
		 * 
		 * @param feedback - the new feedback. A null value will clear the feedback.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
		 */
		setFeedbackForCorrect(
			feedback: FormApp.QuizFeedback
		): FormApp.MultipleChoiceItem
		/**
		 * Sets the feedback to be shown to respondents when they respond incorrectly to a question.
		 * 
		 * @param feedback - the new feedback
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
		 */
		setFeedbackForIncorrect(
			feedback: FormApp.QuizFeedback
		): FormApp.MultipleChoiceItem
		/**
		 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @param text - the new help text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
		 */
		setHelpText(
			text: string
		): FormApp.MultipleChoiceItem
		/**
		 * Sets the number of points a gradeable item is worth. The default for new items is 0.
		 * 
		 * @param points - the number of a points a question item is worth
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
		 */
		setPoints(
			points: number
		): FormApp.MultipleChoiceItem
		/**
		 * Sets whether the respondent must answer the question.
		 * 
		 * @param enabled - whether the respondent must answer the question
		 * 
		 * @returns the current item (for chaining)
		 */
		setRequired(
			enabled: Boolean
		): FormApp.MultipleChoiceItem
		/**
		 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @param title - the new title or header text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
		 */
		setTitle(
			title: string
		): FormApp.MultipleChoiceItem
		/**
		 * Sets whether the item has an "other" option. The default for a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/checkbox-item.html'>CheckboxItem</a></code> or
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code> is <code>false</code>.
		 * 
		 * @param enabled - <code>true</code> if the item has an "other" option; <code>false</code> if not
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code>, for chaining
		 */
		showOtherOption(
			enabled: Boolean
		): FormApp.MultipleChoiceItem

	}

	class PageBreakItem {
		private constructor();

		/**
		 * Creates a copy of this item and appends it to the end of the form.
		 * 
		 * @returns a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code>, for chaining
		 */
		duplicate(): FormApp.PageBreakItem
		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code> that the form will jump to after completing the page before this
		 * page break (that is, upon reaching this page break by normal linear progression through the
		 * form).
		 * 
		 * @returns the page break to jump to after completing the page before this page break, or <code>null</code> if none is set
		 */
		getGoToPage(): FormApp.PageBreakItem
		/**
		 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @returns the item's help text or description text
		 */
		getHelpText(): string
		/**
		 * Gets the item's unique identifier.
		 * 
		 * @returns the item's ID
		 */
		getId(): number
		/**
		 * Gets the index of the item among all the items in the form.
		 * 
		 * @returns the index of the item
		 */
		getIndex(): number
		/**
		 * Gets the type of page navigation that occurs after completing the page before this page break
		 * (that is, upon reaching this page break by normal linear progression through the form).
		 * 
		 * @returns the navigation action to take after completing the page before this page break
		 */
		getPageNavigationType(): FormApp.PageNavigationType
		/**
		 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @returns the item's title or header text
		 */
		getTitle(): string
		/**
		 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
		 * 
		 * @returns the item's type
		 */
		getType(): FormApp.ItemType
		/**
		 * Sets the page to jump to after completing the page before this page break (that is, upon
		 * reaching this page break by normal linear progression through the form). If the previous page
		 * contained a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code> with a navigation option, that
		 * navigation overrules this navigation.
		 * 
		 * @param goToPageItem - the page break to jump to after completing the page before this page break
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code>, for chaining
		 */
		setGoToPage(
			goToPageItem: FormApp.PageBreakItem
		): FormApp.PageBreakItem
		/**
		 * Sets the type of page navigation that occurs after completing the page before this page break
		 * (that is, upon reaching this page break by normal linear progression through the form). If the
		 * page contained a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html'>MultipleChoiceItem</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/list-item.html'>ListItem</a></code> with a navigation option, that
		 * navigation overrules this navigation.
		 * 
		 * @param navigationType - the navigation action to take after completing the page before this page
		 *     break
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code>, for chaining
		 */
		setGoToPage(
			navigationType: FormApp.PageNavigationType
		): FormApp.PageBreakItem

		/**
		 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @param text - the new help text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code>, for chaining
		 */
		setHelpText(
			text: string
		): FormApp.PageBreakItem
		/**
		 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @param title - the new title or header text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItem</a></code>, for chaining
		 */
		setTitle(
			title: string
		): FormApp.PageBreakItem

	}

	enum PageNavigationType {
		/**
		 * Continue to the next page of the form after completing the current page.
		 */
		CONTINUE = "CONTINUE",
		/**
		 * Jump to a specified page of the form after completing the current page.
		 */
		GO_TO_PAGE = "GO_TO_PAGE",
		/**
		 * Restart the form from the beginning, without clearing answers entered so far, after completing
		 * the current page.
		 */
		RESTART = "RESTART",
		/**
		 * Submit the form response after completing the current page.
		 */
		SUBMIT = "SUBMIT",
	}

	class ParagraphTextItem {
		private constructor();

		/**
		 * Removes any data validation for this paragraph text item.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, for chaining
		 */
		clearValidation(): FormApp.ParagraphTextItem
		/**
		 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this paragraph text item.
		 * 
		 * @param response - an answer to the question posed by the item
		 * 
		 * @returns the item response
		 */
		createResponse(
			response: string
		): FormApp.ItemResponse
		/**
		 * Creates a copy of this item and appends it to the end of the form.
		 * 
		 * @returns a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, for chaining
		 */
		duplicate(): FormApp.ParagraphTextItem
		/**
		 * Returns the feedback that is shown to respondents when they respond to a gradeable question.
		 * 
		 * @returns the feedback, if any.
		 */
		getGeneralFeedback(): FormApp.QuizFeedback
		/**
		 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @returns the item's help text or description text
		 */
		getHelpText(): string
		/**
		 * Gets the item's unique identifier.
		 * 
		 * @returns the item's ID
		 */
		getId(): number
		/**
		 * Gets the index of the item among all the items in the form.
		 * 
		 * @returns the index of the item
		 */
		getIndex(): number
		/**
		 * Returns the point value of a gradeable item.
		 * 
		 * @returns the number of points a question is worth.
		 */
		getPoints(): number
		/**
		 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @returns the item's title or header text
		 */
		getTitle(): string
		/**
		 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
		 * 
		 * @returns the item's type
		 */
		getType(): FormApp.ItemType
		/**
		 * Determines whether the respondent must answer the question.
		 * 
		 * @returns whether the respondent must answer the question
		 */
		isRequired(): Boolean
		/**
		 * Sets the feedback to be shown to respondents when they respond to a gradeable question that
		 * doesn't have a correct or incorrect answer (ie questions that require manual grading).
		 * 
		 * @param feedback - the new feedback
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, for chaining
		 */
		setGeneralFeedback(
			feedback: FormApp.QuizFeedback
		): FormApp.ParagraphTextItem
		/**
		 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @param text - the new help text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, for chaining
		 */
		setHelpText(
			text: string
		): FormApp.ParagraphTextItem
		/**
		 * Sets the number of points a gradeable item is worth. The default for new items is 0.
		 * 
		 * @param points - the number of a points a question item is worth
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, for chaining
		 */
		setPoints(
			points: number
		): FormApp.ParagraphTextItem
		/**
		 * Sets whether the respondent must answer the question.
		 * 
		 * @param enabled - whether the respondent must answer the question
		 * 
		 * @returns the current item (for chaining)
		 */
		setRequired(
			enabled: Boolean
		): FormApp.ParagraphTextItem
		/**
		 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @param title - the new title or header text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, for chaining
		 */
		setTitle(
			title: string
		): FormApp.ParagraphTextItem
		/**
		 * Sets the data validation for this paragraph text item. Passing in null or a validation without
		 * any require functions called will remove any prior validation.
		 * 
		 * @param validation - a ParagraphTextValidation to apply to this item.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html'>ParagraphTextItem</a></code>, for chaining
		 */
		setValidation(
			validation: FormApp.ParagraphTextValidation
		): FormApp.ParagraphTextItem

	}

	class ParagraphTextValidation {
		private constructor();

	}

	class ParagraphTextValidationBuilder {
		private constructor();

		/**
		 * Requires response to contain pattern.
		 * 
		 * @param pattern - text must contain pattern
		 * 
		 * @returns this for chaining
		 */
		requireTextContainsPattern(
			pattern: string
		): FormApp.ParagraphTextValidationBuilder
		/**
		 * Requires response to not contain pattern.
		 * 
		 * @param pattern - text must not contain pattern
		 * 
		 * @returns this for chaining
		 */
		requireTextDoesNotContainPattern(
			pattern: string
		): FormApp.ParagraphTextValidationBuilder
		/**
		 * Requires response to not match pattern.
		 * 
		 * @param pattern - text must not match pattern
		 * 
		 * @returns this for chaining
		 */
		requireTextDoesNotMatchPattern(
			pattern: string
		): FormApp.ParagraphTextValidationBuilder
		/**
		 * Requires response length to be greater than or equal to value.
		 * 
		 * @param number - paragraph text length must be greater than this value
		 * 
		 * @returns this for chaining
		 */
		requireTextLengthGreaterThanOrEqualTo(
			number: number
		): FormApp.ParagraphTextValidationBuilder
		/**
		 * Requires response length to be less than value.
		 * 
		 * @param number - paragraph text length must be less than or equal to this value
		 * 
		 * @returns this for chaining
		 */
		requireTextLengthLessThanOrEqualTo(
			number: number
		): FormApp.ParagraphTextValidationBuilder
		/**
		 * Requires response to match pattern.
		 * 
		 * @param pattern - text must match pattern
		 * 
		 * @returns this for chaining
		 */
		requireTextMatchesPattern(
			pattern: string
		): FormApp.ParagraphTextValidationBuilder

	}

	class QuizFeedback {
		private constructor();

		/**
		 * Gets a list of the URLs associated with the Feedback. These are displayed to the user as a list
		 * of helpful links.
		 * 
		 * @returns a list of the URLs associated with the Feedback
		 */
		getLinkUrls(): string[]
		/**
		 * Gets the Feedback's display text. This text is shown to the user after they've submitted a
		 * response.
		 * 
		 * @returns the Feedback's text
		 */
		getText(): string

	}

	class QuizFeedbackBuilder {
		private constructor();

		/**
		 * Adds a link to the feedback's supplemental material.
		 * 
		 * @param url - the link to display under the display text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder.html'>QuizFeedbackBuilder</a></code>, for chaining
		 */
		addLink(
			url: string
		): FormApp.QuizFeedbackBuilder
		/**
		 * Adds a link to the feedback's supplemental material.
		 * 
		 * @param url - the link to display under the display text
		 * @param displayText - the text to display for the link
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder.html'>QuizFeedbackBuilder</a></code>, for chaining
		 */
		addLink(
			url: string,
			displayText: string
		): FormApp.QuizFeedbackBuilder

		/**
		 * Builds a Feedback of the corresponding type for this builder.
		 * 
		 * @returns <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/quiz-feedback.html'>QuizFeedback</a></code>
		 */
		build(): FormApp.QuizFeedback
		/**
		 * Returns a copy of this builder.
		 * 
		 * @returns <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder.html'>QuizFeedbackBuilder</a></code>
		 */
		copy(): FormApp.QuizFeedbackBuilder
		/**
		 * Sets the feedback text.
		 * 
		 * @param text - the new text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder.html'>QuizFeedbackBuilder</a></code>, for chaining
		 */
		setText(
			text: string
		): FormApp.QuizFeedbackBuilder

	}

	class ScaleItem {
		private constructor();

		/**
		 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this scale item. Throws an exception if the <code>response</code> argument is outside the bounds set for the item.
		 * 
		 * @param response - a value answer for this scale item
		 * 
		 * @returns the item response
		 */
		createResponse(
			response: number
		): FormApp.ItemResponse
		/**
		 * Creates a copy of this item and appends it to the end of the form.
		 * 
		 * @returns a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
		 */
		duplicate(): FormApp.ScaleItem
		/**
		 * Returns the feedback that is shown to respondents when they respond to a gradeable question.
		 * 
		 * @returns the feedback, if any.
		 */
		getGeneralFeedback(): FormApp.QuizFeedback
		/**
		 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @returns the item's help text or description text
		 */
		getHelpText(): string
		/**
		 * Gets the item's unique identifier.
		 * 
		 * @returns the item's ID
		 */
		getId(): number
		/**
		 * Gets the index of the item among all the items in the form.
		 * 
		 * @returns the index of the item
		 */
		getIndex(): number
		/**
		 * Gets the label for the scale's lower bound, if any.
		 * 
		 * @returns the label for the scale's lower bound
		 */
		getLeftLabel(): string
		/**
		 * Gets the scale's lower bound.
		 * 
		 * @returns the scale's lower bound
		 */
		getLowerBound(): number
		/**
		 * Returns the point value of a gradeable item.
		 * 
		 * @returns the number of points a question is worth.
		 */
		getPoints(): number
		/**
		 * Gets the label for the scale's upper bound, if any.
		 * 
		 * @returns the label for the scale's upper bound
		 */
		getRightLabel(): string
		/**
		 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @returns the item's title or header text
		 */
		getTitle(): string
		/**
		 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
		 * 
		 * @returns the item's type
		 */
		getType(): FormApp.ItemType
		/**
		 * Gets the scale's upper bound.
		 * 
		 * @returns the scale's upper bound
		 */
		getUpperBound(): number
		/**
		 * Determines whether the respondent must answer the question.
		 * 
		 * @returns whether the respondent must answer the question
		 */
		isRequired(): Boolean
		/**
		 * Sets the scale's lower and upper bounds. The lower bound must be <code>0</code> or <code>1</code>. The
		 * upper bound must be between <code>3</code> and <code>10</code>, inclusive. A new scale defaults to a
		 * lower bound of <code>1</code> and an upper bound of <code>5</code>.
		 * 
		 * <p>Throws a scripting exception if the given values are outside the permitted limits. Decimals
		 * are truncated to the preceding integer.
		 * 
		 * @param lower - the new lower bound
		 * @param upper - the new upper bound
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
		 */
		setBounds(
			lower: number,
			upper: number
		): FormApp.ScaleItem
		/**
		 * Sets the feedback to be shown to respondents when they respond to a gradeable question that
		 * doesn't have a correct or incorrect answer (ie questions that require manual grading).
		 * 
		 * @param feedback - the new feedback
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
		 */
		setGeneralFeedback(
			feedback: FormApp.QuizFeedback
		): FormApp.ScaleItem
		/**
		 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @param text - the new help text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
		 */
		setHelpText(
			text: string
		): FormApp.ScaleItem
		/**
		 * Sets labels for the scale's lower and upper bounds.
		 * 
		 * @param lower - the new label for the lower bound
		 * @param upper - the new label for the upper bound
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
		 */
		setLabels(
			lower: string,
			upper: string
		): FormApp.ScaleItem
		/**
		 * Sets the number of points a gradeable item is worth. The default for new items is 0.
		 * 
		 * @param points - the number of a points a question item is worth
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
		 */
		setPoints(
			points: number
		): FormApp.ScaleItem
		/**
		 * Sets whether the respondent must answer the question.
		 * 
		 * @param enabled - whether the respondent must answer the question
		 * 
		 * @returns the current item (for chaining)
		 */
		setRequired(
			enabled: Boolean
		): FormApp.ScaleItem
		/**
		 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @param title - the new title or header text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/scale-item.html'>ScaleItem</a></code>, for chaining
		 */
		setTitle(
			title: string
		): FormApp.ScaleItem

	}

	class SectionHeaderItem {
		private constructor();

		/**
		 * Creates a copy of this item and appends it to the end of the form.
		 * 
		 * @returns a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>, for chaining
		 */
		duplicate(): FormApp.SectionHeaderItem
		/**
		 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @returns the item's help text or description text
		 */
		getHelpText(): string
		/**
		 * Gets the item's unique identifier.
		 * 
		 * @returns the item's ID
		 */
		getId(): number
		/**
		 * Gets the index of the item among all the items in the form.
		 * 
		 * @returns the index of the item
		 */
		getIndex(): number
		/**
		 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @returns the item's title or header text
		 */
		getTitle(): string
		/**
		 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
		 * 
		 * @returns the item's type
		 */
		getType(): FormApp.ItemType
		/**
		 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @param text - the new help text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>, for chaining
		 */
		setHelpText(
			text: string
		): FormApp.SectionHeaderItem
		/**
		 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @param title - the new title or header text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>, for chaining
		 */
		setTitle(
			title: string
		): FormApp.SectionHeaderItem

	}

	class TextItem {
		private constructor();

		/**
		 * Removes any data validation for this text item.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>, for chaining
		 */
		clearValidation(): FormApp.TextItem
		/**
		 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this text item.
		 * 
		 * @param response - an answer to the question posed by the item
		 * 
		 * @returns the item response
		 */
		createResponse(
			response: string
		): FormApp.ItemResponse
		/**
		 * Creates a copy of this item and appends it to the end of the form.
		 * 
		 * @returns a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>, for chaining
		 */
		duplicate(): FormApp.TextItem
		/**
		 * Returns the feedback that is shown to respondents when they respond to a gradeable question.
		 * 
		 * @returns the feedback, if any.
		 */
		getGeneralFeedback(): FormApp.QuizFeedback
		/**
		 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @returns the item's help text or description text
		 */
		getHelpText(): string
		/**
		 * Gets the item's unique identifier.
		 * 
		 * @returns the item's ID
		 */
		getId(): number
		/**
		 * Gets the index of the item among all the items in the form.
		 * 
		 * @returns the index of the item
		 */
		getIndex(): number
		/**
		 * Returns the point value of a gradeable item.
		 * 
		 * @returns the number of points a question is worth.
		 */
		getPoints(): number
		/**
		 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @returns the item's title or header text
		 */
		getTitle(): string
		/**
		 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
		 * 
		 * @returns the item's type
		 */
		getType(): FormApp.ItemType
		/**
		 * Determines whether the respondent must answer the question.
		 * 
		 * @returns whether the respondent must answer the question
		 */
		isRequired(): Boolean
		/**
		 * Sets the feedback to be shown to respondents when they respond to a gradeable question that
		 * doesn't have a correct or incorrect answer (ie questions that require manual grading).
		 * 
		 * @param feedback - the new feedback
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>, for chaining
		 */
		setGeneralFeedback(
			feedback: FormApp.QuizFeedback
		): FormApp.TextItem
		/**
		 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @param text - the new help text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>, for chaining
		 */
		setHelpText(
			text: string
		): FormApp.TextItem
		/**
		 * Sets the number of points a gradeable item is worth. The default for new items is 0.
		 * 
		 * @param points - the number of a points a question item is worth
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>, for chaining
		 */
		setPoints(
			points: number
		): FormApp.TextItem
		/**
		 * Sets whether the respondent must answer the question.
		 * 
		 * @param enabled - whether the respondent must answer the question
		 * 
		 * @returns the current item (for chaining)
		 */
		setRequired(
			enabled: Boolean
		): FormApp.TextItem
		/**
		 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @param title - the new title or header text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>, for chaining
		 */
		setTitle(
			title: string
		): FormApp.TextItem
		/**
		 * Sets the data validation for this text item. Passing in null or a validation without any
		 * require functions called will remove any prior validation.
		 * 
		 * @param validation - a TextValidation to apply to this item.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-item.html'>TextItem</a></code>, for chaining
		 */
		setValidation(
			validation: FormApp.TextValidation
		): FormApp.TextItem

	}

	class TextValidation {
		private constructor();

	}

	class TextValidationBuilder {
		private constructor();

		/**
		 * Requires text item to be a number.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
		 */
		requireNumber(): FormApp.TextValidationBuilder
		/**
		 * Requires text item to be a number between start and end, inclusive.
		 * 
		 * @param start - the lower bounds of the inclusive range
		 * @param end - the upper bounds of the inclusive range
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
		 */
		requireNumberBetween(
			start: Number,
			end: Number
		): FormApp.TextValidationBuilder
		/**
		 * Requires text item to be a number equal to value specified.
		 * 
		 * @param number - the value which the item must be equal to.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
		 */
		requireNumberEqualTo(
			number: Number
		): FormApp.TextValidationBuilder
		/**
		 * Requires text item to be a number greater than the value specified.
		 * 
		 * @param number - the value which the item must be greater than.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
		 */
		requireNumberGreaterThan(
			number: Number
		): FormApp.TextValidationBuilder
		/**
		 * Requires text item to be a number greater than or equal to the value specified.
		 * 
		 * @param number - the value which the item must be greater than or equal to.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
		 */
		requireNumberGreaterThanOrEqualTo(
			number: Number
		): FormApp.TextValidationBuilder
		/**
		 * Requires text item to be a number less than the value specified.
		 * 
		 * @param number - the value which the item must be greater than.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
		 */
		requireNumberLessThan(
			number: Number
		): FormApp.TextValidationBuilder
		/**
		 * Requires text item to be a number less than or equal to the value specified.
		 * 
		 * @param number - the value which the item must be less than or equal to.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
		 */
		requireNumberLessThanOrEqualTo(
			number: Number
		): FormApp.TextValidationBuilder
		/**
		 * Requires text item to be a number not between start and end, inclusive.
		 * 
		 * @param start - the lower bounds of the inclusive range
		 * @param end - the upper bounds of the inclusive range
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
		 */
		requireNumberNotBetween(
			start: Number,
			end: Number
		): FormApp.TextValidationBuilder
		/**
		 * Requires text item to be a number not equal to the value specified.
		 * 
		 * @param number - the value which the item must not be equal to.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
		 */
		requireNumberNotEqualTo(
			number: Number
		): FormApp.TextValidationBuilder
		/**
		 * Requires response to contain pattern.
		 * 
		 * @param pattern - text must contain pattern
		 * 
		 * @returns this for chaining
		 */
		requireTextContainsPattern(
			pattern: string
		): FormApp.TextValidationBuilder
		/**
		 * Requires response to not contain pattern.
		 * 
		 * @param pattern - text must not contain pattern
		 * 
		 * @returns this for chaining
		 */
		requireTextDoesNotContainPattern(
			pattern: string
		): FormApp.TextValidationBuilder
		/**
		 * Requires response to not match pattern.
		 * 
		 * @param pattern - text must not match pattern
		 * 
		 * @returns this for chaining
		 */
		requireTextDoesNotMatchPattern(
			pattern: string
		): FormApp.TextValidationBuilder
		/**
		 * Requires text item to be an email address.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
		 */
		requireTextIsEmail(): FormApp.TextValidationBuilder
		/**
		 * Requires text item to be a URL.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
		 */
		requireTextIsUrl(): FormApp.TextValidationBuilder
		/**
		 * Requires response length to be greater than or equal to value.
		 * 
		 * @param number - paragraph text length must be greater than this value
		 * 
		 * @returns this for chaining
		 */
		requireTextLengthGreaterThanOrEqualTo(
			number: number
		): FormApp.TextValidationBuilder
		/**
		 * Requires response length to be less than value.
		 * 
		 * @param number - paragraph text length must be less than or equal to this value
		 * 
		 * @returns this for chaining
		 */
		requireTextLengthLessThanOrEqualTo(
			number: number
		): FormApp.TextValidationBuilder
		/**
		 * Requires response to match pattern.
		 * 
		 * @param pattern - text must match pattern
		 * 
		 * @returns this for chaining
		 */
		requireTextMatchesPattern(
			pattern: string
		): FormApp.TextValidationBuilder
		/**
		 * Requires text item to be a whole number.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/text-validation.html'>TextValidation</a></code>, for chaining
		 */
		requireWholeNumber(): FormApp.TextValidationBuilder

	}

	class TimeItem {
		private constructor();

		/**
		 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-response.html'>ItemResponse</a></code> for this time item. The arguments <code>hour</code> and <code>minute</code> are best represented as integers from <code>0</code> to <code>23</code> and from <code>0</code> to
		 * <code>59</code>, respectively. If they exceed those bounds, they behave as a clock would: for
		 * example, <code>10, 90</code> is interpreted as 11:30, and <code>-1, 60</code> is intepreted as 00:00.
		 * 
		 * @param hour - the hour, represented as an integer from <code>0</code> to <code>23</code>
		 * @param minute - the minute of the hour, represented as an integer from <code>0</code> to <code>59</code>
		 * 
		 * @returns the item response
		 */
		createResponse(
			hour: number,
			minute: number
		): FormApp.ItemResponse
		/**
		 * Creates a copy of this item and appends it to the end of the form.
		 * 
		 * @returns a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/time-item.html'>TimeItem</a></code>, for chaining
		 */
		duplicate(): FormApp.TimeItem
		/**
		 * Returns the feedback that is shown to respondents when they respond to a gradeable question.
		 * 
		 * @returns the feedback, if any.
		 */
		getGeneralFeedback(): FormApp.QuizFeedback
		/**
		 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @returns the item's help text or description text
		 */
		getHelpText(): string
		/**
		 * Gets the item's unique identifier.
		 * 
		 * @returns the item's ID
		 */
		getId(): number
		/**
		 * Gets the index of the item among all the items in the form.
		 * 
		 * @returns the index of the item
		 */
		getIndex(): number
		/**
		 * Returns the point value of a gradeable item.
		 * 
		 * @returns the number of points a question is worth.
		 */
		getPoints(): number
		/**
		 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @returns the item's title or header text
		 */
		getTitle(): string
		/**
		 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
		 * 
		 * @returns the item's type
		 */
		getType(): FormApp.ItemType
		/**
		 * Determines whether the respondent must answer the question.
		 * 
		 * @returns whether the respondent must answer the question
		 */
		isRequired(): Boolean
		/**
		 * Sets the feedback to be shown to respondents when they respond to a gradeable question that
		 * doesn't have a correct or incorrect answer (ie questions that require manual grading).
		 * 
		 * @param feedback - the new feedback
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/time-item.html'>TimeItem</a></code>, for chaining
		 */
		setGeneralFeedback(
			feedback: FormApp.QuizFeedback
		): FormApp.TimeItem
		/**
		 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @param text - the new help text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/time-item.html'>TimeItem</a></code>, for chaining
		 */
		setHelpText(
			text: string
		): FormApp.TimeItem
		/**
		 * Sets the number of points a gradeable item is worth. The default for new items is 0.
		 * 
		 * @param points - the number of a points a question item is worth
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/time-item.html'>TimeItem</a></code>, for chaining
		 */
		setPoints(
			points: number
		): FormApp.TimeItem
		/**
		 * Sets whether the respondent must answer the question.
		 * 
		 * @param enabled - whether the respondent must answer the question
		 * 
		 * @returns the current item (for chaining)
		 */
		setRequired(
			enabled: Boolean
		): FormApp.TimeItem
		/**
		 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @param title - the new title or header text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/time-item.html'>TimeItem</a></code>, for chaining
		 */
		setTitle(
			title: string
		): FormApp.TimeItem

	}

	class VideoItem {
		private constructor();

		/**
		 * Creates a copy of this item and appends it to the end of the form.
		 * 
		 * @returns a duplicate of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/video-item.html'>VideoItem</a></code>, for chaining
		 */
		duplicate(): FormApp.VideoItem
		/**
		 * Gets the video's horizontal alignment.
		 * 
		 * @returns the horizontal alignment
		 */
		getAlignment(): FormApp.Alignment
		/**
		 * Gets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @returns the item's help text or description text
		 */
		getHelpText(): string
		/**
		 * Gets the item's unique identifier.
		 * 
		 * @returns the item's ID
		 */
		getId(): number
		/**
		 * Gets the index of the item among all the items in the form.
		 * 
		 * @returns the index of the item
		 */
		getIndex(): number
		/**
		 * Gets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @returns the item's title or header text
		 */
		getTitle(): string
		/**
		 * Gets the item's type, represented as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/item-type.html'>ItemType</a></code>.
		 * 
		 * @returns the item's type
		 */
		getType(): FormApp.ItemType
		/**
		 * Gets the video's width in pixels.
		 * 
		 * @returns the width in pixels
		 */
		getWidth(): number
		/**
		 * Sets the video's horizontal alignment.
		 * 
		 * @param alignment - the horizontal alignment
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/video-item.html'>VideoItem</a></code>, for chaining
		 */
		setAlignment(
			alignment: FormApp.Alignment
		): FormApp.VideoItem
		/**
		 * Sets the item's help text (sometimes called description text for layout items like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/image-item.html'>ImageItems</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/page-break-item.html'>PageBreakItems</a></code>, and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItems</a></code>).
		 * 
		 * @param text - the new help text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/video-item.html'>VideoItem</a></code>, for chaining
		 */
		setHelpText(
			text: string
		): FormApp.VideoItem
		/**
		 * Sets the item's title (sometimes called header text, in the case of a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/section-header-item.html'>SectionHeaderItem</a></code>).
		 * 
		 * @param title - the new title or header text
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/video-item.html'>VideoItem</a></code>, for chaining
		 */
		setTitle(
			title: string
		): FormApp.VideoItem
		/**
		 * Sets the video itself from a given YouTube URL or YouTube video ID.
		 * 
		 * @param youtubeUrl - the YouTube URL or ID
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/video-item.html'>VideoItem</a></code>, for chaining
		 */
		setVideoUrl(
			youtubeUrl: string
		): FormApp.VideoItem
		/**
		 * Sets the video's width in pixels. Only the video's width can be set. Height is set
		 * automatically to maintain the video's proportions.
		 * 
		 * @param width - the width in pixels
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/forms/video-item.html'>VideoItem</a></code>, for chaining
		 */
		setWidth(
			width: number
		): FormApp.VideoItem

	}

}
