# Package name

[![npm version](https://badge.fury.io/js/pdf-tables-parser.svg)](https://www.npmjs.com/package/pdf-tables-parser)

**Package name** is a JavaScript/TypeScript library designed to this and that stuff seamlessly.

## Features

- Supports `Typescript`.
- Can work with both `browser` and `server` environment packages.
- Configured with `changeset` to seamlessly handle version upgrades with PRs
- `lint` and `release` to `npm` workflow action setup

## Setup

- update the dependencies

```bash
npx ncu -u
```
- Add `NPM_TOKEN` to `repository>settings>secrets and variables>actions` to publish package to npm registry
- Upgrade `node-version` and `pnpm` version in workflow files if new `lts` version is available.





## Dependencies

- [@changesets/cli](https://www.npmjs.com/package/@changesets/cli): Helps you manage the versioning and changelog entries for your packages, with a focus on versioning within a mono-repository (though we support single-package repositories too).
- [Typescript](https://www.npmjs.com/package/typescript):TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.
- [tsup](https://www.npmjs.com/package/tsup): Bundle your TypeScript library with no config.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request on [GitHub](https://github.com/kanakkholwal/pkg-template).

## License

This project is licensed under the ISC License. See the LICENSE file for details.

## Support

For issues and suggestions, please visit the [GitHub issues page](https://github.com/kanakkholwal/pkg-template/issues).
