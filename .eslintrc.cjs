module.exports = {
    root: true,
    env: {
        node: true,
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    "ignorePatterns": ["/src/static_dependencies/**/*"],
    rules: {
        "no-trailing-spaces": "error",
    },
};
