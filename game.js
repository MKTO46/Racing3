class Game{
    constructor(){}

    //Read the gameState value from the database
    getState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val()
        })
    }

    //write the gameState value to the database
    updateState(state){
        database.ref("/").update({
            gameState : state
        })
    }
    //start screen of the game
start(){
    if(gameState === 0){
        form = new Form()
        form.display()
        player = new Player()
        player.getCount()
    }
}

play(){
form.hide()
textSize(30)
text("Game Started",200,300)
}

}