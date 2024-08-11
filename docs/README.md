
# Welcome to the documentation of the buymyserv project

This project is a simple web application that allows users to buy servers. The project is build with symfony in a monolithic application. We use both symfony and reactJS to build the application. ReactJS is compiled by webpack encore and served by symfony.

## Getting started

To get started with the project, you need to fetch the project from the repository. You can do this by running the following command:

```bash
git clone https://github.com/ayle57/buymyserv.git
```

from there you can navigate to the project directory and run the following command to install the dependencies:

```bash
composer install
```

and then run the following command to install the front-end dependencies:

```bash
pnpm install
```
or
```bash
npm install
```

for running the project you can run the following command:

```bash
symfony serve -d
pnpm run dev-server
```


## Table of contents

- [Getting started](#getting-started)
- [Table of contents](#table-of-contents)
- [Project structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)
- [Changelog](#changelog)

## Project structure

The project is structured in a monolithic way. The project is divided into two main parts: the symfony part and the reactJS part. The symfony part is responsible for the backend and the reactJS part is responsible for the frontend. The symfony part is located in the `src` directory and the reactJS part is located in the `assets` directory.
- assets : contains the reactJS part of the project
- bin : contains the symfony binary
- config : contains the configuration of the symfony project
- docs : contains the documentation of the project
- migrations : contains the migrations of the project
- public : contains the public files of the project
- src : contains the symfony part of the project
- templates : contains the twig templates of the project
- tests : contains the tests of the project
- translations : contains the translations of the project
- var : contains the cache, logs and sessions of the project
- vendor : contains the dependencies of the project
- .env : contains the environment variables of the project
- .env.test : contains the environment variables of the tests
- .gitignore : contains the files to ignore in the git repository
- compose.override.yaml : contains the docker configuration of the symfony project
- compose.yaml : contains the docker configuration of the symfony project
- composer.json : contains the dependencies of the symfony project
- composer.lock : contains the dependencies of the symfony project
- importmap.php : contains the importmap of the project
- phpunit.xml : contains the configuration of the tests
- symfony.lock : contains the symfony version of the project
- webpack.config.js : contains the webpack configuration of the project
- package.json : contains the dependencies of the reactJS project
- pnpm-lock.yaml : contains the dependencies of the reactJS project

## Contributing

If you want to contribute to the project, you can fork the project and create a pull request. You can also create an issue if you find a bug or if you want to suggest a feature. Please contact the main developer.

## License

Copyright 2024 BuyMyServ

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Join Us

## Authors
- Théo | Newlance (pro_theo)

## Acknowledgements
- Symfony
- ReactJS
- Webpack
- Docker
- PHP
- Twig
- Doctrine
- PostgreSQL

## Changelog
- 1.0.0 : Initial release
