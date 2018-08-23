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
    },
    logScore: (req, res) => {
       let { score, incorrect, operator, number, date } = req.body;
       var problem_set;
       switch(operator) {
           case('*') :
            problem_set = 1;
            break;
           case('/') :
            problem_set = 2;
            break;
           case('+') :
            problem_set = 3;
            break;
           case('-') :
            problem_set = 5;
            break;
           default :
            problem_set = null;
            break;
       }
       let { id } = req.query;
       let db = req.app.get('db');
       console.log(problem_set);
       db.scores.math.add_score(date, score, id, problem_set, incorrect, number).then(() => {
           res.status(200).send();
       }).catch(error => console.log(error))
    }
}