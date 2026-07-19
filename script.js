/* =========================================
   ELEMENTS
========================================= */

const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");

const music = document.getElementById("bgMusic");

const message = document.getElementById("message");

const continueBtn = document.getElementById("continueBtn");

const heartScene = document.getElementById("heartScene");

const letter = document.getElementById("letter");

const letterText = document.getElementById("letterText");

const nextLetter = document.getElementById("nextLetter");

/* =========================================
   CANVAS
========================================= */

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

/* =========================================
   STARS
========================================= */

const stars = [];

for(let i=0;i<250;i++){

    stars.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        r:Math.random()*2,

        speed:0.15+Math.random()*0.6,

        alpha:Math.random()

    });

}

function drawStars(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#ffffff";

    stars.forEach(star=>{

        star.y+=star.speed;

        if(star.y>canvas.height){

            star.y=0;

            star.x=Math.random()*canvas.width;

        }

        ctx.globalAlpha=star.alpha;

        ctx.beginPath();

        ctx.arc(

            star.x,

            star.y,

            star.r,

            0,

            Math.PI*2

        );

        ctx.fill();

    });

    requestAnimationFrame(drawStars);

}

drawStars();

/* =========================================
   INTRO MESSAGE
========================================= */

const intro =

`Hi...

Before anything else...

There's something I'd like you to read.

Please stay until the end.`;

let introIndex = 0;

function typeIntro(){

    if(introIndex<intro.length){

        message.innerHTML += intro.charAt(introIndex);

        introIndex++;

        setTimeout(typeIntro,55);

    }

    else{

        continueBtn.classList.remove("hidden");

    }

}

typeIntro();

/* =========================================
   MUSIC
========================================= */

let musicStarted=false;

continueBtn.addEventListener("click",()=>{

    if(!musicStarted){

        music.play();

        musicStarted=true;

    }

});

/* =========================================
   HEART SCENE
========================================= */

continueBtn.addEventListener("click", () => {

    document.getElementById("scene").classList.add("hidden");

    heartScene.classList.remove("hidden");

    heartScene.classList.add("fadeIn");

    setTimeout(() => {

        heartScene.classList.add("hidden");

        letter.classList.remove("hidden");

        letter.classList.add("fadeIn");

        startLetter();

    }, 3200);

});

const firstLetter = `Hi...

Before anything else...

Thank you for taking the time to read this.

I've wanted to tell you this for a long time.

I don't know what your answer will be.

But I didn't want to keep wondering forever.

You became someone I genuinely cared about.

Whether you realized it or not...

You became important to me.

I like you.

I really do.

And...

I love you so much.

❤️`;

let letterIndex = 0;

function startLetter() {

    letterText.textContent = "";
    letterIndex = 0;
    typeLetter();

}

function typeLetter() {

    if (letterIndex < firstLetter.length) {

        letterText.textContent += firstLetter[letterIndex++];

        setTimeout(typeLetter, 30);

    } else {

        nextLetter.classList.remove("hidden");

    }

}

/* ===========================
   PAGE SWITCHER
=========================== */

const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");

function show(current, next){

    current.classList.add("pageFadeOut");

    setTimeout(()=>{

        current.classList.add("hidden");
        current.classList.remove("pageFadeOut");

        next.classList.remove("hidden");
        next.classList.add("fadeIn");

    },500);

}

nextLetter.onclick = ()=>{

    show(letter,page2);

};

page2Btn.onclick=()=>{

    show(page2,page3);

};

page3Btn.onclick=()=>{

    show(page3,page4);

};

finishBtn.onclick=()=>{

    page4.innerHTML=`

<div class="paper">

<h1>❤️</h1>

<h2>Thank You.</h2>

<p>

Whatever your answer is...

Thank you for reading until the end.

That's all I wanted.

</p>

</div>

`;

};

function typeLetter(){

    if(letterIndex < firstLetter.length){

        letterText.innerHTML += firstLetter.charAt(letterIndex);

        letterIndex++;

        letter.scrollIntoView({

            behavior:"smooth"

        });

        setTimeout(typeLetter,35);

    }

    else{

        nextLetter.classList.remove("hidden");

    }

}

/* =========================================
   PAGE NAVIGATION
========================================= */

const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");

function switchPage(current, next){

    current.classList.add("pageFadeOut");

    setTimeout(()=>{

        current.classList.add("hidden");
        current.classList.remove("pageFadeOut");

        next.classList.remove("hidden");
        next.classList.add("fadeIn");

    },500);

}

nextLetter.addEventListener("click",()=>{

    switchPage(letter,page2);

});

document.getElementById("page2Btn")
.addEventListener("click",()=>{

    switchPage(page2,page3);

});

document.getElementById("page3Btn")
.addEventListener("click",()=>{

    switchPage(page3,page4);

});

document.getElementById("finishBtn")
.addEventListener("click",()=>{

    page4.classList.add("pageFadeOut");

    setTimeout(()=>{

        page4.innerHTML=`

<div class="paper">

<h2>❤️</h2>

<h1>Thank you for reading.</h1>

<p>
No matter what your answer is...
thank you for giving my feelings
a place in your time.
</p>

</div>

`;

        page4.classList.remove("pageFadeOut");
        page4.classList.add("fadeIn");

    },500);

});