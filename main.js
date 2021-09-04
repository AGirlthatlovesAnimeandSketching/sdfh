canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

rover_width=100;
rover_height=90;

background_img="mars.jpg";

rover_img="rover.png";

rover_x=10;
rover_y=10;

function add(){
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;


    rover_imgTag = new Image(); 
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover.width, rover.height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="37"){
        Left();
        console.log("left");
    }
    if(keypressed=="38"){
        Up();
        console.log("up");
    }
    if(keypressed=="39"){
        Right();
        console.log("right");
    }
    if(keypressed=="40"){
        Down();
        console.log("down");
    }
}

function Left(){
    if(rover_x >= 0 ){
        rover_x=rover_x -10;
        console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function Right(){
    if(rover_x <= 700 ){
        rover_x=rover_x +10;
        console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

function Up(){
    if(rover_y >= 0 ){
        rover_y=rover_y -10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function Down(){
    if(rover_y <= 500 ){
        rover_y=rover_y +10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}