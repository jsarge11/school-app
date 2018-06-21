-------------------------------Course Management-------------------------------

create table courses (
    c_id serial primary key,
    name text
);
create table course_categories (
    cat_id serial primary key,
    name text,
    course_id int references courses(c_id)
);
create table assessments (
    a_id serial primary key,
    name text,
    category_id int references course_categories(cat_id)
);
create table problem_sets (
    ps_id serial primary key,
    name text,
    assessment_id int references assessments(a_id)
);
create table problems (
    p_id serial primary key,
    name text,
    operator varchar(5),
    number1 int,
    number2 int,
    problem_set_id int references problem_sets(ps_id)
);

-------------------------------Person Management-------------------------------
create table schools (
    sc_id serial primary key,
    name text
);
create table teachers (
    t_id serial primary key,
    first_name text,
    last_name text,
    gender varchar(2),
    admin_privileges boolean,
    principle boolean,
    email text,
    hash text,
    school_id int references schools(sc_id)
);
create table classrooms (
    clsr_id serial primary key,
    t_id int references teachers(t_id),
    name text
);
create table students (
    st_id serial primary key,
    username text,
    first_name text,
    last_name text,
    PIN varchar(10),
    points int,
    grade varchar(6),
    classroom_id int references classrooms(clsr_id)
);
create table math_scores (
    m_id serial primary key,
    date_taken varchar(50),
    score int,
    student_id int references students(st_id),
    problem_id int references problems(p_id)
);
