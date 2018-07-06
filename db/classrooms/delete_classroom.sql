delete from classrooms
where clsr_id = $1;
select * from classrooms
where t_id = $2;