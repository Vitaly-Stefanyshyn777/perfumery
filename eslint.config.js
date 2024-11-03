// eslint.config.js
export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended"], // Додайте 'plugin:vue/vue3-recommended' якщо використовуєте Vue
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // Додайте або змініть правила тут
    // Наприклад, вимкнути правило semi
    semi: ["error", "always"],
  },
};
