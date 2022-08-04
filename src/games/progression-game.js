import readlineSync from 'readline-sync';
import gameStart from '../index.js';

const round = () => {
  const progressionNumber = Math.floor(Math.random() * 10);
  const progression = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 10; i++) {
    if (i === 0) {
      progression.push(Math.floor(Math.random() * 100));
    } else {
      progression.push(progression[i - 1] + progressionNumber);
    }
  }

  const randomIndex = Math.floor(Math.random() * 10);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';

  console.log(`Question: ${progression.join(' ')}`);

  const userAnswer = Number(readlineSync.question('Your answer: '));

  return {
    userAnswer,
    correctAnswer,
  };
};

const progressionGame = () => {
  gameStart({
    gameRule: 'What number is missing in the progression?',
    round,
  });
};

export default progressionGame;
