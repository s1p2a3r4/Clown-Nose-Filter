nose_x=0;
not_y=0;

img="";

function preload(){
    img= loadimage("https://i.postimg.cc/Bv198V43/clown-nose.png");
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet= ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}

function modelloaded(){
    console.log("Model loaded");
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(nose_x, nose_y, 20);
    image(img, nose_x=15, nose_y+15, 30, 30);
}

function take_snapshot(){
    save("myimage.png");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        nose_x= results[0].pose.nose.x;
        nose_y= results[0].pose.nose.y;
        console.log("Nose x= "+ results[0].pose.nose.x);
        console.log("nose y= "+ results[0].pose.nose.y);
    }
}