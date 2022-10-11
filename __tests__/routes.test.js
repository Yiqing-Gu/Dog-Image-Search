// this is a file for testing random image in dog API.
// whether random function works (can find a random image)
// use Jest as a middleware

const request = require('supertest');
const server = require('../main.js');

// expect status code
const expectStatus = 302;

beforeAll(async () => {
 console.log('Start testing.');
});

afterAll(() => {
 server.close();
 console.log('This is the end of testing.');
});

//test whether dog API contains a keyword.
describe('Tests for dog API', () => {
  test('Get a random image', async () => {
    const response = await request(server).get('/multiple');

    // show an image if exists
    console.log(response.headers.location);

    // check status code
    expect(response.status).toEqual(expectStatus);
  });
});