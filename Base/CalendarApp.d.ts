/** Module: CalendarApp */

type CalendarApp = typeof CalendarApp;
declare namespace CalendarApp {

	/**
	 * Creates a new all-day event.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Creates an all-day event for the moon landing and logs the ID.
	 * var event = CalendarApp.getDefaultCalendar().createAllDayEvent(&#39;Apollo 11 Landing&#39;,
	 *     new Date(&#39;July 20, 1969&#39;));
	 * Logger.log(&#39;Event ID: &#39; + event.getId());
	 * </code></pre>
	 * 
	 * @param title - the title of the event
	 * @param date - the date of the event (only the day is used; the time is ignored)
	 * 
	 * @returns the created event
	 */
	function createAllDayEvent(
		title: string,
		date: Date
	): CalendarApp.CalendarEvent
	/**
	 * Creates a new all-day event.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
	 * var event = CalendarApp.getDefaultCalendar().createAllDayEvent(&#39;Woodstock Festival&#39;,
	 *     new Date(&#39;August 15, 1969&#39;),
	 *     new Date(&#39;August 18, 1969&#39;));
	 * Logger.log(&#39;Event ID: &#39; + event.getId());
	 * </code></pre>
	 * 
	 * @param title - the title of the event
	 * @param startDate - the date when the event starts (only the day is used; the time is ignored)
	 * @param endDate - the date when the event ends (only the day is used; the time is ignored)
	 * 
	 * @returns the created event
	 */
	function createAllDayEvent(
		title: string,
		startDate: Date,
		endDate: Date
	): CalendarApp.CalendarEvent
	/**
	 * Creates a new all-day event.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
	 * var event = CalendarApp.getDefaultCalendar().createAllDayEvent(&#39;Woodstock Festival&#39;,
	 *     new Date(&#39;August 15, 1969&#39;),
	 *     new Date(&#39;August 18, 1969&#39;),
	 *     {location: &#39;Bethel, White Lake, New York, U.S.&#39;, sendInvites: true});
	 * Logger.log(&#39;Event ID: &#39; + event.getId());
	 * </code></pre>
	 * 
	 * @param title - the title of the event
	 * @param startDate - the date when the event starts (only the day is used; the time is ignored)
	 * @param endDate - the date when the event ends (only the day is used; the time is ignored)
	 * @param options - a JavaScript object that specifies advanced parameters, as listed below
	 * 
	 * @returns the created event
	 */
	function createAllDayEvent(
		title: string,
		startDate: Date,
		endDate: Date,
		options: object
	): CalendarApp.CalendarEvent
	/**
	 * Creates a new all-day event.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Creates an all-day event for the moon landing and logs the ID.
	 * var event = CalendarApp.getDefaultCalendar().createAllDayEvent(&#39;Apollo 11 Landing&#39;,
	 *     new Date(&#39;July 20, 1969&#39;),
	 *     {location: &#39;The Moon&#39;});
	 * Logger.log(&#39;Event ID: &#39; + event.getId());
	 * </code></pre>
	 * 
	 * @param title - the title of the event
	 * @param date - the date of the event (only the day is used; the time is ignored)
	 * @param options - a JavaScript object that specifies advanced parameters, as listed below
	 * 
	 * @returns the created event
	 */
	function createAllDayEvent(
		title: string,
		date: Date,
		options: object
	): CalendarApp.CalendarEvent

	/**
	 * Creates a new all-day event series.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
	 * var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries(&#39;No Meetings&#39;,
	 *     new Date(&#39;January 2, 2013 03:00:00 PM EST&#39;),
	 *     CalendarApp.newRecurrence().addWeeklyRule()
	 *         .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
	 *         .until(new Date(&#39;January 1, 2014&#39;)));
	 * Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
	 * </code></pre>
	 * 
	 * @param title - the title of the events in the series
	 * @param startDate - the date of the first event in the series (only the day is used; the time is
	 *     ignored)
	 * @param recurrence - the recurrence settings of the event series
	 * 
	 * @returns the created event series
	 */
	function createAllDayEventSeries(
		title: string,
		startDate: Date,
		recurrence: CalendarApp.EventRecurrence
	): CalendarApp.CalendarEventSeries
	/**
	 * Creates a new all-day event series.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
	 * var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries(&#39;No Meetings&#39;,
	 *     new Date(&#39;January 2, 2013 03:00:00 PM EST&#39;),
	 *     CalendarApp.newRecurrence().addWeeklyRule()
	 *         .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
	 *         .until(new Date(&#39;January 1, 2014&#39;)),
	 *     {guests: &#39;everyone@example.com&#39;});
	 * Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
	 * </code></pre>
	 * 
	 * @param title - the title of the events in the series
	 * @param startDate - the date of the first event in the series (only the day is used; the time is
	 *     ignored)
	 * @param recurrence - the recurrence settings of the event series
	 * @param options - a JavaScript object that specifies advanced parameters, as listed below
	 * 
	 * @returns the created event series
	 */
	function createAllDayEventSeries(
		title: string,
		startDate: Date,
		recurrence: CalendarApp.EventRecurrence,
		options: object
	): CalendarApp.CalendarEventSeries

	/**
	 * Creates a new calendar, owned by the user.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Creates a new calendar named &quot;Travel Plans&quot;.
	 * var calendar = CalendarApp.createCalendar(&#39;Travel Plans&#39;);
	 * Logger.log(&#39;Created the calendar &quot;%s&quot;, with the ID &quot;%s&quot;.&#39;,
	 *     calendar.getName(), calendar.getId());
	 * </code></pre>
	 * 
	 * @param name - the name of the new calendar
	 * 
	 * @returns the newly created calendar
	 */
	function createCalendar(
		name: string
	): CalendarApp.Calendar
	/**
	 * Creates a new calendar, owned by the user.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Creates a new calendar named &quot;Travel Plans&quot; with a summary and color.
	 * var calendar = CalendarApp.createCalendar(&#39;Travel Plans&#39;, {
	 *   summary: &#39;A calendar to plan my travel schedule.&#39;,
	 *   color: CalendarApp.Color.BLUE
	 * });
	 * Logger.log(&#39;Created the calendar &quot;%s&quot;, with the ID &quot;%s&quot;.&#39;,
	 *     calendar.getName(), calendar.getId());
	 * </code></pre>
	 * 
	 * @param name - the name of the new calendar
	 * @param options - a JavaScript object that specifies advanced parameters, as listed below
	 * 
	 * @returns the newly created calendar
	 */
	function createCalendar(
		name: string,
		options: object
	): CalendarApp.Calendar

	/**
	 * Creates a new event.
	 * 
	 * <p>If no time zone is specified, the time values are interpreted in the context of the script's
	 * time zone, which may be different than the calendar's time zone.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Creates an event for the moon landing and logs the ID.
	 * var event = CalendarApp.getDefaultCalendar().createEvent(&#39;Apollo 11 Landing&#39;,
	 *     new Date(&#39;July 20, 1969 20:00:00 UTC&#39;),
	 *     new Date(&#39;July 21, 1969 21:00:00 UTC&#39;));
	 * Logger.log(&#39;Event ID: &#39; + event.getId());
	 * </code></pre>
	 * 
	 * @param title - the title of the event
	 * @param startTime - the date and time when the event starts
	 * @param endTime - the date and time when the event ends
	 * 
	 * @returns the created event
	 */
	function createEvent(
		title: string,
		startTime: Date,
		endTime: Date
	): CalendarApp.CalendarEvent
	/**
	 * Creates a new event.
	 * 
	 * <p>If no time zone is specified, the time values are interpreted in the context of the script's
	 * time zone, which may be different than the calendar's time zone.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Creates an event for the moon landing and logs the ID.
	 * var event = CalendarApp.getDefaultCalendar().createEvent(&#39;Apollo 11 Landing&#39;,
	 *     new Date(&#39;July 20, 1969 20:00:00 UTC&#39;),
	 *     new Date(&#39;July 20, 1969 21:00:00 UTC&#39;),
	 *     {location: &#39;The Moon&#39;});
	 * Logger.log(&#39;Event ID: &#39; + event.getId());
	 * </code></pre>
	 * 
	 * @param title - the title of the event
	 * @param startTime - the date and time when the event starts
	 * @param endTime - the date and time when the event ends
	 * @param options - a JavaScript object that specifies advanced parameters, as listed below
	 * 
	 * @returns the created event
	 */
	function createEvent(
		title: string,
		startTime: Date,
		endTime: Date,
		options: object
	): CalendarApp.CalendarEvent

	/**
	 * Creates an event from a free-form description.
	 * 
	 * <p>The description should use the same format as the UI's <a
	 * href="http://support.google.com/calendar/answer/36604">"Quick Add"</a> feature.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Creates a new event and logs its ID.
	 * var event = CalendarApp.getDefaultCalendar()
	 *     .createEventFromDescription(&#39;Lunch with Mary, Friday at 1PM&#39;);
	 * Logger.log(&#39;Event ID: &#39; + event.getId());
	 * </code></pre>
	 * 
	 * @param description - a free-form description of the event
	 * 
	 * @returns the created event
	 */
	function createEventFromDescription(
		description: string
	): CalendarApp.CalendarEvent
	/**
	 * Creates a new event series.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
	 * var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries(&#39;Team Meeting&#39;,
	 *     new Date(&#39;January 1, 2013 03:00:00 PM EST&#39;),
	 *     new Date(&#39;January 1, 2013 04:00:00 PM EST&#39;),
	 *     CalendarApp.newRecurrence().addWeeklyRule()
	 *         .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
	 *         .until(new Date(&#39;January 1, 2014&#39;)));
	 * Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
	 * </code></pre>
	 * 
	 * @param title - the title of the events in the series
	 * @param startTime - the date and time when the first event in the series starts
	 * @param endTime - the date and time when the first event in the series ends
	 * @param recurrence - the recurrence settings of the event series
	 * 
	 * @returns the created event series
	 */
	function createEventSeries(
		title: string,
		startTime: Date,
		endTime: Date,
		recurrence: CalendarApp.EventRecurrence
	): CalendarApp.CalendarEventSeries
	/**
	 * Creates a new event series.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
	 * var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries(&#39;Team Meeting&#39;,
	 *     new Date(&#39;January 1, 2013 03:00:00 PM EST&#39;),
	 *     new Date(&#39;January 1, 2013 04:00:00 PM EST&#39;),
	 *     CalendarApp.newRecurrence().addWeeklyRule()
	 *         .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
	 *         .until(new Date(&#39;January 1, 2014&#39;)),
	 *     {location: &#39;Conference Room&#39;});
	 * Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
	 * </code></pre>
	 * 
	 * @param title - the title of the events in the series
	 * @param startTime - the date and time when the first event in the series starts
	 * @param endTime - the date and time when the first event in the series ends
	 * @param recurrence - the recurrence settings of the event series
	 * @param options - a JavaScript object that specifies advanced parameters, as listed below
	 * 
	 * @returns the created event series
	 */
	function createEventSeries(
		title: string,
		startTime: Date,
		endTime: Date,
		recurrence: CalendarApp.EventRecurrence,
		options: object
	): CalendarApp.CalendarEventSeries

	/**
	 * Gets all calendars that the user owns or is subscribed to.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Determines how many calendars the user can access.
	 * var calendars = CalendarApp.getAllCalendars();
	 * Logger.log(&#39;This user owns or is subscribed to %s calendars.&#39;,
	 *     calendars.length);
	 * </code></pre>
	 * 
	 * @returns all calendars that the user can access
	 */
	function getAllCalendars(): CalendarApp.Calendar[]
	/**
	 * Gets all calendars that the user owns.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Determines how many calendars the user owns.
	 * var calendars = CalendarApp.getAllOwnedCalendars();
	 * Logger.log(&#39;This user owns %s calendars.&#39;, calendars.length);
	 * </code></pre>
	 * 
	 * @returns all calendars that the user owns
	 */
	function getAllOwnedCalendars(): CalendarApp.Calendar[]
	/**
	 * Gets the calendar with the given ID.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Gets the public calendar &quot;US Holidays&quot; by ID.
	 * var calendar = CalendarApp.getCalendarById(
	 *     &#39;en.usa#holiday@group.v.calendar.google.com&#39;);
	 * Logger.log(&#39;The calendar is named &quot;%s&quot;.&#39;, calendar.getName());
	 * </code></pre>
	 * 
	 * @param id - the calendar ID
	 * 
	 * @returns the calendar with the given ID, or <code>null</code> if the calendar does not exist, if the
	 *     user cannot access it, or if the user is not subscribed to the calendar
	 */
	function getCalendarById(
		id: string
	): CalendarApp.Calendar
	/**
	 * Gets all calendars with a given name that the user owns or is subscribed to. Names are not
	 * case-sensitive.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Gets the public calendar named &quot;US Holidays&quot;.
	 * var calendars = CalendarApp.getCalendarsByName(&#39;US Holidays&#39;);
	 * Logger.log(&#39;Found %s matching calendars.&#39;, calendars.length);
	 * </code></pre>
	 * 
	 * @param name - the calendar name
	 * 
	 * @returns all calendars with this name that the user can access
	 */
	function getCalendarsByName(
		name: string
	): CalendarApp.Calendar[]
	/**
	 * Gets the color of the calendar.
	 * 
	 * @returns a hexadecimal color string ("#rrggbb")
	 */
	function getColor(): string
	/**
	 * Gets the user's default calendar.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Determines the time zone of the user&#39;s default calendar.
	 * var calendar = CalendarApp.getDefaultCalendar();
	 * Logger.log(&#39;My default calendar is set to the time zone &quot;%s&quot;.&#39;,
	 *     calendar.getTimeZone());
	 * </code></pre>
	 * 
	 * @returns the user's default calendar
	 */
	function getDefaultCalendar(): CalendarApp.Calendar
	/**
	 * Gets the description of the calendar.
	 * 
	 * @returns the description of this calendar
	 */
	function getDescription(): string
	/**
	 * Gets the event with the given ID. If the series belongs to a calendar other than the default
	 * calendar, this method must be called from that <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-app.html'>CalendarApp</a></code>. Calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-app.html#getEventById(String)'>getEventById(iCalId)</a></code> only
	 * returns an event in the default calendar.
	 * 
	 * <p>Multiple events may have the same ID if they are part of an event series. In this case this
	 * method returns only the first event from that series.
	 * 
	 * @param iCalId - ID of the event
	 * 
	 * @returns the event with the given ID, or <code>null</code> if the event doesn't exist or the user
	 *     cannot access it.
	 */
	function getEventById(
		iCalId: string
	): CalendarApp.CalendarEvent
	/**
	 * Gets the event series with the given ID. If the ID given is for a single <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code>,
	 * then a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> is returned with a single event in the series. Note that if
	 * the event series belongs to a calendar other than the default calendar, this method must be
	 * called from that <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-app.html'>CalendarApp</a></code>; calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-app.html#getEventSeriesById(String)'>getEventSeriesById(iCalId)</a></code>
	 * directly only returns an event series that exists in the default calendar.
	 * 
	 * @param iCalId - ID of the event series
	 * 
	 * @returns the series with the given ID, or <code>null</code> if the series doesn't exist or the user
	 *     cannot access it
	 */
	function getEventSeriesById(
		iCalId: string
	): CalendarApp.CalendarEventSeries
	/**
	 * Gets all events that occur within a given time range.
	 * 
	 * <p>This method returns events that start during the given time range, end during the time
	 * range, or encompass the time range. If no time zone is specified, the time values are
	 * interpreted in the context of the script's time zone, which may be different from the
	 * calendar's time zone.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Determines how many events are happening in the next two hours.
	 * var now = new Date();
	 * var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
	 * var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow);
	 * Logger.log(&#39;Number of events: &#39; + events.length);
	 * </code></pre>
	 * 
	 * @param startTime - the start of the time range
	 * @param endTime - the end of the time range, non-inclusive
	 * 
	 * @returns the events that occur within the time range
	 */
	function getEvents(
		startTime: Date,
		endTime: Date
	): CalendarApp.CalendarEvent[]
	/**
	 * Gets all events that occur within a given time range and meet the specified criteria.
	 * 
	 * <p>This method returns events that start during the given time range, ends during the time
	 * range, or encompasses the time range. If no time zone is specified, the time values are
	 * interpreted in the context of the script's time zone, which may be different from the
	 * calendar's time zone.
	 * 
	 * <p>Be aware that filtering on <code>author</code>, <code>search</code>, or <code>statusFilters</code> takes
	 * place after applying <code>start</code> and <code>max</code>. This means that the number of events
	 * returned may be less than <code>max</code>, even though additional events meet the criteria.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Determines how many events are happening in the next two hours that contain the term
	 * // &quot;meeting&quot;.
	 * var now = new Date();
	 * var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
	 * var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow,
	 *     {search: &#39;meeting&#39;});
	 * Logger.log(&#39;Number of events: &#39; + events.length);
	 * </code></pre>
	 * 
	 * @param startTime - the start of the time range
	 * @param endTime - the end of the time range, non-inclusive
	 * @param options - a JavaScript object that specifies advanced parameters, as listed below
	 * 
	 * @returns the events that take place within the time range and match the criteria
	 */
	function getEvents(
		startTime: Date,
		endTime: Date,
		options: object
	): CalendarApp.CalendarEvent[]

	/**
	 * Gets all events that occur on a given day.
	 * 
	 * <p>This method returns events if they start during the given day, end during the day, or
	 * encompass the day.
	 * 
	 * <p>Note that only the date portion of the Date object is used, and the time portion is ignored.
	 * The date is interpreted as midnight that day to midnight the next day in the calendar's time
	 * zone.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Determines how many events are happening today.
	 * var today = new Date();
	 * var events = CalendarApp.getDefaultCalendar().getEventsForDay(today);
	 * Logger.log(&#39;Number of events: &#39; + events.length);
	 * </code></pre>
	 * 
	 * @param date - the date to retrieve events for (only the day is used; the time is ignored)
	 * 
	 * @returns the events that occur on the given date
	 */
	function getEventsForDay(
		date: Date
	): CalendarApp.CalendarEvent[]
	/**
	 * Gets all events that occur on a given day and meet specified criteria.
	 * 
	 * <p>This method returns events if they start during the given day, end during the day, or
	 * encompass the day.
	 * 
	 * <p>Note that only the date portion of the Date object is used, and the time portion is ignored.
	 * The date is interpreted as midnight that day to midnight the next day in the calendar's time
	 * zone.
	 * 
	 * <p>Be aware that filtering on <code>author</code>, <code>search</code>, or <code>statusFilters</code> takes
	 * place after applying <code>start</code> and <code>max</code>. This means that the number of events
	 * returned may be less than <code>max</code>, even though additional events meet the criteria.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Determines how many events are happening today and contain the term &quot;meeting&quot;.
	 * var today = new Date();
	 * var events = CalendarApp.getDefaultCalendar().getEventsForDay(today, {search: &#39;meeting&#39;});
	 * Logger.log(&#39;Number of events: &#39; + events.length);
	 * </code></pre>
	 * 
	 * @param date - the date to retrieve events for (only the day is used; the time is ignored)
	 * @param options - advanced filtering options
	 * 
	 * @returns the events that occur on the given date and match the criteria
	 */
	function getEventsForDay(
		date: Date,
		options: object
	): CalendarApp.CalendarEvent[]

	/**
	 * Gets the ID of the calendar. The ID for a user's default calendar is their email address.
	 * 
	 * @returns the ID of the calendar
	 */
	function getId(): string
	/**
	 * Gets the name of the calendar.
	 * 
	 * @returns this calendar's name
	 */
	function getName(): string
	/**
	 * Gets the calendar with the given ID, if the user owns it.
	 * 
	 * <p>To find a calendar ID, click the arrow next to the calendar's name in Google Calendar and
	 * select <strong>Calendar settings</strong>. The ID is shown near the bottom of the settings
	 * page.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Gets a (non-existent) private calendar by ID.
	 * var calendar = CalendarApp.getOwnedCalendarById(
	 *     &#39;123456789@group.calendar.google.com&#39;);
	 * Logger.log(&#39;The calendar is named &quot;%s&quot;.&#39;, calendar.getName());
	 * </code></pre>
	 * 
	 * @param id - the calendar id
	 * 
	 * @returns the calendar with the given ID, or <code>null</code> if the calendar does not exist or the
	 *     user does not own it
	 */
	function getOwnedCalendarById(
		id: string
	): CalendarApp.Calendar
	/**
	 * Gets all calendars with a given name that the user owns. Names are not case-sensitive.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Gets a private calendar named &quot;Travel Plans&quot;.
	 * var calendars = CalendarApp.getOwnedCalendarsByName(&#39;Travel Plans&#39;);
	 * Logger.log(&#39;Found %s matching calendars.&#39;, calendars.length);
	 * </code></pre>
	 * 
	 * @param name - the calendar name
	 * 
	 * @returns all calendars with this name that the user owns
	 */
	function getOwnedCalendarsByName(
		name: string
	): CalendarApp.Calendar[]
	/**
	 * Gets the time zone of the calendar.
	 * 
	 * @returns the time zone, specified in "long" format (e.g., "America/New_York", as listed by <a
	 *     href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
	 */
	function getTimeZone(): string
	/**
	 * Determines whether the calendar is hidden in the user interface.
	 * 
	 * @returns <code>true</code> if the calendar is hidden in the user interface; <code>false</code> if not
	 */
	function isHidden(): Boolean
	/**
	 * Determines whether the calendar is the default calendar for the effective user.
	 * 
	 * @returns <code>true</code> if the calendar is the default calendar for the effective user; <code>false</code> if not
	 */
	function isMyPrimaryCalendar(): Boolean
	/**
	 * Determines whether the calendar is owned by the effective user.
	 * 
	 * @returns <code>true</code> if the calendar is owned by the effective user; <code>false</code> if not
	 */
	function isOwnedByMe(): Boolean
	/**
	 * Determines whether the calendar's events are displayed in the user interface.
	 * 
	 * @returns <code>true</code> if the calendar's events are displayed in the user interface; <code>false</code> if not
	 */
	function isSelected(): Boolean
	/**
	 * Creates a new recurrence object, which can be used to create rules for event recurrence.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
	 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule()
	 *     .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
	 *     .until(new Date(&#39;January 1, 2014&#39;));
	 * var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries(&#39;No Meetings&#39;,
	 *     new Date(&#39;January 2, 2013 03:00:00 PM EST&#39;),
	 *     recurrence);
	 * Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
	 * </code></pre>
	 * 
	 * @returns a new recurrence object with no rules set (behaves as a weekly recurrence)
	 */
	function newRecurrence(): CalendarApp.EventRecurrence
	/**
	 * Sets the color of the calendar.
	 * 
	 * @param color - a hexadecimal color string ("#rrggbb") or a value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/color.html'>CalendarApp.Colors</a></code>
	 * 
	 * @returns this calendar for chaining
	 */
	function setColor(
		color: string
	): CalendarApp.Calendar
	/**
	 * Sets the description of the calendar.
	 * 
	 * @param description - the description of this calendar
	 * 
	 * @returns this calendar for chaining
	 */
	function setDescription(
		description: string
	): CalendarApp.Calendar
	/**
	 * Sets whether the calendar is visible in the user interface.
	 * 
	 * @param hidden - <code>true</code> to hide the calendar in the user interface; <code>false</code> to show it
	 * 
	 * @returns this calendar for chaining
	 */
	function setHidden(
		hidden: Boolean
	): CalendarApp.Calendar
	/**
	 * Sets the name of the calendar.
	 * 
	 * @param name - the new name
	 * 
	 * @returns this calendar for chaining
	 */
	function setName(
		name: string
	): CalendarApp.Calendar
	/**
	 * Sets whether the calendar's events are displayed in the user interface.
	 * 
	 * @param selected - <code>true</code> to show the calendar's events in the user interface; <code>false</code>
	 *     to hide them
	 * 
	 * @returns this calendar for chaining
	 */
	function setSelected(
		selected: Boolean
	): CalendarApp.Calendar
	/**
	 * Sets the time zone of the calendar.
	 * 
	 * @param timeZone - the time zone, specified in "long" format (e.g., "America/New_York", as listed
	 *     by <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
	 * 
	 * @returns this calendar for chaining
	 */
	function setTimeZone(
		timeZone: string
	): CalendarApp.Calendar
	/**
	 * Subscribes the user to the calendar with the given ID, if the user is allowed to subscribe.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Subscribe to the calendar &quot;US Holidays&quot;.
	 * var calendar = CalendarApp.subscribeToCalendar(
	 *     &#39;en.usa#holiday@group.v.calendar.google.com&#39;);
	 * Logger.log(&#39;Subscribed to the calendar &quot;%s&quot;.&#39;, calendar.getName());
	 * </code></pre>
	 * 
	 * @param id - the ID of the calendar to subscribe to
	 * 
	 * @returns the newly subscribed to calendar
	 */
	function subscribeToCalendar(
		id: string
	): CalendarApp.Calendar
	/**
	 * Subscribes the user to the calendar with the given ID, if the user is allowed to subscribe.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Subscribe to the calendar &quot;US Holidays&quot;, and set it to the color blue.
	 * var calendar = CalendarApp.subscribeToCalendar(
	 *     &#39;en.usa#holiday@group.v.calendar.google.com&#39;,
	 *     { color: CalendarApp.Color.BLUE });
	 * Logger.log(&#39;Subscribed to the calendar &quot;%s&quot;.&#39;, calendar.getName());
	 * </code></pre>
	 * 
	 * @param id - the ID of the calendar to subscribe to
	 * @param options - a JavaScript object that specifies advanced parameters, as listed below
	 * 
	 * @returns the newly subscribed calendar
	 */
	function subscribeToCalendar(
		id: string,
		options: object
	): CalendarApp.Calendar


	class Calendar {
		private constructor();

		/**
		 * Creates a new all-day event.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates an all-day event for the moon landing and logs the ID.
		 * var event = CalendarApp.getDefaultCalendar().createAllDayEvent(&#39;Apollo 11 Landing&#39;,
		 *     new Date(&#39;July 20, 1969&#39;));
		 * Logger.log(&#39;Event ID: &#39; + event.getId());
		 * </code></pre>
		 * 
		 * @param title - the title of the event
		 * @param date - the date of the event (only the day is used; the time is ignored)
		 * 
		 * @returns the created event
		 */
		createAllDayEvent(
			title: string,
			date: Date
		): CalendarApp.CalendarEvent
		/**
		 * Creates a new all-day event.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
		 * var event = CalendarApp.getDefaultCalendar().createAllDayEvent(&#39;Woodstock Festival&#39;,
		 *     new Date(&#39;August 15, 1969&#39;),
		 *     new Date(&#39;August 18, 1969&#39;));
		 * Logger.log(&#39;Event ID: &#39; + event.getId());
		 * </code></pre>
		 * 
		 * @param title - the title of the event
		 * @param startDate - the date when the event starts (only the day is used; the time is ignored)
		 * @param endDate - the date when the event ends (only the day is used; the time is ignored)
		 * 
		 * @returns the created event
		 */
		createAllDayEvent(
			title: string,
			startDate: Date,
			endDate: Date
		): CalendarApp.CalendarEvent
		/**
		 * Creates a new all-day event.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
		 * var event = CalendarApp.getDefaultCalendar().createAllDayEvent(&#39;Woodstock Festival&#39;,
		 *     new Date(&#39;August 15, 1969&#39;),
		 *     new Date(&#39;August 18, 1969&#39;),
		 *     {location: &#39;Bethel, White Lake, New York, U.S.&#39;, sendInvites: true});
		 * Logger.log(&#39;Event ID: &#39; + event.getId());
		 * </code></pre>
		 * 
		 * @param title - the title of the event
		 * @param startDate - the date when the event starts (only the day is used; the time is ignored)
		 * @param endDate - the date when the event ends (only the day is used; the time is ignored)
		 * @param options - a JavaScript object that specifies advanced parameters, as listed below
		 * 
		 * @returns the created event
		 */
		createAllDayEvent(
			title: string,
			startDate: Date,
			endDate: Date,
			options: object
		): CalendarApp.CalendarEvent
		/**
		 * Creates a new all-day event.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates an all-day event for the moon landing and logs the ID.
		 * var event = CalendarApp.getDefaultCalendar().createAllDayEvent(&#39;Apollo 11 Landing&#39;,
		 *     new Date(&#39;July 20, 1969&#39;),
		 *     {location: &#39;The Moon&#39;});
		 * Logger.log(&#39;Event ID: &#39; + event.getId());
		 * </code></pre>
		 * 
		 * @param title - the title of the event
		 * @param date - the date of the event (only the day is used; the time is ignored)
		 * @param options - a JavaScript object that specifies advanced parameters, as listed below
		 * 
		 * @returns the created event
		 */
		createAllDayEvent(
			title: string,
			date: Date,
			options: object
		): CalendarApp.CalendarEvent

		/**
		 * Creates a new all-day event series.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
		 * var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries(&#39;No Meetings&#39;,
		 *     new Date(&#39;January 2, 2013 03:00:00 PM EST&#39;),
		 *     CalendarApp.newRecurrence().addWeeklyRule()
		 *         .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
		 *         .until(new Date(&#39;January 1, 2014&#39;)));
		 * Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
		 * </code></pre>
		 * 
		 * @param title - the title of the events in the series
		 * @param startDate - the date of the first event in the series (only the day is used; the time is
		 *     ignored)
		 * @param recurrence - the recurrence settings of the event series
		 * 
		 * @returns the created event series
		 */
		createAllDayEventSeries(
			title: string,
			startDate: Date,
			recurrence: CalendarApp.EventRecurrence
		): CalendarApp.CalendarEventSeries
		/**
		 * Creates a new all-day event series.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
		 * var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries(&#39;No Meetings&#39;,
		 *     new Date(&#39;January 2, 2013 03:00:00 PM EST&#39;),
		 *     CalendarApp.newRecurrence().addWeeklyRule()
		 *         .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
		 *         .until(new Date(&#39;January 1, 2014&#39;)),
		 *     {guests: &#39;everyone@example.com&#39;});
		 * Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
		 * </code></pre>
		 * 
		 * @param title - the title of the events in the series
		 * @param startDate - the date of the first event in the series (only the day is used; the time is
		 *     ignored)
		 * @param recurrence - the recurrence settings of the event series
		 * @param options - a JavaScript object that specifies advanced parameters, as listed below
		 * 
		 * @returns the created event series
		 */
		createAllDayEventSeries(
			title: string,
			startDate: Date,
			recurrence: CalendarApp.EventRecurrence,
			options: object
		): CalendarApp.CalendarEventSeries

		/**
		 * Creates a new event.
		 * 
		 * <p>If no time zone is specified, the time values are interpreted in the context of the script's
		 * time zone, which may be different than the calendar's time zone.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates an event for the moon landing and logs the ID.
		 * var event = CalendarApp.getDefaultCalendar().createEvent(&#39;Apollo 11 Landing&#39;,
		 *     new Date(&#39;July 20, 1969 20:00:00 UTC&#39;),
		 *     new Date(&#39;July 21, 1969 21:00:00 UTC&#39;));
		 * Logger.log(&#39;Event ID: &#39; + event.getId());
		 * </code></pre>
		 * 
		 * @param title - the title of the event
		 * @param startTime - the date and time when the event starts
		 * @param endTime - the date and time when the event ends
		 * 
		 * @returns the created event
		 */
		createEvent(
			title: string,
			startTime: Date,
			endTime: Date
		): CalendarApp.CalendarEvent
		/**
		 * Creates a new event.
		 * 
		 * <p>If no time zone is specified, the time values are interpreted in the context of the script's
		 * time zone, which may be different than the calendar's time zone.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates an event for the moon landing and logs the ID.
		 * var event = CalendarApp.getDefaultCalendar().createEvent(&#39;Apollo 11 Landing&#39;,
		 *     new Date(&#39;July 20, 1969 20:00:00 UTC&#39;),
		 *     new Date(&#39;July 20, 1969 21:00:00 UTC&#39;),
		 *     {location: &#39;The Moon&#39;});
		 * Logger.log(&#39;Event ID: &#39; + event.getId());
		 * </code></pre>
		 * 
		 * @param title - the title of the event
		 * @param startTime - the date and time when the event starts
		 * @param endTime - the date and time when the event ends
		 * @param options - a JavaScript object that specifies advanced parameters, as listed below
		 * 
		 * @returns the created event
		 */
		createEvent(
			title: string,
			startTime: Date,
			endTime: Date,
			options: object
		): CalendarApp.CalendarEvent

		/**
		 * Creates an event from a free-form description.
		 * 
		 * <p>The description should use the same format as the UI's <a
		 * href="http://support.google.com/calendar/answer/36604">"Quick Add"</a> feature.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a new event and logs its ID.
		 * var event = CalendarApp.getDefaultCalendar()
		 *     .createEventFromDescription(&#39;Lunch with Mary, Friday at 1PM&#39;);
		 * Logger.log(&#39;Event ID: &#39; + event.getId());
		 * </code></pre>
		 * 
		 * @param description - a free-form description of the event
		 * 
		 * @returns the created event
		 */
		createEventFromDescription(
			description: string
		): CalendarApp.CalendarEvent
		/**
		 * Creates a new event series.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
		 * var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries(&#39;Team Meeting&#39;,
		 *     new Date(&#39;January 1, 2013 03:00:00 PM EST&#39;),
		 *     new Date(&#39;January 1, 2013 04:00:00 PM EST&#39;),
		 *     CalendarApp.newRecurrence().addWeeklyRule()
		 *         .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
		 *         .until(new Date(&#39;January 1, 2014&#39;)));
		 * Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
		 * </code></pre>
		 * 
		 * @param title - the title of the events in the series
		 * @param startTime - the date and time when the first event in the series starts
		 * @param endTime - the date and time when the first event in the series ends
		 * @param recurrence - the recurrence settings of the event series
		 * 
		 * @returns the created event series
		 */
		createEventSeries(
			title: string,
			startTime: Date,
			endTime: Date,
			recurrence: CalendarApp.EventRecurrence
		): CalendarApp.CalendarEventSeries
		/**
		 * Creates a new event series.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
		 * var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries(&#39;Team Meeting&#39;,
		 *     new Date(&#39;January 1, 2013 03:00:00 PM EST&#39;),
		 *     new Date(&#39;January 1, 2013 04:00:00 PM EST&#39;),
		 *     CalendarApp.newRecurrence().addWeeklyRule()
		 *         .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
		 *         .until(new Date(&#39;January 1, 2014&#39;)),
		 *     {location: &#39;Conference Room&#39;});
		 * Logger.log(&#39;Event Series ID: &#39; + eventSeries.getId());
		 * </code></pre>
		 * 
		 * @param title - the title of the events in the series
		 * @param startTime - the date and time when the first event in the series starts
		 * @param endTime - the date and time when the first event in the series ends
		 * @param recurrence - the recurrence settings of the event series
		 * @param options - a JavaScript object that specifies advanced parameters, as listed below
		 * 
		 * @returns the created event series
		 */
		createEventSeries(
			title: string,
			startTime: Date,
			endTime: Date,
			recurrence: CalendarApp.EventRecurrence,
			options: object
		): CalendarApp.CalendarEventSeries

		/**
		 * Deletes the calendar permanently. A user can only delete a calendar they own.
		 */
		deleteCalendar(): void
		/**
		 * Gets the color of the calendar.
		 * 
		 * @returns a hexadecimal color string ("#rrggbb")
		 */
		getColor(): string
		/**
		 * Gets the description of the calendar.
		 * 
		 * @returns the description of this calendar
		 */
		getDescription(): string
		/**
		 * Gets the event with the given ID. If the series belongs to a calendar other than the default
		 * calendar, this method must be called from that <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar.html'>Calendar</a></code>. Calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-app.html#getEventById(String)'>CalendarApp.getEventById(iCalId)</a></code> only
		 * returns an event in the default calendar.
		 * 
		 * <p>Multiple events may have the same ID if they are part of an event series. In this case this
		 * method returns only the first event from that series.
		 * 
		 * @param iCalId - ID of the event
		 * 
		 * @returns the event with the given ID, or <code>null</code> if the event doesn't exist or the user
		 *     cannot access it.
		 */
		getEventById(
			iCalId: string
		): CalendarApp.CalendarEvent
		/**
		 * Gets the event series with the given ID. If the ID given is for a single <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code>,
		 * then a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> is returned with a single event in the series. Note that if
		 * the event series belongs to a calendar other than the default calendar, this method must be
		 * called from that <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar.html'>Calendar</a></code>; calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-app.html#getEventSeriesById(String)'>CalendarApp.getEventSeriesById(iCalId)</a></code>
		 * directly only returns an event series that exists in the default calendar.
		 * 
		 * @param iCalId - ID of the event series
		 * 
		 * @returns the series with the given ID, or <code>null</code> if the series doesn't exist or the user
		 *     cannot access it
		 */
		getEventSeriesById(
			iCalId: string
		): CalendarApp.CalendarEventSeries
		/**
		 * Gets all events that occur within a given time range.
		 * 
		 * <p>This method returns events that start during the given time range, end during the time
		 * range, or encompass the time range. If no time zone is specified, the time values are
		 * interpreted in the context of the script's time zone, which may be different from the
		 * calendar's time zone.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Determines how many events are happening in the next two hours.
		 * var now = new Date();
		 * var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
		 * var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow);
		 * Logger.log(&#39;Number of events: &#39; + events.length);
		 * </code></pre>
		 * 
		 * @param startTime - the start of the time range
		 * @param endTime - the end of the time range, non-inclusive
		 * 
		 * @returns the events that occur within the time range
		 */
		getEvents(
			startTime: Date,
			endTime: Date
		): CalendarApp.CalendarEvent[]
		/**
		 * Gets all events that occur within a given time range and meet the specified criteria.
		 * 
		 * <p>This method returns events that start during the given time range, ends during the time
		 * range, or encompasses the time range. If no time zone is specified, the time values are
		 * interpreted in the context of the script's time zone, which may be different from the
		 * calendar's time zone.
		 * 
		 * <p>Be aware that filtering on <code>author</code>, <code>search</code>, or <code>statusFilters</code> takes
		 * place after applying <code>start</code> and <code>max</code>. This means that the number of events
		 * returned may be less than <code>max</code>, even though additional events meet the criteria.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Determines how many events are happening in the next two hours that contain the term
		 * // &quot;meeting&quot;.
		 * var now = new Date();
		 * var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
		 * var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow,
		 *     {search: &#39;meeting&#39;});
		 * Logger.log(&#39;Number of events: &#39; + events.length);
		 * </code></pre>
		 * 
		 * @param startTime - the start of the time range
		 * @param endTime - the end of the time range, non-inclusive
		 * @param options - a JavaScript object that specifies advanced parameters, as listed below
		 * 
		 * @returns the events that take place within the time range and match the criteria
		 */
		getEvents(
			startTime: Date,
			endTime: Date,
			options: object
		): CalendarApp.CalendarEvent[]

		/**
		 * Gets all events that occur on a given day.
		 * 
		 * <p>This method returns events if they start during the given day, end during the day, or
		 * encompass the day.
		 * 
		 * <p>Note that only the date portion of the Date object is used, and the time portion is ignored.
		 * The date is interpreted as midnight that day to midnight the next day in the calendar's time
		 * zone.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Determines how many events are happening today.
		 * var today = new Date();
		 * var events = CalendarApp.getDefaultCalendar().getEventsForDay(today);
		 * Logger.log(&#39;Number of events: &#39; + events.length);
		 * </code></pre>
		 * 
		 * @param date - the date to retrieve events for (only the day is used; the time is ignored)
		 * 
		 * @returns the events that occur on the given date
		 */
		getEventsForDay(
			date: Date
		): CalendarApp.CalendarEvent[]
		/**
		 * Gets all events that occur on a given day and meet specified criteria.
		 * 
		 * <p>This method returns events if they start during the given day, end during the day, or
		 * encompass the day.
		 * 
		 * <p>Note that only the date portion of the Date object is used, and the time portion is ignored.
		 * The date is interpreted as midnight that day to midnight the next day in the calendar's time
		 * zone.
		 * 
		 * <p>Be aware that filtering on <code>author</code>, <code>search</code>, or <code>statusFilters</code> takes
		 * place after applying <code>start</code> and <code>max</code>. This means that the number of events
		 * returned may be less than <code>max</code>, even though additional events meet the criteria.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Determines how many events are happening today and contain the term &quot;meeting&quot;.
		 * var today = new Date();
		 * var events = CalendarApp.getDefaultCalendar().getEventsForDay(today, {search: &#39;meeting&#39;});
		 * Logger.log(&#39;Number of events: &#39; + events.length);
		 * </code></pre>
		 * 
		 * @param date - the date to retrieve events for (only the day is used; the time is ignored)
		 * @param options - advanced filtering options
		 * 
		 * @returns the events that occur on the given date and match the criteria
		 */
		getEventsForDay(
			date: Date,
			options: object
		): CalendarApp.CalendarEvent[]

		/**
		 * Gets the ID of the calendar. The ID for a user's default calendar is their email address.
		 * 
		 * @returns the ID of the calendar
		 */
		getId(): string
		/**
		 * Gets the name of the calendar.
		 * 
		 * @returns this calendar's name
		 */
		getName(): string
		/**
		 * Gets the time zone of the calendar.
		 * 
		 * @returns the time zone, specified in "long" format (e.g., "America/New_York", as listed by <a
		 *     href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
		 */
		getTimeZone(): string
		/**
		 * Determines whether the calendar is hidden in the user interface.
		 * 
		 * @returns <code>true</code> if the calendar is hidden in the user interface; <code>false</code> if not
		 */
		isHidden(): Boolean
		/**
		 * Determines whether the calendar is the default calendar for the effective user.
		 * 
		 * @returns <code>true</code> if the calendar is the default calendar for the effective user; <code>false</code> if not
		 */
		isMyPrimaryCalendar(): Boolean
		/**
		 * Determines whether the calendar is owned by the effective user.
		 * 
		 * @returns <code>true</code> if the calendar is owned by the effective user; <code>false</code> if not
		 */
		isOwnedByMe(): Boolean
		/**
		 * Determines whether the calendar's events are displayed in the user interface.
		 * 
		 * @returns <code>true</code> if the calendar's events are displayed in the user interface; <code>false</code> if not
		 */
		isSelected(): Boolean
		/**
		 * Sets the color of the calendar.
		 * 
		 * @param color - a hexadecimal color string ("#rrggbb") or a value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/color.html'>CalendarApp.Colors</a></code>
		 * 
		 * @returns this calendar for chaining
		 */
		setColor(
			color: string
		): CalendarApp.Calendar
		/**
		 * Sets the description of the calendar.
		 * 
		 * @param description - the description of this calendar
		 * 
		 * @returns this calendar for chaining
		 */
		setDescription(
			description: string
		): CalendarApp.Calendar
		/**
		 * Sets whether the calendar is visible in the user interface.
		 * 
		 * @param hidden - <code>true</code> to hide the calendar in the user interface; <code>false</code> to show it
		 * 
		 * @returns this calendar for chaining
		 */
		setHidden(
			hidden: Boolean
		): CalendarApp.Calendar
		/**
		 * Sets the name of the calendar.
		 * 
		 * @param name - the new name
		 * 
		 * @returns this calendar for chaining
		 */
		setName(
			name: string
		): CalendarApp.Calendar
		/**
		 * Sets whether the calendar's events are displayed in the user interface.
		 * 
		 * @param selected - <code>true</code> to show the calendar's events in the user interface; <code>false</code>
		 *     to hide them
		 * 
		 * @returns this calendar for chaining
		 */
		setSelected(
			selected: Boolean
		): CalendarApp.Calendar
		/**
		 * Sets the time zone of the calendar.
		 * 
		 * @param timeZone - the time zone, specified in "long" format (e.g., "America/New_York", as listed
		 *     by <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
		 * 
		 * @returns this calendar for chaining
		 */
		setTimeZone(
			timeZone: string
		): CalendarApp.Calendar
		/**
		 * Unsubscribes the user from the calendar. A user cannot unsubscribe from a calendar they own.
		 */
		unsubscribeFromCalendar(): void

	}

	class CalendarEvent {
		private constructor();

		/**
		 * Adds a new email reminder to the event. The reminder must be at least 5 minutes, and at most 4
		 * weeks (40320 minutes), before the event.
		 * 
		 * @param minutesBefore - the number of minutes before the event
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
		 */
		addEmailReminder(
			minutesBefore: number
		): CalendarApp.CalendarEvent
		/**
		 * Adds a guest to the event.
		 * 
		 * @param email - the email address of the guest
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
		 */
		addGuest(
			email: string
		): CalendarApp.CalendarEvent
		/**
		 * Adds a new popup reminder to the event. The reminder must be at least 5 minutes, and at most 4
		 * weeks (40320 minutes), before the event.
		 * 
		 * @param minutesBefore - the number of minutes before the event
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
		 */
		addPopupReminder(
			minutesBefore: number
		): CalendarApp.CalendarEvent
		/**
		 * Adds a new SMS reminder to the event. The reminder must be at least 5 minutes, and at most 4
		 * weeks (40320 minutes), before the event.
		 * 
		 * @param minutesBefore - the number of minutes before the event
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
		 */
		addSmsReminder(
			minutesBefore: number
		): CalendarApp.CalendarEvent
		/**
		 * Determines whether anyone can invite themselves.
		 * 
		 * @returns <code>true</code> if non-guests can add themselves to the event; <code>false</code> if not
		 */
		anyoneCanAddSelf(): Boolean
		/**
		 * Deletes the event.
		 */
		deleteEvent(): void
		/**
		 * Deletes a key/value tag from the event.
		 * 
		 * @param key - the tag key
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
		 */
		deleteTag(
			key: string
		): CalendarApp.CalendarEvent
		/**
		 * Gets the date on which this all-day calendar event ends. (If this is not an all-day event, then
		 * this method throws an exception.) The returned <code>Date</code> represents midnight at the
		 * beginning of the day after the event ends <em>in the script's time zone</em>. To use the
		 * calendar's time zone instead, call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html#getEndTime()'>getEndTime()</a></code>.
		 * 
		 * @returns this all-day calendar event's end date
		 */
		getAllDayEndDate(): Date
		/**
		 * Gets the date on which this all-day calendar event begins. (If this is not an all-day event,
		 * then this method throws an exception.) The returned <code>Date</code> represents midnight at the
		 * beginning of the day on which the event starts <em>in the script's time zone</em>. To use the
		 * calendar's time zone instead, call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html#getStartTime()'>getStartTime()</a></code>.
		 * 
		 * @returns this all-day calendar event's start date
		 */
		getAllDayStartDate(): Date
		/**
		 * Gets all keys for tags that have been set on the event.
		 * 
		 * @returns an array of string keys
		 */
		getAllTagKeys(): string[]
		/**
		 * Returns the color of the calendar event.
		 * 
		 * @returns the string representation of the event color, as an index (1-11) of values from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/event-color.html'>CalendarApp.EventColors</a></code>
		 */
		getColor(): string
		/**
		 * Gets the creators of the event.
		 * 
		 * @returns the email addresses of the event's creators
		 */
		getCreators(): string[]
		/**
		 * Gets the date the event was created.
		 * 
		 * @returns the date of creation
		 */
		getDateCreated(): Date
		/**
		 * Gets the description of the event.
		 * 
		 * @returns the description
		 */
		getDescription(): string
		/**
		 * Gets the minute values for all email reminders for the event.
		 * 
		 * @returns an array in which each value corresponds to the number of minutes before the event that
		 *     a reminder triggers
		 */
		getEmailReminders(): number[]
		/**
		 * Gets the date and time at which this calendar event ends. For non&ndash;all-day events, this is
		 * the instant in time at which the event was defined to end. For all-day events, which only store
		 * an end date (not a date and time), this is midnight at the beginning of the day after the event
		 * ends <em>in the calendar's time zone</em>. This allows meaningful comparison of end times for
		 * all types of events; however, it does not necessarily preserve the original day-of-year
		 * unmodified.
		 * 
		 * <p>For <a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html#isAllDayEvent()'>all-day events</a>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html#getAllDayEndDate()'>getAllDayEndDate()</a></code> should almost
		 * always be called in preference to this method.
		 * 
		 * @returns this calendar event's end time
		 */
		getEndTime(): Date
		/**
		 * Gets the series of recurring events that this event belongs to. A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code>
		 * object is returned even if this event doesn't belong to a series, so that you can add new
		 * recurrence settings.
		 * 
		 * @returns the event series this event belongs to, or a new event series if it does not yet belong
		 *     to a series
		 */
		getEventSeries(): CalendarApp.CalendarEventSeries
		/**
		 * Gets a guest by email address.
		 * 
		 * @param email - the address of the guest
		 * 
		 * @returns the guest, or null if the email address does not correspond to a guest
		 */
		getGuestByEmail(
			email: string
		): CalendarApp.EventGuest
		/**
		 * Gets the guests for the event, not including the event owner.
		 * 
		 * @returns an array of the guests
		 */
		getGuestList(): CalendarApp.EventGuest[]
		/**
		 * Gets the guests for the event, potentially including the event owners.
		 * 
		 * @param includeOwner - whether to include the owners as a guest
		 * 
		 * @returns an array of the guests
		 */
		getGuestList(
			includeOwner: Boolean
		): CalendarApp.EventGuest[]

		/**
		 * Gets the unique iCalUID of the event. Note that the iCalUID and the event <a
		 * href="calendar/v3/reference/events#resource-representations"><code>id</code></a> used by the <a
		 * href="calendar/v3/reference/">Calendar v3 API</a> and <a
		 * href="/apps-script/advanced/calendar">Calendar advanced service</a> are not identical and
		 * cannot be used interchangebly. One difference in their semantics is that in recurring events
		 * all occurrences of one event have different <code>ids</code> while they all share the same iCalUIDs.
		 * 
		 * @returns the iCalUID of the event
		 */
		getId(): string
		/**
		 * Gets the date the event was last updated.
		 * 
		 * @returns the last updated date
		 */
		getLastUpdated(): Date
		/**
		 * Gets the location of the event.
		 * 
		 * @returns the event location
		 */
		getLocation(): string
		/**
		 * Gets the event status (attending, etc.) of the effective user. Always returns <code>GuestStatus.OWNER</code> if the effective user is the owner of the event.
		 * 
		 * @returns the status
		 */
		getMyStatus(): CalendarApp.GuestStatus
		/**
		 * Get the ID of the calendar where this event was originally created.
		 * 
		 * @returns the ID of the original calendar
		 */
		getOriginalCalendarId(): string
		/**
		 * Gets the minute values for all popup reminders for the event.
		 * 
		 * @returns an array in which each value corresponds to the number of minutes before the event that
		 *     a reminder triggers
		 */
		getPopupReminders(): number[]
		/**
		 * Gets the minute values for all SMS reminders for the event.
		 * 
		 * @returns an array in which each value corresponds to the number of minutes before the event that
		 *     a reminder triggers
		 */
		getSmsReminders(): number[]
		/**
		 * Gets the date and time at which this calendar event begins. For non&ndash;all-day events, this
		 * is the instant in time at which the event was defined to start. For all-day events, which only
		 * store a start date (not a date and time), this is midnight at the beginning of the day on which
		 * the event starts <em>in the calendar's time zone</em>. This allows meaningful comparison of
		 * start times for all types of events; however, it is not necessarily preserve the original
		 * day-of-year unmodified.
		 * 
		 * <p>For <a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html#isAllDayEvent()'>all-day events</a>, <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html#getAllDayStartDate()'>getAllDayStartDate()</a></code> should
		 * almost always be called in preference to this method.
		 * 
		 * @returns this calendar event's start time
		 */
		getStartTime(): Date
		/**
		 * Gets a tag value of the event.
		 * 
		 * @param key - the key
		 * 
		 * @returns the tag value
		 */
		getTag(
			key: string
		): string
		/**
		 * Gets the title of the event.
		 * 
		 * @returns the title
		 */
		getTitle(): string
		/**
		 * Gets the visibility of the event.
		 * 
		 * @returns the visibility value
		 */
		getVisibility(): CalendarApp.Visibility
		/**
		 * Determines whether guests can invite other guests.
		 * 
		 * @returns <code>true</code> if guests can invite others; <code>false</code> if not
		 */
		guestsCanInviteOthers(): Boolean
		/**
		 * Determines whether guests can modify the event.
		 * 
		 * @returns <code>true</code> if guests can modify the event; <code>false</code> if not
		 */
		guestsCanModify(): Boolean
		/**
		 * Determines whether guests can see other guests.
		 * 
		 * @returns <code>true</code> if guests can see other guests; <code>false</code> if not
		 */
		guestsCanSeeGuests(): Boolean
		/**
		 * Determines whether this is an all-day event.
		 * 
		 * @returns <code>true</code> if the event is all-day; <code>false</code> if not
		 */
		isAllDayEvent(): Boolean
		/**
		 * Determines whether the event is owned by the effective user.
		 * 
		 * @returns <code>true</code> if the event is owned by the effective user; <code>false</code> if not
		 */
		isOwnedByMe(): Boolean
		/**
		 * Determines whether the event is part of an event series.
		 * 
		 * @returns <code>true</code> if the event is part of an event series; <code>false</code> if not
		 */
		isRecurringEvent(): Boolean
		/**
		 * Removes all reminders from the event.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
		 */
		removeAllReminders(): CalendarApp.CalendarEvent
		/**
		 * Removes a guest from the event.
		 * 
		 * @param email - the email address of the guest
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
		 */
		removeGuest(
			email: string
		): CalendarApp.CalendarEvent
		/**
		 * Resets the reminders using the calendar's default settings.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
		 */
		resetRemindersToDefault(): CalendarApp.CalendarEvent
		/**
		 * Sets the date of the event. Applying this method changes a regular event into an all-day event.
		 * 
		 * @param date - the date for the event (the time is ignored)
		 * 
		 * @returns this CalendarEvent for chaining
		 */
		setAllDayDate(
			date: Date
		): CalendarApp.CalendarEvent
		/**
		 * Sets the dates of the event. Applying this method changes a regular event into an all-day
		 * event.
		 * 
		 * @param startDate - the date when the event starts (the time is ignored)
		 * @param endDate - the date when the event ends (the time is ignored)
		 * 
		 * @returns this CalendarEvent for chaining
		 */
		setAllDayDates(
			startDate: Date,
			endDate: Date
		): CalendarApp.CalendarEvent
		/**
		 * Sets whether non-guests can add themselves to the event.
		 * 
		 * @param anyoneCanAddSelf - whether anyone can invite themselves
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
		 */
		setAnyoneCanAddSelf(
			anyoneCanAddSelf: Boolean
		): CalendarApp.CalendarEvent
		/**
		 * Sets the color of the calendar event.
		 * 
		 * @param color - an integer color index as a string, or a value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/event-color.html'>CalendarApp.EventColors</a></code>
		 * 
		 * @returns this calendar event, for chaining
		 */
		setColor(
			color: string
		): CalendarApp.CalendarEvent
		/**
		 * Sets the description of the event.
		 * 
		 * @param description - the new description
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
		 */
		setDescription(
			description: string
		): CalendarApp.CalendarEvent
		/**
		 * Sets whether guests can invite other guests.
		 * 
		 * @param guestsCanInviteOthers - whether guests can invite others
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
		 */
		setGuestsCanInviteOthers(
			guestsCanInviteOthers: Boolean
		): CalendarApp.CalendarEvent
		/**
		 * Sets whether guests can modify the event.
		 * 
		 * @param guestsCanModify - whether guests can modify the event
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
		 */
		setGuestsCanModify(
			guestsCanModify: Boolean
		): CalendarApp.CalendarEvent
		/**
		 * Sets whether guests can see other guests.
		 * 
		 * @param guestsCanSeeGuests - whether guests can see others
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
		 */
		setGuestsCanSeeGuests(
			guestsCanSeeGuests: Boolean
		): CalendarApp.CalendarEvent
		/**
		 * Sets the location of the event.
		 * 
		 * @param location - the new location
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
		 */
		setLocation(
			location: string
		): CalendarApp.CalendarEvent
		/**
		 * Sets the event status (attending, etc.) of the effective user.
		 * 
		 * @param status - the new status
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
		 */
		setMyStatus(
			status: CalendarApp.GuestStatus
		): CalendarApp.CalendarEvent
		/**
		 * Sets a key/value tag on the event, for storing custom metadata.
		 * 
		 * @param key - the tag key
		 * @param value - the tag value
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
		 */
		setTag(
			key: string,
			value: string
		): CalendarApp.CalendarEvent
		/**
		 * Sets the dates and times for the start and end of the event. Applying this method changes an
		 * all-day event into a regular event.
		 * 
		 * @param startTime - the new start of the event
		 * @param endTime - the new end of the event
		 * 
		 * @returns this CalendarEvent for chaining
		 */
		setTime(
			startTime: Date,
			endTime: Date
		): CalendarApp.CalendarEvent
		/**
		 * Sets the title of the event.
		 * 
		 * @param title - the new title
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
		 */
		setTitle(
			title: string
		): CalendarApp.CalendarEvent
		/**
		 * Sets the visibility of the event.
		 * 
		 * @param visibility
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event.html'>CalendarEvent</a></code> for chaining
		 */
		setVisibility(
			visibility: CalendarApp.Visibility
		): CalendarApp.CalendarEvent

	}

	class CalendarEventSeries {
		private constructor();

		/**
		 * Adds a new email reminder to the event. The reminder must be at least 5 minutes, and at most 4
		 * weeks (40320 minutes), before the event.
		 * 
		 * @param minutesBefore - the number of minutes before the event
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
		 */
		addEmailReminder(
			minutesBefore: number
		): CalendarApp.CalendarEventSeries
		/**
		 * Adds a guest to the event.
		 * 
		 * @param email - the email address of the guest
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
		 */
		addGuest(
			email: string
		): CalendarApp.CalendarEventSeries
		/**
		 * Adds a new popup reminder to the event. The reminder must be at least 5 minutes, and at most 4
		 * weeks (40320 minutes), before the event.
		 * 
		 * @param minutesBefore - the number of minutes before the event
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
		 */
		addPopupReminder(
			minutesBefore: number
		): CalendarApp.CalendarEventSeries
		/**
		 * Adds a new SMS reminder to the event. The reminder must be at least 5 minutes, and at most 4
		 * weeks (40320 minutes), before the event.
		 * 
		 * @param minutesBefore - the number of minutes before the event
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
		 */
		addSmsReminder(
			minutesBefore: number
		): CalendarApp.CalendarEventSeries
		/**
		 * Determines whether anyone can invite themselves.
		 * 
		 * @returns <code>true</code> if non-guests can add themselves to the event; <code>false</code> if not
		 */
		anyoneCanAddSelf(): Boolean
		/**
		 * Deletes the event series.
		 */
		deleteEventSeries(): void
		/**
		 * Deletes a key/value tag from the event.
		 * 
		 * @param key - the tag key
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
		 */
		deleteTag(
			key: string
		): CalendarApp.CalendarEventSeries
		/**
		 * Gets all keys for tags that have been set on the event.
		 * 
		 * @returns an array of string keys
		 */
		getAllTagKeys(): string[]
		/**
		 * Returns the color of the calendar event.
		 * 
		 * @returns the string representation of the event color, as an index (1-11) of values from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/event-color.html'>CalendarApp.EventColors</a></code>
		 */
		getColor(): string
		/**
		 * Gets the creators of the event.
		 * 
		 * @returns the email addresses of the event's creators
		 */
		getCreators(): string[]
		/**
		 * Gets the date the event was created.
		 * 
		 * @returns the date of creation
		 */
		getDateCreated(): Date
		/**
		 * Gets the description of the event.
		 * 
		 * @returns the description
		 */
		getDescription(): string
		/**
		 * Gets the minute values for all email reminders for the event.
		 * 
		 * @returns an array in which each value corresponds to the number of minutes before the event that
		 *     a reminder triggers
		 */
		getEmailReminders(): number[]
		/**
		 * Gets a guest by email address.
		 * 
		 * @param email - the address of the guest
		 * 
		 * @returns the guest, or null if the email address does not correspond to a guest
		 */
		getGuestByEmail(
			email: string
		): CalendarApp.EventGuest
		/**
		 * Gets the guests for the event, not including the event owner.
		 * 
		 * @returns an array of the guests
		 */
		getGuestList(): CalendarApp.EventGuest[]
		/**
		 * Gets the guests for the event, potentially including the event owners.
		 * 
		 * @param includeOwner - whether to include the owners as a guest
		 * 
		 * @returns an array of the guests
		 */
		getGuestList(
			includeOwner: Boolean
		): CalendarApp.EventGuest[]

		/**
		 * Gets the unique iCalUID of the event. Note that the iCalUID and the event <a
		 * href="calendar/v3/reference/events#resource-representations"><code>id</code></a> used by the <a
		 * href="calendar/v3/reference/">Calendar v3 API</a> and <a
		 * href="/apps-script/advanced/calendar">Calendar advanced service</a> are not identical and
		 * cannot be used interchangebly. One difference in their semantics is that in recurring events
		 * all occurrences of one event have different <code>ids</code> while they all share the same iCalUIDs.
		 * 
		 * @returns the iCalUID of the event
		 */
		getId(): string
		/**
		 * Gets the date the event was last updated.
		 * 
		 * @returns the last updated date
		 */
		getLastUpdated(): Date
		/**
		 * Gets the location of the event.
		 * 
		 * @returns the event location
		 */
		getLocation(): string
		/**
		 * Gets the event status (attending, etc.) of the effective user. Always returns <code>GuestStatus.OWNER</code> if the effective user is the owner of the event.
		 * 
		 * @returns the status
		 */
		getMyStatus(): CalendarApp.GuestStatus
		/**
		 * Get the ID of the calendar where this event was originally created.
		 * 
		 * @returns the ID of the original calendar
		 */
		getOriginalCalendarId(): string
		/**
		 * Gets the minute values for all popup reminders for the event.
		 * 
		 * @returns an array in which each value corresponds to the number of minutes before the event that
		 *     a reminder triggers
		 */
		getPopupReminders(): number[]
		/**
		 * Gets the minute values for all SMS reminders for the event.
		 * 
		 * @returns an array in which each value corresponds to the number of minutes before the event that
		 *     a reminder triggers
		 */
		getSmsReminders(): number[]
		/**
		 * Gets a tag value of the event.
		 * 
		 * @param key - the key
		 * 
		 * @returns the tag value
		 */
		getTag(
			key: string
		): string
		/**
		 * Gets the title of the event.
		 * 
		 * @returns the title
		 */
		getTitle(): string
		/**
		 * Gets the visibility of the event.
		 * 
		 * @returns the visibility value
		 */
		getVisibility(): CalendarApp.Visibility
		/**
		 * Determines whether guests can invite other guests.
		 * 
		 * @returns <code>true</code> if guests can invite others; <code>false</code> if not
		 */
		guestsCanInviteOthers(): Boolean
		/**
		 * Determines whether guests can modify the event.
		 * 
		 * @returns <code>true</code> if guests can modify the event; <code>false</code> if not
		 */
		guestsCanModify(): Boolean
		/**
		 * Determines whether guests can see other guests.
		 * 
		 * @returns <code>true</code> if guests can see other guests; <code>false</code> if not
		 */
		guestsCanSeeGuests(): Boolean
		/**
		 * Determines whether the event is owned by the effective user.
		 * 
		 * @returns <code>true</code> if the event is owned by the effective user; <code>false</code> if not
		 */
		isOwnedByMe(): Boolean
		/**
		 * Removes all reminders from the event.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
		 */
		removeAllReminders(): CalendarApp.CalendarEventSeries
		/**
		 * Removes a guest from the event.
		 * 
		 * @param email - the email address of the guest
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
		 */
		removeGuest(
			email: string
		): CalendarApp.CalendarEventSeries
		/**
		 * Resets the reminders using the calendar's default settings.
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
		 */
		resetRemindersToDefault(): CalendarApp.CalendarEventSeries
		/**
		 * Sets whether non-guests can add themselves to the event.
		 * 
		 * @param anyoneCanAddSelf - whether anyone can invite themselves
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
		 */
		setAnyoneCanAddSelf(
			anyoneCanAddSelf: Boolean
		): CalendarApp.CalendarEventSeries
		/**
		 * Sets the color of the calendar event.
		 * 
		 * @param color - an integer color index as a string, or a value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/event-color.html'>CalendarApp.EventColors</a></code>
		 * 
		 * @returns this calendar event, for chaining
		 */
		setColor(
			color: string
		): CalendarApp.CalendarEventSeries
		/**
		 * Sets the description of the event.
		 * 
		 * @param description - the new description
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
		 */
		setDescription(
			description: string
		): CalendarApp.CalendarEventSeries
		/**
		 * Sets whether guests can invite other guests.
		 * 
		 * @param guestsCanInviteOthers - whether guests can invite others
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
		 */
		setGuestsCanInviteOthers(
			guestsCanInviteOthers: Boolean
		): CalendarApp.CalendarEventSeries
		/**
		 * Sets whether guests can modify the event.
		 * 
		 * @param guestsCanModify - whether guests can modify the event
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
		 */
		setGuestsCanModify(
			guestsCanModify: Boolean
		): CalendarApp.CalendarEventSeries
		/**
		 * Sets whether guests can see other guests.
		 * 
		 * @param guestsCanSeeGuests - whether guests can see others
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
		 */
		setGuestsCanSeeGuests(
			guestsCanSeeGuests: Boolean
		): CalendarApp.CalendarEventSeries
		/**
		 * Sets the location of the event.
		 * 
		 * @param location - the new location
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
		 */
		setLocation(
			location: string
		): CalendarApp.CalendarEventSeries
		/**
		 * Sets the event status (attending, etc.) of the effective user.
		 * 
		 * @param status - the new status
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
		 */
		setMyStatus(
			status: CalendarApp.GuestStatus
		): CalendarApp.CalendarEventSeries
		/**
		 * Sets the recurrence rules for an all-day event series. Applying this method changes a regular
		 * event series into an all-day event series.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the events in a series to take place every Wednesday in 2013.
		 * var eventSeries = CalendarApp.getDefaultCalendar().getEventSeriesById(&#39;123456789@google.com&#39;);
		 * var startDate = new Date(&#39;January 2, 2013 03:00:00 PM EST&#39;);
		 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule()
		 *     .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
		 *     .until(new Date(&#39;January 1, 2014&#39;));
		 * eventSeries.setRecurrence(recurrence, startDate);
		 * </code></pre>
		 * 
		 * @param recurrence - the recurrence rules to use
		 * @param startDate - the date of the first event in the series (only the day is used; the time is
		 *     ignored)
		 * 
		 * @returns this CalendarEventSeries for chaining
		 */
		setRecurrence(
			recurrence: CalendarApp.EventRecurrence,
			startDate: Date
		): CalendarApp.CalendarEventSeries
		/**
		 * Sets the recurrence rules for this event series. Applying this method changes an all-day event
		 * series into a regular event series.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the events in a series to take place from 3pm to 4pm every Tuesday and Thursday in
		 * // 2013.
		 * var eventSeries = CalendarApp.getDefaultCalendar().getEventSeriesById(&#39;123456789@google.com&#39;);
		 * var startTime = new Date(&#39;January 1, 2013 03:00:00 PM EST&#39;);
		 * var endTime = new Date(&#39;January 1, 2013 04:00:00 PM EST&#39;);
		 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule()
		 *      .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
		 *      .until(new Date(&#39;January 1, 2014&#39;));
		 * eventSeries.setRecurrence(recurrence, startTime, endTime);
		 * </code></pre>
		 * 
		 * @param recurrence - the recurrence rules to use
		 * @param startTime - the date and time when the first event in the series starts
		 * @param endTime - the date and time when the first event in the series ends
		 * 
		 * @returns this CalendarEventSeries for chaining
		 */
		setRecurrence(
			recurrence: CalendarApp.EventRecurrence,
			startTime: Date,
			endTime: Date
		): CalendarApp.CalendarEventSeries

		/**
		 * Sets a key/value tag on the event, for storing custom metadata.
		 * 
		 * @param key - the tag key
		 * @param value - the tag value
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
		 */
		setTag(
			key: string,
			value: string
		): CalendarApp.CalendarEventSeries
		/**
		 * Sets the title of the event.
		 * 
		 * @param title - the new title
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
		 */
		setTitle(
			title: string
		): CalendarApp.CalendarEventSeries
		/**
		 * Sets the visibility of the event.
		 * 
		 * @param visibility
		 * 
		 * @returns this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html'>CalendarEventSeries</a></code> for chaining
		 */
		setVisibility(
			visibility: CalendarApp.Visibility
		): CalendarApp.CalendarEventSeries

	}

	enum Color {
		/**
		 * <div style="background-color: #2952A3; display: inline-block; height: 10px; width: 10px;">
		 * </div> Blue (<code>#2952A3</code>).
		 */
		BLUE = "BLUE",
		/**
		 * <div style="background-color: #8D6F47; display: inline-block; height: 10px; width: 10px;">
		 * </div> Brown (<code>#8D6F47</code>).
		 */
		BROWN = "BROWN",
		/**
		 * <div style="background-color: #4E5D6C; display: inline-block; height: 10px; width: 10px;">
		 * </div> Charcoal (<code>#4E5D6C</code>).
		 */
		CHARCOAL = "CHARCOAL",
		/**
		 * <div style="background-color: #865A5A; display: inline-block; height: 10px; width: 10px;">
		 * </div> Chestnut (<code>#865A5A</code>).
		 */
		CHESTNUT = "CHESTNUT",
		/**
		 * <div style="background-color: #5A6986; display: inline-block; height: 10px; width: 10px;">
		 * </div> Gray (<code>#5A6986</code>).
		 */
		GRAY = "GRAY",
		/**
		 * <div style="background-color: #0D7813; display: inline-block; height: 10px; width: 10px;">
		 * </div> Green (<code>#0D7813</code>).
		 */
		GREEN = "GREEN",
		/**
		 * <div style="background-color: #5229A3; display: inline-block; height: 10px; width: 10px;">
		 * </div> Indigo (<code>#5229A3</code>).
		 */
		INDIGO = "INDIGO",
		/**
		 * <div style="background-color: #528800; display: inline-block; height: 10px; width: 10px;">
		 * </div> Lime (<code>#528800</code>).
		 */
		LIME = "LIME",
		/**
		 * <div style="background-color: #88880E; display: inline-block; height: 10px; width: 10px;">
		 * </div> Mustard (<code>#88880E</code>).
		 */
		MUSTARD = "MUSTARD",
		/**
		 * <div style="background-color: #6E6E41; display: inline-block; height: 10px; width: 10px;">
		 * </div> Olive (<code>#6E6E41</code>).
		 */
		OLIVE = "OLIVE",
		/**
		 * <div style="background-color: #BE6D00; display: inline-block; height: 10px; width: 10px;">
		 * </div> Orange (<code>#BE6D00</code>).
		 */
		ORANGE = "ORANGE",
		/**
		 * <div style="background-color: #B1365F; display: inline-block; height: 10px; width: 10px;">
		 * </div> Pink (<code>#B1365F</code>).
		 */
		PINK = "PINK",
		/**
		 * <div style="background-color: #705770; display: inline-block; height: 10px; width: 10px;">
		 * </div> Plum (<code>#705770</code>).
		 */
		PLUM = "PLUM",
		/**
		 * <div style="background-color: #7A367A; display: inline-block; height: 10px; width: 10px;">
		 * </div> Purple (<code>#7A367A</code>).
		 */
		PURPLE = "PURPLE",
		/**
		 * <div style="background-color: #A32929; display: inline-block; height: 10px; width: 10px;">
		 * </div> Red (<code>#A32929</code>).
		 */
		RED = "RED",
		/**
		 * <div style="background-color: #B1440E; display: inline-block; height: 10px; width: 10px;">
		 * </div> Red-Orange (<code>#B1440E</code>).
		 */
		RED_ORANGE = "RED_ORANGE",
		/**
		 * <div style="background-color: #29527A; display: inline-block; height: 10px; width: 10px;">
		 * </div> Sea Blue (<code>#29527A</code>).
		 */
		SEA_BLUE = "SEA_BLUE",
		/**
		 * <div style="background-color: #4A716C; display: inline-block; height: 10px; width: 10px;">
		 * </div> Slate (<code>#4A716C</code>).
		 */
		SLATE = "SLATE",
		/**
		 * <div style="background-color: #28754E; display: inline-block; height: 10px; width: 10px;">
		 * </div> Teal (<code>#28754E</code>).
		 */
		TEAL = "TEAL",
		/**
		 * <div style="background-color: #1B887A; display: inline-block; height: 10px; width: 10px;">
		 * </div> Turquoise (<code>#1B887A</code>).
		 */
		TURQOISE = "TURQOISE",
		/**
		 * <div style="background-color: #AB8B00; display: inline-block; height: 10px; width: 10px;">
		 * </div> Yellow (<code>#AB8B00</code>).
		 */
		YELLOW = "YELLOW",
	}

	enum EventColor {
		/**
		 * <div style="background-color: #5484ED; display: inline-block; height: 10px; width: 10px;">
		 * </div> Blue (<code>&quot;9&quot;</code>).
		 */
		BLUE = "BLUE",
		/**
		 * <div style="background-color: #46D6DB; display: inline-block; height: 10px; width: 10px;">
		 * </div> Cyan (<code>&quot;7&quot;</code>).
		 */
		CYAN = "CYAN",
		/**
		 * <div style="background-color: #E1E1E1; display: inline-block; height: 10px; width: 10px;">
		 * </div> Gray (<code>&quot;8&quot;</code>).
		 */
		GRAY = "GRAY",
		/**
		 * <div style="background-color: #51B749; display: inline-block; height: 10px; width: 10px;">
		 * </div> Green (<code>&quot;10&quot;</code>).
		 */
		GREEN = "GREEN",
		/**
		 * <div style="background-color: #BDADFF; display: inline-block; height: 10px; width: 10px;">
		 * </div> Mauve (<code>&quot;3&quot;</code>).
		 */
		MAUVE = "MAUVE",
		/**
		 * <div style="background-color: #FFB878; display: inline-block; height: 10px; width: 10px;">
		 * </div> Orange (<code>&quot;6&quot;</code>).
		 */
		ORANGE = "ORANGE",
		/**
		 * <div style="background-color: #a4bdfc; display: inline-block; height: 10px; width: 10px;">
		 * </div> Pale Blue (<code>&quot;1&quot;</code>).
		 */
		PALE_BLUE = "PALE_BLUE",
		/**
		 * <div style="background-color: #7AE7BF; display: inline-block; height: 10px; width: 10px;">
		 * </div> Pale Green (<code>&quot;2&quot;</code>).
		 */
		PALE_GREEN = "PALE_GREEN",
		/**
		 * <div style="background-color: #FF887C; display: inline-block; height: 10px; width: 10px;">
		 * </div> Pale Red (<code>&quot;4&quot;</code>).
		 */
		PALE_RED = "PALE_RED",
		/**
		 * <div style="background-color: #DC2127; display: inline-block; height: 10px; width: 10px;">
		 * </div> Red (<code>&quot;11&quot;</code>).
		 */
		RED = "RED",
		/**
		 * <div style="background-color: #FBD75B; display: inline-block; height: 10px; width: 10px;">
		 * </div> Yellow (<code>&quot;5&quot;</code>).
		 */
		YELLOW = "YELLOW",
	}

	class EventGuest {
		private constructor();

		/**
		 * Gets the number of additional people that this guest has said are attending.
		 * 
		 * @returns the number of additional people this guest has said are attending
		 */
		getAdditionalGuests(): number
		/**
		 * Gets the email address of the guest.
		 * 
		 * @returns the guest's email address
		 */
		getEmail(): string
		/**
		 * Gets the status of the guest for the event.
		 * 
		 * @returns the status of this guest
		 */
		getGuestStatus(): CalendarApp.GuestStatus
		/**
		 * Gets the name of the guest. If the name of the guest is not available, this method returns the
		 * guest's email address.
		 * 
		 * @returns the guest's name, or the guest's email address if the name is not available
		 */
		getName(): string
		/**
		 * Gets the status of the guest for the event.
		 * 
		 * @returns the status of this guest
		 */
		getStatus(): string

	}

	class EventRecurrence {
		private constructor();

		/**
		 * Adds a rule that excludes occurrences on a daily basis.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every week after the first 30 days.
		 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule().addDailyExclusion().times(30);
		 * </code></pre>
		 * 
		 * @returns the new RecurrenceRule
		 */
		addDailyExclusion(): CalendarApp.RecurrenceRule
		/**
		 * Adds a rule that causes the event to recur on a daily basis.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every day for ten days.
		 * var recurrence = CalendarApp.newRecurrence().addDailyRule().times(10);
		 * </code></pre>
		 * 
		 * @returns the new RecurrenceRule
		 */
		addDailyRule(): CalendarApp.RecurrenceRule
		/**
		 * Adds a rule that causes the event to recur on a specific date.
		 * 
		 * @param date
		 * 
		 * @returns this EventRecurrence for chaining
		 */
		addDate(
			date: Date
		): CalendarApp.EventRecurrence
		/**
		 * Adds a rule that excludes an occurrence for a specific date.
		 * 
		 * @param date
		 * 
		 * @returns this EventRecurrence for chaining
		 */
		addDateExclusion(
			date: Date
		): CalendarApp.EventRecurrence
		/**
		 * Adds a rule that excludes occurrences on a monthly basis.
		 * 
		 * <p>By default the exclusion is applied on the same day of the month as the first event in the
		 * series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDay(Integer)'>RecurrenceRule.onlyOnMonthDay(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDays(Integer)'>RecurrenceRule.onlyOnMonthDays(days)</a></code>.
		 * 
		 * @returns the new RecurrenceRule
		 */
		addMonthlyExclusion(): CalendarApp.RecurrenceRule
		/**
		 * Adds a rule that causes the event to recur on a monthly basis.
		 * 
		 * <p>By default the event recurs on the same day of the month as the first event in the series,
		 * but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDay(Integer)'>RecurrenceRule.onlyOnMonthDay(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDays(Integer)'>RecurrenceRule.onlyOnMonthDays(days)</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every month for three months.
		 * var recurrence = CalendarApp.newRecurrence().addMonthlyRule().times(4);
		 * </code></pre>
		 * 
		 * @returns the new RecurrenceRule
		 */
		addMonthlyRule(): CalendarApp.RecurrenceRule
		/**
		 * Adds a rule that excludes occurrences on a weekly basis.
		 * 
		 * <p>By default the exclusion is applied on the same day of the week as the first event in the
		 * series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekday(Weekday)'>RecurrenceRule.onlyOnWeekday(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekdays(Weekday)'>RecurrenceRule.onlyOnWeekdays(days)</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every day except the first four Wednesdays.
		 * var recurrence = CalendarApp.newRecurrence().addDailyRule()
		 *     .addWeeklyExclusion().onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY).times(4);
		 * </code></pre>
		 * 
		 * @returns the new RecurrenceRule
		 */
		addWeeklyExclusion(): CalendarApp.RecurrenceRule
		/**
		 * Adds a rule that causes the event to recur on a weekly basis.
		 * 
		 * <p>By default the event recurs on the same day of the week as the first event in the series,
		 * but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekday(Weekday)'>RecurrenceRule.onlyOnWeekday(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekdays(Weekday)'>RecurrenceRule.onlyOnWeekdays(days)</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every week for ten weeks.
		 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule().times(10);
		 * </code></pre>
		 * 
		 * @returns the new RecurrenceRule
		 */
		addWeeklyRule(): CalendarApp.RecurrenceRule
		/**
		 * Adds a rule that excludes occurrences on a yearly basis.
		 * 
		 * <p>By default the exclusion is applied on the same day of the year as the first event in the
		 * series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDay(Integer)'>RecurrenceRule.onlyOnYearDay(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDays(Integer)'>RecurrenceRule.onlyOnYearDays(days)</a></code>.
		 * 
		 * @returns the new RecurrenceRule
		 */
		addYearlyExclusion(): CalendarApp.RecurrenceRule
		/**
		 * Adds a rule that causes the event to recur on a yearly basis.
		 * 
		 * <p>By default the event recurs on the same day of the year as the first event in the series,
		 * but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDay(Integer)'>RecurrenceRule.onlyOnYearDay(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDays(Integer)'>RecurrenceRule.onlyOnYearDays(days)</a></code>.
		 * 
		 * @returns the new RecurrenceRule
		 */
		addYearlyRule(): CalendarApp.RecurrenceRule
		/**
		 * Sets the time zone for this recurrence. This affects the date and time that events recur on,
		 * and whether the event shifts with daylight savings time. Defaults to the calendar's time zone.
		 * 
		 * @param timeZone - the time zone, specified in "long" format (e.g., 'America/New_York', as listed
		 *     by <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
		 * 
		 * @returns this EventRecurrence for chaining
		 */
		setTimeZone(
			timeZone: string
		): CalendarApp.EventRecurrence

	}

	enum GuestStatus {
		/**
		 * The guest has been invited, but has not indicated whether he or she is attending.
		 */
		INVITED = "INVITED",
		/**
		 * The guest has indicated he or she might attend.
		 */
		MAYBE = "MAYBE",
		/**
		 * The guest has indicated he or she is not attending.
		 */
		NO = "NO",
		/**
		 * The guest is the owner of the event.
		 */
		OWNER = "OWNER",
		/**
		 * The guest has indicated he or she is attending.
		 */
		YES = "YES",
	}

	class RecurrenceRule {
		private constructor();

		/**
		 * Adds a rule that excludes occurrences on a daily basis.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every week after the first 30 days.
		 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule().addDailyExclusion().times(30);
		 * </code></pre>
		 * 
		 * @returns the new RecurrenceRule
		 */
		addDailyExclusion(): CalendarApp.RecurrenceRule
		/**
		 * Adds a rule that causes the event to recur on a daily basis.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every day for ten days.
		 * var recurrence = CalendarApp.newRecurrence().addDailyRule().times(10);
		 * </code></pre>
		 * 
		 * @returns the new RecurrenceRule
		 */
		addDailyRule(): CalendarApp.RecurrenceRule
		/**
		 * Adds a rule that causes the event to recur on a specific date.
		 * 
		 * @param date
		 * 
		 * @returns this EventRecurrence for chaining
		 */
		addDate(
			date: Date
		): CalendarApp.EventRecurrence
		/**
		 * Adds a rule that excludes an occurrence for a specific date.
		 * 
		 * @param date
		 * 
		 * @returns this EventRecurrence for chaining
		 */
		addDateExclusion(
			date: Date
		): CalendarApp.EventRecurrence
		/**
		 * Adds a rule that excludes occurrences on a monthly basis.
		 * 
		 * <p>By default the exclusion is applied on the same day of the month as the first event in the
		 * series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDay(Integer)'>onlyOnMonthDay(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDays(Integer)'>onlyOnMonthDays(days)</a></code>.
		 * 
		 * @returns the new RecurrenceRule
		 */
		addMonthlyExclusion(): CalendarApp.RecurrenceRule
		/**
		 * Adds a rule that causes the event to recur on a monthly basis.
		 * 
		 * <p>By default the event recurs on the same day of the month as the first event in the series,
		 * but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDay(Integer)'>onlyOnMonthDay(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDays(Integer)'>onlyOnMonthDays(days)</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every month for three months.
		 * var recurrence = CalendarApp.newRecurrence().addMonthlyRule().times(4);
		 * </code></pre>
		 * 
		 * @returns the new RecurrenceRule
		 */
		addMonthlyRule(): CalendarApp.RecurrenceRule
		/**
		 * Adds a rule that excludes occurrences on a weekly basis.
		 * 
		 * <p>By default the exclusion is applied on the same day of the week as the first event in the
		 * series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekday(Weekday)'>onlyOnWeekday(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekdays(Weekday)'>onlyOnWeekdays(days)</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every day except the first four Wednesdays.
		 * var recurrence = CalendarApp.newRecurrence().addDailyRule()
		 *     .addWeeklyExclusion().onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY).times(4);
		 * </code></pre>
		 * 
		 * @returns the new RecurrenceRule
		 */
		addWeeklyExclusion(): CalendarApp.RecurrenceRule
		/**
		 * Adds a rule that causes the event to recur on a weekly basis.
		 * 
		 * <p>By default the event recurs on the same day of the week as the first event in the series,
		 * but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekday(Weekday)'>onlyOnWeekday(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekdays(Weekday)'>onlyOnWeekdays(days)</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every week for ten weeks.
		 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule().times(10);
		 * </code></pre>
		 * 
		 * @returns the new RecurrenceRule
		 */
		addWeeklyRule(): CalendarApp.RecurrenceRule
		/**
		 * Adds a rule that excludes occurrences on a yearly basis.
		 * 
		 * <p>By default the exclusion is applied on the same day of the year as the first event in the
		 * series, but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDay(Integer)'>onlyOnYearDay(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDays(Integer)'>onlyOnYearDays(days)</a></code>.
		 * 
		 * @returns the new RecurrenceRule
		 */
		addYearlyExclusion(): CalendarApp.RecurrenceRule
		/**
		 * Adds a rule that causes the event to recur on a yearly basis.
		 * 
		 * <p>By default the event recurs on the same day of the year as the first event in the series,
		 * but this can be altered by calling <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDay(Integer)'>onlyOnYearDay(day)</a></code> or <code><a target='_blank' href='https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDays(Integer)'>onlyOnYearDays(days)</a></code>.
		 * 
		 * @returns the new RecurrenceRule
		 */
		addYearlyRule(): CalendarApp.RecurrenceRule
		/**
		 * Configures the rule to only apply at this interval of the rule's time unit.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every fourth week.
		 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule().interval(4);
		 * </code></pre>
		 * 
		 * @param interval - the interval in the rule's time unit
		 * 
		 * @returns this RecurrenceRule for chaining
		 */
		interval(
			interval: number
		): CalendarApp.RecurrenceRule
		/**
		 * Configures the rule to only apply to a specific month.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every week in February.
		 * var recurrence = CalendarApp.newRecurrence()
		 *     .addWeeklyRule().onlyInMonth(CalendarApp.Month.FEBRUARY);
		 * </code></pre>
		 * 
		 * @param month - the month
		 * 
		 * @returns this RecurrenceRule for chaining
		 */
		onlyInMonth(
			month: Month
		): CalendarApp.RecurrenceRule
		/**
		 * Configures the rule to only apply to specific months.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every week in February and March.
		 * var recurrence = CalendarApp.newRecurrence()
		 *     .addWeeklyRule().onlyInMonths([CalendarApp.Month.FEBRUARY, CalendarApp.Month.MARCH]);
		 * </code></pre>
		 * 
		 * @param months - the months
		 * 
		 * @returns this RecurrenceRule for chaining
		 */
		onlyInMonths(
			months: Month[]
		): CalendarApp.RecurrenceRule
		/**
		 * Configures the rule to only apply to a specific day of the month.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every month on the fifth day of the month.
		 * var recurrence = CalendarApp.newRecurrence().addMonthlyRule().onlyOnMonthDay(5);
		 * </code></pre>
		 * 
		 * @param day - the day of the month
		 * 
		 * @returns this RecurrenceRule for chaining
		 */
		onlyOnMonthDay(
			day: number
		): CalendarApp.RecurrenceRule
		/**
		 * Configures the rule to only apply to specific days of the month.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every month on the first and fifteenth day of the month.
		 * var recurrence = CalendarApp.newRecurrence().addMonthlyRule().onlyOnMonthDays([1, 15]);
		 * </code></pre>
		 * 
		 * @param days - the days of the month
		 * 
		 * @returns this RecurrenceRule for chaining
		 */
		onlyOnMonthDays(
			days: number[]
		): CalendarApp.RecurrenceRule
		/**
		 * Configures the rule to only apply to a specific week of the year.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs on the fifth week of every year.
		 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule().onlyOnWeek(5);
		 * </code></pre>
		 * 
		 * @param week - the week
		 * 
		 * @returns this RecurrenceRule for chaining
		 */
		onlyOnWeek(
			week: number
		): CalendarApp.RecurrenceRule
		/**
		 * Configures the rule to only apply to a specific day of the week.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every week on Wednesdays.
		 * var recurrence = CalendarApp.newRecurrence()
		 *     .addWeeklyRule().onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY);
		 * </code></pre>
		 * 
		 * @param day - the day of the week
		 * 
		 * @returns this RecurrenceRule for chaining
		 */
		onlyOnWeekday(
			day: Weekday
		): CalendarApp.RecurrenceRule
		/**
		 * Configures the rule to only apply to specific days of the week.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every week on Tuesdays and Thursdays.
		 * var recurrence = CalendarApp.newRecurrence()
		 *     .addWeeklyRule().onlyOnWeekdays(
		 *         [CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY]);
		 * </code></pre>
		 * 
		 * @param days - the days of the week
		 * 
		 * @returns this RecurrenceRule for chaining
		 */
		onlyOnWeekdays(
			days: Weekday[]
		): CalendarApp.RecurrenceRule
		/**
		 * Configures the rule to only apply to specific weeks of the year.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs on the fifth and tenth weeks of every year.
		 * var recurrence = CalendarApp.newRecurrence().addWeeklyRule().onlyOnWeeks([5, 10]);
		 * </code></pre>
		 * 
		 * @param weeks - the weeks
		 * 
		 * @returns this RecurrenceRule for chaining
		 */
		onlyOnWeeks(
			weeks: number[]
		): CalendarApp.RecurrenceRule
		/**
		 * Configures the rule to only apply to a specific day of the year.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every year on February 15 (the 46th day).
		 * var recurrence = CalendarApp.newRecurrence().addYearlyRule().onlyOnYearDay(46);
		 * </code></pre>
		 * 
		 * @param day - the day of the year
		 * 
		 * @returns this RecurrenceRule for chaining
		 */
		onlyOnYearDay(
			day: number
		): CalendarApp.RecurrenceRule
		/**
		 * Configures the rule to only apply to specific days of the year.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every year on January 20 and February 15.
		 * var recurrence = CalendarApp.newRecurrence().addYearlyRule().onlyOnYearDay([20, 46]);
		 * </code></pre>
		 * 
		 * @param days - the days of the year
		 * 
		 * @returns this RecurrenceRule for chaining
		 */
		onlyOnYearDays(
			days: number[]
		): CalendarApp.RecurrenceRule
		/**
		 * Sets the time zone for this recurrence. This affects the date and time that events recur on,
		 * and whether the event shifts with daylight savings time. Defaults to the calendar's time zone.
		 * 
		 * @param timeZone - the time zone, specified in "long" format (e.g., 'America/New_York', as listed
		 *     by <a href="http://joda-time.sourceforge.net/timezones.html">Joda.org</a>)
		 * 
		 * @returns this EventRecurrence for chaining
		 */
		setTimeZone(
			timeZone: string
		): CalendarApp.EventRecurrence
		/**
		 * Configures the rule to end after a given number of occurrences.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every day for ten days.
		 * var recurrence = CalendarApp.newRecurrence().addDailyRule().times(10);
		 * </code></pre>
		 * 
		 * @param times - the number of times to recur
		 * 
		 * @returns this RecurrenceRule for chaining
		 */
		times(
			times: number
		): CalendarApp.RecurrenceRule
		/**
		 * Configures the rule to end on a given date (inclusive).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a rule that recurs every day through the end of 2013.
		 * var recurrence = CalendarApp.newRecurrence()
		 *     .addDailyRule().until(new Date(&#39;December 31, 2013&#39;));
		 * </code></pre>
		 * 
		 * @param endDate
		 * 
		 * @returns this RecurrenceRule for chaining
		 */
		until(
			endDate: Date
		): CalendarApp.RecurrenceRule
		/**
		 * Configures which day a week starts on, for the purposes of applying the rule.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a weekly rule where weeks start on Monday.
		 * var recurrence = CalendarApp.newRecurrence()
		 *     .addWeeklyRule().weekStartsOn(CalendarApp.Weekday.MONDAY);
		 * </code></pre>
		 * 
		 * @param day - the day on which the week starts
		 * 
		 * @returns this RecurrenceRule for chaining
		 */
		weekStartsOn(
			day: Weekday
		): CalendarApp.RecurrenceRule

	}

	enum Visibility {
		/**
		 * The event is private. This value is provided for compatibility reasons.
		 */
		CONFIDENTIAL = "CONFIDENTIAL",
		/**
		 * Uses the default visibility for events on the calendar.
		 */
		DEFAULT = "DEFAULT",
		/**
		 * The event is private and only event attendees may view event details.
		 */
		PRIVATE = "PRIVATE",
		/**
		 * The event is public and event details are visible to all readers of the calendar.
		 */
		PUBLIC = "PUBLIC",
	}

}
