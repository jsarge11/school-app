const initialState = {
 classroom: null,
 classroomList: []
}

const SET_CLASSROOM = 'SET_CLASSROOM'
const SET_CLASSROOM_LIST = 'SET_CLASSROOM_LIST'

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


export default function reducer(state = initialState, action) {
 switch(action.type) {
  case(SET_CLASSROOM) :
   return Object.assign({}, state, {classroom: action.payload})
  case(SET_CLASSROOM_LIST) :
   return Object.assign({}, state, {classroomList: action.payload})
  default :
   return state;
 }
}
