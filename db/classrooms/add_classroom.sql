insert into classrooms(t_id, name, pin)
values($1, $2, $3);
select * from classrooms
where t_id = $1;