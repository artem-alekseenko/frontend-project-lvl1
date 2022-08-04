import readlineSync from 'readline-sync';
import Game from '../index.js';

const round = () => {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${firstNumber} + ${secondNumber}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = firstNumber + secondNumber;

  return {
    userAnswer,
    correctAnswer,
  };
};

const calcGame = () => {
  const game = new Game({
    gameRule: 'What is the result of the expression?',
    round,
  });

  game.start();
};

export default calcGame;
