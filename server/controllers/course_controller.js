module.exports = {
    read: (req, res) => {
        let db = req.app.get('db');
        db.courses.get_courses().then(courses => {
            res.status(200).send(courses);
        })
    }
}