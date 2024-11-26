'use strict';



function number() {
    const num = 6;

    function question() {
        const answer = prompt("Угадай число от 1 до 100")

        if (answer === null) {
            alert("Игра окончена");
            return;
        }

        const numAnswer = +answer;

        if (isNaN(numAnswer)) {
            alert("Введи число!");
            question();
            return;
        } else if (numAnswer === num) {
            alert("Поздравляю, Вы угадали!!!");
            return;
        } else if (numAnswer < num) {
            alert("Загаданное число меньше");
            question();
            return;
        } else if (numAnswer > num) {
            alert("Загаданное число больше");
            question();
            return;
        }
    }
    question();

}
number();