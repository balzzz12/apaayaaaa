/* =========================================
   LOUBlOMM STYLE SCRIPT - FOR Acha
========================================= */


/* =========================================
   LOADING
========================================= */

const loading = document.getElementById("loading");

window.addEventListener("load", () => {

  if (!loading) return;

  setTimeout(() => {

    loading.style.opacity = "0";

    setTimeout(() => {

      loading.style.display = "none";

    }, 800);

  }, 1800);

});


/* =========================================
   CURSOR GLOW
========================================= */

const cursor = document.querySelector(".cursor");

if (cursor) {

  window.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

  });

}


/* =========================================
   FALLING PETALS
========================================= */

for (let i = 0; i < 22; i++) {

  const p = document.createElement("div");

  p.className = "petal";

  p.style.left =
    Math.random() * 100 + "vw";

  p.style.animationDuration =
    (6 + Math.random() * 5) + "s";

  p.style.animationDelay =
    Math.random() * 6 + "s";

  p.style.transform =
    `rotate(${Math.random() * 360}deg)`;

  document.body.appendChild(p);

}


/* =========================================
   PUZZLE
========================================= */

const puzzle =
  document.getElementById("puzzle");

let board = [0, 1, 2, null];

shuffle();
render();


function shuffle() {

  for (let i = 0; i < 60; i++) {

    const e = board.indexOf(null);

    const moves = [];

    if (e % 2 !== 0)
      moves.push(e - 1);

    if (e % 2 === 0)
      moves.push(e + 1);

    if (e > 1)
      moves.push(e - 2);

    if (e < 2)
      moves.push(e + 2);


    const validMoves =
      moves.filter(
        move => move >= 0 && move < 4
      );


    const pick =
      validMoves[
        Math.floor(
          Math.random() *
          validMoves.length
        )
      ];


    [board[e], board[pick]] =
      [board[pick], board[e]];

  }

}


function render() {

  if (!puzzle) return;

  puzzle.innerHTML = "";

  board.forEach((value, index) => {

    const tile =
      document.createElement("div");


    if (value === null) {

      tile.className =
        "tile empty";

    }

    else {

      tile.className =
        "tile";


      const x =
        (value % 2) * 155;

      const y =
        Math.floor(value / 2) * 155;


      tile.style.backgroundPosition =
        `-${x}px -${y}px`;


      tile.style.animation =
        `tilePop .45s ease ${index * .05}s both`;


      tile.onclick =
        () => move(index);

    }


    puzzle.appendChild(tile);

  });

}


function move(index) {

  const empty =
    board.indexOf(null);


  const valid =
    [
      empty - 1,
      empty + 1,
      empty - 2,
      empty + 2
    ].includes(index);


  if (!valid) return;


  [board[index], board[empty]] =
    [board[empty], board[index]];


  render();


  if (
    JSON.stringify(board) ===
    JSON.stringify([0, 1, 2, null])
  ) {

    sparkle();


    const btn =
      document.getElementById("nextBtn");


    btn.style.display = "block";


    btn.animate(
      [
        {
          opacity: 0,
          transform:
            "translateY(20px) scale(.8)"
        },

        {
          opacity: 1,
          transform:
            "translateY(-4px) scale(1.08)"
        },

        {
          transform:
            "translateY(0) scale(1)"
        }
      ],
      {
        duration: 650,
        easing:
          "cubic-bezier(.2,.8,.2,1)"
      }
    );

  }

}


/* =========================================
   SPARKLES
========================================= */

function sparkle() {

  for (let i = 0; i < 35; i++) {

    const s =
      document.createElement("div");


    s.className =
      "sparkle";


    const angle =
      Math.random() *
      Math.PI * 2;


    const radius =
      50 + Math.random() * 120;


    s.style.left =
      window.innerWidth / 2 + "px";


    s.style.top =
      window.innerHeight / 2 + "px";


    s.animate(
      [
        {
          transform:
            "translate(0,0) scale(1)",

          opacity: 1
        },

        {
          transform:
            `translate(
              ${Math.cos(angle) * radius}px,
              ${Math.sin(angle) * radius}px
            ) scale(0)`,

          opacity: 0
        }
      ],
      {
        duration: 900,
        easing: "ease-out"
      }
    );


    document.body.appendChild(s);


    setTimeout(
      () => s.remove(),
      900
    );

  }

}


/* =========================================
   LETTER MESSAGE
========================================= */

const msg = `Chaa, akuu mau ngomong sesuatu.

Aku pernah ngomong soal perasaanku ke kwe,
dan mungkin waktu itu memang belum tepat.

Aku juga nggak tau harus mulai dari mana,
jadi kali ini aku mulai dari hal yang paling jujur
yang bisa aku bilang ke kwe:

aku sayang kwe. ❤️

Terima kasih buat hari-hariku
yang tadinya biasa aja,
tapi jadi lebih berarti mergo kwe.

Makasih udah nemenin aku lari,
beli jajan bareng,
wes ngandani aku tentang skincare,
dan hal-hal kecil lainnya
yang mungkin menurut kwe biasa aja,
tapi buat aku berarti.

Maaff nek selama ini
aku pernah nggawe kwe gamood atau mutung.

Aku juga masih belajar buat memahami kwe.

Aku berusaha menerima sifat marahmu,
omelanmu, lucumu, ngambekmu,
bahkan hal-hal kecil dari kwe
yang mungkin nggak selalu gampang dipahami.

Karena aku suka kwe apa adanya,
terutama saat kwe jadi diri sendiri di depanku.

Aku suka waktu kwe cerita
hal-hal kecil ke aku.

Waktu kwe jujur,
pas kwe ngeluh,
bahkan pas kwe cemburut.

Jujur,
aku malah seneng lihat ekspresi wajahmu
pas cemberut.

Lucu gituu 😭

Aku sadar aku juga masih banyak kurangnya.

Kadang aku masih salah ngomong,
kadang aku masih gampang cemburu,
dan aku juga belum bisa ngerti kwe sepenuhnya.

Tapi aku beneran pengen belajar.

Aku pengen jadi seseorang
yang bisa lebih ngerti kwe,
bukan cuma pas semuanya lagi baik-baik aja.

Setelah semua yang sudah kita lewatin,
ternyata perasaanku ke kwe masih sama.

Bahkan mungkin sekarang
lebih besar dari sebelumnya.

Thanks juga karena selama ini
kwe sudah ngasih feedback ke aku.

Dari situ aku banyak belajar
tentang diriku sendiri
dan tentang gimana caranya memahami kwe.

Jadi kali ini aku nggak mau maksa kwe.

Aku juga nggak mau kwe jawab
karena kasihan
atau merasa nggak enak sama aku.

Aku cuma pengen kwe jujur
sama perasaan kwe sendiri.

Aku pengen nyoba jalanin ini sama-sama.

Pelan-pelan aja,
nggak harus sempurna.

Kalau nanti ada kurangnya,
kita belajar bareng.

Kalau ada salah,
kita benerin bareng.

Aku cuma pengen ngerti satu hal...

kwe mau nggak serius sama aku? `;


/* =========================================
   OPEN LETTER
========================================= */

function openLetter() {

  const intro =
    document.getElementById("intro");

  const giftScene =
    document.getElementById("giftScene");


  if (!intro || !giftScene) return;


  intro.style.display = "none";

  giftScene.style.display = "flex";


  giftScene.animate(
    [
      {
        opacity: 0
      },

      {
        opacity: 1
      }
    ],
    {
      duration: 500
    }
  );


  flowerBurst();
  sparkle();

}


/* =========================================
   TYPEWRITER CINEMATIC
========================================= */

let musicTriggered = false;

function typeWriter(){

  const el = document.getElementById("typed");
  const paper = document.querySelector(".paper");
  const typeSound = document.getElementById("typeSound");

  el.textContent = "";
  let i = 0;

  function type(){

    if(i >= msg.length){
      endingGlow();
      return;
    }

    el.textContent += msg[i];

    // Auto scroll halus
    paper.scrollTo({
      top: paper.scrollHeight,
      behavior: "smooth"
    });

    // Mulai lagu saat kalimat ini muncul
    if(
      !musicTriggered &&
      el.textContent.includes("Aku juga nggak tau harus mulai dari mana")
    ){
      musicTriggered = true;
      startMusicExperience();
      document.body.classList.add("music-on");
    }

    // Momen spesial "aku sayang kwe"
    if(el.textContent.endsWith("aku sayang kwe. ❤️")){

      paper.animate([
        {transform:"scale(1)"},
        {transform:"scale(1.02)"},
        {transform:"scale(1)"}
      ],{
        duration:1200,
        easing:"ease-out"
      });

      paper.classList.add("love-moment");

setTimeout(()=>{
  paper.classList.remove("love-moment");
},1800);
      sparkle();
    }

    // Momen terakhir
    if(el.textContent.endsWith("kwe mau nggak serius sama aku?")){
      createFinalButterfly();
      sparkle();
    }

    // Suara ketikan
    if(typeSound && msg[i] !== "\n" && i % 2 === 0){
      typeSound.currentTime = 0;
      typeSound.volume = 0.08;
      typeSound.play().catch(()=>{});
    }

    let speed = 24;

    if(msg[i]===".") speed=250;
    if(msg[i]===",") speed=120;
    if(msg[i]==="\n") speed=170;

    // Jeda dramatis
    if(el.textContent.endsWith("aku sayang kwe. ❤️")){
      speed=1000;
    }

    i++;
    setTimeout(type,speed);

  }

  type();
}

/* =========================================
   ENDING GLOW
========================================= */

function endingGlow() {

  const paper =
    document.querySelector(".paper");


  if (!paper) return;


  paper.animate(
    [
      {
        boxShadow:
          "0 35px 90px rgba(0,0,0,.16)"
      },

      {
        boxShadow:
          `
          0 35px 90px rgba(0,0,0,.16),
          0 0 80px rgba(255,160,195,.35)
          `
      },

      {
        boxShadow:
          "0 35px 90px rgba(0,0,0,.16)"
      }
    ],
    {
      duration: 1800
    }
  );


  sparkle();

}


/* =========================================
   DATE
========================================= */

const date =
  document.getElementById("date");


if (date) {

  date.textContent =
    new Date().toLocaleDateString(
      "id-ID",
      {
        day: "2-digit",
        month: "long",
        year: "numeric"
      }
    );

}


/* =========================================
   FLOWER BURST
========================================= */

function flowerBurst() {

  const wrap =
    document.getElementById(
      "flowerTransition"
    );


  if (!wrap) return;


  for (let i = 0; i < 45; i++) {

    const f =
      document.createElement("div");


    f.className =
      "flower";


    const angle =
      Math.random() *
      Math.PI * 2;


    const radius =
      150 +
      Math.random() * 350;


    f.style.left = "50%";
    f.style.top = "50%";


    f.style.setProperty(
      "--x",
      `${Math.cos(angle) * radius}px`
    );


    f.style.setProperty(
      "--y",
      `${Math.sin(angle) * radius}px`
    );


    f.style.animation =
      `bloom ${
        900 +
        Math.random() * 400
      }ms ease-out forwards`;


    wrap.appendChild(f);


    setTimeout(
      () => f.remove(),
      1300
    );

  }

}


/* =========================================
   OPEN BOUQUET
========================================= */

function openBouquet() {

  const envelope =
    document.getElementById(
      "envelopeCard"
    );

  const flower =
    document.getElementById(
      "flowerCard"
    );


  if (!envelope || !flower)
    return;


  envelope.animate(
    [
      {
        transform:
          "scale(1)",
        opacity: 1
      },

      {
        transform:
          "scale(.75) rotate(-8deg)",
        opacity: 0
      }
    ],
    {
      duration: 450,
      fill: "forwards"
    }
  );


  setTimeout(() => {

    envelope.style.display =
      "none";


    flower.style.display =
      "block";


    flower.animate(
      [
        {
          opacity: 0,
          transform:
            "scale(.8)"
        },

        {
          opacity: 1,
          transform:
            "scale(1)"
        }
      ],
      {
        duration: 700,
        easing:
          "cubic-bezier(.18,.9,.2,1)"
      }
    );


    flowerBurst();

  }, 450);

}


/* =========================================
   MUSIC / CINEMATIC LYRIC
========================================= */


/*
   Ini bukan lirik lagu asli.
   Ini adalah kalimat confession kamu
   yang muncul mengikuti perjalanan lagu.
*/

const lyricData = [

  {
    time: 8,
    text:
      "Ada beberapa hal yang ternyata lebih mudah dirasakan daripada diucapkan."
  },

  {
    time: 22,
    text:
      "Dan entah kenapa, kamu selalu berhasil jadi salah satunya."
  },

  {
    time: 38,
    text:
      "Mungkin kita memang berbeda dalam banyak hal."
  },

  {
    time: 55,
    text:
      "Tapi aku selalu suka bagaimana kita tetap bisa saling menemukan."
  },

  {
    time: 75,
    text:
      "Aku nggak tahu harus menyebut perasaan ini apa."
  },

  {
    time: 95,
    text:
      "Yang aku tahu, aku ingin berhenti cuma memikirkannya."
  },

  {
    time: 115,
    text:
      "Aku ingin berani mencoba."
  },

  {
    time: 135,
    text:
      "Bukan karena aku tahu akhirnya akan seperti apa..."
  },

  {
    time: 150,
    text:
      "Tapi karena aku nggak mau suatu hari nanti menyesal karena nggak pernah mencoba."
  },

  {
    time: 170,
    text:
      "Jadi..."
  },

  {
    time: 178,
    text:
      "mau nggak, kita coba?"
  }

];


/* =========================================
   START MUSIC
========================================= */

let musicStarted = false;

function startMusicExperience() {

  const music =
    document.getElementById(
      "bgMusic"
    );

  const vinyl =
    document.getElementById(
      "vinyl"
    );

  const progress =
    document.getElementById(
      "musicProgress"
    );

  const lyric =
    document.getElementById(
      "lyricLine"
    );


  if (!music) return;


  /*
     Jangan menjalankan
     listener berkali-kali.
  */

  if (musicStarted) return;

  musicStarted = true;


  /* =========================
     RESET
  ========================= */

  music.currentTime = 0;

  music.volume = 0;


  if (lyric) {

    lyric.textContent = "";

    lyric.dataset.current = "";

    lyric.classList.remove(
      "show"
    );

  }


  /* =========================
     PLAY
  ========================= */

  const playPromise =
    music.play();


  if (
    playPromise !== undefined
  ) {

    playPromise
      .then(() => {

        if (vinyl) {

          vinyl.classList.add(
            "playing"
          );

        }

      })
      .catch(() => {

        /*
          Beberapa browser
          memblokir autoplay.

          Karena tombol "Terima Bunga"
          merupakan user interaction,
          biasanya audio tetap bisa
          dimainkan.
        */

        console.log(
          "Audio menunggu izin browser."
        );

      });

  }


  /* =========================
     FADE IN
  ========================= */

  let volume = 0;


  const fade =
    setInterval(() => {

      volume += .015;

      music.volume =
        Math.min(
          volume,
          .35
        );


      if (
        volume >= .35
      ) {

        clearInterval(fade);

      }

    }, 100);


  /* =========================
     TIME UPDATE
  ========================= */

  music.addEventListener(
    "timeupdate",
    () => {

      if (!music.duration)
        return;


      /* Progress */

      if (progress) {

        const percentage =
          (
            music.currentTime /
            music.duration
          ) * 100;


        progress.style.width =
          percentage + "%";

      }


      /* =====================
         FIND ACTIVE MESSAGE
      ===================== */

      let activeLyric =
        null;


      for (
        let i = 0;
        i < lyricData.length;
        i++
      ) {

        if (
          music.currentTime >=
          lyricData[i].time
        ) {

          activeLyric =
            lyricData[i];

        }

      }


      if (
        activeLyric &&
        lyric
      ) {

        if (
          lyric.dataset.current !==
          activeLyric.text
        ) {

          lyric.dataset.current =
            activeLyric.text;


          /*
             Fade out
          */

          lyric.classList.remove(
            "show"
          );


          setTimeout(() => {

            lyric.textContent =
              activeLyric.text;


            lyric.classList.add(
              "show"
            );

          }, 400);

        }

      }

    }
  );


  /* =========================
     PLAY / PAUSE
  ========================= */

  music.addEventListener(
    "play",
    () => {

      if (vinyl) {

        vinyl.classList.add(
          "playing"
        );

      }

    }
  );


  music.addEventListener(
    "pause",
    () => {

      if (vinyl) {

        vinyl.classList.remove(
          "playing"
        );

      }

    }
  );


  /* =========================
     MUSIC END
  ========================= */

  music.addEventListener(
    "ended",
    () => {

      if (vinyl) {

        vinyl.classList.remove(
          "playing"
        );

      }

      if (lyric) {

        lyric.classList.remove(
          "show"
        );

      }

    }
  );

}


/* =========================================
   BUTTERFLY EFFECT
========================================= */

const butterflyMoments = [
  55,
  115,
  150,
  178
];


let triggeredButterflies = {};


function checkButterflyMoment(
  currentTime
) {

  butterflyMoments.forEach(
    (time) => {

      if (
        currentTime >= time &&
        currentTime < time + 1 &&
        !triggeredButterflies[time]
      ) {

        triggeredButterflies[time] =
          true;


        createButterflies();

      }

    }
  );

}


function createButterflies() {

  for (let i = 0; i < 5; i++) {

    const butterfly =
      document.createElement(
        "div"
      );


    butterfly.className =
      "music-butterfly";


    butterfly.textContent =
      "🦋";


    butterfly.style.left =
      (
        35 +
        Math.random() * 30
      ) + "vw";


    butterfly.style.top =
      (
        55 +
        Math.random() * 20
      ) + "vh";


    butterfly.style.animationDelay =
      (
        Math.random() * .4
      ) + "s";


    document.body.appendChild(
      butterfly
    );


    setTimeout(
      () => butterfly.remove(),
      4500
    );

  }

}

function createFinalButterfly(){

  const b = document.createElement("div");

  b.className = "music-butterfly final";

  b.textContent = "🦋";

  document.body.appendChild(b);

  setTimeout(() => b.remove(), 5000);

}


/* =========================================
   MUSIC TOGGLE
========================================= */

function toggleMusic() {

  const music =
    document.getElementById(
      "bgMusic"
    );

  const vinyl =
    document.getElementById(
      "vinyl"
    );


  if (!music) return;


  if (music.paused) {

    music.play();

    if (vinyl) {

      vinyl.classList.add(
        "playing"
      );

    }

  }

  else {

    music.pause();

    if (vinyl) {

      vinyl.classList.remove(
        "playing"
      );

    }

  }

}


/* =========================================
   SHOW LETTER
========================================= */

function showLetter(){

  const giftScene=document.getElementById("giftScene");
  const letter=document.getElementById("letterPage");

  if(!giftScene||!letter)return;

  giftScene.animate([
    {opacity:1,transform:"scale(1)"},
    {opacity:0,transform:"scale(.95)"}
  ],{
    duration:500,
    fill:"forwards"
  });

  setTimeout(()=>{

    giftScene.style.display="none";
    letter.style.display="flex";

    musicTriggered=false;
    musicStarted=false;
    triggeredButterflies={};

    const paper=document.querySelector(".paper");

    paper.animate([
      {opacity:0,transform:"scale(.92) rotate(-2deg)"},
      {opacity:1,transform:"scale(1) rotate(0)"}
    ],{
      duration:900,
      easing:"cubic-bezier(.18,.9,.2,1)"
    });

    typeWriter();

  },500);

}


/* =========================================
   CONNECT BUTTERFLIES TO MUSIC
========================================= */

const musicElement =
  document.getElementById(
    "bgMusic"
  );


if (musicElement) {

  musicElement.addEventListener(
    "timeupdate",
    () => {

      checkButterflyMoment(
        musicElement.currentTime
      );

    }
  );

}