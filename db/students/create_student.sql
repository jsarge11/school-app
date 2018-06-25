insert into students(username, first_name, last_name, PIN, points, grade, classroom_id)
values($1, $2, $3, $4, $5, $6, $7);
select * from students
where classroom_id = $7; 