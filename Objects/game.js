class Game{
    constructor(){

    }

    getState(){
        db.ref("gamestate").on("value", function(data){
            gs = data.val();
        })
    }

    update(state){
        db.ref("/").update({
            gamestate:state

        })
    }

    start(){
        form=new Form()
        form.display()

        player=new Player()
        player.getCount()

        car1= createSprite(width/2-110,height-50)
        car1.addImage(car1Img)
        car2 = createSprite(width/2+90,height-50)
        car2.addImage(car2Img);
        car1.scale=0.05
        car2.scale=0.05
    }
    
    handleElements(){
        form.hide()
        form.titleImg.position(40,50)
        form.titleImg.class("gameTitleAfter")
    }

    play(){
        this.handleElements()
        Player.getPlayersInfo()
        if(allPlayers !== undefined){
            image(track,0,-height*4,width,height*5)
            drawSprites();
        }

        
    }

    end(){
        
    }


}



