const userData = [
      {
        userId: 0,
        userName: "Rick",
        userGender: "male",
        userAge: "35",
        userLocation: "utrecht",
        userShortDescription: "loves hiking",
        userHobby: {
            typeHobby: "soccer",
            experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
            userType: "practice" //radiobutton with 3 choices: teach, learn, practice
          },
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
        userHobby: {
          typeHobby: "basketball",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "teach" //radiobutton with 3 choices: teach, learn, practice
        },
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
        userHobby: {
          typeHobby: "running",
          experienceHobby: "beginner", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "learn" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 0,
          matches: "yes" // 3 choices: yes, no, not yet
        }]
      },
      {
        userId: 3,
        userName: "Arjuna",
        userGender: "female",
        userAge: "30",
        userLocation: "haarlem",
        userShortDescription: "architectural design",
        userHobby: {
          typeHobby: "tennis",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "teach" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 274,
          matches: "not yet" // 3 choices: yes, no, not yet
        }]
      },
      {
        userId: 4,
        userName: "Geertje",
        userGender: "female",
        userAge: "30",
        userLocation: "haarlem",
        userShortDescription: "architectural design",
        userHobby: {
          typeHobby: "cycling",
          experienceHobby: "intermediate", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "learn" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 274,
          matches: "not yet" // 3 choices: yes, no, not yet
        }]
      },
      {
        userId: 5,
        userName: "Henk",
        userGender: "male",
        userAge: "30",
        userLocation: "haarlem",
        userShortDescription: "architectural design",
        userHobby: {
          typeHobby: "soccer",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "practice" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 274,
          matches: "not yet" // 3 choices: yes, no, not yet
        }]
      },
      {
        userId: 6,
        userName: "Klaas",
        userGender: "male",
        userAge: "30",
        userLocation: "haarlem",
        userShortDescription: "architectural design",
        userHobby: {
          typeHobby: "basketball",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "learn" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 274,
          matches: "not yet" // 3 choices: yes, no, not yet
        }]
      },
      {
        userId: 7,
        userName: "Piet",
        userGender: "female",
        userAge: "30",
        userLocation: "haarlem",
        userShortDescription: "architectural design",
        userHobby: {
          typeHobby: "running",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "teach" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 274,
          matches: "not yet" // 3 choices: yes, no, not yet
        }]
      },
      {
        userId: 8,
        userName: "Gert",
        userGender: "male",
        userAge: "30",
        userLocation: "haarlem",
        userShortDescription: "architectural design",
        userHobby: {
          typeHobby: "cycling",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "learn" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 274,
          matches: "not yet" // 3 choices: yes, no, not yet
        }]
      },
      {
        userId: 9,
        userName: "Peter",
        userGender: "male",
        userAge: "30",
        userLocation: "haarlem",
        userShortDescription: "architectural design",
        userHobby: {
          typeHobby: "soccer",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "teach" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 274,
          matches: "not yet" // 3 choices: yes, no, not yet
        }]
      },
      {
        userId: 10,
        userName: "Trudie",
        userGender: "female",
        userAge: "30",
        userLocation: "haarlem",
        userShortDescription: "architectural design",
        userHobby: {
          typeHobby: "basketball",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "learn" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 274,
          matches: "not yet" // 3 choices: yes, no, not yet
        }]
      },
      {
        userId: 11,
        userName: "Truus",
        userGender: "female",
        userAge: "30",
        userLocation: "haarlem",
        userShortDescription: "architectural design",
        userHobby: {
          typeHobby: "running",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "learn" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 274,
          matches: "not yet" // 3 choices: yes, no, not yet
        }]
      },
      {
        userId: 12,
        userName: "Bep",
        userGender: "female",
        userAge: "30",
        userLocation: "haarlem",
        userShortDescription: "architectural design",
        userHobby: {
          typeHobby: "tennis",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "practice" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 274,
          matches: "not yet" // 3 choices: yes, no, not yet
        }]
      },
      {
        userId: 13,
        userName: "Geertruida",
        userGender: "female",
        userAge: "30",
        userLocation: "haarlem",
        userShortDescription: "architectural design",
        userHobby: {
          typeHobby: "cycling",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "learn" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 274,
          matches: "not yet" // 3 choices: yes, no, not yet
        }]
      },
      {
        userId: 14,
        userName: "Klazina",
        userGender: "female",
        userAge: "30",
        userLocation: "haarlem",
        userShortDescription: "architectural design",
        userHobby: {
          typeHobby: "soccer",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "practice" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 274,
          matches: "not yet" // 3 choices: yes, no, not yet
        }]
      },
      {
        userId: 15,
        userName: "Berteke",
        userGender: "female",
        userAge: "30",
        userLocation: "haarlem",
        userShortDescription: "architectural design",
        userHobby: {
          typeHobby: "basketball",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "learn" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 274,
          matches: "not yet" // 3 choices: yes, no, not yet
        }]
      },
      {
        userId: 16,
        userName: "Arie",
        userGender: "male",
        userAge: "30",
        userLocation: "haarlem",
        userShortDescription: "architectural design",
        userHobby: {
          typeHobby: "running",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "practice" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 274,
          matches: "not yet" // 3 choices: yes, no, not yet
        }]
      },
      {
        userId: 17,
        userName: "Alie",
        userGender: "female",
        userAge: "30",
        userLocation: "haarlem",
        userShortDescription: "architectural design",
        userHobby: {
          typeHobby: "tennis",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "teach" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 274,
          matches: "not yet" // 3 choices: yes, no, not yet
        }]
      },
      {
        userId: 18,
        userName: "Marie",
        userGender: "female",
        userAge: "30",
        userLocation: "haarlem",
        userShortDescription: "architectural design",
        userHobby: {
          typeHobby: "cycling",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "teach" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 274,
          matches: "not yet" // 3 choices: yes, no, not yet
        }]
      },
      {
        userId: 19,
        userName: "Lot",
        userGender: "male",
        userAge: "30",
        userLocation: "haarlem",
        userShortDescription: "architectural design",
        userHobby: {
          typeHobby: "basketball",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "learn" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 274,
          matches: "not yet" // 3 choices: yes, no, not yet
        }]
      },
      {
        userId: 20,
        userName: "Gerard",
        userGender: "male",
        userAge: "30",
        userLocation: "haarlem",
        userShortDescription: "architectural design",
        userHobby: {
          typeHobby: "tennis",
          experienceHobby: "experienced", //radiobutton with 3 choices: beginner, intermediate, experienced
          userType: "practice" //radiobutton with 3 choices: teach, learn, practice
        },
        userMatches: [{
          otherUserId: 274,
          matches: "not yet" // 3 choices: yes, no, not yet
        }]
      },

]


const currentUserId = 2
const currentUser = userData.find(user => user.userId === currentUserId)

const usersWithSameHobby = userData.filter(user => user.userId !== currentUserId && user.userHobby.typeHobby === currentUser.userHobby.typeHobby)

//console.log(usersWithSameHobby)//doesn't work yet...

//userWithSameHobby.filter(user ) add the if statement to this filter somehow
const userMatches = () => {
if (currentUser.userHobby.userType === 'practice')
  return usersWithSameHobby.filter(user => user.userHobby.userType === 'practice')
if (currentUser.userHobby.userType === 'learn')
  return usersWithSameHobby.filter(user => user.userHobby.userType === 'teach')
if (currentUser.userHobby.userType === 'teach')
  return userWithSameHobby.filter(user => user.userHobby.userType === 'learn')
else return 'No matches found...'
}

console.log(userMatches())
