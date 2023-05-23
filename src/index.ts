import Vibrant from 'node-vibrant';

/**
 * Detects the dominant color of an image using the node vibrant package.
 * @param {string} imagePath - The path to the image file.
 * @param {string} [format='hex'] - The format of the dominant color, it could be hex or rgb.
 * @returns {Promise<string | number[] | null>} A promise that resolves to the dominant color in the specified format or null if an error occurs.
 */
export async function detectDominantColor(imagePath: string, format: 'hex' | 'rgb' = 'hex'): Promise<string | number[] | null> {
    try {
        const vibrant = new Vibrant(imagePath);
        const palette = await vibrant.getPalette();
        const dominantColor = palette.Vibrant?.[format] || null;
        return dominantColor;
    } catch (error) {
        console.error('Error detecting dominant color:', error);
        return null;
    }
}
