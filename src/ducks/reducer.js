const initialState = {
 classroom: null,
 classroomList: [],
 studentList: [],
 teacherList: [],
 user: {}
}

const SET_CLASSROOM = 'SET_CLASSROOM'
const SET_CLASSROOM_LIST = 'SET_CLASSROOM_LIST'
const SET_STUDENT_LIST = 'SET_STUDENT_LIST'
const SET_TEACHER_LIST = 'SET_TEACHER_LIST'
const SET_USER = 'SET_USER'
const LOGOUT = 'LOGOUT'


export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  }
}
export function setTeacherList(teacherList) {
  return {
    type: SET_TEACHER_LIST,
    payload: teacherList
  }
}
export function setStudentList(studentList) {
  return {
    type: SET_STUDENT_LIST,
    payload: studentList
  }
}
export function setClassroomList(classroomlist) {
  return {
    type: SET_CLASSROOM_LIST,
    payload: classroomlist
  }
}
export function setClassroom(classroom) {
 return {
  type: SET_CLASSROOM,
  payload: classroom
 }
}
export function logOut() {
  return {
    type: LOGOUT
  }
}


export default function reducer(state = initialState, action) {
 switch(action.type) {
  case(SET_USER) :
   return Object.assign({}, state, {user: action.payload})
  case(SET_CLASSROOM) :
   return Object.assign({}, state, {classroom: action.payload})
  case(SET_CLASSROOM_LIST) :
   return Object.assign({}, state, {classroomList: action.payload})
  case(SET_STUDENT_LIST) :
   return Object.assign({}, state, {studentList: action.payload})
  case(SET_TEACHER_LIST) :
   return Object.assign({}, state, {teacherList: action.payload })
  case(LOGOUT) :
    return Object.assign({}, initialState);
  default :
   return state;
 }
}
