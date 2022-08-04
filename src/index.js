import getUserName from './cli.js';

const MAX_ATTEMPTS = 3;

export default class Game {
  constructor(options) {
    this.gameRule = options.gameRule;
    this.gameRound = options.round;
    this.attempt = 0;
  }

  round() {
    const { userAnswer, correctAnswer } = this.gameRound();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${this.userName}!`);
      return;
    }

    console.log('Correct!');
    this.attempt += 1;

    if (this.attempt < MAX_ATTEMPTS) {
      this.round();
    } else {
      console.log(`Congratulations, ${this.userName}!`);
    }
  }

  start() {
    this.userName = getUserName();
    console.log(this.gameRule);
    this.round();
  }
}
