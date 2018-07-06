insert into classrooms(t_id, name)
values($1, $2);
select * from classrooms
where t_id = $1;