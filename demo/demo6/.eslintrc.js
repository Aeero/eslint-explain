module.exports = {
    root: true,
    extends: ['eslint:recommended',"plugin:react/recommended"],
    env: {
        browser: true,
        es6: true,
        commonjs: true
    },
    parser: 'babel-eslint',
    parserOptions: {
      "ecmaVersion": 6,
      "ecmaFeatures": {
        "jsx": true
      }
    },
    plugins: [
      'react',
    ],
    rules: {
      'react/prefer-es6-class': 2
    }
  };
