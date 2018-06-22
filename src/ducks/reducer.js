const initialState = {
 classroom: 20
}

const SET_CLASSROOM = 'SET_CLASSROOM'

export function setClassroom(clsr_id) {
 return {
  type: SET_CLASSROOM,
  payload: clsr_id
 }
}

export default function reducer(state = initialState, action) {
 switch(action.type) {
  case(SET_CLASSROOM) : 
   return Object.assign({}, state, {classroom: action.payload})
  default :
   return state;
 }
}
