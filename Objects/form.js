class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder", "Enter your name");
        this.playButton = createButton("Ready");
        this.greeting = createElement("h2");
        this.titleImg = createImg("assets/title.png", "game title")
    }

    setElementsPosition(){
        this.titleImg.position(120, 50)
        this.input.position(width/2-110,height/2-50)
        this.playButton.position(width/2-90,height/2-20)
        this.greeting.position(width/2-300,height/2-100)
    }

    setElementsStyle(){
        this.titleImg.class("gameTitle");
        this.input.class("inputBox");
        this.playButton.class("playButton");
        this.greeting.class("greeting");
    }

    hide(){
        this.input.hide();
        this.playButton.hide();
        this.greeting.hide();

    }

    handleMousepressed(){

        this.playButton.mousePressed(()=>{
            this.input.hide();
            this.playButton.hide();
            var message="Hello, "+this.input.value()+". Wait for the other player to join"
            this.greeting.html(message)

            pc+=1
            player.index=pc;
            player.name=this.input.value();
            player.addPlayer()
            player.updateCount(pc)
        })
    }
    
    display(){
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousepressed();
    }
    
        

}

/*
Arrow function - binds the function/property to the original object that called it (& not the immediate object)

name = ()=>{}

Local arrow function :
    ()=>{}

*/
