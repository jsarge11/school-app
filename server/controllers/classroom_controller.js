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
    update_name: (req, res) => {
        let db = req.app.get('db');
        db.classrooms.update_classroom_name([req.body.text, req.query.id, +req.query.t_id]).then(classrooms => {
            res.status(200).send(classrooms);
        })
    },
    update_pin: (req, res) => {
        let { id } = req.query;
        let { clsr_id, pin } = req.body;
        let db = req.app.get('db');
        db.classrooms.change_pin([+pin, clsr_id, id]).then(classrooms => {
            res.status(200).send(classrooms);
        }).catch((error) => console.log(error))
    },
    delete: (req, res) => {
        let db = req.app.get('db');
        db.classrooms.delete_classroom([req.query.id, +req.query.t_id]).then(classrooms => {
            res.status(200).send(classrooms);
        }).catch(error => res.status(500).send(error));

    }
}