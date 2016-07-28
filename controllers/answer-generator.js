'use strict';

class AnswerGenerator {
    static getAnswer() {
        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const answers = [];

        for (let i = 0; i < 4; i++) {
            const randomNumber = parseInt(Math.random() * digits.length);
            answers.push(digits.splice(randomNumber, 1)[0]);
        }

        return answers.join('');
    }
}

module.exports = AnswerGenerator;