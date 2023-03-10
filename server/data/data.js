import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Steve",
    lastName: "Ralph",
    email: "thataaa@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p3.jpeg",
    friends: [],
    location: "New York, CA",
    occupation: "Degenerate",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Serena",
    lastName: "Williams",
    email: "serenawilliams@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p6.jpeg",
    friends: [],
    location: "Korea, CA",
    occupation: "Educator",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p5.jpeg",
    friends: [],
    location: "Vaslui, VS",
    occupation: "Hacker",
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Harvey",
    lastName: "Dunn",
    email: "harveydunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p7.jpeg",
    friends: [],
    location: "Los Angeles, CA",
    occupation: "Journalist",
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Maria",
    lastName: "Chitimus",
    email: "mariachitimus@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p8.jpeg",
    friends: [],
    location: "Chicago, IL",
    occupation: "Nurse",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Jessica",
    lastName: "Trump",
    email: "jessicatrump@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p9.jpeg",
    friends: [],
    location: "Washington, DC",
    occupation: "Student",
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    firstName: "Steve",
    lastName: "Ralph",
    location: "New York, CA",
    description: "What a wonderful salad",
    picturePath: "post1.jpeg",
    userPicturePath: "p3.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "Looks good!",
      "Yammy!",
      "Next time I'll go there, I know what I will eat, lol.",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Serena",
    lastName: "Williams",
    location: "Korea, CA",
    description:
      "I had to try it, I like my eggs like I like my coffee, yellow.",
    picturePath: "post2.jpeg",
    userPicturePath: "p6.jpeg",
    likes: new Map([
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "Be careful with the cholesterol.",
      "Very nice.",
      "Bon appetite!",
      "How many chickens died for this? Is it fair?",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    firstName: "Jane",
    lastName: "Doe",
    location: "Vaslui, VS",
    description:
      "Yey, Electic Castle! I've seen my favorite artist, Florin Salam",
    picturePath: "post3.jpeg",
    userPicturePath: "p5.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "WOW, I too, like Florin Salam, brrr brrr.",
      "I'm more of a Romeo Fantastik kind of man.",
      "Aferhills seems better than Electric Castle, is this true?",
      "Why am I doing this?",
      "I'm bored",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Harvey",
    lastName: "Dunn",
    location: "Los Angeles, CA",
    description:
      "Yes, finally married, not the best thing I could do this year, but it is what it is. I would like to thank God and my parrents first, next I would like to thank to Razvan Chiriac that made it possible by creating this social network where I met my sociopath wife!",
    picturePath: "post7.jpeg",
    userPicturePath: "p7.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
    ]),
    comments: [
      "What a beautiful couple.",
      "Yes, you look so good together.",
      "No problem, bro, I just did my job.",
      "I'm still bored",
      "All I want to do is play video games",
      "I'm going to play video games",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Maria",
    lastName: "Chitimus",
    location: "Chicago, IL",
    description:
      "I love my husband, he's the best next thing I could hoped for.",
    picturePath: "post8.jpeg",
    userPicturePath: "p8.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "That's rude, but it's true, so ye..",
      "Where will you go to the honeymoon? Prison?",
      "I bet!",
      "Like we say here in Belarus, house of stone!",
      "Have patience, many sandwiches incoming..",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Jessica",
    lastName: "Trump",
    location: "Washington, DC",
    description:
      "I came from USA to Electric Castle to see Florin Salam and the show was just like in the videos from this technology called internet, verry cool.",
    picturePath: "post6.jpeg",
    userPicturePath: "p9.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [
      "Next year, I'll go too, mark my words.",
      "I think he's coming to Alaska next month!",
      "Wow, 'got the tickets this instant!",
      "Can I be your friend?",
      "Sure thing!",
    ],
  },
];
