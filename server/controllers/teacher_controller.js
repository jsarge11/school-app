module.exports = {
    read: (req, res) => {
        let db = req.app.get('db');
        db.teachers.get_teachers(req.query.id).then(teachers => {
            res.status(200).send(teachers);
        })
    },
    // hash set to null for teachers to set password upon logging in for the first time
    create: (req, res) => {
       let { first_name, last_name, admin_privileges, principle, email, school_id } = req.body;
       console.log(req.body);
       let db = req.app.get('db');
       db.teachers.create_teacher(first_name, last_name, admin_privileges, principle, email, null, school_id).then(teachers => {
           res.status(200).send(teachers);
       }).catch(error => console.log(error))
    }
}