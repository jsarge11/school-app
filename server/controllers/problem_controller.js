module.exports = {
    readMathProblemSets: (req, res) => {
        let db = req.app.get('db');
        db.problem_sets.get_problem_sets([req.query.id]).then(problem_sets => {
            res.status(200).send(problem_sets);
        })
    },
    readMathProblems: (req, res) => {
        let db = req.app.get('db');
        let { operator, number } = req.query;
        if (operator === 'plus') {
            operator = '+';
        }
        if (operator !== '/') {
            db.problem_sets.get_problems([operator, number]).then(problems => {
                res.status(200).send(problems);
            })
        }
        else {
            db.problem_sets.get_division_problems([operator, number]).then(problems => {
                res.status(200).send(problems);
            })
        }

    }
}