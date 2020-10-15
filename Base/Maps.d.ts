/** Module: Maps */

type Maps = typeof Maps;
declare namespace Maps {

	/**
	 * Decodes an encoded polyline string back into an array of points.
	 * 
	 * <pre class="prettyprint"><code>
	 * // Decodes a string representation of the latitudes and longitudes of Minneapolis and Milwaukee
	 * // respectively.
	 * var polyline = &#39;qvkpG`qhxPbgyI_zq_@&#39;;
	 * var points = Maps.decodePolyline(polyline);
	 * for (var i = 0; i &lt; points.length; i+= 2) {
	 *   Logger.log(&#39;%s, %s&#39;, points[i], points[i+1]);
	 * }
	 * </code></pre>
	 * 
	 * @param polyline - An encoded polyline to decode.
	 * 
	 * @returns An array of latitude longitude pairs (lat0, long0, lat1, long1, ...).
	 */
	function decodePolyline(
		polyline: string
	): Number[]
	/**
	 * Encodes an array of points into a string.
	 * 
	 * <pre class="prettyprint"><code>
	 * // The latitudes and longitudes of New York and Boston respectively.
	 * var points = [40.77, -73.97, 42.34, -71.04];
	 * var polyline = Maps.encodePolyline(points);
	 * </code></pre>
	 * 
	 * @param points - An array of latitude/longitude pairs to encode.
	 * 
	 * @returns An encoded string representing those points.
	 */
	function encodePolyline(
		points: Number[]
	): string
	/**
	 * Creates a new DirectionFinder object.
	 * 
	 * @returns A new direction finder object.
	 */
	function newDirectionFinder(): Maps.DirectionFinder
	/**
	 * Creates an ElevationSampler object.
	 * 
	 * @returns A new elevation sampler object.
	 */
	function newElevationSampler(): Maps.ElevationSampler
	/**
	 * Creates a new Geocoder object.
	 * 
	 * @returns A new geocoder object.
	 */
	function newGeocoder(): Maps.Geocoder
	/**
	 * Creates a new StaticMap object.
	 * 
	 * @returns A new static map object.
	 */
	function newStaticMap(): Maps.StaticMap
	/**
	 * Enables the use of an externally established <a
	 * href="https://developers.google.com/maps/premium/">Google Maps APIs Premium Plan</a> account,
	 * to leverage additional <a href="https://developers.google.com/maps/premium/usage-limits">quota
	 * allowances</a>. Your client ID and signing key can be obtained from the Google Enterprise
	 * Support Portal. Set these values to <code>null</code> to go back to using the default quota
	 * allowances.
	 * 
	 * <p><aside class="note"><b>Note</b>: This method doesn't work with API keys. Additionally,
	 * please note that Premium Plan is no longer available for new customers. If you don't already
	 * have a Premium Plan license, please don't call <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/maps.html#setAuthentication(String,String)'>setAuthentication(clientId, signingKey)</a></code>. You are able to use
	 * the <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/maps.html'>Maps</a></code> methods with the default quota allowances.</aside>
	 * 
	 * <pre class="prettyprint"><code>
	 * Maps.setAuthentication(&#39;gme-123456789&#39;, &#39;VhSEZvOXVSdnlxTnpJcUE&#39;);
	 * </code></pre>
	 * 
	 * @param clientId - A client identifier.
	 * @param signingKey - A private signing key.
	 */
	function setAuthentication(
		clientId: string,
		signingKey: string
	): void

	enum Avoid {
		/**
		 * Avoid highways.
		 */
		HIGHWAYS = "HIGHWAYS",
		/**
		 * Avoid tolls.
		 */
		TOLLS = "TOLLS",
	}

	enum Color {
		BLACK = "BLACK",
		BLUE = "BLUE",
		BROWN = "BROWN",
		GRAY = "GRAY",
		GREEN = "GREEN",
		ORANGE = "ORANGE",
		PURPLE = "PURPLE",
		RED = "RED",
		WHITE = "WHITE",
		YELLOW = "YELLOW",
	}

	class DirectionFinder {
		private constructor();

		/**
		 * Adds a waypoint that the route must pass through, using a point (lat/lng).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a DirectionFinder with a wapoint at Lincoln Center.
		 * var directionFinder = Maps.newDirectionFinder().addWaypoint(40.772628, -73.984243);
		 * </code></pre>
		 * 
		 * @param latitude - Latitude of the waypoint.
		 * @param longitude - Longitude of the waypoint.
		 * 
		 * @returns The DirectionFinder object to facilitate chaining of calls.
		 */
		addWaypoint(
			latitude: Number,
			longitude: Number
		): Maps.DirectionFinder
		/**
		 * Adds a waypoint that the route must pass through, using an address.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a DirectionFinder with a wapoint at Lincoln Center.
		 * var directionFinder = Maps.newDirectionFinder().addWaypoint(&#39;Lincoln Center, New York, NY&#39;);
		 * </code></pre>
		 * 
		 * @param address - An address.
		 * 
		 * @returns The DirectionFinder object to facilitate chaining of calls.
		 */
		addWaypoint(
			address: string
		): Maps.DirectionFinder

		/**
		 * Clears the current set of waypoints.
		 * 
		 * <pre class="prettyprint"><code>
		 * var directionFinder = Maps.newDirectionFinder()
		 * // ...
		 * // Do something interesting here ...
		 * // ...
		 * // Remove all waypoints added with addWaypoint().
		 * directionFinder.clearWaypoints();
		 * </code></pre>
		 * 
		 * @returns the DirectionFinder object to facilitate chaining of calls
		 */
		clearWaypoints(): Maps.DirectionFinder
		/**
		 * Gets the directions using the origin, destination, and other options that were set.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Logs how long it would take to walk from Times Square to Central Park.
		 * var directions = Maps.newDirectionFinder()
		 *     .setOrigin(&#39;Times Square, New York, NY&#39;)
		 *     .setDestination(&#39;Central Park, New York, NY&#39;)
		 *     .setMode(Maps.DirectionFinder.Mode.WALKING)
		 *     .getDirections();
		 * Logger.log(directions.routes[0].legs[0].duration.text);
		 * </code></pre>
		 * 
		 * @returns a JSON object containing the set of routes for the directions, as described <a
		 *     href="/maps/documentation/directions/#JSON">here</a>
		 */
		getDirections(): object
		/**
		 * Sets whether or not alternative routes should be returned, instead of just the highest ranked
		 * route (defaults to false). If true, the resulting object's <code>routes</code> array may
		 * contain multiple entries.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a DirectionFinder with alernative routes enabled.
		 * var directionFinder = Maps.newDirectionFinder().setAlternatives(true);
		 * </code></pre>
		 * 
		 * @param useAlternatives - true to return alternative routes, false otherwise
		 * 
		 * @returns the DirectionFinder object to facilitate chaining of calls
		 */
		setAlternatives(
			useAlternatives: Boolean
		): Maps.DirectionFinder
		/**
		 * Sets the desired time of arrival (when applicable).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a DirectionFinder with an arrival time of 2 hours from now.
		 * var now = new Date();
		 * var arrive = new Date(now.getTime() + (2 * 60 * 60 * 1000));
		 * var directionFinder = Maps.newDirectionFinder().setArrive(arrive);
		 * </code></pre>
		 * 
		 * @param time - the time of arrival
		 * 
		 * @returns the DirectionFinder object to facilitate chaining of calls
		 */
		setArrive(
			time: Date
		): Maps.DirectionFinder
		/**
		 * Sets whether to avoid certain types of restrictions.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a DirectionFinder that avoid highways.
		 * var directionFinder = Maps.newDirectionFinder().setAvoid(Maps.DirectionFinder.Avoid.HIGHWAYS);
		 * </code></pre>
		 * 
		 * @param avoid - a constant value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/avoid.html'>Avoid</a></code>
		 * 
		 * @returns the DirectionFinder object to facilitate chaining of calls
		 */
		setAvoid(
			avoid: string
		): Maps.DirectionFinder
		/**
		 * Sets the desired time of departure (when applicable).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a DirectionFinder with a departure time of 1 hour from now.
		 * var now = new Date();
		 * var depart = new Date(now.getTime() + (1 * 60 * 60 * 1000));
		 * var directionFinder = Maps.newDirectionFinder().setDepart(depart);
		 * </code></pre>
		 * 
		 * @param time - the time of departure
		 * 
		 * @returns The DirectionFinder object to facilitate chaining of calls.
		 */
		setDepart(
			time: Date
		): Maps.DirectionFinder
		/**
		 * Sets the ending location for which to calculate directions to, using a point (lat/lng).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a DirectionFinder with the destination set to Central Park.
		 * var directionFinder = Maps.newDirectionFinder().setDestination(40.777052, -73.975464);
		 * </code></pre>
		 * 
		 * @param latitude - the latitude of the ending location
		 * @param longitude - the longitude of the ending location
		 * 
		 * @returns the DirectionFinder object to facilitate chaining of calls
		 */
		setDestination(
			latitude: Number,
			longitude: Number
		): Maps.DirectionFinder
		/**
		 * Sets the ending location for which to calculate directions to, using an address.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a DirectionFinder with the destination set to Central Park.
		 * var directionFinder = Maps.newDirectionFinder().setDestination(&#39;Central Park, New York, NY&#39;);
		 * </code></pre>
		 * 
		 * @param address - the ending address
		 * 
		 * @returns the DirectionFinder object to facilitate chaining of calls
		 */
		setDestination(
			address: string
		): Maps.DirectionFinder

		/**
		 * Sets the language to be used for the directions.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a DirectionFinder with the language set to French.
		 * var directionFinder = Maps.newDirectionFinder().setLanguage(&#39;fr&#39;);
		 * </code></pre>
		 * 
		 * @param language - a BCP-47 language identifier
		 * 
		 * @returns the DirectionFinder object to facilitate chaining of calls
		 */
		setLanguage(
			language: string
		): Maps.DirectionFinder
		/**
		 * Sets the mode of travel (defaults to driving).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a DirectionFinder with the mode set to walking.
		 * var directionFinder = Maps.newDirectionFinder().setMode(Maps.DirectionFinder.Mode.WALKING);
		 * </code></pre>
		 * 
		 * @param mode - a constant value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/mode.html'>Mode</a></code>
		 * 
		 * @returns the DirectionFinder object to facilitate chaining of calls
		 */
		setMode(
			mode: string
		): Maps.DirectionFinder
		/**
		 * Sets whether or not to optimize the provided route by rearranging the waypoints in a more
		 * efficient order (defaults to false).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a DirectionFinder with wapoint optimization enabled.
		 * var directionFinder = Maps.newDirectionFinder().setOptimizeWaypoints(true);
		 * </code></pre>
		 * 
		 * @param optimizeOrder - true to optimize the order, or false otherwise
		 * 
		 * @returns the DirectionFinder object to facilitate chaining of calls
		 */
		setOptimizeWaypoints(
			optimizeOrder: Boolean
		): Maps.DirectionFinder
		/**
		 * Sets the starting location from which to calculate directions, using a point (lat/lng).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a DirectionFinder with the origin set to Times Square.
		 * var directionFinder = Maps.newDirectionFinder().setOrigin(40.759011, -73.984472);
		 * </code></pre>
		 * 
		 * @param latitude - the latitude of the starting location
		 * @param longitude - the longitude of the starting location
		 * 
		 * @returns the DirectionFinder object to facilitate chaining of calls
		 */
		setOrigin(
			latitude: Number,
			longitude: Number
		): Maps.DirectionFinder
		/**
		 * Sets the starting location from which to calculate directions, using an address.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a DirectionFinder with the origin set to Times Square.
		 * var directionFinder = Maps.newDirectionFinder().setOrigin(&#39;Times Square, New York, NY&#39;);
		 * </code></pre>
		 * 
		 * @param address - the starting address
		 * 
		 * @returns the DirectionFinder instance to facilitate chaining of calls
		 */
		setOrigin(
			address: string
		): Maps.DirectionFinder

		/**
		 * Sets a region to use when interpreting location names. The supported region codes correspond to
		 * the ccTLDs supported by Google Maps. For example, the region code "uk" corresponds to
		 * "maps.google.co.uk".
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a DirectionFinder with the region set to France.
		 * var directionFinder = Maps.newDirectionFinder().setRegion(&#39;fr&#39;);
		 * </code></pre>
		 * 
		 * @param region - the region code to use
		 * 
		 * @returns the DirectionFinder object to facilitate chaining of calls
		 */
		setRegion(
			region: string
		): Maps.DirectionFinder

	}

	namespace DirectionFinderEnums {
		const Avoid: typeof Maps.Avoid;
		const Mode: typeof Maps.Mode;
	}

	class ElevationSampler {
		private constructor();

		/**
		 * Returns elevation data for a single point (lat/lng).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Gets the elevation of Times Square using a point.
		 * var data = Maps.newElevationSampler().sampleLocation(40.759011, -73.984472);
		 * Logger.log(data.results[0].elevation);
		 * </code></pre>
		 * 
		 * @param latitude - the latitude of the point to sample
		 * @param longitude - the longitude of the point to sample
		 * 
		 * @returns a JSON Object containing the elevation data, as described <a
		 *     href="/maps/documentation/elevation/#ElevationResponses">here</a>
		 */
		sampleLocation(
			latitude: Number,
			longitude: Number
		): object
		/**
		 * Returns elevation data for a series of points (lat/lng).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Gets the elevation of Times Square and Central Park using points.
		 * var data = Maps.newElevationSampler().sampleLocations([
		 *     // Times Square
		 *     40.759011, -73.984472,
		 *     // Central Park
		 *     40.777052, -73.975464
		 * ]);
		 * Logger.log(&#39;Times Square: &#39; + data.results[0].elevation);
		 * Logger.log(&#39;Central Park: &#39; + data.results[1].elevation);
		 * </code></pre>
		 * 
		 * @param points - an array of latitude/longitude pairs
		 * 
		 * @returns a JSON Object containing the elevation data, as described <a
		 *     href="/maps/documentation/elevation/#ElevationResponses">here</a>
		 */
		sampleLocations(
			points: Number[]
		): object
		/**
		 * Returns elevation data for the points in an encoded polyline.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Gets the elevation of Times Square and Central Park using a polyline.
		 * var data = Maps.newElevationSampler().sampleLocations(&#39;yvwwF|aqbMwoBiw@&#39;);
		 * Logger.log(&#39;Times Square: &#39; + data.results[0].elevation);
		 * Logger.log(&#39;Central Park: &#39; + data.results[1].elevation);
		 * </code></pre>
		 * 
		 * @param encodedPolyline - an encoded polyline of points to sample
		 * 
		 * @returns a JSON Object containing the elevation data, as described <a
		 *     href="/maps/documentation/elevation/#ElevationResponses">here</a>
		 */
		sampleLocations(
			encodedPolyline: string
		): object

		/**
		 * Returns elevation data for a number of samples along a line, defined using a series of points.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Gets the elevation of five points between Times Square and Central Park.
		 * var data = Maps.newElevationSampler().samplePath([
		 *     // Times Square
		 *     40.759011, -73.984472,
		 *     // Central Park
		 *     40.777052, -73.975464
		 * ], 5);
		 * for (var i = 0; i &lt; data.results.length; i++) {
		 *   Logger.log(data.results[i].elevation);
		 * }
		 * </code></pre>
		 * 
		 * @param points - an array of latitude/longitude pairs defining a path to sample over
		 * @param numSamples - the number of points to sample along the path of points
		 * 
		 * @returns a JSON Object containing the elevation data, as described <a
		 *     href="/maps/documentation/elevation/#ElevationResponses">here</a>
		 */
		samplePath(
			points: Number[],
			numSamples: number
		): object
		/**
		 * Returns elevation data for a number of samples along a line, defined using an encoded polyline.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Gets the elevation of five points between Times Square and Central Park.
		 * var data = Maps.newElevationSampler().samplePath(&#39;yvwwF|aqbMwoBiw@&#39;, 5);
		 * for (var i = 0; i &lt; data.results.length; i++) {
		 *   Logger.log(data.results[i].elevation);
		 * }
		 * </code></pre>
		 * 
		 * @param encodedPolyline - an encoded polyline of points defining a path to sample over
		 * @param numSamples - the number of points to sample along the path of points
		 * 
		 * @returns a JSON Object containing the elevation data, as described <a
		 *     href="/maps/documentation/elevation/#ElevationResponses">here</a>
		 */
		samplePath(
			encodedPolyline: string,
			numSamples: number
		): object


	}

	enum Format {
		/**
		 * GIF format.
		 */
		GIF = "GIF",
		/**
		 * JPEG format.
		 */
		JPG = "JPG",
		/**
		 * Non-progressive JPEG format.
		 */
		JPG_BASELINE = "JPG_BASELINE",
		/**
		 * 8-bit PNG format.
		 */
		PNG = "PNG",
		/**
		 * 32-bit PNG format.
		 */
		PNG32 = "PNG32",
		/**
		 * 8-bit PNG format.
		 */
		PNG8 = "PNG8",
	}

	class Geocoder {
		private constructor();

		/**
		 * Gets the approximate geographic points for a given address.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Gets the geographic coordinates for Times Square.
		 * var response = Maps.newGeocoder().geocode(&#39;Times Square, New York, NY&#39;);
		 * for (var i = 0; i &lt; response.results.length; i++) {
		 *   var result = response.results[i];
		 *   Logger.log(&#39;%s: %s, %s&#39;, result.formatted_address, result.geometry.location.lat,
		 *       result.geometry.location.lng);
		 * }
		 * </code></pre>
		 * 
		 * @param address - an address
		 * 
		 * @returns a JSON Object containing the geocoding data, as described <a
		 *     href="/maps/documentation/geocoding/#JSON">here</a>
		 */
		geocode(
			address: string
		): object
		/**
		 * Gets the approximate addresses for a given geographic point.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Gets the address of a point in Times Square.
		 * var response = Maps.newGeocoder().reverseGeocode(40.758577, -73.984464);
		 * for (var i = 0; i &lt; response.results.length; i++) {
		 *   var result = response.results[i];
		 *   Logger.log(&#39;%s: %s, %s&#39;, result.formatted_address, result.geometry.location.lat,
		 *       result.geometry.location.lng);
		 * }
		 * </code></pre>
		 * 
		 * @param latitude - the latitude of the point
		 * @param longitude - the longitude of the point
		 * 
		 * @returns a JSON Object containing the reverse geocoding data, as described <a
		 *     href="/maps/documentation/geocoding/#ReverseGeocoding">here</a>
		 */
		reverseGeocode(
			latitude: Number,
			longitude: Number
		): object
		/**
		 * Gets the approximate addresses for a given area.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Gets the address of an area around Central Park.
		 * var response = Maps.newGeocoder().reverseGeocode(40.764941, -73.98262, 40.799133, -73.947558);
		 * for (var i = 0; i &lt; response.results.length; i++) {
		 *   var result = response.results[i];
		 *   Logger.log(&#39;%s: %s, %s&#39;, result.formatted_address, result.geometry.location.lat,
		 *       result.geometry.location.lng);
		 * }
		 * </code></pre>
		 * 
		 * @param swLatitude - the latitude of the south west corner of the bounds
		 * @param swLongitude - the longitude of the south west corner of the bounds
		 * @param neLatitude - the latitude of the north east corner of the bounds
		 * @param neLongitude - the longitude of the north east corner of the bounds
		 * 
		 * @returns a JSON Object containing the reverse geocoding data, as described <a
		 *     href="/maps/documentation/geocoding/#ReverseGeocoding">here</a>
		 */
		reverseGeocode(
			swLatitude: Number,
			swLongitude: Number,
			neLatitude: Number,
			neLongitude: Number
		): object

		/**
		 * Sets the bounds of an area that should be given extra preference in the results.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a Geocoder that prefers points in the area of Manhattan.
		 * var geocoder = Maps.newGeocoder()
		 *     .setBounds(40.699642, -74.021072, 40.877569, -73.908548);
		 * </code></pre>
		 * 
		 * @param swLatitude - the latitude of the south west corner of the bounds
		 * @param swLongitude - the longitude of the south west corner of the bounds
		 * @param neLatitude - the latitude of the north east corner of the bounds
		 * @param neLongitude - the longitude of the north east corner of the bounds
		 * 
		 * @returns the Geocoder object to facilitate chaining of calls
		 */
		setBounds(
			swLatitude: Number,
			swLongitude: Number,
			neLatitude: Number,
			neLongitude: Number
		): Maps.Geocoder
		/**
		 * Sets the language to be used in the results.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a Geocoder with the language set to French.
		 * var geocoder = Maps.newGeocoder().setLanguage(&#39;fr&#39;);
		 * </code></pre>
		 * 
		 * @param language - a BCP-47 language identifier
		 * 
		 * @returns the Geocoder object to facilitate chaining of calls.
		 */
		setLanguage(
			language: string
		): Maps.Geocoder
		/**
		 * Sets a region to use when interpreting location names. The supported region codes correspond to
		 * the ccTLDs supported by Google Maps. For example, the region code "uk" corresponds to
		 * "maps.google.co.uk".
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a Geocoder with the region set to France.
		 * var geocoder = Maps.newGeocoder().setRegion(&#39;fr&#39;);
		 * </code></pre>
		 * 
		 * @param region - the region code to use
		 * 
		 * @returns the Geocoder object to facilitate chaining of calls
		 */
		setRegion(
			region: string
		): Maps.Geocoder

	}

	enum MarkerSize {
		/**
		 * Medium sized markers (largest available).
		 */
		MID = "MID",
		/**
		 * Small sized markers. Labels will not be visible on markers of this size.
		 */
		SMALL = "SMALL",
		/**
		 * Tiny sized markets (smallest available). Labels will not be visible on markers of this size.
		 */
		TINY = "TINY",
	}

	enum Mode {
		/**
		 * Bicycling directions via bicycle paths and preferred streets (where available).
		 */
		BICYCLING = "BICYCLING",
		/**
		 * Driving directions via roads.
		 */
		DRIVING = "DRIVING",
		/**
		 * Transit directions via public transit routes (where available). This mode requires that you set
		 * either the departure or arrival time.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Log all available data for a public-transit trip.
		 * var directions = Maps.newDirectionFinder()
		 *     .setOrigin(&#39;The Cloisters, New York, NY&#39;)
		 *     .setDestination(&#39;JFK airport, New York, NY&#39;)
		 *     .setMode(Maps.DirectionFinder.Mode.TRANSIT)
		 *     .setDepart(new Date())
		 *     .getDirections();
		 * var route = directions.routes[0];
		 * Logger.log(route);
		 * </code></pre>
		 */
		TRANSIT = "TRANSIT",
		/**
		 * Walking directions via pedestrian paths and sidewalks (where available).
		 */
		WALKING = "WALKING",
	}

	class StaticMap {
		private constructor();

		/**
		 * Adds a new address to the current path definition.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map and adds a path from New York to Boston.
		 * var map = Maps.newStaticMap()
		 *     .beginPath()
		 *     .addAddress(&#39;New York, NY&#39;)
		 *     .addAddress(&#39;Boston, MA&#39;)
		 *     .endPath();
		 * </code></pre>
		 * 
		 * @param address - An address to add.
		 * 
		 * @returns This map instance, for chaining.
		 */
		addAddress(
			address: string
		): Maps.StaticMap
		/**
		 * Adds a marker to the map using a point (lat/lng).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map and adds a marker at the specified coordinates.
		 * var map = Maps.newStaticMap().addMarker(40.741799, -74.004207);
		 * </code></pre>
		 * 
		 * @param latitude - The latitude of the new marker.
		 * @param longitude - The longitude of the new marker.
		 * 
		 * @returns This map instance, for chaining.
		 */
		addMarker(
			latitude: Number,
			longitude: Number
		): Maps.StaticMap
		/**
		 * Adds a marker to the map using an address.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map and adds a marker at the specified address.
		 * var map = Maps.newStaticMap().addMarker(&#39;76 9th Ave, New York NY&#39;);
		 * </code></pre>
		 * 
		 * @param address - The address at wich to place the new marker.
		 * 
		 * @returns This map instance, for chaining.
		 */
		addMarker(
			address: string
		): Maps.StaticMap

		/**
		 * Adds a path to the map using an array of points.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map and adds a path from New York to Boston.
		 * var map = Maps.newStaticMap()
		 *     .addPath([40.714353, -74.005973, 42.358431, -71.059773]);
		 * </code></pre>
		 * 
		 * @param points - An array of latitude/longitude pairs that define the path.
		 * 
		 * @returns This map instance, for chaining.
		 */
		addPath(
			points: Number[]
		): Maps.StaticMap
		/**
		 * Adds a path to the map using an encoded polyline.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map and adds a path from New York to Boston.
		 * var polyline = Maps.encodePolyline([40.714353, -74.005973, 42.358431, -71.059773]);
		 * var map = Maps.newStaticMap().addPath(polyline);
		 * </code></pre>
		 * 
		 * @param polyline - An encoded polyline.
		 * 
		 * @returns This map instance, for chaining.
		 */
		addPath(
			polyline: string
		): Maps.StaticMap

		/**
		 * Adds a new point (lat/lng) to the current path definition.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map and adds a path from New York to Boston.
		 * var map = Maps.newStaticMap()
		 *     .beginPath()
		 *     .addPoint(40.714353, -74.005973)
		 *     .addPoint(42.358431, -71.059773)
		 *     .endPath();
		 * </code></pre>
		 * 
		 * @param latitude - The latitude of the point.
		 * @param longitude - The longitude of the point.
		 * 
		 * @returns This map instance, for chaining.
		 */
		addPoint(
			latitude: Number,
			longitude: Number
		): Maps.StaticMap
		/**
		 * Adds a point (lat/lng) location that must be visible in the map.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map where New York and Boston are visible.
		 * var map = Maps.newStaticMap()
		 *     .addVisible(40.714353, -74.005973);
		 *     .addVisible(42.358431, -71.059773)
		 * </code></pre>
		 * 
		 * @param latitude - The latitude of the point.
		 * @param longitude - The longitude of the point.
		 * 
		 * @returns This map instance, for chaining.
		 */
		addVisible(
			latitude: Number,
			longitude: Number
		): Maps.StaticMap
		/**
		 * Adds an address location that must be visible in the map.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map where New York and Boston are visible.
		 * var map = Maps.newStaticMap()
		 *     .addVisible(&#39;New York, NY&#39;)
		 *     .addVisible(&#39;Boston, MA&#39;);
		 * </code></pre>
		 * 
		 * @param address - An address that must be visible in the map.
		 * 
		 * @returns This map instance, for chaining.
		 */
		addVisible(
			address: string
		): Maps.StaticMap

		/**
		 * Starts a new path definition. Calls to <code>addAddress()</code> and <code>addPoint()</code> define each
		 * new vertex in the path. The path is completed when <code>endPath()</code> is called.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map and adds a path from New York to Boston.
		 * var map = Maps.newStaticMap()
		 *     .beginPath()
		 *     .addAddress(&#39;New York, NY&#39;)
		 *     .addAddress(&#39;Boston, MA&#39;)
		 *     .endPath();
		 * </code></pre>
		 * 
		 * @returns This map instance, for chaining.
		 */
		beginPath(): Maps.StaticMap
		/**
		 * Clears the current set of markers.
		 * 
		 * <pre class="prettyprint"><code>
		 * var map = Maps.newStaticMap();
		 * // ...
		 * // Do something interesting here ...
		 * // ...
		 * // Remove all markers on the map.
		 * map.clearMarkers();
		 * </code></pre>
		 * 
		 * @returns This map instance, for chaining.
		 */
		clearMarkers(): Maps.StaticMap
		/**
		 * Clear the current set of paths.
		 * 
		 * <pre class="prettyprint"><code>
		 * var map = Maps.newStaticMap();
		 * // ...
		 * // Do something interesting here ...
		 * // ...
		 * // Remove all paths on the map.
		 * map.clearPaths();
		 * </code></pre>
		 * 
		 * @returns This map instance, for chaining.
		 */
		clearPaths(): Maps.StaticMap
		/**
		 * Clears the current set of visible locations.
		 * 
		 * <pre class="prettyprint"><code>
		 * var map = Maps.newStaticMap();
		 * // ...
		 * // Do something interesting here ...
		 * // ...
		 * // Remove all visible locations created with addVisible().
		 * map.clearVisibles();
		 * </code></pre>
		 * 
		 * @returns This map instance, for chaining.
		 */
		clearVisibles(): Maps.StaticMap
		/**
		 * Completes a path definition started with beginPath().
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map and adds a path from New York to Boston.
		 * var map = Maps.newStaticMap()
		 *     .beginPath()
		 *     .addAddress(&#39;New York, NY&#39;)
		 *     .addAddress(&#39;Boston, MA&#39;)
		 *     .endPath();
		 * </code></pre>
		 * 
		 * @returns This map instance, for chaining.
		 */
		endPath(): Maps.StaticMap
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
		 * Gets the image data as a <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/../base/blob.html'>Blob</a></code>.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map centered on Times Square and saves it to Google Drive.
		 * var map = Maps.newStaticMap().setCenter(&#39;Times Square, New York, NY&#39;);
		 * DocsList.createFile(map);  // You can call map.getBlob() explicitly or use it
		 *                            // implicitly by passing the map where a blob is expected.
		 * </code></pre>
		 * 
		 * @returns An image of the map in the selected image format.
		 */
		getBlob(): Blob
		/**
		 * Gets the raw image data as a byte array.
		 * 
		 * <p>In general, prefer using <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/static-map.html#getBlob()'>getBlob()</a></code> which allows for simpler interactions with other
		 * services.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map centered on Times Square and saves it to Google Drive.
		 * var map = Maps.newStaticMap().setCenter(&#39;Times Square, New York, NY&#39;);
		 * DocsList.createFile(Utilities.newBlob(map.getMapImage(), &#39;image/png&#39;, &#39;map.png&#39;));
		 * </code></pre>
		 * 
		 * @returns An image of the map in the selected image format.
		 */
		getMapImage(): number[]
		/**
		 * Gets the URL of the map image.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map centered on Times Square and gets the URL.
		 * var map = Maps.newStaticMap().setCenter(&#39;Times Square, New York, NY&#39;);
		 * // All static map URLs require an API key.
		 * Logger.log(map.getMapUrl() + &quot;&amp;key=YOUR_API_KEY&quot;);
		 * </code></pre>
		 * 
		 * @returns URL The map image URL.
		 */
		getMapUrl(): string
		/**
		 * Sets the center of the map using a point (lat/lng).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map centered on Times Square, using its coordinates.
		 * var map = Maps.newStaticMap().setCenter(40.759011, -73.984472);
		 * </code></pre>
		 * 
		 * @param latitude - The latitude of the center.
		 * @param longitude - The longitude of the center.
		 * 
		 * @returns This map instance, for chaining.
		 */
		setCenter(
			latitude: Number,
			longitude: Number
		): Maps.StaticMap
		/**
		 * Sets the center of the map using an address.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map centered on Times Square, using its address.
		 * var map = Maps.newStaticMap().setCenter(&#39;Times Square, New York, NY&#39;);
		 * </code></pre>
		 * 
		 * @param address - The address of the center.
		 * 
		 * @returns This map instance, for chaining.
		 */
		setCenter(
			address: string
		): Maps.StaticMap

		/**
		 * Sets the custom marker image to use when creating new markers. Markers that have already been
		 * added are not affected.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map with markers set to be medium sized, black, and labeled with the number &quot;1&quot;.
		 * var map = Maps.newStaticMap()
		 *     .setCustomMarkerStyle(&#39;http://www.example.com/marker.png&#39;, false);
		 * </code></pre>
		 * 
		 * @param imageUrl - Specifies a URL to use as the marker's custom icon. Images may be in PNG, JPEG
		 *     or GIF formats, though PNG is recommended.
		 * @param useShadow - Indicates that the marker should have a shadow generated, based on the image's
		 *     visible region and its opacity/transparency.
		 * 
		 * @returns This map instance, for chaining.
		 */
		setCustomMarkerStyle(
			imageUrl: string,
			useShadow: Boolean
		): Maps.StaticMap
		/**
		 * Sets the format of the map image.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map with the image format set to PNG.
		 * var map = Maps.newStaticMap().setFormat(Maps.StaticMap.Format.PNG);
		 * </code></pre>
		 * 
		 * @param format - A constant value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/format.html'>Format</a></code>.
		 * 
		 * @returns This map instance, for chaining.
		 */
		setFormat(
			format: string
		): Maps.StaticMap
		/**
		 * Sets the language to be used for text on the map (where avaialbe).
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map with the language set to French.
		 * var map = Maps.newStaticMap().setLanguage(&#39;fr&#39;);
		 * </code></pre>
		 * 
		 * @param language - A BCP-47 language identifier.
		 * 
		 * @returns This map instance, for chaining.
		 */
		setLanguage(
			language: string
		): Maps.StaticMap
		/**
		 * Sets the type of map to be shown.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a satellite map.
		 * var map = Maps.newStaticMap().setMapType(Maps.StaticMap.Type.SATELLITE);
		 * </code></pre>
		 * 
		 * @param mapType - A constant value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/type.html'>Type</a></code>.
		 * 
		 * @returns This map instance, for chaining.
		 */
		setMapType(
			mapType: string
		): Maps.StaticMap
		/**
		 * Sets the marker style to use when creating new markers. Markers that have already been added
		 * are not affected.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map with markers set to be medium sized, black, and labeled with the number &quot;1&quot;.
		 * var map = Maps.newStaticMap()
		 *     .setMarkerStyle(Maps.StaticMap.MarkerSize.MID, Maps.StaticMap.Color.BLACK , &#39;1&#39;);
		 * </code></pre>
		 * 
		 * @param size - A constant value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/marker-size.html'>MarkerSize</a></code>.
		 * @param color - A string in the format "0xrrggbb" or a constant value from <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/color.html'>Color</a></code>.
		 * @param label - A string containing a single character A-Z or 0-9.
		 * 
		 * @returns This map instance, for chaining.
		 */
		setMarkerStyle(
			size: string,
			color: string,
			label: string
		): Maps.StaticMap
		/**
		 * Sets whether or not to use specialized tile sets for mobile devices.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map that uses mobile-friendly tiles.
		 * var map = Maps.newStaticMap().setMobile(true);
		 * </code></pre>
		 * 
		 * @param useMobileTiles - Whether or not to use mobile tiles.
		 * 
		 * @returns This map instance, for chaining.
		 */
		setMobile(
			useMobileTiles: Boolean
		): Maps.StaticMap
		/**
		 * Sets the path style to use when creating new paths. Paths that have already been added are not
		 * affected.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map with paths set to be 1 pixel wide with a black line and a white fill.
		 * var map = Maps.newStaticMap()
		 *     .setPathStyle(1, Maps.StaticMap.Color.BLACK , &#39;red&#39;);
		 * </code></pre>
		 * 
		 * @param weight - The width of lines in pixels.
		 * @param color - The line color, as a string in the format "0xrrggbb" or a constant value from
		 *     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/color.html'>Color</a></code>.
		 * @param fillColor - The fill color, a string in the format "0xrrggbb" or a constant value from
		 *     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/maps/color.html'>Color</a></code>.
		 * 
		 * @returns This map instance, for chaining.
		 */
		setPathStyle(
			weight: number,
			color: string,
			fillColor: string
		): Maps.StaticMap
		/**
		 * Sets the width and height of the map image in pixels.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map 400px wide by 300px high.
		 * var map = Maps.newStaticMap().setSize(400, 300);
		 * </code></pre>
		 * 
		 * @param width - The width of the image in pixels.
		 * @param height - The height of the image in pixels.
		 * 
		 * @returns This map instance, for chaining.
		 */
		setSize(
			width: number,
			height: number
		): Maps.StaticMap
		/**
		 * Sets the zoom factor, or magnification level, used for the map.
		 * 
		 * <pre class="prettyprint"><code>
		 * // Creates a map with a zoom factor of 10.
		 * var map = Maps.newStaticMap().setZoom(10);
		 * </code></pre>
		 * 
		 * @param zoom - A value from zero to 21, inclusive.
		 * 
		 * @returns This map instance, for chaining.
		 */
		setZoom(
			zoom: number
		): Maps.StaticMap

	}

	namespace StaticMapEnums {
		const Color: typeof Maps.Color;
		const Format: typeof Maps.Format;
		const MarkerSize: typeof Maps.MarkerSize;
		const Type: typeof Maps.Type;
	}

	enum Type {
		/**
		 * A hybrid of the satellite and roadmap maps, showing a transparent layer of major streets and
		 * place names on the satellite map.
		 */
		HYBRID = "HYBRID",
		/**
		 * A standard roadmap, as is normally shown on the Google Maps website.
		 */
		ROADMAP = "ROADMAP",
		/**
		 * A satellite map.
		 */
		SATELLITE = "SATELLITE",
		/**
		 * A physical relief map, showing terrain and vegetation.
		 */
		TERRAIN = "TERRAIN",
	}

}
