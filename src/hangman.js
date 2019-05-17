class HangmanClass {
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = 'playing';
    }

    calculateStatus(){
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter ===  ' ');
        if (this.remainingGuesses === 0){
            this.status = 'failed';
        }else if (finished){
            this.status = 'finished';
        } else {
            this.status = 'playing';
        }
    }

    statusMessage(){
        if (this.status === 'playing'){
            return  `${this.remainingGuesses} guesses remaining!`;
        } else if (this.status === 'failed'){
            return   `You dumb, the answer was ${this.word.join('').toUpperCase()}`;
        } else {
            return  'You are a genius!';
        }
    }

    getPuzzle(){
        let puzzle = '';

        this.word.forEach((letter) =>{
            this.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter: puzzle += '*';
        });
        return puzzle;
    }

    makeGuess(guess){
        if (this.status === 'playing') {
            guess = guess.toLowerCase();
            const isUnigue = !this.guessedLetters.includes(guess);
            const badGuess = !this.word.includes(guess);

            if (isUnigue) {
                this.guessedLetters.push(guess);
            }

            if (isUnigue && badGuess) {
                this.remainingGuesses--;
            }
            this.calculateStatus();
        } else {
            return;
        }
    }
}


export {HangmanClass as default}




