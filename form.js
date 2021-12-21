class Form{
    constructor(){
        
    }
    display(){
        let title = createElement("h2");
        title.html("Car racing Game");
        title.position(130,0);
        let input = createInput ("Name");
        let button = createButton ("Play");
        let h3 = createElement ("h3");
        input.position(130, 160);
        button.position(250, 200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            let name = input.value ();
            playerCount += 1;
            player.update (name);
            player.updateCount(playerCount);
            h3.html("Hola " + name);
            h3.position(130, 160);
        })
    }
}