/** Module: ContactsApp */

type ContactsApp = typeof ContactsApp;
declare namespace ContactsApp {

	/**
	 * Creates a new contact.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below creates a new contact with the name &quot;John Doe&quot; and the email address
	 * // &quot;john.doe@example.com&quot;.
	 * var contact = ContactsApp.createContact(&#39;John&#39;, &#39;Doe&#39;, &#39;john.doe@example.com&#39;);
	 * </code></pre>
	 * 
	 * @param givenName - the first name of the contact
	 * @param familyName - the last name of the contact
	 * @param email - the email address of the contact
	 * 
	 * @returns the newly created Contact object
	 */
	function createContact(
		givenName: string,
		familyName: string,
		email: string
	): ContactsApp.Contact
	/**
	 * Creates a contact group with the given name
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below creates a new contact group named &quot;Work Friends&quot;
	 * var group = ContactsApp.createContactGroup(&quot;Work Friends&quot;);
	 * </code></pre>
	 * 
	 * @param name - the name of the new contact group
	 * 
	 * @returns the newly created contact group
	 */
	function createContactGroup(
		name: string
	): ContactsApp.ContactGroup
	/**
	 * Deletes the contact.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below retrieves a contact with the email address &quot;john.doe@example.com&quot;
	 * // and then deletes that contact.
	 * var contact = ContactsApp.getContact(&#39;john.doe@example.com&#39;);
	 * ContactsApp.deleteContact(contact);
	 * </code></pre>
	 * 
	 * @param contact - the contact to be deleted
	 */
	function deleteContact(
		contact: ContactsApp.Contact
	): void
	/**
	 * Deletes the contact group
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below creates deletes the contact group named &quot;Work Friends&quot;
	 * var group = ContactsApp.getContactGroup(&quot;Work Friends&quot;);
	 * ContactsApp.deleteContactGroup(group);
	 * </code></pre>
	 * 
	 * @param group - the contact group to delete
	 */
	function deleteContactGroup(
		group: ContactsApp.ContactGroup
	): void
	/**
	 * Finds a Contact with the given email address.
	 * 
	 * @param email - the email address of the contact to be found
	 * 
	 * @returns the Contact containing that email address
	 */
	function findByEmailAddress(
		email: string
	): ContactsApp.Contact
	/**
	 * Finds a contact group of the given name.
	 * 
	 * @param name - the name of the contact group to find
	 * 
	 * @returns the contact group matching the given name
	 */
	function findContactGroup(
		name: string
	): ContactsApp.ContactGroup
	/**
	 * Get all the contacts belonging to this user.
	 * 
	 * @returns all the contacts for this user
	 */
	function getAllContacts(): ContactsApp.Contact[]
	/**
	 * Gets a contact by the email address.
	 * 
	 * <p>If multiple contacts share the same email address, the method favors those contacts who have
	 * marked the email address as primary; if none of the contacts had the email address marked as
	 * primary or multiple contacts had the email address marked as primary, then it returns the first
	 * result in the sorted contacts order.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below retrieves a contact with the email address &quot;john.doe@example.com&quot;.
	 * var contact = ContactsApp.getContact(&#39;john.doe@example.com&#39;);
	 * </code></pre>
	 * 
	 * @param emailAddress - the email address of the contact
	 * 
	 * @returns the contact containing that email address
	 */
	function getContact(
		emailAddress: string
	): ContactsApp.Contact
	/**
	 * Gets the contact with this id.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below retrieves the contact with the id
	 * // &quot;http://www.google.com/m8/feeds/contacts/john.doe%40example.com/base/7c86afde08d34ca5&quot;
	 * var id = &#39;http://www.google.com/m8/feeds/contacts/john.doe%40example.com/base/7c86afde08d34c&#39;;
	 * var contact = ContactApp.getContactById(id);
	 * </code></pre>
	 * 
	 * @param id - the id of the contact to retrieve
	 * 
	 * @returns the matching contact or null
	 */
	function getContactById(
		id: string
	): ContactsApp.Contact
	/**
	 * Gets a contact group with the given name, or returns null if no such contact group is found.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns the contact group with the name &quot;Work Friends&quot;
	 * var group  = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
	 * </code></pre>
	 * 
	 * @param name - the name of the contact group to match
	 * 
	 * @returns the matching contact group or null if no matching contact group is found
	 */
	function getContactGroup(
		name: string
	): ContactsApp.ContactGroup
	/**
	 * Gets a contact group with the given id, or returns null if no such contact group is found.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns the contact group with the id
	 * // &quot;http://www.google.com/m8/feeds/groups/john.doe%40example.com/base/54eefbb093fdecb&quot;
	 * var id = &quot;http://www.google.com/m8/feeds/groups/john.doe%40example.com/base/54eefbb093fdecb&quot;;
	 * var group  = ContactsApp.getContactGroupById(id);
	 * </code></pre>
	 * 
	 * @param id - the id of the contact group to match
	 * 
	 * @returns the matching contact group or null if no matching contact group is found
	 */
	function getContactGroupById(
		id: string
	): ContactsApp.ContactGroup
	/**
	 * Gets the complete list of the user's contact groups.
	 * 
	 * <p>A user can have a list of Contacts, and potentially a list of Contact Groups also. Each
	 * Contact Group can contain Contacts. This method returns a list of all the Contact Groups.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The retrieves all the contract groups for the user and then logs the group name of each
	 * // contact group.
	 * var groups  = ContactsApp.getContactGroups();
	 * for (var i = 0; i &lt; groups.length; i++) {
	 *   Logger.log(groups[i].getName());
	 * }
	 * </code></pre>
	 * 
	 * @returns an array of the user's contact groups
	 */
	function getContactGroups(): ContactsApp.ContactGroup[]
	/**
	 * Gets all of the user's contacts.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below will retrieve all the user&#39;s contacts
	 * var contacts = ContactsApp.getContacts();
	 * </code></pre>
	 * 
	 * @returns an array of all the user's contacts
	 */
	function getContacts(): ContactsApp.Contact[]
	/**
	 * Get contacts matching an address.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s address contains
	 * // &quot;San Francisco&#39;.
	 * var contacts = ContactsApp.getContactsByAddress(&#39;San Francisco&#39;);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact's addresses
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByAddress(
		query: string
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching an address, limited to a specific field.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s address contains
	 * // &quot;San Francisco&quot; in the Home address field.
	 * var contacts = ContactsApp.getContactsByAddress(&#39;San Francisco&#39;,
	 *                                                 ContactsApp.Field.HOME_ADDRESS);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact's addresses
	 * @param label - the field to search within
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByAddress(
		query: string,
		label: ContactsApp.Field
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching an address, limited to the specified custom address label.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s address contains
	 * // &quot;San Francisco&quot; in a custom address label (created by the user) called
	 * // &quot;vacation&quot;.
	 * var contacts = ContactsApp.getContactsByAddress(&#39;San Francisco&#39;, &#39;vacation&#39;);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact's addresses with the specified custom address
	 *     label
	 * @param label - the custom address label to search within
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByAddress(
		query: string,
		label: string
	): ContactsApp.Contact[]

	/**
	 * Get contacts matching the company field.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s company field
	 * // contains &quot;Google&quot;.
	 * var contacts = ContactsApp.getContactsByCompany(&#39;Google&#39;);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact's company field
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByCompany(
		query: string
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching a given value in a custom field.
	 * 
	 * <p>The custom field can be specified by a String or as one of the ContactsApp.ExtendedField
	 * values.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s custom field
	 * // named &quot;Favorite Sport&quot; contains &quot;tennis&quot;.
	 * var contacts = ContactsApp.getContactsByCustomField(&#39;tennis&#39;, &#39;Favorite Sport&#39;);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact's custom field
	 * @param label - the custom field to search within
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByCustomField(
		query: object,
		label: ContactsApp.ExtendedField
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching a given month and day for a particular standard field.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s &quot;Birthday&quot; field
	 * // contains April for the month and 19 for the day.
	 * var contacts = ContactsApp.getContactsByDate(ContactsApp.Month.APRIL, 19,
	 *                                               ContactsApp.Field.BIRTHDAY);
	 * </code></pre>
	 * 
	 * @param month - the month to match, as one of the values from ContactsApp.Month
	 * @param day - the day to match
	 * @param label - the field to search within, from ContactsApp.Field
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByDate(
		month: Month,
		day: number,
		label: ContactsApp.Field
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching a given month, day, and year for a particular standard field.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s &quot;Birthday&quot; field
	 * // contains April for the month, 19 for the day, and 1950 for the year.
	 * var contacts = ContactsApp.getContactsByDate(ContactsApp.Month.APRIL, 19, 1950,
	 *                                              ContactsApp.Field.BIRTHDAY);
	 * </code></pre>
	 * 
	 * @param month - the month to match, as one of the values from ContactsApp.Month
	 * @param day - the day to match
	 * @param year - the year to match, can be null
	 * @param label - the field to search within, from ContactsApp.Field
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByDate(
		month: Month,
		day: number,
		year: number,
		label: ContactsApp.Field
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching a given month, day, and year for a particular custom field.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s custom &quot;Start Date&quot; field
	 * // contains April for the month, 19 for the day, and 2011 for the year.
	 * var contacts = ContactsApp.getContactsByDate(ContactsApp.Month.APRIL, 19, 2011, &#39;Start Date&#39;);
	 * </code></pre>
	 * 
	 * @param month - the month to match, as one of the values from ContactsApp.Month
	 * @param day - the day to match
	 * @param year - the year to match, can be null
	 * @param label - the custom field to search within
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByDate(
		month: Month,
		day: number,
		year: number,
		label: string
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching a given month and day for a particular custom field.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s custom &quot;Start Date&quot; field
	 * // contains April for the month and 19 for the day.
	 * var contacts = ContactsApp.getContactsByDate(ContactsApp.Month.APRIL, 19, &#39;Start Date&#39;);
	 * </code></pre>
	 * 
	 * @param month - the month to match, as one of the values from ContactsApp.Month
	 * @param day - the day to match
	 * @param label - the custom field to search within
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByDate(
		month: Month,
		day: number,
		label: string
	): ContactsApp.Contact[]

	/**
	 * Get contacts matching an email address.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s email address contains
	 * // &quot;john.doe@example.com&#39;.
	 * var contacts = ContactsApp.getContactsByEmailAddress(&#39;john.doe@example.com&#39;);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact email addresses
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByEmailAddress(
		query: string
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching an email address, limited to a specific field.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s email address contains
	 * // &quot;john.doe@example.com&quot; in the Home email field.
	 * var contacts = ContactsApp.getContactsByEmailAddress(&#39;john.doe@example.com&#39;,
	 *                                                      ContactsApp.Field.HOME_EMAIL);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact email addresses
	 * @param label - the field to search within
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByEmailAddress(
		query: string,
		label: ContactsApp.Field
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching an email address, limited to the specified custom email address label.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s email address contains
	 * // &quot;john.doe@example.com&quot; in a custom email address label (created by the user) called
	 * // &quot;alternate&quot;.
	 * var contacts = ContactsApp.getContactsByEmailAddress(&#39;john.doe@example.com&#39;, &#39;alternate&#39;);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact email addresses with the specified custom
	 *     email address label
	 * @param label - the custom email address label to search within
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByEmailAddress(
		query: string,
		label: string
	): ContactsApp.Contact[]

	/**
	 * Get the contacts in a given ContactGroup.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts in the ContactGroup with the name
	 * // &quot;Work Friends&quot;.
	 * var group  = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
	 * var contacts = ContactsApp.getContactsByGroup(group);
	 * </code></pre>
	 * 
	 * @param group - the group of contacts
	 * 
	 * @returns an array of of contacts in the given group
	 */
	function getContactsByGroup(
		group: ContactsApp.ContactGroup
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching an instant messaging address.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s instant messaging address
	 * // contains &quot;ChatWithJohnDoe&quot; in any instant messaging field.
	 * var contacts = ContactsApp.getContactsByIM(&#39;ChatWithJohnDoe&#39;);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact's instant messaging addresses
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByIM(
		query: string
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching an instant messaging address, limited to a specific field.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s instant messaging address
	 * // contains &quot;ChatWithJohnDoe&quot; in the AIM instant messaging field.
	 * var contacts = ContactsApp.getContactsByIM(&#39;ChatWithJohnDoe&#39;,
	 *                                             ContactsApp.Field.AIM);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact's instant messaging addresses
	 * @param label - the field to search within
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByIM(
		query: string,
		label: ContactsApp.Field
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching an instant messaging address, limited to the specified custom instant
	 * messaging label.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s instant messaging address
	 * // contains &quot;ChatWithJohnDoe&quot; in a custom instant messaging label (created by the user) called
	 * // &quot;eBuddy&quot;.
	 * var contacts = ContactsApp.getContactsByIM(&#39;ChatWithJohnDoe&#39;, &#39;eBuddy&#39;);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact's instant messaging addresses with the
	 *     specified custom instant messaging label
	 * @param label - the custom instant messaging label to search within
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByIM(
		query: string,
		label: string
	): ContactsApp.Contact[]

	/**
	 * Get contacts matching the job title field.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s job title field
	 * // contains &quot;Product Manager&quot;.
	 * var contacts = ContactsApp.getContactsByJobTitle(&#39;Product Manager&#39;);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact's job title field
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByJobTitle(
		query: string
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching a name.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact name contains &quot;John&quot;
	 * var contacts = ContactsApp.getContactsByName(&#39;John&#39;);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact names
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByName(
		query: string
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching a name, limited to a specific field.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact name contains &quot;John&quot;
	 * // in the Given Name field.
	 * var contacts = ContactsApp.getContactsByName(&#39;John&#39;, ContactsApp.Field.GIVEN_NAME);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact names
	 * @param label - the field to search within
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByName(
		query: string,
		label: ContactsApp.Field
	): ContactsApp.Contact[]

	/**
	 * Get contacts matching the notes field.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s notes field
	 * // contains &quot;sent birthday card&quot;.
	 * var contacts = ContactsApp.getContactsByNotes(&#39;sent birthday card&#39;);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact's notes field
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByNotes(
		query: string
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching a phone number.
	 * 
	 * <p>This method will expand out lettered phone numbers, so if you search for '212-555-CODE' and
	 * you have '212-555-2633' in your contacts or vice versa, the method will find the appropriate
	 * contact.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s phone number contains
	 * // &quot;212-555-1234&#39; in any phone number field.
	 * var contacts = ContactsApp.getContactsByPhone(&#39;212-555-1234&#39;);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact's phone numbers
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByPhone(
		query: string
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching a phone number, limited to a specific field.
	 * 
	 * <p>This method will expand out lettered phone numbers, so if you search for '212-555-CODE' and
	 * you have '212-555-2633' in your contacts or vice versa, the method will find the appropriate
	 * contact.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s phone number contains
	 * // &quot;212-555-1234&quot; in the Home phone number field.
	 * var contacts = ContactsApp.getContactsByPhone(&#39;212-555-1234&#39;,
	 *                                               ContactsApp.Field.HOME_PHONE);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact's phone numbers
	 * @param label - the field to search within
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByPhone(
		query: string,
		label: ContactsApp.Field
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching a phone number, limited to the specified custom phone number label.
	 * 
	 * <p>This method will expand out lettered phone numbers, so if you search for '212-555-CODE' and
	 * you have '212-555-2633' in your contacts or vice versa, the method will find the appropriate
	 * contact.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s phone number contains
	 * // &quot;212-555-1234&quot; in a custom phone number label (created by the user) called
	 * // &quot;alternate&quot;.
	 * var contacts = ContactsApp.getContactsByPhone(&#39;212-555-1234&#39;, &#39;alternate&#39;);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact's phone numbers with the specified custom
	 *     phone number label
	 * @param label - the custom phone number label to search within
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByPhone(
		query: string,
		label: string
	): ContactsApp.Contact[]

	/**
	 * Get contacts matching a URL.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s URL contains
	 * // &quot;www.example.com&#39; in any URL field.
	 * var contacts = ContactsApp.getContactsByUrl(&#39;www.example.com&#39;);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact's URLs
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByUrl(
		query: string
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching a URL, limited to a specific field.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s URL contains
	 * // &quot;www.example.com&quot; in the Work URL field.
	 * var contacts = ContactsApp.getContactsByUrl(&#39;www.example.com&#39;,
	 *                                             ContactsApp.Field.WORK_WEBSITE);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact's URLs
	 * @param label - the field to search within
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByUrl(
		query: string,
		label: ContactsApp.Field
	): ContactsApp.Contact[]
	/**
	 * Get contacts matching a URL, limited to the specified custom URL label.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The code below returns an array of contacts where the contact&#39;s URL contains
	 * // &quot;www.example.com&quot; in a custom URL label (created by the user) called
	 * // &quot;alternate work&quot;.
	 * var contacts = ContactsApp.getContactsByUrl(&#39;www.example.com&#39;, &#39;alternate work&#39;);
	 * </code></pre>
	 * 
	 * @param query - the string to search for in contact's URLs with the specified custom URL label
	 * @param label - the custom URL label to search within
	 * 
	 * @returns an array of matching contacts
	 */
	function getContactsByUrl(
		query: string,
		label: string
	): ContactsApp.Contact[]


	class AddressField {
		private constructor();

		/**
		 * Deletes this address field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below deletes the home addresses for a contact named &quot;John Doe&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var homeAddresses = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
		 * for (var i in homeAddresses) {
		 *   homeAddresses[i].deleteAddressField();
		 * }
		 * </code></pre>
		 */
		deleteAddressField(): void
		/**
		 * Get the address for this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the address for the &#39;Home Address&#39; field for contact &#39;John Doe&#39;.
		 * // Can be used similarly for other fields that contain addresses.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
		 * Logger.log(homeAddress[0].getAddress());
		 * </code></pre>
		 * 
		 * @returns the address as a string
		 */
		getAddress(): string
		/**
		 * Gets the label for this field. This may be a Field, ExtendedField, or a String.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the label for all the address fields associated with contact
		 * // &#39;John Doe&#39;. This method can be similarly called for any field that has
		 * // a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * for (var i = 0; i &lt; addressFields.length; i++) {
		 *   Logger.log(addressFields[i].getLabel());
		 * }
		 * </code></pre>
		 * 
		 * @returns the label for this field
		 */
		getLabel(): object
		/**
		 * Gets whether this is the primary field value.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs whether or not the first address field associated with contact
		 * // &#39;John Doe&#39; is labeled as primary. This method can be similarly called
		 * // for any field.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * Logger.log(addressFields[0].isPrimary());
		 * </code></pre>
		 * 
		 * @returns whether this is primary
		 */
		isPrimary(): Boolean
		/**
		 * Sets the address of this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the address for the &#39;Home Address&#39; field for contact &#39;John Doe&#39;.
		 * // Can be used similarly for other fields that contain addresses.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
		 * homeAddress[0].setAddress(&#39;123 Main St, Raleigh, NC, 27601&#39;);
		 * </code></pre>
		 * 
		 * @param address - the new address
		 * 
		 * @returns this field, useful for chaining
		 */
		setAddress(
			address: string
		): ContactsApp.AddressField
		/**
		 * Sets this field to primary.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the the first address field associated with contact &#39;John Doe&#39;
		 * // as primary. This method can be similarly called for any field.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * addressFields[0].setAsPrimary();
		 * </code></pre>
		 * 
		 * @returns this FieldValue for chaining
		 */
		setAsPrimary(): ContactsApp.AddressField
		/**
		 * Sets the label of this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the label to &#39;Work&#39; for the first address field associated
		 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
		 * // field that has a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
		 * </code></pre>
		 * 
		 * @param field - the new standard label
		 * 
		 * @returns this FieldValue for chaining
		 */
		setLabel(
			field: ContactsApp.Field
		): ContactsApp.AddressField
		/**
		 * Sets the label of this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the label to &#39;Apartment&#39; for the first address field associated
		 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
		 * // field that has a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * addressFields[0].setLabel(&#39;Apartment&#39;);
		 * </code></pre>
		 * 
		 * @param label - the new label for this field
		 * 
		 * @returns this field, useful for chaining
		 */
		setLabel(
			label: string
		): ContactsApp.AddressField


	}

	class CompanyField {
		private constructor();

		/**
		 * Deletes this company field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Deletes the first company associated with contact &#39;John Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var company = contacts[0].getCompanies()[0];
		 * company.deleteCompanyField();
		 * </code></pre>
		 */
		deleteCompanyField(): void
		/**
		 * Gets the company name.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs company name for all companies associated with contact &#39;John Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var companies = contacts[0].getCompanies();
		 * for (var i in companies) {
		 *   Logger.log(companies[i].getCompanyName());
		 * }
		 * </code></pre>
		 * 
		 * @returns the name of the company
		 */
		getCompanyName(): string
		/**
		 * Gets the job title.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs job title for all companies associated with contact &#39;John Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var companies = contacts[0].getCompanies();
		 * for (var i in companies) {
		 *   Logger.log(companies[i].getJobTitle());
		 * }
		 * </code></pre>
		 * 
		 * @returns the job title
		 */
		getJobTitle(): string
		/**
		 * Gets whether this is the primary company.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs true or false depending on whether each company is the primary
		 * // company for contact &#39;John Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var companies = contacts[0].getCompanies();
		 * for (var i in companies) {
		 *   Logger.log(companies[i].isPrimary());
		 * }
		 * </code></pre>
		 * 
		 * @returns whether this is primary
		 */
		isPrimary(): Boolean
		/**
		 * Sets this company as the primary company, and unsets whatever company was previously primary.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the first company associated with contact &#39;John Doe&#39; as primary
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var company = contacts[0].getCompanies()[0];
		 * company.setAsPrimary();
		 * </code></pre>
		 * 
		 * @returns this company field, useful for chaining
		 */
		setAsPrimary(): ContactsApp.CompanyField
		/**
		 * Sets the company name.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the company name for the first company associated with contact &#39;John Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var company = contacts[0].getCompanies()[0];
		 * company.setCompanyName(&#39;ACME Corp&#39;);
		 * </code></pre>
		 * 
		 * @param company - the new name for the company
		 * 
		 * @returns this company field, useful for chaining
		 */
		setCompanyName(
			company: string
		): ContactsApp.CompanyField
		/**
		 * Sets the job title.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the job title for the first company associated with contact &#39;John Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var company = contacts[0].getCompanies()[0];
		 * company.setJobTitle(&#39;Manager&#39;);
		 * </code></pre>
		 * 
		 * @param title - the new job title for the contact at this company
		 * 
		 * @returns this company field, useful for chaining
		 */
		setJobTitle(
			title: string
		): ContactsApp.CompanyField

	}

	class Contact {
		private constructor();

		/**
		 * Adds an address to the contact with either a standard or custom label.
		 * 
		 * <p>The label can be either from ContactsApp.Field or a custom label string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact named &quot;John Doe&quot; and adds the address
		 * // &quot;123 Main St, Some City, NY 10011&quot; with the the ContactsApp.Field.WORK_ADDRESS label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var address = contacts[0].addAddress(ContactsApp.Field.WORK_ADDRESS,
		 *                                     &#39;123 Main St, Some City, NY 10011&#39;);
		 * </code></pre>
		 * 
		 * @param label - the label of the new address, either from ContactsApp.Field or a custom string
		 * @param address - the new address
		 * 
		 * @returns the newly created field
		 */
		addAddress(
			label: object,
			address: string
		): ContactsApp.AddressField
		/**
		 * Adds a company to the contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact named &quot;John Doe&quot; and adds the company &quot;Google&quot; and the
		 * // job title &quot;Product Manager&quot;.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var url = contacts[0].addCompany(&#39;Google&#39;, &#39;Product Manager&#39;);
		 * </code></pre>
		 * 
		 * @param company - the name of the company to add to this contact
		 * @param title - the job title associated with this contact for this company
		 * 
		 * @returns the newly created field
		 */
		addCompany(
			company: string,
			title: string
		): ContactsApp.CompanyField
		/**
		 * Adds a custom field to the contact with either an extended or custom label.
		 * 
		 * <p>The label can be either from ContactsApp.ExtendedField or a custom label string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact named &quot;John Doe&quot; and adds the custom field
		 * // ContactsApp.ExtendedField.HOBBY with the value &quot;hiking&quot;.
		 * // Note that ContactsApp.ExtendedField.HOBBY is not the same as a custom field named &#39;HOBBY&#39;.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * contacts[0].addCustomField(ContactsApp.ExtendedField.HOBBY, &#39;hiking&#39;);
		 * </code></pre>
		 * 
		 * @param label - the label of the new address, either from ContactsApp.ExtendedField or a custom
		 *     string
		 * @param content - the value to store in the custom field
		 * 
		 * @returns the newly created field
		 */
		addCustomField(
			label: object,
			content: object
		): ContactsApp.CustomField
		/**
		 * Adds a date to the contact with either an standard or custom label.
		 * 
		 * <p>The label can be either from ContactsApp.Field or a custom label string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact named &quot;John Doe&quot; and adds a
		 * // ContactsApp.ExtendedField.BIRTHDAY with the value &quot;April 19, 1950&quot;.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var birthday = contacts[0].addDate(ContactsApp.Field.BIRTHDAY,
		 *                                    ContactsApp.Month.APRIL, 19, 1950);
		 * </code></pre>
		 * 
		 * @param label - the label of the new date, either from ContactsApp.Field or a custom string
		 * @param month - the month, from ContactApps.Month
		 * @param day - the day
		 * @param year - the year
		 * 
		 * @returns the newly created date
		 */
		addDate(
			label: object,
			month: Month,
			day: number,
			year: number
		): ContactsApp.DateField
		/**
		 * Add an email address with a standard label (home, work, etc.) or a custom label
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact named &quot;John Doe&quot; and adds the email address
		 * // &quot;j.doe@example.com&quot; to the ContactsApp.Field.HOME_EMAIL label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var emailField = contacts[0].addEmail(ContactsApp.Field.HOME_EMAIL, &#39;j.doe@example.com&#39;);
		 * </code></pre>
		 * 
		 * @param label - the label of the new email, either from ContactsApp.Field or a custom string
		 * @param address - the new email address
		 * 
		 * @returns the newly added field
		 */
		addEmail(
			label: object,
			address: string
		): ContactsApp.EmailField
		/**
		 * Adds an IM address to the contact with either a standard or custom label.
		 * 
		 * <p>The label can be either from ContactsApp.Field or a custom label string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact named &quot;John Doe&quot; and adds the IM address &quot;ChatWithJohn&quot;
		 * // with the the ContactsApp.Field.AIM label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var email = contacts[0].addIM(ContactsApp.Field.AIM, &#39;ChatWithJohn&#39;);
		 * </code></pre>
		 * 
		 * @param label - the label of the new IM address, either from ContactsApp.Field or a custom string
		 * @param address - the new IM address
		 * 
		 * @returns the newly created field
		 */
		addIM(
			label: object,
			address: string
		): ContactsApp.IMField
		/**
		 * Adds a phone number to the contact with either a standard or custom label.
		 * 
		 * <p>The label can be either from ContactsApp.Field or a custom label string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact named &quot;John Doe&quot; and adds the phone number
		 * // &quot;212-555-1234&quot; with the the ContactsApp.Field.WORK_PHONE label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var phone = contacts[0].addPhone(ContactsApp.Field.WORK_PHONE, &#39;212-555-1234&#39;);
		 * </code></pre>
		 * 
		 * @param label - the label of the new phone number, either from ContactsApp.Field or a custom
		 *     string
		 * @param number - the new phone number
		 * 
		 * @returns the newly created field
		 */
		addPhone(
			label: object,
			number: string
		): ContactsApp.PhoneField
		/**
		 * Adds this contact to the given contact group.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below creates a new contact and then adds it to the contact group named
		 * // &quot;Work Friends&quot;
		 * var contact = ContactsApp.createContact(&#39;John&#39;, &#39;Doe&#39;, &#39;john.doe@example.com&#39;);
		 * var group = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
		 * contact = contact.addToGroup(group);
		 * </code></pre>
		 * 
		 * @param group - the contact group to add this contact to
		 * 
		 * @returns this contact
		 */
		addToGroup(
			group: ContactsApp.ContactGroup
		): ContactsApp.Contact
		/**
		 * Adds a URL to the contact with either a standard or custom label.
		 * 
		 * <p>The label can be either from ContactsApp.Field or a custom label string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact named &quot;John Doe&quot; and adds the URL
		 * // &quot;http://www.example.com&quot; with the the ContactsApp.Field.WORK_WEBSITE label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var url = contacts[0].addUrl(ContactsApp.Field.WORK_WEBSITE, &#39;http://www.example.com&#39;);
		 * </code></pre>
		 * 
		 * @param label - the label of the new address, either from ContactsApp.Field or a custom string
		 * @param url - the new URL
		 * 
		 * @returns the newly created field
		 */
		addUrl(
			label: object,
			url: string
		): ContactsApp.UrlField
		/**
		 * Deletes this contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   contacts[i].deleteContact();
		 * }
		 * </code></pre>
		 */
		deleteContact(): void
		/**
		 * Gets all the addresses for this contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the addresses of all the contacts whose names contain &quot;John Doe&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   Logger.log(contacts[i].getAddresses());
		 * }
		 * </code></pre>
		 * 
		 * @returns a list of addresses
		 */
		getAddresses(): ContactsApp.AddressField[]
		/**
		 * Gets all the addresses for this contact matching a particular field.
		 * 
		 * <p>The label can be either from ContactsApp.Field or a custom label string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the addresses
		 * // associated with that contact that are in the ContactsApp.Field.WORK_ADDRESS label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addresses = contacts[0].getAddresses(ContactsApp.Field.WORK_ADDRESS);
		 * for (var i in addresses) {
		 *   Logger.log(addresses[i].getAddress());
		 * }
		 * </code></pre>
		 * 
		 * @param label - the label to match, either from ContactsApp.Field or a custom string
		 * 
		 * @returns a list of addresses
		 */
		getAddresses(
			label: object
		): ContactsApp.AddressField[]

		/**
		 * Gets all the companies for this contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the company names of all the contacts whose names contain &quot;John Doe&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   var companies = contacts[i].getCompanies();
		 *   for (var j in companies) {
		 *     Logger.log(companies[j].getCompanyName());
		 *   }
		 * }
		 * </code></pre>
		 * 
		 * @returns a list of companies
		 */
		getCompanies(): ContactsApp.CompanyField[]
		/**
		 * Gets all the contact groups that contain this contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below gets a contact named &quot;John Doe&quot; and retrieves all the contact groups that
		 * // the contact belongs to
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var groups = contacts[0].getContactGroups();
		 * </code></pre>
		 * 
		 * @returns the groups containing this contact
		 */
		getContactGroups(): ContactsApp.ContactGroup[]
		/**
		 * Gets all the custom fields for this contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the custom fields
		 * // associated with that contact
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var fields = contacts[0].getCustomFields();
		 * for (var i in fields) {
		 *   Logger.log(fields[i].getValue());
		 * }
		 * </code></pre>
		 * 
		 * @returns a list of custom fields
		 */
		getCustomFields(): ContactsApp.CustomField[]
		/**
		 * Gets all the custom fields for this contact matching a particular field.
		 * 
		 * <p>The label can be either a standard label from ContactsApp.ExtendedField or a custom label
		 * string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the custom fields
		 * // associated with that contact that are in the ContactsApp.ExtendedField.HOBBY label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var hobbies = contacts[0].getCustomFields(ContactsApp.ExtendedField.HOBBY);
		 * for (var i in hobbies) {
		 *   Logger.log(hobbies[i].getValue());
		 * }
		 * </code></pre>
		 * 
		 * @param label - the label to match, either from ContactsApp.ExtendedField or a custom string
		 * 
		 * @returns a list of custom fields
		 */
		getCustomFields(
			label: object
		): ContactsApp.CustomField[]

		/**
		 * Gets all the dates for this contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the label of the date
		 * // associated with that contact
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var dates = contacts[0].getDates();
		 * for (var i in dates) {
		 *   Logger.log(dates[i].getLabel());
		 * }
		 * </code></pre>
		 * 
		 * @returns a list of dates
		 */
		getDates(): ContactsApp.DateField[]
		/**
		 * Gets all the dates for this contact matching a particular field.
		 * 
		 * <p>The label can be either a standard label from ContactsApp.Field or a custom label string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the day of the month
		 * // associated with that contact that are in the ContactsApp.Field.BIRTHDAY label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var birthdays = contacts[0].getDates(ContactsApp.Field.BIRTHDAY);
		 * for (var i in birthdays) {
		 *   Logger.log(birthdays[i].getDay());
		 * }
		 * </code></pre>
		 * 
		 * @param label - the label to match, either from ContactsApp.Field or a custom string
		 * 
		 * @returns a list of dates
		 */
		getDates(
			label: object
		): ContactsApp.DateField[]

		/**
		 * Gets a list of the email addresses available for this Contact.
		 * 
		 * @returns a list of email addresses available for this Contact
		 */
		getEmailAddresses(): string[]
		/**
		 * Gets the email addresses of this contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the email addresses
		 * // associated with that contact
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var emails = contacts[0].getEmails();
		 * for (var i in emails) {
		 *   Logger.log(emails[i].getAddress());
		 * }
		 * </code></pre>
		 * 
		 * @returns the list of email addresses for the the contact
		 */
		getEmails(): ContactsApp.EmailField[]
		/**
		 * Gets the email addresses for this contact matching a particular field.
		 * 
		 * <p>The label can be either a standard label from ContactsApp.Field or a custom label string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the email addresses
		 * // associated with that contact that are in the ContactsApp.Field.HOME_EMAIL label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var emails = contacts[0].getEmails(ContactsApp.Field.HOME_EMAIL);
		 * for (var i in emails) {
		 *   Logger.log(emails[i].getAddress());
		 * }
		 * </code></pre>
		 * 
		 * @param label - the label to match, either from ContactsApp.Field or a custom string
		 * 
		 * @returns the list of email addresses for the the contact
		 */
		getEmails(
			label: object
		): ContactsApp.EmailField[]

		/**
		 * Gets the family name (last name) of the contact as a string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the family name of all the contacts whose names contain &quot;John&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John&#39;);
		 * for (var i in contacts) {
		 *   Logger.log(contacts[i].getFamilyName());
		 * }
		 * </code></pre>
		 * 
		 * @returns the family name of the contact
		 */
		getFamilyName(): string
		/**
		 * Gets the full name (given name and last name) of the contact as a string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the full name of all the contacts whose names contain &quot;John&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John&#39;);
		 * for (var i in contacts) {
		 *   Logger.log(contacts[i].getFullName());
		 * }
		 * </code></pre>
		 * 
		 * @returns the full name of the contact
		 */
		getFullName(): string
		/**
		 * Gets the given name (first name) of the contact as a string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the given name of all the contacts whose names contain &quot;Smith&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;Smith&#39;);
		 * for (var i in contacts) {
		 *   Logger.log(contacts[i].getGivenName());
		 * }
		 * </code></pre>
		 * 
		 * @returns the given name of the contact
		 */
		getGivenName(): string
		/**
		 * Gets the home address of this Contact, or empty string if none exists.
		 * 
		 * @returns the home address of this Contact, or empty string if none exists
		 */
		getHomeAddress(): string
		/**
		 * Gets the home fax number of this Contact or empty string if none exists.
		 * 
		 * @returns the home fax number of this Contact or empty string if none exists
		 */
		getHomeFax(): string
		/**
		 * Gets the home phone number of this Contact or empty string if none exists.
		 * 
		 * @returns the home phone number of this Contact or empty string if none exists
		 */
		getHomePhone(): string
		/**
		 * Gets all the IM addresses for this contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the IM addresses of all the contacts whose names contain &quot;John Doe&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   Logger.log(contacts[i].getIMs());
		 * }
		 * </code></pre>
		 * 
		 * @returns a list of IM addresses
		 */
		getIMs(): ContactsApp.IMField[]
		/**
		 * Gets all the IM addresses for this contact matching a particular field.
		 * 
		 * <p>The label can be either from ContactsApp.Field or a custom label string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the IM addresses
		 * // associated with that contact that are in the ContactsApp.Field.GOOGLE_TALK label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var imAddresses = contacts[0].getIMs(ContactsApp.Field.GOOGLE_TALK);
		 * for (var i in imAddresses) {
		 *   Logger.log(imAddresses[i].getAddress());
		 * }
		 * </code></pre>
		 * 
		 * @param label - the label to match, either from ContactsApp.Field or a custom string
		 * 
		 * @returns a list of IM addresses
		 */
		getIMs(
			label: object
		): ContactsApp.IMField[]

		/**
		 * Returns the unique id of this contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * var contact = ContactsApp.createContact(&#39;John&#39;, &#39;Doe&#39;, &#39;john.doe@example.com&#39;);
		 * var id = contact.getId();
		 * </code></pre>
		 * 
		 * @returns the id of this contact
		 */
		getId(): string
		/**
		 * Gets the contact's initials.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the initials of all the contacts whose names contain &quot;John Doe&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   Logger.log(contacts[i].getInitials());
		 * }
		 * </code></pre>
		 * 
		 * @returns the initials of the contact
		 */
		getInitials(): string
		/**
		 * Gets the date this contact was last updated.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the last updated date of all the contacts whose names contain
		 * // &quot;John Doe&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   Logger.log(contacts[i].getLastUpdated());
		 * }
		 * </code></pre>
		 * 
		 * @returns the date this contact was last updated
		 */
		getLastUpdated(): Date
		/**
		 * Gets the maiden name of the contact as a string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the maiden name of all the contacts whose names contain &quot;Jane&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;Jane&#39;);
		 * for (var i in contacts) {
		 *   Logger.log(contacts[i].getMaidenName());
		 * }
		 * </code></pre>
		 * 
		 * @returns the maiden name of the contact
		 */
		getMaidenName(): string
		/**
		 * Gets the middle name of the contact as a string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the middle name of all the contacts whose names contain &quot;Smith&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;Smith&#39;);
		 * for (var i in contacts) {
		 *   Logger.log(contacts[i].getMiddleName());
		 * }
		 * </code></pre>
		 * 
		 * @returns the middle name of the contact
		 */
		getMiddleName(): string
		/**
		 * Gets the mobile phone number of this Contact or empty string if none exists.
		 * 
		 * @returns the mobile phone number of this Contact or empty string if none exists
		 */
		getMobilePhone(): string
		/**
		 * Gets the nickname of the contact as a string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the nickname of all the contacts whose names contain &quot;John Doe&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   Logger.log(contacts[i].getNickname());
		 * }
		 * </code></pre>
		 * 
		 * @returns the nickname of the contact
		 */
		getNickname(): string
		/**
		 * Gets the notes associated with this contact, or an empty string if there are no notes.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the notes of all the contacts whose names contain &quot;John Doe&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   Logger.log(contacts[i].getNotes());
		 * }
		 * </code></pre>
		 * 
		 * @returns the notes associated with this contact
		 */
		getNotes(): string
		/**
		 * Gets the pager phone number of this Contact or empty string if none exists.
		 * 
		 * @returns the pager phone number of this Contact or empty string if none exists
		 */
		getPager(): string
		/**
		 * Gets all the phone numbers for this contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the phone numbers of all the contacts whose names contain &quot;John Doe&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   Logger.log(contacts[i].getPhones());
		 * }
		 * </code></pre>
		 * 
		 * @returns a list of phone numbers
		 */
		getPhones(): ContactsApp.PhoneField[]
		/**
		 * Gets all the phone numbers for this contact matching a particular field.
		 * 
		 * <p>The label can be either from ContactsApp.Field or a custom label string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the phone numbers
		 * // associated with that contact that are in the ContactsApp.Field.WORK_PHONE label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var phones = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
		 * for (var i in phones) {
		 *   Logger.log(phones[i].getPhoneNumber());
		 * }
		 * </code></pre>
		 * 
		 * @param label - the label to match, either from ContactsApp.Field or a custom string
		 * 
		 * @returns a list of phone numbers
		 */
		getPhones(
			label: object
		): ContactsApp.PhoneField[]

		/**
		 * Gets the prefix to the contact's name.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the prefix of all the contacts whose names contain &quot;John Doe&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   Logger.log(contacts[i].getPrefix());
		 * }
		 * </code></pre>
		 * 
		 * @returns the prefix of the contact's name
		 */
		getPrefix(): string
		/**
		 * Gets the primary email address of the contact as a string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the primary email address of all the contacts whose names contain
		 * // &quot;John Doe&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   Logger.log(contacts[i].getPrimaryEmail());
		 * }
		 * </code></pre>
		 * 
		 * @returns the primary email address of the contact
		 */
		getPrimaryEmail(): string
		/**
		 * Gets the short name of the contact as a string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the short name of all the contacts whose names contain &quot;Johnathan&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;Johnathan&#39;);
		 * for (var i in contacts) {
		 *   Logger.log(contacts[i].getShortName());
		 * }
		 * </code></pre>
		 * 
		 * @returns the short name of the contact
		 */
		getShortName(): string
		/**
		 * Gets the suffix to the contact's name.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the suffix of all the contacts whose names contain &quot;John Doe&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   Logger.log(contacts[i].getSuffix());
		 * }
		 * </code></pre>
		 * 
		 * @returns the suffix of the contact's name
		 */
		getSuffix(): string
		/**
		 * Gets all the URLs for this contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below logs the URLs of all the contacts whose names contain &quot;John Doe&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   Logger.log(contacts[i].getUrls());
		 * }
		 * </code></pre>
		 * 
		 * @returns a list of URLs
		 */
		getUrls(): ContactsApp.UrlField[]
		/**
		 * Gets all the URLs for this contact matching a particular field.
		 * 
		 * <p>The label can be either from ContactsApp.Field or a custom label string.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact named &quot;John Doe&quot; and logs the URLs
		 * // associated with that contact that are in the ContactsApp.Field.WORK_WEBSITE label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var urls = contacts[0].getUrls(ContactsApp.Field.WORK_WEBSITE);
		 * for (var i in urls) {
		 *   Logger.log(urls[i].getAddress());
		 * }
		 * </code></pre>
		 * 
		 * @param label - the label to match, either from ContactsApp.Field or a custom string
		 * 
		 * @returns a list of URLs
		 */
		getUrls(
			label: object
		): ContactsApp.UrlField[]

		/**
		 * Gets the user defined value associated with the given key.
		 * 
		 * @param key - the key can be any basic type (String, int, etc.)
		 * 
		 * @returns the user defined content that has been stored with this key
		 */
		getUserDefinedField(
			key: string
		): string
		/**
		 * Gets all the user defined fields for this Contact and returns them as the properties of a
		 * JavaScript Object.
		 * 
		 * @returns the user defined fields for this Contact, as properties of a JavaScript Object
		 */
		getUserDefinedFields(): object
		/**
		 * Gets the work address of this Contact, or empty string if none exists.
		 * 
		 * @returns the work address of this Contact, or empty string if none exists
		 */
		getWorkAddress(): string
		/**
		 * Gets the work fax number of this Contact or empty string if none exists.
		 * 
		 * @returns the work fax number of this Contact or empty string if none exists
		 */
		getWorkFax(): string
		/**
		 * Gets the work phone number of this Contact or empty string if none exists.
		 * 
		 * @returns the work phone number of this Contact or empty string if none exists
		 */
		getWorkPhone(): string
		/**
		 * Removes this contact from the given contact group.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below gets all the contacts named &quot;John Doe&quot; and then removes each of them from
		 * // the &quot;Work Friends&quot; contact group
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var group = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
		 * for (var i in contacts) {
		 *   contacts[i] = contacts[i].removeFromGroup(group);
		 * }
		 * </code></pre>
		 * 
		 * @param group - the contact group to remove this contact from
		 * 
		 * @returns this contact
		 */
		removeFromGroup(
			group: ContactsApp.ContactGroup
		): ContactsApp.Contact
		/**
		 * Sets the family name (last name) of the contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below changes the family name of all the contacts whose names are &quot;John Doe&quot;
		 * // to &quot;Doe-Smith&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   contacts[i].setFamilyName(&#39;Doe-Smith&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @param familyName - the new family name of the contact
		 * 
		 * @returns this contact
		 */
		setFamilyName(
			familyName: string
		): ContactsApp.Contact
		/**
		 * Sets the full name (given name and last name) of the contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below changes the full name of all the contacts whose names are &quot;John Doe&quot;
		 * // to &quot;Johnny Doe&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   contacts[i].setFullName(&#39;Johnny Doe&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @param fullName - the new full name of the contact
		 * 
		 * @returns this contact
		 */
		setFullName(
			fullName: string
		): ContactsApp.Contact
		/**
		 * Sets the given name (first name) of the contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below changes the given name of all the contacts whose names are &quot;John Doe&quot;
		 * // to &quot;Johnny&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   contacts[i].setGivenName(&#39;Johnny&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @param givenName - the new given name of the contact
		 * 
		 * @returns this contact
		 */
		setGivenName(
			givenName: string
		): ContactsApp.Contact
		/**
		 * Sets the home address of this Contact.
		 * 
		 * @param addr - the home address to set
		 */
		setHomeAddress(
			addr: string
		): void
		/**
		 * Sets the home fax number of this Contact.
		 * 
		 * @param phone - the home fax number to set
		 */
		setHomeFax(
			phone: string
		): void
		/**
		 * Sets the home phone number of this Contact.
		 * 
		 * @param phone - the home phone number to set
		 */
		setHomePhone(
			phone: string
		): void
		/**
		 * Sets the contact's initials.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below sets the initials of all the contacts whose names are &quot;Johnathan Doe&quot;
		 * // to &quot;JD&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;Johnathan Doe&#39;);
		 * for (var i in contacts) {
		 *   contacts[i].setInitials(&#39;JD&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @param initials - the new initials of the contact
		 * 
		 * @returns this contact
		 */
		setInitials(
			initials: string
		): ContactsApp.Contact
		/**
		 * Sets the maiden name of the contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below changes the maiden name of all the contacts whose names are &quot;Jane Doe&quot;
		 * // to &quot;Smith&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;Jane Doe&#39;);
		 * for (var i in contacts) {
		 *   contacts[i].setMaidenName(&#39;Smith&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @param maidenName - the new maiden name of the contact
		 * 
		 * @returns this contact
		 */
		setMaidenName(
			maidenName: string
		): ContactsApp.Contact
		/**
		 * Sets the middle name of the contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below changes the middle name of all the contacts whose names are &quot;John Doe&quot;
		 * // to &quot;Danger&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   contacts[i].setMiddleName(&#39;Danger&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @param middleName - the new middle name of the contact
		 * 
		 * @returns this contact
		 */
		setMiddleName(
			middleName: string
		): ContactsApp.Contact
		/**
		 * Sets the mobile phone number of this Contact.
		 * 
		 * @param phone - the mobile phone number to set
		 */
		setMobilePhone(
			phone: string
		): void
		/**
		 * Sets the nickname of the contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below changes the nickname of all the contacts whose names are &quot;John Doe&quot;
		 * // to &quot;JohnnyD&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   contacts[i].setNickname(&#39;JohnnyD&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @param nickname - the new nickname of the contact
		 * 
		 * @returns this contact
		 */
		setNickname(
			nickname: string
		): ContactsApp.Contact
		/**
		 * Sets the notes associated with this contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below sets the notes of all the contacts whose names are &quot;John Doe&quot;
		 * // to &quot;Met him at the hackathon&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * for (var i in contacts) {
		 *   contacts[i].setNotes(&#39;Met him at the hackathon&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @param notes - the notes to be stored for this contact
		 * 
		 * @returns this contact
		 */
		setNotes(
			notes: string
		): ContactsApp.Contact
		/**
		 * Sets the pager number of this Contact.
		 * 
		 * @param phone - the pager number to set
		 */
		setPager(
			phone: string
		): void
		/**
		 * Sets the prefix to the contact's name.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below sets the prefix of all the contacts whose names are &quot;Johnathan Doe&quot;
		 * // to &quot;Mr&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;Johnathan Doe&#39;);
		 * for (var i in contacts) {
		 *   contacts[i].setPrefix(&#39;Mr&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @param prefix - the new prefix of the contact's name
		 * 
		 * @returns this contact
		 */
		setPrefix(
			prefix: string
		): ContactsApp.Contact
		/**
		 * Sets the primary email address of this Contact.
		 * 
		 * @param primaryEmail - the primary email address to set
		 */
		setPrimaryEmail(
			primaryEmail: string
		): void
		/**
		 * Sets the short name of the contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below changes the short name of all the contacts whose names are &quot;Johnathan Doe&quot;
		 * // to &quot;John&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;Johnathan Doe&#39;);
		 * for (var i in contacts) {
		 *   contacts[i].setShortName(&#39;John&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @param shortName - the new short name of the contact
		 * 
		 * @returns this contact
		 */
		setShortName(
			shortName: string
		): ContactsApp.Contact
		/**
		 * Sets the suffix to the contact's name.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below sets the suffix of all the contacts whose names are &quot;Johnathan Doe&quot;
		 * // to &quot;Jr&quot;
		 * var contacts = ContactsApp.getContactsByName(&#39;Johnathan Doe&#39;);
		 * for (var i in contacts) {
		 *   contacts[i].setSuffix(&#39;Jr&#39;);
		 * }
		 * </code></pre>
		 * 
		 * @param suffix - the new suffix of the contact's name
		 * 
		 * @returns this contact
		 */
		setSuffix(
			suffix: string
		): ContactsApp.Contact
		/**
		 * Sets a single user defined field for this Contact, to be stored with a given key.
		 * 
		 * @param key - the key can be any basic type (String, int, etc.)
		 * @param value - the value can be any basic type (String, int, etc.)
		 */
		setUserDefinedField(
			key: string,
			value: string
		): void
		/**
		 * Sets the user defined fields for this Contact with the properties of the given Object.
		 * 
		 * @param o - an Object with one or more properties in the form {key: value}
		 */
		setUserDefinedFields(
			o: object
		): void
		/**
		 * Sets the work address of this Contact.
		 * 
		 * @param addr - the work address to set
		 */
		setWorkAddress(
			addr: string
		): void
		/**
		 * Sets the work fax number of this Contact.
		 * 
		 * @param phone - the work fax number to set
		 */
		setWorkFax(
			phone: string
		): void
		/**
		 * Sets the work phone number of this Contact.
		 * 
		 * @param phone - the work phone number to set
		 */
		setWorkPhone(
			phone: string
		): void

	}

	class ContactGroup {
		private constructor();

		/**
		 * Adds the given contact to this group
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below creates a new contact and adds it to the &quot;Work Friends&quot; contact group
		 * var contact = ContactsApp.createContact(&#39;John&#39;, &#39;Doe&#39;, &#39;john.doe@example.com&#39;);
		 * var group = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
		 * group.addContact(contact);
		 * </code></pre>
		 * 
		 * @param contact - the contact to be added to the group
		 * 
		 * @returns this contact group
		 */
		addContact(
			contact: ContactsApp.Contact
		): ContactsApp.ContactGroup
		/**
		 * Deletes this contact group.
		 * 
		 * <p>Deletes non-system groups only; system groups cannot be deleted.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact group named &quot;Work Friends&quot; and deletes it
		 * var group = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
		 * group.deleteGroup();
		 * </code></pre>
		 */
		deleteGroup(): void
		/**
		 * Gets all the contacts in this contact group.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves all the contacts in the group named &quot;Work Friends&quot;
		 * var group = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
		 * var contacts = group.getContacts();
		 * </code></pre>
		 * 
		 * @returns the contacts in this group
		 */
		getContacts(): ContactsApp.Contact[]
		/**
		 * Returns the name of this group.
		 * 
		 * @returns the name of this group
		 */
		getGroupName(): string
		/**
		 * Gets the id of this contact group.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves a contact group named &quot;Work Friends&quot; and gets its id
		 * var group = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
		 * var id = group.getId();
		 * </code></pre>
		 * 
		 * @returns the id of this group
		 */
		getId(): string
		/**
		 * Gets the name of this contact group.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below creates a new contact group and then retrieves its name
		 * var group = ContactsApp.createContactGroup(&#39;Work Friends&#39;);
		 * var name = group.getName();
		 * </code></pre>
		 * 
		 * @returns this name of this contact group
		 */
		getName(): string
		/**
		 * Gets a boolean value to determine whether this contact group is a system group (undeletable) or
		 * not.
		 * 
		 * <p>Systems groups are a set of groups that are predefined in Google Contacts, such as "My
		 * Contacts", "Family", "Coworkers", etc. The name of a system group usually contains the words
		 * "System Group".
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves two contact groups, then logs whether or not
		 * // each is a system group.
		 * var myGroup = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
		 * var systemGroup = ContactsApp.getContactGroup(&#39;System Group: Coworkers&#39;);
		 * Logger.log(myGroup.isSystemGroup()); // Returns false, if the group exists.
		 * Logger.log(systemGroup.isSystemGroup()); // Returns true.
		 * </code></pre>
		 * 
		 * @returns whether or not this contact group is a system group
		 */
		isSystemGroup(): Boolean
		/**
		 * Removes the given contact from this group
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves all the contacts named &quot;John Doe&#39; and removes them from the
		 * // &quot;Work Friends&quot; contact group
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var group = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
		 * for (var i in contacts) {
		 *   group.removeContact(contacts[i]);
		 * }
		 * </code></pre>
		 * 
		 * @param contact - the contact to be removed from the group
		 * 
		 * @returns this contact group
		 */
		removeContact(
			contact: ContactsApp.Contact
		): ContactsApp.ContactGroup
		/**
		 * Sets the name of this group.
		 * 
		 * @param name - the name to set for this group
		 */
		setGroupName(
			name: string
		): void
		/**
		 * Sets the name of this contact group.
		 * 
		 * <pre class="prettyprint"><code>
		 * // The code below retrieves the contact group named &quot;Work Friends&quot; and renames it to
		 * // &quot;Work Buddies&quot;
		 * var group = ContactsApp.getContactGroup(&#39;Work Friends&#39;);
		 * group.setName(&#39;Work Buddies&#39;);
		 * </code></pre>
		 * 
		 * @param name - the new name for the contact group
		 * 
		 * @returns this contact group
		 */
		setName(
			name: string
		): ContactsApp.ContactGroup

	}

	class CustomField {
		private constructor();

		/**
		 * Deletes this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var fields = contacts[0].getCustomFields();
		 * for (var i = 0; i &lt; fields.length; i++) {
		 *   if (fields[i].getLabel() == &#39;foo&#39;) {
		 *     fields[i].deleteCustomField();
		 *   }
		 * }
		 * </code></pre>
		 */
		deleteCustomField(): void
		/**
		 * Gets the label for this field. This may be a Field, ExtendedField, or a String.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the label for all the address fields associated with contact
		 * // &#39;John Doe&#39;. This method can be similarly called for any field that has
		 * // a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * for (var i = 0; i &lt; addressFields.length; i++) {
		 *   Logger.log(addressFields[i].getLabel());
		 * }
		 * </code></pre>
		 * 
		 * @returns the label for this field
		 */
		getLabel(): object
		/**
		 * Gets the value of the field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the value of all the custom fields for contact &#39;John Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var fields = contacts[0].getCustomFields();
		 * for (var i in fields) {
		 *   Logger.log(fields[i].getValue());
		 * }
		 * </code></pre>
		 * 
		 * @returns the value stored in the field
		 */
		getValue(): object
		/**
		 * Sets the label of this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the first custom field associated with contact &#39;John Doe&#39; to use &#39;Mail application&#39; as
		 * // a label, with &#39;Gmail&#39; as the value.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var field = contacts[0].getCustomFields()[0];
		 * field.setLabel(&#39;Mail application&#39;);
		 * field.setValue(&#39;Gmail&#39;);
		 * </code></pre>
		 * 
		 * @param field - the new standard label
		 * 
		 * @returns this field, useful for chaining
		 */
		setLabel(
			field: ContactsApp.ExtendedField
		): ContactsApp.CustomField
		/**
		 * Sets the label of this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the label to &#39;Apartment&#39; for the first address field associated
		 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
		 * // field that has a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * addressFields[0].setLabel(&#39;Apartment&#39;);
		 * </code></pre>
		 * 
		 * @param label - the new label for this field
		 * 
		 * @returns this field, useful for chaining
		 */
		setLabel(
			label: string
		): ContactsApp.CustomField

		/**
		 * Sets the value of this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the first custom field associated with contact &#39;John Doe&#39; to use &#39;Mail application&#39; as
		 * // a label, with &#39;Gmail&#39; as the value.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var field = contacts[0].getCustomFields()[0];
		 * field.setLabel(&#39;Mail application&#39;);
		 * field.setValue(&#39;Gmail&#39;);
		 * </code></pre>
		 * 
		 * @param value - the new value
		 * 
		 * @returns this field, useful for chaining
		 */
		setValue(
			value: object
		): ContactsApp.CustomField

	}

	class DateField {
		private constructor();

		/**
		 * Deletes this date.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Deletes all the dates that are set for contact &#39;John Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var dates = contacts[0].getDates();
		 * for (var i = 0; i &lt; dates.length; i++) {
		 *   dates[i].deleteDateField();
		 * }
		 * </code></pre>
		 */
		deleteDateField(): void
		/**
		 * Gets the day of the month for this date.
		 * 
		 * <p>Note: For standard JavaScript Date objects the <a
		 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay">
		 * <code>getDay()</code></a> method returns the day of the week instead.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the day of the birthday for contact &#39;John Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
		 * Logger.log(birthday.getDay());
		 * </code></pre>
		 * 
		 * @returns the day of the month
		 */
		getDay(): number
		/**
		 * Gets the label for this field. This may be a Field, ExtendedField, or a String.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the label for all the address fields associated with contact
		 * // &#39;John Doe&#39;. This method can be similarly called for any field that has
		 * // a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * for (var i = 0; i &lt; addressFields.length; i++) {
		 *   Logger.log(addressFields[i].getLabel());
		 * }
		 * </code></pre>
		 * 
		 * @returns the label for this field
		 */
		getLabel(): object
		/**
		 * Gets the month for this date.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the month of the birthday for contact &#39;John Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
		 * Logger.log(birthday.getMonth());
		 * </code></pre>
		 * 
		 * @returns the month
		 */
		getMonth(): Month
		/**
		 * Gets the year for this date.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the year of the birthday for contact &#39;John Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
		 * Logger.log(birthday.getYear());
		 * </code></pre>
		 * 
		 * @returns the year
		 */
		getYear(): number
		/**
		 * Sets the date to this day, without a year.
		 * 
		 * <p>This method only applies to date fields that don't require a year, such as birthdays.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the birthday for contact &#39;John Doe&#39; to April 1
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
		 * birthday.setDate(ContactsApp.Month.APRIL, 1);
		 * </code></pre>
		 * 
		 * @param month - the month
		 * @param day - the day
		 * 
		 * @returns this date, useful for chaining
		 */
		setDate(
			month: Month,
			day: number
		): ContactsApp.DateField
		/**
		 * Sets the date to this day.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the birthday for contact &#39;John Doe&#39; to April 1, 1980
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
		 * birthday.setDate(ContactsApp.Month.APRIL, 1, 1980);
		 * </code></pre>
		 * 
		 * @param month - the month
		 * @param day - the day
		 * @param year - the year
		 * 
		 * @returns this date, useful for chaining
		 */
		setDate(
			month: Month,
			day: number,
			year: number
		): ContactsApp.DateField

		/**
		 * Sets the label of this field, such as 'Birthday' or 'Anniversary'.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Retrieves the first date that&#39;s set for contact &#39;John Doe&#39; and re-labels
		 * // it as an anniversary
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var firstDate = contacts[0].getDates()[0];
		 * firstDate.setLabel(ContactsApp.Field.ANNIVERSARY);
		 * </code></pre>
		 * 
		 * @param label - the new standard label
		 * 
		 * @returns this field, useful for chaining
		 */
		setLabel(
			label: ContactsApp.Field
		): ContactsApp.DateField
		/**
		 * Sets the label of this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the label to &#39;Apartment&#39; for the first address field associated
		 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
		 * // field that has a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * addressFields[0].setLabel(&#39;Apartment&#39;);
		 * </code></pre>
		 * 
		 * @param label - the new label for this field
		 * 
		 * @returns this field, useful for chaining
		 */
		setLabel(
			label: string
		): ContactsApp.DateField


	}

	class EmailField {
		private constructor();

		/**
		 * Deletes this email address from the Contact.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Retrieves and deletes the work email address for contact &#39;John Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var workEmail = contacts[0].getEmails(ContactsApp.Field.WORK_EMAIL);
		 * workEmail[0].deleteEmailField();
		 * </code></pre>
		 */
		deleteEmailField(): void
		/**
		 * Get the address for this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the address for the &#39;Home Address&#39; field for contact &#39;John Doe&#39;.
		 * // Can be used similarly for other fields that contain addresses.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
		 * Logger.log(homeAddress[0].getAddress());
		 * </code></pre>
		 * 
		 * @returns the address as a string
		 */
		getAddress(): string
		/**
		 * Returns the display name for this email address.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the display name for the the work email address for contact &#39;John Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var workEmail = contacts[0].getEmails(ContactsApp.Field.WORK_EMAIL);
		 * Logger.log(workEmail[0].getDisplayName());
		 * </code></pre>
		 * 
		 * @returns the display name for this email
		 */
		getDisplayName(): string
		/**
		 * Gets the label for this field. This may be a Field, ExtendedField, or a String.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the label for all the address fields associated with contact
		 * // &#39;John Doe&#39;. This method can be similarly called for any field that has
		 * // a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * for (var i = 0; i &lt; addressFields.length; i++) {
		 *   Logger.log(addressFields[i].getLabel());
		 * }
		 * </code></pre>
		 * 
		 * @returns the label for this field
		 */
		getLabel(): object
		/**
		 * Gets whether this is the primary field value.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs whether or not the first address field associated with contact
		 * // &#39;John Doe&#39; is labeled as primary. This method can be similarly called
		 * // for any field.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * Logger.log(addressFields[0].isPrimary());
		 * </code></pre>
		 * 
		 * @returns whether this is primary
		 */
		isPrimary(): Boolean
		/**
		 * Sets the address of this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the address for the &#39;Home Address&#39; field for contact &#39;John Doe&#39;.
		 * // Can be used similarly for other fields that contain addresses.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
		 * homeAddress[0].setAddress(&#39;123 Main St, Raleigh, NC, 27601&#39;);
		 * </code></pre>
		 * 
		 * @param address - the new address
		 * 
		 * @returns this field, useful for chaining
		 */
		setAddress(
			address: string
		): ContactsApp.EmailField
		/**
		 * Sets this field to primary.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the the first address field associated with contact &#39;John Doe&#39;
		 * // as primary. This method can be similarly called for any field.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * addressFields[0].setAsPrimary();
		 * </code></pre>
		 * 
		 * @returns this FieldValue for chaining
		 */
		setAsPrimary(): ContactsApp.EmailField
		/**
		 * Sets the display name for this email address.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the display name to &#39;Doe, John&#39; for the the work email address for contact &#39;John Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var workEmail = contacts[0].getEmails(ContactsApp.Field.WORK_EMAIL);
		 * workEmail[0].setDisplayName(&#39;Doe, John&#39;);
		 * </code></pre>
		 * 
		 * @param name - the new display name for this email address
		 * 
		 * @returns this email field, useful for chaining
		 */
		setDisplayName(
			name: string
		): ContactsApp.EmailField
		/**
		 * Sets the label of this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the label to &#39;Work&#39; for the first address field associated
		 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
		 * // field that has a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
		 * </code></pre>
		 * 
		 * @param field - the new standard label
		 * 
		 * @returns this FieldValue for chaining
		 */
		setLabel(
			field: ContactsApp.Field
		): ContactsApp.EmailField
		/**
		 * Sets the label of this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the label to &#39;Apartment&#39; for the first address field associated
		 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
		 * // field that has a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * addressFields[0].setLabel(&#39;Apartment&#39;);
		 * </code></pre>
		 * 
		 * @param label - the new label for this field
		 * 
		 * @returns this field, useful for chaining
		 */
		setLabel(
			label: string
		): ContactsApp.EmailField


	}

	enum ExtendedField {
		/**
		 * the contact's billing information
		 */
		BILLING_INFORMATION = "BILLING_INFORMATION",
		/**
		 * the contact's directory server
		 */
		DIRECTORY_SERVER = "DIRECTORY_SERVER",
		/**
		 * the contact's gender
		 */
		GENDER = "GENDER",
		/**
		 * the contact's hobby
		 */
		HOBBY = "HOBBY",
		/**
		 * the contact's home information
		 */
		HOME = "HOME",
		/**
		 * the contact's language
		 */
		LANGUAGE = "LANGUAGE",
		/**
		 * the contact's mileage
		 */
		MILEAGE = "MILEAGE",
		/**
		 * the contact's other information
		 */
		OTHER = "OTHER",
		/**
		 * the contact's priority
		 */
		PRIORITY = "PRIORITY",
		/**
		 * the contact's sensitivity
		 */
		SENSITIVITY = "SENSITIVITY",
		/**
		 * the contact's user information
		 */
		USER = "USER",
		/**
		 * the contact's work information
		 */
		WORK = "WORK",
	}

	enum Field {
		/**
		 * the contact's AIM identifier
		 */
		AIM = "AIM",
		/**
		 * the contact's anniversary
		 */
		ANNIVERSARY = "ANNIVERSARY",
		/**
		 * the contact's assistant's phone number
		 */
		ASSISTANT_PHONE = "ASSISTANT_PHONE",
		/**
		 * the contact's birthday
		 */
		BIRTHDAY = "BIRTHDAY",
		/**
		 * the contact's blog URL
		 */
		BLOG = "BLOG",
		/**
		 * the contact's callback phone number
		 */
		CALLBACK_PHONE = "CALLBACK_PHONE",
		/**
		 * the contact's company
		 */
		COMPANY = "COMPANY",
		/**
		 * the contact's family (last) name
		 */
		FAMILY_NAME = "FAMILY_NAME",
		/**
		 * the contact's FTP URL
		 */
		FTP = "FTP",
		/**
		 * the contact's full name
		 */
		FULL_NAME = "FULL_NAME",
		/**
		 * the contact's given (first) name
		 */
		GIVEN_NAME = "GIVEN_NAME",
		/**
		 * the contact's Google Talk identifier
		 */
		GOOGLE_TALK = "GOOGLE_TALK",
		/**
		 * the contact's Google Voice number
		 */
		GOOGLE_VOICE = "GOOGLE_VOICE",
		/**
		 * the contact's home address
		 */
		HOME_ADDRESS = "HOME_ADDRESS",
		/**
		 * the contact's home email address
		 */
		HOME_EMAIL = "HOME_EMAIL",
		/**
		 * the contact's home fax number
		 */
		HOME_FAX = "HOME_FAX",
		/**
		 * the contact's home page URL
		 */
		HOME_PAGE = "HOME_PAGE",
		/**
		 * the contact's home phone number
		 */
		HOME_PHONE = "HOME_PHONE",
		/**
		 * the contact's home website URL
		 */
		HOME_WEBSITE = "HOME_WEBSITE",
		/**
		 * the contact's ICQ identifier
		 */
		ICQ = "ICQ",
		/**
		 * the contact's initials
		 */
		INITIALS = "INITIALS",
		/**
		 * the contact's Jabber identifier
		 */
		JABBER = "JABBER",
		/**
		 * the contact's job title
		 */
		JOB_TITLE = "JOB_TITLE",
		/**
		 * the contact's maiden name
		 */
		MAIDEN_NAME = "MAIDEN_NAME",
		/**
		 * the contact's main phone number
		 */
		MAIN_PHONE = "MAIN_PHONE",
		/**
		 * the contact's middle name
		 */
		MIDDLE_NAME = "MIDDLE_NAME",
		/**
		 * the contact's mobile phone number
		 */
		MOBILE_PHONE = "MOBILE_PHONE",
		/**
		 * the contact's MSN identifier
		 */
		MSN = "MSN",
		/**
		 * the contact's nickname
		 */
		NICKNAME = "NICKNAME",
		/**
		 * notes about the contact
		 */
		NOTES = "NOTES",
		/**
		 * the contact's pager number
		 */
		PAGER = "PAGER",
		/**
		 * the prefix for the contact's name
		 */
		PREFIX = "PREFIX",
		/**
		 * the contact's profile URL
		 */
		PROFILE = "PROFILE",
		/**
		 * the contact's QQ identifer
		 */
		QQ = "QQ",
		/**
		 * the contact's short name
		 */
		SHORT_NAME = "SHORT_NAME",
		/**
		 * the contact's Skype identifier
		 */
		SKYPE = "SKYPE",
		/**
		 * the suffix for the contact's name
		 */
		SUFFIX = "SUFFIX",
		/**
		 * the contact's work address
		 */
		WORK_ADDRESS = "WORK_ADDRESS",
		/**
		 * the contact's work email address
		 */
		WORK_EMAIL = "WORK_EMAIL",
		/**
		 * the contact's work fax number
		 */
		WORK_FAX = "WORK_FAX",
		/**
		 * the contact's work phone number
		 */
		WORK_PHONE = "WORK_PHONE",
		/**
		 * the contact's work website URL
		 */
		WORK_WEBSITE = "WORK_WEBSITE",
		/**
		 * the contact's Yahoo instant messaging identifier
		 */
		YAHOO = "YAHOO",
	}

	enum Gender {
		/**
		 * female gender
		 */
		FEMALE = "FEMALE",
		/**
		 * male gender
		 */
		MALE = "MALE",
	}

	class IMField {
		private constructor();

		/**
		 * Deletes this instant messaging field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Retrieves and deletes the AIM instant messaging field for contact &#39;John
		 * // Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var imFields = contacts[0].getIMs(ContactsApp.Field.AIM);
		 * imFields[0].deleteIMField();
		 * </code></pre>
		 */
		deleteIMField(): void
		/**
		 * Get the address for this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the address for the &#39;Home Address&#39; field for contact &#39;John Doe&#39;.
		 * // Can be used similarly for other fields that contain addresses.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
		 * Logger.log(homeAddress[0].getAddress());
		 * </code></pre>
		 * 
		 * @returns the address as a string
		 */
		getAddress(): string
		/**
		 * Gets the label for this field. This may be a Field, ExtendedField, or a String.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the label for all the address fields associated with contact
		 * // &#39;John Doe&#39;. This method can be similarly called for any field that has
		 * // a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * for (var i = 0; i &lt; addressFields.length; i++) {
		 *   Logger.log(addressFields[i].getLabel());
		 * }
		 * </code></pre>
		 * 
		 * @returns the label for this field
		 */
		getLabel(): object
		/**
		 * Gets whether this is the primary field value.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs whether or not the first address field associated with contact
		 * // &#39;John Doe&#39; is labeled as primary. This method can be similarly called
		 * // for any field.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * Logger.log(addressFields[0].isPrimary());
		 * </code></pre>
		 * 
		 * @returns whether this is primary
		 */
		isPrimary(): Boolean
		/**
		 * Sets the address of this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the address for the &#39;Home Address&#39; field for contact &#39;John Doe&#39;.
		 * // Can be used similarly for other fields that contain addresses.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
		 * homeAddress[0].setAddress(&#39;123 Main St, Raleigh, NC, 27601&#39;);
		 * </code></pre>
		 * 
		 * @param address - the new address
		 * 
		 * @returns this field, useful for chaining
		 */
		setAddress(
			address: string
		): ContactsApp.IMField
		/**
		 * Sets this field to primary.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the the first address field associated with contact &#39;John Doe&#39;
		 * // as primary. This method can be similarly called for any field.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * addressFields[0].setAsPrimary();
		 * </code></pre>
		 * 
		 * @returns this FieldValue for chaining
		 */
		setAsPrimary(): ContactsApp.IMField
		/**
		 * Sets the label of this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the label to &#39;Work&#39; for the first address field associated
		 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
		 * // field that has a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
		 * </code></pre>
		 * 
		 * @param field - the new standard label
		 * 
		 * @returns this FieldValue for chaining
		 */
		setLabel(
			field: ContactsApp.Field
		): ContactsApp.IMField
		/**
		 * Sets the label of this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the label to &#39;Apartment&#39; for the first address field associated
		 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
		 * // field that has a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * addressFields[0].setLabel(&#39;Apartment&#39;);
		 * </code></pre>
		 * 
		 * @param label - the new label for this field
		 * 
		 * @returns this field, useful for chaining
		 */
		setLabel(
			label: string
		): ContactsApp.IMField


	}

	class PhoneField {
		private constructor();

		/**
		 * Deletes this phone number field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Retrieves and deletes the work phone number field for contact &#39;John
		 * // Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var phoneFields = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
		 * phoneFields[0].deletePhoneField();
		 * </code></pre>
		 */
		deletePhoneField(): void
		/**
		 * Gets the label for this field. This may be a Field, ExtendedField, or a String.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the label for all the address fields associated with contact
		 * // &#39;John Doe&#39;. This method can be similarly called for any field that has
		 * // a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * for (var i = 0; i &lt; addressFields.length; i++) {
		 *   Logger.log(addressFields[i].getLabel());
		 * }
		 * </code></pre>
		 * 
		 * @returns the label for this field
		 */
		getLabel(): object
		/**
		 * Get the phone number for this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the work phone number for contact &#39;John Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var phoneFields = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
		 * Logger.log(phoneFields[0].getPhoneNumber());
		 * </code></pre>
		 * 
		 * @returns the number as a string
		 */
		getPhoneNumber(): string
		/**
		 * Gets whether this is the primary field value.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs whether or not the first address field associated with contact
		 * // &#39;John Doe&#39; is labeled as primary. This method can be similarly called
		 * // for any field.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * Logger.log(addressFields[0].isPrimary());
		 * </code></pre>
		 * 
		 * @returns whether this is primary
		 */
		isPrimary(): Boolean
		/**
		 * Sets this field to primary.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the the first address field associated with contact &#39;John Doe&#39;
		 * // as primary. This method can be similarly called for any field.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * addressFields[0].setAsPrimary();
		 * </code></pre>
		 * 
		 * @returns this FieldValue for chaining
		 */
		setAsPrimary(): ContactsApp.PhoneField
		/**
		 * Sets the label of this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the label to &#39;Work&#39; for the first address field associated
		 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
		 * // field that has a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
		 * </code></pre>
		 * 
		 * @param field - the new standard label
		 * 
		 * @returns this FieldValue for chaining
		 */
		setLabel(
			field: ContactsApp.Field
		): ContactsApp.PhoneField
		/**
		 * Sets the label of this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the label to &#39;Apartment&#39; for the first address field associated
		 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
		 * // field that has a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * addressFields[0].setLabel(&#39;Apartment&#39;);
		 * </code></pre>
		 * 
		 * @param label - the new label for this field
		 * 
		 * @returns this field, useful for chaining
		 */
		setLabel(
			label: string
		): ContactsApp.PhoneField

		/**
		 * Sets the phone number for this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the work phone number for contact &#39;John Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var phoneFields = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
		 * phoneFields[0].setPhoneNumber(&#39;212-555-1234&#39;);
		 * </code></pre>
		 * 
		 * @param number - the new number
		 * 
		 * @returns this field, useful for chaining
		 */
		setPhoneNumber(
			number: string
		): ContactsApp.PhoneField

	}

	enum Priority {
		/**
		 * high priority
		 */
		HIGH = "HIGH",
		/**
		 * low priority
		 */
		LOW = "LOW",
		/**
		 * normal priority
		 */
		NORMAL = "NORMAL",
	}

	enum Sensitivity {
		/**
		 * confidential sensitivity
		 */
		CONFIDENTIAL = "CONFIDENTIAL",
		/**
		 * normal sensitivity
		 */
		NORMAL = "NORMAL",
		/**
		 * personal sensitivity
		 */
		PERSONAL = "PERSONAL",
		/**
		 * private sensitivity
		 */
		PRIVATE = "PRIVATE",
	}

	class UrlField {
		private constructor();

		/**
		 * Deletes this URL field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Retrieves and deletes the Blog URL field for contact &#39;John
		 * // Doe&#39;
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var urlFields = contacts[0].getUrls(ContactsApp.Field.BLOG);
		 * urlFields[0].deleteUrlField();
		 * </code></pre>
		 */
		deleteUrlField(): void
		/**
		 * Get the address for this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the address for the &#39;Home Address&#39; field for contact &#39;John Doe&#39;.
		 * // Can be used similarly for other fields that contain addresses.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
		 * Logger.log(homeAddress[0].getAddress());
		 * </code></pre>
		 * 
		 * @returns the address as a string
		 */
		getAddress(): string
		/**
		 * Gets the label for this field. This may be a Field, ExtendedField, or a String.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs the label for all the address fields associated with contact
		 * // &#39;John Doe&#39;. This method can be similarly called for any field that has
		 * // a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * for (var i = 0; i &lt; addressFields.length; i++) {
		 *   Logger.log(addressFields[i].getLabel());
		 * }
		 * </code></pre>
		 * 
		 * @returns the label for this field
		 */
		getLabel(): object
		/**
		 * Gets whether this is the primary field value.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs whether or not the first address field associated with contact
		 * // &#39;John Doe&#39; is labeled as primary. This method can be similarly called
		 * // for any field.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * Logger.log(addressFields[0].isPrimary());
		 * </code></pre>
		 * 
		 * @returns whether this is primary
		 */
		isPrimary(): Boolean
		/**
		 * Sets the address of this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the address for the &#39;Home Address&#39; field for contact &#39;John Doe&#39;.
		 * // Can be used similarly for other fields that contain addresses.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
		 * homeAddress[0].setAddress(&#39;123 Main St, Raleigh, NC, 27601&#39;);
		 * </code></pre>
		 * 
		 * @param address - the new address
		 * 
		 * @returns this field, useful for chaining
		 */
		setAddress(
			address: string
		): ContactsApp.UrlField
		/**
		 * Sets this field to primary.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the the first address field associated with contact &#39;John Doe&#39;
		 * // as primary. This method can be similarly called for any field.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * addressFields[0].setAsPrimary();
		 * </code></pre>
		 * 
		 * @returns this FieldValue for chaining
		 */
		setAsPrimary(): ContactsApp.UrlField
		/**
		 * Sets the label of this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the label to &#39;Work&#39; for the first address field associated
		 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
		 * // field that has a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
		 * </code></pre>
		 * 
		 * @param field - the new standard label
		 * 
		 * @returns this FieldValue for chaining
		 */
		setLabel(
			field: ContactsApp.Field
		): ContactsApp.UrlField
		/**
		 * Sets the label of this field.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Sets the label to &#39;Apartment&#39; for the first address field associated
		 * // with contact &#39;John Doe&#39;. This method can be similarly called for any
		 * // field that has a label.
		 * var contacts = ContactsApp.getContactsByName(&#39;John Doe&#39;);
		 * var addressFields = contacts[0].getAddresses();
		 * addressFields[0].setLabel(&#39;Apartment&#39;);
		 * </code></pre>
		 * 
		 * @param label - the new label for this field
		 * 
		 * @returns this field, useful for chaining
		 */
		setLabel(
			label: string
		): ContactsApp.UrlField


	}

}
