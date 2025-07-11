// src/components/config.js
const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0204", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: our anniversary date!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why is my girlfriend so cute?", // Example trending search query
    "Why does Orlando love her more?", // Another example query
    `Why is Darcy always angry?`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been together?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2024-02-04", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Runaway", // Title of the song
      artist: "The Corrs", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
      audioFile: "runaway.mp3",
    },
    {
      title: "Isa Lang",
      artist: "Arther Nery",
      left: "40%",
      top: "15%",
      audioFile: "isa lang.mp3",
    },
    {
      title: "Just Because",
      artist: "MRLD",
      left: "15%",
      top: "40%",
      audioFile: "Just Because - MRLD.mp3",
    },
    {
      title: "Wherever You Are",
      artist: "5 Seconds Of Summer",
      left: "30%",
      top: "75%",
      audioFile: "Wherever You Are - 5SOS.mp3",
    },
    {
      title: "You're Still The One",
      artist: "Shaina Twain",
      left: "5%",
      top: "65%",
      audioFile: "You're Still The One - Shania Twain.mp3",
    },
    {
      title: "Little Things",
      artist: "One Direction",
      left: "25%",
      top: "90%",
      audioFile: "Little Things - One Direction.mp3",
    },
    {
      title: "ILYSB",
      artist: "LANY",
      left: "35%",
      top: "50%",
      audioFile: "ILYSB - LANY.mp3",
    },
    {
      title: "An Art Gallery Could Never Be As Unique As You",
      artist: "MRLD",
      left: "10%",
      top: "25%",
      audioFile: "An Art Galary Could Never Be As Unique As You.mp3",
    },
  ],

  // 📝 Message Recap Page
  messageTitle: "Special Moments", // Title for the messages recap page
  messageGallery: [
    {
      title: "August 2, 2023",
      description:
        "The night when you confessed to me that you had a crush on me.🥰",
    }, // Message entry
    {
      title: "August 5, 2023",
      description: "Our first conversation or interaction in person.🤗",
    },
    {
      title: "February 4, 2024",
      description:
        "The day you asked me what the date was, and when I said February 4, you suddenly said, 'Then that will be our anniversary?' HAHAHA never forgetti😜'",
    },
  ],

  // 📸 Picture Recap Page
  pictureTitle: "Our special date", // Title for the pictures recap page
  pictureGallery: [
    { title: "November 26, 2023", description: "Our First Date!❤️❤️❤️" }, // Picture entry
    {
      title: " December 24, 2024",
      description: "Our Holiday Date 💕",
    },
    { title: "February 02, 2025", description: "Our Anniversarry Date 😘" },
  ],

  // 💌 Love Letter Page
  loveLetterMessage: "Hi Lovey, I love you so much💖", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage:
    "Thank you for everything, my love! 💖 Wishing us many more wonderful years together.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
