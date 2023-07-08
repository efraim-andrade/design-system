module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "@rocketseat/eslint-config/react",
    "plugin:perfectionist/recommended-line-length",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  plugins: ["import-helpers", "perfectionist", "@typescript-eslint"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  rules: {
    "@typescript-eslint/await-thenable": "error",

    "perfectionist/sort-object-types": [
      "error",
      {
        type: "line-length",
        order: "asc",
        // "always-on-top": ["id"],
      },
    ],
    "perfectionist/sort-array-includes": [
      "error",
      {
        type: "line-length",
        order: "asc",
        // "always-on-top": ["id"],
      },
    ],
    "perfectionist/sort-classes": [
      "error",
      {
        type: "line-length",
        order: "asc",
        // "always-on-top": ["id"],
      },
    ],
    "perfectionist/sort-enums": [
      "error",
      {
        type: "line-length",
        order: "asc",
        // "always-on-top": ["id"],
      },
    ],
    "perfectionist/sort-exports": [
      "error",
      {
        type: "line-length",
        order: "asc",
        // "always-on-top": ["id"],
      },
    ],
    "perfectionist/sort-interfaces": [
      "error",
      {
        type: "line-length",
        order: "asc",
        // "always-on-top": ["id"],
      },
    ],
    "perfectionist/sort-jsx-props": [
      "error",
      {
        type: "line-length",
        order: "asc",
        // "always-on-top": ["id"],
      },
    ],
    "perfectionist/sort-map-elements": [
      "error",
      {
        type: "line-length",
        order: "asc",
        // "always-on-top": ["id"],
      },
    ],
    "perfectionist/sort-named-exports": [
      "error",
      {
        type: "line-length",
        order: "asc",
        // "always-on-top": ["id"],
      },
    ],
    "perfectionist/sort-named-imports": [
      "error",
      {
        type: "line-length",
        order: "asc",
        // "always-on-top": ["id"],
      },
    ],
    "perfectionist/sort-object-types": [
      "error",
      {
        type: "line-length",
        order: "asc",
        // "always-on-top": ["id"],
      },
    ],
    "perfectionist/sort-objects": [
      "error",
      {
        type: "line-length",
        order: "asc",
        "partition-by-comment": true,
        // "always-on-top": ["id"],
      },
    ],
    "perfectionist/sort-union-types": [
      "error",
      {
        type: "line-length",
        order: "asc",
        // "always-on-top": ["id"],
      },
    ],

    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          ["/^react/", "module"],
          "/^~/",
          ["parent", "sibling", "index"],
        ],
        alphabetize: { order: "ignore", ignoreCase: true },
      },
    ],
  },
};
