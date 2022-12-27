const displayText=document.getElementById('counter-display')
const ab=document.getElementsByClassName('add');
const cd=document.getElementsByClassName('sub');
let count=0;

function addition(){
     count+=1;
     console.log(count);
     displayText.innerText=count;
}
function subtraction(){
   count-=1;
   displayText.innerText=count;
}
ab[0].addEventListener('click',addition);
cd[0].addEventListener('click',subtraction);