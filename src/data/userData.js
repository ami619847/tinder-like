const userData = [
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
  }]

  export default userData
