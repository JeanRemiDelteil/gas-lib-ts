declare class RgbColor {
	private constructor();

	/**
	 * Returns the color as a CSS-style 7 character hexadecimal string, #rrggbb.
	 * 
	 * @returns The hex representation of color.
	 */
	asHexString(): string
	/**
	 * The blue channel of this color, as a number from 0 to 255.
	 * 
	 * @returns The value of blue channel.
	 */
	getBlue(): number
	/**
	 * Get the type of this color.
	 * 
	 * @returns The color type.
	 */
	getColorType(): ColorType
	/**
	 * The green channel of this color, as a number from 0 to 255.
	 * 
	 * @returns The value of green channel.
	 */
	getGreen(): number
	/**
	 * The red channel of this color, as a number from 0 to 255.
	 * 
	 * @returns The value of red channel.
	 */
	getRed(): number

}

