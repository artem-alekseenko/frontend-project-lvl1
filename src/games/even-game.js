import readlineSync from 'readline-sync';
import Game from '../index.js';

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
  const game = new Game({
    gameRule: 'Answer "yes" if the number is even, otherwise answer "no".',
    round,
  });

  game.start();
};

export default evenGame;
