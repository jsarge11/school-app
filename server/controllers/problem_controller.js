module.exports = {
    readMathProblemSets: (req, res) => {
        let db = req.app.get('db');
        db.problem_sets.get_problem_sets([req.query.id]).then(problem_sets => {
            res.status(200).send([problem_sets]);
        })
    }
}