import { usersApi } from "../api/api"


const initialState = {
    users:[],
    listLoading: false
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
      case 'users/setUsers': {
        return {
          ...state,
          users: action.payload,
          listLoading: false
        }
      }
      case 'users/setLoading': {
          return{
              ...state,
              listLoading: action.payload
          }
      }
      default:
        return state
    }
}

const setUsers = (users) => ({type:'users/setUsers', payload: users})
const setLoading = (isLoading) => ({type:'users/setLoading', payload: isLoading})

export const requestUsers = () => async dispatch => {
    dispatch(setLoading(true));
    const response = await usersApi.getUsers();
    dispatch(setUsers(response));
}
