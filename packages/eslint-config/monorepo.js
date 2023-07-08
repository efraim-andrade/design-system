module.exports = {
  extends: ["./index.js"],
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
        project: ["./packages/*/tsconfig.json"],
      },
    },
  ],
};
