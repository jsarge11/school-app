insert into teachers(first_name, last_name, admin_privileges, principle, email, hash, school_id)
values($1, $2, $3, $4, $5, $6, $7);
select * from teachers
where school_id = $7;