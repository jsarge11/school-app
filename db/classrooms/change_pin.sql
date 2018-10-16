update classrooms
set pin = $1
where clsr_id = $2;
select * from classrooms
where clsr_id = $2;