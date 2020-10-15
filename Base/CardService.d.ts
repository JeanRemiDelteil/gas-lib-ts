/** Module: CardService */

type CardService = typeof CardService;
declare namespace CardService {

	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code>.
	 * 
	 * @returns An empty Action.
	 */
	function newAction(): CardService.Action
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response-builder.html'>ActionResponseBuilder</a></code>.
	 * 
	 * @returns An empty ActionResponse builder.
	 */
	function newActionResponseBuilder(): CardService.ActionResponseBuilder
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/authorization-action.html'>AuthorizationAction</a></code>.
	 * 
	 * @returns An empty AuthorizationAction.
	 */
	function newAuthorizationAction(): CardService.AuthorizationAction
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/authorization-exception.html'>AuthorizationException</a></code>.
	 * 
	 * @returns An empty AuthorizationException.
	 */
	function newAuthorizationException(): CardService.AuthorizationException
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button-set.html'>ButtonSet</a></code>.
	 * 
	 * @returns An empty ButtonSet.
	 */
	function newButtonSet(): CardService.ButtonSet
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response-builder.html'>CalendarEventActionResponseBuilder</a></code>.
	 * 
	 * @returns An empty <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response-builder.html'>CalendarEventActionResponseBuilder</a></code>.
	 */
	function newCalendarEventActionResponseBuilder(): CardService.CalendarEventActionResponseBuilder
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html'>CardAction</a></code>.
	 * 
	 * @returns An empty CardAction.
	 */
	function newCardAction(): CardService.CardAction
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-builder.html'>CardBuilder</a></code>.
	 * 
	 * @returns An empty Card builder.
	 */
	function newCardBuilder(): CardService.CardBuilder
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-header.html'>CardHeader</a></code>.
	 * 
	 * @returns An empty CardHeader.
	 */
	function newCardHeader(): CardService.CardHeader
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-section.html'>CardSection</a></code>.
	 * 
	 * @returns An empty CardSection.
	 */
	function newCardSection(): CardService.CardSection
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html'>ComposeActionResponseBuilder</a></code>.
	 * 
	 * @returns An empty ComposeActionResponse builder.
	 */
	function newComposeActionResponseBuilder(): CardService.ComposeActionResponseBuilder
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/date-picker.html'>DatePicker</a></code>.
	 * 
	 * @returns An empty DatePicker.
	 */
	function newDatePicker(): CardService.DatePicker
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/date-time-picker.html'>DateTimePicker</a></code>.
	 * 
	 * @returns An empty DateTimePicker.
	 */
	function newDateTimePicker(): CardService.DateTimePicker
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html'>DecoratedText</a></code>.
	 * 
	 * @returns An empty DecoratedText.
	 */
	function newDecoratedText(): CardService.DecoratedText
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/drive-items-selected-action-response-builder.html'>DriveItemsSelectedActionResponseBuilder</a></code>.
	 * 
	 * @returns An empty <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/drive-items-selected-action-response-builder.html'>DriveItemsSelectedActionResponseBuilder</a></code>.
	 */
	function newDriveItemsSelectedActionResponseBuilder(): CardService.DriveItemsSelectedActionResponseBuilder
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/fixed-footer.html'>FixedFooter</a></code>.
	 * 
	 * @returns An empty FixedFooter.
	 */
	function newFixedFooter(): CardService.FixedFooter
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html'>Image</a></code>.
	 * 
	 * @returns An empty Image.
	 */
	function newImage(): CardService.Image
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html'>ImageButton</a></code>.
	 * 
	 * @returns An empty ImageButton.
	 */
	function newImageButton(): CardService.ImageButton
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html'>KeyValue</a></code>.
	 * 
	 * @returns An empty KeyValue.
	 */
	function newKeyValue(): CardService.KeyValue
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/navigation.html'>Navigation</a></code>.
	 * 
	 * @returns An empty Navigation.
	 */
	function newNavigation(): CardService.Navigation
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/notification.html'>Notification</a></code>.
	 * 
	 * @returns An empty Notification.
	 */
	function newNotification(): CardService.Notification
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/open-link.html'>OpenLink</a></code>.
	 * 
	 * @returns An empty OpenLink.
	 */
	function newOpenLink(): CardService.OpenLink
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/selection-input.html'>SelectionInput</a></code>.
	 * 
	 * @returns An empty SelectionInput.
	 */
	function newSelectionInput(): CardService.SelectionInput
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/suggestions.html'>Suggestions</a></code>.
	 * 
	 * @returns An empty Suggestions.
	 */
	function newSuggestions(): CardService.Suggestions
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/suggestions-response-builder.html'>SuggestionsResponseBuilder</a></code>.
	 * 
	 * @returns An empty SuggestionsResponse builder.
	 */
	function newSuggestionsResponseBuilder(): CardService.SuggestionsResponseBuilder
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/switch.html'>Switch</a></code>.
	 * 
	 * @returns An empty Switch.
	 */
	function newSwitch(): CardService.Switch
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html'>TextButton</a></code>.
	 * 
	 * @returns An empty TextButton.
	 */
	function newTextButton(): CardService.TextButton
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-input.html'>TextInput</a></code>.
	 * 
	 * @returns An empty TextInput.
	 */
	function newTextInput(): CardService.TextInput
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-paragraph.html'>TextParagraph</a></code>.
	 * 
	 * @returns An empty TextParagraph.
	 */
	function newTextParagraph(): CardService.TextParagraph
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/time-picker.html'>TimePicker</a></code>.
	 * 
	 * @returns An empty TimePicker.
	 */
	function newTimePicker(): CardService.TimePicker
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/universal-action-response-builder.html'>UniversalActionResponseBuilder</a></code>.
	 * 
	 * @returns An empty UniversalActionResponse builder.
	 */
	function newUniversalActionResponseBuilder(): CardService.UniversalActionResponseBuilder
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/update-draft-action-response-builder.html'>UpdateDraftActionResponseBuilder</a></code>.
	 * 
	 * @returns An empty UpdateDraftActionResponseBuilder.
	 */
	function newUpdateDraftActionResponseBuilder(): CardService.UpdateDraftActionResponseBuilder
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/update-draft-bcc-recipients-action.html'>UpdateDraftBccRecipientsAction</a></code>;
	 * 
	 * @returns An empty UpdateDraftBccRecipientsAction.
	 */
	function newUpdateDraftBccRecipientsAction(): CardService.UpdateDraftBccRecipientsAction
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/update-draft-body-action.html'>UpdateDraftBodyAction</a></code>.
	 * 
	 * @returns An empty UpdateDraftBodyAction.
	 */
	function newUpdateDraftBodyAction(): CardService.UpdateDraftBodyAction
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/update-draft-cc-recipients-action.html'>UpdateDraftCcRecipientsAction</a></code>.
	 * 
	 * @returns An Empty UpdateDraftCcRecipientsAction.
	 */
	function newUpdateDraftCcRecipientsAction(): CardService.UpdateDraftCcRecipientsAction
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/update-draft-subject-action.html'>UpdateDraftSubjectAction</a></code>.
	 * 
	 * @returns An empty UpdateDraftSubjectAction.
	 */
	function newUpdateDraftSubjectAction(): CardService.UpdateDraftSubjectAction
	/**
	 * Creates a new <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/update-draft-to-recipients-action.html'>UpdateDraftToRecipientsAction</a></code>.
	 * 
	 * @returns An empty UpdateDraftToRecipientsAction.
	 */
	function newUpdateDraftToRecipientsAction(): CardService.UpdateDraftToRecipientsAction
	/**
	 * Creates a new <code>EditorFileScopeActionResponseBuilder</code>.
	 * 
	 * @returns An empty <code>EditorFileScopeActionResponseBuilder</code>.
	 */
	function newEditorFileScopeActionResponseBuilder(): CardService.EditorFileScopeActionResponseBuilder

	class Action {
		private constructor();

		/**
		 * Sets the name of the callback function to be called. Required.
		 * 
		 * @param functionName - The name of the function. You can use functions from included libraries,
		 *     such as <code>Library.libFunction1</code>.
		 * 
		 * @returns This object, for chaining.
		 */
		setFunctionName(
			functionName: string
		): CardService.Action
		/**
		 * Sets the loading indicator that displays while the action is in progress.
		 * 
		 * @param loadIndicator - The indicator to display.
		 * 
		 * @returns This object, for chaining.
		 */
		setLoadIndicator(
			loadIndicator: CardService.LoadIndicator
		): CardService.Action
		/**
		 * @param functionName
		 */
		setMethodName(
			functionName: string
		): CardService.Action
		/**
		 * Allows custom parameters to be passed to the callback function. Optional.
		 * 
		 * @param parameters - Both keys and values must be strings.
		 * 
		 * @returns This object, for chaining.
		 */
		setParameters(
			parameters: object
		): CardService.Action

	}

	class ActionResponse {
		private constructor();

		printJson(): string

	}

	class ActionResponseBuilder {
		private constructor();

		/**
		 * Builds the current action response and validates it.
		 * 
		 * @returns A validated ActionResponse.
		 */
		build(): CardService.ActionResponse
		/**
		 * Sets the response to a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/navigation.html'>Navigation</a></code> action.
		 * 
		 * @param navigation - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/navigation.html'>Navigation</a></code> to use.
		 * 
		 * @returns This object, for chaining.
		 */
		setNavigation(
			navigation: CardService.Navigation
		): CardService.ActionResponseBuilder
		/**
		 * Sets the notification to display when the action is activated.
		 * 
		 * @param notification - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/notification.html'>Notification</a></code> to use.
		 * 
		 * @returns This object, for chaining.
		 */
		setNotification(
			notification: CardService.Notification
		): CardService.ActionResponseBuilder
		/**
		 * Sets the URL to navigate to when the action is activated.
		 * 
		 * @param openLink - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/open-link.html'>OpenLink</a></code> to use.
		 * 
		 * @returns This object, for chaining.
		 */
		setOpenLink(
			openLink: CardService.OpenLink
		): CardService.ActionResponseBuilder
		/**
		 * Sets a flag to indicate that this action changed the existing data state. For example, if the
		 * action created a task or updated contact information. When this flag is set to true, services
		 * such as Gmail can attempt to clear any cached state data associated with this action.
		 * 
		 * @param stateChanged - Whether this action has changed the existing state data. Defaults to false.
		 * 
		 * @returns This object, for chaining.
		 */
		setStateChanged(
			stateChanged: Boolean
		): CardService.ActionResponseBuilder

	}

	class AuthorizationAction {
		private constructor();

		/**
		 * Sets the authorization URL that user is taken to from the authorization prompt. Required.
		 * 
		 * @param authorizationUrl - The authorization URL to set.
		 * 
		 * @returns This object, for chaining.
		 */
		setAuthorizationUrl(
			authorizationUrl: string
		): CardService.AuthorizationAction

	}

	class AuthorizationException {
		private constructor();

		printJson(): string
		/**
		 * Sets the authorization URL that user is taken to from the authorization prompt. Required.
		 * 
		 * @param authUrl - The authorization URL to set.
		 * 
		 * @returns This object, for chaining.
		 */
		setAuthorizationUrl(
			authUrl: string
		): CardService.AuthorizationException
		/**
		 * The name of a function to call to generate a custom authorization prompt. Optional.
		 * 
		 * @param callback - The name of the function that generates a custom authorization prompt.
		 * 
		 * @returns This object, for chaining.
		 */
		setCustomUiCallback(
			callback: string
		): CardService.AuthorizationException
		/**
		 * Sets the name that is displayed to the user when asking for authorization. Required.
		 * 
		 * @param name - The display name.
		 * 
		 * @returns This object, for chaining.
		 */
		setResourceDisplayName(
			name: string
		): CardService.AuthorizationException
		/**
		 * Triggers this exception to be thrown.
		 */
		throwException(): void

	}

	enum BorderType {
		/**
		 * Not set.
		 */
		BORDER_TYPE_NOT_SET = "BORDER_TYPE_NOT_SET",
		/**
		 * No border style.
		 */
		NO_BORDER = "NO_BORDER",
		/**
		 * Stroke border style.
		 */
		STROKE = "STROKE",
	}

	class Button {
		private constructor();

		/**
		 * Sets an authorization action that opens a URL to the authorization flow when the object is
		 * clicked. This opens the URL in a new window. When the user finishes the authorization flow and
		 * returns to the application, the add-on reloads.
		 * 
		 * <p>A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAuthorizationAction().setAuthorizationUrl(&#39;url&#39;);
		 * CardService.newTextButton().setText(&#39;Authorize&#39;).setAuthorizationAction(action);
		 * 
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the authorization action to take when this element is
		 *     clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setAuthorizationAction(
			action: CardService.AuthorizationAction
		): CardService.Button
		/**
		 * Sets an action that composes a draft email when the object is clicked. A UI object can only
		 * have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>,
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/compose-action-response.html'>ComposeActionResponse</a></code> object configured using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html#setGmailDraft(GmailDraft)'>ComposeActionResponseBuilder.setGmailDraft(draft)</a></code>.
		 * 
		 * <p><aside class="note"><b>Note</b>: This method doesn't set a <b>compose action</b> that is
		 * used to <a href="/gmail/add-ons/how-tos/extending-compose-ui">extend the compose UI</a>.
		 * Rather, this method connects this UI element to an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> that <a
		 * href="/gmail/add-ons/how-tos/compose">composes draft messages</a> in Apps Script that are
		 * opened in Gmail when the action completes. </aside>
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;composeEmailCallback&#39;);
		 * CardService.newTextButton()
		 *     .setText(&#39;Compose Email&#39;)
		 *     .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);
		 * 
		 * // ...
		 * 
		 * function composeEmailCallback() {
		 *   var thread = GmailApp.getThreadById(e.threadId);
		 *   var draft = thread.createDraftReply(&#39;This is a reply&#39;);
		 *   return CardService.newComposeActionResponseBuilder()
		 *       .setGmailDraft(draft)
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the compose action to take when this element is
		 *     clicked.
		 * @param composedEmailType - An enum value that specifies whether the composed draft is a
		 *     standalone or reply draft.
		 * 
		 * @returns This object, for chaining.
		 */
		setComposeAction(
			action: CardService.Action,
			composedEmailType: CardService.ComposedEmailType
		): CardService.Button
		/**
		 * Sets an action that executes when the object is clicked. A UI object can only have one of
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response.html'>ActionResponse</a></code> object.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;notificationCallback&#39;);
		 * CardService.newTextButton().setText(&#39;Create notification&#39;).setOnClickAction(action);
		 * 
		 * // ...
		 * 
		 * function notificationCallback() {
		 *   return CardService.newActionResponseBuilder()
		 *       .setNotification(CardService.newNotification()
		 *           .setText(&quot;Some info to display to user&quot;))
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The action to take when this element is clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setOnClickAction(
			action: CardService.Action
		): CardService.Button
		/**
		 * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
		 * URL needs to be built or when you need to take other actions in additon to creating the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/open-link.html'>OpenLink</a></code> object. A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response.html'>ActionResponse</a></code> object configured using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response-builder.html#setOpenLink(OpenLink)'>ActionResponseBuilder.setOpenLink(openLink)</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;openLinkCallback&#39;);
		 * CardService.newTextButton().setText(&#39;Open Link&#39;).setOnClickOpenLinkAction(action);
		 * 
		 * // ...
		 * 
		 * function openLinkCallback() {
		 *   return CardService.newActionResponseBuilder()
		 *       .setOpenLink(CardService.newOpenLink()
		 *           .setUrl(&#39;https://www.google.com&#39;))
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the open link action to take when this element is
		 *     clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setOnClickOpenLinkAction(
			action: CardService.Action
		): CardService.Button
		/**
		 * Sets a URL to be opened when the object is clicked. Use this function when the URL is already
		 * known and only needs to be opened. A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>,
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>,
		 * or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * @param openLink - An <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/open-link.html'>OpenLink</a></code> object describing the URL to open.
		 * 
		 * @returns This object, for chaining.
		 */
		setOpenLink(
			openLink: CardService.OpenLink
		): CardService.Button

	}

	class ButtonSet {
		private constructor();

		/**
		 * Adds a button.
		 * 
		 * @param button - The button to add.
		 * 
		 * @returns This object, for chaining.
		 */
		addButton(
			button: CardService.Button
		): CardService.ButtonSet

	}

	class CalendarEventActionResponse {
		private constructor();

		printJson(): string

	}

	class CalendarEventActionResponseBuilder {
		private constructor();

		/**
		 * Specifies that the response should add the indicated attendees to the Calendar event when the
		 * associated UI action is taken.
		 * 
		 * @param emails - An array of email addresses to add to the event.
		 * 
		 * @returns This object, for chaining.
		 */
		addAttendees(
			emails: string[]
		): CardService.CalendarEventActionResponseBuilder
		/**
		 * Builds the current Calendar event action response and validates it.
		 * 
		 * @returns A validated <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response.html'>CalendarEventActionResponse</a></code>.
		 */
		build(): CardService.CalendarEventActionResponse
		/**
		 * Specifies that the response should set the indicated conference data to the Calendar event when
		 * the associated UI action is taken.
		 * 
		 * @param conferenceData - Conference data to set to the event, created by an add on.
		 * 
		 * @returns This object, for chaining.
		 */
		setConferenceData(
			conferenceData: ConferenceDataService.ConferenceData
		): CardService.CalendarEventActionResponseBuilder

	}

	class Card {
		private constructor();

		printJson(): string

	}

	class CardAction {
		private constructor();

		/**
		 * Sets an authorization action that opens a URL to the authorization flow when the object is
		 * clicked. This opens the URL in a new window. When the user finishes the authorization flow and
		 * returns to the application, the add-on reloads.
		 * 
		 * <p>A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAuthorizationAction().setAuthorizationUrl(&#39;url&#39;);
		 * CardService.newTextButton().setText(&#39;Authorize&#39;).setAuthorizationAction(action);
		 * 
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the authorization action to take when this element is
		 *     clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setAuthorizationAction(
			action: CardService.AuthorizationAction
		): CardService.CardAction
		/**
		 * Sets an action that composes a draft email when the object is clicked. A UI object can only
		 * have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>,
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/compose-action-response.html'>ComposeActionResponse</a></code> object configured using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html#setGmailDraft(GmailDraft)'>ComposeActionResponseBuilder.setGmailDraft(draft)</a></code>.
		 * 
		 * <p><aside class="note"><b>Note</b>: This method doesn't set a <b>compose action</b> that is
		 * used to <a href="/gmail/add-ons/how-tos/extending-compose-ui">extend the compose UI</a>.
		 * Rather, this method connects this UI element to an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> that <a
		 * href="/gmail/add-ons/how-tos/compose">composes draft messages</a> in Apps Script that are
		 * opened in Gmail when the action completes. </aside>
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;composeEmailCallback&#39;);
		 * CardService.newTextButton()
		 *     .setText(&#39;Compose Email&#39;)
		 *     .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);
		 * 
		 * // ...
		 * 
		 * function composeEmailCallback() {
		 *   var thread = GmailApp.getThreadById(e.threadId);
		 *   var draft = thread.createDraftReply(&#39;This is a reply&#39;);
		 *   return CardService.newComposeActionResponseBuilder()
		 *       .setGmailDraft(draft)
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the compose action to take when this element is
		 *     clicked.
		 * @param composedEmailType - An enum value that specifies whether the composed draft is a
		 *     standalone or reply draft.
		 * 
		 * @returns This object, for chaining.
		 */
		setComposeAction(
			action: CardService.Action,
			composedEmailType: CardService.ComposedEmailType
		): CardService.CardAction
		/**
		 * Sets an action that executes when the object is clicked. A UI object can only have one of
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response.html'>ActionResponse</a></code> object.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;notificationCallback&#39;);
		 * CardService.newTextButton().setText(&#39;Create notification&#39;).setOnClickAction(action);
		 * 
		 * // ...
		 * 
		 * function notificationCallback() {
		 *   return CardService.newActionResponseBuilder()
		 *       .setNotification(CardService.newNotification()
		 *           .setText(&quot;Some info to display to user&quot;))
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The action to take when this element is clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setOnClickAction(
			action: CardService.Action
		): CardService.CardAction
		/**
		 * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
		 * URL needs to be built or when you need to take other actions in additon to creating the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/open-link.html'>OpenLink</a></code> object. A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response.html'>ActionResponse</a></code> object configured using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response-builder.html#setOpenLink(OpenLink)'>ActionResponseBuilder.setOpenLink(openLink)</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;openLinkCallback&#39;);
		 * CardService.newTextButton().setText(&#39;Open Link&#39;).setOnClickOpenLinkAction(action);
		 * 
		 * // ...
		 * 
		 * function openLinkCallback() {
		 *   return CardService.newActionResponseBuilder()
		 *       .setOpenLink(CardService.newOpenLink()
		 *           .setUrl(&#39;https://www.google.com&#39;))
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the open link action to take when this element is
		 *     clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setOnClickOpenLinkAction(
			action: CardService.Action
		): CardService.CardAction
		/**
		 * Sets a URL to be opened when the object is clicked. Use this function when the URL is already
		 * known and only needs to be opened. A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>,
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>,
		 * or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * @param openLink - An <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/open-link.html'>OpenLink</a></code> object describing the URL to open.
		 * 
		 * @returns This object, for chaining.
		 */
		setOpenLink(
			openLink: CardService.OpenLink
		): CardService.CardAction
		/**
		 * Sets the menu text for this action.
		 * 
		 * @param text - The menu item text.
		 * 
		 * @returns This object, for chaining.
		 */
		setText(
			text: string
		): CardService.CardAction

	}

	class CardBuilder {
		private constructor();

		/**
		 * Adds a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html'>CardAction</a></code> to this Card.
		 * 
		 * @param cardAction - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-action.html'>CardAction</a></code> to use.
		 * 
		 * @returns This object, for chaining.
		 */
		addCardAction(
			cardAction: CardService.CardAction
		): CardService.CardBuilder
		/**
		 * Adds a section to this card. You can't add more than 100 sections to a card.
		 * 
		 * @param section - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-section.html'>CardSection</a></code> to use.
		 * 
		 * @returns This object, for chaining.
		 */
		addSection(
			section: CardService.CardSection
		): CardService.CardBuilder
		/**
		 * Builds the current card and validates it.
		 * 
		 * @returns A validated card.
		 */
		build(): CardService.Card
		/**
		 * Sets the display style for this card.
		 * 
		 * <p>If the display style is set to <code>DisplayStyle.REPLACE</code>, the card is shown by replacing
		 * the view of top card in the card stack.
		 * 
		 * <p>If the display style is set to <code>DisplayStyle.PEEK</code>, the header of the card appears at
		 * the bottom of the sidebar, partially covering the current top card of the stack. Clicking the
		 * header pops the card into the card stack. If the card has no header, a generated header is used
		 * instead.
		 * 
		 * <p><code>DisplayStyle</code> only works for card returned from contextual trigger function.
		 * 
		 * @param displayStyle - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/display-style.html'>DisplayStyle</a></code> to set.
		 * 
		 * @returns This object, for chaining.
		 */
		setDisplayStyle(
			displayStyle: CardService.DisplayStyle
		): CardService.CardBuilder
		/**
		 * Sets a fixed footer for this card.
		 * 
		 * @param fixedFooter - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/fixed-footer.html'>FixedFooter</a></code> to use.
		 * 
		 * @returns This object, for chaining.
		 */
		setFixedFooter(
			fixedFooter: CardService.FixedFooter
		): CardService.CardBuilder
		/**
		 * Sets the header for this card.
		 * 
		 * @param cardHeader - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-header.html'>CardHeader</a></code> to use.
		 * 
		 * @returns This object, for chaining.
		 */
		setHeader(
			cardHeader: CardService.CardHeader
		): CardService.CardBuilder
		/**
		 * Sets the name for this card. The name can be used for <a
		 * href="/gmail/add-ons/how-tos/navigation">navigation</a>.
		 * 
		 * @param name - The name.
		 * 
		 * @returns This object, for chaining.
		 */
		setName(
			name: string
		): CardService.CardBuilder
		/**
		 * Sets the peek card header.
		 * 
		 * <p>The peek card is set on the first card returned from a contextual trigger function. It is
		 * used as a descriptive placeholder widget so that users can navigate from a homepage stack to
		 * the contextual stack.
		 * 
		 * @param peekCardHeader - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-header.html'>CardHeader</a></code> to set.
		 * 
		 * @returns This object, for chaining.
		 */
		setPeekCardHeader(
			peekCardHeader: CardService.CardHeader
		): CardService.CardBuilder

	}

	class CardHeader {
		private constructor();

		/**
		 * Sets the alternative text for the header image.
		 * 
		 * @param imageAltText - The alternative text for the header image.
		 * 
		 * @returns This object, for chaining.
		 */
		setImageAltText(
			imageAltText: string
		): CardService.CardHeader
		/**
		 * Sets the cropping of the icon in then card header. Defaults to no crop. Optional.
		 * 
		 * @param imageStyle - The style setting.
		 * 
		 * @returns This object, for chaining.
		 */
		setImageStyle(
			imageStyle: CardService.ImageStyle
		): CardService.CardHeader
		/**
		 * Sets the image to use in the header by providing its URL or data string.
		 * 
		 * <p>The provided URL can either be a publicly accessible URL or a base64 encoded image string.
		 * To obtain the latter, you can use the following code to create an encoded image string from an
		 * image in your Google Drive, then store that string for later use with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card-header.html#setImageUrl(String)'>setImageUrl(imageUrl)</a></code>. This method prevents the need for your add-on to access a publicly
		 * available image URL:
		 * 
		 * <pre class="prettyprint"><code>
		 * // The following assumes you have the image to use in Google Drive and have its ID.
		 * var imageBytes = DriveApp.getFileById(imageID).getBlob().getBytes();
		 * var encodedImageURL = &quot;data:image/jpeg;base64,&quot; + Utilities.base64Encode(imageBytes);
		 * 
		 * // You can store encodeImageURL and use it as a parameter to CardHeader.setImageUrl(imageUrl).
		 * </code></pre>
		 * 
		 * @param imageUrl - The URL address of a hosted image to use, or an encoded image string.
		 * 
		 * @returns This object, for chaining.
		 */
		setImageUrl(
			imageUrl: string
		): CardService.CardHeader
		/**
		 * Sets the subtitle of the card header. Optional.
		 * 
		 * @param subtitle - The header subtitle text.
		 * 
		 * @returns This object, for chaining.
		 */
		setSubtitle(
			subtitle: string
		): CardService.CardHeader
		/**
		 * Sets the title of the card header. Required.
		 * 
		 * @param title - The header text.
		 * 
		 * @returns This object, for chaining.
		 */
		setTitle(
			title: string
		): CardService.CardHeader

	}

	class CardSection {
		private constructor();

		/**
		 * Adds the given widget to this section. Widgets are shown in the order they were added. You
		 * can't add more than 100 widgets to a card section.
		 * 
		 * @param widget - A widget to add to the section.
		 * 
		 * @returns This object, for chaining.
		 */
		addWidget(
			widget: CardService.Widget
		): CardService.CardSection
		/**
		 * Sets whether the section can be collapsed.
		 * 
		 * @param collapsible - The collapsible setting.
		 * 
		 * @returns This object, for chaining.
		 */
		setCollapsible(
			collapsible: Boolean
		): CardService.CardSection
		/**
		 * Sets the header of the section. Optional.
		 * 
		 * @param header - The header text.
		 * 
		 * @returns This object, for chaining.
		 */
		setHeader(
			header: string
		): CardService.CardSection
		/**
		 * Sets the number of widgets that are still shown when this section is collapsed. The widgets
		 * shown are always the first ones that were added.
		 * 
		 * @param numUncollapsibleWidgets - The number of widgets to show.
		 * 
		 * @returns This object, for chaining.
		 */
		setNumUncollapsibleWidgets(
			numUncollapsibleWidgets: number
		): CardService.CardSection

	}

	class ComposeActionResponse {
		private constructor();

		printJson(): string

	}

	class ComposeActionResponseBuilder {
		private constructor();

		/**
		 * Builds the current compose action response and validates it.
		 * 
		 * @returns A validated <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/compose-action-response.html'>ComposeActionResponse</a></code>.
		 */
		build(): CardService.ComposeActionResponse
		/**
		 * Sets the draft <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/../gmail/gmail-message.html'>GmailMessage</a></code> created
		 * using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/../gmail/gmail-message.html#createDraftReply(String)'>GmailMessage.createDraftReply(body)</a></code> or
		 * similar functions.
		 * 
		 * @param draft - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/../gmail/gmail-draft.html'>GmailDraft</a></code> to use.
		 * 
		 * @returns This object, for chaining.
		 */
		setGmailDraft(
			draft: GmailApp.GmailDraft
		): CardService.ComposeActionResponseBuilder

	}

	enum ComposedEmailType {
		/**
		 * A draft that is a reply to another message. Default.
		 */
		REPLY_AS_DRAFT = "REPLY_AS_DRAFT",
		/**
		 * A draft that is a standalone message.
		 */
		STANDALONE_DRAFT = "STANDALONE_DRAFT",
	}

	enum ContentType {
		/**
		 * Indicates that the generated content is formatted as HTML, but this content cannot be edited
		 * after it is generated.
		 */
		IMMUTABLE_HTML = "IMMUTABLE_HTML",
		/**
		 * Indicates that the generated content is formatted as HTML. The content can be edited after it
		 * is generated.
		 */
		MUTABLE_HTML = "MUTABLE_HTML",
		/**
		 * Indicates that the generated content is plain text. Default.
		 */
		TEXT = "TEXT",
	}

	class DatePicker {
		private constructor();

		/**
		 * Sets the field name that identifies this picker in the event object that is generated when
		 * there is a UI interaction. The field name is visible to the user. Required; the specified field
		 * name must be unique.
		 * 
		 * @param fieldName - The name to assign to this input.
		 * 
		 * @returns This picker, for chaining.
		 */
		setFieldName(
			fieldName: string
		): CardService.DatePicker
		/**
		 * Sets an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> that the script performs whenever the picker input changes.
		 * 
		 * @param action - The action to take.
		 * 
		 * @returns This picker, for chaining.
		 */
		setOnChangeAction(
			action: CardService.Action
		): CardService.DatePicker
		/**
		 * Sets the title displayed above the input field.
		 * 
		 * @param title - The input field title.
		 * 
		 * @returns This picker, for chaining.
		 */
		setTitle(
			title: string
		): CardService.DatePicker
		/**
		 * Sets the prefilled value to be set in the input field.
		 * 
		 * @param valueMsEpoch - The default value placed in the input as a number, in milliseconds since
		 *     the epoch. Only the date of the epoch time is used, and the time of the epoch time is
		 *     discarded. It is always represented as a string in the form callback parameters.
		 * 
		 * @returns This picker, for chaining.
		 */
		setValueInMsSinceEpoch(
			valueMsEpoch: Number
		): CardService.DatePicker
		/**
		 * Sets the prefilled value to be set in the input field.
		 * 
		 * @param valueMsEpoch - The default value placed in the input as a string, in milliseconds since
		 *     the epoch. Only the date of the epoch time is used, and the time of the epoch time is
		 *     discarded. It is always represented as a string in the form callback parameters.
		 * 
		 * @returns This picker, for chaining.
		 */
		setValueInMsSinceEpoch(
			valueMsEpoch: string
		): CardService.DatePicker


	}

	class DateTimePicker {
		private constructor();

		/**
		 * Sets the field name that identifies this picker in the event object that is generated when
		 * there is a UI interaction. The field name is visible to the user. Required; the specified field
		 * name must be unique.
		 * 
		 * @param fieldName - The name to assign to this input.
		 * 
		 * @returns This picker, for chaining.
		 */
		setFieldName(
			fieldName: string
		): CardService.DateTimePicker
		/**
		 * Sets an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> that the script performs whenever the picker input changes.
		 * 
		 * @param action - The action to take.
		 * 
		 * @returns This picker, for chaining.
		 */
		setOnChangeAction(
			action: CardService.Action
		): CardService.DateTimePicker
		/**
		 * Sets the number of minutes that the time zone should be offset from UTC. If set, the date and
		 * time is displayed in the specified time zone. If not set, the time is displayed in the user's
		 * time zone.
		 * 
		 * @param timeZoneOffsetMins - The number of minutes that the time zone is offset from UTC.
		 * 
		 * @returns This picker, for chaining.
		 */
		setTimeZoneOffsetInMins(
			timeZoneOffsetMins: number
		): CardService.DateTimePicker
		/**
		 * Sets the title displayed above the input field.
		 * 
		 * @param title - The input field title.
		 * 
		 * @returns This picker, for chaining.
		 */
		setTitle(
			title: string
		): CardService.DateTimePicker
		/**
		 * Sets the prefilled value to be set in the input field.
		 * 
		 * @param valueMsEpoch - The default value placed in the input as a number, in milliseconds since
		 *     the epoch. It is always represented as a string in the form callback parameters.
		 * 
		 * @returns This picker, for chaining.
		 */
		setValueInMsSinceEpoch(
			valueMsEpoch: Number
		): CardService.DateTimePicker
		/**
		 * Sets the prefilled value to be set in the input field.
		 * 
		 * @param valueMsEpoch - The default value placed in the input as a string, in milliseconds since
		 *     the epoch. It is always represented as a string in the form callback parameters.
		 * 
		 * @returns This picker, for chaining.
		 */
		setValueInMsSinceEpoch(
			valueMsEpoch: string
		): CardService.DateTimePicker


	}

	class DecoratedText {
		private constructor();

		/**
		 * Sets an authorization action that opens a URL to the authorization flow when the object is
		 * clicked. This opens the URL in a new window. When the user finishes the authorization flow and
		 * returns to the application, the add-on reloads.
		 * 
		 * <p>A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAuthorizationAction().setAuthorizationUrl(&#39;url&#39;);
		 * CardService.newTextButton().setText(&#39;Authorize&#39;).setAuthorizationAction(action);
		 * 
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the authorization action to take when this element is
		 *     clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setAuthorizationAction(
			action: CardService.AuthorizationAction
		): CardService.DecoratedText
		/**
		 * Sets the label text to be used as the key and is displayed below the text content.
		 * 
		 * @param text - The label text.
		 * 
		 * @returns This object, for chaining.
		 */
		setBottomLabel(
			text: string
		): CardService.DecoratedText
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html'>Button</a></code> that is displayed to the right of the text. A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html'>DecoratedText</a></code> can
		 * only support one button or one switch.
		 * 
		 * @param button - The button to add.
		 * 
		 * @returns This object, for chaining.
		 */
		setButton(
			button: CardService.Button
		): CardService.DecoratedText
		/**
		 * Sets an action that composes a draft email when the object is clicked. A UI object can only
		 * have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>,
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/compose-action-response.html'>ComposeActionResponse</a></code> object configured using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html#setGmailDraft(GmailDraft)'>ComposeActionResponseBuilder.setGmailDraft(draft)</a></code>.
		 * 
		 * <p><aside class="note"><b>Note</b>: This method doesn't set a <b>compose action</b> that is
		 * used to <a href="/gmail/add-ons/how-tos/extending-compose-ui">extend the compose UI</a>.
		 * Rather, this method connects this UI element to an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> that <a
		 * href="/gmail/add-ons/how-tos/compose">composes draft messages</a> in Apps Script that are
		 * opened in Gmail when the action completes. </aside>
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;composeEmailCallback&#39;);
		 * CardService.newTextButton()
		 *     .setText(&#39;Compose Email&#39;)
		 *     .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);
		 * 
		 * // ...
		 * 
		 * function composeEmailCallback() {
		 *   var thread = GmailApp.getThreadById(e.threadId);
		 *   var draft = thread.createDraftReply(&#39;This is a reply&#39;);
		 *   return CardService.newComposeActionResponseBuilder()
		 *       .setGmailDraft(draft)
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the compose action to take when this element is
		 *     clicked.
		 * @param composedEmailType - An enum value that specifies whether the composed draft is a
		 *     standalone or reply draft.
		 * 
		 * @returns This object, for chaining.
		 */
		setComposeAction(
			action: CardService.Action,
			composedEmailType: CardService.ComposedEmailType
		): CardService.DecoratedText
		/**
		 * Sets the icon to be used as the key.
		 * 
		 * @param icon - One of the predefined <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/icon.html'>Icon</a></code> values.
		 * 
		 * @returns This object, for chaining.
		 */
		setIcon(
			icon: CardService.Icon
		): CardService.DecoratedText
		/**
		 * Sets the alternative text for the icon.
		 * 
		 * @param altText - The alternative text for the icon.
		 * 
		 * @returns This object, for chaining.
		 */
		setIconAltText(
			altText: string
		): CardService.DecoratedText
		/**
		 * Sets the URL of the icon to be used as the key.
		 * 
		 * @param url - The URL address of a hosted image to use as an icon.
		 * 
		 * @returns This object, for chaining.
		 */
		setIconUrl(
			url: string
		): CardService.DecoratedText
		/**
		 * Sets an action that executes when the object is clicked. A UI object can only have one of
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response.html'>ActionResponse</a></code> object.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;notificationCallback&#39;);
		 * CardService.newTextButton().setText(&#39;Create notification&#39;).setOnClickAction(action);
		 * 
		 * // ...
		 * 
		 * function notificationCallback() {
		 *   return CardService.newActionResponseBuilder()
		 *       .setNotification(CardService.newNotification()
		 *           .setText(&quot;Some info to display to user&quot;))
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The action to take when this element is clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setOnClickAction(
			action: CardService.Action
		): CardService.DecoratedText
		/**
		 * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
		 * URL needs to be built or when you need to take other actions in additon to creating the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/open-link.html'>OpenLink</a></code> object. A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response.html'>ActionResponse</a></code> object configured using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response-builder.html#setOpenLink(OpenLink)'>ActionResponseBuilder.setOpenLink(openLink)</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;openLinkCallback&#39;);
		 * CardService.newTextButton().setText(&#39;Open Link&#39;).setOnClickOpenLinkAction(action);
		 * 
		 * // ...
		 * 
		 * function openLinkCallback() {
		 *   return CardService.newActionResponseBuilder()
		 *       .setOpenLink(CardService.newOpenLink()
		 *           .setUrl(&#39;https://www.google.com&#39;))
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the open link action to take when this element is
		 *     clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setOnClickOpenLinkAction(
			action: CardService.Action
		): CardService.DecoratedText
		/**
		 * Sets a URL to be opened when the object is clicked. Use this function when the URL is already
		 * known and only needs to be opened. A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>,
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>,
		 * or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * @param openLink - An <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/open-link.html'>OpenLink</a></code> object describing the URL to open.
		 * 
		 * @returns This object, for chaining.
		 */
		setOpenLink(
			openLink: CardService.OpenLink
		): CardService.DecoratedText
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/switch.html'>Switch</a></code> that is displayed to the right of the content. A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/decorated-text.html'>DecoratedText</a></code>
		 * can only support one button or one switch.
		 * 
		 * @param switchToSet - The switch to add.
		 * 
		 * @returns This object, for chaining.
		 */
		setSwitchControl(
			switchToSet: CardService.Switch
		): CardService.DecoratedText
		/**
		 * Sets the text to be used as the value. Supports <a
		 * href="/gmail/add-ons/concepts/widgets#text_formatting">basic HTML formatting</a>. Required.
		 * 
		 * @param text - The text content for this widget.
		 * 
		 * @returns This object, for chaining.
		 */
		setText(
			text: string
		): CardService.DecoratedText
		/**
		 * Sets the label text to be used as the key and is displayed above the text content.
		 * 
		 * @param text - The label text.
		 * 
		 * @returns This object, for chaining.
		 */
		setTopLabel(
			text: string
		): CardService.DecoratedText
		/**
		 * Sets whether the value text should be displayed on a single line or multiple lines.
		 * 
		 * @param wrapText - If <code>true</code>, the text is wrapped and displayed on multiple lines. Otherwise
		 *     the text is truncated.
		 * 
		 * @returns This object, for chaining.
		 */
		setWrapText(
			wrapText: Boolean
		): CardService.DecoratedText

	}

	enum DisplayStyle {
		/**
		 * Show the card header at the bottom of add-on content over existing content.
		 */
		PEEK = "PEEK",
		/**
		 * Show the card by replacing existing content.
		 */
		REPLACE = "REPLACE",
	}

	class DriveItemsSelectedActionResponse {
		private constructor();

		printJson(): string

	}

	class DriveItemsSelectedActionResponseBuilder {
		private constructor();

		/**
		 * Builds the current Drive action response.
		 * 
		 * @returns A validated <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/drive-items-selected-action-response.html'>DriveItemsSelectedActionResponse</a></code>.
		 */
		build(): CardService.DriveItemsSelectedActionResponse
		/**
		 * Specifies that the response requests file scope for the contextually-relevant item in Drive.
		 * 
		 * @param itemId - ID of the Drive item to request file scope for.
		 * 
		 * @returns This object, for chaining.
		 */
		requestFileScope(
			itemId: string
		): CardService.DriveItemsSelectedActionResponseBuilder

	}

	class FixedFooter {
		private constructor();

		/**
		 * Set the primary button in the fixed footer. The primary button must be a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button-style.html#FILLED'>TextButtonStyle.FILLED</a></code> button. If the background color is unset for the primary button, the
		 * button uses the primary color defined in the add-on <a
		 * href="/gmail/add-ons/concepts/manifests#manifest_structure_for_gmail_add-ons">manifest</a>.
		 * 
		 * @param button - The button to add.
		 * 
		 * @returns This object, for chaining.
		 */
		setPrimaryButton(
			button: CardService.TextButton
		): CardService.FixedFooter
		/**
		 * Set the secondary button in the fixed footer. The secondary button must be a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button-style.html#TEXT'>TextButtonStyle.TEXT</a></code> button. This method does nothing if <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/fixed-footer.html#setPrimaryButton(TextButton)'>setPrimaryButton(button)</a></code> isn't called to set the primary button.
		 * 
		 * @param button - The button to add.
		 * 
		 * @returns This object, for chaining.
		 */
		setSecondaryButton(
			button: CardService.TextButton
		): CardService.FixedFooter

	}

	enum GridItemLayout {
		/**
		 * Not set. Default.
		 */
		NOT_SET = "NOT_SET",
		/**
		 * The title and subtitle are shown above the grid item's image.
		 */
		TEXT_ABOVE = "TEXT_ABOVE",
		/**
		 * The title and subtitle are shown below the grid item's image.
		 */
		TEXT_BELOW = "TEXT_BELOW",
	}

	enum HorizontalAlignment {
		/**
		 * Align the widget to the center.
		 */
		CENTER = "CENTER",
		/**
		 * Align the widget to the end of the sentence side.
		 */
		END = "END",
		/**
		 * Not set. Default.
		 */
		HORIZONTAL_ALIGNMENT_UNSPECIFIED = "HORIZONTAL_ALIGNMENT_UNSPECIFIED",
		/**
		 * Align the widget to the start of the sentence side.
		 */
		START = "START",
	}

	enum Icon {
		/**
		 * <img alt="Airplane flight icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/flight_grey600_48dp.png"/>
		 */
		AIRPLANE = "AIRPLANE",
		/**
		 * <img alt="Bookmark icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/bookmark_grey600_48dp.png"/>
		 */
		BOOKMARK = "BOOKMARK",
		/**
		 * <img alt="Bus icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/directions_bus_grey600_48dp.png"/>
		 */
		BUS = "BUS",
		/**
		 * <img alt="Car icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/directions_car_grey600_48dp.png"/>
		 */
		CAR = "CAR",
		/**
		 * <img alt="Clock icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/schedule_grey600_48dp.png"/>
		 */
		CLOCK = "CLOCK",
		/**
		 * <img alt="Confirmation number icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/confirmation_num_grey600_48dp.png"/>
		 */
		CONFIRMATION_NUMBER_ICON = "CONFIRMATION_NUMBER_ICON",
		/**
		 * <img alt="Description icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/subject_grey600_48dp.png"/>
		 */
		DESCRIPTION = "DESCRIPTION",
		/**
		 * <img alt="Dollar icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/attach_money_grey600_48dp.png"/>
		 */
		DOLLAR = "DOLLAR",
		/**
		 * <img alt="Email icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/email_grey600_48dp.png"/>
		 */
		EMAIL = "EMAIL",
		/**
		 * <img alt="Email icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/people_grey600_48dp.png"/>
		 */
		EVENT_PERFORMER = "EVENT_PERFORMER",
		/**
		 * <img alt="Event seat icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/event_seat_grey600_48dp.png"/>
		 */
		EVENT_SEAT = "EVENT_SEAT",
		/**
		 * <img alt="Flight arrival icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/flight_land_grey600_48dp.png"/>
		 */
		FLIGHT_ARRIVAL = "FLIGHT_ARRIVAL",
		/**
		 * <img alt="Flight departure icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/flight_takeoff_grey600_48dp.png"/>
		 */
		FLIGHT_DEPARTURE = "FLIGHT_DEPARTURE",
		/**
		 * <img alt="Hotel icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/hotel_grey600_48dp.png"/>
		 */
		HOTEL = "HOTEL",
		/**
		 * <img alt="Hotel icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/star_grey600_48dp.png"/>
		 */
		HOTEL_ROOM_TYPE = "HOTEL_ROOM_TYPE",
		/**
		 * <img alt="Invite icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/event_grey600_48dp.png"/>
		 */
		INVITE = "INVITE",
		/**
		 * <img alt="Map pin icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/place_grey600_48dp.png"/>
		 */
		MAP_PIN = "MAP_PIN",
		/**
		 * <img alt="Membershipt icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/card_membership_grey600_48dp.png"/>
		 */
		MEMBERSHIP = "MEMBERSHIP",
		/**
		 * <img alt="Multiple people icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/people_grey600_48dp.png"/>
		 */
		MULTIPLE_PEOPLE = "MULTIPLE_PEOPLE",
		/**
		 * No icon. Default.
		 */
		NONE = "NONE",
		/**
		 * <img alt="Offer icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/local_offer_grey600_48dp.png"/>
		 */
		OFFER = "OFFER",
		/**
		 * <img alt="Person icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/person_grey600_48dp.png"/>
		 */
		PERSON = "PERSON",
		/**
		 * <img alt="Phone icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/call_grey600_48dp.png"/>
		 */
		PHONE = "PHONE",
		/**
		 * <img alt="Restaurant icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/restaurant_grey600_48dp.png"/>
		 */
		RESTAURANT_ICON = "RESTAURANT_ICON",
		/**
		 * <img alt="Shopping cart icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/shopping_cart_grey600_48dp.png"/>
		 */
		SHOPPING_CART = "SHOPPING_CART",
		/**
		 * <img alt="Star icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/star_grey600_48dp.png"/>
		 */
		STAR = "STAR",
		/**
		 * <img alt="Store icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/store_grey600_48dp.png"/>
		 */
		STORE = "STORE",
		/**
		 * <img alt="Ticket icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/local_attraction_grey600_48dp.png"/>
		 */
		TICKET = "TICKET",
		/**
		 * <img alt="Train icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/train_grey600_48dp.png"/>
		 */
		TRAIN = "TRAIN",
		/**
		 * <img alt="Video camera icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/videocam_grey600_48dp.png"/>
		 */
		VIDEO_CAMERA = "VIDEO_CAMERA",
		/**
		 * <img alt="Video play icon"
		 * src="https://www.gstatic.com/images/icons/material/system/1x/play_circle_filled_grey600_48dp.png"/>
		 */
		VIDEO_PLAY = "VIDEO_PLAY",
	}

	class Image {
		private constructor();

		/**
		 * Sets the alternative text of the image for accessibility. Required.
		 * 
		 * @param altText - The alternative text to assign to this image.
		 * 
		 * @returns This object, for chaining.
		 */
		setAltText(
			altText: string
		): CardService.Image
		/**
		 * Sets an authorization action that opens a URL to the authorization flow when the object is
		 * clicked. This opens the URL in a new window. When the user finishes the authorization flow and
		 * returns to the application, the add-on reloads.
		 * 
		 * <p>A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAuthorizationAction().setAuthorizationUrl(&#39;url&#39;);
		 * CardService.newTextButton().setText(&#39;Authorize&#39;).setAuthorizationAction(action);
		 * 
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the authorization action to take when this element is
		 *     clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setAuthorizationAction(
			action: CardService.AuthorizationAction
		): CardService.Image
		/**
		 * Sets an action that composes a draft email when the object is clicked. A UI object can only
		 * have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>,
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/compose-action-response.html'>ComposeActionResponse</a></code> object configured using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html#setGmailDraft(GmailDraft)'>ComposeActionResponseBuilder.setGmailDraft(draft)</a></code>.
		 * 
		 * <p><aside class="note"><b>Note</b>: This method doesn't set a <b>compose action</b> that is
		 * used to <a href="/gmail/add-ons/how-tos/extending-compose-ui">extend the compose UI</a>.
		 * Rather, this method connects this UI element to an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> that <a
		 * href="/gmail/add-ons/how-tos/compose">composes draft messages</a> in Apps Script that are
		 * opened in Gmail when the action completes. </aside>
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;composeEmailCallback&#39;);
		 * CardService.newTextButton()
		 *     .setText(&#39;Compose Email&#39;)
		 *     .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);
		 * 
		 * // ...
		 * 
		 * function composeEmailCallback() {
		 *   var thread = GmailApp.getThreadById(e.threadId);
		 *   var draft = thread.createDraftReply(&#39;This is a reply&#39;);
		 *   return CardService.newComposeActionResponseBuilder()
		 *       .setGmailDraft(draft)
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the compose action to take when this element is
		 *     clicked.
		 * @param composedEmailType - An enum value that specifies whether the composed draft is a
		 *     standalone or reply draft.
		 * 
		 * @returns This object, for chaining.
		 */
		setComposeAction(
			action: CardService.Action,
			composedEmailType: CardService.ComposedEmailType
		): CardService.Image
		/**
		 * Sets the image to use by providing its URL or data string. Required.
		 * 
		 * <p>The provided URL can either be a publicly accessible URL or a base64 encoded image string.
		 * To obtain the latter, you can use the following code to create an encoded image string from an
		 * image in your Google Drive, then store that string for later use with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setImageUrl(String)'>setImageUrl(url)</a></code>. This method prevents the need for your add-on to access a publicly
		 * available image URL:
		 * 
		 * <pre class="prettyprint"><code>
		 * // The following assumes you have the image to use in Google Drive and have its ID.
		 * var imageBytes = DriveApp.getFileById(imageID).getBlob().getBytes();
		 * var encodedImageURL = &quot;data:image/jpeg;base64,&quot; + Utilities.base64Encode(imageBytes);
		 * 
		 * // You can store encodeImageURL and use it as a parameter to Image.setImageUrl(url).
		 * </code></pre>
		 * 
		 * @param url - The URL address of a hosted image to use, or an encoded image string.
		 * 
		 * @returns This object, for chaining.
		 */
		setImageUrl(
			url: string
		): CardService.Image
		/**
		 * Sets an action that executes when the object is clicked. A UI object can only have one of
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response.html'>ActionResponse</a></code> object.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;notificationCallback&#39;);
		 * CardService.newTextButton().setText(&#39;Create notification&#39;).setOnClickAction(action);
		 * 
		 * // ...
		 * 
		 * function notificationCallback() {
		 *   return CardService.newActionResponseBuilder()
		 *       .setNotification(CardService.newNotification()
		 *           .setText(&quot;Some info to display to user&quot;))
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The action to take when this element is clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setOnClickAction(
			action: CardService.Action
		): CardService.Image
		/**
		 * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
		 * URL needs to be built or when you need to take other actions in additon to creating the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/open-link.html'>OpenLink</a></code> object. A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response.html'>ActionResponse</a></code> object configured using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response-builder.html#setOpenLink(OpenLink)'>ActionResponseBuilder.setOpenLink(openLink)</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;openLinkCallback&#39;);
		 * CardService.newTextButton().setText(&#39;Open Link&#39;).setOnClickOpenLinkAction(action);
		 * 
		 * // ...
		 * 
		 * function openLinkCallback() {
		 *   return CardService.newActionResponseBuilder()
		 *       .setOpenLink(CardService.newOpenLink()
		 *           .setUrl(&#39;https://www.google.com&#39;))
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the open link action to take when this element is
		 *     clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setOnClickOpenLinkAction(
			action: CardService.Action
		): CardService.Image
		/**
		 * Sets a URL to be opened when the object is clicked. Use this function when the URL is already
		 * known and only needs to be opened. A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>,
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>,
		 * or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * @param openLink - An <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/open-link.html'>OpenLink</a></code> object describing the URL to open.
		 * 
		 * @returns This object, for chaining.
		 */
		setOpenLink(
			openLink: CardService.OpenLink
		): CardService.Image

	}

	class ImageButton {
		private constructor();

		/**
		 * Sets the alternative text of the button for accessibility. Required.
		 * 
		 * @param altText - The alternative text to assign to this button.
		 * 
		 * @returns This object, for chaining.
		 */
		setAltText(
			altText: string
		): CardService.ImageButton
		/**
		 * Sets an authorization action that opens a URL to the authorization flow when the object is
		 * clicked. This opens the URL in a new window. When the user finishes the authorization flow and
		 * returns to the application, the add-on reloads.
		 * 
		 * <p>A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAuthorizationAction().setAuthorizationUrl(&#39;url&#39;);
		 * CardService.newTextButton().setText(&#39;Authorize&#39;).setAuthorizationAction(action);
		 * 
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the authorization action to take when this element is
		 *     clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setAuthorizationAction(
			action: CardService.AuthorizationAction
		): CardService.ImageButton
		/**
		 * Sets an action that composes a draft email when the object is clicked. A UI object can only
		 * have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>,
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/compose-action-response.html'>ComposeActionResponse</a></code> object configured using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html#setGmailDraft(GmailDraft)'>ComposeActionResponseBuilder.setGmailDraft(draft)</a></code>.
		 * 
		 * <p><aside class="note"><b>Note</b>: This method doesn't set a <b>compose action</b> that is
		 * used to <a href="/gmail/add-ons/how-tos/extending-compose-ui">extend the compose UI</a>.
		 * Rather, this method connects this UI element to an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> that <a
		 * href="/gmail/add-ons/how-tos/compose">composes draft messages</a> in Apps Script that are
		 * opened in Gmail when the action completes. </aside>
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;composeEmailCallback&#39;);
		 * CardService.newTextButton()
		 *     .setText(&#39;Compose Email&#39;)
		 *     .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);
		 * 
		 * // ...
		 * 
		 * function composeEmailCallback() {
		 *   var thread = GmailApp.getThreadById(e.threadId);
		 *   var draft = thread.createDraftReply(&#39;This is a reply&#39;);
		 *   return CardService.newComposeActionResponseBuilder()
		 *       .setGmailDraft(draft)
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the compose action to take when this element is
		 *     clicked.
		 * @param composedEmailType - An enum value that specifies whether the composed draft is a
		 *     standalone or reply draft.
		 * 
		 * @returns This object, for chaining.
		 */
		setComposeAction(
			action: CardService.Action,
			composedEmailType: CardService.ComposedEmailType
		): CardService.ImageButton
		/**
		 * Sets a predefined <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/icon.html'>Icon</a></code> to display on the button. Either this or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setIconUrl(String)'>setIconUrl(url)</a></code>
		 * must be used to define the button image.
		 * 
		 * @param icon - One of the predefined <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/icon.html'>Icon</a></code> values.
		 * 
		 * @returns This object, for chaining.
		 */
		setIcon(
			icon: CardService.Icon
		): CardService.ImageButton
		/**
		 * Sets the URL of an image to use as this button's icon. Either this or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setIcon(Icon)'>setIcon(icon)</a></code> must be
		 * used to define the button image.
		 * 
		 * @param url - The URL address of a hosted image to use as this button's icon.
		 * 
		 * @returns This object, for chaining.
		 */
		setIconUrl(
			url: string
		): CardService.ImageButton
		/**
		 * Sets an action that executes when the object is clicked. A UI object can only have one of
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response.html'>ActionResponse</a></code> object.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;notificationCallback&#39;);
		 * CardService.newTextButton().setText(&#39;Create notification&#39;).setOnClickAction(action);
		 * 
		 * // ...
		 * 
		 * function notificationCallback() {
		 *   return CardService.newActionResponseBuilder()
		 *       .setNotification(CardService.newNotification()
		 *           .setText(&quot;Some info to display to user&quot;))
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The action to take when this element is clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setOnClickAction(
			action: CardService.Action
		): CardService.ImageButton
		/**
		 * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
		 * URL needs to be built or when you need to take other actions in additon to creating the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/open-link.html'>OpenLink</a></code> object. A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response.html'>ActionResponse</a></code> object configured using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response-builder.html#setOpenLink(OpenLink)'>ActionResponseBuilder.setOpenLink(openLink)</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;openLinkCallback&#39;);
		 * CardService.newTextButton().setText(&#39;Open Link&#39;).setOnClickOpenLinkAction(action);
		 * 
		 * // ...
		 * 
		 * function openLinkCallback() {
		 *   return CardService.newActionResponseBuilder()
		 *       .setOpenLink(CardService.newOpenLink()
		 *           .setUrl(&#39;https://www.google.com&#39;))
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the open link action to take when this element is
		 *     clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setOnClickOpenLinkAction(
			action: CardService.Action
		): CardService.ImageButton
		/**
		 * Sets a URL to be opened when the object is clicked. Use this function when the URL is already
		 * known and only needs to be opened. A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>,
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>,
		 * or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/image-button.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * @param openLink - An <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/open-link.html'>OpenLink</a></code> object describing the URL to open.
		 * 
		 * @returns This object, for chaining.
		 */
		setOpenLink(
			openLink: CardService.OpenLink
		): CardService.ImageButton

	}

	enum ImageCropType {
		/**
		 * Circle shape crop style.
		 */
		CIRCLE = "CIRCLE",
		/**
		 * Not set.
		 */
		CROP_TYPE_NOT_SET = "CROP_TYPE_NOT_SET",
		/**
		 * Rectangle shape crop style with 4:3 ratio.
		 */
		RECTANGLE_4_3 = "RECTANGLE_4_3",
		/**
		 * Rectangle shape crop style with custom ratio.
		 */
		RECTANGLE_CUSTOM = "RECTANGLE_CUSTOM",
		/**
		 * Square shape crop style.
		 */
		SQUARE = "SQUARE",
	}

	enum ImageStyle {
		/**
		 * Crop to a circle shape.
		 */
		CIRCLE = "CIRCLE",
		/**
		 * No cropping. Default.
		 */
		SQUARE = "SQUARE",
	}

	class KeyValue {
		private constructor();

		/**
		 * Sets an authorization action that opens a URL to the authorization flow when the object is
		 * clicked. This opens the URL in a new window. When the user finishes the authorization flow and
		 * returns to the application, the add-on reloads.
		 * 
		 * <p>A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAuthorizationAction().setAuthorizationUrl(&#39;url&#39;);
		 * CardService.newTextButton().setText(&#39;Authorize&#39;).setAuthorizationAction(action);
		 * 
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the authorization action to take when this element is
		 *     clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setAuthorizationAction(
			action: CardService.AuthorizationAction
		): CardService.KeyValue
		/**
		 * Sets the label text to be used as the key. Displayed below the text-content.
		 * 
		 * @param text - The label text. Note: It doesn't support <a
		 *     href="/gmail/add-ons/concepts/widgets#text_formatting">basic HTML formatting</a>.
		 * 
		 * @returns This object, for chaining.
		 */
		setBottomLabel(
			text: string
		): CardService.KeyValue
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/button.html'>Button</a></code> that is displayed to the right of the context. A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html'>KeyValue</a></code> can
		 * only support one button, one switch or one icon.
		 * 
		 * @param button - The button to add.
		 * 
		 * @returns This object, for chaining.
		 */
		setButton(
			button: CardService.Button
		): CardService.KeyValue
		/**
		 * Sets an action that composes a draft email when the object is clicked. A UI object can only
		 * have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>,
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/compose-action-response.html'>ComposeActionResponse</a></code> object configured using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html#setGmailDraft(GmailDraft)'>ComposeActionResponseBuilder.setGmailDraft(draft)</a></code>.
		 * 
		 * <p><aside class="note"><b>Note</b>: This method doesn't set a <b>compose action</b> that is
		 * used to <a href="/gmail/add-ons/how-tos/extending-compose-ui">extend the compose UI</a>.
		 * Rather, this method connects this UI element to an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> that <a
		 * href="/gmail/add-ons/how-tos/compose">composes draft messages</a> in Apps Script that are
		 * opened in Gmail when the action completes. </aside>
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;composeEmailCallback&#39;);
		 * CardService.newTextButton()
		 *     .setText(&#39;Compose Email&#39;)
		 *     .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);
		 * 
		 * // ...
		 * 
		 * function composeEmailCallback() {
		 *   var thread = GmailApp.getThreadById(e.threadId);
		 *   var draft = thread.createDraftReply(&#39;This is a reply&#39;);
		 *   return CardService.newComposeActionResponseBuilder()
		 *       .setGmailDraft(draft)
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the compose action to take when this element is
		 *     clicked.
		 * @param composedEmailType - An enum value that specifies whether the composed draft is a
		 *     standalone or reply draft.
		 * 
		 * @returns This object, for chaining.
		 */
		setComposeAction(
			action: CardService.Action,
			composedEmailType: CardService.ComposedEmailType
		): CardService.KeyValue
		/**
		 * Sets the text to be used as the value. Supports <a
		 * href="/gmail/add-ons/concepts/widgets#text_formatting">basic HTML formatting</a>. Required.
		 * 
		 * @param text - The text content for this widget.
		 * 
		 * @returns This object, for chaining.
		 */
		setContent(
			text: string
		): CardService.KeyValue
		/**
		 * Sets the icon to be used as the key.
		 * 
		 * @param icon - One of the predefined <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/icon.html'>Icon</a></code> values.
		 * 
		 * @returns This object, for chaining.
		 */
		setIcon(
			icon: CardService.Icon
		): CardService.KeyValue
		/**
		 * Sets the alternative text for the icon.
		 * 
		 * @param altText - The alternative text for the icon.
		 * 
		 * @returns This object, for chaining.
		 */
		setIconAltText(
			altText: string
		): CardService.KeyValue
		/**
		 * Sets the URL of the icon to be used as the key.
		 * 
		 * @param url - The URL address of a hosted image to use as an icon.
		 * 
		 * @returns This object, for chaining.
		 */
		setIconUrl(
			url: string
		): CardService.KeyValue
		/**
		 * Sets whether the value text should be displayed on a single line or multiple lines.
		 * 
		 * @param multiline - The multiline setting.
		 * 
		 * @returns This object, for chaining.
		 */
		setMultiline(
			multiline: Boolean
		): CardService.KeyValue
		/**
		 * Sets an action that executes when the object is clicked. A UI object can only have one of
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response.html'>ActionResponse</a></code> object.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;notificationCallback&#39;);
		 * CardService.newTextButton().setText(&#39;Create notification&#39;).setOnClickAction(action);
		 * 
		 * // ...
		 * 
		 * function notificationCallback() {
		 *   return CardService.newActionResponseBuilder()
		 *       .setNotification(CardService.newNotification()
		 *           .setText(&quot;Some info to display to user&quot;))
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The action to take when this element is clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setOnClickAction(
			action: CardService.Action
		): CardService.KeyValue
		/**
		 * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
		 * URL needs to be built or when you need to take other actions in additon to creating the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/open-link.html'>OpenLink</a></code> object. A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response.html'>ActionResponse</a></code> object configured using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response-builder.html#setOpenLink(OpenLink)'>ActionResponseBuilder.setOpenLink(openLink)</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;openLinkCallback&#39;);
		 * CardService.newTextButton().setText(&#39;Open Link&#39;).setOnClickOpenLinkAction(action);
		 * 
		 * // ...
		 * 
		 * function openLinkCallback() {
		 *   return CardService.newActionResponseBuilder()
		 *       .setOpenLink(CardService.newOpenLink()
		 *           .setUrl(&#39;https://www.google.com&#39;))
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the open link action to take when this element is
		 *     clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setOnClickOpenLinkAction(
			action: CardService.Action
		): CardService.KeyValue
		/**
		 * Sets a URL to be opened when the object is clicked. Use this function when the URL is already
		 * known and only needs to be opened. A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>,
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>,
		 * or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * @param openLink - An <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/open-link.html'>OpenLink</a></code> object describing the URL to open.
		 * 
		 * @returns This object, for chaining.
		 */
		setOpenLink(
			openLink: CardService.OpenLink
		): CardService.KeyValue
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/switch.html'>Switch</a></code> that is displayed to the right of the content. A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/key-value.html'>KeyValue</a></code> can
		 * only support one button, one switch or one icon.
		 * 
		 * @param switchToSet - The switch to add.
		 * 
		 * @returns This object, for chaining.
		 */
		setSwitch(
			switchToSet: CardService.Switch
		): CardService.KeyValue
		/**
		 * Sets the label text to be used as the key. Displayed above the text-content.
		 * 
		 * @param text - The label text. Note: It doesn't support <a
		 *     href="/gmail/add-ons/concepts/widgets#text_formatting">basic HTML formatting</a>.
		 * 
		 * @returns This object, for chaining.
		 */
		setTopLabel(
			text: string
		): CardService.KeyValue

	}

	enum LoadIndicator {
		/**
		 * Do not use an indicator.
		 */
		NONE = "NONE",
		/**
		 * Use a spinner indicator. Default.
		 */
		SPINNER = "SPINNER",
	}

	class Navigation {
		private constructor();

		/**
		 * Pops a card from the navigation stack. Can be chained with other card navigation actions.
		 * 
		 * @returns This object, for chaining.
		 */
		popCard(): CardService.Navigation
		/**
		 * Pops to the specified card by its card name. Can be chained with other card navigation actions.
		 * 
		 * @param cardName - The name of the card to navigate to.
		 * 
		 * @returns This object, for chaining.
		 */
		popToNamedCard(
			cardName: string
		): CardService.Navigation
		/**
		 * Pops the card stack to the root card. Can be chained with other card navigation actions.
		 * 
		 * @returns This object, for chaining.
		 */
		popToRoot(): CardService.Navigation
		printJson(): string
		/**
		 * Pushes the given card onto the stack. Can be chained with other card navigation actions.
		 * 
		 * @param card - A card to add to the stack.
		 * 
		 * @returns This object, for chaining.
		 */
		pushCard(
			card: CardService.Card
		): CardService.Navigation
		/**
		 * Does an in-place replacement of the current card. Can be chained with other card navigation
		 * actions.
		 * 
		 * @param card - A card to replace the current card with.
		 * 
		 * @returns This object, for chaining.
		 */
		updateCard(
			card: CardService.Card
		): CardService.Navigation

	}

	class Notification {
		private constructor();

		/**
		 * Sets the text to show in the notification. Required.
		 * 
		 * @param text - The notification text.
		 * 
		 * @returns This object, for chaining.
		 */
		setText(
			text: string
		): CardService.Notification

	}

	enum OnClose {
		/**
		 * Do nothing on close. Default.
		 */
		NOTHING = "NOTHING",
		/**
		 * Reload the add-on on closing the URL.
		 */
		RELOAD_ADD_ON = "RELOAD_ADD_ON",
	}

	enum OpenAs {
		/**
		 * Open in a full window or tab. Default.
		 */
		FULL_SIZE = "FULL_SIZE",
		/**
		 * Open as an overlay such as a pop-up.
		 */
		OVERLAY = "OVERLAY",
	}

	class OpenLink {
		private constructor();

		/**
		 * Sets the behavior of the URL action when the URL window or tab is closed.
		 * 
		 * @param onClose - The closing setting.
		 * 
		 * @returns This object, for chaining.
		 */
		setOnClose(
			onClose: CardService.OnClose
		): CardService.OpenLink
		/**
		 * Sets the behavior of URL when it is opened.
		 * 
		 * @param openAs - The opening setting.
		 * 
		 * @returns This object, for chaining.
		 */
		setOpenAs(
			openAs: CardService.OpenAs
		): CardService.OpenLink
		/**
		 * Sets the URL to be opened. The URL must match a prefix <a
		 * href="/gmail/add-ons/concepts/manifests#manifest_structure_for_gmail_add-ons">whitelisted in
		 * the manifest</a>.
		 * 
		 * @param url - The URL to open.
		 * 
		 * @returns This object, for chaining.
		 */
		setUrl(
			url: string
		): CardService.OpenLink

	}

	class SelectionInput {
		private constructor();

		/**
		 * Adds a new item that can be selected.
		 * 
		 * @param text - The text to be shown for this item. Non-string primitive arguments are converted to
		 *     strings automatically.
		 * @param value - The form input value that is sent via the callback. Non-string primitive arguments
		 *     are converted to strings automatically.
		 * @param selected - Whether the item should start as selected or unselected.
		 * 
		 * @returns This object, for chaining.
		 */
		addItem(
			text: object,
			value: object,
			selected: Boolean
		): CardService.SelectionInput
		/**
		 * Sets the key that identifies this selection input in the event object that is generated when
		 * there is a UI interaction. Not visible to the user. Required, must be unique.
		 * 
		 * @param fieldName - The name to assign to this input.
		 * 
		 * @returns This object, for chaining.
		 */
		setFieldName(
			fieldName: string
		): CardService.SelectionInput
		/**
		 * Sets an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> to be performed whenever the selection input changes.
		 * 
		 * @param action - The action to take.
		 * 
		 * @returns This object, for chaining.
		 */
		setOnChangeAction(
			action: CardService.Action
		): CardService.SelectionInput
		/**
		 * Sets the title to be shown ahead of the input field.
		 * 
		 * @param title - The input field title.
		 * 
		 * @returns This object, for chaining.
		 */
		setTitle(
			title: string
		): CardService.SelectionInput
		/**
		 * Sets the type of this input. Defaults to <code>CHECKBOX</code>.
		 * 
		 * @param type - The selection type.
		 * 
		 * @returns This object, for chaining.
		 */
		setType(
			type: CardService.SelectionInputType
		): CardService.SelectionInput

	}

	enum SelectionInputType {
		/**
		 * Checkbox input style. Default.
		 */
		CHECK_BOX = "CHECK_BOX",
		/**
		 * Dropdown menu selection input style.
		 */
		DROPDOWN = "DROPDOWN",
		/**
		 * Radio buton input style. At most one item in the group can be selected.
		 */
		RADIO_BUTTON = "RADIO_BUTTON",
	}

	class Suggestions {
		private constructor();

		/**
		 * Add a text suggestion.
		 * 
		 * @param suggestion - The suggestion text.
		 * 
		 * @returns This object, for chaining.
		 */
		addSuggestion(
			suggestion: string
		): CardService.Suggestions
		/**
		 * Add a list of text suggestions.
		 * 
		 * @param suggestions - An array of string suggestions.
		 * 
		 * @returns This object, for chaining.
		 */
		addSuggestions(
			suggestions: object[]
		): CardService.Suggestions

	}

	class SuggestionsResponse {
		private constructor();

		printJson(): string

	}

	class SuggestionsResponseBuilder {
		private constructor();

		/**
		 * Builds the current suggestions response and validates it.
		 * 
		 * @returns A validated SuggestionsResponse.
		 */
		build(): CardService.SuggestionsResponse
		/**
		 * Sets the suggestions used in auto complete in text fields.
		 * 
		 * @param suggestions - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/suggestions.html'>Suggestions</a></code> to use.
		 * 
		 * @returns This object.
		 */
		setSuggestions(
			suggestions: CardService.Suggestions
		): CardService.SuggestionsResponseBuilder

	}

	class Switch {
		private constructor();

		/**
		 * Sets the control type of the switch. Defaults to <code>SWITCH</code>.
		 * 
		 * @param controlType - The switch control type.
		 * 
		 * @returns This object, for chaining.
		 */
		setControlType(
			controlType: CardService.SwitchControlType
		): CardService.Switch
		/**
		 * Sets the key that identifies this switch in the event object that is generated when there is a
		 * UI interaction. Not visible to the user. Required.
		 * 
		 * <p>Unlike other form fields, this field name does not need to be unique. The form input values
		 * for switches using the same field name are returned as an array. The array consists of the
		 * values for all enabled switches with that field name.
		 * 
		 * @param fieldName - The key that is used to identify this switch.
		 * 
		 * @returns This object, for chaining.
		 */
		setFieldName(
			fieldName: string
		): CardService.Switch
		/**
		 * Sets the action to take when the switch is toggled.
		 * 
		 * @param action - The action to take when the switch is toggled.
		 * 
		 * @returns This object, for chaining.
		 */
		setOnChangeAction(
			action: CardService.Action
		): CardService.Switch
		/**
		 * Sets whether this switch should start as selected or unselected.
		 * 
		 * @param selected - The starting switch state setting.
		 * 
		 * @returns This object, for chaining.
		 */
		setSelected(
			selected: Boolean
		): CardService.Switch
		/**
		 * Sets the value that is sent as the form input when this switch is toggled on.
		 * 
		 * @param value - The value associated with the name when the switch is on. When this is sent to the
		 *     form callback, it is always represented as a string.
		 * 
		 * @returns This object, for chaining.
		 */
		setValue(
			value: string
		): CardService.Switch

	}

	enum SwitchControlType {
		/**
		 * Checkbox-styled control for a switch widget.
		 */
		CHECK_BOX = "CHECK_BOX",
		/**
		 * Toggle-styled control for a switch widget. Default.
		 */
		SWITCH = "SWITCH",
	}

	class TextButton {
		private constructor();

		/**
		 * Sets an authorization action that opens a URL to the authorization flow when the object is
		 * clicked. This opens the URL in a new window. When the user finishes the authorization flow and
		 * returns to the application, the add-on reloads.
		 * 
		 * <p>A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAuthorizationAction().setAuthorizationUrl(&#39;url&#39;);
		 * CardService.newTextButton().setText(&#39;Authorize&#39;).setAuthorizationAction(action);
		 * 
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the authorization action to take when this element is
		 *     clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setAuthorizationAction(
			action: CardService.AuthorizationAction
		): CardService.TextButton
		/**
		 * Sets the background color for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button-style.html#FILLED'>TextButtonStyle.FILLED</a></code> button. If unset for a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button-style.html#FILLED'>TextButtonStyle.FILLED</a></code> button, the button uses the secondary color defined in the add-on <a
		 * href="/gmail/add-ons/concepts/manifests#manifest_structure_for_gmail_add-ons">manifest</a>.
		 * This method is a no-op for <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button-style.html#TEXT'>TextButtonStyle.TEXT</a></code> buttons.
		 * 
		 * @param backgroundColor - The color in #rgb format.
		 * 
		 * @returns This object, for chaining.
		 */
		setBackgroundColor(
			backgroundColor: string
		): CardService.TextButton
		/**
		 * Sets an action that composes a draft email when the object is clicked. A UI object can only
		 * have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>,
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/compose-action-response.html'>ComposeActionResponse</a></code> object configured using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html#setGmailDraft(GmailDraft)'>ComposeActionResponseBuilder.setGmailDraft(draft)</a></code>.
		 * 
		 * <p><aside class="note"><b>Note</b>: This method doesn't set a <b>compose action</b> that is
		 * used to <a href="/gmail/add-ons/how-tos/extending-compose-ui">extend the compose UI</a>.
		 * Rather, this method connects this UI element to an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> that <a
		 * href="/gmail/add-ons/how-tos/compose">composes draft messages</a> in Apps Script that are
		 * opened in Gmail when the action completes. </aside>
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;composeEmailCallback&#39;);
		 * CardService.newTextButton()
		 *     .setText(&#39;Compose Email&#39;)
		 *     .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);
		 * 
		 * // ...
		 * 
		 * function composeEmailCallback() {
		 *   var thread = GmailApp.getThreadById(e.threadId);
		 *   var draft = thread.createDraftReply(&#39;This is a reply&#39;);
		 *   return CardService.newComposeActionResponseBuilder()
		 *       .setGmailDraft(draft)
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the compose action to take when this element is
		 *     clicked.
		 * @param composedEmailType - An enum value that specifies whether the composed draft is a
		 *     standalone or reply draft.
		 * 
		 * @returns This object, for chaining.
		 */
		setComposeAction(
			action: CardService.Action,
			composedEmailType: CardService.ComposedEmailType
		): CardService.TextButton
		/**
		 * Sets whether the button is disabled. A disabled button is greyed out and cannot be clicked.
		 * 
		 * @param disabled - The disabled state.
		 * 
		 * @returns This object, for chaining.
		 */
		setDisabled(
			disabled: Boolean
		): CardService.TextButton
		/**
		 * Sets an action that executes when the object is clicked. A UI object can only have one of
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response.html'>ActionResponse</a></code> object.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;notificationCallback&#39;);
		 * CardService.newTextButton().setText(&#39;Create notification&#39;).setOnClickAction(action);
		 * 
		 * // ...
		 * 
		 * function notificationCallback() {
		 *   return CardService.newActionResponseBuilder()
		 *       .setNotification(CardService.newNotification()
		 *           .setText(&quot;Some info to display to user&quot;))
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The action to take when this element is clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setOnClickAction(
			action: CardService.Action
		): CardService.TextButton
		/**
		 * Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
		 * URL needs to be built or when you need to take other actions in additon to creating the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/open-link.html'>OpenLink</a></code> object. A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>, or
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * <p>The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response.html'>ActionResponse</a></code> object configured using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action-response-builder.html#setOpenLink(OpenLink)'>ActionResponseBuilder.setOpenLink(openLink)</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // ...
		 * 
		 * var action = CardService.newAction().setFunctionName(&#39;openLinkCallback&#39;);
		 * CardService.newTextButton().setText(&#39;Open Link&#39;).setOnClickOpenLinkAction(action);
		 * 
		 * // ...
		 * 
		 * function openLinkCallback() {
		 *   return CardService.newActionResponseBuilder()
		 *       .setOpenLink(CardService.newOpenLink()
		 *           .setUrl(&#39;https://www.google.com&#39;))
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param action - The object that specifies the open link action to take when this element is
		 *     clicked.
		 * 
		 * @returns This object, for chaining.
		 */
		setOnClickOpenLinkAction(
			action: CardService.Action
		): CardService.TextButton
		/**
		 * Sets a URL to be opened when the object is clicked. Use this function when the URL is already
		 * known and only needs to be opened. A UI object can only have one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setOpenLink(OpenLink)'>setOpenLink(openLink)</a></code>,
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickAction(Action)'>setOnClickAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickOpenLinkAction(Action)'>setOnClickOpenLinkAction(action)</a></code>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setAuthorizationAction(AuthorizationAction)'>setAuthorizationAction(action)</a></code>,
		 * or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button.html#setComposeAction(Action,ComposedEmailType)'>setComposeAction(action, composedEmailType)</a></code> set.
		 * 
		 * @param openLink - An <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/open-link.html'>OpenLink</a></code> object describing the URL to open.
		 * 
		 * @returns This object, for chaining.
		 */
		setOpenLink(
			openLink: CardService.OpenLink
		): CardService.TextButton
		/**
		 * Sets the text to be displayed on the button.
		 * 
		 * @param text - The text that appears on the button to identify it.
		 * 
		 * @returns This object, for chaining.
		 */
		setText(
			text: string
		): CardService.TextButton
		/**
		 * Sets the button style. If unset, it defaults to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/text-button-style.html#TEXT'>TextButtonStyle.TEXT</a></code> button.
		 * 
		 * @param textButtonStyle - The button style.
		 * 
		 * @returns This object, for chaining.
		 */
		setTextButtonStyle(
			textButtonStyle: CardService.TextButtonStyle
		): CardService.TextButton

	}

	enum TextButtonStyle {
		/**
		 * Text button with colored background.
		 */
		FILLED = "FILLED",
		/**
		 * Normal text button with clear background. Default.
		 */
		TEXT = "TEXT",
	}

	class TextInput {
		private constructor();

		/**
		 * Sets the key that identifies this text input in the event object that is generated when there
		 * is a UI interaction. Not visible to the user. Required, must be unique.
		 * 
		 * @param fieldName - The key that is used to identify this input.
		 * 
		 * @returns This object, for chaining.
		 */
		setFieldName(
			fieldName: string
		): CardService.TextInput
		/**
		 * Sets a hint for the text input. Used to give the user extra guidance on what to input. E.g., a
		 * hint could describe formatting ("xxx-xxx-xxxx") for a phone number field.
		 * 
		 * @param hint - The text hint to display when the input is empty.
		 * 
		 * @returns This object, for chaining.
		 */
		setHint(
			hint: string
		): CardService.TextInput
		/**
		 * Sets whether the input text shows on one line or multiple lines.
		 * 
		 * @param multiline - The multiline setting.
		 * 
		 * @returns This object, for chaining.
		 */
		setMultiline(
			multiline: Boolean
		): CardService.TextInput
		/**
		 * Sets an action to be performed whenever the text input changes.
		 * 
		 * @param action - The action to take.
		 * 
		 * @returns This object, for chaining.
		 */
		setOnChangeAction(
			action: CardService.Action
		): CardService.TextInput
		/**
		 * Sets the suggestions for autocompletion in the text field.
		 * 
		 * @param suggestions - The collection of suggestions to use.
		 * 
		 * @returns This object, for chaining.
		 */
		setSuggestions(
			suggestions: CardService.Suggestions
		): CardService.TextInput
		/**
		 * Sets the callback action to fetch suggestions based on user input for autocompletion. The
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> parameter must specify a callback function that returns a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/suggestions-response.html'>SuggestionsResponse</a></code> object.
		 * 
		 * <pre class="prettyprint"><code>
		 * var action = CardService.newAction()
		 *     .setFunctionName(&#39;suggestionCallback&#39;)
		 *     .setParameters({&#39;numSuggestions&#39;: 3});
		 * 
		 * CardService.newTextInput()
		 *     .setFieldName(&#39;option-field&#39;)
		 *     .setTitle(&#39;Option Selected&#39;)
		 *     .setSuggestionsAction(action);
		 * 
		 * // ...
		 * 
		 * function suggestionCallback(e) {
		 *   var suggestions = CardService.newSuggestions();
		 *   var numSuggestions = parseInt(e.parameter[&#39;numSuggestions&#39;]);
		 *   for(var i = 1; i &lt;= numSuggestions; i++) {
		 *     suggestions.addSuggestion(&#39;Suggestion &#39; + i);
		 *   }
		 *   return CardService.newSuggestionsResponseBuilder()
		 *       .setSuggestions(suggestions)
		 *       .build();
		 * }
		 * </code></pre>
		 * 
		 * @param suggestionsAction - The action that fetches suggestions for this input.
		 * 
		 * @returns This object, for chaining.
		 */
		setSuggestionsAction(
			suggestionsAction: CardService.Action
		): CardService.TextInput
		/**
		 * Sets the title to be shown above the input field. Required.
		 * 
		 * @param title - The text label for this input.
		 * 
		 * @returns This object, for chaining.
		 */
		setTitle(
			title: string
		): CardService.TextInput
		/**
		 * Sets the pre-filled value to be set in the input field.
		 * 
		 * @param value - The default value placed in the input. It is always represented as a string in the
		 *     form callback parameters.
		 * 
		 * @returns This object, for chaining.
		 */
		setValue(
			value: string
		): CardService.TextInput

	}

	class TextParagraph {
		private constructor();

		/**
		 * Sets the text of the paragraph. Required.
		 * 
		 * @param text - The text to display.
		 * 
		 * @returns This object, for chaining.
		 */
		setText(
			text: string
		): CardService.TextParagraph

	}

	class TimePicker {
		private constructor();

		/**
		 * Sets the field name that identifies this picker in the event object that is generated when
		 * there is a UI interaction. The field name is visible to the user. Required; the specified field
		 * name must be unique.
		 * 
		 * @param fieldName - The name to assign to this input.
		 * 
		 * @returns This picker, for chaining.
		 */
		setFieldName(
			fieldName: string
		): CardService.TimePicker
		/**
		 * Sets the prefilled hours value to set in the input field.
		 * 
		 * @param hours - The default hour value placed in the input, range from 0 to 23. It is always
		 *     represented as a string in the form callback parameters.
		 * 
		 * @returns This picker, for chaining.
		 */
		setHours(
			hours: number
		): CardService.TimePicker
		/**
		 * Sets the prefilled minutes value to set in the input field.
		 * 
		 * @param minutes - The default minutes value placed in the input, range from 0 to 59. It is always
		 *     represented as a string in the form callback parameters.
		 * 
		 * @returns This picker, for chaining.
		 */
		setMinutes(
			minutes: number
		): CardService.TimePicker
		/**
		 * Sets an <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/action.html'>Action</a></code> that the script performs whenever the picker input changes.
		 * 
		 * @param action - The action to take.
		 * 
		 * @returns This picker, for chaining.
		 */
		setOnChangeAction(
			action: CardService.Action
		): CardService.TimePicker
		/**
		 * Sets the title displayed above the input field.
		 * 
		 * @param title - The input field title.
		 * 
		 * @returns This picker, for chaining.
		 */
		setTitle(
			title: string
		): CardService.TimePicker

	}

	class UniversalActionResponse {
		private constructor();

		printJson(): string

	}

	class UniversalActionResponseBuilder {
		private constructor();

		/**
		 * Builds the current universal action response and validates it.
		 * 
		 * @returns A validated UniversalActionResponse.
		 */
		build(): CardService.UniversalActionResponse
		/**
		 * Displays the add-on with the specified cards.
		 * 
		 * @param cardObjects - An array of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/card.html'>Card</a></code>s to display.
		 * 
		 * @returns This object, for chaining.
		 */
		displayAddOnCards(
			cardObjects: object[]
		): CardService.UniversalActionResponseBuilder
		/**
		 * Sets the URL to open when the universal action is selected.
		 * 
		 * @param openLink - The link object to use.
		 * 
		 * @returns This object, for chaining.
		 */
		setOpenLink(
			openLink: CardService.OpenLink
		): CardService.UniversalActionResponseBuilder

	}

	class UpdateDraftActionResponse {
		private constructor();

		printJson(): string

	}

	class UpdateDraftActionResponseBuilder {
		private constructor();

		/**
		 * Builds the current update draft action response and validates it.
		 * 
		 * @returns A validated draft action response.
		 */
		build(): CardService.UpdateDraftActionResponse
		/**
		 * Sets an action that updates the email Bcc recipients of a draft.
		 * 
		 * @param updateDraftBccRecipientsAction - The action that updates the draft Bcc recipients.
		 * 
		 * @returns This object, for chaining.
		 */
		setUpdateDraftBccRecipientsAction(
			updateDraftBccRecipientsAction: CardService.UpdateDraftBccRecipientsAction
		): CardService.UpdateDraftActionResponseBuilder
		/**
		 * Set an action that updates the email body of a draft.
		 * 
		 * @param updateDraftBodyAction - The action that updates the draft body.
		 * 
		 * @returns This object, for chaining.
		 */
		setUpdateDraftBodyAction(
			updateDraftBodyAction: CardService.UpdateDraftBodyAction
		): CardService.UpdateDraftActionResponseBuilder
		/**
		 * Sets an action that updates the Cc recipients of a draft.
		 * 
		 * @param updateDraftCcRecipientsAction - The action that updates the draft Cc recipients.
		 * 
		 * @returns This object, for chaining.
		 */
		setUpdateDraftCcRecipientsAction(
			updateDraftCcRecipientsAction: CardService.UpdateDraftCcRecipientsAction
		): CardService.UpdateDraftActionResponseBuilder
		/**
		 * Sets an action that updates the subject line of a draft.
		 * 
		 * @param updateDraftSubjectAction - The action that updates the subject line.
		 * 
		 * @returns This object, for chaining.
		 */
		setUpdateDraftSubjectAction(
			updateDraftSubjectAction: CardService.UpdateDraftSubjectAction
		): CardService.UpdateDraftActionResponseBuilder
		/**
		 * Sets an action that updates the To recipients of a draft.
		 * 
		 * @param updateDraftToRecipientsAction - The action that updates the To recipients.
		 * 
		 * @returns This object, for chaining.
		 */
		setUpdateDraftToRecipientsAction(
			updateDraftToRecipientsAction: CardService.UpdateDraftToRecipientsAction
		): CardService.UpdateDraftActionResponseBuilder

	}

	class UpdateDraftBccRecipientsAction {
		private constructor();

		/**
		 * Updates the Bcc recipients of an email draft.
		 * 
		 * @param bccRecipientEmails - The Bcc recipients to insert to the email draft.
		 * 
		 * @returns This object, for chaining.
		 */
		addUpdateBccRecipients(
			bccRecipientEmails: string[]
		): CardService.UpdateDraftBccRecipientsAction

	}

	class UpdateDraftBodyAction {
		private constructor();

		/**
		 * Adds the specified content to the draft body. The type of the <code>content</code> is specified by
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/content-type.html'>ContentType</a></code>.
		 * 
		 * @param content - The content to insert to the email draft.
		 * @param contentType - The content type of the content to be inserted.
		 * 
		 * @returns This object, for chaining.
		 */
		addUpdateContent(
			content: string,
			contentType: CardService.ContentType
		): CardService.UpdateDraftBodyAction
		/**
		 * Sets the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/card-service/update-draft-body-type.html'>UpdateDraftBodyType</a></code> of this update action on the draft body. For example,
		 * inserting content at the start, end, or cursor position of the draft body.
		 * 
		 * @param updateType - The type of update to be performed on an email draft.
		 * 
		 * @returns This object, for chaining.
		 */
		setUpdateType(
			updateType: CardService.UpdateDraftBodyType
		): CardService.UpdateDraftBodyAction

	}

	enum UpdateDraftBodyType {
		/**
		 * Update actions insert content at the end of the message body. If an email signature is present,
		 * in Gmail on the web, the update action inserts after the user's signature. In the Gmail mobile
		 * app, the update action inserts before the user's signature.
		 */
		INSERT_AT_END = "INSERT_AT_END",
		/**
		 * Update actions insert content at the start of message body.
		 */
		INSERT_AT_START = "INSERT_AT_START",
		/**
		 * Default. Update actions insert content at the current cursor position, replacing any selected
		 * content.
		 */
		IN_PLACE_INSERT = "IN_PLACE_INSERT",
	}

	class UpdateDraftCcRecipientsAction {
		private constructor();

		/**
		 * Updates the Cc recipients of an email draft.
		 * 
		 * @param ccRecipientEmails - The Cc recipients to insert to the email draft.
		 * 
		 * @returns This object, for chaining.
		 */
		addUpdateCcRecipients(
			ccRecipientEmails: string[]
		): CardService.UpdateDraftCcRecipientsAction

	}

	class UpdateDraftSubjectAction {
		private constructor();

		/**
		 * Updates the subject line of an email draft.
		 * 
		 * @param subject - The subject line to insert to the email draft.
		 * 
		 * @returns This object, for chaining.
		 */
		addUpdateSubject(
			subject: string
		): CardService.UpdateDraftSubjectAction

	}

	class UpdateDraftToRecipientsAction {
		private constructor();

		/**
		 * Updates the To recipients of an email draft.
		 * 
		 * @param toRecipientEmails - The To recipients to insert to the email draft.
		 * 
		 * @returns This object, for chaining.
		 */
		addUpdateToRecipients(
			toRecipientEmails: string[]
		): CardService.UpdateDraftToRecipientsAction

	}

	class Widget {
		private constructor();

	}

	class EditorFileScopeActionResponseBuilder {
		private constructor();

		/**
		 * Builds the current editor action response.
		 * 
		 * @returns A validated <code>EditorFileScopeActionResponse</code>.
		 */
		build(): CardService.EditorFileScopeActionResponse
		/**
		 * Specifies that the response requests file scope for the current active editor document.
		 * 
		 * <p>Note: This method can only be called when the drive.file scope is specified as a required
		 * scope in the add-on's manifest.
		 * 
		 * @returns This object, for chaining.
		 */
		requestFileScopeForActiveDocument(): CardService.EditorFileScopeActionResponseBuilder

	}

}
