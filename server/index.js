const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      student = require('./controllers/student_controller'),
      user = require('./controllers/user_controller'),
      classroom = require('./controllers/classroom_controller'),
      teacher = require('./controllers/teacher_controller'),
      course = require('./controllers/course_controller'),
      math = require('./controllers/math_controller')
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

// user management
app.get('/auth/user', user.read);
app.post('/auth/user', user.addToSession);
app.get('/auth/logout', user.logOut);
app.post('/auth/students', user.loginStudent)

// student management
app.get('/students', student.read);
app.post('/students', student.create);

//classroom management
app.get('/classrooms', classroom.read);
app.put('/classrooms', classroom.update);
app.post('/classrooms', classroom.create);
app.delete('/classrooms', classroom.delete);

//teacher management
app.post('/teachers', teacher.create);
app.get('/teachers', teacher.read);

//course management
app.get('/courses', course.read)

//math management
app.get('/math/assessments', math.readAssessments)

massive(CONNECTION_STRING).then(dbInstance => {
      app.set('db', dbInstance);
      app.listen(SERVER_PORT, console.log('schooling you on port ' + SERVER_PORT))
}).catch(error => console.log(error))
