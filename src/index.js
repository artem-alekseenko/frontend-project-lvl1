import getUserName from './cli.js';

const MAX_ATTEMPTS = 3;
let attempt = 0;

const gameRound = (options) => {
  const { round, userName } = options;
  const { userAnswer, correctAnswer } = round();

  if (userAnswer !== correctAnswer) {
    attempt = 0;
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    return;
  }

  console.log('Correct!');
  attempt += 1;

  if (attempt < MAX_ATTEMPTS) {
    gameRound({
      round,
      userName,
    });
  } else {
    attempt = 0;
    console.log(`Congratulations, ${userName}!`);
  }
};

const gameStart = (options) => {
  const { gameRule, round } = options;
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);
  gameRound({
    round,
    userName,
  });
};

export default gameStart;
