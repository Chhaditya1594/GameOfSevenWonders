const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    China:  Symbol("china"),
    Brazil: Symbol("brazil"),
    Peru: Symbol("peru"),
    Mexico: Symbol("mexico"),
    Rome: Symbol("rome"),
    India: Symbol("india"),
    Jordan: Symbol("jordan"),
    Repeat: Symbol("repeating")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "Let's play a Game of Seven Wonders of the world.In the Game,I will tell the One of Seven Wonders Name and you have to tell me where it is located.So, lets Start the Game! Your First Question is : Where is the great wall of china located?";
                this.stateCur = GameState.China;
                break;
            case GameState.China:
                if(sInput.toLowerCase().match("china")){
                    sReply = "Where is the Rio de Janeiro located?";
                    this.stateCur = GameState.Brazil;
                }else{
                    sReply ="Sorry, Wrong Answer. Try again";
                    this.stateCur = GameState.China;
                }
                break;
            case GameState.Brazil:
                if(sInput.toLowerCase().match("brazil")){
                    sReply = "Where is the Machu Picchu located?"
                    this.stateCur = GameState.Peru;
                }else{
                    sReply ="Sorry, Wrong Answer. Try again";
                    this.stateCur = GameState.Brazil;
                }
                break;
            case GameState.Peru:
                if(sInput.toLowerCase().match("peru")){
                    sReply = "Where is the Chichen Itza located?";
                    this.stateCur = GameState.Mexico;
                }else{
                    sReply ="Sorry, Wrong Answer. Try again";
                    this.stateCur = GameState.Peru;
                }
                break;
            case GameState.Mexico:
                if(sInput.toLowerCase().match("mexico")){
                    sReply = "Where is the Roman Colosseum located?";
                    this.stateCur = GameState.Rome;
                }else{
                    sReply ="Sorry, Wrong Answer. Try again";
                    this.stateCur = GameState.Mexico;
                }
                break;
            case GameState.Rome:
                if(sInput.toLowerCase().match("rome")){
                    sReply = "Where is the Taj Mahal located?";
                    this.stateCur = GameState.India;
                }else{
                    sReply ="Sorry, Wrong Answer. Try again";
                    this.stateCur = GameState.Rome;
                }
                break;
            case GameState.India:
                if(sInput.toLowerCase().match("india")){
                    sReply = "Where is the Petra located?";
                    this.stateCur = GameState.Jordan;
                }else{
                    sReply ="Sorry, Wrong Answer. Try again";
                    this.stateCur = GameState.India;
                }
                break;
            case GameState.Jordan:
                if(sInput.toLowerCase().match("jordan")){
                    sReply = "Congratulations,You completed the game.";
                    this.stateCur = GameState.Repeat;
                }else{
                    sReply ="Sorry, Wrong Answer. Try again";
                    this.stateCur = GameState.Jordan;
                }
                break;
            case GameState.Repeat:
                    sReply = "Let's Play again.";
                    this.stateCur = GameState.WELCOMING;
                break;
        }
        return([sReply]);
    }
}