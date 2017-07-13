# memories-node-backend ![alt tag](https://img.shields.io/badge/awesome_version-v0.1-brightgreen.svg) ![alt tag](https://img.shields.io/badge/eslint-standard-brightgreen.svg)

## Memories API server in NodeJs

#### Pre-requisites
* [*Node.js*](https://nodejs.org/en/) on his last Long-term Support version
* [*MongoDB*](https://www.mongodb.com)
* After creating the db folder don't forget to set read/write permissions
```bash
$ sudo chmod 0755 < db folder path > && sudo chown $USER < db folder path >
```

#### Instalation
```bash
$ npm install
```

#### Quality
* [*ESLint*](http://eslint.org/docs/user-guide/getting-started)
* [*Standard*](https://standardjs.com/)

#### Run server
* DB start
```bash
mongod --dbpath < db folder path >
```
* Server start
```bash
$ npm run start
```

#### Run tests
```bash
$ npm run test
```

#### Extra Scripts
* Show project dependencies
```bash
$ npm run list
```
* Run lint
```bash
$ npm run lint
```

#### File-system
```bash
- api
  - controllers
  - models
  - routes
- .eslintignore
- .eslintrc.json
- .gitignore
- package.json
- README.md
- server.js
```
