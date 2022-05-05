module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },

  globals: {
    defineEmits: true,
    document: true,
    localStorage: true,
    GLOBAL_VAR: true,
    window: true,
    defineProps: true,
    defineExpose: true,
    $ref: true
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  rules: {
    "vue/multi-word-component-names": 0,
    "vue/no-deprecated-router-link-tag-prop": 0,
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    "quotes": [
      2,
      "single"
    ],
    "semi": [
      "error",
      "always",
      {
        "omitLastInOneLineBlock": true
      }
    ],
    "indent": [
      "error",
      2
    ],
    "space-before-function-paren": 0,
    "eol-last": 1,
    "eqeqeq": 2,
    "no-undef": 0,
    "no-unused-vars": "off",
    "no-useless-escape": "off",
    "max-len": [
      "error",
      800,
      4,
      {
        "ignoreUrls": true,
        "ignorePattern": "d.*"
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "all",
        "ignoreReadBeforeAssign": false
      }
    ],
    "import/no-unresolved": [0],
    "import/extensions": "off",
    "import/no-absolute-path": "off",
    "no-async-promise-executor": "off",
    "import/no-extraneous-dependencies": "off",
    "vue/no-multiple-template-root": "off",
    "vue/html-self-closing": "off",
    "no-console": "off",
    "no-plusplus": "off",
    "no-bitwise": "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    "@typescript-eslint/ban-ts-comment": ["off"],
    "vue/no-setup-props-destructure": ["off"],
    "@typescript-eslint/no-empty-function": ["off"],
    "vue/script-setup-uses-vars": ["off"],
    "@typescript-eslint/no-unused-vars": [0],
    "no-param-reassign": ["off"],
    "vue/v-on-event-hyphenation": ["off"],
    "@typescript-eslint/no-this-alias": ["off"],
    "vue/no-v-html": ["off"]
  }
}
