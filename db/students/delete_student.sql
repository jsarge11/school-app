delete from students
where st_id = $1;
select * from students
where classroom_id = $2
order by first_name asc;