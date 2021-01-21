module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		"plugin:react/recommended",
		"airbnb",
		"prettier/react",
		"eslint-config-prettier",
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parser: "babel",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: ["react", "prettier"],
	rules: {
		"prettier/prettier": "error",
		"react/jsx-filename-extension": [{ extensions: [".js", ".jsx"] }],
	},
};
