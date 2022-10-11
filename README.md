# dogs

This is the starter code for a [Node.js](https://nodejs.org/en/about/) server
using the [Koa web framework](https://koajs.com/). There a web page in
`/public` which should be served to the user.

## Getting started

You will need to install Node.js.

For best results, use [Node.js 16 or higher](https://nodejs.org/).

You can check your current version of Node.js with

```sh
$ node --version
v16.17.0
```

Then, inside this project, run

```sh
npm install
node server.js
```

If the server starts successfully, you will see

```sh
Server running on http://localhost:3011
```

in the terminal.

## Documentation

- Koa: https://koajs.com/
- @koa/router: https://github.com/koajs/router#koarouter
- koa-body: https://github.com/dlau/koa-body#usage-with-koa-router
- Dogs API: https://dog.ceo/dog-api/breeds-list

## Yiqing's implementation

1. Get an image for a specific breed thourgh users' input and dog API.

2. Get a random dog picture through dog API.

3. Created a test for 2.

## About testing

A middleware called "Jest" is used and needed here. Test file is in dogs-main\__tests__ and called "routes.test.js".

```sh
npm install -D jest supertest
```

Package.json has been revised. If not, please revise in the following way.

//package.json
"scripts": {
 "test": "jest --watchAll",
},

After setting an expecting status code, console will compare real status code and print a url for the random image. 

Run the following command to start testing.

```sh
npm run test
```

