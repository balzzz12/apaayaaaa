/* =========================================
   LOUBLOMM STYLE SCRIPT - FOR Acha
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

    } else {

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

  const valid = [
    empty - 1,
    empty + 1,
    empty - 2,
    empty + 2
  ].includes(index);

  if (!valid) return;

  [board[index], board[empty]] =
    [board[empty], board[index]];

  render();


  /* =========================================
     PUZZLE SELESAI
  ========================================= */

  if (
    JSON.stringify(board) ===
    JSON.stringify([0, 1, 2, null])
  ) {

    sparkle();

    if (puzzle) {
      puzzle.style.pointerEvents = "none";
    }

    setTimeout(() => {

      openLetter();

    }, 700);

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
      50 +
      Math.random() * 120;

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

Aku sempet mikir,
perlu nggak aku ngomongin ini lagi ke kwe?

Soalnya aku udah pernah nyampein
apa yang aku rasain sebelumnya.

Tapi setelah waktu berjalan,
setelah banyak hal yang kita lewatin,
aku sadar satu hal.

Perasaanku ternyata masih ada.

Mungkin waktu yang berjalan
justru bikin aku semakin yakin
sama apa yang aku rasain.

Aku sayang kwe. ❤️

Bukan cuma karena hal-hal menyenangkan,
tapi juga karena aku mulai mengenal
sisi-sisi kwe yang lain.

Marahmu,
omelanmu,
ngambekmu,
cemberutmu,
dan hal-hal kecil tentang kwe
yang perlahan aku kenal.

Makasih udah nemenin aku lari,
beli jajan bareng,
ngasih tau aku soal skincare,
dan cerita banyak hal ke aku.

Mungkin buat kwe itu sederhana,
tapi buat aku,
semuanya jadi kenangan
yang pengen aku simpan.

Aku juga sadar,
aku masih banyak kurangnya.

Kadang masih salah ngomong,
masih gampang cemburu,
dan belum selalu bisa memahami kwe.

Tapi aku pengen belajar.

Belajar jadi seseorang
yang lebih baik,
yang bisa memahami kwe
bukan cuma saat semuanya menyenangkan,
tapi juga saat kwe lagi capek,
marah, atau pengen sendiri.

Setelah semua yang kita lewatin,
aku masih ada di sini.

Aku nggak mau kasih janji berlebihan.

Aku cuma mau jujur
tentang apa yang masih aku rasain.

Aku pengen nyoba.

Pelan-pelan aja.
Kita belajar bareng,
saling ngerti,
dan saling jaga.

Jadi setelah semua yang pernah terjadi...

Acha...

kw mau nggak,
kali ini kita coba serius sama-sama? ❤️`;

/* =========================================
   GLOBAL VARIABLES
========================================= */

let musicStarted = false;
let musicTriggered = false;
let typingFinished = false;

let letterStarted = false;
let typingRunning = false;

let triggeredButterflies = {};

let musicListenersAttached = false;

/* ANTI DOUBLE TYPEWRITER */
let typingTimer = null;
let typingSession = 0;


/* =========================================
   OPEN LETTER
   PUZZLE → AMPLOP
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
   PANTUN
   AMPLOP → PANTUN
========================================= */

function openBouquet() {

  const envelope =
    document.getElementById("envelopeCard");

  const pantun =
    document.getElementById("pantunCard");

  if (!envelope || !pantun) return;

  envelope.animate(
    [
      {
        transform: "scale(1)",
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

    envelope.style.display = "none";

    pantun.style.display = "block";

    pantun.animate(
      [
        {
          opacity: 0,
          transform: "scale(.8)"
        },

        {
          opacity: 1,
          transform: "scale(1)"
        }
      ],
      {
        duration: 700,
        easing:
          "cubic-bezier(.18,.9,.2,1)"
      }
    );

  }, 450);

}


/* =========================================
   PANTUN → BUNGA
========================================= */

function showFlower() {

  const pantun =
    document.getElementById("pantunCard");

  const flower =
    document.getElementById("flowerCard");

  if (!pantun || !flower) return;

  pantun.animate(
    [
      {
        opacity: 1,
        transform: "scale(1)"
      },

      {
        opacity: 0,
        transform: "scale(.85)"
      }
    ],
    {
      duration: 450,
      fill: "forwards"
    }
  );

  setTimeout(() => {

    pantun.style.display = "none";

    flower.style.display = "block";

    flower.animate(
      [
        {
          opacity: 0,
          transform: "scale(.8)"
        },

        {
          opacity: 1,
          transform: "scale(1)"
        }
      ],
      {
        duration: 700,
        easing:
          "cubic-bezier(.18,.9,.2,1)"
      }
    );

    flowerBurst();
    sparkle();

  }, 450);

}


/* =========================================
   MUSIC / CINEMATIC LYRIC
========================================= */

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

function startMusicExperience() {

  const music =
    document.getElementById("bgMusic");

  const vinyl =
    document.getElementById("vinyl");

  const progress =
    document.getElementById("musicProgress");

  const lyric =
    document.getElementById("lyricLine");

  const paper =
    document.querySelector(".paper");

  if (!music) return;

  if (musicStarted) return;

  musicStarted = true;

  music.currentTime = 0;
  music.volume = 0;

  if (lyric) {

    lyric.textContent = "";
    lyric.dataset.current = "";
    lyric.classList.remove("show");

  }


  /* =========================================
     PASANG LISTENER SEKALI SAJA
  ========================================= */

  if (!musicListenersAttached) {

    musicListenersAttached = true;


    /* =====================================
       TIME UPDATE
    ===================================== */

    music.addEventListener(
      "timeupdate",
      () => {

        if (!music.duration) return;


        /* PROGRESS */

        if (progress) {

          const percentage =
            (
              music.currentTime /
              music.duration
            ) * 100;

          progress.style.width =
            percentage + "%";

        }


        /* LYRIC */

        let activeLyric = null;

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


    /* =====================================
       PLAY
    ===================================== */

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


    /* =====================================
       PAUSE
    ===================================== */

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


    /* =====================================
       MUSIC END
    ===================================== */

    music.addEventListener(
  "ended",
  () => {

    /* =====================================
       MUSIC STOP
    ===================================== */

    if (vinyl) {
      vinyl.classList.remove("playing");
    }


    /* =====================================
       JANGAN MENULIS ULANG MSG
       
       Typewriter dibiarkan menyelesaikan
       teksnya sendiri.
    ===================================== */

    if (
      typingFinished &&
      typingTimer
    ) {

      clearTimeout(typingTimer);
      typingTimer = null;

    }


    /* =====================================
       SCROLL KE BAWAH
    ===================================== */

    if (paper) {

      paper.scrollTo({
        top: paper.scrollHeight,
        behavior: "smooth"
      });

    }


    /* =====================================
       HILANGKAN LYRIC
    ===================================== */

    if (lyric) {

      lyric.classList.remove(
        "show"
      );

    }


    /* =====================================
       ENDING
    ===================================== */

    setTimeout(() => {

      endingGlow();
      createFinalButterfly();
      sparkle();

    }, 600);

  }
);

  }


  /* =========================================
     PLAY MUSIC
  ========================================= */

  const playPromise =
    music.play();

  if (playPromise !== undefined) {

    playPromise
      .then(() => {

        if (vinyl) {

          vinyl.classList.add(
            "playing"
          );

        }

      })
      .catch(() => {

        console.log(
          "Audio menunggu izin browser."
        );

      });

  }


  /* =========================================
     FADE IN
  ========================================= */

  let volume = 0;

  const fade =
    setInterval(() => {

      volume += 0.015;

      music.volume =
        Math.min(volume, 0.35);

      if (volume >= 0.35) {

        clearInterval(fade);

      }

    }, 100);

}


/* =========================================
   TYPEWRITER CINEMATIC
   ANTI DOUBLE VERSION
========================================= */

function typeWriter() {

  /* =========================================
     STOP TYPEWRITER LAMA
  ========================================= */

  if (typingTimer) {
    clearTimeout(typingTimer);
    typingTimer = null;
  }

  /* Buat session baru */
  typingSession++;

  const currentSession = typingSession;


  /* =========================================
     AMBIL ELEMENT
  ========================================= */

  const el =
    document.getElementById("typed");

  const paper =
    document.querySelector(".paper");

  const typeSound =
    document.getElementById("typeSound");

  if (!el) return;


  /* =========================================
     RESET
  ========================================= */

  typingRunning = true;
  typingFinished = false;
  musicTriggered = false;

  el.textContent = "";

  let i = 0;


  /* =========================================
     TYPE
  ========================================= */

  function type() {

    /* =====================================
       PENGAMAN SESSION
    ===================================== */

    if (currentSession !== typingSession) {
      return;
    }


    /* =====================================
       SELESAI
    ===================================== */

    if (i >= msg.length) {

      typingFinished = true;
      typingRunning = false;
      typingTimer = null;

      return;

    }


    /* =====================================
       TULIS 1 KARAKTER
    ===================================== */

    el.textContent += msg[i];


    /* =====================================
       AUTO SCROLL
    ===================================== */

    if (paper) {

      paper.scrollTo({
        top: paper.scrollHeight,
        behavior: "smooth"
      });

    }


    /* =====================================
       MULAI MUSIK
    ===================================== */

   if (
  !musicTriggered &&
  el.textContent.includes(
    "Mungkin waktu yang berjalan"
  )
) {

  musicTriggered = true;

  startMusicExperience();

  document.body.classList.add(
    "music-on"
  );

}


    /* =====================================
       MOMEN "AKU SAYANG KWE"
    ===================================== */

    if (
      el.textContent.endsWith(
        "Aku sayang kwe. ❤️"
      )
    ) {

      if (paper) {

        paper.animate(
          [
            {
              transform: "scale(1)"
            },

            {
              transform: "scale(1.02)"
            },

            {
              transform: "scale(1)"
            }
          ],
          {
            duration: 1200,
            easing: "ease-out"
          }
        );

        paper.classList.add(
          "love-moment"
        );

        setTimeout(() => {

          paper.classList.remove(
            "love-moment"
          );

        }, 1800);

      }

      sparkle();

    }


    /* =====================================
       TYPE SOUND
    ===================================== */

    if (
      typeSound &&
      msg[i] !== "\n" &&
      i % 2 === 0
    ) {

      typeSound.currentTime = 0;
      typeSound.volume = 0.08;

      typeSound.play().catch(() => {});

    }


    /* =====================================
       KECEPATAN
    ===================================== */

    let speed = 30;

    const music =
      document.getElementById("bgMusic");


    if (
      music &&
      musicTriggered &&
      music.duration &&
      !isNaN(music.duration)
    ) {

      const remainingCharacters =
        msg.length - i;

      const remainingTime =
        Math.max(
          music.duration -
          music.currentTime,
          1
        );

      const syncedSpeed =
        (
          remainingTime * 1000
        ) /
        remainingCharacters;

      speed =
        Math.max(
          18,
          Math.min(
            syncedSpeed,
            180
          )
        );

    }


    /* =====================================
       PAUSE ALAMI
    ===================================== */

    if (msg[i] === ".") {
      speed += 160;
    }

    if (msg[i] === ",") {
      speed += 80;
    }

    if (msg[i] === "\n") {
      speed += 100;
    }


    /* =====================================
       JEDA "AKU SAYANG KWE"
    ===================================== */

    if (
      el.textContent.endsWith(
        "Aku sayang kwe. ❤️"
      )
    ) {

      speed = 1000;

    }


    i++;


    /* =====================================
       LANJUT
    ===================================== */

    typingTimer = setTimeout(
      type,
      speed
    );

  }


  /* =========================================
     MULAI
  ========================================= */

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
   BUTTERFLY EFFECT
========================================= */

const butterflyMoments = [
  55,
  115,
  150,
  178
];


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


function createFinalButterfly() {

  const b =
    document.createElement("div");

  b.className =
    "music-butterfly final";

  b.textContent =
    "🦋";

  document.body.appendChild(b);

  setTimeout(
    () => b.remove(),
    5000
  );

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

    music.play()
      .then(() => {

        if (vinyl) {

          vinyl.classList.add(
            "playing"
          );

        }

      })
      .catch(() => {});

  } else {

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
   BUNGA → SURAT
========================================= */

function showLetter() {

  /* =========================================
     PENGAMAN ANTI DOUBLE
  ========================================= */

  if (letterStarted) return;

  letterStarted = true;


  const giftScene =
    document.getElementById(
      "giftScene"
    );

  const letter =
    document.getElementById(
      "letterPage"
    );

  if (
    !giftScene ||
    !letter
  ) {

    letterStarted = false;
    return;

  }


  giftScene.animate(
    [
      {
        opacity: 1,
        transform: "scale(1)"
      },

      {
        opacity: 0,
        transform: "scale(.95)"
      }
    ],
    {
      duration: 500,
      fill: "forwards"
    }
  );


  setTimeout(() => {

    giftScene.style.display =
      "none";

    letter.style.display =
      "flex";


    /* =====================================
       RESET STATE
       TAPI TIDAK RESET MUSIC LISTENER
    ===================================== */

    musicTriggered = false;
    typingFinished = false;
    triggeredButterflies = {};


    const paper =
      document.querySelector(
        ".paper"
      );


    if (paper) {

      paper.animate(
        [
          {
            opacity: 0,
            transform:
              "scale(.92) rotate(-2deg)"
          },

          {
            opacity: 1,
            transform:
              "scale(1) rotate(0)"
          }
        ],
        {
          duration: 900,
          easing:
            "cubic-bezier(.18,.9,.2,1)"
        }
      );

    }


    /* =====================================
       JALANKAN TYPEWRITER SEKALI
    ===================================== */

    typeWriter();

  }, 500);

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
