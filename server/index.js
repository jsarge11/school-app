const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      student = require('./controllers/student_controller'),
      teacher = require('./controllers/teacher_controller'),
      classroom = require('./controllers/classroom_controller')
require('dotenv').config()
let app = express();

app.use(bodyParser.json())
const {
      SERVER_PORT,
      CONNECTION_STRING,
      SECRET_SESSION
} = process.env;

app.use(session({
      resave: true,
      saveUninitialized: true,
      secret: SECRET_SESSION
}))

// teacher management
app.get('/auth/teacher', teacher.read);
app.post('/auth/teacher', teacher.addToSession)
app.get('/auth/logout', teacher.logOut)

// student management
app.post('/newstudent', student.create);

//classroom management
app.get('/classrooms', classroom.read);
app.put('/classrooms', classroom.update);
app.post('/classrooms', classroom.create);
app.delete('/classrooms', classroom.delete)

massive(CONNECTION_STRING).then(dbInstance => {
      app.set('db', dbInstance);
      app.listen(SERVER_PORT, console.log('schooling you on port ' + SERVER_PORT))
}).catch(error => console.log(error))
