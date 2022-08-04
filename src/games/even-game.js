import readlineSync from 'readline-sync';
import gameStart from '../index.js';

const round = () => {
  const question = Math.floor(Math.random() * 100);
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return {
    userAnswer,
    correctAnswer,
  };
};

const evenGame = () => {
  gameStart({
    gameRule: 'Answer "yes" if the number is even, otherwise answer "no".',
    round,
  });
};

export default evenGame;
