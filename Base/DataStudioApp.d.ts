/** Module: DataStudioApp */

type DataStudioApp = typeof DataStudioApp;
declare namespace DataStudioApp {
	/**
	 * Creates a new Community Connector.
	 * 
	 * @returns A new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/community-connector.html'>CommunityConnector</a></code> object.
	 */
	function createCommunityConnector(): DataStudioApp.CommunityConnector

	enum AggregationType {
		/**
		 * Auto. Use Auto for calculated fields which reference an aggregated field.
		 */
		AUTO = "AUTO",
		/**
		 * Average.
		 */
		AVG = "AVG",
		/**
		 * Count.
		 */
		COUNT = "COUNT",
		/**
		 * Count Distinct.
		 */
		COUNT_DISTINCT = "COUNT_DISTINCT",
		/**
		 * Max.
		 */
		MAX = "MAX",
		/**
		 * Min.
		 */
		MIN = "MIN",
		/**
		 * DEPRECATED: Use <code>AUTO</code> instead. No aggregation.
		 */
		NO_AGGREGATION = "NO_AGGREGATION",
		/**
		 * Sum.
		 */
		SUM = "SUM",
	}

	enum AuthType {
		/**
		 * API Key or Token needed.
		 */
		KEY = "KEY",
		/**
		 * No authorization needed.
		 */
		NONE = "NONE",
		/**
		 * OAuth2 authorization needed.
		 */
		OAUTH2 = "OAUTH2",
		/**
		 * Username, path, and password needed.
		 */
		PATH_USER_PASS = "PATH_USER_PASS",
		/**
		 * Username and password credentials needed.
		 */
		USER_PASS = "USER_PASS",
		/**
		 * Username and token needed.
		 */
		USER_TOKEN = "USER_TOKEN",
	}

	class BigQueryConfig {
		private constructor();

		/**
		 * Adds a query parameter to this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/big-query-config.html'>BigQueryConfig</a></code>.
		 * 
		 * @param name - The parameter name.
		 * @param type - The parameter type.
		 * @param value - The parameter value.
		 * 
		 * @returns This object, for chaining.
		 */
		addQueryParameter(
			name: string,
			type: DataStudioApp.BigQueryParameterType,
			value: string
		): DataStudioApp.BigQueryConfig
		/**
		 * Validates this object and returns it in the format needed by Data Studio.
		 * 
		 * @returns The validated <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/config.html'>Config</a></code> object.
		 */
		build(): object
		printJson(): string
		/**
		 * Sets the access token of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/big-query-config.html'>BigQueryConfig</a></code>.
		 * 
		 * @param accessToken - The access token to set.
		 * 
		 * @returns This object, for chaining.
		 */
		setAccessToken(
			accessToken: string
		): DataStudioApp.BigQueryConfig
		/**
		 * Sets the billing project ID of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/big-query-config.html'>BigQueryConfig</a></code>.
		 * 
		 * @param billingProjectId - The billing project ID to set.
		 * 
		 * @returns This object, for chaining.
		 */
		setBillingProjectId(
			billingProjectId: string
		): DataStudioApp.BigQueryConfig
		/**
		 * Sets the SQL query of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/big-query-config.html'>BigQueryConfig</a></code>.
		 * 
		 * @param query - The query to set.
		 * 
		 * @returns This object, for chaining.
		 */
		setQuery(
			query: string
		): DataStudioApp.BigQueryConfig
		/**
		 * Determines if the query is interpreted as standard or legacy SQL.
		 * 
		 * @param useStandardSql - If <code>true</code>, the query is interpreted as standard SQL. If <code>false</code>, the query is interpreted as legacy SQL.
		 * 
		 * @returns This object, for chaining.
		 */
		setUseStandardSql(
			useStandardSql: Boolean
		): DataStudioApp.BigQueryConfig

	}

	enum BigQueryParameterType {
		/**
		 * Boolean.
		 */
		BOOL = "BOOL",
		/**
		 * 64-bit floating point number.
		 */
		FLOAT64 = "FLOAT64",
		/**
		 * 64-bit integer.
		 */
		INT64 = "INT64",
		/**
		 * String.
		 */
		STRING = "STRING",
	}

	class Checkbox {
		private constructor();

		/**
		 * Enables overriding for this config entry. If set to <code>true</code>, data source creators have the
		 * option to enable this for report editors.
		 * 
		 * @param allowOverride - Whether or not this config entry can be overridden in reports.
		 * 
		 * @returns This builder, for chaining.
		 */
		setAllowOverride(
			allowOverride: Boolean
		): DataStudioApp.Checkbox
		/**
		 * Sets the help text for this configuration entry.
		 * 
		 * @param helpText - The helpText to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setHelpText(
			helpText: string
		): DataStudioApp.Checkbox
		/**
		 * Sets the unique ID for this configuration entry.
		 * 
		 * @param id - The ID to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setId(
			id: string
		): DataStudioApp.Checkbox
		/**
		 * Sets the dynamic status for this configuration entry.
		 * 
		 * <p>If a dynamic configuration entry is modified, subsequent configuration entries are cleared.
		 * 
		 * @param isDynamic - The dynamic status to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setIsDynamic(
			isDynamic: Boolean
		): DataStudioApp.Checkbox
		/**
		 * Sets the display name for this configuration entry.
		 * 
		 * @param name - The name to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setName(
			name: string
		): DataStudioApp.Checkbox

	}

	class CommunityConnector {
		private constructor();

		/**
		 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/aggregation-type.html'>AggregationType</a></code> enumeration.
		 */
		static AggregationType: DataStudioApp.AggregationType;
		/**
		 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/auth-type.html'>AuthType</a></code> enumeration.
		 */
		static AuthType: DataStudioApp.AuthType;
		/**
		 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/big-query-parameter-type.html'>BigQueryParameterType</a></code> enumeration.
		 */
		static BigQueryParameterType: DataStudioApp.BigQueryParameterType;
		/**
		 * The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field-type.html'>FieldType</a></code> enumeration.
		 */
		static FieldType: DataStudioApp.FieldType;

		/**
		 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/config.html'>Config</a></code> object. Use this object to add configuration entries.
		 * 
		 * @returns A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/config.html'>Config</a></code> object.
		 */
		getConfig(): DataStudioApp.Config
		/**
		 * Returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/fields.html'>Fields</a></code> object. Use this object to add metric and dimension <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>s.
		 * 
		 * @returns A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/fields.html'>Fields</a></code> object.
		 */
		getFields(): DataStudioApp.Fields
		/**
		 * Returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/get-auth-type-response.html'>GetAuthTypeResponse</a></code> object. Use this object to create a response for the
		 * <code>getAuthType()</code> function you implement in your script project.
		 * 
		 * @returns A new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/get-auth-type-response.html'>GetAuthTypeResponse</a></code> object.
		 */
		newAuthTypeResponse(): DataStudioApp.GetAuthTypeResponse
		/**
		 * Returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/big-query-config.html'>BigQueryConfig</a></code> object. Use this object to create a response for the
		 * <code>getData()</code> function you implement in your script project.
		 * 
		 * @returns A new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/big-query-config.html'>BigQueryConfig</a></code> object.
		 */
		newBigQueryConfig(): DataStudioApp.BigQueryConfig
		/**
		 * Returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/debug-error.html'>DebugError</a></code> object. Use this object to create debug errors.
		 * 
		 * @returns A new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/debug-error.html'>DebugError</a></code> object.
		 */
		newDebugError(): DataStudioApp.DebugError
		/**
		 * Returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/get-data-response.html'>GetDataResponse</a></code> object. Use this object to create a response for the
		 * <code>getData()</code> function you implement in your script project.
		 * 
		 * @returns A new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/get-data-response.html'>GetDataResponse</a></code> object.
		 */
		newGetDataResponse(): DataStudioApp.GetDataResponse
		/**
		 * Returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/get-schema-response.html'>GetSchemaResponse</a></code> object. Use this object to create a response for the
		 * <code>getSchema()</code> function you implement in your script project.
		 * 
		 * @returns A new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/get-schema-response.html'>GetSchemaResponse</a></code> object.
		 */
		newGetSchemaResponse(): DataStudioApp.GetSchemaResponse
		/**
		 * Returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/set-credentials-response.html'>SetCredentialsResponse</a></code> object. Use this object to create a response for
		 * the <code>setCredentials()</code> function you implement in your script project.
		 * 
		 * @returns A new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/set-credentials-response.html'>SetCredentialsResponse</a></code> object.
		 */
		newSetCredentialsResponse(): DataStudioApp.SetCredentialsResponse
		/**
		 * Returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/user-error.html'>UserError</a></code> object. Use this object to create user errors.
		 * 
		 * @returns A new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/user-error.html'>UserError</a></code> object.
		 */
		newUserError(): DataStudioApp.UserError

	}

	class Config {
		private constructor();

		/**
		 * Validates this object and returns it in the format needed by Data Studio.
		 * 
		 * @returns The validated <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/config.html'>Config</a></code> object.
		 */
		build(): object
		/**
		 * Returns a new checkbox configuration entry.
		 * 
		 * @returns A new checkbox configuration entry.
		 */
		newCheckbox(): DataStudioApp.Checkbox
		/**
		 * Returns a new info configuration entry.
		 * 
		 * @returns A new info configuration entry.
		 */
		newInfo(): DataStudioApp.Info
		/**
		 * Returns a new options builder.
		 * 
		 * @returns A new options builder.
		 */
		newOptionBuilder(): DataStudioApp.OptionBuilder
		/**
		 * Returns a new select multiple configuration entry.
		 * 
		 * @returns A new select multiple configuration entry.
		 */
		newSelectMultiple(): DataStudioApp.SelectMultiple
		/**
		 * Returns a new select single configuration entry.
		 * 
		 * @returns A new select single configuration entry.
		 */
		newSelectSingle(): DataStudioApp.SelectSingle
		/**
		 * Returns a new text area configuration entry.
		 * 
		 * @returns A new text area configuration entry.
		 */
		newTextArea(): DataStudioApp.TextArea
		/**
		 * Returns a new text input configuration entry.
		 * 
		 * @returns A new text input configuration entry.
		 */
		newTextInput(): DataStudioApp.TextInput
		printJson(): string
		/**
		 * If <code>true</code>, a date range is provided for getData() requests.
		 * 
		 * @param dateRangeRequired - Whether or not a date range should be provided to <code>getData()</code>
		 *     requests.
		 * 
		 * @returns This builder, for chaining.
		 */
		setDateRangeRequired(
			dateRangeRequired: Boolean
		): DataStudioApp.Config
		/**
		 * If <code>true</code>, <code>getConfig()</code> is called again with the current user configuration.
		 * 
		 * @param isSteppedConfig - The stepped config status to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setIsSteppedConfig(
			isSteppedConfig: Boolean
		): DataStudioApp.Config

	}

	class DebugError {
		private constructor();

		printJson(): string
		/**
		 * Sets the text of the debug error, which is only shown to admins.
		 * 
		 * @param text - The error text.
		 * 
		 * @returns This object, for chaining.
		 */
		setText(
			text: string
		): DataStudioApp.DebugError
		/**
		 * Triggers this exception to be thrown.
		 */
		throwException(): void

	}

	class Field {
		private constructor();

		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/aggregation-type.html'>AggregationType</a></code> of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/aggregation-type.html'>AggregationType</a></code> determines
		 * how Data Studio combines similar data into dimensions.
		 * 
		 * @returns The aggregationType for this field.
		 */
		getAggregation(): DataStudioApp.AggregationType
		/**
		 * Returns the description of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Descriptions are short explanations of a field's
		 * purpose.
		 * 
		 * @returns The description for this field.
		 */
		getDescription(): string
		/**
		 * Returns the formula of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Formulas define a data transformation that Data
		 * Studio runs at query-time.
		 * 
		 * @returns The formula for this field.
		 */
		getFormula(): string
		/**
		 * Returns the group of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Fields collected into a group are presented together
		 * in the Data Studio UI.
		 * 
		 * @returns The group for this field.
		 */
		getGroup(): string
		/**
		 * Returns the ID of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. IDs are unique per set of fields and are used in formulas
		 * to refer to fields.
		 * 
		 * @returns The ID for this field.
		 */
		getId(): string
		/**
		 * Returns <code>true</code> if this field can be reaggregated, <code>false</code> otherwise.
		 * 
		 * @returns <code>true</code> if this field can be reaggregated, <code>false</code> otherwise.
		 */
		getIsReaggregatable(): Boolean
		/**
		 * Returns the name of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Names are shown to the user to distinguish fields.
		 * 
		 * @returns The name for this field.
		 */
		getName(): string
		/**
		 * Returns the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field-type.html'>FieldType</a></code> of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>.
		 * 
		 * @returns The type for this field.
		 */
		getType(): DataStudioApp.FieldType
		/**
		 * Returns <code>true</code> if this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code> is the default metric or dimension.
		 * 
		 * @returns <code>true</code> if this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code> is the default metric or dimension; <code>false</code>
		 *     otherwise.
		 */
		isDefault(): Boolean
		/**
		 * Returns <code>true</code> if this field is a dimension.
		 * 
		 * @returns <code>true</code> if this field is a dimension; returns <code>false</code> otherwise.
		 */
		isDimension(): Boolean
		/**
		 * Returns <code>true</code> if this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code> is hidden. You can use hidden fields in formulas,
		 * but not in charts. You cannot hide fields containing formulas.
		 * 
		 * @returns <code>true</code> if this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code> is hidden; <code>false</code> otherwise.
		 */
		isHidden(): Boolean
		/**
		 * Returns <code>true</code> if this field is a metric.
		 * 
		 * @returns <code>true</code> if this field is a metric; returns <code>false</code> otherwise.
		 */
		isMetric(): Boolean
		/**
		 * Sets the aggregation type of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/aggregation-type.html'>AggregationType</a></code> determines how Data
		 * Studio combines similar data into dimensions. This throws an error if called on a metric.
		 * 
		 * @param aggregation - The aggregation type to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setAggregation(
			aggregation: DataStudioApp.AggregationType
		): DataStudioApp.Field
		/**
		 * Sets the description of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Descriptions are short explanations of a field's
		 * purpose.
		 * 
		 * @param description - The description to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setDescription(
			description: string
		): DataStudioApp.Field
		/**
		 * Sets the formula of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Formulas define a data transformation that Data Studio
		 * runs at query-time.
		 * 
		 * @param formula - The formula to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setFormula(
			formula: string
		): DataStudioApp.Field
		/**
		 * Sets the group of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Fields collected into a group are presented together in
		 * the Data Studio UI.
		 * 
		 * @param group - The group to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setGroup(
			group: string
		): DataStudioApp.Field
		/**
		 * Sets the ID of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. IDs are unique per set of fields and are used in formulas to
		 * refer to fields.
		 * 
		 * @param id - The ID to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setId(
			id: string
		): DataStudioApp.Field
		/**
		 * Sets the hidden status of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. You can use hidden fields in formulas, but not in
		 * charts. You cannot hide fields containing formulas.
		 * 
		 * @param isHidden - The hidden status to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setIsHidden(
			isHidden: Boolean
		): DataStudioApp.Field
		/**
		 * Sets the reaggregation-permitted status for a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Attempting to set an aggregation
		 * type on a field that can't be reaggregated results in an error.
		 * 
		 * @param isReaggregatable - The reaggregation-permitted status to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setIsReaggregatable(
			isReaggregatable: Boolean
		): DataStudioApp.Field
		/**
		 * Sets the name of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>. Names are shown to the user to distinguish fields.
		 * 
		 * @param name - The name to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setName(
			name: string
		): DataStudioApp.Field
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field-type.html'>FieldType</a></code> of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>.
		 * 
		 * @param type - The type to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setType(
			type: DataStudioApp.FieldType
		): DataStudioApp.Field

	}

	enum FieldType {
		/**
		 * A <code>true</code> or <code>false</code> boolean value.
		 */
		BOOLEAN = "BOOLEAN",
		/**
		 * A city such as Mountain View.
		 */
		CITY = "CITY",
		/**
		 * A city code such as 1014044.
		 */
		CITY_CODE = "CITY_CODE",
		/**
		 * A continent such as Americas.
		 */
		CONTINENT = "CONTINENT",
		/**
		 * A continent code such as 019.
		 */
		CONTINENT_CODE = "CONTINENT_CODE",
		/**
		 * A country such as United States.
		 */
		COUNTRY = "COUNTRY",
		/**
		 * A country code such as US.
		 */
		COUNTRY_CODE = "COUNTRY_CODE",
		/**
		 * Currency from AED.
		 */
		CURRENCY_AED = "CURRENCY_AED",
		/**
		 * Currency from ALL.
		 */
		CURRENCY_ALL = "CURRENCY_ALL",
		/**
		 * Currency from ARS.
		 */
		CURRENCY_ARS = "CURRENCY_ARS",
		/**
		 * Currency from AUD.
		 */
		CURRENCY_AUD = "CURRENCY_AUD",
		/**
		 * Currency from BDT.
		 */
		CURRENCY_BDT = "CURRENCY_BDT",
		/**
		 * Currency from BGN.
		 */
		CURRENCY_BGN = "CURRENCY_BGN",
		/**
		 * Currency from BOB.
		 */
		CURRENCY_BOB = "CURRENCY_BOB",
		/**
		 * Currency from BRL.
		 */
		CURRENCY_BRL = "CURRENCY_BRL",
		/**
		 * Currency from CAD.
		 */
		CURRENCY_CAD = "CURRENCY_CAD",
		/**
		 * Currency from CDF.
		 */
		CURRENCY_CDF = "CURRENCY_CDF",
		/**
		 * Currency from CHF.
		 */
		CURRENCY_CHF = "CURRENCY_CHF",
		/**
		 * Currency from CLP.
		 */
		CURRENCY_CLP = "CURRENCY_CLP",
		/**
		 * Currency from CNY.
		 */
		CURRENCY_CNY = "CURRENCY_CNY",
		/**
		 * Currency from COP.
		 */
		CURRENCY_COP = "CURRENCY_COP",
		/**
		 * Currency from CRC.
		 */
		CURRENCY_CRC = "CURRENCY_CRC",
		/**
		 * Currency from CZK.
		 */
		CURRENCY_CZK = "CURRENCY_CZK",
		/**
		 * Currency from DKK.
		 */
		CURRENCY_DKK = "CURRENCY_DKK",
		/**
		 * Currency from DOP.
		 */
		CURRENCY_DOP = "CURRENCY_DOP",
		/**
		 * Currency from EGP.
		 */
		CURRENCY_EGP = "CURRENCY_EGP",
		/**
		 * Currency from ETB.
		 */
		CURRENCY_ETB = "CURRENCY_ETB",
		/**
		 * Currency from EUR.
		 */
		CURRENCY_EUR = "CURRENCY_EUR",
		/**
		 * Currency from GBP.
		 */
		CURRENCY_GBP = "CURRENCY_GBP",
		/**
		 * Currency from HKD.
		 */
		CURRENCY_HKD = "CURRENCY_HKD",
		/**
		 * Currency from HRK.
		 */
		CURRENCY_HRK = "CURRENCY_HRK",
		/**
		 * Currency from HUF.
		 */
		CURRENCY_HUF = "CURRENCY_HUF",
		/**
		 * Currency from IDR.
		 */
		CURRENCY_IDR = "CURRENCY_IDR",
		/**
		 * Currency from ILS.
		 */
		CURRENCY_ILS = "CURRENCY_ILS",
		/**
		 * Currency from INR.
		 */
		CURRENCY_INR = "CURRENCY_INR",
		/**
		 * Currency from IRR.
		 */
		CURRENCY_IRR = "CURRENCY_IRR",
		/**
		 * Currency from ISK.
		 */
		CURRENCY_ISK = "CURRENCY_ISK",
		/**
		 * Currency from JMD.
		 */
		CURRENCY_JMD = "CURRENCY_JMD",
		/**
		 * Currency from JPY.
		 */
		CURRENCY_JPY = "CURRENCY_JPY",
		/**
		 * Currency from KRW.
		 */
		CURRENCY_KRW = "CURRENCY_KRW",
		/**
		 * Currency from LKR.
		 */
		CURRENCY_LKR = "CURRENCY_LKR",
		/**
		 * Currency from LTL.
		 */
		CURRENCY_LTL = "CURRENCY_LTL",
		/**
		 * Currency from MNT.
		 */
		CURRENCY_MNT = "CURRENCY_MNT",
		/**
		 * Currency from MVR.
		 */
		CURRENCY_MVR = "CURRENCY_MVR",
		/**
		 * Currency from MXN.
		 */
		CURRENCY_MXN = "CURRENCY_MXN",
		/**
		 * Currency from MYR.
		 */
		CURRENCY_MYR = "CURRENCY_MYR",
		/**
		 * Currency from NOK.
		 */
		CURRENCY_NOK = "CURRENCY_NOK",
		/**
		 * Currency from NZD.
		 */
		CURRENCY_NZD = "CURRENCY_NZD",
		/**
		 * Currency from PAB.
		 */
		CURRENCY_PAB = "CURRENCY_PAB",
		/**
		 * Currency from PEN.
		 */
		CURRENCY_PEN = "CURRENCY_PEN",
		/**
		 * Currency from PHP.
		 */
		CURRENCY_PHP = "CURRENCY_PHP",
		/**
		 * Currency from PKR.
		 */
		CURRENCY_PKR = "CURRENCY_PKR",
		/**
		 * Currency from PLN.
		 */
		CURRENCY_PLN = "CURRENCY_PLN",
		/**
		 * Currency from RON.
		 */
		CURRENCY_RON = "CURRENCY_RON",
		/**
		 * Currency from RSD.
		 */
		CURRENCY_RSD = "CURRENCY_RSD",
		/**
		 * Currency from RUB.
		 */
		CURRENCY_RUB = "CURRENCY_RUB",
		/**
		 * Currency from SAR.
		 */
		CURRENCY_SAR = "CURRENCY_SAR",
		/**
		 * Currency from SEK.
		 */
		CURRENCY_SEK = "CURRENCY_SEK",
		/**
		 * Currency from SGD.
		 */
		CURRENCY_SGD = "CURRENCY_SGD",
		/**
		 * Currency from THB.
		 */
		CURRENCY_THB = "CURRENCY_THB",
		/**
		 * Currency from TRY.
		 */
		CURRENCY_TRY = "CURRENCY_TRY",
		/**
		 * Currency from TWD.
		 */
		CURRENCY_TWD = "CURRENCY_TWD",
		/**
		 * Currency from TZS.
		 */
		CURRENCY_TZS = "CURRENCY_TZS",
		/**
		 * Currency from UAH.
		 */
		CURRENCY_UAH = "CURRENCY_UAH",
		/**
		 * Currency from USD.
		 */
		CURRENCY_USD = "CURRENCY_USD",
		/**
		 * Currency from UYU.
		 */
		CURRENCY_UYU = "CURRENCY_UYU",
		/**
		 * Currency from VEF.
		 */
		CURRENCY_VEF = "CURRENCY_VEF",
		/**
		 * Currency from VND.
		 */
		CURRENCY_VND = "CURRENCY_VND",
		/**
		 * Currency from YER.
		 */
		CURRENCY_YER = "CURRENCY_YER",
		/**
		 * Currency from ZAR.
		 */
		CURRENCY_ZAR = "CURRENCY_ZAR",
		/**
		 * Day in the format of DD such as 17.
		 */
		DAY = "DAY",
		/**
		 * A number in the range of [0,6] with 0 representing Sunday.
		 */
		DAY_OF_WEEK = "DAY_OF_WEEK",
		/**
		 * A duration of time in seconds.
		 */
		DURATION = "DURATION",
		/**
		 * Hour in the format of HH such as 13.
		 */
		HOUR = "HOUR",
		/**
		 * A hyperlink. Only use this for calculated fields with the <a
		 * href="https://support.google.com/datastudio/answer/7431836"><code>HYPERLINK</code></a>
		 * function.
		 */
		HYPERLINK = "HYPERLINK",
		/**
		 * An image. Only use this for calculated fields with the <a
		 * href="https://support.google.com/datastudio/answer/7570489"><code>IMAGE</code></a> function.
		 */
		IMAGE = "IMAGE",
		/**
		 * An image link. Only use this for calculated fields with the <a
		 * href="https://support.google.com/datastudio/answer/7431836"><code>HYPERLINK</code></a> function
		 * while using <code>IMAGE</code> for the link label.
		 */
		IMAGE_LINK = "IMAGE_LINK",
		/**
		 * A latitude longitude pair such as 51.5074, -0.1278.
		 */
		LATITUDE_LONGITUDE = "LATITUDE_LONGITUDE",
		/**
		 * A metro such as San Francisco-Oakland-San Jose CA.
		 */
		METRO = "METRO",
		/**
		 * A metro code such as 200807.
		 */
		METRO_CODE = "METRO_CODE",
		/**
		 * Minute in the format of mm such as 12.
		 */
		MINUTE = "MINUTE",
		/**
		 * Month in the format of MM such as 03.
		 */
		MONTH = "MONTH",
		/**
		 * Month and day in the format of MMDD such as 0317.
		 */
		MONTH_DAY = "MONTH_DAY",
		/**
		 * A decimal number.
		 */
		NUMBER = "NUMBER",
		/**
		 * Decimal percentage (can be over 1.0). For example, 137% is represented as 1.37.
		 */
		PERCENT = "PERCENT",
		/**
		 * Quarter in the format of 1, 2, 3, or 4).
		 */
		QUARTER = "QUARTER",
		/**
		 * A region such as California.
		 */
		REGION = "REGION",
		/**
		 * A region code such as CA.
		 */
		REGION_CODE = "REGION_CODE",
		/**
		 * A sub-continent such as North America.
		 */
		SUB_CONTINENT = "SUB_CONTINENT",
		/**
		 * A sub-continent code such as 003.
		 */
		SUB_CONTINENT_CODE = "SUB_CONTINENT_CODE",
		/**
		 * Free-form text.
		 */
		TEXT = "TEXT",
		/**
		 * A URL as text such as https://google.com.
		 */
		URL = "URL",
		/**
		 * Week in the format of ww such as 07.
		 */
		WEEK = "WEEK",
		/**
		 * Year in the format of YYYY such as 2017.
		 */
		YEAR = "YEAR",
		/**
		 * Year and month in the format of YYYYMM such as 201703.
		 */
		YEAR_MONTH = "YEAR_MONTH",
		/**
		 * Year, month, and day in the format of YYYYMMDD such as 20170317.
		 */
		YEAR_MONTH_DAY = "YEAR_MONTH_DAY",
		/**
		 * Year, month, day, and hour in the format of YYYYMMDDHH such as 2017031703.
		 */
		YEAR_MONTH_DAY_HOUR = "YEAR_MONTH_DAY_HOUR",
		/**
		 * Year, month, day, hour, and second in the format of YYYYMMDDHHss such as 201703170330.
		 */
		YEAR_MONTH_DAY_SECOND = "YEAR_MONTH_DAY_SECOND",
		/**
		 * Year and quarter in the format of YYYYQ such as 20171.
		 */
		YEAR_QUARTER = "YEAR_QUARTER",
		/**
		 * Year and week in the format of YYYYww such as 201707.
		 */
		YEAR_WEEK = "YEAR_WEEK",
	}

	class Fields {
		private constructor();

		/**
		 * Returns a view of this object as an array.
		 * 
		 * <pre class="prettyprint"><code>
		 * var fields = //reference to fields object.
		 * fields.newDimension().setId(&#39;field1_id&#39;);
		 * fields.newDimension().setId(&#39;field2_id&#39;);
		 * fields.newDimension().setId(&#39;field3_id&#39;);
		 * 
		 * // Logging the ID of each field:
		 * fields
		 *   .asArray()
		 *   .map(function(field) {
		 *      Logger.log(field.getId());
		 *   });
		 * </code></pre>
		 * 
		 * @returns An array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code> objects.
		 */
		asArray(): DataStudioApp.Field[]
		/**
		 * Validates this object and returns it in the format needed by Data Studio.
		 * 
		 * @returns The validated field data, represented as a list of objects.
		 */
		build(): object[]
		/**
		 * Returns a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/fields.html'>Fields</a></code> object filtered to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>s with an ID in <code>ids</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var fields = //reference to fields object.
		 * fields.newDimension().setId(&#39;field1_id&#39;);
		 * fields.newDimension().setId(&#39;field2_id&#39;);
		 * fields.newDimension().setId(&#39;field3_id&#39;);
		 * 
		 * // subsetFields is a Fields object that only contains field1 and field2.
		 * var subsetFields = fields.forIds([&#39;field1_id&#39;, &#39;field3_id&#39;]);
		 * </code></pre>
		 * 
		 * @param ids - The IDs of fields that should be kept.
		 * 
		 * @returns A new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/fields.html'>Fields</a></code> object.
		 */
		forIds(
			ids: string[]
		): DataStudioApp.Fields
		/**
		 * Returns the default dimension to be used for the set of fields. The default dimension is
		 * selected automatically when a new visualization is made.
		 * 
		 * @returns The dimension that is set as the default dimension, or <code>null</code> if no default
		 *     dimension was set.
		 */
		getDefaultDimension(): DataStudioApp.Field
		/**
		 * Returns the default metric to be used for the set of fields. The default metric is selected
		 * automatically when a new visualization is made.
		 * 
		 * @returns The metric that is set as the default metric, or <code>null</code> if no default metric was
		 *     set.
		 */
		getDefaultMetric(): DataStudioApp.Field
		/**
		 * Returns a field with a given ID, or <code>null</code> if no field with that ID is in this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/fields.html'>Fields</a></code> object.
		 * 
		 * <pre class="prettyprint"><code>
		 * var fields = //reference to fields object.
		 * var field1 = fields.newDimension().setId(&#39;field1_id&#39;);
		 * 
		 * // byId is the same as field1.
		 * var byId = fields.getFieldById(&#39;field1_id&#39;);
		 * 
		 * // byId2 is null.
		 * var byId2 = fields.getFieldById(&#39;not present id&#39;);
		 * </code></pre>
		 * 
		 * @param fieldId - The ID of the field to get.
		 * 
		 * @returns The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code> with the given ID, or <code>null</code> if no such field is contained
		 *     within this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/fields.html'>Fields</a></code> object.
		 */
		getFieldById(
			fieldId: string
		): DataStudioApp.Field
		/**
		 * Returns a new dimension <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>.
		 * 
		 * @returns A new dimension <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>.
		 */
		newDimension(): DataStudioApp.Field
		/**
		 * Returns a new metric <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>.
		 * 
		 * @returns A new metric <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/field.html'>Field</a></code>.
		 */
		newMetric(): DataStudioApp.Field
		/**
		 * Sets the default dimension to be used for the set of fields. The default dimension is selected
		 * automatically when a new visualization is made.
		 * 
		 * @param fieldId - The ID of the field to use as the default dimension. This ID must be present in
		 *     the set of fields.
		 */
		setDefaultDimension(
			fieldId: string
		): void
		/**
		 * Sets the default metric to be used for the set of fields. The default metric is selected
		 * automatically when a new visualization is made.
		 * 
		 * @param fieldId - The ID of the field to use as the default metric. This ID must be present in the
		 *     set of fields.
		 */
		setDefaultMetric(
			fieldId: string
		): void

	}

	class GetAuthTypeResponse {
		private constructor();

		/**
		 * Validates this object and returns it in the format needed by Data Studio.
		 * 
		 * @returns The validated <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/get-auth-type-response.html'>GetAuthTypeResponse</a></code> object.
		 */
		build(): object
		printJson(): string
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/auth-type.html'>AuthType</a></code> of the builder.
		 * 
		 * @param authType - The authentication type to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setAuthType(
			authType: DataStudioApp.AuthType
		): DataStudioApp.GetAuthTypeResponse
		/**
		 * Sets the help URL of the builder.
		 * 
		 * <p>The help URL is an optional URL the user can visit to get help on setting up auth. This is
		 * only supported for <code>USER_PASS</code>, <code>KEY</code>, and <code>USER_TOKEN</code>
		 * authTypes.
		 * 
		 * @param helpUrl - The help URL to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setHelpUrl(
			helpUrl: string
		): DataStudioApp.GetAuthTypeResponse

	}

	class GetDataResponse {
		private constructor();

		/**
		 * Adds multiple rows of data to this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/get-data-response.html'>GetDataResponse</a></code>.
		 * 
		 * @param rows - The rows of data to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		addAllRows(
			rows: string[][]
		): DataStudioApp.GetDataResponse
		/**
		 * Adds a row of data to this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/get-data-response.html'>GetDataResponse</a></code>.
		 * 
		 * @param row - The row of data to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		addRow(
			row: string[]
		): DataStudioApp.GetDataResponse
		/**
		 * Validates this object and returns it in the format needed by Data Studio.
		 * 
		 * @returns The validated <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/get-data-response.html'>GetDataResponse</a></code> object.
		 */
		build(): object
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/fields.html'>Fields</a></code> of the builder.
		 * 
		 * @param fields - The fields to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setFields(
			fields: DataStudioApp.Fields
		): DataStudioApp.GetDataResponse
		/**
		 * Sets the filters applied status for this builder. Set to <code>true</code> if all filters were
		 * successfully applied, <code>false</code> otherwise.
		 * 
		 * @param filtersApplied - - The filters applied status to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setFiltersApplied(
			filtersApplied: Boolean
		): DataStudioApp.GetDataResponse

	}

	class GetSchemaResponse {
		private constructor();

		/**
		 * Validates this object and returns it in the format needed by Data Studio.
		 * 
		 * @returns The validated <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/get-schema-response.html'>GetSchemaResponse</a></code> object.
		 */
		build(): object
		printJson(): string
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/fields.html'>Fields</a></code> of the builder.
		 * 
		 * @param fields - The fields to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setFields(
			fields: DataStudioApp.Fields
		): DataStudioApp.GetSchemaResponse

	}

	class Info {
		private constructor();

		/**
		 * Sets the unique ID for this configuration entry.
		 * 
		 * @param id - The ID to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setId(
			id: string
		): DataStudioApp.Info
		/**
		 * Sets the text for this configuration entry.
		 * 
		 * @param text - The text to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setText(
			text: string
		): DataStudioApp.Info

	}

	class OptionBuilder {
		private constructor();

		/**
		 * Sets the label of this option builder. Labels are the text that the user sees when selecting
		 * one or more options from the dropdown.
		 * 
		 * @param label - The label to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setLabel(
			label: string
		): DataStudioApp.OptionBuilder
		/**
		 * Sets the value of this option builder. Values are what is passed to the code when a user
		 * selects one or more options from the dropdown.
		 * 
		 * @param value - The value to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setValue(
			value: string
		): DataStudioApp.OptionBuilder

	}

	class SelectMultiple {
		private constructor();

		/**
		 * Adds a new select option.
		 * 
		 * @param optionBuilder - A builder for an option.
		 * 
		 * @returns This builder, for chaining.
		 */
		addOption(
			optionBuilder: DataStudioApp.OptionBuilder
		): DataStudioApp.SelectMultiple
		/**
		 * Enables overriding for this config entry. If set to <code>true</code>, data source creators have the
		 * option to enable this for report editors.
		 * 
		 * @param allowOverride - Whether or not this config entry can be overridden in reports.
		 * 
		 * @returns This builder, for chaining.
		 */
		setAllowOverride(
			allowOverride: Boolean
		): DataStudioApp.SelectMultiple
		/**
		 * Sets the help text for this configuration entry.
		 * 
		 * @param helpText - The help text to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setHelpText(
			helpText: string
		): DataStudioApp.SelectMultiple
		/**
		 * Sets the unique ID for this configuration entry.
		 * 
		 * @param id - The ID to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setId(
			id: string
		): DataStudioApp.SelectMultiple
		/**
		 * Sets the dynamic status for this configuration entry.
		 * 
		 * <p>If a dynamic configuration entry is modified, subsequent configuration entries are cleared.
		 * 
		 * @param isDynamic - The dynamic status to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setIsDynamic(
			isDynamic: Boolean
		): DataStudioApp.SelectMultiple
		/**
		 * Sets the display name for this configuration entry.
		 * 
		 * @param name - The name to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setName(
			name: string
		): DataStudioApp.SelectMultiple

	}

	class SelectSingle {
		private constructor();

		/**
		 * Adds a new select option.
		 * 
		 * @param optionBuilder - A builder for an option.
		 * 
		 * @returns This builder, for chaining.
		 */
		addOption(
			optionBuilder: DataStudioApp.OptionBuilder
		): DataStudioApp.SelectSingle
		/**
		 * Enables overriding for this config entry. If set to <code>true</code>, data source creators have the
		 * option to enable this for report editors.
		 * 
		 * @param allowOverride - Whether or not this config entry can be overridden in reports.
		 * 
		 * @returns This builder, for chaining.
		 */
		setAllowOverride(
			allowOverride: Boolean
		): DataStudioApp.SelectSingle
		/**
		 * Sets the help text for this configuration entry.
		 * 
		 * @param helpText - The helpText to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setHelpText(
			helpText: string
		): DataStudioApp.SelectSingle
		/**
		 * Sets the unique ID for this configuration entry.
		 * 
		 * @param id - The ID to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setId(
			id: string
		): DataStudioApp.SelectSingle
		/**
		 * Sets the dynamic status for this configuration entry.
		 * 
		 * <p>If a dynamic configuration entry is modified, subsequent configuration entries are cleared.
		 * 
		 * @param isDynamic - The dynamic status to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setIsDynamic(
			isDynamic: Boolean
		): DataStudioApp.SelectSingle
		/**
		 * Sets the display name for this configuration entry.
		 * 
		 * @param name - The name to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setName(
			name: string
		): DataStudioApp.SelectSingle

	}

	class SetCredentialsResponse {
		private constructor();

		/**
		 * Validates this object and returns it in the format needed by Data Studio.
		 * 
		 * @returns The validated <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/set-credentials-response.html'>SetCredentialsResponse</a></code> object.
		 */
		build(): object
		printJson(): string
		/**
		 * Sets the valid status of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/data-studio/set-credentials-response.html'>SetCredentialsResponse</a></code>. Set to <code>true</code> if the
		 * credentials provided in the request were valid, <code>false</code>, otherwise.
		 * 
		 * @param isValid - The valid status to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setIsValid(
			isValid: Boolean
		): DataStudioApp.SetCredentialsResponse

	}

	class TextArea {
		private constructor();

		/**
		 * Enables overriding for this config entry. If set to <code>true</code>, data source creators have the
		 * option to enable this for report editors.
		 * 
		 * @param allowOverride - Whether or not this config entry can be overridden in reports.
		 * 
		 * @returns This builder, for chaining.
		 */
		setAllowOverride(
			allowOverride: Boolean
		): DataStudioApp.TextArea
		/**
		 * Sets the help text for this configuration entry.
		 * 
		 * @param helpText - The helpText to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setHelpText(
			helpText: string
		): DataStudioApp.TextArea
		/**
		 * Sets the unique ID for this configuration entry.
		 * 
		 * @param id - The ID to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setId(
			id: string
		): DataStudioApp.TextArea
		/**
		 * Sets the dynamic status for this configuration entry.
		 * 
		 * <p>If a dynamic configuration entry is modified, subsequent configuration entries are cleared.
		 * 
		 * @param isDynamic - The dynamic status to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setIsDynamic(
			isDynamic: Boolean
		): DataStudioApp.TextArea
		/**
		 * Sets the display name for this configuration entry.
		 * 
		 * @param name - The name to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setName(
			name: string
		): DataStudioApp.TextArea
		/**
		 * Sets the placeholder text for this configuration entry.
		 * 
		 * @param placeholder - The placeholder text to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setPlaceholder(
			placeholder: string
		): DataStudioApp.TextArea

	}

	class TextInput {
		private constructor();

		/**
		 * Enables overriding for this config entry. If set to <code>true</code>, data source creators have the
		 * option to enable this for report editors
		 * 
		 * @param allowOverride - Whether or not this config entry can be overridden in reports.
		 * 
		 * @returns This builder, for chaining.
		 */
		setAllowOverride(
			allowOverride: Boolean
		): DataStudioApp.TextInput
		/**
		 * Sets the help text for this configuration entry.
		 * 
		 * @param helpText - The helpText to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setHelpText(
			helpText: string
		): DataStudioApp.TextInput
		/**
		 * Sets the unique ID for this configuration entry.
		 * 
		 * @param id - The ID to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setId(
			id: string
		): DataStudioApp.TextInput
		/**
		 * Sets the dynamic status for this configuration entry.
		 * 
		 * <p>If a dynamic configuration entry is modified, subsequent configuration entries are cleared.
		 * 
		 * @param isDynamic - The dynamic status to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setIsDynamic(
			isDynamic: Boolean
		): DataStudioApp.TextInput
		/**
		 * Sets the display name for this configuration entry.
		 * 
		 * @param name - The name to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setName(
			name: string
		): DataStudioApp.TextInput
		/**
		 * Sets the placeholder text for this configuration entry.
		 * 
		 * @param placeholder - The placeholder text to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setPlaceholder(
			placeholder: string
		): DataStudioApp.TextInput

	}

	class UserError {
		private constructor();

		printJson(): string
		/**
		 * Sets the text of the debug error, which is only shown to admins.
		 * 
		 * @param text - The error text.
		 * 
		 * @returns This object, for chaining.
		 */
		setDebugText(
			text: string
		): DataStudioApp.UserError
		/**
		 * Sets the text of the user error.
		 * 
		 * @param text - The error text.
		 * 
		 * @returns This object, for chaining.
		 */
		setText(
			text: string
		): DataStudioApp.UserError
		/**
		 * Triggers this exception to be thrown.
		 */
		throwException(): void

	}

}
