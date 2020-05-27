let hslCounter=0;
let main = document.getElementById('container');
function test(number){
	for(let count=0; count<number*number; count++)
		{let c=1;
			let element = document.createElement('div');
  element.classList.add("work");
  element.style.width = `${960/number}px`;
  element.style.height = `${960/number}px`;
	element.onmouseover= function(){
  if (c>1){element.style.background = `${myFunction(element.style.background)}`;}	
	else if(c==1){
	element.style.background = `${getColor()}`;}	
	c++;};
  main.appendChild(element);
	}
}
let total=16;
test(total);
function reset(){
	main.innerHTML='';
	let total = prompt("Please enter the number of boxes, per side (max 100): ");
	if(total>100){total=100;}
	test(total);
}
function getColor(){ 
  let color = `hsl(${hslCounter},100%,50%)`;
        if (hslCounter === 360) {
            hslCounter = 0;
        } else {
            hslCounter += 10;
        }
	return color;
}
function myFunction(color1) {
  let r = color1.slice(color1.indexOf('(')+1,color1.indexOf(','));
  let g = color1.slice(color1.indexOf(',')+2,color1.lastIndexOf(','));
  let b = color1.slice(color1.lastIndexOf(",") +2, color1.indexOf(")"));
return `rgb(${r-26}, ${g-26}, ${b-26})`;
}
