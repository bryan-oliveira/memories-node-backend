# memories-node-backend
![alt tag](https://img.shields.io/badge/awesome_version-v0.1-brightgreen.svg?style=flat)
![alt tag](https://img.shields.io/badge/ESLint-Airbnb-brightgreen.svg?style=flat)

## Memories API server in NodeJs

#### Pre-requisites
* [*Node.js*](https://nodejs.org/en/) on his last Long-term Support version
* [*MongoDB*](https://www.mongodb.com)
* After creating the db folder don't forget to set read/write permissions
```bash
$ sudo chmod 0755 < db folder path > && sudo chown $USER < db folder path >
```

#### Instalation

##### Node modules
```bash
$ npm install
```

##### Eslint
```bash
./node_modules/.bin/eslint --init
```
This will ask some questions, please select:
* How would you like to configure ESLint? *Use a popular style guide*
* Which style guide do you want to follow? *Airbnb*
* Do you use React? *No*
* What format do you want your config file to be in? *JavaScript*

And finnally, replace the `.eslintrc.js` content file with:
```json
// http://eslint.org/docs/user-guide/configuring.html#specifying-environments

module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import"
    ],
    "env": {
      "node": true,
      "mocha": true
    }
};
```

#### Quality
* [*ESLint*](http://eslint.org/docs/user-guide/getting-started)
* [*Airbnb js standard*](https://github.com/airbnb/javascript)

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
- test
  - controllers
  - models
- .eslintignore
- .eslintrc.json
- .gitignore
- package.json
- README.md
- server.js
```
