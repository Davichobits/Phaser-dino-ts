# Dino Game

## Eslint configuration

```bash
yarn add eslint --dev
```

Para typescript:

```bash
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Configuracion del archivo .eslintrc.json

```json
{
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "semi": ["error", "always"],
    "no-unused-vars": "error",
    "no-extra-semi": "error",
    "eqeqeq": "error",
    "camelcase": "error"
  }
}
```
