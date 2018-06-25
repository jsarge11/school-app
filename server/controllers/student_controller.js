module.exports = {
    create: (req, res) => {
        let db = req.app.get('db');
        let { username, first_name, last_name, pin, points, grade, clsr_id} = req.body;
        db.students.create_student(username, first_name, last_name, pin.toString(), points, grade, clsr_id).then(students =>{
            res.status(200).send(students);
        }).catch(error => console.log(error))
    },
    read: (req, res) => {
        let db = req.app.get('db');
        db.students.get_students_by_id([req.query.id]).then(students => {
            res.status(200).send(students);
        }).catch(error => console.log(error))
    }
}