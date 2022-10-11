#  Dog image search

This is a front-end project based on Node.js and koa web framework.

## Functionality

1. Users can get an image for a specific dog breed thourgh reading input and calling dog API.

2. Users can get a random dog picture through calling dog API.

3. There is a test file for random dog pictures.

## Launch

Inside this project, run

```sh
node main.js
```

If the server starts successfully, you will see

```sh
Server running on http://localhost:3011
```

in the terminal. At the same time, a web page will appear.

Users can search through a specific dog breed or getting a random image.

## Test

A middleware called "Jest" is used and needed here. Test file is in dogs-main\__tests__ and called "routes.test.js".

```sh
npm install -D jest supertest
```

Package.json should have been revised. If not, please revise in the following way.

//package.json
"scripts": {
 "test": "jest --watchAll",
},

After setting an expecting status code, console will compare real status code and print a url for the random image. 

Run the following command to start testing.

```sh
npm run test
```