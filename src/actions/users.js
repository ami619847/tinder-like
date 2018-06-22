export const NEW_USER = 'NEW_USER'
export const NEW_HOBBY = 'NEW_HOBBY'
export const CHANGE_USER = 'CHANGE_USER'
export const PROMISE_USER = 'PROMISE_USER'

// export function asyncUser(name, gender, age, location, shortDescription){
//   return function(dispatch) {
//     Promise.resolve()
//       .then(() => dispatch({ type: PROMISE_USER }))
//       .then(() => {
//         dispatch({
//           type: NEW_USER,
//           payload: {
//             userName: name,
//             userGender: gender,
//             userAge: age,
//             userLocation: location,
//             userShortDescription: shortDescription
//           }
//         })
//       })
//       .then(() => dispatch({
//         type: CHANGE_USER,
//         payload: { userName: name },
//       }))
//   }
// }

// export function newUser(name, gender, age, location, shortDescription) {
//   return function(dispatch) {
//     dispatch({
//       type: NEW_USER,
//           payload: {
//             userName: name,
//             userGender: gender,
//             userAge: age,
//             userLocation: location,
//             userShortDescription: shortDescription
//           }
//     })
//     setTimeout(() => {
//       dispatch(changeUser(name))
//     }, 3000)
//   }
// }


export function newUser(name, gender, age, location, shortDescription) {
 return {
   type: NEW_USER,
   payload: {
     userName: name,
     userGender: gender,
     userAge: age,
     userLocation: location,
     userShortDescription: shortDescription
   }
 }
}

export function newHobby(typeHobby, experienceHobby, userType) {
  return {
    type: NEW_HOBBY,
    payload: {
      userHobby: {
        typeHobby: typeHobby,
        experienceHobby: experienceHobby,
        userType: userType
      }
    }
  }
}

export function changeUser(name) {
  return {
    type: CHANGE_USER,
    payload: {
      userName: name
    }
  }
}

//PRIORITY
//availability

//ACCOUNT GENERATION (FOR FUTURE IMPLEMENTATION)
//firstname
//surname
//email address
