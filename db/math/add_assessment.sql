update students
set assessments = assessments || $1
where st_id = $2;