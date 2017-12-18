# react-ts-cdk

<p>
    <span>
    <img alt="npm" src="https://img.shields.io/npm/v/npm.svg?style=flat-square">
    </span>
    <span>
<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
    </span>
</p>

> 🔥 React + Typescript Boilerplate to develop your own react components and reuse in another projects

![React Typescript Component Development Kit](images/intro.jpg)

## Motivation
Components are cool! We should use them everywhere. So, you expent time developing a lot of components and now you want to reuse them in another awesome project & all your projects need your components updated when a new feature is released (and you also need typechecking, tests, hot module replacement & all the good stuff).

## Directory Structure
```
.
├── src
|   └── components
|       └── MyComponent                 # Your component
|           ├── MyComponent.tsx         # Its JSX + Typescript file
|           ├── MyComponent.story.tsx   # Storybook of your component
|           ├── types.tsx               # Types for props
|           └── tests.js                # Jest + Enzyme tests
|       └── MyComponentX                # Another component X
|       └── MyComponentY                # Another component Y
|       └── MyComponentZ                # Another component Z
|       └── stories.tsx                 # Storybook config file
├── dist
|    └── index.js                       # Exporting all Componentss
```

## Features
- [x] React
- [x] Typescript
- [x] Storybook
- [ ] Jest
- [ ] Enzyme
- [x] Webpack
- [ ] Prettier

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :smile:

## License

[MIT](https://github.com/santospatrick/react-ts-cdk/blob/master/LICENSE)
