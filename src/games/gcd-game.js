import readlineSync from 'readline-sync';
import gameStart from '../index.js';

const round = () => {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));

  const getGsd = (x, y) => {
    if (!y) {
      return x;
    }
    return getGsd(y, x % y);
  };

  const correctAnswer = getGsd(firstNumber, secondNumber);

  return {
    userAnswer,
    correctAnswer,
  };
};

const gcdGame = () => {
  gameStart({
    gameRule: 'Find the greatest common divisor of given numbers.',
    round,
  });
};

export default gcdGame;
