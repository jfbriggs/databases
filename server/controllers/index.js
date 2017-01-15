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

      var roomFilter;

      if (req.url.indexOf('?') !== -1) {
        roomFilter = req.url.split('?')[1].split('=')[1];
      } else {
        roomFilter = null;
      }
      console.log(roomFilter);

      res.writeHead(200, headers);
      models.messages.get(function(err, result) {
        res.end(JSON.stringify(result));
      }, roomFilter);

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body);
      res.writeHead(201, headers);
      models.messages.post(req.body, function(err, result) {
        res.end();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // No.
    get: function (req, res) {},
    post: function (req, res) {
      res.writeHead(201, headers);
      res.end();
    }
  }
};

