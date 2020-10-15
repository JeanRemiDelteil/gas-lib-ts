/** Module: ScriptApp */

type ScriptApp = typeof ScriptApp;
declare namespace ScriptApp {

	/**
	 * Removes the given trigger so it no longer runs.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Deletes all triggers in the current project.
	 * var triggers = ScriptApp.getProjectTriggers();
	 * for (var i = 0; i &lt; triggers.length; i++) {
	 *   ScriptApp.deleteTrigger(triggers[i]);
	 * }
	 * </code></pre>
	 * 
	 * @param trigger - The trigger to delete.
	 */
	function deleteTrigger(
		trigger: ScriptApp.Trigger
	): void
	/**
	 * Gets an object used to determine whether the user needs to authorize this script to use one or
	 * more services, and to provide the URL for an authorization dialog. If the script is published
	 * as an <a href="/gsuite/add-ons/overview">add-on</a> that uses <a
	 * href="/apps-script/understanding_triggers">installable triggers</a>, this information can be
	 * used to control access to sections of code for which the user lacks the necessary
	 * authorization. Alternately, the add-on can ask the user to open the URL for the authorization
	 * dialog to resolve the problem.
	 * 
	 * <pre class="prettyprint"><code>
	 * var authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
	 * status = authInfo.getAuthorizationStatus();
	 * url = authInfo.getAuthorizationUrl();
	 * </code></pre>
	 * 
	 * @param authMode - the authorization mode for which authorization information is requested; in
	 *     almost all cases, the value for <code>authMode</code> should be <code>ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL)</code>, since no other authorization mode
	 *     requires that users grant authorization
	 * 
	 * @returns an object that can provide information about the user's authorization status
	 */
	function getAuthorizationInfo(
		authMode: ScriptApp.AuthMode
	): ScriptApp.AuthorizationInfo
	/**
	 * Gets an <a href="/identity/protocols/OpenIDConnect">OpenID Connect</a> identity token for the
	 * effective user, if the <code>openid</code> scope has been granted. This scope is not included
	 * by default, and you must add it as an <a
	 * href="/apps-script/concepts/scopes#setting_explicit_scopes">explicit scope</a> in the manifest
	 * file to request it. Include the scopes <code>https://www.googleapis.com/auth/userinfo.email
	 * </code> or <code>https://www.googleapis.com/auth/userinfo.profile</code> to return additional
	 * user information in the token.
	 * 
	 * <p>The returned ID token is an encoded <a href="https://jwt.io/">JSON Web Token (JWT)</a>, and
	 * it must be decoded to extract information from it. The following examples shows how to decode
	 * the token and extract the effective user's Google profile ID.
	 * 
	 * <pre class="prettyprint"><code>
	 * var idToken = ScriptApp.getIdentityToken();
	 * var body = idToken.split(&#39;.&#39;)[1];
	 * var decoded = Utilities.newBlob(Utilities.base64Decode(body)).getDataAsString();
	 * var payload = JSON.parse(decoded);
	 * var profileId = payload.sub;
	 * Logger.log(&#39;Profile ID: &#39; + profileId);
	 * </code></pre>
	 * 
	 * See the <a href="/identity/protocols/OpenIDConnect#obtainuserinfo">OpenID Connect</a>
	 * documentation for the full list of fields (claims) returned.
	 * 
	 * @returns The identity token if available; otherwise <code>null</code>.
	 */
	function getIdentityToken(): string
	/**
	 * Returns an enum value that indicates how the script came to be installed as an add-on for the
	 * current user (for example, whether the user installed it personally through the Chrome Web
	 * Store, or whether a domain administrator installed it for all users).
	 * 
	 * @returns The source of installation.
	 */
	function getInstallationSource(): ScriptApp.InstallationSource
	/**
	 * Gets the OAuth 2.0 <a href="http://tools.ietf.org/html/rfc6749#section-1.4">access token</a>
	 * for the effective user. If the script's OAuth scopes are sufficient to authorize another Google
	 * API that normally requires its own OAuth flow (like <a
	 * href="/apps-script/guides/dialogs#file-open_dialogs">Google Picker</a>), scripts can bypass the
	 * second authorization prompt by passing this token instead. The token expires after a time (a
	 * few minutes at minimum); scripts should handle authorization failures and call this method to
	 * obtain a fresh token when needed.
	 * 
	 * <p>The token returned by this method only includes scopes that the script currently needs.
	 * Scopes that were previously authorized but are no longer used by the script are not included in
	 * the returned token. If additional OAuth scopes are needed beyond what the script itself
	 * requires, they can be <a
	 * href="/apps-script/concepts/scopes#setting_explicit_scopes">specified</a> in the script's
	 * manifest file.
	 * 
	 * @returns A string representation of the OAuth 2.0 token.
	 */
	function getOAuthToken(): string
	/**
	 * Gets the project key of the current script. The project key is a unique identifier for scripts
	 * and used to compose the callback URL used in conjunction with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/script-app.html#newStateToken()'>newStateToken()</a></code>.
	 * 
	 * <p>When called in a <a href="/apps-script/guides/libraries">library</a>, this returns the
	 * project key of the outer-most script being executed.
	 * 
	 * @returns The project key of the current script.
	 */
	function getProjectKey(): string
	/**
	 * Gets all installable triggers associated with the current project and current user.
	 * 
	 * <pre class="prettyprint"><code>
	 * Logger.log(&#39;Current project has &#39; + ScriptApp.getProjectTriggers().length + &#39; triggers.&#39;);
	 * </code></pre>
	 * 
	 * @returns An array of the current user's triggers associated with this project.
	 */
	function getProjectTriggers(): ScriptApp.Trigger[]
	/**
	 * Gets the script project's unique ID. This is the preferred method to get the unique identifier
	 * for the script project as opposed to <code><s><a target='_blank' href='https://developers.google.com/apps-script/reference/script/script-app.html#getProjectKey()'>getProjectKey()</a></s></code>. This ID can be used in all places
	 * where project key was previously provided.
	 * 
	 * @returns The script project's ID.
	 */
	function getScriptId(): string
	/**
	 * Gets all installable triggers associated with the current project and current user.
	 * 
	 * <pre class="prettyprint"><code>
	 * Logger.log(&#39;Current script has &#39; + ScriptApp.getScriptTriggers().length + &#39; triggers.&#39;);
	 * </code></pre>
	 * 
	 * @returns An array of the current user's triggers associated with this project.
	 */
	function getScriptTriggers(): ScriptApp.Trigger[]
	/**
	 * Gets an object used to control publishing the script as a web app.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Get the URL of the published web app.
	 * var url = ScriptApp.getService().getUrl();
	 * </code></pre>
	 * 
	 * @returns An object used to observe and control publishing the script as a web app.
	 */
	function getService(): ScriptApp.Service
	/**
	 * Gets all installable triggers owned by this user in the given document, for this script or
	 * add-on only. This method cannot be used to see the triggers attached to other scripts.
	 * 
	 * <pre class="prettyprint"><code>
	 * var doc = DocumentApp.getActiveDocument();
	 * var triggers = ScriptApp.getUserTriggers(doc);
	 * // Log the handler function for the first trigger in the array.
	 * Logger.log(triggers[0].getHandlerFunction());
	 * </code></pre>
	 * 
	 * @param document - A Google Docs file that may contain installable triggers.
	 * 
	 * @returns An array of triggers owned by this user in the given document.
	 */
	function getUserTriggers(
		document: DocumentApp.Document
	): ScriptApp.Trigger[]
	/**
	 * Gets all installable triggers owned by this user in the given form, for this script or add-on
	 * only. This method cannot be used to see the triggers attached to other scripts.
	 * 
	 * <pre class="prettyprint"><code>
	 * var form = FormApp.getActiveForm();
	 * var triggers = ScriptApp.getUserTriggers(form);
	 * // Log the trigger source for the first trigger in the array.
	 * Logger.log(triggers[0].getTriggerSource());
	 * </code></pre>
	 * 
	 * @param form - A Google Forms file that may contain installable triggers.
	 * 
	 * @returns An array of triggers owned by this user in the given form.
	 */
	function getUserTriggers(
		form: FormApp.Form
	): ScriptApp.Trigger[]
	/**
	 * Gets all installable triggers owned by this user in the given spreadsheet, for this script or
	 * add-on only. This method cannot be used to see the triggers attached to other scripts.
	 * 
	 * <pre class="prettyprint"><code>
	 * var ss = SpreadsheetApp.getActiveSpreadsheet();
	 * var triggers = ScriptApp.getUserTriggers(ss);
	 * // Log the event type for the first trigger in the array.
	 * Logger.log(triggers[0].getEventType());
	 * </code></pre>
	 * 
	 * @param spreadsheet - A Google Sheets file that may contain installable triggers.
	 * 
	 * @returns An array of triggers owned by this user in the given spreadsheet.
	 */
	function getUserTriggers(
		spreadsheet: SpreadsheetApp.Spreadsheet
	): ScriptApp.Trigger[]

	/**
	 * Invalidates the authorization the effective user has to execute the current script. Used to
	 * invalidate any permissions for the current script. This is especially useful for functions
	 * tagged as one-shot authorization. Since one-shot authorization functions can only be called the
	 * first run after the script has acquired authorization, if you wish to perform an action
	 * afterwards, you must revoke any authorization the script had, so the user can see the
	 * authorization dialog again.
	 * 
	 * <pre class="prettyprint"><code>
	 * ScriptApp.invalidateAuth();
	 * </code></pre>
	 */
	function invalidateAuth(): void
	/**
	 * Creates a builder for a state token that can be used in a callback API (like an OAuth flow).
	 * 
	 * <pre class="prettyprint"><code>
	 * // Generate a callback URL, given the name of a callback function. The script does not need to
	 * // be published as a web app; the /usercallback URL suffix replaces /edit in any script&#39;s URL.
	 * function getCallbackURL(callbackFunction) {
	 *   // IMPORTANT: Replace string below with the URL from your script, minus the /edit at the end.
	 *   var scriptUrl = &#39;https://script.google.com/macros/d/1234567890abcdefghijklmonpqrstuvwxyz&#39;;
	 *   var urlSuffix = &#39;/usercallback?state=&#39;;
	 *   var stateToken = ScriptApp.newStateToken()
	 *       .withMethod(callbackFunction)
	 *       .withTimeout(120)
	 *       .createToken();
	 *   return scriptUrl + urlSuffix + stateToken;
	 * }
	 * </code></pre>
	 * 
	 * <p>In most OAuth2 flows, the <code>state</code> token is passed to the authorization endpoint
	 * directly (not as part of the callback URL), and the authorization endpoint then passes it as
	 * part of the callback URL.
	 * 
	 * <p>For example:
	 * 
	 * <ul>
	 *   <li>The script redirects the user to OAuth2 authorize URL: <code>https://accounts.google.com/o/oauth2/auth?state=token_generated_with_this_method&amp;callback_uri=https://script.google.com/macros/d/1234567890abcdefghijklmonpqrstuvwxyz/usercallback&amp;other_oauth2_parameters
	 *       </code>
	 *   <li>The user clicks authorize, and the OAuth2 authorization page redirects the user back to
	 *       <code>https://script.google.com/macros/d/1234567890abcdefghijklmonpqrstuvwxyz/usercallback?state=token_generated_with_this_method&amp;other_params_that_include_tokens_or_grants
	 *       </code>
	 *   <li>The above redirect (back to <code>http://script.google.com/...</code>), causes the browser
	 *       request to <code>/usercallback</code>, which invokes the method specified by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/state-token-builder.html#withMethod(String)'>StateTokenBuilder.withMethod(method)</a></code>.
	 * </ul>
	 * 
	 * @returns An object used to continue the state-token-building process.
	 */
	function newStateToken(): ScriptApp.StateTokenBuilder
	/**
	 * Begins the process of creating an installable trigger that, when fired, calls a given function.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Creates an edit trigger for a spreadsheet identified by ID.
	 * ScriptApp.newTrigger(&#39;myFunction&#39;)
	 *     .forSpreadsheet(&#39;1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3&#39;)
	 *     .onEdit()
	 *     .create();
	 * </code></pre>
	 * 
	 * @param functionName - The function to call when the trigger fires. You can use functions from
	 *     included libraries, such as <code>Library.libFunction1</code>.
	 * 
	 * @returns An object used to continue the trigger-building process.
	 */
	function newTrigger(
		functionName: string
	): ScriptApp.TriggerBuilder

	enum AuthMode {
		/**
		 * A mode that allows access to a limited subset of services for use in custom spreadsheet
		 * functions. Some of these services — including read-only access to Spreadsheet service —
		 * normally require authorization, but are permitted without authorization when used in a custom
		 * function. Because custom functions do not include an event parameter, this value is never
		 * returned; it is documented only to demonstrate that custom functions run in their own
		 * authorization mode.
		 */
		CUSTOM_FUNCTION = "CUSTOM_FUNCTION",
		/**
		 * A mode that allows access to all services that require authorization. This mode occurs when an
		 * add-on or a script executes as the result of any trigger other than the cases described for
		 * <code>LIMITED</code> or <code>NONE</code>.
		 */
		FULL = "FULL",
		/**
		 * A mode that allows access to a limited subset of services. This mode occurs when an add-on or a
		 * script <a href="/apps-script/scripts_containers">bound</a> to a document executes an <code>onOpen(e)</code> or <code>onEdit(e)</code> simple trigger, except in the case described for <code>NONE</code>.
		 */
		LIMITED = "LIMITED",
		/**
		 * A mode that does not allow access to any services that require authorization. This mode occurs
		 * when an add-on executes an <code>onOpen(e)</code> simple trigger, and the user has installed an
		 * add-on in a different document but the add-on has not been used in the current document.
		 */
		NONE = "NONE",
	}

	class AuthorizationInfo {
		private constructor();

		/**
		 * Gets a value that indicates whether the user needs to authorize this script to use one or more
		 * services (for example, <code>ScriptApp.AuthorizationStatus.REQUIRED</code>).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the authorization status (REQUIRED or NOT_REQUIRED).
		 * var authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
		 * Logger.log(authInfo.getAuthorizationStatus());
		 * </code></pre>
		 * 
		 * @returns the authorization status
		 */
		getAuthorizationStatus(): ScriptApp.AuthorizationStatus
		/**
		 * Gets the authorization URL that can be used to grant access to the script. This method returns
		 * <code>null</code> if no authorization is required. The page at the URL will close automatically if
		 * it is accessed and the script does not require any authorization.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log the URL used to grant access to the script.
		 * var authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
		 * Logger.log(authInfo.getAuthorizationUrl());
		 * </code></pre>
		 * 
		 * @returns a URL that can be used to authorize the script
		 */
		getAuthorizationUrl(): string

	}

	enum AuthorizationStatus {
		/**
		 * The user has granted this script all the authorization it currently requires.
		 */
		NOT_REQUIRED = "NOT_REQUIRED",
		/**
		 * The user needs to authorize this script to use one or more services. In most cases, the script
		 * prompts the user for authorization the next time it runs; however, if the script is published
		 * as an <a href="/gsuite/add-ons/overview">add-on</a> that uses <a
		 * href="/apps-script/understanding_triggers">installable triggers</a>, the trigger runs the
		 * script without prompting for authorization but throws an exception if the script attempts to
		 * call the unauthorized service.
		 */
		REQUIRED = "REQUIRED",
	}

	class CalendarTriggerBuilder {
		private constructor();

		/**
		 * Creates the trigger and returns it.
		 * 
		 * @returns The new trigger.
		 */
		create(): ScriptApp.Trigger
		/**
		 * Specifies a trigger that fires when a calendar entry is created, updated, or deleted.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/calendar-trigger-builder.html'>CalendarTriggerBuilder</a></code>, for chaining.
		 */
		onEventUpdated(): ScriptApp.CalendarTriggerBuilder

	}

	class ClockTriggerBuilder {
		private constructor();

		/**
		 * Specifies the minimum duration (in milliseconds) after the current time that the trigger runs.
		 * The actual duration might vary, but won't be less than your specified minimum.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a trigger that runs 10 minutes later
		 * ScriptApp.newTrigger(&quot;myFunction&quot;)
		 *   .timeBased()
		 *   .after(10 * 60 * 1000)
		 *   .create();
		 * </code></pre>
		 * 
		 * @param durationMilliseconds - The minimum duration (in milliseconds) after the current time when
		 *     the trigger should run.
		 * 
		 * @returns The builder, for chaining.
		 */
		after(
			durationMilliseconds: number
		): ScriptApp.ClockTriggerBuilder
		/**
		 * Specifies when the trigger runs.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a trigger for December 1, 2012
		 * var triggerDay = new Date(2012, 11, 1);
		 * ScriptApp.newTrigger(&quot;myFunction&quot;)
		 *   .timeBased()
		 *   .at(triggerDay)
		 *   .create();
		 * </code></pre>
		 * 
		 * @param date - A Date object representing when the trigger should run.
		 * 
		 * @returns The builder, for chaining.
		 */
		at(
			date: Date
		): ScriptApp.ClockTriggerBuilder
		/**
		 * Specifies that the trigger fires on the given date, by default near midnight (+/- 15 minutes).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Schedules for January 1st, 2013
		 * ScriptApp.newTrigger(&quot;myFunction&quot;)
		 *   .timeBased()
		 *   .atDate(2013, 1, 1)
		 *   .create();
		 * </code></pre>
		 * 
		 * @param year - The calendar year to schedule the trigger.
		 * @param month - The calendar month to schedule the trigger (should be a number between 1 and 12,
		 *     inclusive).
		 * @param day - The calendar day to schedule the trigger (should be a number between 1 and 31,
		 *     inclusive).
		 * 
		 * @returns The builder, for chaining.
		 */
		atDate(
			year: number,
			month: number,
			day: number
		): ScriptApp.ClockTriggerBuilder
		/**
		 * Specifies the hour the trigger at which the trigger runs.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Runs between 5am-6am in the timezone of the script
		 * ScriptApp.newTrigger(&quot;myFunction&quot;)
		 *   .timeBased()
		 *   .atHour(5)
		 *   .everyDays(1) // Frequency is required if you are using atHour() or nearMinute()
		 *   .create();
		 * </code></pre>
		 * 
		 * @param hour - The hour at which to fire.
		 * 
		 * @returns The builder, for chaining.
		 */
		atHour(
			hour: number
		): ScriptApp.ClockTriggerBuilder
		/**
		 * Creates the trigger.
		 * 
		 * @returns The newly created, scheduled trigger.
		 */
		create(): ScriptApp.Trigger
		/**
		 * Specifies to run the trigger every <code>n</code> days.
		 * 
		 * <pre class="prettyprint"><code>
		 * ScriptApp.newTrigger(&quot;myFunction&quot;)
		 *   .timeBased()
		 *   .everyDays(3)
		 *   .create();
		 * </code></pre>
		 * 
		 * @param n - The number of days between executions.
		 * 
		 * @returns The builder, for chaining.
		 */
		everyDays(
			n: number
		): ScriptApp.ClockTriggerBuilder
		/**
		 * Specifies to run the trigger every <code>n</code> hours.
		 * 
		 * <pre class="prettyprint"><code>
		 * ScriptApp.newTrigger(&quot;myFunction&quot;)
		 *   .timeBased()
		 *   .everyHours(12)
		 *   .create();
		 * </code></pre>
		 * 
		 * @param n - The number of hours between executions.
		 * 
		 * @returns The builder, for chaining.
		 */
		everyHours(
			n: number
		): ScriptApp.ClockTriggerBuilder
		/**
		 * Specifies to run the trigger every <code>n</code> minutes. <code>n</code> must be 1, 5, 10, 15 or 30.
		 * 
		 * <pre class="prettyprint"><code>
		 * ScriptApp.newTrigger(&quot;myFunction&quot;)
		 *   .timeBased()
		 *   .everyMinutes(10)
		 *   .create();
		 * </code></pre>
		 * 
		 * @param n - The number of minutes between executions.
		 * 
		 * @returns The builder, for chaining.
		 */
		everyMinutes(
			n: number
		): ScriptApp.ClockTriggerBuilder
		/**
		 * Specifies to run the trigger every <code>n</code> weeks.
		 * 
		 * <pre class="prettyprint"><code>
		 * ScriptApp.newTrigger(&quot;myFunction&quot;)
		 *   .timeBased()
		 *   .everyWeeks(2)
		 *   .create();
		 * </code></pre>
		 * 
		 * @param n - The number of weeks between executions.
		 * 
		 * @returns The builder, for chaining.
		 */
		everyWeeks(
			n: number
		): ScriptApp.ClockTriggerBuilder
		/**
		 * Specifies the timezone for the specified dates/time when the trigger runs. By default, the
		 * timezone is that of the script.
		 * 
		 * <p>The list of valid timezone strings corresponds with the valid timezone strings listed by <a
		 * href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>. An invalid timezone string
		 * causes the script to throw an error.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Schedule the trigger to execute at noon every day in the US/Pacific time zone
		 * ScriptApp.newTrigger(&quot;myFunction&quot;)
		 *   .timeBased()
		 *   .atHour(12)
		 *   .everyDays(1)
		 *   .inTimezone(&quot;America/Los_Angeles&quot;)
		 *   .create();
		 * </code></pre>
		 * 
		 * @param timezone - The timezone with which to treat time information in the event.
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/clock-trigger-builder.html'>ClockTriggerBuilder</a></code>, for chaining.
		 */
		inTimezone(
			timezone: string
		): ScriptApp.ClockTriggerBuilder
		/**
		 * Specifies the minute at which the trigger runs (plus or minus 15 minutes). If <code>nearMinute()</code> is not called, a random minute value is used.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Runs at approximately 5:30am in the timezone of the script
		 * ScriptApp.newTrigger(&quot;myFunction&quot;)
		 *   .timeBased()
		 *   .atHour(5)
		 *   .nearMinute(30)
		 *   .everyDays(1) // Frequency is required if you are using atHour() or nearMinute()
		 *   .create();
		 * </code></pre>
		 * 
		 * @param minute - The minute at which to fire.
		 * 
		 * @returns The builder, for chaining.
		 */
		nearMinute(
			minute: number
		): ScriptApp.ClockTriggerBuilder
		/**
		 * Specifies the date in the month that the trigger runs.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Schedules for the first of every month
		 * ScriptApp.newTrigger(&quot;myFunction&quot;)
		 *   .timeBased()
		 *   .onMonthDay(1)
		 *   .create();
		 * </code></pre>
		 * 
		 * @param day - The day of the month the trigger should be scheduled for.
		 * 
		 * @returns The builder, for chaining.
		 */
		onMonthDay(
			day: number
		): ScriptApp.ClockTriggerBuilder
		/**
		 * Specifies the day of the week that the trigger runs.
		 * 
		 * <pre class="prettyprint"><code>
		 * ScriptApp.newTrigger(&quot;myFunction&quot;)
		 *   .timeBased()
		 *   .onWeekDay(ScriptApp.WeekDay.FRIDAY)
		 *   .create();
		 * </code></pre>
		 * 
		 * @param day - The day of the week to fire.
		 * 
		 * @returns The builder, for chaining.
		 */
		onWeekDay(
			day: Weekday
		): ScriptApp.ClockTriggerBuilder

	}

	class DocumentTriggerBuilder {
		private constructor();

		/**
		 * Creates and returns the new trigger.
		 * 
		 * @returns The new trigger.
		 */
		create(): ScriptApp.Trigger
		/**
		 * Specifies a trigger that will fire when the document is opened.
		 * 
		 * <pre class="prettyprint"><code>
		 * var document = DocumentApp.getActiveDocument();
		 * ScriptApp.newTrigger(&#39;myFunction&#39;)
		 *   .forDocument(document)
		 *   .onOpen()
		 *   .create();
		 * </code></pre>
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/document-trigger-builder.html'>DocumentTriggerBuilder</a></code>, for chaining.
		 */
		onOpen(): ScriptApp.DocumentTriggerBuilder

	}

	enum EventType {
		/**
		 * The trigger fires once the time-driven event reaches a specific time.
		 */
		CLOCK = "CLOCK",
		/**
		 * The trigger fires once the user changes the Google Sheets file (for example, by adding a row,
		 * which counts as a change instead of an edit).
		 */
		ON_CHANGE = "ON_CHANGE",
		/**
		 * The trigger fires once the user edits the Google Sheets file (for example, by entering a new
		 * value into a cell, which counts as an edit instead of a change).
		 */
		ON_EDIT = "ON_EDIT",
		/**
		 * The trigger fires once an event gets created, updated, or deleted on the specified Google
		 * Calendar.
		 */
		ON_EVENT_UPDATED = "ON_EVENT_UPDATED",
		/**
		 * The trigger fires once the user responds to a Google Form. This trigger is available either in
		 * the Google Form itself or in the Google Sheets file that the form sends its responses to.
		 */
		ON_FORM_SUBMIT = "ON_FORM_SUBMIT",
		/**
		 * The trigger fires once the user opens the Google Docs, Sheets, or Forms file.
		 */
		ON_OPEN = "ON_OPEN",
	}

	class FormTriggerBuilder {
		private constructor();

		/**
		 * Creates and returns the new trigger.
		 * 
		 * @returns The new trigger.
		 */
		create(): ScriptApp.Trigger
		/**
		 * Specifies a trigger that will fire when a response is submitted to the form.
		 * 
		 * <pre class="prettyprint"><code>
		 * var form = FormApp.openById(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;);
		 * ScriptApp.newTrigger(&#39;myFunction&#39;)
		 *     .forForm(form)
		 *     .onFormSubmit()
		 *     .create();
		 * </code></pre>
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/form-trigger-builder.html'>FormTriggerBuilder</a></code>, for chaining
		 */
		onFormSubmit(): ScriptApp.FormTriggerBuilder
		/**
		 * Specifies a trigger that will fire when the form's edit view is opened.
		 * 
		 * <pre class="prettyprint"><code>
		 * var form = FormApp.getActiveForm();
		 * ScriptApp.newTrigger(&#39;myFunction&#39;)
		 *     .forForm(form)
		 *     .onOpen()
		 *     .create();
		 * </code></pre>
		 * 
		 * @returns This <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/form-trigger-builder.html'>FormTriggerBuilder</a></code>, for chaining.
		 */
		onOpen(): ScriptApp.FormTriggerBuilder

	}

	enum InstallationSource {
		/**
		 * Add-on was installed by the administrator for the user's domain.
		 */
		APPS_MARKETPLACE_DOMAIN_ADD_ON = "APPS_MARKETPLACE_DOMAIN_ADD_ON",
		/**
		 * Script is not running as an add-on.
		 */
		NONE = "NONE",
		/**
		 * Add-on was installed by the user from the Chrome Web Store.
		 */
		WEB_STORE_ADD_ON = "WEB_STORE_ADD_ON",
	}

	class Service {
		private constructor();

		/**
		 * Disables the script from being accessed as a web app. This method is equivalent to opening the
		 * "Publish > Deploy as web app" dialog and clicking "disable web app".
		 * 
		 * <pre class="prettyprint"><code>
		 * ScriptApp.getService().disable();
		 * </code></pre>
		 */
		disable(): void
		/**
		 * Returns the URL of the web app, if it has been deployed; otherwise returns <code>null</code>. If you
		 * are running the development mode web app, this returns the development mode url.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Mail the URL of the published web app.
		 * MailApp.sendMail(&quot;myself@example.com&quot;, &quot;My Snazzy App&quot;,
		 *   &quot;My new app is now available at &quot; + ScriptApp.getService().getUrl());
		 * </code></pre>
		 * 
		 * @returns the URL of the web app
		 */
		getUrl(): string
		/**
		 * Returns <code>true</code> if the script is accessible as a web app.
		 * 
		 * @returns <code>true</code> if the script is published as a web app; <code>false</code> if not
		 */
		isEnabled(): Boolean

	}

	class SpreadsheetTriggerBuilder {
		private constructor();

		/**
		 * Creates the trigger and returns it.
		 * 
		 * @returns The created trigger.
		 */
		create(): ScriptApp.Trigger
		/**
		 * Specifies a trigger that will fire when the spreadsheet's content or structure is changed.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActive();
		 * ScriptApp.newTrigger(&quot;myFunction&quot;)
		 *   .forSpreadsheet(sheet)
		 *   .onChange()
		 *   .create();
		 * </code></pre>
		 * 
		 * @returns a builder for chaining
		 */
		onChange(): ScriptApp.SpreadsheetTriggerBuilder
		/**
		 * Specifies a trigger that will fire when the spreadsheet is edited.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActive();
		 * ScriptApp.newTrigger(&quot;myFunction&quot;)
		 *   .forSpreadsheet(sheet)
		 *   .onEdit()
		 *   .create();
		 * </code></pre>
		 * 
		 * @returns a builder for chaining
		 */
		onEdit(): ScriptApp.SpreadsheetTriggerBuilder
		/**
		 * Specifies a trigger that will fire when the spreadsheet has a form submitted to it.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActive();
		 * ScriptApp.newTrigger(&quot;myFunction&quot;)
		 *   .forSpreadsheet(sheet)
		 *   .onFormSubmit()
		 *   .create();
		 * </code></pre>
		 * 
		 * @returns A builder for chaining.
		 */
		onFormSubmit(): ScriptApp.SpreadsheetTriggerBuilder
		/**
		 * Specifies a trigger that will fire when the spreadsheet is opened.
		 * 
		 * <pre class="prettyprint"><code>
		 * var sheet = SpreadsheetApp.getActive();
		 * ScriptApp.newTrigger(&quot;myFunction&quot;)
		 *   .forSpreadsheet(sheet)
		 *   .onOpen()
		 *   .create();
		 * </code></pre>
		 * 
		 * @returns a builder for chaining
		 */
		onOpen(): ScriptApp.SpreadsheetTriggerBuilder

	}

	class StateTokenBuilder {
		private constructor();

		/**
		 * Constructs an encrypted string representation of the state token.
		 * 
		 * <pre class="prettyprint"><code>
		 * var stateToken = ScriptApp.newStateToken().createToken();
		 * </code></pre>
		 * 
		 * @returns an encrypted string representing the token
		 */
		createToken(): string
		/**
		 * Adds an argument to the token. This method can be called multiple times.
		 * 
		 * <pre class="prettyprint"><code>
		 * var stateToken = ScriptApp.newStateToken().withArgument(&#39;myField&#39;, &#39;myValue&#39;).createToken();
		 * </code></pre>
		 * 
		 * @param name - the name of the argument
		 * @param value - the value of the argument
		 * 
		 * @returns the state token builder, for chaining
		 */
		withArgument(
			name: string,
			value: string
		): ScriptApp.StateTokenBuilder
		/**
		 * Sets a callback function. The default is a function named <code>callback()</code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var stateToken = ScriptApp.newStateToken().withMethod(&#39;myCallback&#39;).createToken();
		 * </code></pre>
		 * 
		 * @param method - The name of the callback function, represented as a string without parentheses or
		 *     arguments. You can use functions from included libraries, such as <code>
		 *     Library.libFunction1</code>.
		 * 
		 * @returns the state token builder, for chaining
		 */
		withMethod(
			method: string
		): ScriptApp.StateTokenBuilder
		/**
		 * Sets the duration (in seconds) for which the token is valid. The defaults is 60 seconds; the
		 * maximum duration is 3600 seconds (1 hour).
		 * 
		 * <pre class="prettyprint"><code>
		 * var stateToken = ScriptApp.newStateToken().withTimeout(60).createToken();
		 * </code></pre>
		 * 
		 * @param seconds - the duration for which the token is valid; the maximum value is <code>3600</code>
		 * 
		 * @returns the state token builder, for chaining
		 */
		withTimeout(
			seconds: number
		): ScriptApp.StateTokenBuilder

	}

	class Trigger {
		private constructor();

		/**
		 * Returns the event type that the trigger fires on.
		 * 
		 * <pre class="prettyprint"><code>
		 * var triggers = ScriptApp.getProjectTriggers();
		 * for (var i = 0; i &lt; triggers.length; i++) {
		 *   if (triggers[i].getEventType() == ScriptApp.EventType.CLOCK) {
		 *     // Some code here - other options are:
		 *     // ScriptApp.EventType.ON_EDIT
		 *     // ScriptApp.EventType.ON_FORM_SUBMIT
		 *     // ScriptApp.EventType.ON_OPEN
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns the event type that this is a trigger for
		 */
		getEventType(): ScriptApp.EventType
		/**
		 * Returns the function that will be called when the trigger fires.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Create a trigger for the script.
		 * ScriptApp.newTrigger(&#39;myFunction&#39;).forSpreadsheet(&#39;id of my spreadsheet&#39;).onEdit().create();
		 * Logger.log(ScriptApp.getProjectTriggers()[0].getHandlerFunction()); // logs &quot;myFunction&quot;
		 * </code></pre>
		 * 
		 * @returns the method name
		 */
		getHandlerFunction(): string
		/**
		 * Returns the source of events that will cause the trigger to fire.
		 * 
		 * <p>For example, a spreadsheet onEdit trigger would return SPREADSHEETS, or a time based trigger
		 * would return CLOCK.
		 * 
		 * <pre class="prettyprint"><code>
		 * var triggers = ScriptApp.getProjectTriggers();
		 * for (var i = 0; i &lt; triggers.length; i++) {
		 *   if (triggers[i].getTriggerSource() == ScriptApp.TriggerSource.CLOCK) {
		 *     Logger.log(triggers[i].getUniqueId() + &quot; source is clock&quot;);
		 *   } else if (triggers[i].getTriggerSource() == ScriptApp.TriggerSource.SPREADSHEETS) {
		 *     Logger.log(triggers[i].getUniqueId() + &quot; source is spreadsheets&quot;);
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns the publisher this is a trigger for
		 */
		getTriggerSource(): ScriptApp.TriggerSource
		/**
		 * Returns the id specific to the source.
		 * 
		 * <p>For example, if the trigger source is a spreadsheet, this would be the id of the
		 * spreadsheet. For clock events this returns null.
		 * 
		 * @returns the id of the entity in the publisher that this is a trigger for
		 */
		getTriggerSourceId(): string
		/**
		 * Returns a unique identifier that can be used to distinguish triggers from each other.
		 * 
		 * @returns the unique identifier of the trigger
		 */
		getUniqueId(): string

	}

	class TriggerBuilder {
		private constructor();

		/**
		 * Creates and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/document-trigger-builder.html'>DocumentTriggerBuilder</a></code> tied to the given document.
		 * 
		 * <pre class="prettyprint"><code>
		 * ScriptApp.newTrigger(&#39;myFunction&#39;)
		 *   .forDocument(DocumentApp.getActiveDocument())
		 *   .onOpen()
		 *   .create();
		 * </code></pre>
		 * 
		 * @param document - the document
		 * 
		 * @returns the new DocumentTriggerBuilder
		 */
		forDocument(
			document: DocumentApp.Document
		): ScriptApp.DocumentTriggerBuilder
		/**
		 * Creates and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/document-trigger-builder.html'>DocumentTriggerBuilder</a></code> tied to the document with the given ID.
		 * 
		 * <pre class="prettyprint"><code>
		 * ScriptApp.newTrigger(&#39;myFunction&#39;)
		 *   .forDocument(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;)
		 *   .onOpen()
		 *   .create();
		 * </code></pre>
		 * 
		 * @param key - the ID for the document
		 * 
		 * @returns the new DocumentTriggerBuilder
		 */
		forDocument(
			key: string
		): ScriptApp.DocumentTriggerBuilder

		/**
		 * Creates and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/form-trigger-builder.html'>FormTriggerBuilder</a></code> tied to the given form.
		 * 
		 * <pre class="prettyprint"><code>
		 * ScriptApp.newTrigger(&#39;myFunction&#39;)
		 *   .forForm(FormApp.getActiveForm())
		 *   .onFormSubmit()
		 *   .create();
		 * </code></pre>
		 * 
		 * @param form - the form
		 * 
		 * @returns the new FormTriggerBuilder
		 */
		forForm(
			form: FormApp.Form
		): ScriptApp.FormTriggerBuilder
		/**
		 * Creates and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/form-trigger-builder.html'>FormTriggerBuilder</a></code> tied to the form with the given ID.
		 * 
		 * <pre class="prettyprint"><code>
		 * ScriptApp.newTrigger(&#39;myFunction&#39;)
		 *   .forForm(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;)
		 *   .onFormSubmit()
		 *   .create();
		 * </code></pre>
		 * 
		 * @param key - the ID for the form
		 * 
		 * @returns the new FormTriggerBuilder
		 */
		forForm(
			key: string
		): ScriptApp.FormTriggerBuilder

		/**
		 * Creates and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder.html'>SpreadsheetTriggerBuilder</a></code> tied to the given spreadsheet.
		 * 
		 * <pre class="prettyprint"><code>
		 * ScriptApp.newTrigger(&#39;myFunction&#39;)
		 *   .forSpreadsheet(SpreadsheetApp.getActive())
		 *   .onEdit()
		 *   .create();
		 * </code></pre>
		 * 
		 * @param sheet - the spreadsheet
		 * 
		 * @returns the new SpreadsheetTriggerBuilder
		 */
		forSpreadsheet(
			sheet: SpreadsheetApp.Spreadsheet
		): ScriptApp.SpreadsheetTriggerBuilder
		/**
		 * Creates and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder.html'>SpreadsheetTriggerBuilder</a></code> tied to the spreadsheet with the given
		 * ID.
		 * 
		 * <pre class="prettyprint"><code>
		 * ScriptApp.newTrigger(&#39;myFunction&#39;)
		 *   .forSpreadsheet(&#39;1234567890abcdefghijklmnopqrstuvwxyz&#39;)
		 *   .onEdit()
		 *   .create();
		 * </code></pre>
		 * 
		 * @param key - the ID for the spreadsheet
		 * 
		 * @returns the new SpreadsheetTriggerBuilder
		 */
		forSpreadsheet(
			key: string
		): ScriptApp.SpreadsheetTriggerBuilder

		/**
		 * Returns a builder for building calendar triggers.
		 * 
		 * @param emailId - email ID of the user calendar the trigger monitors.
		 * 
		 * @returns The new CalendarTriggerBuilder.
		 */
		forUserCalendar(
			emailId: string
		): ScriptApp.CalendarTriggerBuilder
		/**
		 * Creates and returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/script/clock-trigger-builder.html'>ClockTriggerBuilder</a></code> for building time-based triggers.
		 * 
		 * <pre class="prettyprint"><code>
		 * ScriptApp.newTrigger(&#39;myFunction&#39;)
		 *   .timeBased()
		 *   .atDate(2013, 10, 31)
		 *   .create();
		 * </code></pre>
		 * 
		 * @returns the new ClockTriggerBuilder
		 */
		timeBased(): ScriptApp.ClockTriggerBuilder

	}

	enum TriggerSource {
		/**
		 * Google Calendar causes the trigger to fire.
		 */
		CALENDAR = "CALENDAR",
		/**
		 * A time-driven event causes the trigger to fire.
		 */
		CLOCK = "CLOCK",
		/**
		 * Google Docs causes the trigger to fire.
		 */
		DOCUMENTS = "DOCUMENTS",
		/**
		 * Google Forms causes the trigger to fire.
		 */
		FORMS = "FORMS",
		/**
		 * Google Sheets causes the trigger to fire.
		 */
		SPREADSHEETS = "SPREADSHEETS",
	}

}
