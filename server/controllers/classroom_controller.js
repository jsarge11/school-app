module.exports = {
    read: (req, res) => {
        let db = req.app.get('db');
        db.classrooms.read_classrooms([req.query.id]).then(classrooms => {
          res.status(200).send(classrooms);
        })
    },
    create: (req, res) => {
        let db = req.app.get('db');
        db.classrooms.add_classroom([req.query.id, req.body.classroomName]).then(classrooms => {
            res.status(200).send(classrooms);
        }).catch(error => res.status(500).send(error));
    },
    update: (req, res) => {
        let db = req.app.get('db');
        db.classrooms.update_classroom_name([req.body.text, req.query.id]).then(classrooms => {
            res.status(200).send(classrooms);
        })
    },
    delete: (req, res) => {
        let db = req.app.get('db');

        db.classrooms.delete_classroom([req.query.id]).then(classrooms => {
            res.status(200).send(classrooms);
        }).catch(error => res.status(500).send(error));

    }
}