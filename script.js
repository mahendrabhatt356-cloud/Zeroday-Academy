const text =
"Learn Cybersecurity • Build Projects • Master The Digital World";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,50);

}

}

typing();

const cursor = document.createElement("div");

cursor.classList.add("cursor");

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.pageX + "px";

cursor.style.top = e.pageY + "px";

});