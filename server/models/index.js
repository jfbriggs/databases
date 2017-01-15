var db = require('../db');

module.exports = {
  messages: {
    get: function (callback, room) {

      var qString;
      
      if (!room) {
        qString = 'select username, message, roomname from messages order by id desc';
      } else {
        qString = 'select username, message, roomname from messages where roomname = "' + room + '"';
      }

      db.query(qString, function (err, result) {
        if (err) {
          console.log('Select error:', err);
        } else {
          callback(err, result);
        }
      });
    },

    post: function (data, callback) {

      var params = [data.username, data.message, data.roomname];
      var qString = 'insert into messages (username, message, roomname) values (?, ?, ?)';
      db.query(qString, params, function(err, result) {
        if (err) {
          console.log('QUERY ERROR', err);
        } else {
          callback(err, result);
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

