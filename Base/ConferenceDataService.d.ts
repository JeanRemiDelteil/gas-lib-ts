/** Module: ConferenceDataService */

type ConferenceDataService = typeof ConferenceDataService;
declare namespace ConferenceDataService {

	/**
	 * Returns a new, empty <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data-builder.html'>ConferenceDataBuilder</a></code>.
	 * 
	 * @returns a new, empty <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data-builder.html'>ConferenceDataBuilder</a></code>
	 */
	function newConferenceDataBuilder(): ConferenceDataService.ConferenceDataBuilder
	/**
	 * Returns a new, empty <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-error.html'>ConferenceError</a></code>.
	 * 
	 * @returns a new, empty <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-error.html'>ConferenceError</a></code>
	 */
	function newConferenceError(): ConferenceDataService.ConferenceError
	/**
	 * Returns a new, empty <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-parameter.html'>ConferenceParameter</a></code>.
	 * 
	 * @returns a new, empty <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-parameter.html'>ConferenceParameter</a></code>
	 */
	function newConferenceParameter(): ConferenceDataService.ConferenceParameter
	/**
	 * Returns a new, empty <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/entry-point.html'>EntryPoint</a></code>.
	 * 
	 * @returns a new, empty <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/entry-point.html'>EntryPoint</a></code>
	 */
	function newEntryPoint(): ConferenceDataService.EntryPoint

	class ConferenceData {
		private constructor();

		printJson(): string

	}

	class ConferenceDataBuilder {
		private constructor();

		/**
		 * Adds a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-parameter.html'>ConferenceParameter</a></code> to this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data.html'>ConferenceData</a></code>. The maximum number of
		 * parameters per <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data.html'>ConferenceData</a></code> is 300.
		 * 
		 * @param conferenceParameter - The parameter to add.
		 * 
		 * @returns This builder, for chaining.
		 */
		addConferenceParameter(
			conferenceParameter: ConferenceDataService.ConferenceParameter
		): ConferenceDataService.ConferenceDataBuilder
		/**
		 * Adds an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/entry-point.html'>EntryPoint</a></code> to this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data.html'>ConferenceData</a></code>. The maximum number of entry points
		 * per <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data.html'>ConferenceData</a></code> is 300.
		 * 
		 * @param entryPoint - The entry point to add.
		 * 
		 * @returns This builder, for chaining.
		 */
		addEntryPoint(
			entryPoint: ConferenceDataService.EntryPoint
		): ConferenceDataService.ConferenceDataBuilder
		/**
		 * Builds and validates the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data.html'>ConferenceData</a></code>.
		 * 
		 * @returns the validated conference data
		 */
		build(): ConferenceDataService.ConferenceData
		/**
		 * Sets the conference ID of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data.html'>ConferenceData</a></code>. The maximum length for this field is 512
		 * characters.
		 * 
		 * @param conferenceId - The ID to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setConferenceId(
			conferenceId: string
		): ConferenceDataService.ConferenceDataBuilder
		/**
		 * Sets the conference solution ID defined in the addon's manifest. The value must be specified
		 * and populates conference's name and iconUrl values.
		 * 
		 * <p>Note that the field is required for GSuite add-ons whereas it's ignored for Conferencing
		 * add-ons
		 * 
		 * @param conferenceSolutionId - The ID matching the manifest.
		 * 
		 * @returns This builder, for chaining.
		 */
		setConferenceSolutionId(
			conferenceSolutionId: string
		): ConferenceDataService.ConferenceDataBuilder
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-error.html'>ConferenceError</a></code> of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data.html'>ConferenceData</a></code>, indicating that the conference
		 * was not successfully created.
		 * 
		 * @param conferenceError - The error to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setError(
			conferenceError: ConferenceDataService.ConferenceError
		): ConferenceDataService.ConferenceDataBuilder
		/**
		 * Sets the additional notes of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-data.html'>ConferenceData</a></code>, such as instructions from the
		 * administrator or legal notices. Can contain HTML. The maximum length for this field is 2048
		 * characters.
		 * 
		 * @param notes - The additional notes to set.
		 * 
		 * @returns This builder, for chaining.
		 */
		setNotes(
			notes: string
		): ConferenceDataService.ConferenceDataBuilder

	}

	class ConferenceError {
		private constructor();

		/**
		 * If the error type is <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-error-type.html#AUTHENTICATION'>AUTHENTICATION</a></code>, the add-on must
		 * provide a URL calling back into the add-on to allow users to log in. The maximum length for
		 * this field is 1800 characters.
		 * 
		 * @param authenticationUrl - The authentication URL to set.
		 * 
		 * @returns this object, for chaining
		 */
		setAuthenticationUrl(
			authenticationUrl: string
		): ConferenceDataService.ConferenceError
		/**
		 * Sets the error type of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-error.html'>ConferenceError</a></code>.
		 * 
		 * @param conferenceErrorType - The type of error to set.
		 * 
		 * @returns this object, for chaining
		 */
		setConferenceErrorType(
			conferenceErrorType: ConferenceDataService.ConferenceErrorType
		): ConferenceDataService.ConferenceError

	}

	enum ConferenceErrorType {
		/**
		 * An authentication error during conference data generation.
		 */
		AUTHENTICATION = "AUTHENTICATION",
		/**
		 * The user is not allowed to use the selected conference solution (but might be allowed to use
		 * other solutions offered by the add-on).
		 */
		CONFERENCE_SOLUTION_FORBIDDEN = "CONFERENCE_SOLUTION_FORBIDDEN",
		/**
		 * A permanent error during conference data generation.
		 */
		PERMANENT = "PERMANENT",
		/**
		 * The user isn't allowed to perform an action in the third-party conferencing system.
		 */
		PERMISSION_DENIED = "PERMISSION_DENIED",
		/**
		 * A temporary error during conference data generation.
		 */
		TEMPORARY = "TEMPORARY",
		/**
		 * An unknown error during conference data generation.
		 */
		UNKNOWN = "UNKNOWN",
	}

	class ConferenceParameter {
		private constructor();

		/**
		 * Sets the key of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-parameter.html'>ConferenceParameter</a></code>. The maximum length for this field is 50
		 * characters. Required.
		 * 
		 * @param key - The key to set.
		 * 
		 * @returns this object, for chaining
		 */
		setKey(
			key: string
		): ConferenceDataService.ConferenceParameter
		/**
		 * Sets the value of this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/conference-parameter.html'>ConferenceParameter</a></code>. The maximum length for this field is 1024
		 * characters. Required.
		 * 
		 * @param value - The value to set.
		 * 
		 * @returns this object, for chaining
		 */
		setValue(
			value: string
		): ConferenceDataService.ConferenceParameter

	}

	class EntryPoint {
		private constructor();

		/**
		 * Adds the feature of the entry point, such as being toll or toll-free.
		 * 
		 * @param feature - The feature to set.
		 * 
		 * @returns this object, for chaining
		 */
		addFeature(
			feature: ConferenceDataService.EntryPointFeature
		): ConferenceDataService.EntryPoint
		/**
		 * An access code for accessing the conference. Maximum length 128 characters. Optional.
		 * 
		 * @param accessCode - The access code to set.
		 * 
		 * @returns this object, for chaining
		 */
		setAccessCode(
			accessCode: string
		): ConferenceDataService.EntryPoint
		/**
		 * Sets the type of this entry point. Required.
		 * 
		 * @param entryPointType - The entry point type to set.
		 * 
		 * @returns this object, for chaining
		 */
		setEntryPointType(
			entryPointType: ConferenceDataService.EntryPointType
		): ConferenceDataService.EntryPoint
		/**
		 * A meeting code for accessing the conference. Maximum length 128 characters. Optional.
		 * 
		 * @param meetingCode - The meeting code to set.
		 * 
		 * @returns this object, for chaining
		 */
		setMeetingCode(
			meetingCode: string
		): ConferenceDataService.EntryPoint
		/**
		 * A passcode for accessing the conference. Maximum length 128 characters. Optional.
		 * 
		 * @param passcode - The passcode to set.
		 * 
		 * @returns this object, for chaining
		 */
		setPasscode(
			passcode: string
		): ConferenceDataService.EntryPoint
		/**
		 * A password code for accessing the conference. Maximum length 128 characters. Optional.
		 * 
		 * @param password - The password to set.
		 * 
		 * @returns this object, for chaining
		 */
		setPassword(
			password: string
		): ConferenceDataService.EntryPoint
		/**
		 * A PIN code for accessing the conference. Maximum length 128 characters. Optional.
		 * 
		 * @param pin - The PIN code to set.
		 * 
		 * @returns this object, for chaining
		 */
		setPin(
			pin: string
		): ConferenceDataService.EntryPoint
		/**
		 * The CLDR/ISO 3166 region code for the country associated with this entry point. Applicable only
		 * to phone entry point types. Optional.
		 * 
		 * @param regionCode - The regionCode to set.
		 * 
		 * @returns this object, for chaining
		 */
		setRegionCode(
			regionCode: string
		): ConferenceDataService.EntryPoint
		/**
		 * Sets the URI for joining the conference through this entry point. For <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/entry-point-type.html#PHONE'>PHONE</a></code> entry points, the prefix <code>tel:</code> is required. For <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/entry-point-type.html#SIP'>SIP</a></code> entry points, the prefix <code>sip:</code> is required. For <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/entry-point-type.html#VIDEO'>VIDEO</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/conference-data/entry-point-type.html#MORE'>MORE</a></code> entry points, the prefixes
		 * <code>http:</code> or <code>https:</code> are required. Maximum length 1300 characters. Required.
		 * 
		 * @param uri - The URI to set.
		 * 
		 * @returns this object, for chaining
		 */
		setUri(
			uri: string
		): ConferenceDataService.EntryPoint

	}

	enum EntryPointFeature {
		/**
		 * Applies to PHONE entry point only. A call to a toll number is charged to the calling party. A
		 * number can't be toll and toll-free at the same time.
		 */
		TOLL = "TOLL",
		/**
		 * Applies to PHONE entry point only. For the calling party, a call to a toll-free number is free
		 * of charge. A number can't be toll and toll-free at the same time.
		 */
		TOLL_FREE = "TOLL_FREE",
		/**
		 * Do not use. Here only as a default value for compatibility reasons.
		 */
		UNKNOWN_FEATURE = "UNKNOWN_FEATURE",
	}

	enum EntryPointType {
		/**
		 * A link to more information about entry points into a conference. A conference can have zero or
		 * one <code>MORE</code> entry points. A conference with only a <code>MORE</code> entry point is not valid.
		 */
		MORE = "MORE",
		/**
		 * A phone entry point for a conference. A conference can have zero or more <code>PHONE</code> entry
		 * points.
		 */
		PHONE = "PHONE",
		/**
		 * A SIP entry point for a conference. A conference can have zero or one <code>SIP</code> entry points.
		 */
		SIP = "SIP",
		/**
		 * A video entry point for a conference. A conference can have zero or one <code>VIDEO</code> entry
		 * points.
		 */
		VIDEO = "VIDEO",
	}

}
