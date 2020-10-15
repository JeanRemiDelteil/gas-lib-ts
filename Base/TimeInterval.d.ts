declare class TimeInterval {
	private constructor();

	/**
	 * Gets the end time, exclusive.
	 * 
	 * @returns The end time.
	 */
	getEndTime(): Date
	/**
	 * Gets the start time, inclusive.
	 * 
	 * @returns The start time.
	 */
	getStartTime(): Date

}

