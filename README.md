
# Dog Image Search

This is a front-end project built with Node.js and the Koa web framework, allowing users to search for dog images by breed or retrieve random dog images.

## Features

1. **Search by Breed**: Users can input a specific dog breed to retrieve an image corresponding to that breed.
2. **Random Dog Image**: Users can obtain a random dog picture.
3. **Testing**: Includes test files for random dog picture retrieval.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Yiqing-Gu/Dog-Image-Search.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Dog-Image-Search
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node main.js
   ```
2. If the server starts successfully, the terminal will display:
   ```
   Server running on http://localhost:3011
   ```
3. Open your web browser and navigate to `http://localhost:3011`.
4. Use the interface to search for a specific dog breed or get a random dog image.

## Testing

This project uses [Jest](https://jestjs.io/) and [SuperTest](https://github.com/visionmedia/supertest) for testing.

### Setup Tests

1. Install the testing dependencies:
   ```bash
   npm install -D jest supertest
   ```
2. Ensure your `package.json` includes the following under "scripts":
   ```json
   "scripts": {
     "test": "jest --watchAll"
   }
   ```
3. To run the tests:
   ```bash
   npm run test
   ```
4. The console will display the test results, including status codes and URLs for random images.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Dog API](https://dog.ceo/dog-api/) for providing the dog images.
- [Jest](https://jestjs.io/) and [SuperTest](https://github.com/visionmedia/supertest) for testing frameworks.
