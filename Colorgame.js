var n=6;
var easy=document.querySelector("#ea");
var hard=document.querySelector("#ha");
hard.classList.add("big");

easy.addEventListener("click",function(){
	n=3;
    var colors=pickColors(n);
	correctColor=randomColor(colors,n);
	var rgb = document.querySelector("#lk");
    rgb.textContent=correctColor;
    for(var i=0;i<=squares.length-1;i++){
    	if(colors[i]) squares[i].style.backgroundColor=colors[i];
    	else{
             squares[i].style.backgroundColor="#232323"
    	}
    }

    sp.textContent="";
    easy.classList.add("big");
    hard.classList.toggle("big");
 
})

hard.addEventListener("click",function(){
	n=6;
	var colors=pickColors(n);
	correctColor=randomColor(colors,n);
	var rgb = document.querySelector("#lk");
    rgb.textContent=correctColor;
    for(var i=0;i<=n-1;i++){
    	squares[i].style.backgroundColor=colors[i];
    }
    sp.textContent="";
    hard.classList.add("big");
    easy.classList.remove("big");
})




//colors array
var colors=pickColors(n);

//correct color
var correctColor=randomColor(colors,n);

//assigning correct color rgb to h1
var rgb = document.querySelector("#lk");
rgb.textContent=correctColor;

//initial colors
var squares=document.querySelectorAll(".square");

//try again and correct !
var sp=document.querySelector("#lo")

//new colors function;
var newc = document.querySelector("#f");
newc.addEventListener("click",function(){
	var colors=pickColors(n);
	correctColor=randomColor(colors,n);
	console.log("this is ",correctColor)
	var rgb = document.querySelector("#lk");
    rgb.textContent=correctColor;
    for(var i=0;i<=n-1;i++){
    	squares[i].style.backgroundColor=colors[i];
    }
    sp.textContent="";
    var h1= document.querySelector("h1");
    h1.style.backgroundColor="steelblue";

    if(newc.innerHTML=="Play Again ?") newc.innerHTML="New Colors";
 
})


for(i=0;i<=n-1;i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		var sqc=this.style.backgroundColor;

		if(sqc==correctColor){
              sp.textContent="Correct!";
              changeAll(correctColor);
              newc.textContent="Play Again ?";



		}
		else{
			sp.textContent="Try Again";
            this.style.backgroundColor="#232323";
		}
	})
}

function changeAll(color){
	for(var i=0;i<=n-1;i++){
		squares[i].style.backgroundColor=color;
	}
	var h1=document.querySelector("h1");
	h1.style.backgroundColor=color;
}


function pickColors(n){
	
	a=[];
	for(var i=1;i<=n;i++){
		var b=justColor();
		a.push(b);
	}
	console.log(a);
	return a;

}

function justColor(){
	r=Math.floor(Math.random()*256);
	g=Math.floor(Math.random()*256);
	b=Math.floor(Math.random()*256);
    c="rgb("+r+", "+g+", "+b+")";
	return c;
}


function randomColor(col,n){
	var i= Math.floor(Math.random()*n);

	return col[i];
}


