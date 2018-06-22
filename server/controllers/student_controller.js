module.exports = {
    create: (req, res) => {
        let db = req.app.get('db');
        let { username, first_name, last_name, pin, points, grade, clsr_id} = req.body;
        db.students.create_student(username, first_name, last_name, pin.toString(), points, grade, clsr_id).then(() =>{
            res.status(200).send();
        }).catch(error => console.log(error))
    }
}