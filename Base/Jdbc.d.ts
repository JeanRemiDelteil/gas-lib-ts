/** Module: Jdbc */

type Jdbc = typeof Jdbc;
declare namespace Jdbc {
	/**
	 * Attempts to establish a connection to the given Google Cloud SQL URL.
	 * 
	 * @param url - A database URL of the form <code>jdbc:google:mysql://subname</code>.
	 * 
	 * @returns A JdbcConnection object.
	 */
	function getCloudSqlConnection(
		url: string
	): Jdbc.JdbcConnection
	/**
	 * Attempts to establish a connection to the given Google Cloud SQL URL.
	 * 
	 * @param url - A database URL of the form <code>jdbc:google:mysql://subname</code>.
	 * @param info - Optional JavaScript object specifying advanced parameters as defined below.
	 * 
	 * @returns A JdbcConnection object.
	 */
	function getCloudSqlConnection(
		url: string,
		info: object
	): Jdbc.JdbcConnection
	/**
	 * Attempts to establish a connection to the given Google Cloud SQL URL.
	 * 
	 * @param url - A database URL of the form <code>jdbc:google:mysql://subname</code>.
	 * @param userName - The username to pass to the database.
	 * @param password - The user's password.
	 * 
	 * @returns A JdbcConnection object.
	 */
	function getCloudSqlConnection(
		url: string,
		userName: string,
		password: string
	): Jdbc.JdbcConnection

	/**
	 * Attempts to establish a connection to the given database URL.
	 * 
	 * <pre class="prettyprint"><code>
	 * var conn = Jdbc.getConnection(&#39;jdbc:mysql://yoursqlserver.example.com:3306/database_name&#39;);
	 * </code></pre>
	 * 
	 * @param url - A database URL of the form <code>jdbc:subprotocol:subname</code>.
	 * 
	 * @returns A JdbcConnection object.
	 */
	function getConnection(
		url: string
	): Jdbc.JdbcConnection
	/**
	 * Attempts to establish a connection to the given database URL.
	 * 
	 * <pre class="prettyprint"><code>
	 * var conn = Jdbc.getConnection(&#39;jdbc:mysql://yoursqlserver.example.com:3306/database_name&#39;,
	 *                               {user: &#39;username&#39;, password: &#39;password&#39;});
	 * </code></pre>
	 * 
	 * @param url - A database URL of the form <code>jdbc:subprotocol:subname</code>.
	 * @param info - Optional JavaScript object specifying advanced parameters as defined below.
	 * 
	 * @returns A JdbcConnection object.
	 */
	function getConnection(
		url: string,
		info: object
	): Jdbc.JdbcConnection
	/**
	 * Attempts to establish a connection to the given database using a username and password.
	 * 
	 * <pre class="prettyprint"><code>
	 * var conn = Jdbc.getConnection(&#39;jdbc:mysql://yoursqlserver.example.com:3306/database_name&#39;,
	 *                               &#39;username&#39;, &#39;password&#39;);
	 * </code></pre>
	 * 
	 * @param url - A database URL of the form <code>jdbc:subprotocol:subname</code>.
	 * @param userName - The username to pass to the database.
	 * @param password - The user's password.
	 * 
	 * @returns A JdbcConnection object.
	 */
	function getConnection(
		url: string,
		userName: string,
		password: string
	): Jdbc.JdbcConnection

	/**
	 * Create a date from milliseconds since epoch.
	 * 
	 * @param milliseconds - Milliseconds since epoch.
	 * 
	 * @returns A JdbcDate object.
	 */
	function newDate(
		milliseconds: number
	): Jdbc.JdbcDate
	/**
	 * Create a time from milliseconds since epoch.
	 * 
	 * @param milliseconds - Milliseconds since epoch.
	 * 
	 * @returns A JdbcTime object.
	 */
	function newTime(
		milliseconds: number
	): Jdbc.JdbcTime
	/**
	 * Create a timestamp from milliseconds since epoch.
	 * 
	 * @param milliseconds - Milliseconds since epoch.
	 * 
	 * @returns A JdbcTimestamp object.
	 */
	function newTimestamp(
		milliseconds: number
	): Jdbc.JdbcTimestamp
	/**
	 * Create a date by parsing the SQL date string.
	 * 
	 * @param date - A string containing a SQL date string.
	 * 
	 * @returns A JdbcDate object.
	 */
	function parseDate(
		date: string
	): Jdbc.JdbcDate
	/**
	 * Create a time by parsing the SQL time string.
	 * 
	 * @param time - A string containing a SQL time string.
	 * 
	 * @returns A JdbcTime object.
	 */
	function parseTime(
		time: string
	): Jdbc.JdbcTime
	/**
	 * Create a timestamp by parsing the SQL timestamp string.
	 * 
	 * @param timestamp - A string containing a SQL timestamp string.
	 * 
	 * @returns A JdbcTimestamp object.
	 */
	function parseTimestamp(
		timestamp: string
	): Jdbc.JdbcTimestamp

	class JdbcArray {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="http://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#free()"><code>
		 * java.sql.Array#free()</code></a>.
		 */
		free(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getArray()"><code>
		 * java.sql.Array#getArray()</code></a>
		 * 
		 * @returns An object containing the ordered elements of the SQL array value.
		 */
		getArray(): object
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getArray(long,%20int)">
		 * <code>java.sql.Array#getArray(long, int)</code></a>.
		 * 
		 * @param index - The array index of the first element to retrieve, where the first element has an
		 *     index of 1.
		 * @param count - The number of successive SQL array elements to retrieve.
		 * 
		 * @returns An object containing up to the specified number of consecutive SQL array elements.
		 */
		getArray(
			index: number,
			count: number
		): object

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getBaseType()"><code>
		 * java.sql.Array#getBaseType()</code></a>.
		 * 
		 * @returns The <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">type
		 *     code</a> for the elements in this array.
		 */
		getBaseType(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getBaseTypeName()"><code>
		 * java.sql.Array#getBaseTypeName()</code></a>.
		 * 
		 * @returns The database-specific name for the built-in base type or else the fully-qualified SQL
		 *     type name for a base type that is a UDT.
		 */
		getBaseTypeName(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getResultSet()"><code>
		 * java.sql.Array#getResultSet()</code></a>.
		 * 
		 * @returns The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set.html'>JdbcResultSet</a></code> containing one row for each of the elements in the array
		 *     designated by this Array object, with the rows in ascending order based on the indices.
		 */
		getResultSet(): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getResultSet(long,%20int)">
		 * <code>java.sql.Array#getResultSet(long, int)</code></a>.
		 * 
		 * @param index - The array index of the first element to retrieve, where the first element has an
		 *     index of 1.
		 * @param count - The number of successive SQL array elements to retrieve.
		 * 
		 * @returns A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set.html'>JdbcResultSet</a></code> containing up to the specified number of consecutive SQL array
		 *     elements.
		 */
		getResultSet(
			index: number,
			count: number
		): Jdbc.JdbcResultSet


	}

	class JdbcBlob {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#free()"><code>
		 * java.sql.Blob#free()</code></a>.
		 */
		free(): void
		/**
		 * Gets the content of this JdbcBlob as an Apps Script blob.
		 * 
		 * @returns A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/../base/blob.html'>Blob</a></code> that can be used directly by other Apps Script APIs.
		 */
		getAppsScriptBlob(): Blob
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
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#getBytes(long,%20int)">
		 * <code>java.sql.Blob#getBytes(long, int)</code></a>.
		 * 
		 * @param position - The ordinal position of the first byte in the blob value to be extracted; the
		 *     first byte is at position 1.
		 * @param length - The number of consecutive bytes to copy; the value for length must be zero or
		 *     greater.
		 * 
		 * @returns A byte array containing up to the specified number of consecutive bytes from the blob
		 *     value.
		 */
		getBytes(
			position: number,
			length: number
		): number[]
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#length()"><code>
		 * java.sql.Blob#length()</code></a>.
		 * 
		 * @returns The number of bytes in this blob.
		 */
		length(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#position(byte[],%20long)">
		 * <code>java.sql.Blob#position(byte[], long)</code></a>.
		 * 
		 * @param pattern - The byte array to search for.
		 * @param start - The position in the blob value where to beging searching; the first position is 1.
		 * 
		 * @returns The position at which the specified pattern begins, or else -1 if the pattern is not
		 *     found.
		 */
		position(
			pattern: number[],
			start: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#position(java.sql.Blob,%20long)">
		 * <code>java.sql.Blob#position(blob, long)</code></a>.
		 * 
		 * @param pattern - The <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html'>JdbcBlob</a></code> indicating the value to search for.
		 * @param start - The position in the blob value where to beging searching; the first position is 1.
		 * 
		 * @returns The position at which the specified pattern begins, or else -1 if the pattern is not
		 *     found.
		 */
		position(
			pattern: Jdbc.JdbcBlob,
			start: number
		): number

		/**
		 * Convenience method for writing a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html'>JdbcBlob</a></code> to this blob.
		 * 
		 * @param position - The position in the blob at which to start writing; the first position is 1.
		 * @param blobSource - The source of data to write to this blob.
		 * 
		 * @returns The number of bytes written.
		 */
		setBytes(
			position: number,
			blobSource: BlobSource
		): number
		/**
		 * Convenience method for writing a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html'>JdbcBlob</a></code> to this blob.
		 * 
		 * @param position - The position in the blob at which to start writing; the first position is 1.
		 * @param blobSource - The source of data to write to this blob.
		 * @param offset - The offset into the provided byte array at which to start reading bytes to set.
		 * @param length - The number of bytes to write to the blob.
		 * 
		 * @returns The number of bytes written.
		 */
		setBytes(
			position: number,
			blobSource: BlobSource,
			offset: number,
			length: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#setBytes(long,%20byte[])">
		 * <code>java.sql.Blob#setBytes(long, byte[])</code></a>.
		 * 
		 * @param position - The position in the blob at which to start writing; the first position is 1.
		 * @param bytes - The array of bytes to write to this blob.
		 * 
		 * @returns The number of bytes written.
		 */
		setBytes(
			position: number,
			bytes: number[]
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#setBytes(long,%20byte[],%20int,%20int)">
		 * <code>java.sql.Blob#setBytes(long, byte[], int, int)</code></a>.
		 * 
		 * @param position - The position in the blob at which to start writing; the first position is 1.
		 * @param bytes - The array of bytes to write to this blob.
		 * @param offset - The offset into the provided byte array at which to start reading bytes to set.
		 * @param length - The number of bytes to write to the blob.
		 * 
		 * @returns The number of bytes written.
		 */
		setBytes(
			position: number,
			bytes: number[],
			offset: number,
			length: number
		): number

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#truncate(long)"><code>
		 * java.sql.Blob#truncate(long)</code></a>.
		 * 
		 * @param length - The size (in bytes) of this blob after truncation.
		 */
		truncate(
			length: number
		): void

	}

	class JdbcCallableStatement {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#addBatch()">
		 * <code>java.sql.PreparedStatement#addBatch()</code></a>.
		 */
		addBatch(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#addBatch(java.lang.String)">
		 * <code>java.sql.Statement#addBatch(String)</code></a>.
		 * 
		 * @param sql - The SQL command to add to this statement, typically an SQL <code>INSERT</code> or <code>UPDATE</code>.
		 */
		addBatch(
			sql: string
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#cancel()"><code>
		 * java.sql.Statement#cancel()</code></a>.
		 */
		cancel(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearBatch()"><code>
		 * java.sql.Statement#clearBatch()</code></a>.
		 */
		clearBatch(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#clearParameters()">
		 * <code>java.sql.PreparedStatement#clearParameters()</code></a>.
		 */
		clearParameters(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearWarnings()"><code>
		 * java.sql.Statement#clearWarnings()</code></a>.
		 */
		clearWarnings(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#close()"><code>
		 * java.sql.Statement#close()</code></a>.
		 */
		close(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#execute()">
		 * <code>java.sql.PreparedStatement#execute()</code></a>.
		 * 
		 * @returns <code>true</code> if the first result is a result set; <code>false</code> if the first result is
		 *     an update count or there is no result.
		 */
		execute(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String)">
		 * <code>java.sql.Statement#execute(String)</code></a>.
		 * 
		 * @param sql - The SQL statement to execute.
		 * 
		 * @returns <code>true</code> if the first result is a result set; <code>false</code> if it is an update
		 *     count or if there are no results.
		 */
		execute(
			sql: string
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20int)">
		 * <code>java.sql.Statement#execute(String, int)</code></a>.
		 * 
		 * @param sql - The SQL statement to execute.
		 * @param autoGeneratedKeys - A flag that indicates whether auto-generated keys are made available
		 *     for future retrieval; either <code>Jdbc.Statement.RETURN_GENERATED_KEYS</code> or <code>Jdbc.Statement.NO_GENERATED_KEYS</code>.
		 * 
		 * @returns <code>true</code> if the first result is a result set; <code>false</code> if it is an update
		 *     count or if there are no results.
		 */
		execute(
			sql: string,
			autoGeneratedKeys: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20int[])">
		 * <code>java.sql.Statement#execute(String, int[])</code></a>.
		 * 
		 * @param sql - The SQL statement to execute.
		 * @param columnIndexes - The column indices in the whose auto-generated keys are made available for
		 *     future retrieval.
		 * 
		 * @returns <code>true</code> if the first result is a result set; <code>false</code> if it is an update
		 *     count or if there are no results.
		 */
		execute(
			sql: string,
			columnIndexes: number[]
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20java.lang.String[])">
		 * <code>java.sql.Statement#execute(String, String[])</code></a>.
		 * 
		 * @param sql - The SQL statement to execute.
		 * @param columnNames - The names of columns in the whose auto-generated keys are made available for
		 *     future retrieval.
		 * 
		 * @returns <code>true</code> if the first result is a result set; <code>false</code> if it is an update
		 *     count or if there are no results.
		 */
		execute(
			sql: string,
			columnNames: string[]
		): Boolean

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeBatch()"><code>
		 * java.sql.Statement#executeBatch()</code></a>.
		 * 
		 * @returns The update counts for each command in the batch, using the same order in which commands
		 *     were added to the batch.
		 */
		executeBatch(): number[]
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#executeQuery()">
		 * <code>java.sql.PreparedStatement#executeQuery()</code></a>.
		 * 
		 * @returns A result set that contains the data produced by the query.
		 */
		executeQuery(): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeQuery(java.lang.String)">
		 * <code>java.sql.Statement#executeQuery(String)</code></a>.
		 * 
		 * @param sql - The SQL statement to execute, typically a static <code>SELECT</code>.
		 * 
		 * @returns A result set containing the results of the execution. This is never <code>null</code>.
		 */
		executeQuery(
			sql: string
		): Jdbc.JdbcResultSet

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#executeUpdate()">
		 * <code>java.sql.PreparedStatement#executeUpdate()</code></a>.
		 * 
		 * @returns The row count ofr SQL Data Manipulation Language statements, or 0 for SQL statements
		 *     that return nothing.
		 */
		executeUpdate(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String)">
		 * <code>java.sql.Statement#executeUpdate(String)</code></a>.
		 * 
		 * @param sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
		 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
		 *     statement).
		 * 
		 * @returns Either the row count for for Data Manipulation Language statements, or 0 for statements
		 *     that return nothing.
		 */
		executeUpdate(
			sql: string
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20int)">
		 * <code>java.sql.Statement#executeUpdate(String, int)</code></a>.
		 * 
		 * @param sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
		 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
		 *     statement).
		 * @param autoGeneratedKeys - A flag that indicates whether auto-generated keys are made available
		 *     for future retrieval; either <code>Jdbc.Statement.RETURN_GENERATED_KEYS</code> or <code>Jdbc.Statement.NO_GENERATED_KEYS</code>.
		 * 
		 * @returns Either the row count for for Data Manipulation Language statements, or 0 for statements
		 *     that return nothing.
		 */
		executeUpdate(
			sql: string,
			autoGeneratedKeys: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20int[])">
		 * <code>java.sql.Statement#executeUpdate(String, int[])</code></a>.
		 * 
		 * @param sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
		 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
		 *     statement).
		 * @param columnIndexes - The column indices in the whose auto-generated keys are made available for
		 *     future retrieval.
		 * 
		 * @returns Either the row count for for Data Manipulation Language statements, or 0 for statements
		 *     that return nothing.
		 */
		executeUpdate(
			sql: string,
			columnIndexes: number[]
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20java.lang.String[])">
		 * <code>java.sql.Statement#executeUpdate(String, String[])</code></a>.
		 * 
		 * @param sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
		 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
		 *     statement).
		 * @param columnNames - The names of columns in the whose auto-generated keys are made available for
		 *     future retrieval.
		 * 
		 * @returns Either the row count for for Data Manipulation Language statements, or 0 for statements
		 *     that return nothing.
		 */
		executeUpdate(
			sql: string,
			columnNames: string[]
		): number

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getArray(int)">
		 * <code>java.sql.CallableStatement#getArray(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns The value of a <code>ARRAY</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getArray(
			parameterIndex: number
		): Jdbc.JdbcArray
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getArray(java.lang.String)">
		 * <code>java.sql.CallableStatement#getArray(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>ARRAY</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getArray(
			parameterName: string
		): Jdbc.JdbcArray

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBigDecimal(int)">
		 * <code>java.sql.CallableStatement#getBigDecimal(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns The value of a <code>NUMERIC</code> parameter in full precision. Returns <code>null</code> if the
		 *     value is <code>null</code>.
		 */
		getBigDecimal(
			parameterIndex: number
		): BigNumber
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBigDecimal(java.lang.String)">
		 * <code>java.sql.CallableStatement#getBigDecimal(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>NUMERIC</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getBigDecimal(
			parameterName: string
		): BigNumber

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBlob(int)">
		 * <code>java.sql.CallableStatement#getBlob(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns The value of a <code>BLOB</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getBlob(
			parameterIndex: number
		): Jdbc.JdbcBlob
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBlob(java.lang.String)">
		 * <code>java.sql.CallableStatement#getBlob(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>BLOB</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getBlob(
			parameterName: string
		): Jdbc.JdbcBlob

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBoolean(int)">
		 * <code>java.sql.CallableStatement#getBoolean(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns The value of a <code>BIT</code> or <code>BOOLEAN</code> parameter. Returns <code>false</code> if the
		 *     value is <code>null</code>.
		 */
		getBoolean(
			parameterIndex: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBoolean(java.lang.String)">
		 * <code>java.sql.CallableStatement#getBoolean(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>BIT</code> or <code>BOOLEAN</code> parameter. Returns <code>false</code> if the
		 *     value is <code>null</code>.
		 */
		getBoolean(
			parameterName: string
		): Boolean

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getByte(int)">
		 * <code>java.sql.CallableStatement#getByte(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns The value of a <code>TINYINT</code> parameter. Returns 0 if the value is <code>null</code>.
		 */
		getByte(
			parameterIndex: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getByte(java.lang.String)">
		 * <code>java.sql.CallableStatement#getByte(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>TINYINT</code> parameter. Returns 0 if the value is <code>null</code>.
		 */
		getByte(
			parameterName: string
		): number

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBytes(int)">
		 * <code>java.sql.CallableStatement#getBytes(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns The value of a <code>BINARY</code> or <code>VARBINARY</code> parameter. Returns <code>null</code> if
		 *     the value is <code>null</code>.
		 */
		getBytes(
			parameterIndex: number
		): number[]
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBytes(java.lang.String)">
		 * <code>java.sql.CallableStatement#getBytes(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>BINARY</code> or <code>VARBINARY</code> parameter. Returns <code>null</code> if
		 *     the value is <code>null</code>.
		 */
		getBytes(
			parameterName: string
		): number[]

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getClob(int)">
		 * <code>java.sql.CallableStatement#getClob(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns The value of a <code>CLOB</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getClob(
			parameterIndex: number
		): Jdbc.JdbcClob
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getClob(java.lang.String)">
		 * <code>java.sql.CallableStatement#getClob(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>CLOB</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getClob(
			parameterName: string
		): Jdbc.JdbcClob

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getConnection()"><code>
		 * java.sql.Statement#getConnection()</code></a>.
		 * 
		 * @returns The connection that produced this statement.
		 */
		getConnection(): Jdbc.JdbcConnection
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDate(int)">
		 * <code>java.sql.CallableStatement#getDate(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns The value of a <code>DATE</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getDate(
			parameterIndex: number
		): Jdbc.JdbcDate
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDate(int,%20java.util.Calendar)">
		 * <code>java.sql.CallableStatement#getDate(int, Calendar)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 * 
		 * @returns The value of a <code>DATE</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getDate(
			parameterIndex: number,
			timeZone: string
		): Jdbc.JdbcDate
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDate(java.lang.String)">
		 * <code>java.sql.CallableStatement#getDate(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>DATE</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getDate(
			parameterName: string
		): Jdbc.JdbcDate
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDate(java.lang.String,%20java.util.Calendar)">
		 * <code>java.sql.CallableStatement#getDate(String, Calendar)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 * 
		 * @returns The value of a <code>DATE</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getDate(
			parameterName: string,
			timeZone: string
		): Jdbc.JdbcDate

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDouble(int)">
		 * <code>java.sql.CallableStatement#getDouble(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns The value of a <code>DOUBLE</code> parameter. Returns 0 if the value is <code>null</code>.
		 */
		getDouble(
			parameterIndex: number
		): Number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDouble(java.lang.String)">
		 * <code>java.sql.CallableStatement#getDouble(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>DOUBLE</code> parameter. Returns 0 if the value is <code>null</code>.
		 */
		getDouble(
			parameterName: string
		): Number

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchDirection()">
		 * <code>java.sql.Statement#getFetchDirection()</code></a>.
		 * 
		 * @returns The default direction for result sets generated by this statement, which is either
		 *     <code>Jdbc.ResultSet.FETCH_FORWARD</code> or <code>Jdbc.ResultSet.FETCH_REVERSE</code>.
		 */
		getFetchDirection(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchSize()"><code>
		 * java.sql.Statement#getFetchSize()</code></a>.
		 * 
		 * @returns The default row fetch size for result sets generated from this statement.
		 */
		getFetchSize(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getFloat(int)">
		 * <code>java.sql.CallableStatement#getFloat(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns The value of a <code>FLOAT</code> parameter. Returns 0 if the value is <code>null</code>.
		 */
		getFloat(
			parameterIndex: number
		): Number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getFloat(java.lang.String)">
		 * <code>java.sql.CallableStatement#getFloat(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>FLOAT</code> parameter. Returns 0 if the value is <code>null</code>.
		 */
		getFloat(
			parameterName: string
		): Number

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getGeneratedKeys()">
		 * <code>java.sql.Statement#getGeneratedKeys()</code></a>.
		 * 
		 * @returns A result set containing the auto-generated keys generated by the execution of this
		 *     statement.
		 */
		getGeneratedKeys(): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getInt(int)">
		 * <code>java.sql.CallableStatement#getInt(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns The value of a <code>INTEGER</code> parameter. Returns 0 if the value is <code>null</code>.
		 */
		getInt(
			parameterIndex: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getInt(java.lang.String)">
		 * <code>java.sql.CallableStatement#getInt(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>INTEGER</code> parameter. Returns 0 if the value is <code>null</code>.
		 */
		getInt(
			parameterName: string
		): number

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getLong(int)">
		 * <code>java.sql.CallableStatement#getLong(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns The value of a <code>BIGINT</code> parameter. Returns 0 if the value is <code>null</code>.
		 */
		getLong(
			parameterIndex: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getLong(java.lang.String)">
		 * <code>java.sql.CallableStatement#getLong(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>BIGINT</code> parameter. Returns 0 if the value is <code>null</code>.
		 */
		getLong(
			parameterName: string
		): number

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxFieldSize()">
		 * <code>java.sql.Statement#getMaxFieldSize()</code></a>.
		 * 
		 * @returns The current column byte size limit for columns storing character and binary values; a
		 *     value of zero indictates no limit.
		 */
		getMaxFieldSize(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxRows()"><code>
		 * java.sql.Statement#getMaxRows()</code></a>.
		 * 
		 * @returns The current maximum number of rows for a result set produced by this statement; a value
		 *     of 0 indicates no limit.
		 */
		getMaxRows(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#getMetaData()">
		 * <code>java.sql.PreparedStatement#getMetaData()</code></a>.
		 * 
		 * @returns The description of a result set's columns, or <code>NULL</code> if this metadata is
		 *     unavailable.
		 */
		getMetaData(): Jdbc.JdbcResultSetMetaData
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults()">
		 * <code>java.sql.Statement#getMoreResults()</code></a>.
		 * 
		 * @returns <code>true</code> if the next result is a result set; <code>false</code> otherwise.
		 */
		getMoreResults(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults(int)">
		 * <code>java.sql.Statement#getMoreResults(int)</code></a>.
		 * 
		 * @param current - A flag that indicates what happens to current result sets when retrieved. This
		 *     value is one of <code>Jdbc.Statement.CLOSE_CURRENT_RESULT</code>, <code>Jdbc.Statement.KEEP_CURRENT_RESULT</code>, or <code>Jdbc.Statement.CLOSE_ALL_RESULTS</code>.
		 * 
		 * @returns <code>true</code> if the next result is a result set; <code>false</code> otherwise.
		 */
		getMoreResults(
			current: number
		): Boolean

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getNClob(int)">
		 * <code>java.sql.CallableStatement#getNClob(int)</code></a>.
		 * 
		 * @param parameterIndex - An index indicating which paramater to register (the first parameter is
		 *     1, the second is 2, and so on).
		 * 
		 * @returns The value of a <code>NCLOB</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getNClob(
			parameterIndex: number
		): Jdbc.JdbcClob
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getNClob(java.lang.String)">
		 * <code>java.sql.CallableStatement#getNClob(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>NCLOB</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getNClob(
			parameterName: string
		): Jdbc.JdbcClob

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getNString(int)">
		 * <code>java.sql.CallableStatement#getNString(int)</code></a>.
		 * 
		 * @param parameterIndex - An index indicating which paramater to register (the first parameter is
		 *     1, the second is 2, and so on).
		 * 
		 * @returns A string that maps a <code>NCHAR</code>, <code>NVARCHAR</code>, or <code>LONGNVARCHAR</code> value.
		 */
		getNString(
			parameterIndex: number
		): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getNString(java.lang.String)">
		 * <code>java.sql.CallableStatement#getNString(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns A string that maps a <code>NCHAR</code>, <code>NVARCHAR</code>, or <code>LONGNVARCHAR</code> value.
		 */
		getNString(
			parameterName: string
		): string

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getObject(int)">
		 * <code>java.sql.CallableStatement#getObject(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns An object holding the parameter value.
		 */
		getObject(
			parameterIndex: number
		): object
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getObject(java.lang.String)">
		 * <code>java.sql.CallableStatement#getObject(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns An object holding the parameter value.
		 */
		getObject(
			parameterName: string
		): object

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#getParameterMetaData()">
		 * <code>java.sql.PreparedStatement#getParameterMetaData()</code></a>.
		 * 
		 * @returns The parameter metadata, including the number, types, and properties for each parameter.
		 */
		getParameterMetaData(): Jdbc.JdbcParameterMetaData
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getQueryTimeout()">
		 * <code>java.sql.Statement#getQueryTimeout()</code></a>.
		 * 
		 * @returns The current query timeout in seconds; a value of zero indicates no timeout.
		 */
		getQueryTimeout(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getRef(int)">
		 * <code>java.sql.CallableStatement#getRef(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns The value of a <code>REF</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getRef(
			parameterIndex: number
		): Jdbc.JdbcRef
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getRef(java.lang.String)">
		 * <code>java.sql.CallableStatement#getRef(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>REF</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getRef(
			parameterName: string
		): Jdbc.JdbcRef

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSet()"><code>
		 * java.sql.Statement#getResultSet()</code></a>.
		 * 
		 * @returns The current result set, or <code>null</code> if the result is an update count or there are
		 *     no more results.
		 */
		getResultSet(): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetConcurrency()">
		 * <code>java.sql.Statement#getResultSetConcurrency()</code></a>.
		 * 
		 * @returns The result set concurrency for result sets generated from this statement, which is
		 *     either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code> or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
		 */
		getResultSetConcurrency(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetHoldability()">
		 * <code>java.sql.Statement#getResultSetHoldability()</code></a>.
		 * 
		 * @returns The result set holdability, which is either <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
		 */
		getResultSetHoldability(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetType()">
		 * <code>java.sql.Statement#getResultSetType()</code></a>.
		 * 
		 * @returns The result set type for result sets generated from this statement, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or
		 *     <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
		 */
		getResultSetType(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getRowId(int)">
		 * <code>java.sql.CallableStatement#getRowId(int)</code></a>.
		 * 
		 * @param parameterIndex - An index indicating which paramater to register (the first parameter is
		 *     1, the second is 2, and so on).
		 * 
		 * @returns The <code>ROWID</code> value. Returns <code>null</code> if the parameter contains an SQL <code>NULL</code>.
		 */
		getRowId(
			parameterIndex: number
		): Jdbc.JdbcRowId
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getRowId(java.lang.String)">
		 * <code>java.sql.CallableStatement#getRowId(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The <code>ROWID</code> value. Returns <code>null</code> if the parameter contains an SQL <code>NULL</code>.
		 */
		getRowId(
			parameterName: string
		): Jdbc.JdbcRowId

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getSQLXML(int)">
		 * <code>java.sql.CallableStatement#getSQLXML(int)</code></a>.
		 * 
		 * @param parameterIndex - An index indicating which paramater to register (the first parameter is
		 *     1, the second is 2, and so on).
		 * 
		 * @returns A SQLXML object that maps to an SQL XML value.
		 */
		getSQLXML(
			parameterIndex: number
		): Jdbc.JdbcSQLXML
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getSQLXML(java.lang.String)">
		 * <code>java.sql.CallableStatement#getSQLXML(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns A SQLXML object that maps to an SQL XML value.
		 */
		getSQLXML(
			parameterName: string
		): Jdbc.JdbcSQLXML

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getShort(int)">
		 * <code>java.sql.CallableStatement#getShort(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns The value of a <code>SMALLINT</code> parameter. Returns 0 if the value is <code>null</code>.
		 */
		getShort(
			parameterIndex: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getShort(java.lang.String)">
		 * <code>java.sql.CallableStatement#getShort(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>SMALLINT</code> parameter. Returns 0 if the value is <code>null</code>.
		 */
		getShort(
			parameterName: string
		): number

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getString(int)">
		 * <code>java.sql.CallableStatement#getString(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns The value of a <code>CHAR</code>, <code>VARCHAR</code>, or <code>LONGVARCHAR</code> parameter.
		 */
		getString(
			parameterIndex: number
		): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getString(java.lang.String)">
		 * <code>java.sql.CallableStatement#getString(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>CHAR</code>, <code>VARCHAR</code>, or <code>LONGVARCHAR</code> parameter. Returns
		 *     <code>null</code> if the value is <code>null</code>.
		 */
		getString(
			parameterName: string
		): string

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTime(int)">
		 * <code>java.sql.CallableStatement#getTime(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns The value of a <code>TIME</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getTime(
			parameterIndex: number
		): Jdbc.JdbcTime
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTime(int,%20java.util.Calendar)">
		 * <code>java.sql.CallableStatement#getTime(int, Calendar)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 * 
		 * @returns The value of a <code>TIME</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getTime(
			parameterIndex: number,
			timeZone: string
		): Jdbc.JdbcTime
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTime(java.lang.String)">
		 * <code>java.sql.CallableStatement#getTime(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>TIME</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getTime(
			parameterName: string
		): Jdbc.JdbcTime
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTime(java.lang.String,%20java.util.Calendar)">
		 * <code>java.sql.CallableStatement#getTime(String, Calendar)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 * 
		 * @returns The value of a <code>TIME</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getTime(
			parameterName: string,
			timeZone: string
		): Jdbc.JdbcTime

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTimestamp(int)">
		 * <code>java.sql.CallableStatement#getTimestamp(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns The value of a <code>TIMESTAMP</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getTimestamp(
			parameterIndex: number
		): Jdbc.JdbcTimestamp
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTimestamp(int,%20java.util.Calendar)">
		 * <code>java.sql.CallableStatement#getTimestamp(int, Calendar)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 * 
		 * @returns The value of a <code>TIMESTAMP</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getTimestamp(
			parameterIndex: number,
			timeZone: string
		): Jdbc.JdbcTimestamp
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTimestamp(java.lang.String)">
		 * <code>java.sql.CallableStatement#getTimestamp(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>TIMESTAMP</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getTimestamp(
			parameterName: string
		): Jdbc.JdbcTimestamp
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTimestamp(java.lang.String,%20java.util.Calendar)">
		 * <code>java.sql.CallableStatement#getTimestamp(String, Calendar)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 * 
		 * @returns The value of a <code>TIMESTAMP</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getTimestamp(
			parameterName: string,
			timeZone: string
		): Jdbc.JdbcTimestamp

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getURL(int)">
		 * <code>java.sql.CallableStatement#getURL(int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * 
		 * @returns The value of a <code>DATALINK</code> parameter as a string.
		 */
		getURL(
			parameterIndex: number
		): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getURL(java.lang.String)">
		 * <code>java.sql.CallableStatement#getURL(String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter.
		 * 
		 * @returns The value of a <code>DATALINK</code> parameter. Returns <code>null</code> if the value is <code>null</code>.
		 */
		getURL(
			parameterName: string
		): string

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getUpdateCount()">
		 * <code>java.sql.Statement#getUpdateCount()</code></a>.
		 * 
		 * @returns The current result as an update count, or -1 if the current result is a result set or
		 *     if there are no more results.
		 */
		getUpdateCount(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getWarnings()"><code>
		 * java.sql.Statement#getWarnings()</code></a>.
		 * 
		 * @returns The current set of warnings, or <code>null</code> if there are no warnings.
		 */
		getWarnings(): string[]
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isClosed()"><code>
		 * java.sql.Statement#isClosed()</code></a>.
		 * 
		 * @returns <code>true</code> if this statement is closed; <code>false</code> otherwise.
		 */
		isClosed(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isPoolable()"><code>
		 * java.sql.Statement#isPoolable()</code></a>.
		 * 
		 * @returns <code>true</code> if this statement is poolable; <code>false</code> otherwise.
		 */
		isPoolable(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(int,%20int)">
		 * <code>java.sql.CallableStatement#registerOutParameter(int, int)</code></a>.
		 * 
		 * @param parameterIndex - An index indicating which paramater to register (the first parameter is
		 *     1, the second is 2, and so on).
		 * @param sqlType - The JDBC <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">type code</a> to
		 *     register. If the parameter is of JDBC type <code>NUMERIC</code> or <code>DECIMAL</code>,
		 *     use <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement.html#registerOutParameter(Integer,Integer,Integer)'>registerOutParameter(parameterIndex, sqlType, scale)</a></code> instead.
		 */
		registerOutParameter(
			parameterIndex: number,
			sqlType: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(int,%20int,%20int)">
		 * <code>java.sql.CallableStatement#registerOutParameter(int, int, int)</code></a>.
		 * 
		 * @param parameterIndex - An index indicating which paramater to register (the first parameter is
		 *     1, the second is 2, and so on).
		 * @param sqlType - The JDBC <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">type code</a> to
		 *     register.
		 * @param scale - The desired number of digits to the right of the decimal point (must be zero or
		 *     greater).
		 */
		registerOutParameter(
			parameterIndex: number,
			sqlType: number,
			scale: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(int,%20int,%20java.lang.String)">
		 * <code>java.sql.CallableStatement#registerOutParameter(int, int, String)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to retrieve (the first parameter is 1, the
		 *     second is 2, and so on).
		 * @param sqlType - A <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">type
		 *     code</a> value.
		 * @param typeName - The fully-qualified name of an SQL structured type.
		 */
		registerOutParameter(
			parameterIndex: number,
			sqlType: number,
			typeName: string
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(java.lang.String,%20int)">
		 * <code>java.sql.CallableStatement#registerOutParameter(String, int)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to be registered.
		 * @param sqlType - A <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">type
		 *     code</a> value.
		 */
		registerOutParameter(
			parameterName: string,
			sqlType: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(java.lang.String,%20int,%20int)">
		 * <code>java.sql.CallableStatement#registerOutParameter(String, int, int)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to be registered.
		 * @param sqlType - A <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">type
		 *     code</a> value.
		 * @param scale - The desired number of digits to the right of the decimal point, which must be zero
		 *     or greater.
		 */
		registerOutParameter(
			parameterName: string,
			sqlType: number,
			scale: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(java.lang.String,%20int,%20java.lang.String)">
		 * <code>java.sql.CallableStatement#registerOutParameter(String, int, String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to be registered.
		 * @param sqlType - A <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">type
		 *     code</a> value.
		 * @param typeName - The fully-qualified name of an SQL structured type.
		 */
		registerOutParameter(
			parameterName: string,
			sqlType: number,
			typeName: string
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setArray(int,%20java.sql.Array)">
		 * <code>java.sql.PreparedStatement#setArray(int, Array)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setArray(
			parameterIndex: number,
			x: Jdbc.JdbcArray
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBigDecimal(int,%20java.math.BigDecimal)">
		 * <code>java.sql.PreparedStatement#setBigDecimal(int, BigDecimal)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setBigDecimal(
			parameterIndex: number,
			x: BigNumber
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setBigDecimal(java.lang.String,%20java.math.BigDecimal)">
		 * <code>java.sql.CallableStatement#setBigDecimal(String, BigDecimal)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The parameter value to set.
		 */
		setBigDecimal(
			parameterName: string,
			x: BigNumber
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBlob(int,%20java.sql.Blob)">
		 * <code>java.sql.PreparedStatement#setBlob(int, Clob)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setBlob(
			parameterIndex: number,
			x: Jdbc.JdbcBlob
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setBlob(java.lang.String,%20java.sql.Blob)">
		 * <code>java.sql.CallableStatement#setBlob(String, Blob)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - A blob that maps to an SQL <code>BLOB</code> value.
		 */
		setBlob(
			parameterName: string,
			x: Jdbc.JdbcBlob
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBoolean(int,%20boolean)">
		 * <code>java.sql.PreparedStatement#setBoolean(int, boolean)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setBoolean(
			parameterIndex: number,
			x: Boolean
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setBoolean(java.lang.String,%20boolean)">
		 * <code>java.sql.CallableStatement#setBoolean(String, boolean)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The parameter value to set.
		 */
		setBoolean(
			parameterName: string,
			x: Boolean
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setByte(int,%20byte)">
		 * <code>java.sql.PreparedStatement#setByte(int, byte)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setByte(
			parameterIndex: number,
			x: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setByte(java.lang.String,%20byte)">
		 * <code>java.sql.CallableStatement#setByte(String, byte)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The parameter value to set.
		 */
		setByte(
			parameterName: string,
			x: number
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBytes(int,%20byte[])">
		 * <code>java.sql.PreparedStatement#setBytes(int, byte[])</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setBytes(
			parameterIndex: number,
			x: number[]
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setBytes(java.lang.String,%20byte[])">
		 * <code>java.sql.CallableStatement#setBytes(String, byte[])</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The parameter value to set.
		 */
		setBytes(
			parameterName: string,
			x: number[]
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setClob(int,%20java.sql.Clob)">
		 * <code>java.sql.PreparedStatement#setClob(int, Clob)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setClob(
			parameterIndex: number,
			x: Jdbc.JdbcClob
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setClob(java.lang.String,%20java.sql.Clob)">
		 * <code>java.sql.CallableStatement#setBlob(String, Clob)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - A clob that maps to an SQL <code>CLOB</code> value.
		 */
		setClob(
			parameterName: string,
			x: Jdbc.JdbcClob
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setCursorName(java.lang.String)">
		 * <code>java.sql.Statement#setCursorName(String)</code></a>.
		 * 
		 * @param name - The new cursor name, which must be unique within a connection.
		 */
		setCursorName(
			name: string
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDate(int,%20java.sql.Date)">
		 * <code>java.sql.PreparedStatement#setDate(int, Date)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setDate(
			parameterIndex: number,
			x: Jdbc.JdbcDate
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDate(int,%20java.sql.Date,%20java.util.Calendar)">
		 * <code>java.sql.PreparedStatement#setDate(int, Date, Calendar)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 */
		setDate(
			parameterIndex: number,
			x: Jdbc.JdbcDate,
			timeZone: string
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setDate(java.lang.String,%20java.sql.Date)">
		 * <code>java.sql.CallableStatement#setDate(String, Date)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The parameter value to set.
		 */
		setDate(
			parameterName: string,
			x: Jdbc.JdbcDate
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setDate(java.lang.String,%20java.sql.Date,%20java.util.Calendar)">
		 * <code>java.sql.CallableStatement#setDate(String, Date, Calendar)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The parameter value to set.
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 */
		setDate(
			parameterName: string,
			x: Jdbc.JdbcDate,
			timeZone: string
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDouble(int,%20double)">
		 * <code>java.sql.PreparedStatement#setDouble(int, double)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setDouble(
			parameterIndex: number,
			x: Number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setDouble(java.lang.String,%20double)">
		 * <code>java.sql.CallableStatement#setDouble(String, double)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The parameter value to set.
		 */
		setDouble(
			parameterName: string,
			x: Number
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setEscapeProcessing(boolean)">
		 * <code>java.sql.Statement#setEscapeProcessing(boolean)</code></a>.
		 * 
		 * @param enable - If <code>true</code>, escape processing is enabled; otherwise it is disabled.
		 */
		setEscapeProcessing(
			enable: Boolean
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchDirection(int)">
		 * <code>java.sql.Statement#setFetchDirection(int)</code></a>.
		 * 
		 * @param direction - The specified direction to set, which is either <code>Jdbc.ResultSet.FETCH_FORWARD</code> or <code>Jdbc.ResultSet.FETCH_REVERSE</code>.
		 */
		setFetchDirection(
			direction: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchSize(int)">
		 * <code>java.sql.Statement#setFetchSize(int)</code></a>.
		 * 
		 * @param rows - The number of rows to fetch.
		 */
		setFetchSize(
			rows: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setFloat(int,%20float)">
		 * <code>java.sql.PreparedStatement#setFloat(int, float)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setFloat(
			parameterIndex: number,
			x: Number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setFloat(java.lang.String,%20float)">
		 * <code>java.sql.CallableStatement#setFloat(String, float)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The parameter value to set.
		 */
		setFloat(
			parameterName: string,
			x: Number
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setInt(int,%20int)">
		 * <code>java.sql.PreparedStatement#setInt(int, int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setInt(
			parameterIndex: number,
			x: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setInt(java.lang.String,%20int)">
		 * <code>java.sql.CallableStatement#setInt(String, int)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The parameter value to set.
		 */
		setInt(
			parameterName: string,
			x: number
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setLong(int,%20long)">
		 * <code>java.sql.PreparedStatement#setLong(int, long)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setLong(
			parameterIndex: number,
			x: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setLong(java.lang.String,%20long)">
		 * <code>java.sql.CallableStatement#setLong(String, long)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The parameter value to set.
		 */
		setLong(
			parameterName: string,
			x: number
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxFieldSize(int)">
		 * <code>java.sql.Statement#setMaxFieldSize(int)</code></a>.
		 * 
		 * @param max - The new column byte size limit; a value of zero indicates no limit.
		 */
		setMaxFieldSize(
			max: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxRows(int)"><code>
		 * java.sql.Statement#setMaxRows(int)</code></a>.
		 * 
		 * @param max - The maximum number of rows a result set generated by this statement can have. A
		 *     value of 0 indicates no limit.
		 */
		setMaxRows(
			max: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNClob(int,%20java.sql.NClob)">
		 * <code>java.sql.PreparedStatement#setNClob(int, NClob)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setNClob(
			parameterIndex: number,
			x: Jdbc.JdbcClob
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setNClob(java.lang.String,%20java.sql.NClob)">
		 * <code>java.sql.CallableStatement#setNClob(String, NClob)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param value - The parameter value to set.
		 */
		setNClob(
			parameterName: string,
			value: Jdbc.JdbcClob
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNString(int,%20java.lang.String)">
		 * <code>java.sql.PreparedStatement#setNString(int, String)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setNString(
			parameterIndex: number,
			x: string
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setNString(java.lang.String,%20java.lang.String)">
		 * <code>java.sql.CallableStatement#setNString(String, String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param value - The parameter value to set.
		 */
		setNString(
			parameterName: string,
			value: string
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNull(int,%20int)">
		 * <code>java.sql.PreparedStatement#setNull(int, int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param sqlType - The <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL
		 *     type</a> of the specified parameter.
		 */
		setNull(
			parameterIndex: number,
			sqlType: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNull(int,%20int,%20java.lang.String)">
		 * <code>java.sql.PreparedStatement#setNull(int, int, String)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param sqlType - The <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL
		 *     type</a> of the specified parameter.
		 * @param typeName - The fully-qualifed name of an SQL user-defined type. Ignored if the parameter
		 *     isn't a user-defined type or <code>REF</code>.
		 */
		setNull(
			parameterIndex: number,
			sqlType: number,
			typeName: string
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setNull(java.lang.String,%20int)">
		 * <code>java.sql.CallableStatement#setNull(String, int)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param sqlType - The SQL <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">
		 *     type code</a>.
		 */
		setNull(
			parameterName: string,
			sqlType: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setNull(java.lang.String,%20int,%20java.lang.String)">
		 * <code>java.sql.CallableStatement#setNull(String, int, String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param sqlType - The <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL
		 *     type</a>.
		 * @param typeName - The fully-qualified name of an SQL user-defined type; ignored if the parameter
		 *     is not a user-defined type or SQL <code>REF</code> value.
		 */
		setNull(
			parameterName: string,
			sqlType: number,
			typeName: string
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int,%20java.lang.Object)">
		 * <code>java.sql.PreparedStatement#setObject(int, Object)</code></a>.
		 * 
		 * @param index - The index of the parameter to set (the first parameter is 1, the second is 2, and
		 *     so on).
		 * @param x - The object containing the value to set the parameter to.
		 */
		setObject(
			index: number,
			x: object
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int,%20java.lang.Object,%20int)">
		 * <code>java.sql.PreparedStatement#setObject(int, Object, int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The object containing the value to set the parameter to.
		 * @param targetSqlType - The <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL type</a> to send
		 *     to the database.
		 */
		setObject(
			parameterIndex: number,
			x: object,
			targetSqlType: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int,%20java.lang.Object,%20int,%20int)">
		 * <code>java.sql.PreparedStatement#setObject(int, Object, int, int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The object containing the value to set the parameter to.
		 * @param targetSqlType - The <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL type</a> to send
		 *     to the database. The scale argument may further qualify this type.
		 * @param scaleOrLength - The number of digits after the decimal for <code>DECIMAL</code> or <code>NUMERIC</code> types, or the length of data for <code>InputStream</code> or <code>Reader</code> types.
		 *     Ignored for all other types.
		 */
		setObject(
			parameterIndex: number,
			x: object,
			targetSqlType: number,
			scaleOrLength: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setObject(java.lang.String,%20java.lang.Object)">
		 * <code>java.sql.CallableStatement#setObject(String, Object)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The object containing the value to set.
		 */
		setObject(
			parameterName: string,
			x: object
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setObject(java.lang.String,%20java.lang.Object,%20int)">
		 * <code>java.sql.CallableStatement#setObject(String, Object, int)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The object containing the value to set.
		 * @param targetSqlType - The <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL type</a> sent to
		 *     the database.
		 */
		setObject(
			parameterName: string,
			x: object,
			targetSqlType: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setObject(java.lang.String,%20java.lang.Object,%20int,%20int)">
		 * <code>java.sql.CallableStatement#setObject(String, Object, int, int)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The object containing the value to set.
		 * @param targetSqlType - The <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL type</a> sent to
		 *     the database. The scale parameter may further qualify this type.
		 * @param scale - The number of digits after the decimal point for <code>DECIMAL</code> and <code>NUMERIC</code> types. Ignored for all other types.
		 */
		setObject(
			parameterName: string,
			x: object,
			targetSqlType: number,
			scale: number
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setPoolable(boolean)">
		 * <code>java.sql.Statement#setPoolable(boolean)</code></a>.
		 * 
		 * @param poolable - If <code>true</code>, requests that this statement be pooled; otherwise requests it
		 *     not be pooled.
		 */
		setPoolable(
			poolable: Boolean
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setQueryTimeout(int)">
		 * <code>java.sql.Statement#setQueryTimeout(int)</code></a>.
		 * 
		 * @param seconds - The new query timeout in seconds; a value of 0 indicates no timeout.
		 */
		setQueryTimeout(
			seconds: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setRef(int,%20java.sql.Ref)">
		 * <code>java.sql.PreparedStatement#setRef(int, Ref)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The SQL <code>REF</code> value to set.
		 */
		setRef(
			parameterIndex: number,
			x: Jdbc.JdbcRef
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setRowId(int,%20java.sql.RowId)">
		 * <code>java.sql.PreparedStatement#setRowId(int, RowId)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setRowId(
			parameterIndex: number,
			x: Jdbc.JdbcRowId
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setRowId(java.lang.String,%20java.sql.RowId)">
		 * <code>java.sql.CallableStatement#setRowId(String, RowId)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The parameter value to set.
		 */
		setRowId(
			parameterName: string,
			x: Jdbc.JdbcRowId
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setSQLXML(int,%20java.sql.SQLXML)">
		 * <code>java.sql.PreparedStatement#setSQLXML(int, SQLXML)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setSQLXML(
			parameterIndex: number,
			x: Jdbc.JdbcSQLXML
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setSQLXML(java.lang.String,%20java.sql.SQLXML)">
		 * <code>java.sql.CallableStatement#setSQLXML(String, SQLXML)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param xmlObject - A SQLXML object that maps to an SQL XML value.
		 */
		setSQLXML(
			parameterName: string,
			xmlObject: Jdbc.JdbcSQLXML
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setShort(int,%20short)">
		 * <code>java.sql.PreparedStatement#setShort(int, short)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setShort(
			parameterIndex: number,
			x: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setShort(java.lang.String,%20short)">
		 * <code>java.sql.CallableStatement#setShort(String, short)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The parameter value to set.
		 */
		setShort(
			parameterName: string,
			x: number
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setString(int,%20java.lang.String)">
		 * <code>java.sql.PreparedStatement#setString(int, String)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setString(
			parameterIndex: number,
			x: string
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setString(java.lang.String,%20java.lang.String)">
		 * <code>java.sql.CallableStatement#setString(String, String)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The parameter value to set.
		 */
		setString(
			parameterName: string,
			x: string
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTime(int,%20java.sql.Time)">
		 * <code>java.sql.PreparedStatement#setTime(int, Time)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setTime(
			parameterIndex: number,
			x: Jdbc.JdbcTime
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTime(int,%20java.sql.Time,%20java.util.Calendar)">
		 * <code>java.sql.PreparedStatement#setTime(int, Time, Calendar)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 */
		setTime(
			parameterIndex: number,
			x: Jdbc.JdbcTime,
			timeZone: string
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setTime(java.lang.String,%20java.sql.Time)">
		 * <code>java.sql.CallableStatement#setTime(String, Time)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The parameter value to set.
		 */
		setTime(
			parameterName: string,
			x: Jdbc.JdbcTime
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setTime(java.lang.String,%20java.sql.Time,%20java.util.Calendar)">
		 * <code>java.sql.CallableStatement#setTime(String, Time, Calendar)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The parameter value to set.
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 */
		setTime(
			parameterName: string,
			x: Jdbc.JdbcTime,
			timeZone: string
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTimestamp(int,%20java.sql.Timestamp)">
		 * <code>java.sql.PreparedStatement#setTimestamp(int, Timestamp)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setTimestamp(
			parameterIndex: number,
			x: Jdbc.JdbcTimestamp
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTimestamp(int,%20java.sql.Timestamp,%20java.util.Calendar)">
		 * <code>java.sql.PreparedStatement#setTimestamp(int, Timestamp, Calendar)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 */
		setTimestamp(
			parameterIndex: number,
			x: Jdbc.JdbcTimestamp,
			timeZone: string
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setTimestamp(java.lang.String,%20java.sql.Timestamp)">
		 * <code>java.sql.CallableStatement#setTimestamp(String, Timestamp)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The parameter value to set.
		 */
		setTimestamp(
			parameterName: string,
			x: Jdbc.JdbcTimestamp
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setTimestamp(java.lang.String,%20java.sql.Timestamp,%20java.util.Calendar)">
		 * <code>java.sql.CallableStatement#setTimestamp(String, Timestamp, Calendar)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param x - The parameter value to set.
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 */
		setTimestamp(
			parameterName: string,
			x: Jdbc.JdbcTimestamp,
			timeZone: string
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setURL(int,%20java.net.URL)">
		 * <code>java.sql.PreparedStatement#setURL(int, URL)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setURL(
			parameterIndex: number,
			x: string
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setURL(java.lang.String,%20java.net.URL)">
		 * <code>java.sql.CallableStatement#setURL(String, URL)</code></a>.
		 * 
		 * @param parameterName - The name of the parameter to set.
		 * @param val - The parameter value to set.
		 */
		setURL(
			parameterName: string,
			val: string
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#wasNull()">
		 * <code>java.sql.CallableStatement#wasNull()</code></a>.
		 * 
		 * @returns <code>true</code> if the last parameter read was <code>null</code>; returns <code>false</code>
		 *     otherwise.
		 */
		wasNull(): Boolean

	}

	class JdbcClob {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#free()"><code>
		 * java.sql.Clob#truncate(long)</code></a>.
		 */
		free(): void
		/**
		 * Gets the content of this JdbcClob as an Apps Script blob.
		 * 
		 * @returns A <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/../base/blob.html'>Blob</a></code> that can be used directly by other Apps Script APIs.
		 */
		getAppsScriptBlob(): Blob
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
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#getSubString(long,%20int)">
		 * <code>java.sql.Clob#getSubString(long, int)</code></a>.
		 * 
		 * @param position - The index of the first character of the substring to extract. The first
		 *     character is at index 1.
		 * @param length - The number of consecutive characters to copy (must be 0 or greater).
		 * 
		 * @returns The retrieved substring.
		 */
		getSubString(
			position: number,
			length: number
		): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#length()"><code>
		 * java.sql.Clob#length()</code></a>.
		 * 
		 * @returns The length (in characters) of this clob.
		 */
		length(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#position(java.sql.Clob,%20long)">
		 * <code>java.sql.Clob#position(Clob, long)</code></a>.
		 * 
		 * @param search - The clob object to search for.
		 * @param start - The position at which to begin searching; the first position is 1.
		 * 
		 * @returns The position at which the specifed clob appears, or -1 if it is not present.
		 */
		position(
			search: Jdbc.JdbcClob,
			start: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#position(java.lang.String,%20long)">
		 * <code>java.sql.Clob#position(String, long)</code></a>.
		 * 
		 * @param search - The substring to search for.
		 * @param start - The position at which to begin searching; the first position is 1.
		 * 
		 * @returns The position at which the specifed substring appears, or -1 if it is not present.
		 */
		position(
			search: string,
			start: number
		): number

		/**
		 * Convenience method for writing a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-clob.html'>JdbcClob</a></code> to a clob.
		 * 
		 * @param position - The position at which writing to the clob starts; the first position is 1.
		 * @param blobSource - The blob source to write.
		 * 
		 * @returns The number of characters written.
		 */
		setString(
			position: number,
			blobSource: BlobSource
		): number
		/**
		 * Convenience method for writing a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-clob.html'>JdbcClob</a></code> to a clob.
		 * 
		 * @param position - The position at which writing to the clob starts; the first position is 1.
		 * @param blobSource - The blob source to write.
		 * @param offset - The offset into the provided string where reading characters to write starts.
		 * @param len - The number of characters to write.
		 * 
		 * @returns The number of characters written.
		 */
		setString(
			position: number,
			blobSource: BlobSource,
			offset: number,
			len: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#setString(long,%20java.lang.String)">
		 * <code>java.sql.Clob#setString(long, String)</code></a>.
		 * 
		 * @param position - The position at which writing to the clob starts; the first position is 1.
		 * @param value - The string to write.
		 * 
		 * @returns The number of characters written.
		 */
		setString(
			position: number,
			value: string
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#setString(long,%20java.lang.String,%20int,%20int)">
		 * <code>java.sql.Clob#setString(long, String, int, int)</code></a>.
		 * 
		 * @param position - The position at which writing to the clob starts; the first position is 1.
		 * @param value - The string to write.
		 * @param offset - The offset into the provided string where reading characters to write starts.
		 * @param len - The number of characters to write.
		 * 
		 * @returns The number of characters written.
		 */
		setString(
			position: number,
			value: string,
			offset: number,
			len: number
		): number

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#truncate(long)"><code>
		 * java.sql.Clob#truncate(long)</code></a>.
		 * 
		 * @param length - The size (in bytes) of this clob after truncation.
		 */
		truncate(
			length: number
		): void

	}

	class JdbcConnection {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#clearWarnings()">
		 * <code>java.sql.Connection#clearWarnings()</code></a>.
		 */
		clearWarnings(): void
		/**
		 * Release this connection's database and all associated resources.
		 * 
		 * <pre class="prettyprint"><code>
		 * var conn = Jdbc.getConnection(&quot;jdbc:mysql://&lt;host&gt;:&lt;port&gt;/&lt;instance&gt;&quot;, &quot;user&quot;, &quot;password&quot;);
		 * conn.close();
		 * </code></pre>
		 */
		close(): void
		/**
		 * Makes all pending changes permanent, releases database locks held by this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-connection.html'>JdbcConnection</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * var conn = Jdbc.getConnection(&quot;jdbc:mysql://&lt;host&gt;:&lt;port&gt;/&lt;instance&gt;&quot;, &quot;user&quot;, &quot;password&quot;);
		 * conn.setAutoCommit(false);
		 * var stmt = conn.prepareStatement(&quot;insert into person (lname,fname) values (?,?)&quot;);
		 * var start = new Date();
		 * for (var i = 0; i &lt; 5000; i++) {
		 *   // Objects are accessed using 1-based indexing
		 *   stmt.setObject(1, &#39;firstName&#39; + i);
		 *   stmt.setObject(2, &#39;lastName&#39; + i);
		 *   stmt.addBatch();
		 * }
		 * var res = stmt.executeBatch();
		 * conn.commit(); // When this returns, this is when changes are actually committed
		 * conn.close();
		 * </code></pre>
		 */
		commit(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createArrayOf(java.lang.String,%20java.lang.Object[])">
		 * <code>java.sql.Connection#createArrayOf(String, Object[])</code></a>.
		 * 
		 * @param typeName - The database-specific SQL name of the array elemnents' type. Options include
		 *     built-in types, user-defined types, or standard SQL types supported by the database.
		 * @param elements - The elements to populate in the returned object.
		 * 
		 * @returns An array whose elements map to the specified SQL type.
		 */
		createArrayOf(
			typeName: string,
			elements: object[]
		): Jdbc.JdbcArray
		/**
		 * Constructs a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html'>JdbcBlob</a></code> instance. See also <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createBlob()"><code>
		 * java.sql.Connection#createBlob()</code></a>.
		 * 
		 * <p>The object returned initially contains no data. You can use the <code>setBytes</code> methods of
		 * <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html'>JdbcBlob</a></code> to set the data it should contain. The blob used here is not the same as the
		 * blob created with <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/../utilities/utilities.html#newBlob(Byte)'>Utilities.newBlob(data)</a></code>. To convert
		 * between the two formats, use the defined <code>getBytes()</code> and <code>setBytes()</code> methods.
		 * Alternatively, both <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html'>JdbcBlob</a></code> and <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-clob.html'>JdbcClob</a></code> provide a <code>getAppsScriptBlob()</code>
		 * convenience method for converting to a format that can be used by Apps Script.
		 * 
		 * @returns An empty blob object.
		 */
		createBlob(): Jdbc.JdbcBlob
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createClob()"><code>
		 * java.sql.Connection#createClob()</code></a>.
		 * 
		 * @returns An empty clob object.
		 */
		createClob(): Jdbc.JdbcClob
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createNClob()"><code>
		 * java.sql.Connection#createNClob()</code></a>.
		 * 
		 * @returns An empty nclob object.
		 */
		createNClob(): Jdbc.JdbcClob
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createSQLXML()"><code>
		 * java.sql.Connection#createSQLXML()</code></a>.
		 * 
		 * @returns An empty SQLXML object.
		 */
		createSQLXML(): Jdbc.JdbcSQLXML
		/**
		 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-statement.html'>JdbcStatement</a></code> object for sending SQL statements to the database. See also <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement()">
		 * <code>java.sql.Connection#createStatement()</code></a>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This sample code assumes authentication is off
		 * var conn = Jdbc.getConnection(&quot;jdbc:mysql://&lt;host&gt;:3306/&lt;instance&gt;&quot;)
		 * var stmt = conn.createStatement();
		 * 
		 * stmt.setMaxRows(100);
		 * var rs = stmt.execute(&quot;select * from person&quot;);
		 * 
		 * while(rs.next()) {
		 *   // Do something
		 * }
		 * 
		 * rs.close();
		 * stmt.close();
		 * conn.close();
		 * </code></pre>
		 * 
		 * @returns A statement instance to execute queries with.
		 */
		createStatement(): Jdbc.JdbcStatement
		/**
		 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-statement.html'>JdbcStatement</a></code> object for sending SQL statements to the database. See also <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement(int,%20int)">
		 * <code>java.sql.Connection#createStatement(int, int)</code></a>.
		 * 
		 * <p>This version allows the result set type and concurrency to be overridden.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This sample code assumes authentication is off
		 * // For more information about this method, see documentation here:
		 * //  http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement(int, int)
		 * var conn = Jdbc.getConnection(&quot;jdbc:mysql://&lt;host&gt;:3306/&lt;instance&gt;&quot;)
		 * var stmt = conn.createStatement(Jdbc.ResultSet.TYPE_FORWARD_ONLY,
		 *                                 Jdbc.ResultSet.CONCUR_READ_ONLY);
		 * 
		 * stmt.setMaxRows(100);
		 * var rs = stmt.execute(&quot;select * from person&quot;);
		 * 
		 * while(rs.next()) {
		 *   // Do something
		 * }
		 * 
		 * rs.close();
		 * stmt.close();
		 * conn.close();
		 * </code></pre>
		 * 
		 * @param resultSetType - A result set type; one of <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE</code>.
		 * @param resultSetConcurrency - A concurrency type; either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code>
		 *     or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
		 * 
		 * @returns A statement instance to execute queries with.
		 */
		createStatement(
			resultSetType: number,
			resultSetConcurrency: number
		): Jdbc.JdbcStatement
		/**
		 * Creates a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-statement.html'>JdbcStatement</a></code> object for sending SQL statements to the database. See also <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement(int,%20int,%20int)">
		 * <code>java.sql.Connection#createStatement(int, int, int)</code></a>.
		 * 
		 * <p>This version allows the result set type, concurrency and holdability to be overridden.
		 * 
		 * <pre class="prettyprint"><code>
		 * // This sample code assumes authentication is off
		 * // For more information about this method, see documentation here:
		 * //  http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement(int, int)
		 * var conn = Jdbc.getConnection(&quot;jdbc:mysql://&lt;host&gt;:3306/&lt;instance&gt;&quot;)
		 * var stmt = conn.createStatement(Jdbc.ResultSet.TYPE_FORWARD_ONLY,
		 *                                 Jdbc.ResultSet.CONCUR_READ_ONLY,
		 *                                 Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT);
		 * 
		 * stmt.setMaxRows(100);
		 * var rs = stmt.execute(&quot;select * from person&quot;);
		 * 
		 * while(rs.next()) {
		 *   // Do something
		 * }
		 * 
		 * rs.close();
		 * stmt.close();
		 * conn.close();
		 * </code></pre>
		 * 
		 * @param resultSetType - A result set type; one of <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE</code>.
		 * @param resultSetConcurrency - A concurrency type; either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code>
		 *     or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
		 * @param resultSetHoldability - A holdability setting; either <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
		 * 
		 * @returns A statement instance to execute queries with.
		 */
		createStatement(
			resultSetType: number,
			resultSetConcurrency: number,
			resultSetHoldability: number
		): Jdbc.JdbcStatement

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStruct(java.lang.String,%20java.lang.Object[])">
		 * <code>java.sql.Connection#createStruct(String, Object[])</code></a>.
		 * 
		 * @param typeName - The database-specific SQL name of the array elemnents' type. Options include
		 *     built-in types, user-defined types, or standard SQL types supported by the database.
		 * @param attributes - The attributes that populate the returned object.
		 * 
		 * @returns A structure object that maps to the given SQL type and is populated with the given
		 *     attributes.
		 */
		createStruct(
			typeName: string,
			attributes: object[]
		): Jdbc.JdbcStruct
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getAutoCommit()">
		 * <code>java.sql.Connection#getAutoCommit()</code></a>.
		 * 
		 * @returns <code>true</code> if the connection's auto-commit mode is enabled; <code>false</code> otherwise.
		 */
		getAutoCommit(): Boolean
		/**
		 * or documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getCatalog()"><code>
		 * java.sql.Connection#getCatalog()</code></a>.
		 * 
		 * @returns The current catalog name or <code>null</code> if no name has been set.
		 */
		getCatalog(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getHoldability()">
		 * <code>java.sql.Connection#getHoldability()</code></a>.
		 * 
		 * @returns The holdability setting of the connection; either <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
		 */
		getHoldability(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getMetaData()"><code>
		 * java.sql.Connection#getMetaData()</code></a>.
		 * 
		 * @returns The metadata of the database this connection connects to.
		 */
		getMetaData(): Jdbc.JdbcDatabaseMetaData
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getTransactionIsolation()">
		 * <code>java.sql.Connection#getTransactionIsolation()</code></a>.
		 * 
		 * @returns The current transaction level, which is one of: <code>Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED</code>, <code>Jdbc.Connection.TRANSACTION_READ_COMMITTED</code>, <code>Jdbc.Connection.TRANSACTION_REPEATABLE_READ</code>, <code>Jdbc.Connection.TRANSACTION_SERIALIZABLE</code>, or <code>Jdbc.Connection.TRANSACTION_NONE</code>.
		 */
		getTransactionIsolation(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getWarnings()"><code>
		 * java.sql.Connection#getWarnings()</code></a>.
		 * 
		 * @returns An array of warning strings.
		 */
		getWarnings(): string[]
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#isClosed()"><code>
		 * java.sql.Connection#isClosed()</code></a>.
		 * 
		 * @returns <code>true</code> if the connection is closed; <code>false</code> otherwise.
		 */
		isClosed(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#isReadOnly()"><code>
		 * java.sql.Connection#isReadOnly()</code></a>.
		 * 
		 * @returns <code>true</code> if the connection is read-only; <code>false</code> otherwise.
		 */
		isReadOnly(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#isValid(int)"><code>
		 * java.sql.Connection#isValid(int)</code></a>.
		 * 
		 * @param timeout - The time in seconds to wait for the validation operation to complete. A value of
		 *     0 indicates no timeout is applied.
		 * 
		 * @returns <code>true</code> if the connection is valid; <code>false</code> otherwise. Also returns <code>false</code> if the timeout period expires before the operation completes.
		 */
		isValid(
			timeout: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#nativeSQL(java.lang.String)">
		 * <code>java.sql.Connection#nativeSQL(String)</code></a>.
		 * 
		 * @param sql - An SQL statement that may contain one more more '?' placeholders.
		 * 
		 * @returns The native form of the provided statement.
		 */
		nativeSQL(
			sql: string
		): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareCall(java.lang.String)">
		 * <code>java.sql.Connection#prepareCall(String)</code></a>.
		 * 
		 * @param sql - An SQL statement that may contain one more more '?' placeholders, typically provided
		 *     using JDBC call escape syntax.
		 * 
		 * @returns A callable statement containing the pre-compiled SQL statement.
		 */
		prepareCall(
			sql: string
		): Jdbc.JdbcCallableStatement
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareCall(java.lang.String,%20int,%20int)">
		 * <code>java.sql.Connection#prepareCall(String, int, int)</code></a>.
		 * 
		 * @param sql - An SQL statement that may contain one more more '?' placeholders, typically provided
		 *     using JDBC call escape syntax.
		 * @param resultSetType - A result set type; one of <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE</code>.
		 * @param resultSetConcurrency - A concurrency type; either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code>
		 *     or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
		 * 
		 * @returns A callable statement containing the pre-compiled SQL statement that produces result
		 *     sets with the provided type and concurrency.
		 */
		prepareCall(
			sql: string,
			resultSetType: number,
			resultSetConcurrency: number
		): Jdbc.JdbcCallableStatement
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareCall(java.lang.String,%20int,%20int,%20int)">
		 * <code>java.sql.Connection#prepareCall(String, int, int, int)</code></a>.
		 * 
		 * @param sql - An SQL statement that may contain one more more '?' placeholders, typically provided
		 *     using JDBC call escape syntax.
		 * @param resultSetType - A result set type; one of <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE</code>.
		 * @param resultSetConcurrency - A concurrency type; either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code>
		 *     or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
		 * @param resultSetHoldability - A holdability setting; either <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
		 * 
		 * @returns A callable statement containing the pre-compiled SQL statement that produces result
		 *     sets with the provided type, concurrency.
		 */
		prepareCall(
			sql: string,
			resultSetType: number,
			resultSetConcurrency: number,
			resultSetHoldability: number
		): Jdbc.JdbcCallableStatement

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(java.lang.String)">
		 * <code>java.sql.Connection#prepareStatement(String)</code></a>.
		 * 
		 * @param sql - An SQL statement that may contain one more more '?' IN parameter placeholders.
		 * 
		 * @returns A prepared statement containing the pre-compiled SQL statement.
		 */
		prepareStatement(
			sql: string
		): Jdbc.JdbcPreparedStatement
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(java.lang.String,%20int)">
		 * <code>java.sql.Connection#prepareStatement(String, int)</code></a>.
		 * 
		 * @param sql - An SQL statement that may contain one more more '?' IN parameter placeholders.
		 * @param autoGeneratedKeys - A flag that indicates whether auto-generated keys are returned; either
		 *     <code>Jdbc.Statement.RETURN_GENERATED_KEYS</code> or <code>Jdbc.Statement.NO_GENERATED_KEYS</code>.
		 * 
		 * @returns A prepared statement containing the pre-compiled SQL statement, possibly capable of
		 *     returning auto-generated keys.
		 */
		prepareStatement(
			sql: string,
			autoGeneratedKeys: number
		): Jdbc.JdbcPreparedStatement
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(java.lang.String,%20int,%20int)">
		 * <code>java.sql.Connection#prepareStatement(String, int, int)</code></a>.
		 * 
		 * @param sql - An SQL statement that may contain one more more '?' IN parameter placeholders.
		 * @param resultSetType - A result set type; one of <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE</code>.
		 * @param resultSetConcurrency - A concurrency type; either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code>
		 *     or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
		 * 
		 * @returns A prepared statement containing the pre-compiled SQL statement that produces result
		 *     sets with the provided type and concurrency.
		 */
		prepareStatement(
			sql: string,
			resultSetType: number,
			resultSetConcurrency: number
		): Jdbc.JdbcPreparedStatement
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(java.lang.String,%20int,%20int,%20int)">
		 * <code>java.sql.Connection#prepareStatement(String, int, int, int)</code></a>.
		 * 
		 * @param sql - An SQL statement that may contain one more more '?' IN parameter placeholders.
		 * @param resultSetType - A result set type; one of <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE</code>.
		 * @param resultSetConcurrency - A concurrency type; either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code>
		 *     or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
		 * @param resultSetHoldability - A holdability setting; either <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
		 * 
		 * @returns A prepared statement containing the pre-compiled SQL statement that produces result
		 *     sets with the provided type, concurrency, and holdability.
		 */
		prepareStatement(
			sql: string,
			resultSetType: number,
			resultSetConcurrency: number,
			resultSetHoldability: number
		): Jdbc.JdbcPreparedStatement

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(java.lang.String,%20int[])">
		 * <code>java.sql.Connection#prepareStatement(String, int[])</code></a>.
		 * 
		 * @param sql - An SQL statement that may contain one more more '?' IN parameter placeholders.
		 * @param indices - The column indices of columns that are returned from the inserted row or rows.
		 * 
		 * @returns A prepared statement containing the pre-compiled SQL statement, capable of returning
		 *     auto-generated keys specified by the provided column indices.
		 */
		prepareStatementByIndex(
			sql: string,
			indices: number[]
		): Jdbc.JdbcPreparedStatement
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(java.lang.String,%20java.lang.String[])">
		 * <code>java.sql.Connection#prepareStatement(String, String[])</code></a>.
		 * 
		 * @param sql - An SQL statement that may contain one more more '?' IN parameter placeholders.
		 * @param columnNames - The column names that specify which columns the method should return from
		 *     the inserted row or rows.
		 * 
		 * @returns A prepared statement containing the pre-compiled SQL statement, capable of returning
		 *     auto-generated keys specified by the provided column names.
		 */
		prepareStatementByName(
			sql: string,
			columnNames: string[]
		): Jdbc.JdbcPreparedStatement
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#releaseSavepoint(java.sql.Savepoint)">
		 * <code>java.sql.Connection#releaseSavepoint(Savepoint)</code></a>.
		 * 
		 * @param savepoint - The save point to remove.
		 */
		releaseSavepoint(
			savepoint: Jdbc.JdbcSavepoint
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#rollback()"><code>
		 * java.sql.Connection#rollback()</code></a>.
		 */
		rollback(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#rollback(java.sql.Savepoint)">
		 * <code>java.sql.Connection#rollback(Savepoint)</code></a>.
		 * 
		 * @param savepoint - The save point to rollback to.
		 */
		rollback(
			savepoint: Jdbc.JdbcSavepoint
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setAutoCommit(boolean)">
		 * <code>java.sql.Connection#setAutoCommit(boolean)</code></a>.
		 * 
		 * @param autoCommit - If <code>true</code>, auto-commit mode is enabled; <code>false</code> disables.
		 */
		setAutoCommit(
			autoCommit: Boolean
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setCatalog(java.lang.String)">
		 * <code>java.sql.Connection#setCatalog(String)</code></a>.
		 * 
		 * @param catalog - The name of a catalog (the subspace in the connection's database) in which to
		 *     work.
		 */
		setCatalog(
			catalog: string
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setHoldability(int)">
		 * <code>java.sql.Connection#setHoldability(int)</code></a>.
		 * 
		 * @param holdability - The default holdability of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set.html'>JdbcResultSet</a></code> objects created with this
		 *     connection; either <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
		 */
		setHoldability(
			holdability: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setReadOnly(boolean)">
		 * <code>java.sql.Connection#setReadOnly(boolean)</code></a>.
		 * 
		 * @param readOnly - If <code>true</code>, read-only mode is enabled; <code>false</code> disables.
		 */
		setReadOnly(
			readOnly: Boolean
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setSavepoint()"><code>
		 * java.sql.Connection#setSavepoint()</code></a>.
		 * 
		 * @returns The new unnamed save point.
		 */
		setSavepoint(): Jdbc.JdbcSavepoint
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setSavepoint(java.lang.String)">
		 * <code>java.sql.Connection#setSavepoint(String)</code></a>.
		 * 
		 * @param name - The name of the created save point.
		 * 
		 * @returns The new named save point.
		 */
		setSavepoint(
			name: string
		): Jdbc.JdbcSavepoint

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setTransactionIsolation(int)">
		 * <code>java.sql.Connection#setTransactionIsolation(int)</code></a>.
		 * 
		 * @param level - The transaction level to set, which is one of: <code>Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED</code>, <code>Jdbc.Connection.TRANSACTION_READ_COMMITTED</code>, <code>Jdbc.Connection.TRANSACTION_REPEATABLE_READ</code>, <code>Jdbc.Connection.TRANSACTION_SERIALIZABLE</code>, or <code>Jdbc.Connection.TRANSACTION_NONE</code>.
		 */
		setTransactionIsolation(
			level: number
		): void

	}

	class JdbcDatabaseMetaData {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#allProceduresAreCallable()">
		 * <code>java.sql.DatabaseMetaData#allProceduresAreCallable()</code></a>.
		 * 
		 * @returns <code>true</code> if the user can call all of the procedures returned by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data.html#getProcedures(String,String,String)'>getProcedures(catalog, schemaPattern, procedureNamePattern)</a></code>; <code>false</code> otherwise.
		 */
		allProceduresAreCallable(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#allTablesAreSelectable()">
		 * <code>java.sql.DatabaseMetaData#allTablesAreSelectable()</code></a>.
		 * 
		 * @returns <code>true</code> if the user can call all of the tables returned by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data.html#getTables(String,String,String,String)'>getTables(catalog, schemaPattern, tableNamePattern, types)</a></code> in a <code>SELECT</code>
		 *     statement; <code>false</code> otherwise.
		 */
		allTablesAreSelectable(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#autoCommitFailureClosesAllResultSets()">
		 * <code>java.sql.DatabaseMetaData#autoCommitFailureClosesAllResultSets()</code></a>.
		 * 
		 * @returns <code>true</code> if, when <code>autoCommit</code> is <code>true</code>, a SQL exception indicates
		 *     that all open result sets are closed, even if holdable. Returns <code>false</code> otherwise.
		 */
		autoCommitFailureClosesAllResultSets(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#dataDefinitionCausesTransactionCommit()">
		 * <code>java.sql.DatabaseMetaData#dataDefinitionCausesTransactionCommit()</code></a>.
		 * 
		 * @returns <code>true</code> if a data definition statement within a transaction forces the transaction
		 *     to commit; <code>false</code> otherwise.
		 */
		dataDefinitionCausesTransactionCommit(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#dataDefinitionIgnoredInTransactions()">
		 * <code>java.sql.DatabaseMetaData#dataDefinitionIgnoredInTransactions()</code></a>.
		 * 
		 * @returns <code>true</code> if the database ignores a data definition statement within a transaction;
		 *     <code>false</code> otherwise.
		 */
		dataDefinitionIgnoredInTransactions(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#deletesAreDetected(int)">
		 * <code>java.sql.DatabaseMetaData#deletesAreDetected(int)</code></a>.
		 * 
		 * @param type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
		 * 
		 * @returns <code>true</code> if for the specified result set type a visible row delete is detected by
		 *     calls to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set.html#rowDeleted()'>JdbcResultSet.rowDeleted()</a></code>. If <code>false</code>, the deleted rows are removed
		 *     from the result set.
		 */
		deletesAreDetected(
			type: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#doesMaxRowSizeIncludeBlobs()">
		 * <code>java.sql.DatabaseMetaData#doesMaxRowSizeIncludeBlobs()</code></a>.
		 * 
		 * @returns <code>true</code> if SQL data types <code>LONGVARCHAR</code> and <code>LONGVARBINARY</code> are
		 *     included in the size returned by <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data.html#getMaxRowSize()'>getMaxRowSize()</a></code>; <code>false</code> otherwise.
		 */
		doesMaxRowSizeIncludeBlobs(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getAttributes(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String)">
		 * <code>java.sql.DatabaseMetaData#getAttributes(String, String, String, String)</code></a>.
		 * 
		 * @param catalog - The catalog name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
		 *     incidates the catalog name isn't used to narrow the search.
		 * @param schemaPattern - The schema name pattern to filter the search by, as it appears in the
		 *     database. Passing an empty string retrieves those procedures without a schema. Passing
		 *     <code>null</code> incidates the schema name isn't used to narrow the search.
		 * @param typeNamePattern - The user-defined type name pattern; it must match the type name as it is
		 *     stored in the database.
		 * @param attributeNamePattern - The attribute name pattern; it must match the attribute name as it
		 *     is declared in the database.
		 * 
		 * @returns A result set containing descriptions the attributes for a specified user-defined type
		 *     available in the specified schema and catalog. Each row provides information about a
		 *     specific attribute, ordered by <code>TYPE_CAT</code>, <code>TYPE_SCHEM</code>, <code>TYPE_NAME</code>, and
		 *     <code>ORDINAL_POSITION</code>.
		 */
		getAttributes(
			catalog: string,
			schemaPattern: string,
			typeNamePattern: string,
			attributeNamePattern: string
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getBestRowIdentifier(java.lang.String,%20java.lang.String,%20java.lang.String,%20int,%20boolean)">
		 * <code>java.sql.DatabaseMetaData#getBestRowIdentifier(String, String, String, int, boolean)
		 *       </code></a>.
		 * 
		 * @param catalog - The catalog name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
		 *     incidates the catalog name isn't used to narrow the search.
		 * @param schema - The schema name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a schema. Passing <code>null</code> incidates
		 *     the schema name isn't used to narrow the search.
		 * @param table - The table name. It must match the table name as it is stored in the database.
		 * @param scope - The scope of interest, using the same values as present in the <code>SCOPE</code>
		 *     column description column.
		 * @param nullable - If <code>true</code>, include columns that are nullable; otherwise do not.
		 * 
		 * @returns A result set containing the column descriptions that uniquely identify a row (one
		 *     column description per row in the result set, ordered by <code>SCOPE</code>).
		 */
		getBestRowIdentifier(
			catalog: string,
			schema: string,
			table: string,
			scope: number,
			nullable: Boolean
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCatalogSeparator()">
		 * <code>java.sql.DatabaseMetaData#getCatalogSeparator()</code></a>.
		 * 
		 * @returns The separator between a catalog and table name used by this database.
		 */
		getCatalogSeparator(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCatalogTerm()">
		 * <code>java.sql.DatabaseMetaData#getCatalogTerm()</code></a>.
		 * 
		 * @returns The database vendor's preferred term for 'catalog'.
		 */
		getCatalogTerm(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCatalogs()">
		 * <code>java.sql.DatabaseMetaData#getCatalogs()</code></a>.
		 * 
		 * @returns A result set containing the catalog names, one per row.
		 */
		getCatalogs(): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getClientInfoProperties()">
		 * <code>java.sql.DatabaseMetaData#getClientInfoProperties()</code></a>.
		 * 
		 * @returns A result set containing client info properties the driver supports, ordered by <code>NAME</code>, one per row.
		 */
		getClientInfoProperties(): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getColumnPrivileges(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String)">
		 * <code>java.sql.DatabaseMetaData#getColumnPrivileges(String, String, String, String)
		 *    </code></a>.
		 * 
		 * @param catalog - The catalog name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
		 *     incidates the catalog name isn't used to narrow the search.
		 * @param schema - The name of the schema to filter the search by, as it appears in the database.
		 *     Passing an empty string retrieves those procedures without a schema. Passing <code>null</code>
		 *     incidates the schema name isn't used to narrow the search.
		 * @param table - The table name. It must match the table name as it is stored in the database.
		 * @param columnNamePattern - The column name pattern to filter the search by. It must match the
		 *     column name as it is stored in the database.
		 * 
		 * @returns A result set containing the column privilege descriptions, one per row, ordered by
		 *     <code>COLUMN_NAME</code> and <code>PRIVILEGE</code>.
		 */
		getColumnPrivileges(
			catalog: string,
			schema: string,
			table: string,
			columnNamePattern: string
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getColumns(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String)">
		 * <code>java.sql.DatabaseMetaData#getColumns(String, String, String, String)</code></a>.
		 * 
		 * @param catalog - The catalog name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
		 *     incidates the catalog name isn't used to narrow the search.
		 * @param schemaPattern - The schema name pattern to filter the search by, as it appears in the
		 *     database. Passing an empty string retrieves those procedures without a schema. Passing
		 *     <code>null</code> incidates the schema name isn't used to narrow the search.
		 * @param tableNamePattern - The table name pattern to filter the search by. It must match the table
		 *     name as it is stored in the database.
		 * @param columnNamePattern - The column name pattern to filter the search by. It must match the
		 *     column name as it is stored in the database.
		 * 
		 * @returns A result set containing the column descriptions, one per row, ordered according to
		 *     <code>TABLE_CAT</code>, <code>TABLE_SCHEM</code>, <code>TABLE_NAME</code>, and <code>ORDINAL_POSITION</code>.
		 */
		getColumns(
			catalog: string,
			schemaPattern: string,
			tableNamePattern: string,
			columnNamePattern: string
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getConnection()">
		 * <code>java.sql.DatabaseMetaData#getConnection()</code></a>.
		 * 
		 * @returns The connection that produced this metadata.
		 */
		getConnection(): Jdbc.JdbcConnection
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCrossReference(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String)">
		 * <code>java.sql.DatabaseMetaData#getCrossReference(String, String, String,
		 *      String, String, String)</code></a>.
		 * 
		 * @param parentCatalog - A parent catalog name as it appears in the database. Passing an empty
		 *     string retrieves those procedures without a catalog. Passing <code>null</code> incidates the
		 *     catalog name isn't used in the selection criteria.
		 * @param parentSchema - A parent schema name as it appears in the database. Passing an empty string
		 *     retrieves those procedures without a schema. Passing <code>null</code> incidates the schema name
		 *     isn't used in the selection criteria.
		 * @param parentTable - The name of the parent table that exports the key. It must match the table
		 *     name as it is stored in the database.
		 * @param foreignCatalog - A foreign catalog name as it appears in the database. Passing an empty
		 *     string retrieves those procedures without a catalog. Passing <code>null</code> incidates the
		 *     catalog name isn't used in the selection criteria.
		 * @param foreignSchema - A foreign schema name as it appears in the database. Passing an empty
		 *     string retrieves those procedures without a schema. Passing <code>null</code> incidates the
		 *     schema name isn't used in the selection criteria.
		 * @param foreignTable - The name of the foreign table that exports the key. It must match the table
		 *     name as it is stored in the database.
		 * 
		 * @returns An result set containing the foreign key column descriptions from the specified foreign
		 *     key table that reference the primary key or the columns representing a unique constraint of
		 *     the parent table. One column description is provided in each row of the result set, and
		 *     they are ordered by <code>FKTABLE_CAT</code>, <code>FKTABLE_SCHEM</code>, <code>FKTABLE_NAME</code>, and
		 *     <code>KEY_SEQ</code>.
		 */
		getCrossReference(
			parentCatalog: string,
			parentSchema: string,
			parentTable: string,
			foreignCatalog: string,
			foreignSchema: string,
			foreignTable: string
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseMajorVersion()">
		 * <code>java.sql.DatabaseMetaData#getDatabaseMajorVersion()</code></a>.
		 * 
		 * @returns The major version number of the underlying database.
		 */
		getDatabaseMajorVersion(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseMinorVersion()">
		 * <code>java.sql.DatabaseMetaData#getDatabaseMinorVersion()</code></a>.
		 * 
		 * @returns The minor version number of the underlying database.
		 */
		getDatabaseMinorVersion(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseProductName()">
		 * <code>java.sql.DatabaseMetaData#getDatabaseProductName()</code></a>.
		 * 
		 * @returns The name of this database product.
		 */
		getDatabaseProductName(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseProductVersion()">
		 * <code>java.sql.DatabaseMetaData#getDatabaseProductVersion()</code></a>.
		 * 
		 * @returns The version number of this database product.
		 */
		getDatabaseProductVersion(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDefaultTransactionIsolation()">
		 * <code>java.sql.DatabaseMetaData#getDefaultTransactionIsolation()</code></a>.
		 * 
		 * @returns The database's default transaction isolation level, which is one of: <code>Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED</code>, <code>Jdbc.Connection.TRANSACTION_READ_COMMITTED</code>, <code>Jdbc.Connection.TRANSACTION_REPEATABLE_READ</code>, <code>Jdbc.Connection.TRANSACTION_SERIALIZABLE</code>, or <code>Jdbc.Connection.TRANSACTION_NONE</code>.
		 */
		getDefaultTransactionIsolation(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverMajorVersion()">
		 * <code>java.sql.DatabaseMetaData#getDriverMajorVersion()</code></a>.
		 * 
		 * @returns The JDBC driver's major version number.
		 */
		getDriverMajorVersion(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverMinorVersion()">
		 * <code>java.sql.DatabaseMetaData#getDriverMinorVersion()</code></a>.
		 * 
		 * @returns The JDBC driver's minor version number.
		 */
		getDriverMinorVersion(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverName()">
		 * <code>java.sql.DatabaseMetaData#getDriverName()</code></a>.
		 * 
		 * @returns The name of this JDBC driver.
		 */
		getDriverName(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverVersion()">
		 * <code>java.sql.DatabaseMetaData#getDriverVersion()</code></a>.
		 * 
		 * @returns The version number of this JDBC driver.
		 */
		getDriverVersion(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getExportedKeys(java.lang.String,%20java.lang.String,%20java.lang.String)">
		 * <code>java.sql.DatabaseMetaData#getImportedKeys(String, String, String)</code></a>.
		 * 
		 * @param catalog - The catalog name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
		 *     incidates the catalog name isn't used to narrow the search.
		 * @param schema - The schema name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a schema. Passing <code>null</code> incidates
		 *     the schema name isn't used to narrow the search.
		 * @param table - The table name. It must match the table name as it is stored in the database.
		 * 
		 * @returns An result set containing the foreign key column descriptions for the primary key
		 *     columns exported by the table. One column description is provided in each row of the result
		 *     set, and they are ordered by <code>FKTABLE_CAT</code>, <code>FKTABLE_SCHEM</code>, <code>FKTABLE_NAME</code>, and <code>KEY_SEQ</code>.
		 */
		getExportedKeys(
			catalog: string,
			schema: string,
			table: string
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getExtraNameCharacters()">
		 * <code>java.sql.DatabaseMetaData#getExtraNameCharacters()</code></a>.
		 * 
		 * @returns The extra characters that are avaiable for use in unquoted identifier names in addition
		 *     to a-z, A-Z, 0-9, and _.
		 */
		getExtraNameCharacters(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getFunctionColumns(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String)">
		 * <code>java.sql.DatabaseMetaData#getFunctionColumns(String, String, String, String)</code></a>.
		 * 
		 * @param catalog - The catalog name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
		 *     incidates the catalog name isn't used to narrow the search.
		 * @param schemaPattern - The schema name pattern to filter the search by, as it appears in the
		 *     database. Passing an empty string retrieves those procedures without a schema. Passing
		 *     <code>null</code> incidates the schema name isn't used to narrow the search.
		 * @param functionNamePattern - The function pattern, which match the function name as it is stored
		 *     in the database.
		 * @param columnNamePattern - The parameter name pattern, which must match the parameter or column
		 *     name as it is stored in the database.
		 * 
		 * @returns A result set containing the descriptions of system and user function parameters
		 *     available in the given catalog. Each row contains one function description, ordered
		 *     according to <code>FUNCTION_CAT</code>, <code>FUNCTION_SCHEM</code>, <code>FUNCTION_NAME</code>, and
		 *     <code>SPECIFIC_ NAME</code>.
		 */
		getFunctionColumns(
			catalog: string,
			schemaPattern: string,
			functionNamePattern: string,
			columnNamePattern: string
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getFunctions(java.lang.String,%20java.lang.String,%20java.lang.String)">
		 * <code>java.sql.DatabaseMetaData#getFunctions(String, String, String)</code></a>.
		 * 
		 * @param catalog - The catalog name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
		 *     incidates the catalog name isn't used to narrow the search.
		 * @param schemaPattern - The schema name pattern to filter the search by, as it appears in the
		 *     database. Passing an empty string retrieves those procedures without a schema. Passing
		 *     <code>null</code> incidates the schema name isn't used to narrow the search.
		 * @param functionNamePattern - The function pattern, which must match the function name as it is
		 *     stored in the database.
		 * 
		 * @returns A result set containing descriptions of the system and user functions available in the
		 *     given catalog. Each row contains one function description, ordered according to <code>FUNCTION_CAT</code>, <code>FUNCTION_SCHEM</code>, <code>FUNCTION_NAME</code>, and <code>SPECIFIC_ NAME</code>.
		 */
		getFunctions(
			catalog: string,
			schemaPattern: string,
			functionNamePattern: string
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getIdentifierQuoteString()">
		 * <code>java.sql.DatabaseMetaData#getIdentifierQuoteString()</code></a>.
		 * 
		 * @returns The string used to quote SQL identifiers. Defaults to a space (" ") if identifier
		 *     quoting isn't supported.
		 */
		getIdentifierQuoteString(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getImportedKeys(java.lang.String,%20java.lang.String,%20java.lang.String)">
		 * <code>java.sql.DatabaseMetaData#getImportedKeys(String, String, String)</code></a>.
		 * 
		 * @param catalog - The catalog name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
		 *     incidates the catalog name isn't used to narrow the search.
		 * @param schema - The schema name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a schema. Passing <code>null</code> incidates
		 *     the schema name isn't used to narrow the search.
		 * @param table - The table name. It must match the table name as it is stored in the database.
		 * 
		 * @returns An result set containing the column descriptions for the primary key columns referenced
		 *     by the given table's foreign key columns (those imported by a table). One column
		 *     description is provided in each row of the result set, and they are ordered by <code>PKTABLE_CAT</code>, <code>PKTABLE_SCHEM</code>, <code>PKTABLE_NAME</code>, and <code>KEY_SEQ</code>.
		 */
		getImportedKeys(
			catalog: string,
			schema: string,
			table: string
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getIndexInfo(java.lang.String,%20java.lang.String,%20java.lang.String,%20boolean,%20boolean)">
		 * <code>java.sql.DatabaseMetaData#getIndexInfo(String, String, String, boolean, boolean)
		 *       </code></a>.
		 * 
		 * @param catalog - The catalog name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
		 *     incidates the catalog name isn't used to narrow the search.
		 * @param schema - The schema name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a schema. Passing <code>null</code> incidates
		 *     the schema name isn't used to narrow the search.
		 * @param table - The table name. It must match the table name as it is stored in the database.
		 * @param unique - If <code>true</code>, the method only return indices for unique values; otherwise it
		 *     returns indices whether the values are unique or not.
		 * @param approximate - If <code>true</code>, the result is allowed to reflect approximate or out-of-data
		 *     values; otherwise result accuracy is requested.
		 * 
		 * @returns An result set containing the index and statistic column descriptions for the specified
		 *     table. One column description is provided in each row of the result set, and they are
		 *     ordered by <code>NON_UNIQUE</code>, <code>TYPE</code>, <code>INDEX_NAME</code>, and <code>ORDINAL_POSITION</code>.
		 */
		getIndexInfo(
			catalog: string,
			schema: string,
			table: string,
			unique: Boolean,
			approximate: Boolean
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getJDBCMajorVersion()">
		 * <code>java.sql.DatabaseMetaData#getJDBCMajorVersion()</code></a>.
		 * 
		 * @returns The major JDBC version number for this driver.
		 */
		getJDBCMajorVersion(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getJDBCMinorVersion()">
		 * <code>java.sql.DatabaseMetaData#getJDBCMinorVersion()</code></a>.
		 * 
		 * @returns The minor JDBC version number for this driver.
		 */
		getJDBCMinorVersion(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxBinaryLiteralLength()">
		 * <code>java.sql.DatabaseMetaData#getMaxBinaryLiteralLength()</code></a>.
		 * 
		 * @returns The maximum number of hex characters this database allows in an inline binary literal.
		 *     A response of 0 indicates there is no known limit.
		 */
		getMaxBinaryLiteralLength(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxCatalogNameLength()">
		 * <code>java.sql.DatabaseMetaData#getMaxCatalogNameLength()</code></a>.
		 * 
		 * @returns The maximum number of characters this database allows in a catalog name. A response of
		 *     0 indicates there is no known limit.
		 */
		getMaxCatalogNameLength(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxCharLiteralLength()">
		 * <code>java.sql.DatabaseMetaData#getMaxCharLiteralLength()</code></a>.
		 * 
		 * @returns The maximum number of characters this database allows in a character literal. A
		 *     response of 0 indicates there is no known limit.
		 */
		getMaxCharLiteralLength(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnNameLength()">
		 * <code>java.sql.DatabaseMetaData#getMaxColumnNameLength()</code></a>.
		 * 
		 * @returns The maximum number of characters this database allows in a column name. A response of 0
		 *     indicates there is no known limit.
		 */
		getMaxColumnNameLength(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInGroupBy()">
		 * <code>java.sql.DatabaseMetaData#getMaxColumnsInGroupBy()</code></a>.
		 * 
		 * @returns The maximum number of columns this database allows in a <code>GROUP BY</code> clause. A
		 *     response of 0 indicates there is no known limit.
		 */
		getMaxColumnsInGroupBy(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInIndex()">
		 * <code>java.sql.DatabaseMetaData#getMaxColumnsInIndex()</code></a>.
		 * 
		 * @returns The maximum number of columns this database allows in an index. A response of 0
		 *     indicates there is no known limit.
		 */
		getMaxColumnsInIndex(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInOrderBy()">
		 * <code>java.sql.DatabaseMetaData#getMaxColumnsInOrderBy()</code></a>.
		 * 
		 * @returns The maximum number of columns this database allows in an <code>ORDER BY</code> clause. A
		 *     response of 0 indicates there is no known limit.
		 */
		getMaxColumnsInOrderBy(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInSelect()">
		 * <code>java.sql.DatabaseMetaData#getMaxColumnsInSelect()</code></a>.
		 * 
		 * @returns The maximum number of columns this database allows in an <code>SELECT</code> list. A
		 *     response of 0 indicates there is no known limit.
		 */
		getMaxColumnsInSelect(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInTable()">
		 * <code>java.sql.DatabaseMetaData#getMaxColumnsInTable()</code></a>.
		 * 
		 * @returns The maximum number of columns this database allows in a table. A response of 0
		 *     indicates there is no known limit.
		 */
		getMaxColumnsInTable(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxConnections()">
		 * <code>java.sql.DatabaseMetaData#getMaxConnections()</code></a>.
		 * 
		 * @returns The maximum number of concurrent connections to this database. A response of 0
		 *     indicates there is no known limit.
		 */
		getMaxConnections(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxCursorNameLength()">
		 * <code>java.sql.DatabaseMetaData#getMaxCursorNameLength()</code></a>.
		 * 
		 * @returns The maximum number of characters that this database allows in a cursor name. A response
		 *     of 0 indicates there is no known limit.
		 */
		getMaxCursorNameLength(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxIndexLength()">
		 * <code>java.sql.DatabaseMetaData#getMaxIndexLength()</code></a>.
		 * 
		 * @returns The maximum number of bytes this database allows for an index, including all its parts.
		 *     A response of 0 indicates there is no known limit.
		 */
		getMaxIndexLength(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxProcedureNameLength()">
		 * <code>java.sql.DatabaseMetaData#getMaxProcedureNameLength()</code></a>.
		 * 
		 * @returns The maximum number of characters this database allows in a procedure name. A response
		 *     of 0 indicates there is no known limit.
		 */
		getMaxProcedureNameLength(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxRowSize()">
		 * <code>java.sql.DatabaseMetaData#getMaxRowSize()</code></a>.
		 * 
		 * @returns The maximum number of bytes this database allows in a single row. A response of 0
		 *     indicates there is no known limit.
		 */
		getMaxRowSize(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxSchemaNameLength()">
		 * <code>java.sql.DatabaseMetaData#getMaxSchemaNameLength()</code></a>.
		 * 
		 * @returns The maximum number of characters this database allows in a schema name. A response of 0
		 *     indicates there is no known limit.
		 */
		getMaxSchemaNameLength(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxStatementLength()">
		 * <code>java.sql.DatabaseMetaData#getMaxStatementLength()</code></a>.
		 * 
		 * @returns The maximum number of characters this database allows in an SQL statement. A response
		 *     of 0 indicates there is no known limit.
		 */
		getMaxStatementLength(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxStatements()">
		 * <code>java.sql.DatabaseMetaData#getMaxStatements()</code></a>.
		 * 
		 * @returns The maximum number of active statements to this database that can be open
		 *     simultaneously. A response of 0 indicates there is no known limit.
		 */
		getMaxStatements(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxTableNameLength()">
		 * <code>java.sql.DatabaseMetaData#getMaxTableNameLength()</code></a>.
		 * 
		 * @returns The maximum number of characters this database allows in a table name. A response of 0
		 *     indicates there is no known limit.
		 */
		getMaxTableNameLength(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxTablesInSelect()">
		 * <code>java.sql.DatabaseMetaData#getMaxTablesInSelect()</code></a>.
		 * 
		 * @returns The maximum number of tables this database allows in a <code>SELECT</code> statement. A
		 *     response of 0 indicates there is no known limit.
		 */
		getMaxTablesInSelect(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxUserNameLength()">
		 * <code>java.sql.DatabaseMetaData#getMaxUserNameLength()</code></a>.
		 * 
		 * @returns The maximum number of characters this database allows in a username. A response of 0
		 *     indicates there is no known limit.
		 */
		getMaxUserNameLength(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getNumericFunctions()">
		 * <code>java.sql.DatabaseMetaData#getNumericFunctions()</code></a>.
		 * 
		 * @returns The comma-separated list of math functions available with this database. These are the
		 *     Open/Open CLI math function names used in the JDBC function escape clause.
		 */
		getNumericFunctions(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getPrimaryKeys(java.lang.String,%20java.lang.String,%20java.lang.String)">
		 * <code>java.sql.DatabaseMetaData#getPrimaryKeys(String, String, String)</code></a>.
		 * 
		 * @param catalog - The catalog name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
		 *     incidates the catalog name isn't used to narrow the search.
		 * @param schema - The schema name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a schema. Passing <code>null</code> incidates
		 *     the schema name isn't used to narrow the search.
		 * @param table - The table name. It must match the table name as it is stored in the database.
		 * 
		 * @returns An result set containing the column descriptions for the primary key columns, one per
		 *     row, ordered by <code>COLUMN_NAME</code>.
		 */
		getPrimaryKeys(
			catalog: string,
			schema: string,
			table: string
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getProcedureColumns(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String)">
		 * <code>java.sql.DatabaseMetaData#getProcedureColumns(String, String, String, String)
		 *     </code></a>.
		 * 
		 * @param catalog - The catalog name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
		 *     incidates the catalog name isn't used to narrow the search.
		 * @param schemaPattern - The schema name pattern to filter the search by, as it appears in the
		 *     database. Passing an empty string retrieves those procedures without a schema. Passing
		 *     <code>null</code> incidates the schema name isn't used to narrow the search.
		 * @param procedureNamePattern - The procedure name pattern to filter the search by. It must match
		 *     the procedure name as it is stored in the database.
		 * @param columnNamePattern - The column name pattern to filter the search by. It must match the
		 *     column name as it is stored in the database.
		 * 
		 * @returns A result set containing the procedure and column descriptions, one per row.
		 */
		getProcedureColumns(
			catalog: string,
			schemaPattern: string,
			procedureNamePattern: string,
			columnNamePattern: string
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getProcedureTerm()">
		 * <code>java.sql.DatabaseMetaData#getProcedureTerm()</code></a>.
		 * 
		 * @returns The database vendor's preferred term for 'procedure'.
		 */
		getProcedureTerm(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getProcedures(java.lang.String,%20java.lang.String,%20java.lang.String)">
		 * <code>java.sql.DatabaseMetaData#getProcedures(String, String, String)</code></a>.
		 * 
		 * @param catalog - The catalog name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
		 *     incidates the catalog name isn't used to narrow the search.
		 * @param schemaPattern - The schema name pattern to filter the search by, as it appears in the
		 *     database. Passing an empty string retrieves those procedures without a schema. Passing
		 *     <code>null</code> incidates the schema name isn't used to narrow the search.
		 * @param procedureNamePattern - The procedure name pattern to filter the search by. It must match
		 *     the procedure name as it is stored in the database.
		 * 
		 * @returns A result set containing the procedure descriptions, one per row.
		 */
		getProcedures(
			catalog: string,
			schemaPattern: string,
			procedureNamePattern: string
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getResultSetHoldability()">
		 * <code>java.sql.DatabaseMetaData#getResultSetHoldability()</code></a>.
		 * 
		 * @returns The database default holdability; one of <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
		 */
		getResultSetHoldability(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getRowIdLifetime()">
		 * <code>java.sql.DatabaseMetaData#getRowIdLifetime()</code></a>.
		 * 
		 * @returns The status indicatig the lifetime of a <code>ROWID</code>, which is one of <code>Jdbc.RowIdLifetime.ROWID_UNSUPPORTED</code>, <code>Jdbc.RowIdLifetime.ROWID_VALID_OTHER</code>, <code>Jdbc.RowIdLifetime.ROWID_VALID_SESSION</code>, <code>Jdbc.RowIdLifetime.ROWID_VALID_TRANSACTION</code>, or <code>Jdbc.RowIdLifetime.ROWID_VALID_FOREVER</code>.
		 */
		getRowIdLifetime(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSQLKeywords()">
		 * <code>java.sql.DatabaseMetaData#getSQLKeywords()</code></a>.
		 * 
		 * @returns The comma-separated list of all this database's SQL keywords that aren't also SQL:2003
		 *     keywords.
		 */
		getSQLKeywords(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSQLStateType()">
		 * <code>java.sql.DatabaseMetaData#getSQLStateType()</code></a>.
		 * 
		 * @returns The type of <code>SQLSTATE</code>, which is either <code>sqlStateXOpen</code> or <code>sqlStateSQL</code>.
		 */
		getSQLStateType(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSchemaTerm()">
		 * <code>java.sql.DatabaseMetaData#getSchemaTerm()</code></a>.
		 * 
		 * @returns The database vendor's preferred term for 'schema'.
		 */
		getSchemaTerm(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSchemas()">
		 * <code>java.sql.DatabaseMetaData#getSchemas()</code></a>.
		 * 
		 * @returns A result set containing the schema descriptions, one per row.
		 */
		getSchemas(): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSchemas()">
		 * <code>java.sql.DatabaseMetaData#getSchemas()</code></a>.
		 * 
		 * @param catalog - The catalog name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
		 *     incidates the catalog name isn't used to narrow the search.
		 * @param schemaPattern - The schema name pattern to filter the search by, as it appears in the
		 *     database. Passing an empty string retrieves those procedures without a schema. Passing
		 *     <code>null</code> incidates the schema name isn't used to narrow the search.
		 * 
		 * @returns A result set containing scheme descriptions available in this database, ordered by
		 *     <code>TABLE_CATALOG</code> and <code>TABLE_SCHEM</code>.
		 */
		getSchemas(
			catalog: string,
			schemaPattern: string
		): Jdbc.JdbcResultSet

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSearchStringEscape()">
		 * <code>java.sql.DatabaseMetaData#getSearchStringEscape()</code></a>.
		 * 
		 * @returns The string that is used to escape wildcard characters such as '_' or '%'.
		 */
		getSearchStringEscape(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getStringFunctions()">
		 * <code>java.sql.DatabaseMetaData#getStringFunctions()</code></a>.
		 * 
		 * @returns The comma-separated list of string functions available with this database. These are
		 *     the Open Group CLI string function names used in the JDBC function escape clause.
		 */
		getStringFunctions(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSuperTables(java.lang.String,%20java.lang.String,%20java.lang.String)">
		 * <code>java.sql.DatabaseMetaData#getSuperTables(String, String,String)</code></a>.
		 * 
		 * @param catalog - The catalog name as it appears in the database. Passing an empty string
		 *     retrieves those procedures without a catalog. Passing <code>null</code> incidates the catalog
		 *     name isn't used in the selection criteria.
		 * @param schemaPattern - The schema name pattern to filter the search by, as it appears in the
		 *     database. Passing an empty string retrieves those procedures without a schema.
		 * @param tableNamePattern - The table name pattern; may be a fully qualified name.
		 * 
		 * @returns A result set containing descriptions of the table hierarchies defined in a particular
		 *     schema in this database. Each row provides information about a specific table type. Tables
		 *     without supers aren't listed.
		 */
		getSuperTables(
			catalog: string,
			schemaPattern: string,
			tableNamePattern: string
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSuperTypes(java.lang.String,%20java.lang.String,%20java.lang.String)">
		 * <code>java.sql.DatabaseMetaData#getSuperTypes(String, String, String)</code></a>.
		 * 
		 * @param catalog - The catalog name as it appears in the database. Passing an empty string
		 *     retrieves those procedures without a catalog. Passing <code>null</code> incidates the catalog
		 *     name isn't used in the selection criteria.
		 * @param schemaPattern - The schema name pattern to filter the search by, as it appears in the
		 *     database. Passing an empty string retrieves those procedures without a schema.
		 * @param typeNamePattern - The user-defined type name pattern; may be a fully qualified name.
		 * 
		 * @returns A result set containing descriptions of the user-defined type hierarchies defined in a
		 *     particular schema in this database. Each row provides information about a specific
		 *     user-defined type. Types without supers aren't listed.
		 */
		getSuperTypes(
			catalog: string,
			schemaPattern: string,
			typeNamePattern: string
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSystemFunctions()">
		 * <code>java.sql.DatabaseMetaData#getSystemFunctions()</code></a>.
		 * 
		 * @returns The comma-separated list of system functions available with this database. These are
		 *     the Open Group CLI system function names used in the JDBC function escape clause.
		 */
		getSystemFunctions(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTablePrivileges(java.lang.String,%20java.lang.String,%20java.lang.String)">
		 * <code>java.sql.DatabaseMetaData#getTablePrivileges(String, String, String)</code></a>.
		 * 
		 * @param catalog - The catalog name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
		 *     incidates the catalog name isn't used to narrow the search.
		 * @param schemaPattern - The schema name pattern to filter the search by, as it appears in the
		 *     database. Passing an empty string retrieves those procedures without a schema. Passing
		 *     <code>null</code> incidates the schema name isn't used to narrow the search.
		 * @param tableNamePattern - The table name pattern to filter the search by. It must match the table
		 *     name as it is stored in the database.
		 * 
		 * @returns A result set containing the table privilege descriptions, one per row, ordered by
		 *     <code>TABLE_CAT</code>, <code>TABLE_SCHEM</code>, <code>TABLE_NAME</code>, and <code>PRIVILEGE</code>.
		 */
		getTablePrivileges(
			catalog: string,
			schemaPattern: string,
			tableNamePattern: string
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTableTypes()">
		 * <code>java.sql.DatabaseMetaData#getTableTypes()</code></a>.
		 * 
		 * @returns A result set containing the table types, one per row.
		 */
		getTableTypes(): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTables(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String[])">
		 * <code>java.sql.DatabaseMetaData#getTables(String, String, String, String[])</code></a>.
		 * 
		 * @param catalog - The catalog name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
		 *     incidates the catalog name isn't used to narrow the search.
		 * @param schemaPattern - The schema name pattern to filter the search by, as it appears in the
		 *     database. Passing an empty string retrieves those procedures without a schema. Passing
		 *     <code>null</code> incidates the schema name isn't used to narrow the search.
		 * @param tableNamePattern - The table name pattern to filter the search by. It must match the table
		 *     name as it is stored in the database.
		 * @param types - A list of type types to return, each of which must be on the list that <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data.html#getTableTypes()'>getTableTypes()</a></code> returns. Passing <code>null</code> indictates that all table types are
		 *     returned.
		 * 
		 * @returns A result set containing the table descriptions, one per row, ordered according to
		 *     <code>TABLE_TYPE</code>, <code>TABLE_CAT</code>, <code>TABLE_SCHEM</code>, and <code>TABLE_NAME</code>.
		 */
		getTables(
			catalog: string,
			schemaPattern: string,
			tableNamePattern: string,
			types: string[]
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTimeDateFunctions()">
		 * <code>java.sql.DatabaseMetaData#getTimeDateFunctions()</code></a>.
		 * 
		 * @returns The comma-separated list of time and date functions available with this database.
		 */
		getTimeDateFunctions(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTypeInfo()">
		 * <code>java.sql.DatabaseMetaData#getTypeInfo()</code></a>.
		 * 
		 * @returns An result set containing the descriptions of data types supported by this database. One
		 *     SQL type description is provided in each row of the result set, and they are ordered by
		 *     <code>DATA_TYPE</code> and then by how closely the data type maps to the corresponding JDBC SQL
		 *     type.
		 */
		getTypeInfo(): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getUDTs(java.lang.String,%20java.lang.String,%20java.lang.String,%20int[])">
		 * <code>java.sql.DatabaseMetaData#getUDTs(String, String, String, int[])</code></a>.
		 * 
		 * @param catalog - The catalog name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
		 *     incidates the catalog name isn't used to narrow the search.
		 * @param schemaPattern - The schema name pattern to filter the search by, as it appears in the
		 *     database. Passing an empty string retrieves those procedures without a schema. Passing
		 *     <code>null</code> incidates the schema name isn't used to narrow the search.
		 * @param typeNamePattern - The type name pattern to filter the search by; may be a fully qualified
		 *     name.
		 * @param types - A list of user-defined types (<code>JAVA_OBJECT</code>, <code>STRUCT</code>, or <code>DISTINCT</code>) to include. Passing <code>null</code> indictates that all types are returned.
		 * 
		 * @returns A result set containing the user-defined type (UDT) descriptions, one per row, ordered
		 *     according to <code>DATA_TYPE</code>, <code>TYPE_CAT</code>, <code>TYPE_SCHEM</code>, and <code>TYPE_NAME</code>.
		 */
		getUDTs(
			catalog: string,
			schemaPattern: string,
			typeNamePattern: string,
			types: number[]
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getURL()"><code>
		 * java.sql.DatabaseMetaData#getURL()</code></a>.
		 * 
		 * @returns The URL for this database management system, or <code>null</code> if isn't generated.
		 */
		getURL(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getUserName()">
		 * <code>java.sql.DatabaseMetaData#getUserName()</code></a>.
		 * 
		 * @returns The username as known to this database.
		 */
		getUserName(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getVersionColumns(java.lang.String,%20java.lang.String,%20java.lang.String)">
		 * <code>java.sql.DatabaseMetaData#getVersionColumns(String, String, String)</code></a>.
		 * 
		 * @param catalog - The catalog name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a catalog. Passing <code>null</code>
		 *     incidates the catalog name isn't used to narrow the search.
		 * @param schema - The schema name to filter the search by, as it appears in the database. Passing
		 *     an empty string retrieves those procedures without a schema. Passing <code>null</code> incidates
		 *     the schema name isn't used to narrow the search.
		 * @param table - The table name. It must match the table name as it is stored in the database.
		 * 
		 * @returns An unordered result set containing the column descriptions that are updated when any
		 *     value in a row is updated (one column description per row in the result set).
		 */
		getVersionColumns(
			catalog: string,
			schema: string,
			table: string
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#insertsAreDetected(int)">
		 * <code>java.sql.DatabaseMetaData#insertsAreDetected(int)</code></a>.
		 * 
		 * @param type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
		 * 
		 * @returns <code>true</code> if for the specified result set type a visible row insert is detected by
		 *     calls to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set.html#rowInserted()'>JdbcResultSet.rowInserted()</a></code>; <code>false</code> otherwise.
		 */
		insertsAreDetected(
			type: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#isCatalogAtStart()">
		 * <code>java.sql.DatabaseMetaData#isCatalogAtStart()</code></a>.
		 * 
		 * @returns <code>true</code> if a catalog appears at the start of a fully-qualified table name; <code>false</code> otherwise.
		 */
		isCatalogAtStart(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#isReadOnly()">
		 * <code>java.sql.DatabaseMetaData#isReadOnly()</code></a>.
		 * 
		 * @returns <code>true</code> if the database is read-only; <code>false</code> otherwise.
		 */
		isReadOnly(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#locatorsUpdateCopy()">
		 * <code>java.sql.DatabaseMetaData#locatorsUpdateCopy()</code></a>.
		 * 
		 * @returns <code>true</code> if updates made to a Large Object (LOB) are made to a copy of th LOB;
		 *     <code>false</code> if updates are made directly to the LOB.
		 */
		locatorsUpdateCopy(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullPlusNonNullIsNull()">
		 * <code>java.sql.DatabaseMetaData#nullPlusNonNullIsNull()</code></a>.
		 * 
		 * @returns <code>true</code> if concatenations of <code>NULL</code> and non-<code>NULL</code> values result in a
		 *     <code>NULL</code>; <code>false</code> otherwise.
		 */
		nullPlusNonNullIsNull(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedAtEnd()">
		 * <code>java.sql.DatabaseMetaData#nullsAreSortedAtEnd()</code></a>.
		 * 
		 * @returns <code>true</code> if <code>NULL</code> values are sorted to the end regardless of sort order
		 *     (ascending or descending). Returns <code>false</code> otherwise.
		 */
		nullsAreSortedAtEnd(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedAtStart()">
		 * <code>java.sql.DatabaseMetaData#nullsAreSortedAtStart()</code></a>.
		 * 
		 * @returns <code>true</code> if <code>NULL</code> values are sorted to the start regardless of sort order
		 *     (ascending or descending). Returns <code>false</code> otherwise.
		 */
		nullsAreSortedAtStart(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedHigh()">
		 * <code>java.sql.DatabaseMetaData#nullsAreSortedHigh()</code></a>.
		 * 
		 * @returns <code>true</code> if the <code>NULL</code> values are sorted high, meaning they are considered to
		 *     have a value higher than others in the domain when sorting. Returns <code>false</code>
		 *     otherwise.
		 */
		nullsAreSortedHigh(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedLow()">
		 * <code>java.sql.DatabaseMetaData#nullsAreSortedLow()</code></a>.
		 * 
		 * @returns <code>true</code> if the <code>NULL</code> values are sorted low, meaning they are considered to
		 *     have a value lower than others in the domain when sorting. Returns <code>false</code> otherwise.
		 */
		nullsAreSortedLow(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#othersDeletesAreVisible(int)">
		 * <code>java.sql.DatabaseMetaData#othersDeletesAreVisible(int)</code></a>.
		 * 
		 * @param type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
		 * 
		 * @returns <code>true</code> if for the given result set type the deletes made by others are visible;
		 *     <code>false</code> otherwise.
		 */
		othersDeletesAreVisible(
			type: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#othersInsertsAreVisible(int)">
		 * <code>java.sql.DatabaseMetaData#othersInsertsAreVisible(int)</code></a>.
		 * 
		 * @param type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
		 * 
		 * @returns <code>true</code> if for the given result set type the inserts made by others are visible;
		 *     <code>false</code> otherwise.
		 */
		othersInsertsAreVisible(
			type: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#othersUpdatesAreVisible(int)">
		 * <code>java.sql.DatabaseMetaData#othersUpdatesAreVisible(int)</code></a>.
		 * 
		 * @param type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
		 * 
		 * @returns <code>true</code> if for the given result set type the updates made by others are visible;
		 *     <code>false</code> otherwise.
		 */
		othersUpdatesAreVisible(
			type: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#ownDeletesAreVisible(int)">
		 * <code>java.sql.DatabaseMetaData#ownDeletesAreVisible(int)</code></a>.
		 * 
		 * @param type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
		 * 
		 * @returns <code>true</code> if for the given result set type the set's own deletes are visible; <code>false</code> otherwise.
		 */
		ownDeletesAreVisible(
			type: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#ownInsertsAreVisible(int)">
		 * <code>java.sql.DatabaseMetaData#ownInsertsAreVisible(int)</code></a>.
		 * 
		 * @param type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
		 * 
		 * @returns <code>true</code> if for the given result set type the set's own inserts are visible; <code>false</code> otherwise.
		 */
		ownInsertsAreVisible(
			type: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#ownUpdatesAreVisible(int)">
		 * <code>java.sql.DatabaseMetaData#ownUpdatesAreVisible(int)</code></a>.
		 * 
		 * @param type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
		 * 
		 * @returns <code>true</code> if for the given result set type the set's own updates are visible; <code>false</code> otherwise.
		 */
		ownUpdatesAreVisible(
			type: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesLowerCaseIdentifiers()">
		 * <code>java.sql.DatabaseMetaData#storesLowerCaseIdentifiers()</code></a>.
		 * 
		 * @returns <code>true</code> if the database treats mixed case unquoted SQL identifiers as
		 *     case-insensitive and stores them in lowercase; <code>false</code> otherwise.
		 */
		storesLowerCaseIdentifiers(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesLowerCaseQuotedIdentifiers()">
		 * <code>java.sql.DatabaseMetaData#storesLowerCaseQuotedIdentifiers()</code></a>.
		 * 
		 * @returns <code>true</code> if the database treats mixed case quoted SQL identifiers as
		 *     case-insensitive and stores them in lowercase; <code>false</code> otherwise.
		 */
		storesLowerCaseQuotedIdentifiers(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesMixedCaseIdentifiers()">
		 * <code>java.sql.DatabaseMetaData#storesMixedCaseIdentifiers()</code></a>.
		 * 
		 * @returns <code>true</code> if the database treats mixed case unquoted SQL identifiers as
		 *     case-insensitive and stores them in mixed case; <code>false</code> otherwise.
		 */
		storesMixedCaseIdentifiers(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesMixedCaseQuotedIdentifiers()">
		 * <code>java.sql.DatabaseMetaData#storesMixedCaseQuotedIdentifiers()</code></a>.
		 * 
		 * @returns <code>true</code> if the database treats mixed case quoted SQL identifiers as
		 *     case-insensitive and stores them in mixed case; <code>false</code> otherwise.
		 */
		storesMixedCaseQuotedIdentifiers(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesUpperCaseIdentifiers()">
		 * <code>java.sql.DatabaseMetaData#storesUpperCaseIdentifiers()</code></a>.
		 * 
		 * @returns <code>true</code> if the database treats mixed case unquoted SQL identifiers as
		 *     case-insensitive and stores them in uppercase; <code>false</code> otherwise.
		 */
		storesUpperCaseIdentifiers(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesUpperCaseQuotedIdentifiers()">
		 * <code>java.sql.DatabaseMetaData#storesUpperCaseQuotedIdentifiers()</code></a>.
		 * 
		 * @returns <code>true</code> if the database treats mixed case quoted SQL identifiers as
		 *     case-insensitive and stores them in uppercase; <code>false</code> otherwise.
		 */
		storesUpperCaseQuotedIdentifiers(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsANSI92EntryLevelSQL()">
		 * <code>java.sql.DatabaseMetaData#supportsANSI92EntryLevelSQL()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports the ANSI92 entry level SQL grammar; <code>false</code> otherwise.
		 */
		supportsANSI92EntryLevelSQL(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsANSI92FullSQL()">
		 * <code>java.sql.DatabaseMetaData#supportsANSI92FullSQL()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports the ANSI92 full level SQL grammar; <code>false</code>
		 *     otherwise.
		 */
		supportsANSI92FullSQL(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsANSI92IntermediateSQL()">
		 * <code>java.sql.DatabaseMetaData#supportsANSI92IntermediateSQL()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports the ANSI92 intermediate level SQL grammar;
		 *     <code>false</code> otherwise.
		 */
		supportsANSI92IntermediateSQL(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsAlterTableWithAddColumn()">
		 * <code>java.sql.DatabaseMetaData#supportsAlterTableWithAddColumn()</code></a>.
		 * 
		 * @returns <code>true</code> if the database supports <code>ALTER TABLE</code> with add column; <code>false</code> otherwise.
		 */
		supportsAlterTableWithAddColumn(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsAlterTableWithDropColumn()">
		 * <code>java.sql.DatabaseMetaData#supportsAlterTableWithDropColumn()</code></a>.
		 * 
		 * @returns <code>true</code> if the database supports <code>ALTER TABLE</code> with drop column; <code>false</code> otherwise.
		 */
		supportsAlterTableWithDropColumn(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsBatchUpdates()">
		 * <code>java.sql.DatabaseMetaData#supportsBatchUpdates()</code></a>.
		 * 
		 * @returns <code>true</code> if the database supports batch updates; <code>false</code> otherwise.
		 */
		supportsBatchUpdates(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInDataManipulation()">
		 * <code>java.sql.DatabaseMetaData#supportsCatalogsInDataManipulation()</code></a>.
		 * 
		 * @returns <code>true</code> if a data manipulation statement can include a catalog name; <code>false</code>
		 *     otherwise.
		 */
		supportsCatalogsInDataManipulation(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInIndexDefinitions()">
		 * <code>java.sql.DatabaseMetaData#supportsCatalogsInIndexDefinitions()</code></a>.
		 * 
		 * @returns <code>true</code> if an index definition statement can include a catalog name; <code>false</code>
		 *     otherwise.
		 */
		supportsCatalogsInIndexDefinitions(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInPrivilegeDefinitions()">
		 * <code>java.sql.DatabaseMetaData#supportsCatalogsInPrivilegeDefinitions()</code></a>.
		 * 
		 * @returns <code>true</code> if a privilege definition statement can include a catalog name; <code>false</code> otherwise.
		 */
		supportsCatalogsInPrivilegeDefinitions(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInProcedureCalls()">
		 * <code>java.sql.DatabaseMetaData#supportsCatalogsInProcedureCalls()</code></a>.
		 * 
		 * @returns <code>true</code> if a procedure call statement can include a catalog name; <code>false</code>
		 *     otherwise.
		 */
		supportsCatalogsInProcedureCalls(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInTableDefinitions()">
		 * <code>java.sql.DatabaseMetaData#supportsCatalogsInTableDefinitions()</code></a>.
		 * 
		 * @returns <code>true</code> if a table definition statement can include a catalog name; <code>false</code>
		 *     otherwise.
		 */
		supportsCatalogsInTableDefinitions(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsColumnAliasing()">
		 * <code>java.sql.DatabaseMetaData#supportsColumnAliasing()</code></a>.
		 * 
		 * @returns <code>true</code> if the database supports column aliasing; <code>false</code> otherwise.
		 */
		supportsColumnAliasing(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsConvert()">
		 * <code>java.sql.DatabaseMetaData#supportsConvert()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports the JDBC scalar function <code>CONVERT</code> for the
		 *     conversion of one <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">JDBC type</a> to
		 *     another; <code>false</code> otherwise.
		 */
		supportsConvert(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsConvert(int,%20int)">
		 * <code>java.sql.DatabaseMetaData#supportsConvert(int, int)</code></a>.
		 * 
		 * @param fromType - The <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">
		 *     type</a> to convert from.
		 * @param toType - The <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">
		 *     type</a> to convert to.
		 * 
		 * @returns <code>true</code> if this database supports the JDBC scalar function <code>CONVERT</code> for the
		 *     conversion of the specified JDBC types; <code>false</code> otherwise.
		 */
		supportsConvert(
			fromType: number,
			toType: number
		): Boolean

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCoreSQLGrammar()">
		 * <code>java.sql.DatabaseMetaData#supportsCoreSQLGrammar()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports the ODBC Core SQL grammar; <code>false</code>
		 *     otherwise.
		 */
		supportsCoreSQLGrammar(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCorrelatedSubqueries()">
		 * <code>java.sql.DatabaseMetaData#supportsCorrelatedSubqueries()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports correlated subqueries; <code>false</code> otherwise.
		 */
		supportsCorrelatedSubqueries(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsDataDefinitionAndDataManipulationTransactions()">
		 * <code>java.sql.DatabaseMetaData#supportsDataDefinitionAndDataManipulationTransactions()</code>
		 * </a>.
		 * 
		 * @returns <code>true</code> if this database supports both data definition and data manipulation
		 *     statements within a transaction; <code>false</code> otherwise.
		 */
		supportsDataDefinitionAndDataManipulationTransactions(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsDataManipulationTransactionsOnly()">
		 * <code>java.sql.DatabaseMetaData#supportsDataManipulationTransactionsOnly()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports data manipulation statements within a
		 *     transaction; <code>false</code> otherwise.
		 */
		supportsDataManipulationTransactionsOnly(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsDifferentTableCorrelationNames()">
		 * <code>java.sql.DatabaseMetaData#supportsDifferentTableCorrelationNames()</code></a>.
		 * 
		 * @returns <code>true</code> if table correlation names are supported and are restricted to be
		 *     different frm the names of the tables in the database; <code>false</code> otherwise.
		 */
		supportsDifferentTableCorrelationNames(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsExpressionsInOrderBy()">
		 * <code>java.sql.DatabaseMetaData#supportsExpressionsInOrderBy()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports expressions in <code>ORDER BY</code> lists; <code>false</code> otherwise.
		 */
		supportsExpressionsInOrderBy(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsExtendedSQLGrammar()">
		 * <code>java.sql.DatabaseMetaData#supportsExtendedSQLGrammar()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports the ODBC Extended SQL grammar; <code>false</code>
		 *     otherwise.
		 */
		supportsExtendedSQLGrammar(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsFullOuterJoins()">
		 * <code>java.sql.DatabaseMetaData#supportsFullOuterJoins()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports full nested outer joins; <code>false</code>
		 *     otherwise.
		 */
		supportsFullOuterJoins(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGetGeneratedKeys()">
		 * <code>java.sql.DatabaseMetaData#supportsGetGeneratedKeys()</code></a>.
		 * 
		 * @returns <code>true</code> if auto-generated keys can be retrieved after a statement is executed;
		 *     <code>false</code> otherwise.
		 */
		supportsGetGeneratedKeys(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGroupBy()">
		 * <code>java.sql.DatabaseMetaData#supportsGroupBy()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports some form of <code>GROUP BY</code> clause; <code>false</code> otherwise.
		 */
		supportsGroupBy(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGroupByBeyondSelect()">
		 * <code>java.sql.DatabaseMetaData#supportsGroupByBeyondSelect()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports using columns that aren't in the <code>SELECT</code>
		 *     statement in a <code>GROUP BY</code> clause, provided that all the columns in the <code>SELECT</code>
		 *     statement are included in the <code>GROUP BY</code> clause. Returns <code>false</code> otherwise.
		 */
		supportsGroupByBeyondSelect(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGroupByUnrelated()">
		 * <code>java.sql.DatabaseMetaData#supportsGroupByUnrelated()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports using a column that isn't in the <code>SELECT</code>
		 *     statement in a <code>GROUP BY</code> clause; <code>false</code> otherwise.
		 */
		supportsGroupByUnrelated(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsIntegrityEnhancementFacility()">
		 * <code>java.sql.DatabaseMetaData#supportsIntegrityEnhancementFacility()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports the SQL Integrity Enhancement Facility; <code>false</code> otherwise.
		 */
		supportsIntegrityEnhancementFacility(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsLikeEscapeClause()">
		 * <code>java.sql.DatabaseMetaData#supportsLikeEscapeClause()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports specifying a <code>LIKE</code> escape clause; <code>false</code> otherwise.
		 */
		supportsLikeEscapeClause(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsLimitedOuterJoins()">
		 * <code>java.sql.DatabaseMetaData#supportsLimitedOuterJoins()</code></a>.
		 * 
		 * @returns <code>true</code> if this database provides limited support for outer joins; <code>false</code>
		 *     otherwise.
		 */
		supportsLimitedOuterJoins(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMinimumSQLGrammar()">
		 * <code>java.sql.DatabaseMetaData#supportsMinimumSQLGrammar()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports the ODBC Minimum SQL grammar; <code>false</code>
		 *     otherwise.
		 */
		supportsMinimumSQLGrammar(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMixedCaseIdentifiers()">
		 * <code>java.sql.DatabaseMetaData#supportsMixedCaseIdentifiers()</code></a>.
		 * 
		 * @returns <code>true</code> if the database treats mixed case unquoted SQL identifiers as
		 *     case-sensitive and as a result stores them in mixed case; <code>false</code> otherwise.
		 */
		supportsMixedCaseIdentifiers(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMixedCaseQuotedIdentifiers()">
		 * <code>java.sql.DatabaseMetaData#supportsMixedCaseQuotedIdentifiers()</code></a>.
		 * 
		 * @returns <code>true</code> if the database treats mixed case quoted SQL identifiers as case-sensitive
		 *     and as a result stores them in mixed case; <code>false</code> otherwise.
		 */
		supportsMixedCaseQuotedIdentifiers(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMultipleOpenResults()">
		 * <code>java.sql.DatabaseMetaData#supportsMultipleOpenResults()</code></a>.
		 * 
		 * @returns <code>true</code> if a callable statement can return multiple result sets simultenously;
		 *     <code>false</code> otherwise.
		 */
		supportsMultipleOpenResults(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMultipleResultSets()">
		 * <code>java.sql.DatabaseMetaData#supportsMultipleResultSets()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports getting multiple result sets from a single
		 *     execution call; <code>false</code> otherwise.
		 */
		supportsMultipleResultSets(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMultipleTransactions()">
		 * <code>java.sql.DatabaseMetaData#supportsMultipleTransactions()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports having multiple transactions on different
		 *     connections open at once; <code>false</code> otherwise.
		 */
		supportsMultipleTransactions(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsNamedParameters()">
		 * <code>java.sql.DatabaseMetaData#supportsNamedParameters()</code></a>.
		 * 
		 * @returns <code>true</code> if the database supports named parameters to callable statements; <code>false</code> otherwise.
		 */
		supportsNamedParameters(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsNonNullableColumns()">
		 * <code>java.sql.DatabaseMetaData#supportsNonNullableColumns()</code></a>.
		 * 
		 * @returns <code>true</code> if columns in this database may be defined as non-nullable; <code>false</code>
		 *     otherwise.
		 */
		supportsNonNullableColumns(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenCursorsAcrossCommit()">
		 * <code>java.sql.DatabaseMetaData#supportsOpenCursorsAcrossCommit()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports keeping cursors always open across commits;
		 *     <code>false</code> otherwise.
		 */
		supportsOpenCursorsAcrossCommit(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenCursorsAcrossRollback()">
		 * <code>java.sql.DatabaseMetaData#supportsOpenCursorsAcrossRollback()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports keeping cursors always open across rollbacks;
		 *     <code>false</code> otherwise.
		 */
		supportsOpenCursorsAcrossRollback(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenStatementsAcrossCommit()">
		 * <code>java.sql.DatabaseMetaData#supportsOpenStatementsAcrossCommit()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports keeping statements always open across commits;
		 *     <code>false</code> otherwise.
		 */
		supportsOpenStatementsAcrossCommit(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenStatementsAcrossRollback()">
		 * <code>java.sql.DatabaseMetaData#supportsOpenStatementsAcrossRollback()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports keeping statements always open across rollbacks;
		 *     <code>false</code> otherwise.
		 */
		supportsOpenStatementsAcrossRollback(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOrderByUnrelated()">
		 * <code>java.sql.DatabaseMetaData#supportsOrderByUnrelated()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports using a column that isn't in the <code>SELECT</code>
		 *     statement in an <code>ORDER BY</code> clause; <code>false</code> otherwise.
		 */
		supportsOrderByUnrelated(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOuterJoins()">
		 * <code>java.sql.DatabaseMetaData#supportsOuterJoins()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports some form of outer join; <code>false</code>
		 *     otherwise.
		 */
		supportsOuterJoins(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsPositionedDelete()">
		 * <code>java.sql.DatabaseMetaData#supportsPositionedDelete()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports positioned <code>DELETE</code> statements; <code>false</code> otherwise.
		 */
		supportsPositionedDelete(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsPositionedUpdate()">
		 * <code>java.sql.DatabaseMetaData#supportsPositionedUpdate()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports positioned <code>UPDATE</code> statements; <code>false</code> otherwise.
		 */
		supportsPositionedUpdate(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsResultSetConcurrency(int,%20int)">
		 * <code>java.sql.DatabaseMetaData#supportsResultSetConcurrency(int, int)</code></a>.
		 * 
		 * @param type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
		 * @param concurrency - The concurrency type, which is either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code> or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
		 * 
		 * @returns <code>true</code> if this database supports the specified result set and concurrency type
		 *     combination; <code>false</code> otherwise.
		 */
		supportsResultSetConcurrency(
			type: number,
			concurrency: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsResultSetHoldability(int)">
		 * <code>java.sql.DatabaseMetaData#supportsResultSetHoldability(int)</code></a>.
		 * 
		 * @param holdability - A holdability constant to check; one of <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
		 * 
		 * @returns <code>true</code> if the database the specified holdability; <code>false</code> otherwise.
		 */
		supportsResultSetHoldability(
			holdability: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsResultSetType(int)">
		 * <code>java.sql.DatabaseMetaData#supportsResultSetType(int)</code></a>.
		 * 
		 * @param type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
		 * 
		 * @returns <code>true</code> if this database supports the specified result set type; <code>false</code>
		 *     otherwise.
		 */
		supportsResultSetType(
			type: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSavepoints()">
		 * <code>java.sql.DatabaseMetaData#supportsSavepoints()</code></a>.
		 * 
		 * @returns <code>true</code> if the database supports savepoints; <code>false</code> otherwise.
		 */
		supportsSavepoints(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInDataManipulation()">
		 * <code>java.sql.DatabaseMetaData#supportsSchemasInDataManipulation()</code></a>.
		 * 
		 * @returns <code>true</code> if a data manipulation statement can include a schema name; <code>false</code>
		 *     otherwise.
		 */
		supportsSchemasInDataManipulation(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInIndexDefinitions()">
		 * <code>java.sql.DatabaseMetaData#supportsSchemasInIndexDefinitions()</code></a>.
		 * 
		 * @returns <code>true</code> if an index definition statement can include a schema name; <code>false</code>
		 *     otherwise.
		 */
		supportsSchemasInIndexDefinitions(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInPrivilegeDefinitions()">
		 * <code>java.sql.DatabaseMetaData#supportsSchemasInPrivilegeDefinitions()</code></a>.
		 * 
		 * @returns <code>true</code> if an privilege definition statement can include a schema name; <code>false</code> otherwise.
		 */
		supportsSchemasInPrivilegeDefinitions(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInProcedureCalls()">
		 * <code>java.sql.DatabaseMetaData#supportsSchemasInProcedureCalls()</code></a>.
		 * 
		 * @returns <code>true</code> if a procedure call statement can include a schema name; <code>false</code>
		 *     otherwise.
		 */
		supportsSchemasInProcedureCalls(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInTableDefinitions()">
		 * <code>java.sql.DatabaseMetaData#supportsSchemasInTableDefinitions()</code></a>.
		 * 
		 * @returns <code>true</code> if a table definition statement can include a schema name; <code>false</code>
		 *     otherwise.
		 */
		supportsSchemasInTableDefinitions(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSelectForUpdate()">
		 * <code>java.sql.DatabaseMetaData#supportsSelectForUpdate()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports <code>SELECT FOR UPDATE</code> statements; <code>false</code> otherwise.
		 */
		supportsSelectForUpdate(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsStatementPooling()">
		 * <code>java.sql.DatabaseMetaData#supportsStatementPooling()</code></a>.
		 * 
		 * @returns <code>true</code> if the database supports statement pooling; <code>false</code> otherwise.
		 */
		supportsStatementPooling(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsStoredFunctionsUsingCallSyntax()">
		 * <code>java.sql.DatabaseMetaData#supportsStoredFunctionsUsingCallSyntax()</code></a>.
		 * 
		 * @returns <code>true</code> if the database supports invoking user-defined or vendor functions using
		 *     the stored procedure escape syntax; <code>false</code> otherwise.
		 */
		supportsStoredFunctionsUsingCallSyntax(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsStoredProcedures()">
		 * <code>java.sql.DatabaseMetaData#supportsStoredProcedures()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports stored procedure calls that used the stored
		 *     procedure escape syntax; <code>false</code> otherwise.
		 */
		supportsStoredProcedures(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInComparisons()">
		 * <code>java.sql.DatabaseMetaData#supportsSubqueriesInComparisons()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports subqueries in comparison expressions; <code>false</code> otherwise.
		 */
		supportsSubqueriesInComparisons(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInExists()">
		 * <code>java.sql.DatabaseMetaData#supportsSubqueriesInExists()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports subqueries in <code>EXISTS</code> expressions; <code>false</code> otherwise.
		 */
		supportsSubqueriesInExists(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInIns()">
		 * <code>java.sql.DatabaseMetaData#supportsSubqueriesInIns()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports subqueries in <code>IN</code> expressions; <code>false</code> otherwise.
		 */
		supportsSubqueriesInIns(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInQuantifieds()">
		 * <code>java.sql.DatabaseMetaData#supportsSubqueriesInQuantifieds()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports subqueries in quantified expressions; <code>false</code> otherwise.
		 */
		supportsSubqueriesInQuantifieds(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsTableCorrelationNames()">
		 * <code>java.sql.DatabaseMetaData#supportsTableCorrelationNames()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports table corelation names; <code>false</code> otherwise.
		 */
		supportsTableCorrelationNames(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsTransactionIsolationLevel(int)">
		 * <code>java.sql.DatabaseMetaData#supportsTransactionIsolationLevel(int)</code></a>.
		 * 
		 * @param level - The transaction isolation level to determine the support of. This must be one of
		 *     <code>Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED</code>, <code>Jdbc.Connection.TRANSACTION_READ_COMMITTED</code>, <code>Jdbc.Connection.TRANSACTION_REPEATABLE_READ</code>, <code>Jdbc.Connection.TRANSACTION_SERIALIZABLE</code>, or <code>Jdbc.Connection.TRANSACTION_NONE</code>.
		 * 
		 * @returns <code>true</code> if this database supports the given transaction isolation level; <code>false</code> otherwise.
		 */
		supportsTransactionIsolationLevel(
			level: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsTransactions()">
		 * <code>java.sql.DatabaseMetaData#supportsTransactions()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports transactions; <code>false</code> otherwise.
		 */
		supportsTransactions(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsUnion()">
		 * <code>java.sql.DatabaseMetaData#supportsUnion()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports SQL <code>UNION</code>; <code>false</code> otherwise.
		 */
		supportsUnion(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsUnionAll()">
		 * <code>java.sql.DatabaseMetaData#supportsUnionAll()</code></a>.
		 * 
		 * @returns <code>true</code> if this database supports SQL <code>UNION ALL</code>; <code>false</code> otherwise.
		 */
		supportsUnionAll(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#updatesAreDetected(int)">
		 * <code>java.sql.DatabaseMetaData#updatesAreDetected(int)</code></a>.
		 * 
		 * @param type - The result set type, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
		 * 
		 * @returns <code>true</code> if for the specified result set type a visible row update is detected by
		 *     calls to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set.html#rowUpdated()'>JdbcResultSet.rowUpdated()</a></code>; <code>false</code> otherwise.
		 */
		updatesAreDetected(
			type: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#usesLocalFilePerTable()">
		 * <code>java.sql.DatabaseMetaData#usesLocalFilePerTable()</code></a>.
		 * 
		 * @returns <code>true</code> if the database stores each table in a separate local file; <code>false</code>
		 *     otherwise.
		 */
		usesLocalFilePerTable(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#usesLocalFiles()">
		 * <code>java.sql.DatabaseMetaData#usesLocalFiles()</code></a>.
		 * 
		 * @returns <code>true</code> if the database stores tables in a local file; <code>false</code> otherwise.
		 */
		usesLocalFiles(): Boolean

	}

	class JdbcDate {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#after(java.util.Date)">
		 * <code>java.sql.Date#after(date)</code></a>.
		 * 
		 * @param when - A date to compare to.
		 * 
		 * @returns <code>true</code> if and only if this date is strictly later than the provided date; <code>false</code> otherwise.
		 */
		after(
			when: Jdbc.JdbcDate
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#before(java.util.Date)">
		 * <code>java.sql.Date#before(date)</code></a>.
		 * 
		 * @param when - A date to compare to.
		 * 
		 * @returns <code>true</code> if and only if this date is strictly earlier than the provided date;
		 *     <code>false</code> otherwise.
		 */
		before(
			when: Jdbc.JdbcDate
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getDate()"><code>
		 * java.sql.Date#getDate()</code></a>.
		 * 
		 * @returns The day of the month represented by this date. The value is between 1 and 31.
		 */
		getDate(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getMonth()"><code>
		 * java.sql.Date#getMonth()</code></a>.
		 * 
		 * @returns The number representing the month that contains or begins with the instant in time
		 *     represented by this date. The value returned is between 0 and 11, with the value 0
		 *     representing January.
		 */
		getMonth(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getTime()"><code>
		 * java.sql.Date#getTime()</code></a>.
		 * 
		 * @returns The number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this
		 *     date.
		 */
		getTime(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getYear()"><code>
		 * java.sql.Date#getYear()</code></a>.
		 * 
		 * @returns The result of subtracting 1900 from the year that contains or begins with the instant
		 *     in time represented by this date, as interpreted in the local time zone.
		 */
		getYear(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setDate(int)"><code>
		 * java.sql.Date#setDate(int)</code></a>.
		 * 
		 * @param date - The day of the month to set. The value is between 1 and 31, modified as needed. For
		 *     example, if the date was April 30, for example, and the date is set to 31, then it is
		 *     treated as if it were on May 1, because April has only 30 days.
		 */
		setDate(
			date: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setMonth(int)"><code>
		 * java.sql.Date#setMonth(int)</code></a>.
		 * 
		 * @param month - The month value to set. The value returned is between 0 and 11, with the value 0
		 *     representing January.
		 */
		setMonth(
			month: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Date.html#setTime(long)"><code>
		 * java.sql.Date#setTime(int)</code></a>.
		 * 
		 * @param milliseconds - The number of milliseconds since January 1, 1970, 00:00:00 GMT, not to
		 *     exceed the milliseconds representation for the year 8099. A negative number indicates the
		 *     number of milliseconds before January 1, 1970, 00:00:00 GMT.
		 */
		setTime(
			milliseconds: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setYear(int)"><code>
		 * java.sql.Date#setYear(int)</code></a>.
		 * 
		 * @param year - The value to set the year with. This value plus 1900 is the resulting year the date
		 *     has after this method executes.
		 */
		setYear(
			year: number
		): void

	}

	class JdbcParameterMetaData {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterClassName(int)">
		 * <code>java.sql.ParameterMetaData#getParameterClassName(int)</code></a>.
		 * 
		 * @param param - The index of the parameter to examine. The first parameter has an index of 1.
		 * 
		 * @returns The fully-qualified Java class name that is used by the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement.html#setObject(Integer,Object)'>JdbcPreparedStatement.setObject(index, x)</a></code> methods.
		 */
		getParameterClassName(
			param: number
		): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterCount()">
		 * <code>java.sql.ParameterMetaData#getParameterCount()</code></a>.
		 * 
		 * @returns The number of parameters for which this metadata contains information.
		 */
		getParameterCount(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterMode(int)">
		 * <code>java.sql.ParameterMetaData#getParameterMode(int)</code></a>.
		 * 
		 * @param param - The index of the parameter to examine. The first parameter has an index of 1.
		 * 
		 * @returns The designated parameter's mode, which is one of <code>Jdbc.ParameterMetaData.parameterModeIn</code>, <code>Jdbc.ParameterMetaData.parameterModeOut</code>,
		 *     <code>Jdbc.ParameterMetaData.parameterModeInOut</code>, or <code>Jdbc.ParameterMetaData.parameterModeUnknown</code>.
		 */
		getParameterMode(
			param: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterType(int)">
		 * <code>java.sql.ParameterMetaData#getParameterType(int)</code></a>.
		 * 
		 * @param param - The index of the parameter to examine. The first parameter has an index of 1.
		 * 
		 * @returns The designated parameter's <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL type</a>.
		 */
		getParameterType(
			param: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterTypeName(int)">
		 * <code>java.sql.ParameterMetaData#getParameterTypeName(int)</code></a>.
		 * 
		 * @param param - The index of the parameter to examine. The first parameter has an index of 1.
		 * 
		 * @returns The designated parameter's database-specific type name. This is a fully-qualified type
		 *     name if the parameter is a user-defined type.
		 */
		getParameterTypeName(
			param: number
		): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getPrecision(int)">
		 * <code>java.sql.ParameterMetaData#getPrecision(int)</code></a>.
		 * 
		 * @param param - The index of the parameter to examine. The first parameter has an index of 1.
		 * 
		 * @returns The maximum column size for the given parameter. For numeric data, this is the maximum
		 *     precision. For character data, this is the length in characters. For datetime data, this is
		 *     the length in characters of the string representation (assuming the maximum allowed
		 *     precision of the fractional seconds component). For binary data, this is the length in
		 *     bytes. For the <code>ROWID</code> datatype, this is the length in bytes. Returns 0 for types
		 *     where the column size is not applicable.
		 */
		getPrecision(
			param: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getScale(int)">
		 * <code>java.sql.ParameterMetaData#getScale(int)</code></a>.
		 * 
		 * @param param - The index of the parameter to examine. The first parameter has an index of 1.
		 * 
		 * @returns The designated parameter's number of digits to right of the decimal point. Returns 0
		 *     for data types where the scale is not applicable.
		 */
		getScale(
			param: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#isNullable(int)">
		 * <code>java.sql.ParameterMetaData#isNullable(int)</code></a>.
		 * 
		 * @param param - The index of the parameter to examine. The first parameter has an index of 1.
		 * 
		 * @returns The nullability status of the given parameter; one of <code>Jdbc.ParameterMetaData.parameterNoNulls</code>, <code>Jdbc.ParameterMetaData.parameterNullable</code>,
		 *     or <code>Jdbc.ParameterMetaData.parameterNullableUnknown</code>.
		 */
		isNullable(
			param: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#isSigned(int))">
		 * <code>java.sql.ParameterMetaData#isSigned(int)</code></a>.
		 * 
		 * @param param - The index of the parameter to examine. The first parameter has an index of 1.
		 * 
		 * @returns <code>true</code> if the specified parameter can accept signed number values; <code>false</code>
		 *     otherwise.
		 */
		isSigned(
			param: number
		): Boolean

	}

	class JdbcPreparedStatement {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#addBatch()">
		 * <code>java.sql.PreparedStatement#addBatch()</code></a>.
		 */
		addBatch(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#addBatch(java.lang.String)">
		 * <code>java.sql.Statement#addBatch(String)</code></a>.
		 * 
		 * @param sql - The SQL command to add to this statement, typically an SQL <code>INSERT</code> or <code>UPDATE</code>.
		 */
		addBatch(
			sql: string
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#cancel()"><code>
		 * java.sql.Statement#cancel()</code></a>.
		 */
		cancel(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearBatch()"><code>
		 * java.sql.Statement#clearBatch()</code></a>.
		 */
		clearBatch(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#clearParameters()">
		 * <code>java.sql.PreparedStatement#clearParameters()</code></a>.
		 */
		clearParameters(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearWarnings()"><code>
		 * java.sql.Statement#clearWarnings()</code></a>.
		 */
		clearWarnings(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#close()"><code>
		 * java.sql.Statement#close()</code></a>.
		 */
		close(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#execute()">
		 * <code>java.sql.PreparedStatement#execute()</code></a>.
		 * 
		 * @returns <code>true</code> if the first result is a result set; <code>false</code> if the first result is
		 *     an update count or there is no result.
		 */
		execute(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String)">
		 * <code>java.sql.Statement#execute(String)</code></a>.
		 * 
		 * @param sql - The SQL statement to execute.
		 * 
		 * @returns <code>true</code> if the first result is a result set; <code>false</code> if it is an update
		 *     count or if there are no results.
		 */
		execute(
			sql: string
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20int)">
		 * <code>java.sql.Statement#execute(String, int)</code></a>.
		 * 
		 * @param sql - The SQL statement to execute.
		 * @param autoGeneratedKeys - A flag that indicates whether auto-generated keys are made available
		 *     for future retrieval; either <code>Jdbc.Statement.RETURN_GENERATED_KEYS</code> or <code>Jdbc.Statement.NO_GENERATED_KEYS</code>.
		 * 
		 * @returns <code>true</code> if the first result is a result set; <code>false</code> if it is an update
		 *     count or if there are no results.
		 */
		execute(
			sql: string,
			autoGeneratedKeys: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20int[])">
		 * <code>java.sql.Statement#execute(String, int[])</code></a>.
		 * 
		 * @param sql - The SQL statement to execute.
		 * @param columnIndexes - The column indices in the whose auto-generated keys are made available for
		 *     future retrieval.
		 * 
		 * @returns <code>true</code> if the first result is a result set; <code>false</code> if it is an update
		 *     count or if there are no results.
		 */
		execute(
			sql: string,
			columnIndexes: number[]
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20java.lang.String[])">
		 * <code>java.sql.Statement#execute(String, String[])</code></a>.
		 * 
		 * @param sql - The SQL statement to execute.
		 * @param columnNames - The names of columns in the whose auto-generated keys are made available for
		 *     future retrieval.
		 * 
		 * @returns <code>true</code> if the first result is a result set; <code>false</code> if it is an update
		 *     count or if there are no results.
		 */
		execute(
			sql: string,
			columnNames: string[]
		): Boolean

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeBatch()"><code>
		 * java.sql.Statement#executeBatch()</code></a>.
		 * 
		 * @returns The update counts for each command in the batch, using the same order in which commands
		 *     were added to the batch.
		 */
		executeBatch(): number[]
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#executeQuery()">
		 * <code>java.sql.PreparedStatement#executeQuery()</code></a>.
		 * 
		 * @returns A result set that contains the data produced by the query.
		 */
		executeQuery(): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeQuery(java.lang.String)">
		 * <code>java.sql.Statement#executeQuery(String)</code></a>.
		 * 
		 * @param sql - The SQL statement to execute, typically a static <code>SELECT</code>.
		 * 
		 * @returns A result set containing the results of the execution. This is never <code>null</code>.
		 */
		executeQuery(
			sql: string
		): Jdbc.JdbcResultSet

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#executeUpdate()">
		 * <code>java.sql.PreparedStatement#executeUpdate()</code></a>.
		 * 
		 * @returns The row count ofr SQL Data Manipulation Language statements, or 0 for SQL statements
		 *     that return nothing.
		 */
		executeUpdate(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String)">
		 * <code>java.sql.Statement#executeUpdate(String)</code></a>.
		 * 
		 * @param sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
		 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
		 *     statement).
		 * 
		 * @returns Either the row count for for Data Manipulation Language statements, or 0 for statements
		 *     that return nothing.
		 */
		executeUpdate(
			sql: string
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20int)">
		 * <code>java.sql.Statement#executeUpdate(String, int)</code></a>.
		 * 
		 * @param sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
		 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
		 *     statement).
		 * @param autoGeneratedKeys - A flag that indicates whether auto-generated keys are made available
		 *     for future retrieval; either <code>Jdbc.Statement.RETURN_GENERATED_KEYS</code> or <code>Jdbc.Statement.NO_GENERATED_KEYS</code>.
		 * 
		 * @returns Either the row count for for Data Manipulation Language statements, or 0 for statements
		 *     that return nothing.
		 */
		executeUpdate(
			sql: string,
			autoGeneratedKeys: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20int[])">
		 * <code>java.sql.Statement#executeUpdate(String, int[])</code></a>.
		 * 
		 * @param sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
		 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
		 *     statement).
		 * @param columnIndexes - The column indices in the whose auto-generated keys are made available for
		 *     future retrieval.
		 * 
		 * @returns Either the row count for for Data Manipulation Language statements, or 0 for statements
		 *     that return nothing.
		 */
		executeUpdate(
			sql: string,
			columnIndexes: number[]
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20java.lang.String[])">
		 * <code>java.sql.Statement#executeUpdate(String, String[])</code></a>.
		 * 
		 * @param sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
		 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
		 *     statement).
		 * @param columnNames - The names of columns in the whose auto-generated keys are made available for
		 *     future retrieval.
		 * 
		 * @returns Either the row count for for Data Manipulation Language statements, or 0 for statements
		 *     that return nothing.
		 */
		executeUpdate(
			sql: string,
			columnNames: string[]
		): number

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getConnection()"><code>
		 * java.sql.Statement#getConnection()</code></a>.
		 * 
		 * @returns The connection that produced this statement.
		 */
		getConnection(): Jdbc.JdbcConnection
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchDirection()">
		 * <code>java.sql.Statement#getFetchDirection()</code></a>.
		 * 
		 * @returns The default direction for result sets generated by this statement, which is either
		 *     <code>Jdbc.ResultSet.FETCH_FORWARD</code> or <code>Jdbc.ResultSet.FETCH_REVERSE</code>.
		 */
		getFetchDirection(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchSize()"><code>
		 * java.sql.Statement#getFetchSize()</code></a>.
		 * 
		 * @returns The default row fetch size for result sets generated from this statement.
		 */
		getFetchSize(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getGeneratedKeys()">
		 * <code>java.sql.Statement#getGeneratedKeys()</code></a>.
		 * 
		 * @returns A result set containing the auto-generated keys generated by the execution of this
		 *     statement.
		 */
		getGeneratedKeys(): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxFieldSize()">
		 * <code>java.sql.Statement#getMaxFieldSize()</code></a>.
		 * 
		 * @returns The current column byte size limit for columns storing character and binary values; a
		 *     value of zero indictates no limit.
		 */
		getMaxFieldSize(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxRows()"><code>
		 * java.sql.Statement#getMaxRows()</code></a>.
		 * 
		 * @returns The current maximum number of rows for a result set produced by this statement; a value
		 *     of 0 indicates no limit.
		 */
		getMaxRows(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#getMetaData()">
		 * <code>java.sql.PreparedStatement#getMetaData()</code></a>.
		 * 
		 * @returns The description of a result set's columns, or <code>NULL</code> if this metadata is
		 *     unavailable.
		 */
		getMetaData(): Jdbc.JdbcResultSetMetaData
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults()">
		 * <code>java.sql.Statement#getMoreResults()</code></a>.
		 * 
		 * @returns <code>true</code> if the next result is a result set; <code>false</code> otherwise.
		 */
		getMoreResults(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults(int)">
		 * <code>java.sql.Statement#getMoreResults(int)</code></a>.
		 * 
		 * @param current - A flag that indicates what happens to current result sets when retrieved. This
		 *     value is one of <code>Jdbc.Statement.CLOSE_CURRENT_RESULT</code>, <code>Jdbc.Statement.KEEP_CURRENT_RESULT</code>, or <code>Jdbc.Statement.CLOSE_ALL_RESULTS</code>.
		 * 
		 * @returns <code>true</code> if the next result is a result set; <code>false</code> otherwise.
		 */
		getMoreResults(
			current: number
		): Boolean

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#getParameterMetaData()">
		 * <code>java.sql.PreparedStatement#getParameterMetaData()</code></a>.
		 * 
		 * @returns The parameter metadata, including the number, types, and properties for each parameter.
		 */
		getParameterMetaData(): Jdbc.JdbcParameterMetaData
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getQueryTimeout()">
		 * <code>java.sql.Statement#getQueryTimeout()</code></a>.
		 * 
		 * @returns The current query timeout in seconds; a value of zero indicates no timeout.
		 */
		getQueryTimeout(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSet()"><code>
		 * java.sql.Statement#getResultSet()</code></a>.
		 * 
		 * @returns The current result set, or <code>null</code> if the result is an update count or there are
		 *     no more results.
		 */
		getResultSet(): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetConcurrency()">
		 * <code>java.sql.Statement#getResultSetConcurrency()</code></a>.
		 * 
		 * @returns The result set concurrency for result sets generated from this statement, which is
		 *     either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code> or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
		 */
		getResultSetConcurrency(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetHoldability()">
		 * <code>java.sql.Statement#getResultSetHoldability()</code></a>.
		 * 
		 * @returns The result set holdability, which is either <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
		 */
		getResultSetHoldability(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetType()">
		 * <code>java.sql.Statement#getResultSetType()</code></a>.
		 * 
		 * @returns The result set type for result sets generated from this statement, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or
		 *     <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
		 */
		getResultSetType(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getUpdateCount()">
		 * <code>java.sql.Statement#getUpdateCount()</code></a>.
		 * 
		 * @returns The current result as an update count, or -1 if the current result is a result set or
		 *     if there are no more results.
		 */
		getUpdateCount(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getWarnings()"><code>
		 * java.sql.Statement#getWarnings()</code></a>.
		 * 
		 * @returns The current set of warnings, or <code>null</code> if there are no warnings.
		 */
		getWarnings(): string[]
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isClosed()"><code>
		 * java.sql.Statement#isClosed()</code></a>.
		 * 
		 * @returns <code>true</code> if this statement is closed; <code>false</code> otherwise.
		 */
		isClosed(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isPoolable()"><code>
		 * java.sql.Statement#isPoolable()</code></a>.
		 * 
		 * @returns <code>true</code> if this statement is poolable; <code>false</code> otherwise.
		 */
		isPoolable(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setArray(int,%20java.sql.Array)">
		 * <code>java.sql.PreparedStatement#setArray(int, Array)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setArray(
			parameterIndex: number,
			x: Jdbc.JdbcArray
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBigDecimal(int,%20java.math.BigDecimal)">
		 * <code>java.sql.PreparedStatement#setBigDecimal(int, BigDecimal)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setBigDecimal(
			parameterIndex: number,
			x: BigNumber
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBlob(int,%20java.sql.Blob)">
		 * <code>java.sql.PreparedStatement#setBlob(int, Clob)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setBlob(
			parameterIndex: number,
			x: Jdbc.JdbcBlob
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBoolean(int,%20boolean)">
		 * <code>java.sql.PreparedStatement#setBoolean(int, boolean)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setBoolean(
			parameterIndex: number,
			x: Boolean
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setByte(int,%20byte)">
		 * <code>java.sql.PreparedStatement#setByte(int, byte)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setByte(
			parameterIndex: number,
			x: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBytes(int,%20byte[])">
		 * <code>java.sql.PreparedStatement#setBytes(int, byte[])</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setBytes(
			parameterIndex: number,
			x: number[]
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setClob(int,%20java.sql.Clob)">
		 * <code>java.sql.PreparedStatement#setClob(int, Clob)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setClob(
			parameterIndex: number,
			x: Jdbc.JdbcClob
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setCursorName(java.lang.String)">
		 * <code>java.sql.Statement#setCursorName(String)</code></a>.
		 * 
		 * @param name - The new cursor name, which must be unique within a connection.
		 */
		setCursorName(
			name: string
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDate(int,%20java.sql.Date)">
		 * <code>java.sql.PreparedStatement#setDate(int, Date)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setDate(
			parameterIndex: number,
			x: Jdbc.JdbcDate
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDate(int,%20java.sql.Date,%20java.util.Calendar)">
		 * <code>java.sql.PreparedStatement#setDate(int, Date, Calendar)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 */
		setDate(
			parameterIndex: number,
			x: Jdbc.JdbcDate,
			timeZone: string
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDouble(int,%20double)">
		 * <code>java.sql.PreparedStatement#setDouble(int, double)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setDouble(
			parameterIndex: number,
			x: Number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setEscapeProcessing(boolean)">
		 * <code>java.sql.Statement#setEscapeProcessing(boolean)</code></a>.
		 * 
		 * @param enable - If <code>true</code>, escape processing is enabled; otherwise it is disabled.
		 */
		setEscapeProcessing(
			enable: Boolean
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchDirection(int)">
		 * <code>java.sql.Statement#setFetchDirection(int)</code></a>.
		 * 
		 * @param direction - The specified direction to set, which is either <code>Jdbc.ResultSet.FETCH_FORWARD</code> or <code>Jdbc.ResultSet.FETCH_REVERSE</code>.
		 */
		setFetchDirection(
			direction: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchSize(int)">
		 * <code>java.sql.Statement#setFetchSize(int)</code></a>.
		 * 
		 * @param rows - The number of rows to fetch.
		 */
		setFetchSize(
			rows: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setFloat(int,%20float)">
		 * <code>java.sql.PreparedStatement#setFloat(int, float)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setFloat(
			parameterIndex: number,
			x: Number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setInt(int,%20int)">
		 * <code>java.sql.PreparedStatement#setInt(int, int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setInt(
			parameterIndex: number,
			x: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setLong(int,%20long)">
		 * <code>java.sql.PreparedStatement#setLong(int, long)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setLong(
			parameterIndex: number,
			x: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxFieldSize(int)">
		 * <code>java.sql.Statement#setMaxFieldSize(int)</code></a>.
		 * 
		 * @param max - The new column byte size limit; a value of zero indicates no limit.
		 */
		setMaxFieldSize(
			max: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxRows(int)"><code>
		 * java.sql.Statement#setMaxRows(int)</code></a>.
		 * 
		 * @param max - The maximum number of rows a result set generated by this statement can have. A
		 *     value of 0 indicates no limit.
		 */
		setMaxRows(
			max: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNClob(int,%20java.sql.NClob)">
		 * <code>java.sql.PreparedStatement#setNClob(int, NClob)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setNClob(
			parameterIndex: number,
			x: Jdbc.JdbcClob
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNString(int,%20java.lang.String)">
		 * <code>java.sql.PreparedStatement#setNString(int, String)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setNString(
			parameterIndex: number,
			x: string
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNull(int,%20int)">
		 * <code>java.sql.PreparedStatement#setNull(int, int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param sqlType - The <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL
		 *     type</a> of the specified parameter.
		 */
		setNull(
			parameterIndex: number,
			sqlType: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNull(int,%20int,%20java.lang.String)">
		 * <code>java.sql.PreparedStatement#setNull(int, int, String)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param sqlType - The <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL
		 *     type</a> of the specified parameter.
		 * @param typeName - The fully-qualifed name of an SQL user-defined type. Ignored if the parameter
		 *     isn't a user-defined type or <code>REF</code>.
		 */
		setNull(
			parameterIndex: number,
			sqlType: number,
			typeName: string
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int,%20java.lang.Object)">
		 * <code>java.sql.PreparedStatement#setObject(int, Object)</code></a>.
		 * 
		 * @param index - The index of the parameter to set (the first parameter is 1, the second is 2, and
		 *     so on).
		 * @param x - The object containing the value to set the parameter to.
		 */
		setObject(
			index: number,
			x: object
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int,%20java.lang.Object,%20int)">
		 * <code>java.sql.PreparedStatement#setObject(int, Object, int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The object containing the value to set the parameter to.
		 * @param targetSqlType - The <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL type</a> to send
		 *     to the database.
		 */
		setObject(
			parameterIndex: number,
			x: object,
			targetSqlType: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int,%20java.lang.Object,%20int,%20int)">
		 * <code>java.sql.PreparedStatement#setObject(int, Object, int, int)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The object containing the value to set the parameter to.
		 * @param targetSqlType - The <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL type</a> to send
		 *     to the database. The scale argument may further qualify this type.
		 * @param scaleOrLength - The number of digits after the decimal for <code>DECIMAL</code> or <code>NUMERIC</code> types, or the length of data for <code>InputStream</code> or <code>Reader</code> types.
		 *     Ignored for all other types.
		 */
		setObject(
			parameterIndex: number,
			x: object,
			targetSqlType: number,
			scaleOrLength: number
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setPoolable(boolean)">
		 * <code>java.sql.Statement#setPoolable(boolean)</code></a>.
		 * 
		 * @param poolable - If <code>true</code>, requests that this statement be pooled; otherwise requests it
		 *     not be pooled.
		 */
		setPoolable(
			poolable: Boolean
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setQueryTimeout(int)">
		 * <code>java.sql.Statement#setQueryTimeout(int)</code></a>.
		 * 
		 * @param seconds - The new query timeout in seconds; a value of 0 indicates no timeout.
		 */
		setQueryTimeout(
			seconds: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setRef(int,%20java.sql.Ref)">
		 * <code>java.sql.PreparedStatement#setRef(int, Ref)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The SQL <code>REF</code> value to set.
		 */
		setRef(
			parameterIndex: number,
			x: Jdbc.JdbcRef
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setRowId(int,%20java.sql.RowId)">
		 * <code>java.sql.PreparedStatement#setRowId(int, RowId)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setRowId(
			parameterIndex: number,
			x: Jdbc.JdbcRowId
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setSQLXML(int,%20java.sql.SQLXML)">
		 * <code>java.sql.PreparedStatement#setSQLXML(int, SQLXML)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setSQLXML(
			parameterIndex: number,
			x: Jdbc.JdbcSQLXML
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setShort(int,%20short)">
		 * <code>java.sql.PreparedStatement#setShort(int, short)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setShort(
			parameterIndex: number,
			x: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setString(int,%20java.lang.String)">
		 * <code>java.sql.PreparedStatement#setString(int, String)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setString(
			parameterIndex: number,
			x: string
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTime(int,%20java.sql.Time)">
		 * <code>java.sql.PreparedStatement#setTime(int, Time)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setTime(
			parameterIndex: number,
			x: Jdbc.JdbcTime
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTime(int,%20java.sql.Time,%20java.util.Calendar)">
		 * <code>java.sql.PreparedStatement#setTime(int, Time, Calendar)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 */
		setTime(
			parameterIndex: number,
			x: Jdbc.JdbcTime,
			timeZone: string
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTimestamp(int,%20java.sql.Timestamp)">
		 * <code>java.sql.PreparedStatement#setTimestamp(int, Timestamp)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setTimestamp(
			parameterIndex: number,
			x: Jdbc.JdbcTimestamp
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTimestamp(int,%20java.sql.Timestamp,%20java.util.Calendar)">
		 * <code>java.sql.PreparedStatement#setTimestamp(int, Timestamp, Calendar)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 */
		setTimestamp(
			parameterIndex: number,
			x: Jdbc.JdbcTimestamp,
			timeZone: string
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setURL(int,%20java.net.URL)">
		 * <code>java.sql.PreparedStatement#setURL(int, URL)</code></a>.
		 * 
		 * @param parameterIndex - The index of the parameter to set (the first parameter is 1, the second
		 *     is 2, and so on).
		 * @param x - The parameter value to set.
		 */
		setURL(
			parameterIndex: number,
			x: string
		): void

	}

	class JdbcRef {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Ref.html#getBaseTypeName()"><code>
		 * java.sql.Ref#getBaseTypeName()</code></a>.
		 * 
		 * @returns The fully-qualified SQL name of the SQL structured type this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-ref.html'>JdbcRef</a></code>
		 *     references.
		 */
		getBaseTypeName(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Ref.html#getObject()"><code>
		 * java.sql.Ref#getObject()</code></a>.
		 * 
		 * @returns The object that this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-ref.html'>JdbcRef</a></code> references.
		 */
		getObject(): object
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Ref.html#setObject(java.lang.Object)">
		 * <code>java.sql.Ref#setObject(Object)</code></a>.
		 * 
		 * @param object - The object to set as the refernence target.
		 */
		setObject(
			object: object
		): void

	}

	class JdbcResultSet {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#absolute(int)"><code>
		 * java.sql.ResultSet#absolute(int)</code></a>.
		 * 
		 * @param row - The number of the row to which the cursor moves to. A positive number indicates the
		 *     row number counting from the start of the result set, while a negative number indicates the
		 *     counting from the end of the result set.
		 * 
		 * @returns <code>true</code> if the cursor is moved to a position in this result set; <code>false</code> if
		 *     the cursor is before the first row or after the last row.
		 */
		absolute(
			row: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#afterLast()"><code>
		 * java.sql.ResultSet#afterLast()</code></a>.
		 */
		afterLast(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#beforeFirst()"><code>
		 * java.sql.ResultSet#beforeFirst()</code></a>.
		 */
		beforeFirst(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#cancelRowUpdates()">
		 * <code>java.sql.ResultSet#cancelRowUpdates()</code></a>.
		 */
		cancelRowUpdates(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#clearWarnings()"><code>
		 * java.sql.ResultSet#clearWarnings()</code></a>.
		 */
		clearWarnings(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#close()"><code>
		 * java.sql.ResultSet#close()</code></a>.
		 */
		close(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#deleteRow()"><code>
		 * java.sql.ResultSet#deleteRow()</code></a>.
		 */
		deleteRow(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#findColumn(java.lang.String)">
		 * <code>java.sql.ResultSet#findColumn(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The column index of the specified column.
		 */
		findColumn(
			columnLabel: string
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#first()"><code>
		 * java.sql.ResultSet#first()</code></a>.
		 * 
		 * @returns <code>true</code> if the cursor is on a valid row; <code>false</code> if there are no rows in the
		 *     result set.
		 */
		first(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getArray(int)"><code>
		 * java.sql.ResultSet#getArray(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve the data from (the first column is 1,
		 *     the second is 2, and so on).
		 * 
		 * @returns The value of the designated column in the current row of this result set as an array.
		 */
		getArray(
			columnIndex: number
		): Jdbc.JdbcArray
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getArray(java.lang.String)">
		 * <code>java.sql.ResultSet#getArray(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The value of the designated column in the current row of this result set as an array.
		 */
		getArray(
			columnLabel: string
		): Jdbc.JdbcArray

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBigDecimal(int)">
		 * <code>java.sql.ResultSet#getBigDecimal(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve the data from (the first column is 1,
		 *     the second is 2, and so on).
		 * 
		 * @returns The column value; <code>null</code> if the value was SQL <code>NULL</code>.
		 */
		getBigDecimal(
			columnIndex: number
		): BigNumber
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBigDecimal(java.lang.String)">
		 * <code>java.sql.ResultSet#getBigDecimal(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The column value; <code>null</code> if the value was SQL <code>NULL</code>.
		 */
		getBigDecimal(
			columnLabel: string
		): BigNumber

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBlob(int)"><code>
		 * java.sql.ResultSet#getBlob(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve the data from (the first column is 1,
		 *     the second is 2, and so on).
		 * 
		 * @returns The value of the designated column in the current row of this result set as a blob.
		 */
		getBlob(
			columnIndex: number
		): Jdbc.JdbcBlob
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBlob(java.lang.String)">
		 * <code>java.sql.ResultSet#getBlob(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The value of the designated column in the current row of this result set as a blob.
		 */
		getBlob(
			columnLabel: string
		): Jdbc.JdbcBlob

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBoolean(int)"><code>
		 * java.sql.ResultSet#getBoolean(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
		 *     and so on).
		 * 
		 * @returns The column value; <code>false</code> if the value was SQL <code>NULL</code>.
		 */
		getBoolean(
			columnIndex: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBoolean(java.lang.String)">
		 * <code>java.sql.ResultSet#getBoolean(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The column value; <code>false</code> if the value was SQL <code>NULL</code>.
		 */
		getBoolean(
			columnLabel: string
		): Boolean

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getByte(int)"><code>
		 * java.sql.ResultSet#getByte(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
		 *     and so on).
		 * 
		 * @returns The column value; 0 if the value was SQL <code>NULL</code>.
		 */
		getByte(
			columnIndex: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getByte(java.lang.String)">
		 * <code>java.sql.ResultSet#getByte(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The column value; 0 if the value was SQL <code>NULL</code>.
		 */
		getByte(
			columnLabel: string
		): number

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBytes(int)"><code>
		 * java.sql.ResultSet#getBytes(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
		 *     and so on).
		 * 
		 * @returns The column value; <code>null</code> if the value was SQL <code>NULL</code>.
		 */
		getBytes(
			columnIndex: number
		): number[]
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBytes(java.lang.String)">
		 * <code>java.sql.ResultSet#getBytes(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The column value; <code>null</code> if the value was SQL <code>NULL</code>.
		 */
		getBytes(
			columnLabel: string
		): number[]

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getClob(int)"><code>
		 * java.sql.ResultSet#getClob(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve the data from (the first column is 1,
		 *     the second is 2, and so on).
		 * 
		 * @returns The value of the designated column in the current row of this result set as a clob.
		 */
		getClob(
			columnIndex: number
		): Jdbc.JdbcClob
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getClob(java.lang.String)">
		 * <code>java.sql.ResultSet#getClob(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The value of the designated column in the current row of this result set as a clob.
		 */
		getClob(
			columnLabel: string
		): Jdbc.JdbcClob

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getConcurrency()">
		 * <code>java.sql.ResultSet#getConcurrency()</code></a>.
		 * 
		 * @returns The concurrency type, which is either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code> or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
		 */
		getConcurrency(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getCursorName()"><code>
		 * java.sql.ResultSet#getCursorName()</code></a>.
		 * 
		 * @returns The SQL name for this result set's cursor.
		 */
		getCursorName(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDate(int)"><code>
		 * java.sql.ResultSet#getDate(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
		 *     and so on).
		 * 
		 * @returns The column value; <code>null</code> if the value was SQL <code>NULL</code>.
		 */
		getDate(
			columnIndex: number
		): Jdbc.JdbcDate
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDate(int,%20java.util.Calendar)">
		 * <code>java.sql.ResultSet#getDate(int, Calendar)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
		 *     and so on).
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 * 
		 * @returns The column value; <code>null</code> if the value was SQL <code>NULL</code>.
		 */
		getDate(
			columnIndex: number,
			timeZone: string
		): Jdbc.JdbcDate
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDate(java.lang.String)">
		 * <code>java.sql.ResultSet#getDate(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The column value; <code>null</code> if the value was SQL <code>NULL</code>.
		 */
		getDate(
			columnLabel: string
		): Jdbc.JdbcDate
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDate(java.lang.String,%20java.util.Calendar)">
		 * <code>java.sql.ResultSet#getDate(String, Calendar)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 * 
		 * @returns The column value; <code>null</code> if the value was SQL <code>NULL</code>.
		 */
		getDate(
			columnLabel: string,
			timeZone: string
		): Jdbc.JdbcDate

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDouble(int)"><code>
		 * java.sql.ResultSet#getDouble(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
		 *     and so on).
		 * 
		 * @returns The column value; 0 if the value was SQL <code>NULL</code>.
		 */
		getDouble(
			columnIndex: number
		): Number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDouble(java.lang.String)">
		 * <code>java.sql.ResultSet#getDouble(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The column value; 0 if the value was SQL <code>NULL</code>.
		 */
		getDouble(
			columnLabel: string
		): Number

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFetchDirection()">
		 * <code>java.sql.ResultSet#getFetchDirection()</code></a>.
		 * 
		 * @returns The specified direction to set, which is either <code>Jdbc.ResultSet.FETCH_FORWARD</code> or
		 *     <code>Jdbc.ResultSet.FETCH_REVERSE</code>.
		 */
		getFetchDirection(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFetchSize()"><code>
		 * java.sql.ResultSet#getFetchSize()</code></a>.
		 * 
		 * @returns The current fetch size for this result set.
		 */
		getFetchSize(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFloat(int)"><code>
		 * java.sql.ResultSet#getFloat(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
		 *     and so on).
		 * 
		 * @returns The column value; 0 if the value was SQL <code>NULL</code>.
		 */
		getFloat(
			columnIndex: number
		): Number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFloat(java.lang.String)">
		 * <code>java.sql.ResultSet#getFloat(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The column value; 0 if the value was SQL <code>NULL</code>.
		 */
		getFloat(
			columnLabel: string
		): Number

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getHoldability()">
		 * <code>java.sql.ResultSet#getHoldability()</code></a>.
		 * 
		 * @returns The holdability of this result set, which is either <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
		 */
		getHoldability(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getInt(int)"><code>
		 * java.sql.ResultSet#getInt(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
		 *     and so on).
		 * 
		 * @returns The column value; 0 if the value was SQL <code>NULL</code>.
		 */
		getInt(
			columnIndex: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getInt(java.lang.String)">
		 * <code>java.sql.ResultSet#getInt(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The column value; 0 if the value was SQL <code>NULL</code>.
		 */
		getInt(
			columnLabel: string
		): number

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getLong(int)"><code>
		 * java.sql.ResultSet#getLong(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
		 *     and so on).
		 * 
		 * @returns The column value; 0 if the value was SQL <code>NULL</code>.
		 */
		getLong(
			columnIndex: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getLong(java.lang.String)">
		 * <code>java.sql.ResultSet#getLong(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The column value; 0 if the value was SQL <code>NULL</code>.
		 */
		getLong(
			columnLabel: string
		): number

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getMetaData()"><code>
		 * java.sql.ResultSet#getMetaData()</code></a>.
		 * 
		 * @returns The number, types, and properties of this result set's columns.
		 */
		getMetaData(): Jdbc.JdbcResultSetMetaData
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getNClob(int)"><code>
		 * java.sql.ResultSet#getNClob(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve the data from (the first column is 1,
		 *     the second is 2, and so on).
		 * 
		 * @returns The column value of the current row.
		 */
		getNClob(
			columnIndex: number
		): Jdbc.JdbcClob
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getNClob(java.lang.String)">
		 * <code>java.sql.ResultSet#getNClob(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The column value of the current row.
		 */
		getNClob(
			columnLabel: string
		): Jdbc.JdbcClob

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getNString(int)"><code>
		 * java.sql.ResultSet#getNString(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve the data from (the first column is 1,
		 *     the second is 2, and so on).
		 * 
		 * @returns The column value of the current row; <code>null</code> if the value is SQL <code>NULL</code>.
		 */
		getNString(
			columnIndex: number
		): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getNString(java.lang.String)">
		 * <code>java.sql.ResultSet#getNString(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The column value of the current row; <code>null</code> if the value is SQL <code>NULL</code>.
		 */
		getNString(
			columnLabel: string
		): string

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getObject(int)"><code>
		 * java.sql.ResultSet#getObject(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve the data from (the first column is 1,
		 *     the second is 2, and so on).
		 * 
		 * @returns The value of the designated column in the current row of this result set.
		 */
		getObject(
			columnIndex: number
		): object
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getObject(java.lang.String)">
		 * <code>java.sql.ResultSet#getObject(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The value of the designated column in the current row of this result set.
		 */
		getObject(
			columnLabel: string
		): object

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRef(int)"><code>
		 * java.sql.ResultSet#getRef(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve the data from (the first column is 1,
		 *     the second is 2, and so on).
		 * 
		 * @returns The value of the designated column in the current row of this result set as a
		 *     reference.
		 */
		getRef(
			columnIndex: number
		): Jdbc.JdbcRef
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRef(java.lang.String)">
		 * <code>java.sql.ResultSet#getRef(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The value of the designated column in the current row of this result set as a
		 *     reference.
		 */
		getRef(
			columnLabel: string
		): Jdbc.JdbcRef

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRow()"><code>
		 * java.sql.ResultSet#getRow()</code></a>.
		 * 
		 * @returns The current row number, or 0 if there is no current row.
		 */
		getRow(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRowId(int)"><code>
		 * java.sql.ResultSet#getRowId(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve the data from (the first column is 1,
		 *     the second is 2, and so on).
		 * 
		 * @returns The column row ID value; <code>null</code> if the value is SQL <code>NULL</code>.
		 */
		getRowId(
			columnIndex: number
		): Jdbc.JdbcRowId
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRowId(java.lang.String)">
		 * <code>java.sql.ResultSet#getRowId(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The column row ID value; <code>null</code> if the value is SQL <code>NULL</code>.
		 */
		getRowId(
			columnLabel: string
		): Jdbc.JdbcRowId

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getSQLXML(int)"><code>
		 * java.sql.ResultSet#getSQLXML(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve the data from (the first column is 1,
		 *     the second is 2, and so on).
		 * 
		 * @returns The column value of the current row.
		 */
		getSQLXML(
			columnIndex: number
		): Jdbc.JdbcSQLXML
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getSQLXML(java.lang.String)">
		 * <code>java.sql.ResultSet#getSQLXML(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The column value of the current row.
		 */
		getSQLXML(
			columnLabel: string
		): Jdbc.JdbcSQLXML

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getShort(int)"><code>
		 * java.sql.ResultSet#getShort(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
		 *     and so on).
		 * 
		 * @returns The column value; 0 if the value was SQL <code>NULL</code>.
		 */
		getShort(
			columnIndex: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getShort(java.lang.String)">
		 * <code>java.sql.ResultSet#getShort(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The column value; 0 if the value was SQL <code>NULL</code>.
		 */
		getShort(
			columnLabel: string
		): number

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getStatement()"><code>
		 * java.sql.ResultSet#getStatement()</code></a>.
		 * 
		 * @returns The statement that produced this result set, or <code>null</code> if the result set was
		 *     produced some other way.
		 */
		getStatement(): Jdbc.JdbcStatement
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getString(int)"><code>
		 * java.sql.ResultSet#getString(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
		 *     and so on).
		 * 
		 * @returns The column value; <code>null</code> if the value was SQL <code>NULL</code>.
		 */
		getString(
			columnIndex: number
		): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getString(java.lang.String)">
		 * <code>java.sql.ResultSet#getString(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The column value; <code>null</code> if the value was SQL <code>NULL</code>.
		 */
		getString(
			columnLabel: string
		): string

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTime(int)"><code>
		 * java.sql.ResultSet#getTime(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
		 *     and so on).
		 * 
		 * @returns The column value; <code>null</code> if the value was SQL <code>NULL</code>.
		 */
		getTime(
			columnIndex: number
		): Jdbc.JdbcTime
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTime(int,%20java.util.Calendar)">
		 * <code>java.sql.ResultSet#getTime(int, Calendar)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
		 *     and so on).
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 * 
		 * @returns The column value; <code>null</code> if the value was SQL <code>NULL</code>.
		 */
		getTime(
			columnIndex: number,
			timeZone: string
		): Jdbc.JdbcTime
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTime(java.lang.String)">
		 * <code>java.sql.ResultSet#getTime(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The column value; <code>null</code> if the value was SQL <code>NULL</code>.
		 */
		getTime(
			columnLabel: string
		): Jdbc.JdbcTime
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTime(java.lang.String,%20java.util.Calendar)">
		 * <code>java.sql.ResultSet#getTime(String, Calendar)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 * 
		 * @returns The column value; <code>null</code> if the value was SQL <code>NULL</code>.
		 */
		getTime(
			columnLabel: string,
			timeZone: string
		): Jdbc.JdbcTime

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTimestamp(int)">
		 * <code>java.sql.ResultSet#getTimestamp(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
		 *     and so on).
		 * 
		 * @returns The column value; <code>null</code> if the value was SQL <code>NULL</code>.
		 */
		getTimestamp(
			columnIndex: number
		): Jdbc.JdbcTimestamp
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTimestamp(int,%20java.util.Calendar)">
		 * <code>java.sql.ResultSet#getTimestamp(int, Calendar)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve (the first column is 1, the second is 2,
		 *     and so on).
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 * 
		 * @returns The column value; <code>null</code> if the value was SQL <code>NULL</code>.
		 */
		getTimestamp(
			columnIndex: number,
			timeZone: string
		): Jdbc.JdbcTimestamp
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTimestamp(java.lang.String)">
		 * <code>java.sql.ResultSet#getTimestamp(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The column value; <code>null</code> if the value was SQL <code>NULL</code>.
		 */
		getTimestamp(
			columnLabel: string
		): Jdbc.JdbcTimestamp
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTimestamp(java.lang.String,%20java.util.Calendar)">
		 * <code>java.sql.ResultSet#getTimestamp(String, Calendar)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param timeZone - A time zone string used to construct <a
		 *     href="https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html">
		 *     java.lang.Calendar</a> instance, which in turn is used to build the date. Several formats
		 *     of time zone strings are recognized: short IDs (such as <code>PST</code>, <code>EST</code>, and
		 *     <code>GMT</code>), long IDs (such as <code>US/Pacific</code> and <code>America/Los_Angeles</code>), and
		 *     offsets (such as <code>GMT+6:30</code>).
		 * 
		 * @returns The column value; <code>null</code> if the value was SQL <code>NULL</code>.
		 */
		getTimestamp(
			columnLabel: string,
			timeZone: string
		): Jdbc.JdbcTimestamp

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getType()"><code>
		 * java.sql.ResultSet#getType()</code></a>.
		 * 
		 * @returns The type of this result set, which is one of <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>,
		 *     <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
		 */
		getType(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getURL(int)"><code>
		 * java.sql.ResultSet#getURL(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to retrieve the data from (the first column is 1,
		 *     the second is 2, and so on).
		 * 
		 * @returns The URL value of the designated column in the current row of this result set.
		 */
		getURL(
			columnIndex: number
		): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getURL(java.lang.String)">
		 * <code>java.sql.ResultSet#getURL(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * 
		 * @returns The URL value of the designated column in the current row of this result set.
		 */
		getURL(
			columnLabel: string
		): string

		/**
		 * Returns the current set of warnings reported by the driver.
		 * 
		 * @returns The current set of warnings.
		 */
		getWarnings(): string[]
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#insertRow()"><code>
		 * java.sql.ResultSet#insertRow()</code></a>.
		 */
		insertRow(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isAfterLast()"><code>
		 * java.sql.ResultSet#isAfterLast()</code></a>.
		 * 
		 * @returns <code>true</code> if the cursor is after the last row; <code>false</code> if it is in any other
		 *     position or if the result set contains no rows.
		 */
		isAfterLast(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isBeforeFirst()"><code>
		 * java.sql.ResultSet#isBeforeFirst()</code></a>.
		 * 
		 * @returns <code>true</code> if the cursor is before the first row; <code>false</code> if it is in any other
		 *     position or if the result set contains no rows.
		 */
		isBeforeFirst(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isClosed()"><code>
		 * java.sql.ResultSet#isClosed()</code></a>.
		 * 
		 * @returns <code>true</code> if this result set is closed; <code>false</code> otherwise.
		 */
		isClosed(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isFirst()"><code>
		 * java.sql.ResultSet#isFirst()</code></a>.
		 * 
		 * @returns <code>true</code> if the cursor is on the first row; <code>false</code> otherwise.
		 */
		isFirst(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isLast()"><code>
		 * java.sql.ResultSet#isLast()</code></a>.
		 * 
		 * @returns <code>true</code> if the cursor is on the last row; <code>false</code> otherwise.
		 */
		isLast(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#last()"><code>
		 * java.sql.ResultSet#first()</code></a>.
		 * 
		 * @returns <code>true</code> if the cursor is on a valid row; <code>false</code> if there are no rows in the
		 *     result set.
		 */
		last(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#moveToCurrentRow()">
		 * <code>java.sql.ResultSet#moveToCurrentRow()</code></a>.
		 */
		moveToCurrentRow(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#moveToInsertRow()">
		 * <code>java.sql.ResultSet#moveToInsertRow()</code></a>.
		 */
		moveToInsertRow(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#next()"><code>
		 * java.sql.ResultSet#next()</code></a>.
		 * 
		 * @returns <code>true</code> if the new current row is valid; <code>false</code> otherwise.
		 */
		next(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#previous()"><code>
		 * java.sql.ResultSet#previous()</code></a>.
		 * 
		 * @returns <code>true</code> if the cursor is on a valid row; <code>false</code> if the cursor is positioned
		 *     before the first row.
		 */
		previous(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#refreshRow()"><code>
		 * java.sql.ResultSet#refreshRow()</code></a>.
		 */
		refreshRow(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#relative(int)"><code>
		 * java.sql.ResultSet#relative(int)</code></a>.
		 * 
		 * @param rows - The number row steps to move the cursor. A positive number moves the cursor
		 *     forward, while a negative number moves the cursor backward.
		 * 
		 * @returns <code>true</code> if the cursor is on a row; <code>false</code> otherwise.
		 */
		relative(
			rows: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#rowDeleted()"><code>
		 * java.sql.ResultSet#rowDeleted()</code></a>.
		 * 
		 * @returns <code>true</code> if the current row was visibly deleted; <code>false</code> otherwise.
		 */
		rowDeleted(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#rowInserted()"><code>
		 * java.sql.ResultSet#rowInserted()</code></a>.
		 * 
		 * @returns <code>true</code> if the current row was visibly inserted; <code>false</code> otherwise.
		 */
		rowInserted(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#rowUpdated()"><code>
		 * java.sql.ResultSet#rowUpdated()</code></a>.
		 * 
		 * @returns <code>true</code> if the current row was visibly updated; <code>false</code> otherwise.
		 */
		rowUpdated(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#setFetchDirection(int)">
		 * <code>java.sql.ResultSet#setFetchDirection(int)</code></a>.
		 * 
		 * @param direction - The specified direction to set, which is either <code>Jdbc.ResultSet.FETCH_FORWARD</code> or <code>Jdbc.ResultSet.FETCH_REVERSE</code>.
		 */
		setFetchDirection(
			direction: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#setFetchSize(int)">
		 * <code>java.sql.ResultSet#setFetchSize(int)</code></a>.
		 * 
		 * @param rows - The number of rows to fetch.
		 */
		setFetchSize(
			rows: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateArray(int,%20java.sql.Array)">
		 * <code>java.sql.ResultSet#updateArray(int, Array)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateArray(
			columnIndex: number,
			x: Jdbc.JdbcArray
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateArray(java.lang.String,%20java.sql.Array)">
		 * <code>java.sql.ResultSet#updateArray(String, Array)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateArray(
			columnLabel: string,
			x: Jdbc.JdbcArray
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBigDecimal(int,%20java.math.BigDecimal)">
		 * <code>java.sql.ResultSet#updateBigDecimal(int, BigDecimal)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateBigDecimal(
			columnIndex: number,
			x: BigNumber
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBigDecimal(java.lang.String,%20java.math.BigDecimal)">
		 * <code>java.sql.ResultSet#updateBigDecimal(String, BigDecimal)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateBigDecimal(
			columnLabel: string,
			x: BigNumber
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBlob(int,%20java.sql.Blob)">
		 * <code>java.sql.ResultSet#updateBlob(int, Blob)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateBlob(
			columnIndex: number,
			x: Jdbc.JdbcBlob
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBlob(java.lang.String,%20java.sql.Blob)">
		 * <code>java.sql.ResultSet#updateRef(String, Blob)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateBlob(
			columnLabel: string,
			x: Jdbc.JdbcBlob
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBoolean(int,%20boolean)">
		 * <code>java.sql.ResultSet#updateBoolean(int, boolean)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateBoolean(
			columnIndex: number,
			x: Boolean
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBoolean(java.lang.String,%20boolean)">
		 * <code>java.sql.ResultSet#updateBoolean(String, boolean)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateBoolean(
			columnLabel: string,
			x: Boolean
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateByte(int,%20byte)">
		 * <code>java.sql.ResultSet#updateByte(int, byte)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateByte(
			columnIndex: number,
			x: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateByte(java.lang.String,%20byte)">
		 * <code>java.sql.ResultSet#updateByte(String, byte)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateByte(
			columnLabel: string,
			x: number
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBytes(int,%20byte[])">
		 * <code>java.sql.ResultSet#updateBytes(int, byte[])</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateBytes(
			columnIndex: number,
			x: number[]
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBytes(java.lang.String,%20byte[])">
		 * <code>java.sql.ResultSet#updateBytes(String, byte[])</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateBytes(
			columnLabel: string,
			x: number[]
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateClob(int,%20java.sql.Clob)">
		 * <code>java.sql.ResultSet#updateClob(int, Clob)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateClob(
			columnIndex: number,
			x: Jdbc.JdbcClob
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateClob(java.lang.String,%20java.sql.Clob)">
		 * <code>java.sql.ResultSet#updateClob(String, Clob)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateClob(
			columnLabel: string,
			x: Jdbc.JdbcClob
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateDate(int,%20java.sql.Date)">
		 * <code>java.sql.ResultSet#updateDate(int, Date)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateDate(
			columnIndex: number,
			x: Jdbc.JdbcDate
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateDate(java.lang.String,%20java.sql.Date)">
		 * <code>java.sql.ResultSet#updateDate(String, Date)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateDate(
			columnLabel: string,
			x: Jdbc.JdbcDate
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateDouble(int,%20double)">
		 * <code>java.sql.ResultSet#updateDouble(int, double)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateDouble(
			columnIndex: number,
			x: Number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateDouble(java.lang.String,%20double)">
		 * <code>java.sql.ResultSet#updateDouble(String, double)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateDouble(
			columnLabel: string,
			x: Number
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateFloat(int,%20float)">
		 * <code>java.sql.ResultSet#updateFloat(int, float)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateFloat(
			columnIndex: number,
			x: Number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateFloat(java.lang.String,%20float)">
		 * <code>java.sql.ResultSet#updateFloat(String, float)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateFloat(
			columnLabel: string,
			x: Number
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateInt(int,%20int)">
		 * <code>java.sql.ResultSet#updateInt(int, int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateInt(
			columnIndex: number,
			x: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateInt(java.lang.String,%20int)">
		 * <code>java.sql.ResultSet#updateInt(String, int)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateInt(
			columnLabel: string,
			x: number
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateLong(int,%20long)">
		 * <code>java.sql.ResultSet#updateLong(int, long)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateLong(
			columnIndex: number,
			x: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateLong(java.lang.String,%20long)">
		 * <code>java.sql.ResultSet#updateLong(String, long)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateLong(
			columnLabel: string,
			x: number
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNClob(int,%20java.sql.NClob)">
		 * <code>java.sql.ResultSet#updateNClob(int, NClob)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateNClob(
			columnIndex: number,
			x: Jdbc.JdbcClob
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNClob(java.lang.String,%20java.sql.NClob)">
		 * <code>java.sql.ResultSet#updateNClob(String, NClob)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateNClob(
			columnLabel: string,
			x: Jdbc.JdbcClob
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNString(int,%20java.lang.String)">
		 * <code>java.sql.ResultSet#updateNString(int, String)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateNString(
			columnIndex: number,
			x: string
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNString(java.lang.String,%20java.lang.String)">
		 * <code>java.sql.ResultSet#updateNString(String, String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateNString(
			columnLabel: string,
			x: string
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNull(int)"><code>
		 * java.sql.ResultSet#updateNull(int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 */
		updateNull(
			columnIndex: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNull(java.lang.String)">
		 * <code>java.sql.ResultSet#updateNull(String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 */
		updateNull(
			columnLabel: string
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateObject(int,%20java.lang.Object)">
		 * <code>java.sql.ResultSet#updateObject(int, Object)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateObject(
			columnIndex: number,
			x: object
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateObject(int,%20java.lang.Object,%20int)">
		 * <code>java.sql.ResultSet#updateObject(int, Object, int)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 * @param scaleOrLength - The number of digits after the decimal for <code>BigDecimal</code> types, or
		 *     the length of data for <code>InputStream</code> or <code>Reader</code> types. Ignored for all other
		 *     types.
		 */
		updateObject(
			columnIndex: number,
			x: object,
			scaleOrLength: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateObject(java.lang.String,%20java.lang.Object)">
		 * <code>java.sql.ResultSet#updateObject(String, Object)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateObject(
			columnLabel: string,
			x: object
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateObject(java.lang.String,%20java.lang.Object,%20int)">
		 * <code>java.sql.ResultSet#updateObject(String, Object, int)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 * @param scaleOrLength - The number of digits after the decimal for <code>BigDecimal</code> types, or
		 *     the length of data for <code>InputStream</code> or <code>Reader</code> types. Ignored for all other
		 *     types.
		 */
		updateObject(
			columnLabel: string,
			x: object,
			scaleOrLength: number
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRef(int,%20java.sql.Ref)">
		 * <code>java.sql.ResultSet#updateRef(int, Ref)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateRef(
			columnIndex: number,
			x: Jdbc.JdbcRef
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRef(java.lang.String,%20java.sql.Ref)">
		 * <code>java.sql.ResultSet#updateRef(String, Ref)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateRef(
			columnLabel: string,
			x: Jdbc.JdbcRef
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRow()"><code>
		 * java.sql.ResultSet#updateRow()</code></a>.
		 */
		updateRow(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRowId(int,%20java.sql.RowId)">
		 * <code>java.sql.ResultSet#updateRowId(int, RowId)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateRowId(
			columnIndex: number,
			x: Jdbc.JdbcRowId
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRowId(java.lang.String,%20java.sql.RowId)">
		 * <code>java.sql.ResultSet#updateRowId(String, RowId)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateRowId(
			columnLabel: string,
			x: Jdbc.JdbcRowId
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateSQLXML(int,%20java.sql.SQLXML)">
		 * <code>java.sql.ResultSet#updateSQLXML(int, SQLXML)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateSQLXML(
			columnIndex: number,
			x: Jdbc.JdbcSQLXML
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateSQLXML(java.lang.String,%20java.sql.SQLXML)">
		 * <code>java.sql.ResultSet#updateSQLXML(String, SQLXML)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateSQLXML(
			columnLabel: string,
			x: Jdbc.JdbcSQLXML
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateShort(int,%20short)">
		 * <code>java.sql.ResultSet#updateShort(int, short)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateShort(
			columnIndex: number,
			x: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateShort(java.lang.String,%20short)">
		 * <code>java.sql.ResultSet#updateShort(String, short)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateShort(
			columnLabel: string,
			x: number
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateString(int,%20java.lang.String)">
		 * <code>java.sql.ResultSet#updateString(int, String)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateString(
			columnIndex: number,
			x: string
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateString(java.lang.String,%20java.lang.String)">
		 * <code>java.sql.ResultSet#updateString(String, String)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateString(
			columnLabel: string,
			x: string
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateTime(int,%20java.sql.Time)">
		 * <code>java.sql.ResultSet#updateTime(int, Time)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateTime(
			columnIndex: number,
			x: Jdbc.JdbcTime
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateTime(java.lang.String,%20java.sql.Time)">
		 * <code>java.sql.ResultSet#updateTime(String, Time)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateTime(
			columnLabel: string,
			x: Jdbc.JdbcTime
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateTimestamp(int,%20java.sql.Timestamp)">
		 * <code>java.sql.ResultSet#updateTimestamp(int, Timestamp)</code></a>.
		 * 
		 * @param columnIndex - The index of the column to update (the first column is 1, the second is 2,
		 *     and so on).
		 * @param x - The new column value.
		 */
		updateTimestamp(
			columnIndex: number,
			x: Jdbc.JdbcTimestamp
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateTimestamp(java.lang.String,%20java.sql.Timestamp)">
		 * <code>java.sql.ResultSet#updateTimestamp(String, Timestamp)</code></a>.
		 * 
		 * @param columnLabel - The label for the column, specified with the SQL AS clause. If the AS clause
		 *     wasn't specified, then the label is the name of the column.
		 * @param x - The new column value.
		 */
		updateTimestamp(
			columnLabel: string,
			x: Jdbc.JdbcTimestamp
		): void

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#wasNull()"><code>
		 * java.sql.ResultSet#wasNull()</code></a>.
		 * 
		 * @returns <code>true</code> if the last column read was SQL <code>NULL</code>; <code>false</code> otherwise.
		 */
		wasNull(): Boolean

	}

	class JdbcResultSetMetaData {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getCatalogName(int)">
		 * <code>java.sql.ResultSetMetaData#getCatalogName(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns The catalog name for the table in the designated column, or an empty string if not
		 *     applicable.
		 */
		getCatalogName(
			column: number
		): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnClassName(int)">
		 * <code>java.sql.ResultSetMetaData#getColumnClassName(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns The fully-qualified name of the class of the designated column's values.
		 */
		getColumnClassName(
			column: number
		): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnCount()">
		 * <code>java.sql.ResultSetMetaData#getColumnCount()</code></a>.
		 * 
		 * @returns The number of columns in this result set.
		 */
		getColumnCount(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnDisplaySize(int)">
		 * <code>java.sql.ResultSetMetaData#getColumnDisplaySize(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns The maximum number of characters allowed as the width of the designated columns.
		 */
		getColumnDisplaySize(
			column: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnLabel(int)">
		 * <code>java.sql.ResultSetMetaData#getColumnLabel(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns The designated column's suggested title, usually specifed by a SQL <code>AS</code> clause.
		 *     Returns the same as <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data.html#getColumnName(Integer)'>getColumnName(column)</a></code> if an <code>AS</code> is not specified.
		 */
		getColumnLabel(
			column: number
		): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnName(int)">
		 * <code>java.sql.ResultSetMetaData#getColumnName(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns The designated column's name.
		 */
		getColumnName(
			column: number
		): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnType(int)">
		 * <code>java.sql.ResultSetMetaData#getColumnType(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns The <a href="https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html">SQL
		 *     type</a> of the designated column.
		 */
		getColumnType(
			column: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnTypeName(int)">
		 * <code>java.sql.ResultSetMetaData#getColumnTypeName(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns The designated column's database-specific type name. Returns the fully-qualifed type
		 *     name if this is a user-defined type.
		 */
		getColumnTypeName(
			column: number
		): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getPrecision(int)">
		 * <code>java.sql.ResultSetMetaData#getPrecision(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns The maximum column size for the given column. For numeric data, this is the maximum
		 *     precision. For character data, this is the length in characters. For datetime data, this is
		 *     the length in characters of the string representation (assuming the maximum allowed
		 *     precision of the fractional seconds component). For binary data, this is the length in
		 *     bytes. For the <code>ROWID</code> datatype, this is the length in bytes. Returns 0 for types
		 *     where the column size is not applicable.
		 */
		getPrecision(
			column: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getScale(int)">
		 * <code>java.sql.ResultSetMetaData#getScale(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns The designated columns's number of digits to right of the decimal point. Returns 0 for
		 *     data types where the scale is not applicable.
		 */
		getScale(
			column: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getSchemaName(int)">
		 * <code>java.sql.ResultSetMetaData#getSchemaName(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns The table schema of the designated column.
		 */
		getSchemaName(
			column: number
		): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getTableName(int)">
		 * <code>java.sql.ResultSetMetaData#getTableName(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns The table name of the designated column, or an empty string if not applicable.
		 */
		getTableName(
			column: number
		): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isAutoIncrement(int)">
		 * <code>java.sql.ResultSetMetaData#isAutoIncrement(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns <code>true</code> if the specified column is automatically numbered; <code>false</code>
		 *     otherwise.
		 */
		isAutoIncrement(
			column: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isCaseSensitive(int)">
		 * <code>java.sql.ResultSetMetaData#isCaseSensitive(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns <code>true</code> if the specified column is case-sensitive; <code>false</code> otherwise.
		 */
		isCaseSensitive(
			column: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isCurrency(int)">
		 * <code>java.sql.ResultSetMetaData#isCurrency(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns <code>true</code> if the specified column is a cash value; <code>false</code> otherwise.
		 */
		isCurrency(
			column: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isDefinitelyWritable(int)">
		 * <code>java.sql.ResultSetMetaData#isDefinitelyWritable(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns <code>true</code> if writes to the designated column definitely succeed; <code>false</code>
		 *     otherwise.
		 */
		isDefinitelyWritable(
			column: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isNullable(int)">
		 * <code>java.sql.ResultSetMetaData#isNullable(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns The nullability status of the specified column, which is <code>Jdbc.ResultSetMetaData.columnNoNulls</code>, <code>Jdbc.ResultSetMetaData.columnNullable</code>, or
		 *     <code>Jdbc.ResultSetMetaData.columnNullableUnknown</code>.
		 */
		isNullable(
			column: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isReadOnly(int)">
		 * <code>java.sql.ResultSetMetaData#isReadOnly(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns <code>true</code> if the designated column is definitely non-writable; <code>false</code>
		 *     otherwise.
		 */
		isReadOnly(
			column: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isSearchable(int)">
		 * <code>java.sql.ResultSetMetaData#isSearchable(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns <code>true</code> if a where clause can use the specified column; <code>false</code> otherwise.
		 */
		isSearchable(
			column: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isSigned(int)">
		 * <code>java.sql.ResultSetMetaData#isSigned(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns <code>true</code> if the values in the specified column are signed numbers; <code>false</code>
		 *     otherwise.
		 */
		isSigned(
			column: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isWritable(int)">
		 * <code>java.sql.ResultSetMetaData#isWritable(int)</code></a>.
		 * 
		 * @param column - The index of the column to examine (the first column is 1, the second is 2, and
		 *     so on).
		 * 
		 * @returns <code>true</code> if it is possible to write to the designated column; <code>false</code>
		 *     otherwise.
		 */
		isWritable(
			column: number
		): Boolean

	}

	class JdbcRowId {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/RowId.html#getBytes()"><code>
		 * java.sql.RowId#getBytes()</code></a>.
		 * 
		 * @returns The bytes representing the <code>ROWID</code> represented by this <code><a target='_blank' href='https://developers.google.com/apps-script/reference/jdbc/jdbc-row-id.html'>JdbcRowId</a></code>.
		 */
		getBytes(): number[]

	}

	class JdbcSQLXML {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/SQLXML.html#free()"><code>
		 * java.sql.SQLXML#free()</code></a>.
		 */
		free(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/SQLXML.html#getString()"><code>
		 * java.sql.SQLXML#getString()</code></a>.
		 * 
		 * @returns The string representation of the XML value designated by this SQLXML instance.
		 */
		getString(): string
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/SQLXML.html#setString(java.lang.String)">
		 * <code>java.sql.SQLXML#setString(String)</code></a>.
		 * 
		 * @param value - The string representation of the XML value to set.
		 */
		setString(
			value: string
		): void

	}

	class JdbcSavepoint {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Savepoint.html#getSavepointId()">
		 * <code>java.sql.Savepoint#getSavepointId()</code></a>.
		 * 
		 * @returns The numeric ID of this savepoint.
		 */
		getSavepointId(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Savepoint.html#getSavepointName()">
		 * <code>java.sql.Savepoint#getSavepointName()</code></a>.
		 * 
		 * @returns The name of this savepoint.
		 */
		getSavepointName(): string

	}

	class JdbcStatement {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#addBatch(java.lang.String)">
		 * <code>java.sql.Statement#addBatch(String)</code></a>.
		 * 
		 * @param sql - The SQL command to add to this statement, typically an SQL <code>INSERT</code> or <code>UPDATE</code>.
		 */
		addBatch(
			sql: string
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#cancel()"><code>
		 * java.sql.Statement#cancel()</code></a>.
		 */
		cancel(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearBatch()"><code>
		 * java.sql.Statement#clearBatch()</code></a>.
		 */
		clearBatch(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearWarnings()"><code>
		 * java.sql.Statement#clearWarnings()</code></a>.
		 */
		clearWarnings(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#close()"><code>
		 * java.sql.Statement#close()</code></a>.
		 */
		close(): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String)">
		 * <code>java.sql.Statement#execute(String)</code></a>.
		 * 
		 * @param sql - The SQL statement to execute.
		 * 
		 * @returns <code>true</code> if the first result is a result set; <code>false</code> if it is an update
		 *     count or if there are no results.
		 */
		execute(
			sql: string
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20int)">
		 * <code>java.sql.Statement#execute(String, int)</code></a>.
		 * 
		 * @param sql - The SQL statement to execute.
		 * @param autoGeneratedKeys - A flag that indicates whether auto-generated keys are made available
		 *     for future retrieval; either <code>Jdbc.Statement.RETURN_GENERATED_KEYS</code> or <code>Jdbc.Statement.NO_GENERATED_KEYS</code>.
		 * 
		 * @returns <code>true</code> if the first result is a result set; <code>false</code> if it is an update
		 *     count or if there are no results.
		 */
		execute(
			sql: string,
			autoGeneratedKeys: number
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20int[])">
		 * <code>java.sql.Statement#execute(String, int[])</code></a>.
		 * 
		 * @param sql - The SQL statement to execute.
		 * @param columnIndexes - The column indices in the whose auto-generated keys are made available for
		 *     future retrieval.
		 * 
		 * @returns <code>true</code> if the first result is a result set; <code>false</code> if it is an update
		 *     count or if there are no results.
		 */
		execute(
			sql: string,
			columnIndexes: number[]
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20java.lang.String[])">
		 * <code>java.sql.Statement#execute(String, String[])</code></a>.
		 * 
		 * @param sql - The SQL statement to execute.
		 * @param columnNames - The names of columns in the whose auto-generated keys are made available for
		 *     future retrieval.
		 * 
		 * @returns <code>true</code> if the first result is a result set; <code>false</code> if it is an update
		 *     count or if there are no results.
		 */
		execute(
			sql: string,
			columnNames: string[]
		): Boolean

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeBatch()"><code>
		 * java.sql.Statement#executeBatch()</code></a>.
		 * 
		 * @returns The update counts for each command in the batch, using the same order in which commands
		 *     were added to the batch.
		 */
		executeBatch(): number[]
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeQuery(java.lang.String)">
		 * <code>java.sql.Statement#executeQuery(String)</code></a>.
		 * 
		 * @param sql - The SQL statement to execute, typically a static <code>SELECT</code>.
		 * 
		 * @returns A result set containing the results of the execution. This is never <code>null</code>.
		 */
		executeQuery(
			sql: string
		): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String)">
		 * <code>java.sql.Statement#executeUpdate(String)</code></a>.
		 * 
		 * @param sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
		 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
		 *     statement).
		 * 
		 * @returns Either the row count for for Data Manipulation Language statements, or 0 for statements
		 *     that return nothing.
		 */
		executeUpdate(
			sql: string
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20int)">
		 * <code>java.sql.Statement#executeUpdate(String, int)</code></a>.
		 * 
		 * @param sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
		 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
		 *     statement).
		 * @param autoGeneratedKeys - A flag that indicates whether auto-generated keys are made available
		 *     for future retrieval; either <code>Jdbc.Statement.RETURN_GENERATED_KEYS</code> or <code>Jdbc.Statement.NO_GENERATED_KEYS</code>.
		 * 
		 * @returns Either the row count for for Data Manipulation Language statements, or 0 for statements
		 *     that return nothing.
		 */
		executeUpdate(
			sql: string,
			autoGeneratedKeys: number
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20int[])">
		 * <code>java.sql.Statement#executeUpdate(String, int[])</code></a>.
		 * 
		 * @param sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
		 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
		 *     statement).
		 * @param columnIndexes - The column indices in the whose auto-generated keys are made available for
		 *     future retrieval.
		 * 
		 * @returns Either the row count for for Data Manipulation Language statements, or 0 for statements
		 *     that return nothing.
		 */
		executeUpdate(
			sql: string,
			columnIndexes: number[]
		): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20java.lang.String[])">
		 * <code>java.sql.Statement#executeUpdate(String, String[])</code></a>.
		 * 
		 * @param sql - The SQL Data Manipulation Language statement to execute (such as <code>INSERT</code>,
		 *     <code>UPDATE</code>, or <code>DELETE</code>), or else a statement that returns nothing (such as a DDL
		 *     statement).
		 * @param columnNames - The names of columns in the whose auto-generated keys are made available for
		 *     future retrieval.
		 * 
		 * @returns Either the row count for for Data Manipulation Language statements, or 0 for statements
		 *     that return nothing.
		 */
		executeUpdate(
			sql: string,
			columnNames: string[]
		): number

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getConnection()"><code>
		 * java.sql.Statement#getConnection()</code></a>.
		 * 
		 * @returns The connection that produced this statement.
		 */
		getConnection(): Jdbc.JdbcConnection
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchDirection()">
		 * <code>java.sql.Statement#getFetchDirection()</code></a>.
		 * 
		 * @returns The default direction for result sets generated by this statement, which is either
		 *     <code>Jdbc.ResultSet.FETCH_FORWARD</code> or <code>Jdbc.ResultSet.FETCH_REVERSE</code>.
		 */
		getFetchDirection(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchSize()"><code>
		 * java.sql.Statement#getFetchSize()</code></a>.
		 * 
		 * @returns The default row fetch size for result sets generated from this statement.
		 */
		getFetchSize(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getGeneratedKeys()">
		 * <code>java.sql.Statement#getGeneratedKeys()</code></a>.
		 * 
		 * @returns A result set containing the auto-generated keys generated by the execution of this
		 *     statement.
		 */
		getGeneratedKeys(): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxFieldSize()">
		 * <code>java.sql.Statement#getMaxFieldSize()</code></a>.
		 * 
		 * @returns The current column byte size limit for columns storing character and binary values; a
		 *     value of zero indictates no limit.
		 */
		getMaxFieldSize(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxRows()"><code>
		 * java.sql.Statement#getMaxRows()</code></a>.
		 * 
		 * @returns The current maximum number of rows for a result set produced by this statement; a value
		 *     of 0 indicates no limit.
		 */
		getMaxRows(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults()">
		 * <code>java.sql.Statement#getMoreResults()</code></a>.
		 * 
		 * @returns <code>true</code> if the next result is a result set; <code>false</code> otherwise.
		 */
		getMoreResults(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults(int)">
		 * <code>java.sql.Statement#getMoreResults(int)</code></a>.
		 * 
		 * @param current - A flag that indicates what happens to current result sets when retrieved. This
		 *     value is one of <code>Jdbc.Statement.CLOSE_CURRENT_RESULT</code>, <code>Jdbc.Statement.KEEP_CURRENT_RESULT</code>, or <code>Jdbc.Statement.CLOSE_ALL_RESULTS</code>.
		 * 
		 * @returns <code>true</code> if the next result is a result set; <code>false</code> otherwise.
		 */
		getMoreResults(
			current: number
		): Boolean

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getQueryTimeout()">
		 * <code>java.sql.Statement#getQueryTimeout()</code></a>.
		 * 
		 * @returns The current query timeout in seconds; a value of zero indicates no timeout.
		 */
		getQueryTimeout(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSet()"><code>
		 * java.sql.Statement#getResultSet()</code></a>.
		 * 
		 * @returns The current result set, or <code>null</code> if the result is an update count or there are
		 *     no more results.
		 */
		getResultSet(): Jdbc.JdbcResultSet
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetConcurrency()">
		 * <code>java.sql.Statement#getResultSetConcurrency()</code></a>.
		 * 
		 * @returns The result set concurrency for result sets generated from this statement, which is
		 *     either <code>Jdbc.ResultSet.CONCUR_READ_ONLY</code> or <code>Jdbc.ResultSet.CONCUR_UPDATABLE</code>.
		 */
		getResultSetConcurrency(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetHoldability()">
		 * <code>java.sql.Statement#getResultSetHoldability()</code></a>.
		 * 
		 * @returns The result set holdability, which is either <code>Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT</code> or <code>Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT</code>.
		 */
		getResultSetHoldability(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetType()">
		 * <code>java.sql.Statement#getResultSetType()</code></a>.
		 * 
		 * @returns The result set type for result sets generated from this statement, which is <code>Jdbc.ResultSet.TYPE_FORWARD_ONLY</code>, <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>, or
		 *     <code>Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE</code>.
		 */
		getResultSetType(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getUpdateCount()">
		 * <code>java.sql.Statement#getUpdateCount()</code></a>.
		 * 
		 * @returns The current result as an update count, or -1 if the current result is a result set or
		 *     if there are no more results.
		 */
		getUpdateCount(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getWarnings()"><code>
		 * java.sql.Statement#getWarnings()</code></a>.
		 * 
		 * @returns The current set of warnings, or <code>null</code> if there are no warnings.
		 */
		getWarnings(): string[]
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isClosed()"><code>
		 * java.sql.Statement#isClosed()</code></a>.
		 * 
		 * @returns <code>true</code> if this statement is closed; <code>false</code> otherwise.
		 */
		isClosed(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isPoolable()"><code>
		 * java.sql.Statement#isPoolable()</code></a>.
		 * 
		 * @returns <code>true</code> if this statement is poolable; <code>false</code> otherwise.
		 */
		isPoolable(): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setCursorName(java.lang.String)">
		 * <code>java.sql.Statement#setCursorName(String)</code></a>.
		 * 
		 * @param name - The new cursor name, which must be unique within a connection.
		 */
		setCursorName(
			name: string
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setEscapeProcessing(boolean)">
		 * <code>java.sql.Statement#setEscapeProcessing(boolean)</code></a>.
		 * 
		 * @param enable - If <code>true</code>, escape processing is enabled; otherwise it is disabled.
		 */
		setEscapeProcessing(
			enable: Boolean
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchDirection(int)">
		 * <code>java.sql.Statement#setFetchDirection(int)</code></a>.
		 * 
		 * @param direction - The specified direction to set, which is either <code>Jdbc.ResultSet.FETCH_FORWARD</code> or <code>Jdbc.ResultSet.FETCH_REVERSE</code>.
		 */
		setFetchDirection(
			direction: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchSize(int)">
		 * <code>java.sql.Statement#setFetchSize(int)</code></a>.
		 * 
		 * @param rows - The number of rows to fetch.
		 */
		setFetchSize(
			rows: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxFieldSize(int)">
		 * <code>java.sql.Statement#setMaxFieldSize(int)</code></a>.
		 * 
		 * @param max - The new column byte size limit; a value of zero indicates no limit.
		 */
		setMaxFieldSize(
			max: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxRows(int)"><code>
		 * java.sql.Statement#setMaxRows(int)</code></a>.
		 * 
		 * @param max - The maximum number of rows a result set generated by this statement can have. A
		 *     value of 0 indicates no limit.
		 */
		setMaxRows(
			max: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setPoolable(boolean)">
		 * <code>java.sql.Statement#setPoolable(boolean)</code></a>.
		 * 
		 * @param poolable - If <code>true</code>, requests that this statement be pooled; otherwise requests it
		 *     not be pooled.
		 */
		setPoolable(
			poolable: Boolean
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setQueryTimeout(int)">
		 * <code>java.sql.Statement#setQueryTimeout(int)</code></a>.
		 * 
		 * @param seconds - The new query timeout in seconds; a value of 0 indicates no timeout.
		 */
		setQueryTimeout(
			seconds: number
		): void

	}

	class JdbcStruct {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Struct.html#getAttributes()"><code>
		 * java.sql.Struct#getAttributes()</code></a>.
		 * 
		 * @returns The ordered attribute values of this structure.
		 */
		getAttributes(): object[]
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Struct.html#getSQLTypeName()"><code>
		 * java.sql.Struct#getSQLTypeName()</code></a>.
		 * 
		 * @returns The fully-qualified type name of the SQL structured type that this structure
		 *     represents.
		 */
		getSQLTypeName(): string

	}

	class JdbcTime {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#after(java.util.Date)">
		 * <code>java.sql.Date#after(Date)</code></a>.
		 * 
		 * @param when - A time to compare to.
		 * 
		 * @returns <code>true</code> if and only if this time is strictly later than the time specified as a
		 *     parameter; <code>false</code> otherwise.
		 */
		after(
			when: Jdbc.JdbcTime
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#before(java.util.Date)">
		 * <code>java.sql.Date#before(Date)</code></a>.
		 * 
		 * @param when - A time to compare to.
		 * 
		 * @returns <code>true</code> if and only if this time is strictly earlier than the time specified as a
		 *     parameter; <code>false</code> otherwise.
		 */
		before(
			when: Jdbc.JdbcTime
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getHours()"><code>
		 * java.sql.Date#getHours()</code></a>.
		 * 
		 * @returns The hour represented by this object; the value is a number (0 through 23) representing
		 *     the hour within the day that contains or begins with the instant in time represented by
		 *     this object, as interpreted in the local time zone.
		 */
		getHours(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getMinutes()"><code>
		 * java.sql.Date#getMinutes()</code></a>.
		 * 
		 * @returns The minutes past the hour represented by this object, as interpreted in the local time
		 *     zone. The value is a number between 0 through 59 inclusive.
		 */
		getMinutes(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getSeconds()"><code>
		 * java.sql.Date#getSeconds()</code></a>.
		 * 
		 * @returns The seconds past the minute represented by this object, as interpreted in the local
		 *     time zone. The value is a number between 0 through 61 inclusive, whiere 60 and 61 are only
		 *     possible for machines that take leap seconds into account.
		 */
		getSeconds(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getTime()"><code>
		 * java.sql.Date#getTime()</code></a>.
		 * 
		 * @returns The number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this time
		 *     object.
		 */
		getTime(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setHours(int)"><code>
		 * java.sql.Date#setHours(int)</code></a>.
		 * 
		 * @param hours - The hour to set; this object is updated to represent a point in time within the
		 *     specified hour of the day, with the year, month, date, minute, and second the same as
		 *     before, as interpreted in the local time zone.
		 */
		setHours(
			hours: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setMinutes(int)"><code>
		 * java.sql.Date#setMinutes(int)</code></a>.
		 * 
		 * @param minutes - The minutes to set; this object is updated to represent a point in time within
		 *     the specified minute of the hour, with the year, month, date, hour, and second the same as
		 *     before, as interpreted in the local time zone.
		 */
		setMinutes(
			minutes: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setSeconds(int)"><code>
		 * java.sql.Date#setSeconds(int)</code></a>.
		 * 
		 * @param seconds - The seconds to set; this object is updated to represent a point in time within
		 *     the specified second of the minute, with the year, month, date, hour, and minute the same
		 *     as before, as interpreted in the local time zone.
		 */
		setSeconds(
			seconds: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Time.html#setTime(long)"><code>
		 * java.sql.Time#setTime(long)</code></a>.
		 * 
		 * @param milliseconds - The time value to set. The value is milliseconds since January 1, 1970,
		 *     00:00:00 GMT, while a negative number is milliseconds before that time.
		 */
		setTime(
			milliseconds: number
		): void

	}

	class JdbcTimestamp {
		private constructor();

		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#after(java.sql.Timestamp)">
		 * <code>java.sql.Timestamp#after(Timestamp)</code></a>.
		 * 
		 * @param when - A timestamp to compare to.
		 * 
		 * @returns <code>true</code> if and only if this timestampe is strictly later than the timestamp
		 *     specified as a parameter; <code>false</code> otherwise.
		 */
		after(
			when: Jdbc.JdbcTimestamp
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#before(java.sql.Timestamp)">
		 * <code>java.sql.Timestamp#before(Timestamp)</code></a>.
		 * 
		 * @param when - A timestamp to compare to.
		 * 
		 * @returns <code>true</code> if and only if this timestamp is strictly earlier than the timestamp
		 *     specified as a parameter; <code>false</code> otherwise.
		 */
		before(
			when: Jdbc.JdbcTimestamp
		): Boolean
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getDate()"><code>
		 * java.sql.Date#getDate()</code></a>.
		 * 
		 * @returns The day of the month represented by this timestamp. The value returned is between 1 and
		 *     31 representing the day of the month that contains or begins with the instant in time
		 *     represented by this timestamp, as interpreted in the local time zone.
		 */
		getDate(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getHours()"><code>
		 * java.sql.Date#getHours()</code></a>.
		 * 
		 * @returns The hour represented by this object; the value is a number (0 through 23) representing
		 *     the hour within the day that contains or begins with the instant in time represented by
		 *     this object, as interpreted in the local time zone.
		 */
		getHours(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getMinutes()"><code>
		 * java.sql.Date#getMinutes()</code></a>.
		 * 
		 * @returns The minutes past the hour represented by this object, as interpreted in the local time
		 *     zone. The value is a number between 0 through 59 inclusive.
		 */
		getMinutes(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getMonth()"><code>
		 * java.sql.Date#getMonth()</code></a>.
		 * 
		 * @returns The month that contains or begins with the instant in time represented by this
		 *     timestamp. The value returned is between 0 and 11, with the value 0 representing January.
		 */
		getMonth(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#getNanos()"><code>
		 * java.sql.Timestamp#getNanos()</code></a>.
		 * 
		 * @returns This timestamp's fractional seconds value (nanoseconds).
		 */
		getNanos(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getSeconds()"><code>
		 * java.sql.Date#getSeconds()</code></a>.
		 * 
		 * @returns The seconds past the minute represented by this object, as interpreted in the local
		 *     time zone. The value is a number between 0 through 61 inclusive, whiere 60 and 61 are only
		 *     possible for machines that take leap seconds into account.
		 */
		getSeconds(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#getTime()"><code>
		 * java.sql.Timestamp#getTime()</code></a>.
		 * 
		 * @returns The number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this time
		 *     object.
		 */
		getTime(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getYear()"><code>
		 * java.sql.Date#getYear()</code></a>.
		 * 
		 * @returns A value that is the result of subtracting 1900 from the year that contains or begins
		 *     with the instant in time represented by this timestampe, as interpreted in the local time
		 *     zone.
		 */
		getYear(): number
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setDate(int)"><code>
		 * java.sql.Date#setDate(int)</code></a>.
		 * 
		 * @param date - The day of month to set. This timestamp is updated to represent a point in time
		 *     within the specified day of month, with the year, month, hour, minute, and second the same
		 *     as before, as interpreted in the local time zone. If the date was April 30, for example,
		 *     and the date is set to 31, then it is treated as if it were on May 1, because April has
		 *     only 30 days.
		 */
		setDate(
			date: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setHours(int)"><code>
		 * java.sql.Date#setHours(int)</code></a>.
		 * 
		 * @param hours - The hour to set; this object is updated to represent a point in time within the
		 *     specified hour of the day, with the year, month, date, minute, and second the same as
		 *     before, as interpreted in the local time zone.
		 */
		setHours(
			hours: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setMinutes(int)"><code>
		 * java.sql.Date#setMinutes(int)</code></a>.
		 * 
		 * @param minutes - The minutes to set; this object is updated to represent a point in time within
		 *     the specified minute of the hour, with the year, month, date, hour, and second the same as
		 *     before, as interpreted in the local time zone.
		 */
		setMinutes(
			minutes: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setMonth(int)"><code>
		 * java.sql.Date#setMonth(int)</code></a>.
		 * 
		 * @param month - The month to set. This timestamp is updated to represent a point in time within
		 *     the specified month, with the year, date, hour, minute, and second the same as before, as
		 *     interpreted in the local time zone. If the date was October 31, for example, and the month
		 *     is set to June, then the new date is treated as if it were on July 1, because June has only
		 *     30 days.
		 */
		setMonth(
			month: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#setNanos(int)"><code>
		 * java.sql.Timestamp#setNanos(int)</code></a>.
		 * 
		 * @param nanoseconds - The new fractional seconds value.
		 */
		setNanos(
			nanoseconds: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setSeconds(int)"><code>
		 * java.sql.Date#setSeconds(int)</code></a>.
		 * 
		 * @param seconds - The seconds to set; this object is updated to represent a point in time within
		 *     the specified second of the minute, with the year, month, date, hour, and minute the same
		 *     as before, as interpreted in the local time zone.
		 */
		setSeconds(
			seconds: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#setTime(long)"><code>
		 * java.sql.Timestamp#setTime(long)</code></a>.
		 * 
		 * @param milliseconds - The time value to set. The value is milliseconds since January 1, 1970,
		 *     00:00:00 GMT.
		 */
		setTime(
			milliseconds: number
		): void
		/**
		 * For documentation of this method, see <a
		 * href="https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setYear(int)"><code>
		 * java.sql.Date#setYear(int)</code></a>.
		 * 
		 * @param year - The year value to set; the timestamp's year is set to this value plus 1900. This
		 *     timestamp is updated to represent a point in time within the specified year, with the
		 *     month, date, hour, minute, and second the same as before, as interpreted in the local time
		 *     zone. If the date was February 29, for example, and the year is set to a non-leap year,
		 *     then the new date is treated as if it were on March 1.
		 */
		setYear(
			year: number
		): void

	}

}
