module.exports = {
    readAssessments: (req, res) => {
        let db = req.app.get('db');
        db.math.get_assessments([req.query.id]).then(assessments => {
            res.status(200).send(assessments);
        })
    },
    readProblemSets: (req, res) => {
        let db = req.app.get('db');
    },
    readProblems: (req, res) => {
        let db = req.app.get('db');
    }
}