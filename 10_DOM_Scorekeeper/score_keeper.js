var max = 5;
var score_0 = 0;
var score_1 = 0;

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var reset = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningScore = document.querySelector("p span");

numInput.addEventListener("change",function(){
	max = numInput.value;
  winningScore.textContent = max;  
  resetNumbers();
});


button1.addEventListener("click",function(){
	if(score_0==max)
	{
		return;
	}

	score_0++;
	document.getElementById("score1").textContent = score_0;
	if(score_0==max)
	{
		document.getElementById("score1").classList.add("green");
	}
});


button2.addEventListener("click",function(){
	if(score_1==max)
	{
		return;
	}

	score_1++;
	document.getElementById("score2").textContent = score_1;
	if(score_1==max)
	{
		document.getElementById("score2").classList.add("green");
	}

});

function resetNumbers() {
	score_0=0;
	score_1=0;
	document.getElementById("score1").textContent = score_0;	
	document.getElementById("score2").textContent = score_1;	
	document.getElementById("score1").classList.remove("green");
	document.getElementById("score2").classList.remove("green");

}

reset.addEventListener("click",function(){
	resetNumbers();
});


