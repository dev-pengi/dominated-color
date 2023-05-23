# dominated-color

**dominated-color** is a simple module that allows you to detect the dominant color of an image using the **node-vibrant** package.

## Installation

To install **dominated-color**, use npm:
```bash
npm install dominated-color
```

## Usage

```js
const { detectDominantColor } = require('dominated-color');

async function example() {
  const imagePath = '/path/to/your/image.jpg';

  try {
    const dominantColor = await detectDominantColor(imagePath);
    console.log('Dominant color:', dominantColor);
  } catch (error) {
    console.error('Error:', error);
  }
}

example();
```

## Function Signature

```typescript
detectDominantColor(imagePath: string, format?: 'hex' | 'rgb'): Promise<string | number[] | null>
```

- imagePath (required): The path to the image file.
- format (optional, default: **hex**): The format of the dominant color. Possible values: **hex** or **rgb**.
- The function returns a promise that resolves to the dominant color in the specified format (hex or RGB array), or null if an error occurs.

## Examples
### Example 1: Detect Dominant Color as Hex
```js
const { detectDominantColor } = require('dominated-color');

async function example() {
  const imagePath = '/path/to/your/image.jpg';

  try {
    const dominantColor = await detectDominantColor(imagePath);
    console.log('Dominant color (hex):', dominantColor);
  } catch (error) {
    console.error('Error:', error);
  }
}

example();
```
### Example 2: Detect Dominant Color as RGB
```js
const { detectDominantColor } = require('dominated-color');

async function example() {
  const imagePath = '/path/to/your/image.jpg';

  try {
    const dominantColor = await detectDominantColor(imagePath, 'rgb');
    console.log('Dominant color (RGB):', dominantColor);
  } catch (error) {
    console.error('Error:', error);
  }
}

example();
```