const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");

const message = document.getElementById("message");
const button = document.getElementById("continueBtn");

function resize(){

canvas.width=innerWidth;

canvas.height=innerHeight;

}

resize();

window.addEventListener("resize",resize);

const stars=[];

for(let i=0;i<500;i++){

stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2,

a:Math.random(),

d:(Math.random()*0.02)+0.002

});

}

function animate(){

ctx.fillStyle="#020612";

ctx.fillRect(0,0,canvas.width,canvas.height);

for(const s of stars){

s.a+=s.d;

if(s.a>=1||s.a<=0)s.d*=-1;

ctx.beginPath();

ctx.arc(s.x,s.y,s.r,0,Math.PI*2);

ctx.fillStyle=`rgba(255,255,255,${s.a})`;

ctx.fill();

}

requestAnimationFrame(animate);

}

animate();

const pages=[

"Hi, Jhoanna.",

"I made something for you.",

"This isn't a confession.",

"It's simply a thank you."

];

let page=0;

function type(text,done){

message.innerHTML="";

let i=0;

const timer=setInterval(()=>{

message.innerHTML+=text[i];

i++;

if(i>=text.length){

clearInterval(timer);

setTimeout(done,1800);

}

},70);

}

function nextPage(){

if(page>=pages.length){

button.classList.remove("hidden");

return;

}

type(pages[page],()=>{

page++;

nextPage();

});

}

setTimeout(nextPage,1500);

button.onclick=()=>{

alert("Part 2: Heart animation is coming next ❤️");

};