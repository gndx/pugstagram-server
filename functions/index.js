const functions = require('firebase-functions');
const pugstagram = require('./data/pugstagram');

exports.data = functions.https.onRequest((request, response) => {
  response.header('Content-Type', 'application/json');
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Content-Type');
  if (request.method === 'GET') {
    response.json(pugstagram());
  } else {
    response.status(500).send('I failed you');
  }
});
