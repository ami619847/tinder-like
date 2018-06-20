import { NEW_USER } from '../actions/users'
import { FIND_MATCHES } from '../actions/matches'

import userData from '../data/userData'

const initialCurrentUserId = 0

const initialState = {
  currentUserId: initialCurrentUserId,
  userData: userData,
  currentUser: userData.find(user => user.userId === initialCurrentUserId)
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

const getUsersWithSameHobby = (allUsers, currentUser) => {
  return allUsers.filter(user => user.userId !== currentUser.userId && user.userHobby.typeHobby === currentUser.userHobby.typeHobby)
}

const getMatches = (usersWithSameHobby, currentUser) => {
  if (currentUser.userHobby.userType === 'practice')
    return usersWithSameHobby.filter(user => user.userHobby.userType === 'practice')
  if (currentUser.userHobby.userType === 'learn')
    return usersWithSameHobby.filter(user => user.userHobby.userType === 'teach')
  if (currentUser.userHobby.userType === 'teach')
    return usersWithSameHobby.filter(user => user.userHobby.userType === 'learn')
  else return 'No matches found...'
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case "NEW_USER":
    return {
      ...state,
      userData: [...state.userData,
        {
          userId: state.userData[state.userData.length - 1].userId + 1,//lastuserId +1,
          userName: action.payload.userName,
          userGender: action.payload.userGender,
          userAge: action.payload.userAge,
          userLocation: action.payload.userLocation,
          userShortDescription: action.payload.userShortDescription,
          userHobby: {
            typeHobby: action.payload.typeHobby,
            experienceHobby: action.payload.experienceHobby, //radiobutton with 3 choices: beginner, intermediate, experienced
            userType: action.payload.userType //radiobutton with 3 choices: teach, learn, practice
          },
          userPhoto: action.payload.userPhoto
        }
      ]
    }
  case "CHANGE_USER":
    return {
      ...state,
      currentUserId: userData.find(user => user.userName === capitalizeFirstLetter(action.payload.userName)).userId,
      currentUser: userData.find(user => user.userName === capitalizeFirstLetter(action.payload.userName))
    }
  case "FIND_MATCHES":
    const allMatches = getMatches(getUsersWithSameHobby(state.userData, state.currentUser), state.currentUser)
    const userDataWithUpdatedMatches = state.userData.map(user => {
      if(user.userId === state.currentUserId){
        user = {
          ...user,
          userMatches: {
            allMatches
          }
        }
      }
      return user
    })
    return {
      ...state,
      userData: userDataWithUpdatedMatches
    }
  case "NEW_HOBBY":
    const addNewHobby = state.userData.map(user => {
      if(user.userId === state.currentUserId){
        user = {
          ...user,
          userHobby: {
            typeHobby: action.payload.typeHobby,
            experienceHobby: action.payload.experienceHobby,
            userType: action.payload.userType
          }
        }
      }
      return user
    })
    return {
      ...state,
      userData: addNewHobby
    }
  default:
    return state
  }
}



export default reducer
