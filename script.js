const { fabric } = require("./fabric");

var canvas=new fabric.Canvas('my_canvas');

player_x=10;
player_y=10;

block_width=30;
block_height=30;

player_object="";
block_image_height="";

function player_Update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150)
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
        
    }
    
    );
}
