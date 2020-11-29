
class Game{
    constructor({lettersWrapper, categoryWrapper, wordWrapper, outputWrapper}){
        //all DOM elements 
        this.lettersWrapper = lettersWrapper;
        this.categoryWrapper = categoryWrapper;
        this.wordWrapper = wordWrapper;
        this.outputWrapper = outputWrapper;
    }

    startGame(){

        //loop for add letters in game keyboard
        for(let i = 0; i<=26; i++){
            const letter = (i + 10).toString(36);
            const btn = document.createElement('button'); //everyone letter has button
            btn.innerHTML = btn; //add letter to btn
            this.lettersWrapper.appendChild(btn); //add btn to letters wrapper (DOM element)
            btn.addEventListener('click', ()=>guess(letter)) //everyone btn with letter has guessing event that checks if the letters is in the password  
        }
    }


}
