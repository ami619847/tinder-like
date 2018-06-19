export const NEW_USER = 'NEW_USER'

export function newUser(name, location, shortDescription, typeHobby, experienceHobby, userType) {
  return {
    type: NEW_USER,
    payload: {
      userName: name,
      userLocation: location,
      userShortDescription: shortDescription,
      userHobby: [{
        typeHobby: typeHobby,
        experienceHobby: experienceHobby, //radiobutton with 3 choices: beginner, intermediate, experienced
        userType: userType //radiobutton with 3 choices: teach, learn, practice
      }]
    }
  }
}
