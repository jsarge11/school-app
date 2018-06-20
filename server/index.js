const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      student = require('./controllers/student_controller')
require('dotenv').config()
let app = express();

app.use(bodyParser.json())

const {
      SERVER_PORT,
      CONNECTION_STRING,
} = process.env;

app.post('/newstudent', student.create);

massive(CONNECTION_STRING).then(dbInstance => {
      app.set('db', dbInstance);
      app.listen(SERVER_PORT, console.log('schooling you on port ' + SERVER_PORT))
})
