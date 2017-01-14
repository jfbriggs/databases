var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (obj) {
      var user = obj.username;
      var msg = obj.message;
      var room = obj.roomname;

      db.connect(function(err) {
        if (err) {
          console.log('DIDNT CONNECT');
        } else {
          console.log('SUCCESSFUL CONNECTION BREH');
        }
      });
      
      console.log('Attempting to add:', user, msg, room);
      db.query('insert into messages (username,message,roomname) values ("' + user + '","' + msg + '","' + room + '");', 
      function(err, result) {
        if (err) {
          console.log('QUERY ERROR', err);
          db.end();
        } else {
          console.log('QUERY SUCCESS');
          console.log('QUERY RESULT', result);
          db.end();
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

