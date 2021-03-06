var table = document.getElementById("box");
    var fig1 = box.getContext("2d");
        fig1.strokeStyle = "rgb(255,0,0)";
        fig1.fillStyle =  "rgb(0,255,0)";
        fig1.strokeRect(250,50,10,10);
        fig1.fillRect(30,30,30,30);
        fig1.strokeStyle = "rgb(002,0,005)";
        fig1.fillStyle =  "rgb(175,120,12)";
        fig1.strokeRect(10,75,20,20);
        fig1.fillRect(120,30,70,70);
        fig1.fillStyle =  "rgb(0,120,150)";
        fig1.fillRect(180,90,40,40);
        fig1.clearRect(0,0,400,200)
function screentext() {
console.log("Hej");
}
setInterval(screentext, 1000);