# ez-slugify

`ez-slugify` is a simple and efficient utility for converting any string into an SEO-friendly URL slug. It transforms text into lowercase, removes diacritics, replaces special symbols with corresponding words, and ensures that the final output is clean and formatted for use in URLs.

## Features

- Converts text to lowercase.
- Replaces spaces with dashes (-).
- Removes leading/trailing and consecutive dashes.
- Removes diacritics (e.g., converts "Café" to "cafe").
- Replaces special characters like &, $, @, %, etc., with descriptive words (e.g., @ becomes "at").
- Ensures the final output is an SEO-friendly slug.

## Installation

You can install the `ez-slugify` package via npm:

```bash
npm install ez-slugify
```

## Demo

You can try out a live demo of `ez-slugify` here: [Live Demo](https://ez-slugify.vercel.app/)

## Usage

To use the `slugify` function in your project:

```javascript
const slugify = require('ez-slugify');

const slug = slugify('Price: $100 & 50% off!');
console.log(slug); // Outputs: price-dollar100-and-50-percent-off
```

### Example Inputs and Outputs
| Input  | Output |
| ------------- | ------------- |
| Hello World!  | hello-world  |
| Price: $100 & 50% off!  | price-dollar100-and-50-percent-off  |
| Café con Leche  | cafe-con-leche  |
| Price: $100 & 50% off!  | price-dollar100-and-50-percent-off  |
| Currency: ¢, £, ¥, ¤  | currency-cent-pound-yen-currency  |
| Special symbols like @, +, *!  | special-symbols-like-at-plus-star-exclamation |

## API

### `slugify(text)`

- **text:** The input string that you want to convert to a slug.
- **returns:** A slugified version of the input string.

#### Error Handling

The function will throw an error if:
- The input is not a string.
- The input is an empty or whitespace-only string.

Example:

```javascript
try {
  const slug = slugify(12345);
} catch (err) {
  console.error(err.message); // Output: Input must be a non-empty string
}
```
