function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(650,500);
    canvas.position(550,150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Posenet model has been Initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

function draw(){
    background("#5191a6");
}
