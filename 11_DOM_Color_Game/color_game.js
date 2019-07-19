var colors= [ 
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 0)"]
colors = generateRandomColors(6);
var pickedColor = colorPicker();

//document.querySelector("#colorselected").textContent = "HELLO HELLO";
colorSelectedElement = document.querySelector("#colorselected");
colorSelectedElement.textContent = pickedColor;

var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
message.textContent="Pick a color!";  


setupSquares();

reset.addEventListener("click",function(){
	colors = generateRandomColors(6);
  pickedColor = colorPicker();
  colorSelectedElement.textContent = pickedColor;
  message.textContent="Pick a color!";  
	h1.style.backgroundColor = "#232323";

  setupSquares();
});


function colorPicker()
{
	var colorsRandom;
	colorsRandom= Math.floor(Math.random()*colors.length);
  return colors[colorsRandom];
}
// Generate an array of "num" colors
function generateRandomColors(num)
{
	var colorsArray=[];

  for (var i=0; i<num; i++)
  {
  	var rgb=[];
  	var color;
  	for(var j=0; j<3; j++)
  	{
  		rgb[j]=Math.floor(Math.random()*255+1);
  	}
  	color = "rgb("+rgb[0]+", "+rgb[1]+", "+rgb[2]+")";
  	colorsArray.push(color);
  }
  return colorsArray;
}

function setupSquares()
{
  var squares = document.querySelectorAll(".square");
	for (var i=0;i<squares.length;i++)
	{
		// Add colors to squares
		squares[i].style.backgroundColor = colors[i];
		// Add event listeners to the squares
		squares[i].addEventListener("click",function(){
			var clickedColor;
			clickedColor = this.style.backgroundColor;
	    if (pickedColor == clickedColor)
	    {
				message.textContent="Correct!";
				h1.style.backgroundColor = pickedColor;
				for (var i=0; i<colors.length;i++)
				{
	  			squares[i].style.backgroundColor = pickedColor;				
				}
	    } else
	    {
				message.textContent="Try Again!";

				this.style.backgroundColor = "#232323";
	    }
		})
  }
}
