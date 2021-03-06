# React Boilerplate v1.2.0

## Features

**Note: This Boilerplate uses pre-release alpha and beta software**

Utilizes Webpack 2 with React Hot Loader 3 (beta), React Router 4 (alpha), Redux, with Sass Styling

Testing using Karma with Mocha/Chai/Enzyme/Sinon

## Installation (MacOS):
it is highly recommended to use [Node Version Manager (nvm)](https://github.com/creationix/nvm) if you are not already

if you have `node` installed, clone this repo and `cd` into it, then:

### Install with `yarn` **(Recommended)**
```
yarn
```

- install `yarn` if you don't already have it: [yarn installation instructions](https://yarnpkg.com/en/docs/getting-started)

## Usage:

### to start the development server
```
yarn start
```

- then navigate to [http://localhost:8080/](http://localhost:8080/)

- saved changes should rebuild and be hot swapped - no need to refresh browser

### to start the test runner
```
yarn test
```

- karma will start listening to file changes and run tests automatically on file changes

## Packages utilized:

### App
  - [Node.js](https://nodejs.org/en/): "JavaScript runtime built on Chrome's V8 JavaScript engine." **(required)**
  - [React.js](https://github.com/facebook/react): "a JavaScript library for building user interfaces"
  - [React Router 4](https://github.com/ReactTraining/react-router): Declarative routing for React **(Alpha)**
  - [Redux](https://github.com/reactjs/redux): Predictable state container for JavaScript apps

### Tooling
  - [Webpack 2.2](https://github.com/webpack/webpack): "a bundler for javascript and friends"
  - [React Hot Loader 3](https://github.com/gaearon/react-hot-loader/tree/next): "tweak React components in real time" **(Beta)**
  - [Yarn](https://github.com/yarnpkg/yarn): "fast, reliable, and secure dependency management"
  - [NVM](https://github.com/creationix/nvm): "simple bash script to manage multiple active node.js versions"

### Styling
  - [Sass](https://github.com/sass/sass): "Sass makes CSS fun again"

### Testing
  - [Karma](https://karma-runner.github.io/1.0/index.html): "just save a file and Karma will run all the tests"
  - [Mocha](https://mochajs.org/): testing framework
    - [Chai](http://chaijs.com/): assertion library
    - [chai-enzyme](https://github.com/producthunt/chai-enzyme): enzyme assertions
  - [Enzyme](http://airbnb.io/enzyme/) - JavaScript Testing utility for React
  - [Sinon.js](https://github.com/sinonjs/sinon): test spies, stubs and mocks

### Linting
  - [ESLint](https://github.com/eslint/eslint)
    - [Standard.js](https://github.com/feross/standard) (`standard`)
