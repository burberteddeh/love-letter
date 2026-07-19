/* ==========================================
   LOVE LETTER V2
   by Matthew ❤️
========================================== */

const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");

let stars = [];

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

/* ==========================
   CREATE STARS
========================== */

function createStars(){

    stars = [];

    for(let i = 0; i < 180; i++){

        stars.push({

            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,

            radius:Math.random()*2 + .5,

            alpha:Math.random(),

            speed:(Math.random()*.015)+.003,

            direction:Math.random()>.5?1:-1

        });

    }

}

createStars();

/* ==========================
   DRAW
========================== */

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(const star of stars){

        star.alpha += star.speed * star.direction;

        if(star.alpha >= 1){

            star.direction = -1;

        }

        if(star.alpha <= .2){

            star.direction = 1;

        }

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI*2
        );

        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;

        ctx.fill();

    }

    requestAnimationFrame(draw);

}

draw();

/* ==========================
   INTRO
========================== */

const intro = document.getElementById("intro");
const introBtn = document.getElementById("introBtn");
const music = document.getElementById("music");

const heartPage = document.getElementById("heartPage");
const heartBtn = document.getElementById("heartBtn");

function fade(current,next){

    current.style.opacity=1;

    current.style.transition=".6s";

    current.style.opacity=0;

    setTimeout(()=>{

        current.classList.add("hidden");

        next.classList.remove("hidden");

        next.style.opacity=0;

        next.style.transition=".6s";

        requestAnimationFrame(()=>{

            next.style.opacity=1;

        });

    },600);

}

introBtn.onclick=()=>{

    music.play().catch(()=>{});

    fade(intro,heartPage);

};

/* ==========================
   LETTER
========================== */

const letterPage = document.getElementById("letterPage");
const letterText = document.getElementById("letterText");
const letterBtn = document.getElementById("letterBtn");

const firstLetter = `My Love,

If you're reading this...

thank you for staying.

I know we haven't had the easiest journey.

We've had misunderstandings.

We've overthought things.

We've questioned each other.

But in the end...

we chose to communicate.

We chose to understand each other.

And because of that...

I love you even more.

Thank you...

for every smile.

every hug.

every laugh.

every "baby."

every "bebe."

every "bb."

Thank you...

for making ordinary days
feel extraordinary.

You became my comfort.

My happiness.

My favorite notification.

My favorite person.

I don't know what tomorrow looks like.

But I know one thing.

If I get to spend it with you...

I'll always consider myself lucky.

I love you.

More than words can ever explain.

❤️`;

let index = 0;

function typeLetter(){

    if(index < firstLetter.length){

        letterText.textContent += firstLetter.charAt(index);

        index++;

        setTimeout(typeLetter,25);

    }

    else{

        letterBtn.classList.remove("hidden");

    }

}

heartBtn.onclick=()=>{

    fade(heartPage,letterPage);

    setTimeout(()=>{

        music.volume=.4;

        typeLetter();

    },700);

};

/* ==========================
   PAGE 2
========================== */

const page2 = document.getElementById("page2");
const page2Btn = document.getElementById("page2Btn");
const ending = document.getElementById("ending");

letterBtn.onclick = () => {

    fade(letterPage, page2);

};

page2Btn.onclick = () => {

    fade(page2, ending);

};