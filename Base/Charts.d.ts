/** Module: Charts */

type Charts = typeof Charts;
declare namespace Charts {

	/**
	 * Starts building an area chart, as described in the <a
	 * href="https://developers.google.com/chart/interactive/docs/gallery/areachart">Google Chart
	 * Tools</a> documentation.
	 * 
	 * @returns An AreaChartBuilder, which can be used to build an area chart.
	 */
	function newAreaChart(): Charts.AreaChartBuilder
	/**
	 * Starts building a bar chart, as described in the <a
	 * href="https://developers.google.com/chart/interactive/docs/gallery/barchart">Google Chart
	 * Tools</a> documentation.
	 * 
	 * @returns A BarChartBuilder, which can be used to build a bar chart.
	 */
	function newBarChart(): Charts.BarChartBuilder
	/**
	 * Starts building a column chart, as described in the <a
	 * href="https://developers.google.com/chart/interactive/docs/gallery/columnchart">Google Chart
	 * Tools</a> documentation.
	 * 
	 * @returns A ColumnChartBuilder, which can be used to build a column chart.
	 */
	function newColumnChart(): Charts.ColumnChartBuilder
	/**
	 * Creates an empty data table, which can have its values set manually.
	 * 
	 * <p>Data tables hold the data for all chart types.
	 * 
	 * @returns A DataTableBuilder, which can hold data for charts.
	 */
	function newDataTable(): DataTableBuilder
	/**
	 * Creates a new data view definition.
	 * 
	 * <p>Use setters to define the different properties of the data view.
	 * 
	 * @returns A DataViewDefinitionBuilder, which can be used to build a data view definition.
	 */
	function newDataViewDefinition(): Charts.DataViewDefinitionBuilder
	/**
	 * Starts building a line chart, as described in the <a
	 * href="https://developers.google.com/chart/interactive/docs/gallery/linechart">Google Chart
	 * Tools</a> documentation.
	 * 
	 * @returns A LineChartBuilder, which can be used to build a line chart.
	 */
	function newLineChart(): Charts.LineChartBuilder
	/**
	 * Starts building a pie chart, as described in the <a
	 * href="https://developers.google.com/chart/interactive/docs/gallery/piechart">Google Chart
	 * Tools</a> documentation.
	 * 
	 * @returns A PieChartBuilder, which can be used to build a pie chart.
	 */
	function newPieChart(): Charts.PieChartBuilder
	/**
	 * Starts building a scatter chart, as described in the <a
	 * href="https://developers.google.com/chart/interactive/docs/gallery/scatterchart">Google Chart
	 * Tools</a> documentation.
	 * 
	 * @returns A ScatterChartBuilder, which can be used to build a scatter chart.
	 */
	function newScatterChart(): Charts.ScatterChartBuilder
	/**
	 * Starts building a table chart, as described in the <a
	 * href="https://developers.google.com/chart/interactive/docs/gallery/table">Google Chart
	 * Tools</a> documentation.
	 * 
	 * @returns A TableChartBuilder, which can be used to build a table chart.
	 */
	function newTableChart(): Charts.TableChartBuilder
	/**
	 * Creates a new text style builder.
	 * 
	 * <p>To change the default values, use the setter functions.
	 * 
	 * @returns A TextStyleBuilder, which can be used to build a text style configuration object.
	 */
	function newTextStyle(): Charts.TextStyleBuilder

	class AreaChartBuilder {
		private constructor();

		/**
		 * Builds the chart.
		 * 
		 * @returns A Chart object, which can be embedded into documents, UI elements, or used as a static
		 *     image.
		 */
		build(): Charts.Chart
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
		reverseCategories(): Charts.AreaChartBuilder
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
		): Charts.AreaChartBuilder
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
		): Charts.AreaChartBuilder
		/**
		 * Sets the data source URL that is used to pull data in from an external source, such as Google
		 * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
		 * 
		 * <p>For more information about querying data sources, check out the <a
		 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
		 * 
		 * @param url - The data source URL, including any query parameters.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataSourceUrl(
			url: string
		): Charts.AreaChartBuilder
		/**
		 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
		 * for setting the data table without needing to call <code>build()</code>.
		 * 
		 * @param tableBuilder - A data table builder. A new data table is created instantly as part of this
		 *     call, so any further updates to the builder won't be reflected in the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataTable(
			tableBuilder: DataTableBuilder
		): Charts.AreaChartBuilder
		/**
		 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
		 * first column should be a string, and contain the horizontal axis labels. Any number of columns
		 * can follow, all must be numeric. Each column is displayed as a separate line.
		 * 
		 * @param table - The data table to use for the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataTable(
			table: DataTableSource
		): Charts.AreaChartBuilder

		/**
		 * Sets the data view definition to use for the chart.
		 * 
		 * @param dataViewDefinition - A data view definition object that defines the view that should be
		 *     derived from the given data source for the chart drawing.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataViewDefinition(
			dataViewDefinition: Charts.DataViewDefinition
		): Charts.AreaChartBuilder
		/**
		 * Sets the dimensions for the chart.
		 * 
		 * @param width - The width of the chart, in pixels.
		 * @param height - The height of the chart, in pixels.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDimensions(
			width: number,
			height: number
		): Charts.AreaChartBuilder
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
		): Charts.AreaChartBuilder
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
		): Charts.AreaChartBuilder
		/**
		 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/areachart">the available options for
		 * this chart</a>. This method has no effect if the given option is invalid.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Build an area chart with a 1-second animation duration.
		 * var builder = Charts.newAreaChart();
		 * builder.setOption(&#39;animation.duration&#39;, 1000);
		 * var chart = builder.build();
		 * </code></pre>
		 * 
		 * @param option - The option to set.
		 * @param value - The value to set.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setOption(
			option: string,
			value: object
		): Charts.AreaChartBuilder
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
		): Charts.AreaChartBuilder
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
		): Charts.AreaChartBuilder
		/**
		 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
		 * there is no stacking.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setStacked(): Charts.AreaChartBuilder
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
		): Charts.AreaChartBuilder
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
		 * @param textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitleTextStyle(
			textStyle: Charts.TextStyle
		): Charts.AreaChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTextStyle(
			textStyle: Charts.TextStyle
		): Charts.AreaChartBuilder
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
		): Charts.AreaChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): Charts.AreaChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTextStyle(
			textStyle: Charts.TextStyle
		): Charts.AreaChartBuilder
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
		): Charts.AreaChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): Charts.AreaChartBuilder
		/**
		 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
		 * axis are the vertical axis for vertical charts (such as line, area, or column) and the
		 * horizontal axis for horizontal charts (such as bar).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		useLogScale(): Charts.AreaChartBuilder

	}

	class BarChartBuilder {
		private constructor();

		/**
		 * Builds the chart.
		 * 
		 * @returns A Chart object, which can be embedded into documents, UI elements, or used as a static
		 *     image.
		 */
		build(): Charts.Chart
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
		reverseCategories(): Charts.BarChartBuilder
		/**
		 * Reverses the direction in which the bars grow along the horizontal axis. By default, values
		 * grow from left to right. Calling this method causes them to grow from right to left.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		reverseDirection(): Charts.BarChartBuilder
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
		): Charts.BarChartBuilder
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
		): Charts.BarChartBuilder
		/**
		 * Sets the data source URL that is used to pull data in from an external source, such as Google
		 * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
		 * 
		 * <p>For more information about querying data sources, check out the <a
		 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
		 * 
		 * @param url - The data source URL, including any query parameters.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataSourceUrl(
			url: string
		): Charts.BarChartBuilder
		/**
		 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
		 * for setting the data table without needing to call <code>build()</code>.
		 * 
		 * @param tableBuilder - A data table builder. A new data table is created instantly as part of this
		 *     call, so any further updates to the builder won't be reflected in the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataTable(
			tableBuilder: DataTableBuilder
		): Charts.BarChartBuilder
		/**
		 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
		 * first column should be a string, and contain the horizontal axis labels. Any number of columns
		 * can follow, all must be numeric. Each column is displayed as a separate line.
		 * 
		 * @param table - The data table to use for the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataTable(
			table: DataTableSource
		): Charts.BarChartBuilder

		/**
		 * Sets the data view definition to use for the chart.
		 * 
		 * @param dataViewDefinition - A data view definition object that defines the view that should be
		 *     derived from the given data source for the chart drawing.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataViewDefinition(
			dataViewDefinition: Charts.DataViewDefinition
		): Charts.BarChartBuilder
		/**
		 * Sets the dimensions for the chart.
		 * 
		 * @param width - The width of the chart, in pixels.
		 * @param height - The height of the chart, in pixels.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDimensions(
			width: number,
			height: number
		): Charts.BarChartBuilder
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
		): Charts.BarChartBuilder
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
		): Charts.BarChartBuilder
		/**
		 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/barchart">the available options for
		 * this chart</a>. This method has no effect if the given option is invalid.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Build a bar chart with a 1-second animation duration.
		 * var builder = Charts.newBarChart();
		 * builder.setOption(&#39;animation.duration&#39;, 1000);
		 * var chart = builder.build();
		 * </code></pre>
		 * 
		 * @param option - The option to set.
		 * @param value - The value to set.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setOption(
			option: string,
			value: object
		): Charts.BarChartBuilder
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
		): Charts.BarChartBuilder
		/**
		 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
		 * there is no stacking.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setStacked(): Charts.BarChartBuilder
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
		): Charts.BarChartBuilder
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
		 * @param textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitleTextStyle(
			textStyle: Charts.TextStyle
		): Charts.BarChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTextStyle(
			textStyle: Charts.TextStyle
		): Charts.BarChartBuilder
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
		): Charts.BarChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): Charts.BarChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTextStyle(
			textStyle: Charts.TextStyle
		): Charts.BarChartBuilder
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
		): Charts.BarChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): Charts.BarChartBuilder
		/**
		 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
		 * axis are the vertical axis for vertical charts (such as line, area, or column) and the
		 * horizontal axis for horizontal charts (such as bar).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		useLogScale(): Charts.BarChartBuilder

	}

	class Chart {
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
		 * Returns the options for this chart, such as height, colors, and axes.
		 * 
		 * <p>The returned options are immutable.
		 * 
		 * @returns The options for this chart, such as height, colors, and axes.
		 */
		getOptions(): Charts.ChartOptions

	}

	enum ChartHiddenDimensionStrategy {
		/**
		 * Default; charts skips any hidden columns and hidden rows.
		 */
		IGNORE_BOTH = "IGNORE_BOTH",
		/**
		 * Charts skips hidden columns only.
		 */
		IGNORE_COLUMNS = "IGNORE_COLUMNS",
		/**
		 * Charts skips hidden rows only.
		 */
		IGNORE_ROWS = "IGNORE_ROWS",
		/**
		 * Charts does not skip hidden columns or hidden rows.
		 */
		SHOW_BOTH = "SHOW_BOTH",
	}

	enum ChartMergeStrategy {
		/**
		 * Default. Charts merges the columns of multiple ranges.
		 */
		MERGE_COLUMNS = "MERGE_COLUMNS",
		/**
		 * Charts merges the rows of multiple ranges.
		 */
		MERGE_ROWS = "MERGE_ROWS",
	}

	class ChartOptions {
		private constructor();

		/**
		 * Returns a configured option for this chart.
		 * 
		 * @param option - The string representing the desired option.
		 * 
		 * @returns The value currently set for the specified option or <code>null</code> if the option was not
		 *     set.
		 */
		get(
			option: string
		): object
		/**
		 * Returns a configured option for this chart. If the chart option is not set, returns the default
		 * value of this option if available, or returns <code>null</code> if the default value is not
		 * available.
		 * 
		 * @param option - The string representing the desired option.
		 * 
		 * @returns The value currently set for the specified option. If the option was not set and the
		 *     default value is available, returns the default value.
		 */
		getOrDefault(
			option: string
		): object

	}

	enum ChartType {
		/**
		 * Area chart
		 */
		AREA = "AREA",
		/**
		 * Bar chart
		 */
		BAR = "BAR",
		/**
		 * Bubble chart.
		 */
		BUBBLE = "BUBBLE",
		/**
		 * Candlestick chart.
		 */
		CANDLESTICK = "CANDLESTICK",
		/**
		 * Column chart
		 */
		COLUMN = "COLUMN",
		/**
		 * Combo chart
		 */
		COMBO = "COMBO",
		/**
		 * Gauge chart.
		 */
		GAUGE = "GAUGE",
		/**
		 * Geo chart.
		 */
		GEO = "GEO",
		/**
		 * Histogram
		 */
		HISTOGRAM = "HISTOGRAM",
		/**
		 * Line chart
		 */
		LINE = "LINE",
		/**
		 * Org chart.
		 */
		ORG = "ORG",
		/**
		 * Pie chart
		 */
		PIE = "PIE",
		/**
		 * Radar chart.
		 */
		RADAR = "RADAR",
		/**
		 * Scatter chart
		 */
		SCATTER = "SCATTER",
		/**
		 * Sparkline chart.
		 */
		SPARKLINE = "SPARKLINE",
		/**
		 * Stepped area chart.
		 */
		STEPPED_AREA = "STEPPED_AREA",
		/**
		 * Table chart
		 */
		TABLE = "TABLE",
		/**
		 * Timeline chart.
		 */
		TIMELINE = "TIMELINE",
		/**
		 * Treemap chart.
		 */
		TREEMAP = "TREEMAP",
		/**
		 * Waterfall chart.
		 */
		WATERFALL = "WATERFALL",
	}

	class ColumnChartBuilder {
		private constructor();

		/**
		 * Builds the chart.
		 * 
		 * @returns A Chart object, which can be embedded into documents, UI elements, or used as a static
		 *     image.
		 */
		build(): Charts.Chart
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
		reverseCategories(): Charts.ColumnChartBuilder
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
		): Charts.ColumnChartBuilder
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
		): Charts.ColumnChartBuilder
		/**
		 * Sets the data source URL that is used to pull data in from an external source, such as Google
		 * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
		 * 
		 * <p>For more information about querying data sources, check out the <a
		 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
		 * 
		 * @param url - The data source URL, including any query parameters.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataSourceUrl(
			url: string
		): Charts.ColumnChartBuilder
		/**
		 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
		 * for setting the data table without needing to call <code>build()</code>.
		 * 
		 * @param tableBuilder - A data table builder. A new data table is created instantly as part of this
		 *     call, so any further updates to the builder won't be reflected in the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataTable(
			tableBuilder: DataTableBuilder
		): Charts.ColumnChartBuilder
		/**
		 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
		 * first column should be a string, and contain the horizontal axis labels. Any number of columns
		 * can follow, all must be numeric. Each column is displayed as a separate line.
		 * 
		 * @param table - The data table to use for the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataTable(
			table: DataTableSource
		): Charts.ColumnChartBuilder

		/**
		 * Sets the data view definition to use for the chart.
		 * 
		 * @param dataViewDefinition - A data view definition object that defines the view that should be
		 *     derived from the given data source for the chart drawing.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataViewDefinition(
			dataViewDefinition: Charts.DataViewDefinition
		): Charts.ColumnChartBuilder
		/**
		 * Sets the dimensions for the chart.
		 * 
		 * @param width - The width of the chart, in pixels.
		 * @param height - The height of the chart, in pixels.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDimensions(
			width: number,
			height: number
		): Charts.ColumnChartBuilder
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
		): Charts.ColumnChartBuilder
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
		): Charts.ColumnChartBuilder
		/**
		 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/columnchart">the available options for
		 * this chart</a>. This method has no effect if the given option is invalid.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Build a column chart with a 1-second animation duration.
		 * var builder = Charts.newColumnChart();
		 * builder.setOption(&#39;animation.duration&#39;, 1000);
		 * var chart = builder.build();
		 * </code></pre>
		 * 
		 * @param option - The option to set.
		 * @param value - The value to set.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setOption(
			option: string,
			value: object
		): Charts.ColumnChartBuilder
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
		): Charts.ColumnChartBuilder
		/**
		 * Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
		 * there is no stacking.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setStacked(): Charts.ColumnChartBuilder
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
		): Charts.ColumnChartBuilder
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
		 * @param textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitleTextStyle(
			textStyle: Charts.TextStyle
		): Charts.ColumnChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTextStyle(
			textStyle: Charts.TextStyle
		): Charts.ColumnChartBuilder
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
		): Charts.ColumnChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): Charts.ColumnChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTextStyle(
			textStyle: Charts.TextStyle
		): Charts.ColumnChartBuilder
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
		): Charts.ColumnChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): Charts.ColumnChartBuilder
		/**
		 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
		 * axis are the vertical axis for vertical charts (such as line, area, or column) and the
		 * horizontal axis for horizontal charts (such as bar).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		useLogScale(): Charts.ColumnChartBuilder

	}

	enum CurveStyle {
		/**
		 * Straight lines without curve.
		 */
		NORMAL = "NORMAL",
		/**
		 * The angles of the line are smoothed.
		 */
		SMOOTH = "SMOOTH",
	}

	class DataViewDefinition {
		private constructor();

	}

	class DataViewDefinitionBuilder {
		private constructor();

		/**
		 * Builds and returns the data view definition object that was built using this builder.
		 * 
		 * @returns A data view definition object that was built using this builder.
		 */
		build(): Charts.DataViewDefinition
		/**
		 * Sets the indexes of the columns to include in the data view as well as specifying role-column
		 * information. This subset of column indexes refer to the columns of the data source that the
		 * data view is derived from.
		 * 
		 * <p>A column role describes the purpose of the data in that column: for example, a column might
		 * hold data describing tooltip text, data point annotations, or uncertainty indicators. For more
		 * details, see <a href="/chart/interactive/docs/roles">DataTable Roles</a> in the Google Charts
		 * documentation.
		 * 
		 * <p>Assuming a spreadsheet with the following data in A1:C3:
		 * 
		 * <pre class="prettyprint"><code>
		 * &quot;abc&quot;, 20, &quot;blue&quot;
		 * &quot;def&quot;, 30, &quot;red&quot;
		 * &quot;ghi&quot;, 40, &quot;orange&quot;
		 * </code></pre>
		 * 
		 * The following code creates a bar chart where each bar is a different color. The colors are
		 * assigned via a style "role column".
		 * 
		 * <pre class="prettyprint"><code>
		 * var COLUMN_SPEC = [
		 *   0, // categories
		 *   1, // counts
		 *   {sourceColumn: 2, role: &#39;style&#39;}
		 * ];
		 * 
		 * function roleColumnChart() {
		 *   var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
		 *   var sheet = spreadsheet.getActiveSheet();
		 *   var viewSpec = Charts.newDataViewDefinition()
		 *       .setColumns(COLUMN_SPEC)
		 *       .build();
		 *   var chartBuilder = sheet.newChart()
		 *       .setChartType(Charts.ChartType.BAR)
		 *       .setDataViewDefinition(viewSpec)
		 *       .setOption(&#39;useFirstColumnAsDomain&#39;, true)
		 *       .setPosition(5, 1, 0, 0)
		 *       .setOption(&#39;hAxis&#39;, { title: &#39;Counts&#39; })
		 *       .setOption(&#39;vAxis&#39;, { title: &#39;Categories&#39; })
		 *       .addRange(sheet.getRange(&#39;A1:C3&#39;));
		 *   sheet.insertChart(chartBuilder.build());
		 * };
		 * </code></pre>
		 * 
		 * @param columns - An array of column indexes, or column descriptions (an object), to include in
		 *     the data view. The column descriptions define a column role. The data table and the
		 *     enumeration for data view columns are zero-based.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setColumns(
			columns: object[]
		): Charts.DataViewDefinitionBuilder

	}

	class LineChartBuilder {
		private constructor();

		/**
		 * Builds the chart.
		 * 
		 * @returns A Chart object, which can be embedded into documents, UI elements, or used as a static
		 *     image.
		 */
		build(): Charts.Chart
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
		reverseCategories(): Charts.LineChartBuilder
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
		): Charts.LineChartBuilder
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
		): Charts.LineChartBuilder
		/**
		 * Sets the style to use for curves in the chart. See <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/curve-style.html'>CurveStyle</a></code> for allowed curve
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
		): Charts.LineChartBuilder
		/**
		 * Sets the data source URL that is used to pull data in from an external source, such as Google
		 * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
		 * 
		 * <p>For more information about querying data sources, check out the <a
		 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
		 * 
		 * @param url - The data source URL, including any query parameters.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataSourceUrl(
			url: string
		): Charts.LineChartBuilder
		/**
		 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
		 * for setting the data table without needing to call <code>build()</code>.
		 * 
		 * @param tableBuilder - A data table builder. A new data table is created instantly as part of this
		 *     call, so any further updates to the builder won't be reflected in the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataTable(
			tableBuilder: DataTableBuilder
		): Charts.LineChartBuilder
		/**
		 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
		 * first column should be a string, and contain the horizontal axis labels. Any number of columns
		 * can follow, all must be numeric. Each column is displayed as a separate line.
		 * 
		 * @param table - The data table to use for the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataTable(
			table: DataTableSource
		): Charts.LineChartBuilder

		/**
		 * Sets the data view definition to use for the chart.
		 * 
		 * @param dataViewDefinition - A data view definition object that defines the view that should be
		 *     derived from the given data source for the chart drawing.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataViewDefinition(
			dataViewDefinition: Charts.DataViewDefinition
		): Charts.LineChartBuilder
		/**
		 * Sets the dimensions for the chart.
		 * 
		 * @param width - The width of the chart, in pixels.
		 * @param height - The height of the chart, in pixels.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDimensions(
			width: number,
			height: number
		): Charts.LineChartBuilder
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
		): Charts.LineChartBuilder
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
		): Charts.LineChartBuilder
		/**
		 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/linechart">the available options for
		 * this chart</a>. This method has no effect if the given option is invalid.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Build a line chart with a 1-second animation duration.
		 * var builder = Charts.newLineChart();
		 * builder.setOption(&#39;animation.duration&#39;, 1000);
		 * var chart = builder.build();
		 * </code></pre>
		 * 
		 * @param option - The option to set.
		 * @param value - The value to set.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setOption(
			option: string,
			value: object
		): Charts.LineChartBuilder
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
		): Charts.LineChartBuilder
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
		): Charts.LineChartBuilder
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
		): Charts.LineChartBuilder
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
		 * @param textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitleTextStyle(
			textStyle: Charts.TextStyle
		): Charts.LineChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTextStyle(
			textStyle: Charts.TextStyle
		): Charts.LineChartBuilder
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
		): Charts.LineChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): Charts.LineChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTextStyle(
			textStyle: Charts.TextStyle
		): Charts.LineChartBuilder
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
		): Charts.LineChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): Charts.LineChartBuilder
		/**
		 * Makes the range axis into a logarithmic scale (requires all values to be positive). The range
		 * axis are the vertical axis for vertical charts (such as line, area, or column) and the
		 * horizontal axis for horizontal charts (such as bar).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		useLogScale(): Charts.LineChartBuilder

	}

	class MatchType {
		private constructor();

		/**
		 * Match any substring
		 */
		static ANY: Charts.MatchType;
		/**
		 * Match exact values only
		 */
		static EXACT: Charts.MatchType;
		/**
		 * Match prefixes starting from the beginning of the value
		 */
		static PREFIX: Charts.MatchType;

		/**
		 * Returns the name of the match type to be used in the options JSON.
		 * 
		 * @returns The name of the type.
		 */
		getName(): string

	}

	class NumberRangeFilterBuilder {
		private constructor();

		/**
		 * Sets the maximum allowed value for the range lower extent. If undefined, the value is inferred
		 * from the contents of the DataTable managed by the control.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Builds a number range filter and sets the maximum value to 100.
		 * var numberRangeFilter = Charts.newNumberRangeFilter()
		 *   .setFilterColumnLabel(&quot;Col2&quot;)
		 *   .setMaxValue(100)
		 *   .build();
		 * </code></pre>
		 * 
		 * @param maxValue - The maximum value of the slider.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setMaxValue(
			maxValue: number
		): Charts.NumberRangeFilterBuilder
		/**
		 * Sets the minimum allowed value for the range lower extent. If undefined, the value is inferred
		 * from the contents of the DataTable managed by the control.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Builds a number range filter and sets the minimum value to 10.
		 * var numberRangeFilter = Charts.newNumberRangeFilter()
		 *   .setFilterColumnLabel(&quot;Col2&quot;)
		 *   .setMinValue(10)
		 *   .build();
		 * </code></pre>
		 * 
		 * @param minValue - The minimum value of the slider.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setMinValue(
			minValue: number
		): Charts.NumberRangeFilterBuilder
		/**
		 * Sets the slider orientation.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Builds a number range filter and sets it to have a horizontal orientation.
		 * var numberRangeFilter = Charts.newNumberRangeFilter()
		 *   .setFilterColumnLabel(&quot;Col2&quot;)
		 *   .setOrientation(Charts.Orientation.HORIZONTAL)
		 *   .build();
		 * </code></pre>
		 * 
		 * @param orientation - The slider orientation to set.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setOrientation(
			orientation: Charts.Orientation
		): Charts.NumberRangeFilterBuilder
		/**
		 * Sets whether to have labels next to the slider displaying extents of the selected range.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Builds a number range filter and enables showing of the number range values.
		 * var numberRangeFilter = Charts.newNumberRangeFilter()
		 *   .setFilterColumnLabel(&quot;Col2&quot;)
		 *   .setShowRangeValues(true)
		 *   .build();
		 * </code></pre>
		 * 
		 * @param showRangeValues - If <code>true</code>, enables showing of labels next to the slider.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setShowRangeValues(
			showRangeValues: Boolean
		): Charts.NumberRangeFilterBuilder
		/**
		 * Sets the number of ticks (fixed positions in a range bar) a number range filter slider thumbs
		 * can fall in.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Builds a number range filter and sets the number of ticks for the range to 10.
		 * var numberRangeFilter = Charts.newNumberRangeFilter()
		 *   .setFilterColumnLabel(&quot;Col2&quot;)
		 *   .setTicks(10)
		 *   .build();
		 * </code></pre>
		 * 
		 * @param ticks - The number of ticks on the slider.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTicks(
			ticks: number
		): Charts.NumberRangeFilterBuilder

	}

	enum Orientation {
		/**
		 * Horizontal orientation.
		 */
		HORIZONTAL = "HORIZONTAL",
		/**
		 * Vertical orientation.
		 */
		VERTICAL = "VERTICAL",
	}

	enum PickerValuesLayout {
		/**
		 * Selected values display in a single text line next to the value picker widget.
		 */
		ASIDE = "ASIDE",
		/**
		 * Selected values display in a single text line below the widget.
		 */
		BELOW = "BELOW",
		/**
		 * Selected values display in a column below the widget.
		 */
		BELOW_STACKED = "BELOW_STACKED",
		/**
		 * Similar to below, but entries that cannot fit in the picker wrap to a new line.
		 */
		BELOW_WRAPPING = "BELOW_WRAPPING",
	}

	class PieChartBuilder {
		private constructor();

		/**
		 * Builds the chart.
		 * 
		 * @returns A Chart object, which can be embedded into documents, UI elements, or used as a static
		 *     image.
		 */
		build(): Charts.Chart
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
		reverseCategories(): Charts.PieChartBuilder
		/**
		 * Sets the chart to be three-dimensional.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		set3D(): Charts.PieChartBuilder
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
		): Charts.PieChartBuilder
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
		): Charts.PieChartBuilder
		/**
		 * Sets the data source URL that is used to pull data in from an external source, such as Google
		 * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
		 * 
		 * <p>For more information about querying data sources, check out the <a
		 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
		 * 
		 * @param url - The data source URL, including any query parameters.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataSourceUrl(
			url: string
		): Charts.PieChartBuilder
		/**
		 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
		 * for setting the data table without needing to call <code>build()</code>.
		 * 
		 * @param tableBuilder - A data table builder. A new data table is created instantly as part of this
		 *     call, so any further updates to the builder won't be reflected in the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataTable(
			tableBuilder: DataTableBuilder
		): Charts.PieChartBuilder
		/**
		 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
		 * first column should be a string, and contain the horizontal axis labels. Any number of columns
		 * can follow, all must be numeric. Each column is displayed as a separate line.
		 * 
		 * @param table - The data table to use for the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataTable(
			table: DataTableSource
		): Charts.PieChartBuilder

		/**
		 * Sets the data view definition to use for the chart.
		 * 
		 * @param dataViewDefinition - A data view definition object that defines the view that should be
		 *     derived from the given data source for the chart drawing.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataViewDefinition(
			dataViewDefinition: Charts.DataViewDefinition
		): Charts.PieChartBuilder
		/**
		 * Sets the dimensions for the chart.
		 * 
		 * @param width - The width of the chart, in pixels.
		 * @param height - The height of the chart, in pixels.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDimensions(
			width: number,
			height: number
		): Charts.PieChartBuilder
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
		): Charts.PieChartBuilder
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
		): Charts.PieChartBuilder
		/**
		 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/piechart">the available options for
		 * this chart</a>. This method has no effect if the given option is invalid.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Build a pie chart with a pretty legend.
		 * var builder = Charts.newPieChart();
		 * builder.setOption(&#39;legend&#39;, {textStyle: {color: &#39;blue&#39;, fontSize: 16}});
		 * var chart = builder.build();
		 * </code></pre>
		 * 
		 * @param option - The option to set.
		 * @param value - The value to set.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setOption(
			option: string,
			value: object
		): Charts.PieChartBuilder
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
		): Charts.PieChartBuilder
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
		 * @param textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitleTextStyle(
			textStyle: Charts.TextStyle
		): Charts.PieChartBuilder

	}

	enum PointStyle {
		/**
		 * Use largest sized line points.
		 */
		HUGE = "HUGE",
		/**
		 * Use large sized line points.
		 */
		LARGE = "LARGE",
		/**
		 * Use medium sized line points.
		 */
		MEDIUM = "MEDIUM",
		/**
		 * Do not display line points.
		 */
		NONE = "NONE",
		/**
		 * Use tiny line points.
		 */
		TINY = "TINY",
	}

	enum Position {
		/**
		 * Below the chart.
		 */
		BOTTOM = "BOTTOM",
		/**
		 * No legend is displayed.
		 */
		NONE = "NONE",
		/**
		 * To the right of the chart.
		 */
		RIGHT = "RIGHT",
		/**
		 * Above the chart.
		 */
		TOP = "TOP",
	}

	class ScatterChartBuilder {
		private constructor();

		/**
		 * Builds the chart.
		 * 
		 * @returns A Chart object, which can be embedded into documents, UI elements, or used as a static
		 *     image.
		 */
		build(): Charts.Chart
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
		): Charts.ScatterChartBuilder
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
		): Charts.ScatterChartBuilder
		/**
		 * Sets the data source URL that is used to pull data in from an external source, such as Google
		 * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
		 * 
		 * <p>For more information about querying data sources, check out the <a
		 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
		 * 
		 * @param url - The data source URL, including any query parameters.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataSourceUrl(
			url: string
		): Charts.ScatterChartBuilder
		/**
		 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
		 * for setting the data table without needing to call <code>build()</code>.
		 * 
		 * @param tableBuilder - A data table builder. A new data table is created instantly as part of this
		 *     call, so any further updates to the builder won't be reflected in the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataTable(
			tableBuilder: DataTableBuilder
		): Charts.ScatterChartBuilder
		/**
		 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
		 * first column should be a string, and contain the horizontal axis labels. Any number of columns
		 * can follow, all must be numeric. Each column is displayed as a separate line.
		 * 
		 * @param table - The data table to use for the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataTable(
			table: DataTableSource
		): Charts.ScatterChartBuilder

		/**
		 * Sets the data view definition to use for the chart.
		 * 
		 * @param dataViewDefinition - A data view definition object that defines the view that should be
		 *     derived from the given data source for the chart drawing.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataViewDefinition(
			dataViewDefinition: Charts.DataViewDefinition
		): Charts.ScatterChartBuilder
		/**
		 * Sets the dimensions for the chart.
		 * 
		 * @param width - The width of the chart, in pixels.
		 * @param height - The height of the chart, in pixels.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDimensions(
			width: number,
			height: number
		): Charts.ScatterChartBuilder
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
		): Charts.ScatterChartBuilder
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
		): Charts.ScatterChartBuilder
		/**
		 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/scatterchart">the available options for
		 * this chart</a>. This method has no effect if the given option is invalid.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Build a scatter chart with a 1-second animation duration.
		 * var builder = Charts.newScatterChart();
		 * builder.setOption(&#39;animation.duration&#39;, 1000);
		 * var chart = builder.build();
		 * </code></pre>
		 * 
		 * @param option - The option to set.
		 * @param value - The value to set.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setOption(
			option: string,
			value: object
		): Charts.ScatterChartBuilder
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
		): Charts.ScatterChartBuilder
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
		): Charts.ScatterChartBuilder
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
		 * @param textStyle - The text style to use for the chart title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setTitleTextStyle(
			textStyle: Charts.TextStyle
		): Charts.ScatterChartBuilder
		/**
		 * Makes the horizontal axis into a logarithmic scale (requires all values to be positive).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisLogScale(): Charts.ScatterChartBuilder
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
		): Charts.ScatterChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTextStyle(
			textStyle: Charts.TextStyle
		): Charts.ScatterChartBuilder
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
		): Charts.ScatterChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setXAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): Charts.ScatterChartBuilder
		/**
		 * Makes the vertical axis into a logarithmic scale (requires all values to be positive).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisLogScale(): Charts.ScatterChartBuilder
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
		): Charts.ScatterChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTextStyle(
			textStyle: Charts.TextStyle
		): Charts.ScatterChartBuilder
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
		): Charts.ScatterChartBuilder
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
		 * @param textStyle - The text style to use for the horizontal axis title. You can create a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/text-style-builder.html'>TextStyleBuilder</a></code> object by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()'>Charts.newTextStyle()</a></code>.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setYAxisTitleTextStyle(
			textStyle: Charts.TextStyle
		): Charts.ScatterChartBuilder

	}

	class StringFilterBuilder {
		private constructor();

		/**
		 * Sets whether matching should be case sensitive or not.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Builds a case insensitive string filter to filter column &quot;Col1&quot;.
		 * var stringFilter = Charts.newStringFilter()
		 *   .setFilterColumnLabel(&quot;Col1&quot;)
		 *   .setCaseSensitive(false)
		 *   .build();
		 * </code></pre>
		 * 
		 * @param caseSensitive - If <code>true</code>, enables string matching case sensitivity.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setCaseSensitive(
			caseSensitive: Boolean
		): Charts.StringFilterBuilder
		/**
		 * Sets whether the control should match exact values only (<code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/match-type.html#EXACT'>MatchType.EXACT</a></code>), prefixes
		 * starting from the beginning of the value (<code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/match-type.html#PREFIX'>MatchType.PREFIX</a></code>), or any substring
		 * (<code><a target='_blank' href='https://developers.google.com/apps-script/reference/charts/match-type.html#ANY'>MatchType.ANY</a></code>).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Builds a string filter to filter column &quot;Col1&quot; matching the prefix.
		 * var stringFilter = Charts.newStringFilter()
		 *   .setFilterColumnLabel(&quot;Col1&quot;)
		 *   .setMatchType(Charts.MatchType.PREFIX)
		 *   .build();
		 * </code></pre>
		 * 
		 * @param matchType - The string matching type.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setMatchType(
			matchType: Charts.MatchType
		): Charts.StringFilterBuilder
		/**
		 * Sets whether the control should match any time a key is pressed or only when the input field
		 * 'changes' (loss of focus or pressing the Enter key).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Builds a string filter to filter column &quot;Col1&quot; that checks the match any time a key is
		 * // pressed.
		 * var stringFilter = Charts.newStringFilter()
		 *   .setFilterColumnLabel(&quot;Col1&quot;)
		 *   .setRealtimeTrigger(true)
		 *   .build();
		 * </code></pre>
		 * 
		 * @param realtimeTrigger - If <code>true</code>, sets events to be triggered at real time (when a key is
		 *     pressed).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setRealtimeTrigger(
			realtimeTrigger: Boolean
		): Charts.StringFilterBuilder

	}

	class TableChartBuilder {
		private constructor();

		/**
		 * Builds the chart.
		 * 
		 * @returns A Chart object, which can be embedded into documents, UI elements, or used as a static
		 *     image.
		 */
		build(): Charts.Chart
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
		): Charts.TableChartBuilder
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
		): Charts.TableChartBuilder
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
		): Charts.TableChartBuilder

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
		): Charts.TableChartBuilder
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
		): Charts.TableChartBuilder
		/**
		 * Sets the data source URL that is used to pull data in from an external source, such as Google
		 * Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.
		 * 
		 * <p>For more information about querying data sources, check out the <a
		 * href="/chart/interactive/docs/queries">Google Charts documentation</a>.
		 * 
		 * @param url - The data source URL, including any query parameters.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataSourceUrl(
			url: string
		): Charts.TableChartBuilder
		/**
		 * Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
		 * for setting the data table without needing to call <code>build()</code>.
		 * 
		 * @param tableBuilder - A data table builder. A new data table is created instantly as part of this
		 *     call, so any further updates to the builder won't be reflected in the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataTable(
			tableBuilder: DataTableBuilder
		): Charts.TableChartBuilder
		/**
		 * Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
		 * first column should be a string, and contain the horizontal axis labels. Any number of columns
		 * can follow, all must be numeric. Each column is displayed as a separate line.
		 * 
		 * @param table - The data table to use for the chart.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataTable(
			table: DataTableSource
		): Charts.TableChartBuilder

		/**
		 * Sets the data view definition to use for the chart.
		 * 
		 * @param dataViewDefinition - A data view definition object that defines the view that should be
		 *     derived from the given data source for the chart drawing.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDataViewDefinition(
			dataViewDefinition: Charts.DataViewDefinition
		): Charts.TableChartBuilder
		/**
		 * Sets the dimensions for the chart.
		 * 
		 * @param width - The width of the chart, in pixels.
		 * @param height - The height of the chart, in pixels.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setDimensions(
			width: number,
			height: number
		): Charts.TableChartBuilder
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
		): Charts.TableChartBuilder
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
		): Charts.TableChartBuilder
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
		): Charts.TableChartBuilder
		/**
		 * Sets advanced options for this chart. See <a href="/chart/interactive/docs/gallery/table">the available options for
		 * this chart</a>. This method has no effect if the given option is invalid.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Build a table chart which renders HTML.
		 * var builder = Charts.newTableChart();
		 * builder.setOption(&#39;allowHtml&#39;, {@code true});
		 * var chart = builder.build();
		 * </code></pre>
		 * 
		 * @param option - The option to set.
		 * @param value - The value to set.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setOption(
			option: string,
			value: object
		): Charts.TableChartBuilder
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
		): Charts.TableChartBuilder
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
		): Charts.TableChartBuilder

	}

	class TextStyle {
		private constructor();

		/**
		 * Gets the color of the text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a new text style that uses blue text and logs the color.
		 * var textStyle = Charts.newTextStyle().setColor(&#39;blue&#39;).build();
		 * Logger.log(textStyle.getColor());
		 * </code></pre>
		 * 
		 * @returns The CSS value for the color (such as <code>&quot;blue&quot;</code> or <code>&quot;#00f&quot;</code>).
		 */
		getColor(): string
		/**
		 * Gets the font name of the text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a new text style that uses Ariel font and logs the font name.
		 * var textStyle = Charts.newTextStyle().setFontName(&#39;Ariel&#39;).build();
		 * Logger.log(textStyle.getFontName());
		 * </code></pre>
		 * 
		 * @returns The font name.
		 */
		getFontName(): string
		/**
		 * Gets the font size of the text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a new text style that uses 18 pixel font size and logs the font size.
		 * var textStyle = Charts.newTextStyle().setFontSize(18).build();
		 * Logger.log(textStyle.getFontSize());
		 * </code></pre>
		 * 
		 * @returns The font size in pixels.
		 */
		getFontSize(): Number

	}

	class TextStyleBuilder {
		private constructor();

		/**
		 * Builds and returns a text style configuration object that was built using this builder.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a new text style that uses 26-point blue font.
		 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;).setFontSize(26);
		 * var style = textStyleBuilder.build();
		 * </code></pre>
		 * 
		 * @returns A text style object built using this builder.
		 */
		build(): Charts.TextStyle
		/**
		 * Sets the color of the text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a new text style that uses blue font.
		 * var textStyleBuilder = Charts.newTextStyle().setColor(&#39;#0000FF&#39;);
		 * var style = textStyleBuilder.build();
		 * </code></pre>
		 * 
		 * @param cssValue - The CSS value for the color (such as <code>&quot;blue&quot;</code> or <code>&quot;#00f&quot;</code>).
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setColor(
			cssValue: string
		): Charts.TextStyleBuilder
		/**
		 * Sets the font name of the text style
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a new text style that uses Ariel font.
		 * var textStyleBuilder = Charts.newTextStyle().setFontName(&#39;Ariel&#39;);
		 * var style = textStyleBuilder.build();
		 * </code></pre>
		 * 
		 * @param fontName - The font name to use for the text style.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setFontName(
			fontName: string
		): Charts.TextStyleBuilder
		/**
		 * Sets the font size of the text style.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a new text style that uses 26-point font.
		 * var textStyleBuilder = Charts.newTextStyle().setFontSize(26);
		 * var style = textStyleBuilder.build();
		 * </code></pre>
		 * 
		 * @param fontSize - The font size in pixels to use for the text style.
		 * 
		 * @returns This builder, useful for chaining.
		 */
		setFontSize(
			fontSize: Number
		): Charts.TextStyleBuilder

	}

}
