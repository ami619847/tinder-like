import { NEW_USER } from '../actions/users'
import userData from '../data/userData'


const initialCurrentUserId = 0

const initialState = {
  currentUserId: initialCurrentUserId,
  userData: userData,
  currentUser: userData.find(user => user.userId === initialCurrentUserId)
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
          userHobby: [{
            typeHobby: action.payload.typeHobby,
            experienceHobby: action.payload.experienceHobby, //radiobutton with 3 choices: beginner, intermediate, experienced
            userType: action.payload.userType //radiobutton with 3 choices: teach, learn, practice
          }]
        }
      ]
    }
  default:
    return state
  }
}

export default reducer
