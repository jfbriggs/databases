var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {

      db.query('SELECT * FROM messages', function (err, results, fields) {
        if (err) {
          console.log('Select error:', err);
        }

        res.end(JSON.stringify(results));
      });

    }, // a function which produces all the messages
    post: function (obj, res) {
      var user = obj.username;
      var msg = obj.message;
      var room = obj.roomname;
      
      console.log('Attempting to add:', user, msg, room);
      db.query('insert into messages (username,message,roomname) values ("' + user + '","' + msg + '","' + room + '");', 
      function(err, result) {
        if (err) {
          console.log('QUERY ERROR', err);
        } else {
          res.end();
        }
      });
      
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

