/* ==========================================
   A STORY I'D LIKE TO WRITE WITH YOU ❤️
========================================== */

// ===============================
// STAR BACKGROUND
// ===============================

const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const stars = [];

function createStars() {

    stars.length = 0;

    for(let i = 0; i < 180; i++){

        stars.push({

            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,

            radius:Math.random()*2 + .5,

            alpha:Math.random(),

            speed:Math.random()*.02 + .003,

            direction:Math.random()>.5 ? 1 : -1

        });

    }

}

createStars();

function animateStars(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    stars.forEach(star=>{

        star.alpha += star.speed * star.direction;

        if(star.alpha >= 1) star.direction = -1;
        if(star.alpha <= .2) star.direction = 1;

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI*2
        );

        ctx.fillStyle=`rgba(255,255,255,${star.alpha})`;

        ctx.fill();

    });

    requestAnimationFrame(animateStars);

}

animateStars();


// ===============================
// MUSIC
// ===============================

const music = document.getElementById("music");

function startMusic(){

    music.volume = 0;

    music.play().catch(()=>{});

    let volume = 0;

    const fade = setInterval(()=>{

        volume += .02;

        if(volume >= .35){

            volume = .35;

            clearInterval(fade);

        }

        music.volume = volume;

    },200);

}


// ===============================
// ELEMENTS
// ===============================

const chapter = document.getElementById("chapter");
const title = document.getElementById("title");
const text = document.getElementById("text");

const photo = document.getElementById("photo");
const photoContainer = document.getElementById("photoContainer");
const caption = document.getElementById("caption");

const paper = document.getElementById("paper");

const nextBtn = document.getElementById("nextBtn");


// ===============================
// TYPEWRITER
// ===============================

let typing = false;

function typeWriter(message){

    text.textContent = "";

    let i = 0;

    typing = true;

    function write(){

        if(i < message.length){

            text.textContent += message.charAt(i);

            i++;

            setTimeout(write,20);

        }

        else{

            typing = false;

            nextBtn.disabled = false;

        }

    }

    write();

}


// ===============================
// STORY
// ===============================

const story = [

{
chapter:"A Small Surprise",

title:"Hey, Baby ❤️",

text:`Before you keep reading...

thank you.

Thank you for taking
a few minutes
to open this.

I know it's just
a simple website.

But every little part of it...

was made
while thinking about you.`,

button:"Keep Reading ❤️"
},

{
chapter:"Something I Wanted To Say",

title:"",

text:`I'm not very good
at putting everything
I feel into words.

Sometimes...

I overthink.

Sometimes...

I struggle to explain
what's on my mind.

So...

I made this instead.`,

button:"Continue"
},

{
photo:"assets/photo1.jpg",

caption:"One smile... and somehow, my day gets a little better.",

button:"Continue"
},

{
chapter:"The Little Things",

title:"",

text:`You know what
I like the most?

It's never
the big moments.

It's the little things.

The random conversations.

The unexpected laughs.

The way you can
make an ordinary day

feel a little brighter.`,

button:"Continue"
},

{
photo:"assets/photo2.jpg",

caption:"This picture always reminds me how lucky I am to know you.",

button:"Continue"
},

{
chapter:"A Quiet Truth",

title:"",

text:`Can I tell you
something?

When you gave me
the chance
to court you...

I didn't just
feel happy.

I felt trusted.

And that's something

I'll never take
for granted.`,

button:"Continue"
},

{
photo:"assets/photo3.jpg",

caption:`You probably don't know this...

but I smiled
for way longer than I should have
after seeing this.`,

button:"Continue"
},

{
chapter:"What I Want",

title:"",

text:`I'm not trying
to rush anything.

I don't expect
everything
to be perfect.

I just want

to keep getting
to know you.

One conversation.

One laugh.

One memory

at a time.`,

button:"Continue"
},

{
photo:"assets/photo4.jpg",

caption:`You don't have to be perfect.

I like you because you're you.`,
button:"Continue"
},

{
chapter:"A Promise",

title:"",

text:`While I'm courting you...

I want you
to know something.

I'll always
do my best

to listen.

To understand.

To respect you.

And to be honest with you.

Not because
I'm perfect...

but because
I genuinely care about you.`,

button:"Continue ❤️"
},

{
photo:"assets/photo5.jpg",

caption:`My favorite memories...

are still the ones
we haven't made yet.`,
button:"One Last Page ❤️"
},

{
chapter:"The Beginning",

title:"Thank You ❤️",

text:`If you've made it
this far...

thank you.

Not just
for reading this.

But...

for giving me
the chance
to become
someone special
in your life.

I don't know
where this journey
will take us.

But...

I'm excited

to find out
with you.

❤️

— Matthew`,

button:"Finish ❤️"
}

];

// ===============================
// STORY ENGINE
// ===============================

let current = 0;
let started = false;

function loadStory(){

    const page = story[current];

    paper.classList.remove("show");
    paper.classList.add("hide");

    nextBtn.disabled = true;

    setTimeout(()=>{

        chapter.textContent = page.chapter || "";
        title.textContent = page.title || "";

        nextBtn.textContent = page.button || "Continue";

        // ---------- TEXT ----------

        if(page.text){

            typeWriter(page.text);

        }else{

            text.textContent = "";

            nextBtn.disabled = false;

        }

        // ---------- PHOTO ----------

        if(page.photo){

            photoContainer.classList.remove("hidden");

            photo.classList.remove("reveal");

            photo.src = page.photo;

            caption.textContent = page.caption || "";

            photo.onload = ()=>{

                setTimeout(()=>{

                    photo.classList.add("reveal");

                },250);

            };

        }

        else{

            photoContainer.classList.add("hidden");

            photo.classList.remove("reveal");

            photo.src = "";

            caption.textContent = "";

        }

        paper.classList.remove("hide");
        paper.classList.add("show");

    },350);

}



// ===============================
// SHOOTING STARS
// ===============================

const shootingStars=[];

function createShootingStar(){

    shootingStars.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height*.4,

        length:Math.random()*120+120,

        speed:Math.random()*10+12,

        life:0,

        maxLife:45

    });

}

setInterval(()=>{

    if(Math.random()>.45){

        createShootingStar();

    }

},6000);



function animateShootingStars(){

    for(let i=shootingStars.length-1;i>=0;i--){

        const s=shootingStars[i];

        ctx.beginPath();

        ctx.moveTo(s.x,s.y);

        ctx.lineTo(

            s.x-s.length,

            s.y+s.length*.35

        );

        ctx.strokeStyle=

        `rgba(255,255,255,${1-s.life/s.maxLife})`;

        ctx.lineWidth=2;

        ctx.stroke();

        s.x+=s.speed;

        s.y+=s.speed*.35;

        s.life++;

        if(s.life>=s.maxLife){

            shootingStars.splice(i,1);

        }

    }

    requestAnimationFrame(animateShootingStars);

}

animateShootingStars();



// ===============================
// HEART RAIN
// ===============================

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-40px";

    heart.style.fontSize=(Math.random()*20+18)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    heart.style.opacity=".9";

    document.body.appendChild(heart);

    let y=-40;

    const drift=(Math.random()-.5)*.6;

    const float=setInterval(()=>{

        y+=2;

        heart.style.bottom=y+"px";

        heart.style.left=

        parseFloat(heart.style.left)+drift+"px";

        heart.style.opacity=

        1-(y/window.innerHeight);

        if(y>window.innerHeight+40){

            clearInterval(float);

            heart.remove();

        }

    },16);

}



function heartRain(){

    let count=0;

    const rain=setInterval(()=>{

        createHeart();

        count++;

        if(count>=40){

            clearInterval(rain);

        }

    },250);

}



// ===============================
// NEXT BUTTON
// ===============================

nextBtn.onclick=()=>{

    if(typing) return;

    if(!started){

        started=true;

        startMusic();

    }

    if(current<story.length-1){

        current++;

        loadStory();

    }

    else{

        nextBtn.style.display="none";

        setTimeout(()=>{

            heartRain();

            paper.innerHTML=`

            <h2 class="endingTitle">

            To Be Continued...

            </h2>

            <p class="endingText">

            Hopefully...

            with you.

            ❤️

            <br><br>

            — Matthew

            </p>

            `;

        },700);

    }

};



// ===============================
// FIRST PAGE
// ===============================

loadStory();