

# Barcode React

[![npm version](https://badge.fury.io/js/barcode-react.svg)](https://www.npmjs.com/package/barcode-react) [![Publish](https://github.com/kanakkholwal/barcode-react/actions/workflows/publish.yml/badge.svg)](https://github.com/kanakkholwal/barcode-react/actions/workflows/publish.yml)

**Barcode React** is a flexible and lightweight React library for generating customizable barcodes in your web applications. Built with TypeScript, it supports modern web development workflows and delivers seamless integration in both browser and server environments.

---

## Features

- **Customizable**: Generate barcodes with extensive customization options like format, dimensions, colors, and more.
- **Lightweight**: Minimal dependencies and efficient barcode generation.
- **TypeScript Support**: Full TypeScript support for type-safe development.
- **Universal Compatibility**: Works in both browser and server environments.
- **Ready for CI/CD**: Configured with `changeset` and GitHub workflows for seamless versioning and npm releases.

---

## Installation

Install the package via npm or yarn:

```bash
npm install barcode-react
// or
yarn add barcode-react
//
pnpm add barcode-react
```

---

## Usage

Here’s a simple example of how to use `Barcode React`:

```tsx
import React from 'react';
import Barcode from 'barcode-react';

const App = () => {
  return (
    <div>
      <h1>Generated Barcode</h1>
      <Barcode 
        value="123456789012" 
        format="CODE128" 
        width={2} 
        height={100} 
        lineColor="#000000" 
        background="#ffffff" 
        displayValue={true}
      />
    </div>
  );
};

export default App;
```

### Props

| Prop           | Type      | Default      | Description                                                       |
| -------------- | --------- | ------------ | ----------------------------------------------------------------- |
| `value`        | `string`  | **Required** | The value to encode in the barcode.                               |
| `format`       | `string`  | `"CODE128"`  | Barcode format (e.g., `CODE128`, `EAN13`, `UPC`, etc.).           |
| `width`        | `number`  | `2`          | The width of a single barcode bar.                                |
| `height`       | `number`  | `100`        | The height of the barcode.                                        |
| `lineColor`    | `string`  | `"#000000"`  | The color of the barcode lines.                                   |
| `background`   | `string`  | `"#ffffff"`  | The background color of the barcode.                              |
| `displayValue` | `boolean` | `true`       | Whether to display the encoded value below the barcode.           |
| `renderer`     | `string`  | `"canvas"`   | The rendering method for the barcode (`canvas`, `img`, or `svg`). |

For a full list of supported formats and options, see the [JsBarcode documentation](https://github.com/lindell/JsBarcode).

---

## Setup for Development

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/kanakkholwal/barcode-react.git
   cd barcode-react
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

4. **Build the Package**:

   ```bash
   npm run build
   ```

---

## Workflows

### Version Management and Releases

- Managed with [Changesets](https://github.com/changesets/changesets) for automated versioning and changelog generation.
- Add an `NPM_TOKEN` in your repository's `Settings > Secrets and variables > Actions` to enable seamless npm publishing.

### Linting and Formatting

- Configured with `ESLint` and `Prettier` for code quality and consistency.
- Run linting locally:
  ```bash
  npm run lint
  ```

---

## Dependencies

- [JsBarcode](https://github.com/lindell/JsBarcode): The core barcode generation library.
- [TypeScript](https://www.typescriptlang.org/): Enables type-safe development.
- [Tsup](https://tsup.egoist.dev/): A zero-config bundler for TypeScript projects.
- [Changesets](https://github.com/changesets/changesets): For automated version management.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request to the `main` branch.

Please refer to our [Contributing Guidelines](https://github.com/kanakkholwal/barcode-react/blob/main/CONTRIBUTING.md) for detailed steps.

---

## License

This project is licensed under the [ISC License](https://github.com/kanakkholwal/barcode-react/blob/main/LICENSE).

---

## Support

If you encounter any issues, have questions, or would like to suggest a new feature, please visit our [GitHub Issues Page](https://github.com/kanakkholwal/barcode-react/issues).

---

## Acknowledgements

Special thanks to [JsBarcode](https://github.com/lindell/JsBarcode) for powering the core barcode generation functionality.

---

Let me know if you'd like further modifications!
