var canvas = document.getElementById("canvas");
var clear = document.getElementById("clear");
var oldx = -1;
var oldy = -1;

var drawDot = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    if (oldx == -1 && oldy == -1){
	var ins = document.createElementNS("http://www.w3.org/2000/svg","circle");
	ins.setAttribute("cx",x);
	ins.setAttribute("cy",y);
	ins.setAttribute("fill","blue");
	ins.setAttribute("r","20");
	canvas.appendChild(ins);
	oldx = x;
	oldy = y;
    }
    else{
	var ins = document.createElementNS("http://www.w3.org/2000/svg","line");
	ins.setAttribute("x1",oldx);
	ins.setAttribute("y1",oldy);
	ins.setAttribute("x2",x);
	ins.setAttribute("y2",y);
	ins.setAttribute("style","stroke: red");
	canvas.appendChild(ins);
	ins = document.createElementNS("http://www.w3.org/2000/svg","circle");
	ins.setAttribute("cx",x);
	ins.setAttribute("cy",y);
	ins.setAttribute("fill","blue");
	ins.setAttribute("r","20");
	canvas.appendChild(ins);
	oldx = x;
	oldy = y;
    };
};

var clere = function(e){
    oldx = -1;
    oldy = -1;
    canvas.innerHTML = "";
};
    

canvas.addEventListener("click", drawDot);
clear.addEventListener("click", clere);
