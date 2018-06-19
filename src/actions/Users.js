export const NEW_USER = 'NEW_USER'
export const NEW_HOBBY = 'NEW_HOBBY'

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
      userHobby: [{
        typeHobby: typeHobby,
        experienceHobby: experienceHobby, //radiobutton with 3 choices: beginner, intermediate, experienced
        userType: userType //radiobutton with 3 choices: teach, learn, practice
      }]
    }
  }

}

//PRIORITY
//availability

//ACCOUNT GENERATION (FOR FUTURE IMPLEMENTATION)
//firstname
//surname
//email address
