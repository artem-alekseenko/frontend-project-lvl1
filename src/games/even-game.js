import readlineSync from 'readline-sync';
import getUserName from '../cli.js';

let attempt = 0;
const MAX_ATTEMPTS = 3;

const getRound = (userName) => {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    return;
  }

  console.log('Correct!');
  attempt += 1;

  if (attempt < MAX_ATTEMPTS) {
    getRound(userName);
  } else {
    console.log(`Congratulations, ${userName}!`);
  }
};

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const userName = getUserName();

  getRound(userName);
};

export default evenGame;
