update students
set assessments = array_remove(assessments, $1)
where st_id = $2;
select assessments from students
where st_id = $2
order by assessments asc;