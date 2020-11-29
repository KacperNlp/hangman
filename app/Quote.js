class Quote{
    constructor(txt){
        this.password = txt[Math.floor(Math.random() * txt.length)];

        this.guessed = [];
    }

    hidePassword(){
        let content = '';
        for(const char of this.password){
            if(char == ' ' || this.guessed.includes(char)){
                content += char;
            }else{
                content+= '_'
            }
        }
        return content;
    }

    checkLetter(letter){
        if(!this.password.includes(letter)) return false;

        this.guessed.push(letter);
        return true;
    }
}


export default Quote;