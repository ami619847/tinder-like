import { NEW_USER } from '../actions/users'
import { FIND_MATCHES, LIKE_IT, DISLIKE_IT } from '../actions/matches'

import userData from '../data/userData'

const initialCurrentUserId = 0

const initialState = {
  currentUserId: initialCurrentUserId,
  userData: userData,
  currentUser: userData.find(user => user.userId === initialCurrentUserId),
}

const makeNewUser = (state, action) => {
  return {
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
}

// TODO: take out currentUser in this reducer and get it from userdata in places where you need it. If you have time. If not then so be it.

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

const getCurrentUser = (currentUserId, users) => {
  return users.find(user => user.userId === currentUserId)
}

const getUsersWithSameHobby = (allUsers, currentUser) => {
  return allUsers.filter(user => user.userId !== currentUser.userId && user.userHobby.typeHobby === currentUser.userHobby.typeHobby)
}

const getMatches = (usersWithSameHobby, currentUser) => {
  if (currentUser.userHobby.userType === 'practice')
    return usersWithSameHobby.filter(user => user.userHobby.userType === 'practice').map(user=>user.userId)
  if (currentUser.userHobby.userType === 'learn')
    return usersWithSameHobby.filter(user => user.userHobby.userType === 'teach').map(user=>user.userId)
  if (currentUser.userHobby.userType === 'teach')
    return usersWithSameHobby.filter(user => user.userHobby.userType === 'learn').map(user=>user.userId)
  else return 'No matches found...'
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case "NEW_USER":
    const newUser = makeNewUser(state, action)
    return {
      currentUserId: newUser.userId,
      userData: [...state.userData, newUser],
      currentUser: newUser
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
          userMatches: {...user.userMatches,
            allMatches: allMatches
          }
        }
      }
      return user
    })
    return {
      ...state,
      userData: userDataWithUpdatedMatches,
      currentUser: {...state.currentUser,
        userMatches: {...state.currentUser.userMatches,
          allMatches: allMatches
        }
      }
    }
  case "NEW_HOBBY":
    const addNewHobby = state.userData.map(user => {
      if(user.userId === state.currentUserId){
        user = {
          ...user,
          userHobby: {
            typeHobby: action.payload.userHobby.typeHobby,
            experienceHobby: action.payload.userHobby.experienceHobby,
            userType: action.payload.userHobby.userType
          }
        }
      }
      return user
    })
    return {
      ...state,
      userData: addNewHobby
    }
  case "LIKE_IT":
    const userDataWithNewLikes = state.userData.map(user => {
      if(user.userId === state.currentUserId){
        user = {
          ...user,
          userMatches: {...user.userMatches,
            likedMatches: [...user.userMatches.likedMatches, action.payload]
          }
          }
        }
      return user
    })
    return {
      ...state,
      userData: userDataWithNewLikes,
      currentUser: {...state.currentUser,
        userMatches: {...state.currentUser.userMatches,
          likedMatches: [...state.currentUser.userMatches.likedMatches, action.payload]
        }
      }
    }
    case "DISLIKE_IT":
      const userDataWithNewDislikes = state.userData.map(user => {
        if(user.userId === state.currentUserId){
          user = {
            ...user,
            userMatches: {...user.userMatches,
              dislikedMatches: [...user.userMatches.dislikedMatches, action.payload]
            }
            }
          }
        return user
      })
      return {
        ...state,
        userData: userDataWithNewDislikes,
        currentUser: {...state.currentUser,
          userMatches: {...state.currentUser.userMatches,
            dislikedMatches: [...state.currentUser.userMatches.dislikedMatches, action.payload]
          }
        }
      }
  default:
    return state
  }
}

export default reducer
