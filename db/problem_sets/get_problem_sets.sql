select * from problem_sets
where assessment_id = $1
order by length(number), number;