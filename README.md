# BARBER APP
> ## SOBRE
   * Frontend de um sistema de barbearia, onde é possível agendar seu próprio horário, serviço, barbeiro e etc.

> ## TECNOLOGIAS UTILIZADAS
   * TypeScript
   * React
   * Styled Components
   * React Router Dom

![](public/images/print-inicio.jpeg) 
![](public/images/print-unidade.jpeg)
![](public/images/print-servico.jpeg)
![](public/images/print-profissional.jpeg)
![](public/images/print-data.jpeg)
![](public/images/print-horario.jpeg)
![](public/images/print-agendamento.jpeg)
![](public/images/print-agendado.jpeg)


--------------------------------

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
