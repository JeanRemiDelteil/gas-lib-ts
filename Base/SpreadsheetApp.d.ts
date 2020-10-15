/** Module: SpreadsheetApp */

type SpreadsheetApp = typeof SpreadsheetApp;
declare namespace SpreadsheetApp {

	/**
	 * Creates a new spreadsheet with the given name.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below creates a new spreadsheet &quot;Finances&quot; and logs the URL for it
	 * var ssNew = SpreadsheetApp.create(&quot;Finances&quot;);
	 * Logger.log(ssNew.getUrl());
	 * </code></pre>
	 * 
	 * @param name - The name for the spreadsheet.
	 * 
	 * @returns a new spreadsheet
	 */
	function create(
		name: string
	): SpreadsheetApp.Spreadsheet
	/**
	 * Creates a new spreadsheet with the given name and the specified number of rows and columns.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below creates a new spreadsheet &quot;Finances&quot; with 50 rows and 5 columns and logs the
	 * // URL for it
	 * var ssNew = SpreadsheetApp.create(&quot;Finances&quot;, 50, 5);
	 * Logger.log(ssNew.getUrl());
	 * </code></pre>
	 * 
	 * @param name - The name for the spreadsheet.
	 * @param rows - The number of rows for the spreadsheet.
	 * @param columns - The number of columns for the spreadsheet.
	 * 
	 * @returns a new spreadsheet
	 */
	function create(
		name: string,
		rows: number,
		columns: number
	): SpreadsheetApp.Spreadsheet

	/**
	 * Enables data execution for all types of data sources.
	 * 
	 * <p>Data execution throws an exception if the data source type is not enabled. Use this method
	 * to enable data execution for all data source types.
	 */
	function enableAllDataSourcesExecution(): void
	/**
	 * Enables data execution for BigQuery data source.
	 * 
	 * <p>Data execution for BigQuery data source throws an expection if not enabled.
	 */
	function enableBigQueryExecution(): void
	/**
	 * Applies all pending Spreadsheet changes.
	 * 
	 * <p>Spreadsheet operations are sometimes bundled together to improve performance, such as when
	 * doing multiple calls to Range.getValue(). However, sometimes you may want to make sure that all
	 * pending changes are made right away, for instance to show users data as a script is executing.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below changes the background color of cells A1 and B1 twenty times. You should be
	 * // able to see the updates live in the spreadsheet. If flush() is not called, the updates may
	 * // be applied live or may all be applied at once when the script completes.
	 * function colors() {
	 *   var sheet = SpreadsheetApp.getActiveSheet();
	 *   for (var i = 0; i &lt; 20; i++) {
	 *     if ((i % 2) == 0) {
	 *       sheet.getRange(&#39;A1&#39;).setBackground(&#39;green&#39;);
	 *       sheet.getRange(&#39;B1&#39;).setBackground(&#39;red&#39;);
	 *     } else {
	 *       sheet.getRange(&#39;A1&#39;).setBackground(&#39;red&#39;);
	 *       sheet.getRange(&#39;B1&#39;).setBackground(&#39;green&#39;);
	 *     }
	 *     SpreadsheetApp.flush();
	 *   }
	 * }
	 * </code></pre>
	 */
	function flush(): void
	/**
	 * Returns the currently active spreadsheet, or <code>null</code> if there is none.
	 * 
	 * <p>Functions that are run in the context of a spreadsheet can get a reference to the
	 * corresponding Spreadsheet object by calling this function.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below logs the URL for the active spreadsheet.
	 * Logger.log(SpreadsheetApp.getActive().getUrl());
	 * </code></pre>
	 * 
	 * @returns the active Spreadsheet object
	 */
	function getActive(): SpreadsheetApp.Spreadsheet
	/**
	 * Returns the selected range in the active sheet, or <code>null</code> if there is no active range. If
	 * multiple ranges are selected this method returns only the last selected range.
	 * 
	 * <p>This generally means the range that a user has selected in the active sheet, but in a custom
	 * function it refers to the cell being actively recalculated.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below logs the background color for the active range.
	 * var color = SpreadsheetApp.getActiveRange().getBackgroundColor();
	 * Logger.log(color);
	 * </code></pre>
	 * 
	 * @returns the active range
	 */
	function getActiveRange(): SpreadsheetApp.Range
	/**
	 * Returns the list of active ranges in the active sheet or <code>null</code> if there are no ranges
	 * selected. The active range containing the current highlighted cell is placed last in the list.
	 * 
	 * <p>If there is a single range selected, this behaves as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app.html#getActiveRange()'>getActiveRange()</a></code> call.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Returns the list of active ranges.
	 * var rangeList = SpreadsheetApp.getActiveRangeList();
	 * </code></pre>
	 * 
	 * @returns the list of active ranges
	 */
	function getActiveRangeList(): SpreadsheetApp.RangeList
	/**
	 * Gets the active sheet in a spreadsheet.
	 * 
	 * <p>The active sheet in a spreadsheet is the sheet that is being displayed in the spreadsheet
	 * UI.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below logs the name of the active sheet.
	 * Logger.log(SpreadsheetApp.getActiveSheet().getName());
	 * </code></pre>
	 * 
	 * @returns the active Sheet object
	 */
	function getActiveSheet(): SpreadsheetApp.Sheet
	/**
	 * Returns the currently active spreadsheet, or <code>null</code> if there is none.
	 * 
	 * <p>Functions that are run in the context of a spreadsheet can get a reference to the
	 * corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> object by calling this function.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below logs the URL for the active spreadsheet.
	 * Logger.log(SpreadsheetApp.getActiveSpreadsheet().getUrl());
	 * </code></pre>
	 * 
	 * @returns the active Spreadsheet object
	 */
	function getActiveSpreadsheet(): SpreadsheetApp.Spreadsheet
	/**
	 * Returns the current (highlighted) cell that is selected in one of the active ranges in the
	 * active sheet or <code>null</code> if there is no current cell.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Returns the current highlighted cell in the one of the active ranges.
	 * var currentCell = SpreadsheetApp.getCurrentCell();
	 * </code></pre>
	 * 
	 * @returns the current cell
	 */
	function getCurrentCell(): SpreadsheetApp.Range
	/**
	 * Returns the current <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html'>Selection</a></code> in the spreadsheet.
	 * 
	 * <pre class="prettyprint"><code>
	 * var selection = SpreadsheetApp.getSelection();
	 * var currentCell = selection.getCurrentCell();
	 * </code></pre>
	 * 
	 * @returns the current selection
	 */
	function getSelection(): SpreadsheetApp.Selection
	/**
	 * Returns an instance of the spreadsheet's user-interface environment that allows the script to
	 * add features like menus, dialogs, and sidebars. A script can only interact with the UI for the
	 * current instance of an open spreadsheet, and only if the script is <a
	 * href="/apps-script/scripts_containers">bound</a> to the spreadsheet. For more information, see
	 * the guides to <a href="/apps-script/guides/menus">menus</a> and <a
	 * href="/apps-script/guides/dialogs">dialogs and sidebars</a>.
	 * 
	 * <pre class="prettyprint">
	 * // Add a custom menu to the active spreadsheet, including a separator and a sub-menu.
	 * function onOpen(e) {
	 *   SpreadsheetApp.getUi()
	 *       .createMenu('My Menu')
	 *       .addItem('My menu item', 'myFunction')
	 *       .addSeparator()
	 *       .addSubMenu(SpreadsheetApp.getUi().createMenu('My sub-menu')
	 *           .addItem('One sub-menu item', 'mySecondFunction')
	 *           .addItem('Another sub-menu item', 'myThirdFunction'))
	 *       .addToUi();
	 * }
	 * </pre>
	 * 
	 * @returns an instance of this spreadsheet's user-interface environment
	 */
	function getUi(): Ui
	/**
	 * Creates a builder for a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/color.html'>Color</a></code>.
	 * 
	 * <pre class="prettyprint"><code>
	 * var rgbColor = SpreadsheetApp.newColor().setRgbColor(&quot;#FF0000&quot;).build();
	 * </code></pre>
	 * 
	 * @returns The new builder.
	 */
	function newColor(): SpreadsheetApp.ColorBuilder
	/**
	 * Creates a builder for a conditional formatting rule.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Adds a conditional format rule to a sheet that causes all cells in range A1:B3 to turn red
	 * // if they contain a number between 1 and 10.
	 * var sheet = SpreadsheetApp.getActive().getActiveSheet();
	 * var range = sheet.getRange(&#39;A1:B3&#39;);
	 * var rule = SpreadsheetApp.newConditionalFormatRule()
	 *     .whenNumberBetween(1, 10)
	 *     .setBackgroundColor(&quot;#FF0000&quot;)
	 *     .setRanges([range])
	 *     .build()
	 * var rules = sheet.getConditionalFormatRules();
	 * rules.push(rule);
	 * sheet.setConditionalFormatRules(rules);
	 * 
	 * </code></pre>
	 * 
	 * @returns the new builder.
	 */
	function newConditionalFormatRule(): SpreadsheetApp.ConditionalFormatRuleBuilder
	/**
	 * Creates a builder for a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec.html'>DataSourceSpec</a></code>.
	 * 
	 * @returns The new builder.
	 */
	function newDataSourceSpec(): SpreadsheetApp.DataSourceSpecBuilder
	/**
	 * Creates a builder for a data validation rule.
	 * 
	 * <pre class="prettyprint"><code>
	 * var cell = SpreadsheetApp.getActive().getRange(&#39;A1&#39;);
	 * var rule = SpreadsheetApp.newDataValidation()
	 *     .requireNumberBetween(1, 100)
	 *     .setAllowInvalid(false)
	 *     .setHelpText(&#39;Number must be between 1 and 100.&#39;)
	 *     .build();
	 * cell.setDataValidation(rule);
	 * </code></pre>
	 * 
	 * @returns The new builder.
	 */
	function newDataValidation(): SpreadsheetApp.DataValidationBuilder
	/**
	 * Creates a builder for a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria.html'>FilterCriteria</a></code>.
	 * 
	 * @returns the new builder
	 */
	function newFilterCriteria(): SpreadsheetApp.FilterCriteriaBuilder
	/**
	 * Creates a builder for a Rich Text value.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Sets cell A1 to have the text &quot;Hello world&quot;, with &quot;Hello&quot; bolded.
	 * var cell = SpreadsheetApp.getActive().getRange(&#39;A1&#39;);
	 * var bold = SpreadsheetApp.newTextStyle().setBold(true).build();
	 * var value = SpreadsheetApp.newRichTextValue()
	 *     .setText(&quot;Hello world&quot;)
	 *     .setTextStyle(0, 5, bold)
	 *     .build();
	 * cell.setRichTextValue(value);
	 * </code></pre>
	 * 
	 * @returns The new builder.
	 */
	function newRichTextValue(): SpreadsheetApp.RichTextValueBuilder
	/**
	 * Creates a builder for a text style.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Sets range A1:B3 to have red, size 22, bolded, underlined text.
	 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:B3&#39;);
	 * var style = SpreadsheetApp.newTextStyle()
	 *     .setForegroundColor(&quot;red&quot;)
	 *     .setFontSize(22)
	 *     .setBold(true)
	 *     .setUnderline(true)
	 *     .build();
	 * range.setTextStyle(style);
	 * </code></pre>
	 * 
	 * @returns The new builder.
	 */
	function newTextStyle(): SpreadsheetApp.TextStyleBuilder
	/**
	 * Opens the spreadsheet that corresponds to the given File object.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Get any starred spreadsheets from Google Drive, then open the spreadsheets and log the name
	 * // of the first sheet within each spreadsheet.
	 * var files = DriveApp.searchFiles(
	 *     &#39;starred = true and mimeType = &quot;&#39; + MimeType.GOOGLE_SHEETS + &#39;&quot;&#39;);
	 * while (files.hasNext()) {
	 *   var spreadsheet = SpreadsheetApp.open(files.next());
	 *   var sheet = spreadsheet.getSheets()[0];
	 *   Logger.log(sheet.getName());
	 * }
	 * </code></pre>
	 * 
	 * @param file - The file to open.
	 * 
	 * @returns the spreadsheet
	 */
	function open(
		file: DriveApp.File
	): SpreadsheetApp.Spreadsheet
	/**
	 * Opens the spreadsheet with the given ID. A spreadsheet ID can be extracted from its URL. For
	 * example, the spreadsheet ID in the URL <code>https://docs.google.com/spreadsheets/d/abc1234567/edit#gid=0</code> is "abc1234567".
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below opens a spreadsheet using its ID and logs the name for it.
	 * // Note that the spreadsheet is NOT physically opened on the client side.
	 * // It is opened on the server only (for modification by the script).
	 * var ss = SpreadsheetApp.openById(&quot;abc1234567&quot;);
	 * Logger.log(ss.getName());
	 * </code></pre>
	 * 
	 * @param id - The unique identifier for the spreadsheet.
	 * 
	 * @returns the Spreadsheet object with the given id
	 */
	function openById(
		id: string
	): SpreadsheetApp.Spreadsheet
	/**
	 * Opens the spreadsheet with the given URL. Throws a scripting exception if the URL does not
	 * exist or the user does not have permission to access it.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below opens a spreadsheet using its id and logs the name for it.
	 * // Note that the spreadsheet is NOT physically opened on the client side.
	 * // It is opened on the server only (for modification by the script).
	 * var ss = SpreadsheetApp.openByUrl(
	 *     &#39;https://docs.google.com/spreadsheets/d/abc1234567/edit&#39;);
	 * Logger.log(ss.getName());
	 * </code></pre>
	 * 
	 * @param url - The URL for the spreadsheet.
	 * 
	 * @returns the Spreadsheet object with the given id
	 */
	function openByUrl(
		url: string
	): SpreadsheetApp.Spreadsheet
	/**
	 * Sets the specified range as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getActiveRange()'>active range</a></code>, with the top
	 * left cell in the range as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getCurrentCell()'>current cell</a></code>.
	 * 
	 * <p>The spreadsheet UI displays the sheet that contains the chosen range and selects the cells
	 * defined in the chosen range.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below sets range C1:D4 in the first sheet as the active range.
	 * var range = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange(&#39;C1:D4&#39;);
	 * SpreadsheetApp.setActiveRange(range);
	 * 
	 * var selection = SpreadsheetApp.getSelection();
	 * // Current cell: C1
	 * var currentCell = selection.getCurrentCell();
	 * // Active Range: C1:D4
	 * var activeRange = selection.getActiveRange();
	 * </code></pre>
	 * 
	 * @param range - The range to be made the active range.
	 * 
	 * @returns the new active Range
	 */
	function setActiveRange(
		range: SpreadsheetApp.Range
	): SpreadsheetApp.Range
	/**
	 * Sets the specified list of ranges as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app.html#getActiveRangeList()'>active ranges</a></code>. The last
	 * range in the list is set as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app.html#getActiveRange()'>active range</a></code>.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below sets ranges [D4, B2:C4] in the active sheet as the active ranges.
	 * var rangeList = SpreadsheetApp.getActiveSheet().getRanges([&#39;D4&#39;, &#39;B2:C4&#39;]);
	 * SpreadsheetApp.setActiveRangeList(rangeList);
	 * 
	 * var selection = SpreadsheetApp.getSelection();
	 * // Current cell: B2
	 * var currentCell = selection.getCurrentCell();
	 * // Active range: B2:C4
	 * var activeRange = selection.getActiveRange();
	 * // Active range list: [D4, B2:C4]
	 * var activeRangeList = selection.getActiveRangeList();
	 * </code></pre>
	 * 
	 * @param rangeList - The list of ranges to select.
	 * 
	 * @returns the newly selected list of ranges
	 */
	function setActiveRangeList(
		rangeList: SpreadsheetApp.RangeList
	): SpreadsheetApp.RangeList
	/**
	 * Sets the active sheet in a spreadsheet. The Google Sheets UI displays the chosen sheet unless
	 * the sheet belongs to a different spreadsheet.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below makes the 2nd sheet active in the active spreadsheet.
	 * var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
	 * SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[1]);
	 * </code></pre>
	 * 
	 * @param sheet - The new active sheet.
	 * 
	 * @returns the sheet that has been made the new active sheet
	 */
	function setActiveSheet(
		sheet: SpreadsheetApp.Sheet
	): SpreadsheetApp.Sheet
	/**
	 * Sets the active sheet in a spreadsheet, with the option to restore the most recent selection
	 * within that sheet. The Google Sheets UI displays the chosen sheet unless the sheet belongs to a
	 * different spreadsheet.
	 * 
	 * <pre class="prettyprint"><code>
	 * var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
	 * var firstSheet = spreadsheet.getSheets()[0];
	 * var secondSheet = spreadsheet.getSheets()[1];
	 * // Set the first sheet as the active sheet and select the range D4:F4.
	 * spreadsheet.setActiveSheet(firstSheet).getRange(&#39;D4:F4&#39;).activate();
	 * 
	 * // Switch to the second sheet to do some work.
	 * spreadsheet.setActiveSheet(secondSheet);
	 * // Switch back to first sheet, and restore its selection.
	 * spreadsheet.setActiveSheet(firstSheet, true);
	 * 
	 * // The selection of first sheet is restored, and it logs D4:F4
	 * var range = spreadsheet.getActiveSheet().getSelection().getActiveRange();
	 * Logger.log(range.getA1Notation());
	 * </code></pre>
	 * 
	 * @param sheet - The new active sheet.
	 * @param restoreSelection - If <code>true</code>, the most recent selection of the new active sheet
	 *     becomes selected again as the new sheet becomes active; if <code>false</code>, the new sheet
	 *     becomes active without changing the current selection.
	 * 
	 * @returns the new active sheet
	 */
	function setActiveSheet(
		sheet: SpreadsheetApp.Sheet,
		restoreSelection: Boolean
	): SpreadsheetApp.Sheet

	/**
	 * Sets the active spreadsheet.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below makes the spreadsheet with key &quot;1234567890&quot; the active spreadsheet
	 * var ss = SpreadsheetApp.openById(&quot;1234567890&quot;);
	 * SpreadsheetApp.setActiveSpreadsheet(ss);
	 * </code></pre>
	 * 
	 * @param newActiveSpreadsheet - The Spreadsheet to be made the active spreadsheet.
	 */
	function setActiveSpreadsheet(
		newActiveSpreadsheet: SpreadsheetApp.Spreadsheet
	): void
	/**
	 * Sets the specified cell as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app.html#getCurrentCell()'>current cell</a></code>.
	 * 
	 * <p>If the specified cell is present in an already selected range, then that range becomes the
	 * active range with the cell as the current cell.
	 * 
	 * <p>If the specified cell is not present in any selected range, then the existing selection is
	 * removed and the cell becomes the current cell and the active range.
	 * 
	 * <p><b>Note:</b>The specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> must consist of one cell, otherwise this method
	 * throws an exception.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below sets the cell B5 in the first sheet as the current cell.
	 * var cell = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange(&#39;B5&#39;);
	 * SpreadsheetApp.setCurrentCell(cell);
	 * 
	 * var selection = SpreadsheetApp.getSelection();
	 * // Current cell: B5
	 * var currentCell = selection.getCurrentCell();
	 * </code></pre>
	 * 
	 * @param cell - The cell to set as the current cell.
	 * 
	 * @returns the newly set current cell
	 */
	function setCurrentCell(
		cell: SpreadsheetApp.Range
	): SpreadsheetApp.Range

	enum AutoFillSeries {
		/**
		 * Auto-filling with this setting results in the empty cells in the expanded range being filled
		 * with copies of the existing values.
		 */
		ALTERNATE_SERIES = "ALTERNATE_SERIES",
		/**
		 * Default. Auto-filling with this setting results in the empty cells in the expanded range being
		 * filled with increments of the existing values.
		 */
		DEFAULT_SERIES = "DEFAULT_SERIES",
	}

	class Banding {
		private constructor();

		/**
		 * Copies this banding to another range.
		 * 
		 * @param range - The range to copy this banding to.
		 * 
		 * @returns The new banding.
		 */
		copyTo(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.Banding
		/**
		 * Returns the first column color that is alternating, or <code>null</code> if no color is set.
		 * 
		 * @returns The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
		 *     <code>null</code> if no color is set.
		 */
		getFirstColumnColor(): string
		/**
		 * Returns the first alternating column color in the banding, or <code>null</code> if no color is set.
		 * 
		 * @returns The first alternating column color in the banding, or <code>null</code> if no color is set.
		 */
		getFirstColumnColorObject(): SpreadsheetApp.Color
		/**
		 * Returns the first row color that is alternating or <code>null</code> if no color is set.
		 * 
		 * @returns The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
		 *     <code>null</code> if no color is set.
		 */
		getFirstRowColor(): string
		/**
		 * Returns the first alternating row color, or <code>null</code> if no color is set.
		 * 
		 * @returns The first alternating row color in the banding, or <code>null</code> if no color is set.
		 */
		getFirstRowColorObject(): SpreadsheetApp.Color
		/**
		 * Returns the color of the last column, or <code>null</code> if no color is set.
		 * 
		 * @returns The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
		 *     <code>null</code> if no color is set.
		 */
		getFooterColumnColor(): string
		/**
		 * Returns the color of the last column in the banding, or <code>null</code> if no color is set.
		 * 
		 * @returns The last column color in the banding, or <code>null</code> if no color is set.
		 */
		getFooterColumnColorObject(): SpreadsheetApp.Color
		/**
		 * Returns the color of the last row, or <code>null</code> if no color is set.
		 * 
		 * @returns The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
		 *     <code>null</code> if no color is set.
		 */
		getFooterRowColor(): string
		/**
		 * Returns the last row color in the banding, or <code>null</code> if no color is set.
		 * 
		 * @returns The footer row color in the banding, or <code>null</code> if no color is set.
		 */
		getFooterRowColorObject(): SpreadsheetApp.Color
		/**
		 * Returns the color of the header column, or <code>null</code> if no color is set.
		 * 
		 * @returns The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
		 *     <code>null</code> if no color is set.
		 */
		getHeaderColumnColor(): string
		/**
		 * Returns the color of the first column in the banding, or <code>null</code> if no color is set.
		 * 
		 * @returns The first column color in the banding, or <code>null</code> if no color is set.
		 */
		getHeaderColumnColorObject(): SpreadsheetApp.Color
		/**
		 * Returns the color of the header row or <code>null</code> if no color is set.
		 * 
		 * @returns The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
		 *     <code>null</code> if no color is set.
		 */
		getHeaderRowColor(): string
		/**
		 * Returns the color of the header row or <code>null</code> if no color is set.
		 * 
		 * @returns The color of the header row; returns <code>null</code> if no color is set.
		 */
		getHeaderRowColorObject(): SpreadsheetApp.Color
		/**
		 * Returns the range for this banding.
		 * 
		 * @returns The range for this banding.
		 */
		getRange(): SpreadsheetApp.Range
		/**
		 * Returns the second column color that is alternating, or <code>null</code> if no color is set.
		 * 
		 * @returns The HEX color or <code>null</code> if no color is set.
		 */
		getSecondColumnColor(): string
		/**
		 * Returns the second alternating column color in the banding, or <code>null</code> if no color is set.
		 * 
		 * @returns The second alternating column color in the banding, or <code>null</code> if no color is set.
		 */
		getSecondColumnColorObject(): SpreadsheetApp.Color
		/**
		 * Returns the second row color that is alternating or <code>null</code> if no color is set.
		 * 
		 * @returns The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
		 *     <code>null</code> if no color is set.
		 */
		getSecondRowColor(): string
		/**
		 * Returns the second alternating row color, or <code>null</code> if no color is set.
		 * 
		 * @returns The second alternating row color in the banding, or <code>null</code> if no color is set.
		 */
		getSecondRowColorObject(): SpreadsheetApp.Color
		/**
		 * Removes this banding.
		 */
		remove(): void
		/**
		 * Sets the first column color that is alternating.
		 * 
		 * @param color - The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
		 *     <code>null</code> to clear the color.
		 * 
		 * @returns This banding, for chaining.
		 */
		setFirstColumnColor(
			color: string
		): SpreadsheetApp.Banding
		/**
		 * Sets the first alternating column color in the banding.
		 * 
		 * @param color - The new first alternating column color in the banding; setting to <code>null</code>
		 *     clears the color.
		 * 
		 * @returns This banding, for chaining.
		 */
		setFirstColumnColorObject(
			color: SpreadsheetApp.Color
		): SpreadsheetApp.Banding
		/**
		 * Sets the first row color that is alternating.
		 * 
		 * @param color - The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
		 *     <code>null</code> to clear the color.
		 * 
		 * @returns This banding, for chaining.
		 */
		setFirstRowColor(
			color: string
		): SpreadsheetApp.Banding
		/**
		 * Sets the first alternating row color in the banding.
		 * 
		 * @param color - The new first alternating color in the banding; setting to <code>null</code> clears the
		 *     color.
		 * 
		 * @returns This banding, for chaining.
		 */
		setFirstRowColorObject(
			color: SpreadsheetApp.Color
		): SpreadsheetApp.Banding
		/**
		 * Sets the color of the last column.
		 * 
		 * @param color - The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
		 *     <code>null</code> to clear the color.
		 * 
		 * @returns This banding, for chaining.
		 */
		setFooterColumnColor(
			color: string
		): SpreadsheetApp.Banding
		/**
		 * Sets the color of the last column in the banding.
		 * 
		 * @param color - The new color of the last column in the banding; setting to <code>null</code> clears
		 *     the color.
		 * 
		 * @returns This banding, for chaining.
		 */
		setFooterColumnColorObject(
			color: SpreadsheetApp.Color
		): SpreadsheetApp.Banding
		/**
		 * Sets the color of the last row.
		 * 
		 * @param color - The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
		 *     <code>null</code> to clear the color.
		 * 
		 * @returns This banding, for chaining.
		 */
		setFooterRowColor(
			color: string
		): SpreadsheetApp.Banding
		/**
		 * Sets the color of the footer row in the banding.
		 * 
		 * @param color - The new footer row color; setting to <code>null</code> clears the color.
		 * 
		 * @returns This banding, for chaining.
		 */
		setFooterRowColorObject(
			color: SpreadsheetApp.Color
		): SpreadsheetApp.Banding
		/**
		 * Sets the color of the header column.
		 * 
		 * @param color - The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
		 *     <code>null</code> to clear the color.
		 * 
		 * @returns This banding, for chaining.
		 */
		setHeaderColumnColor(
			color: string
		): SpreadsheetApp.Banding
		/**
		 * Sets the color of the header column.
		 * 
		 * @param color - The new header column color; setting to <code>null</code> clears the color.
		 * 
		 * @returns This banding, for chaining.
		 */
		setHeaderColumnColorObject(
			color: SpreadsheetApp.Color
		): SpreadsheetApp.Banding
		/**
		 * Sets the color of the header row.
		 * 
		 * @param color - The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
		 *     <code>null</code> to clear the color.
		 * 
		 * @returns This banding, for chaining.
		 */
		setHeaderRowColor(
			color: string
		): SpreadsheetApp.Banding
		/**
		 * Sets the color of the header row.
		 * 
		 * @param color - The new header row color; setting to <code>null</code> clears the color.
		 * 
		 * @returns This banding, for chaining.
		 */
		setHeaderRowColorObject(
			color: SpreadsheetApp.Color
		): SpreadsheetApp.Banding
		/**
		 * Sets the range for this banding.
		 * 
		 * @param range - The new range for this banding.
		 * 
		 * @returns This banding, for chaining.
		 */
		setRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.Banding
		/**
		 * Sets the second column color that is alternating.
		 * 
		 * @param color - The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
		 *     <code>null</code> to clear the color.
		 * 
		 * @returns This banding, for chaining.
		 */
		setSecondColumnColor(
			color: string
		): SpreadsheetApp.Banding
		/**
		 * Sets the second alternating column color in the banding.
		 * 
		 * @param color - The new second alternating column color in the banding; setting to <code>null</code>
		 *     clears the color.
		 * 
		 * @returns This banding, for chaining.
		 */
		setSecondColumnColorObject(
			color: SpreadsheetApp.Color
		): SpreadsheetApp.Banding
		/**
		 * Sets the second row color that is alternating.
		 * 
		 * @param color - The color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
		 *     <code>null</code> to clear the color.
		 * 
		 * @returns This banding, for chaining.
		 */
		setSecondRowColor(
			color: string
		): SpreadsheetApp.Banding
		/**
		 * Sets the second alternating color in the banding.
		 * 
		 * @param color - The new second alternating color in the banding; setting to <code>null</code> clears
		 *     the color.
		 * 
		 * @returns This banding, for chaining.
		 */
		setSecondRowColorObject(
			color: SpreadsheetApp.Color
		): SpreadsheetApp.Banding

	}

	enum BandingTheme {
		/**
		 * A blue banding theme.
		 */
		BLUE = "BLUE",
		/**
		 * A brown banding theme.
		 */
		BROWN = "BROWN",
		/**
		 * A cyan banding theme.
		 */
		CYAN = "CYAN",
		/**
		 * A green banding theme.
		 */
		GREEN = "GREEN",
		/**
		 * A grey banding theme.
		 */
		GREY = "GREY",
		/**
		 * An indigo banding theme.
		 */
		INDIGO = "INDIGO",
		/**
		 * A light green banding theme.
		 */
		LIGHT_GREEN = "LIGHT_GREEN",
		/**
		 * A light grey banding theme.
		 */
		LIGHT_GREY = "LIGHT_GREY",
		/**
		 * An orange banding theme.
		 */
		ORANGE = "ORANGE",
		/**
		 * A pink banding theme.
		 */
		PINK = "PINK",
		/**
		 * A teal banding theme.
		 */
		TEAL = "TEAL",
		/**
		 * A yellow banding theme.
		 */
		YELLOW = "YELLOW",
	}

	class BigQueryDataSourceSpec {
		private constructor();

		/**
		 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder.html'>DataSourceSpecBuilder</a></code> based on this data source's settings.
		 * 
		 * @returns The builder.
		 */
		copy(): SpreadsheetApp.DataSourceSpecBuilder
		/**
		 * Gets the BigQuery dataset ID.
		 * 
		 * @returns The dataset ID, or an empty string if the data source spec is defined by a raw query.
		 */
		getDatasetId(): string
		/**
		 * Gets the parameters of the data source.
		 * 
		 * @returns The parameter list.
		 */
		getParameters(): SpreadsheetApp.DataSourceParameter[]
		/**
		 * Gets the billing project ID.
		 * 
		 * @returns The project ID.
		 */
		getProjectId(): string
		/**
		 * Gets the raw query string.
		 * 
		 * @returns The raw query string.
		 */
		getRawQuery(): string
		/**
		 * Gets the BigQuery table ID.
		 * 
		 * @returns The table ID, or an empty string if the data source spec is defined by a raw query.
		 */
		getTableId(): string
		/**
		 * Gets the BigQuery project ID for the table.
		 * 
		 * @returns The table project ID, or an empty string if the data source spec is defined by a raw
		 *     query.
		 */
		getTableProjectId(): string
		/**
		 * Gets the type of the data source.
		 * 
		 * @returns The data source type.
		 */
		getType(): SpreadsheetApp.DataSourceType

	}

	class BigQueryDataSourceSpecBuilder {
		private constructor();

		/**
		 * Builds a data source specification from the settings in this builder. Must use <code>as...()</code>
		 * to specify a data source type before building.
		 * 
		 * @returns The data source specification.
		 */
		build(): SpreadsheetApp.DataSourceSpec
		/**
		 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder.html'>DataSourceSpecBuilder</a></code> based on this data source's settings.
		 * 
		 * @returns The builder.
		 */
		copy(): SpreadsheetApp.DataSourceSpecBuilder
		/**
		 * Gets the BigQuery dataset ID.
		 * 
		 * @returns The dataset ID, or an empty string if the data source spec is defined by a raw query.
		 */
		getDatasetId(): string
		/**
		 * Gets the parameters of the data source.
		 * 
		 * @returns The parameter list.
		 */
		getParameters(): SpreadsheetApp.DataSourceParameter[]
		/**
		 * Gets the billing project ID.
		 * 
		 * @returns The project ID.
		 */
		getProjectId(): string
		/**
		 * Gets the raw query string.
		 * 
		 * @returns The raw query string.
		 */
		getRawQuery(): string
		/**
		 * Gets the BigQuery table ID.
		 * 
		 * @returns The table ID, or an empty string if the data source spec is defined by a raw query.
		 */
		getTableId(): string
		/**
		 * Gets the BigQuery project ID for the table.
		 * 
		 * @returns The table project ID, or an empty string if the data source spec is defined by a raw
		 *     query.
		 */
		getTableProjectId(): string
		/**
		 * Gets the type of the data source.
		 * 
		 * @returns The data source type.
		 */
		getType(): SpreadsheetApp.DataSourceType
		/**
		 * Removes all the parameters.
		 * 
		 * @returns The builder, for chaining.
		 */
		removeAllParameters(): SpreadsheetApp.BigQueryDataSourceSpecBuilder
		/**
		 * Removes the specified parameter.
		 * 
		 * @param parameterName - The name of the parameter to remove.
		 * 
		 * @returns The builder, for chaining.
		 */
		removeParameter(
			parameterName: string
		): SpreadsheetApp.BigQueryDataSourceSpecBuilder
		/**
		 * Sets the BigQuery dataset ID.
		 * 
		 * @param datasetId - The ID of the dataset.
		 * 
		 * @returns This builder, for chaining.
		 */
		setDatasetId(
			datasetId: string
		): SpreadsheetApp.BigQueryDataSourceSpecBuilder
		/**
		 * Adds a parameter, or if the parameter with the name exists, updates its source cell.
		 * 
		 * @param parameterName - The parameter name.
		 * @param sourceCell - The source cell, as specified in A1 notation.
		 * 
		 * @returns The builder, for chaining.
		 */
		setParameterFromCell(
			parameterName: string,
			sourceCell: string
		): SpreadsheetApp.BigQueryDataSourceSpecBuilder
		/**
		 * Sets the billing BigQuery project ID.
		 * 
		 * @param projectId - The ID of the billing project.
		 * 
		 * @returns The builder, for chaining.
		 */
		setProjectId(
			projectId: string
		): SpreadsheetApp.BigQueryDataSourceSpecBuilder
		/**
		 * Sets the raw query string.
		 * 
		 * @param rawQuery - The raw query string.
		 * 
		 * @returns The builder, for chaining.
		 */
		setRawQuery(
			rawQuery: string
		): SpreadsheetApp.BigQueryDataSourceSpecBuilder
		/**
		 * Sets the BigQuery table ID.
		 * 
		 * @param tableId - The ID of the table.
		 * 
		 * @returns This builder, for chaining.
		 */
		setTableId(
			tableId: string
		): SpreadsheetApp.BigQueryDataSourceSpecBuilder
		/**
		 * Sets the BigQuery project ID for the table.
		 * 
		 * @param projectId - The project ID of the BigQuery table.
		 * 
		 * @returns The builder, for chaining.
		 */
		setTableProjectId(
			projectId: string
		): SpreadsheetApp.BigQueryDataSourceSpecBuilder

	}

	class BooleanCondition {
		private constructor();

		/**
		 * Gets the background color string for this boolean condition. Returns <code>null</code> if not set.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the boolean condition background color for each conditional format rule on a sheet.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rules = sheet.getConditionalFormatRules();
		 * for (int i = 0; i &lt; rules.length; i++) {
		 *   var color = rules[i].getBooleanCondition().getBackground();
		 *   Logger.log(&quot;The background color for rule %s is %s&quot;, i, color);
		 * }
		 * </code></pre>
		 * 
		 * @returns the background color string, or <code>null</code> if not set for this condition
		 */
		getBackground(): string
		/**
		 * Gets the background color for this boolean condition. Returns <code>null</code> if not set.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the boolean condition background color for each conditional format rule on a sheet.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rules = sheet.getConditionalFormatRules();
		 * for (int i = 0; i &lt; rules.length; i++) {
		 *   var color = rules[i].getBooleanCondition().getBackgroundObject();
		 *   Logger.log(&quot;The background color for rule %s is %s&quot;, i, color.asRgbColor().asHexString());
		 * }
		 * </code></pre>
		 * 
		 * @returns The background color, or <code>null</code> if not set for this condition.
		 */
		getBackgroundObject(): SpreadsheetApp.Color
		/**
		 * Returns <code>true</code> if this boolean condition bolds the text and returns <code>false</code> if this
		 * boolean condition removes bolding from the text. Returns <code>null</code> if bolding is unaffected.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the boolean condition font weight for each conditional format rule on a sheet.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rules = sheet.getConditionalFormatRules();
		 * for (int i = 0; i &lt; rules.length; i++) {
		 *   var bold = rules[i].getBooleanCondition().getBold();
		 *   Logger.log(&quot;The font bold setting for rule %s is %b&quot;, i, weight);
		 * }
		 * </code></pre>
		 * 
		 * @returns whether or not the boolean condition bolds the text, or <code>null</code> if bolding is
		 *     unaffected
		 */
		getBold(): Boolean
		/**
		 * Gets the rule's criteria type as defined in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria.html'>BooleanCriteria</a></code> enum. To get the
		 * arguments for the criteria, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition.html#getCriteriaValues()'>getCriteriaValues()</a></code>. To use these values to create or
		 * modify a conditional formatting rule, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder.html#withCriteria(BooleanCriteria,Object)'>ConditionalFormatRuleBuilder.withCriteria(criteria, args)</a></code>.
		 * 
		 * <pre class="prettyprint">
		 * // Log information about the conditional formats on the active sheet that use
		 * // boolean conditions.
		 * var sheet = SpreadsheetApp.getActiveSheet;
		 * var formats = sheet.getConditionalFormats();
		 * sheet.getConditionalFormats().forEach(function(format) {
		 *   var booleanCondition = format.getBooleanCondition();
		 *   if (booleanCondition) {
		 *     var criteria = booleanCondition.getCriteriaType();
		 *     var args = booleanCondition.getCriteriaValues();
		 *     Logger.log('The conditional format rule is %s %s', criteria, args);
		 *   }
		 * });
		 * </pre>
		 * 
		 * @returns the type of conditional formatting criteria
		 */
		getCriteriaType(): SpreadsheetApp.BooleanCriteria
		/**
		 * Gets an array of arguments for the rule's criteria. To get the criteria type, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition.html#getCriteriaType()'>getCriteriaType()</a></code>. To use these values to create or modify a conditional formatting rule, see
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder.html#withCriteria(BooleanCriteria,Object)'>ConditionalFormatRuleBuilder.withCriteria(criteria, args)</a></code>.
		 * 
		 * <pre class="prettyprint">
		 * // Log information about the conditional formats on the active sheet that use
		 * // boolean conditions.
		 * var sheet = SpreadsheetApp.getActiveSheet;
		 * var formats = sheet.getConditionalFormats();
		 * sheet.getConditionalFormats().forEach(function(format) {
		 *   var booleanCondition = format.getBooleanCondition();
		 *   if (booleanCondition) {
		 *     var criteria = booleanCondition.getCriteriaType();
		 *     var args = booleanCondition.getCriteriaValues();
		 *     Logger.log('The conditional format rule is %s %s', criteria, args);
		 *   }
		 * });
		 * </pre>
		 * 
		 * @returns an array of arguments appropriate to the rule's criteria type; the number of arguments
		 *     and their type match the corresponding <code>when...()</code> method of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder.html'>ConditionalFormatRuleBuilder</a></code> class
		 */
		getCriteriaValues(): object[]
		/**
		 * Gets the font color string for this boolean condition. Returns <code>null</code> if not set.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the boolean condition font color for each conditional format rule on a sheet.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rules = sheet.getConditionalFormatRules();
		 * for (int i = 0; i &lt; rules.length; i++) {
		 *   var color = rules[i].getBooleanCondition().getFontColor();
		 *   Logger.log(&quot;The font color for rule %s is %s&quot;, i, color);
		 * }
		 * </code></pre>
		 * 
		 * @returns the font color string, or <code>null</code> if not set for this condition
		 */
		getFontColor(): string
		/**
		 * Gets the font color for this boolean condition. Returns <code>null</code> if not set.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the boolean condition font color for each conditional format rule on a sheet.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rules = sheet.getConditionalFormatRules();
		 * for (int i = 0; i &lt; rules.length; i++) {
		 *   var color = rules[i].getBooleanCondition().getFontColorObject();
		 *   Logger.log(&quot;The font color for rule %s is %s&quot;, i, color.asRgbColor().asHexString());
		 * }
		 * </code></pre>
		 * 
		 * @returns The font color, or <code>null</code> if not set for this condition.
		 */
		getFontColorObject(): SpreadsheetApp.Color
		/**
		 * Returns <code>true</code> if this boolean condition italicises the text and returns <code>false</code> if
		 * this boolean condition removes italics from the text. Returns <code>null</code> if italics are
		 * unaffected.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the boolean condition font style for each conditional format rule on a sheet.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rules = sheet.getConditionalFormatRules();
		 * for (int i = 0; i &lt; rules.length; i++) {
		 *   var italic = rules[i].getBooleanCondition().getItalic();
		 *   Logger.log(&quot;The font italic setting for rule %s is %b&quot;, i, italic);
		 * }
		 * </code></pre>
		 * 
		 * @returns whether or not the boolean condition italicises the text, or <code>null</code> if
		 *     italicising is unaffected
		 */
		getItalic(): Boolean
		/**
		 * Returns <code>true</code> if this boolean condition strikes through the text and returns <code>false</code> if this boolean condition removes strikethrough from the text. Returns <code>null</code> if
		 * strikethrough is unaffected.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the boolean condition strikethrough setting for each conditional format rule on a
		 * // sheet.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rules = sheet.getConditionalFormatRules();
		 * for (int i = 0; i &lt; rules.length; i++) {
		 *   var strikethrough = rules[i].getBooleanCondition().getStrikethrough();
		 *   Logger.log(&quot;The font strikethrough setting for rule %s is %b&quot;, i, strikethrough);
		 * }
		 * </code></pre>
		 * 
		 * @returns whether or not the boolean condition strikes through the text, or <code>null</code> if
		 *     strikethrough is unaffected
		 */
		getStrikethrough(): Boolean
		/**
		 * Returns <code>true</code> if this boolean condition underlines the text and returns <code>false</code> if
		 * this boolean condition removes underlining from the text. Returns <code>null</code> if underlining
		 * is unaffected.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the boolean condition underline setting for each conditional format rule on a sheet.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rules = sheet.getConditionalFormatRules();
		 * for (int i = 0; i &lt; rules.length; i++) {
		 *   var underline = rules[i].getBooleanCondition().getUnderline();
		 *   Logger.log(&quot;The font underline setting for rule %s is %b&quot;, i, underline);
		 * }
		 * </code></pre>
		 * 
		 * @returns whether or not the boolean condition underlines the text, or <code>null</code> if
		 *     underlining is unaffected
		 */
		getUnderline(): Boolean

	}

	enum BooleanCriteria {
		/**
		 * The criteria is met when a cell is empty.
		 */
		CELL_EMPTY = "CELL_EMPTY",
		/**
		 * The criteria is met when a cell is not empty.
		 */
		CELL_NOT_EMPTY = "CELL_NOT_EMPTY",
		/**
		 * The criteria is met when the input makes the given formula evaluate to <code>true</code>.
		 */
		CUSTOM_FORMULA = "CUSTOM_FORMULA",
		/**
		 * The criteria is met when a date is after the given value.
		 */
		DATE_AFTER = "DATE_AFTER",
		/**
		 * The criteria is met when a date is after the relative date value.
		 */
		DATE_AFTER_RELATIVE = "DATE_AFTER_RELATIVE",
		/**
		 * The criteria is met when a date is before the given value.
		 */
		DATE_BEFORE = "DATE_BEFORE",
		/**
		 * The criteria is met when a date is before the relative date value.
		 */
		DATE_BEFORE_RELATIVE = "DATE_BEFORE_RELATIVE",
		/**
		 * The criteria is met when a date is equal to the given value.
		 */
		DATE_EQUAL_TO = "DATE_EQUAL_TO",
		/**
		 * The criteria is met when a date is equal to the relative date value.
		 */
		DATE_EQUAL_TO_RELATIVE = "DATE_EQUAL_TO_RELATIVE",
		/**
		 * The criteria is met when a date is not equal to the given value.
		 */
		DATE_NOT_EQUAL_TO = "DATE_NOT_EQUAL_TO",
		/**
		 * The criteria is met when a number that is between the given values.
		 */
		NUMBER_BETWEEN = "NUMBER_BETWEEN",
		/**
		 * The criteria is met when a number that is equal to the given value.
		 */
		NUMBER_EQUAL_TO = "NUMBER_EQUAL_TO",
		/**
		 * The criteria is met when a number that is greater than the given value.
		 */
		NUMBER_GREATER_THAN = "NUMBER_GREATER_THAN",
		/**
		 * The criteria is met when a number that is greater than or equal to the given value.
		 */
		NUMBER_GREATER_THAN_OR_EQUAL_TO = "NUMBER_GREATER_THAN_OR_EQUAL_TO",
		/**
		 * The criteria is met when a number that is less than the given value.
		 */
		NUMBER_LESS_THAN = "NUMBER_LESS_THAN",
		/**
		 * The criteria is met when a number that is less than or equal to the given value.
		 */
		NUMBER_LESS_THAN_OR_EQUAL_TO = "NUMBER_LESS_THAN_OR_EQUAL_TO",
		/**
		 * The criteria is met when a number that is not between the given values.
		 */
		NUMBER_NOT_BETWEEN = "NUMBER_NOT_BETWEEN",
		/**
		 * The criteria is met when a number that is not equal to the given value.
		 */
		NUMBER_NOT_EQUAL_TO = "NUMBER_NOT_EQUAL_TO",
		/**
		 * The criteria is met when the input contains the given value.
		 */
		TEXT_CONTAINS = "TEXT_CONTAINS",
		/**
		 * The criteria is met when the input does not contain the given value.
		 */
		TEXT_DOES_NOT_CONTAIN = "TEXT_DOES_NOT_CONTAIN",
		/**
		 * The criteria is met when the input ends with the given value.
		 */
		TEXT_ENDS_WITH = "TEXT_ENDS_WITH",
		/**
		 * The criteria is met when the input is equal to the given value.
		 */
		TEXT_EQUAL_TO = "TEXT_EQUAL_TO",
		/**
		 * The criteria is met when the input is not equal to the given value.
		 */
		TEXT_NOT_EQUAL_TO = "TEXT_NOT_EQUAL_TO",
		/**
		 * The criteria is met when the input begins with the given value.
		 */
		TEXT_STARTS_WITH = "TEXT_STARTS_WITH",
	}

	enum BorderStyle {
		/**
		 * Dashed line borders.
		 */
		DASHED = "DASHED",
		/**
		 * Dotted line borders.
		 */
		DOTTED = "DOTTED",
		/**
		 * Two solid line borders.
		 */
		DOUBLE = "DOUBLE",
		/**
		 * Thin solid line borders.
		 */
		SOLID = "SOLID",
		/**
		 * Medium solid line borders.
		 */
		SOLID_MEDIUM = "SOLID_MEDIUM",
		/**
		 * Thick solid line borders.
		 */
		SOLID_THICK = "SOLID_THICK",
	}

	class Color {
		private constructor();

		/**
		 * Converts this color to an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../base/rgb-color.html'>RgbColor</a></code>.
		 * 
		 * @returns The RGB color.
		 */
		asRgbColor(): RgbColor
		/**
		 * Converts this color to a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/theme-color.html'>ThemeColor</a></code>.
		 * 
		 * @returns The theme color.
		 */
		asThemeColor(): SpreadsheetApp.ThemeColor
		/**
		 * Get the type of this color.
		 * 
		 * @returns The color type.
		 */
		getColorType(): ColorType

	}

	class ColorBuilder {
		private constructor();

		/**
		 * Converts this color to an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../base/rgb-color.html'>RgbColor</a></code>.
		 * 
		 * @returns The RGB color.
		 */
		asRgbColor(): RgbColor
		/**
		 * Converts this color to a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/theme-color.html'>ThemeColor</a></code>.
		 * 
		 * @returns The theme color.
		 */
		asThemeColor(): SpreadsheetApp.ThemeColor
		/**
		 * Creates a color object from the settings supplied to the builder.
		 * 
		 * @returns A color object created from this builder.
		 */
		build(): SpreadsheetApp.Color
		/**
		 * Get the type of this color.
		 * 
		 * @returns The color type.
		 */
		getColorType(): ColorType
		/**
		 * Sets as RGB color.
		 * 
		 * @param cssString - The RGB color in CSS notation (such as '#ffffff').
		 * 
		 * @returns This builder, for chaining.
		 */
		setRgbColor(
			cssString: string
		): SpreadsheetApp.ColorBuilder
		/**
		 * Sets as theme color.
		 * 
		 * @param themeColorType - The theme color type.
		 * 
		 * @returns This builder, for chaining.
		 */
		setThemeColor(
			themeColorType: SpreadsheetApp.ThemeColorType
		): SpreadsheetApp.ColorBuilder

	}

	class ConditionalFormatRule {
		private constructor();

		/**
		 * Returns a rule builder preset with this rule's settings.
		 * 
		 * @returns a builder based on this rule's settings
		 */
		copy(): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Retrieves the rule's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition.html'>BooleanCondition</a></code> information if this rule uses
		 * boolean condition criteria. Otherwise returns <code>null</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the boolean criteria type of the first conditional format rules of a sheet.
		 * var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
		 * var booleanCondition = rule.getBooleanCondition();
		 * if (booleanCondition != null) {
		 *   Logger.log(booleanCondition.getCriteriaType());
		 * }
		 * </code></pre>
		 * 
		 * @returns the boolean condition object, or <code>null</code> if the rule does not use a boolean
		 *     condition.
		 */
		getBooleanCondition(): SpreadsheetApp.BooleanCondition
		/**
		 * Retrieves the rule's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/gradient-condition.html'>GradientCondition</a></code> information, if this rule
		 * uses gradient condition criteria. Otherwise returns <code>null</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the gradient minimum color of the first conditional format rule of a sheet.
		 * var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
		 * var gradientCondition = rule.getGradientCondition();
		 * if (gradientCondition != null) {
		 *   Logger.log(gradientCondition.getMinColor());
		 * }
		 * </code></pre>
		 * 
		 * @returns the gradient condition object, or <code>null</code> if the rule does not use a gradient
		 *     condition.
		 */
		getGradientCondition(): SpreadsheetApp.GradientCondition
		/**
		 * Retrieves the ranges to which this conditional format rule is applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log each range of the first conditional format rule of a sheet.
		 * var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
		 * var ranges = rule.getRanges();
		 * for (int i = 0; i &lt; ranges.length; i++) {
		 *   Logger.log(ranges[i].getA1Notation());
		 * }
		 * </code></pre>
		 * 
		 * @returns the ranges to which this conditional format rule is applied.
		 */
		getRanges(): SpreadsheetApp.Range[]

	}

	class ConditionalFormatRuleBuilder {
		private constructor();

		/**
		 * Constructs a conditional format rule from the settings applied to the builder.
		 * 
		 * @returns a representation of the conditional format rule
		 */
		build(): SpreadsheetApp.ConditionalFormatRule
		/**
		 * Returns a rule builder preset with this rule's settings.
		 * 
		 * @returns a builder based on this rule's settings
		 */
		copy(): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Retrieves the rule's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition.html'>BooleanCondition</a></code> information if this rule uses
		 * boolean condition criteria. Otherwise returns <code>null</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the boolean criteria type of the first conditional format rules of a sheet.
		 * var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
		 * var booleanCondition = rule.getBooleanCondition();
		 * if (booleanCondition != null) {
		 *   Logger.log(booleanCondition.getCriteriaType());
		 * }
		 * </code></pre>
		 * 
		 * @returns the boolean condition object, or <code>null</code> if the rule does not use a boolean
		 *     condition.
		 */
		getBooleanCondition(): SpreadsheetApp.BooleanCondition
		/**
		 * Retrieves the rule's <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/gradient-condition.html'>GradientCondition</a></code> information, if this rule
		 * uses gradient condition criteria. Otherwise returns <code>null</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the gradient minimum color of the first conditional format rule of a sheet.
		 * var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
		 * var gradientCondition = rule.getGradientCondition();
		 * if (gradientCondition != null) {
		 *   Logger.log(gradientCondition.getMinColor());
		 * }
		 * </code></pre>
		 * 
		 * @returns the gradient condition object, or <code>null</code> if the rule does not use a gradient
		 *     condition.
		 */
		getGradientCondition(): SpreadsheetApp.GradientCondition
		/**
		 * Retrieves the ranges to which this conditional format rule is applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log each range of the first conditional format rule of a sheet.
		 * var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
		 * var ranges = rule.getRanges();
		 * for (int i = 0; i &lt; ranges.length; i++) {
		 *   Logger.log(ranges[i].getA1Notation());
		 * }
		 * </code></pre>
		 * 
		 * @returns the ranges to which this conditional format rule is applied.
		 */
		getRanges(): SpreadsheetApp.Range[]
		/**
		 * Sets the background color for the conditional format rule's format. Passing in <code>null</code>
		 * removes the background color format setting from the rule.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
		 * // background color to red if the cell has text equal to &quot;hello&quot;.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenTextEqualTo(&quot;hello&quot;)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param color - The desired color or <code>null</code> to clear.
		 * 
		 * @returns the builder, for chaining
		 */
		setBackground(
			color: string
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the background color for the conditional format rule's format. Passing in <code>null</code>
		 * removes the background color format setting from the rule.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
		 * // background color to theme background color if the cell has text equal to &quot;hello&quot;.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var color = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.BACKGROUND)
		 *     .build();
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenTextEqualTo(&quot;hello&quot;)
		 *     .setBackground(color)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param color - The desired color object or <code>null</code> to clear.
		 * 
		 * @returns The builder, for chaining.
		 */
		setBackgroundObject(
			color: SpreadsheetApp.Color
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets text bolding for the conditional format rule's format. If <code>bold</code> is <code>true</code>,
		 * the rule bolds text if the condition is met; if <code>false</code>, the rule removes any existing
		 * bolding if the condition is met. Passing in <code>null</code> removes the bold format setting from
		 * the rule.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn their
		 * // text bold if the cell has text equal to &quot;hello&quot;.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenTextEqualTo(&quot;hello&quot;)
		 *     .setBold(true)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param bold - Whether or not the text should be bolded if the format condition is met; <code>null</code> removes this setting.
		 * 
		 * @returns the builder, for chaining
		 */
		setBold(
			bold: Boolean
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the font color for the conditional format rule's format. Passing in <code>null</code> removes
		 * the font color format setting from the rule.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their font
		 * // color to red if the cell has text equal to &quot;hello&quot;.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenTextEqualTo(&quot;hello&quot;)
		 *     .setFontColor(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param color - The desired color or <code>null</code> to clear.
		 * 
		 * @returns the builder, for chaining
		 */
		setFontColor(
			color: string
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the font color for the conditional format rule's format. Passing in <code>null</code> removes
		 * the font color format setting from the rule.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their font
		 * // color to theme text color if the cell has text equal to &quot;hello&quot;.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var color = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.TEXT)
		 *     .build();
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenTextEqualTo(&quot;hello&quot;)
		 *     .setFontColor(color)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param color - The desired color object or <code>null</code> to clear.
		 * 
		 * @returns The builder, for chaining.
		 */
		setFontColorObject(
			color: SpreadsheetApp.Color
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Clears the conditional format rule's gradient maxpoint value, and instead uses the maximum
		 * value in the rule's ranges. Also sets the gradient's maxpoint color to the input color.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
		 * // background color somewhere between white and red, based on their values in comparison to
		 * // the ranges minimum and maximum values.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .setGradientMaxpoint(&quot;#FF0000&quot;)
		 *     .setGradientMinpoint(&quot;#FFFFFF&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param color - The maxpoint color to set.
		 * 
		 * @returns the builder, for chaining
		 */
		setGradientMaxpoint(
			color: string
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Clears the conditional format rule's gradient maxpoint value, and instead uses the maximum
		 * value in the rule's ranges. Also sets the gradient's maxpoint color to the input color.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
		 * // background color somewhere between theme text and background colors, based on their values
		 * // in comparison to the ranges minimum and maximum values.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var textColor = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.TEXT)
		 *     .build();
		 * var backgroundColor = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.BACKGROUND)
		 *     .build();
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .setGradientMaxpoint(textColor)
		 *     .setGradientMinpoint(backgroundColor)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param color - The maxpoint color object to set.
		 * 
		 * @returns The builder, for chaining.
		 */
		setGradientMaxpointObject(
			color: SpreadsheetApp.Color
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule's gradient maxpoint fields.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
		 * // background color somewhere from theme accent 1, accent 2 to accent 3 colors, based on their
		 * // values in comparison to the values 0, 50, and 100.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var color1 = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1)
		 *     .build();
		 * var color2 = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT2)
		 *     .build();
		 * var color3 = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT3)
		 *     .build();
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .setGradientMaxpointWithValue(color1, SpreadsheetApp.InterpolationType.NUMBER, &quot;100&quot;)
		 *     .setGradientMidpointWithValue(color2, SpreadsheetApp.InterpolationType.NUMBER, &quot;50&quot;)
		 *     .setGradientMinpointWithValue(color3, SpreadsheetApp.InterpolationType.NUMBER, &quot;0&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param color - The maxpoint color to set.
		 * @param type - The maxpoint interpolation type to set.
		 * @param value - The maxpoint value to set.
		 * 
		 * @returns The builder, for chaining.
		 */
		setGradientMaxpointObjectWithValue(
			color: SpreadsheetApp.Color,
			type: SpreadsheetApp.InterpolationType,
			value: string
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule's gradient maxpoint fields.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
		 * // background color somewhere from red green to blue, based on their values in comparison to
		 * // the values 0, 50, and 100.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .setGradientMaxpointWithValue(&quot;#0000FF&quot;, SpreadsheetApp.InterpolationType.NUMBER, &quot;100&quot;)
		 *     .setGradientMidpointWithValue(&quot;#00FF00&quot;, SpreadsheetApp.InterpolationType.NUMBER, &quot;50&quot;)
		 *     .setGradientMinpointWithValue(&quot;#FF0000&quot;, SpreadsheetApp.InterpolationType.NUMBER, &quot;0&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param color - The maxpoint color to set.
		 * @param type - The maxpoint interpolation type to set.
		 * @param value - The maxpoint value to set.
		 * 
		 * @returns the builder, for chaining
		 */
		setGradientMaxpointWithValue(
			color: string,
			type: SpreadsheetApp.InterpolationType,
			value: string
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule's gradient midpoint fields. Clears all of the midpoint fields
		 * if the passed in interpolation type is <code>null</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
		 * // background color somewhere from theme accent 1 to accent 2 to accent 3 colors, based on
		 * // their values in comparison to the values 0, 50, and 100.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var color1 = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1)
		 *     .build();
		 * var color2 = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT2)
		 *     .build();
		 * var color3 = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT3)
		 *     .build();
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .setGradientMaxpointWithValue(color1, SpreadsheetApp.InterpolationType.NUMBER, &quot;100&quot;)
		 *     .setGradientMidpointWithValue(color2, SpreadsheetApp.InterpolationType.NUMBER, &quot;50&quot;)
		 *     .setGradientMinpointWithValue(color3, SpreadsheetApp.InterpolationType.NUMBER, &quot;0&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param color - The midpoint color to set.
		 * @param type - The midpoint interpolation type to set or <code>null</code> to clear.
		 * @param value - The midpoint value to set.
		 * 
		 * @returns The builder, for chaining.
		 */
		setGradientMidpointObjectWithValue(
			color: SpreadsheetApp.Color,
			type: SpreadsheetApp.InterpolationType,
			value: string
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule's gradient midpoint fields. Clears all of the midpoint fields
		 * if the passed in interpolation type is <code>null</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
		 * // background color somewhere from red green to blue, based on their values in comparison to
		 * // the values 0, 50, and 100.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .setGradientMaxpointWithValue(&quot;#0000FF&quot;, SpreadsheetApp.InterpolationType.NUMBER, &quot;100&quot;)
		 *     .setGradientMidpointWithValue(&quot;#00FF00&quot;, SpreadsheetApp.InterpolationType.NUMBER, &quot;50&quot;)
		 *     .setGradientMinpointWithValue(&quot;#FF0000&quot;, SpreadsheetApp.InterpolationType.NUMBER, &quot;0&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param color - The midpoint color to set.
		 * @param type - The midpoint interpolation type to set or <code>null</code> to clear.
		 * @param value - The midpoint value to set.
		 * 
		 * @returns the builder, for chaining
		 */
		setGradientMidpointWithValue(
			color: string,
			type: SpreadsheetApp.InterpolationType,
			value: string
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Clears the conditional format rule's gradient minpoint value, and instead uses the minimum
		 * value in the rule's ranges. Also sets the gradient's minpoint color to the input color.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
		 * // background color somewhere between white and red, based on their values in comparison to
		 * // the ranges minimum and maximum values.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .setGradientMaxpoint(&quot;#FF0000&quot;)
		 *     .setGradientMinpoint(&quot;#FFFFFF&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param color - The minpoint color to set.
		 * 
		 * @returns the builder, for chaining
		 */
		setGradientMinpoint(
			color: string
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Clears the conditional format rule's gradient minpoint value, and instead uses the minimum
		 * value in the rule's ranges. Also sets the gradient's minpoint color to the input color.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
		 * // background color somewhere between theme text and background colors, based on their values
		 * // in comparison to the ranges minimum and maximum values.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var textColor = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.TEXT)
		 *     .build();
		 * var backgroundColor = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.BACKGROUND)
		 *     .build();
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .setGradientMaxpoint(textColor)
		 *     .setGradientMinpoint(backgroundColor)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param color - The minpoint color object to set.
		 * 
		 * @returns The builder, for chaining.
		 */
		setGradientMinpointObject(
			color: SpreadsheetApp.Color
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule's gradient minpoint fields.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
		 * // background color somewhere from theme accent 1 to accent 2 to accent 3 colors, based on
		 * // their values in comparison to the values 0, 50, and 100.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var color1 = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1)
		 *     .build();
		 * var color2 = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT2)
		 *     .build();
		 * var color3 = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT3)
		 *     .build();
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .setGradientMaxpointWithValue(color1, SpreadsheetApp.InterpolationType.NUMBER, &quot;100&quot;)
		 *     .setGradientMidpointWithValue(color2, SpreadsheetApp.InterpolationType.NUMBER, &quot;50&quot;)
		 *     .setGradientMinpointWithValue(color3, SpreadsheetApp.InterpolationType.NUMBER, &quot;0&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param color - The minpoint color to set.
		 * @param type - The minpoint interpolation type to set.
		 * @param value - The minpoint value to set.
		 * 
		 * @returns The builder, for chaining.
		 */
		setGradientMinpointObjectWithValue(
			color: SpreadsheetApp.Color,
			type: SpreadsheetApp.InterpolationType,
			value: string
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule's gradient minpoint fields.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
		 * // background color somewhere from red to green to blue, based on their values in comparison to
		 * // the values 0, 50, and 100.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .setGradientMaxpointWithValue(&quot;#0000FF&quot;, SpreadsheetApp.InterpolationType.NUMBER, &quot;100&quot;)
		 *     .setGradientMidpointWithValue(&quot;#00FF00&quot;, SpreadsheetApp.InterpolationType.NUMBER, &quot;50&quot;)
		 *     .setGradientMinpointWithValue(&quot;#FF0000&quot;, SpreadsheetApp.InterpolationType.NUMBER, &quot;0&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param color - The minpoint color to set.
		 * @param type - The minpoint interpolation type to set.
		 * @param value - The minpoint value to set.
		 * 
		 * @returns the builder, for chaining
		 */
		setGradientMinpointWithValue(
			color: string,
			type: SpreadsheetApp.InterpolationType,
			value: string
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets text italics for the conditional format rule's format. If <code>italic</code> is <code>true</code>,
		 * the rule italicises text if the condition is met; if <code>false</code>, the rule removes any
		 * existing italicization if the condition is met. Passing in <code>null</code> removes the italic
		 * format setting from the rule.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn their
		 * // text italic if the cell has text equal to &quot;hello&quot;.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenTextEqualTo(&quot;hello&quot;)
		 *     .setItalic(true)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param italic - Whether or not the text should be italicised if the format condition is met;
		 *     <code>null</code> removes this setting.
		 * 
		 * @returns the builder, for chaining
		 */
		setItalic(
			italic: Boolean
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets one or more ranges to which this conditional format rule is applied. This operation
		 * replaces any existing ranges. Setting an empty array clears any existing ranges. A rule must
		 * have at least one range.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 and range D4:F6
		 * // to turn red if they contain a number between 1 and 10.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeOne = sheet.getRange(&quot;A1:B3&quot;);
		 * var rangeTwo = sheet.getRange(&quot;D4:F6&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenNumberBetween(1, 10)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([rangeOne, rangeTwo])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param ranges - The ranges to which this conditional format rule is applied.
		 * 
		 * @returns the builder, for chaining
		 */
		setRanges(
			ranges: SpreadsheetApp.Range[]
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets text strikethrough for the conditional format rule's format. If <code>strikethrough</code> is
		 * <code>true</code>, the rule strikesthrough text if the condition is met; if <code>false</code>, the rule
		 * removes any existing strikethrough formatting if the condition is met. Passing in <code>null</code>
		 * removes the strikethrough format setting from the rule.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to strikethrough
		 * // their text if the cell has text equal to &quot;hello&quot;.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenTextEqualTo(&quot;hello&quot;)
		 *     .setStrikethrough(true)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param strikethrough - Whether or not the text should be struckthrough if the format condition is
		 *     met; <code>null</code> removes this setting.
		 * 
		 * @returns the builder, for chaining
		 */
		setStrikethrough(
			strikethrough: Boolean
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets text underlining for the conditional format rule's format. If <code>underline</code> is <code>true</code>, the rule underlines text if the condition is met; if <code>false</code>, the rule removes any
		 * existing underlines if the condition is met. Passing in <code>null</code> removes the underline
		 * format setting from the rule.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to underline
		 * // their text if the cell has text equal to &quot;hello&quot;.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenTextEqualTo(&quot;hello&quot;)
		 *     .setUnderline(true)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param underline - Whether or not the text should be underlined if the format condition is met;
		 *     <code>null</code> removes this setting.
		 * 
		 * @returns the builder, for chaining
		 */
		setUnderline(
			underline: Boolean
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to trigger when the cell is empty.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they are empty.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenCellEmpty()
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @returns the builder, for chaining
		 */
		whenCellEmpty(): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to trigger when the cell is not empty.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they are not empty.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenCellNotEmpty()
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @returns the builder, for chaining
		 */
		whenCellNotEmpty(): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to trigger when a date is after the given value.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they contain a date after 11/4/1993.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenDateAfter(new Date(&quot;11/4/1993&quot;))
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param date - The latest date.
		 * 
		 * @returns the builder, for chaining
		 */
		whenDateAfter(
			date: Date
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to trigger when a date is after the given relative date.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they contain a date after today.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenDateAfter(SpreadsheetApp.RelativeDate.TODAY)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param date - The latest date relative to the date type selected.
		 * 
		 * @returns the builder, for chaining
		 */
		whenDateAfter(
			date: SpreadsheetApp.RelativeDate
		): SpreadsheetApp.ConditionalFormatRuleBuilder

		/**
		 * Sets the conditional format rule to trigger when a date is before the given date.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they contain a date before 11/4/1993.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenDateBefore(new Date(&quot;11/4/1993&quot;))
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param date - The earliest unacceptable date.
		 * 
		 * @returns the builder, for chaining
		 */
		whenDateBefore(
			date: Date
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to trigger when a date is before the given relative date.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they contain a date before today.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenDateBefore(SpreadsheetApp.RelativeDate.TODAY)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param date - The latest date relative to the date type selected.
		 * 
		 * @returns the builder, for chaining
		 */
		whenDateBefore(
			date: SpreadsheetApp.RelativeDate
		): SpreadsheetApp.ConditionalFormatRuleBuilder

		/**
		 * Sets the conditional format rule to trigger when a date is equal to the given date.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they contain the date 11/4/1993.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenDateEqualTo(new Date(&quot;11/4/1993&quot;))
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param date - The sole acceptable date.
		 * 
		 * @returns the builder, for chaining
		 */
		whenDateEqualTo(
			date: Date
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to trigger when a date is equal to the given relative date.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they contain todays date.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenDateEqualTo(SpreadsheetApp.RelativeDate.TODAY)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param date - The latest date relative to the date type selected.
		 * 
		 * @returns the builder, for chaining
		 */
		whenDateEqualTo(
			date: SpreadsheetApp.RelativeDate
		): SpreadsheetApp.ConditionalFormatRuleBuilder

		/**
		 * Sets the conditional format rule to trigger when that the given formula evaluates to <code>true</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they satisfy the condition &quot;=EQ(B4, C3)&quot;.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenFormulaSatisfied(&quot;=EQ(B4, C3)&quot;)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param formula - A custom formula that evaluates to <code>true</code> if the input is valid.
		 * 
		 * @returns the builder, for chaining
		 */
		whenFormulaSatisfied(
			formula: string
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to trigger when a number falls between, or is either of, two
		 * specified values.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they contain a number between 1 and 10.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenNumberBetween(1, 10)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param start - The lowest acceptable value.
		 * @param end - The highest acceptable value.
		 * 
		 * @returns the builder, for chaining
		 */
		whenNumberBetween(
			start: Number,
			end: Number
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to trigger when a number is equal to the given value.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they contain the number 10.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenNumberEqualTo(10)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param number - The sole acceptable value.
		 * 
		 * @returns the builder, for chaining
		 */
		whenNumberEqualTo(
			number: Number
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to trigger when a number is greater than the given value.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red
		 * // if they contain a number greater than 10.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenNumberGreaterThan(10)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param number - The highest unacceptable value.
		 * 
		 * @returns the builder, for chaining
		 */
		whenNumberGreaterThan(
			number: Number
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to trigger when a number is greater than or equal to the given
		 * value.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they contain a number greater than or equal to 10.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenNumberGreaterThanOrEqualTo(10)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param number - The lowest acceptable value.
		 * 
		 * @returns the builder, for chaining
		 */
		whenNumberGreaterThanOrEqualTo(
			number: Number
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional conditional format rule to trigger when a number less than the given
		 * value.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they contain a number less than 10.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenNumberLessThan(10)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param number - The lowest unacceptable value.
		 * 
		 * @returns the builder, for chaining
		 */
		whenNumberLessThan(
			number: Number
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to trigger when a number less than or equal to the given
		 * value.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they contain a number less than or equal to 10.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenNumberLessThanOrEqualTo(10)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param number - The highest acceptable value.
		 * 
		 * @returns the builder, for chaining
		 */
		whenNumberLessThanOrEqualTo(
			number: Number
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to trigger when a number does not fall between, and is neither
		 * of, two specified values.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they contain a number not between 1 and 10.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenNumberNotBetween(1, 10)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param start - The lowest unacceptable value.
		 * @param end - The highest unacceptable value.
		 * 
		 * @returns the builder, for chaining
		 */
		whenNumberNotBetween(
			start: Number,
			end: Number
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to trigger when a number is not equal to the given value.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they don&#39;t contain the number 10.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenNumberNotEqualTo(10)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param number - The sole unacceptable value.
		 * 
		 * @returns the builder, for chaining
		 */
		whenNumberNotEqualTo(
			number: Number
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to trigger when that the input contains the given value.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they contain the text &quot;hello&quot;.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenTextContains(&quot;hello&quot;)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param text - The value that the input must contain.
		 * 
		 * @returns the builder, for chaining
		 */
		whenTextContains(
			text: string
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to trigger when that the input does not contain the given
		 * value.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they don&#39;t contain the text &quot;hello&quot;.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenTextDoesNotContain(&quot;hello&quot;)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param text - The value that the input must not contain.
		 * 
		 * @returns the builder, for chaining
		 */
		whenTextDoesNotContain(
			text: string
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to trigger when that the input ends with the given value.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they end with the text &quot;hello&quot;.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenTextEndsWith(&quot;hello&quot;)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param text - Text to compare against the end of the string.
		 * 
		 * @returns the builder, for chaining
		 */
		whenTextEndsWith(
			text: string
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to trigger when that the input is equal to the given value.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they have text equal to &quot;hello&quot;.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenTextEqualTo(&quot;hello&quot;)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param text - The sole acceptable value.
		 * 
		 * @returns the builder, for chaining
		 */
		whenTextEqualTo(
			text: string
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to trigger when that the input starts with the given value.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
		 * // they start with the text &quot;hello&quot;.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * var rule = SpreadsheetApp.newConditionalFormatRule()
		 *     .whenTextStartsWith(&quot;hello&quot;)
		 *     .setBackground(&quot;#FF0000&quot;)
		 *     .setRanges([range])
		 *     .build();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.push(rule);
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param text - Text to compare against the beginning of the string.
		 * 
		 * @returns the builder, for chaining
		 */
		whenTextStartsWith(
			text: string
		): SpreadsheetApp.ConditionalFormatRuleBuilder
		/**
		 * Sets the conditional format rule to criteria defined by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria.html'>BooleanCriteria</a></code> values,
		 * typically taken from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition.html#getCriteriaType()'>criteria</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition.html#getCriteriaValues()'>arguments</a></code> of an
		 * existing rule.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Adds a new conditional format rule that is a copy of the first active
		 * // conditional format rule, except it instead sets its cells to have a black
		 * // background color.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rules = sheet.getConditionalFormatRules();
		 * var booleanCondition = rules[0].getBooleanCondition();
		 * if (booleanCondition != null) {
		 *   var rule = SpreadsheetApp.newConditionalFormatRule()
		 *       .withCriteria(booleanCondition.getCriteriaType(),
		 *          booleanCondition.getCriteriaValues())
		 *       .setBackground(&quot;#000000&quot;)
		 *       .build();
		 *   rules.push(rule);
		 * }
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param criteria - The type of conditional format criteria.
		 * @param args - An array of arguments appropriate to the criteria type; the number of arguments and
		 *     their type match the corresponding <code>when...()</code> method above.
		 * 
		 * @returns the builder, for chaining
		 */
		withCriteria(
			criteria: SpreadsheetApp.BooleanCriteria,
			args: object[]
		): SpreadsheetApp.ConditionalFormatRuleBuilder

	}

	class ContainerInfo {
		private constructor();

		/**
		 * The chart's left side is anchored in this column.
		 * 
		 * @returns 1-indexed column (that is, column C is 3)
		 */
		getAnchorColumn(): number
		/**
		 * The chart's top side is anchored in this row.
		 * 
		 * @returns 1-indexed row (that is, row 5 returns 5)
		 */
		getAnchorRow(): number
		/**
		 * The chart's upper left hand corner is offset from the anchor column by this many pixels.
		 * 
		 * @returns the horizontal offset in pixels for the upper left hand corner of the chart
		 */
		getOffsetX(): number
		/**
		 * The chart's upper left hand corner is offset from the anchor row by this many pixels.
		 * 
		 * @returns the vertical offset in pixels for the upper left hand corner of the chart
		 */
		getOffsetY(): number

	}

	enum CopyPasteType {
		/**
		 * Paste the column widths only.
		 */
		PASTE_COLUMN_WIDTHS = "PASTE_COLUMN_WIDTHS",
		/**
		 * Paste the color rules only.
		 */
		PASTE_CONDITIONAL_FORMATTING = "PASTE_CONDITIONAL_FORMATTING",
		/**
		 * Paste the data validation only.
		 */
		PASTE_DATA_VALIDATION = "PASTE_DATA_VALIDATION",
		/**
		 * Paste the format and data validation only.
		 */
		PASTE_FORMAT = "PASTE_FORMAT",
		/**
		 * Paste the formulas only.
		 */
		PASTE_FORMULA = "PASTE_FORMULA",
		/**
		 * Paste values, formulas, formats and merges.
		 */
		PASTE_NORMAL = "PASTE_NORMAL",
		/**
		 * Paste values, formulas, formats and merges but without borders.
		 */
		PASTE_NO_BORDERS = "PASTE_NO_BORDERS",
		/**
		 * Paste the values ONLY without formats, formulas or merges.
		 */
		PASTE_VALUES = "PASTE_VALUES",
	}

	enum DataExecutionErrorCode {
		/**
		 * A data execution error code that is not supported in Apps Script.
		 */
		DATA_EXECUTION_ERROR_CODE_UNSUPPORTED = "DATA_EXECUTION_ERROR_CODE_UNSUPPORTED",
		/**
		 * The database referenced by the data source is not found. Please update the data source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>specification</a></code>.
		 */
		DATA_NOT_FOUND = "DATA_NOT_FOUND",
		/**
		 * The data execution returns duplicate column names. Please update the data source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>specification</a></code>.
		 */
		DUPLICATE_COLUMN_NAMES = "DUPLICATE_COLUMN_NAMES",
		/**
		 * Data execution engine error. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-execution-status.html#getErrorMessage()'>DataExecutionStatus.getErrorMessage()</a></code> for details.
		 */
		ENGINE = "ENGINE",
		/**
		 * The data execution is interrupted. Please refresh later.
		 */
		INTERRUPTED = "INTERRUPTED",
		/**
		 * The data execution has no error.
		 */
		NONE = "NONE",
		/**
		 * Other errors.
		 */
		OTHER = "OTHER",
		/**
		 * Invalid data execution parameter. The source cell must exist and contain only a number or text.
		 * Please update the data source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>specification</a></code>.
		 */
		PARAMETER_INVALID = "PARAMETER_INVALID",
		/**
		 * The user does not have access to the database referenced by the data source. Please update the
		 * data source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>specification</a></code> or contact the owner of the billing
		 * project to request access.
		 */
		PERMISSION_DENIED = "PERMISSION_DENIED",
		/**
		 * The data execution timed out. Please update the data source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>specification</a></code>.
		 */
		TIME_OUT = "TIME_OUT",
		/**
		 * The data execution returns more cells than the limit. Please update the data source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>specification</a></code>.
		 */
		TOO_MANY_CELLS = "TOO_MANY_CELLS",
		/**
		 * The data execution returns values that exceed the maximum characters allowed in a single cell.
		 * Please update the data source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>specification</a></code>.
		 */
		TOO_MANY_CHARS_PER_CELL = "TOO_MANY_CHARS_PER_CELL",
		/**
		 * The data execution returns more rows than the limit. Please update the data source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>specification</a></code>.
		 */
		TOO_MANY_ROWS = "TOO_MANY_ROWS",
		/**
		 * The data execution returns unsupported data type. Please update the data source <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>specification</a></code>.
		 * 
		 * <p>For BigQuery, <code>ARRAY</code> or <code>STRUCT</code> type is not supported.
		 */
		UNSUPPORTED_DATA_TYPE = "UNSUPPORTED_DATA_TYPE",
	}

	enum DataExecutionState {
		/**
		 * A data execution state is not supported in Apps Script.
		 */
		DATA_EXECUTION_STATE_UNSUPPORTED = "DATA_EXECUTION_STATE_UNSUPPORTED",
		/**
		 * The data execution is completed and has errors.
		 */
		ERROR = "ERROR",
		/**
		 * The data execution has not started.
		 */
		NOT_STARTED = "NOT_STARTED",
		/**
		 * The data execution has started and is running.
		 */
		RUNNING = "RUNNING",
		/**
		 * The data execution is completed and successful.
		 */
		SUCCESS = "SUCCESS",
	}

	class DataExecutionStatus {
		private constructor();

		/**
		 * Gets the error code of the data execution.
		 * 
		 * @returns The error code.
		 */
		getErrorCode(): SpreadsheetApp.DataExecutionErrorCode
		/**
		 * Gets the error message of the data execution. The message may be empty.
		 * 
		 * @returns The error message.
		 */
		getErrorMessage(): string
		/**
		 * Gets the state of the data execution.
		 * 
		 * @returns The execution state.
		 */
		getExecutionState(): SpreadsheetApp.DataExecutionState
		/**
		 * Gets the time the last data execution completed regardless of the execution state.
		 * 
		 * @returns The last execution time, or <code>null</code> if there has never been a data execution.
		 */
		getLastExecutionTime(): Date
		/**
		 * Gets the time the data last successfully refreshed.
		 * 
		 * @returns The last successfully refreshed time, or <code>null</code> if there is never a successful
		 *     data execution.
		 */
		getLastRefreshedTime(): Date
		/**
		 * Returns <code>true</code> if the data from last successful execution is truncated, or <code>false</code>
		 * otherwise.
		 * 
		 * @returns <code>True</code> if the data from execution is truncated, or <code>false</code> otherwise.
		 */
		isTruncated(): Boolean

	}

	class DataSource {
		private constructor();

		/**
		 * Creates a calculated column.
		 * 
		 * @param name - The name of the calculated column.
		 * @param formula - The calculated column formula.
		 * 
		 * @returns The newly created calculated column.
		 */
		createCalculatedColumn(
			name: string,
			formula: string
		): SpreadsheetApp.DataSourceColumn
		/**
		 * Creates a data source pivot table from this data source in the first cell of a new sheet. As a
		 * side effect, makes the new sheet the active sheet.
		 * 
		 * @returns The newly created data source pivot table.
		 */
		createDataSourcePivotTableOnNewSheet(): SpreadsheetApp.DataSourcePivotTable
		/**
		 * Creates a data source table from this data source in the first cell of a new sheet. As a side
		 * effect, makes the new sheet the active sheet.
		 * 
		 * @returns The newly created data source table.
		 */
		createDataSourceTableOnNewSheet(): SpreadsheetApp.DataSourceTable
		/**
		 * Returns the calculated column in the data source that matches the column name.
		 * 
		 * @param columnName - The name of the calculated column to get.
		 * 
		 * @returns The calculated column that matches the column name, or <code>null</code> if there is no such
		 *     calculated column.
		 */
		getCalculatedColumnByName(
			columnName: string
		): SpreadsheetApp.DataSourceColumn
		/**
		 * Returns all the calculated columns in the data source.
		 * 
		 * @returns An array of all the calculated columns in the data source.
		 */
		getCalculatedColumns(): SpreadsheetApp.DataSourceColumn[]
		/**
		 * Returns all the columns in the data source.
		 * 
		 * @returns An array of all the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-column.html'>DataSourceColumn</a></code> in the data source.
		 */
		getColumns(): SpreadsheetApp.DataSourceColumn[]
		/**
		 * Returns the data source sheets associated with this data source.
		 * 
		 * @returns An array of data source sheets.
		 */
		getDataSourceSheets(): SpreadsheetApp.DataSourceSheet[]
		/**
		 * Gets the data source specification.
		 * 
		 * @returns The data source specification.
		 */
		getSpec(): SpreadsheetApp.DataSourceSpec
		/**
		 * Refreshes all data source objects linked to the data source.
		 * 
		 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for the specific data
		 * source type.
		 */
		refreshAllLinkedDataSourceObjects(): void
		/**
		 * Updates the data source specification and refreshes the data source objects linked with this
		 * data source with the new specification.
		 * 
		 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for the specific data
		 * source type.
		 * 
		 * @param spec - The data source specification to update with.
		 * 
		 * @returns The data source.
		 */
		updateSpec(
			spec: SpreadsheetApp.DataSourceSpec
		): SpreadsheetApp.DataSource
		/**
		 * Updates the data source specification and refreshes the linked <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet.html'>data
		 * source sheets</a></code> with the new specification.
		 * 
		 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for the specific data
		 * source type.
		 * 
		 * @param spec - The data source specification to update with.
		 * @param refreshAllLinkedObjects - If <code>true</code>, also refreshes all the data source objects
		 *     linked with this data source.
		 * 
		 * @returns The data source.
		 */
		updateSpec(
			spec: SpreadsheetApp.DataSourceSpec,
			refreshAllLinkedObjects: Boolean
		): SpreadsheetApp.DataSource

		/**
		 * Waits until all the current executions of the linked data source objects complete, timing out
		 * after the provided number of seconds. Throws an exception if the executions are not completed
		 * when timing out, but does not cancel the data executions.
		 * 
		 * @param timeoutInSeconds - The time to wait for data executions, in seconds. The maximum is 300
		 *     seconds.
		 */
		waitForAllDataExecutionsCompletion(
			timeoutInSeconds: number
		): void

	}

	class DataSourceChart {
		private constructor();

		/**
		 * Refreshes the data of this object regardless of the current state. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-chart.html#refreshData()'>refreshData()</a></code> for
		 * more details.
		 * 
		 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for specific data source
		 * type.
		 * 
		 * @returns The data object.
		 */
		forceRefreshData(): SpreadsheetApp.DataSourceChart
		/**
		 * Gets the data source the object is linked to.
		 * 
		 * @returns The data source.
		 */
		getDataSource(): SpreadsheetApp.DataSource
		/**
		 * Gets the data execution status of the object.
		 * 
		 * @returns The data execution status.
		 */
		getStatus(): SpreadsheetApp.DataExecutionStatus
		/**
		 * Refreshes the data of the object.
		 * 
		 * <p>Throws an exception if currently in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-execution-state.html#ERROR'>error</a></code> state. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>DataSource#updateSpec()</a></code> to update the specification. The method is
		 * preferred over <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-chart.html#forceRefreshData()'>forceRefreshData()</a></code> to prevent unexpected edits on data source.
		 * 
		 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for specific data source
		 * type.
		 * 
		 * @returns The data object.
		 */
		refreshData(): SpreadsheetApp.DataSourceChart
		/**
		 * Waits until the current execution completes, timing out after the provided number of seconds.
		 * Throws an exception if the execution is not completed when timing out, but does not cancel the
		 * data execution.
		 * 
		 * @param timeoutInSeconds - The time to wait for data execution, in seconds. The maximum is 300
		 *     seconds.
		 * 
		 * @returns The data execution status.
		 */
		waitForCompletion(
			timeoutInSeconds: number
		): SpreadsheetApp.DataExecutionStatus

	}

	class DataSourceColumn {
		private constructor();

		/**
		 * Gets the data source associated with the data source column.
		 * 
		 * @returns The data source.
		 */
		getDataSource(): SpreadsheetApp.DataSource
		/**
		 * Gets the formula for the data source column. Returns an empty string if the data source column
		 * is not a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-column.html#isCalculatedColumn()'>calculated column</a></code>.
		 * 
		 * @returns The formula.
		 */
		getFormula(): string
		/**
		 * Gets the name for the data source column.
		 * 
		 * @returns The column name.
		 */
		getName(): string
		/**
		 * Returns whether the column has an array dependency.
		 * 
		 * @returns <code>true</code> if the column has an array dependency, or <code>false</code> otherwise.
		 */
		hasArrayDependency(): Boolean
		/**
		 * Returns whether the column is a calculated column.
		 * 
		 * @returns <code>true</code> if the column is a calculated column, or <code>false</code> otherwise.
		 */
		isCalculatedColumn(): Boolean
		/**
		 * Removes the data source column.
		 * 
		 * <p>Only supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-column.html#isCalculatedColumn()'>calculated columns</a></code>.
		 */
		remove(): void
		/**
		 * Sets the formula for the data source column.
		 * 
		 * <p>Only supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-column.html#isCalculatedColumn()'>calculated columns</a></code>.
		 * 
		 * @param formula - The new formula.
		 * 
		 * @returns The data source column, for chaining.
		 */
		setFormula(
			formula: string
		): SpreadsheetApp.DataSourceColumn
		/**
		 * Sets the name of the data source column.
		 * 
		 * <p>Only supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-column.html#isCalculatedColumn()'>calculated columns</a></code>.
		 * 
		 * @param name - The name to set.
		 * 
		 * @returns The data source column, for chaining.
		 */
		setName(
			name: string
		): SpreadsheetApp.DataSourceColumn

	}

	class DataSourceFormula {
		private constructor();

		/**
		 * Refreshes the data of this object regardless of the current state. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula.html#refreshData()'>refreshData()</a></code> for
		 * more details.
		 * 
		 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for specific data source
		 * type.
		 * 
		 * @returns The data object.
		 */
		forceRefreshData(): SpreadsheetApp.DataSourceFormula
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> representing the cell where this data source formula is anchored.
		 * 
		 * @returns The anchor cell.
		 */
		getAnchorCell(): SpreadsheetApp.Range
		/**
		 * Gets the data source the object is linked to.
		 * 
		 * @returns The data source.
		 */
		getDataSource(): SpreadsheetApp.DataSource
		/**
		 * Returns the display value of the data source formula.
		 * 
		 * @returns The display value.
		 */
		getDisplayValue(): string
		/**
		 * Returns the formula for this data source formula.
		 * 
		 * @returns The formula.
		 */
		getFormula(): string
		/**
		 * Gets the data execution status of the object.
		 * 
		 * @returns The data execution status.
		 */
		getStatus(): SpreadsheetApp.DataExecutionStatus
		/**
		 * Refreshes the data of the object.
		 * 
		 * <p>Throws an exception if currently in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-execution-state.html#ERROR'>error</a></code> state. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>DataSource#updateSpec()</a></code> to update the specification. The method is
		 * preferred over <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula.html#forceRefreshData()'>forceRefreshData()</a></code> to prevent unexpected edits on data source.
		 * 
		 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for specific data source
		 * type.
		 * 
		 * @returns The data object.
		 */
		refreshData(): SpreadsheetApp.DataSourceFormula
		/**
		 * Updates the formula.
		 * 
		 * @param formula - The new formula.
		 * 
		 * @returns The data source formula, for chaining.
		 */
		setFormula(
			formula: string
		): SpreadsheetApp.DataSourceFormula
		/**
		 * Waits until the current execution completes, timing out after the provided number of seconds.
		 * Throws an exception if the execution is not completed when timing out, but does not cancel the
		 * data execution.
		 * 
		 * @param timeoutInSeconds - The time to wait for data execution, in seconds. The maximum is 300
		 *     seconds.
		 * 
		 * @returns The data execution status.
		 */
		waitForCompletion(
			timeoutInSeconds: number
		): SpreadsheetApp.DataExecutionStatus

	}

	class DataSourceParameter {
		private constructor();

		/**
		 * Gets the parameter name.
		 * 
		 * @returns The parameter name.
		 */
		getName(): string
		/**
		 * Gets the source cell the parameter is valued based on, or <code>null</code> if the parameter type is
		 * not <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-parameter-type.html#CELL'>DataSourceParameterType.CELL</a></code>.
		 * 
		 * @returns The source cell, as specified in A1 notation.
		 */
		getSourceCell(): string
		/**
		 * Gets the parameter type.
		 * 
		 * @returns The parameter type.
		 */
		getType(): SpreadsheetApp.DataSourceParameterType

	}

	enum DataSourceParameterType {
		/**
		 * The data source parameter is valued based on a cell.
		 */
		CELL = "CELL",
		/**
		 * A data source parameter type that is not supported in Apps Script.
		 */
		DATA_SOURCE_PARAMETER_TYPE_UNSUPPORTED = "DATA_SOURCE_PARAMETER_TYPE_UNSUPPORTED",
	}

	class DataSourcePivotTable {
		private constructor();

		/**
		 * Adds a new pivot column group based on the specified data source column.
		 * 
		 * @param columnName - The data souce column name the pivot group is based on.
		 * 
		 * @returns The new pivot group.
		 */
		addColumnGroup(
			columnName: string
		): SpreadsheetApp.PivotGroup
		/**
		 * Adds a new filter based on the specified data source column with the specified filter criteria.
		 * 
		 * @param columnName - The data souce column name the filter is based on.
		 * @param filterCriteria - The criteria the filter uses.
		 * 
		 * @returns The new filter.
		 */
		addFilter(
			columnName: string,
			filterCriteria: SpreadsheetApp.FilterCriteria
		): SpreadsheetApp.PivotFilter
		/**
		 * Adds a new pivot value based on the specified data source column with the specified summarize
		 * function.
		 * 
		 * @param columnName - The data souce column name the pivot value is based on.
		 * @param summarizeFunction - The summarize function the pivot value uses.
		 * 
		 * @returns The new pivot value.
		 */
		addPivotValue(
			columnName: string,
			summarizeFunction: SpreadsheetApp.PivotTableSummarizeFunction
		): SpreadsheetApp.PivotValue
		/**
		 * Adds a new pivot row group based on the specified data source column.
		 * 
		 * @param columnName - The data souce column name the pivot group is based on.
		 * 
		 * @returns The new pivot group.
		 */
		addRowGroup(
			columnName: string
		): SpreadsheetApp.PivotGroup
		/**
		 * Returns the data source pivot table as a regular pivot table object.
		 * 
		 * @returns The pivot table.
		 */
		asPivotTable(): SpreadsheetApp.PivotTable
		/**
		 * Refreshes the data of this object regardless of the current state. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table.html#refreshData()'>refreshData()</a></code> for
		 * more details.
		 * 
		 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for specific data source
		 * type.
		 * 
		 * @returns The data object.
		 */
		forceRefreshData(): SpreadsheetApp.DataSourcePivotTable
		/**
		 * Gets the data source the object is linked to.
		 * 
		 * @returns The data source.
		 */
		getDataSource(): SpreadsheetApp.DataSource
		/**
		 * Gets the data execution status of the object.
		 * 
		 * @returns The data execution status.
		 */
		getStatus(): SpreadsheetApp.DataExecutionStatus
		/**
		 * Refreshes the data of the object.
		 * 
		 * <p>Throws an exception if currently in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-execution-state.html#ERROR'>error</a></code> state. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>DataSource#updateSpec()</a></code> to update the specification. The method is
		 * preferred over <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table.html#forceRefreshData()'>forceRefreshData()</a></code> to prevent unexpected edits on data source.
		 * 
		 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for specific data source
		 * type.
		 * 
		 * @returns The data object.
		 */
		refreshData(): SpreadsheetApp.DataSourcePivotTable
		/**
		 * Waits until the current execution completes, timing out after the provided number of seconds.
		 * Throws an exception if the execution is not completed when timing out, but does not cancel the
		 * data execution.
		 * 
		 * @param timeoutInSeconds - The time to wait for data execution, in seconds. The maximum is 300
		 *     seconds.
		 * 
		 * @returns The data execution status.
		 */
		waitForCompletion(
			timeoutInSeconds: number
		): SpreadsheetApp.DataExecutionStatus

	}

	class DataSourceRefreshSchedule {
		private constructor();

		/**
		 * Gets the refresh schedule frequency, which specifies how often and when to refresh.
		 * 
		 * @returns The refresh schedule frequency.
		 */
		getFrequency(): SpreadsheetApp.DataSourceRefreshScheduleFrequency
		/**
		 * Gets the scope of this refresh schedule.
		 * 
		 * @returns The refresh scope.
		 */
		getScope(): SpreadsheetApp.DataSourceRefreshScope
		/**
		 * Gets the time window of the next run of this refresh schedule. Only applies if this refresh
		 * schedule is enabled.
		 * 
		 * @returns The time window of the next run.
		 */
		getTimeIntervalOfNextRun(): TimeInterval
		/**
		 * Determines whether this refresh schedule is enabled.
		 * 
		 * @returns Whether this refresh schedule is enabled.
		 */
		isEnabled(): Boolean

	}

	class DataSourceRefreshScheduleFrequency {
		private constructor();

		/**
		 * Gets the days of the month as numbers (1-28) on which to refresh the data source. Only applies
		 * if frequency type is monthly.
		 * 
		 * @returns The days of the month on which to refresh.
		 */
		getDaysOfTheMonth(): number[]
		/**
		 * Gets the days of the week on which to refresh the data source. Only applies if the frequency
		 * type is weekly.
		 * 
		 * @returns The days of the week on which to refresh.
		 */
		getDaysOfTheWeek(): Weekday[]
		/**
		 * Gets the frequency type.
		 * 
		 * @returns The frequency type.
		 */
		getFrequencyType(): SpreadsheetApp.FrequencyType
		/**
		 * Gets the start hour (as a number 0-23) of the time interval during which the refresh schedule
		 * runs. For example, if the start hour is 13 and the time interval's duration is 4 hours, then
		 * the data source is refreshed between 1 p.m. and 5 p.m. The hour is in the timezone of the
		 * spreadsheet.
		 * 
		 * @returns The start hour.
		 */
		getStartHour(): number

	}

	enum DataSourceRefreshScope {
		/**
		 * The refresh applies to all data sources in the spreadsheet.
		 */
		ALL_DATA_SOURCES = "ALL_DATA_SOURCES",
		/**
		 * The data source refresh scope is unsupported.
		 */
		DATA_SOURCE_REFRESH_SCOPE_UNSUPPORTED = "DATA_SOURCE_REFRESH_SCOPE_UNSUPPORTED",
	}

	class DataSourceSheet {
		private constructor();

		/**
		 * Adds a filter applied to the data source sheet.
		 * 
		 * @param columnName - The name of the column to apply this filter to.
		 * @param filterCriteria - The filter criteria to apply.
		 * 
		 * @returns The data source sheet, for method chaining.
		 */
		addFilter(
			columnName: string,
			filterCriteria: SpreadsheetApp.FilterCriteria
		): SpreadsheetApp.DataSourceSheet
		/**
		 * Returns the data source sheet as a regular sheet object.
		 * 
		 * @returns The regular sheet.
		 */
		asSheet(): SpreadsheetApp.Sheet
		/**
		 * Auto resizes the width of the specified column.
		 * 
		 * @param columnName - The column name.
		 * 
		 * @returns This data source sheet, for chaining.
		 */
		autoResizeColumn(
			columnName: string
		): SpreadsheetApp.DataSourceSheet
		/**
		 * Auto resizes the width of the specified columns.
		 * 
		 * @param columnNames - The list of column names to update.
		 * 
		 * @returns This data source sheet, for chaining.
		 */
		autoResizeColumns(
			columnNames: string[]
		): SpreadsheetApp.DataSourceSheet
		/**
		 * Refreshes the data of this object regardless of the current state. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet.html#refreshData()'>refreshData()</a></code> for
		 * more details.
		 * 
		 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for specific data source
		 * type.
		 * 
		 * @returns The data object.
		 */
		forceRefreshData(): SpreadsheetApp.DataSourceSheet
		/**
		 * Returns the width of the specified column.
		 * 
		 * @param columnName - The column name.
		 * 
		 * @returns The column's width, or <code>null</code> if the column uses the default width.
		 */
		getColumnWidth(
			columnName: string
		): number
		/**
		 * Gets the data source the object is linked to.
		 * 
		 * @returns The data source.
		 */
		getDataSource(): SpreadsheetApp.DataSource
		/**
		 * Returns all filters applied to the data source sheet.
		 * 
		 * @returns An array of all filters applied to the data source sheet.
		 */
		getFilters(): SpreadsheetApp.DataSourceSheetFilter[]
		/**
		 * Returns all the values for the data source sheet for the provided column name.
		 * 
		 * @param columnName - The data source column name to fetch values for.
		 * 
		 * @returns A one-dimensional array of values.
		 */
		getSheetValues(
			columnName: string
		): object[]
		/**
		 * Returns all the values for the data source sheet for the provided column name from the provided
		 * start row (based-1) and up to the provided <code>numRows</code>.
		 * 
		 * @param columnName - The data source column name to fetch values for.
		 * @param startRow - The row position to start fetching values from.
		 * @param numRows - The number of rows to fetch.
		 * 
		 * @returns A one-dimensional array of values.
		 */
		getSheetValues(
			columnName: string,
			startRow: number,
			numRows: number
		): object[]

		/**
		 * Gets all the sort specs in the data source sheet.
		 * 
		 * @returns A list of sort specs.
		 */
		getSortSpecs(): SpreadsheetApp.SortSpec[]
		/**
		 * Gets the data execution status of the object.
		 * 
		 * @returns The data execution status.
		 */
		getStatus(): SpreadsheetApp.DataExecutionStatus
		/**
		 * Refreshes the data of the object.
		 * 
		 * <p>Throws an exception if currently in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-execution-state.html#ERROR'>error</a></code> state. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>DataSource#updateSpec()</a></code> to update the specification. The method is
		 * preferred over <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet.html#forceRefreshData()'>forceRefreshData()</a></code> to prevent unexpected edits on data source.
		 * 
		 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for specific data source
		 * type.
		 * 
		 * @returns The data object.
		 */
		refreshData(): SpreadsheetApp.DataSourceSheet
		/**
		 * Removes all filters applied to the data source sheet column.
		 * 
		 * @param columnName - The name of the column to remove filters from.
		 * 
		 * @returns The data source sheet, for method chaining.
		 */
		removeFilters(
			columnName: string
		): SpreadsheetApp.DataSourceSheet
		/**
		 * Removes the sort spec on a column in the data source sheet.
		 * 
		 * @param columnName - The name of the column.
		 * 
		 * @returns The data source sheet, for chaining.
		 */
		removeSortSpec(
			columnName: string
		): SpreadsheetApp.DataSourceSheet
		/**
		 * Sets the width of the specified column.
		 * 
		 * @param columnName - The column name.
		 * @param width - The new width for the column.
		 * 
		 * @returns This data source sheet, for chaining.
		 */
		setColumnWidth(
			columnName: string,
			width: number
		): SpreadsheetApp.DataSourceSheet
		/**
		 * Sets the width of the specified columns.
		 * 
		 * @param columnNames - The list of column names to update.
		 * @param width - The new width for the columns.
		 * 
		 * @returns This data source sheet, for chaining.
		 */
		setColumnWidths(
			columnNames: string[],
			width: number
		): SpreadsheetApp.DataSourceSheet
		/**
		 * Sets the sort spec on a column in the data source sheet.
		 * 
		 * @param columnName - The name of the column to sort.
		 * @param ascending - If <code>true</code>, sort the column in ascending order; if <code>false</code>, sort
		 *     the column in descending order.
		 * 
		 * @returns The data source sheet, for chaining.
		 */
		setSortSpec(
			columnName: string,
			ascending: Boolean
		): SpreadsheetApp.DataSourceSheet
		/**
		 * Sets the sort spec on a column in the data source sheet.
		 * 
		 * @param columnName - The name of the column to sort.
		 * @param sortOrder - The sort order.
		 * 
		 * @returns The data source sheet, for chaining.
		 */
		setSortSpec(
			columnName: string,
			sortOrder: SpreadsheetApp.SortOrder
		): SpreadsheetApp.DataSourceSheet

		/**
		 * Waits until the current execution completes, timing out after the provided number of seconds.
		 * Throws an exception if the execution is not completed when timing out, but does not cancel the
		 * data execution.
		 * 
		 * @param timeoutInSeconds - The time to wait for data execution, in seconds. The maximum is 300
		 *     seconds.
		 * 
		 * @returns The data execution status.
		 */
		waitForCompletion(
			timeoutInSeconds: number
		): SpreadsheetApp.DataExecutionStatus

	}

	class DataSourceSheetFilter {
		private constructor();

		/**
		 * Returns the data source column this filter applies to.
		 * 
		 * @returns The data source column.
		 */
		getDataSourceColumn(): SpreadsheetApp.DataSourceColumn
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet.html'>DataSourceSheet</a></code> that this filter belongs to.
		 * 
		 * @returns The data source sheet, to which this filter belongs.
		 */
		getDataSourceSheet(): SpreadsheetApp.DataSourceSheet
		/**
		 * Returns the filter criteria for this filter.
		 * 
		 * @returns The filter criteria for this filter.
		 */
		getFilterCriteria(): SpreadsheetApp.FilterCriteria
		/**
		 * Removes this filter from the data source object.
		 */
		remove(): void
		/**
		 * Sets the filter criteria for this filter.
		 * 
		 * @param filterCriteria - The filter criteria to set.
		 * 
		 * @returns The filter for chaining.
		 */
		setFilterCriteria(
			filterCriteria: SpreadsheetApp.FilterCriteria
		): SpreadsheetApp.DataSourceSheetFilter

	}

	class DataSourceSpec {
		private constructor();

		/**
		 * Gets the spec for BigQuery data source.
		 * 
		 * @returns The BigQuery data source spec.
		 */
		asBigQuery(): SpreadsheetApp.BigQueryDataSourceSpec
		/**
		 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder.html'>DataSourceSpecBuilder</a></code> based on this data source's settings.
		 * 
		 * @returns The builder.
		 */
		copy(): SpreadsheetApp.DataSourceSpecBuilder
		/**
		 * Gets the parameters of the data source.
		 * 
		 * @returns The parameter list.
		 */
		getParameters(): SpreadsheetApp.DataSourceParameter[]
		/**
		 * Gets the type of the data source.
		 * 
		 * @returns The data source type.
		 */
		getType(): SpreadsheetApp.DataSourceType

	}

	class DataSourceSpecBuilder {
		private constructor();

		/**
		 * Gets the builder for BigQuery data source.
		 * 
		 * @returns The BigQuery data source specification builder.
		 */
		asBigQuery(): SpreadsheetApp.BigQueryDataSourceSpecBuilder
		/**
		 * Builds a data source specification from the settings in this builder. Must use <code>as...()</code>
		 * to specify a data source type before building.
		 * 
		 * @returns The data source specification.
		 */
		build(): SpreadsheetApp.DataSourceSpec
		/**
		 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder.html'>DataSourceSpecBuilder</a></code> based on this data source's settings.
		 * 
		 * @returns The builder.
		 */
		copy(): SpreadsheetApp.DataSourceSpecBuilder
		/**
		 * Gets the parameters of the data source.
		 * 
		 * @returns The parameter list.
		 */
		getParameters(): SpreadsheetApp.DataSourceParameter[]
		/**
		 * Gets the type of the data source.
		 * 
		 * @returns The data source type.
		 */
		getType(): SpreadsheetApp.DataSourceType
		/**
		 * Removes all the parameters.
		 * 
		 * @returns The builder, for chaining.
		 */
		removeAllParameters(): SpreadsheetApp.DataSourceSpecBuilder
		/**
		 * Removes the specified parameter.
		 * 
		 * @param parameterName - The name of the parameter to remove.
		 * 
		 * @returns The builder, for chaining.
		 */
		removeParameter(
			parameterName: string
		): SpreadsheetApp.DataSourceSpecBuilder
		/**
		 * Adds a parameter, or if the parameter with the name exists, updates its source cell.
		 * 
		 * @param parameterName - The parameter name.
		 * @param sourceCell - The source cell, as specified in A1 notation.
		 * 
		 * @returns The builder, for chaining.
		 */
		setParameterFromCell(
			parameterName: string,
			sourceCell: string
		): SpreadsheetApp.DataSourceSpecBuilder

	}

	class DataSourceTable {
		private constructor();

		/**
		 * Adds columns to the data source table.
		 * 
		 * @param columnNames - The list of the names of the columns to add.
		 * 
		 * @returns The data source table, for chaining.
		 */
		addColumns(
			columnNames: string[]
		): SpreadsheetApp.DataSourceTable
		/**
		 * Adds a filter applied to the data source table.
		 * 
		 * @param columnName - The name of the column to apply this filter to.
		 * @param filterCriteria - The filter criteria to apply.
		 * 
		 * @returns The data source table, for chaining.
		 */
		addFilter(
			columnName: string,
			filterCriteria: SpreadsheetApp.FilterCriteria
		): SpreadsheetApp.DataSourceTable
		/**
		 * Adds a sort spec on a column in the data source table.
		 * 
		 * @param columnName - The name of the column to sort.
		 * @param ascending - If <code>true</code>, sort the column in ascending order; if <code>false</code>, sort
		 *     the column in descending order.
		 * 
		 * @returns The data source sheet, for chaining.
		 */
		addSortSpec(
			columnName: string,
			ascending: Boolean
		): SpreadsheetApp.DataSourceTable
		/**
		 * Adds a sort spec on a column in the data source table.
		 * 
		 * @param columnName - The name of the column to sort.
		 * @param sortOrder - The sort order.
		 * 
		 * @returns The data source sheet, for chaining.
		 */
		addSortSpec(
			columnName: string,
			sortOrder: SpreadsheetApp.SortOrder
		): SpreadsheetApp.DataSourceTable

		/**
		 * Refreshes the data of this object regardless of the current state. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-table.html#refreshData()'>refreshData()</a></code> for
		 * more details.
		 * 
		 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for specific data source
		 * type.
		 * 
		 * @returns The data object.
		 */
		forceRefreshData(): SpreadsheetApp.DataSourceTable
		/**
		 * Gets all the data source columns added to the data source table.
		 * 
		 * @returns A list of data source table columns.
		 */
		getColumns(): SpreadsheetApp.DataSourceTableColumn[]
		/**
		 * Gets the data source the object is linked to.
		 * 
		 * @returns The data source.
		 */
		getDataSource(): SpreadsheetApp.DataSource
		/**
		 * Returns all filters applied to the data source table.
		 * 
		 * @returns An array of all filters applied to the data source table.
		 */
		getFilters(): SpreadsheetApp.DataSourceTableFilter[]
		/**
		 * Gets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> this data source table spans.
		 * 
		 * @returns The range.
		 */
		getRange(): SpreadsheetApp.Range
		/**
		 * Returns the row limit for the data source table.
		 * 
		 * @returns The row limit for the data source table, or <code>null</code> if no limit is set and the
		 *     table uses the default max limit as in Google Sheets UI.
		 */
		getRowLimit(): number
		/**
		 * Gets all the sort specs in the data source table.
		 * 
		 * @returns A list of sort specs.
		 */
		getSortSpecs(): SpreadsheetApp.SortSpec[]
		/**
		 * Gets the data execution status of the object.
		 * 
		 * @returns The data execution status.
		 */
		getStatus(): SpreadsheetApp.DataExecutionStatus
		/**
		 * Returns whether the data source table is syncing all columns in the associated data source.
		 * 
		 * @returns <code>True</code> if the data source table is syncing all columns in the associated data
		 *     source, or <code>false</code> otherwise.
		 */
		isSyncingAllColumns(): Boolean
		/**
		 * Refreshes the data of the object.
		 * 
		 * <p>Throws an exception if currently in <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-execution-state.html#ERROR'>error</a></code> state. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)'>DataSource#updateSpec()</a></code> to update the specification. The method is
		 * preferred over <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-table.html#forceRefreshData()'>forceRefreshData()</a></code> to prevent unexpected edits on data source.
		 * 
		 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for specific data source
		 * type.
		 * 
		 * @returns The data object.
		 */
		refreshData(): SpreadsheetApp.DataSourceTable
		/**
		 * Removes all the columns in the data source table.
		 * 
		 * @returns The data source table, for chaining.
		 */
		removeAllColumns(): SpreadsheetApp.DataSourceTable
		/**
		 * Removes all the sort specs in the data source table.
		 * 
		 * @returns The data source sheet, for chaining.
		 */
		removeAllSortSpecs(): SpreadsheetApp.DataSourceTable
		/**
		 * Updates the row limit for the data source table. If the provided row limit is <code>null</code>,
		 * then updates the data source table to use the default max row limit as in Google Sheets UI.
		 * 
		 * @param rowLimit - The new row limit for the data table. If <code>null</code>, updates the table to use
		 *     the default row limit.
		 * 
		 * @returns The data source table, for chaining.
		 */
		setRowLimit(
			rowLimit: number
		): SpreadsheetApp.DataSourceTable
		/**
		 * Sync all current and future columns in the associated data source to the data source table.
		 * 
		 * @returns The data source table, for chaining.
		 */
		syncAllColumns(): SpreadsheetApp.DataSourceTable
		/**
		 * Waits until the current execution completes, timing out after the provided number of seconds.
		 * Throws an exception if the execution is not completed when timing out, but does not cancel the
		 * data execution.
		 * 
		 * @param timeoutInSeconds - The time to wait for data execution, in seconds. The maximum is 300
		 *     seconds.
		 * 
		 * @returns The data execution status.
		 */
		waitForCompletion(
			timeoutInSeconds: number
		): SpreadsheetApp.DataExecutionStatus

	}

	class DataSourceTableColumn {
		private constructor();

		/**
		 * Gets the data souce column.
		 * 
		 * @returns The data source column.
		 */
		getDataSourceColumn(): SpreadsheetApp.DataSourceColumn
		/**
		 * Removes the column from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-table.html'>DataSourceTable</a></code>.
		 */
		remove(): void

	}

	class DataSourceTableFilter {
		private constructor();

		/**
		 * Returns the data source column this filter applies to.
		 * 
		 * @returns The data source column.
		 */
		getDataSourceColumn(): SpreadsheetApp.DataSourceColumn
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-table.html'>DataSourceTable</a></code> that this filter belongs to.
		 * 
		 * @returns The data source table, to which this filter belongs.
		 */
		getDataSourceTable(): SpreadsheetApp.DataSourceTable
		/**
		 * Returns the filter criteria for this filter.
		 * 
		 * @returns The filter criteria for this filter.
		 */
		getFilterCriteria(): SpreadsheetApp.FilterCriteria
		/**
		 * Removes this filter from the data source object.
		 */
		remove(): void
		/**
		 * Sets the filter criteria for this filter.
		 * 
		 * @param filterCriteria - The filter criteria to set.
		 * 
		 * @returns The filter for chaining.
		 */
		setFilterCriteria(
			filterCriteria: SpreadsheetApp.FilterCriteria
		): SpreadsheetApp.DataSourceTableFilter

	}

	enum DataSourceType {
		/**
		 * A BigQuery data source.
		 */
		BIGQUERY = "BIGQUERY",
		/**
		 * A data source type that is not supported in Apps Script.
		 */
		DATA_SOURCE_TYPE_UNSUPPORTED = "DATA_SOURCE_TYPE_UNSUPPORTED",
	}

	class DataValidation {
		private constructor();

		/**
		 * Creates a builder for a data validation rule based on this rule's settings.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Change existing data validation rules that require a date in 2013 to require a date in 2014.
		 * var oldDates = [new Date(&#39;1/1/2013&#39;), new Date(&#39;12/31/2013&#39;)];
		 * var newDates = [new Date(&#39;1/1/2014&#39;), new Date(&#39;12/31/2014&#39;)];
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
		 * var rules = range.getDataValidations();
		 * 
		 * for (var i = 0; i &lt; rules.length; i++) {
		 *   for (var j = 0; j &lt; rules[i].length; j++) {
		 *     var rule = rules[i][j];
		 * 
		 *     if (rule != null) {
		 *       var criteria = rule.getCriteriaType();
		 *       var args = rule.getCriteriaValues();
		 * 
		 *       if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
		 *           &amp;&amp; args[0].getTime() == oldDates[0].getTime()
		 *           &amp;&amp; args[1].getTime() == oldDates[1].getTime()) {
		 *         // Create a builder from the existing rule, then change the dates.
		 *         rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
		 *       }
		 *     }
		 *   }
		 * }
		 * range.setDataValidations(rules);
		 * </code></pre>
		 * 
		 * @returns a builder based on this rule's settings
		 */
		copy(): SpreadsheetApp.DataValidationBuilder
		/**
		 * Returns <code>true</code> if the rule shows a warning when input fails data validation, or <code>false</code> if it rejects the input entirely. The default for new data validation rules is <code>true</code>.
		 * 
		 * @returns <code>true</code> if the rule allows input that fails data validation; <code>false</code> if not
		 */
		getAllowInvalid(): Boolean
		/**
		 * Gets the rule's criteria type as defined in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria.html'>DataValidationCriteria</a></code> enum. To get the
		 * arguments for the criteria, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation.html#getCriteriaValues()'>getCriteriaValues()</a></code>. To use these values to create or
		 * modify a data validation rule, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#withCriteria(DataValidationCriteria,Object)'>DataValidationBuilder.withCriteria(criteria, args)</a></code>.
		 * 
		 * <pre class="prettyprint">
		 * // Log information about the data validation rule for cell A1.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = cell.getDataValidation();
		 * if (rule != null) {
		 *   var criteria = rule.getCriteriaType();
		 *   var args = rule.getCriteriaValues();
		 *   Logger.log('The data validation rule is %s %s', criteria, args);
		 * } else {
		 *   Logger.log('The cell does not have a data validation rule.')
		 * }
		 * </pre>
		 * 
		 * @returns the type of data validation criteria
		 */
		getCriteriaType(): SpreadsheetApp.DataValidationCriteria
		/**
		 * Gets an array of arguments for the rule's criteria. To get the criteria type, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation.html#getCriteriaType()'>getCriteriaType()</a></code>. To use these values to create or modify a data validation rule, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#withCriteria(DataValidationCriteria,Object)'>DataValidationBuilder.withCriteria(criteria, args)</a></code>.
		 * 
		 * <pre class="prettyprint">
		 * // Log information about the data validation rule for cell A1.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = cell.getDataValidation();
		 * if (rule != null) {
		 *   var criteria = rule.getCriteriaType();
		 *   var args = rule.getCriteriaValues();
		 *   Logger.log('The data validation rule is %s %s', criteria, args);
		 * } else {
		 *   Logger.log('The cell does not have a data validation rule.')
		 * }
		 * </pre>
		 * 
		 * @returns an array of arguments appropriate to the rule's criteria type; the number of arguments
		 *     and their type match the corresponding <code>require...()</code> method of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation.html'>DataValidation</a></code> class
		 */
		getCriteriaValues(): object[]
		/**
		 * Gets the rule's help text, or <code>null</code> if no help text is set.
		 * 
		 * @returns the rule's help text, or <code>null</code> if no help text is set
		 */
		getHelpText(): string

	}

	class DataValidationBuilder {
		private constructor();

		/**
		 * Constructs a data validation rule from the settings applied to the builder.
		 * 
		 * @returns a representation of the data validation rule
		 */
		build(): SpreadsheetApp.DataValidation
		/**
		 * Creates a builder for a data validation rule based on this rule's settings.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Change existing data validation rules that require a date in 2013 to require a date in 2014.
		 * var oldDates = [new Date(&#39;1/1/2013&#39;), new Date(&#39;12/31/2013&#39;)];
		 * var newDates = [new Date(&#39;1/1/2014&#39;), new Date(&#39;12/31/2014&#39;)];
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
		 * var rules = range.getDataValidations();
		 * 
		 * for (var i = 0; i &lt; rules.length; i++) {
		 *   for (var j = 0; j &lt; rules[i].length; j++) {
		 *     var rule = rules[i][j];
		 * 
		 *     if (rule != null) {
		 *       var criteria = rule.getCriteriaType();
		 *       var args = rule.getCriteriaValues();
		 * 
		 *       if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
		 *           &amp;&amp; args[0].getTime() == oldDates[0].getTime()
		 *           &amp;&amp; args[1].getTime() == oldDates[1].getTime()) {
		 *         // Create a builder from the existing rule, then change the dates.
		 *         rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
		 *       }
		 *     }
		 *   }
		 * }
		 * range.setDataValidations(rules);
		 * </code></pre>
		 * 
		 * @returns a builder based on this rule's settings
		 */
		copy(): SpreadsheetApp.DataValidationBuilder
		/**
		 * Returns <code>true</code> if the rule shows a warning when input fails data validation, or <code>false</code> if it rejects the input entirely. The default for new data validation rules is <code>true</code>.
		 * 
		 * @returns <code>true</code> if the rule allows input that fails data validation; <code>false</code> if not
		 */
		getAllowInvalid(): Boolean
		/**
		 * Gets the rule's criteria type as defined in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria.html'>DataValidationCriteria</a></code> enum. To get the
		 * arguments for the criteria, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#getCriteriaValues()'>getCriteriaValues()</a></code>. To use these values to create or
		 * modify a data validation rule, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#withCriteria(DataValidationCriteria,Object)'>withCriteria(criteria, args)</a></code>.
		 * 
		 * <pre class="prettyprint">
		 * // Log information about the data validation rule for cell A1.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = cell.getDataValidation();
		 * if (rule != null) {
		 *   var criteria = rule.getCriteriaType();
		 *   var args = rule.getCriteriaValues();
		 *   Logger.log('The data validation rule is %s %s', criteria, args);
		 * } else {
		 *   Logger.log('The cell does not have a data validation rule.')
		 * }
		 * </pre>
		 * 
		 * @returns the type of data validation criteria
		 */
		getCriteriaType(): SpreadsheetApp.DataValidationCriteria
		/**
		 * Gets an array of arguments for the rule's criteria. To get the criteria type, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#getCriteriaType()'>getCriteriaType()</a></code>. To use these values to create or modify a data validation rule, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#withCriteria(DataValidationCriteria,Object)'>withCriteria(criteria, args)</a></code>.
		 * 
		 * <pre class="prettyprint">
		 * // Log information about the data validation rule for cell A1.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = cell.getDataValidation();
		 * if (rule != null) {
		 *   var criteria = rule.getCriteriaType();
		 *   var args = rule.getCriteriaValues();
		 *   Logger.log('The data validation rule is %s %s', criteria, args);
		 * } else {
		 *   Logger.log('The cell does not have a data validation rule.')
		 * }
		 * </pre>
		 * 
		 * @returns an array of arguments appropriate to the rule's criteria type; the number of arguments
		 *     and their type match the corresponding <code>require...()</code> method of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html'>DataValidationBuilder</a></code> class
		 */
		getCriteriaValues(): object[]
		/**
		 * Gets the rule's help text, or <code>null</code> if no help text is set.
		 * 
		 * @returns the rule's help text, or <code>null</code> if no help text is set
		 */
		getHelpText(): string
		/**
		 * Sets the data validation rule to require that the input is a boolean value; this value is
		 * rendered as a checkbox.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a boolean value; the value is rendered as a
		 * // checkbox.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireCheckbox().build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @returns this builder, for chaining
		 */
		requireCheckbox(): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require that the input is the specified value or blank. When
		 * the input matches the specified value the cell is rendered as a checked checkbox. When the
		 * input is blank the cell is rendered as an unchecked checkbox.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a custom checked value that is rendered as a
		 * // checkbox.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireCheckbox('APPROVED').build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param checkedValue - The value assigned to a checked box.
		 * 
		 * @returns this builder, for chaining
		 */
		requireCheckbox(
			checkedValue: object
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require that the input is one of the specified values. When
		 * the input is <code>checkedValue</code> the cell is rendered as a checked checkbox. When the
		 * input is <code>uncheckedValue</code> the cell is rendered as an unchecked checkbox.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require custom checked values that are rendered as a
		 * // checkbox.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireCheckbox('APPROVED', 'PENDING').build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param checkedValue - The value assigned to a checked box.
		 * @param uncheckedValue - The value assigned to an unchecked box.
		 * 
		 * @returns this builder, for chaining
		 */
		requireCheckbox(
			checkedValue: object,
			uncheckedValue: object
		): SpreadsheetApp.DataValidationBuilder

		/**
		 * Sets the data validation rule to require a date.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a date.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireDate().build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @returns this builder, for chaining
		 */
		requireDate(): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require a date after the given value. The time fields of the
		 * <code>Date</code> object are ignored; only the day, month, and year fields are used.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a date after January 1, 2013.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireDateAfter(new Date('1/1/2013')).build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param date - The latest unacceptable date.
		 * 
		 * @returns this builder, for chaining
		 */
		requireDateAfter(
			date: Date
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require a date before the given value. The time fields of the
		 * <code>Date</code> object are ignored; only the day, month, and year fields are used.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a date before January 1, 2013.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireDateBefore(new Date('1/1/2013')).build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param date - The earliest unacceptable date.
		 * 
		 * @returns this builder, for chaining
		 */
		requireDateBefore(
			date: Date
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require a date that falls between, or is either of, two
		 * specified dates. The time fields of the <code>Date</code> objects are ignored; only the day, month,
		 * and year fields are used.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a date in 2013.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation()
		 *     .requireDateBetween(new Date('1/1/2013'), new Date('12/31/2013')).build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param start - The earliest acceptable date.
		 * @param end - The latest acceptable date.
		 * 
		 * @returns this builder, for chaining
		 */
		requireDateBetween(
			start: Date,
			end: Date
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require a date equal to the given value. The time fields of
		 * the <code>Date</code> object are ignored; only the day, month, and year fields are used.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a date equal to January 1, 2013.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireDateEqualTo(new Date('1/1/2013'))
		 *     .build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param date - The sole acceptable date.
		 * 
		 * @returns this builder, for chaining
		 */
		requireDateEqualTo(
			date: Date
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require a date that does not fall between, and is neither of,
		 * two specified dates. The time fields of the <code>Date</code> objects are ignored; only the day,
		 * month, and year fields are used.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a date not in 2013.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation()
		 *     .requireDateNotBetween(new Date('1/1/2013'), new Date('12/31/2013')).build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param start - The earliest unacceptable date.
		 * @param end - The latest unacceptable date.
		 * 
		 * @returns this builder, for chaining
		 */
		requireDateNotBetween(
			start: Date,
			end: Date
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require a date on or after the given value. The time fields of
		 * the <code>Date</code> object are ignored; only the day, month, and year fields are used.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a date on or after January 1, 2013.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation()
		 *     .requireDateOnOrAfter(new Date('1/1/2013')).build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param date - The earliest acceptable date.
		 * 
		 * @returns this builder, for chaining
		 */
		requireDateOnOrAfter(
			date: Date
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require a date on or before the given value. The time fields
		 * of the <code>Date</code> object are ignored; only the day, month, and year fields are used.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a date on or before January 1, 2013.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation()
		 *     .requireDateOnOrBefore(new Date('1/1/2013')).build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param date - The latest acceptable date.
		 * 
		 * @returns this builder, for chaining
		 */
		requireDateOnOrBefore(
			date: Date
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require that the given formula evaluates to <code>true</code>.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to equal B1 with a custom formula.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireFormulaSatisfied('=EQ(A1,B1)').build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param formula - A custom formula that evaluates to <code>true</code> if the input is valid.
		 * 
		 * @returns this builder, for chaining
		 */
		requireFormulaSatisfied(
			formula: string
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require a number that falls between, or is either of, two
		 * specified numbers.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a number between 1 and 10.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireNumberBetween(1, 10).build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param start - The lowest acceptable value.
		 * @param end - The highest acceptable value.
		 * 
		 * @returns this builder, for chaining
		 */
		requireNumberBetween(
			start: Number,
			end: Number
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require a number equal to the given value.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a number equal to 3.1415926536.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireNumberEqualTo(3.1415926536).build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param number - The sole acceptable value.
		 * 
		 * @returns this builder, for chaining
		 */
		requireNumberEqualTo(
			number: Number
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require a number greater than the given value.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a number greater than 0.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireNumberGreaterThan(0).build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param number - The highest unacceptable value.
		 * 
		 * @returns this builder, for chaining
		 */
		requireNumberGreaterThan(
			number: Number
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require a number greater than or equal to the given value.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a number greater than or equal to 0.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireNumberGreaterThanOrEqualTo(0).build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param number - The lowest acceptable value.
		 * 
		 * @returns this builder, for chaining
		 */
		requireNumberGreaterThanOrEqualTo(
			number: Number
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require a number less than the given value.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a number less than 0.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireNumberLessThan(0).build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param number - The lowest unacceptable value.
		 * 
		 * @returns this builder, for chaining
		 */
		requireNumberLessThan(
			number: Number
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require a number less than or equal to the given value.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a number less than or equal to 0.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireNumberLessThanOrEqualTo(0).build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param number - The highest acceptable value.
		 * 
		 * @returns this builder, for chaining
		 */
		requireNumberLessThanOrEqualTo(
			number: Number
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require a number that does not fall between, and is neither
		 * of, two specified numbers.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a number not between 1 and 10.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireNumberNotBetween(1, 10).build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param start - The lowest unacceptable value.
		 * @param end - The highest unacceptable value.
		 * 
		 * @returns this builder, for chaining
		 */
		requireNumberNotBetween(
			start: Number,
			end: Number
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require a number not equal to the given value.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a number not equal to 0.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireNumberNotEqualTo(0).build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param number - The sole unacceptable value.
		 * 
		 * @returns this builder, for chaining
		 */
		requireNumberNotEqualTo(
			number: Number
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require that the input contains the given value.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require any value that includes "Google".
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireTextContains('Google').build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param text - The value that the input must contain.
		 * 
		 * @returns this builder, for chaining
		 */
		requireTextContains(
			text: string
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require that the input does not contain the given value.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require any value that does not include "@".
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireTextDoesNotContain('@').build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param text - The value that the input must not contain.
		 * 
		 * @returns this builder, for chaining
		 */
		requireTextDoesNotContain(
			text: string
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require that the input is equal to the given value.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require "Yes".
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireTextEqualTo('Yes').build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param text - The sole acceptable value.
		 * 
		 * @returns this builder, for chaining
		 */
		requireTextEqualTo(
			text: string
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require that the input is in the form of an email address.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require text in the form of an email address.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireTextIsEmail().build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @returns this builder, for chaining
		 */
		requireTextIsEmail(): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require that the input is in the form of a URL.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require text in the form of a URL.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireTextIsUrl().build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @returns this builder, for chaining
		 */
		requireTextIsUrl(): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require that the input is equal to one of the given values.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require "Yes" or "No", with a dropdown menu.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireValueInList(['Yes', 'No']).build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param values - An array of acceptable values.
		 * 
		 * @returns this builder, for chaining
		 */
		requireValueInList(
			values: string[]
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require that the input is equal to one of the given values,
		 * with an option to hide the dropdown menu.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require "Yes" or "No", with no dropdown menu.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var rule = SpreadsheetApp.newDataValidation().requireValueInList(['Yes', 'No'], false).build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param values - An array of acceptable values.
		 * @param showDropdown - <code>true</code> if the spreadsheet should show a dropdown menu for the values;
		 *     <code>false</code> if not.
		 * 
		 * @returns this builder, for chaining
		 */
		requireValueInList(
			values: string[],
			showDropdown: Boolean
		): SpreadsheetApp.DataValidationBuilder

		/**
		 * Sets the data validation rule to require that the input is equal to a value in the given range.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require a value from B1:B10, with a dropdown menu.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var range = SpreadsheetApp.getActive().getRange('B1:B10');
		 * var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param range - A range that contains the acceptable values.
		 * 
		 * @returns this builder, for chaining
		 */
		requireValueInRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to require that the input is equal to a value in the given range,
		 * with an option to hide the dropdown menu.
		 * 
		 * <pre class="prettyprint">
		 * // Set the data validation for cell A1 to require value from B1:B10, with no dropdown menu.
		 * var cell = SpreadsheetApp.getActive().getRange('A1');
		 * var range = SpreadsheetApp.getActive().getRange('B1:B10');
		 * var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range, false).build();
		 * cell.setDataValidation(rule);
		 * </pre>
		 * 
		 * @param range - A range that contains the acceptable values.
		 * @param showDropdown - <code>true</code> if the spreadsheet should show a dropdown menu for the values;
		 *     <code>false</code> if not.
		 * 
		 * @returns this builder, for chaining
		 */
		requireValueInRange(
			range: SpreadsheetApp.Range,
			showDropdown: Boolean
		): SpreadsheetApp.DataValidationBuilder

		/**
		 * Sets whether to show a warning when input fails data validation or whether to reject the input
		 * entirely. The default for new data validation rules is <code>true</code>.
		 * 
		 * @param allowInvalidData - <code>true</code> if the rule should allow input that fails data validation;
		 *     <code>false</code> if not.
		 * 
		 * @returns this builder, for chaining
		 */
		setAllowInvalid(
			allowInvalidData: Boolean
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the help text that appears when the user hovers over the cell on which data validation is
		 * set.
		 * 
		 * @param helpText - The help text to set.
		 * 
		 * @returns this builder, for chaining
		 */
		setHelpText(
			helpText: string
		): SpreadsheetApp.DataValidationBuilder
		/**
		 * Sets the data validation rule to criteria defined by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria.html'>DataValidationCriteria</a></code> values,
		 * typically taken from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#getCriteriaType()'>criteria</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#getCriteriaValues()'>arguments</a></code> of an existing rule.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Change existing data validation rules that require a date in 2013 to require a date in 2014.
		 * var oldDates = [new Date(&#39;1/1/2013&#39;), new Date(&#39;12/31/2013&#39;)];
		 * var newDates = [new Date(&#39;1/1/2014&#39;), new Date(&#39;12/31/2014&#39;)];
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
		 * var rules = range.getDataValidations();
		 * 
		 * for (var i = 0; i &lt; rules.length; i++) {
		 *   for (var j = 0; j &lt; rules[i].length; j++) {
		 *     var rule = rules[i][j];
		 * 
		 *     if (rule != null) {
		 *       var criteria = rule.getCriteriaType();
		 *       var args = rule.getCriteriaValues();
		 * 
		 *       if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
		 *           &amp;&amp; args[0].getTime() == oldDates[0].getTime()
		 *           &amp;&amp; args[1].getTime() == oldDates[1].getTime()) {
		 *         // Create a builder from the existing rule, then change the dates.
		 *         rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
		 *       }
		 *     }
		 *   }
		 * }
		 * range.setDataValidations(rules);
		 * </code></pre>
		 * 
		 * @param criteria - The type of data validation criteria.
		 * @param args - An array of arguments appropriate to the criteria type; the number of arguments and
		 *     their type match the corresponding <code>require...()</code> method above.
		 * 
		 * @returns this builder, for chaining
		 */
		withCriteria(
			criteria: SpreadsheetApp.DataValidationCriteria,
			args: object[]
		): SpreadsheetApp.DataValidationBuilder

	}

	enum DataValidationCriteria {
		/**
		 * Requires that the input is a custom value or a boolean; rendered as a checkbox.
		 */
		CHECKBOX = "CHECKBOX",
		/**
		 * Requires that the input makes the given formula evaluate to <code>true</code>.
		 */
		CUSTOM_FORMULA = "CUSTOM_FORMULA",
		/**
		 * Requires a date that is after the given value.
		 */
		DATE_AFTER = "DATE_AFTER",
		/**
		 * Requires a date that is before the given value.
		 */
		DATE_BEFORE = "DATE_BEFORE",
		/**
		 * Requires a date that is between the given values.
		 */
		DATE_BETWEEN = "DATE_BETWEEN",
		/**
		 * Requires a date that is equal to the given value.
		 */
		DATE_EQUAL_TO = "DATE_EQUAL_TO",
		/**
		 * Requires a date.
		 */
		DATE_IS_VALID_DATE = "DATE_IS_VALID_DATE",
		/**
		 * Requires a date that is not between the given values.
		 */
		DATE_NOT_BETWEEN = "DATE_NOT_BETWEEN",
		/**
		 * Require a date that is on or after the given value.
		 */
		DATE_ON_OR_AFTER = "DATE_ON_OR_AFTER",
		/**
		 * Requires a date that is on or before the given value.
		 */
		DATE_ON_OR_BEFORE = "DATE_ON_OR_BEFORE",
		/**
		 * Requires a number that is between the given values.
		 */
		NUMBER_BETWEEN = "NUMBER_BETWEEN",
		/**
		 * Requires a number that is equal to the given value.
		 */
		NUMBER_EQUAL_TO = "NUMBER_EQUAL_TO",
		/**
		 * Require a number that is greater than the given value.
		 */
		NUMBER_GREATER_THAN = "NUMBER_GREATER_THAN",
		/**
		 * Requires a number that is greater than or equal to the given value.
		 */
		NUMBER_GREATER_THAN_OR_EQUAL_TO = "NUMBER_GREATER_THAN_OR_EQUAL_TO",
		/**
		 * Requires a number that is less than the given value.
		 */
		NUMBER_LESS_THAN = "NUMBER_LESS_THAN",
		/**
		 * Requires a number that is less than or equal to the given value.
		 */
		NUMBER_LESS_THAN_OR_EQUAL_TO = "NUMBER_LESS_THAN_OR_EQUAL_TO",
		/**
		 * Requires a number that is not between the given values.
		 */
		NUMBER_NOT_BETWEEN = "NUMBER_NOT_BETWEEN",
		/**
		 * Requires a number that is not equal to the given value.
		 */
		NUMBER_NOT_EQUAL_TO = "NUMBER_NOT_EQUAL_TO",
		/**
		 * Requires that the input contains the given value.
		 */
		TEXT_CONTAINS = "TEXT_CONTAINS",
		/**
		 * Requires that the input does not contain the given value.
		 */
		TEXT_DOES_NOT_CONTAIN = "TEXT_DOES_NOT_CONTAIN",
		/**
		 * Requires that the input is equal to the given value.
		 */
		TEXT_EQUAL_TO = "TEXT_EQUAL_TO",
		/**
		 * Requires that the input is in the form of an email address.
		 */
		TEXT_IS_VALID_EMAIL = "TEXT_IS_VALID_EMAIL",
		/**
		 * Requires that the input is in the form of a URL.
		 */
		TEXT_IS_VALID_URL = "TEXT_IS_VALID_URL",
		/**
		 * Requires that the input is equal to one of the given values.
		 */
		VALUE_IN_LIST = "VALUE_IN_LIST",
		/**
		 * Requires that the input is equal to a value in the given range.
		 */
		VALUE_IN_RANGE = "VALUE_IN_RANGE",
	}

	class DateTimeGroupingRule {
		private constructor();

		/**
		 * Gets the type of the date-time grouping rule.
		 * 
		 * @returns The rule type.
		 */
		getRuleType(): SpreadsheetApp.DateTimeGroupingRuleType

	}

	enum DateTimeGroupingRuleType {
		/**
		 * Group date-time by day and month, for example <code>22-Nov</code>.
		 */
		DAY_MONTH = "DAY_MONTH",
		/**
		 * Group date-time by day of month, from 1 to 31.
		 */
		DAY_OF_MONTH = "DAY_OF_MONTH",
		/**
		 * Group date-time by day of week, for example <code>Sunday</code>.
		 */
		DAY_OF_WEEK = "DAY_OF_WEEK",
		/**
		 * Group date-time by day of year, from 1 to 366.
		 */
		DAY_OF_YEAR = "DAY_OF_YEAR",
		/**
		 * Group date-time by hour using a 24-hour system, from 0 to 23.
		 */
		HOUR = "HOUR",
		/**
		 * Group date-time by hour and minute using a 24-hour system, for example <code>19:45</code>.
		 */
		HOUR_MINUTE = "HOUR_MINUTE",
		/**
		 * Group date-time by hour and minute using a 12-hour system, for example <code>7:45 PM</code>.
		 */
		HOUR_MINUTE_AMPM = "HOUR_MINUTE_AMPM",
		/**
		 * Group date-time by minute, from 0 to 59.
		 */
		MINUTE = "MINUTE",
		/**
		 * Group date-time by month, for example <code>Nov</code>.
		 */
		MONTH = "MONTH",
		/**
		 * Group date-time by quarter, for example Q1 (which represents Jan-Mar).
		 */
		QUARTER = "QUARTER",
		/**
		 * Group date-time by second, from 0 to 59.
		 */
		SECOND = "SECOND",
		/**
		 * A date-time grouping rule type that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
		/**
		 * Group date-time by year, for example 2008.
		 */
		YEAR = "YEAR",
		/**
		 * Group date-time by year and month, for example <code>2008-Nov</code>.
		 */
		YEAR_MONTH = "YEAR_MONTH",
		/**
		 * Group date-time by year, month, and day, for example <code>2008-11-22</code>.
		 */
		YEAR_MONTH_DAY = "YEAR_MONTH_DAY",
		/**
		 * Group date-time by year and quarter, for example <code>2008 Q4</code> .
		 */
		YEAR_QUARTER = "YEAR_QUARTER",
	}

	class DeveloperMetadata {
		private constructor();

		/**
		 * Returns the unique ID associated with this developer metadata.
		 * 
		 * @returns The unique ID associated with this developer metadata.
		 */
		getId(): number
		/**
		 * Returns the key associated with this developer metadata.
		 * 
		 * @returns The key associated with this developer metadata.
		 */
		getKey(): string
		/**
		 * Returns the location of this developer metadata.
		 * 
		 * @returns The location of this developer metadata.
		 */
		getLocation(): SpreadsheetApp.DeveloperMetadataLocation
		/**
		 * Returns the value associated with this developer metadata, or <code>null</code> if this metadata has
		 * no value.
		 * 
		 * @returns The value associated with this developer metadata, or <code>null</code> if this metadata has
		 *     no value.
		 */
		getValue(): string
		/**
		 * Returns the visibility of this developer metadata.
		 * 
		 * @returns The visibility of this developer metadata.
		 */
		getVisibility(): SpreadsheetApp.DeveloperMetadataVisibility
		/**
		 * Moves this developer metadata to the specified column. If the specified range does not
		 * represent a single column this throws an exception.
		 * 
		 * @param column - The range representing the column that is the new location for this developer
		 *     metadata.
		 * 
		 * @returns The developer metadata, for chaining.
		 */
		moveToColumn(
			column: SpreadsheetApp.Range
		): SpreadsheetApp.DeveloperMetadata
		/**
		 * Moves this developer metadata to the specified row. If the specified range does not represent a
		 * single row this throws an exception.
		 * 
		 * @param row - The range representing the row that is the new location for this developer metadata.
		 * 
		 * @returns The developer metadata, for chaining.
		 */
		moveToRow(
			row: SpreadsheetApp.Range
		): SpreadsheetApp.DeveloperMetadata
		/**
		 * Moves this developer metadata to the specified sheet.
		 * 
		 * @param sheet - The sheet that is the new location for this developer metata.
		 * 
		 * @returns The developer metadata, for chaining.
		 */
		moveToSheet(
			sheet: SpreadsheetApp.Sheet
		): SpreadsheetApp.DeveloperMetadata
		/**
		 * Moves this developer metadata to the top-level spreadsheet.
		 * 
		 * @returns The developer metadata, for chaining.
		 */
		moveToSpreadsheet(): SpreadsheetApp.DeveloperMetadata
		/**
		 * Deletes this metadata.
		 */
		remove(): void
		/**
		 * Sets the key of this developer metadata to the specified value.
		 * 
		 * @param key - The new key to set for this metadata.
		 * 
		 * @returns The developer metadata, for chaining.
		 */
		setKey(
			key: string
		): SpreadsheetApp.DeveloperMetadata
		/**
		 * Sets the value associated with this developer metadata to the specified value.
		 * 
		 * @param value - The new value to set for this metadata.
		 * 
		 * @returns The developer metadata, for chaining.
		 */
		setValue(
			value: string
		): SpreadsheetApp.DeveloperMetadata
		/**
		 * Sets the visibility of this developer metadata to the specified visibility.
		 * 
		 * @param visibility - The new visibility to set for this metadata.
		 * 
		 * @returns The developer metadata, for chaining.
		 */
		setVisibility(
			visibility: SpreadsheetApp.DeveloperMetadataVisibility
		): SpreadsheetApp.DeveloperMetadata

	}

	class DeveloperMetadataFinder {
		private constructor();

		/**
		 * Executes this search and returns the matching metadata.
		 * 
		 * @returns The developer metadata that match the search criteria.
		 */
		find(): SpreadsheetApp.DeveloperMetadata[]
		/**
		 * Configures the search to consider intersecting locations that have metadata. This option is
		 * only valid for range-scoped searches.
		 * 
		 * @returns The developer metadata finder, for chaining.
		 */
		onIntersectingLocations(): SpreadsheetApp.DeveloperMetadataFinder
		/**
		 * Limits this search to consider only metadata that match the specified ID.
		 * 
		 * @param id - The ID to match when searching for metadata.
		 * 
		 * @returns The developer metadata finder, for chaining.
		 */
		withId(
			id: number
		): SpreadsheetApp.DeveloperMetadataFinder
		/**
		 * Limits this search to consider only metadata that match the specified key.
		 * 
		 * @param key - The key to match when searching for metadata.
		 * 
		 * @returns The developer metadata finder, for chaining.
		 */
		withKey(
			key: string
		): SpreadsheetApp.DeveloperMetadataFinder
		/**
		 * Limits this search to consider only metadata that match the specified location type.
		 * 
		 * @param locationType - The location type to match when searching for metadata.
		 * 
		 * @returns The developer metadata finder, for chaining.
		 */
		withLocationType(
			locationType: SpreadsheetApp.DeveloperMetadataLocationType
		): SpreadsheetApp.DeveloperMetadataFinder
		/**
		 * Limits this search to consider only metadata that match the specified value.
		 * 
		 * @param value - The value to match when searching for metadata.
		 * 
		 * @returns The developer metadata finder, for chaining.
		 */
		withValue(
			value: string
		): SpreadsheetApp.DeveloperMetadataFinder
		/**
		 * Limits this search to consider only metadata that match the specified visibility.
		 * 
		 * @param visibility - The visibility to match when searching for metadata.
		 * 
		 * @returns The developer metadata finder, for chaining.
		 */
		withVisibility(
			visibility: SpreadsheetApp.DeveloperMetadataVisibility
		): SpreadsheetApp.DeveloperMetadataFinder

	}

	class DeveloperMetadataLocation {
		private constructor();

		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> for the column location of this metadata, or <code>null</code> if the
		 * location type is not <code>DeveloperMetadataLocationType.COLUMN</code>.
		 * 
		 * @returns The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> for the column location of this metadata, or <code>null</code> if the
		 *     location type is not <code>DeveloperMetadataLocationType.COLUMN</code>.
		 */
		getColumn(): SpreadsheetApp.Range
		/**
		 * Gets the type of location.
		 * 
		 * @returns The location type.
		 */
		getLocationType(): SpreadsheetApp.DeveloperMetadataLocationType
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> for the row location of this metadata, or <code>null</code> if the
		 * location type is not <code>DeveloperMetadataLocationType.ROW</code>.
		 * 
		 * @returns The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> for the row location of this metadata, or <code>null</code> if the
		 *     location type is not <code>DeveloperMetadataLocationType.ROW</code>.
		 */
		getRow(): SpreadsheetApp.Range
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html'>Sheet</a></code> location of this metadata, or <code>null</code> if the location type is
		 * not <code>DeveloperMetadataLocationType.SHEET</code>.
		 * 
		 * @returns The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html'>Sheet</a></code> location of this metadata, or <code>null</code> if the location type is
		 *     not <code>DeveloperMetadataLocationType.SHEET</code>.
		 */
		getSheet(): SpreadsheetApp.Sheet
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> location of this metadata, or <code>null</code> if the location
		 * type is not <code>DeveloperMetadataLocationType.SPREADSHEET</code>.
		 * 
		 * @returns The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> location of this metadata, or <code>null</code> if the location
		 *     type is not <code>DeveloperMetadataLocationType.SPREADSHEET</code>.
		 */
		getSpreadsheet(): SpreadsheetApp.Spreadsheet

	}

	enum DeveloperMetadataLocationType {
		/**
		 * The location type for developer metadata associated with a column.
		 */
		COLUMN = "COLUMN",
		/**
		 * The location type for developer metadata associated with a row.
		 */
		ROW = "ROW",
		/**
		 * The location type for developer metadata associated with a whole sheet.
		 */
		SHEET = "SHEET",
		/**
		 * The location type for developer metadata associated with the top-level spreadsheet.
		 */
		SPREADSHEET = "SPREADSHEET",
	}

	enum DeveloperMetadataVisibility {
		/**
		 * Document-visible metadata is accessible from any developer project with access to the document.
		 */
		DOCUMENT = "DOCUMENT",
		/**
		 * Project-visible metadata is only visible to and accessible by the developer project that
		 * created the metadata. Do not use project-visible developer metadata as a security mechanism or
		 * to store secrets. It can be exposed to users with view access to the document.
		 */
		PROJECT = "PROJECT",
	}

	enum Dimension {
		/**
		 * The column (vertical) dimension.
		 */
		COLUMNS = "COLUMNS",
		/**
		 * The row (horizontal) dimension.
		 */
		ROWS = "ROWS",
	}

	enum Direction {
		/**
		 * The direction of increasing row indices.
		 */
		DOWN = "DOWN",
		/**
		 * The direction of increasing column indices.
		 */
		NEXT = "NEXT",
		/**
		 * The direction of decreasing column indices.
		 */
		PREVIOUS = "PREVIOUS",
		/**
		 * The direction of decreasing row indices.
		 */
		UP = "UP",
	}

	class Drawing {
		private constructor();

		/**
		 * Gets information about where the drawing is positioned in the sheet.
		 * 
		 * @returns An object containing the drawing's container position.
		 */
		getContainerInfo(): SpreadsheetApp.ContainerInfo
		/**
		 * Returns the actual height of this drawing in pixels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the height of all drawings in a sheet
		 * var drawings = SpreadsheetApp.getActiveSheet().getDrawings();
		 * for (var i = 0; i &lt; drawings.length; i++) {
		 *   Logger.log(drawings[i].getHeight());
		 * }
		 * </code></pre>
		 * 
		 * @returns The height of the drawing in pixels.
		 */
		getHeight(): number
		/**
		 * Returns the name of the macro attached to this drawing.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the macro name of all drawings on the active sheet.
		 * var drawings = SpreadsheetApp.getActiveSheet().getDrawings();
		 * for (var i = 0; i &lt; drawings.length; i++) {
		 *   Logger.log(drawings[i].getOnAction());
		 * }
		 * </code></pre>
		 * 
		 * @returns The macro name attached to this drawing.
		 */
		getOnAction(): string
		/**
		 * Returns the sheet this drawing appears on.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the parent sheet of all drawings on the active sheet.
		 * var drawings = SpreadsheetApp.getActiveSheet().getDrawings();
		 * for (var i = 0; i &lt; drawings.length; i++) {
		 *   Logger.log(drawings[i].getSheet());
		 * }
		 * </code></pre>
		 * 
		 * @returns The sheet the drawing appears on.
		 */
		getSheet(): SpreadsheetApp.Sheet
		/**
		 * Returns the actual width of this drawing in pixels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the width of all drawings in a sheet
		 * var drawings = SpreadsheetApp.getActiveSheet().getDrawings();
		 * for (var i = 0; i &lt; drawings.length; i++) {
		 *   Logger.log(drawings[i].getWidth());
		 * }
		 * </code></pre>
		 * 
		 * @returns The width of the drawing in pixels.
		 */
		getWidth(): number
		/**
		 * Returns the z-index of this drawing.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the z-index of all drawings on the active sheet.
		 * var drawings = SpreadsheetApp.getActiveSheet().getDrawings();
		 * for (var i = 0; i &lt; drawings.length; i++) {
		 *   Logger.log(drawings[i].getZIndex());
		 * }
		 * </code></pre>
		 * 
		 * @returns Z-Index of this drawing.
		 */
		getZIndex(): Number
		/**
		 * Deletes this drawing from the spreadsheet. Any further operation on the drawing results in a
		 * script error.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Deletes all drawings from the active sheet.
		 * var drawings = SpreadsheetApp.getActiveSheet().getDrawings();
		 * for (var i = 0; i &lt; drawings.length; i++) {
		 *   drawings[i].remove();
		 * }
		 * </code></pre>
		 */
		remove(): void
		/**
		 * Sets the actual height of this drawing in pixels.
		 * 
		 * @param height - The desired height in pixels.
		 * 
		 * @returns This drawing, for chaining.
		 */
		setHeight(
			height: number
		): SpreadsheetApp.Drawing
		/**
		 * Assigns a macro function to this drawing.
		 * 
		 * @param macroName - Name of the macro function.
		 * 
		 * @returns This drawing, for chaining.
		 */
		setOnAction(
			macroName: string
		): SpreadsheetApp.Drawing
		/**
		 * Sets the position where the drawing appears on the sheet. The anchor row and column position
		 * indices are 1-indexed.
		 * 
		 * @param anchorRowPos - The drawing's top side is anchored in this row.
		 * @param anchorColPos - The drawing's top side is anchored in this col.
		 * @param offsetX - The horizontal offset from the cell corner in pixels.
		 * @param offsetY - The vertical offset from the cell corner in pixels.
		 * 
		 * @returns This drawing, for chaining.
		 */
		setPosition(
			anchorRowPos: number,
			anchorColPos: number,
			offsetX: number,
			offsetY: number
		): SpreadsheetApp.Drawing
		/**
		 * Sets the actual width of this drawing in pixels.
		 * 
		 * @param width - The desired width in pixels.
		 * 
		 * @returns This drawing, for chaining.
		 */
		setWidth(
			width: number
		): SpreadsheetApp.Drawing
		/**
		 * Sets the z-index of this drawing.
		 * 
		 * @param zIndex - Z-Index of this drawing.
		 * 
		 * @returns This drawing, for chaining.
		 */
		setZIndex(
			zIndex: Number
		): SpreadsheetApp.Drawing

	}

	class EmbeddedAreaChartBuilder {
		private constructor();

		/**
		 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
		 * added to the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to add.
		 * 
		 * @returns this builder, for chaining
		 */
		addRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
		 * 
		 * @returns a builder for an area chart
		 */
		asAreaChart(): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
		 * 
		 * @returns a builder for a bar chart
		 */
		asBarChart(): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
		 * 
		 * @returns a builder for a column chart
		 */
		asColumnChart(): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
		 * 
		 * @returns a builder for a combo chart
		 */
		asComboChart(): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
		 * 
		 * @returns a builder for a histogram chart
		 */
		asHistogramChart(): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
		 * 
		 * @returns a builder for a line chart
		 */
		asLineChart(): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
		 * 
		 * @returns a builder for a pie chart
		 */
		asPieChart(): SpreadsheetApp.EmbeddedPieChartBuilder
		/**
		 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
		 * 
		 * @returns a builder for a scatter chart
		 */
		asScatterChart(): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
		 * 
		 * @returns a builder for a table chart
		 */
		asTableChart(): SpreadsheetApp.EmbeddedTableChartBuilder
		/**
		 * Builds the chart to reflect all changes made to it.
		 * 
		 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
		 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
		 * via <code>sheet.updateChart(chart)</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @returns the created chart, which must still be added to the spreadsheet
		 */
		build(): SpreadsheetApp.EmbeddedChart
		/**
		 * Removes all ranges from the chart this builder modifies.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This code updates the chart to use only the new ranges while preserving the existing
		 * // formatting of the chart.
		 * var chart = sheet.getCharts()[0];
		 * var newChart = chart
		 *     .modify()
		 *     .clearRanges()
		 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
		 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
		 *     .build();
		 * sheet.updateChart(newChart);
		 * </code></pre>
		 * 
		 * @returns this builder, for chaining
		 */
		clearRanges(): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Returns the current chart type.
		 * 
		 * @returns the chart type
		 */
		getChartType(): Charts.ChartType
		/**
		 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
		 * sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // This method returns the exact same data as Chart#getContainerInfo()
		 * var containerInfo = chartBuilder.getContainer();
		 * 
		 * // Logs the values we used in setPosition()
		 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
		 *           containerInfo.getAnchorColumn(),
		 *           containerInfo.getAnchorRow(),
		 *           containerInfo.getOffsetX(),
		 *           containerInfo.getOffsetY());
		 * </code></pre>
		 * 
		 * @returns an object containing the chart container's position
		 */
		getContainer(): SpreadsheetApp.ContainerInfo
		/**
		 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * var ranges = chartBuilder.getRanges();
		 * 
		 * // There&#39;s only one range as a data source for this chart,
		 * // so this logs &quot;A1:B8&quot;
		 * for (var i in ranges) {
		 *   var range = ranges[i];
		 *   Logger.log(range.getA1Notation());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of ranges that serve as the chart to be built's data source
		 */
		getRanges(): SpreadsheetApp.Range[]
		/**
		 * Removes the specified range from the chart this builder modifies. Does not throw an error if
		 * the range is not in this chart.
		 * 
		 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
		 * otherwise no change is made to the chart. This method cannot be used to partially remove values
		 * from a range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
		 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(firstRange)
		 *     // This range will render in a different color
		 *     .addRange(secondRange)
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // Note that you can use either of these two formats, but the range
		 * // MUST match up with a range that was added via addRange(), or it
		 * // will not be removed, and will not throw an exception
		 * chartBuilder.removeRange(firstRange);
		 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
		 * 
		 * var chart = chartBuilder.build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to remove.
		 * 
		 * @returns this builder, for chaining
		 */
		removeRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
		 * area or column charts), this means the horizontal axis is drawn from right to left. For
		 * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
		 * bottom. For pie charts, this means the slices are drawn counterclockwise.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
		 * var builder = Charts.newPieChart();
		 * builder.reverseCategories();
		 * </code></pre>
		 * 
		 * @returns This builder, useful for chaining.
		 */
		reverseCategories(): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the background color for the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the background color to gray
		 * var builder = Charts.newLineChart();
		 * builder.setBackgroundColor(&quot;gray&quot;);
		 * </code></pre>
		 * 
		 * @param cssValue - The CSS value for the color (such as <code>&quot;blue&quot;</code> or <code>&quot;#00f&quot;</code>).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setBackgroundColor(
			cssValue: string
		): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param type - The type to change this chart into.
		 * 
		 * @returns this builder, for chaining
		 */
		setChartType(
			type: Charts.ChartType
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the colors for the lines in the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the first two lines to be drawn in green and red,
		 * // respectively.
		 * var builder = Charts.newLineChart();
		 * builder.setColors([&quot;green&quot;, &quot;red&quot;]);
		 * </code></pre>
		 * 
		 * @param cssValues - An array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
		 *     in the array represents the color of the nth line in the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setColors(
			cssValues: string[]
		): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param strategy - The strategy to use for hidden rows and columns.
		 * 
		 * @returns this builder, for chaining
		 */
		setHiddenDimensionStrategy(
			strategy: Charts.ChartHiddenDimensionStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the position of the legend with respect to the chart. By default, there is no legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the legend position to right.
		 * var builder = Charts.newLineChart();
		 * builder.setLegendPosition(Charts.Position.RIGHT);
		 * </code></pre>
		 * 
		 * @param position - The position of the legend.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setLegendPosition(
			position: Charts.Position
		): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the text style of the chart legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets it up for a  blue, 26-point legend.
		 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
		 * var style = textStyleBuilder.build();
		 * var builder = Charts.newLineChart();
		 * builder.setLegendTextStyle(style);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the chart legend.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setLegendTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B10&quot;);
		 * var range2 = sheet.getRange(&quot;C:C10&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .addRange(range2)
		 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param mergeStrategy - The merge strategy to use.
		 * 
		 * @returns this builder, for chaining
		 */
		setMergeStrategy(
			mergeStrategy: Charts.ChartMergeStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the number of rows or columns of the range that should be treated as headers.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setNumHeaders(1)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param headers - The number of rows or columns to treat as headers. Negative values cause headers
		 *     to be auto-detected.
		 * 
		 * @returns this builder, for chaining
		 */
		setNumHeaders(
			headers: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets advanced options for this chart. Lookup the chart type in the <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
		 * Gallery</a> for a listing of the available options. For example, the options for an area chart
		 * are listed <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
		 * here</a>.
		 * 
		 * <p>This method does not validate the option you specify is valid for this chart type nor if the
		 * value is of the correct format/structure.
		 * 
		 * <p>This example shows how to change the animation duration to 1 second and set a legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
		 * builder.setOption(&#39;animation.duration&#39;, 1000);
		 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
		 * </code></pre>
		 * 
		 * @param option - The name of the option.
		 * @param value - The value of the option.
		 * 
		 * @returns this builder, for chaining
		 */
		setOption(
			option: string,
			value: object
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the style for points in the line. By default, points have no particular styles, and only
		 * the line is visible.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets large point style.
		 * var builder = Charts.newLineChart();
		 * builder.setPointStyle(Charts.PointStyle.LARGE);
		 * </code></pre>
		 * 
		 * @param style - The style to use for points in the line.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setPointStyle(
			style: Charts.PointStyle
		): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
		 * <code>anchorColPos</code> are 1-indexed.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param anchorRowPos - The chart's top side is anchored in this row.
		 * @param anchorColPos - The chart's left side is anchored in this column.
		 * @param offsetX - The chart's upper right-hand corner is offset by this many pixels.
		 * @param offsetY - The chart's lower left-hand corner is offset by this many pixels.
		 * 
		 * @returns this builder, for chaining
		 */
		setPosition(
			anchorRowPos: number,
			anchorColPos: number,
			offsetX: number,
			offsetY: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the range for the chart.
		 * 
		 * <p>If any data points fall outside the range, the range is expanded to include those data
		 * points.
		 * 
		 * @param start - The value for the lowest grid line of the range axis.
		 * @param end - The value for the highest grid line of the range axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setRange(
			start: Number,
			end: Number
		): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
		 * there is no stacking.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setStacked(): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the title of the chart. The title is displayed centered above the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and title to &#39;My Line Chart&#39;.
		 * var builder = Charts.newLineChart();
		 * builder.setTitle(&#39;My Line Chart&#39;)
		 * </code></pre>
		 * 
		 * @param chartTitle - the chart title.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitle(
			chartTitle: string
		): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the text style of the chart title.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets it up for a  blue, 26-point title.
		 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
		 * var style = textStyleBuilder.build();
		 * var builder = Charts.newLineChart();
		 * builder.setTitleTextStyle(style);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
		 * columns are switched. Defaults to <code>false</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setTransposeRowsAndColumns(true)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param transpose - If <code>true</code>, the rows and columns used to construct the chart are
		 *     transposed.
		 * 
		 * @returns this builder, for chaining
		 */
		setTransposeRowsAndColumns(
			transpose: Boolean
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the horizontal axis text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setXAxisTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Adds a title to the horizontal axis. The title is centered and appears below the axis value
		 * labels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis title.
		 * var builder = Charts.newLineChart();
		 * builder.setTitle(&#39;X-axis Title&#39;)
		 * </code></pre>
		 * 
		 * @param title - The title for the X-axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitle(
			title: string
		): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the horizontal axis title text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setXAxisTitleTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the vertical axis text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Adds a title to the vertical axis. The title is centered and appears to the left of the value
		 * labels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis title.
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
		 * </code></pre>
		 * 
		 * @param title - The title for the Y-axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitle(
			title: string
		): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the vertical axis title text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTitleTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
		 * axis are the vertical axis for vertical charts (such as line, area, or column) and the
		 * horizontal axis for horizontal charts (such as bar).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		useLogScale(): SpreadsheetApp.EmbeddedAreaChartBuilder

	}

	class EmbeddedBarChartBuilder {
		private constructor();

		/**
		 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
		 * added to the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to add.
		 * 
		 * @returns this builder, for chaining
		 */
		addRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
		 * 
		 * @returns a builder for an area chart
		 */
		asAreaChart(): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
		 * 
		 * @returns a builder for a bar chart
		 */
		asBarChart(): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
		 * 
		 * @returns a builder for a column chart
		 */
		asColumnChart(): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
		 * 
		 * @returns a builder for a combo chart
		 */
		asComboChart(): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
		 * 
		 * @returns a builder for a histogram chart
		 */
		asHistogramChart(): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
		 * 
		 * @returns a builder for a line chart
		 */
		asLineChart(): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
		 * 
		 * @returns a builder for a pie chart
		 */
		asPieChart(): SpreadsheetApp.EmbeddedPieChartBuilder
		/**
		 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
		 * 
		 * @returns a builder for a scatter chart
		 */
		asScatterChart(): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
		 * 
		 * @returns a builder for a table chart
		 */
		asTableChart(): SpreadsheetApp.EmbeddedTableChartBuilder
		/**
		 * Builds the chart to reflect all changes made to it.
		 * 
		 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
		 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
		 * via <code>sheet.updateChart(chart)</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @returns the created chart, which must still be added to the spreadsheet
		 */
		build(): SpreadsheetApp.EmbeddedChart
		/**
		 * Removes all ranges from the chart this builder modifies.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This code updates the chart to use only the new ranges while preserving the existing
		 * // formatting of the chart.
		 * var chart = sheet.getCharts()[0];
		 * var newChart = chart
		 *     .modify()
		 *     .clearRanges()
		 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
		 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
		 *     .build();
		 * sheet.updateChart(newChart);
		 * </code></pre>
		 * 
		 * @returns this builder, for chaining
		 */
		clearRanges(): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Returns the current chart type.
		 * 
		 * @returns the chart type
		 */
		getChartType(): Charts.ChartType
		/**
		 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
		 * sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // This method returns the exact same data as Chart#getContainerInfo()
		 * var containerInfo = chartBuilder.getContainer();
		 * 
		 * // Logs the values we used in setPosition()
		 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
		 *           containerInfo.getAnchorColumn(),
		 *           containerInfo.getAnchorRow(),
		 *           containerInfo.getOffsetX(),
		 *           containerInfo.getOffsetY());
		 * </code></pre>
		 * 
		 * @returns an object containing the chart container's position
		 */
		getContainer(): SpreadsheetApp.ContainerInfo
		/**
		 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * var ranges = chartBuilder.getRanges();
		 * 
		 * // There&#39;s only one range as a data source for this chart,
		 * // so this logs &quot;A1:B8&quot;
		 * for (var i in ranges) {
		 *   var range = ranges[i];
		 *   Logger.log(range.getA1Notation());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of ranges that serve as the chart to be built's data source
		 */
		getRanges(): SpreadsheetApp.Range[]
		/**
		 * Removes the specified range from the chart this builder modifies. Does not throw an error if
		 * the range is not in this chart.
		 * 
		 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
		 * otherwise no change is made to the chart. This method cannot be used to partially remove values
		 * from a range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
		 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(firstRange)
		 *     // This range will render in a different color
		 *     .addRange(secondRange)
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // Note that you can use either of these two formats, but the range
		 * // MUST match up with a range that was added via addRange(), or it
		 * // will not be removed, and will not throw an exception
		 * chartBuilder.removeRange(firstRange);
		 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
		 * 
		 * var chart = chartBuilder.build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to remove.
		 * 
		 * @returns this builder, for chaining
		 */
		removeRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
		 * area or column charts), this means the horizontal axis is drawn from right to left. For
		 * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
		 * bottom. For pie charts, this means the slices are drawn counterclockwise.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
		 * var builder = Charts.newPieChart();
		 * builder.reverseCategories();
		 * </code></pre>
		 * 
		 * @returns This builder, useful for chaining.
		 */
		reverseCategories(): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Reverses the direction in which the bars grow along the horizontal axis. By default, values
		 * grow from left to right. Calling this method causes them to grow from right to left.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		reverseDirection(): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the background color for the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the background color to gray
		 * var builder = Charts.newLineChart();
		 * builder.setBackgroundColor(&quot;gray&quot;);
		 * </code></pre>
		 * 
		 * @param cssValue - The CSS value for the color (such as <code>&quot;blue&quot;</code> or <code>&quot;#00f&quot;</code>).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setBackgroundColor(
			cssValue: string
		): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param type - The type to change this chart into.
		 * 
		 * @returns this builder, for chaining
		 */
		setChartType(
			type: Charts.ChartType
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the colors for the lines in the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the first two lines to be drawn in green and red,
		 * // respectively.
		 * var builder = Charts.newLineChart();
		 * builder.setColors([&quot;green&quot;, &quot;red&quot;]);
		 * </code></pre>
		 * 
		 * @param cssValues - An array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
		 *     in the array represents the color of the nth line in the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setColors(
			cssValues: string[]
		): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param strategy - The strategy to use for hidden rows and columns.
		 * 
		 * @returns this builder, for chaining
		 */
		setHiddenDimensionStrategy(
			strategy: Charts.ChartHiddenDimensionStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the position of the legend with respect to the chart. By default, there is no legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the legend position to right.
		 * var builder = Charts.newLineChart();
		 * builder.setLegendPosition(Charts.Position.RIGHT);
		 * </code></pre>
		 * 
		 * @param position - The position of the legend.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setLegendPosition(
			position: Charts.Position
		): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the text style of the chart legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets it up for a  blue, 26-point legend.
		 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
		 * var style = textStyleBuilder.build();
		 * var builder = Charts.newLineChart();
		 * builder.setLegendTextStyle(style);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the chart legend.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setLegendTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B10&quot;);
		 * var range2 = sheet.getRange(&quot;C:C10&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .addRange(range2)
		 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param mergeStrategy - The merge strategy to use.
		 * 
		 * @returns this builder, for chaining
		 */
		setMergeStrategy(
			mergeStrategy: Charts.ChartMergeStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the number of rows or columns of the range that should be treated as headers.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setNumHeaders(1)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param headers - The number of rows or columns to treat as headers. Negative values cause headers
		 *     to be auto-detected.
		 * 
		 * @returns this builder, for chaining
		 */
		setNumHeaders(
			headers: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets advanced options for this chart. Lookup the chart type in the <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
		 * Gallery</a> for a listing of the available options. For example, the options for an area chart
		 * are listed <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
		 * here</a>.
		 * 
		 * <p>This method does not validate the option you specify is valid for this chart type nor if the
		 * value is of the correct format/structure.
		 * 
		 * <p>This example shows how to change the animation duration to 1 second and set a legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
		 * builder.setOption(&#39;animation.duration&#39;, 1000);
		 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
		 * </code></pre>
		 * 
		 * @param option - The name of the option.
		 * @param value - The value of the option.
		 * 
		 * @returns this builder, for chaining
		 */
		setOption(
			option: string,
			value: object
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
		 * <code>anchorColPos</code> are 1-indexed.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param anchorRowPos - The chart's top side is anchored in this row.
		 * @param anchorColPos - The chart's left side is anchored in this column.
		 * @param offsetX - The chart's upper right-hand corner is offset by this many pixels.
		 * @param offsetY - The chart's lower left-hand corner is offset by this many pixels.
		 * 
		 * @returns this builder, for chaining
		 */
		setPosition(
			anchorRowPos: number,
			anchorColPos: number,
			offsetX: number,
			offsetY: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the range for the chart.
		 * 
		 * <p>If any data points fall outside the range, the range is expanded to include those data
		 * points.
		 * 
		 * @param start - The value for the lowest grid line of the range axis.
		 * @param end - The value for the highest grid line of the range axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setRange(
			start: Number,
			end: Number
		): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
		 * there is no stacking.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setStacked(): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the title of the chart. The title is displayed centered above the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and title to &#39;My Line Chart&#39;.
		 * var builder = Charts.newLineChart();
		 * builder.setTitle(&#39;My Line Chart&#39;)
		 * </code></pre>
		 * 
		 * @param chartTitle - the chart title.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitle(
			chartTitle: string
		): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the text style of the chart title.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets it up for a  blue, 26-point title.
		 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
		 * var style = textStyleBuilder.build();
		 * var builder = Charts.newLineChart();
		 * builder.setTitleTextStyle(style);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
		 * columns are switched. Defaults to <code>false</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setTransposeRowsAndColumns(true)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param transpose - If <code>true</code>, the rows and columns used to construct the chart are
		 *     transposed.
		 * 
		 * @returns this builder, for chaining
		 */
		setTransposeRowsAndColumns(
			transpose: Boolean
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the horizontal axis text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setXAxisTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Adds a title to the horizontal axis. The title is centered and appears below the axis value
		 * labels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis title.
		 * var builder = Charts.newLineChart();
		 * builder.setTitle(&#39;X-axis Title&#39;)
		 * </code></pre>
		 * 
		 * @param title - The title for the X-axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitle(
			title: string
		): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the horizontal axis title text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setXAxisTitleTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the vertical axis text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Adds a title to the vertical axis. The title is centered and appears to the left of the value
		 * labels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis title.
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
		 * </code></pre>
		 * 
		 * @param title - The title for the Y-axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitle(
			title: string
		): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the vertical axis title text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTitleTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
		 * axis are the vertical axis for vertical charts (such as line, area, or column) and the
		 * horizontal axis for horizontal charts (such as bar).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		useLogScale(): SpreadsheetApp.EmbeddedBarChartBuilder

	}

	class EmbeddedChart {
		private constructor();

		/**
		 * Casts to a data source chart instance if the chart is a data source chart, or <code>null</code>
		 * otherwise.
		 * 
		 * @returns The data source chart.
		 */
		asDataSourceChart(): SpreadsheetApp.DataSourceChart
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
		 * Returns a stable identifier for the chart that is unique across the spreadsheet containing the
		 * chart or <code>null</code> if the chart is not in a spreadsheet.
		 * 
		 * @returns A stable chart identifier.
		 */
		getChartId(): number
		/**
		 * Returns information about where the chart is positioned within a sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * var containerInfo = chart.getContainerInfo();
		 * 
		 * // Logs the values we used in setPosition()
		 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
		 *           containerInfo.getAnchorColumn(),
		 *           containerInfo.getAnchorRow(),
		 *           containerInfo.getOffsetX(),
		 *           containerInfo.getOffsetY());
		 * </code></pre>
		 * 
		 * @returns an object containing the chart container's position
		 */
		getContainerInfo(): SpreadsheetApp.ContainerInfo
		/**
		 * Returns the strategy to use for handling hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build()
		 * 
		 * // Logs the strategy to use for hidden rows and columns which is
		 * // Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS in this case.
		 * Logger.log(chart.getHiddenDimensionStrategy());
		 * </code></pre>
		 * 
		 * @returns The strategy to use for hidden rows and columns.
		 */
		getHiddenDimensionStrategy(): Charts.ChartHiddenDimensionStrategy
		/**
		 * Returns the merge strategy used when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html#MERGE_ROWS'>MERGE_ROWS</a></code>, row are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html#MERGE_COLUMNS'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html#MERGE_COLUMNS'>MERGE_COLUMNS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B10&quot;);
		 * var range2 = sheet.getRange(&quot;C1:C10&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .addRange(range2)
		 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build()
		 * 
		 * // Logs whether rows of multiple ranges are merged, which is MERGE_ROWS in this case.
		 * Logger.log(chart.getMergeStrategy());
		 * </code></pre>
		 * 
		 * @returns <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html#MERGE_ROWS'>MERGE_ROWS</a></code> if rows are merged across multiple
		 *     ranges; <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html#MERGE_COLUMNS'>MERGE_COLUMNS</a></code> if columns are merged
		 *     across multiple ranges
		 */
		getMergeStrategy(): Charts.ChartMergeStrategy
		/**
		 * Returns the number of rows or columns the range that are treated as headers.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setNumHeaders(1)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build()
		 * 
		 * // Logs the number of rows or columns to use as headers, which is 1 in this case.
		 * Logger.log(chart.getHeaders());
		 * </code></pre>
		 * 
		 * @returns The number of rows or columns treated as headers. Negative values indicate the headers
		 *     are auto-detected.
		 */
		getNumHeaders(): number
		/**
		 * Returns the options for this chart, such as height, colors, and axes.
		 * 
		 * <p>The returned options are immutable.
		 * 
		 * @returns The options for this chart, such as height, colors, and axes.
		 */
		getOptions(): Charts.ChartOptions
		/**
		 * Returns the ranges that this chart uses as a data source.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * var ranges = chart.getRanges();
		 * 
		 * // There&#39;s only one range as a data source for this chart,
		 * // so this logs &quot;A1:B8&quot;
		 * for (var i in ranges) {
		 *   var range = ranges[i];
		 *   Logger.log(range.getA1Notation());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of ranges that serve as this chart's data source
		 */
		getRanges(): SpreadsheetApp.Range[]
		/**
		 * If <code>true</code>, the rows and columns used to populate the chart are switched. Defaults to
		 * <code>false</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .addRange(range)
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .setTransposeRowsAndColumns(true)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build()
		 * 
		 * // Logs whether rows and columns should be transposed, which is true in this case.
		 * Logger.log(chart.getTransposeRowsAndColumns());
		 * </code></pre>
		 * 
		 * @returns <code>true</code> if the rows and columns used to construct the chart are transposed.
		 */
		getTransposeRowsAndColumns(): Boolean
		/**
		 * Returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder.html'>EmbeddedChartBuilder</a></code> that can be used to modify this chart. Invoke <code>sheet.updateChart(chart)</code> to save any changes.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var chart = sheet.getCharts()[0];
		 * chart = chart.modify()
		 *     .setOption(&#39;width&#39;, 800)
		 *     .setOption(&#39;height&#39;, 640)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * sheet.updateChart(chart);
		 * </code></pre>
		 * 
		 * @returns a builder for creating embedded charts
		 */
		modify(): SpreadsheetApp.EmbeddedChartBuilder

	}

	class EmbeddedChartBuilder {
		private constructor();

		/**
		 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
		 * added to the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to add.
		 * 
		 * @returns this builder, for chaining
		 */
		addRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
		 * 
		 * @returns a builder for an area chart
		 */
		asAreaChart(): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
		 * 
		 * @returns a builder for a bar chart
		 */
		asBarChart(): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
		 * 
		 * @returns a builder for a column chart
		 */
		asColumnChart(): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
		 * 
		 * @returns a builder for a combo chart
		 */
		asComboChart(): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
		 * 
		 * @returns a builder for a histogram chart
		 */
		asHistogramChart(): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
		 * 
		 * @returns a builder for a line chart
		 */
		asLineChart(): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
		 * 
		 * @returns a builder for a pie chart
		 */
		asPieChart(): SpreadsheetApp.EmbeddedPieChartBuilder
		/**
		 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
		 * 
		 * @returns a builder for a scatter chart
		 */
		asScatterChart(): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
		 * 
		 * @returns a builder for a table chart
		 */
		asTableChart(): SpreadsheetApp.EmbeddedTableChartBuilder
		/**
		 * Builds the chart to reflect all changes made to it.
		 * 
		 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
		 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
		 * via <code>sheet.updateChart(chart)</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @returns the created chart, which must still be added to the spreadsheet
		 */
		build(): SpreadsheetApp.EmbeddedChart
		/**
		 * Removes all ranges from the chart this builder modifies.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This code updates the chart to use only the new ranges while preserving the existing
		 * // formatting of the chart.
		 * var chart = sheet.getCharts()[0];
		 * var newChart = chart
		 *     .modify()
		 *     .clearRanges()
		 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
		 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
		 *     .build();
		 * sheet.updateChart(newChart);
		 * </code></pre>
		 * 
		 * @returns this builder, for chaining
		 */
		clearRanges(): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Returns the current chart type.
		 * 
		 * @returns the chart type
		 */
		getChartType(): Charts.ChartType
		/**
		 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
		 * sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // This method returns the exact same data as Chart#getContainerInfo()
		 * var containerInfo = chartBuilder.getContainer();
		 * 
		 * // Logs the values we used in setPosition()
		 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
		 *           containerInfo.getAnchorColumn(),
		 *           containerInfo.getAnchorRow(),
		 *           containerInfo.getOffsetX(),
		 *           containerInfo.getOffsetY());
		 * </code></pre>
		 * 
		 * @returns an object containing the chart container's position
		 */
		getContainer(): SpreadsheetApp.ContainerInfo
		/**
		 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * var ranges = chartBuilder.getRanges();
		 * 
		 * // There&#39;s only one range as a data source for this chart,
		 * // so this logs &quot;A1:B8&quot;
		 * for (var i in ranges) {
		 *   var range = ranges[i];
		 *   Logger.log(range.getA1Notation());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of ranges that serve as the chart to be built's data source
		 */
		getRanges(): SpreadsheetApp.Range[]
		/**
		 * Removes the specified range from the chart this builder modifies. Does not throw an error if
		 * the range is not in this chart.
		 * 
		 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
		 * otherwise no change is made to the chart. This method cannot be used to partially remove values
		 * from a range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
		 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(firstRange)
		 *     // This range will render in a different color
		 *     .addRange(secondRange)
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // Note that you can use either of these two formats, but the range
		 * // MUST match up with a range that was added via addRange(), or it
		 * // will not be removed, and will not throw an exception
		 * chartBuilder.removeRange(firstRange);
		 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
		 * 
		 * var chart = chartBuilder.build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to remove.
		 * 
		 * @returns this builder, for chaining
		 */
		removeRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param type - The type to change this chart into.
		 * 
		 * @returns this builder, for chaining
		 */
		setChartType(
			type: Charts.ChartType
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param strategy - The strategy to use for hidden rows and columns.
		 * 
		 * @returns this builder, for chaining
		 */
		setHiddenDimensionStrategy(
			strategy: Charts.ChartHiddenDimensionStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B10&quot;);
		 * var range2 = sheet.getRange(&quot;C:C10&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .addRange(range2)
		 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param mergeStrategy - The merge strategy to use.
		 * 
		 * @returns this builder, for chaining
		 */
		setMergeStrategy(
			mergeStrategy: Charts.ChartMergeStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the number of rows or columns of the range that should be treated as headers.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setNumHeaders(1)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param headers - The number of rows or columns to treat as headers. Negative values cause headers
		 *     to be auto-detected.
		 * 
		 * @returns this builder, for chaining
		 */
		setNumHeaders(
			headers: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets advanced options for this chart. Lookup the chart type in the <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
		 * Gallery</a> for a listing of the available options. For example, the options for an area chart
		 * are listed <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
		 * here</a>.
		 * 
		 * <p>This method does not validate the option you specify is valid for this chart type nor if the
		 * value is of the correct format/structure.
		 * 
		 * <p>This example shows how to change the animation duration to 1 second and set a legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
		 * builder.setOption(&#39;animation.duration&#39;, 1000);
		 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
		 * </code></pre>
		 * 
		 * @param option - The name of the option.
		 * @param value - The value of the option.
		 * 
		 * @returns this builder, for chaining
		 */
		setOption(
			option: string,
			value: object
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
		 * <code>anchorColPos</code> are 1-indexed.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param anchorRowPos - The chart's top side is anchored in this row.
		 * @param anchorColPos - The chart's left side is anchored in this column.
		 * @param offsetX - The chart's upper right-hand corner is offset by this many pixels.
		 * @param offsetY - The chart's lower left-hand corner is offset by this many pixels.
		 * 
		 * @returns this builder, for chaining
		 */
		setPosition(
			anchorRowPos: number,
			anchorColPos: number,
			offsetX: number,
			offsetY: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
		 * columns are switched. Defaults to <code>false</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setTransposeRowsAndColumns(true)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param transpose - If <code>true</code>, the rows and columns used to construct the chart are
		 *     transposed.
		 * 
		 * @returns this builder, for chaining
		 */
		setTransposeRowsAndColumns(
			transpose: Boolean
		): SpreadsheetApp.EmbeddedChartBuilder

	}

	class EmbeddedColumnChartBuilder {
		private constructor();

		/**
		 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
		 * added to the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to add.
		 * 
		 * @returns this builder, for chaining
		 */
		addRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
		 * 
		 * @returns a builder for an area chart
		 */
		asAreaChart(): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
		 * 
		 * @returns a builder for a bar chart
		 */
		asBarChart(): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
		 * 
		 * @returns a builder for a column chart
		 */
		asColumnChart(): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
		 * 
		 * @returns a builder for a combo chart
		 */
		asComboChart(): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
		 * 
		 * @returns a builder for a histogram chart
		 */
		asHistogramChart(): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
		 * 
		 * @returns a builder for a line chart
		 */
		asLineChart(): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
		 * 
		 * @returns a builder for a pie chart
		 */
		asPieChart(): SpreadsheetApp.EmbeddedPieChartBuilder
		/**
		 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
		 * 
		 * @returns a builder for a scatter chart
		 */
		asScatterChart(): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
		 * 
		 * @returns a builder for a table chart
		 */
		asTableChart(): SpreadsheetApp.EmbeddedTableChartBuilder
		/**
		 * Builds the chart to reflect all changes made to it.
		 * 
		 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
		 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
		 * via <code>sheet.updateChart(chart)</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @returns the created chart, which must still be added to the spreadsheet
		 */
		build(): SpreadsheetApp.EmbeddedChart
		/**
		 * Removes all ranges from the chart this builder modifies.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This code updates the chart to use only the new ranges while preserving the existing
		 * // formatting of the chart.
		 * var chart = sheet.getCharts()[0];
		 * var newChart = chart
		 *     .modify()
		 *     .clearRanges()
		 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
		 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
		 *     .build();
		 * sheet.updateChart(newChart);
		 * </code></pre>
		 * 
		 * @returns this builder, for chaining
		 */
		clearRanges(): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Returns the current chart type.
		 * 
		 * @returns the chart type
		 */
		getChartType(): Charts.ChartType
		/**
		 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
		 * sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // This method returns the exact same data as Chart#getContainerInfo()
		 * var containerInfo = chartBuilder.getContainer();
		 * 
		 * // Logs the values we used in setPosition()
		 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
		 *           containerInfo.getAnchorColumn(),
		 *           containerInfo.getAnchorRow(),
		 *           containerInfo.getOffsetX(),
		 *           containerInfo.getOffsetY());
		 * </code></pre>
		 * 
		 * @returns an object containing the chart container's position
		 */
		getContainer(): SpreadsheetApp.ContainerInfo
		/**
		 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * var ranges = chartBuilder.getRanges();
		 * 
		 * // There&#39;s only one range as a data source for this chart,
		 * // so this logs &quot;A1:B8&quot;
		 * for (var i in ranges) {
		 *   var range = ranges[i];
		 *   Logger.log(range.getA1Notation());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of ranges that serve as the chart to be built's data source
		 */
		getRanges(): SpreadsheetApp.Range[]
		/**
		 * Removes the specified range from the chart this builder modifies. Does not throw an error if
		 * the range is not in this chart.
		 * 
		 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
		 * otherwise no change is made to the chart. This method cannot be used to partially remove values
		 * from a range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
		 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(firstRange)
		 *     // This range will render in a different color
		 *     .addRange(secondRange)
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // Note that you can use either of these two formats, but the range
		 * // MUST match up with a range that was added via addRange(), or it
		 * // will not be removed, and will not throw an exception
		 * chartBuilder.removeRange(firstRange);
		 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
		 * 
		 * var chart = chartBuilder.build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to remove.
		 * 
		 * @returns this builder, for chaining
		 */
		removeRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
		 * area or column charts), this means the horizontal axis is drawn from right to left. For
		 * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
		 * bottom. For pie charts, this means the slices are drawn counterclockwise.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
		 * var builder = Charts.newPieChart();
		 * builder.reverseCategories();
		 * </code></pre>
		 * 
		 * @returns This builder, useful for chaining.
		 */
		reverseCategories(): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the background color for the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the background color to gray
		 * var builder = Charts.newLineChart();
		 * builder.setBackgroundColor(&quot;gray&quot;);
		 * </code></pre>
		 * 
		 * @param cssValue - The CSS value for the color (such as <code>&quot;blue&quot;</code> or <code>&quot;#00f&quot;</code>).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setBackgroundColor(
			cssValue: string
		): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param type - The type to change this chart into.
		 * 
		 * @returns this builder, for chaining
		 */
		setChartType(
			type: Charts.ChartType
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the colors for the lines in the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the first two lines to be drawn in green and red,
		 * // respectively.
		 * var builder = Charts.newLineChart();
		 * builder.setColors([&quot;green&quot;, &quot;red&quot;]);
		 * </code></pre>
		 * 
		 * @param cssValues - An array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
		 *     in the array represents the color of the nth line in the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setColors(
			cssValues: string[]
		): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param strategy - The strategy to use for hidden rows and columns.
		 * 
		 * @returns this builder, for chaining
		 */
		setHiddenDimensionStrategy(
			strategy: Charts.ChartHiddenDimensionStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the position of the legend with respect to the chart. By default, there is no legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the legend position to right.
		 * var builder = Charts.newLineChart();
		 * builder.setLegendPosition(Charts.Position.RIGHT);
		 * </code></pre>
		 * 
		 * @param position - The position of the legend.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setLegendPosition(
			position: Charts.Position
		): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the text style of the chart legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets it up for a  blue, 26-point legend.
		 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
		 * var style = textStyleBuilder.build();
		 * var builder = Charts.newLineChart();
		 * builder.setLegendTextStyle(style);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the chart legend.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setLegendTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B10&quot;);
		 * var range2 = sheet.getRange(&quot;C:C10&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .addRange(range2)
		 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param mergeStrategy - The merge strategy to use.
		 * 
		 * @returns this builder, for chaining
		 */
		setMergeStrategy(
			mergeStrategy: Charts.ChartMergeStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the number of rows or columns of the range that should be treated as headers.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setNumHeaders(1)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param headers - The number of rows or columns to treat as headers. Negative values cause headers
		 *     to be auto-detected.
		 * 
		 * @returns this builder, for chaining
		 */
		setNumHeaders(
			headers: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets advanced options for this chart. Lookup the chart type in the <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
		 * Gallery</a> for a listing of the available options. For example, the options for an area chart
		 * are listed <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
		 * here</a>.
		 * 
		 * <p>This method does not validate the option you specify is valid for this chart type nor if the
		 * value is of the correct format/structure.
		 * 
		 * <p>This example shows how to change the animation duration to 1 second and set a legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
		 * builder.setOption(&#39;animation.duration&#39;, 1000);
		 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
		 * </code></pre>
		 * 
		 * @param option - The name of the option.
		 * @param value - The value of the option.
		 * 
		 * @returns this builder, for chaining
		 */
		setOption(
			option: string,
			value: object
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
		 * <code>anchorColPos</code> are 1-indexed.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param anchorRowPos - The chart's top side is anchored in this row.
		 * @param anchorColPos - The chart's left side is anchored in this column.
		 * @param offsetX - The chart's upper right-hand corner is offset by this many pixels.
		 * @param offsetY - The chart's lower left-hand corner is offset by this many pixels.
		 * 
		 * @returns this builder, for chaining
		 */
		setPosition(
			anchorRowPos: number,
			anchorColPos: number,
			offsetX: number,
			offsetY: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the range for the chart.
		 * 
		 * <p>If any data points fall outside the range, the range is expanded to include those data
		 * points.
		 * 
		 * @param start - The value for the lowest grid line of the range axis.
		 * @param end - The value for the highest grid line of the range axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setRange(
			start: Number,
			end: Number
		): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
		 * there is no stacking.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setStacked(): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the title of the chart. The title is displayed centered above the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and title to &#39;My Line Chart&#39;.
		 * var builder = Charts.newLineChart();
		 * builder.setTitle(&#39;My Line Chart&#39;)
		 * </code></pre>
		 * 
		 * @param chartTitle - the chart title.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitle(
			chartTitle: string
		): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the text style of the chart title.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets it up for a  blue, 26-point title.
		 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
		 * var style = textStyleBuilder.build();
		 * var builder = Charts.newLineChart();
		 * builder.setTitleTextStyle(style);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
		 * columns are switched. Defaults to <code>false</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setTransposeRowsAndColumns(true)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param transpose - If <code>true</code>, the rows and columns used to construct the chart are
		 *     transposed.
		 * 
		 * @returns this builder, for chaining
		 */
		setTransposeRowsAndColumns(
			transpose: Boolean
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the horizontal axis text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setXAxisTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Adds a title to the horizontal axis. The title is centered and appears below the axis value
		 * labels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis title.
		 * var builder = Charts.newLineChart();
		 * builder.setTitle(&#39;X-axis Title&#39;)
		 * </code></pre>
		 * 
		 * @param title - The title for the X-axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitle(
			title: string
		): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the horizontal axis title text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setXAxisTitleTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the vertical axis text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Adds a title to the vertical axis. The title is centered and appears to the left of the value
		 * labels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis title.
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
		 * </code></pre>
		 * 
		 * @param title - The title for the Y-axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitle(
			title: string
		): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the vertical axis title text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTitleTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
		 * axis are the vertical axis for vertical charts (such as line, area, or column) and the
		 * horizontal axis for horizontal charts (such as bar).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		useLogScale(): SpreadsheetApp.EmbeddedColumnChartBuilder

	}

	class EmbeddedComboChartBuilder {
		private constructor();

		/**
		 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
		 * added to the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to add.
		 * 
		 * @returns this builder, for chaining
		 */
		addRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
		 * 
		 * @returns a builder for an area chart
		 */
		asAreaChart(): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
		 * 
		 * @returns a builder for a bar chart
		 */
		asBarChart(): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
		 * 
		 * @returns a builder for a column chart
		 */
		asColumnChart(): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
		 * 
		 * @returns a builder for a combo chart
		 */
		asComboChart(): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
		 * 
		 * @returns a builder for a histogram chart
		 */
		asHistogramChart(): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
		 * 
		 * @returns a builder for a line chart
		 */
		asLineChart(): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
		 * 
		 * @returns a builder for a pie chart
		 */
		asPieChart(): SpreadsheetApp.EmbeddedPieChartBuilder
		/**
		 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
		 * 
		 * @returns a builder for a scatter chart
		 */
		asScatterChart(): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
		 * 
		 * @returns a builder for a table chart
		 */
		asTableChart(): SpreadsheetApp.EmbeddedTableChartBuilder
		/**
		 * Builds the chart to reflect all changes made to it.
		 * 
		 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
		 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
		 * via <code>sheet.updateChart(chart)</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @returns the created chart, which must still be added to the spreadsheet
		 */
		build(): SpreadsheetApp.EmbeddedChart
		/**
		 * Removes all ranges from the chart this builder modifies.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This code updates the chart to use only the new ranges while preserving the existing
		 * // formatting of the chart.
		 * var chart = sheet.getCharts()[0];
		 * var newChart = chart
		 *     .modify()
		 *     .clearRanges()
		 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
		 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
		 *     .build();
		 * sheet.updateChart(newChart);
		 * </code></pre>
		 * 
		 * @returns this builder, for chaining
		 */
		clearRanges(): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Returns the current chart type.
		 * 
		 * @returns the chart type
		 */
		getChartType(): Charts.ChartType
		/**
		 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
		 * sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // This method returns the exact same data as Chart#getContainerInfo()
		 * var containerInfo = chartBuilder.getContainer();
		 * 
		 * // Logs the values we used in setPosition()
		 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
		 *           containerInfo.getAnchorColumn(),
		 *           containerInfo.getAnchorRow(),
		 *           containerInfo.getOffsetX(),
		 *           containerInfo.getOffsetY());
		 * </code></pre>
		 * 
		 * @returns an object containing the chart container's position
		 */
		getContainer(): SpreadsheetApp.ContainerInfo
		/**
		 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * var ranges = chartBuilder.getRanges();
		 * 
		 * // There&#39;s only one range as a data source for this chart,
		 * // so this logs &quot;A1:B8&quot;
		 * for (var i in ranges) {
		 *   var range = ranges[i];
		 *   Logger.log(range.getA1Notation());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of ranges that serve as the chart to be built's data source
		 */
		getRanges(): SpreadsheetApp.Range[]
		/**
		 * Removes the specified range from the chart this builder modifies. Does not throw an error if
		 * the range is not in this chart.
		 * 
		 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
		 * otherwise no change is made to the chart. This method cannot be used to partially remove values
		 * from a range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
		 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(firstRange)
		 *     // This range will render in a different color
		 *     .addRange(secondRange)
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // Note that you can use either of these two formats, but the range
		 * // MUST match up with a range that was added via addRange(), or it
		 * // will not be removed, and will not throw an exception
		 * chartBuilder.removeRange(firstRange);
		 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
		 * 
		 * var chart = chartBuilder.build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to remove.
		 * 
		 * @returns this builder, for chaining
		 */
		removeRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
		 * area or column charts), this means the horizontal axis is drawn from right to left. For
		 * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
		 * bottom. For pie charts, this means the slices are drawn counterclockwise.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
		 * var builder = Charts.newPieChart();
		 * builder.reverseCategories();
		 * </code></pre>
		 * 
		 * @returns This builder, useful for chaining.
		 */
		reverseCategories(): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the background color for the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the background color to gray
		 * var builder = Charts.newLineChart();
		 * builder.setBackgroundColor(&quot;gray&quot;);
		 * </code></pre>
		 * 
		 * @param cssValue - The CSS value for the color (such as <code>&quot;blue&quot;</code> or <code>&quot;#00f&quot;</code>).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setBackgroundColor(
			cssValue: string
		): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param type - The type to change this chart into.
		 * 
		 * @returns this builder, for chaining
		 */
		setChartType(
			type: Charts.ChartType
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the colors for the lines in the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the first two lines to be drawn in green and red,
		 * // respectively.
		 * var builder = Charts.newLineChart();
		 * builder.setColors([&quot;green&quot;, &quot;red&quot;]);
		 * </code></pre>
		 * 
		 * @param cssValues - An array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
		 *     in the array represents the color of the nth line in the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setColors(
			cssValues: string[]
		): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param strategy - The strategy to use for hidden rows and columns.
		 * 
		 * @returns this builder, for chaining
		 */
		setHiddenDimensionStrategy(
			strategy: Charts.ChartHiddenDimensionStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the position of the legend with respect to the chart. By default, there is no legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the legend position to right.
		 * var builder = Charts.newLineChart();
		 * builder.setLegendPosition(Charts.Position.RIGHT);
		 * </code></pre>
		 * 
		 * @param position - The position of the legend.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setLegendPosition(
			position: Charts.Position
		): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the text style of the chart legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets it up for a  blue, 26-point legend.
		 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
		 * var style = textStyleBuilder.build();
		 * var builder = Charts.newLineChart();
		 * builder.setLegendTextStyle(style);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the chart legend.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setLegendTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B10&quot;);
		 * var range2 = sheet.getRange(&quot;C:C10&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .addRange(range2)
		 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param mergeStrategy - The merge strategy to use.
		 * 
		 * @returns this builder, for chaining
		 */
		setMergeStrategy(
			mergeStrategy: Charts.ChartMergeStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the number of rows or columns of the range that should be treated as headers.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setNumHeaders(1)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param headers - The number of rows or columns to treat as headers. Negative values cause headers
		 *     to be auto-detected.
		 * 
		 * @returns this builder, for chaining
		 */
		setNumHeaders(
			headers: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets advanced options for this chart. Lookup the chart type in the <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
		 * Gallery</a> for a listing of the available options. For example, the options for an area chart
		 * are listed <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
		 * here</a>.
		 * 
		 * <p>This method does not validate the option you specify is valid for this chart type nor if the
		 * value is of the correct format/structure.
		 * 
		 * <p>This example shows how to change the animation duration to 1 second and set a legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
		 * builder.setOption(&#39;animation.duration&#39;, 1000);
		 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
		 * </code></pre>
		 * 
		 * @param option - The name of the option.
		 * @param value - The value of the option.
		 * 
		 * @returns this builder, for chaining
		 */
		setOption(
			option: string,
			value: object
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
		 * <code>anchorColPos</code> are 1-indexed.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param anchorRowPos - The chart's top side is anchored in this row.
		 * @param anchorColPos - The chart's left side is anchored in this column.
		 * @param offsetX - The chart's upper right-hand corner is offset by this many pixels.
		 * @param offsetY - The chart's lower left-hand corner is offset by this many pixels.
		 * 
		 * @returns this builder, for chaining
		 */
		setPosition(
			anchorRowPos: number,
			anchorColPos: number,
			offsetX: number,
			offsetY: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the range for the chart.
		 * 
		 * <p>If any data points fall outside the range, the range is expanded to include those data
		 * points.
		 * 
		 * @param start - The value for the lowest grid line of the range axis.
		 * @param end - The value for the highest grid line of the range axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setRange(
			start: Number,
			end: Number
		): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
		 * there is no stacking.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setStacked(): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the title of the chart. The title is displayed centered above the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and title to &#39;My Line Chart&#39;.
		 * var builder = Charts.newLineChart();
		 * builder.setTitle(&#39;My Line Chart&#39;)
		 * </code></pre>
		 * 
		 * @param chartTitle - the chart title.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitle(
			chartTitle: string
		): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the text style of the chart title.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets it up for a  blue, 26-point title.
		 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
		 * var style = textStyleBuilder.build();
		 * var builder = Charts.newLineChart();
		 * builder.setTitleTextStyle(style);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
		 * columns are switched. Defaults to <code>false</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setTransposeRowsAndColumns(true)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param transpose - If <code>true</code>, the rows and columns used to construct the chart are
		 *     transposed.
		 * 
		 * @returns this builder, for chaining
		 */
		setTransposeRowsAndColumns(
			transpose: Boolean
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the horizontal axis text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setXAxisTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Adds a title to the horizontal axis. The title is centered and appears below the axis value
		 * labels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis title.
		 * var builder = Charts.newLineChart();
		 * builder.setTitle(&#39;X-axis Title&#39;)
		 * </code></pre>
		 * 
		 * @param title - The title for the X-axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitle(
			title: string
		): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the horizontal axis title text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setXAxisTitleTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the vertical axis text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Adds a title to the vertical axis. The title is centered and appears to the left of the value
		 * labels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis title.
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
		 * </code></pre>
		 * 
		 * @param title - The title for the Y-axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitle(
			title: string
		): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the vertical axis title text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTitleTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
		 * axis are the vertical axis for vertical charts (such as line, area, or column) and the
		 * horizontal axis for horizontal charts (such as bar).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		useLogScale(): SpreadsheetApp.EmbeddedComboChartBuilder

	}

	class EmbeddedHistogramChartBuilder {
		private constructor();

		/**
		 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
		 * added to the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to add.
		 * 
		 * @returns this builder, for chaining
		 */
		addRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
		 * 
		 * @returns a builder for an area chart
		 */
		asAreaChart(): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
		 * 
		 * @returns a builder for a bar chart
		 */
		asBarChart(): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
		 * 
		 * @returns a builder for a column chart
		 */
		asColumnChart(): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
		 * 
		 * @returns a builder for a combo chart
		 */
		asComboChart(): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
		 * 
		 * @returns a builder for a histogram chart
		 */
		asHistogramChart(): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
		 * 
		 * @returns a builder for a line chart
		 */
		asLineChart(): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
		 * 
		 * @returns a builder for a pie chart
		 */
		asPieChart(): SpreadsheetApp.EmbeddedPieChartBuilder
		/**
		 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
		 * 
		 * @returns a builder for a scatter chart
		 */
		asScatterChart(): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
		 * 
		 * @returns a builder for a table chart
		 */
		asTableChart(): SpreadsheetApp.EmbeddedTableChartBuilder
		/**
		 * Builds the chart to reflect all changes made to it.
		 * 
		 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
		 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
		 * via <code>sheet.updateChart(chart)</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @returns the created chart, which must still be added to the spreadsheet
		 */
		build(): SpreadsheetApp.EmbeddedChart
		/**
		 * Removes all ranges from the chart this builder modifies.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This code updates the chart to use only the new ranges while preserving the existing
		 * // formatting of the chart.
		 * var chart = sheet.getCharts()[0];
		 * var newChart = chart
		 *     .modify()
		 *     .clearRanges()
		 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
		 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
		 *     .build();
		 * sheet.updateChart(newChart);
		 * </code></pre>
		 * 
		 * @returns this builder, for chaining
		 */
		clearRanges(): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Returns the current chart type.
		 * 
		 * @returns the chart type
		 */
		getChartType(): Charts.ChartType
		/**
		 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
		 * sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // This method returns the exact same data as Chart#getContainerInfo()
		 * var containerInfo = chartBuilder.getContainer();
		 * 
		 * // Logs the values we used in setPosition()
		 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
		 *           containerInfo.getAnchorColumn(),
		 *           containerInfo.getAnchorRow(),
		 *           containerInfo.getOffsetX(),
		 *           containerInfo.getOffsetY());
		 * </code></pre>
		 * 
		 * @returns an object containing the chart container's position
		 */
		getContainer(): SpreadsheetApp.ContainerInfo
		/**
		 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * var ranges = chartBuilder.getRanges();
		 * 
		 * // There&#39;s only one range as a data source for this chart,
		 * // so this logs &quot;A1:B8&quot;
		 * for (var i in ranges) {
		 *   var range = ranges[i];
		 *   Logger.log(range.getA1Notation());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of ranges that serve as the chart to be built's data source
		 */
		getRanges(): SpreadsheetApp.Range[]
		/**
		 * Removes the specified range from the chart this builder modifies. Does not throw an error if
		 * the range is not in this chart.
		 * 
		 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
		 * otherwise no change is made to the chart. This method cannot be used to partially remove values
		 * from a range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
		 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(firstRange)
		 *     // This range will render in a different color
		 *     .addRange(secondRange)
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // Note that you can use either of these two formats, but the range
		 * // MUST match up with a range that was added via addRange(), or it
		 * // will not be removed, and will not throw an exception
		 * chartBuilder.removeRange(firstRange);
		 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
		 * 
		 * var chart = chartBuilder.build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to remove.
		 * 
		 * @returns this builder, for chaining
		 */
		removeRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
		 * area or column charts), this means the horizontal axis is drawn from right to left. For
		 * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
		 * bottom. For pie charts, this means the slices are drawn counterclockwise.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
		 * var builder = Charts.newPieChart();
		 * builder.reverseCategories();
		 * </code></pre>
		 * 
		 * @returns This builder, useful for chaining.
		 */
		reverseCategories(): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the background color for the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the background color to gray
		 * var builder = Charts.newLineChart();
		 * builder.setBackgroundColor(&quot;gray&quot;);
		 * </code></pre>
		 * 
		 * @param cssValue - The CSS value for the color (such as <code>&quot;blue&quot;</code> or <code>&quot;#00f&quot;</code>).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setBackgroundColor(
			cssValue: string
		): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param type - The type to change this chart into.
		 * 
		 * @returns this builder, for chaining
		 */
		setChartType(
			type: Charts.ChartType
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the colors for the lines in the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the first two lines to be drawn in green and red,
		 * // respectively.
		 * var builder = Charts.newLineChart();
		 * builder.setColors([&quot;green&quot;, &quot;red&quot;]);
		 * </code></pre>
		 * 
		 * @param cssValues - An array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
		 *     in the array represents the color of the nth line in the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setColors(
			cssValues: string[]
		): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param strategy - The strategy to use for hidden rows and columns.
		 * 
		 * @returns this builder, for chaining
		 */
		setHiddenDimensionStrategy(
			strategy: Charts.ChartHiddenDimensionStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the position of the legend with respect to the chart. By default, there is no legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the legend position to right.
		 * var builder = Charts.newLineChart();
		 * builder.setLegendPosition(Charts.Position.RIGHT);
		 * </code></pre>
		 * 
		 * @param position - The position of the legend.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setLegendPosition(
			position: Charts.Position
		): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the text style of the chart legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets it up for a  blue, 26-point legend.
		 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
		 * var style = textStyleBuilder.build();
		 * var builder = Charts.newLineChart();
		 * builder.setLegendTextStyle(style);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the chart legend.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setLegendTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B10&quot;);
		 * var range2 = sheet.getRange(&quot;C:C10&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .addRange(range2)
		 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param mergeStrategy - The merge strategy to use.
		 * 
		 * @returns this builder, for chaining
		 */
		setMergeStrategy(
			mergeStrategy: Charts.ChartMergeStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the number of rows or columns of the range that should be treated as headers.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setNumHeaders(1)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param headers - The number of rows or columns to treat as headers. Negative values cause headers
		 *     to be auto-detected.
		 * 
		 * @returns this builder, for chaining
		 */
		setNumHeaders(
			headers: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets advanced options for this chart. Lookup the chart type in the <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
		 * Gallery</a> for a listing of the available options. For example, the options for an area chart
		 * are listed <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
		 * here</a>.
		 * 
		 * <p>This method does not validate the option you specify is valid for this chart type nor if the
		 * value is of the correct format/structure.
		 * 
		 * <p>This example shows how to change the animation duration to 1 second and set a legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
		 * builder.setOption(&#39;animation.duration&#39;, 1000);
		 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
		 * </code></pre>
		 * 
		 * @param option - The name of the option.
		 * @param value - The value of the option.
		 * 
		 * @returns this builder, for chaining
		 */
		setOption(
			option: string,
			value: object
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
		 * <code>anchorColPos</code> are 1-indexed.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param anchorRowPos - The chart's top side is anchored in this row.
		 * @param anchorColPos - The chart's left side is anchored in this column.
		 * @param offsetX - The chart's upper right-hand corner is offset by this many pixels.
		 * @param offsetY - The chart's lower left-hand corner is offset by this many pixels.
		 * 
		 * @returns this builder, for chaining
		 */
		setPosition(
			anchorRowPos: number,
			anchorColPos: number,
			offsetX: number,
			offsetY: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the range for the chart.
		 * 
		 * <p>If any data points fall outside the range, the range is expanded to include those data
		 * points.
		 * 
		 * @param start - The value for the lowest grid line of the range axis.
		 * @param end - The value for the highest grid line of the range axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setRange(
			start: Number,
			end: Number
		): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
		 * there is no stacking.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setStacked(): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the title of the chart. The title is displayed centered above the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and title to &#39;My Line Chart&#39;.
		 * var builder = Charts.newLineChart();
		 * builder.setTitle(&#39;My Line Chart&#39;)
		 * </code></pre>
		 * 
		 * @param chartTitle - the chart title.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitle(
			chartTitle: string
		): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the text style of the chart title.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets it up for a  blue, 26-point title.
		 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
		 * var style = textStyleBuilder.build();
		 * var builder = Charts.newLineChart();
		 * builder.setTitleTextStyle(style);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
		 * columns are switched. Defaults to <code>false</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setTransposeRowsAndColumns(true)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param transpose - If <code>true</code>, the rows and columns used to construct the chart are
		 *     transposed.
		 * 
		 * @returns this builder, for chaining
		 */
		setTransposeRowsAndColumns(
			transpose: Boolean
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the horizontal axis text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setXAxisTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Adds a title to the horizontal axis. The title is centered and appears below the axis value
		 * labels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis title.
		 * var builder = Charts.newLineChart();
		 * builder.setTitle(&#39;X-axis Title&#39;)
		 * </code></pre>
		 * 
		 * @param title - The title for the X-axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitle(
			title: string
		): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the horizontal axis title text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setXAxisTitleTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the vertical axis text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Adds a title to the vertical axis. The title is centered and appears to the left of the value
		 * labels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis title.
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
		 * </code></pre>
		 * 
		 * @param title - The title for the Y-axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitle(
			title: string
		): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the vertical axis title text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTitleTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
		 * axis are the vertical axis for vertical charts (such as line, area, or column) and the
		 * horizontal axis for horizontal charts (such as bar).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		useLogScale(): SpreadsheetApp.EmbeddedHistogramChartBuilder

	}

	class EmbeddedLineChartBuilder {
		private constructor();

		/**
		 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
		 * added to the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to add.
		 * 
		 * @returns this builder, for chaining
		 */
		addRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
		 * 
		 * @returns a builder for an area chart
		 */
		asAreaChart(): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
		 * 
		 * @returns a builder for a bar chart
		 */
		asBarChart(): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
		 * 
		 * @returns a builder for a column chart
		 */
		asColumnChart(): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
		 * 
		 * @returns a builder for a combo chart
		 */
		asComboChart(): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
		 * 
		 * @returns a builder for a histogram chart
		 */
		asHistogramChart(): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
		 * 
		 * @returns a builder for a line chart
		 */
		asLineChart(): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
		 * 
		 * @returns a builder for a pie chart
		 */
		asPieChart(): SpreadsheetApp.EmbeddedPieChartBuilder
		/**
		 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
		 * 
		 * @returns a builder for a scatter chart
		 */
		asScatterChart(): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
		 * 
		 * @returns a builder for a table chart
		 */
		asTableChart(): SpreadsheetApp.EmbeddedTableChartBuilder
		/**
		 * Builds the chart to reflect all changes made to it.
		 * 
		 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
		 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
		 * via <code>sheet.updateChart(chart)</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @returns the created chart, which must still be added to the spreadsheet
		 */
		build(): SpreadsheetApp.EmbeddedChart
		/**
		 * Removes all ranges from the chart this builder modifies.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This code updates the chart to use only the new ranges while preserving the existing
		 * // formatting of the chart.
		 * var chart = sheet.getCharts()[0];
		 * var newChart = chart
		 *     .modify()
		 *     .clearRanges()
		 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
		 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
		 *     .build();
		 * sheet.updateChart(newChart);
		 * </code></pre>
		 * 
		 * @returns this builder, for chaining
		 */
		clearRanges(): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Returns the current chart type.
		 * 
		 * @returns the chart type
		 */
		getChartType(): Charts.ChartType
		/**
		 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
		 * sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // This method returns the exact same data as Chart#getContainerInfo()
		 * var containerInfo = chartBuilder.getContainer();
		 * 
		 * // Logs the values we used in setPosition()
		 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
		 *           containerInfo.getAnchorColumn(),
		 *           containerInfo.getAnchorRow(),
		 *           containerInfo.getOffsetX(),
		 *           containerInfo.getOffsetY());
		 * </code></pre>
		 * 
		 * @returns an object containing the chart container's position
		 */
		getContainer(): SpreadsheetApp.ContainerInfo
		/**
		 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * var ranges = chartBuilder.getRanges();
		 * 
		 * // There&#39;s only one range as a data source for this chart,
		 * // so this logs &quot;A1:B8&quot;
		 * for (var i in ranges) {
		 *   var range = ranges[i];
		 *   Logger.log(range.getA1Notation());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of ranges that serve as the chart to be built's data source
		 */
		getRanges(): SpreadsheetApp.Range[]
		/**
		 * Removes the specified range from the chart this builder modifies. Does not throw an error if
		 * the range is not in this chart.
		 * 
		 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
		 * otherwise no change is made to the chart. This method cannot be used to partially remove values
		 * from a range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
		 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(firstRange)
		 *     // This range will render in a different color
		 *     .addRange(secondRange)
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // Note that you can use either of these two formats, but the range
		 * // MUST match up with a range that was added via addRange(), or it
		 * // will not be removed, and will not throw an exception
		 * chartBuilder.removeRange(firstRange);
		 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
		 * 
		 * var chart = chartBuilder.build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to remove.
		 * 
		 * @returns this builder, for chaining
		 */
		removeRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
		 * area or column charts), this means the horizontal axis is drawn from right to left. For
		 * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
		 * bottom. For pie charts, this means the slices are drawn counterclockwise.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
		 * var builder = Charts.newPieChart();
		 * builder.reverseCategories();
		 * </code></pre>
		 * 
		 * @returns This builder, useful for chaining.
		 */
		reverseCategories(): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the background color for the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the background color to gray
		 * var builder = Charts.newLineChart();
		 * builder.setBackgroundColor(&quot;gray&quot;);
		 * </code></pre>
		 * 
		 * @param cssValue - The CSS value for the color (such as <code>&quot;blue&quot;</code> or <code>&quot;#00f&quot;</code>).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setBackgroundColor(
			cssValue: string
		): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param type - The type to change this chart into.
		 * 
		 * @returns this builder, for chaining
		 */
		setChartType(
			type: Charts.ChartType
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the colors for the lines in the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the first two lines to be drawn in green and red,
		 * // respectively.
		 * var builder = Charts.newLineChart();
		 * builder.setColors([&quot;green&quot;, &quot;red&quot;]);
		 * </code></pre>
		 * 
		 * @param cssValues - An array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
		 *     in the array represents the color of the nth line in the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setColors(
			cssValues: string[]
		): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the style to use for curves in the chart. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/curve-style.html'>CurveStyle</a></code> for allowed curve
		 * styles.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and curves the lines in the chart.
		 * var builder = Charts.newLineChart();
		 * builder.setCurveStyle(Charts.CurveStyle.SMOOTH)
		 * </code></pre>
		 * 
		 * @param style - The style for curves in the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setCurveStyle(
			style: Charts.CurveStyle
		): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param strategy - The strategy to use for hidden rows and columns.
		 * 
		 * @returns this builder, for chaining
		 */
		setHiddenDimensionStrategy(
			strategy: Charts.ChartHiddenDimensionStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the position of the legend with respect to the chart. By default, there is no legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the legend position to right.
		 * var builder = Charts.newLineChart();
		 * builder.setLegendPosition(Charts.Position.RIGHT);
		 * </code></pre>
		 * 
		 * @param position - The position of the legend.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setLegendPosition(
			position: Charts.Position
		): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the text style of the chart legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets it up for a  blue, 26-point legend.
		 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
		 * var style = textStyleBuilder.build();
		 * var builder = Charts.newLineChart();
		 * builder.setLegendTextStyle(style);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the chart legend.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setLegendTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B10&quot;);
		 * var range2 = sheet.getRange(&quot;C:C10&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .addRange(range2)
		 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param mergeStrategy - The merge strategy to use.
		 * 
		 * @returns this builder, for chaining
		 */
		setMergeStrategy(
			mergeStrategy: Charts.ChartMergeStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the number of rows or columns of the range that should be treated as headers.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setNumHeaders(1)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param headers - The number of rows or columns to treat as headers. Negative values cause headers
		 *     to be auto-detected.
		 * 
		 * @returns this builder, for chaining
		 */
		setNumHeaders(
			headers: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets advanced options for this chart. Lookup the chart type in the <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
		 * Gallery</a> for a listing of the available options. For example, the options for an area chart
		 * are listed <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
		 * here</a>.
		 * 
		 * <p>This method does not validate the option you specify is valid for this chart type nor if the
		 * value is of the correct format/structure.
		 * 
		 * <p>This example shows how to change the animation duration to 1 second and set a legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
		 * builder.setOption(&#39;animation.duration&#39;, 1000);
		 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
		 * </code></pre>
		 * 
		 * @param option - The name of the option.
		 * @param value - The value of the option.
		 * 
		 * @returns this builder, for chaining
		 */
		setOption(
			option: string,
			value: object
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the style for points in the line. By default, points have no particular styles, and only
		 * the line is visible.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets large point style.
		 * var builder = Charts.newLineChart();
		 * builder.setPointStyle(Charts.PointStyle.LARGE);
		 * </code></pre>
		 * 
		 * @param style - The style to use for points in the line.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setPointStyle(
			style: Charts.PointStyle
		): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
		 * <code>anchorColPos</code> are 1-indexed.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param anchorRowPos - The chart's top side is anchored in this row.
		 * @param anchorColPos - The chart's left side is anchored in this column.
		 * @param offsetX - The chart's upper right-hand corner is offset by this many pixels.
		 * @param offsetY - The chart's lower left-hand corner is offset by this many pixels.
		 * 
		 * @returns this builder, for chaining
		 */
		setPosition(
			anchorRowPos: number,
			anchorColPos: number,
			offsetX: number,
			offsetY: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the range for the chart.
		 * 
		 * <p>If any data points fall outside the range, the range is expanded to include those data
		 * points.
		 * 
		 * @param start - The value for the lowest grid line of the range axis.
		 * @param end - The value for the highest grid line of the range axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setRange(
			start: Number,
			end: Number
		): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the title of the chart. The title is displayed centered above the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and title to &#39;My Line Chart&#39;.
		 * var builder = Charts.newLineChart();
		 * builder.setTitle(&#39;My Line Chart&#39;)
		 * </code></pre>
		 * 
		 * @param chartTitle - the chart title.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitle(
			chartTitle: string
		): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the text style of the chart title.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets it up for a  blue, 26-point title.
		 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
		 * var style = textStyleBuilder.build();
		 * var builder = Charts.newLineChart();
		 * builder.setTitleTextStyle(style);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
		 * columns are switched. Defaults to <code>false</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setTransposeRowsAndColumns(true)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param transpose - If <code>true</code>, the rows and columns used to construct the chart are
		 *     transposed.
		 * 
		 * @returns this builder, for chaining
		 */
		setTransposeRowsAndColumns(
			transpose: Boolean
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the horizontal axis text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setXAxisTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Adds a title to the horizontal axis. The title is centered and appears below the axis value
		 * labels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis title.
		 * var builder = Charts.newLineChart();
		 * builder.setTitle(&#39;X-axis Title&#39;)
		 * </code></pre>
		 * 
		 * @param title - The title for the X-axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitle(
			title: string
		): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the horizontal axis title text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setXAxisTitleTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the vertical axis text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Adds a title to the vertical axis. The title is centered and appears to the left of the value
		 * labels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis title.
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
		 * </code></pre>
		 * 
		 * @param title - The title for the Y-axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitle(
			title: string
		): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the vertical axis title text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTitleTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
		 * axis are the vertical axis for vertical charts (such as line, area, or column) and the
		 * horizontal axis for horizontal charts (such as bar).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		useLogScale(): SpreadsheetApp.EmbeddedLineChartBuilder

	}

	class EmbeddedPieChartBuilder {
		private constructor();

		/**
		 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
		 * added to the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to add.
		 * 
		 * @returns this builder, for chaining
		 */
		addRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
		 * 
		 * @returns a builder for an area chart
		 */
		asAreaChart(): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
		 * 
		 * @returns a builder for a bar chart
		 */
		asBarChart(): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
		 * 
		 * @returns a builder for a column chart
		 */
		asColumnChart(): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
		 * 
		 * @returns a builder for a combo chart
		 */
		asComboChart(): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
		 * 
		 * @returns a builder for a histogram chart
		 */
		asHistogramChart(): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
		 * 
		 * @returns a builder for a line chart
		 */
		asLineChart(): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
		 * 
		 * @returns a builder for a pie chart
		 */
		asPieChart(): SpreadsheetApp.EmbeddedPieChartBuilder
		/**
		 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
		 * 
		 * @returns a builder for a scatter chart
		 */
		asScatterChart(): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
		 * 
		 * @returns a builder for a table chart
		 */
		asTableChart(): SpreadsheetApp.EmbeddedTableChartBuilder
		/**
		 * Builds the chart to reflect all changes made to it.
		 * 
		 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
		 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
		 * via <code>sheet.updateChart(chart)</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @returns the created chart, which must still be added to the spreadsheet
		 */
		build(): SpreadsheetApp.EmbeddedChart
		/**
		 * Removes all ranges from the chart this builder modifies.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This code updates the chart to use only the new ranges while preserving the existing
		 * // formatting of the chart.
		 * var chart = sheet.getCharts()[0];
		 * var newChart = chart
		 *     .modify()
		 *     .clearRanges()
		 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
		 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
		 *     .build();
		 * sheet.updateChart(newChart);
		 * </code></pre>
		 * 
		 * @returns this builder, for chaining
		 */
		clearRanges(): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Returns the current chart type.
		 * 
		 * @returns the chart type
		 */
		getChartType(): Charts.ChartType
		/**
		 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
		 * sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // This method returns the exact same data as Chart#getContainerInfo()
		 * var containerInfo = chartBuilder.getContainer();
		 * 
		 * // Logs the values we used in setPosition()
		 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
		 *           containerInfo.getAnchorColumn(),
		 *           containerInfo.getAnchorRow(),
		 *           containerInfo.getOffsetX(),
		 *           containerInfo.getOffsetY());
		 * </code></pre>
		 * 
		 * @returns an object containing the chart container's position
		 */
		getContainer(): SpreadsheetApp.ContainerInfo
		/**
		 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * var ranges = chartBuilder.getRanges();
		 * 
		 * // There&#39;s only one range as a data source for this chart,
		 * // so this logs &quot;A1:B8&quot;
		 * for (var i in ranges) {
		 *   var range = ranges[i];
		 *   Logger.log(range.getA1Notation());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of ranges that serve as the chart to be built's data source
		 */
		getRanges(): SpreadsheetApp.Range[]
		/**
		 * Removes the specified range from the chart this builder modifies. Does not throw an error if
		 * the range is not in this chart.
		 * 
		 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
		 * otherwise no change is made to the chart. This method cannot be used to partially remove values
		 * from a range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
		 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(firstRange)
		 *     // This range will render in a different color
		 *     .addRange(secondRange)
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // Note that you can use either of these two formats, but the range
		 * // MUST match up with a range that was added via addRange(), or it
		 * // will not be removed, and will not throw an exception
		 * chartBuilder.removeRange(firstRange);
		 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
		 * 
		 * var chart = chartBuilder.build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to remove.
		 * 
		 * @returns this builder, for chaining
		 */
		removeRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
		 * area or column charts), this means the horizontal axis is drawn from right to left. For
		 * horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
		 * bottom. For pie charts, this means the slices are drawn counterclockwise.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
		 * var builder = Charts.newPieChart();
		 * builder.reverseCategories();
		 * </code></pre>
		 * 
		 * @returns This builder, useful for chaining.
		 */
		reverseCategories(): SpreadsheetApp.EmbeddedPieChartBuilder
		/**
		 * Sets the chart to be three-dimensional.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		set3D(): SpreadsheetApp.EmbeddedPieChartBuilder
		/**
		 * Sets the background color for the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the background color to gray
		 * var builder = Charts.newLineChart();
		 * builder.setBackgroundColor(&quot;gray&quot;);
		 * </code></pre>
		 * 
		 * @param cssValue - The CSS value for the color (such as <code>&quot;blue&quot;</code> or <code>&quot;#00f&quot;</code>).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setBackgroundColor(
			cssValue: string
		): SpreadsheetApp.EmbeddedPieChartBuilder
		/**
		 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param type - The type to change this chart into.
		 * 
		 * @returns this builder, for chaining
		 */
		setChartType(
			type: Charts.ChartType
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the colors for the lines in the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the first two lines to be drawn in green and red,
		 * // respectively.
		 * var builder = Charts.newLineChart();
		 * builder.setColors([&quot;green&quot;, &quot;red&quot;]);
		 * </code></pre>
		 * 
		 * @param cssValues - An array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
		 *     in the array represents the color of the nth line in the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setColors(
			cssValues: string[]
		): SpreadsheetApp.EmbeddedPieChartBuilder
		/**
		 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param strategy - The strategy to use for hidden rows and columns.
		 * 
		 * @returns this builder, for chaining
		 */
		setHiddenDimensionStrategy(
			strategy: Charts.ChartHiddenDimensionStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the position of the legend with respect to the chart. By default, there is no legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the legend position to right.
		 * var builder = Charts.newLineChart();
		 * builder.setLegendPosition(Charts.Position.RIGHT);
		 * </code></pre>
		 * 
		 * @param position - The position of the legend.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setLegendPosition(
			position: Charts.Position
		): SpreadsheetApp.EmbeddedPieChartBuilder
		/**
		 * Sets the text style of the chart legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets it up for a  blue, 26-point legend.
		 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
		 * var style = textStyleBuilder.build();
		 * var builder = Charts.newLineChart();
		 * builder.setLegendTextStyle(style);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the chart legend.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setLegendTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedPieChartBuilder
		/**
		 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B10&quot;);
		 * var range2 = sheet.getRange(&quot;C:C10&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .addRange(range2)
		 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param mergeStrategy - The merge strategy to use.
		 * 
		 * @returns this builder, for chaining
		 */
		setMergeStrategy(
			mergeStrategy: Charts.ChartMergeStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the number of rows or columns of the range that should be treated as headers.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setNumHeaders(1)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param headers - The number of rows or columns to treat as headers. Negative values cause headers
		 *     to be auto-detected.
		 * 
		 * @returns this builder, for chaining
		 */
		setNumHeaders(
			headers: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets advanced options for this chart. Lookup the chart type in the <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
		 * Gallery</a> for a listing of the available options. For example, the options for an area chart
		 * are listed <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
		 * here</a>.
		 * 
		 * <p>This method does not validate the option you specify is valid for this chart type nor if the
		 * value is of the correct format/structure.
		 * 
		 * <p>This example shows how to change the animation duration to 1 second and set a legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
		 * builder.setOption(&#39;animation.duration&#39;, 1000);
		 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
		 * </code></pre>
		 * 
		 * @param option - The name of the option.
		 * @param value - The value of the option.
		 * 
		 * @returns this builder, for chaining
		 */
		setOption(
			option: string,
			value: object
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
		 * <code>anchorColPos</code> are 1-indexed.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param anchorRowPos - The chart's top side is anchored in this row.
		 * @param anchorColPos - The chart's left side is anchored in this column.
		 * @param offsetX - The chart's upper right-hand corner is offset by this many pixels.
		 * @param offsetY - The chart's lower left-hand corner is offset by this many pixels.
		 * 
		 * @returns this builder, for chaining
		 */
		setPosition(
			anchorRowPos: number,
			anchorColPos: number,
			offsetX: number,
			offsetY: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the title of the chart. The title is displayed centered above the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and title to &#39;My Line Chart&#39;.
		 * var builder = Charts.newLineChart();
		 * builder.setTitle(&#39;My Line Chart&#39;)
		 * </code></pre>
		 * 
		 * @param chartTitle - the chart title.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitle(
			chartTitle: string
		): SpreadsheetApp.EmbeddedPieChartBuilder
		/**
		 * Sets the text style of the chart title.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets it up for a  blue, 26-point title.
		 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
		 * var style = textStyleBuilder.build();
		 * var builder = Charts.newLineChart();
		 * builder.setTitleTextStyle(style);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedPieChartBuilder
		/**
		 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
		 * columns are switched. Defaults to <code>false</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setTransposeRowsAndColumns(true)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param transpose - If <code>true</code>, the rows and columns used to construct the chart are
		 *     transposed.
		 * 
		 * @returns this builder, for chaining
		 */
		setTransposeRowsAndColumns(
			transpose: Boolean
		): SpreadsheetApp.EmbeddedChartBuilder

	}

	class EmbeddedScatterChartBuilder {
		private constructor();

		/**
		 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
		 * added to the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to add.
		 * 
		 * @returns this builder, for chaining
		 */
		addRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
		 * 
		 * @returns a builder for an area chart
		 */
		asAreaChart(): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
		 * 
		 * @returns a builder for a bar chart
		 */
		asBarChart(): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
		 * 
		 * @returns a builder for a column chart
		 */
		asColumnChart(): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
		 * 
		 * @returns a builder for a combo chart
		 */
		asComboChart(): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
		 * 
		 * @returns a builder for a histogram chart
		 */
		asHistogramChart(): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
		 * 
		 * @returns a builder for a line chart
		 */
		asLineChart(): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
		 * 
		 * @returns a builder for a pie chart
		 */
		asPieChart(): SpreadsheetApp.EmbeddedPieChartBuilder
		/**
		 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
		 * 
		 * @returns a builder for a scatter chart
		 */
		asScatterChart(): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
		 * 
		 * @returns a builder for a table chart
		 */
		asTableChart(): SpreadsheetApp.EmbeddedTableChartBuilder
		/**
		 * Builds the chart to reflect all changes made to it.
		 * 
		 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
		 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
		 * via <code>sheet.updateChart(chart)</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @returns the created chart, which must still be added to the spreadsheet
		 */
		build(): SpreadsheetApp.EmbeddedChart
		/**
		 * Removes all ranges from the chart this builder modifies.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This code updates the chart to use only the new ranges while preserving the existing
		 * // formatting of the chart.
		 * var chart = sheet.getCharts()[0];
		 * var newChart = chart
		 *     .modify()
		 *     .clearRanges()
		 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
		 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
		 *     .build();
		 * sheet.updateChart(newChart);
		 * </code></pre>
		 * 
		 * @returns this builder, for chaining
		 */
		clearRanges(): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Returns the current chart type.
		 * 
		 * @returns the chart type
		 */
		getChartType(): Charts.ChartType
		/**
		 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
		 * sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // This method returns the exact same data as Chart#getContainerInfo()
		 * var containerInfo = chartBuilder.getContainer();
		 * 
		 * // Logs the values we used in setPosition()
		 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
		 *           containerInfo.getAnchorColumn(),
		 *           containerInfo.getAnchorRow(),
		 *           containerInfo.getOffsetX(),
		 *           containerInfo.getOffsetY());
		 * </code></pre>
		 * 
		 * @returns an object containing the chart container's position
		 */
		getContainer(): SpreadsheetApp.ContainerInfo
		/**
		 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * var ranges = chartBuilder.getRanges();
		 * 
		 * // There&#39;s only one range as a data source for this chart,
		 * // so this logs &quot;A1:B8&quot;
		 * for (var i in ranges) {
		 *   var range = ranges[i];
		 *   Logger.log(range.getA1Notation());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of ranges that serve as the chart to be built's data source
		 */
		getRanges(): SpreadsheetApp.Range[]
		/**
		 * Removes the specified range from the chart this builder modifies. Does not throw an error if
		 * the range is not in this chart.
		 * 
		 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
		 * otherwise no change is made to the chart. This method cannot be used to partially remove values
		 * from a range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
		 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(firstRange)
		 *     // This range will render in a different color
		 *     .addRange(secondRange)
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // Note that you can use either of these two formats, but the range
		 * // MUST match up with a range that was added via addRange(), or it
		 * // will not be removed, and will not throw an exception
		 * chartBuilder.removeRange(firstRange);
		 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
		 * 
		 * var chart = chartBuilder.build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to remove.
		 * 
		 * @returns this builder, for chaining
		 */
		removeRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the background color for the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the background color to gray
		 * var builder = Charts.newLineChart();
		 * builder.setBackgroundColor(&quot;gray&quot;);
		 * </code></pre>
		 * 
		 * @param cssValue - The CSS value for the color (such as <code>&quot;blue&quot;</code> or <code>&quot;#00f&quot;</code>).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setBackgroundColor(
			cssValue: string
		): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param type - The type to change this chart into.
		 * 
		 * @returns this builder, for chaining
		 */
		setChartType(
			type: Charts.ChartType
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the colors for the lines in the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the first two lines to be drawn in green and red,
		 * // respectively.
		 * var builder = Charts.newLineChart();
		 * builder.setColors([&quot;green&quot;, &quot;red&quot;]);
		 * </code></pre>
		 * 
		 * @param cssValues - An array of color CSS values, such as <code>[&quot;red&quot;, &quot;#acf&quot;]</code>. The nth element
		 *     in the array represents the color of the nth line in the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setColors(
			cssValues: string[]
		): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param strategy - The strategy to use for hidden rows and columns.
		 * 
		 * @returns this builder, for chaining
		 */
		setHiddenDimensionStrategy(
			strategy: Charts.ChartHiddenDimensionStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the position of the legend with respect to the chart. By default, there is no legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the legend position to right.
		 * var builder = Charts.newLineChart();
		 * builder.setLegendPosition(Charts.Position.RIGHT);
		 * </code></pre>
		 * 
		 * @param position - The position of the legend.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setLegendPosition(
			position: Charts.Position
		): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the text style of the chart legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets it up for a  blue, 26-point legend.
		 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
		 * var style = textStyleBuilder.build();
		 * var builder = Charts.newLineChart();
		 * builder.setLegendTextStyle(style);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the chart legend.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setLegendTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B10&quot;);
		 * var range2 = sheet.getRange(&quot;C:C10&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .addRange(range2)
		 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param mergeStrategy - The merge strategy to use.
		 * 
		 * @returns this builder, for chaining
		 */
		setMergeStrategy(
			mergeStrategy: Charts.ChartMergeStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the number of rows or columns of the range that should be treated as headers.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setNumHeaders(1)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param headers - The number of rows or columns to treat as headers. Negative values cause headers
		 *     to be auto-detected.
		 * 
		 * @returns this builder, for chaining
		 */
		setNumHeaders(
			headers: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets advanced options for this chart. Lookup the chart type in the <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
		 * Gallery</a> for a listing of the available options. For example, the options for an area chart
		 * are listed <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
		 * here</a>.
		 * 
		 * <p>This method does not validate the option you specify is valid for this chart type nor if the
		 * value is of the correct format/structure.
		 * 
		 * <p>This example shows how to change the animation duration to 1 second and set a legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
		 * builder.setOption(&#39;animation.duration&#39;, 1000);
		 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
		 * </code></pre>
		 * 
		 * @param option - The name of the option.
		 * @param value - The value of the option.
		 * 
		 * @returns this builder, for chaining
		 */
		setOption(
			option: string,
			value: object
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the style for points in the line. By default, points have no particular styles, and only
		 * the line is visible.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets large point style.
		 * var builder = Charts.newLineChart();
		 * builder.setPointStyle(Charts.PointStyle.LARGE);
		 * </code></pre>
		 * 
		 * @param style - The style to use for points in the line.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setPointStyle(
			style: Charts.PointStyle
		): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
		 * <code>anchorColPos</code> are 1-indexed.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param anchorRowPos - The chart's top side is anchored in this row.
		 * @param anchorColPos - The chart's left side is anchored in this column.
		 * @param offsetX - The chart's upper right-hand corner is offset by this many pixels.
		 * @param offsetY - The chart's lower left-hand corner is offset by this many pixels.
		 * 
		 * @returns this builder, for chaining
		 */
		setPosition(
			anchorRowPos: number,
			anchorColPos: number,
			offsetX: number,
			offsetY: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the title of the chart. The title is displayed centered above the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and title to &#39;My Line Chart&#39;.
		 * var builder = Charts.newLineChart();
		 * builder.setTitle(&#39;My Line Chart&#39;)
		 * </code></pre>
		 * 
		 * @param chartTitle - the chart title.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitle(
			chartTitle: string
		): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the text style of the chart title.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets it up for a  blue, 26-point title.
		 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
		 * var style = textStyleBuilder.build();
		 * var builder = Charts.newLineChart();
		 * builder.setTitleTextStyle(style);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
		 * columns are switched. Defaults to <code>false</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setTransposeRowsAndColumns(true)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param transpose - If <code>true</code>, the rows and columns used to construct the chart are
		 *     transposed.
		 * 
		 * @returns this builder, for chaining
		 */
		setTransposeRowsAndColumns(
			transpose: Boolean
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Makes the horizontal axis into a logarithmic scale (requires all values to be positive).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisLogScale(): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the range for the horizontal axis of the chart.
		 * 
		 * <p>If any data points fall outside the range, the range is expanded to include those data
		 * points.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a scatter chart builder and sets the X-axis range to be 0 to 100.
		 * var builder = Charts.newTableChart();
		 * builder.setXAxisRange(0, 100);
		 * </code></pre>
		 * 
		 * @param start - The value for the lowest grid line of the horizontal axis.
		 * @param end - The value for the highest grid line of the horizontal axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisRange(
			start: Number,
			end: Number
		): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the horizontal axis text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setXAxisTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Adds a title to the horizontal axis. The title is centered and appears below the axis value
		 * labels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis title.
		 * var builder = Charts.newLineChart();
		 * builder.setTitle(&#39;X-axis Title&#39;)
		 * </code></pre>
		 * 
		 * @param title - The title for the X-axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitle(
			title: string
		): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the horizontal axis title text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setXAxisTitleTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Makes the vertical axis into a logarithmic scale (requires all values to be positive).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisLogScale(): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the range for the vertical axis of the chart. If any data points fall outside the range,
		 * the range is expanded to include those data points.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a scatter chart builder and sets the Y-axis range to be 0 to 100.
		 * var builder = Charts.newTableChart();
		 * builder.setYAxisRange(0, 100);
		 * </code></pre>
		 * 
		 * @param start - The value for the lowest grid line of the vertical axis.
		 * @param end - The value for the highest grid line of the vertical axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisRange(
			start: Number,
			end: Number
		): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the vertical axis text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Adds a title to the vertical axis. The title is centered and appears to the left of the value
		 * labels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis title.
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTitle(&#39;Y-axis Title&#39;)
		 * </code></pre>
		 * 
		 * @param title - The title for the Y-axis.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitle(
			title: string
		): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the vertical axis title text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).setFontSize(18).build();
		 * var builder = Charts.newLineChart();
		 * builder.setYAxisTitleTextStyle(textStyle);
		 * </code></pre>
		 * 
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): SpreadsheetApp.EmbeddedScatterChartBuilder

	}

	class EmbeddedTableChartBuilder {
		private constructor();

		/**
		 * Adds a range to the chart this builder modifies. Does not add the range if it has already been
		 * added to the chart.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to add.
		 * 
		 * @returns this builder, for chaining
		 */
		addRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the chart type to AreaChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html'>EmbeddedAreaChartBuilder</a></code>.
		 * 
		 * @returns a builder for an area chart
		 */
		asAreaChart(): SpreadsheetApp.EmbeddedAreaChartBuilder
		/**
		 * Sets the chart type to BarChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html'>EmbeddedBarChartBuilder</a></code>.
		 * 
		 * @returns a builder for a bar chart
		 */
		asBarChart(): SpreadsheetApp.EmbeddedBarChartBuilder
		/**
		 * Sets the chart type to ColumnChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html'>EmbeddedColumnChartBuilder</a></code>.
		 * 
		 * @returns a builder for a column chart
		 */
		asColumnChart(): SpreadsheetApp.EmbeddedColumnChartBuilder
		/**
		 * Sets the chart type to ComboChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html'>EmbeddedComboChartBuilder</a></code>.
		 * 
		 * @returns a builder for a combo chart
		 */
		asComboChart(): SpreadsheetApp.EmbeddedComboChartBuilder
		/**
		 * Sets the chart type to HistogramChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html'>EmbeddedHistogramChartBuilder</a></code>.
		 * 
		 * @returns a builder for a histogram chart
		 */
		asHistogramChart(): SpreadsheetApp.EmbeddedHistogramChartBuilder
		/**
		 * Sets the chart type to LineChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html'>EmbeddedLineChartBuilder</a></code>.
		 * 
		 * @returns a builder for a line chart
		 */
		asLineChart(): SpreadsheetApp.EmbeddedLineChartBuilder
		/**
		 * Sets the chart type to PieChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html'>EmbeddedPieChartBuilder</a></code>.
		 * 
		 * @returns a builder for a pie chart
		 */
		asPieChart(): SpreadsheetApp.EmbeddedPieChartBuilder
		/**
		 * Sets the chart type to ScatterChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html'>EmbeddedScatterChartBuilder</a></code>.
		 * 
		 * @returns a builder for a scatter chart
		 */
		asScatterChart(): SpreadsheetApp.EmbeddedScatterChartBuilder
		/**
		 * Sets the chart type to TableChart and returns an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html'>EmbeddedTableChartBuilder</a></code>.
		 * 
		 * @returns a builder for a table chart
		 */
		asTableChart(): SpreadsheetApp.EmbeddedTableChartBuilder
		/**
		 * Builds the chart to reflect all changes made to it.
		 * 
		 * <p>This method does not automatically draw the chart on top of the spreadsheet. A new chart
		 * must be inserted via <code>sheet.insertChart(chart)</code>, and an existing chart should be updated
		 * via <code>sheet.updateChart(chart)</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @returns the created chart, which must still be added to the spreadsheet
		 */
		build(): SpreadsheetApp.EmbeddedChart
		/**
		 * Removes all ranges from the chart this builder modifies.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This code updates the chart to use only the new ranges while preserving the existing
		 * // formatting of the chart.
		 * var chart = sheet.getCharts()[0];
		 * var newChart = chart
		 *     .modify()
		 *     .clearRanges()
		 *     .addRange(sheet.getRange(&quot;A1:A5&quot;))
		 *     .addRange(sheet.getRange(&quot;B1:B5&quot;))
		 *     .build();
		 * sheet.updateChart(newChart);
		 * </code></pre>
		 * 
		 * @returns this builder, for chaining
		 */
		clearRanges(): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets whether to enable paging through the data.
		 * 
		 * <p>The default behavior is paging disabled. If paging is enabled the default page size is 10.
		 * 
		 * @param enablePaging - <code>true</code> if paging should be enabled, <code>false</code> otherwise.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		enablePaging(
			enablePaging: Boolean
		): SpreadsheetApp.EmbeddedTableChartBuilder
		/**
		 * Enables paging and sets the number of rows in each page.
		 * 
		 * <p>The default page size is 10.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a table chart builder and enables paging with page size of 5.
		 * var builder = Charts.newTableChart();
		 * builder.enablePaging(5);
		 * </code></pre>
		 * 
		 * @param pageSize - The number of rows in each page of the table.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		enablePaging(
			pageSize: number
		): SpreadsheetApp.EmbeddedTableChartBuilder
		/**
		 * Enables paging, sets the number of rows in each page and the first table page to display (page
		 * numbers are zero based).
		 * 
		 * <p>The default page size is 10, and the default start page is 0.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a table chart builder and enables paging with page size of 5 and displays page 2
		 * // first.
		 * var builder = Charts.newTableChart();
		 * builder.enablePaging(5, 2);
		 * </code></pre>
		 * 
		 * @param pageSize - The number of rows in each page of the table.
		 * @param startPage - The first table page to display (page numbers are zero-based).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		enablePaging(
			pageSize: number,
			startPage: number
		): SpreadsheetApp.EmbeddedTableChartBuilder

		/**
		 * Adds basic support for right-to-left languages (such as Arabic or Hebrew) by reversing the
		 * column order of the table, so that column zero is the right-most column, and the last column is
		 * the left-most column.
		 * 
		 * <p>This does not affect the column index in the underlying data, only the order of display.
		 * Full bi-directional (BiDi) language display is not supported by the table visualization even
		 * with this option. This option is ignored if you enable paging (using the page option), or if
		 * the table has scroll bars because you have specified height and width options smaller than the
		 * required table size. The default behavior is RTL support disabled.
		 * 
		 * @param rtlEnabled - <code>true</code> if right-to-left support should be enabled, <code>false</code>
		 *     otherwise.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		enableRtlTable(
			rtlEnabled: Boolean
		): SpreadsheetApp.EmbeddedTableChartBuilder
		/**
		 * Sets whether to sort columns when the user clicks a column heading.
		 * 
		 * <p>If sorting is enabled, when users click on the column header the rows are automatically
		 * sorted. The default behavior is sorting enabled.
		 * 
		 * @param enableSorting - <code>true</code> to enable sorting by clicking on column headers, <code>false</code> otherwise.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		enableSorting(
			enableSorting: Boolean
		): SpreadsheetApp.EmbeddedTableChartBuilder
		/**
		 * Returns the current chart type.
		 * 
		 * @returns the chart type
		 */
		getChartType(): Charts.ChartType
		/**
		 * Return the chart <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/container-info.html'>ContainerInfo</a></code>, which encapsulates where the chart appears on the
		 * sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // This method returns the exact same data as Chart#getContainerInfo()
		 * var containerInfo = chartBuilder.getContainer();
		 * 
		 * // Logs the values we used in setPosition()
		 * Logger.log(&quot;Anchor Column: %s\r\nAnchor Row %s\r\nOffset X %s\r\nOffset Y %s&quot;,
		 *           containerInfo.getAnchorColumn(),
		 *           containerInfo.getAnchorRow(),
		 *           containerInfo.getOffsetX(),
		 *           containerInfo.getOffsetY());
		 * </code></pre>
		 * 
		 * @returns an object containing the chart container's position
		 */
		getContainer(): SpreadsheetApp.ContainerInfo
		/**
		 * Returns a copy of the list of ranges currently providing data for this chart. Use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html#addRange(Range)'>addRange(range)</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html#removeRange(Range)'>removeRange(range)</a></code> to modify this list.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B8&quot;))
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * var ranges = chartBuilder.getRanges();
		 * 
		 * // There&#39;s only one range as a data source for this chart,
		 * // so this logs &quot;A1:B8&quot;
		 * for (var i in ranges) {
		 *   var range = ranges[i];
		 *   Logger.log(range.getA1Notation());
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of ranges that serve as the chart to be built's data source
		 */
		getRanges(): SpreadsheetApp.Range[]
		/**
		 * Removes the specified range from the chart this builder modifies. Does not throw an error if
		 * the range is not in this chart.
		 * 
		 * <p>The range removed must match up with a range added via <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html#addRange(Range)'>addRange(range)</a></code>;
		 * otherwise no change is made to the chart. This method cannot be used to partially remove values
		 * from a range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var firstRange = sheet.getRange(&quot;A1:B5&quot;);
		 * var secondRange = sheet.getRange(&quot;A6:B8&quot;);
		 * 
		 * var chartBuilder = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(firstRange)
		 *     // This range will render in a different color
		 *     .addRange(secondRange)
		 *     .setPosition(5, 5, 0, 0);
		 * 
		 * // Note that you can use either of these two formats, but the range
		 * // MUST match up with a range that was added via addRange(), or it
		 * // will not be removed, and will not throw an exception
		 * chartBuilder.removeRange(firstRange);
		 * chartBuilder.removeRange(sheet.getRange(&quot;A6:B8&quot;));
		 * 
		 * var chart = chartBuilder.build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param range - The range to remove.
		 * 
		 * @returns this builder, for chaining
		 */
		removeRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Changes the type of chart. Not all embedded chart types are currently supported. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html'>ChartType</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param type - The type to change this chart into.
		 * 
		 * @returns this builder, for chaining
		 */
		setChartType(
			type: Charts.ChartType
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the row number for the first row in the data table.
		 * 
		 * <p>The default row number of the first row is 1.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a table chart builder and sets the first row to be 2.
		 * var builder = Charts.newTableChart();
		 * builder.setFirstRowNumber(2);
		 * </code></pre>
		 * 
		 * @param number - The row number for the first row in the data table.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setFirstRowNumber(
			number: number
		): SpreadsheetApp.EmbeddedTableChartBuilder
		/**
		 * Sets the strategy to use for hidden rows and columns. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html'>IGNORE_ROWS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param strategy - The strategy to use for hidden rows and columns.
		 * 
		 * @returns this builder, for chaining
		 */
		setHiddenDimensionStrategy(
			strategy: Charts.ChartHiddenDimensionStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the index of the column according to which the table should be initially sorted
		 * (ascending).
		 * 
		 * <p>The column os sorted in ascending order and is marked with a small arrow indicating that.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a table chart builder and sorts it by the second column (ascending).
		 * var builder = Charts.newTableChart();
		 * builder.setInitialSortingAscending(2);
		 * </code></pre>
		 * 
		 * @param column - The number of the column according to which the table should be initially sorted.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setInitialSortingAscending(
			column: number
		): SpreadsheetApp.EmbeddedTableChartBuilder
		/**
		 * Sets the index of the column according to which the table should be initially sorted
		 * (descending).
		 * 
		 * <p>The column os sorted in descending order and is marked with a a small arrow indicating that.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a table chart builder and sorts it by the second column (descending).
		 * var builder = Charts.newTableChart();
		 * builder.setInitialSortingDescending(2);
		 * </code></pre>
		 * 
		 * @param column - The number of the column according to which the table should be initially sorted.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setInitialSortingDescending(
			column: number
		): SpreadsheetApp.EmbeddedTableChartBuilder
		/**
		 * Sets the merge strategy to use when more than one range exists. If <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_ROWS</a></code>, rows are merged; if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>, columns are merged. Defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html'>MERGE_COLUMNS</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B10&quot;);
		 * var range2 = sheet.getRange(&quot;C:C10&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .addRange(range2)
		 *     .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param mergeStrategy - The merge strategy to use.
		 * 
		 * @returns this builder, for chaining
		 */
		setMergeStrategy(
			mergeStrategy: Charts.ChartMergeStrategy
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the number of rows or columns of the range that should be treated as headers.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setNumHeaders(1)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param headers - The number of rows or columns to treat as headers. Negative values cause headers
		 *     to be auto-detected.
		 * 
		 * @returns this builder, for chaining
		 */
		setNumHeaders(
			headers: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets advanced options for this chart. Lookup the chart type in the <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery">Charts API Chart
		 * Gallery</a> for a listing of the available options. For example, the options for an area chart
		 * are listed <a
		 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options">
		 * here</a>.
		 * 
		 * <p>This method does not validate the option you specify is valid for this chart type nor if the
		 * value is of the correct format/structure.
		 * 
		 * <p>This example shows how to change the animation duration to 1 second and set a legend.
		 * 
		 * <pre class="prettyprint"><code>
		 * builder.setOption(&#39;title&#39;, &#39;Earnings projections&#39;);
		 * builder.setOption(&#39;animation.duration&#39;, 1000);
		 * builder.setOption(&#39;legend&#39;, {position: &#39;top&#39;, textStyle: {color: &#39;blue&#39;, fontSize: 16}});
		 * </code></pre>
		 * 
		 * @param option - The name of the option.
		 * @param value - The value of the option.
		 * 
		 * @returns this builder, for chaining
		 */
		setOption(
			option: string,
			value: object
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets the position, changing where the chart appears on the sheet. <code>anchorRowPos</code> and
		 * <code>anchorColPos</code> are 1-indexed.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param anchorRowPos - The chart's top side is anchored in this row.
		 * @param anchorColPos - The chart's left side is anchored in this column.
		 * @param offsetX - The chart's upper right-hand corner is offset by this many pixels.
		 * @param offsetY - The chart's lower left-hand corner is offset by this many pixels.
		 * 
		 * @returns this builder, for chaining
		 */
		setPosition(
			anchorRowPos: number,
			anchorColPos: number,
			offsetX: number,
			offsetY: number
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets whether the chart's rows and columns are transposed. If set to <code>true</code>, the rows and
		 * columns are switched. Defaults to <code>false</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B5&quot;);
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(range)
		 *     .setTransposeRowsAndColumns(true)
		 *     .setPosition(5, 5, 0, 0)
		 *     .build();
		 * 
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param transpose - If <code>true</code>, the rows and columns used to construct the chart are
		 *     transposed.
		 * 
		 * @returns this builder, for chaining
		 */
		setTransposeRowsAndColumns(
			transpose: Boolean
		): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Sets whether to show the row number as the first column of the table.
		 * 
		 * <p>The default behavior is not showing row numbers.
		 * 
		 * @param showRowNumber - <code>true</code> if the first column of the table should show the row number,
		 *     <code>false</code> otherwise.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		showRowNumberColumn(
			showRowNumber: Boolean
		): SpreadsheetApp.EmbeddedTableChartBuilder
		/**
		 * Sets whether alternating color style is assigned to odd and even rows of a table chart.
		 * 
		 * <p>The default behavior is the rows having alternating color style.
		 * 
		 * @param alternate - <code>true</code> if color styles should be alternating, <code>false</code> otherwise.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		useAlternatingRowStyle(
			alternate: Boolean
		): SpreadsheetApp.EmbeddedTableChartBuilder

	}

	class Filter {
		private constructor();

		/**
		 * Gets the filter criteria on the specified column, or <code>null</code> if no filter criteria is set.
		 * 
		 * @param columnPosition - The 1-indexed position of the column.
		 * 
		 * @returns the filter criteria
		 */
		getColumnFilterCriteria(
			columnPosition: number
		): SpreadsheetApp.FilterCriteria
		/**
		 * Gets the range this filter is applied to.
		 * 
		 * @returns the range
		 */
		getRange(): SpreadsheetApp.Range
		/**
		 * Removes this filter.
		 */
		remove(): void
		/**
		 * Removes the filter criteria from the specified column.
		 * 
		 * @param columnPosition - The 1-indexed position of the column.
		 * 
		 * @returns the filter, for chaining
		 */
		removeColumnFilterCriteria(
			columnPosition: number
		): SpreadsheetApp.Filter
		/**
		 * Sets the filter criteria on the specified column.
		 * 
		 * @param columnPosition - The 1-indexed position of the column.
		 * @param filterCriteria - The filter criteria to set. If <code>null</code>, remove filter criteria from
		 *     the specified column; alternatively, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter.html#removeColumnFilterCriteria(Integer)'>removeColumnFilterCriteria(columnPosition)</a></code>.
		 * 
		 * @returns the filter, for chaining
		 */
		setColumnFilterCriteria(
			columnPosition: number,
			filterCriteria: SpreadsheetApp.FilterCriteria
		): SpreadsheetApp.Filter
		/**
		 * Sorts the filtered range by the specified column, excluding the first row (the header row) in
		 * the range this filter is applied to.
		 * 
		 * @param columnPosition - The 1-indexed position of the column.
		 * @param ascending - If <code>true</code>, sort the filtered range in ascending order; if <code>false</code>,
		 *     sort the filtered range in descending order.
		 * 
		 * @returns the filter, for chaining
		 */
		sort(
			columnPosition: number,
			ascending: Boolean
		): SpreadsheetApp.Filter
		/**
		 * Gets the sort specification on the specified column, or <code>null</code> if no sort spec is set.
		 * 
		 * @param columnPosition - The 1-indexed position of the column.
		 * 
		 * @returns The sort specification.
		 */
		getColumnSortSpec(
			columnPosition: number
		): SpreadsheetApp.SortSpec

	}

	class FilterCriteria {
		private constructor();

		/**
		 * Creates a builder for a filter criteria based on this filter criteria's settings.
		 * 
		 * @returns a filter criteria builder based on this filter criteria
		 */
		copy(): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Returns the boolean criteria type as defined in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria.html'>BooleanCriteria</a></code> enum. To get the
		 * arguments for the criteria, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria.html#getCriteriaValues()'>getCriteriaValues()</a></code>. To use these values to create or
		 * modify a filter criteria, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#withCriteria(BooleanCriteria,Object)'>FilterCriteriaBuilder.withCriteria(criteria, args)</a></code>.
		 * 
		 * @returns the type of boolean criteria
		 */
		getCriteriaType(): SpreadsheetApp.BooleanCriteria
		/**
		 * Returns an array of arguments for the boolean criteria. To get the boolean criteria type, use
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria.html#getCriteriaType()'>getCriteriaType()</a></code>. To use these values to create or modify a filter criteria, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#withCriteria(BooleanCriteria,Object)'>FilterCriteriaBuilder.withCriteria(criteria, args)</a></code>.
		 * 
		 * @returns an array of arguments appropriate to the boolean criteria type; the number of arguments
		 *     and their type match the corresponding <code>when...()</code> method of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html'>FilterCriteriaBuilder</a></code> class
		 */
		getCriteriaValues(): object[]
		/**
		 * Returns the values to hide.
		 * 
		 * @returns an array of values to hide
		 */
		getHiddenValues(): string[]
		/**
		 * Returns the background color used as a filter criteria. Cells with this background color remain
		 * visible.
		 * 
		 * @returns The background color used as a filter criteria.
		 */
		getVisibleBackgroundColor(): SpreadsheetApp.Color
		/**
		 * Returns the foreground color used as a filter criteria. Cells with this foreground color remain
		 * visible.
		 * 
		 * @returns The foreground color used as a filter criteria.
		 */
		getVisibleForegroundColor(): SpreadsheetApp.Color
		/**
		 * Returns the values to show.
		 * 
		 * @returns an array of values to show
		 */
		getVisibleValues(): string[]

	}

	class FilterCriteriaBuilder {
		private constructor();

		/**
		 * Constructs a filter criteria from the settings supplied to the builder.
		 * 
		 * @returns A representation of the filter criteria.
		 */
		build(): SpreadsheetApp.FilterCriteria
		/**
		 * Creates a builder for a filter criteria based on this filter criteria's settings.
		 * 
		 * @returns a filter criteria builder based on this filter criteria
		 */
		copy(): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Returns the boolean criteria type as defined in the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria.html'>BooleanCriteria</a></code> enum. To get the
		 * arguments for the criteria, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#getCriteriaValues()'>getCriteriaValues()</a></code>. To use these values to create or
		 * modify a filter criteria, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#withCriteria(BooleanCriteria,Object)'>withCriteria(criteria, args)</a></code>.
		 * 
		 * @returns the type of boolean criteria
		 */
		getCriteriaType(): SpreadsheetApp.BooleanCriteria
		/**
		 * Returns an array of arguments for the boolean criteria. To get the boolean criteria type, use
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#getCriteriaType()'>getCriteriaType()</a></code>. To use these values to create or modify a filter criteria, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#withCriteria(BooleanCriteria,Object)'>withCriteria(criteria, args)</a></code>.
		 * 
		 * @returns an array of arguments appropriate to the boolean criteria type; the number of arguments
		 *     and their type match the corresponding <code>when...()</code> method of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html'>FilterCriteriaBuilder</a></code> class
		 */
		getCriteriaValues(): object[]
		/**
		 * Returns the values to hide.
		 * 
		 * @returns an array of values to hide
		 */
		getHiddenValues(): string[]
		/**
		 * Returns the background color used as a filter criteria. Cells with this background color remain
		 * visible.
		 * 
		 * @returns The background color used as a filter criteria.
		 */
		getVisibleBackgroundColor(): SpreadsheetApp.Color
		/**
		 * Returns the foreground color used as a filter criteria. Cells with this foreground color remain
		 * visible.
		 * 
		 * @returns The foreground color used as a filter criteria.
		 */
		getVisibleForegroundColor(): SpreadsheetApp.Color
		/**
		 * Returns the values to show.
		 * 
		 * @returns an array of values to show
		 */
		getVisibleValues(): string[]
		/**
		 * Sets the values to hide. Clears any existing visible or hidden values.
		 * 
		 * @param values - The list of values to hide.
		 * 
		 * @returns This builder, for chaining.
		 */
		setHiddenValues(
			values: string[]
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the background color used as a filter criteria. Cells with this background color remain
		 * visible. Setting a background color filter criteria removes the current color filter criteria
		 * from this builder.
		 * 
		 * @param visibleBackgroundColor - The background color to set. This must be an RGB-style color,
		 *     theme colors are not supported.
		 * 
		 * @returns This builder, for chaining.
		 */
		setVisibleBackgroundColor(
			visibleBackgroundColor: SpreadsheetApp.Color
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the foreground color used as a filter criteria. Cells with this foreground color remain
		 * visible. Setting a foreground color filter criteria removes the current color filter criteria
		 * from this builder.
		 * 
		 * @param visibleForegroundColor - The foreground color to set. This must be an RGB-style color,
		 *     theme colors are not supported.
		 * 
		 * @returns This builder, for chaining.
		 */
		setVisibleForegroundColor(
			visibleForegroundColor: SpreadsheetApp.Color
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the values to show. It clears any existing visible or hidden values.
		 * 
		 * @param values - The list of values to show.
		 * 
		 * @returns This builder, for chaining.
		 */
		setVisibleValues(
			values: string[]
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell is empty.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenCellEmpty(): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell is not empty.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenCellNotEmpty(): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell date is after the specified value.
		 * 
		 * @param date - The latest date.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenDateAfter(
			date: Date
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell date is after the specified relative
		 * date.
		 * 
		 * @param date - The latest date relative to the date type selected.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenDateAfter(
			date: SpreadsheetApp.RelativeDate
		): SpreadsheetApp.FilterCriteriaBuilder

		/**
		 * Sets the filter criteria to show cells where the cell date is before the specified date.
		 * 
		 * @param date - The earliest unacceptable date.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenDateBefore(
			date: Date
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where a cell date is before the specified relative date.
		 * 
		 * @param date - The latest date relative to the date type selected.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenDateBefore(
			date: SpreadsheetApp.RelativeDate
		): SpreadsheetApp.FilterCriteriaBuilder

		/**
		 * Sets the filter criteria to show cells where a cell date is equal to the specified date.
		 * 
		 * @param date - The sole acceptable date.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenDateEqualTo(
			date: Date
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where a cell date is equal to the specified relative
		 * date.
		 * 
		 * @param date - The latest date relative to the date type selected.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenDateEqualTo(
			date: SpreadsheetApp.RelativeDate
		): SpreadsheetApp.FilterCriteriaBuilder

		/**
		 * Sets the filter criteria to show cells where the cell date is equal to any of the specified
		 * dates.
		 * 
		 * @param dates - The acceptable values.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenDateEqualToAny(
			dates: Date[]
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell date is not equal to the specified date.
		 * 
		 * @param date - The latest date relative to the date type selected.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenDateNotEqualTo(
			date: Date
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell date is not equal to any of the specified
		 * dates.
		 * 
		 * @param dates - The acceptable values.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenDateNotEqualToAny(
			dates: Date[]
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the specified formula (such as <code>=B:B&lt;C:C</code>)
		 * evaluates to <code>true</code>.
		 * 
		 * @param formula - A custom formula that evaluates to <code>true</code> if the input is valid.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenFormulaSatisfied(
			formula: string
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell number is falls between, or is either of,
		 * two specified numbers.
		 * 
		 * @param start - The lowest acceptable value.
		 * @param end - The highest acceptable value.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenNumberBetween(
			start: Number,
			end: Number
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell number is equal to the specified value.
		 * 
		 * @param number - The sole acceptable value.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenNumberEqualTo(
			number: Number
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell number is equal to any of the specified
		 * numbers.
		 * 
		 * @param numbers - The acceptable values.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenNumberEqualToAny(
			numbers: Number[]
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell number is greater than the specified
		 * value.
		 * 
		 * @param number - The highest unacceptable value.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenNumberGreaterThan(
			number: Number
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell number is greater than or equal to the
		 * specified value.
		 * 
		 * @param number - The lowest acceptable value.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenNumberGreaterThanOrEqualTo(
			number: Number
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the conditional conditional format rule to show cells where the cell number is less than
		 * the specified value.
		 * 
		 * @param number - The lowest unacceptable value.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenNumberLessThan(
			number: Number
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell number is less than or equal to the
		 * specified value.
		 * 
		 * @param number - The highest acceptable value.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenNumberLessThanOrEqualTo(
			number: Number
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell number does not fall between, and is
		 * neither of, two specified numbers.
		 * 
		 * @param start - The lowest unacceptable value.
		 * @param end - The highest unacceptable value.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenNumberNotBetween(
			start: Number,
			end: Number
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell number is not equal to the specified
		 * value.
		 * 
		 * @param number - The sole unacceptable value.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenNumberNotEqualTo(
			number: Number
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell number is not equal to any of the
		 * specified numbers.
		 * 
		 * @param numbers - The unacceptable values.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenNumberNotEqualToAny(
			numbers: Number[]
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell text contains the specified text.
		 * 
		 * @param text - The value that the input must contain.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenTextContains(
			text: string
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell text does not contain the specified text.
		 * 
		 * @param text - The value that the input must not contain.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenTextDoesNotContain(
			text: string
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell text ends with the specified text.
		 * 
		 * @param text - Text to compare against the end of the string.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenTextEndsWith(
			text: string
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell text is equal to the specified text.
		 * 
		 * @param text - The sole acceptable value.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenTextEqualTo(
			text: string
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell text is equal to any of the specified
		 * values.
		 * 
		 * @param texts - The acceptable values.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenTextEqualToAny(
			texts: string[]
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell text is not equal to the specified text.
		 * 
		 * @param text - The unacceptable value.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenTextNotEqualTo(
			text: string
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell text is not equal to any of the specified
		 * values.
		 * 
		 * @param texts - The unacceptable values.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenTextNotEqualToAny(
			texts: string[]
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the filter criteria to show cells where the cell text starts with the specified text.
		 * 
		 * @param text - Text to compare against the beginning of the string.
		 * 
		 * @returns This builder, for chaining.
		 */
		whenTextStartsWith(
			text: string
		): SpreadsheetApp.FilterCriteriaBuilder
		/**
		 * Sets the boolean criteria to criteria defined by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria.html'>BooleanCriteria</a></code> values, typically
		 * taken from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#getCriteriaType()'>criteria</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#getCriteriaValues()'>arguments</a></code> of an existing criteria.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Builds a filter criteria that is based on an existing criteria.
		 * 
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var criteria = sheet.getFilter().getColumnFilterCriteria(1);
		 * var newCriteria = SpreadsheetApp.newFilterCriteria()
		 *     .withCriteria(criteria.getCriteriaType(), criteria.getCriteriaValues())
		 *     .setHiddenValues([&#39;c&#39;])
		 *     .build();
		 * </code></pre>
		 * 
		 * @param criteria - The type of boolean criteria.
		 * @param args - An array of arguments appropriate to the criteria type; the number of arguments and
		 *     their type match the corresponding <code>when...()</code> method above.
		 * 
		 * @returns This builder, for chaining.
		 */
		withCriteria(
			criteria: SpreadsheetApp.BooleanCriteria,
			args: object[]
		): SpreadsheetApp.FilterCriteriaBuilder

	}

	enum FrequencyType {
		/**
		 * Refresh daily.
		 */
		DAILY = "DAILY",
		/**
		 * The frequency type is unsupported.
		 */
		FREQUENCY_TYPE_UNSUPPORTED = "FREQUENCY_TYPE_UNSUPPORTED",
		/**
		 * Refresh monthly, on given days of the month.
		 */
		MONTHLY = "MONTHLY",
		/**
		 * Refresh weekly, on given days of the week.
		 */
		WEEKLY = "WEEKLY",
	}

	class GradientCondition {
		private constructor();

		/**
		 * Gets the color set for the maximum value of this gradient condition. Returns an empty string if
		 * the color hasn't been set.
		 * 
		 * @returns the color set for the maximum value of this gradient condition or an empty string
		 */
		getMaxColor(): string
		/**
		 * Gets the color set for the maximum value of this gradient condition. Returns <code>null</code> if
		 * the color hasn't been set.
		 * 
		 * @returns The color set for the maximum value of this gradient condition or <code>null</code>.
		 */
		getMaxColorObject(): SpreadsheetApp.Color
		/**
		 * Gets the interpolation type for the maximum value of this gradient condition. Returns <code>null</code> if the gradient max type hasn't been set.
		 * 
		 * @returns the interpolation type for the maximum value of this gradient condition or <code>null</code>
		 */
		getMaxType(): SpreadsheetApp.InterpolationType
		/**
		 * Gets the max value of this gradient condition. Returns an empty string if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/interpolation-type.html'>InterpolationType</a></code> is <code>MAX</code> or if the max value hasn't been
		 * set.
		 * 
		 * @returns the maximum value if specified or an empty string
		 */
		getMaxValue(): string
		/**
		 * Gets the color set for the mid-point value of this gradient condition. Returns an empty string
		 * if the color hasn't been set.
		 * 
		 * @returns the color set for the midpoint value of this gradient condition or an empty string
		 */
		getMidColor(): string
		/**
		 * Gets the color set for the midpoint value of this gradient condition. Returns <code>null</code> if
		 * the color hasn't been set.
		 * 
		 * @returns The color set for the midpoint value of this gradient condition or <code>null</code>.
		 */
		getMidColorObject(): SpreadsheetApp.Color
		/**
		 * Gets the interpolation type for the mid-point value of this gradient condition. Returns <code>null</code> if the gradient mid type hasn't been set.
		 * 
		 * @returns the interpolation type for the mid-point value of this gradient condition or <code>null</code>
		 */
		getMidType(): SpreadsheetApp.InterpolationType
		/**
		 * Gets the mid-point value of this gradient condition. Returns an empty string if the gradient
		 * mid value hasn't been set.
		 * 
		 * @returns the mid-point value or an empty string
		 */
		getMidValue(): string
		/**
		 * Gets the color set for the minimum value of this gradient condition. Returns an empty string if
		 * the color hasn't been set.
		 * 
		 * @returns the color set for the minimum value of this gradient condition or an empty string
		 */
		getMinColor(): string
		/**
		 * Gets the color set for the minimum value of this gradient condition. Returns <code>null</code> if
		 * the color hasn't been set.
		 * 
		 * @returns The color set for the minimum value of this gradient condition or <code>null</code>.
		 */
		getMinColorObject(): SpreadsheetApp.Color
		/**
		 * Gets the interpolation type for the minimum value of this gradient condition. Returns <code>null</code> if the gradient min type hasn't been set.
		 * 
		 * @returns the interpolation type for the minimum value of this gradient condition or <code>null</code>
		 */
		getMinType(): SpreadsheetApp.InterpolationType
		/**
		 * Gets the minimum value of this gradient condition. Returns an empty string if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/interpolation-type.html'>InterpolationType</a></code> is <code>MIN</code> or if the min value hasn't been
		 * set.
		 * 
		 * @returns the minimum value if specified or an empty string
		 */
		getMinValue(): string

	}

	class Group {
		private constructor();

		/**
		 * Collapses this group.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * var range = sheet.getRange(2:3);
		 * range.shiftRowGroupDepth(1);
		 * var group = sheet.getRowGroupAt(2, 1);
		 * 
		 * // Collapses this group.
		 * group.collapse();
		 * </code></pre>
		 * 
		 * @returns this group, for chaining
		 */
		collapse(): SpreadsheetApp.Group
		/**
		 * Expands this group.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * var range = sheet.getRange(2:3);
		 * range.shiftRowGroupDepth(1);
		 * var group = sheet.getRowGroupAt(2, 1);
		 * 
		 * // Expands this group.
		 * group.expand();
		 * </code></pre>
		 * 
		 * @returns this group, for chaining
		 */
		expand(): SpreadsheetApp.Group
		/**
		 * Returns the control toggle index of this group. This is the index just before the range when
		 * the control toggle is shown before the group, or the index just after the range otherwise.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * sheet.setRowGroupControlAfter(true);
		 * var range = sheet.getRange(2:3);
		 * range.shiftRowGroupDepth(1);
		 * var group = sheet.getRowGroupAt(2, 1);
		 * 
		 * // Returns 4
		 * var controlIndex = group.getControlIndex();
		 * </code></pre>
		 * 
		 * @returns the control toggle index of this group
		 */
		getControlIndex(): number
		/**
		 * Returns the depth of this group.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * var range = sheet.getRange(2:3);
		 * range.shiftRowGroupDepth(1);
		 * var group = sheet.getRowGroupAt(2, 1);
		 * 
		 * // Returns 1 if the group is at depth 1.
		 * var depth = group.getDepth();
		 * </code></pre>
		 * 
		 * @returns the depth of this group
		 */
		getDepth(): number
		/**
		 * Returns the range over which this group exists.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * var range = sheet.getRange(2:3);
		 * range.shiftRowGroupDepth(1);
		 * var group = sheet.getRowGroupAt(1, 1);
		 * 
		 * // Returns the range 2:3 if the group is over rows 2:3
		 * range = group.getRange();
		 * </code></pre>
		 * 
		 * @returns the range over which the group exists
		 */
		getRange(): SpreadsheetApp.Range
		/**
		 * Returns <code>true</code> if this group is collapsed.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * var range = sheet.getRange(2:3);
		 * range.shiftRowGroupDepth(1);
		 * var group = sheet.getRowGroupAt(2, 1);
		 * 
		 * // Returns true if the group is collapsed.
		 * var isCollapsed = group.isCollapsed();
		 * </code></pre>
		 * 
		 * @returns <code>true</code> if this group is collapsed; returns <code>false</code> otherwise
		 */
		isCollapsed(): Boolean
		/**
		 * Removes this group from the sheet, reducing the group depth of the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/group.html#getRange()'>range</a></code> by
		 * one. This may modify other groups. After calling this, the group object becomes invalid to use.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * var range = sheet.getRange(2:3);
		 * range.shiftRowGroupDepth(1);
		 * var group = sheet.getRowGroupAt(2, 1);
		 * 
		 * // Removes this group
		 * var range = group.remove();
		 * </code></pre>
		 */
		remove(): void

	}

	enum GroupControlTogglePosition {
		/**
		 * The position where the control toggle is after the group (at higher indices).
		 */
		AFTER = "AFTER",
		/**
		 * The position where the control toggle is before the group (at lower indices).
		 */
		BEFORE = "BEFORE",
	}

	enum InterpolationType {
		/**
		 * Infer the maximum number as a specific interpolation point for a gradient condition.
		 */
		MAX = "MAX",
		/**
		 * Infer the minimum number as a specific interpolation point for a gradient condition.
		 */
		MIN = "MIN",
		/**
		 * Use the number as as specific interpolation point for a gradient condition.
		 */
		NUMBER = "NUMBER",
		/**
		 * Use the number as a percentage interpolation point for a gradient condition.
		 */
		PERCENT = "PERCENT",
		/**
		 * Use the number as a percentile interpolation point for a gradient condition.
		 */
		PERCENTILE = "PERCENTILE",
	}

	class NamedRange {
		private constructor();

		/**
		 * Gets the name of this named range.
		 * 
		 * @returns the name of this named range
		 */
		getName(): string
		/**
		 * Gets the range referenced by this named range.
		 * 
		 * @returns the spreadsheet range that is associated with this named range
		 */
		getRange(): SpreadsheetApp.Range
		/**
		 * Deletes this named range.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below deletes all the named ranges in the spreadsheet.
		 * var namedRanges = SpreadsheetApp.getActive().getNamedRanges();
		 * for (var i = 0; i &lt; namedRanges.length; i++) {
		 *   namedRanges[i].remove();
		 * }
		 * </code></pre>
		 */
		remove(): void
		/**
		 * Sets/updates the name of the named range.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below updates the name for the first named range.
		 * var namedRanges = SpreadsheetApp.getActiveSpreadsheet().getNamedRanges();
		 * if (namedRanges.length &gt; 1) {
		 *   namedRanges[0].setName(&quot;UpdatedNamedRange&quot;);
		 * }
		 * </code></pre>
		 * 
		 * @param name - The new name of the named range.
		 * 
		 * @returns the range whose name was set by the call
		 */
		setName(
			name: string
		): SpreadsheetApp.NamedRange
		/**
		 * Sets/updates the range for this named range.
		 * 
		 * @param range - The spreadsheet range to associate with this named range.
		 * 
		 * @returns the named range for which the spreadsheet range was set
		 */
		setRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.NamedRange

	}

	class OverGridImage {
		private constructor();

		/**
		 * Assigns the function with the specified function name to this image.
		 * 
		 * @param functionName - The name of the function being specified. This must be a public top level
		 *     function, not one ending in underscore such as <code>privateFunction_</code>.
		 * 
		 * @returns This image, for chaining.
		 */
		assignScript(
			functionName: string
		): SpreadsheetApp.OverGridImage
		/**
		 * Returns the alt text description for this image.
		 * 
		 * @returns The alt text description.
		 */
		getAltTextDescription(): string
		/**
		 * Returns the alt text title for this image.
		 * 
		 * @returns The alt text title.
		 */
		getAltTextTitle(): string
		/**
		 * Returns the cell where an image is anchored.
		 * 
		 * @returns The anchor cell.
		 */
		getAnchorCell(): SpreadsheetApp.Range
		/**
		 * Returns the horizontal pixel offset from the anchor cell.
		 * 
		 * @returns The horizontal pixel offset.
		 */
		getAnchorCellXOffset(): number
		/**
		 * Returns the vertical pixel offset from the anchor cell.
		 * 
		 * @returns The vertical pixel offset.
		 */
		getAnchorCellYOffset(): number
		/**
		 * Returns the actual height of this image in pixels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the height of all images in a spreadsheet
		 * var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
		 * for (var i = 0; i &lt; images.length; i++) {
		 *   Logger.log(images[i].getHeight());
		 * }
		 * </code></pre>
		 * 
		 * @returns The height of the image in pixels.
		 */
		getHeight(): number
		/**
		 * Returns the inherent height of this image in pixels.
		 * 
		 * @returns The inherent height in pixels.
		 */
		getInherentHeight(): number
		/**
		 * Returns the inherent height of this image in pixels.
		 * 
		 * @returns The inherent width in pixels.
		 */
		getInherentWidth(): number
		/**
		 * Returns the name of the function assigned to this image.
		 * 
		 * @returns The name of the function.
		 */
		getScript(): string
		/**
		 * Returns the sheet this image appears on.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the parent sheet of all images in a spreadsheet
		 * var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
		 * for (var i = 0; i &lt; images.length; i++) {
		 *   Logger.log(images[i].getSheet());
		 * }
		 * </code></pre>
		 * 
		 * @returns The sheet the image appears on.
		 */
		getSheet(): SpreadsheetApp.Sheet
		/**
		 * Gets the image's source URL; returns <code>null</code> if the URL is unavailable. If the image was
		 * inserted by URL using an API, this method returns the URL provided during image insertion.
		 * 
		 * @returns The image URL if available; returns <code>null</code> if the image is unavailable or doesn't
		 *     have a source URL.
		 */
		getUrl(): string
		/**
		 * Returns the actual width of this image in pixels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the width of all images in a spreadsheet
		 * var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
		 * for (var i = 0; i &lt; images.length; i++) {
		 *   Logger.log(images[i].getWidth());
		 * }
		 * </code></pre>
		 * 
		 * @returns The width of the image in pixels.
		 */
		getWidth(): number
		/**
		 * Deletes this image from the spreadsheet. Any further operation on the image results in a script
		 * error.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Deletes all images in a spreadsheet
		 * var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
		 * for (var i = 0; i &lt; images.length; i++) {
		 *   images[i].remove();
		 * }
		 * </code></pre>
		 */
		remove(): void
		/**
		 * Replaces this image with the one specified by the provided <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../base/blob-source.html'>BlobSource</a></code>.
		 * 
		 * @param blob - The new image as a Blob.
		 * 
		 * @returns This image, for chaining.
		 */
		replace(
			blob: BlobSource
		): SpreadsheetApp.OverGridImage
		/**
		 * Replaces this image with the one from the specified URL.
		 * 
		 * @param url - The URL of the new image.
		 * 
		 * @returns This image, for chaining.
		 */
		replace(
			url: string
		): SpreadsheetApp.OverGridImage

		/**
		 * Resets this image to its inherent dimensions.
		 * 
		 * @returns This image, for chaining.
		 */
		resetSize(): SpreadsheetApp.OverGridImage
		/**
		 * Sets the alt-text description for this image.
		 * 
		 * @param description - The new alt text description for the image.
		 * 
		 * @returns This image, for chaining.
		 */
		setAltTextDescription(
			description: string
		): SpreadsheetApp.OverGridImage
		/**
		 * Sets the alt text title for this image.
		 * 
		 * @param title - The new alt text title for the image.
		 * 
		 * @returns This image, for chaining.
		 */
		setAltTextTitle(
			title: string
		): SpreadsheetApp.OverGridImage
		/**
		 * Sets the cell where an image is anchored.
		 * 
		 * @param cell - The new anchor cell.
		 * 
		 * @returns This image, for chaining.
		 */
		setAnchorCell(
			cell: SpreadsheetApp.Range
		): SpreadsheetApp.OverGridImage
		/**
		 * Sets the horizontal pixel offset from the anchor cell.
		 * 
		 * @param offset - The new horizonal pixel offset.
		 * 
		 * @returns This image, for chaining.
		 */
		setAnchorCellXOffset(
			offset: number
		): SpreadsheetApp.OverGridImage
		/**
		 * Sets the vertical pixel offset from the anchor cell.
		 * 
		 * @param offset - The new vertical pixel offset.
		 * 
		 * @returns This image, for chaining.
		 */
		setAnchorCellYOffset(
			offset: number
		): SpreadsheetApp.OverGridImage
		/**
		 * Sets the actual height of this image in pixels.
		 * 
		 * @param height - The desired height in pixels.
		 * 
		 * @returns The image for chaining.
		 */
		setHeight(
			height: number
		): SpreadsheetApp.OverGridImage
		/**
		 * Sets the actual width of this image in pixels.
		 * 
		 * @param width - The desired width in pixels.
		 * 
		 * @returns The image for chaining.
		 */
		setWidth(
			width: number
		): SpreadsheetApp.OverGridImage

	}

	class PageProtection {
		private constructor();

		/**
		 * Adds a user to the list of users who can edit the sheet, if it is protected.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Add the &quot;user@example.com&quot; user to the list of users who can edit this sheet
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var permissions = sheet.getSheetProtection();
		 * permissions.addUser(&#39;user@example.com&#39;);
		 * permissions.setProtected(true);
		 * sheet.setSheetProtection(permissions);
		 * </code></pre>
		 * 
		 * @param email - The email of the user to add.
		 */
		addUser(
			email: string
		): void
		/**
		 * Returns a list of the email addresses of the users who can edit this sheet.
		 * 
		 * <p>If sheet protection is disabled, the value returned by this call is meaningless.
		 * 
		 * @returns an array of email addresses of users who can edit this sheet
		 */
		getUsers(): string[]
		/**
		 * Indicates whether the sheet has sheet protection enabled or not.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Determine whether or not sheet protection is enabled
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var permissions = sheet.getSheetProtection();
		 * var isProtected = permissions.isProtected();
		 * </code></pre>
		 * 
		 * @returns whether the sheet has sheet protection enabled or not
		 */
		isProtected(): Boolean
		/**
		 * Removes a user from the list of users who can edit the sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Remove the &quot;user@example.com&quot; user to the list of users who can edit this sheet
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var permissions = sheet.getSheetProtection();
		 * permissions.removeUser(&#39;user@example.com&#39;);
		 * permissions.setProtected(true);
		 * sheet.setSheetProtection(permissions);
		 * </code></pre>
		 * 
		 * @param user - The email address of the user to remove.
		 */
		removeUser(
			user: string
		): void
		/**
		 * Sets the protection status for the sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Enables sheet protection for  this sheet
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var permissions = sheet.getSheetProtection();
		 * permissions.setProtected(true);
		 * sheet.setSheetProtection(permissions);
		 * </code></pre>
		 * 
		 * @param protection - <code>true</code> to enable sheet protection, <code>false</code> to disable sheet
		 *     protection.
		 */
		setProtected(
			protection: Boolean
		): void

	}

	class PivotFilter {
		private constructor();

		/**
		 * Returns the filter criteria for this pivot filter.
		 * 
		 * @returns the filter criteria for this pivot filter
		 */
		getFilterCriteria(): SpreadsheetApp.FilterCriteria
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-table.html'>PivotTable</a></code> that this filter belongs to.
		 * 
		 * @returns the pivot table this filter belongs to
		 */
		getPivotTable(): SpreadsheetApp.PivotTable
		/**
		 * Returns the number of the source data column this filter operates on. These indices are
		 * 1-based, for example if this filter applies to data in column A of the spreadsheet this method
		 * returns "1."
		 * 
		 * @returns the number of the source data column this filter applies to
		 */
		getSourceDataColumn(): number
		/**
		 * Returns the data source column the filter operates on. Returns <code>null</code> if the pivot table
		 * is not a {DataSourcePivotTableApi}.
		 * 
		 * @returns The data source column the filter operates on.
		 */
		getSourceDataSourceColumn(): SpreadsheetApp.DataSourceColumn
		/**
		 * Removes this pivot filter from the pivot table.
		 */
		remove(): void
		/**
		 * Sets the filter criteria for this pivot filter.
		 * 
		 * @param filterCriteria - The filter criteria to set.
		 * 
		 * @returns the pivot filter for chaining
		 */
		setFilterCriteria(
			filterCriteria: SpreadsheetApp.FilterCriteria
		): SpreadsheetApp.PivotFilter

	}

	class PivotGroup {
		private constructor();

		/**
		 * Adds a manual grouping rule for this pivot group.
		 * 
		 * @param groupName - The name of this grouping rule.
		 * @param groupMembers - The values that are included in this grouping rule.
		 * 
		 * @returns the pivot group for chaining.
		 */
		addManualGroupingRule(
			groupName: string,
			groupMembers: object[]
		): SpreadsheetApp.PivotGroup
		/**
		 * Returns whether labels are displayed as repeated.
		 * 
		 * @returns <code>true</code> if labels are repeated; otherwise returns <code>false</code>.
		 */
		areLabelsRepeated(): Boolean
		/**
		 * Removes any grouping rules from this pivot group.
		 * 
		 * @returns the pivot group for chaining.
		 */
		clearGroupingRule(): SpreadsheetApp.PivotGroup
		/**
		 * Removes any sorting applied to this group.
		 * 
		 * @returns the pivot group for chaining.
		 */
		clearSort(): SpreadsheetApp.PivotGroup
		/**
		 * Returns the date-time grouping rule on the pivot group, or <code>null</code> if no date-time
		 * grouping rule is set.
		 * 
		 * @returns The date-time grouping rule.
		 */
		getDateTimeGroupingRule(): SpreadsheetApp.DateTimeGroupingRule
		/**
		 * Returns whether this is a row or column group.
		 * 
		 * @returns the dimension representing this group's type
		 */
		getDimension(): SpreadsheetApp.Dimension
		/**
		 * Returns the pivot group limit on the pivot group. Returns <code>null</code> if no pivot group limit
		 * is set.
		 * 
		 * @returns The pivot group limit.
		 */
		getGroupLimit(): SpreadsheetApp.PivotGroupLimit
		/**
		 * Returns the index of this pivot group in the current group order.
		 * 
		 * @returns the pivot group's index
		 */
		getIndex(): number
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-table.html'>PivotTable</a></code> which this grouping belongs to.
		 * 
		 * @returns the pivot table this group belongs to.
		 */
		getPivotTable(): SpreadsheetApp.PivotTable
		/**
		 * Returns the number of the source data column this group summarizes. This index is 1-based, if
		 * this group summarizes source data in column "A" of the spreadsheet this method returns <code>1</code>.
		 * 
		 * @returns the source data column number
		 */
		getSourceDataColumn(): number
		/**
		 * Returns the data source column the pivot group operates on. Returns <code>null</code> if the pivot
		 * table is not a {DataSourcePivotTableApi}.
		 * 
		 * @returns The data source column the pivot group operates on.
		 */
		getSourceDataSourceColumn(): SpreadsheetApp.DataSourceColumn
		/**
		 * Hides repeated labels for this grouping. If labels are already hidden this results in a no-op.
		 * If this method is called before there are multiple row or column groupings, when an additional
		 * grouping is added repeated labels are hidden.
		 * 
		 * @returns the pivot group for chaining.
		 */
		hideRepeatedLabels(): SpreadsheetApp.PivotGroup
		/**
		 * Returns <code>true</code> if the sort is ascending, returns <code>false</code> if the sort order is
		 * descending.
		 * 
		 * @returns <code>true</code> if the sort order is ascending.
		 */
		isSortAscending(): Boolean
		/**
		 * Moves this group to the specified position in the current list of row or column groups. These
		 * indices are 0-based. For example, if this group should be moved to the first position this
		 * method should be called with <code>0</code>.
		 * 
		 * @param index - The index to move this grouping to.
		 * 
		 * @returns the pivot group for chaining.
		 */
		moveToIndex(
			index: number
		): SpreadsheetApp.PivotGroup
		/**
		 * Removes this pivot group from the table.
		 */
		remove(): void
		/**
		 * Removes the manual grouping rule with the specified <code>groupName</code>.
		 * 
		 * @param groupName - The name of the grouping rule to remove.
		 * 
		 * @returns the pivot group for chaining.
		 */
		removeManualGroupingRule(
			groupName: string
		): SpreadsheetApp.PivotGroup
		/**
		 * Resets the display name of this group in the pivot table to its default value.
		 * 
		 * @returns the pivot group for chaining.
		 */
		resetDisplayName(): SpreadsheetApp.PivotGroup
		/**
		 * Sets the date-time grouping rule on the pivot group.
		 * 
		 * <p>To remove the rule, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-group.html#clearGroupingRule()'>clearGroupingRule()</a></code>.
		 * 
		 * @param dateTimeGroupingRuleType - The rule type to set.
		 * 
		 * @returns The pivot group, for chaining.
		 */
		setDateTimeGroupingRule(
			dateTimeGroupingRuleType: SpreadsheetApp.DateTimeGroupingRuleType
		): SpreadsheetApp.PivotGroup
		/**
		 * Sets the display name of this group in the pivot table.
		 * 
		 * @param name - The display name to set.
		 * 
		 * @returns the pivot group for chaining
		 */
		setDisplayName(
			name: string
		): SpreadsheetApp.PivotGroup
		/**
		 * Sets the pivot group limit on the pivot group. The operation is only supported for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table.html'>DataSourcePivotTable</a></code>.
		 * 
		 * @param countLimit - The count limit of rows or columns to set. Must be positive.
		 * 
		 * @returns The pivot group for chaining.
		 */
		setGroupLimit(
			countLimit: number
		): SpreadsheetApp.PivotGroup
		/**
		 * Sets a histogram grouping rule for this pivot group. A histogram rule organizes values in a
		 * source data column into buckets of a constant size. All values from <code>minValue</code> to <code>maxValue</code> are placed into groups of size <code>interval</code>. All values below <code>minValue</code>
		 * are placed into one bucket, as are all values greater than <code>maxValue</code>.
		 * 
		 * @param minValue - The minimum value for items to be placed into buckets. Values less than this
		 *     are combined into a single bucket.
		 * @param maxValue - The maximum value for items to be placed into buckets. Values greater than this
		 *     are combined into a single bucket.
		 * @param intervalSize
		 * 
		 * @returns the pivot group for chaining.
		 */
		setHistogramGroupingRule(
			minValue: number,
			maxValue: number,
			intervalSize: number
		): SpreadsheetApp.PivotGroup
		/**
		 * When there is more than one row or column grouping, this method displays this grouping's label
		 * for each entry of the subsequent grouping. If labels are already repeated this results in a
		 * no-op. If this method is called before there are multiple row or column groupings, when an
		 * additional grouping is added repeated labels are shown.
		 * 
		 * @returns the pivot group for chaining.
		 */
		showRepeatedLabels(): SpreadsheetApp.PivotGroup
		/**
		 * Sets whether to show total values for this pivot group in the table.
		 * 
		 * @param showTotals - Whether to show totals or not.
		 * 
		 * @returns the pivot group for chaining.
		 */
		showTotals(
			showTotals: Boolean
		): SpreadsheetApp.PivotGroup
		/**
		 * Sets the sort order to be ascending.
		 * 
		 * @returns the pivot group for chaining.
		 */
		sortAscending(): SpreadsheetApp.PivotGroup
		/**
		 * Sorts this group by the specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-value.html'>PivotValue</a></code> for the values from the <code>oppositeGroupValues</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sorts the item group by the &quot;SUM of Quantity&quot; pivot value for the specified salespersons.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var pivotTable = sheet.getPivotTables()[0];
		 * var itemGroup = pivotTable.getRowGroups()[0];
		 * var sumQuantityValue = pivotTable.getPivotValues()[0];
		 * itemGroup.sortBy(sumQuantityValue, [&#39;Beth&#39;, &#39;Amir&#39;, &#39;Devyn&#39;]);
		 * </code></pre>
		 * 
		 * @param value - The pivot value to sort by.
		 * @param oppositeGroupValues - The values of an opposite pivot group (a column group if sorting a
		 *     row group, or a row group if sorting a column group) that are used to sort. The order of
		 *     these values determines precedence for tie breaking.
		 * 
		 * @returns the pivot group for chaining.
		 */
		sortBy(
			value: SpreadsheetApp.PivotValue,
			oppositeGroupValues: object[]
		): SpreadsheetApp.PivotGroup
		/**
		 * Sets the sort order to be descending.
		 * 
		 * @returns the pivot group for chaining.
		 */
		sortDescending(): SpreadsheetApp.PivotGroup
		/**
		 * Returns whether total values are currently shown for this pivot group.
		 * 
		 * @returns <code>true</code> if total values are displayed for this pivot group; otherwise returns
		 *     <code>false</code>.
		 */
		totalsAreShown(): Boolean

	}

	class PivotGroupLimit {
		private constructor();

		/**
		 * Gets the count limit on rows or columns in the pivot group.
		 * 
		 * @returns The count limit on rows or columns.
		 */
		getCountLimit(): number
		/**
		 * Returns the pivot group the limit belongs to.
		 * 
		 * @returns The pivot group.
		 */
		getPivotGroup(): SpreadsheetApp.PivotGroup
		/**
		 * Removes the pivot group limit.
		 */
		remove(): void
		/**
		 * Sets the count limit on rows or columns in the pivot group.
		 * 
		 * @param countLimit - The count limit on rows or columns to set. Must be positive.
		 * 
		 * @returns The pivot group limit, for chaining.
		 */
		setCountLimit(
			countLimit: number
		): SpreadsheetApp.PivotGroupLimit

	}

	class PivotTable {
		private constructor();

		/**
		 * Creates a new pivot value in the pivot table calculated from the specified <code>formula</code> with
		 * the specified <code>name</code>.
		 * 
		 * @param name - The name for this calculated pivot value.
		 * @param formula - The formula used to calculate this value.
		 * 
		 * @returns the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-value.html'>PivotValue</a></code>
		 */
		addCalculatedPivotValue(
			name: string,
			formula: string
		): SpreadsheetApp.PivotValue
		/**
		 * Defines a new pivot column grouping in the pivot table. The specified <code>sourceDataColumn</code>
		 * indicates the column in the source data this grouping is based on.
		 * 
		 * @param sourceDataColumn - The number of the column this group summarizes. This index represents
		 *     the absolute number of the column in the spreadsheet; <code>1</code> representing column "A,"
		 *     <code>2</code> representing column B, etc.
		 * 
		 * @returns the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-group.html'>PivotGroup</a></code>
		 */
		addColumnGroup(
			sourceDataColumn: number
		): SpreadsheetApp.PivotGroup
		/**
		 * Creates a new pivot filter for the pivot table. The specified <code>sourceDataColumn</code>
		 * indicates the column in the source data this filter operates on.
		 * 
		 * @param sourceDataColumn - The number of the column this group summarizes. This index represents
		 *     the absolute number of the column in the spreadsheet; <code>1</code> representing column "A,"
		 *     <code>2</code> representing column B, etc.
		 * @param filterCriteria - The filter criteria used to perform the filtering.
		 * 
		 * @returns the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-filter.html'>PivotFilter</a></code>
		 */
		addFilter(
			sourceDataColumn: number,
			filterCriteria: SpreadsheetApp.FilterCriteria
		): SpreadsheetApp.PivotFilter
		/**
		 * Defines a new pivot value in the pivot table with the specified <code>summarizeFunction</code>. The
		 * specified <code>sourceDataColumn</code> indicates the column in the source data this value is based
		 * on.
		 * 
		 * @param sourceDataColumn - The number of the column this group summarizes. This index represents
		 *     the absolute number of the column in the spreadsheet; <code>1</code> representing column "A,"
		 *     <code>2</code> representing column B, etc.
		 * @param summarizeFunction
		 * 
		 * @returns the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-value.html'>PivotValue</a></code>
		 */
		addPivotValue(
			sourceDataColumn: number,
			summarizeFunction: SpreadsheetApp.PivotTableSummarizeFunction
		): SpreadsheetApp.PivotValue
		/**
		 * Defines a new pivot row grouping in the pivot table. The specified <code>sourceDataColumn</code>
		 * indicates the column in the source data this grouping is based on.
		 * 
		 * @param sourceDataColumn - The number of the column this group summarizes. This index represents
		 *     the absolute number of the column in the spreadsheet; <code>1</code> representing column "A,"
		 *     <code>2</code> representing column B, etc.
		 * 
		 * @returns the newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-group.html'>PivotGroup</a></code>
		 */
		addRowGroup(
			sourceDataColumn: number
		): SpreadsheetApp.PivotGroup
		/**
		 * Returns the pivot table as a data source pivot table if the pivot table is linked to a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html'>DataSource</a></code>, or <code>null</code> otherwise.
		 * 
		 * @returns A data source pivot table.
		 */
		asDataSourcePivotTable(): SpreadsheetApp.DataSourcePivotTable
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> representing the cell where this pivot table is anchored.
		 * 
		 * @returns this pivot table's anchor cell
		 */
		getAnchorCell(): SpreadsheetApp.Range
		/**
		 * Returns an ordered list of the column groups in this pivot table.
		 * 
		 * @returns the column groups in this pivot table
		 */
		getColumnGroups(): SpreadsheetApp.PivotGroup[]
		/**
		 * Returns an ordered list of the filters in this pivot table.
		 * 
		 * @returns the filters in this pivot table
		 */
		getFilters(): SpreadsheetApp.PivotFilter[]
		/**
		 * Returns an ordered list of the pivot values in this pivot table.
		 * 
		 * @returns the pivot values in this pivot table
		 */
		getPivotValues(): SpreadsheetApp.PivotValue[]
		/**
		 * Returns an ordered list of the row groups in this pivot table.
		 * 
		 * @returns the row groups in this pivot table
		 */
		getRowGroups(): SpreadsheetApp.PivotGroup[]
		/**
		 * Returns the source data range on which the pivot table is constructed.
		 * 
		 * @returns The source data range of this pivot table.
		 */
		getSourceDataRange(): SpreadsheetApp.Range
		/**
		 * Returns whether values are displayed as rows or columns.
		 * 
		 * @returns whether values are displayed as rows or columns
		 */
		getValuesDisplayOrientation(): SpreadsheetApp.Dimension
		/**
		 * Deletes this pivot table. Further operations on this pivot table results in an error.
		 */
		remove(): void
		/**
		 * Sets the layout of this pivot table to display values as columns or rows.
		 * 
		 * @param dimension - The dimension indicating how to display pivot values.
		 * 
		 * @returns the pivot table for chaining
		 */
		setValuesDisplayOrientation(
			dimension: SpreadsheetApp.Dimension
		): SpreadsheetApp.PivotTable

	}

	enum PivotTableSummarizeFunction {
		/**
		 * The <a href="https://support.google.com/docs/answer/3093615">AVERAGE</a> function
		 */
		AVERAGE = "AVERAGE",
		/**
		 * The <a href="https://support.google.com/docs/answer/3093620">COUNT</a> function
		 */
		COUNT = "COUNT",
		/**
		 * The <a href="https://support.google.com/docs/answer/3093991">COUNTA</a> function
		 */
		COUNTA = "COUNTA",
		/**
		 * The <a href="https://support.google.com/docs/answer/3093405">COUNTUNIQUE</a> function
		 */
		COUNTUNIQUE = "COUNTUNIQUE",
		/**
		 * A custom fuction, this value is only valid for calcuated fields.
		 */
		CUSTOM = "CUSTOM",
		/**
		 * The <a href="https://support.google.com/docs/answer/3094013">MAX</a> function
		 */
		MAX = "MAX",
		/**
		 * The <a href="https://support.google.com/docs/answer/3094025">MEDIAN</a> function
		 */
		MEDIAN = "MEDIAN",
		/**
		 * The <a href="https://support.google.com/docs/answer/3094017">MIN</a> function
		 */
		MIN = "MIN",
		/**
		 * The <a href="https://support.google.com/docs/answer/3093502">PRODUCT</a> function
		 */
		PRODUCT = "PRODUCT",
		/**
		 * The <a href="https://support.google.com/docs/answer/3094054">STDEV</a> function
		 */
		STDEV = "STDEV",
		/**
		 * The <a href="https://support.google.com/docs/answer/3094105">STDEVP</a> function
		 */
		STDEVP = "STDEVP",
		/**
		 * The <a href="https://support.google.com/docs/answer/3093669">SUM</a> function
		 */
		SUM = "SUM",
		/**
		 * The <a href="https://support.google.com/docs/answer/3094063">VAR</a> function
		 */
		VAR = "VAR",
		/**
		 * The <a href="https://support.google.com/docs/answer/3094113">VARP</a> function
		 */
		VARP = "VARP",
	}

	class PivotValue {
		private constructor();

		/**
		 * Returns the display type describing how this pivot value is currently displayed in the table.
		 * 
		 * @returns the display type for this pivot value
		 */
		getDisplayType(): SpreadsheetApp.PivotValueDisplayType
		/**
		 * Returns the formula used to calculate this value. If this value is not a calculated field this
		 * method returns <code>null</code>.
		 * 
		 * @returns the pivot value for chaining
		 */
		getFormula(): string
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-table.html'>PivotTable</a></code> which this value belongs to.
		 * 
		 * @returns the pivot table this value belongs to
		 */
		getPivotTable(): SpreadsheetApp.PivotTable
		/**
		 * Returns the number of the source data column the pivot value summarizes. This index is 1-based,
		 * if this group summarizes source data in column "A" of the spreadsheet this method returns
		 * <code>1</code>.
		 * 
		 * @returns The source data column number.
		 */
		getSourceDataColumn(): number
		/**
		 * Returns the data source column the pivot value summarizes. Returns <code>null</code> if the pivot
		 * table is not a {DataSourcePivotTableApi}.
		 * 
		 * @returns The source data source column the pivot value summarizes.
		 */
		getSourceDataSourceColumn(): SpreadsheetApp.DataSourceColumn
		/**
		 * Returns this group’s summarization function.
		 * 
		 * @returns the group's summarization function
		 */
		getSummarizedBy(): SpreadsheetApp.PivotTableSummarizeFunction
		/**
		 * Remove this value from the pivot table.
		 */
		remove(): void
		/**
		 * Sets the display name for this value in the pivot table.
		 * 
		 * @param name - The display name to set.
		 * 
		 * @returns the pivot value for chaining
		 */
		setDisplayName(
			name: string
		): SpreadsheetApp.PivotValue
		/**
		 * Sets the formula used to calculate this value. If this value is not a calculated field this
		 * method results in an error.
		 * 
		 * @param formula - The formula to use to calculate this value.
		 * 
		 * @returns the pivot value for chaining
		 */
		setFormula(
			formula: string
		): SpreadsheetApp.PivotValue
		/**
		 * Displays this value in the pivot table as a function of another value.
		 * 
		 * @param displayType - The way to display the values.
		 * 
		 * @returns the pivot value for chaining
		 */
		showAs(
			displayType: SpreadsheetApp.PivotValueDisplayType
		): SpreadsheetApp.PivotValue
		/**
		 * Sets the summarization function.
		 * 
		 * @param summarizeFunction - The function to use to summarize data in this value's source data
		 *     column.
		 * 
		 * @returns the pivot value for chaining
		 */
		summarizeBy(
			summarizeFunction: SpreadsheetApp.PivotTableSummarizeFunction
		): SpreadsheetApp.PivotValue

	}

	enum PivotValueDisplayType {
		/**
		 * Default. Displays pivot values as the actual value and not as a function of another value.
		 */
		DEFAULT = "DEFAULT",
		/**
		 * Displays pivot values as a percent of the total for that column.
		 */
		PERCENT_OF_COLUMN_TOTAL = "PERCENT_OF_COLUMN_TOTAL",
		/**
		 * Displays pivot values as a percent of the grand total.
		 */
		PERCENT_OF_GRAND_TOTAL = "PERCENT_OF_GRAND_TOTAL",
		/**
		 * Displays pivot values as a percent of the total for that row.
		 */
		PERCENT_OF_ROW_TOTAL = "PERCENT_OF_ROW_TOTAL",
	}

	class Protection {
		private constructor();

		/**
		 * Adds the given user to the list of editors for the protected sheet or range. This method does
		 * not automatically give the user permission to edit the spreadsheet itself; to do that in
		 * addition, call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addEditor(String)'>Spreadsheet.addEditor(emailAddress)</a></code>.
		 * 
		 * @param emailAddress - The email address of the user to add.
		 * 
		 * @returns the object representing the protection settings, for chaining
		 */
		addEditor(
			emailAddress: string
		): SpreadsheetApp.Protection
		/**
		 * Adds the given user to the list of editors for the protected sheet or range. This method does
		 * not automatically give the user permission to edit the spreadsheet itself; to do that in
		 * addition, call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addEditor(User)'>Spreadsheet.addEditor(user)</a></code>.
		 * 
		 * @param user - A representation of the user to add.
		 * 
		 * @returns the object representing the protection settings, for chaining
		 */
		addEditor(
			user: User
		): SpreadsheetApp.Protection

		/**
		 * Adds the given array of users to the list of editors for the protected sheet or range. This
		 * method does not automatically give the users permission to edit the spreadsheet itself; to do
		 * that in addition, call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addEditors(String)'>Spreadsheet.addEditors(emailAddresses)</a></code>.
		 * 
		 * @param emailAddresses - An array of email addresses of the users to add.
		 * 
		 * @returns the object representing the protection settings, for chaining
		 */
		addEditors(
			emailAddresses: string[]
		): SpreadsheetApp.Protection
		/**
		 * Determines whether all users in the domain that owns the spreadsheet have permission to edit
		 * the protected range or sheet. Throws an exception if the user does not have permission to edit
		 * the protected range or sheet.
		 * 
		 * @returns <code>true</code> if all users in the domain that owns the spreadsheet have permission to
		 *     edit the protected range or sheet; <code>false</code> if not
		 */
		canDomainEdit(): Boolean
		/**
		 * Determines whether the user has permission to edit the protected range or sheet. The
		 * spreadsheet owner is always able to edit protected ranges and sheets.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Remove all range protections in the spreadsheet that the user has permission to edit.
		 * var ss = SpreadsheetApp.getActive();
		 * var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
		 * for (var i = 0; i &lt; protections.length; i++) {
		 *   var protection = protections[i];
		 *   if (protection.canEdit()) {
		 *     protection.remove();
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns <code>true</code> if the user has permission to edit the protected range or sheet; <code>false</code> if not
		 */
		canEdit(): Boolean
		/**
		 * Gets the description of the protected range or sheet. If no description is set, this method
		 * returns an empty string.
		 * 
		 * @returns the description of the protected range or sheet, or an empty string if no description
		 *     is set
		 */
		getDescription(): string
		/**
		 * Gets the list of editors for the protected range or sheet. Throws an exception if the user does
		 * not have permission to edit the protected range or sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Protect the active sheet, then remove all other users from the list of editors.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var protection = sheet.protect().setDescription(&#39;Sample protected sheet&#39;);
		 * 
		 * // Ensure the current user is an editor before removing others. Otherwise, if the user&#39;s edit
		 * // permission comes from a group, the script throws an exception upon removing the group.
		 * var me = Session.getEffectiveUser();
		 * protection.addEditor(me);
		 * protection.removeEditors(protection.getEditors());
		 * if (protection.canDomainEdit()) {
		 *   protection.setDomainEdit(false);
		 * }
		 * </code></pre>
		 * 
		 * @returns an array of users with permission to edit the protected range or sheet
		 */
		getEditors(): User[]
		/**
		 * Gets the type of the protected area, either <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection-type.html#RANGE'>RANGE</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection-type.html#SHEET'>SHEET</a></code>.
		 * 
		 * @returns the type of protected area, either <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection-type.html#RANGE'>RANGE</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection-type.html#SHEET'>SHEET</a></code>
		 */
		getProtectionType(): SpreadsheetApp.ProtectionType
		/**
		 * Gets the range that is being protected. If the protection applies to the sheet instead of a
		 * range, this method returns a range that spans the entire sheet.
		 * 
		 * @returns the range that is being protected
		 */
		getRange(): SpreadsheetApp.Range
		/**
		 * Gets the name of the protected range if it is associated with a named range. Returns <code>null</code> if the protection is not associated with a named range. Note that scripts must explicitly
		 * call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setRangeName(String)'>setRangeName(rangeName)</a></code> to associate a protected range with a named range; calling
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#protect()'>Range.protect()</a></code> to create a protection from a <code>Range</code> that happens to be a
		 * named range, without calling <code>setRangeName(rangeName)</code>, is not sufficient to associate
		 * them. However, creating a protected range from a named range in the Google Sheets UI associates
		 * them automatically.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Protect a named range in a spreadsheet and log the name of the protected range.
		 * var ss = SpreadsheetApp.getActive();
		 * var range = ss.getRange(&#39;A1:B10&#39;);
		 * var protection = range.protect();
		 * ss.setNamedRange(&#39;Test&#39;, range);       // Create a named range.
		 * protection.setRangeName(&#39;Test&#39;);       // Associate the protection with the named range.
		 * Logger.log(protection.getRangeName()); // Verify the name of the protected range.
		 * </code></pre>
		 * 
		 * @returns the name of the protected named range, or <code>null</code> if the protected range is not
		 *     associated with a named range
		 */
		getRangeName(): string
		/**
		 * Gets an array of unprotected ranges within a protected sheet. If the <code>Protection</code> object
		 * corresponds to a protected range instead of a protected sheet, this method returns an empty
		 * array. To change the unprotected ranges, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setUnprotectedRanges(Range)'>setUnprotectedRanges(ranges)</a></code> to set a
		 * new array of ranges; to re-protect the entire sheet, set an empty array.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Unprotect cells E2:F5 in addition to any other unprotected ranges in the protected sheet.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var protection = sheet.protect();
		 * var unprotected = protection.getUnprotectedRanges();
		 * unprotected.push(sheet.getRange(&#39;E2:F5&#39;));
		 * protection.setUnprotectedRanges(unprotected);
		 * </code></pre>
		 * 
		 * @returns an array of unprotected ranges within a protected sheet
		 */
		getUnprotectedRanges(): SpreadsheetApp.Range[]
		/**
		 * Determines if the protected area is using "warning based" protection. Warning-based protection
		 * means that every user can edit data in the area, except editing prompts a warning asking the
		 * user to confirm the edit. By default, protected ranges or sheets are not warning-based. To
		 * change to the warning state, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setWarningOnly(Boolean)'>setWarningOnly(warningOnly)</a></code>.
		 * 
		 * @returns <code>true</code> if the protected range or sheet is only using warning-based protection
		 */
		isWarningOnly(): Boolean
		/**
		 * Unprotects the range or sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Remove all range protections in the spreadsheet that the user has permission to edit.
		 * var ss = SpreadsheetApp.getActive();
		 * var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
		 * for (var i = 0; i &lt; protections.length; i++) {
		 *   var protection = protections[i];
		 *   if (protection.canEdit()) {
		 *     protection.remove();
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * <pre class="prettyprint"><code>
		 * // Remove sheet protection from the active sheet, if the user has permission to edit it.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var protection = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
		 * if (protection &amp;&amp; protection.canEdit()) {
		 *   protection.remove();
		 * }
		 * </code></pre>
		 */
		remove(): void
		/**
		 * Removes the given user from the list of editors for the protected sheet or range. Note that if
		 * the user is a member of a Google Group that has edit permission, or if all users in the domain
		 * have edit permission, the user are still be able to edit the protected area. Neither the owner
		 * of the spreadsheet nor the current user can be removed.
		 * 
		 * @param emailAddress - The email address of the user to remove.
		 * 
		 * @returns the object representing the protection settings, for chaining
		 */
		removeEditor(
			emailAddress: string
		): SpreadsheetApp.Protection
		/**
		 * Removes the given user from the list of editors for the protected sheet or range. Note that if
		 * the user is a member of a Google Group that has edit permission, or if all users in the domain
		 * have edit permission, the user is still be able to edit the protected area as well. Neither the
		 * owner of the spreadsheet nor the current user can be removed.
		 * 
		 * @param user - A representation of the user to remove.
		 * 
		 * @returns the object representing the protection settings, for chaining
		 */
		removeEditor(
			user: User
		): SpreadsheetApp.Protection

		/**
		 * Removes the given array of users from the list of editors for the protected sheet or range.
		 * Note that if any of the users are members of a Google Group that has edit permission, or if all
		 * users in the domain have edit permission, those users are still be able to edit the protected
		 * area. Neither the owner of the spreadsheet nor the current user can be removed.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Protect the active sheet, then remove all other users from the list of editors.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var protection = sheet.protect().setDescription(&#39;Sample protected sheet&#39;);
		 * 
		 * // Ensure the current user is an editor before removing others. Otherwise, if the user&#39;s edit
		 * // permission comes from a group, the script throws an exception upon removing the group.
		 * var me = Session.getEffectiveUser();
		 * protection.addEditor(me);
		 * protection.removeEditors(protection.getEditors());
		 * if (protection.canDomainEdit()) {
		 *   protection.setDomainEdit(false);
		 * }
		 * </code></pre>
		 * 
		 * @param emailAddresses - An array of email addresses of the users to remove.
		 * 
		 * @returns the object representing the protection settings, for chaining
		 */
		removeEditors(
			emailAddresses: string[]
		): SpreadsheetApp.Protection
		/**
		 * Sets the description of the protected range or sheet.
		 * 
		 * @param description - The description of the protected range or sheet.
		 * 
		 * @returns the object representing the protection settings, for chaining
		 */
		setDescription(
			description: string
		): SpreadsheetApp.Protection
		/**
		 * Sets whether all users in the domain that owns the spreadsheet have permission to edit the
		 * protected range or sheet. Note that any users who have explicit edit permission are able to
		 * edit the protected area regardless of this setting. Throws an exception if the spreadsheet does
		 * not belong to a G Suite domain (that is, if it is owned by a gmail.com account).
		 * 
		 * @param editable - <code>true</code> if all users in the domain that owns the spreadsheet should have
		 *     permission to edit the protected range or sheet; <code>false</code> if not.
		 * 
		 * @returns the object representing the protection settings, for chaining
		 */
		setDomainEdit(
			editable: Boolean
		): SpreadsheetApp.Protection
		/**
		 * Associates the protected range with an existing named range. If the named range covers a
		 * different area from the current protected range, this method moves the protection to cover the
		 * the named range instead. The named range must be on the same sheet as the current protected
		 * range. Note that scripts must explicitly call this method to associate a protected range with a
		 * named range; calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#protect()'>Range.protect()</a></code> to create a protection from a <code>Range</code>
		 * that happens to be a named range, without calling <code>setRangeName(rangeName)</code>, is not
		 * sufficient to associate them. However, creating a protected range from a named range in the
		 * Google Sheets UI associates them automatically.
		 * 
		 * @param namedRange - The existing named range to associate with the protected range.
		 * 
		 * @returns the object representing the protection settings, for chaining
		 */
		setNamedRange(
			namedRange: SpreadsheetApp.NamedRange
		): SpreadsheetApp.Protection
		/**
		 * Adjusts the range that is being protected. If the given range covers a different area from the
		 * current protected range, this method moves the protection to cover the new range instead.
		 * 
		 * @param range - The new range to protect from edits.
		 * 
		 * @returns the object representing the protection settings, for chaining
		 */
		setRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.Protection
		/**
		 * Associates the protected range with an existing named range. If the named range covers a
		 * different area from the current protected range, this method moves the protection to cover the
		 * the named range instead. The named range must be on the same sheet as the current protected
		 * range. Note that scripts must explicitly call this method to associate a protected range with a
		 * named range; calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#protect()'>Range.protect()</a></code> to create a protection from a <code>Range</code>
		 * that happens to be a named range, without calling <code>setRangeName(rangeName)</code>, is not
		 * sufficient to associate them. However, creating a protected range from a named range in the
		 * Google Sheets UI associates them automatically.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Protect a named range in a spreadsheet and log the name of the protected range.
		 * var ss = SpreadsheetApp.getActive();
		 * var range = ss.getRange(&#39;A1:B10&#39;);
		 * var protection = range.protect();
		 * ss.setNamedRange(&#39;Test&#39;, range);       // Create a named range.
		 * protection.setRangeName(&#39;Test&#39;);       // Associate the protection with the named range.
		 * Logger.log(protection.getRangeName()); // Verify the name of the protected range.
		 * </code></pre>
		 * 
		 * @param rangeName - The name of the named range to be protected.
		 * 
		 * @returns the object representing the protection settings, for chaining
		 */
		setRangeName(
			rangeName: string
		): SpreadsheetApp.Protection
		/**
		 * Unprotects the given array of ranges within a protected sheet. Throws an exception if the
		 * <code>Protection</code> object corresponds to a protected range instead of a protected sheet or if
		 * any of the ranges are not on the protected sheet. To change the unprotected ranges, set a new
		 * array of ranges; to re-protect the entire sheet, set an empty array.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Protect the active sheet except B2:C5, then remove all other users from the list of editors.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var protection = sheet.protect().setDescription(&#39;Sample protected sheet&#39;);
		 * var unprotected = sheet.getRange(&#39;B2:C5&#39;);
		 * protection.setUnprotectedRanges([unprotected]);
		 * 
		 * // Ensure the current user is an editor before removing others. Otherwise, if the user&#39;s edit
		 * // permission comes from a group, the script throws an exception upon removing the group.
		 * var me = Session.getEffectiveUser();
		 * protection.addEditor(me);
		 * protection.removeEditors(protection.getEditors());
		 * if (protection.canDomainEdit()) {
		 *   protection.setDomainEdit(false);
		 * }
		 * </code></pre>
		 * 
		 * @param ranges - The array of ranges to leave unprotected within a protected sheet.
		 * 
		 * @returns the object representing the protection settings, for chaining
		 */
		setUnprotectedRanges(
			ranges: SpreadsheetApp.Range[]
		): SpreadsheetApp.Protection
		/**
		 * Sets whether or not this protected range is using "warning based" protection. Warning-based
		 * protection means that every user can edit data in the area, except editing prompts a warning
		 * asking the user to confirm the edit. By default, protected ranges or sheets are not
		 * warning-based. To check warning state, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#isWarningOnly()'>isWarningOnly()</a></code>.
		 * 
		 * @param warningOnly
		 * 
		 * @returns the object representing the protection settings, for chaining.
		 */
		setWarningOnly(
			warningOnly: Boolean
		): SpreadsheetApp.Protection

	}

	enum ProtectionType {
		/**
		 * Protection for a range.
		 */
		RANGE = "RANGE",
		/**
		 * Protection for a sheet.
		 */
		SHEET = "SHEET",
	}

	class Range {
		private constructor();

		/**
		 * Sets the specified range as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getActiveRange()'>active range</a></code>, with the top
		 * left cell in the range as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getCurrentCell()'>current cell</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * var range = sheet.getRange(&#39;A1:D10&#39;);
		 * range.activate();
		 * 
		 * var selection = sheet.getSelection();
		 * // Current cell: A1
		 * var currentCell = selection.getCurrentCell();
		 * // Active Range: A1:D10
		 * var activeRange = selection.getActiveRange();
		 * </code></pre>
		 * 
		 * @returns This range, for chaining.
		 */
		activate(): SpreadsheetApp.Range
		/**
		 * Sets the specified cell as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getCurrentCell()'>current cell</a></code>.
		 * 
		 * <p>If the specified cell is present in an existing range, then that range becomes the active
		 * range with the cell as the current cell.
		 * 
		 * <p>If the specified cell is not present in any existing range, then the existing selection is
		 * removed and the cell becomes the current cell and the active range.
		 * 
		 * <p><b>Note:</b> The specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> must consist of one cell, otherwise it throws an
		 * exception.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * var range = sheet.getRange(&#39;B5&#39;);
		 * range.activate();
		 * 
		 * var selection = sheet.getSelection();
		 * // Current cell: B5
		 * var currentCell = selection.getCurrentCell();
		 * </code></pre>
		 * 
		 * @returns This range, for chaining.
		 */
		activateAsCurrentCell(): SpreadsheetApp.Range
		/**
		 * Adds developer metadata with the specified key to the range.
		 * 
		 * @param key - The key for the new developer metadata.
		 * 
		 * @returns This range, for chaining.
		 */
		addDeveloperMetadata(
			key: string
		): SpreadsheetApp.Range
		/**
		 * Adds developer metadata with the specified key and visibility to the range.
		 * 
		 * @param key - The key for the new developer metadata.
		 * @param visibility - The visibility of the new developer metadata.
		 * 
		 * @returns This range, for chaining.
		 */
		addDeveloperMetadata(
			key: string,
			visibility: SpreadsheetApp.DeveloperMetadataVisibility
		): SpreadsheetApp.Range
		/**
		 * Adds developer metadata with the specified key and value to the range.
		 * 
		 * @param key - The key for the new developer metadata.
		 * @param value - The value for the new developer metadata.
		 * 
		 * @returns This range, for chaining.
		 */
		addDeveloperMetadata(
			key: string,
			value: string
		): SpreadsheetApp.Range
		/**
		 * Adds developer metadata with the specified key, value, and visibility to the range.
		 * 
		 * @param key - The key for the new developer metadata.
		 * @param value - The value for the new developer metadata.
		 * @param visibility - The visibility of the new developer metadata.
		 * 
		 * @returns This range, for chaining.
		 */
		addDeveloperMetadata(
			key: string,
			value: string,
			visibility: SpreadsheetApp.DeveloperMetadataVisibility
		): SpreadsheetApp.Range

		/**
		 * Applies a default column banding theme to the range. By default, the banding has header and no
		 * footer color.
		 * 
		 * @returns The new banding.
		 */
		applyColumnBanding(): SpreadsheetApp.Banding
		/**
		 * Applies a specified column banding theme to the range. By default, the banding has header and
		 * no footer color.
		 * 
		 * @param bandingTheme - A color theme to apply to the columns in the range.
		 * 
		 * @returns The new banding.
		 */
		applyColumnBanding(
			bandingTheme: SpreadsheetApp.BandingTheme
		): SpreadsheetApp.Banding
		/**
		 * Applies a specified column banding theme to the range with specified header and footer
		 * settings.
		 * 
		 * @param bandingTheme - A color theme to apply to the columns in the range.
		 * @param showHeader - If <code>true</code>, the banding theme header color is applied to the first
		 *     column.
		 * @param showFooter - If <code>true</code>, the banding theme footer color is applied to the last
		 *     column.
		 * 
		 * @returns The new banding.
		 */
		applyColumnBanding(
			bandingTheme: SpreadsheetApp.BandingTheme,
			showHeader: Boolean,
			showFooter: Boolean
		): SpreadsheetApp.Banding

		/**
		 * Applies a default row banding theme to the range. By default, the banding has header and no
		 * footer color.
		 * 
		 * @returns The new banding.
		 */
		applyRowBanding(): SpreadsheetApp.Banding
		/**
		 * Applies a specified row banding theme to the range. By default, the banding has header and no
		 * footer color.
		 * 
		 * @param bandingTheme - A color theme to apply to the rows in the range.
		 * 
		 * @returns The new banding.
		 */
		applyRowBanding(
			bandingTheme: SpreadsheetApp.BandingTheme
		): SpreadsheetApp.Banding
		/**
		 * Applies a specified row banding theme to the range with specified header and footer settings.
		 * 
		 * @param bandingTheme - A color theme to apply to the rows in the range.
		 * @param showHeader - If <code>true</code>, the banding theme header color is applied to the first row.
		 * @param showFooter - If <code>true</code>, the banding theme footer color is applied to the last row.
		 * 
		 * @returns The new banding.
		 */
		applyRowBanding(
			bandingTheme: SpreadsheetApp.BandingTheme,
			showHeader: Boolean,
			showFooter: Boolean
		): SpreadsheetApp.Banding

		/**
		 * Fills the <code>destinationRange</code> with data based on the data in this range. The new values
		 * are also determined by the specified <code>series</code> type. The destination range must contain
		 * this range and extend it in only one direction. For example, the following fills <code>A1:A20</code>
		 * with a series of increasing numbers based on the current values in <code>A1:A4</code>:
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * 
		 * // Has values [1, 2, 3, 4].
		 * var sourceRange = sheet.getRange(&quot;A1:A4&quot;);
		 * // The range to fill with values.
		 * var destination = sheet.getRange(&quot;A1:A20&quot;);
		 * 
		 * // Inserts new values in A5:A20, continuing the pattern expressed in A1:A4
		 * sourceRange.autoFill(destination, SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
		 * 
		 * </code></pre>
		 * 
		 * @param destination - The range to be auto-filled with values. The destination range should
		 *     contain this range and extend it in only one direction (upwards, downwards, left, or
		 *     right).
		 * @param series - The type of autoFill series that should be used to calculate new values. The
		 *     effect of this series differs based on the type and amount of source data.
		 */
		autoFill(
			destination: SpreadsheetApp.Range,
			series: SpreadsheetApp.AutoFillSeries
		): void
		/**
		 * Calculates a range to fill with new data based on neighboring cells and automatically fills
		 * that range with new values based on the data contained in this range. These new values are also
		 * determined by the specified <code>series</code> type.
		 * 
		 * <p>The calculated destination range considers the surrounding data to determine where the new
		 * values should be inserted: if there is data to the immediate left or right of a column that is
		 * being auto-filled, new values only extend as far as this adjacent data.
		 * 
		 * <p>For example, if <code>A1:A20</code> is filled with a series of increasing numbers and this method
		 * is called on the range <code>B1:B4</code> which contains a series of dates, new values are only
		 * inserted into <code>B5:B20</code>. In this way, these new values "stick" to the cells that contain
		 * values in column A.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * 
		 * // A1:A20 has values [1, 2, 3, ... 20].
		 * // B1:B4 has values [1/1/2017, 1/2/2017, ...]
		 * var sourceRange = sheet.getRange(&quot;B1:B4&quot;);
		 * 
		 * // Results in B5:B20 having values [1/5/2017, ... 1/20/2017]
		 * sourceRange.autoFillToNeighbor(SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
		 * </code></pre>
		 * 
		 * @param series - The type of autoFill series that should be used to calculate new values. The
		 *     effect of this series differs based on the type and amount of source data.
		 */
		autoFillToNeighbor(
			series: SpreadsheetApp.AutoFillSeries
		): void
		/**
		 * Break any multi-column cells in the range into individual cells again.
		 * 
		 * <p>Calling this function on a range is equivalent to selecting a range and clicking Format ->
		 * Merge -> Unmerge.
		 * 
		 * @returns This range, for chaining.
		 */
		breakApart(): SpreadsheetApp.Range
		/**
		 * Determines whether the user has permission to edit every cell in the range. The spreadsheet
		 * owner is always able to edit protected ranges and sheets.
		 * 
		 * @returns <code>true</code> if the user has permission to edit every cell in the range; <code>false</code>
		 *     otherwise.
		 */
		canEdit(): Boolean
		/**
		 * Changes the state of the checkboxes in the range to “checked”. Ignores the cells in the range
		 * which currently do not contain either the checked or unchecked value configured.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Changes the state of cells which currently contain either the checked or unchecked value
		 * // configured in the range A1:B10 to &#39;checked&#39;.
		 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:B10&#39;);
		 * range.check();
		 * </code></pre>
		 * 
		 * @returns This range, for chaining.
		 */
		check(): SpreadsheetApp.Range
		/**
		 * Clears the range of contents, formats, and data validation rules.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:D10&quot;);
		 * range.clear();
		 * </code></pre>
		 * 
		 * @returns This range, for chaining.
		 */
		clear(): SpreadsheetApp.Range
		/**
		 * Clears the range of contents, format, data validation rules, and/or comments, as specified with
		 * the given advanced options. By default all data is cleared.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below clears range C2:G8 in the active sheet, but preserves the format,
		 * // data validation rules, and comments.
		 * SpreadsheetApp.getActiveSheet().getRange(2, 3, 6, 5).clear({contentsOnly: true});
		 * </code></pre>
		 * 
		 * @param options - A JavaScript object that specifies advanced parameters, as listed below.
		 * 
		 * @returns This range, for chaining.
		 */
		clear(
			options: object
		): SpreadsheetApp.Range

		/**
		 * Clears the content of the range, leaving the formatting intact.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:D10&quot;);
		 * range.clearContent();
		 * </code></pre>
		 * 
		 * @returns This range, for chaining.
		 */
		clearContent(): SpreadsheetApp.Range
		/**
		 * Clears the data validation rules for the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Clear the data validation rules for cells A1:B5.
		 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:B5&#39;);
		 * range.clearDataValidations();
		 * </code></pre>
		 * 
		 * @returns This range, for chaining.
		 */
		clearDataValidations(): SpreadsheetApp.Range
		/**
		 * Clears formatting for this range.
		 * 
		 * <p>This clears text formatting for the cell or cells in the range, but does not reset any
		 * number formatting rules.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:D10&quot;);
		 * range.clearFormat();
		 * </code></pre>
		 * 
		 * @returns This range, for chaining.
		 */
		clearFormat(): SpreadsheetApp.Range
		/**
		 * Clears the note in the given cell or cells.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:D10&quot;);
		 * range.clearNote();
		 * </code></pre>
		 * 
		 * @returns This range, for chaining.
		 */
		clearNote(): SpreadsheetApp.Range
		/**
		 * Collapses all groups that are wholly contained within the range. If no group is fully within
		 * the range, the deepest expanded group that is partially within the range is collapsed.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * var range = sheet.getActiveRange();
		 * 
		 * // All row and column groups within the range are collapsed.
		 * range.expandGroups();
		 * </code></pre>
		 * 
		 * @returns This range, for chaining.
		 */
		collapseGroups(): SpreadsheetApp.Range
		/**
		 * Copy the formatting of the range to the given location. If the destination is larger or smaller
		 * than the source range then the source is repeated or truncated accordingly. Note that this
		 * method copies the formatting only.
		 * 
		 * <p>For a detailed description of the gridId parameter, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#getGridId()'>getGridId()</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var source = ss.getSheets()[0];
		 * 
		 * var range = source.getRange(&quot;B2:D4&quot;);
		 * 
		 * // This copies the formatting in B2:D4 in the source sheet to
		 * // D4:F6 in the sheet with gridId 1555299895. Note that you can get the gridId
		 * // of a sheet by calling sheet.getSheetId() or range.getGridId().
		 * range.copyFormatToRange(1555299895, 4, 6, 4, 6);
		 * </code></pre>
		 * 
		 * @param gridId - The unique ID of the sheet within the spreadsheet, irrespective of position.
		 * @param column - The first column of the target range.
		 * @param columnEnd - The end column of the target range.
		 * @param row - The start row of the target range.
		 * @param rowEnd - The end row of the target range.
		 */
		copyFormatToRange(
			gridId: number,
			column: number,
			columnEnd: number,
			row: number,
			rowEnd: number
		): void
		/**
		 * Copy the formatting of the range to the given location. If the destination is larger or smaller
		 * than the source range then the source is repeated or truncated accordingly. Note that this
		 * method copies the formatting only.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var source = ss.getSheets()[0];
		 * var destination = ss.getSheets()[1];
		 * 
		 * var range = source.getRange(&quot;B2:D4&quot;);
		 * 
		 * // This copies the formatting in B2:D4 in the source sheet to
		 * // D4:F6 in the second sheet
		 * range.copyFormatToRange(destination, 4, 6, 4, 6);
		 * </code></pre>
		 * 
		 * @param sheet - The target sheet.
		 * @param column - The first column of the target range.
		 * @param columnEnd - The end column of the target range.
		 * @param row - The start row of the target range.
		 * @param rowEnd - The end row of the target range.
		 */
		copyFormatToRange(
			sheet: SpreadsheetApp.Sheet,
			column: number,
			columnEnd: number,
			row: number,
			rowEnd: number
		): void

		/**
		 * Copies the data from a range of cells to another range of cells. Both the values and formatting
		 * are copied.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below copies the first 5 columns over to the 6th column.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeToCopy = sheet.getRange(1, 1, sheet.getMaxRows(), 5);
		 * rangeToCopy.copyTo(sheet.getRange(1, 6));
		 * </code></pre>
		 * 
		 * @param destination - A destination range to copy to; only the top-left cell position is relevant.
		 */
		copyTo(
			destination: SpreadsheetApp.Range
		): void
		/**
		 * Copies the data from a range of cells to another range of cells. By default both the values and
		 * formatting are copied, but this can be overridden using advanced arguments.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below copies only the values of the first 5 columns over to the 6th column.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * sheet.getRange(&quot;A:E&quot;).copyTo(sheet.getRange(&quot;F1&quot;), {contentsOnly:true});
		 * </code></pre>
		 * 
		 * @param destination - A destination range to copy to; only the top-left cell position is relevant.
		 * @param options - A JavaScript object that specifies advanced parameters, as listed below.
		 */
		copyTo(
			destination: SpreadsheetApp.Range,
			options: object
		): void
		/**
		 * Copies the data from a range of cells to another range of cells.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below copies only the values of the first 5 columns over to the 6th column.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * sheet.getRange(&quot;A:E&quot;).copyTo(sheet.getRange(&quot;F1&quot;), SpreadsheetApp.CopyPasteType.PASTE_VALUES);
		 * </code></pre>
		 * 
		 * @param destination - A destination range to copy to; only the top-left cell position is relevant.
		 * @param copyPasteType - A type that specifies how the range contents are pasted to the
		 *     destination.
		 * @param transposed - Whether the range should be pasted in its transposed orientation.
		 */
		copyTo(
			destination: SpreadsheetApp.Range,
			copyPasteType: SpreadsheetApp.CopyPasteType,
			transposed: Boolean
		): void

		/**
		 * Copy the content of the range to the given location. If the destination is larger or smaller
		 * than the source range then the source is repeated or truncated accordingly.
		 * 
		 * <p>For a detailed description of the gridId parameter, see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#getGridId()'>getGridId()</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var source = ss.getSheets()[0];
		 * 
		 * var range = source.getRange(&quot;B2:D4&quot;);
		 * 
		 * // This copies the data in B2:D4 in the source sheet to
		 * // D4:F6 in the sheet with gridId 0
		 * range.copyValuesToRange(0, 4, 6, 4, 6);
		 * </code></pre>
		 * 
		 * @param gridId - The unique ID of the sheet within the spreadsheet, irrespective of position.
		 * @param column - The first column of the target range.
		 * @param columnEnd - The end column of the target range.
		 * @param row - The start row of the target range.
		 * @param rowEnd - The end row of the target range.
		 */
		copyValuesToRange(
			gridId: number,
			column: number,
			columnEnd: number,
			row: number,
			rowEnd: number
		): void
		/**
		 * Copy the content of the range to the given location. If the destination is larger or smaller
		 * than the source range then the source is repeated or truncated accordingly.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var source = ss.getSheets()[0];
		 * var destination = ss.getSheets()[1];
		 * 
		 * var range = source.getRange(&quot;B2:D4&quot;);
		 * 
		 * // This copies the data in B2:D4 in the source sheet to
		 * // D4:F6 in the second sheet
		 * range.copyValuesToRange(destination, 4, 6, 4, 6);
		 * </code></pre>
		 * 
		 * @param sheet - The target sheet.
		 * @param column - The first column of the target range.
		 * @param columnEnd - The end column of the target range.
		 * @param row - The start row of the target range.
		 * @param rowEnd - The end row of the target range.
		 */
		copyValuesToRange(
			sheet: SpreadsheetApp.Sheet,
			column: number,
			columnEnd: number,
			row: number,
			rowEnd: number
		): void

		/**
		 * Creates an empty data source pivot table from the data source, anchored at the first cell in
		 * this range.
		 * 
		 * <p>This example shows how to create and configure a new data source pivot table.
		 * 
		 * <pre class="prettyprint"><code>
		 * var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
		 * var anchorCell = spreadsheet.getSheets()[0].getRange(&#39;A1&#39;);
		 * var dataSource = spreadsheet.getDataSources()[0];
		 * 
		 * var pivotTable = anchorCell.createDataSourcePivotTable(dataSource);
		 * pivotTable.addRowGroup(&#39;dataColumnA&#39;);
		 * pivotTable.addColumnGroup(&#39;dataColumnB&#39;);
		 * pivotTable.addPivotValue(&#39;dataColumnC&#39;, SpreadsheetApp.PivotTableSummarizeFunction.SUM);
		 * pivotTable.addFilter(&#39;dataColumnA&#39;,
		 *                      SpreadsheetApp.newFilterCriteria().whenTextStartsWith(&#39;A&#39;).build());
		 * </code></pre>
		 * 
		 * @param dataSource - The data source to create the pivot table from.
		 * 
		 * @returns The newly created data source pivot table.
		 */
		createDataSourcePivotTable(
			dataSource: SpreadsheetApp.DataSource
		): SpreadsheetApp.DataSourcePivotTable
		/**
		 * Creates an empty data source table from the data source, anchored at the first cell in this
		 * range.
		 * 
		 * <p>This example shows how to create and configure a new data source table.
		 * 
		 * <pre class="prettyprint"><code>
		 * var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
		 * var anchorCell = spreadsheet.getSheets()[0].getRange(&#39;A1&#39;);
		 * var dataSource = spreadsheet.getDataSources()[0];
		 * 
		 * var dataSourceTable = anchorCell.createDataSourceTable(dataSource);
		 *     .addColumns(&#39;dataColumnA&#39;, &#39;dataColumnB&#39;, &#39;dataColumnC&#39;)
		 *     .addSortSpec(&#39;dataColumnA&#39;, /* ascending= *\/ true)
		 *     .addSortSpec(&#39;dataColumnB&#39;, /* ascending= *\/ false);
		 * </code></pre>
		 * 
		 * @param dataSource - The data source to create the pivot table from.
		 * 
		 * @returns The newly created data source table.
		 */
		createDataSourceTable(
			dataSource: SpreadsheetApp.DataSource
		): SpreadsheetApp.DataSourceTable
		/**
		 * Returns a DeveloperMetadataFinderApi for finding developer metadata within the scope of this
		 * range. Metadata is within the scope of the range only if it is wholly contained within that
		 * range. For example, metadata associated with the row ‘3:3’ is not in the scope of a range
		 * ‘A1:D5’ but is within the scope of a range ‘1:5’.
		 * 
		 * @returns A developer metadata finder to search for metadata in the scope of this range.
		 */
		createDeveloperMetadataFinder(): SpreadsheetApp.DeveloperMetadataFinder
		/**
		 * Creates a filter applied to the range. There can be at most one filter in a sheet.
		 * 
		 * @returns The new filter.
		 */
		createFilter(): SpreadsheetApp.Filter
		/**
		 * Creates an empty pivot table from the specified <code>sourceData</code> anchored at the first cell
		 * in this range.
		 * 
		 * @param sourceData - The data to create the pivot table from.
		 * 
		 * @returns The newly created <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/pivot-table.html'>PivotTable</a></code>.
		 */
		createPivotTable(
			sourceData: SpreadsheetApp.Range
		): SpreadsheetApp.PivotTable
		/**
		 * Creates a text finder for the range, which can find and replace text in this range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * var range = sheet.getActiveRange();
		 * 
		 * // Creates  a text finder for the range.
		 * var textFinder = range.createTextFinder(&#39;dog&#39;);
		 * 
		 * // Returns the first occurrence of &#39;dog&#39;.
		 * var firstOccurrence = textFinder.findNext();
		 * 
		 * // Replaces the last found occurrence of &#39;dog&#39; with &#39;cat&#39; and returns the number
		 * // of occurrences replaced.
		 * var numOccurrencesReplaced = findOccurrence.replaceWith(&#39;cat&#39;);
		 * </code></pre>
		 * 
		 * @param findText - The text to search for.
		 * 
		 * @returns The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/text-finder.html'>TextFinder</a></code> for the range
		 */
		createTextFinder(
			findText: string
		): SpreadsheetApp.TextFinder
		/**
		 * Deletes this range of cells. Existing data in the sheet along the provided dimension is shifted
		 * towards the deleted range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:D10&quot;);
		 * range.deleteCells(SpreadsheetApp.Dimension.COLUMNS);
		 * </code></pre>
		 * 
		 * @param shiftDimension - The dimension along which to shift existing data.
		 */
		deleteCells(
			shiftDimension: SpreadsheetApp.Dimension
		): void
		/**
		 * Expands the collapsed groups whose range or control toggle intersects with this range. The
		 * control toggle location is the index at which the control toggle is shown, directly before or
		 * after the group depending on settings. If there is more than one group at the same location,
		 * the shallowest group is expanded.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * var range = sheet.getActiveRange();
		 * 
		 * // All row and column groups within the range are expanded.
		 * range.expandGroups();
		 * </code></pre>
		 * 
		 * @returns This range, for chaining.
		 */
		expandGroups(): SpreadsheetApp.Range
		/**
		 * Returns a string description of the range, in A1 notation.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(1, 1, 2, 5);
		 * 
		 * // Logs &quot;A1:E2&quot;
		 * Logger.log(range.getA1Notation());
		 * </code></pre>
		 * 
		 * @returns The string description of the range in A1 notation.
		 */
		getA1Notation(): string
		/**
		 * Returns the background color of the top-left cell in the range (for example, <code>&#39;#ffffff&#39;</code>).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B5&quot;);
		 * Logger.log(cell.getBackground());
		 * </code></pre>
		 * 
		 * @returns The color code of the background.
		 */
		getBackground(): string
		/**
		 * Returns the background color of the top-left cell in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B5&quot;);
		 * Logger.log(cell.getBackgroundObject().asRgbColor().asHexString());
		 * </code></pre>
		 * 
		 * @returns The background color of the top-left cell in the range.
		 */
		getBackgroundObject(): SpreadsheetApp.Color
		/**
		 * Returns the background colors of the cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;B5:C6&quot;);
		 * var bgColors = range.getBackgroundObjects();
		 * for (var i in bgColors) {
		 *   for (var j in bgColors[i]) {
		 *     Logger.log(bgColors[i][j].asRgbColor().asHexString());
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of background colors.
		 */
		getBackgroundObjects(): SpreadsheetApp.Color[][]
		/**
		 * Returns the background colors of the cells in the range (for example, <code>&#39;#ffffff&#39;</code>).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;B5:C6&quot;);
		 * var bgColors = range.getBackgrounds();
		 * for (var i in bgColors) {
		 *   for (var j in bgColors[i]) {
		 *     Logger.log(bgColors[i][j]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of color codes of the backgrounds.
		 */
		getBackgrounds(): string[][]
		/**
		 * Returns all the bandings that are applied to any cells in this range.
		 * 
		 * @returns All the bandings that are applied to any cells in this range.
		 */
		getBandings(): SpreadsheetApp.Banding[]
		/**
		 * Returns a given cell within a range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * // The row and column here are relative to the range
		 * // getCell(1,1) in this code returns the cell at B2, B2
		 * var cell = range.getCell(1, 1);
		 * Logger.log(cell.getValue());
		 * </code></pre>
		 * 
		 * @param row - The row of the cell relative to the range.
		 * @param column - The column of the cell relative to the range.
		 * 
		 * @returns A range containing a single cell at the specified coordinates.
		 */
		getCell(
			row: number,
			column: number
		): SpreadsheetApp.Range
		/**
		 * Returns the starting column position for this range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * // Logs &quot;2.0&quot;
		 * Logger.log(range.getColumn());
		 * </code></pre>
		 * 
		 * @returns The range's starting column position in the spreadsheet.
		 */
		getColumn(): number
		/**
		 * Returns a copy of the range expanded in the four cardinal <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/direction.html'>Direction</a></code>s to cover all
		 * adjacent cells with data in them. If the range is surrounded by empty cells not including those
		 * along the diagonals, the range itself is returned. This is similar to selecting the range and
		 * typing <code>Ctrl+A</code> in the editor.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Assume the active spreadsheet is blank.
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * sheet.getRange(&quot;C2&quot;).setValue(100);
		 * sheet.getRange(&quot;B3&quot;).setValue(100);
		 * sheet.getRange(&quot;D3&quot;).setValue(100);
		 * sheet.getRange(&quot;C4&quot;).setValue(100);
		 * // Logs &quot;B2:D4&quot;
		 * Logger.log(sheet.getRange(&quot;C3&quot;).getDataRegion().getA1Notation());
		 * </code></pre>
		 * 
		 * @returns The range's data region or a range for the entire spreadsheet.
		 */
		getDataRegion(): SpreadsheetApp.Range
		/**
		 * Returns a copy of the range expanded <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/direction.html#UP'>Direction.UP</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/direction.html#DOWN'>Direction.DOWN</a></code> if the
		 * specified dimension is <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/dimension.html#ROWS'>Dimension.ROWS</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/direction.html#NEXT'>Direction.NEXT</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/direction.html#PREVIOUS'>Direction.PREVIOUS</a></code> if the dimension is <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/dimension.html#COLUMNS'>Dimension.COLUMNS</a></code>. The expansion of the range
		 * is based on detecting data next to the range that is organized like a table. The expanded range
		 * covers all adjacent cells with data in them along the specified dimension including the table
		 * boundaries. If the original range is surrounded by empty cells along the specified dimension,
		 * the range itself is returned. This method is similar to selecting the range and typing <code>
		 * Ctrl+Space</code> for columns or <code>Shift+Space</code> for rows in the editor.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Assume the active spreadsheet is blank.
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * sheet.getRange(&quot;C2&quot;).setValue(100);
		 * sheet.getRange(&quot;B3&quot;).setValue(100);
		 * sheet.getRange(&quot;D3&quot;).setValue(100);
		 * sheet.getRange(&quot;C4&quot;).setValue(100);
		 * // Logs &quot;C2:C4&quot;
		 * Logger.log(sheet.getRange(&quot;C3&quot;).getDataRegion(SpreadsheetApp.Dimension.ROWS).getA1Notation());
		 * // Logs &quot;B3:D3&quot;
		 * Logger.log(
		 *     sheet.getRange(&quot;C3&quot;).getDataRegion(SpreadsheetApp.Dimension.COLUMNS).getA1Notation());
		 * </code></pre>
		 * 
		 * @param dimension - The dimension along which to expand the range.
		 * 
		 * @returns The range's data region or a range covering each column or each row spanned by the
		 *     original range.
		 */
		getDataRegion(
			dimension: SpreadsheetApp.Dimension
		): SpreadsheetApp.Range

		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula.html'>DataSourceFormula</a></code> for the first cell in the range, or <code>null</code> if
		 * the cell doesn't contain a data source formula.
		 * 
		 * @returns The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula.html'>DataSourceFormula</a></code> for the cell.
		 */
		getDataSourceFormula(): SpreadsheetApp.DataSourceFormula
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula.html'>DataSourceFormula</a></code>s for the cells in the range.
		 * 
		 * @returns An array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula.html'>DataSourceFormula</a></code>s.
		 */
		getDataSourceFormulas(): SpreadsheetApp.DataSourceFormula[]
		/**
		 * Gets all the data source pivot tables intersecting with the range.
		 * 
		 * @returns A list of data source pivot tables.
		 */
		getDataSourcePivotTables(): SpreadsheetApp.DataSourcePivotTable[]
		/**
		 * Gets all the data source tables intersecting with the range.
		 * 
		 * @returns A list of data source tables.
		 */
		getDataSourceTables(): SpreadsheetApp.DataSourceTable[]
		/**
		 * Returns a URL for the data in this range, which can be used to create charts and queries.
		 * 
		 * <p><div class="ds-selector-tabs"><section>
		 * 
		 * <h3>Code.gs</h3>
		 * 
		 * <pre class="prettyprint"><code>
		 * function doGet() {
		 *   var ss = SpreadsheetApp.openById(&#39;1khO6hBWTNNyvyyxvob7aoZTI9ZvlqqASNeq0e29Tw2c&#39;);
		 *   var sheet = ss.getSheetByName(&#39;ContinentData&#39;);
		 *   var range = sheet.getRange(&#39;A1:B8&#39;);
		 * 
		 *   var template = HtmlService.createTemplateFromFile(&#39;piechart&#39;);
		 *   template.dataSourceUrl = range.getDataSourceUrl();
		 *   return template.evaluate();
		 * }
		 * </code></pre>
		 * 
		 * </section> <section>
		 * 
		 * <h3>piechart.html</h3>
		 * 
		 * <pre class="prettyprint"><code>
		 * &lt;!DOCTYPE html&gt;
		 * &lt;html&gt;
		 *   &lt;head&gt;
		 *     &lt;!--Load the AJAX API--&gt;
		 *     &lt;script type=&quot;text/javascript&quot; src=&quot;https://www.gstatic.com/charts/loader.js&quot;&gt;&lt;/script&gt;
		 *     &lt;script type=&quot;text/javascript&quot;&gt;
		 *       // Load the Visualization API and the corechart package.
		 *       google.charts.load(&#39;current&#39;, {&#39;packages&#39;: [&#39;corechart&#39;]});
		 * 
		 *       // Set a callback to run when the Google Visualization API is loaded.
		 *       google.charts.setOnLoadCallback(queryData);
		 * 
		 *       function queryData() {
		 *         var query = new google.visualization.Query(&#39;&lt;?= dataSourceUrl ?&gt;&#39;);
		 *         query.send(drawChart);
		 *       }
		 * 
		 *       // Callback that creates and populates a data table,
		 *       // instantiates the pie chart, passes in the data and
		 *       // draws it.
		 *       function drawChart(response) {
		 *         if (response.isError()) {
		 *           alert(&#39;Error: &#39; + response.getMessage() + &#39; &#39; + response.getDetailedMessage());
		 *           return;
		 *         }
		 *         var data = response.getDataTable();
		 * 
		 *         // Set chart options.
		 *         var options = {
		 *           title: &#39;Population by Continent&#39;,
		 *           width: 400,
		 *           height: 300
		 *         };
		 * 
		 *         // Instantiate and draw the chart, passing in some options.
		 *         var chart = new google.visualization.PieChart(document.getElementById(&#39;chart_div&#39;));
		 *         chart.draw(data, options);
		 *       }
		 *     &lt;/script&gt;
		 *   &lt;/head&gt;
		 *   &lt;body&gt;
		 *     &lt;!-- Div that holds the pie chart. --&gt;
		 *     &lt;div id=&quot;chart_div&quot;&gt;&lt;/div&gt;
		 *   &lt;/body&gt;
		 * &lt;/html&gt;
		 * </code></pre>
		 * 
		 * </section> </div>
		 * 
		 * @returns A URL for this range as a data source that can be passed to other APIs such as charts.
		 */
		getDataSourceUrl(): string
		/**
		 * Return the data inside this object as a DataTable.
		 * 
		 * @returns the data as a datatable.
		 */
		getDataTable(): DataTable
		/**
		 * Return the data inside this range as a DataTable.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;A1:B7&quot;);
		 * 
		 * // Calling this method with &quot;true&quot; sets the first line to be the title of the axes
		 * var datatable = range.getDataTable(true);
		 * 
		 * // Note that this doesn&#39;t build an EmbeddedChart, so you can&#39;t just use
		 * // Sheet#insertChart(). To do that, use sheet.newChart().addRange() instead.
		 * var chart = Charts.newBarChart()
		 *     .setDataTable(datatable)
		 *     .setOption(&quot;title&quot;, &quot;Your Title Here&quot;)
		 *     .build();
		 * </code></pre>
		 * 
		 * @param firstRowIsHeader - Whether to treat the first row as a header.
		 * 
		 * @returns The data as a datatable.
		 */
		getDataTable(
			firstRowIsHeader: Boolean
		): DataTable

		/**
		 * Returns the data validation rule for the top-left cell in the range. If data validation has not
		 * been set on the cell, this method returns <code>null</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log information about the data validation rule for cell A1.
		 * var cell = SpreadsheetApp.getActive().getRange(&#39;A1&#39;);
		 * var rule = cell.getDataValidation();
		 * if (rule != null) {
		 *   var criteria = rule.getCriteriaType();
		 *   var args = rule.getCriteriaValues();
		 *   Logger.log(&#39;The data validation rule is %s %s&#39;, criteria, args);
		 * } else {
		 *   Logger.log(&#39;The cell does not have a data validation rule.&#39;)
		 * }
		 * </code></pre>
		 * 
		 * @returns The data validation rule for the top-left cell in the range.
		 */
		getDataValidation(): SpreadsheetApp.DataValidation
		/**
		 * Returns the data validation rules for all cells in the range. If data validation has not been
		 * set on a given cell, this method returns <code>null</code> for that cell's position in the array.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Change existing data validation rules that require a date in 2013 to require a date in 2014.
		 * var oldDates = [new Date(&#39;1/1/2013&#39;), new Date(&#39;12/31/2013&#39;)];
		 * var newDates = [new Date(&#39;1/1/2014&#39;), new Date(&#39;12/31/2014&#39;)];
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
		 * var rules = range.getDataValidations();
		 * 
		 * for (var i = 0; i &lt; rules.length; i++) {
		 *   for (var j = 0; j &lt; rules[i].length; j++) {
		 *     var rule = rules[i][j];
		 * 
		 *     if (rule != null) {
		 *       var criteria = rule.getCriteriaType();
		 *       var args = rule.getCriteriaValues();
		 * 
		 *       if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
		 *           &amp;&amp; args[0].getTime() == oldDates[0].getTime()
		 *           &amp;&amp; args[1].getTime() == oldDates[1].getTime()) {
		 *         // Create a builder from the existing rule, then change the dates.
		 *         rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
		 *       }
		 *     }
		 *   }
		 * }
		 * range.setDataValidations(rules);
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of data validation rules associated with the cells in the
		 *     range.
		 */
		getDataValidations(): SpreadsheetApp.DataValidation[][]
		/**
		 * Get the developer metadata associated with this range.
		 * 
		 * @returns The developer metadata associated with this range.
		 */
		getDeveloperMetadata(): SpreadsheetApp.DeveloperMetadata[]
		/**
		 * Returns the displayed value of the top-left cell in the range. The value is a <code>String</code>.
		 * The displayed value takes into account date, time and currency formatting formatting, including
		 * formats applied automatically by the spreadsheet's locale setting. Empty cells return an empty
		 * string.
		 * 
		 * @returns The displayed value in this cell.
		 */
		getDisplayValue(): string
		/**
		 * Returns the rectangular grid of values for this range.
		 * 
		 * <p>Returns a two-dimensional array of displayed values, indexed by row, then by column. The
		 * values are <code>String</code> objects. The displayed value takes into account date, time and
		 * currency formatting, including formats applied automatically by the spreadsheet's locale
		 * setting. Empty cells are represented by an empty string in the array. Remember that while a
		 * range index starts at <code>1, 1</code>, the JavaScript array is indexed from <code>[0][0]</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below gets the displayed values for the range C2:G8
		 * // in the active spreadsheet.  Note that this is a JavaScript array.
		 * var values = SpreadsheetApp.getActiveSheet().getRange(2, 3, 6, 4).getDisplayValues();
		 * Logger.log(values[0][0]);
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of values.
		 */
		getDisplayValues(): string[][]
		/**
		 * Returns the filter in the sheet this range belongs to, or <code>null</code> if there is no filter on
		 * the sheet.
		 * 
		 * @returns The filter.
		 */
		getFilter(): SpreadsheetApp.Filter
		/**
		 * Returns the font color of the cell in the top-left corner of the range, in CSS notation (such
		 * as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * Logger.log(range.getFontColor());
		 * </code></pre>
		 * 
		 * @returns The font color in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>).
		 */
		getFontColor(): string
		/**
		 * Returns the font color of the cell in the top-left corner of the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * Logger.log(range.getFontColorObject().asRgbColor().asHexString());
		 * </code></pre>
		 * 
		 * @returns The font color of the top-left cell in the range.
		 */
		getFontColorObject(): SpreadsheetApp.Color
		/**
		 * Returns the font colors of the cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * var results = range.getFontColorObjects();
		 * 
		 * for (var i in results) {
		 *   for (var j in results[i]) {
		 *     Logger.log(results[i][j].asRgbColor().asHexString());
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of font colors associated with cells in the range.
		 */
		getFontColorObjects(): SpreadsheetApp.Color[][]
		/**
		 * Returns the font colors of the cells in the range in CSS notation (such as <code>&#39;#ffffff&#39;</code> or
		 * <code>&#39;white&#39;</code>).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * var results = range.getFontColors();
		 * 
		 * for (var i in results) {
		 *   for (var j in results[i]) {
		 *     Logger.log(results[i][j]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of font colors associated with cells in the range.
		 */
		getFontColors(): string[][]
		/**
		 * Returns the font families of the cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * var results = range.getFontFamilies();
		 * 
		 * for (var i in results) {
		 *   for (var j in results[i]) {
		 *     Logger.log(results[i][j]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of font families associated with cells in the range.
		 */
		getFontFamilies(): string[][]
		/**
		 * Returns the font family of the cell in the top-left corner of the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * Logger.log(range.getFontFamily());
		 * </code></pre>
		 * 
		 * @returns The font family of the cell.
		 */
		getFontFamily(): string
		/**
		 * Gets the line style of the cell in the top-left corner of the range (<code>&#39;underline&#39;</code>,
		 * <code>&#39;line-through&#39;</code>, or <code>&#39;none&#39;</code>).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * Logger.log(range.getFontLine());
		 * </code></pre>
		 * 
		 * @returns The font line.
		 */
		getFontLine(): string
		/**
		 * Gets the line style of the cells in the range (<code>&#39;underline&#39;</code>, <code>&#39;line-through&#39;</code>, or
		 * <code>&#39;none&#39;</code>).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * var results = range.getFontLines();
		 * 
		 * for (var i in results) {
		 *   for (var j in results[i]) {
		 *     Logger.log(results[i][j]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of font lines associated with cells in the range.
		 */
		getFontLines(): string[][]
		/**
		 * Returns the font size in point size of the cell in the top-left corner of the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * Logger.log(range.getFontSize());
		 * </code></pre>
		 * 
		 * @returns The font size in point size.
		 */
		getFontSize(): number
		/**
		 * Returns the font sizes of the cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * var results = range.getFontSizes();
		 * 
		 * for (var i in results) {
		 *   for (var j in results[i]) {
		 *     Logger.log(results[i][j]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of font sizes of text associated with cells in the range.
		 */
		getFontSizes(): number[][]
		/**
		 * Returns the font style (<code>&#39;italic&#39;</code> or <code>&#39;normal&#39;</code>) of the cell in the top-left
		 * corner of the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * Logger.log(range.getFontStyle());
		 * </code></pre>
		 * 
		 * @returns The font style of the text in the cell.
		 */
		getFontStyle(): string
		/**
		 * Returns the font styles of the cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * var results = range.getFontStyles();
		 * 
		 * for (var i in results) {
		 *   for (var j in results[i]) {
		 *     Logger.log(results[i][j]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of font styles of text associated with cells in the range.
		 */
		getFontStyles(): string[][]
		/**
		 * Returns the font weight (normal/bold) of the cell in the top-left corner of the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * Logger.log(range.getFontWeight());
		 * </code></pre>
		 * 
		 * @returns The font weight of the text in the cell.
		 */
		getFontWeight(): string
		/**
		 * Returns the font weights of the cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * var results = range.getFontWeights();
		 * 
		 * for (var i in results) {
		 *   for (var j in results[i]) {
		 *     Logger.log(results[i][j]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of font weights of text associated with cells in the range.
		 */
		getFontWeights(): string[][]
		/**
		 * Returns the formula (A1 notation) for the top-left cell of the range, or an empty string if the
		 * cell is empty or doesn't contain a formula.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This assumes you have a function in B5 that sums up
		 * // B2:B4
		 * var range = sheet.getRange(&quot;B5&quot;);
		 * 
		 * // Logs the calculated value and the formula
		 * Logger.log(&quot;Calculated value: %s Formula: %s&quot;,
		 *            range.getValue(),
		 *            range.getFormula());
		 * </code></pre>
		 * 
		 * @returns The formula for the cell.
		 */
		getFormula(): string
		/**
		 * Returns the formula (R1C1 notation) for a given cell, or <code>null</code> if none.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;B5&quot;);
		 * var formula = range.getFormulaR1C1();
		 * Logger.log(formula);
		 * </code></pre>
		 * 
		 * @returns The formula in R1C1 notation.
		 */
		getFormulaR1C1(): string
		/**
		 * Returns the formulas (A1 notation) for the cells in the range. Entries in the 2D array are
		 * empty strings for cells with no formula.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;B5:C6&quot;);
		 * var formulas = range.getFormulas();
		 * for (var i in formulas) {
		 *   for (var j in formulas[i]) {
		 *     Logger.log(formulas[i][j]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of formulas in string format.
		 */
		getFormulas(): string[][]
		/**
		 * Returns the formulas (R1C1 notation) for the cells in the range. Entries in the 2D array are
		 * <code>null</code> for cells with no formula.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;B5:C6&quot;);
		 * var formulas = range.getFormulasR1C1();
		 * for (var i in formulas) {
		 *   for (var j in formulas[i]) {
		 *     Logger.log(formulas[i][j]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of formulas in R1C1 notation.
		 */
		getFormulasR1C1(): string[][]
		/**
		 * Returns the grid ID of the range's parent sheet. IDs are random non-negative int values.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the grid ID of the first sheet (by tab position) in the spreadsheet.
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * Logger.log(range.getGridId());
		 * </code></pre>
		 * 
		 * @returns The grid ID of the parent sheet.
		 */
		getGridId(): number
		/**
		 * Returns the height of the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * // logs 3.0
		 * Logger.log(range.getHeight());
		 * </code></pre>
		 * 
		 * @returns The height of the range.
		 */
		getHeight(): number
		/**
		 * Returns the horizontal alignment of the text (left/center/right) of the cell in the top-left
		 * corner of the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * Logger.log(range.getHorizontalAlignment());
		 * </code></pre>
		 * 
		 * @returns The horizontal alignment of the text in the cell.
		 */
		getHorizontalAlignment(): string
		/**
		 * Returns the horizontal alignments of the cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * var results = range.getHorizontalAlignments();
		 * 
		 * for (var i in results) {
		 *   for (var j in results[i]) {
		 *     Logger.log(results[i][j]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of horizontal alignments of text associated with cells in the
		 *     range.
		 */
		getHorizontalAlignments(): string[][]
		/**
		 * Returns the end column position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * // Logs &quot;4.0&quot;
		 * Logger.log(range.getLastColumn());
		 * </code></pre>
		 * 
		 * @returns The range's ending column position in the spreadsheet.
		 */
		getLastColumn(): number
		/**
		 * Returns the end row position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * // Logs &quot;4.0&quot;
		 * Logger.log(range.getLastRow());
		 * </code></pre>
		 * 
		 * @returns The range's ending row position in the spreadsheet.
		 */
		getLastRow(): number
		/**
		 * Returns an array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> objects representing merged cells that either are fully
		 * within the current range, or contain at least one cell in the current range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * 
		 * var mergedRanges = range.getMergedRanges();
		 * for (var i = 0; i &lt; mergedRanges.length; i++) {
		 *   Logger.log(mergedRanges[i].getA1Notation());
		 *   Logger.log(mergedRanges[i].getDisplayValue());
		 * }
		 * </code></pre>
		 * 
		 * @returns An array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> objects, representing merged cells overlapping the range.
		 */
		getMergedRanges(): SpreadsheetApp.Range[]
		/**
		 * Starting at the cell in the first column and row of the range, returns the next cell in the
		 * given direction that is the edge of a contiguous range of cells with data in them or the cell
		 * at the edge of the spreadsheet in that direction. This is equivalent to typing <code>
		 * Ctrl+[arrow key]</code> in the editor.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Assume the active spreadsheet is blank.
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;C3:E5&quot;);
		 * // Logs &quot;C1&quot;
		 * Logger.log(range.getNextDataCell(SpreadsheetApp.Direction.UP).getA1Notation());
		 * </code></pre>
		 * 
		 * @param direction - The direction in which to find the next data region edge cell.
		 * 
		 * @returns The data region edge cell or the cell at the edge of the spreadsheet.
		 */
		getNextDataCell(
			direction: SpreadsheetApp.Direction
		): SpreadsheetApp.Range
		/**
		 * Returns the note associated with the given range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * Logger.log(range.getNote());
		 * </code></pre>
		 * 
		 * @returns The note associated with the given cell.
		 */
		getNote(): string
		/**
		 * Returns the notes associated with the cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * var results = range.getNotes();
		 * 
		 * for (var i in results) {
		 *   for (var j in results[i]) {
		 *     Logger.log(results[i][j]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of notes associated with cells in the range.
		 */
		getNotes(): string[][]
		/**
		 * Returns the number of columns in this range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;B2:D5&quot;);
		 * Logger.log(range.getNumColumns());
		 * </code></pre>
		 * 
		 * @returns The number of columns in this range.
		 */
		getNumColumns(): number
		/**
		 * Returns the number of rows in this range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;B2:D5&quot;);
		 * Logger.log(range.getNumRows());
		 * </code></pre>
		 * 
		 * @returns The number of rows in this range.
		 */
		getNumRows(): number
		/**
		 * Get the number or date formatting of the top-left cell of the given range. The returned format
		 * patterns are described in the <a href="/sheets/api/guides/formats">Sheets API
		 * documentation</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;C4&quot;);
		 * Logger.log(cell.getNumberFormat());
		 * </code></pre>
		 * 
		 * @returns The number format of the top-left cell of the range.
		 */
		getNumberFormat(): string
		/**
		 * Returns the number or date formats for the cells in the range. The returned format patterns are
		 * described in the <a href="/sheets/api/guides/formats">Sheets API documentation</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;B5:C6&quot;);
		 * var formats = range.getNumberFormats();
		 * for (var i in formats) {
		 *   for (var j in formats[i]) {
		 *     Logger.log(formats[i][j]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of number formats.
		 */
		getNumberFormats(): string[][]
		/**
		 * Returns the Rich Text value for the top left cell of the range, or <code>null</code> if the cell
		 * value is not text.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the Rich Text value of cell D4.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;D4:F6&quot;);
		 * var richText = range.getRichTextValue();
		 * Logger.log(richText);
		 * </code></pre>
		 * 
		 * @returns The Rich Text value of the top left cell in the range, or <code>null</code> if the cell
		 *     value is not text.
		 */
		getRichTextValue(): SpreadsheetApp.RichTextValue
		/**
		 * Returns the Rich Text values for the cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the Rich Text values for all cells in range B5:C6
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;B5:C6&quot;);
		 * var values = range.getRichTextValues();
		 * 
		 * for (var i = 0; i &lt; values.length; i++) {
		 *   for (var j = 0; j &lt; values[i].length; j++) {
		 *     Logger.log(values[i][j]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of Rich Text values.
		 */
		getRichTextValues(): SpreadsheetApp.RichTextValue[][]
		/**
		 * Returns the row position for this range. Identical to <a
		 * href="/apps-script/reference/spreadsheet/range#getrowindex">getRowIndex()</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;B2&quot;);
		 * Logger.log(range.getRow());
		 * </code></pre>
		 * 
		 * @returns The row position of the range.
		 */
		getRow(): number
		/**
		 * Returns the row position for this range. Identical to <a
		 * href="/apps-script/reference/spreadsheet/range#getrow">getRow()</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;B2&quot;);
		 * Logger.log(range.getRowIndex());
		 * </code></pre>
		 * 
		 * @returns The row position of the range.
		 */
		getRowIndex(): number
		/**
		 * Returns the sheet this range belongs to.
		 * 
		 * @returns The sheet that this range belongs to.
		 */
		getSheet(): SpreadsheetApp.Sheet
		/**
		 * Returns the text direction for the top left cell of the range. Returns <code>null</code> if the cell
		 * text direction is determined with automatic detection.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the text direction of cell B1.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;B1:D4&quot;);
		 * Logger.log(range.getTextDirection());
		 * </code></pre>
		 * 
		 * @returns The text direction of the top left cell in the range.
		 */
		getTextDirection(): SpreadsheetApp.TextDirection
		/**
		 * Returns the text directions for the cells in the range. Entries in the 2D array are <code>null</code> for cells using automatic detection.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the text directions for all cells in range B5:C6
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;B5:C6&quot;);
		 * var directions = range.getTextDirections();
		 * 
		 * for (var i = 0; i &lt; directions.length; i++) {
		 *   for (var j = 0; j &lt; directions[i].length; j++) {
		 *     Logger.log(directions[i][j]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of text directions.
		 */
		getTextDirections(): SpreadsheetApp.TextDirection[][]
		/**
		 * Returns the text rotation settings for the top left cell of the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the text rotation settings for a cell.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * 
		 * var cell = sheet.getRange(&quot;A1&quot;);
		 * Logger.log(cell.getTextRotation());
		 * </code></pre>
		 * 
		 * @returns The text rotation settings.
		 */
		getTextRotation(): SpreadsheetApp.TextRotation
		/**
		 * Returns the text rotation settings for the cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * var results = range.getTextRotations();
		 * 
		 * for (var i in results) {
		 *   for (var j in results[i]) {
		 *     var rotation = results[i][j];
		 *     Logger.log(&quot;Cell [%s, %s] has text rotation: %v&quot;, i, j, rotation);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of text rotations associated with cells in the range.
		 */
		getTextRotations(): SpreadsheetApp.TextRotation[][]
		/**
		 * Returns the text style for the top left cell of the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the text style of cell D4.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;D4:F6&quot;);
		 * var style = range.getTextStyle();
		 * Logger.log(style);
		 * </code></pre>
		 * 
		 * @returns The text style of the top left cell in the range.
		 */
		getTextStyle(): SpreadsheetApp.TextStyle
		/**
		 * Returns the text styles for the cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the text styles for all cells in range B5:C6
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;B5:C6&quot;);
		 * var styles = range.getTextStyles();
		 * 
		 * for (var i = 0; i &lt; styles.length; i++) {
		 *   for (var j = 0; j &lt; styles[i].length; j++) {
		 *     Logger.log(styles[i][j]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of text styles.
		 */
		getTextStyles(): SpreadsheetApp.TextStyle[][]
		/**
		 * Returns the value of the top-left cell in the range. The value may be of type <code>Number</code>,
		 * <code>Boolean</code>, <code>Date</code>, or <code>String</code> depending on the value of the cell. Empty
		 * cells return an empty string.
		 * 
		 * @returns The value in this cell.
		 */
		getValue(): object
		/**
		 * Returns the rectangular grid of values for this range.
		 * 
		 * <p>Returns a two-dimensional array of values, indexed by row, then by column. The values may be
		 * of type <code>Number</code>, <code>Boolean</code>, <code>Date</code>, or <code>String</code>, depending on the
		 * value of the cell. Empty cells are represented by an empty string in the array. Remember that
		 * while a range index starts at <code>1, 1</code>, the JavaScript array is indexed from <code>[0][0]</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below gets the values for the range C2:G8
		 * // in the active spreadsheet.  Note that this is a JavaScript array.
		 * var values = SpreadsheetApp.getActiveSheet().getRange(2, 3, 6, 4).getValues();
		 * Logger.log(values[0][0]);
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of values.
		 */
		getValues(): object[][]
		/**
		 * Returns the vertical alignment (top/middle/bottom) of the cell in the top-left corner of the
		 * range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * Logger.log(range.getVerticalAlignment());
		 * </code></pre>
		 * 
		 * @returns The vertical alignment of the text in the cell.
		 */
		getVerticalAlignment(): string
		/**
		 * Returns the vertical alignments of the cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * var results = range.getVerticalAlignments();
		 * 
		 * for (var i in results) {
		 *   for (var j in results[i]) {
		 *     Logger.log(results[i][j]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of vertical alignments of text associated with cells in the
		 *     range.
		 */
		getVerticalAlignments(): string[][]
		/**
		 * Returns the width of the range in columns.
		 * 
		 * @returns The number of columns in the range.
		 */
		getWidth(): number
		/**
		 * Returns the wrapping policy of the cell in the top-left corner of the range. <code>true</code> if
		 * the text wraps, <code>false</code> if the text does not.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * Logger.log(range.getWrap());
		 * </code></pre>
		 * 
		 * @returns Whether the text in this cell wraps or not.
		 */
		getWrap(): Boolean
		/**
		 * Returns the text wrapping strategies for the cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the text wrapping strategies for all cells in range B5:C6
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;B5:C6&quot;);
		 * var strategies = range.getWrapStrategies();
		 * 
		 * for (var i = 0; i &lt; strategies.length; i++) {
		 *   for (var j = 0; j &lt; strategies[i].length; j++) {
		 *     Logger.log(strategies[i][j]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of text wrapping strategies.
		 */
		getWrapStrategies(): SpreadsheetApp.WrapStrategy[][]
		/**
		 * Returns the text wrapping strategy for the top left cell of the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get the text wrapping strategy of cell B1.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;B1:D4&quot;);
		 * Logger.log(range.getWrapStrategy());
		 * </code></pre>
		 * 
		 * @returns The text wrapping strategy of the top left cell in the range.
		 */
		getWrapStrategy(): SpreadsheetApp.WrapStrategy
		/**
		 * Returns the wrapping policy of the cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * var results = range.getVerticalAlignments();
		 * 
		 * for (var i in results) {
		 *   for (var j in results[i]) {
		 *     var isWrapped = results[i][j];
		 *     if (isWrapped) {
		 *        Logger.log(&quot;Cell [%s, %s] has wrapped text&quot;, i, j);
		 *     }
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns A two-dimensional array of vertical alignments of text associated with cells in the
		 *     range.
		 */
		getWraps(): Boolean[][]
		/**
		 * Inserts empty cells into this range. The new cells retain any formatting present in the cells
		 * previously occupying this range. Existing data in the sheet along the provided dimension is
		 * shifted away from the inserted range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:D10&quot;);
		 * range.insertCells(SpreadsheetApp.Dimension.COLUMNS);
		 * </code></pre>
		 * 
		 * @param shiftDimension - The dimension along which to shift existing data.
		 * 
		 * @returns This range, for chaining.
		 */
		insertCells(
			shiftDimension: SpreadsheetApp.Dimension
		): SpreadsheetApp.Range
		/**
		 * Inserts checkboxes into each cell in the range, configured with <code>true</code> for checked and
		 * <code>false</code> for unchecked. Sets the value of all cells in the range to <code>false</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:B10&#39;);
		 * 
		 * // Inserts checkboxes into each cell in the range A1:B10 configured with &#39;true&#39; for checked
		 * // and &#39;false&#39; for unchecked. Also, sets the value of each cell in the range A1:B10 to &#39;false&#39;.
		 * range.insertCheckboxes();
		 * </code></pre>
		 * 
		 * @returns This range, for chaining.
		 */
		insertCheckboxes(): SpreadsheetApp.Range
		/**
		 * Inserts checkboxes into each cell in the range, configured with a custom value for checked and
		 * the empty string for unchecked. Sets the value of each cell in the range to the empty string.
		 * 
		 * <pre class="prettyprint"><code>
		 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:B10&#39;);
		 * 
		 * // Inserts checkboxes into each cell in the range A1:B10 configured with &#39;yes&#39; for checked
		 * // and the empty string for unchecked. Also, sets the value of each cell in the range A1:B10 to
		 * //  the empty string.
		 * range.insertCheckboxes(&#39;yes&#39;);
		 * </code></pre>
		 * 
		 * @param checkedValue - The checked value for the checkbox data validation.
		 * 
		 * @returns This range, for chaining.
		 */
		insertCheckboxes(
			checkedValue: object
		): SpreadsheetApp.Range
		/**
		 * Inserts checkboxes into each cell in the range, configured with custom values for the checked
		 * and unchecked states. Sets the value of each cell in the range to the custom unchecked value.
		 * 
		 * <pre class="prettyprint"><code>
		 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:B10&#39;);
		 * 
		 * // Inserts checkboxes into each cell in the range A1:B10 configured with &#39;yes&#39; for checked
		 * // and &#39;no&#39; for unchecked. Also, sets the value of each cell in the range A1:B10 to &#39;no&#39;.
		 * range.insertCheckboxes(&#39;yes&#39;, &#39;no&#39;);
		 * </code></pre>
		 * 
		 * @param checkedValue - The checked value for the checkbox data validation.
		 * @param uncheckedValue - The unchecked value for the checkbox data validation.
		 * 
		 * @returns This range, for chaining.
		 */
		insertCheckboxes(
			checkedValue: object,
			uncheckedValue: object
		): SpreadsheetApp.Range

		/**
		 * Returns <code>true</code> if the range is totally blank.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * Logger.log(range.isBlank());
		 * </code></pre>
		 * 
		 * @returns <code>true</code> if the range is blank; <code>false</code> otherwise.
		 */
		isBlank(): Boolean
		/**
		 * Returns whether all cells in the range have their checkbox state as 'checked'. Returns <code>null</code> if some cells are checked and the rest unchecked, or if some cells do not have checkbox
		 * data validation.
		 * 
		 * <pre class="prettyprint"><code>
		 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:A3&#39;);
		 * 
		 * // Inserts checkboxes and sets each cell value to &#39;no&#39; in the range A1:A3.
		 * range.insertCheckboxes(&#39;yes&#39;, &#39;no&#39;);
		 * 
		 * var range1 = SpreadsheetApp.getActive().getRange(&#39;A1&#39;);
		 * range1.setValue(&#39;yes&#39;);
		 * // Sets the value of isRange1Checked as true as it contains the checked value.
		 * var isRange1Checked = range1.isChecked();
		 * 
		 * var range2 = SpreadsheetApp.getActive().getRange(&#39;A2&#39;);
		 * range2.setValue(&#39;no&#39;);
		 * // Sets the value of isRange2Checked as false as it contains the unchecked value.
		 * var isRange2Checked = range2.isChecked();
		 * 
		 * var range3 = SpreadsheetApp.getActive().getRange(&#39;A3&#39;);
		 * range3.setValue(&#39;random&#39;);
		 * // Sets the value of isRange3Checked as null, as it contains an invalid checkbox value.
		 * var isRange3Checked = range3.isChecked();
		 * </code></pre>
		 * 
		 * @returns <code>true</code>, if all cells in the range are checked, <code>false</code> if all cells in the
		 *     range are unchecked, or <code>null</code> if any of the cells are unchecked or do not have
		 *     checkbox data validation.
		 */
		isChecked(): Boolean
		/**
		 * Determines whether the end of the range is bound to a particular column. For example, for the
		 * ranges <code>A1:B10</code> or <code>B:B</code>, which are bound to columns at the end of the range, this
		 * method returns <code>true</code>; for the ranges <code>3:7</code> or <code>A1:5</code>, which are bound only
		 * to particular rows at the end of the range, this method returns <code>false</code>.
		 * 
		 * @returns <code>true</code> if the end of the range is bound to a particular column; <code>false</code>
		 *     otherwise.
		 */
		isEndColumnBounded(): Boolean
		/**
		 * Determines whether the end of the range is bound to a particular row. For example, for the
		 * ranges <code>A1:B10</code> or <code>3:7</code>, which are bound to rows at the end of the range, this
		 * method returns <code>true</code>; for the ranges <code>B:B</code> or <code>A1:C</code>, which are bound only
		 * to particular columns at the end of the range, this method returns <code>false</code>.
		 * 
		 * @returns <code>true</code> if the end of the range is bound to a particular row; <code>false</code>
		 *     otherwise.
		 */
		isEndRowBounded(): Boolean
		/**
		 * Returns <code>true</code> if the cells in the current range overlap any merged cells.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:B3&quot;);
		 * 
		 * // True if any of the cells in A1:B3 is included in a merge.
		 * var isPartOfMerge = range.isPartOfMerge();
		 * </code></pre>
		 * 
		 * @returns <code>true</code> if the range overlaps any merged cells, otherwise returns <code>false</code>.
		 */
		isPartOfMerge(): Boolean
		/**
		 * Determines whether the start of the range is bound to a particular column. For example, for the
		 * ranges <code>A1:B10</code> or <code>B:B</code>, which are bound to columns at the start of the range,
		 * this method returns <code>true</code>; for the range <code>3:7</code>, which is bound only to a row at
		 * the start of the range, this method returns <code>false</code>.
		 * 
		 * @returns <code>true</code> if the start of the range is bound to a particular column; <code>false</code>
		 *     otherwise.
		 */
		isStartColumnBounded(): Boolean
		/**
		 * Determines whether the start of the range is bound to a particular row. For example, for the
		 * ranges <code>A1:B10</code> or <code>3:7</code>, which are bound to rows at the start of the range, this
		 * method returns <code>true</code>; for the range <code>B:B</code>, which is bound only to a particular
		 * column at the start of the range, this method returns <code>false</code>.
		 * 
		 * @returns <code>true</code> if the start of the range is bound to a particular row; <code>false</code>
		 *     otherwise.
		 */
		isStartRowBounded(): Boolean
		/**
		 * Merges the cells in the range together into a single block.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * 
		 * // The code below 2-dimensionally merges the cells in A1 to B3
		 * sheet.getRange(&#39;A1:B3&#39;).merge();
		 * </code></pre>
		 * 
		 * @returns This range, for chaining.
		 */
		merge(): SpreadsheetApp.Range
		/**
		 * Merge the cells in the range across the columns of the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // The code below merges cells C5:E5 into one cell
		 * var range1 = sheet.getRange(&quot;C5:E5&quot;);
		 * range1.mergeAcross();
		 * 
		 * // The code below creates 2 horizontal cells, F5:H5 and F6:H6
		 * var range2 = sheet.getRange(&quot;F5:H6&quot;);
		 * range2.mergeAcross();
		 * </code></pre>
		 * 
		 * @returns This range, for chaining.
		 */
		mergeAcross(): SpreadsheetApp.Range
		/**
		 * Merges the cells in the range together.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * 
		 * // The code below vertically merges the cells in A1 to A10
		 * sheet.getRange(&#39;A1:A10&#39;).mergeVertically();
		 * 
		 * // The code below creates 3 merged columns: B1 to B10, C1 to C10, and D1 to D10
		 * sheet.getRange(&#39;B1:D10&#39;).mergeVertically();
		 * </code></pre>
		 * 
		 * @returns This range, for chaining.
		 */
		mergeVertically(): SpreadsheetApp.Range
		/**
		 * Cut and paste (both format and values) from this range to the target range.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below moves the first 5 columns over to the 6th column
		 * var sheet = SpreadsheetApp.getActiveSheet()
		 * sheet.getRange(&quot;A1:E&quot;).moveTo(sheet.getRange(&quot;F1&quot;));
		 * </code></pre>
		 * 
		 * @param target - A target range to copy this range to; only the top-left cell position is
		 *     relevant.
		 */
		moveTo(
			target: SpreadsheetApp.Range
		): void
		/**
		 * Returns a new range that is offset from this range by the given number of rows and columns
		 * (which can be negative). The new range is the same size as the original range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;A1&quot;);
		 * 
		 * // newCell references B2
		 * var newCell = cell.offset(1, 1);
		 * </code></pre>
		 * 
		 * @param rowOffset - The number of rows down from the range's top-left cell; negative values
		 *     represent rows up from the range's top-left cell.
		 * @param columnOffset - The number of columns right from the range's top-left cell; negative values
		 *     represent columns left from the range's top-left cell.
		 * 
		 * @returns This range, for chaining.
		 */
		offset(
			rowOffset: number,
			columnOffset: number
		): SpreadsheetApp.Range
		/**
		 * Returns a new range that is relative to the current range, whose upper left point is offset
		 * from the current range by the given rows and columns, and with the given height in cells.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;A1&quot;);
		 * 
		 * // newCell references B2:B3
		 * var newRange = cell.offset(1, 1, 2);
		 * </code></pre>
		 * 
		 * @param rowOffset - The number of rows down from the range's top-left cell; negative values
		 *     represent rows up from the range's top-left cell.
		 * @param columnOffset - The number of columns right from the range's top-left cell; negative values
		 *     represent columns left from the range's top-left cell.
		 * @param numRows - The height in rows of the new range.
		 * 
		 * @returns This range, for chaining.
		 */
		offset(
			rowOffset: number,
			columnOffset: number,
			numRows: number
		): SpreadsheetApp.Range
		/**
		 * Returns a new range that is relative to the current range, whose upper left point is offset
		 * from the current range by the given rows and columns, and with the given height and width in
		 * cells.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;A1&quot;);
		 * 
		 * // newCell references B2:C3
		 * var newRange = cell.offset(1, 1, 2, 2);
		 * </code></pre>
		 * 
		 * @param rowOffset - The number of rows down from the range's top-left cell; negative values
		 *     represent rows up from the range's top-left cell.
		 * @param columnOffset - The number of columns right from the range's top-left cell; negative values
		 *     represent columns left from the range's top-left cell.
		 * @param numRows - The height in rows of the new range.
		 * @param numColumns - The width in columns of the new range.
		 * 
		 * @returns This range, for chaining.
		 */
		offset(
			rowOffset: number,
			columnOffset: number,
			numRows: number,
			numColumns: number
		): SpreadsheetApp.Range

		/**
		 * Creates an object that can protect the range from being edited except by users who have
		 * permission. Until the script actually changes the list of editors for the range (by calling
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditor(String)'>Protection.removeEditor(emailAddress)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditor(User)'>Protection.removeEditor(user)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditors(String)'>Protection.removeEditors(emailAddresses)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditor(String)'>Protection.addEditor(emailAddress)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditor(User)'>Protection.addEditor(user)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditors(String)'>Protection.addEditors(emailAddresses)</a></code>, or setting a new
		 * value for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setDomainEdit(Boolean)'>Protection.setDomainEdit(editable)</a></code>), the permissions mirror those of the
		 * spreadsheet itself, which effectively means that the range remains unprotected. If the range is
		 * already protected, this method creates a new protected range that overlaps the existing one. If
		 * a cell is protected by multiple protected ranges and any of them prevent a particular user from
		 * editing the cell, then that user is not permitted to edit the cell.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Protect range A1:B10, then remove all other users from the list of editors.
		 * var ss = SpreadsheetApp.getActive();
		 * var range = ss.getRange(&#39;A1:B10&#39;);
		 * var protection = range.protect().setDescription(&#39;Sample protected range&#39;);
		 * 
		 * // Ensure the current user is an editor before removing others. Otherwise, if the user&#39;s edit
		 * // permission comes from a group, the script throws an exception upon removing the group.
		 * var me = Session.getEffectiveUser();
		 * protection.addEditor(me);
		 * protection.removeEditors(protection.getEditors());
		 * if (protection.canDomainEdit()) {
		 *   protection.setDomainEdit(false);
		 * }
		 * </code></pre>
		 * 
		 * @returns An object representing the protection settings.
		 */
		protect(): SpreadsheetApp.Protection
		/**
		 * Randomizes the order of the rows in the given range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;A1:C7&quot;);
		 * 
		 * // Randomizes the range
		 * range.randomize();
		 * </code></pre>
		 * 
		 * @returns This range, for chaining.
		 */
		randomize(): SpreadsheetApp.Range
		/**
		 * Removes all checkboxes from the range. Clears the data validation of each cell, and
		 * additionally clears its value if the cell contains either the checked or unchecked value.
		 * 
		 * <pre class="prettyprint"><code>
		 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:B10&#39;);
		 * 
		 * // Inserts checkboxes and sets each cell value to &#39;no&#39; in the range A1:B10.
		 * range.insertCheckboxes(&#39;yes&#39;, &#39;no&#39;);
		 * 
		 * var range1 = SpreadsheetApp.getActive().getRange(&#39;A1&#39;);
		 * range1.setValue(&#39;yes&#39;);
		 * // Removes the checkbox data validation in cell A1 and clears its value.
		 * range1.removeCheckboxes();
		 * 
		 * var range2 = SpreadsheetApp.getActive().getRange(&#39;A2&#39;);
		 * range2.setValue(&#39;random&#39;);
		 * // Removes the checkbox data validation in cell A2 but does not clear its value.
		 * range2.removeCheckboxes();
		 * </code></pre>
		 * 
		 * @returns This range, for chaining.
		 */
		removeCheckboxes(): SpreadsheetApp.Range
		/**
		 * Removes rows within this range that contain values that are duplicates of values in any
		 * previous row. Rows with identical values but different letter cases, formatting, or formulas
		 * are considered to be duplicates. This method also removes duplicates rows hidden from view (for
		 * example, due to a filter). Content outside of this range isn't removed.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B1:D7&quot;);
		 * 
		 * // Remove duplicate rows in the range.
		 * range.removeDuplicates();
		 * </code></pre>
		 * 
		 * @returns The resulting range after removing duplicates. The size of the range is reduced by a
		 *     row for every row removed.
		 */
		removeDuplicates(): SpreadsheetApp.Range
		/**
		 * Removes rows within this range that contain values in the specified columns that are duplicates
		 * of values any previous row. Rows with identical values but different letter cases, formatting,
		 * or formulas are considered to be duplicates. This method also removes duplicates rows hidden
		 * from view (for example, due to a filter). Content outside of this range isn't removed.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;B1:D7&quot;);
		 * 
		 * // Remove rows which have duplicate values in column B.
		 * range.removeDuplicates([2]);
		 * 
		 * // Remove rows which have duplicate values in both columns B and D.
		 * range.removeDuplicates([2,4]);
		 * </code></pre>
		 * 
		 * @param columnsToCompare - The columns to analyze for duplicate values. If no columns are provided
		 *     then all columns are analyzed for duplicates.
		 * 
		 * @returns The resulting range after removing duplicates. The size of the range is reduced by a
		 *     row for every row removed.
		 */
		removeDuplicates(
			columnsToCompare: number[]
		): SpreadsheetApp.Range

		/**
		 * Sets the background color of all cells in the range in CSS notation (such as <code>&#39;#ffffff&#39;</code>
		 * or <code>&#39;white&#39;</code>).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;B2:D5&quot;);
		 * range.setBackground(&quot;red&quot;);
		 * </code></pre>
		 * 
		 * @param color - A color code in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>); a
		 *     <code>null</code> value resets the color.
		 * 
		 * @returns This range, for chaining.
		 */
		setBackground(
			color: string
		): SpreadsheetApp.Range
		/**
		 * Sets the background color of all cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var bgColor = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.BACKGROUND)
		 *     .build();
		 * 
		 * var range = sheet.getRange(&quot;B2:D5&quot;);
		 * range.setBackgroundObject(bgColor);
		 * </code></pre>
		 * 
		 * @param color - The background color to set; <code>null</code> value resets the background color.
		 * 
		 * @returns This range, for chaining.
		 */
		setBackgroundObject(
			color: SpreadsheetApp.Color
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of background colors (must match dimensions of this range).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var colorAccent1 = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1)
		 *     .build();
		 * var colorAccent2 = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT2)
		 *     .build();
		 * var colorAccent3 = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT3)
		 *     .build();
		 * var colorAccent4 = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT4)
		 *     .build();
		 * 
		 * var colors = [
		 *   [colorAccent1, colorAccent2],
		 *   [colorAccent3, colorAccent4]
		 * ];
		 * 
		 * var cell = sheet.getRange(&quot;B5:C6&quot;);
		 * cell.setBackgroundObjects(colors);
		 * </code></pre>
		 * 
		 * @param color - A two-dimensional array of colors; <code>null</code> values reset the color.
		 * 
		 * @returns This range, for chaining.
		 */
		setBackgroundObjects(
			color: SpreadsheetApp.Color[][]
		): SpreadsheetApp.Range
		/**
		 * Sets the background to the given color using RGB values (integers between 0 and 255 inclusive).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B2&quot;);
		 * 
		 * // Sets the background to white
		 * cell.setBackgroundRGB(255, 255, 255);
		 * 
		 * // Sets the background to red
		 * cell.setBackgroundRGB(255, 0, 0);
		 * </code></pre>
		 * 
		 * @param red - The red value in RGB notation.
		 * @param green - The green value in RGB notation.
		 * @param blue - The blue value in RGB notation.
		 * 
		 * @returns This range, for chaining.
		 */
		setBackgroundRGB(
			red: number,
			green: number,
			blue: number
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of background colors (must match dimensions of this range). The colors
		 * are in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var colors = [
		 *   [&quot;red&quot;, &quot;white&quot;, &quot;blue&quot;],
		 *   [&quot;#FF0000&quot;, &quot;#FFFFFF&quot;, &quot;#0000FF&quot;] // These are the hex equivalents
		 * ];
		 * 
		 * var cell = sheet.getRange(&quot;B5:D6&quot;);
		 * cell.setBackgrounds(colors);
		 * </code></pre>
		 * 
		 * @param color - A two-dimensional array of colors in CSS notation (such as <code>&#39;#ffffff&#39;</code> or
		 *     <code>&#39;white&#39;</code>); <code>null</code> values reset the color.
		 * 
		 * @returns This range, for chaining.
		 */
		setBackgrounds(
			color: string[][]
		): SpreadsheetApp.Range
		/**
		 * Sets the border property. Valid values are <code>true</code> (on), <code>false</code> (off) and <code>null</code> (no change).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B2&quot;);
		 * // Sets borders on the top and bottom, but leaves the left and right unchanged
		 * cell.setBorder(true, null, true, null, false, false);
		 * </code></pre>
		 * 
		 * @param top - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
		 * @param left - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
		 * @param bottom - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
		 * @param right - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
		 * @param vertical - <code>true</code> for internal vertical borders, <code>false</code> for none, <code>null</code> for no change.
		 * @param horizontal - <code>true</code> for internal horizontal borders, <code>false</code> for none, <code>null</code> for no change.
		 * 
		 * @returns This range, for chaining.
		 */
		setBorder(
			top: Boolean,
			left: Boolean,
			bottom: Boolean,
			right: Boolean,
			vertical: Boolean,
			horizontal: Boolean
		): SpreadsheetApp.Range
		/**
		 * Sets the border property with color and/or style. Valid values are <code>true</code> (on), <code>false</code> (off) and <code>null</code> (no change). For color, use Color in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B2&quot;);
		 * // Sets borders on the top and bottom, but leaves the left and right unchanged
		 * // Also sets the color to &quot;red&quot;, and the border to &quot;DASHED&quot;.
		 * cell.setBorder(true, null, true, null, false, false, &quot;red&quot;, SpreadsheetApp.BorderStyle.DASHED);
		 * </code></pre>
		 * 
		 * @param top - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
		 * @param left - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
		 * @param bottom - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
		 * @param right - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
		 * @param vertical - <code>true</code> for internal vertical borders, <code>false</code> for none, <code>null</code> for no change.
		 * @param horizontal - <code>true</code> for internal horizontal borders, <code>false</code> for none, <code>null</code> for no change.
		 * @param color - A color in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), <code>null</code> for default color (black).
		 * @param style - A style for the borders, <code>null</code> for default style (solid).
		 * 
		 * @returns This range, for chaining.
		 */
		setBorder(
			top: Boolean,
			left: Boolean,
			bottom: Boolean,
			right: Boolean,
			vertical: Boolean,
			horizontal: Boolean,
			color: string,
			style: SpreadsheetApp.BorderStyle
		): SpreadsheetApp.Range

		/**
		 * Sets one data validation rule for all cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the data validation rule for cell A1 to require a value from B1:B10.
		 * var cell = SpreadsheetApp.getActive().getRange(&#39;A1&#39;);
		 * var range = SpreadsheetApp.getActive().getRange(&#39;B1:B10&#39;);
		 * var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
		 * cell.setDataValidation(rule);
		 * </code></pre>
		 * 
		 * @param rule - The data validation rule to set, or <code>null</code> to remove data validation.
		 * 
		 * @returns This range, for chaining.
		 */
		setDataValidation(
			rule: SpreadsheetApp.DataValidation
		): SpreadsheetApp.Range
		/**
		 * Sets the data validation rules for all cells in the range. This method takes a two-dimensional
		 * array of data validations, indexed by row then by column. The array dimensions must correspond
		 * to the range dimensions.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the data validation rules for Sheet1!A1:B5 to require a value from Sheet2!A1:A10.
		 * var destinationRange = SpreadsheetApp.getActive().getSheetByName(&#39;Sheet1&#39;).getRange(&#39;A1:B5&#39;);
		 * var sourceRange = SpreadsheetApp.getActive().getSheetByName(&#39;Sheet2&#39;).getRange(&#39;A1:A10&#39;);
		 * var rule = SpreadsheetApp.newDataValidation().requireValueInRange(sourceRange).build();
		 * var rules = destinationRange.getDataValidations();
		 * for (var i = 0; i &lt; rules.length; i++) {
		 *   for (var j = 0; j &lt; rules[i].length; j++) {
		 *     rules[i][j] = rule;
		 *   }
		 * }
		 * destinationRange.setDataValidations(rules);
		 * </code></pre>
		 * 
		 * @param rules - A two-dimensional array of data validation rules to set; <code>null</code> values
		 *     remove data validation.
		 * 
		 * @returns This range, for chaining.
		 */
		setDataValidations(
			rules: SpreadsheetApp.DataValidation[][]
		): SpreadsheetApp.Range
		/**
		 * Sets the font color in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B2&quot;);
		 * cell.setFontColor(&quot;red&quot;);
		 * </code></pre>
		 * 
		 * @param color - The font color in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>); a
		 *     <code>null</code> value resets the color.
		 * 
		 * @returns This range, for chaining.
		 */
		setFontColor(
			color: string
		): SpreadsheetApp.Range
		/**
		 * Sets the font color of the given range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var color = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.TEXT)
		 *     .build();
		 * 
		 * var cell = sheet.getRange(&quot;B2&quot;);
		 * cell.setFontColor(color);
		 * </code></pre>
		 * 
		 * @param color - The font color to set; a <code>null</code> value resets the color.
		 * 
		 * @returns This range, for chaining.
		 */
		setFontColorObject(
			color: SpreadsheetApp.Color
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of font colors (must match dimensions of this range).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var colorAccent1 = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1)
		 *     .build();
		 * var colorAccent2 = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT2)
		 *     .build();
		 * var colorAccent3 = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT3)
		 *     .build();
		 * var colorAccent4 = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT4)
		 *     .build();
		 * 
		 * var colors = [
		 *   [colorAccent1, colorAccent2],
		 *   [colorAccent3, colorAccent4]
		 * ];
		 * 
		 * var cell = sheet.getRange(&quot;B5:C6&quot;);
		 * cell.setFontColorObjects(colors);
		 * </code></pre>
		 * 
		 * @param colors - A two-dimensional array of colors; <code>null</code> values reset the font color.
		 * 
		 * @returns This range, for chaining.
		 */
		setFontColorObjects(
			colors: SpreadsheetApp.Color[][]
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of font colors (must match dimensions of this range). The colors are in
		 * CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var colors = [
		 *   [&quot;red&quot;, &quot;white&quot;, &quot;blue&quot;],
		 *   [&quot;#FF0000&quot;, &quot;#FFFFFF&quot;, &quot;#0000FF&quot;] // These are the hex equivalents
		 * ];
		 * 
		 * var cell = sheet.getRange(&quot;B5:D6&quot;);
		 * cell.setFontColors(colors);
		 * </code></pre>
		 * 
		 * @param colors - A two-dimensional array of colors in CSS notation (such as <code>&#39;#ffffff&#39;</code> or
		 *     <code>&#39;white&#39;</code>); <code>null</code> values reset the color.
		 * 
		 * @returns This range, for chaining.
		 */
		setFontColors(
			colors: object[][]
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of font families (must match dimensions of this range). Examples of
		 * font families are "Arial" or "Helvetica".
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var fonts = [
		 *   [&quot;Arial&quot;, &quot;Helvetica&quot;, &quot;Verdana&quot;],
		 *   [&quot;Courier New&quot;, &quot;Arial&quot;, &quot;Helvetica]
		 * ];
		 * 
		 * var cell = sheet.getRange(&quot;B2:D3&quot;);
		 * cell.setFontFamilies(fonts);
		 * </code></pre>
		 * 
		 * @param fontFamilies - A two-dimensional array of font families; <code>null</code> values reset the
		 *     font family.
		 * 
		 * @returns This range, for chaining.
		 */
		setFontFamilies(
			fontFamilies: object[][]
		): SpreadsheetApp.Range
		/**
		 * Sets the font family, such as "Arial" or "Helvetica".
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B2&quot;);
		 * cell.setFontFamily(&quot;Helvetica&quot;);
		 * </code></pre>
		 * 
		 * @param fontFamily - The font family to set; a <code>null</code> value resets the font family.
		 * 
		 * @returns This range, for chaining.
		 */
		setFontFamily(
			fontFamily: string
		): SpreadsheetApp.Range
		/**
		 * Sets the font line style of the given range (<code>&#39;underline&#39;</code>, <code>&#39;line-through&#39;</code>, or
		 * <code>&#39;none&#39;</code>).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B2&quot;);
		 * cell.setFontLine(&quot;line-through&quot;);
		 * </code></pre>
		 * 
		 * @param fontLine - The font line style, either <code>&#39;underline&#39;</code>, <code>&#39;line-through&#39;</code>, or
		 *     <code>&#39;none&#39;</code>; a <code>null</code> value resets the font line style.
		 * 
		 * @returns This range, for chaining.
		 */
		setFontLine(
			fontLine: string
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of line styles (must match dimensions of this range).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // The size of the two-dimensional array must match the size of the range.
		 * var fontLines = [
		 *   [&quot;underline&quot;, &quot;line-through&quot;, &quot;none&quot;]
		 * ];
		 * 
		 * var range = sheet.getRange(&quot;B2:D2&quot;);
		 * range.setFontLines(fontLines);
		 * </code></pre>
		 * 
		 * @param fontLines - A two-dimensional array of font line styles (<code>&#39;underline&#39;</code>, <code>&#39;line-through&#39;</code>, or <code>&#39;none&#39;</code>); <code>null</code> values reset the font line style.
		 * 
		 * @returns This range, for chaining.
		 */
		setFontLines(
			fontLines: object[][]
		): SpreadsheetApp.Range
		/**
		 * Sets the font size, with the size being the point size to use.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B2&quot;);
		 * cell.setFontSize(20);
		 * </code></pre>
		 * 
		 * @param size - A font size in point size.
		 * 
		 * @returns This range, for chaining.
		 */
		setFontSize(
			size: number
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of font sizes (must match dimensions of this range). The sizes are in
		 * points.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // The size of the two-dimensional array must match the size of the range.
		 * var fontSizes = [
		 *   [16, 20, 24]
		 * ];
		 * 
		 * var range = sheet.getRange(&quot;B2:D2&quot;);
		 * range.setFontSizes(fontSizes);
		 * </code></pre>
		 * 
		 * @param sizes - A two-dimensional array of sizes.
		 * 
		 * @returns This range, for chaining.
		 */
		setFontSizes(
			sizes: object[][]
		): SpreadsheetApp.Range
		/**
		 * Set the font style for the given range (<code>&#39;italic&#39;</code> or <code>&#39;normal&#39;</code>).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B2&quot;);
		 * cell.setFontStyle(&quot;italic&quot;);
		 * </code></pre>
		 * 
		 * @param fontStyle - The font style, either <code>&#39;italic&#39;</code> or <code>&#39;normal&#39;</code>; a <code>null</code>
		 *     value resets the font style.
		 * 
		 * @returns This range, for chaining.
		 */
		setFontStyle(
			fontStyle: string
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of font styles (must match dimensions of this range).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // The size of the two-dimensional array must match the size of the range.
		 * var fontStyles = [
		 *   [&quot;italic&quot;, &quot;normal&quot;]
		 * ];
		 * 
		 * var range = sheet.getRange(&quot;B2:C2&quot;);
		 * range.setFontStyles(fontStyles);
		 * </code></pre>
		 * 
		 * @param fontStyles - A two-dimensional array of font styles, either <code>&#39;italic&#39;</code> or <code>&#39;normal&#39;</code>; <code>null</code> values reset the font style.
		 * 
		 * @returns This range, for chaining.
		 */
		setFontStyles(
			fontStyles: object[][]
		): SpreadsheetApp.Range
		/**
		 * Set the font weight for the given range (normal/bold).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B2&quot;);
		 * cell.setFontWeight(&quot;bold&quot;);
		 * </code></pre>
		 * 
		 * @param fontWeight - The font weight, either <code>&#39;bold&#39;</code> or <code>&#39;normal&#39;</code>; a <code>null</code>
		 *     value resets the font weight.
		 * 
		 * @returns This range, for chaining.
		 */
		setFontWeight(
			fontWeight: string
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of font weights (must match dimensions of this range). An example of a
		 * font weight is "bold".
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // The size of the two-dimensional array must match the size of the range.
		 * var fontStyles = [
		 *   [ &quot;bold&quot;, &quot;bold&quot;, &quot;normal&quot; ]
		 * ];
		 * 
		 * var range = sheet.getRange(&quot;B2:D2&quot;);
		 * range.setFontWeights(fontStyles);
		 * </code></pre>
		 * 
		 * @param fontWeights - A two-dimensional array of font weights, either <code>&#39;bold&#39;</code> or <code>&#39;normal&#39;</code>; <code>null</code> values reset the font weight.
		 * 
		 * @returns This range, for chaining.
		 */
		setFontWeights(
			fontWeights: object[][]
		): SpreadsheetApp.Range
		/**
		 * Updates the formula for this range. The given formula must be in A1 notation.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B5&quot;);
		 * cell.setFormula(&quot;=SUM(B3:B4)&quot;);
		 * </code></pre>
		 * 
		 * @param formula - A string representing the formula to set for the cell.
		 * 
		 * @returns This range, for chaining.
		 */
		setFormula(
			formula: string
		): SpreadsheetApp.Range
		/**
		 * Updates the formula for this range. The given formula must be in R1C1 notation.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B5&quot;);
		 * // This sets the formula to be the sum of the 3 rows above B5
		 * cell.setFormulaR1C1(&quot;=SUM(R[-3]C[0]:R[-1]C[0])&quot;);
		 * </code></pre>
		 * 
		 * @param formula - A string formula.
		 * 
		 * @returns This range, for chaining.
		 */
		setFormulaR1C1(
			formula: string
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of formulas (must match dimensions of this range). The given formulas
		 * must be in A1 notation. This method takes a two-dimensional array of formulas, indexed by row,
		 * then by column. The array dimensions must correspond to the range dimensions.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This sets the formulas to be a row of sums, followed by a row of averages right below.
		 * // The size of the two-dimensional array must match the size of the range.
		 * var formulas = [
		 *   [&quot;=SUM(B2:B4)&quot;, &quot;=SUM(C2:C4)&quot;, &quot;=SUM(D2:D4)&quot;],
		 *   [&quot;=AVERAGE(B2:B4)&quot;, &quot;=AVERAGE(C2:C4)&quot;, &quot;=AVERAGE(D2:D4)&quot;]
		 * ];
		 * 
		 * var cell = sheet.getRange(&quot;B5:D6&quot;);
		 * cell.setFormulas(formulas);
		 * </code></pre>
		 * 
		 * @param formulas - A two-dimensional string array of formulas.
		 * 
		 * @returns This range, for chaining.
		 */
		setFormulas(
			formulas: string[][]
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of formulas (must match dimensions of this range). The given formulas
		 * must be in R1C1 notation.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This creates formulas for a row of sums, followed by a row of averages.
		 * var sumOfRowsAbove = &quot;=SUM(R[-3]C[0]:R[-1]C[0])&quot;;
		 * var averageOfRowsAbove = &quot;=AVERAGE(R[-4]C[0]:R[-2]C[0])&quot;;
		 * 
		 * // The size of the two-dimensional array must match the size of the range.
		 * var formulas = [
		 *   [sumOfRowsAbove, sumOfRowsAbove, sumOfRowsAbove],
		 *   [averageOfRowsAbove, averageOfRowsAbove, averageOfRowsAbove]
		 * ];
		 * 
		 * var cell = sheet.getRange(&quot;B5:D6&quot;);
		 * // This sets the formula to be the sum of the 3 rows above B5.
		 * cell.setFormulasR1C1(formulas);
		 * </code></pre>
		 * 
		 * @param formulas - A two-dimensional array of formulas in R1C1 format.
		 * 
		 * @returns This range, for chaining.
		 */
		setFormulasR1C1(
			formulas: string[][]
		): SpreadsheetApp.Range
		/**
		 * Set the horizontal (left to right) alignment for the given range (left/center/right).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B2&quot;);
		 * cell.setHorizontalAlignment(&quot;center&quot;);
		 * </code></pre>
		 * 
		 * @param alignment - The alignment, either <code>&#39;left&#39;</code>, <code>&#39;center&#39;</code> or <code>&#39;normal&#39;</code>; a
		 *     <code>null</code> value resets the alignment.
		 * 
		 * @returns This range, for chaining.
		 */
		setHorizontalAlignment(
			alignment: string
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of horizontal alignments. see <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#setHorizontalAlignment(String)'>setHorizontalAlignment(alignment)</a></code>
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // The size of the two-dimensional array must match the size of the range.
		 * var horizontalAlignments = [
		 *   [ &quot;left&quot;, &quot;right&quot;, &quot;center&quot; ]
		 * ];
		 * 
		 * var range = sheet.getRange(&quot;B2:D2&quot;);
		 * range.setHorizontalAlignments(horizontalAlignments);
		 * </code></pre>
		 * 
		 * @param alignments - A two-dimensional array of alignments, either <code>&#39;left&#39;</code>, <code>&#39;center&#39;</code> or <code>&#39;normal&#39;</code>; a <code>null</code> value resets the alignment.
		 * 
		 * @returns This range, for chaining.
		 */
		setHorizontalAlignments(
			alignments: object[][]
		): SpreadsheetApp.Range
		/**
		 * Sets the note to the given value.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B2&quot;);
		 * cell.setNote(&quot;This is a note&quot;);
		 * </code></pre>
		 * 
		 * @param note - The note value to set for the range; a <code>null</code> value removes the note.
		 * 
		 * @returns This range, for chaining.
		 */
		setNote(
			note: string
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of notes (must match dimensions of this range).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // The size of the two-dimensional array must match the size of the range.
		 * var notes = [
		 *   [&quot;it goes&quot;, &quot;like this&quot;, &quot;the fourth, the fifth&quot;],
		 *   [&quot;the minor fall&quot;, &quot;and the&quot;, &quot;major lift&quot;]
		 * ];
		 * 
		 * var cell = sheet.getRange(&quot;B2:D3&quot;);
		 * cell.setNotes(notes)
		 * </code></pre>
		 * 
		 * @param notes - A two-dimensional array of notes; <code>null</code> values remove the note.
		 * 
		 * @returns This range, for chaining.
		 */
		setNotes(
			notes: object[][]
		): SpreadsheetApp.Range
		/**
		 * Sets the number or date format to the given formatting string. The accepted format patterns are
		 * described in the <a href="/sheets/api/guides/formats">Sheets API documentation</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B2&quot;);
		 * // Always show 3 decimal points
		 * cell.setNumberFormat(&quot;0.000&quot;);
		 * </code></pre>
		 * 
		 * @param numberFormat - A number format string.
		 * 
		 * @returns This range, for chaining.
		 */
		setNumberFormat(
			numberFormat: string
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of number or date formats (must match dimensions of this range). The
		 * values are format pattern strings as described in the <a href="/sheets/api/guides/formats">
		 * Sheets API documentation</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // The size of the two-dimensional array must match the size of the range.
		 * var formats = [
		 *   [ &quot;0.000&quot;, &quot;0,000,000&quot;, &quot;$0.00&quot; ]
		 * ];
		 * 
		 * var range = sheet.getRange(&quot;B2:D2&quot;);
		 * range.setNumberFormats(formats);
		 * </code></pre>
		 * 
		 * @param numberFormats - A two-dimensional array of number formats.
		 * 
		 * @returns This range, for chaining.
		 */
		setNumberFormats(
			numberFormats: object[][]
		): SpreadsheetApp.Range
		/**
		 * Sets the Rich Text value for the cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets all cells in range B2:D4 to have the text &quot;Hello world&quot;, with &quot;Hello&quot; bolded.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * var bold = SpreadsheetApp.newTextStyle()
		 *     .setBold(true)
		 *     .build();
		 * var richText = SpreadsheetApp.newRichTextValue()
		 *     .setText(&quot;Hello world&quot;)
		 *     .setTextStyle(0, 5, bold)
		 *     .build();
		 * range.setRichTextValue(richText);
		 * </code></pre>
		 * 
		 * @param value - The desired Rich Text value.
		 * 
		 * @returns This range, for chaining.
		 */
		setRichTextValue(
			value: SpreadsheetApp.RichTextValue
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of Rich Text values.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the cells in range A1:A2 to have Rich Text values.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:A2&quot;);
		 * var bold = SpreadsheetApp.newTextStyle()
		 *     .setBold(true)
		 *     .build();
		 * var italic = SpreadsheetApp.newTextStyle()
		 *     .setItalic(true)
		 *     .build();
		 * var richTextA1 = SpreadsheetApp.newRichTextValue()
		 *     .setText(&quot;This cell is bold&quot;)
		 *     .setTextStyle(bold)
		 *     .build();
		 * var richTextA2 = SpreadsheetApp.newRichTextValue()
		 *     .setText(&quot;bold words, italic words&quot;)
		 *     .setTextStyle(0, 11, bold)
		 *     .setTextStyle(12, 24, italic)
		 *     .build();
		 * range.setRichTextValues([[richTextA1], [richTextA2]]);
		 * </code></pre>
		 * 
		 * @param values - The desired Rich Text values.
		 * 
		 * @returns This range, for chaining.
		 */
		setRichTextValues(
			values: SpreadsheetApp.RichTextValue[][]
		): SpreadsheetApp.Range
		/**
		 * Sets whether or not the range should show hyperlinks.
		 * 
		 * @param showHyperlink - Whether or not to show the hyperlink.
		 * 
		 * @returns This range, for chaining.
		 */
		setShowHyperlink(
			showHyperlink: Boolean
		): SpreadsheetApp.Range
		/**
		 * Sets the text direction for the cells in the range. If a specified direction is <code>null</code>,
		 * the direction is inferred and then set.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets right-to-left text direction for the range.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;B5:C6&quot;);
		 * range.setTextDirection(SpreadsheetApp.TextDirection.RIGHT_TO_LEFT);
		 * </code></pre>
		 * 
		 * @param direction - The desired text direction; if <code>null</code> the direction is inferred before
		 *     setting.
		 * 
		 * @returns This range, for chaining.
		 */
		setTextDirection(
			direction: SpreadsheetApp.TextDirection
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of text directions. If a specified direction is <code>null</code>, the
		 * direction is inferred and then set.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copies all of the text directions from range A1:B2 over to range C5:D6.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range1 = sheet.getRange(&quot;A1:B2&quot;);
		 * var range2 = sheet.getRange(&quot;C5:D6&quot;);
		 * 
		 * range2.setTextRotations(range1.getTextDirections());
		 * </code></pre>
		 * 
		 * @param directions - The desired text directions; if a specified direction is <code>null</code> it is
		 *     inferred before setting.
		 * 
		 * @returns This range, for chaining.
		 */
		setTextDirections(
			directions: SpreadsheetApp.TextDirection[][]
		): SpreadsheetApp.Range
		/**
		 * Sets the text rotation settings for the cells in the range. The input corresponds to the angle
		 * between the standard text orientation and the desired orientation. An input of zero indicates
		 * that the text is set to the standard orientation.
		 * 
		 * <p>For left to right text direction, positive angles are in the counterclockwise direction,
		 * whereas for right to left they are in the clockwise direction.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets all cell&#39;s in range B2:D4 to have text rotated up 45 degrees.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * range.setTextRotation(45);
		 * </code></pre>
		 * 
		 * @param degrees - The desired angle between the standard orientation and the desired orientation.
		 *     For left to right text, positive angles are in the counterclockwise direction.
		 * 
		 * @returns This range, for chaining.
		 */
		setTextRotation(
			degrees: number
		): SpreadsheetApp.Range
		/**
		 * Sets the text rotation settings for the cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets all cell&#39;s in range B2:D4 to have the same text rotation settings as cell A1.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * 
		 * var rotation = sheet.getRange(&quot;A1&quot;).getTextRotation();
		 * 
		 * sheet.getRange(&quot;B2:D4&quot;).setTextRotation(rotation);
		 * 
		 * </code></pre>
		 * 
		 * @param rotation - The desired text rotation settings.
		 * 
		 * @returns This range, for chaining.
		 */
		setTextRotation(
			rotation: SpreadsheetApp.TextRotation
		): SpreadsheetApp.Range

		/**
		 * Sets a rectangular grid of text rotations.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copies all of the text rotations from range A1:B2 over to range C5:D6.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range1 = sheet.getRange(&quot;A1:B2&quot;);
		 * var range2 = sheet.getRange(&quot;C5:D6&quot;);
		 * 
		 * range2.setTextRotations(range1.getTextRotations());
		 * </code></pre>
		 * 
		 * @param rotations - The desired text rotation settings.
		 * 
		 * @returns This range, for chaining.
		 */
		setTextRotations(
			rotations: SpreadsheetApp.TextRotation[][]
		): SpreadsheetApp.Range
		/**
		 * Sets the text style for the cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the cells in range C5:D6 to have underlined size 15 font.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;C5:D6&quot;);
		 * var style = SpreadsheetApp.newTextStyle()
		 *     .setFontSize(15)
		 *     .setUnderline(true)
		 *     .build();
		 * range.setTextStyle(style);
		 * </code></pre>
		 * 
		 * @param style - The desired text style.
		 * 
		 * @returns This range, for chaining.
		 */
		setTextStyle(
			style: SpreadsheetApp.TextStyle
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of text styles.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets text styles for cells in range A1:B2
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B2&quot;);
		 * var bold = SpreadsheetApp.newTextStyle()
		 *     .setBold(true)
		 *     .build();
		 * var otherStyle = SpreadsheetApp.newTextStyle()
		 *     .setBold(true)
		 *     .setUnderline(true)
		 *     .setItalic(true)
		 *     .setForegroundColor(&quot;#335522&quot;)
		 *     .setFontSize(44)
		 *     .build();
		 * range.setTextStyles([[bold, otherStyle], [otherStyle, bold]]);
		 * </code></pre>
		 * 
		 * @param styles - The desired text styles.
		 * 
		 * @returns This range, for chaining.
		 */
		setTextStyles(
			styles: SpreadsheetApp.TextStyle[][]
		): SpreadsheetApp.Range
		/**
		 * Sets the value of the range. The value can be numeric, string, boolean or date. If it begins
		 * with <code>&#39;=&#39;</code> it is interpreted as a formula.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B2&quot;);
		 * cell.setValue(100);
		 * </code></pre>
		 * 
		 * @param value - The value for the range.
		 * 
		 * @returns This range, for chaining.
		 */
		setValue(
			value: object
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of values (must match dimensions of this range).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // The size of the two-dimensional array must match the size of the range.
		 * var values = [
		 *   [ &quot;2.000&quot;, &quot;1,000,000&quot;, &quot;$2.99&quot; ]
		 * ];
		 * 
		 * var range = sheet.getRange(&quot;B2:D2&quot;);
		 * range.setValues(values);
		 * </code></pre>
		 * 
		 * @param values - A two-dimensional array of values.
		 * 
		 * @returns This range, for chaining.
		 */
		setValues(
			values: object[][]
		): SpreadsheetApp.Range
		/**
		 * Set the vertical (top to bottom) alignment for the given range (top/middle/bottom).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B2&quot;);
		 * cell.setVerticalAlignment(&quot;middle&quot;);
		 * </code></pre>
		 * 
		 * @param alignment - The alignment, either <code>&#39;top&#39;</code>, <code>&#39;middle&#39;</code> or <code>&#39;bottom&#39;</code>; a
		 *     <code>null</code> value resets the alignment.
		 * 
		 * @returns This range, for chaining.
		 */
		setVerticalAlignment(
			alignment: string
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of vertical alignments (must match dimensions of this range).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // The size of the two-dimensional array must match the size of the range.
		 * var alignments = [
		 *   [ &quot;top&quot;, &quot;middle&quot;, &quot;bottom&quot; ]
		 * ];
		 * 
		 * var range = sheet.getRange(&quot;B2:D2&quot;);
		 * range.setVerticalAlignments(alignments);
		 * </code></pre>
		 * 
		 * @param alignments - A two-dimensional array of alignments, either <code>&#39;top&#39;</code>, <code>&#39;middle&#39;</code>
		 *     or <code>&#39;bottom&#39;</code>; a <code>null</code> value resets the alignment.
		 * 
		 * @returns This range, for chaining.
		 */
		setVerticalAlignments(
			alignments: object[][]
		): SpreadsheetApp.Range
		/**
		 * Sets whether or not to stack the text for the cells in the range. If the text is stacked
		 * vertically, the degree text rotation setting is ignored.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets all cell&#39;s in range B2:D4 to have vertically stacked text.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * range.setVerticalText(true);
		 * </code></pre>
		 * 
		 * @param isVertical - Whether or not to stack the text.
		 * 
		 * @returns This range, for chaining.
		 */
		setVerticalText(
			isVertical: Boolean
		): SpreadsheetApp.Range
		/**
		 * Set the cell wrap of the given range.
		 * 
		 * <p>Cells with wrap enabled (the default) resize to display their full content. Cells with wrap
		 * disabled display as much as possible in the cell without resizing or running to multiple lines.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var cell = sheet.getRange(&quot;B2&quot;);
		 * cell.setWrap(true);
		 * </code></pre>
		 * 
		 * @param isWrapEnabled - Whether to wrap text or not.
		 * 
		 * @returns This range, for chaining.
		 */
		setWrap(
			isWrapEnabled: Boolean
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of wrap strategies.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Copies all of the wrap strategies from range A1:B2 over to range C5:D6.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range1 = sheet.getRange(&quot;A1:B2&quot;);
		 * var range2 = sheet.getRange(&quot;C5:D6&quot;);
		 * 
		 * range2.setWrapStrategies(range1.getWrapStrategies());
		 * </code></pre>
		 * 
		 * @param strategies - The desired wrapping strategies.
		 * 
		 * @returns This range, for chaining.
		 */
		setWrapStrategies(
			strategies: SpreadsheetApp.WrapStrategy[][]
		): SpreadsheetApp.Range
		/**
		 * Sets the text wrapping strategy for the cells in the range.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets all cells in range B2:D4 to use the clip wrap strategy.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;B2:D4&quot;);
		 * 
		 * range.setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);
		 * </code></pre>
		 * 
		 * @param strategy - The desired wrapping strategy.
		 * 
		 * @returns This range, for chaining.
		 */
		setWrapStrategy(
			strategy: SpreadsheetApp.WrapStrategy
		): SpreadsheetApp.Range
		/**
		 * Sets a rectangular grid of word wrap policies (must match dimensions of this range). Cells with
		 * wrap enabled (the default) resize to display their full content. Cells with wrap disabled
		 * display as much as possible in the cell without resizing or running to multiple lines.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // The size of the two-dimensional array must match the size of the range.
		 * var wraps = [
		 *   [ true, true, false ]
		 * ];
		 * 
		 * var range = sheet.getRange(&quot;B2:D2&quot;);
		 * range.setWraps(wraps);
		 * </code></pre>
		 * 
		 * @param isWrapEnabled - A two-dimensional array of wrap variables that determine whether to wrap
		 *     text in a cell or not.
		 * 
		 * @returns This range, for chaining.
		 */
		setWraps(
			isWrapEnabled: object[][]
		): SpreadsheetApp.Range
		/**
		 * Changes the column grouping depth of the range by the specified amount.
		 * 
		 * <p>This has the effect of creating, modifying, or deleting groups that intersect with the
		 * range. For positive deltas, groups are created and/or modified; for negative deltas, groups are
		 * destroyed and/or modified.
		 * 
		 * <p>This has no effect when decreasing the group depth below zero or above eight.
		 * 
		 * <p>If the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getColumnGroupControlPosition()'>column group control position</a></code> is
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/group-control-toggle-position.html#BEFORE'>BEFORE</a></code>, this throws an error when attempting to shift
		 * the depth of the first row.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * var range = sheet.getActiveRange();
		 * 
		 * // The column grouping depth is increased by 1.
		 * range.shiftColumnGroupDepth(1);
		 * 
		 * // The column grouping depth is decreased by 1.
		 * range.shiftColumnGroupDepth(-1);
		 * </code></pre>
		 * 
		 * @param delta - The amount by which to change the column group depth of this range.
		 * 
		 * @returns This range, for chaining.
		 */
		shiftColumnGroupDepth(
			delta: number
		): SpreadsheetApp.Range
		/**
		 * Changes the row grouping depth of the range by the specified amount.
		 * 
		 * <p>This has the effect of creating, modifying, or deleting groups that intersect with the
		 * range. For positive deltas, groups are created and/or modified; for negative deltas, groups are
		 * destroyed and/or modified.
		 * 
		 * <p>This has no effect when decreasing the group depth below zero or above eight.
		 * 
		 * <p>If the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getRowGroupControlPosition()'>row group control position</a></code> is <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/group-control-toggle-position.html#BEFORE'>BEFORE</a></code>, this throws an error when attempting to shift the
		 * depth of the first row.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * var range = sheet.getActiveRange();
		 * 
		 * // The row grouping depth is increased by 1.
		 * range.shiftRowGroupDepth(1);
		 * 
		 * // The row grouping depth is decreased by 1.
		 * range.shiftRowGroupDepth(-1);
		 * </code></pre>
		 * 
		 * @param delta - The amount by which to change the row group depth of this range.
		 * 
		 * @returns This range, for chaining.
		 */
		shiftRowGroupDepth(
			delta: number
		): SpreadsheetApp.Range
		/**
		 * Sorts the cells in the given range, by column and order specified.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(&quot;A1:C7&quot;);
		 * 
		 * // Sorts by the values in the first column (A)
		 * range.sort(1);
		 * 
		 * // Sorts by the values in the second column (B)
		 * range.sort(2);
		 * 
		 * // Sorts descending by column B
		 * range.sort({column: 2, ascending: false});
		 * 
		 * // Sorts descending by column B, then ascending by column A
		 * // Note the use of an array
		 * range.sort([{column: 2, ascending: false}, {column: 1, ascending: true}]);
		 * 
		 * // For rows that are sorted in ascending order, the &quot;ascending&quot; parameter is
		 * // optional, and just an integer with the column can be used instead. Note that
		 * // in general, keeping the sort specification consistent results in more readable
		 * // code. You can express the earlier sort as:
		 * range.sort([{column: 2, ascending: false}, 1]);
		 * 
		 * // Alternatively, if you want all columns to be in ascending order, you can use
		 * // the following (this makes column 2 ascending)
		 * range.sort([2, 1]);
		 * // ... which is equivalent to
		 * range.sort([{column: 2, ascending: true}, {column: 1, ascending: true}]);
		 * </code></pre>
		 * 
		 * @param sortSpecObj - The columns to sort by.
		 * 
		 * @returns This range, for chaining.
		 */
		sort(
			sortSpecObj: object
		): SpreadsheetApp.Range
		/**
		 * Splits a column of text into multiple columns based on an auto-detected delimiter.
		 * 
		 * <pre class="prettyprint"><code>
		 * // A1:A3 has the following values:
		 * //           A                  B                 C
		 * // 1 |one,one,one      |                 |                 |
		 * // 2 |two,two,two      |                 |                 |
		 * // 3 |three,three,three|                 |                 |
		 * 
		 * var range = SpreadsheetApp.getActiveSheet().getRange(&quot;A1:A3&quot;);
		 * range.splitTextToColumns();
		 * 
		 * // Result after spliting the text to columns:
		 * //           A                  B                 C
		 * // 1 |one              |one              |one              |
		 * // 2 |two              |two              |two              |
		 * // 3 |three            |three            |three            |
		 * </code></pre>
		 */
		splitTextToColumns(): void
		/**
		 * Splits a column of text into multiple columns based on the specified delimiter.
		 * 
		 * <pre class="prettyprint"><code>
		 * // A1:A3 has the following values:
		 * //           A                  B                 C
		 * // 1 |one;one;one      |                 |                 |
		 * // 2 |two;two;two      |                 |                 |
		 * // 3 |three;three;three|                 |                 |
		 * 
		 * var range = SpreadsheetApp.getActiveSheet().getRange(&quot;A1:A3&quot;);
		 * range.splitTextToColumns(SpreadsheetApp.TextToColumnsDelimiter.SEMICOLON);
		 * 
		 * // Result after spliting the text to columns:
		 * //           A                  B                 C
		 * // 1 |one              |one              |one              |
		 * // 2 |two              |two              |two              |
		 * // 3 |three            |three            |three            |
		 * </code></pre>
		 * 
		 * @param delimiter - The preset delimiter to split on.
		 */
		splitTextToColumns(
			delimiter: SpreadsheetApp.TextToColumnsDelimiter
		): void
		/**
		 * Splits a column of text into multiple columns using the specified string as a custom delimiter.
		 * 
		 * <pre class="prettyprint"><code>
		 * // A1:A3 has the following values:
		 * //           A                  B                 C
		 * // 1 |one#one#one      |                 |                 |
		 * // 2 |two#two#two      |                 |                 |
		 * // 3 |three#three#three|                 |                 |
		 * 
		 * var range = SpreadsheetApp.getActiveSheet().getRange(&quot;A1:A3&quot;);
		 * range.splitTextToColumns(&#39;#&#39;);
		 * 
		 * // Result after spliting the text to columns:
		 * //           A                  B                 C
		 * // 1 |one              |one              |one              |
		 * // 2 |two              |two              |two              |
		 * // 3 |three            |three            |three            |
		 * </code></pre>
		 * 
		 * @param delimiter - The custom delimiter to split on.
		 */
		splitTextToColumns(
			delimiter: string
		): void

		/**
		 * Trims the whitespace (such as spaces, tabs, or new lines) in every cell in this range. Removes
		 * all whitespace from the start and end of each cell's text, and reduces any subsequence of
		 * remaining whitespace characters to a single space.
		 * 
		 * <p><aside class="note"><b>Note</b>: If the resulting trimmed text starts with a '+' or '='
		 * character, the text remains as a string value and isn't interpreted as a formula.</aside>
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * var range = sheet.getRange(&#39;A1:A4&#39;);
		 * range.activate();
		 * range.setValues(
		 *     [&#39; preceding space&#39;, &#39;following space &#39;, &#39;two  middle  spaces&#39;, &#39;   =SUM(1,2)&#39;])
		 * 
		 * range.trimWhitespace();
		 * 
		 * var values = range.getValues();
		 * // Values are [&#39;preceding space&#39;, &#39;following space&#39;, &#39;two middle spaces&#39;, &#39;=SUM(1,2)&#39;]
		 * </code></pre>
		 * 
		 * @returns This range, for chaining.
		 */
		trimWhitespace(): SpreadsheetApp.Range
		/**
		 * Changes the state of the checkboxes in the range to “unchecked”. Ignores the cells in the range
		 * which currently do not contain either the checked or unchecked value configured.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Changes the state of cells which currently contain either the checked or unchecked value
		 * // configured in the range A1:B10 to &#39;unchecked&#39;.
		 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:B10&#39;);
		 * range.uncheck();
		 * </code></pre>
		 * 
		 * @returns This range, for chaining.
		 */
		uncheck(): SpreadsheetApp.Range
		/**
		 * Returns top, left, bottom, and right border for the first cell in the range.
		 * 
		 * @returns The borders for the first cell in the range.
		 */
		getBorder(): SpreadsheetApp.Borders
		/**
		 * Returns top, left, bottom, and right borders for all the enclosed cells.
		 * 
		 * @returns The borders for the enclosed cells.
		 */
		getBorders(): SpreadsheetApp.Borders[][]

	}

	class RangeList {
		private constructor();

		/**
		 * Selects the list of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> instances. The last range in the list is set as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getActiveRange()'>active range</a></code>.
		 * 
		 * <p><b>Note:</b> This provides a way to multi-select a number of ranges.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;D4&#39;, &#39;B2:C4&#39;]);
		 * rangeList.activate();
		 * 
		 * var selection = sheet.getSelection();
		 * // Current cell: B2
		 * var currentCell = selection.getCurrentCell();
		 * // Active range: B2:C4
		 * var activeRange = selection.getActiveRange();
		 * // Active range list: [D4, B2:C4]
		 * var activeRangeList = selection.getActiveRangeList();
		 * </code></pre>
		 * 
		 * @returns The list of active ranges, for chaining.
		 */
		activate(): SpreadsheetApp.RangeList
		/**
		 * Break all horizontally- or vertically-merged cells contained within the range list into
		 * individual cells again.
		 * 
		 * <p>Calling this function on a range list is equivalent to selecting a set of ranges and
		 * selecting the <b>Format > Merge > Unmerge</b> Sheets menu item.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
		 * rangeList.breakApart();
		 * </code></pre>
		 * 
		 * @returns This range list, for chaining.
		 */
		breakApart(): SpreadsheetApp.RangeList
		/**
		 * Changes the state of the checkboxes in the range to “checked”. Ignores the cells in the range
		 * which currently do not contain either the checked or unchecked value configured.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Changes the state of cells which currently contain either the checked or unchecked value
		 * // configured in the ranges D4 and E6 to &#39;checked&#39;.
		 * var rangeList = SpreadsheetApp.getActive().getRangeList([&#39;D4&#39;, &#39;E6&#39;]);
		 * rangeList.check();
		 * </code></pre>
		 * 
		 * @returns This range list, for chaining.
		 */
		check(): SpreadsheetApp.RangeList
		/**
		 * Clears the range of contents, formats, and data validation rules for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in
		 * the range list.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
		 * rangeList.clear();
		 * </code></pre>
		 * 
		 * @returns This range list, for chaining.
		 */
		clear(): SpreadsheetApp.RangeList
		/**
		 * Clears the range of contents, format, data validation rules, and comments, as specified with
		 * the given options. By default all data is cleared.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below clears the contents of the following ranges A:A and C:C in the active sheet,
		 * // but preserves the format, data validation rules, and comments.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
		 * rangeList.clear({contentsOnly: true});
		 * </code></pre>
		 * 
		 * @param options - A JavaScript object that specifies advanced parameters, as listed below.
		 * 
		 * @returns This range list, for chaining.
		 */
		clear(
			options: object
		): SpreadsheetApp.RangeList

		/**
		 * Clears the content of each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list, leaving the formatting intact.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
		 * rangeList.clearContent();
		 * </code></pre>
		 * 
		 * @returns This range list, for chaining.
		 */
		clearContent(): SpreadsheetApp.RangeList
		/**
		 * Clears the data validation rules for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
		 * rangeList.clearDataValidations();
		 * </code></pre>
		 * 
		 * @returns This range list, for chaining.
		 */
		clearDataValidations(): SpreadsheetApp.RangeList
		/**
		 * Clears text formatting for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list.
		 * 
		 * <p>This clears text formatting for each range, but does not reset any number formatting rules.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
		 * rangeList.clearFormat();
		 * </code></pre>
		 * 
		 * @returns This range list, for chaining.
		 */
		clearFormat(): SpreadsheetApp.RangeList
		/**
		 * Clears the note for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
		 * rangeList.clearNote();
		 * </code></pre>
		 * 
		 * @returns This range list, for chaining.
		 */
		clearNote(): SpreadsheetApp.RangeList
		/**
		 * Returns a list of one or more <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> instances in the same sheet.
		 * 
		 * @returns The list of ranges.
		 */
		getRanges(): SpreadsheetApp.Range[]
		/**
		 * Inserts checkboxes into each cell in the range, configured with <code>true</code> for checked and
		 * <code>false</code> for unchecked. Sets the value of all cells in the range to <code>false</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var rangeList = SpreadsheetApp.getActive().getRangeList([&#39;D4&#39;, &#39;E6&#39;]);
		 * 
		 * // Inserts checkboxes into each cell in the ranges D4 and E6 configured with &#39;true&#39; for checked
		 * // and &#39;false&#39; for unchecked. Also, sets the value of each cell in the ranges D4 and E6 to
		 * // &#39;false&#39;.
		 * rangeList.insertCheckboxes();
		 * </code></pre>
		 * 
		 * @returns This range list, for chaining.
		 */
		insertCheckboxes(): SpreadsheetApp.RangeList
		/**
		 * Inserts checkboxes into each cell in the range, configured with a custom value for checked and
		 * the empty string for unchecked. Sets the value of each cell in the range to the empty string.
		 * 
		 * <pre class="prettyprint"><code>
		 * var rangeList = SpreadsheetApp.getActive().getRangeList([&#39;D4&#39;, &#39;E6&#39;]);
		 * 
		 * // Inserts checkboxes into each cell in the ranges D4 and E6 configured with &#39;yes&#39; for checked
		 * // and the empty string for unchecked. Also, sets the value of each cell in the ranges D4 and
		 * // E6 to the empty string.
		 * rangeList.insertCheckboxes(&#39;yes&#39;);
		 * </code></pre>
		 * 
		 * @param checkedValue - The checked value for the checkbox data validation.
		 * 
		 * @returns This range list, for chaining.
		 */
		insertCheckboxes(
			checkedValue: object
		): SpreadsheetApp.RangeList
		/**
		 * Inserts checkboxes into each cell in the range, configured with custom values for the checked
		 * and unchecked states. Sets the value of each cell in the range to the custom unchecked value.
		 * 
		 * <pre class="prettyprint"><code>
		 * var rangeList = SpreadsheetApp.getActive().getRangeList([&#39;D4&#39;, &#39;E6&#39;]);
		 * 
		 * // Inserts checkboxes into each cell in the ranges D4 and E6 configured with &#39;yes&#39; for checked
		 * // and &#39;no&#39; for unchecked. Also, sets the value of each cell in the ranges D4 and E6 to &#39;no&#39;.
		 * rangeList.insertCheckboxes(&#39;yes&#39;, &#39;no&#39;);
		 * </code></pre>
		 * 
		 * @param checkedValue - The checked value for the checkbox data validation.
		 * @param uncheckedValue - The unchecked value for the checkbox data validation.
		 * 
		 * @returns This range list, for chaining.
		 */
		insertCheckboxes(
			checkedValue: object,
			uncheckedValue: object
		): SpreadsheetApp.RangeList

		/**
		 * Removes all checkboxes from the range. Clears the data validation of each cell, and
		 * additionally clears its value if the cell contains either the checked or unchecked value.
		 * 
		 * <pre class="prettyprint"><code>
		 * var range = SpreadsheetApp.getActive().getRange(&#39;A1:B10&#39;);
		 * 
		 * // Inserts checkboxes and sets each cell value to &#39;no&#39; in the range A1:B10.
		 * range.insertCheckboxes(&#39;yes&#39;, &#39;no&#39;);
		 * 
		 * var rangeList1 = SpreadsheetApp.getActive().getRangeList([&#39;A1&#39;, &#39;A3&#39;]);
		 * rangeList1.setValue(&#39;yes&#39;);
		 * // Removes the checkbox data validation in cells A1 and A3 and clears their value.
		 * rangeList1.removeCheckboxes();
		 * 
		 * var rangeList2 = SpreadsheetApp.getActive().getRangeList([&#39;A5&#39;, &#39;A7&#39;]);
		 * rangeList2.setValue(&#39;random&#39;);
		 * // Removes the checkbox data validation in cells A5 and A7 but does not clear their value.
		 * rangeList2.removeCheckboxes();
		 * </code></pre>
		 * 
		 * @returns This range list, for chaining.
		 */
		removeCheckboxes(): SpreadsheetApp.RangeList
		/**
		 * Sets the background color for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. Color is represented in
		 * in CSS notation; for example, <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
		 * rangeList.setBackground(&#39;red&#39;);
		 * </code></pre>
		 * 
		 * @param color - The background color code in CSS notation such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>; a <code>null</code> value resets the color.
		 * 
		 * @returns This range list, for chaining.
		 */
		setBackground(
			color: string
		): SpreadsheetApp.RangeList
		/**
		 * Sets the background to the given RGB color. This is a convenience wrapper around a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range-list.html#setBackground(String)'>setBackground(color)</a></code> call.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
		 * // Sets the background to red for each range in the range list.
		 * rangeList.setBackgroundRGB(255, 0, 0);
		 * </code></pre>
		 * 
		 * @param red - The red value in RGB notation.
		 * @param green - The green value in RGB notation.
		 * @param blue - The blue value in RGB notation.
		 * 
		 * @returns This range list, for chaining.
		 */
		setBackgroundRGB(
			red: number,
			green: number,
			blue: number
		): SpreadsheetApp.RangeList
		/**
		 * Sets the border property for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The valid values are
		 * <code>true</code> (on), <code>false</code> (off) and <code>null</code> (no change).
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A2:B4&#39;, &#39;C1:D4&#39;]);
		 * // Sets borders on the top and bottom of the ranges A2:B4 and C1:D4, but leaves the left and
		 * // right unchanged.
		 * rangeList.setBorder(true, null, true, null, false, false);
		 * </code></pre>
		 * 
		 * @param top - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
		 * @param left - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
		 * @param bottom - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
		 * @param right - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
		 * @param vertical - <code>true</code> for internal vertical borders, <code>false</code> for none, <code>null</code> for no change.
		 * @param horizontal - <code>true</code> for internal horizontal borders, <code>false</code> for none, <code>null</code> for no change.
		 * 
		 * @returns This range list, for chaining.
		 */
		setBorder(
			top: Boolean,
			left: Boolean,
			bottom: Boolean,
			right: Boolean,
			vertical: Boolean,
			horizontal: Boolean
		): SpreadsheetApp.RangeList
		/**
		 * Sets the border property with color and/or style for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list.
		 * Valid values are <code>true</code> (on), <code>false</code> (off) and <code>null</code> (no change). Color is
		 * represented in in CSS notation; for example, <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A2:B4&#39;, &#39;C1:D4&#39;]);
		 * // Sets borders on the top and bottom, but leaves the left and right unchanged of the ranges
		 * // A2:B4 and C1:D4. Also sets the color to &#39;red&#39;, and the border to &#39;DASHED&#39;.
		 * rangeList.setBorder(
		 *     true, null, true, null, false, false, &#39;red&#39;, SpreadsheetApp.BorderStyle.DASHED);
		 * </code></pre>
		 * 
		 * @param top - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
		 * @param left - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
		 * @param bottom - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
		 * @param right - <code>true</code> for border, <code>false</code> for none, <code>null</code> for no change.
		 * @param vertical - <code>true</code> for internal vertical borders, <code>false</code> for none, <code>null</code> for no change.
		 * @param horizontal - <code>true</code> for internal horizontal borders, <code>false</code> for none, <code>null</code> for no change.
		 * @param color - The border color in CSS notation like <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>, <code>null</code> for default color (black).
		 * @param style - The style for the borders, <code>null</code> for default style (solid).
		 * 
		 * @returns This range list, for chaining.
		 */
		setBorder(
			top: Boolean,
			left: Boolean,
			bottom: Boolean,
			right: Boolean,
			vertical: Boolean,
			horizontal: Boolean,
			color: string,
			style: SpreadsheetApp.BorderStyle
		): SpreadsheetApp.RangeList

		/**
		 * Sets the font color for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. Color is represented in in CSS
		 * notation; for example, <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
		 * rangeList.setFontColor(&#39;red&#39;);
		 * </code></pre>
		 * 
		 * @param color - The font color in CSS notation such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>; a
		 *     <code>null</code> value resets the color.
		 * 
		 * @returns This range list, for chaining.
		 */
		setFontColor(
			color: string
		): SpreadsheetApp.RangeList
		/**
		 * Sets the font family for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The font family is described
		 * by a string identifier such as <code>Arial</code> or <code>Roboto</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
		 * rangeList.setFontFamily(&#39;Roboto&#39;);
		 * </code></pre>
		 * 
		 * @param fontFamily - The font family to set; a <code>null</code> value resets the font family.
		 * 
		 * @returns This range list, for chaining.
		 */
		setFontFamily(
			fontFamily: string
		): SpreadsheetApp.RangeList
		/**
		 * Sets the font line style for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The line styles options
		 * are <code>&#39;underline&#39;</code>, <code>&#39;line-through&#39;</code>, or <code>&#39;none&#39;</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
		 * rangeList.setFontLine(&#39;line-through&#39;);
		 * </code></pre>
		 * 
		 * @param fontLine - The font line style, either <code>&#39;underline&#39;</code>, <code>&#39;line-through&#39;</code>, or
		 *     <code>&#39;none&#39;</code>; a <code>null</code> value resets the font line style.
		 * 
		 * @returns This range list, for chaining.
		 */
		setFontLine(
			fontLine: string
		): SpreadsheetApp.RangeList
		/**
		 * Sets the font size (in points) for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
		 * rangeList.setFontSize(20);
		 * </code></pre>
		 * 
		 * @param size - A font point size.
		 * 
		 * @returns This range list, for chaining.
		 */
		setFontSize(
			size: number
		): SpreadsheetApp.RangeList
		/**
		 * Set the font style for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The font style options are
		 * <code>&#39;italic&#39;</code> or <code>&#39;normal&#39;</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
		 * rangeList.setFontStyle(&quot;italic&quot;);
		 * </code></pre>
		 * 
		 * @param fontStyle - The font style, either <code>&#39;italic&#39;</code> or <code>&#39;normal&#39;</code>; a <code>null</code>
		 *     value resets the font style.
		 * 
		 * @returns This range list, for chaining.
		 */
		setFontStyle(
			fontStyle: string
		): SpreadsheetApp.RangeList
		/**
		 * Set the font weight for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The font weight options are
		 * <code>&#39;normal&#39;</code> or <code>&#39;bold&#39;</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
		 * rangeList.setFontWeight(&#39;bold&#39;);
		 * </code></pre>
		 * 
		 * @param fontWeight - The font weight, either <code>&#39;bold&#39;</code> or <code>&#39;normal&#39;</code>; a <code>null</code>
		 *     value resets the font weight.
		 * 
		 * @returns This range list, for chaining.
		 */
		setFontWeight(
			fontWeight: string
		): SpreadsheetApp.RangeList
		/**
		 * Updates the formula for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The given formula must be in
		 * A1 notation.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A11&#39;, &#39;C11&#39;]);
		 * rangeList.setFormula(&#39;=SUM(B1:B10)&#39;);
		 * </code></pre>
		 * 
		 * @param formula - A string representing the formula to set.
		 * 
		 * @returns This range list, for chaining.
		 */
		setFormula(
			formula: string
		): SpreadsheetApp.RangeList
		/**
		 * Updates the formula for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The given formula must be in
		 * R1C1 notation.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A11&#39;, &#39;C11&#39;]);
		 * // This sets the formula to be the sum of the 3 rows above B5
		 * rangeList.setFormulaR1C1(&#39;=SUM(R[-3]C[0]:R[-1]C[0])&#39;);
		 * </code></pre>
		 * 
		 * @param formula - A string formula.
		 * 
		 * @returns This range list, for chaining.
		 */
		setFormulaR1C1(
			formula: string
		): SpreadsheetApp.RangeList
		/**
		 * Set the horizontal alignment for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The alignment options
		 * are <code>&#39;left&#39;</code>, <code>&#39;center&#39;</code>, or <code>&#39;right&#39;</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
		 * rangeList.setHorizontalAlignment(&quot;center&quot;);
		 * </code></pre>
		 * 
		 * @param alignment - The alignment, either <code>&#39;left&#39;</code>, <code>&#39;center&#39;</code> or <code>&#39;normal&#39;</code>; a
		 *     <code>null</code> value resets the alignment.
		 * 
		 * @returns This range list, for chaining.
		 */
		setHorizontalAlignment(
			alignment: string
		): SpreadsheetApp.RangeList
		/**
		 * Sets the note text for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
		 * rangeList.setNote(&#39;This is a note&#39;);
		 * </code></pre>
		 * 
		 * @param note - The note text to set; a <code>null</code> value removes the note.
		 * 
		 * @returns This range list, for chaining.
		 */
		setNote(
			note: string
		): SpreadsheetApp.RangeList
		/**
		 * Sets the number or date format for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list.
		 * 
		 * <p>The accepted formatting patterns are described in the <a
		 * href="/sheets/api/guides/formats">Sheets API date and number formatting guide</a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A1:A10&#39;, &#39;C1:C10&#39;]);
		 * // Always show 3 decimal points for the specified ranges.
		 * rangeList.setNumberFormat(&#39;0.000&#39;);
		 * </code></pre>
		 * 
		 * @param numberFormat - A number format string.
		 * 
		 * @returns This range list, for chaining.
		 */
		setNumberFormat(
			numberFormat: string
		): SpreadsheetApp.RangeList
		/**
		 * Sets whether or not each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list should show hyperlinks.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A1:A10&#39;, &#39;C1:C10&#39;]);
		 * // Show hyperlinks for all the ranges.
		 * rangeList.setShowHyperlink(true);
		 * </code></pre>
		 * 
		 * @param showHyperlink - Whether or not to show the hyperlink.
		 * 
		 * @returns This range list, for chaining.
		 */
		setShowHyperlink(
			showHyperlink: Boolean
		): SpreadsheetApp.RangeList
		/**
		 * Sets the text direction for the cells in each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. If a
		 * specified direction is <code>null</code>, the direction is inferred and then set.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets right-to-left text direction each range in the range list.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A1:A10&#39;, &#39;C1:C10&#39;]);
		 * rangeList.setTextDirection(SpreadsheetApp.TextDirection.RIGHT_TO_LEFT);
		 * </code></pre>
		 * 
		 * @param direction - The desired text direction; if <code>null</code> the direction is inferred before
		 *     setting.
		 * 
		 * @returns This range list, for chaining.
		 */
		setTextDirection(
			direction: SpreadsheetApp.TextDirection
		): SpreadsheetApp.RangeList
		/**
		 * Sets the text rotation settings for the cells in each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The
		 * input corresponds to the angle between the standard text orientation and the desired
		 * orientation. An input of zero indicates that the text is set to the standard orientation.
		 * 
		 * <p>For left to right text direction, positive angles are in the counterclockwise direction,
		 * whereas for right to left they are in the clockwise direction.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the cells in the ranges A1:A10 and C1:C10 to have text rotated up 45 degrees.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;A1:A10&#39;, &#39;C1:C10&#39;]);
		 * rangeList.setTextRotation(45);
		 * </code></pre>
		 * 
		 * @param degrees - The desired angle between the standard orientation and the desired orientation.
		 *     For left to right text, positive angles are in the counterclockwise direction.
		 * 
		 * @returns This range list, for chaining.
		 */
		setTextRotation(
			degrees: number
		): SpreadsheetApp.RangeList
		/**
		 * Sets the value for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The value can be numeric, string,
		 * boolean or date. If it begins with '=' it is interpreted as a formula.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * // Set value of 100 to each range in the range list.
		 * var rangeList = sheet.getRangeList([&#39;A:A&#39;, &#39;C:C&#39;]);
		 * rangeList.setValue(100);
		 * </code></pre>
		 * 
		 * @param value - The value for the range.
		 * 
		 * @returns This range list, for chaining.
		 */
		setValue(
			value: object
		): SpreadsheetApp.RangeList
		/**
		 * Set the vertical alignment for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. The alignment options
		 * are <code>&#39;top&#39;</code>, <code>&#39;middle&#39;</code> or <code>&#39;bottom&#39;</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the vertical alignment to middle for the list of ranges.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;D4&#39;, &#39;B2:C4&#39;]);
		 * rangeList.setVerticalAlignment(&quot;middle&quot;);
		 * </code></pre>
		 * 
		 * @param alignment - The alignment, either <code>&#39;top&#39;</code>, <code>&#39;middle&#39;</code> or <code>&#39;bottom&#39;</code>; a
		 *     <code>null</code> value resets the alignment.
		 * 
		 * @returns This range list, for chaining.
		 */
		setVerticalAlignment(
			alignment: string
		): SpreadsheetApp.RangeList
		/**
		 * Sets whether or not to stack the text for the cells for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range
		 * list. If the text is stacked vertically, the degree text rotation setting is ignored.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets all cell&#39;s in ranges D4 and B2:D4 to have vertically stacked text.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;D4&#39;, &#39;B2:C4&#39;]);
		 * rangeList.setVerticalText(true);
		 * </code></pre>
		 * 
		 * @param isVertical - Whether or not to stack the text.
		 * 
		 * @returns This range list, for chaining.
		 */
		setVerticalText(
			isVertical: Boolean
		): SpreadsheetApp.RangeList
		/**
		 * Set text wrapping for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list. Cells with wrap enabled resize
		 * to display their full content. Cells with wrap disabled display as much as possible in the cell
		 * without resizing or running to multiple lines.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Enable text wrap for the list of ranges.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;D4&#39;, &#39;B2:C4&#39;]);
		 * rangeList.setWrap(true);
		 * </code></pre>
		 * 
		 * @param isWrapEnabled - Whether to wrap text or not.
		 * 
		 * @returns This range list, for chaining.
		 */
		setWrap(
			isWrapEnabled: Boolean
		): SpreadsheetApp.RangeList
		/**
		 * Sets the text wrapping strategy for each <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> in the range list.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the list of ranges to use the clip wrap strategy.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;D4&#39;, &#39;B2:C4&#39;]);
		 * rangeList.setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);
		 * </code></pre>
		 * 
		 * @param strategy - The desired wrapping strategy.
		 * 
		 * @returns This range list, for chaining.
		 */
		setWrapStrategy(
			strategy: SpreadsheetApp.WrapStrategy
		): SpreadsheetApp.RangeList
		/**
		 * Trims the whitespace (such as spaces, tabs, or new lines) in every cell in this range list.
		 * Removes all whitespace from the start and end of each cell's text, and reduces any subsequence
		 * of remaining whitespace characters to a single space.
		 * 
		 * <p><aside class="note"><b>Note</b>: If the resulting trimmed text starts with a '+' or '='
		 * character, the text remains as a string value and isn't interpreted as a formula.</aside>
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * var range = sheet.getRange(&#39;A1:A4&#39;);
		 * range.activate();
		 * range.setValues(
		 *     [&#39; preceding space&#39;, &#39;following space &#39;, &#39;two  middle  spaces&#39;, &#39;   =SUM(1,2)&#39;]);
		 * 
		 * var rangeList = sheet.getRangeList([&#39;A1&#39;, &#39;A2&#39;, &#39;A3&#39;, &#39;A4&#39;]);
		 * rangeList.trimWhitespace();
		 * 
		 * var values = range.getValues();
		 * // Values are [&#39;preceding space&#39;, &#39;following space&#39;, &#39;two middle spaces&#39;, &#39;=SUM(1,2)&#39;]
		 * </code></pre>
		 * 
		 * @returns This range list, for chaining.
		 */
		trimWhitespace(): SpreadsheetApp.RangeList
		/**
		 * Changes the state of the checkboxes in the range to “unchecked”. Ignores the cells in the range
		 * which currently do not contain either the checked or unchecked value configured.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Changes the state of cells which currently contain either the checked or unchecked value
		 * // configured in the ranges D4 and E6 to &#39;unchecked&#39;.
		 * var rangeList = SpreadsheetApp.getActive().getRangeList([&#39;D4&#39;, &#39;E6&#39;]);
		 * rangeList.uncheck();
		 * </code></pre>
		 * 
		 * @returns This range list, for chaining.
		 */
		uncheck(): SpreadsheetApp.RangeList

	}

	enum RecalculationInterval {
		/**
		 * Recalculate when values are changed, and every hour.
		 */
		HOUR = "HOUR",
		/**
		 * Recalculate when values are changed, and every minute.
		 */
		MINUTE = "MINUTE",
		/**
		 * Recalculate only when values are changed.
		 */
		ON_CHANGE = "ON_CHANGE",
	}

	enum RelativeDate {
		/**
		 * Dates that fall within the past month period.
		 */
		PAST_MONTH = "PAST_MONTH",
		/**
		 * Dates that fall within the past week period.
		 */
		PAST_WEEK = "PAST_WEEK",
		/**
		 * Dates that fall within the past year period.
		 */
		PAST_YEAR = "PAST_YEAR",
		/**
		 * Dates compared against the current date.
		 */
		TODAY = "TODAY",
		/**
		 * Dates compared against the date after the current date.
		 */
		TOMORROW = "TOMORROW",
		/**
		 * Dates compared against the date before the current date.
		 */
		YESTERDAY = "YESTERDAY",
	}

	class RichTextValue {
		private constructor();

		/**
		 * Returns a builder for a Rich Text value initialized with the values of this Rich Text value.
		 * 
		 * @returns A builder for a Rich Text value.
		 */
		copy(): SpreadsheetApp.RichTextValueBuilder
		/**
		 * Gets the end index of this value in the cell.
		 * 
		 * @returns The end index of this value in the cell.
		 */
		getEndIndex(): number
		/**
		 * Returns the link URL for this value.
		 * 
		 * @returns The link URL for this value, or <code>null</code> if there is no link or if there are
		 *     multiple different links.
		 */
		getLinkUrl(): string
		/**
		 * Returns the link URL for the text from <code>startOffset</code> to <code>endOffset</code>. Offsets are 0
		 * based and relative to the cell's text, with the start offset being inclusive and the end offset
		 * being exclusive.
		 * 
		 * @param startOffset - The start offset.
		 * @param endOffset - The end offset.
		 * 
		 * @returns The link URL for this value, or <code>null</code> if there is no link or if multiple
		 *     different links are in the given range.
		 */
		getLinkUrl(
			startOffset: number,
			endOffset: number
		): string

		/**
		 * Returns the Rich Text string split into an array of runs, wherein each run is the longest
		 * possible substring having a consistent text style.
		 * 
		 * @returns An array of runs.
		 */
		getRuns(): SpreadsheetApp.RichTextValue[]
		/**
		 * Gets the start index of this value in the cell.
		 * 
		 * @returns The start index of this value in the cell.
		 */
		getStartIndex(): number
		/**
		 * Returns the text of this value.
		 * 
		 * @returns The text of this value.
		 */
		getText(): string
		/**
		 * Returns the text style of this value.
		 * 
		 * @returns The text style of this value.
		 */
		getTextStyle(): SpreadsheetApp.TextStyle
		/**
		 * Returns the text style of the text from <code>startOffset</code> to <code>endOffset</code>. Offsets are 0
		 * based and relative to the cell's text, with the start offset being inclusive and the end offset
		 * being exclusive.
		 * 
		 * @param startOffset - The start offset.
		 * @param endOffset - The end offset.
		 * 
		 * @returns The text style of the given substring of this value.
		 */
		getTextStyle(
			startOffset: number,
			endOffset: number
		): SpreadsheetApp.TextStyle


	}

	class RichTextValueBuilder {
		private constructor();

		/**
		 * Creates a Rich Text value from this builder.
		 * 
		 * @returns A Rich Text value created from this builder.
		 */
		build(): SpreadsheetApp.RichTextValue
		/**
		 * Sets the link URL for the given substring of this value, or clears it if <code>linkUrl</code> is
		 * <code>null</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a Rich Text value for the text &quot;foo no baz&quot; with &quot;foo&quot; pointing to
		 * // &quot;https://bar.foo&quot; and &quot;baz&quot; to &quot;https://abc.xyz&quot;.
		 * // &quot;foo&quot; is underlined with the default link color, whereas &quot;baz&quot; has its text style
		 * // overridden by a call to `setTextStyle`, and is therefore black and bold with no underlining.
		 * const boldStyle = SpreadsheetApp.newTextStyle()
		 *     .setUnderline(false)
		 *     .setBold(true)
		 *     .setForegroundColor(&quot;#000000&quot;)
		 *     .build();
		 * const value = SpreadsheetApp.newRichTextValue()
		 *     .setText(&quot;foo no baz&quot;)
		 *     .setLinkUrl(0, 3, &quot;https://bar.foo&quot;)
		 *     .setLinkUrl(7, 10, &quot;https://abc.xyz&quot;)
		 *     .setTextStyle(7, 10, boldStyle)
		 *     .build();
		 * </code></pre>
		 * 
		 * @param startOffset - The start offset for the substring, inclusive.
		 * @param endOffset - The end offset for the substring, exclusive.
		 * @param linkUrl - The link URL being set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setLinkUrl(
			startOffset: number,
			endOffset: number,
			linkUrl: string
		): SpreadsheetApp.RichTextValueBuilder
		/**
		 * Sets the link URL for the entire value, or clears it if <code>linkUrl</code> is <code>null</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a Rich Text value for the text &quot;Foo&quot; which points to &quot;https://bar.foo&quot;.
		 * const value = SpreadsheetApp.newRichTextValue()
		 *     .setText(&quot;Foo&quot;)
		 *     .setLinkUrl(&quot;https://bar.foo&quot;)
		 *     .build();
		 * </code></pre>
		 * 
		 * @param linkUrl - The link URL being set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setLinkUrl(
			linkUrl: string
		): SpreadsheetApp.RichTextValueBuilder

		/**
		 * Sets the text for this value and clears any existing text style. When creating a new Rich Text
		 * value, this should be called before <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value-builder.html#setTextStyle(Integer,Integer,TextStyle)'>setTextStyle(startOffset, endOffset, textStyle)</a></code>.
		 * 
		 * @param text - The text for this value.
		 * 
		 * @returns This builder, for chaining.
		 */
		setText(
			text: string
		): SpreadsheetApp.RichTextValueBuilder
		/**
		 * Applies a text style to the given substring of this value. Offsets are 0 based and are relative
		 * to the cell's text value. Does nothing if <code>textStyle</code> is <code>null</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a Rich Text value for the text &quot;HelloWorld&quot;, with &quot;Hello&quot; bolded, and &quot;World&quot;
		 * // italicized.
		 * var bold = SpreadsheetApp.newTextStyle().setBold(true).build();
		 * var italic = SpreadsheetApp.newTextStyle().setItalic(true).build();
		 * var value = SpreadsheetApp.newRichTextValue()
		 *     .setText(&quot;HelloWorld&quot;)
		 *     .setTextStyle(0, 5, bold)
		 *     .setTextStyle(5, 10, italic)
		 *     .build();
		 * </code></pre>
		 * 
		 * @param startOffset - The start offset for the substring, inclusive.
		 * @param endOffset - The end offset for the substring, exclusive.
		 * @param textStyle - The text style being set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setTextStyle(
			startOffset: number,
			endOffset: number,
			textStyle: SpreadsheetApp.TextStyle
		): SpreadsheetApp.RichTextValueBuilder
		/**
		 * Applies a text style to the entire value. Previously set text styles are only affected if they
		 * are directly overwritten by values within <code>textStyle</code>. Does nothing if <code>textStyle</code>
		 * is <code>null</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a Rich Text value for the text &quot;HelloWorld&quot; with &quot;Hello&quot; bolded and italicized,
		 * // and &quot;World&quot; only italicized.
		 * var bold = SpreadsheetApp.newTextStyle().setBold(true).build();
		 * var italic = SpreadsheetApp.newTextStyle().setItalic(true).build();
		 * var value = SpreadsheetApp.newRichTextValue()
		 *     .setText(&quot;HelloWorld&quot;)
		 *     .setTextStyle(0, 5, bold)
		 *     .setTextStyle(italic)
		 *     .build();
		 * </code></pre>
		 * 
		 * @param textStyle - The text style being set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setTextStyle(
			textStyle: SpreadsheetApp.TextStyle
		): SpreadsheetApp.RichTextValueBuilder


	}

	class Selection {
		private constructor();

		/**
		 * Returns the selected range in the active sheet, or <code>null</code> if there is no active range. If
		 * multiple ranges are selected this method returns only the last selected range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
		 * var activeRange = selection.getActiveRange();
		 * </code></pre>
		 * 
		 * @returns the active range
		 */
		getActiveRange(): SpreadsheetApp.Range
		/**
		 * Returns the list of active ranges in the active sheet or <code>null</code> if there are no active
		 * ranges.
		 * 
		 * <p>If there is a single range selected, this behaves as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getActiveRange()'>getActiveRange()</a></code> call.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * // Returns the list of active ranges.
		 * var activeRangeList = sheet.getActiveRangeList();
		 * </code></pre>
		 * 
		 * @returns the list of active ranges
		 */
		getActiveRangeList(): SpreadsheetApp.RangeList
		/**
		 * Returns the active sheet in the spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
		 * var activeSheet = selection.getActiveSheet();
		 * </code></pre>
		 * 
		 * @returns the active sheet in the spreadsheet
		 */
		getActiveSheet(): SpreadsheetApp.Sheet
		/**
		 * Returns the current (highlighted) cell that is selected in one of the active ranges or <code>null</code> if there is no current cell.
		 * 
		 * <pre class="prettyprint"><code>
		 * var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
		 * // Returns the current highlighted cell in the one of the active ranges.
		 * var currentCell = selection.getCurrentCell();
		 * </code></pre>
		 * 
		 * @returns the current cell
		 */
		getCurrentCell(): SpreadsheetApp.Range
		/**
		 * Starting from the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getCurrentCell()'>current cell</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getActiveRange()'>active range</a></code>
		 * and moving in the given direction, returns an adjusted range where the appropriate edge of the
		 * range has been shifted to cover the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#getNextDataCell(Direction)'>next data cell</a></code> while still
		 * covering the current cell. If the active range is unbounded along the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/dimension.html'>dimension</a></code> of the direction, the original active range is returned. If there is no current cell
		 * or active range, <code>null</code> is returned. This is equivalent to selecting a range in the
		 * editor and hitting <code>Ctrl+Shift+[arrow key]</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Assume the active spreadsheet is blank.
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Makes C3 the current cell and C3:E5 the active range.
		 * sheet.getRange(&quot;C3:E5&quot;).activate();
		 * // Logs &quot;C1:E3&quot;
		 * Logger.log(SpreadsheetApp.getSelection().getNextDataRange(Direction.UP).getA1Notation());
		 * </code></pre>
		 * 
		 * @param direction - The direction in which to find the next data region edge cell.
		 * 
		 * @returns the adjusted range that includes the data cell, or <code>null</code> if there is no
		 *     selection
		 */
		getNextDataRange(
			direction: SpreadsheetApp.Direction
		): SpreadsheetApp.Range

	}

	class Sheet {
		private constructor();

		/**
		 * Activates this sheet. Does not alter the sheet itself, only the parent's notion of the active
		 * sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This example assumes there is a sheet named &quot;first&quot;
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var first = ss.getSheetByName(&quot;first&quot;);
		 * first.activate();
		 * </code></pre>
		 * 
		 * @returns The newly active sheet.
		 */
		activate(): SpreadsheetApp.Sheet
		/**
		 * Adds developer metadata with the specified key to the sheet.
		 * 
		 * @param key - The key for the new developer metadata.
		 * 
		 * @returns This sheet, for chaining.
		 */
		addDeveloperMetadata(
			key: string
		): SpreadsheetApp.Sheet
		/**
		 * Adds developer metadata with the specified key and visibility to the sheet.
		 * 
		 * @param key - The key for the new developer metadata.
		 * @param visibility - The visibility of the new developer metadata.
		 * 
		 * @returns This sheet, for chaining.
		 */
		addDeveloperMetadata(
			key: string,
			visibility: SpreadsheetApp.DeveloperMetadataVisibility
		): SpreadsheetApp.Sheet
		/**
		 * Adds developer metadata with the specified key and value to the sheet.
		 * 
		 * @param key - The key for the new developer metadata.
		 * @param value - The value for the new developer metadata.
		 * 
		 * @returns This sheet, for chaining.
		 */
		addDeveloperMetadata(
			key: string,
			value: string
		): SpreadsheetApp.Sheet
		/**
		 * Adds developer metadata with the specified key, value, and visibility to the sheet.
		 * 
		 * @param key - The key for the new developer metadata.
		 * @param value - The value for the new developer metadata.
		 * @param visibility - The visibility of the new developer metadata.
		 * 
		 * @returns This sheet, for chaining.
		 */
		addDeveloperMetadata(
			key: string,
			value: string,
			visibility: SpreadsheetApp.DeveloperMetadataVisibility
		): SpreadsheetApp.Sheet

		/**
		 * Appends a row to the spreadsheet. This operation is atomic; it prevents issues where a user
		 * asks for the last row, and then writes to that row, and an intervening mutation occurs between
		 * getting the last row and writing to it.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Appends a new row with 3 columns to the bottom of the
		 * // spreadsheet containing the values in the array
		 * sheet.appendRow([&quot;a man&quot;, &quot;a plan&quot;, &quot;panama&quot;]);
		 * </code></pre>
		 * 
		 * @param rowContents - An array of values to insert after the last row in the sheet.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		appendRow(
			rowContents: object[]
		): SpreadsheetApp.Sheet
		/**
		 * Returns the sheet as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet.html'>DataSourceSheet</a></code> if the sheet is of type <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html#DATASOURCE'>SheetType.DATASOURCE</a></code>, or <code>null</code> otherwise.
		 * 
		 * @returns A data source sheet.
		 */
		asDataSourceSheet(): SpreadsheetApp.DataSourceSheet
		/**
		 * Sets the width of the given column to fit its contents.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * sheet.getRange(&#39;a1&#39;).setValue(&#39;Whenever it is a damp, drizzly November in my soul...&#39;);
		 * 
		 * // Sets the first column to a width which fits the text
		 * sheet.autoResizeColumn(1);
		 * </code></pre>
		 * 
		 * @param columnPosition - The position of the given column to resize.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		autoResizeColumn(
			columnPosition: number
		): SpreadsheetApp.Sheet
		/**
		 * Sets the width of all columns starting at the given column position to fit their contents.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Sets the first 15 columns to a width that fits their text.
		 * sheet.autoResizeColumns(1, 15);
		 * </code></pre>
		 * 
		 * @param startColumn - The starting column to auto-resize.
		 * @param numColumns - The number of columns to auto-resize.
		 * 
		 * @returns This sheet, for chaining.
		 */
		autoResizeColumns(
			startColumn: number,
			numColumns: number
		): SpreadsheetApp.Sheet
		/**
		 * Sets the height of all rows starting at the given row position to fit their contents.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Sets the first 15 rows to a height that fits their text.
		 * sheet.autoResizeRows(1, 15);
		 * </code></pre>
		 * 
		 * @param startRow - The starting row to auto-resize.
		 * @param numRows - The number of rows to auto-resize.
		 * 
		 * @returns This sheet, for chaining.
		 */
		autoResizeRows(
			startRow: number,
			numRows: number
		): SpreadsheetApp.Sheet
		/**
		 * Clears the sheet of content and formatting information.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This example assumes there is a sheet named &quot;first&quot;
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var first = ss.getSheetByName(&quot;first&quot;);
		 * first.clear();
		 * </code></pre>
		 * 
		 * @returns The cleared sheet.
		 */
		clear(): SpreadsheetApp.Sheet
		/**
		 * Clears the sheet of contents and/or format, as specified with the given advanced options.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * sheet.clear({ formatOnly: true, contentsOnly: true });
		 * </code></pre>
		 * 
		 * @param options - A JavaScript map containing advanced options, listed below.
		 * 
		 * @returns This sheet, for chaining.
		 */
		clear(
			options: object
		): SpreadsheetApp.Sheet

		/**
		 * Removes all conditional format rules from the sheet. Equivalent to calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#setConditionalFormatRules(ConditionalFormatRule)'>setConditionalFormatRules(rules)</a></code> with an empty array as input.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * sheet.clearConditionalFormatRules();
		 * </code></pre>
		 */
		clearConditionalFormatRules(): void
		/**
		 * Clears the sheet of contents, while preserving formatting information.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This example assumes there is a sheet named &quot;first&quot;
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var first = ss.getSheetByName(&quot;first&quot;);
		 * first.clearContents();
		 * </code></pre>
		 * 
		 * @returns This sheet, for chaining.
		 */
		clearContents(): SpreadsheetApp.Sheet
		/**
		 * Clears the sheet of formatting, while preserving contents.
		 * 
		 * <p>Formatting refers to how data is formatted as allowed by choices under the "Format" menu
		 * (ex: bold, italics, conditional formatting) and not width or height of cells.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This example assumes there is a sheet named &quot;first&quot;
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var first = ss.getSheetByName(&quot;first&quot;);
		 * first.clearFormats();
		 * </code></pre>
		 * 
		 * @returns This sheet, for chaining.
		 */
		clearFormats(): SpreadsheetApp.Sheet
		/**
		 * Clears the sheet of all notes.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This example assumes there is a sheet named &quot;first&quot;
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var first = ss.getSheetByName(&quot;first&quot;);
		 * first.clearNotes();
		 * </code></pre>
		 * 
		 * @returns This sheet, for chaining.
		 */
		clearNotes(): SpreadsheetApp.Sheet
		/**
		 * Collapses all column groups on the sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * 
		 * // All column groups on the sheet are collapsed.
		 * sheet.collapseAllColumnGroups();
		 * </code></pre>
		 * 
		 * @returns This sheet, for chaining.
		 */
		collapseAllColumnGroups(): SpreadsheetApp.Sheet
		/**
		 * Collapses all row groups on the sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * 
		 * // All row groups on the sheet are collapsed.
		 * sheet.collapseAllRowGroups();
		 * </code></pre>
		 * 
		 * @returns This sheet, for chaining.
		 */
		collapseAllRowGroups(): SpreadsheetApp.Sheet
		/**
		 * Copies the sheet to a given spreadsheet, which can be the same spreadsheet as the source. The
		 * copied sheet is named "Copy of [original name]".
		 * 
		 * <pre class="prettyprint"><code>
		 * var source = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = source.getSheets()[0];
		 * 
		 * var destination = SpreadsheetApp.openById(&#39;ID_GOES HERE&#39;);
		 * sheet.copyTo(destination);
		 * </code></pre>
		 * 
		 * @param spreadsheet - The spreadsheet to copy this sheet to, which can be the same spreadsheet as
		 *     the source.
		 * 
		 * @returns The new sheet, for chaining.
		 */
		copyTo(
			spreadsheet: SpreadsheetApp.Spreadsheet
		): SpreadsheetApp.Sheet
		/**
		 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-finder.html'>DeveloperMetadataFinder</a></code> for finding developer metadata within the scope of
		 * this sheet. Metadata is in the scope of a particular sheet if it is either associated with the
		 * sheet itself, or associated with a row, column, or range on that sheet.
		 * 
		 * @returns A developer metadata finder to search for metadata in the scope of this sheet.
		 */
		createDeveloperMetadataFinder(): SpreadsheetApp.DeveloperMetadataFinder
		/**
		 * Creates a text finder for the sheet, which can find and replace text within the sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * 
		 * // Creates  a text finder.
		 * var textFinder = sheet.createTextFinder(&#39;dog&#39;);
		 * 
		 * // Returns the first occurrence of &#39;dog&#39; in the sheet.
		 * var firstOccurrence = textFinder.findNext();
		 * 
		 * // Replaces the last found occurrence of &#39;dog&#39; with &#39;cat&#39; and returns the number
		 * // of occurrences replaced.
		 * var numOccurrencesReplaced = findOccurrence.replaceWith(&#39;cat&#39;);
		 * </code></pre>
		 * 
		 * @param findText - The text to search for.
		 * 
		 * @returns The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/text-finder.html'>TextFinder</a></code> for the sheet.
		 */
		createTextFinder(
			findText: string
		): SpreadsheetApp.TextFinder
		/**
		 * Deletes the column at the given column position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Columns start at &quot;1&quot; - this deletes the first column
		 * sheet.deleteColumn(1);
		 * </code></pre>
		 * 
		 * @param columnPosition - The position of the column, starting at 1 for the first column.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		deleteColumn(
			columnPosition: number
		): SpreadsheetApp.Sheet
		/**
		 * Deletes a number of columns starting at the given column position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Columns start at &quot;1&quot; - this deletes the first two columns
		 * sheet.deleteColumns(1, 2);
		 * </code></pre>
		 * 
		 * @param columnPosition - The position of the first column to delete.
		 * @param howMany - The number of columns to delete.
		 */
		deleteColumns(
			columnPosition: number,
			howMany: number
		): void
		/**
		 * Deletes the row at the given row position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Rows start at &quot;1&quot; - this deletes the first row
		 * sheet.deleteRow(1);
		 * </code></pre>
		 * 
		 * @param rowPosition - The position of the row, starting at 1 for the first row.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		deleteRow(
			rowPosition: number
		): SpreadsheetApp.Sheet
		/**
		 * Deletes a number of rows starting at the given row position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Rows start at &quot;1&quot; - this deletes the first two rows
		 * sheet.deleteRows(1, 2);
		 * </code></pre>
		 * 
		 * @param rowPosition - The position of the first row to delete.
		 * @param howMany - The number of rows to delete.
		 */
		deleteRows(
			rowPosition: number,
			howMany: number
		): void
		/**
		 * Expands all column groups on the sheet. This method requires at least one column group.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * 
		 * // All column groups on the sheet are expanded.
		 * sheet.expandAllColumnGroups();
		 * </code></pre>
		 * 
		 * @returns This sheet, for chaining.
		 */
		expandAllColumnGroups(): SpreadsheetApp.Sheet
		/**
		 * Expands all row groups on the sheet. This method requires at least one row group.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * 
		 * // All row groups on the sheet are expanded.
		 * sheet.expandAllRowGroups();
		 * </code></pre>
		 * 
		 * @returns This sheet, for chaining.
		 */
		expandAllRowGroups(): SpreadsheetApp.Sheet
		/**
		 * Expands all column groups up to the given depth, and collapses all others.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * 
		 * // All column groups of depth 2 and lower are expanded, and groups with depth
		 * // 3 and higher are collapsed.
		 * sheet.expandColumnGroupsUpToDepth(2);
		 * </code></pre>
		 * 
		 * @param groupDepth - The group depth up to which to expand the column groups.
		 * 
		 * @returns This sheet, for chaining.
		 */
		expandColumnGroupsUpToDepth(
			groupDepth: number
		): SpreadsheetApp.Sheet
		/**
		 * Expands all row groups up to the given depth, and collapses all others.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * 
		 * // All row groups of depth 2 and lower are expanded, and groups with depth
		 * // 3 and higher are collapsed.
		 * sheet.expandRowGroupsUpToDepth(2);
		 * </code></pre>
		 * 
		 * @param groupDepth - The group depth up to which to expand the row groups.
		 * 
		 * @returns This sheet, for chaining.
		 */
		expandRowGroupsUpToDepth(
			groupDepth: number
		): SpreadsheetApp.Sheet
		/**
		 * Returns the active cell in this sheet.
		 * 
		 * <p><b>Note:</b> It's preferrable to use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getCurrentCell()'>getCurrentCell()</a></code>, which the returns the current
		 * highlighted cell.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Returns the active cell
		 * var cell = sheet.getActiveCell();
		 * </code></pre>
		 * 
		 * @returns the current active cell
		 */
		getActiveCell(): SpreadsheetApp.Range
		/**
		 * Returns the selected range in the active sheet, or <code>null</code> if there is no active range. If
		 * multiple ranges are selected this method returns only the last selected range.
		 * 
		 * <p>The term "active range" refers to the range that a user has selected in the active sheet,
		 * but in a custom function it refers to the cell being actively recalculated.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
		 * var activeRange = sheet.getActiveRange();
		 * </code></pre>
		 * 
		 * @returns the active range
		 */
		getActiveRange(): SpreadsheetApp.Range
		/**
		 * Returns the list of active ranges in the active sheet or <code>null</code> if there are no active
		 * ranges.
		 * 
		 * <p>If there is a single range selected, this behaves as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getActiveRange()'>getActiveRange()</a></code> call.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * // Returns the list of active ranges.
		 * var activeRangeList = sheet.getActiveRangeList();
		 * </code></pre>
		 * 
		 * @returns the list of active ranges
		 */
		getActiveRangeList(): SpreadsheetApp.RangeList
		/**
		 * Returns all the bandings in this sheet.
		 * 
		 * @returns All the bandings in this sheet.
		 */
		getBandings(): SpreadsheetApp.Banding[]
		/**
		 * Returns an array of charts on this sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var charts = sheet.getCharts();
		 * 
		 * for (var i in charts) {
		 *   var chart = charts[i];
		 *   // Do something with the chart
		 * }
		 * </code></pre>
		 * 
		 * @returns An array of charts.
		 */
		getCharts(): SpreadsheetApp.EmbeddedChart[]
		/**
		 * Returns the column group at the given index and group depth.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * 
		 * // Returns the group whose control index is at column 2 and has a depth of 1, or
		 * // null if the group doesn’t exist.
		 * var columnGroup = sheet.getColumnGroup(2, 1);
		 * </code></pre>
		 * 
		 * @param columnIndex - The column index of the group control toggle or an index within the group.
		 * @param groupDepth - The depth of the group.
		 * 
		 * @returns The column group at the control index and depth, or <code>null</code> if the group doesn’t
		 *     exist.
		 */
		getColumnGroup(
			columnIndex: number,
			groupDepth: number
		): SpreadsheetApp.Group
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/group-control-toggle-position.html'>GroupControlTogglePosition</a></code> for all column groups on the sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * 
		 * // GroupControlTogglePosition.AFTER if the column grouping control toggle is shown after the
		 * // group.
		 * var columnGroupControlPosition = sheet.getColumnGroupControlPosition();
		 * </code></pre>
		 * 
		 * @returns <code>true</code> if the column grouping control toggle is shown after the group on this
		 *     sheet and <code>false</code> otherwise.
		 */
		getColumnGroupControlPosition(): SpreadsheetApp.GroupControlTogglePosition
		/**
		 * Returns the group depth of the column at the given index.
		 * 
		 * <p>The group depth indicates how many groups overlap with the column. This can range between
		 * zero and eight.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * 
		 * // 1 if there is a group over columns 1 through 3
		 * var groupDepth = sheet.getColumnGroupDepth(1);
		 * </code></pre>
		 * 
		 * @param columnIndex - The index of the column.
		 * 
		 * @returns The group depth of the column at the given index.
		 */
		getColumnGroupDepth(
			columnIndex: number
		): number
		/**
		 * Gets the width in pixels of the given column.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Columns start at 1
		 * Logger.log(sheet.getColumnWidth(1));
		 * </code></pre>
		 * 
		 * @param columnPosition - The position of the column to examine.
		 * 
		 * @returns column width in pixels
		 */
		getColumnWidth(
			columnPosition: number
		): number
		/**
		 * Get all conditional format rules in this sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the conditional format rules in a sheet.
		 * var rules = SpreadsheetApp.getActiveSheet().getConditionalFormatRules();
		 * for (var i = 0; i &lt; rules.length; i++) {
		 *   var rule = rules[i];
		 *   Logger.log(rule);
		 * }
		 * </code></pre>
		 * 
		 * @returns An array of all rules in the sheet.
		 */
		getConditionalFormatRules(): SpreadsheetApp.ConditionalFormatRule[]
		/**
		 * Returns the current cell in the active sheet or <code>null</code> if there is no current cell. The
		 * current cell is the cell that has focus in the Google Sheets UI, and is highlighted by a dark
		 * border. There is never more than one current cell. When a user selects one or more cell ranges,
		 * one of the cells in the selection is the current cell.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
		 * // Returns the current highlighted cell in the one of the active ranges.
		 * var currentCell = sheet.getCurrentCell();
		 * </code></pre>
		 * 
		 * @returns the current cell
		 */
		getCurrentCell(): SpreadsheetApp.Range
		/**
		 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> corresponding to the dimensions in which data is present.
		 * 
		 * <p>This is functionally equivalent to creating a Range bounded by A1 and
		 * (Range.getLastColumn(), Range.getLastRow()).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This represents ALL the data
		 * var range = sheet.getDataRange();
		 * var values = range.getValues();
		 * 
		 * // This logs the spreadsheet in CSV format with a trailing comma
		 * for (var i = 0; i &lt; values.length; i++) {
		 *   var row = &quot;&quot;;
		 *   for (var j = 0; j &lt; values[i].length; j++) {
		 *     if (values[i][j]) {
		 *       row = row + values[i][j];
		 *     }
		 *     row = row + &quot;,&quot;;
		 *   }
		 *   Logger.log(row);
		 * }
		 * </code></pre>
		 * 
		 * @returns a range consisting of all the data in the spreadsheet
		 */
		getDataRange(): SpreadsheetApp.Range
		/**
		 * Gets all the data source formulas.
		 * 
		 * @returns A list of data source formulas.
		 */
		getDataSourceFormulas(): SpreadsheetApp.DataSourceFormula[]
		/**
		 * Gets all the data source pivot tables.
		 * 
		 * @returns A list of data source pivot tables.
		 */
		getDataSourcePivotTables(): SpreadsheetApp.DataSourcePivotTable[]
		/**
		 * Gets all the data source tables.
		 * 
		 * @returns A list of data source tables.
		 */
		getDataSourceTables(): SpreadsheetApp.DataSourceTable[]
		/**
		 * Get all developer metadata associated with this sheet.
		 * 
		 * @returns The developer metadata associated with this sheet.
		 */
		getDeveloperMetadata(): SpreadsheetApp.DeveloperMetadata[]
		/**
		 * Returns an array of drawings on the sheet.
		 * 
		 * @returns The list of drawings on this sheet.
		 */
		getDrawings(): SpreadsheetApp.Drawing[]
		/**
		 * Returns the filter in this sheet, or <code>null</code> if there is no filter.
		 * 
		 * @returns The filter.
		 */
		getFilter(): SpreadsheetApp.Filter
		/**
		 * Returns the URL for the form that sends its responses to this sheet, or <code>null</code> if this
		 * sheet has no associated form.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var url = sheet.getFormUrl();
		 * </code></pre>
		 * 
		 * @returns The URL for the form that places its responses in this sheet, or <code>null</code> if this
		 *     sheet doesn't have an associated form.
		 */
		getFormUrl(): string
		/**
		 * Returns the number of frozen columns.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * Logger.log(&quot;Number of frozen columns: %s&quot;, sheet.getFrozenColumns());
		 * </code></pre>
		 * 
		 * @returns the number of frozen columns
		 */
		getFrozenColumns(): number
		/**
		 * Returns the number of frozen rows.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * Logger.log(&quot;Number of frozen rows: %s&quot;, sheet.getFrozenRows());
		 * </code></pre>
		 * 
		 * @returns the number of frozen rows
		 */
		getFrozenRows(): number
		/**
		 * Returns all over-the-grid images on the sheet.
		 * 
		 * @returns An array of over-the-grid images.
		 */
		getImages(): SpreadsheetApp.OverGridImage[]
		/**
		 * Gets the position of the sheet in its parent spreadsheet. Starts at 1.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * // Note that the JavaScript index is 0, but this logs 1
		 * var sheet = ss.getSheets()[0];
		 * // ... because spreadsheets are 1-indexed
		 * Logger.log(sheet.getIndex());
		 * </code></pre>
		 * 
		 * @returns The position of the sheet in its parent spreadsheet.
		 */
		getIndex(): number
		/**
		 * Returns the position of the last column that has content.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This logs the value in the very last cell of this sheet
		 * var lastRow = sheet.getLastRow();
		 * var lastColumn = sheet.getLastColumn();
		 * var lastCell = sheet.getRange(lastRow, lastColumn);
		 * Logger.log(lastCell.getValue());
		 * </code></pre>
		 * 
		 * @returns the last column of the sheet that contains content
		 */
		getLastColumn(): number
		/**
		 * Returns the position of the last row that has content.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This logs the value in the very last cell of this sheet
		 * var lastRow = sheet.getLastRow();
		 * var lastColumn = sheet.getLastColumn();
		 * var lastCell = sheet.getRange(lastRow, lastColumn);
		 * Logger.log(lastCell.getValue());
		 * </code></pre>
		 * 
		 * @returns the last row of the sheet that contains content
		 */
		getLastRow(): number
		/**
		 * Returns the current number of columns in the sheet, regardless of content.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This example assumes there is a sheet named &quot;first&quot;
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var first = ss.getSheetByName(&quot;first&quot;);
		 * Logger.log(first.getMaxColumns());
		 * </code></pre>
		 * 
		 * @returns The maximum width of the sheet.
		 */
		getMaxColumns(): number
		/**
		 * Returns the current number of rows in the sheet, regardless of content.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This example assumes there is a sheet named &quot;first&quot;
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var first = ss.getSheetByName(&quot;first&quot;);
		 * Logger.log(first.getMaxRows());
		 * </code></pre>
		 * 
		 * @returns The maximum height of the sheet.
		 */
		getMaxRows(): number
		/**
		 * Returns the name of the sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * Logger.log(sheet.getName());
		 * </code></pre>
		 * 
		 * @returns The name of the sheet.
		 */
		getName(): string
		/**
		 * Gets all the named ranges in this sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the name of the first named range.
		 * var namedRanges = SpreadsheetApp.getActiveSheet().getNamedRanges();
		 * if (namedRanges.length &gt; 1) {
		 *   Logger.log(namedRanges[0].getName());
		 * }
		 * </code></pre>
		 * 
		 * @returns An array of all the named ranges in the sheet.
		 */
		getNamedRanges(): SpreadsheetApp.NamedRange[]
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> that contains this sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // parent is identical to ss
		 * var parent = sheet.getParent();
		 * </code></pre>
		 * 
		 * @returns The parent spreadsheet.
		 */
		getParent(): SpreadsheetApp.Spreadsheet
		/**
		 * Returns all the pivot tables on this sheet.
		 * 
		 * @returns The pivot tables on this sheet.
		 */
		getPivotTables(): SpreadsheetApp.PivotTable[]
		/**
		 * Gets an array of objects representing all protected ranges in the sheet, or a single-element
		 * array representing the protection on the sheet itself.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Remove all range protections in the spreadsheet that the user has permission to edit.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var protections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);
		 * for (var i = 0; i &lt; protections.length; i++) {
		 *   var protection = protections[i];
		 *   if (protection.canEdit()) {
		 *     protection.remove();
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * <pre class="prettyprint"><code>
		 * // Remove sheet protection from the active sheet, if the user has permission to edit it.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var protection = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
		 * if (protection &amp;&amp; protection.canEdit()) {
		 *   protection.remove();
		 * }
		 * </code></pre>
		 * 
		 * @param type - The type of protected area, either <code>SpreadsheetApp.ProtectionType.RANGE</code> or
		 *     <code>SpreadsheetApp.ProtectionType.SHEET</code>.
		 * 
		 * @returns An array of objects representing all protected ranges in the sheet, or a single-element
		 *     array representing the protection on the sheet itself.
		 */
		getProtections(
			type: SpreadsheetApp.ProtectionType
		): SpreadsheetApp.Protection[]
		/**
		 * Returns the range with the top left cell at the given coordinates.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Passing only two arguments returns a &quot;range&quot; with a single cell.
		 * var range = sheet.getRange(1, 1);
		 * var values = range.getValues();
		 * Logger.log(values[0][0]);
		 * </code></pre>
		 * 
		 * @param row - The row index of the cell to return; row indexing starts with 1.
		 * @param column - The column index of the cell to return; column indexing starts with 1.
		 * 
		 * @returns A range containing only this cell.
		 */
		getRange(
			row: number,
			column: number
		): SpreadsheetApp.Range
		/**
		 * Returns the range with the top left cell at the given coordinates, and with the given number of
		 * rows.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // When the &quot;numRows&quot; argument is used, only a single column of data is returned.
		 * var range = sheet.getRange(1, 1, 3);
		 * var values = range.getValues();
		 * 
		 * // Prints 3 values from the first column, starting from row 1.
		 * for (var row in values) {
		 *   for (var col in values[row]) {
		 *     Logger.log(values[row][col]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @param row - The starting row index of the range; row indexing starts with 1.
		 * @param column - The column index of the range; column indexing starts with 1.
		 * @param numRows - The number of rows to return.
		 * 
		 * @returns A range containing a single column of data with the number of rows specified.
		 */
		getRange(
			row: number,
			column: number,
			numRows: number
		): SpreadsheetApp.Range
		/**
		 * Returns the range with the top left cell at the given coordinates with the given number of rows
		 * and columns.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * var range = sheet.getRange(1, 1, 3, 3);
		 * var values = range.getValues();
		 * 
		 * // Print values from a 3x3 box.
		 * for (var row in values) {
		 *   for (var col in values[row]) {
		 *     Logger.log(values[row][col]);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @param row - The starting row index of the range; row indexing starts with 1.
		 * @param column - The starting column index of the range; column indexing starts with 1.
		 * @param numRows - The number of rows to return.
		 * @param numColumns - The number of columns to return.
		 * 
		 * @returns A range corresponding to the area specified.
		 */
		getRange(
			row: number,
			column: number,
			numRows: number,
			numColumns: number
		): SpreadsheetApp.Range
		/**
		 * Returns the range as specified in A1 notation or R1C1 notation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get a range A1:D4 on sheet titled &quot;Invoices&quot;
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var range = ss.getRange(&quot;Invoices!A1:D4&quot;);
		 * 
		 * // Get cell A1 on the first sheet
		 * var sheet = ss.getSheets()[0];
		 * var cell = sheet.getRange(&quot;A1&quot;);
		 * </code></pre>
		 * 
		 * @param a1Notation - The range to return, as specified in A1 notation or R1C1 notation.
		 * 
		 * @returns the range at the location designated
		 */
		getRange(
			a1Notation: string
		): SpreadsheetApp.Range

		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range-list.html'>RangeList</a></code> collection representing the ranges in the same sheet specified
		 * by a non-empty list of A1 notations or R1C1 notations.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get a list of ranges A1:D4, F1:H4.
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
		 * var rangeList  = sheet.getRangeList([&#39;A1:D4&#39;, &#39;F1:H4&#39;]);
		 * </code></pre>
		 * 
		 * @param a1Notations - The list of ranges to return, as specified in A1 notation or R1C1 notation.
		 * 
		 * @returns the range list at the location designated
		 */
		getRangeList(
			a1Notations: string[]
		): SpreadsheetApp.RangeList
		/**
		 * Returns the row group at the given index and group depth.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * 
		 * // Returns the group whose control index is at row 2 and has a depth of 1, or
		 * // null if the group doesn’t exist.
		 * var rowGroup = sheet.getRowGroup(2, 1);
		 * </code></pre>
		 * 
		 * @param rowIndex - The row index of the group control toggle or an index within the group.
		 * @param groupDepth - The depth of the group.
		 * 
		 * @returns The row group at the control index and depth, or <code>null</code> if the group doesn’t
		 *     exist.
		 */
		getRowGroup(
			rowIndex: number,
			groupDepth: number
		): SpreadsheetApp.Group
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/group-control-toggle-position.html'>GroupControlTogglePosition</a></code> for all row groups on the sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * 
		 * // GroupControlTogglePosition.AFTER if the row grouping control toggle is shown after the
		 * // group.
		 * var rowGroupControlPosition = sheet.getRowGroupControlPosition();
		 * </code></pre>
		 * 
		 * @returns <code>true</code> if the row grouping control toggle is shown after the group on this sheet
		 *     and <code>false</code> otherwise.
		 */
		getRowGroupControlPosition(): SpreadsheetApp.GroupControlTogglePosition
		/**
		 * Returns the group depth of the row at the given index.
		 * 
		 * <p>The group depth indicates how many groups overlap with the row. This can range between zero
		 * and eight.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * 
		 * // 1 if there is a group over rows 1 through 3
		 * var groupDepth = sheet.getRowGroupDepth(1);
		 * </code></pre>
		 * 
		 * @param rowIndex - The index of the row.
		 * 
		 * @returns The group depth of the row at the given index.
		 */
		getRowGroupDepth(
			rowIndex: number
		): number
		/**
		 * Gets the height in pixels of the given row.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Rows start at 1
		 * Logger.log(sheet.getRowHeight(1));
		 * </code></pre>
		 * 
		 * @param rowPosition - The position of the row to examine.
		 * 
		 * @returns row height in pixels
		 */
		getRowHeight(
			rowPosition: number
		): number
		/**
		 * Returns the current <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html'>Selection</a></code> in the spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
		 * var currentCell = selection.getCurrentCell();
		 * </code></pre>
		 * 
		 * @returns the current selection
		 */
		getSelection(): SpreadsheetApp.Selection
		/**
		 * Returns the ID of the sheet represented by this object.
		 * 
		 * <p>This is an ID for the sheet that is unique to the spreadsheet. The ID is a monotonically
		 * increasing integer assigned at sheet creation time that is independent of sheet position. This
		 * is useful in conjunction with methods such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#copyFormatToRange(Integer,Integer,Integer,Integer,Integer)'>Range.copyFormatToRange(gridId, column, columnEnd, row, rowEnd)</a></code> that take a <code>gridId</code> parameter rather than a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html'>Sheet</a></code> instance.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * Logger.log(sheet.getSheetId());
		 * </code></pre>
		 * 
		 * @returns an ID for the sheet unique to the spreadsheet
		 */
		getSheetId(): number
		/**
		 * Returns the sheet name.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * Logger.log(sheet.getSheetName());
		 * </code></pre>
		 * 
		 * @returns the name of the sheet
		 */
		getSheetName(): string
		/**
		 * Returns a <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/page-protection.html'>PageProtection</a></s></code> instance describing the permissions for the current sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var permissions = sheet.getSheetProtection();
		 * 
		 * permissions.setProtected(true);
		 * permissions.addUser(&quot;user@example.com&quot;);
		 * 
		 * // Logs the users that have access to edit this sheet. Note that this
		 * // is different from access to the entire spreadsheet - getUsers()
		 * // only returns users if permissions.isProtected() is set to true.
		 * var users = permissions.getUsers();
		 * Logger.log(users);
		 * </code></pre>
		 * 
		 * @returns an object describing sheet access permissions
		 */
		getSheetProtection(): SpreadsheetApp.PageProtection
		/**
		 * Returns the rectangular grid of values for this range starting at the given coordinates. A -1
		 * value given as the row or column position is equivalent to getting the very last row or column
		 * that has data in the sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // The two samples below produce the same output
		 * var values = sheet.getSheetValues(1, 1, 3, 3);
		 * Logger.log(values);
		 * 
		 * var range = sheet.getRange(1, 1, 3, 3);
		 * values = range.getValues();
		 * Logger.log(values);
		 * </code></pre>
		 * 
		 * @param startRow - The position of the starting row.
		 * @param startColumn - The position of the starting column.
		 * @param numRows - The number of rows to return values for.
		 * @param numColumns - The number of columns to return values for.
		 * 
		 * @returns a two-dimensional array of values
		 */
		getSheetValues(
			startRow: number,
			startColumn: number,
			numRows: number,
			numColumns: number
		): object[][]
		/**
		 * Returns an array of slicers on the sheet.
		 * 
		 * @returns The list of slicers on this sheet.
		 */
		getSlicers(): SpreadsheetApp.Slicer[]
		/**
		 * Gets the sheet tab color, or <code>null</code> if the sheet tab has no color.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This example assumes there is a sheet named &quot;first&quot;
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var first = ss.getSheetByName(&quot;first&quot;);
		 * var color = first.getTabColor();
		 * </code></pre>
		 * 
		 * @returns Color code in CSS notation (such as <code>&#39;#ffffff&#39;</code>).
		 */
		getTabColor(): string
		/**
		 * Gets the sheet tab color, or <code>null</code> if the sheet tab has no color.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This example assumes there is a sheet named &quot;Sheet1&quot;
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var first = ss.getSheetByName(&quot;Sheet1&quot;);
		 * var color = first.getTabColorObject();
		 * </code></pre>
		 * 
		 * @returns The sheet tab color, or <code>null</code> if the sheet tab has no color.
		 */
		getTabColorObject(): SpreadsheetApp.Color
		/**
		 * Returns the type of the sheet.
		 * 
		 * <p>The default type of sheet is <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html#GRID'>SheetType.GRID</a></code>. A sheet that contains a single embedded
		 * object such as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart.html'>EmbeddedChart</a></code> is an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html#OBJECT'>SheetType.OBJECT</a></code> sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * Logger.log(sheet.getType());
		 * </code></pre>
		 * 
		 * @returns The type of the sheet.
		 */
		getType(): SpreadsheetApp.SheetType
		/**
		 * Returns <code>true</code> if the sheet's gridlines are hidden; otherwise returns <code>false</code>.
		 * Gridlines are visible by default.
		 * 
		 * @returns <code>true</code> if gridlines are hidden; <code>false</code> otherwise.
		 */
		hasHiddenGridlines(): Boolean
		/**
		 * Hides the columns in the given range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This hides the first column
		 * var range = sheet.getRange(&quot;A1&quot;);
		 * sheet.hideColumn(range);
		 * </code></pre>
		 * 
		 * @param column - The column range to hide.
		 */
		hideColumn(
			column: SpreadsheetApp.Range
		): void
		/**
		 * Hides the column at the given index.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Hides the first column
		 * sheet.hideColumns(1);
		 * </code></pre>
		 * 
		 * @param columnIndex - The index of the column to hide.
		 */
		hideColumns(
			columnIndex: number
		): void
		/**
		 * Hides one or more consecutive columns starting at the given index.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Hides the first three columns
		 * sheet.hideColumns(1, 3);
		 * </code></pre>
		 * 
		 * @param columnIndex - The starting index of the columns to hide.
		 * @param numColumns - The number of columns to hide.
		 */
		hideColumns(
			columnIndex: number,
			numColumns: number
		): void

		/**
		 * Hides the rows in the given range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This hides the first row
		 * var range = sheet.getRange(&quot;A1&quot;);
		 * sheet.hideRow(range);
		 * </code></pre>
		 * 
		 * @param row - The row range to hide.
		 */
		hideRow(
			row: SpreadsheetApp.Range
		): void
		/**
		 * Hides the row at the given index.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Hides the first row
		 * sheet.hideRows(1);
		 * </code></pre>
		 * 
		 * @param rowIndex - The index of the row to hide.
		 */
		hideRows(
			rowIndex: number
		): void
		/**
		 * Hides one or more consecutive rows starting at the given index.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Hides the first three rows
		 * sheet.hideRows(1, 3);
		 * </code></pre>
		 * 
		 * @param rowIndex - The starting index of the rows to hide.
		 * @param numRows - The number of rows to hide.
		 */
		hideRows(
			rowIndex: number,
			numRows: number
		): void

		/**
		 * Hides this sheet. Has no effect if the sheet is already hidden. If this method is called on the
		 * only visible sheet, it throws an exception.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * sheet.hideSheet();
		 * </code></pre>
		 * 
		 * @returns The current sheet.
		 */
		hideSheet(): SpreadsheetApp.Sheet
		/**
		 * Adds a new chart to this sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This creates a simple bar chart from the first three rows
		 * // of the first two columns of the spreadsheet
		 * var chart = sheet.newChart()
		 *     .setChartType(Charts.ChartType.BAR)
		 *     .addRange(sheet.getRange(&quot;A1:B4&quot;))
		 *     .setPosition(5, 5, 0, 0)
		 *     .setOption(&quot;title&quot;, &quot;Dynamic Chart&quot;)
		 *     .build();
		 * sheet.insertChart(chart);
		 * </code></pre>
		 * 
		 * @param chart - The chart to insert.
		 */
		insertChart(
			chart: SpreadsheetApp.EmbeddedChart
		): void
		/**
		 * Inserts a column after the given column position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This inserts a column after the first column position
		 * sheet.insertColumnAfter(1);
		 * </code></pre>
		 * 
		 * @param afterPosition - The column after which the new column should be added.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		insertColumnAfter(
			afterPosition: number
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a column before the given column position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This inserts a column in the first column position
		 * sheet.insertColumnBefore(1);
		 * </code></pre>
		 * 
		 * @param beforePosition - The column before which the new column should be added.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		insertColumnBefore(
			beforePosition: number
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a blank column in a sheet at the specified location.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Shifts all columns by one
		 * sheet.insertColumns(1);
		 * </code></pre>
		 * 
		 * @param columnIndex - The index indicating where to insert a column.
		 */
		insertColumns(
			columnIndex: number
		): void
		/**
		 * Inserts one or more consecutive blank columns in a sheet starting at the specified location.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Shifts all columns by three
		 * sheet.insertColumns(1, 3);
		 * </code></pre>
		 * 
		 * @param columnIndex - The index indicating where to insert a column.
		 * @param numColumns - The number of columns to insert.
		 */
		insertColumns(
			columnIndex: number,
			numColumns: number
		): void

		/**
		 * Inserts a number of columns after the given column position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This inserts a column in the second column position
		 * sheet.insertColumnsAfter(1);
		 * </code></pre>
		 * 
		 * @param afterPosition - The column after which the new column should be added.
		 * @param howMany - The number of columns to insert.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		insertColumnsAfter(
			afterPosition: number,
			howMany: number
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a number of columns before the given column position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This inserts five columns before the first column
		 * sheet.insertColumnsBefore(1, 5);
		 * </code></pre>
		 * 
		 * @param beforePosition - The column before which the new column should be added.
		 * @param howMany - The number of columns to insert.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		insertColumnsBefore(
			beforePosition: number,
			howMany: number
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../base/blob-source.html'>BlobSource</a></code> as an image in the document at a given row and column. The image
		 * size is retrieved from the blob contents.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var blob = Utilities.newBlob(binaryData, &#39;image/png&#39;, &#39;MyImageName&#39;);
		 * sheet.insertImage(blob, 1, 1);
		 * </code></pre>
		 * 
		 * @param blobSource - The blob containing the image contents, MIME type, and (optionally) name.
		 * @param column - The column position.
		 * @param row - The row position.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			blobSource: BlobSource,
			column: number,
			row: number
		): SpreadsheetApp.OverGridImage
		/**
		 * Inserts a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../base/blob-source.html'>BlobSource</a></code> as an image in the document at a given row and column, with a
		 * pixel offset. The image size is retrieved from the blob contents.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var blob = Utilities.newBlob(binaryData, &#39;image/png&#39;, &#39;MyImageName&#39;);
		 * sheet.insertImage(blob, 1, 1, 10, 10);
		 * </code></pre>
		 * 
		 * @param blobSource - The blob containing the image contents, MIME type, and (optionally) name.
		 * @param column - The column position.
		 * @param row - The row position.
		 * @param offsetX - The horizontal offset from cell corner in pixels.
		 * @param offsetY - The vertical offset from cell corner in pixels.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			blobSource: BlobSource,
			column: number,
			row: number,
			offsetX: number,
			offsetY: number
		): SpreadsheetApp.OverGridImage
		/**
		 * Inserts an image in the document at a given row and column.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * sheet.insertImage(&quot;https://www.google.com/images/srpr/logo3w.png&quot;, 1, 1);
		 * </code></pre>
		 * 
		 * @param url - The URL of the image.
		 * @param column - The grid column position.
		 * @param row - The grid row position.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			url: string,
			column: number,
			row: number
		): SpreadsheetApp.OverGridImage
		/**
		 * Inserts an image in the document at a given row and column, with a pixel offset.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * sheet.insertImage(&quot;https://www.google.com/images/srpr/logo3w.png&quot;, 1, 1, 10, 10);
		 * </code></pre>
		 * 
		 * @param url - The URL for the image.
		 * @param column - The column position.
		 * @param row - The row position.
		 * @param offsetX - The horizontal offset from cell corner in pixels.
		 * @param offsetY - The vertical offset from cell corner in pixels.
		 * 
		 * @returns The Inserted image.
		 */
		insertImage(
			url: string,
			column: number,
			row: number,
			offsetX: number,
			offsetY: number
		): SpreadsheetApp.OverGridImage

		/**
		 * Inserts a row after the given row position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This inserts a row after the first row position
		 * sheet.insertRowAfter(1);
		 * </code></pre>
		 * 
		 * @param afterPosition - The row after which the new row should be added.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		insertRowAfter(
			afterPosition: number
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a row before the given row position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This inserts a row before the first row position
		 * sheet.insertRowBefore(1);
		 * </code></pre>
		 * 
		 * @param beforePosition - The row before which the new row should be added.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		insertRowBefore(
			beforePosition: number
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a blank row in a sheet at the specified location.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Shifts all rows down by one
		 * sheet.insertRows(1);
		 * </code></pre>
		 * 
		 * @param rowIndex - The index indicating where to insert a row.
		 */
		insertRows(
			rowIndex: number
		): void
		/**
		 * Inserts one or more consecutive blank rows in a sheet starting at the specified location.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Shifts all rows down by three
		 * sheet.insertRows(1, 3);
		 * </code></pre>
		 * 
		 * @param rowIndex - The index indicating where to insert a row.
		 * @param numRows - The number of rows to insert.
		 */
		insertRows(
			rowIndex: number,
			numRows: number
		): void

		/**
		 * Inserts a number of rows after the given row position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This inserts five rows after the first row
		 * sheet.insertRowsAfter(1, 5);
		 * </code></pre>
		 * 
		 * @param afterPosition - The row after which the new rows should be added.
		 * @param howMany - The number of rows to insert.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		insertRowsAfter(
			afterPosition: number,
			howMany: number
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a number of rows before the given row position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This inserts five rows before the first row
		 * sheet.insertRowsBefore(1, 5);
		 * </code></pre>
		 * 
		 * @param beforePosition - The row before which the new rows should be added.
		 * @param howMany - The number of rows to insert.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		insertRowsBefore(
			beforePosition: number,
			howMany: number
		): SpreadsheetApp.Sheet
		/**
		 * Adds a new slicer to this sheet.
		 * 
		 * @param range - The range over which slicer slicer is created.
		 * @param anchorRowPos - The slicer's top side is anchored in this row.
		 * @param anchorColPos - The slicer's top side is anchored in this col.
		 * 
		 * @returns The newly inserted slicer.
		 */
		insertSlicer(
			range: SpreadsheetApp.Range,
			anchorRowPos: number,
			anchorColPos: number
		): SpreadsheetApp.Slicer
		/**
		 * Adds a new slicer to this sheet.
		 * 
		 * @param range - The range over which slicer slicer is created.
		 * @param anchorRowPos - The slicer's top side is anchored in this row.
		 * @param anchorColPos - The slicer's top side is anchored in this col.
		 * @param offsetX - The horizontal offset from cell corner in pixels.
		 * @param offsetY - The vertical offset from cell corner in pixels.
		 * 
		 * @returns The newly inserted slicer.
		 */
		insertSlicer(
			range: SpreadsheetApp.Range,
			anchorRowPos: number,
			anchorColPos: number,
			offsetX: number,
			offsetY: number
		): SpreadsheetApp.Slicer

		/**
		 * Returns whether the given column is hidden by the user.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Columns start at 1
		 * Logger.log(sheet.isColumnHiddenByUser(1));
		 * </code></pre>
		 * 
		 * @param columnPosition - The position of the column to examine.
		 * 
		 * @returns <code>true</code> if the column is hidden, <code>false</code> otherwise.
		 */
		isColumnHiddenByUser(
			columnPosition: number
		): Boolean
		/**
		 * Returns <code>true</code> if this sheet layout is right-to-left. Returns <code>false</code> if the sheet
		 * uses the default left-to-right layout.
		 * 
		 * @returns <code>true</code> if right-to-left; <code>false</code> otherwise.
		 */
		isRightToLeft(): Boolean
		/**
		 * Returns whether the given row is hidden by a filter (not a filter view).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Rows start at 1
		 * Logger.log(sheet.isRowHiddenByFilter(1));
		 * </code></pre>
		 * 
		 * @param rowPosition - The position of the row to examine.
		 * 
		 * @returns <code>true</code> if the row is hidden, <code>false</code> otherwise.
		 */
		isRowHiddenByFilter(
			rowPosition: number
		): Boolean
		/**
		 * Returns whether the given row is hidden by the user.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Rows start at 1
		 * Logger.log(sheet.isRowHiddenByUser(1));
		 * </code></pre>
		 * 
		 * @param rowPosition - The position of the row to examine.
		 * 
		 * @returns <code>true</code> if the row is hidden, <code>false</code> otherwise.
		 */
		isRowHiddenByUser(
			rowPosition: number
		): Boolean
		/**
		 * Returns <code>true</code> if the sheet is currently hidden.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * if (sheet.isSheetHidden()) {
		 *   // do something...
		 * }
		 * </code></pre>
		 * 
		 * @returns <code>true</code> if the sheet is hidden, <code>false</code> otherwise.
		 */
		isSheetHidden(): Boolean
		/**
		 * Moves the columns selected by the given range to the position indicated by the <code>destinationIndex</code>. The <code>columnSpec</code> itself does not have to exactly represent an entire
		 * column or group of columns to move&mdash;it selects all columns that the range spans.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below moves rows A-B to destination index 5.
		 * // This results in those columns becoming columns C-D.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * // Selects column A and column B to be moved.
		 * var columnSpec = sheet.getRange(&quot;A1:B1&quot;);
		 * sheet.moveColumns(columnSpec, 5);
		 * </code></pre>
		 * 
		 * @param columnSpec - A range spanning the columns that should be moved.
		 * @param destinationIndex - The index that the columns should be moved to. Note that this index is
		 *     based on the coordinates before the columns are moved. Existing data is shifted right to
		 *     make room for the moved columns while the source columns are removed from the grid.
		 *     Therefore, the data may end up at a different index than originally specified.
		 */
		moveColumns(
			columnSpec: SpreadsheetApp.Range,
			destinationIndex: number
		): void
		/**
		 * Moves the rows selected by the given range to the position indicated by the <code>destinationIndex</code>. The <code>rowSpec</code> itself does not have to exactly represent an entire row
		 * or group of rows to move&mdash;it selects all rows that the range spans.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below moves rows 1-2 to destination index 5.
		 * // This results in those rows becoming rows 3-4.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * // Selects row 1 and row 2 to be moved.
		 * var rowSpec = sheet.getRange(&quot;A1:A2&quot;);
		 * sheet.moveRows(rowSpec, 5);
		 * </code></pre>
		 * 
		 * @param rowSpec - A range spanning the rows that should be moved.
		 * @param destinationIndex - The index that the rows should be moved to. Note that this index is
		 *     based on the coordinates before the rows are moved. Existing data is shifted down to make
		 *     room for the moved rows while the source rows are removed from the grid. Therefore, the
		 *     data may end up at a different index than originally specified.
		 */
		moveRows(
			rowSpec: SpreadsheetApp.Range,
			destinationIndex: number
		): void
		/**
		 * Returns a builder to create a new chart for this sheet.
		 * 
		 * <p>This example shows how to create a new chart:
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var range = sheet.getRange(&quot;A1:B8&quot;);
		 * var chartBuilder = sheet.newChart();
		 * chartBuilder.addRange(range)
		 *     .setChartType(Charts.ChartType.LINE)
		 *     .setPosition(2, 2, 0, 0)
		 *     .setOption(&#39;title&#39;, &#39;My Line Chart!&#39;);
		 * sheet.insertChart(chartBuilder.build());
		 * </code></pre>
		 * 
		 * @returns A builder to create a new chart.
		 */
		newChart(): SpreadsheetApp.EmbeddedChartBuilder
		/**
		 * Creates an object that can protect the sheet from being edited except by users who have
		 * permission. Until the script actually changes the list of editors for the sheet (by calling
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditor(String)'>Protection.removeEditor(emailAddress)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditor(User)'>Protection.removeEditor(user)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditors(String)'>Protection.removeEditors(emailAddresses)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditor(String)'>Protection.addEditor(emailAddress)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditor(User)'>Protection.addEditor(user)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditors(String)'>Protection.addEditors(emailAddresses)</a></code>, or setting a new
		 * value for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setDomainEdit(Boolean)'>Protection.setDomainEdit(editable)</a></code>), the permissions mirror those of the
		 * spreadsheet itself, which effectively means that the sheet remains unprotected. If the sheet is
		 * already protected, this method returns an object representing its existing protection settings.
		 * A protected sheet may include unprotected regions.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Protect the active sheet, then remove all other users from the list of editors.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var protection = sheet.protect().setDescription(&#39;Sample protected sheet&#39;);
		 * 
		 * // Ensure the current user is an editor before removing others. Otherwise, if the user&#39;s edit
		 * // permission comes from a group, the script throws an exception upon removing the group.
		 * var me = Session.getEffectiveUser();
		 * protection.addEditor(me);
		 * protection.removeEditors(protection.getEditors());
		 * if (protection.canDomainEdit()) {
		 *   protection.setDomainEdit(false);
		 * }
		 * </code></pre>
		 * 
		 * @returns An object representing the protection settings.
		 */
		protect(): SpreadsheetApp.Protection
		/**
		 * Removes a chart from the parent sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This removes all the embedded charts from the spreadsheet
		 * var charts = sheet.getCharts();
		 * for (var i in charts) {
		 *   sheet.removeChart(charts[i]);
		 * }
		 * </code></pre>
		 * 
		 * @param chart - The chart to remove.
		 */
		removeChart(
			chart: SpreadsheetApp.EmbeddedChart
		): void
		/**
		 * Sets the specified range as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getActiveRange()'>active range</a></code> in the active sheet, with
		 * the top left cell in the range as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getCurrentCell()'>current cell</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
		 * var range = sheet.getRange(&#39;A1:D4&#39;);
		 * sheet.setActiveRange(range);
		 * 
		 * var selection = sheet.getSelection();
		 * // Current cell: A1
		 * var currentCell = selection.getCurrentCell();
		 * // Active Range: A1:D4
		 * var activeRange = selection.getActiveRange();
		 * </code></pre>
		 * 
		 * @param range - The range to set as the active range.
		 * 
		 * @returns the newly active range
		 */
		setActiveRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.Range
		/**
		 * Sets the specified list of ranges as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getActiveRangeList()'>active ranges</a></code> in the
		 * active sheet. The last range in the list is set as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getActiveRange()'>active range</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;D4&#39;, &#39;B2:C4&#39;]);
		 * sheet.setActiveRangeList(rangeList);
		 * 
		 * var selection = sheet.getSelection();
		 * // Current cell: B2
		 * var currentCell = selection.getCurrentCell();
		 * // Active range: B2:C4
		 * var activeRange = selection.getActiveRange();
		 * // Active range list: [D4, B2:C4]
		 * var activeRangeList = selection.getActiveRangeList();
		 * </code></pre>
		 * 
		 * @param rangeList - The list of ranges to select.
		 * 
		 * @returns the newly selected list of ranges
		 */
		setActiveRangeList(
			rangeList: SpreadsheetApp.RangeList
		): SpreadsheetApp.RangeList
		/**
		 * Sets the active selection region for this sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:D4&quot;);
		 * sheet.setActiveSelection(range);
		 * </code></pre>
		 * 
		 * @param range - The range to set as the active selection.
		 * 
		 * @returns the newly active range
		 */
		setActiveSelection(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.Range
		/**
		 * Sets the active selection, as specified in A1 notation or R1C1 notation.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * sheet.setActiveSelection(&quot;A1:D4&quot;);
		 * </code></pre>
		 * 
		 * @param a1Notation - The range to set as active, as specified in A1 notation or R1C1 notation.
		 * 
		 * @returns the newly active range
		 */
		setActiveSelection(
			a1Notation: string
		): SpreadsheetApp.Range

		/**
		 * Sets the position of the column group control toggle on the sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * sheet.setColumnGroupControlPosition(SpreadsheetApp.GroupControlTogglePosition.AFTER);
		 * </code></pre>
		 * 
		 * @param position - The position of the column group control toggle.
		 * 
		 * @returns This sheet, for chaining.
		 */
		setColumnGroupControlPosition(
			position: SpreadsheetApp.GroupControlTogglePosition
		): SpreadsheetApp.Sheet
		/**
		 * Sets the width of the given column in pixels.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Sets the first column to a width of 200 pixels
		 * sheet.setColumnWidth(1, 200);
		 * </code></pre>
		 * 
		 * @param columnPosition - The position of the given column to set.
		 * @param width - The width in pixels to set it to.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		setColumnWidth(
			columnPosition: number,
			width: number
		): SpreadsheetApp.Sheet
		/**
		 * Sets the width of the given columns in pixels.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Sets the first three columns to a width of 200 pixels
		 * sheet.setColumnWidths(1, 3, 200);
		 * </code></pre>
		 * 
		 * @param startColumn - The starting column position to change.
		 * @param numColumns - The number of columns to change.
		 * @param width - The width in pixels to set it to.
		 * 
		 * @returns This sheet, for chaining.
		 */
		setColumnWidths(
			startColumn: number,
			numColumns: number,
			width: number
		): SpreadsheetApp.Sheet
		/**
		 * Replaces all currently existing conditional format rules in the sheet with the input rules.
		 * Rules are evaluated in their input order.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Remove one of the existing conditional format rules.
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rules = sheet.getConditionalFormatRules();
		 * rules.splice(1, 1); // Deletes the 2nd format rule.
		 * sheet.setConditionalFormatRules(rules);
		 * </code></pre>
		 * 
		 * @param rules - The new conditional format rules.
		 */
		setConditionalFormatRules(
			rules: SpreadsheetApp.ConditionalFormatRule[]
		): void
		/**
		 * Sets the specified cell as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getCurrentCell()'>current cell</a></code>.
		 * 
		 * <p>If the specified cell is present in an already selected range, then that range becomes the
		 * active range with the cell as the current cell.
		 * 
		 * <p>If the specified cell is not present in any selected range, then any existing selection is
		 * removed and the cell becomes the current cell and the active range.
		 * 
		 * <p><b>Note:</b>The specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> must consist of one cell, otherwise it throws an
		 * exception.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
		 * var cell = sheet.getRange(&#39;B5&#39;);
		 * sheet.setCurrentCell(cell);
		 * 
		 * var selection = sheet.getSelection();
		 * // Current cell: B5
		 * var currentCell = selection.getCurrentCell();
		 * </code></pre>
		 * 
		 * @param cell - The cell to set as the current cell.
		 * 
		 * @returns the newly set current cell
		 */
		setCurrentCell(
			cell: SpreadsheetApp.Range
		): SpreadsheetApp.Range
		/**
		 * Freezes the given number of columns. If zero, no columns are frozen.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Freezes the first column
		 * sheet.setFrozenColumns(1);
		 * </code></pre>
		 * 
		 * @param columns - The number of columns to freeze.
		 */
		setFrozenColumns(
			columns: number
		): void
		/**
		 * Freezes the given number of rows. If zero, no rows are frozen.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Freezes the first row
		 * sheet.setFrozenRows(1);
		 * </code></pre>
		 * 
		 * @param rows - The number of rows to freeze.
		 */
		setFrozenRows(
			rows: number
		): void
		/**
		 * Hides or reveals the sheet gridlines.
		 * 
		 * @param hideGridlines - If <code>true</code>, hide gridlines in this sheet; otherwise show the
		 *     gridlines.
		 * 
		 * @returns This sheet, for chaining.
		 */
		setHiddenGridlines(
			hideGridlines: Boolean
		): SpreadsheetApp.Sheet
		/**
		 * Sets the sheet name.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This example assumes there is a sheet named &quot;first&quot;
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var first = ss.getSheetByName(&quot;first&quot;);
		 * first.setName(&quot;not first anymore&quot;);
		 * </code></pre>
		 * 
		 * @param name - The new name for the sheet.
		 * 
		 * @returns This sheet, for chaining.
		 */
		setName(
			name: string
		): SpreadsheetApp.Sheet
		/**
		 * Sets or unsets the sheet layout to right-to-left.
		 * 
		 * @param rightToLeft - If <code>true</code>, the sheet layout is set to right-to-left, with cell A1 at
		 *     the top right corner. If <code>false</code>, the sheet layout is set to the default
		 *     left-to-right, with cell A1 at the top left.
		 * 
		 * @returns This sheet, for chaining.
		 */
		setRightToLeft(
			rightToLeft: Boolean
		): SpreadsheetApp.Sheet
		/**
		 * Sets the position of the row group control toggle on the sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
		 * sheet.setRowGroupControlPosition(SpreadsheetApp.GroupControlTogglePosition.AFTER);
		 * </code></pre>
		 * 
		 * @param position - The position of the row group control toggle.
		 * 
		 * @returns This sheet, for chaining.
		 */
		setRowGroupControlPosition(
			position: SpreadsheetApp.GroupControlTogglePosition
		): SpreadsheetApp.Sheet
		/**
		 * Sets the row height of the given row in pixels.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Sets the first row to a height of 200 pixels
		 * sheet.setRowHeight(1, 200);
		 * </code></pre>
		 * 
		 * @param rowPosition - The row position to change.
		 * @param height - The height in pixels to set it to.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		setRowHeight(
			rowPosition: number,
			height: number
		): SpreadsheetApp.Sheet
		/**
		 * Sets the height of the given rows in pixels.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Sets the first three rows to a height of 20 pixels
		 * sheet.setRowHeights(1, 3, 20);
		 * </code></pre>
		 * 
		 * @param startRow - The starting row position to change.
		 * @param numRows - The number of rows to change.
		 * @param height - The height in pixels to set it to.
		 * 
		 * @returns This sheet, for chaining.
		 */
		setRowHeights(
			startRow: number,
			numRows: number,
			height: number
		): SpreadsheetApp.Sheet
		/**
		 * Sets the permissions for the current sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var permissions = sheet.getSheetProtection();
		 * 
		 * // This copies the permissions on the first sheet to the second sheet
		 * var sheetToClonePermissionsTo = ss.getSheets()[1];
		 * sheetToClonePermissionsTo.setSheetProtection(permissions);
		 * </code></pre>
		 * 
		 * @param permissions - The access permissions object to set on this sheet.
		 */
		setSheetProtection(
			permissions: SpreadsheetApp.PageProtection
		): void
		/**
		 * Sets the sheet tab color.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This example assumes there is a sheet named &quot;first&quot;
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var first = ss.getSheetByName(&quot;first&quot;);
		 * first.setTabColor(&quot;ff0000&quot;); // Set the color to red.
		 * first.setTabColor(null); // Unset the color.
		 * </code></pre>
		 * 
		 * @param color - A color code in CSS notation (like <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>), or
		 *     <code>null</code> to reset the tab color.
		 * 
		 * @returns This sheet, for chaining.
		 */
		setTabColor(
			color: string
		): SpreadsheetApp.Sheet
		/**
		 * Sets the sheet tab color.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This example assumes there is a sheet named &quot;Sheet1&quot;
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var first = ss.getSheetByName(&quot;Sheet1&quot;);
		 * var color = SpreadsheetApp.newColor()
		 *     .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1)
		 *     .build();
		 * first.setTabColorObject(color); // Set the color to theme accent 1.
		 * first.setTabColorObject(null); // Unset the color.
		 * </code></pre>
		 * 
		 * @param color - The sheet tab color to set.
		 * 
		 * @returns This sheet, for chaining.
		 */
		setTabColorObject(
			color: SpreadsheetApp.Color
		): SpreadsheetApp.Sheet
		/**
		 * Unhides the column at the given index.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Unhides the first column
		 * sheet.showColumns(1);
		 * </code></pre>
		 * 
		 * @param columnIndex - The index of the column to unhide.
		 */
		showColumns(
			columnIndex: number
		): void
		/**
		 * Unhides one or more consecutive columns starting at the given index.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Unhides the first three columns
		 * sheet.showColumns(1, 3);
		 * </code></pre>
		 * 
		 * @param columnIndex - The starting index of the columns to unhide.
		 * @param numColumns - The number of columns to unhide.
		 */
		showColumns(
			columnIndex: number,
			numColumns: number
		): void

		/**
		 * Unhides the row at the given index.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Unhides the first row
		 * sheet.showRows(1);
		 * </code></pre>
		 * 
		 * @param rowIndex - The index of the row to unhide.
		 */
		showRows(
			rowIndex: number
		): void
		/**
		 * Unhides one or more consecutive rows starting at the given index.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Unhides the first three rows
		 * sheet.showRows(1, 3);
		 * </code></pre>
		 * 
		 * @param rowIndex - The starting index of the rows to unhide.
		 * @param numRows - The number of rows to unhide.
		 */
		showRows(
			rowIndex: number,
			numRows: number
		): void

		/**
		 * Makes the sheet visible. Has no effect if the sheet is already visible.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * sheet.showSheet();
		 * </code></pre>
		 * 
		 * @returns The current sheet.
		 */
		showSheet(): SpreadsheetApp.Sheet
		/**
		 * Sorts a sheet by column, ascending.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Sorts the sheet by the first column, ascending
		 * sheet.sort(1);
		 * </code></pre>
		 * 
		 * @param columnPosition - The column to sort by.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		sort(
			columnPosition: number
		): SpreadsheetApp.Sheet
		/**
		 * Sorts a sheet by column. Takes a parameter to specify ascending or descending.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Sorts the sheet by the first column, descending
		 * sheet.sort(1, false);
		 * </code></pre>
		 * 
		 * @param columnPosition - The column to sort by.
		 * @param ascending - <code>true</code> for ascending sorts, <code>false</code> for descending.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		sort(
			columnPosition: number,
			ascending: Boolean
		): SpreadsheetApp.Sheet

		/**
		 * Unhides the column in the given range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This unhides the first column if it was previously hidden
		 * var range = sheet.getRange(&quot;A1&quot;);
		 * sheet.unhideColumn(range);
		 * </code></pre>
		 * 
		 * @param column - The range to unhide, if hidden.
		 */
		unhideColumn(
			column: SpreadsheetApp.Range
		): void
		/**
		 * Unhides the row in the given range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This unhides the first row if it was previously hidden
		 * var range = sheet.getRange(&quot;A1&quot;);
		 * sheet.unhideRow(range);
		 * </code></pre>
		 * 
		 * @param row - The range to unhide, if hidden.
		 */
		unhideRow(
			row: SpreadsheetApp.Range
		): void
		/**
		 * Updates the chart on this sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This code is going to loop through all the charts and change them to
		 * // column charts
		 * var charts = sheet.getCharts();
		 * for (var i in charts) {
		 *   var chart = charts[i];
		 *   var newChart = chart
		 *       .modify()
		 *       .setChartType(Charts.ChartType.COLUMN)
		 *       .build();
		 *   sheet.updateChart(newChart);
		 * }
		 * </code></pre>
		 * 
		 * @param chart - The chart to update.
		 */
		updateChart(
			chart: SpreadsheetApp.EmbeddedChart
		): void

	}

	enum SheetType {
		/**
		 * A sheet containing a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source.html'>DataSource</a></code>.
		 */
		DATASOURCE = "DATASOURCE",
		/**
		 * A sheet containing a grid. This is the default type.
		 */
		GRID = "GRID",
		/**
		 * A sheet containing a single embedded object such as an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart.html'>EmbeddedChart</a></code>.
		 */
		OBJECT = "OBJECT",
	}

	class Slicer {
		private constructor();

		/**
		 * Returns the background color of the slicer in CSS notation (such as '#ffffff').
		 * 
		 * @returns The background color of this slicer. Returns <code>null</code> if no color is set.
		 */
		getBackgroundColor(): string
		/**
		 * Return the background <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/color.html'>Color</a></code> of the slicer.
		 * 
		 * @returns The background color of this slicer. Returns <code>null</code> if no color is set.
		 */
		getBackgroundColorObject(): SpreadsheetApp.Color
		/**
		 * Returns the column position (relative to the data range of the slicer) on which the filter is
		 * applied in the slicer, or <code>null</code> if the column position is not set. This should be
		 * 1-indexed position of the column similar to filter.
		 * 
		 * @returns The column position of this slicer.
		 */
		getColumnPosition(): number
		/**
		 * Gets information about where the slicer is positioned in the sheet.
		 * 
		 * @returns An object containing the slicer's container position.
		 */
		getContainerInfo(): SpreadsheetApp.ContainerInfo
		/**
		 * Returns the filter criteria of the slicer, or <code>null</code> if the filter criteria is not set.
		 * 
		 * @returns The filter criteria of this slicer.
		 */
		getFilterCriteria(): SpreadsheetApp.FilterCriteria
		/**
		 * Gets the data range on which the slicer is applied to.
		 * 
		 * @returns The slicer range.
		 */
		getRange(): SpreadsheetApp.Range
		/**
		 * Returns the title of the slicer.
		 * 
		 * @returns This slicer, for chaining.
		 */
		getTitle(): string
		/**
		 * Gets the horizontal alignment of the title.
		 * 
		 * @returns The horizontal alignment of this slicer's title.
		 */
		getTitleHorizontalAlignment(): string
		/**
		 * Returns the text style of the slicer's title.
		 * 
		 * @returns The text style of this slicer's title.
		 */
		getTitleTextStyle(): SpreadsheetApp.TextStyle
		/**
		 * Returns whether the given slicer is applied to pivot tables.
		 * 
		 * @returns <code>true</code> if this slicer is applied to pivot tables, otherwise <code>false</code>.
		 */
		isAppliedToPivotTables(): Boolean
		/**
		 * Deletes the slicer.
		 */
		remove(): void
		/**
		 * Sets if the given slicer should be applied to pivot tables in the worksheet.
		 * 
		 * @param applyToPivotTables - Specifies whether this slicer should apply to pivot tables.
		 * 
		 * @returns This slicer, for chaining.
		 */
		setApplyToPivotTables(
			applyToPivotTables: Boolean
		): SpreadsheetApp.Slicer
		/**
		 * Sets the background color of the slicer. A <code>null</code> value resets the background color.
		 * 
		 * @param color - The new background color of this slicer in CSS notation (such as '#ffffff').
		 * 
		 * @returns This slicer, for chaining.
		 */
		setBackgroundColor(
			color: string
		): SpreadsheetApp.Slicer
		/**
		 * Sets the background <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/color.html'>Color</a></code> of the slicer. A <code>null</code> value resets the background
		 * color.
		 * 
		 * @param color - The new background color of this slicer.
		 * 
		 * @returns This slicer, for chaining.
		 */
		setBackgroundColorObject(
			color: SpreadsheetApp.Color
		): SpreadsheetApp.Slicer
		/**
		 * Sets the column index and filtering criteria of the slicer. A <code>null</code> value resets the
		 * slicer filter.
		 * 
		 * @param columnPosition - The new column position of this slicer.
		 * @param filterCriteria - The new filter criteria of this slicer.
		 * 
		 * @returns This slicer, for chaining.
		 */
		setColumnFilterCriteria(
			columnPosition: number,
			filterCriteria: SpreadsheetApp.FilterCriteria
		): SpreadsheetApp.Slicer
		/**
		 * Sets the position where the slicer appears on the sheet. The anchor row and column position
		 * indices are 1-indexed.
		 * 
		 * @param anchorRowPos - The slicer's top side is anchored in this row.
		 * @param anchorColPos - The slicer's top side is anchored in this col.
		 * @param offsetX - The horizontal offset from cell corner in pixels.
		 * @param offsetY - The vertical offset from cell corner in pixels.
		 * 
		 * @returns This slicer, for chaining.
		 */
		setPosition(
			anchorRowPos: number,
			anchorColPos: number,
			offsetX: number,
			offsetY: number
		): SpreadsheetApp.Slicer
		/**
		 * Sets the data range on which the slicer is applied.
		 * 
		 * @param rangeApi - The new range for this slicer.
		 * 
		 * @returns This slicer, for chaining.
		 */
		setRange(
			rangeApi: SpreadsheetApp.Range
		): SpreadsheetApp.Slicer
		/**
		 * Sets the title of the slicer. An empty title resets the title to default value.
		 * 
		 * @param title - The new title of this slicer.
		 * 
		 * @returns This slicer, for chaining.
		 */
		setTitle(
			title: string
		): SpreadsheetApp.Slicer
		/**
		 * Sets the horizontal alignment of the title in the slicer. A <code>null</code> value resets the
		 * alignment.
		 * 
		 * @param horizontalAlignment - The new horizontal alignment of this slicer's title.
		 * 
		 * @returns This slicer, for chaining.
		 */
		setTitleHorizontalAlignment(
			horizontalAlignment: string
		): SpreadsheetApp.Slicer
		/**
		 * Sets the text style of the slicer.
		 * 
		 * @param textStyle - The new text style of the slicer's title.
		 * 
		 * @returns This slicer, for chaining.
		 */
		setTitleTextStyle(
			textStyle: SpreadsheetApp.TextStyle
		): SpreadsheetApp.Slicer

	}

	enum SortOrder {
		/**
		 * Ascending sort order.
		 */
		ASCENDING = "ASCENDING",
		/**
		 * Descending sort order.
		 */
		DESCENDING = "DESCENDING",
	}

	class SortSpec {
		private constructor();

		/**
		 * Returns the background color used for sorting, or <code>null</code> if absent.
		 * 
		 * @returns The background color.
		 */
		getBackgroundColor(): SpreadsheetApp.Color
		/**
		 * Gets the data source column the sort spec acts on. Returns <code>null</code> if this sort spec is
		 * not acting on a data source column.
		 * 
		 * @returns The data source column the sort spec acts on.
		 */
		getDataSourceColumn(): SpreadsheetApp.DataSourceColumn
		/**
		 * Returns the dimension index or <code>null</code> if not linked to a local filter.
		 * 
		 * @returns The dimension index.
		 */
		getDimensionIndex(): number
		/**
		 * Returns the foreground color used for sorting, or <code>null</code> if absent.
		 * 
		 * @returns The foreground color.
		 */
		getForegroundColor(): SpreadsheetApp.Color
		/**
		 * Returns the sort order.
		 * 
		 * @returns The sort order.
		 */
		getSortOrder(): SpreadsheetApp.SortOrder
		/**
		 * Returns whether the sort order is ascending.
		 * 
		 * @returns <code>true</code> if the sort order is ascending, or <code>false</code> otherwise.
		 */
		isAscending(): Boolean

	}

	class Spreadsheet {
		private constructor();

		/**
		 * Adds developer metadata with the specified key to the top-level spreadsheet.
		 * 
		 * @param key - The key for the new developer metadata.
		 * 
		 * @returns This spreadsheet, for chaining.
		 */
		addDeveloperMetadata(
			key: string
		): SpreadsheetApp.Spreadsheet
		/**
		 * Adds developer metadata with the specified key and visibility to the spreadsheet.
		 * 
		 * @param key - The key for the new developer metadata.
		 * @param visibility - The visibility of the new developer metadata.
		 * 
		 * @returns This spreadsheet, for chaining.
		 */
		addDeveloperMetadata(
			key: string,
			visibility: SpreadsheetApp.DeveloperMetadataVisibility
		): SpreadsheetApp.Spreadsheet
		/**
		 * Adds developer metadata with the specified key and value to the spreadsheet.
		 * 
		 * @param key - The key for the new developer metadata.
		 * @param value - The value for the new developer metadata.
		 * 
		 * @returns This spreadsheet, for chaining.
		 */
		addDeveloperMetadata(
			key: string,
			value: string
		): SpreadsheetApp.Spreadsheet
		/**
		 * Adds developer metadata with the specified key, value, and visibility to the spreadsheet.
		 * 
		 * @param key - The key for the new developer metadata.
		 * @param value - The value for the new developer metadata.
		 * @param visibility - The visibility of the new developer metadata.
		 * 
		 * @returns This spreadsheet, for chaining.
		 */
		addDeveloperMetadata(
			key: string,
			value: string,
			visibility: SpreadsheetApp.DeveloperMetadataVisibility
		): SpreadsheetApp.Spreadsheet

		/**
		 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If the user was already
		 * on the list of viewers, this method promotes the user out of the list of viewers.
		 * 
		 * @param emailAddress - The email address of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining.
		 */
		addEditor(
			emailAddress: string
		): SpreadsheetApp.Spreadsheet
		/**
		 * Adds the given user to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If the user was already
		 * on the list of viewers, this method promotes the user out of the list of viewers.
		 * 
		 * @param user - A representation of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining.
		 */
		addEditor(
			user: User
		): SpreadsheetApp.Spreadsheet

		/**
		 * Adds the given array of users to the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If any of the
		 * users were already on the list of viewers, this method promotes them out of the list of
		 * viewers.
		 * 
		 * @param emailAddresses - An array of email addresses of the users to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining.
		 */
		addEditors(
			emailAddresses: string[]
		): SpreadsheetApp.Spreadsheet
		/**
		 * Creates a new menu in the Spreadsheet UI.
		 * 
		 * <p>Each menu entry runs a user-defined function. Usually, you want to call it from the <code>onOpen()</code> function so that the menu is automatically created when the spreadsheet is loaded.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The onOpen function is executed automatically every time a Spreadsheet is loaded
		 * function onOpen() {
		 *   var ss = SpreadsheetApp.getActiveSpreadsheet();
		 *   var menuEntries = [];
		 *   // When the user clicks on &quot;addMenuExample&quot; then &quot;Menu Entry 1&quot;, the function function1 is
		 *   // executed.
		 *   menuEntries.push({name: &quot;Menu Entry 1&quot;, functionName: &quot;function1&quot;});
		 *   menuEntries.push(null); // line separator
		 *   menuEntries.push({name: &quot;Menu Entry 2&quot;, functionName: &quot;function2&quot;});
		 * 
		 *   ss.addMenu(&quot;addMenuExample&quot;, menuEntries);
		 * }
		 * </code></pre>
		 * 
		 * @param name - The name of the menu to be created.
		 * @param subMenus - An array of JavaScript maps with <code>name</code> and <code>functionName
		 *     </code> parameters. You can use functions from included libraries, such as <code>
		 *     Library.libFunction1</code>.
		 */
		addMenu(
			name: string,
			subMenus: object[]
		): void
		/**
		 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If the user was already
		 * on the list of editors, this method has no effect.
		 * 
		 * @param emailAddress - The email address of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining.
		 */
		addViewer(
			emailAddress: string
		): SpreadsheetApp.Spreadsheet
		/**
		 * Adds the given user to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If the user was already
		 * on the list of editors, this method has no effect.
		 * 
		 * @param user - A representation of the user to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining.
		 */
		addViewer(
			user: User
		): SpreadsheetApp.Spreadsheet

		/**
		 * Adds the given array of users to the list of viewers for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. If any of the
		 * users were already on the list of editors, this method has no effect for them.
		 * 
		 * @param emailAddresses - An array of email addresses of the users to add.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining.
		 */
		addViewers(
			emailAddresses: string[]
		): SpreadsheetApp.Spreadsheet
		/**
		 * Appends a row to the spreadsheet. This operation is atomic; it prevents issues where a user
		 * asks for the last row, and then writes to that row, and an intervening mutation occurs between
		 * getting the last row and writing to it.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Appends a new row with 3 columns to the bottom of the
		 * // spreadsheet containing the values in the array
		 * sheet.appendRow([&quot;a man&quot;, &quot;a plan&quot;, &quot;panama&quot;]);
		 * </code></pre>
		 * 
		 * @param rowContents - An array of values to insert after the last row in the sheet.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		appendRow(
			rowContents: object[]
		): SpreadsheetApp.Sheet
		/**
		 * Sets the width of the given column to fit its contents.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * sheet.getRange(&#39;a1&#39;).setValue(&#39;Whenever it is a damp, drizzly November in my soul...&#39;);
		 * 
		 * // Sets the first column to a width which fits the text
		 * sheet.autoResizeColumn(1);
		 * </code></pre>
		 * 
		 * @param columnPosition - The position of the given column to resize.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		autoResizeColumn(
			columnPosition: number
		): SpreadsheetApp.Sheet
		/**
		 * Copies the spreadsheet and returns the new one.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This code makes a copy of the current spreadsheet and names it appropriately
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * ss.copy(&quot;Copy of &quot; + ss.getName());
		 * </code></pre>
		 * 
		 * @param name
		 * 
		 * @returns This spreadsheet, for chaining.
		 */
		copy(
			name: string
		): SpreadsheetApp.Spreadsheet
		/**
		 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-finder.html'>DeveloperMetadataFinder</a></code> for finding developer metadata within the scope of
		 * this spreadsheet. By default this considers all metadata associated with the spreadsheet,
		 * sheets, rows, and columns.
		 * 
		 * @returns A developer metadata finder to search for metadata in the scope of this spreadsheet.
		 */
		createDeveloperMetadataFinder(): SpreadsheetApp.DeveloperMetadataFinder
		/**
		 * Creates a text finder for the spreadsheet, which can be used to find and replace text within
		 * the spreadsheet. The search starts from the first sheet of the spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
		 * 
		 * // Creates  a text finder.
		 * var textFinder = spreadsheet.createTextFinder(&#39;dog&#39;);
		 * 
		 * // Returns the first occurrence of &#39;dog&#39; in the spreadsheet.
		 * var firstOccurrence = textFinder.findNext();
		 * 
		 * // Replaces the last found occurrence of &#39;dog&#39; with &#39;cat&#39; and returns the number
		 * // of occurrences replaced.
		 * var numOccurrencesReplaced = findOccurrence.replaceWith(&#39;cat&#39;);
		 * </code></pre>
		 * 
		 * @param findText - The text to search for.
		 * 
		 * @returns The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/text-finder.html'>TextFinder</a></code> for the spreadsheet.
		 */
		createTextFinder(
			findText: string
		): SpreadsheetApp.TextFinder
		/**
		 * Deletes the currently active sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below deletes the currently active sheet and stores the new active sheet in a
		 * // variable
		 * var newSheet = SpreadsheetApp.getActiveSpreadsheet().deleteActiveSheet();
		 * </code></pre>
		 * 
		 * @returns The new active sheet.
		 */
		deleteActiveSheet(): SpreadsheetApp.Sheet
		/**
		 * Deletes the column at the given column position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Columns start at &quot;1&quot; - this deletes the first column
		 * sheet.deleteColumn(1);
		 * </code></pre>
		 * 
		 * @param columnPosition - The position of the column, starting at 1 for the first column.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		deleteColumn(
			columnPosition: number
		): SpreadsheetApp.Sheet
		/**
		 * Deletes a number of columns starting at the given column position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Columns start at &quot;1&quot; - this deletes the first two columns
		 * sheet.deleteColumns(1, 2);
		 * </code></pre>
		 * 
		 * @param columnPosition - The position of the first column to delete.
		 * @param howMany - The number of columns to delete.
		 */
		deleteColumns(
			columnPosition: number,
			howMany: number
		): void
		/**
		 * Deletes the row at the given row position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Rows start at &quot;1&quot; - this deletes the first row
		 * sheet.deleteRow(1);
		 * </code></pre>
		 * 
		 * @param rowPosition - The position of the row, starting at 1 for the first row.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		deleteRow(
			rowPosition: number
		): SpreadsheetApp.Sheet
		/**
		 * Deletes a number of rows starting at the given row position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Rows start at &quot;1&quot; - this deletes the first two rows
		 * sheet.deleteRows(1, 2);
		 * </code></pre>
		 * 
		 * @param rowPosition - The position of the first row to delete.
		 * @param howMany - The number of rows to delete.
		 */
		deleteRows(
			rowPosition: number,
			howMany: number
		): void
		/**
		 * Deletes the specified sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below deletes the specified sheet.
		 * var ss = SpreadsheetApp.getActive();
		 * var sheet = ss.getSheetByName(&#39;My Sheet&#39;);
		 * ss.deleteSheet(sheet);
		 * </code></pre>
		 * 
		 * @param sheet - The sheet to delete.
		 */
		deleteSheet(
			sheet: SpreadsheetApp.Sheet
		): void
		/**
		 * Duplicates the active sheet and makes it the active sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below makes a duplicate of the active sheet
		 * SpreadsheetApp.getActiveSpreadsheet().duplicateActiveSheet();
		 * </code></pre>
		 * 
		 * @returns The new sheet.
		 */
		duplicateActiveSheet(): SpreadsheetApp.Sheet
		/**
		 * Returns the active cell in this sheet.
		 * 
		 * <p><b>Note:</b> It's preferrable to use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getCurrentCell()'>getCurrentCell()</a></code>, which the returns the current
		 * highlighted cell.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * // Returns the active cell
		 * var cell = sheet.getActiveCell();
		 * </code></pre>
		 * 
		 * @returns the current active cell
		 */
		getActiveCell(): SpreadsheetApp.Range
		/**
		 * Returns the selected range in the active sheet, or <code>null</code> if there is no active range. If
		 * multiple ranges are selected this method returns only the last selected range.
		 * 
		 * <p>The term "active range" refers to the range that a user has selected in the active sheet,
		 * but in a custom function it refers to the cell being actively recalculated.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
		 * var activeRange = sheet.getActiveRange();
		 * </code></pre>
		 * 
		 * @returns the active range
		 */
		getActiveRange(): SpreadsheetApp.Range
		/**
		 * Returns the list of active ranges in the active sheet or <code>null</code> if there are no active
		 * ranges.
		 * 
		 * <p>If there is a single range selected, this behaves as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getActiveRange()'>getActiveRange()</a></code> call.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * // Returns the list of active ranges.
		 * var activeRangeList = sheet.getActiveRangeList();
		 * </code></pre>
		 * 
		 * @returns the list of active ranges
		 */
		getActiveRangeList(): SpreadsheetApp.RangeList
		/**
		 * Gets the active sheet in a spreadsheet.
		 * 
		 * <p>The active sheet in a spreadsheet is the sheet that is being displayed in the spreadsheet
		 * UI.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
		 * </code></pre>
		 * 
		 * @returns The active sheet in the spreadsheet.
		 */
		getActiveSheet(): SpreadsheetApp.Sheet
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
		 * Returns all the bandings in this spreadsheet.
		 * 
		 * @returns The bandings in this spreadsheet.
		 */
		getBandings(): SpreadsheetApp.Banding[]
		/**
		 * Return the data inside this object as a blob.
		 * 
		 * @returns The data as a blob.
		 */
		getBlob(): Blob
		/**
		 * Gets the width in pixels of the given column.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Columns start at 1
		 * Logger.log(sheet.getColumnWidth(1));
		 * </code></pre>
		 * 
		 * @param columnPosition - The position of the column to examine.
		 * 
		 * @returns column width in pixels
		 */
		getColumnWidth(
			columnPosition: number
		): number
		/**
		 * Returns the current cell in the active sheet or <code>null</code> if there is no current cell. The
		 * current cell is the cell that has focus in the Google Sheets UI, and is highlighted by a dark
		 * border. There is never more than one current cell. When a user selects one or more cell ranges,
		 * one of the cells in the selection is the current cell.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
		 * // Returns the current highlighted cell in the one of the active ranges.
		 * var currentCell = sheet.getCurrentCell();
		 * </code></pre>
		 * 
		 * @returns the current cell
		 */
		getCurrentCell(): SpreadsheetApp.Range
		/**
		 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> corresponding to the dimensions in which data is present.
		 * 
		 * <p>This is functionally equivalent to creating a Range bounded by A1 and
		 * (Range.getLastColumn(), Range.getLastRow()).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This represents ALL the data
		 * var range = sheet.getDataRange();
		 * var values = range.getValues();
		 * 
		 * // This logs the spreadsheet in CSV format with a trailing comma
		 * for (var i = 0; i &lt; values.length; i++) {
		 *   var row = &quot;&quot;;
		 *   for (var j = 0; j &lt; values[i].length; j++) {
		 *     if (values[i][j]) {
		 *       row = row + values[i][j];
		 *     }
		 *     row = row + &quot;,&quot;;
		 *   }
		 *   Logger.log(row);
		 * }
		 * </code></pre>
		 * 
		 * @returns a range consisting of all the data in the spreadsheet
		 */
		getDataRange(): SpreadsheetApp.Range
		/**
		 * Gets all the data source formulas.
		 * 
		 * @returns A list of data source formulas.
		 */
		getDataSourceFormulas(): SpreadsheetApp.DataSourceFormula[]
		/**
		 * Gets all the data source pivot tables.
		 * 
		 * @returns A list of data source pivot tables.
		 */
		getDataSourcePivotTables(): SpreadsheetApp.DataSourcePivotTable[]
		/**
		 * Gets the refresh schedules of this spreadsheet.
		 * 
		 * @returns The refresh schedules of this spreadsheet.
		 */
		getDataSourceRefreshSchedules(): SpreadsheetApp.DataSourceRefreshSchedule[]
		/**
		 * Returns all the data source sheets in the spreadsheet.
		 * 
		 * @returns An array of all the data source sheets.
		 */
		getDataSourceSheets(): SpreadsheetApp.DataSourceSheet[]
		/**
		 * Gets all the data source tables.
		 * 
		 * @returns A list of data source tables.
		 */
		getDataSourceTables(): SpreadsheetApp.DataSourceTable[]
		/**
		 * Returns all the data sources in the spreadsheet.
		 * 
		 * @returns An array of all the data sources.
		 */
		getDataSources(): SpreadsheetApp.DataSource[]
		/**
		 * Get the developer metadata associated with the top-level spreadsheet.
		 * 
		 * @returns The developer metadata associated with this range.
		 */
		getDeveloperMetadata(): SpreadsheetApp.DeveloperMetadata[]
		/**
		 * Gets the list of editors for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>.
		 * 
		 * @returns An array of users with edit permission.
		 */
		getEditors(): User[]
		/**
		 * Returns the URL for the form that sends its responses to this spreadsheet, or <code>null</code> if
		 * this spreadsheet has no associated form. If multiple forms send responses to this spreadsheet,
		 * the form URL returned is indeterminate. As an alternative, per sheet form URL associations can
		 * be retrieved through the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getFormUrl()'>Sheet.getFormUrl()</a></code> method.
		 * 
		 * @returns The URL for the form that places its responses in this spreadsheet, or <code>null</code> if
		 *     this spreadsheet doesn't have an associated form.
		 */
		getFormUrl(): string
		/**
		 * Returns the number of frozen columns.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * Logger.log(&quot;Number of frozen columns: %s&quot;, sheet.getFrozenColumns());
		 * </code></pre>
		 * 
		 * @returns the number of frozen columns
		 */
		getFrozenColumns(): number
		/**
		 * Returns the number of frozen rows.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * Logger.log(&quot;Number of frozen rows: %s&quot;, sheet.getFrozenRows());
		 * </code></pre>
		 * 
		 * @returns the number of frozen rows
		 */
		getFrozenRows(): number
		/**
		 * Gets a unique identifier for this spreadsheet. A spreadsheet ID can be extracted from its URL.
		 * For example, the spreadsheet ID in the URL
		 * https://docs.google.com/spreadsheets/d/abc1234567/edit#gid=0 is "abc1234567".
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the ID for the active spreadsheet.
		 * Logger.log(SpreadsheetApp.getActiveSpreadsheet().getId());
		 * </code></pre>
		 * 
		 * @returns The unique ID (or key) for the spreadsheet.
		 */
		getId(): string
		/**
		 * Returns all over-the-grid images on the sheet.
		 * 
		 * @returns An array of over-the-grid images.
		 */
		getImages(): SpreadsheetApp.OverGridImage[]
		/**
		 * Returns the threshold value used during iterative calculation. When the results of successive
		 * calculation differ by less than this value, the iterative calculation stops.
		 * 
		 * @returns The convergence threshold.
		 */
		getIterativeCalculationConvergenceThreshold(): Number
		/**
		 * Returns the position of the last column that has content.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This logs the value in the very last cell of this sheet
		 * var lastRow = sheet.getLastRow();
		 * var lastColumn = sheet.getLastColumn();
		 * var lastCell = sheet.getRange(lastRow, lastColumn);
		 * Logger.log(lastCell.getValue());
		 * </code></pre>
		 * 
		 * @returns the last column of the sheet that contains content
		 */
		getLastColumn(): number
		/**
		 * Returns the position of the last row that has content.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This logs the value in the very last cell of this sheet
		 * var lastRow = sheet.getLastRow();
		 * var lastColumn = sheet.getLastColumn();
		 * var lastCell = sheet.getRange(lastRow, lastColumn);
		 * Logger.log(lastCell.getValue());
		 * </code></pre>
		 * 
		 * @returns the last row of the sheet that contains content
		 */
		getLastRow(): number
		/**
		 * Returns the maximum number of iterations to use during iterative calculation.
		 * 
		 * @returns The maximum number of calculation iterations.
		 */
		getMaxIterativeCalculationCycles(): number
		/**
		 * Gets the name of the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * Logger.log(ss.getName());
		 * </code></pre>
		 * 
		 * @returns The name of the spreadsheet.
		 */
		getName(): string
		/**
		 * Gets all the named ranges in this spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the name of the first named range.
		 * var namedRanges = SpreadsheetApp.getActiveSpreadsheet().getNamedRanges();
		 * if (namedRanges.length &gt; 1) {
		 *   Logger.log(namedRanges[0].getName());
		 * }
		 * </code></pre>
		 * 
		 * @returns An array of all the named ranges in the spreadsheet.
		 */
		getNamedRanges(): SpreadsheetApp.NamedRange[]
		/**
		 * Returns the number of sheets in this spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the number of sheets in the active spreadsheet.
		 * Logger.log(SpreadsheetApp.getActiveSpreadsheet().getNumSheets());
		 * </code></pre>
		 * 
		 * @returns The number of sheets in the spreadsheet.
		 */
		getNumSheets(): number
		/**
		 * Returns the owner of the document, or <code>null</code> for a document in a shared drive.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var owner = ss.getOwner();
		 * Logger.log(owner.getEmail());
		 * </code></pre>
		 * 
		 * @returns The owner of the document, or <code>null</code> if the document is in a shared drive.
		 */
		getOwner(): User
		/**
		 * Returns the list of predefined themes.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below returns the list of predefined themes.
		 * var predefinedThemesList = SpreadsheetApp.getPredefinedSpreadsheetThemes();
		 * </code></pre>
		 * 
		 * @returns List of predefined themes.
		 */
		getPredefinedSpreadsheetThemes(): SpreadsheetApp.SpreadsheetTheme[]
		/**
		 * Gets an array of objects representing all protected ranges or sheets in the spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Remove all range protections in the spreadsheet that the user has permission to edit.
		 * var ss = SpreadsheetApp.getActive();
		 * var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
		 * for (var i = 0; i &lt; protections.length; i++) {
		 *   var protection = protections[i];
		 *   if (protection.canEdit()) {
		 *     protection.remove();
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * <pre class="prettyprint"><code>
		 * // Remove all sheet protections in the spreadsheet that the user has permission to edit.
		 * var ss = SpreadsheetApp.getActive();
		 * var protections = ss.getProtections(SpreadsheetApp.ProtectionType.SHEET);
		 * for (var i = 0; i &lt; protections.length; i++) {
		 *   var protection = protections[i];
		 *   if (protection.canEdit()) {
		 *     protection.remove();
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @param type - The type of protected area, either <code>SpreadsheetApp.ProtectionType.RANGE</code> or
		 *     <code>SpreadsheetApp.ProtectionType.SHEET</code>.
		 * 
		 * @returns An array of objects representing all protected ranges or sheets in the spreadsheet.
		 */
		getProtections(
			type: SpreadsheetApp.ProtectionType
		): SpreadsheetApp.Protection[]
		/**
		 * Returns the range as specified in A1 notation or R1C1 notation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get a range A1:D4 on sheet titled &quot;Invoices&quot;
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var range = ss.getRange(&quot;Invoices!A1:D4&quot;);
		 * 
		 * // Get cell A1 on the first sheet
		 * var sheet = ss.getSheets()[0];
		 * var cell = sheet.getRange(&quot;A1&quot;);
		 * </code></pre>
		 * 
		 * @param a1Notation - The range to return, as specified in A1 notation or R1C1 notation.
		 * 
		 * @returns the range at the location designated
		 */
		getRange(
			a1Notation: string
		): SpreadsheetApp.Range
		/**
		 * Returns a named range, or <code>null</code> if no range with the given name is found. If multiple
		 * sheets of the spreadsheet use the same range name, specify the sheet name without additional
		 * quotation marks — for example, <code>getRangeByName(&#39;TaxRates&#39;)</code> or <code>getRangeByName(&#39;Sheet Name!TaxRates&#39;)</code>, but not <code>getRangeByName(&#39;&quot;Sheet
		 * Name&quot;!TaxRates&#39;)</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the number of columns for the range named &#39;TaxRates&#39; in the active spreadsheet.
		 * var range = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(&#39;TaxRates&#39;);
		 * if (range != null) {
		 *   Logger.log(range.getNumColumns());
		 * }
		 * </code></pre>
		 * 
		 * @param name - The name of the range to get.
		 * 
		 * @returns The range of cells with the given name.
		 */
		getRangeByName(
			name: string
		): SpreadsheetApp.Range
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range-list.html'>RangeList</a></code> collection representing the ranges in the same sheet specified
		 * by a non-empty list of A1 notations or R1C1 notations.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Get a list of ranges A1:D4, F1:H4.
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
		 * var rangeList  = sheet.getRangeList([&#39;A1:D4&#39;, &#39;F1:H4&#39;]);
		 * </code></pre>
		 * 
		 * @param a1Notations - The list of ranges to return, as specified in A1 notation or R1C1 notation.
		 * 
		 * @returns the range list at the location designated
		 */
		getRangeList(
			a1Notations: string[]
		): SpreadsheetApp.RangeList
		/**
		 * Returns the calculation interval for this spreadsheet.
		 * 
		 * @returns The calculation interval for this spreadsheet.
		 */
		getRecalculationInterval(): SpreadsheetApp.RecalculationInterval
		/**
		 * Gets the height in pixels of the given row.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Rows start at 1
		 * Logger.log(sheet.getRowHeight(1));
		 * </code></pre>
		 * 
		 * @param rowPosition - The position of the row to examine.
		 * 
		 * @returns row height in pixels
		 */
		getRowHeight(
			rowPosition: number
		): number
		/**
		 * Returns the current <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/selection.html'>Selection</a></code> in the spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
		 * var currentCell = selection.getCurrentCell();
		 * </code></pre>
		 * 
		 * @returns the current selection
		 */
		getSelection(): SpreadsheetApp.Selection
		/**
		 * Returns a sheet with the given name.
		 * 
		 * <p>If multiple sheets have the same name, the leftmost one is returned. Returns <code>null</code> if
		 * there is no sheet with the given name.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the index of a sheet named &quot;Expenses&quot;
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(&quot;Expenses&quot;);
		 * if (sheet != null) {
		 *   Logger.log(sheet.getIndex());
		 * }
		 * </code></pre>
		 * 
		 * @param name - The name of the sheet to get.
		 * 
		 * @returns The sheet with the given name.
		 */
		getSheetByName(
			name: string
		): SpreadsheetApp.Sheet
		/**
		 * Returns the ID of the sheet represented by this object.
		 * 
		 * <p>This is an ID for the sheet that is unique to the spreadsheet. The ID is a monotonically
		 * increasing integer assigned at sheet creation time that is independent of sheet position. This
		 * is useful in conjunction with methods such as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html#copyFormatToRange(Integer,Integer,Integer,Integer,Integer)'>Range.copyFormatToRange(gridId, column, columnEnd, row, rowEnd)</a></code> that take a <code>gridId</code> parameter rather than a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet.html'>Sheet</a></code> instance.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * Logger.log(sheet.getSheetId());
		 * </code></pre>
		 * 
		 * @returns an ID for the sheet unique to the spreadsheet
		 */
		getSheetId(): number
		/**
		 * Returns the sheet name.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * Logger.log(sheet.getSheetName());
		 * </code></pre>
		 * 
		 * @returns the name of the sheet
		 */
		getSheetName(): string
		/**
		 * Returns a <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/page-protection.html'>PageProtection</a></s></code> instance describing the permissions for the current sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var permissions = sheet.getSheetProtection();
		 * 
		 * permissions.setProtected(true);
		 * permissions.addUser(&quot;user@example.com&quot;);
		 * 
		 * // Logs the users that have access to edit this sheet. Note that this
		 * // is different from access to the entire spreadsheet - getUsers()
		 * // only returns users if permissions.isProtected() is set to true.
		 * var users = permissions.getUsers();
		 * Logger.log(users);
		 * </code></pre>
		 * 
		 * @returns an object describing sheet access permissions
		 */
		getSheetProtection(): SpreadsheetApp.PageProtection
		/**
		 * Returns the rectangular grid of values for this range starting at the given coordinates. A -1
		 * value given as the row or column position is equivalent to getting the very last row or column
		 * that has data in the sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // The two samples below produce the same output
		 * var values = sheet.getSheetValues(1, 1, 3, 3);
		 * Logger.log(values);
		 * 
		 * var range = sheet.getRange(1, 1, 3, 3);
		 * values = range.getValues();
		 * Logger.log(values);
		 * </code></pre>
		 * 
		 * @param startRow - The position of the starting row.
		 * @param startColumn - The position of the starting column.
		 * @param numRows - The number of rows to return values for.
		 * @param numColumns - The number of columns to return values for.
		 * 
		 * @returns a two-dimensional array of values
		 */
		getSheetValues(
			startRow: number,
			startColumn: number,
			numRows: number,
			numColumns: number
		): object[][]
		/**
		 * Gets all the sheets in this spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the name of the second sheet
		 * var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
		 * if (sheets.length &gt; 1) {
		 *   Logger.log(sheets[1].getName());
		 * }
		 * </code></pre>
		 * 
		 * @returns An array of all the sheets in the spreadsheet.
		 */
		getSheets(): SpreadsheetApp.Sheet[]
		/**
		 * Gets the spreadsheet locale.
		 * 
		 * @returns The spreadsheet locale.
		 */
		getSpreadsheetLocale(): string
		/**
		 * Returns the current theme of the spreadsheet, or <code>null</code> if no theme is applied.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below returns the current theme of the spreadsheet.
		 * var currentTheme = SpreadsheetApp.getSpreadsheetTheme();
		 * </code></pre>
		 * 
		 * @returns The current applied theme.
		 */
		getSpreadsheetTheme(): SpreadsheetApp.SpreadsheetTheme
		/**
		 * Gets the time zone for the spreadsheet.
		 * 
		 * @returns The time zone, specified in "long" format (for example, "America/New_York", as listed
		 *     by <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>).
		 */
		getSpreadsheetTimeZone(): string
		/**
		 * Returns the URL for the given spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * Logger.log(ss.getUrl());
		 * </code></pre>
		 * 
		 * @returns The URL for the given spreadsheet.
		 */
		getUrl(): string
		/**
		 * Gets the list of viewers and commenters for this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>.
		 * 
		 * @returns An array of users with view or comment permission.
		 */
		getViewers(): User[]
		/**
		 * Hides the columns in the given range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This hides the first column
		 * var range = sheet.getRange(&quot;A1&quot;);
		 * sheet.hideColumn(range);
		 * </code></pre>
		 * 
		 * @param column - The column range to hide.
		 */
		hideColumn(
			column: SpreadsheetApp.Range
		): void
		/**
		 * Hides the rows in the given range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This hides the first row
		 * var range = sheet.getRange(&quot;A1&quot;);
		 * sheet.hideRow(range);
		 * </code></pre>
		 * 
		 * @param row - The row range to hide.
		 */
		hideRow(
			row: SpreadsheetApp.Range
		): void
		/**
		 * Inserts a column after the given column position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This inserts a column after the first column position
		 * sheet.insertColumnAfter(1);
		 * </code></pre>
		 * 
		 * @param afterPosition - The column after which the new column should be added.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		insertColumnAfter(
			afterPosition: number
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a column before the given column position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This inserts a column in the first column position
		 * sheet.insertColumnBefore(1);
		 * </code></pre>
		 * 
		 * @param beforePosition - The column before which the new column should be added.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		insertColumnBefore(
			beforePosition: number
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a number of columns after the given column position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This inserts a column in the second column position
		 * sheet.insertColumnsAfter(1);
		 * </code></pre>
		 * 
		 * @param afterPosition - The column after which the new column should be added.
		 * @param howMany - The number of columns to insert.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		insertColumnsAfter(
			afterPosition: number,
			howMany: number
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a number of columns before the given column position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This inserts five columns before the first column
		 * sheet.insertColumnsBefore(1, 5);
		 * </code></pre>
		 * 
		 * @param beforePosition - The column before which the new column should be added.
		 * @param howMany - The number of columns to insert.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		insertColumnsBefore(
			beforePosition: number,
			howMany: number
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet.html'>DataSourceSheet</a></code> in the spreadsheet and starts data execution. As a
		 * side effect, this also makes the new sheet the active sheet.
		 * 
		 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for specific data source
		 * type.
		 * 
		 * @param spec - The data source specification to insert with.
		 * 
		 * @returns The new data source sheet.
		 */
		insertDataSourceSheet(
			spec: SpreadsheetApp.DataSourceSpec
		): SpreadsheetApp.DataSourceSheet
		/**
		 * Inserts a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> as an image in the document at a given row and column. The image
		 * size is retrieved from the blob contents.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var blob = Utilities.newBlob(binaryData, &#39;image/png&#39;, &#39;MyImageName&#39;);
		 * sheet.insertImage(blob, 1, 1);
		 * </code></pre>
		 * 
		 * @param blobSource - The blob containing the image contents, MIME type, and (optionally) name.
		 * @param column - The column position.
		 * @param row - The row position.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			blobSource: BlobSource,
			column: number,
			row: number
		): SpreadsheetApp.OverGridImage
		/**
		 * Inserts a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> as an image in the document at a given row and column, with a
		 * pixel offset. The image size is retrieved from the blob contents.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var blob = Utilities.newBlob(binaryData, &#39;image/png&#39;, &#39;MyImageName&#39;);
		 * sheet.insertImage(blob, 1, 1, 10, 10);
		 * </code></pre>
		 * 
		 * @param blobSource - The blob containing the image contents, MIME type, and (optionally) name.
		 * @param column - The column position.
		 * @param row - The row position.
		 * @param offsetX - The horizontal offset from cell corner in pixels.
		 * @param offsetY - The vertical offset from cell corner in pixels.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			blobSource: BlobSource,
			column: number,
			row: number,
			offsetX: number,
			offsetY: number
		): SpreadsheetApp.OverGridImage
		/**
		 * Inserts an image in the document at a given row and column.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * sheet.insertImage(&quot;https://www.google.com/images/srpr/logo3w.png&quot;, 1, 1);
		 * </code></pre>
		 * 
		 * @param url - The URL of the image.
		 * @param column - The grid column position.
		 * @param row - The grid row position.
		 * 
		 * @returns The inserted image.
		 */
		insertImage(
			url: string,
			column: number,
			row: number
		): SpreadsheetApp.OverGridImage
		/**
		 * Inserts an image in the document at a given row and column, with a pixel offset.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * sheet.insertImage(&quot;https://www.google.com/images/srpr/logo3w.png&quot;, 1, 1, 10, 10);
		 * </code></pre>
		 * 
		 * @param url - The URL for the image.
		 * @param column - The column position.
		 * @param row - The row position.
		 * @param offsetX - The horizontal offset from cell corner in pixels.
		 * @param offsetY - The vertical offset from cell corner in pixels.
		 * 
		 * @returns The Inserted image.
		 */
		insertImage(
			url: string,
			column: number,
			row: number,
			offsetX: number,
			offsetY: number
		): SpreadsheetApp.OverGridImage

		/**
		 * Inserts a row after the given row position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This inserts a row after the first row position
		 * sheet.insertRowAfter(1);
		 * </code></pre>
		 * 
		 * @param afterPosition - The row after which the new row should be added.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		insertRowAfter(
			afterPosition: number
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a row before the given row position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This inserts a row before the first row position
		 * sheet.insertRowBefore(1);
		 * </code></pre>
		 * 
		 * @param beforePosition - The row before which the new row should be added.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		insertRowBefore(
			beforePosition: number
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a number of rows after the given row position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This inserts five rows after the first row
		 * sheet.insertRowsAfter(1, 5);
		 * </code></pre>
		 * 
		 * @param afterPosition - The row after which the new rows should be added.
		 * @param howMany - The number of rows to insert.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		insertRowsAfter(
			afterPosition: number,
			howMany: number
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a number of rows before the given row position.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This inserts five rows before the first row
		 * sheet.insertRowsBefore(1, 5);
		 * </code></pre>
		 * 
		 * @param beforePosition - The row before which the new rows should be added.
		 * @param howMany - The number of rows to insert.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		insertRowsBefore(
			beforePosition: number,
			howMany: number
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a new sheet into the spreadsheet, using a default sheet name. The new sheet becomes the
		 * active sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * ss.insertSheet();
		 * </code></pre>
		 * 
		 * @returns The new sheet.
		 */
		insertSheet(): SpreadsheetApp.Sheet
		/**
		 * Inserts a new sheet into the spreadsheet at the given index. The new sheet becomes the active
		 * sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * ss.insertSheet(1);
		 * </code></pre>
		 * 
		 * @param sheetIndex - The index of the newly created sheet. To insert a sheet as the first one in
		 *     the spreadsheet, set it to 0.
		 * 
		 * @returns The new sheet.
		 */
		insertSheet(
			sheetIndex: number
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a new sheet into the spreadsheet at the given index and uses optional advanced
		 * arguments. The new sheet becomes the active sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var templateSheet = ss.getSheetByName(&#39;Sales&#39;);
		 * ss.insertSheet(1, {template: templateSheet});
		 * </code></pre>
		 * 
		 * @param sheetIndex - The index of the newly created sheet. To insert a sheet as the first one in
		 *     the spreadsheet, set it to 0.
		 * @param options - Optional JavaScript advanced arguments.
		 * 
		 * @returns The new sheet.
		 */
		insertSheet(
			sheetIndex: number,
			options: object
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a new sheet into the spreadsheet, using a default sheet name and optional advanced
		 * arguments. The new sheet becomes the active sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var templateSheet = ss.getSheetByName(&#39;Sales&#39;);
		 * ss.insertSheet({template: templateSheet});
		 * </code></pre>
		 * 
		 * @param options - Optional JavaScript advanced arguments, listed below.
		 * 
		 * @returns The new sheet.
		 */
		insertSheet(
			options: object
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a new sheet into the spreadsheet with the given name. The new sheet becomes the active
		 * sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * ss.insertSheet(&#39;My New Sheet&#39;);
		 * </code></pre>
		 * 
		 * @param sheetName - The name of the new sheet.
		 * 
		 * @returns The new sheet.
		 */
		insertSheet(
			sheetName: string
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a new sheet into the spreadsheet with the given name at the given index. The new sheet
		 * becomes the active sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * ss.insertSheet(&#39;My New Sheet&#39;, 1);
		 * </code></pre>
		 * 
		 * @param sheetName - The name of the new sheet.
		 * @param sheetIndex - The index of the newly created sheet. To insert a sheet as the first one in
		 *     the spreadsheet, set it to 0.
		 * 
		 * @returns The new sheet.
		 */
		insertSheet(
			sheetName: string,
			sheetIndex: number
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a new sheet into the spreadsheet with the given name at the given index and uses
		 * optional advanced arguments. The new sheet becomes the active sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var templateSheet = ss.getSheetByName(&#39;Sales&#39;);
		 * ss.insertSheet(&#39;My New Sheet&#39;, 1, {template: templateSheet});
		 * </code></pre>
		 * 
		 * @param sheetName - The name of the new sheet.
		 * @param sheetIndex - The index of the newly inserted sheet. To insert a sheet as the first one in
		 *     a spreadsheet, set it to 0.
		 * @param options - Optional JavaScript advanced arguments.
		 * 
		 * @returns The new sheet.
		 */
		insertSheet(
			sheetName: string,
			sheetIndex: number,
			options: object
		): SpreadsheetApp.Sheet
		/**
		 * Inserts a new sheet into the spreadsheet with the given name and uses optional advanced
		 * arguments. The new sheet becomes the active sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var templateSheet = ss.getSheetByName(&#39;Sales&#39;);
		 * ss.insertSheet(&#39;My New Sheet&#39;, {template: templateSheet});
		 * </code></pre>
		 * 
		 * @param sheetName - The name of the new sheet.
		 * @param options - Optional JavaScript advanced arguments.
		 * 
		 * @returns The new sheet.
		 */
		insertSheet(
			sheetName: string,
			options: object
		): SpreadsheetApp.Sheet

		/**
		 * Inserts a new sheet in the spreadsheet, creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/data-source-table.html'>DataSourceTable</a></code> spanning the
		 * entire sheet with the given data source specification, and starts data execution. As a side
		 * effect, makes the new sheet the active sheet.
		 * 
		 * <p>Throws an exception if the data source type is not enabled. Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for specific data source
		 * type.
		 * 
		 * @param spec - The data source specification to insert with.
		 * 
		 * @returns The new sheet.
		 */
		insertSheetWithDataSourceTable(
			spec: SpreadsheetApp.DataSourceSpec
		): SpreadsheetApp.Sheet
		/**
		 * Indicates whether the document allows anonymous viewing. As this is no longer supported in the
		 * <a href="https://support.google.com/drive/answer/3541068">new version of Google Sheets</a>, use
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#getSharingAccess()'>File.getSharingAccess()</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#getSharingPermission()'>File.getSharingPermission()</a></code> instead.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Determine if the document allows anonymous viewing via the Drive API.
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var file = DriveApp.getFileById(ss.getId());
		 * var access = file.getSharingAccess();
		 * var permission = file.getSharingPermission();
		 * var isAnonymousAccess =
		 *     access == DriveApp.Access.ANYONE || access == DriveApp.Access.ANYONE_WITH_LINK;
		 * var isAnonymousEdit = isAnonymousAccess &amp;&amp; permission != DriveApp.Permission.NONE;
		 * </code></pre>
		 * 
		 * @returns <code>true</code> if the document allows anonymous viewing, <code>false</code> otherwise.
		 */
		isAnonymousView(): Boolean
		/**
		 * Indicates whether the document allows edits from anonymous users. As this is no longer
		 * supported in the <a href="https://support.google.com/drive/answer/3541068">new version of
		 * Google Sheets</a>, use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#getSharingAccess()'>File.getSharingAccess()</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#getSharingPermission()'>File.getSharingPermission()</a></code> instead.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Determine if the document allow anonymous edits via the Drive API.
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var file = DriveApp.getFileById(ss.getId());
		 * var access = file.getSharingAccess();
		 * var permission = file.getSharingPermission();
		 * var isAnonymousAccess =
		 *     access == DriveApp.Access.ANYONE || access == DriveApp.Access.ANYONE_WITH_LINK;
		 * var isAnonymousEdit = isAnonymousAccess &amp;&amp; permission == DriveApp.Permission.EDIT;
		 * </code></pre>
		 * 
		 * @returns <code>true</code> if the document allows anonymous editing, <code>false</code> otherwise.
		 */
		isAnonymousWrite(): Boolean
		/**
		 * Returns whether the given column is hidden by the user.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Columns start at 1
		 * Logger.log(sheet.isColumnHiddenByUser(1));
		 * </code></pre>
		 * 
		 * @param columnPosition - The position of the column to examine.
		 * 
		 * @returns <code>true</code> if the column is hidden, <code>false</code> otherwise.
		 */
		isColumnHiddenByUser(
			columnPosition: number
		): Boolean
		/**
		 * Returns whether iterative calculation is enabled in this spreadsheet.
		 * 
		 * @returns <code>true</code> if iterative calculation is enabled, <code>false</code> otherwise.
		 */
		isIterativeCalculationEnabled(): Boolean
		/**
		 * Returns whether the given row is hidden by a filter (not a filter view).
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Rows start at 1
		 * Logger.log(sheet.isRowHiddenByFilter(1));
		 * </code></pre>
		 * 
		 * @param rowPosition - The position of the row to examine.
		 * 
		 * @returns <code>true</code> if the row is hidden, <code>false</code> otherwise.
		 */
		isRowHiddenByFilter(
			rowPosition: number
		): Boolean
		/**
		 * Returns whether the given row is hidden by the user.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Rows start at 1
		 * Logger.log(sheet.isRowHiddenByUser(1));
		 * </code></pre>
		 * 
		 * @param rowPosition - The position of the row to examine.
		 * 
		 * @returns <code>true</code> if the row is hidden, <code>false</code> otherwise.
		 */
		isRowHiddenByUser(
			rowPosition: number
		): Boolean
		/**
		 * Moves the active sheet to the given position in the list of sheets. Throws an exception if the
		 * position is negative or greater than the number of sheets.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This example assumes there are two sheets in the current
		 * // active spreadsheet: one named &quot;first&quot;, and another named &quot;second&quot;,
		 * // and that the current active sheet (first) is in position 1
		 * var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = spreadsheet.getSheetByName(&quot;first&quot;);
		 * 
		 * // This should output &#39;Current index of sheet: 1&#39;
		 * Logger.log(&quot;Current index of sheet: %s&quot;, sheet.getIndex());
		 * 
		 * spreadsheet.moveActiveSheet(2);
		 * 
		 * // This should output &#39;New index of sheet: 2&#39;
		 * Logger.log(&quot;New index of sheet: %s&quot;, sheet.getIndex());
		 * </code></pre>
		 * 
		 * @param pos - A position to move the active sheet to in the list of sheets.
		 */
		moveActiveSheet(
			pos: number
		): void
		/**
		 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html#OBJECT'>SheetType.OBJECT</a></code> sheet and moves the provided chart to it. If the chart
		 * is already on its own sheet, that sheet is returned without creating a new one.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var chart = sheet.newChart().setPosition(1, 1, 0, 0).build();
		 * sheet.insertChart(chart);
		 * var objectSheet = SpreadsheetApp.getActive().moveChartToObjectSheet(chart);
		 * </code></pre>
		 * 
		 * @param chart - The chart to move.
		 * 
		 * @returns The sheet that the chart is on.
		 */
		moveChartToObjectSheet(
			chart: SpreadsheetApp.EmbeddedChart
		): SpreadsheetApp.Sheet
		/**
		 * Refreshes all supported data sources and their linked data source objects, skipping invalid
		 * data source objects.
		 * 
		 * <p>Use <code>SpreadsheetApp#enable...Execution()</code> methods to enable data execution for
		 * specific data source type.
		 */
		refreshAllDataSources(): void
		/**
		 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. This method doesn't
		 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> if they belong to a class of users who have
		 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> is shared with the user's entire
		 * domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of viewers.
		 * 
		 * @param emailAddress - The email address of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining.
		 */
		removeEditor(
			emailAddress: string
		): SpreadsheetApp.Spreadsheet
		/**
		 * Removes the given user from the list of editors for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. This method doesn't
		 * block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> if they belong to a class of users who have
		 * general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> is shared with the user's entire
		 * domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of viewers.
		 * 
		 * @param user - A representation of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>, for chaining.
		 */
		removeEditor(
			user: User
		): SpreadsheetApp.Spreadsheet

		/**
		 * Removes a menu that was added by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addMenu(String,Object)'>addMenu(name, subMenus)</a></code>. The <code>name</code> argument
		 * should have the same value as the corresponding call to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addMenu(String,Object)'>addMenu(name, subMenus)</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The onOpen function is executed automatically every time a Spreadsheet is loaded
		 * function onOpen() {
		 *   var ss = SpreadsheetApp.getActiveSpreadsheet();
		 *   ss.addMenu(&quot;badMenu&quot;, [{name: &quot;remove bad menu&quot;, functionName: &quot;removeBadMenu&quot;},
		 *                                        {name: &quot;foo&quot;, functionName: &quot;foo&quot;}]);
		 * }
		 * function removeBadMenu() {
		 *   var ss = SpreadsheetApp.getActiveSpreadsheet();
		 *   ss.removeMenu(&quot;badMenu&quot;);  // name must match the name used when added the menu
		 * }
		 * function foo(){
		 * //do nothing
		 * }
		 * </code></pre>
		 * 
		 * @param name - The name of the menu to remove.
		 */
		removeMenu(
			name: string
		): void
		/**
		 * Deletes a named range with the given name. Throws an exception if no range with the given name
		 * is found in the spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below creates a new named range &quot;foo&quot;, and then remove it.
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * ss.setNamedRange(&quot;foo&quot;, ss.getActiveRange());
		 * ss.removeNamedRange(&quot;foo&quot;);
		 * </code></pre>
		 * 
		 * @param name - The range name.
		 */
		removeNamedRange(
			name: string
		): void
		/**
		 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. This
		 * method has no effect if the user is an editor, not a viewer or commenter. This method also
		 * doesn't block users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> if they belong to a class of users who
		 * have general access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> is shared with the user's
		 * entire domain, or if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of editors.
		 * 
		 * @param emailAddress - The email address of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> for chaining.
		 */
		removeViewer(
			emailAddress: string
		): SpreadsheetApp.Spreadsheet
		/**
		 * Removes the given user from the list of viewers and commenters for the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code>. This
		 * method has no effect if the user is an editor, not a viewer. This method also doesn't block
		 * users from accessing the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> if they belong to a class of users who have general
		 * access&mdash;for example, if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> is shared with the user's entire domain, or
		 * if the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> is in a shared drive that the user can access.
		 * 
		 * <p>For Drive files, this also removes the user from the list of editors.
		 * 
		 * @param user - A representation of the user to remove.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html'>Spreadsheet</a></code> for chaining.
		 */
		removeViewer(
			user: User
		): SpreadsheetApp.Spreadsheet

		/**
		 * Renames the document.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * ss.rename(&quot;This is the new name&quot;);
		 * </code></pre>
		 * 
		 * @param newName - The new name for the document.
		 */
		rename(
			newName: string
		): void
		/**
		 * Renames the current active sheet to the given new name.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below renames the active sheet to &quot;Hello world&quot;
		 * SpreadsheetApp.getActiveSpreadsheet().renameActiveSheet(&quot;Hello world&quot;);
		 * </code></pre>
		 * 
		 * @param newName - The new name for the current active sheet.
		 */
		renameActiveSheet(
			newName: string
		): void
		/**
		 * Removes the applied theme and sets the default theme on the spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below applies default theme on the spreadsheet.
		 * SpreadsheetApp.resetSpreadsheetTheme();
		 * </code></pre>
		 * 
		 * @returns The default theme.
		 */
		resetSpreadsheetTheme(): SpreadsheetApp.SpreadsheetTheme
		/**
		 * Sets the specified range as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getActiveRange()'>active range</a></code> in the active sheet, with
		 * the top left cell in the range as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getCurrentCell()'>current cell</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
		 * var range = sheet.getRange(&#39;A1:D4&#39;);
		 * sheet.setActiveRange(range);
		 * 
		 * var selection = sheet.getSelection();
		 * // Current cell: A1
		 * var currentCell = selection.getCurrentCell();
		 * // Active Range: A1:D4
		 * var activeRange = selection.getActiveRange();
		 * </code></pre>
		 * 
		 * @param range - The range to set as the active range.
		 * 
		 * @returns the newly active range
		 */
		setActiveRange(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.Range
		/**
		 * Sets the specified list of ranges as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getActiveRangeList()'>active ranges</a></code> in the
		 * active sheet. The last range in the list is set as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getActiveRange()'>active range</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSheet();
		 * var rangeList = sheet.getRangeList([&#39;D4&#39;, &#39;B2:C4&#39;]);
		 * sheet.setActiveRangeList(rangeList);
		 * 
		 * var selection = sheet.getSelection();
		 * // Current cell: B2
		 * var currentCell = selection.getCurrentCell();
		 * // Active range: B2:C4
		 * var activeRange = selection.getActiveRange();
		 * // Active range list: [D4, B2:C4]
		 * var activeRangeList = selection.getActiveRangeList();
		 * </code></pre>
		 * 
		 * @param rangeList - The list of ranges to select.
		 * 
		 * @returns the newly selected list of ranges
		 */
		setActiveRangeList(
			rangeList: SpreadsheetApp.RangeList
		): SpreadsheetApp.RangeList
		/**
		 * Sets the active selection region for this sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var range = sheet.getRange(&quot;A1:D4&quot;);
		 * sheet.setActiveSelection(range);
		 * </code></pre>
		 * 
		 * @param range - The range to set as the active selection.
		 * 
		 * @returns the newly active range
		 */
		setActiveSelection(
			range: SpreadsheetApp.Range
		): SpreadsheetApp.Range
		/**
		 * Sets the active selection, as specified in A1 notation or R1C1 notation.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * sheet.setActiveSelection(&quot;A1:D4&quot;);
		 * </code></pre>
		 * 
		 * @param a1Notation - The range to set as active, as specified in A1 notation or R1C1 notation.
		 * 
		 * @returns the newly active range
		 */
		setActiveSelection(
			a1Notation: string
		): SpreadsheetApp.Range

		/**
		 * Sets the given sheet to be the active sheet in the spreadsheet. The Google Sheets UI displays
		 * the chosen sheet unless the sheet belongs to a different spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below makes the first sheet active in the active spreadsheet.
		 * var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
		 * spreadsheet.setActiveSheet(spreadsheet.getSheets()[0]);
		 * </code></pre>
		 * 
		 * @param sheet - The sheet to set as the active sheet.
		 * 
		 * @returns The active sheet.
		 */
		setActiveSheet(
			sheet: SpreadsheetApp.Sheet
		): SpreadsheetApp.Sheet
		/**
		 * Sets the given sheet to be the active sheet in the spreadsheet, with an option to restore the
		 * most recent selection within that sheet. The Google Sheets UI displays the chosen sheet unless
		 * the sheet belongs to a different spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
		 * var firstSheet = spreadsheet.getSheets()[0];
		 * var secondSheet = spreadsheet.getSheets()[1];
		 * // Set the first sheet as the active sheet and select the range D4:F4.
		 * spreadsheet.setActiveSheet(firstSheet).getRange(&#39;D4:F4&#39;).activate();
		 * 
		 * // Switch to the second sheet to do some work.
		 * spreadsheet.setActiveSheet(secondSheet);
		 * // Switch back to first sheet, and restore its selection.
		 * spreadsheet.setActiveSheet(firstSheet, true);
		 * 
		 * // The selection of first sheet is restored, and it logs D4:F4
		 * var range = spreadsheet.getActiveSheet().getSelection().getActiveRange();
		 * Logger.log(range.getA1Notation());
		 * </code></pre>
		 * 
		 * @param sheet - The new active sheet.
		 * @param restoreSelection - Tf <code>true</code>, the most recent selection of the new active sheet
		 *     becomes selected again as the new sheet becomes active; if <code>false</code>, the new sheet
		 *     becomes active without changing the current selection.
		 * 
		 * @returns The new active sheet.
		 */
		setActiveSheet(
			sheet: SpreadsheetApp.Sheet,
			restoreSelection: Boolean
		): SpreadsheetApp.Sheet

		/**
		 * Sets the document's policy on anonymous reading and writing. As this is no longer supported in
		 * the <a href="https://support.google.com/drive/answer/3541068">new version of Google Sheets</a>,
		 * use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#setSharing(Access,Permission)'>File.setSharing(accessType, permissionType)</a></code> as an alternative.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Set the document&#39;s policy on anonymous reading and writing via the Drive API.
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var file = DriveApp.getFileById(ss.getId());
		 * 
		 * // Set anonymous read.
		 * file.setSharing(DriveApi.Access.ANYONE, DriveApi.Permission.VIEW);
		 * 
		 * // Set anonymous write.
		 * file.setSharing(DriveApi.Access.ANYONE, DriveApi.Permission.EDIT);
		 * 
		 * // Disable anonymous access.
		 * file.setSharing(DriveApi.Access.PRIVATE, file.getSharingPermission());
		 * </code></pre>
		 * 
		 * @param anonymousReadAllowed - <code>true</code> to allow anonymous reads; <code>false</code> otherwise.
		 * @param anonymousWriteAllowed - <code>true</code> to allow anonymous reads; <code>false</code> otherwise.
		 */
		setAnonymousAccess(
			anonymousReadAllowed: Boolean,
			anonymousWriteAllowed: Boolean
		): void
		/**
		 * Sets the width of the given column in pixels.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Sets the first column to a width of 200 pixels
		 * sheet.setColumnWidth(1, 200);
		 * </code></pre>
		 * 
		 * @param columnPosition - The position of the given column to set.
		 * @param width - The width in pixels to set it to.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		setColumnWidth(
			columnPosition: number,
			width: number
		): SpreadsheetApp.Sheet
		/**
		 * Sets the specified cell as the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getCurrentCell()'>current cell</a></code>.
		 * 
		 * <p>If the specified cell is present in an already selected range, then that range becomes the
		 * active range with the cell as the current cell.
		 * 
		 * <p>If the specified cell is not present in any selected range, then any existing selection is
		 * removed and the cell becomes the current cell and the active range.
		 * 
		 * <p><b>Note:</b>The specified <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/range.html'>Range</a></code> must consist of one cell, otherwise it throws an
		 * exception.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
		 * var cell = sheet.getRange(&#39;B5&#39;);
		 * sheet.setCurrentCell(cell);
		 * 
		 * var selection = sheet.getSelection();
		 * // Current cell: B5
		 * var currentCell = selection.getCurrentCell();
		 * </code></pre>
		 * 
		 * @param cell - The cell to set as the current cell.
		 * 
		 * @returns the newly set current cell
		 */
		setCurrentCell(
			cell: SpreadsheetApp.Range
		): SpreadsheetApp.Range
		/**
		 * Freezes the given number of columns. If zero, no columns are frozen.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Freezes the first column
		 * sheet.setFrozenColumns(1);
		 * </code></pre>
		 * 
		 * @param columns - The number of columns to freeze.
		 */
		setFrozenColumns(
			columns: number
		): void
		/**
		 * Freezes the given number of rows. If zero, no rows are frozen.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Freezes the first row
		 * sheet.setFrozenRows(1);
		 * </code></pre>
		 * 
		 * @param rows - The number of rows to freeze.
		 */
		setFrozenRows(
			rows: number
		): void
		/**
		 * Sets the minimum threshold value for iterative calculation. When the results of successive
		 * calculation differ by less than this value, the iterative calculation stops. This value must be
		 * non-negative, and defaults to 0.05.
		 * 
		 * @param minThreshold - The minimum convergence threshold (must be non-negative).
		 * 
		 * @returns This spreadsheet, for chaining.
		 */
		setIterativeCalculationConvergenceThreshold(
			minThreshold: Number
		): SpreadsheetApp.Spreadsheet
		/**
		 * Sets whether iterative calculation is enabled in this spreadsheet. If the maximum number of
		 * calculation cycles and convergence threshold have not previously been set when the calculation
		 * is enabled, they default to 50 and 0.05 respectively. If either has been set previously, they
		 * retain their previous values.
		 * 
		 * @param isEnabled - <code>true</code> if iterative calculation should be enabled; <code>false</code>
		 *     otherwise.
		 * 
		 * @returns This spreadsheet, for chaining.
		 */
		setIterativeCalculationEnabled(
			isEnabled: Boolean
		): SpreadsheetApp.Spreadsheet
		/**
		 * Sets the maximum number of calculation iterations that should be performed during iterative
		 * calculation. This value must be between 1 and 10,000 (inclusive), and defaults to 50.
		 * 
		 * @param maxIterations - The maximum number of calculation iterations (between 1 and 10,000).
		 * 
		 * @returns This spreadsheet, for chaining.
		 */
		setMaxIterativeCalculationCycles(
			maxIterations: number
		): SpreadsheetApp.Spreadsheet
		/**
		 * Names a range.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below creates a new named range &quot;TaxRates&quot; in the active spreadsheet
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * ss.setNamedRange(&quot;TaxRates&quot;, SpreadsheetApp.getActiveRange());
		 * </code></pre>
		 * 
		 * @param name - The name to give the range.
		 * @param range - The range specification.
		 */
		setNamedRange(
			name: string,
			range: SpreadsheetApp.Range
		): void
		/**
		 * Sets how often this spreadsheet should recalculate.
		 * 
		 * @param recalculationInterval - The new recalculation interval.
		 * 
		 * @returns This spreadsheet, for chaining.
		 */
		setRecalculationInterval(
			recalculationInterval: SpreadsheetApp.RecalculationInterval
		): SpreadsheetApp.Spreadsheet
		/**
		 * Sets the row height of the given row in pixels.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Sets the first row to a height of 200 pixels
		 * sheet.setRowHeight(1, 200);
		 * </code></pre>
		 * 
		 * @param rowPosition - The row position to change.
		 * @param height - The height in pixels to set it to.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		setRowHeight(
			rowPosition: number,
			height: number
		): SpreadsheetApp.Sheet
		/**
		 * Sets the permissions for the current sheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * var permissions = sheet.getSheetProtection();
		 * 
		 * // This copies the permissions on the first sheet to the second sheet
		 * var sheetToClonePermissionsTo = ss.getSheets()[1];
		 * sheetToClonePermissionsTo.setSheetProtection(permissions);
		 * </code></pre>
		 * 
		 * @param permissions - The access permissions object to set on this sheet.
		 */
		setSheetProtection(
			permissions: SpreadsheetApp.PageProtection
		): void
		/**
		 * Sets the spreadsheet locale.
		 * 
		 * @param locale - The locale code to use (for example, 'en', 'fr', or 'en_US').
		 */
		setSpreadsheetLocale(
			locale: string
		): void
		/**
		 * Sets a theme on the spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below sets the second predefined theme as the current theme of the spreadsheet.
		 * var predefinedThemesList = SpreadsheetApp.getPredefinedSpreadsheetThemes();
		 * SpreadsheetApp.setSpreadsheetTheme(predefinedThemesList[1]);
		 * </code></pre>
		 * 
		 * @param theme - The theme to apply.
		 * 
		 * @returns The new current theme.
		 */
		setSpreadsheetTheme(
			theme: SpreadsheetApp.SpreadsheetTheme
		): SpreadsheetApp.SpreadsheetTheme
		/**
		 * Sets the time zone for the spreadsheet.
		 * 
		 * @param timezone - The time zone, specified in "long" format (for example, "America/New_York", as
		 *     listed by <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>).
		 */
		setSpreadsheetTimeZone(
			timezone: string
		): void
		/**
		 * Displays a custom user interface component in a dialog centered in the user's browser's
		 * viewport. The server-side script's execution is <em>not</em> suspended. To communicate with the
		 * server side, the user interface component must make asynchronous callbacks to the server-side
		 * script.
		 * 
		 * <p>If the server-side script previously displayed a dialog that has not yet been dismissed,
		 * then the existing dialog is replaced with the newly requested dialog's user interface.
		 * 
		 * <p>The following code snippet displays a simple <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../html/html-service.html'>HtmlService</a></code> application in a dialog with the
		 * specified title, height, and width:
		 * 
		 * <pre class="prettyprint"><code>
		 * var htmlApp = HtmlService
		 *     .createHtmlOutput(&#39;&lt;p&gt;A change of speed, a change of style...&lt;/p&gt;&#39;)
		 *     .setTitle(&#39;My HtmlService Application&#39;)
		 *     .setWidth(250)
		 *     .setHeight(300);
		 * 
		 * SpreadsheetApp.getActiveSpreadsheet().show(htmlApp);
		 * 
		 * // The script resumes execution immediately after showing the dialog.
		 * </code></pre>
		 * 
		 * @param userInterface - An <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/../html/html-output.html'>HtmlOutput</a></code>.
		 */
		show(
			userInterface: object
		): void
		/**
		 * Sorts a sheet by column, ascending.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Sorts the sheet by the first column, ascending
		 * sheet.sort(1);
		 * </code></pre>
		 * 
		 * @param columnPosition - The column to sort by.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		sort(
			columnPosition: number
		): SpreadsheetApp.Sheet
		/**
		 * Sorts a sheet by column. Takes a parameter to specify ascending or descending.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // Sorts the sheet by the first column, descending
		 * sheet.sort(1, false);
		 * </code></pre>
		 * 
		 * @param columnPosition - The column to sort by.
		 * @param ascending - <code>true</code> for ascending sorts, <code>false</code> for descending.
		 * 
		 * @returns the sheet, useful for method chaining
		 */
		sort(
			columnPosition: number,
			ascending: Boolean
		): SpreadsheetApp.Sheet

		/**
		 * Shows a popup window in the lower right corner of the spreadsheet with the given message.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Show a popup with the message &quot;Task started&quot;.
		 * SpreadsheetApp.getActiveSpreadsheet().toast(&#39;Task started&#39;);
		 * </code></pre>
		 * 
		 * @param msg - The message to be shown in the toast.
		 */
		toast(
			msg: string
		): void
		/**
		 * Shows a popup window in the lower right corner of the spreadsheet with the given message and
		 * title.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Show a popup with the title &quot;Status&quot; and the message &quot;Task started&quot;.
		 * SpreadsheetApp.getActiveSpreadsheet().toast(&#39;Task started&#39;, &#39;Status&#39;);
		 * </code></pre>
		 * 
		 * @param msg - The message to be shown in the toast.
		 * @param title - The optional title of the toast.
		 */
		toast(
			msg: string,
			title: string
		): void
		/**
		 * Shows a popup window in the lower right corner of the spreadsheet with the given title and
		 * message, that stays visible for a certain length of time.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Show a 3-second popup with the title &quot;Status&quot; and the message &quot;Task started&quot;.
		 * SpreadsheetApp.getActiveSpreadsheet().toast(&#39;Task started&#39;, &#39;Status&#39;, 3);
		 * </code></pre>
		 * 
		 * @param msg - The message to be shown in the toast.
		 * @param title - The optional title of the toast.
		 * @param timeoutSeconds - The timeout in seconds; if <code>null</code>, the toast defaults to 5 seconds;
		 *     if negative, the toast remains until dismissed.
		 */
		toast(
			msg: string,
			title: string,
			timeoutSeconds: Number
		): void

		/**
		 * Unhides the column in the given range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This unhides the first column if it was previously hidden
		 * var range = sheet.getRange(&quot;A1&quot;);
		 * sheet.unhideColumn(range);
		 * </code></pre>
		 * 
		 * @param column - The range to unhide, if hidden.
		 */
		unhideColumn(
			column: SpreadsheetApp.Range
		): void
		/**
		 * Unhides the row in the given range.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var sheet = ss.getSheets()[0];
		 * 
		 * // This unhides the first row if it was previously hidden
		 * var range = sheet.getRange(&quot;A1&quot;);
		 * sheet.unhideRow(range);
		 * </code></pre>
		 * 
		 * @param row - The range to unhide, if hidden.
		 */
		unhideRow(
			row: SpreadsheetApp.Range
		): void
		/**
		 * Updates a menu that was added by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addMenu(String,Object)'>addMenu(name, subMenus)</a></code>. Works exactly like <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addMenu(String,Object)'>addMenu(name, subMenus)</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var ss = SpreadsheetApp.getActiveSpreadsheet();
		 * var menuEntries = [];
		 * menuEntries.push({name: &quot;Lone Menu Entry&quot;, functionName: &quot;function1&quot;});
		 * ss.updateMenu(&quot;addMenuExample&quot;, menuEntries);
		 * </code></pre>
		 * 
		 * @param name - The name of the menu to update.
		 * @param subMenus - An array of JavaScript maps with <code>name</code> and <code>functionName
		 *     </code> parameters. You can use functions from included libraries, such as <code>
		 *     Library.libFunction1</code>.
		 */
		updateMenu(
			name: string,
			subMenus: object[]
		): void
		/**
		 * Waits until all the current executions in the spreadsheet complete, timing out after the
		 * provided number of seconds. Throws an exception if the executions are not completed when timing
		 * out, but does not cancel the data executions.
		 * 
		 * @param timeoutInSeconds - The time to wait for data executions, in seconds. The maximum is 300
		 *     seconds.
		 */
		waitForAllDataExecutionsCompletion(
			timeoutInSeconds: number
		): void

	}

	class SpreadsheetTheme {
		private constructor();

		/**
		 * Returns the concrete <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/color.html'>Color</a></code> for a valid theme color type. Throws exception if the theme
		 * color type is not set in the current theme.
		 * 
		 * @param themeColorType - Theme color type.
		 * 
		 * @returns Concrete color.
		 */
		getConcreteColor(
			themeColorType: SpreadsheetApp.ThemeColorType
		): SpreadsheetApp.Color
		/**
		 * Returns the font family of the theme, or <code>null</code> if it's a <code>null</code> theme.
		 * 
		 * @returns The theme font family.
		 */
		getFontFamily(): string
		/**
		 * Returns a list of all possible theme color types for the current theme.
		 * 
		 * @returns A list of theme colors.
		 */
		getThemeColors(): SpreadsheetApp.ThemeColorType[]
		/**
		 * Sets the concrete color associated with the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/theme-color-type.html'>ThemeColorType</a></code> in this color scheme to the
		 * given color in RGB format.
		 * 
		 * @param themeColorType - The theme color type.
		 * @param red - The value of red channel.
		 * @param green - The value of green channel.
		 * @param blue - The value of blue channel.
		 * 
		 * @returns The theme, for chaining.
		 */
		setConcreteColor(
			themeColorType: SpreadsheetApp.ThemeColorType,
			red: number,
			green: number,
			blue: number
		): SpreadsheetApp.SpreadsheetTheme
		/**
		 * Sets the concrete color associated with the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/theme-color-type.html'>ThemeColorType</a></code> in this color scheme to the
		 * given color.
		 * 
		 * @param themeColorType - The theme color type.
		 * @param color - The color.
		 * 
		 * @returns The theme, for chaining.
		 */
		setConcreteColor(
			themeColorType: SpreadsheetApp.ThemeColorType,
			color: SpreadsheetApp.Color
		): SpreadsheetApp.SpreadsheetTheme

		/**
		 * Sets the font family for the theme.
		 * 
		 * @param fontFamily - The new theme font family.
		 * 
		 * @returns This theme, for chaining.
		 */
		setFontFamily(
			fontFamily: string
		): SpreadsheetApp.SpreadsheetTheme

	}

	enum TextDirection {
		/**
		 * Left-to-right text direction.
		 */
		LEFT_TO_RIGHT = "LEFT_TO_RIGHT",
		/**
		 * Right-to-left text direction.
		 */
		RIGHT_TO_LEFT = "RIGHT_TO_LEFT",
	}

	class TextFinder {
		private constructor();

		/**
		 * Returns all cells matching the search criteria.
		 * 
		 * @returns all the matching cells
		 */
		findAll(): SpreadsheetApp.Range[]
		/**
		 * Returns the next cell matching the search criteria.
		 * 
		 * @returns the next matching cell, or {code null} if there are no previous matches
		 */
		findNext(): SpreadsheetApp.Range
		/**
		 * Returns the previous cell matching the search criteria.
		 * 
		 * @returns the previous matching cell, or {code null} if there are no previous matches
		 */
		findPrevious(): SpreadsheetApp.Range
		/**
		 * Returns the current cell matching the search criteria.
		 * 
		 * @returns the current matching cell, or {code null} if there are no further matches
		 */
		getCurrentMatch(): SpreadsheetApp.Range
		/**
		 * If <code>true</code>, configures the search to ignore diacritics while matching; otherwise the
		 * search matches diacritics. A diacritic is a sign, such as an accent or cedilla, which when
		 * written above or below a letter indicates a difference in pronunciation from the same letter
		 * when unmarked or differently marked.
		 * 
		 * @param ignoreDiacritics - Whether the search considers diacritics.
		 * 
		 * @returns this text finder, for chaining
		 */
		ignoreDiacritics(
			ignoreDiacritics: Boolean
		): SpreadsheetApp.TextFinder
		/**
		 * If <code>true</code>, configures the search to match the search text's case exactly, otherwise the
		 * search defaults to case-insensitive matching.
		 * 
		 * @param matchCase - Whether the matching is case-sensitive.
		 * 
		 * @returns this text finder, for chaining
		 */
		matchCase(
			matchCase: Boolean
		): SpreadsheetApp.TextFinder
		/**
		 * If <code>true</code>, configures the search to match the entire contents of a cell; otherwise, the
		 * search defaults to partial matching.
		 * 
		 * @param matchEntireCell - Whether the entire cell is matched.
		 * 
		 * @returns this text finder, for chaining
		 */
		matchEntireCell(
			matchEntireCell: Boolean
		): SpreadsheetApp.TextFinder
		/**
		 * If <code>true</code>, configures the search to return matches that appear within formula text;
		 * otherwise cells with formulas are considered based on their displayed value.
		 * 
		 * @param matchFormulaText - Whether the search examines formula text.
		 * 
		 * @returns this text finder, for chaining
		 */
		matchFormulaText(
			matchFormulaText: Boolean
		): SpreadsheetApp.TextFinder
		/**
		 * Replaces all matches with the specified text. Returns the number of occurrences replaced, which
		 * may be different from the number of matched cells.
		 * 
		 * @param replaceText - The text that replaces the text in the matched cells.
		 * 
		 * @returns the number of occurrences replaced
		 */
		replaceAllWith(
			replaceText: string
		): number
		/**
		 * Replaces the search text in the currently matched cell with the specified text and returns the
		 * number of occurrences replaced.
		 * 
		 * @param replaceText - The text that replaces the content in the currently matched cell.
		 * 
		 * @returns the number of occurrences replaced
		 */
		replaceWith(
			replaceText: string
		): number
		/**
		 * Configures the search to start searching immediately after the specified cell range.
		 * 
		 * @param startRange - The cell range after which the search should start.
		 * 
		 * @returns this text finder, for chaining
		 */
		startFrom(
			startRange: SpreadsheetApp.Range
		): SpreadsheetApp.TextFinder
		/**
		 * If <code>true</code>, configures the search to interpret the search string as a regular expression;
		 * otherwise the search interprets the search string as normal text. For more details on how to
		 * use regular expressions, refer to the <a
		 * href="https://support.google.com/docs/answer/62754?p=spreadsheets_find_replace&visit_id=1-636603693162634183-3185740572&rd=1">
		 * Find and replace support page.</a>
		 * 
		 * @param useRegEx - Whether to interpret the search string as a regular expression.
		 * 
		 * @returns this text finder, for chaining
		 */
		useRegularExpression(
			useRegEx: Boolean
		): SpreadsheetApp.TextFinder

	}

	class TextRotation {
		private constructor();

		/**
		 * Gets the angle between standard text orientation and the current text orientation. For
		 * left-to-right text, positive angles are in the counterclockwise direction. If the text is set
		 * to stack vertically, this method returns <code>0</code>.
		 * 
		 * @returns The degrees between standard text rotation and the current text rotation.
		 */
		getDegrees(): number
		/**
		 * Returns <code>true</code> if the text is stacked vertically; returns <code>false</code> otherwise.
		 * 
		 * @returns Whether or not the text is stacked vertically.
		 */
		isVertical(): Boolean

	}

	class TextStyle {
		private constructor();

		/**
		 * Creates a text style builder initialized with the values of this text style.
		 * 
		 * @returns A builder from this text style.
		 */
		copy(): SpreadsheetApp.TextStyleBuilder
		/**
		 * Gets the font family of the text. Returns <code>null</code> if the font family isn't set or the
		 * corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html'>RichTextValue</a></code> has multiple runs with different font
		 * families.
		 * 
		 * @returns The font family of the text (for example, "Arial") or <code>null</code>.
		 */
		getFontFamily(): string
		/**
		 * Gets the font size of the text in points. Returns <code>null</code> if the font size isn't set or
		 * the corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html'>RichTextValue</a></code> has multiple runs with different font
		 * sizes.
		 * 
		 * @returns The font size of the text or <code>null</code>.
		 */
		getFontSize(): number
		/**
		 * Gets the font color of the text. Returns <code>null</code> if the font color isn't set or the
		 * corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html'>RichTextValue</a></code> has multiple runs with different font
		 * colors.
		 * 
		 * @returns The font color of the text as a hex CSS value (for example, "#ff0000") or <code>null</code>.
		 */
		getForegroundColor(): string
		/**
		 * Gets the font color of the text. Returns <code>null</code> if the font color isn't set or the
		 * corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html'>RichTextValue</a></code> has multiple runs with different font
		 * colors.
		 * 
		 * @returns The font color of the text or <code>null</code>.
		 */
		getForegroundColorObject(): SpreadsheetApp.Color
		/**
		 * Gets whether or not the text is bold. Returns <code>null</code> if bold isn't set or the
		 * corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html'>RichTextValue</a></code> has multiple runs with different bold
		 * settings.
		 * 
		 * @returns Whether or not the cell is bold, or <code>null</code>.
		 */
		isBold(): Boolean
		/**
		 * Gets whether or not the cell is italic. Returns <code>null</code> if italic isn't set or the
		 * corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html'>RichTextValue</a></code> has multiple runs with different italic
		 * settings.
		 * 
		 * @returns Whether or not the cell is italic, or <code>null</code>.
		 */
		isItalic(): Boolean
		/**
		 * Gets whether or not the cell has strikethrough. Returns <code>null</code> if strikethrough isn't set
		 * or the corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html'>RichTextValue</a></code> has multiple runs with different
		 * strikethrough settings.
		 * 
		 * @returns Whether or not the cell has strikethrough, or <code>null</code>.
		 */
		isStrikethrough(): Boolean
		/**
		 * Gets whether or not the cell is underlined. Returns <code>null</code> if underline isn't set or the
		 * corresponding <code><a target='_blank' href='https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html'>RichTextValue</a></code> has multiple runs with different underline
		 * settings.
		 * 
		 * @returns Whether or not the cell is underlined, or <code>null</code>.
		 */
		isUnderline(): Boolean

	}

	class TextStyleBuilder {
		private constructor();

		/**
		 * Creates a text style from this builder.
		 * 
		 * @returns A text style created from this builder.
		 */
		build(): SpreadsheetApp.TextStyle
		/**
		 * Sets whether or not the text is bold.
		 * 
		 * @param bold - Whether or not the text is bold.
		 * 
		 * @returns The builder for chaining.
		 */
		setBold(
			bold: Boolean
		): SpreadsheetApp.TextStyleBuilder
		/**
		 * Sets the text font family, such as "Arial".
		 * 
		 * @param fontFamily - The desired font family.
		 * 
		 * @returns The builder for chaining.
		 */
		setFontFamily(
			fontFamily: string
		): SpreadsheetApp.TextStyleBuilder
		/**
		 * Sets the text font size in points.
		 * 
		 * @param fontSize - The desired font size.
		 * 
		 * @returns The builder for chaining.
		 */
		setFontSize(
			fontSize: number
		): SpreadsheetApp.TextStyleBuilder
		/**
		 * Sets the text font color.
		 * 
		 * @param cssString - The desired font color in CSS notation (such as <code>&#39;#ffffff&#39;</code> or <code>&#39;white&#39;</code>).
		 * 
		 * @returns The builder for chaining.
		 */
		setForegroundColor(
			cssString: string
		): SpreadsheetApp.TextStyleBuilder
		/**
		 * Sets the text font color.
		 * 
		 * @param color - The desired font color.
		 * 
		 * @returns The builder for chaining.
		 */
		setForegroundColorObject(
			color: SpreadsheetApp.Color
		): SpreadsheetApp.TextStyleBuilder
		/**
		 * Sets whether or not the text is italic.
		 * 
		 * @param italic - Whether or not the text is italic.
		 * 
		 * @returns The builder for chaining.
		 */
		setItalic(
			italic: Boolean
		): SpreadsheetApp.TextStyleBuilder
		/**
		 * Sets whether or not the text has strikethrough.
		 * 
		 * @param strikethrough - Whether or not the text has strikethrough.
		 * 
		 * @returns The builder for chaining.
		 */
		setStrikethrough(
			strikethrough: Boolean
		): SpreadsheetApp.TextStyleBuilder
		/**
		 * Sets whether or not the text is underlined.
		 * 
		 * @param underline - Whether or not the text is underlined.
		 * 
		 * @returns The builder for chaining.
		 */
		setUnderline(
			underline: Boolean
		): SpreadsheetApp.TextStyleBuilder

	}

	enum TextToColumnsDelimiter {
		/**
		 * <code>&quot;,&quot;</code> delimiter.
		 */
		COMMA = "COMMA",
		/**
		 * <code>&quot;.&quot;</code> delimiter.
		 */
		PERIOD = "PERIOD",
		/**
		 * <code>&quot;;&quot;</code> delimiter.
		 */
		SEMICOLON = "SEMICOLON",
		/**
		 * <code>&quot; &quot;</code> delimiter.
		 */
		SPACE = "SPACE",
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
		 * Gets the theme color type of this color.
		 * 
		 * @returns The theme color type.
		 */
		getThemeColorType(): SpreadsheetApp.ThemeColorType

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
		 * Represents the color to use for chart's background.
		 */
		BACKGROUND = "BACKGROUND",
		/**
		 * Represents the color to use for hyperlinks.
		 */
		HYPERLINK = "HYPERLINK",
		/**
		 * Represents the text color.
		 */
		TEXT = "TEXT",
		/**
		 * Represents a theme color that is not supported.
		 */
		UNSUPPORTED = "UNSUPPORTED",
	}

	enum WrapStrategy {
		/**
		 * Clip lines that are longer than the cell width.
		 */
		CLIP = "CLIP",
		/**
		 * Overflow lines into the next cell, so long as that cell is empty. If the next cell over is
		 * non-empty, this behaves the same as <code>CLIP</code>.
		 */
		OVERFLOW = "OVERFLOW",
		/**
		 * Wrap lines that are longer than the cell width onto a new line. Single words that are longer
		 * than a line are wrapped at the character level.
		 */
		WRAP = "WRAP",
	}

	class Border {
		private constructor();

		/**
		 * Returns the style of this border or <code>null</code> if the border does not contains a border
		 * style.
		 * 
		 * @returns The border style.
		 */
		getBorderStyle(): SpreadsheetApp.BorderStyle
		/**
		 * Returns the color of this border or <code>null</code> if the color is not specified in this border.
		 * 
		 * @returns The border color.
		 */
		getColor(): SpreadsheetApp.Color

	}

	class Borders {
		private constructor();

		/**
		 * Returns the bottom border.
		 * 
		 * @returns The bottom border.
		 */
		getBottom(): SpreadsheetApp.Border
		/**
		 * Returns the left border.
		 * 
		 * @returns The left border.
		 */
		getLeft(): SpreadsheetApp.Border
		/**
		 * Returns the right border.
		 * 
		 * @returns The right border.
		 */
		getRight(): SpreadsheetApp.Border
		/**
		 * Returns the top border.
		 * 
		 * @returns The top border.
		 */
		getTop(): SpreadsheetApp.Border

	}

}
