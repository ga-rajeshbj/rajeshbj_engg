const defaultObj: any = {
  english: [
    {
      id: 1,
      type: "mcq",
      question: "capital city of india",

      answerOptions: [
        { answerText: "Bangalore" },
        { answerText: "Hydrabad" },
        { answerText: "India" },
        { answerText: "Dehli" },
      ],
      ismultiselect: false,
      correctanswer: "Dehli",
      isAnswered: false,
      answer: "",
    },
    {
      id: 2,
      type: "mcq",
      question:
        "Which one of the following river flows between Vindhyan and Satpura ranges?",
      answerOptions: [
        { answerText: "Narmada" },
        { answerText: "Mahanadi" },
        { answerText: "Son" },
        { answerText: "Netravati" },
      ],
      ismultiselect: false,
      correctanswer: "Narmada",
      isAnswered: false,
      answer: "",
    },
    {
      id: 3,
      type: "multipleSelect",
      question: "find the letters present in 'COMPUTER'",
      answerOptions: [
        { answerText: "C" },
        { answerText: "H" },
        { answerText: "J" },
        { answerText: "R" },
      ],
      ismultiselect: true,
      correctanswer: ["C", "R"],
      answer: [],
      isAnswered: false,
    },
    {
      id: 4,
      type: "mcq",
      question: "Narendra Modi is a Primie Minister of India ",
      answerOptions: [{ answerText: "True" }, { answerText: "Flase" }],
      ismultiselect: false,
      correctanswer: "True",
      answer: "",
      isAnswered: false,
    },
  ],

  hindi: [
    {
      id: 1,
      type: "mcq",
      question: "	हिंदी किस भाषा परिवार की भाषा है",

      answerOptions: [
        { answerText: "भारोपीय" },
        { answerText: "द्रविड़" },
        { answerText: "आस्ट्रिक" },
        { answerText: "चीनी-तिब्बती" },
      ],
      ismultiselect: false,
      correctanswer: "भारोपीय",
      isAnswered: false,
      answer: "",
    },
    {
      id: 2,
      type: "mcq",
      question: "	भारत में सबसे अधिक बोले जाने वाली भाषा कौन सी है",
      answerOptions: [
        { answerText: "हिंदी" },
        { answerText: "संस्कृत" },
        { answerText: "तमिल" },
        { answerText: "उर्दू" },
      ],
      ismultiselect: false,
      correctanswer: "हिंदी",
      isAnswered: false,
      answer: "",
    },
    {
      id: 3,
      type: "mcq",
      question: "	हिंदी भाषा का जन्म हुआ है",
      answerOptions: [
        { answerText: "अपभ्रंश से" },
        { answerText: "लौकिक संस्क्रत से" },
        { answerText: "पालि-प्राकृत से" },
        { answerText: "वैदिक संस्कृत से" },
      ],
      ismultiselect: false,
      correctanswer: "अपभ्रंश से",
      answer: [],
      isAnswered: false,
    },
    {
      id: 4,
      type: "mcq",
      question:
        "	निम्न में से कौन सी बोली अथवा भाषा हिंदी के अंतगर्त नहीं आती है",
      answerOptions: [{ answerText: "कन्नौजी" }, { answerText: "तेलुगु" }],
      ismultiselect: false,
      correctanswer: "तेलुगु",
      answer: "",
      isAnswered: false,
    },
  ],
};

const EnglishjsonArray = [
  {
    id: 1,
    question: "capital city of india",

    answerOptions: [
      { answerText: "Bangalore" },
      { answerText: "Hydrabad" },
      { answerText: "India" },
      { answerText: "Dehli" },
    ],
    ismultiselect: false,
    correctanswer: "Dehli",
    isAnswered: false,
    answer: "",
  },
  {
    id: 2,
    question:
      "Which one of the following river flows between Vindhyan and Satpura ranges?",
    answerOptions: [
      { answerText: "Narmada" },
      { answerText: "Mahanadi" },
      { answerText: "Son" },
      { answerText: "Netravati" },
    ],
    ismultiselect: false,
    correctanswer: "Narmada",
    isAnswered: false,
    answer: "",
  },
  {
    id: 3,
    question: "find the letters present in 'COMPUTER'",
    answerOptions: [
      { answerText: "C" },
      { answerText: "H" },
      { answerText: "J" },
      { answerText: "R" },
    ],
    ismultiselect: true,
    correctanswer: ["C", "R"],
    answer: [],
    isAnswered: false,
  },
  {
    id: 4,
    question: "Narendra Modi is a Primie Minister of India ",
    answerOptions: [{ answerText: "True" }, { answerText: "Flase" }],
    ismultiselect: false,
    correctanswer: "True",
    answer: "",
    isAnswered: false,
  },
];

const HindijsonArray = [
  {
    id: 1,
    question: "	हिंदी किस भाषा परिवार की भाषा है",

    answerOptions: [
      { answerText: "भारोपीय" },
      { answerText: "द्रविड़" },
      { answerText: "आस्ट्रिक" },
      { answerText: "चीनी-तिब्बती" },
    ],
    ismultiselect: false,
    correctanswer: "भारोपीय",
    isAnswered: false,
    answer: "",
  },
  {
    id: 2,
    question: "	भारत में सबसे अधिक बोले जाने वाली भाषा कौन सी है",
    answerOptions: [
      { answerText: "हिंदी" },
      { answerText: "संस्कृत" },
      { answerText: "तमिल" },
      { answerText: "उर्दू" },
    ],
    ismultiselect: false,
    correctanswer: "हिंदी",
    isAnswered: false,
    answer: "",
  },
  {
    id: 3,
    question: "	हिंदी भाषा का जन्म हुआ है",
    answerOptions: [
      { answerText: "अपभ्रंश से" },
      { answerText: "लौकिक संस्क्रत से" },
      { answerText: "पालि-प्राकृत से" },
      { answerText: "वैदिक संस्कृत से" },
    ],
    ismultiselect: false,
    correctanswer: "अपभ्रंश से",
    answer: [],
    isAnswered: false,
  },
  {
    id: 4,
    question: "	निम्न में से कौन सी बोली अथवा भाषा हिंदी के अंतगर्त नहीं आती है",
    answerOptions: [{ answerText: "कन्नौजी" }, { answerText: "तेलुगु" }],
    ismultiselect: false,
    correctanswer: "तेलुगु",
    answer: "",
    isAnswered: false,
  },
];

export { defaultObj, EnglishjsonArray, HindijsonArray };
