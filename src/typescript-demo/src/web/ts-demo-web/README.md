# React + TypeScript + Vite

## Import users from CSV

The CSV interface is disabled by default. Once the API's email uniqueness
checks have been completed, set `VITE_CSV_USER_IMPORT=true` when starting or
building the web app. Unset the variable or set it to `false` to disable the
interface. The existing individual creation interface remains available.

On the User page, sign in with the demo admin account and download the CSV
template. The API's authentication is simulated and is not suitable for
production. The file requires a header with `name`, `email`, and `age` in any
order; `city` is optional. Header names are case-insensitive, and extra fields,
including `role`, are ignored. Imported users always receive the `user` role.
Absent or empty city values are omitted.

Upload at most 10 nonblank user rows in a file no larger than 1,000,000 bytes.
Empty files, malformed CSV, missing or duplicate headers, and files over either
limit are rejected before creating users. Valid rows are sent one at a time;
results show each row's success, validation error, conflict (409), or other API
error. If the connection fails, processing stops without retrying: check the
uncertain row before retrying manually, and note the rows not attempted.

The file and results remain only in the current page session. Signing out or
reloading clears them; created user records remain stored. Run browser checks
with `npm run test:e2e` after installing the configured Playwright Chromium.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
