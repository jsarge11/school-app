update classrooms
set name = $1
where clsr_id = $2;
select * from classrooms
order by clsr_id asc;