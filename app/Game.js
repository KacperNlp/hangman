import Quote from './Quote.js';

class Game{
    constructor({lettersWrapper, categoryWrapper, wordWrapper, outputWrapper}){
        //all DOM elements 
        this.lettersWrapper = lettersWrapper;
        this.categoryWrapper = categoryWrapper;
        this.wordWrapper = wordWrapper;
        this.outputWrapper = outputWrapper;

        //Array with paswords (get one password with his category)
        const {category, passwords} = this.allCategories[Math.floor(Math.random() * this.allCategories.length)];
        //set category
        this.categoryWrapper.innerHTML = category;
        //set password/quote
        this.password = new Quote(passwords);
    }

    //variables
    //passwords with categories
    allCategories = [{
        category:"film",
        passwords : ["ogniem i mieczem", "pan tadeusz", "gra o tron", "potop", "ironman"]
    },{
        category:"książka",
        passwords : ["metro", "polscy bogowie wojny", "lalka", "janko muzykant", "lampo"]
    },{
        category:"gra",
        passwords : ["cyberpunk", "bannerlord", "warband", "league of legends", "cs go"]
    }];

    //player lives
    currentLifes = 0;
    allLifes = 7;

    //methods/functions
    drawLetters(){
        //loop for add letters in game keyboard
        for(let i = 0; i<26; i++){
            const letter = (i + 10).toString(36);
            const btn = document.createElement('button'); //everyone letter has button
            btn.innerHTML = letter; //add letter to btn
            this.lettersWrapper.appendChild(btn); //add btn to letters wrapper (DOM element)
            btn.addEventListener('click', (e)=>this.guess(e,letter)) //everyone btn with letter has guessing event that checks if the letters is in the password  
        }
    }
    //draw quote/password
    drawQuote(){
        const hidePassword = this.password.hidePassword();
        this.wordWrapper.innerHTML = hidePassword;
    }

    startGame(){
        document.getElementsByClassName('step')[this.currentLifes].style.opacity = 1;
        //this function is drawing letters
        this.drawLetters();
        //draw quote/password 
        this.drawQuote();
    }

    //this function checks if the letters is in the password, function for letter btn event 
    guess(e,letter){
        e.target.disabled = true;
        //checks that the password include a letter
        const isGoodAnswer = this.password.checkLetter(letter);
        if(!isGoodAnswer){
            this.updateLifes()
            //if user has lost all lives
            if(this.currentLifes == this.allLifes) this.loosing()
            return
        };
        //every time when user choose letter, this function will draw agian password/quote 
        this.drawQuote();
        if(!this.password.hidePassword().includes('_')) return this.winning();
    }

    updateLifes(){
        //incremrent current life
        this.currentLifes++;

        //change style of img of new current life
        document.getElementsByClassName('step')[this.currentLifes].style.opacity = 1;
    }


    //winning and loosing functions
    winning(){
        this.wordWrapper.innerHTML = "Wygrałeś!";
        this.lettersWrapper.innerHTML = '';
    }
    loosing(){
        this.wordWrapper.innerHTML = "Przegrałeś!";
        this.lettersWrapper.innerHTML = '';
    }
}

export default Game;