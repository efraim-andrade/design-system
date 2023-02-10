module.exports = {
  extends: ["@rocketseat/eslint-config/react"],
  plugins: ["import-helpers"],
  rules: {
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always",
        "groups": [["/^react/", "module"], "/^~/", ["parent", "sibling", "index"]],
        "alphabetize": { "order": "ignore", "ignoreCase": true }
      }
    ]
  }
};
