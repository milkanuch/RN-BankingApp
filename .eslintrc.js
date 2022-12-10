module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native', 'import'],
  settings: {
    'import/ignore': ['react-native', 'node_modules'],
    'import/resolver': {
      alias: {
        map: [
          ['components', './src/components'],
          ['constants', './src/constants'],
          ['screens', './src/screens'],
          ['services', './src/services'],
          ['navigation', './src/navigation'],
          ['store', './src/store'],
          ['hooks', './src/hooks'],
          ['helpers', './src/helpers'],
        ],
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-explicit-any': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-console': 2,
        'react-native/no-unused-styles': 'error',
        'react-native/split-platform-components': 'error',
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'error',
        'react-native/no-raw-text': 'error',
        'react-native/no-single-element-style-arrays': 'error',
        'react/jsx-curly-brace-presence': [
          'error',
          { props: 'never', children: 'never' },
        ],
        'import/newline-after-import': ['error', { count: 1 }],
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
            ],
            'newlines-between': 'always-and-inside-groups',
          },
        ],
      },
    },
  ],
};
