const fs = require('fs');
const request = require('superagent');

module.exports = ({ router }) => {

	// load a html page
  	router.get('/', async (ctx, next) => {
    		ctx.response.type = 'html';
    		ctx.response.body = fs.createReadStream('./src/index.html');
  	});

	// for a single image
  	router.get('/single', async (ctx, next) => {
		const newUrl = 'https://dog.ceo/api/breed/' + ctx.request.query.breed + '/images/random'
		await request
      		.get(newUrl)
      		.then(res => {
				ctx.redirect(res.body.message)
			})
  	});

	// for a random image
	router.get('/multiple', async (ctx, next) => {
		await request
      		.get('https://dog.ceo/api/breeds/image/random')
      		.then(res => {
				ctx.redirect(res.body.message)
			})
  	});

}