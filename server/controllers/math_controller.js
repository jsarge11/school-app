module.exports = {
    readAssessments: (req, res) => {
        let db = req.app.get('db');
        db.math.get_assessments([req.query.id]).then(assessments => {
            res.status(200).send(assessments);
        })
    },
    readStudentAssessments: (req, res) => {
        console.log(req.query.id);
        let db = req.app.get('db');
        db.math.get_student_assessments([req.query.id]).then(assessments => {
            res.status(200).send(assessments);
        })
    },
    readProblemSets: (req, res) => {
        let db = req.app.get('db');
    },
    readProblems: (req, res) => {
        let db = req.app.get('db');
    },
    addAssessment: (req, res) => {
        let { assessmentValue } = req.body;
        let { id } = req.query;
        let db = req.app.get('db');
        db.math.add_assessment(+assessmentValue, +id).then(assessments => {
            res.status(200).send(assessments);
        })
    },
    deleteAssessment: (req, res) => {
        let { id, item } = req.query;
        let db = req.app.get('db');
        db.math.delete_assessment(+item, +id).then(assessments => {
            res.status(200).send(assessments);
        })
    }
}