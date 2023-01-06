leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(600, 450);
canvas.position(550, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('PoseNet is loaded');
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("Left wrist ="+leftWristX+ " Right wrist = "+rightWristX+difference);
}
}

function draw(){
background('cyan');
document.getElementById("font_size").innerHTML="Font size of the text will be = "+difference+" px";
fill('darkblue');
textSize(difference);
text("Aaditya", 50, 200);
}
