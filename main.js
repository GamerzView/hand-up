difference=0;
rightwristX-0;
leftwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses)
}
function draw(){
    background('#1ab2ff');
    text("Banana", 50,400);
    textSize(difference)
    fill('#FFE787')
}
function modelLoaded(){
    console.log("It is working fine yay")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("left wrist value is"+leftwristX)
        console.log("Right Wrist value is"+rightwristX)
    }
}
