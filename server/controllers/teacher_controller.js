module.exports = {
    read: (req, res) => {
        let db = req.app.get('db');
        db.teachers.get_teachers(req.query.id).then(teachers => {
            res.status(200).send(teachers);
        })
    },
    create: (req, res) => {
       let { first_name, last_name, gender, school_id, admin_privileges, principle, email, hash } = req.body;
       let db = req.app.get('db');
       db.teachers.create_teacher(first_name, last_name, gender, school_id, admin_privileges, principle, email, hash).then(teachers => {
           res.status(200).send(teachers);
       })
    }
}