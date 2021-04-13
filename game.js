class Game {
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val()
        })
    }

    update(state){
        database.ref("/").update({
            gameState : state
        })
    }

    start(){
        if(gameState === 0){
       player = new Player()
       player.getCount();
       form = new Form()
       form.display();
        }
    }

    play(){
     form.hide();
     textSize(35);
     text("GAME START",120,100);

     Player.getplayerInfo();

     if(allPlayers != undefined){
       for(var plr in allPlayers){
           text(allPlayers[plr].name+":"+[allPlayers].plr);

       }
     }
    }
}
