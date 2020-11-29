import Quote from './Quote.js';

const allCategories = [{
    category:"film",
    passwords : ["Ogniem i mieczem", "Pan Tadeusz", "Gra o tron", "Potop", "Ironman"]
},{
    category:"książka",
    passwords : ["Metro", "Polscy Bogowie wojny", "Lalka", "Janko Muzykant", "Lampo"]
},{
    category:"gra",
    passwords : ["Cyberpunk", "Bannerlord", "Warband", "League of Legends", "CS GO"]
}]

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

    
    allCategories = [{
        category:"film",
        passwords : ["Ogniem i mieczem", "Pan Tadeusz", "Gra o tron", "Potop", "Ironman"]
    },{
        category:"książka",
        passwords : ["Metro", "Polscy Bogowie wojny", "Lalka", "Janko Muzykant", "Lampo"]
    },{
        category:"gra",
        passwords : ["Cyberpunk", "Bannerlord", "Warband", "League of Legends", "CS GO"]
    }];

    startGame(){

        //loop for add letters in game keyboard
        for(let i = 0; i<26; i++){
            const letter = (i + 10).toString(36);
            const btn = document.createElement('button'); //everyone letter has button
            btn.innerHTML = letter; //add letter to btn
            this.lettersWrapper.appendChild(btn); //add btn to letters wrapper (DOM element)
            btn.addEventListener('click', ()=>guess(letter)) //everyone btn with letter has guessing event that checks if the letters is in the password  
        }
    }

    //this function checks if the letters is in the password, function for letter btn event 
    guess(letter){
        console.log('letter');
    }


}

export default Game;