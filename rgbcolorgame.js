//keep a var to keep a track of the number of squares we need at each level (easy,hard)
var numsquares = 6;
var colors =
	generaterandomcolor(6);
	/*[
"rgb(255, 255, 255)",
"rgb(192, 192, 192)",
	"rgb(128, 0, 0)",
"rgb(128, 128, 0)",
	"rgb(139, 0, 0)",
	"rgb(0, 0, 128)"
]*/
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");
var squares =document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay");

var message = document.querySelector(".message");

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numsquares = 3;
	colors =
	generaterandomcolor(numsquares);
	//pick a color 
	pickedcolor = pickcolor();
	//display that
	colordisplay.textContent = pickedcolor;
	for(var i=0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numsquares = 6;
	colors =
	generaterandomcolor(6);
	//pick a color 
	pickedcolor = pickcolor();
	//display that
	colordisplay.textContent = pickedcolor;
	for(var i=0; i < squares.length; i++)
	{
		
			squares[i].style.backgroundColor = colors[i];
		
			squares[i].style.display = "block";
		
	}
});


var resetbutton = document.querySelector("#reset");

resetbutton.addEventListener("click",function(){
	//get an array of new colors
	colors =
	generaterandomcolor(numsquares);
	//pick a color 
	pickedcolor = pickcolor();
	
	//display that
	colordisplay.textContent = pickedcolor;
	resetbutton.textContent = "newcolors";
	message.textContent = "";
	for(var i=0;i < squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
}
	h1.style.backgroundColor = "steelblue";
});
var h1 = document.querySelector("h1");
var pickedcolor = pickcolor();
//changing the particular element textcontent(rgb color) to the below text content
colordisplay.textContent = pickedcolor;

for(var i=0;i < squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		//grab the color of the clicked square
		var clickedcolor = this.style.backgroundColor;
		//console.log(clickedcolor,pickedcolor);

		//compare the color of the clicked square with the picked color
		if(clickedcolor === pickedcolor)
		{
			message.textContent = "correct";
			changecolors(pickedcolor);
			h1.style.backgroundColor = clickedcolor;
			resetbutton.textContent = "playagain";
		}
		else
		{
			message.textContent = "wrong";
			this.style.backgroundColor = "bisque";
		}
	});
}
function changecolors(color)
{
	for(var i=0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}
function pickcolor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generaterandomcolor(num)
{
	var arr = []
	for(var i=0; i < num; i++)
	{
		arr.push(randomcolor())
		
	}
//this array shld be returned after the for loop 
	return arr;
}
function randomcolor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
	}






//generaterandomcolor(6);