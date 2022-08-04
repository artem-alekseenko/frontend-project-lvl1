import readlineSync from 'readline-sync';
import Game from '../index.js';

const round = () => {
  const number = Math.floor(Math.random() * 100);

  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const isPrime = (num) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
    return num > 1;
  };

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    userAnswer,
    correctAnswer,
  };
};

const primeGame = () => {
  const game = new Game({
    gameRule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    round,
  });

  game.start();
};

export default primeGame;
