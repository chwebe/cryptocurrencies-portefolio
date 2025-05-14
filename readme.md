# TypeScript Webpack Template

A minimal template for TypeScript projects using Webpack, with separate configurations for development and production.

## Features

- TypeScript compilation
- Development server with hot reloading
- Production optimization
- CSS support
- HTML template handling
- Source maps for debugging

## Project Structure

```
template_ts/
├── .devcontainer/           # Development container configuration
│   ├── Dockerfile          # Container image definition
│   ├── devcontainer.json   # VS Code dev container settings
│   ├── docker-compose.yml  # Docker compose configuration
│   └── package.json        # Node.js package configuration
├── src/                    # Source code directory
│   ├── main.ts            # Main TypeScript entry point
│   ├── index.html         # HTML template
│   └── styles.css         # CSS styles
├── dist/                   # Compiled output
├── eslint.config.mjs      # ESLint configuration
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── webpack/               # Webpack configuration files
│   ├── webpack.common.js  # Shared webpack configuration
│   ├── webpack.dev.js     # Development configuration
│   └── webpack.prod.js    # Production configuration
```

## Dependencies

### Core Dependencies

| Module      | Purpose                        |
| ----------- | ------------------------------ |
| typescript  | TypeScript compiler            |
| webpack     | JavaScript bundler             |
| webpack-cli | Webpack command line interface |

### Development Dependencies

| Module             | Purpose                                       |
| ------------------ | --------------------------------------------- |
| ts-loader          | Webpack loader for TypeScript                 |
| webpack-dev-server | Development server with hot reloading         |
| webpack-merge      | Merge multiple webpack configurations         |
| @tsconfig/node23   | TypeScript base configuration for Node.js 23+ |

### Frontend Dependencies

| Module              | Purpose                            |
| ------------------- | ---------------------------------- |
| html-webpack-plugin | Generate HTML file with bundled JS |
| css-loader          | Process CSS files                  |
| style-loader        | Inject CSS into the DOM            |

## Usage

### Development

```bash
npm start
```

- Starts development server
- Enables hot reloading
- Generates source maps for debugging
- Serves at http://localhost:3000

### Production Build

```bash
npm run build
```

- Creates optimized production build
- Outputs to `dist` directory
- Includes source maps for production debugging

## Scripts

### setup

Installs all necessary development dependencies using npm.

### start

Starts the development server with Webpack using the development configuration (`webpack/webpack.dev.js`).

### build

Builds the project using the production configuration (`webpack/webpack.prod.js`).

### lint

Runs ESLint on TypeScript files in the `src` directory to identify and fix issues.

### format

Formats code using Prettier, ignoring files specified in `.gitignore`.

### format:check

Checks code formatting using Prettier without making changes, ensuring code adheres to the specified style.

## Configuration Files

### webpack.common.js

- Entry point: `src/main.ts`
- Output: `dist/main.js`
- Handles TypeScript and CSS processing
- Sets up HTML template

### webpack/webpack.dev.js

- Development mode
- Source maps enabled
- Hot module replacement
- Development server configuration

### webpack/webpack.prod.js

- Production mode
- Optimized output
- Source maps for production debugging

### tsconfig.json

The TypeScript configuration file (`tsconfig.json`) is optimized for modern web development:

#### Core Settings

| Option             | Value               | Purpose                                  |
| ------------------ | ------------------- | ---------------------------------------- |
| `target`           | `ES2024`            | Use latest ECMAScript features           |
| `module`           | `ESNext`            | Use modern module system                 |
| `lib`              | `["DOM", "ES2024"]` | Include DOM types and latest JS features |
| `moduleResolution` | `node`              | Node.js-style module resolution          |
| `outDir`           | `./dist`            | Output directory for compiled files      |
| `rootDir`          | `./src`             | Source files directory                   |

#### Type Checking

| Option                             | Value  | Purpose                                  |
| ---------------------------------- | ------ | ---------------------------------------- |
| `strict`                           | `true` | Enable all strict type checking          |
| `noImplicitAny`                    | `true` | Prevent implicit any types               |
| `forceConsistentCasingInFileNames` | `true` | Ensure consistent file naming across OSs |

#### Module & Path Resolution

| Option              | Value     | Purpose                                 |
| ------------------- | --------- | --------------------------------------- |
| `baseUrl`           | `./`      | Base directory for non-relative imports |
| `paths`             | See below | Configure path aliases                  |
| `esModuleInterop`   | `true`    | Better CommonJS/ESM interop             |
| `resolveJsonModule` | `true`    | Allow importing JSON files              |

#### Path Aliases

```json
"paths": {
    "@utils/*": ["./src/utils/*"],
    "@components/*": ["./src/components/*"]
}
```

- `@utils/*` → `./src/utils/*`
- `@components/*` → `./src/components/*`

#### Development Features

| Option               | Value  | Purpose                                 |
| -------------------- | ------ | --------------------------------------- |
| `sourceMap`          | `true` | Generate source maps for debugging      |
| `preserveConstEnums` | `true` | Preserve const enums in output          |
| `skipLibCheck`       | `true` | Skip type checking of declaration files |

#### File Inclusion

```json
"include": ["src/**/*"],
"exclude": ["node_modules"]
```

- Include all files in `src` directory
- Exclude `node_modules`

## ESLint Configuration

The ESLint configuration integrates Prettier using the `eslint-plugin-prettier/recommended` setup. This ensures that Prettier's formatting rules are enforced as ESLint rules, allowing for consistent code formatting and linting in one step.

## Prettier Configuration

The Prettier configuration is defined in `.prettierrc.json` and includes settings for code formatting such as:

- Always include parentheses around arrow function parameters.
- Use semicolons at the end of statements.
- Include trailing commas wherever possible.
- Use double quotes instead of single quotes.
- Wrap lines that exceed 80 characters.
- Use 2 spaces per indentation level.
- Automatically format embedded code if Prettier can identify it.

## Notes

- Source maps are enabled by default for better debugging
- CSS is processed and injected into the DOM
- HTML template is automatically generated with bundled JS
- Development server includes hot module replacement
- TypeScript configuration is optimized for modern web development
