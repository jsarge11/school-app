select * from students
where classroom_id = $1
order by first_name asc;