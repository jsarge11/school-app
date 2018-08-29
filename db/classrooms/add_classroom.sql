insert into classrooms(t_id, name, login, pin)
values($1, $2, $2, 1234);
select * from classrooms
where t_id = $1;