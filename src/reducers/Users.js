import { NEW_USER, NEW_HOBBY } from '../actions/Users'

const initialState = [
    {
      userId: 0,
      userName: "Rick",
      userGender: "male",
      userAge: "35",
      userLocation: "utrecht",
      userShortDescription: "loves hiking",
      userHobby: [
        {
          typeHobby: "hiking",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "practice" //radiobutton with 3 choices: teach, learn, practice
        },
        {
          typeHobby: "geography",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "teach" //radiobutton with 3 choices: teach, learn, practice
        }],
        userMatches: [{
          otherUserId: 124,
          matches: "not yet" // 3 choices: yes, no, not yet
        },
        {
          otherUserId: 2,
          matches: "yes" // 3 choices: yes, no, not yet
        }
      ]
    },
    {
      userId: 1,
      userName: "Alper",
      userGender: "male",
      userAge: "35",
      userLocation: "amstelveen",
      userShortDescription: "djing",
      userHobby: [{
        typeHobby: "djing",
        experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
        userType: "teach" //radiobutton with 3 choices: teach, learn, practice
      }],
      userMatches: [{
        otherUserId: 12423,
        matches: "not yet" // 3 choices: yes, no, not yet
      }]
    },
    {
      userId: 2,
      userName: "Arjen",
      userGender: "male",
      userAge: "35",
      userLocation: "leiden",
      userShortDescription: "game development",
      userHobby: [{
        typeHobby: "geography",
        experienceHobby: "beginner", //radiobutton with 3 choices: beginner, intermediate, experienced
        userType: "learn" //radiobutton with 3 choices: teach, learn, practice
      }],
      userMatches: [{
        otherUserId: 0,
        matches: "yes" // 3 choices: yes, no, not yet
      }]
    },
]

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case "NEW_USER":
    return
      [...state,
        {
          userId: state[state.length - 1].userId + 1,//lastuserId +1,
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
          // ,
          // userMatches: [{
          //   otherUserId: // all other users,
          //   matches: // init state = net yet
          // }]
        }
      ]
  default:
    return state
  }
}

export default reducer
