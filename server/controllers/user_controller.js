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
        let { name, PIN } = req.body;

        console.log(name, PIN);

        db.students.login_student([req.body.name]).then(student => {
            console.log(student);
            if (student[0]) {
                if (student[0].pin === req.body.PIN) {
                    res.status(200).send('Success.');
                }
                else {
                    res.status(404).send('Login invalid.');
                }
            }
            else {
                res.status(404).send('User not found.');
            }

        })
    }
}