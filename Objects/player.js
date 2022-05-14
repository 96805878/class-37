class Player{

    constructor(){
        this.name=null
        this.index=null
        this.positionX=0
        this.positionY=0

    }

    getCount(){
        db.ref("playercount").on("value", function(data){
            pc = data.val();
        })
    }

    updateCount(count){
        db.ref("/").update({
            playercount:count
        })
    }
    addPlayer(){
        
        if(this.index===1){
            this.positionX=width/2-100;
        }
        else{
            this.positionX=width/2+100;
        }

        db.ref("players/player"+this.index).set({
            name:this.name,
            positionX:this.positionX,
            positionY:this.positionY
        })
    }
    //static function - common function for all the objects of the class
    static getPlayersInfo(){
        db.ref("players").on("value", function(data){
            allPlayers=data.val();
            
        })
        
    }

}