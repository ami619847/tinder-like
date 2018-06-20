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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=adult-attractive-beautiful-415829.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?cs=srgb&dl=adult-beach-beard-736716.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?cs=srgb&dl=adolescence-attractive-beautiful-573299.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=black-and-white-fun-happy-91227.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/705821/pexels-photo-705821.jpeg?cs=srgb&dl=beautiful-beautiful-girl-brunette-705821.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/713312/pexels-photo-713312.jpeg?cs=srgb&dl=beautiful-blur-carefree-713312.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg"
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
        userMatches: {
          allMatches: [],//refs to userIds
          likedMatches: [],//refs to
          dislikedMatches: []
        },
        userPhoto: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg"
      }

]



export default userData
