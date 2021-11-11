objects=[];
noline="";
img="";
function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(640,540);
    canvas.position(500,150);
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!");
    noline=true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        onject=results;
    }
}
function draw(){
    image(img,0,0,640,540);
    if(noline==true){
        for (var i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML="Status:Object Detected";
            strokeWeight(10);
            textSize(20);
            fill('#910fdb');
            percent=floor(objects[1].confidence*100);
            text(objects[i].label+percent+"%",object[i].x+15,objects[i].y+15);
            noFill();
            stroke('#3859ff');
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}