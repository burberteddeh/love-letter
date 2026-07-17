const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");
const music = document.getElementById("bgMusic");
let musicStarted = false;
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

"Hi, babyy.",

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

    music.volume = 0.5;

    music.play()
    .then(()=>{
        musicStarted = true;
    })
    .catch(()=>{
        console.log("Browser blocked autoplay");
    });


    // hide button
    button.classList.add("hidden");


    // show heart
    const heart=document.getElementById("heart");

    heart.classList.remove("hidden");


    // after heart animation, show letter
    setTimeout(()=>{

        heart.classList.add("hidden");

        message.style.opacity="0";

        document.getElementById("letter").classList.remove("hidden");

        typeLetter();

        createHearts();

    },3000);

};

const letterMessage = 
`
To my special person,

I just wanted to make something that shows how much I appreciate you.

Thank you for the laughs, the conversations, and the memories we have created.

You are someone who made my days brighter just by being there.

I hope you always remember how special and wonderful you are.

No matter what happens, I am grateful that I got to know you.

Thank you for being you. YOU ARE MY SPECIAL PERSON.

WITH LOVE, APPRECIATION, I LOVE YOU POO 🤍 HASHSAHHA EME LANGS BA?
`;


function typeLetter(){

const text=document.getElementById("letterText");

let i=0;

text.innerHTML="";


let timer=setInterval(()=>{

text.innerHTML+=letterMessage[i];

i++;


if(i>=letterMessage.length){

clearInterval(timer);

}

},50);

}



function createHearts(){

for(let i=0;i<20;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="floatingHeart";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDelay=Math.random()*5+"s";


document.body.appendChild(heart);


}

}