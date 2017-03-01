var canvas = document.getElementById("canvas");
var clear = document.getElementById("clear");
var oldx = -1;
var oldy = -1;

var drawDot = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    if (oldx == -1 && oldy == -1){
	var ins = document.createElementNS("https://www.w3.org/2000/svg","circle");
	ins.setAttribute("cx","5");
	ins.setAttribute("cy","5");
	ins.setAttribute("fill","DarkOrchid");
	ins.setAttribute("r","5");
	canvas.appendChild(ins);
    }
    else{
	console.log("done");
    };
}

clear.addEventListener("click", drawDot);
