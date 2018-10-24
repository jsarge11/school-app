module.exports = {
    read: (req, res) => {
        let db = req.app.get('db');
        //reading password
        if (req.query.email) {
            db.users.get_user_hash([req.query.email]).then(hash_arr => {
                if (hash_arr[0]) {
                    res.status(200).send(hash_arr[0].hash);
                }
                else {
                    res.status(404).send('No user found with that email.');
                }
            }).catch(error => res.status(500).send(error))
        }
        //reading session if no email
        else {
            if(req.session.user) {
                res.status(200).send(req.session.user)
            }
            else {
                res.status(401).send();
            }
        }
    },
    addToSession: (req, res) => {
        let db = req.app.get('db');
        db.users.get_user_info([req.query.email]).then(user => {
            if (user[0]) {
                req.session.user = user[0];
                res.status(200).send(user[0]);
            }
        })

    },
    logOut: (req, res) => {
        req.session.destroy();
        res.status(200).send('Successfully Logged Out');
    },
    loginStudent: (req, res) => {

        let db = req.app.get('db');
        let { id, PIN } = req.body;

        db.students.login_student([id]).then(student => {
            if (student[0].pin === PIN) {
                res.status(200).send(student);
            }
            else {
                res.status(404).send('PIN invalid.');
            }

        })
    },
    checkClassroom: (req, res) => {
        let db = req.app.get('db');
        let { name, pin } = req.body;
        let found = false;
        db.classrooms.get_all_classrooms().then(classrooms => {
            classrooms.forEach(item => {
                    if (item.name.trim().toLowerCase() === name.trim().toLowerCase()) {
                        found = true;
                        if (item.pin.toString() === pin) {
                            res.status(200).send(item);
                        }
                        else {
                            res.status(404).send('Login invalid.');
                        }
                    }

            })
            if (!found) {
                res.status(404).send('Classroom not found.');
            }
        })
    }
}