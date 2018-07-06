insert into teachers(first_name, last_name, gender, school_id, admin_privileges, principle, email, hash)
values($1, $2, $3, $4, $5, $6, $7, $8);
select * from teachers
where school_id = $4;