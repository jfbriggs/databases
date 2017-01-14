CREATE DATABASE chat;

USE chat;


/* Create other tables and define schemas for them here! */

-- CREATE TABLE users (
--   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   username CHAR(20)
-- );

-- CREATE TABLE message (
--   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   msg CHAR(250)
-- );

-- CREATE TABLE rooms (
--   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   roomname CHAR(20)
-- );

-- CREATE TABLE messages (
--   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   user_id INT(20),
--   msg_id INT(250),
--   room_id INT(20),
--   FOREIGN KEY (user_id) REFERENCES users (id),
--   FOREIGN KEY (msg_id) REFERENCES message (id),
--   FOREIGN KEY (room_id) REFERENCES rooms (id)
  
-- );

CREATE TABLE messages (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username CHAR(20),
  message CHAR(250),
  roomname CHAR(20)
);






/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
