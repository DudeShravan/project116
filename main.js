mustacheX=0;
mustacheY=0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/JtCWPyrJ/m.png')
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, mustacheX-20, mustacheY-20, 50, 50);
}

function take_snapshot() {
    save('MyFilteredImage.png');
}

function  modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mustacheX = results[0].pose.nose.x;
        mustacheY = results[0].pose.nose.y
        console.log("mustache x = " + mustacheX);
        console.log("mustache y = " + mustacheY);
    }
}