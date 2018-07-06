update classrooms
set name = $1
where clsr_id = $2;
select * from classrooms
where t_id = $3
order by clsr_id asc;