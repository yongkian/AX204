var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//*
ctx.lineWidth = "2";
ctx.strokeStyle = "rgb(0, 0, 0)";
ctx.fillStyle = "rgb(255, 255, 100)";
ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(200, 200);
ctx.lineTo(100, 200);
ctx.closePath();
ctx.stroke();
ctx.fill();
/*/
ctx.lineWidth = "2";
ctx.strokeStyle = "rgb(0, 0, 0)";
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.arc(150, 150, 50, 0, 2*Math.PI);
ctx.stroke();
ctx.fill();
//*/