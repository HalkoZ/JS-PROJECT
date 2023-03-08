const questions = [
  {
    id: 1,
    pitanje:
      "Question: Greenland is one of the closest countries to the North Pole. Can you name another?",
    answers: ["Canada", "USA", "Iceland", "Sweden"],
    points: 5,
    correct: "Canada",
  },

  {
    id: 2,
    pitanje:
      " What was the first feature-length animated movie ever released? (Hint: It was a Disney Movie)",
    answers: [
      "lion king",
      "cinderella",
      "sleeping beauty",
      "Snow White and the Seven Dwarfs",
    ],
    points: 5,
    correct: "Snow White and the Seven Dwarfs",
  },

  {
    id: 3,
    pitanje:
      "Which two countries have not missed one of the modern-day Olympics? (Hint: One is from Europe)",
    answers: [
      "Greece and Germany",
      "Greece and Australia",
      "Serbia and Bosnia",
      "Turkiye and Swtizerland",
    ],
    points: 5,
    correct: "Greece and Australia",
  },

  {
    id: 4,
    pitanje:
      "What universal root vegetable can be baked, smashed, roasted, boiled and fried?",
    answers: ["Potato", "Tomato", "Carrot", "onion"],
    points: 5,
    correct: "Potato",
  },
  {
    id: 5,
    pitanje:
      "How many World Wars did Switzerland take part in? (Fun fact: Swtizerland is known for being neutral)",
    answers: [2, 3, 1, 0],
    points: 5,
    correct: 0,
  },
];

let i = 0;
let points = 0;

const startTest = () => {
  document.getElementById("question").textContent = questions[i].pitanje;
  document.getElementById("answer1").textContent = questions[i].answers[0];
  document.getElementById("answer2").textContent = questions[i].answers[1];
  document.getElementById("answer3").textContent = questions[i].answers[2];
  document.getElementById("answer4").textContent = questions[i].answers[3];
};

const submitAnswer = (answer) => {
  const question = questions[i];
  if (question === undefined) {
    results();
  }
  if (answer === question.correct) {
    points = points + question.points;
  }
  console.log(points);

  i = i + 1;

  if (i < questions.length) {
    startTest(questions[i]);
  } else {
    window.location.href = "success.html";
  }
};

startTest(questions[i]);

document.getElementById("answer1").addEventListener("click", () => {
  const answer = document.getElementById("answer1").textContent;
  submitAnswer(answer);
});

document.getElementById("answer2").addEventListener("click", () => {
  const answer = document.getElementById("answer2").textContent;
  submitAnswer(answer);
});

document.getElementById("answer3").addEventListener("click", () => {
  const answer = document.getElementById("answer3").textContent;
  submitAnswer(answer);
});

document.getElementById("answer4").addEventListener("click", () => {
  const answer = document.getElementById("answer4").textContent;
  submitAnswer(answer);
});

const results = () => {
  window.location.href = "success.html?points=" + points;
};
