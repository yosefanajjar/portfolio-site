module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react', 'react-app'],
  plugins: ['react', 'prettier'],
  // babel-eslint parser is used to support experimental features not supported in ESLint itself yet
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      impliedStrict: true, //enable global strict mode (if ecmaVersion is 5 or greater)
    },
  },
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    'arrow-body-style': ['error', 'as-needed'],
    // disables the windows/unix linebreak checks.
    'linebreak-style': [0, 'error', 'windows'],
    //  allow .js extensions for JSX.
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true, // allows strings to use single-quotes or double-quotes so long as the string contains a quote that would have to be escaped otherwise
        allowTemplateLiterals: true, // allows strings to use backticks
      },
    ],
    // configure the prettier plugin
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
  }
}
