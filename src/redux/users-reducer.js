import { usersApi } from "../api/api"

const initialState = {
    users:[],
    userForEdit: null,
    userPosts: [],
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
      case 'users/setUserPosts': {
        return {
          ...state,
          userPosts: action.payload
        }
      }
      case 'users/setEditUser': {
        return {
          ...state,
          userForEdit: {
            id: action.payload.id,
            name: action.payload.name,
            username: action.payload.username,
            email: action.payload.email,
            suite: action.payload.address.suite,
            city: action.payload.address.city,
            street: action.payload.address.street,
            zipcode: action.payload.address.zipcode,
            lat: action.payload.address.geo.lat,
            lng: action.payload.address.geo.lng,
            phone: action.payload.phone,
            website: action.payload.website,
            companyName: action.payload.company.name,
            catchPhrase: action.payload.company.catchPhrase,
            bs: action.payload.company.bs,
          },
          listLoading: false
        }
      }
      case 'users/clearEditUser': {
        return {
          ...state,
          userForEdit: null
        }
      }
      case 'users/clearPosts': {
        return {
          ...state,
          userPosts: []
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
const setEditUser = (user) => ({type:'users/setEditUser', payload: user})
const setUserPosts = (posts) => ({type:'users/setUserPosts', payload: posts})
const setLoading = (isLoading) => ({type:'users/setLoading', payload: isLoading})
export const clearEditUser = () => ({type:'users/clearEditUser'});
export const clearPosts = () => ({type:'users/clearPosts'});

export const requestUsers = () => async dispatch => {
    dispatch(setLoading(true));
    const response = await usersApi.getUsers();
    dispatch(setUsers(response));
}

export const requestUserById = (id) => async dispatch => {
    const response = await usersApi.getUserById(id);
    dispatch(setEditUser(response));
}

export const requestUserPosts = (id) => async dispatch => {
  const response = await usersApi.getUserPosts(id);
  dispatch(setUserPosts(response));
}