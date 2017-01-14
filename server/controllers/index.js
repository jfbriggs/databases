var models = require('../models');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function (req, res) {
      res.writeHead(200, headers);
      models.messages.get(req, res);

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body);
      res.writeHead(201, headers);
      models.messages.post(req.body, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log('USERS: BODY:', req.body);
      models.users.post(req.body);
      res.writeHead(200, headers);
      res.end();
    }
  }
};

