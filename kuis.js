const soalKuis = [
  // Level 1 (Mudah)
  [
    {
      soal: "Apa nama gunung terkenal di Tanah Karo?",
      pilihan: ["Gunung Sinabung", "Gunung Merapi", "Gunung Kerinci", "Gunung Rinjani"],
      jawaban: 0
    },
    {
      soal: "Apa makanan khas Karo yang terbuat dari daging babi?",
      pilihan: ["Rendang", "Babi Panggang Karo", "Ayam Betutu", "Gudeg"],
      jawaban: 1
    },
    {
      soal: "Apa nama danau di kaki Gunung Sinabung?",
      pilihan: ["Danau Toba", "Danau Lau Kawar", "Danau Maninjau", "Danau Singkarak"],
      jawaban: 1
    },
    {
      soal: "Apa nama pakaian adat Karo?",
      pilihan: ["Ulos", "Uis Gara", "Songket", "Batik"],
      jawaban: 1
    },
    {
      soal: "Apa nama alat musik tiup tradisional Karo?",
      pilihan: ["Sasando", "Sarune", "Angklung", "Gamelan"],
      jawaban: 1
    }
  ],
  // Level 2 (Lumayan Sulit)
  [
    {
      soal: "Apa nama upacara adat Karo untuk berkomunikasi dengan roh leluhur?",
      pilihan: ["Ngaben", "Perumah Begu", "Rebu", "Cawir Metua"],
      jawaban: 1
    },
    {
      soal: "Apa nama tarian tradisional Karo yang digunakan untuk memanggil hujan?",
      pilihan: ["Tari Tor-tor", "Tari Gundala-Gundala", "Tari Saman", "Tari Piring"],
      jawaban: 1
    },
    {
      soal: "Apa nama rumah adat Karo yang memiliki empat fasad dan tanduk di atapnya?",
      pilihan: ["Rumah Gadang", "Rumah Sianjung-anjung", "Rumah Joglo", "Rumah Limas"],
      jawaban: 1
    },
    {
      soal: "Apa nama kepercayaan pertama masyarakat Karo sebelum masuknya agama Hindu, Islam, dan Kristen?",
      pilihan: ["Animisme", "Pemena", "Dinamisme", "Hindu Dharma"],
      jawaban: 1
    },
    {
      soal: "Apa nama ansambel musik tradisional Karo yang terdiri dari lima perangkat alat musik tabuh?",
      pilihan: ["Gamelan", "Gendang Lima Sedalanen", "Talempong", "Angklung"],
      jawaban: 1
    }
  ],
  // Level 3 (Sulit)
  [
    {
      soal: "Jelaskan secara singkat bagaimana proses upacara Perumah Begu dilakukan dalam tradisi Karo dan apa makna utamanya?",
      pilihan: [
        "Mengundang roh leluhur ke rumah, dilakukan dengan sesajen dan doa, maknanya meminta restu dan perlindungan.",
        "Membakar dupa di kuburan, maknanya mengusir roh jahat.",
        "Membawa makanan ke sungai, maknanya meminta hasil panen.",
        "Menyanyikan lagu tradisional di rumah adat, maknanya mempererat persaudaraan."
      ],
      jawaban: 0
    },
    {
      soal: "Apa hubungan antara sistem marga Karo dengan struktur pemerintahan tradisional Sibayak?",
      pilihan: [
        "Setiap marga memiliki peran dalam pemerintahan Sibayak, dan asal-usul marga terkait dengan kerajaan Sibayak.",
        "Marga hanya berfungsi dalam upacara adat, tidak terkait pemerintahan.",
        "Sibayak adalah nama marga terbesar di Karo.",
        "Marga dan Sibayak tidak saling berhubungan."
      ],
      jawaban: 0
    },
    {
      soal: "Sebutkan dua ciri khas utama dari rumah adat Sianjung-anjung Karo yang membedakannya dari rumah adat lain di Sumatera Utara!",
      pilihan: [
        "Empat fasad dan tanduk di atapnya.",
        "Atap runcing dan ukiran naga.",
        "Dinding dari bambu dan lantai tanah.",
        "Pintu masuk di atap rumah."
      ],
      jawaban: 0
    },
    {
      soal: "Bagaimana pengaruh kolonialisme Belanda terhadap struktur sosial dan budaya masyarakat Karo?",
      pilihan: [
        "Mengubah sistem pemerintahan tradisional, memperkenalkan pendidikan Barat, dan mempengaruhi adat istiadat.",
        "Tidak ada pengaruh sama sekali.",
        "Masyarakat Karo menjadi mayoritas Kristen.",
        "Kolonialisme hanya berdampak pada ekonomi, bukan budaya."
      ],
      jawaban: 0
    },
    {
      soal: "Apa makna filosofi dari motif kain Uis Gara dalam budaya Karo?",
      pilihan: [
        "Melambangkan keberanian, status sosial, dan hubungan dengan leluhur.",
        "Hanya sebagai hiasan tanpa makna.",
        "Simbol kekayaan materi.",
        "Motifnya diambil dari budaya luar."
      ],
      jawaban: 0
    }
  ],
  // Level 4 (Sangat Sulit)
  [
    {
      soal: "Jelaskan peran dan fungsi Gendang Lima Sedalanen dalam upacara adat Karo secara detail!",
      pilihan: [
        "Sebagai pengiring utama upacara adat, menandai tahapan prosesi, dan memperkuat nilai kebersamaan masyarakat.",
        "Sebagai alat musik hiburan semata.",
        "Digunakan hanya pada acara pernikahan.",
        "Tidak memiliki fungsi khusus dalam adat."
      ],
      jawaban: 0
    },
    {
      soal: "Bagaimana proses dan makna upacara Rebu dalam masyarakat Karo?",
      pilihan: [
        "Pantangan berinteraksi antara menantu dan mertua, bertujuan menjaga keharmonisan keluarga.",
        "Upacara syukuran panen.",
        "Tradisi membangun rumah baru.",
        "Ritual pengusiran roh jahat."
      ],
      jawaban: 0
    },
    {
      soal: "Apa perbedaan utama antara kepercayaan Pemena dan agama-agama yang masuk kemudian di Karo?",
      pilihan: [
        "Pemena berbasis animisme dan dinamisme, sedangkan agama lain membawa sistem kepercayaan baru.",
        "Pemena adalah agama Hindu.",
        "Tidak ada perbedaan.",
        "Pemena lebih modern dari agama lain."
      ],
      jawaban: 0
    },
    {
      soal: "Jelaskan makna dan proses upacara Cawir Metua dalam tradisi Karo!",
      pilihan: [
        "Upacara untuk orang tua yang meninggal di usia tua setelah semua anak menikah, sebagai penghormatan terakhir.",
        "Upacara pernikahan adat.",
        "Ritual panen raya.",
        "Upacara kelahiran anak pertama."
      ],
      jawaban: 0
    },
    {
      soal: "Bagaimana pengaruh Hindu-Buddha terhadap seni dan kepercayaan masyarakat Karo?",
      pilihan: [
        "Terlihat pada seni ukir, pahat, dan sistem kepercayaan yang memadukan unsur lokal dan Hindu-Buddha.",
        "Tidak ada pengaruh sama sekali.",
        "Hanya mempengaruhi bahasa.",
        "Pengaruhnya hanya pada makanan."
      ],
      jawaban: 0
    }
  ],
  // Level 5 (Paling Sulit)
  [
    {
      soal: "Analisislah bagaimana perubahan sosial akibat modernisasi mempengaruhi pelestarian budaya Karo, serta sebutkan dua tantangan utamanya!",
      pilihan: [
        "Modernisasi menyebabkan pergeseran nilai, generasi muda kurang tertarik pada budaya lokal, dan tantangannya adalah globalisasi serta urbanisasi.",
        "Modernisasi memperkuat budaya Karo.",
        "Tidak ada pengaruh modernisasi.",
        "Tantangannya hanya pada ekonomi."
      ],
      jawaban: 0
    },
    {
      soal: "Jelaskan secara detail proses dan makna upacara Ngampeken Tulan-Tulan dalam budaya Karo!",
      pilihan: [
        "Upacara mengangkat tulang leluhur ke kuburan baru, sebagai bentuk penghormatan dan menjaga hubungan spiritual dengan leluhur.",
        "Upacara pernikahan adat.",
        "Ritual panen raya.",
        "Upacara kelahiran anak pertama."
      ],
      jawaban: 0
    },
    {
      soal: "Bagaimana peran perempuan dalam pelestarian adat dan budaya Karo di era modern?",
      pilihan: [
        "Perempuan berperan aktif dalam upacara adat, pewarisan nilai, dan pendidikan budaya pada generasi muda.",
        "Perempuan tidak terlibat dalam adat.",
        "Peran perempuan hanya di rumah tangga.",
        "Perempuan hanya berperan dalam ekonomi."
      ],
      jawaban: 0
    },
    {
      soal: "Analisislah hubungan antara motif-motif pada kain Uis Gara dengan filosofi hidup masyarakat Karo!",
      pilihan: [
        "Motif Uis Gara mencerminkan nilai keberanian, solidaritas, dan hubungan spiritual dengan alam dan leluhur.",
        "Motif hanya untuk estetika.",
        "Motif diambil dari budaya luar.",
        "Tidak ada hubungan dengan filosofi hidup."
      ],
      jawaban: 0
    },
    {
      soal: "Jelaskan secara kritis bagaimana akulturasi budaya luar mempengaruhi tradisi Karo, berikan satu contoh nyata!",
      pilihan: [
        "Akulturasi memperkaya tradisi Karo, contohnya pengaruh Hindu-Buddha pada upacara dan seni ukir.",
        "Akulturasi menghilangkan budaya Karo.",
        "Tidak ada akulturasi di Karo.",
        "Contohnya hanya pada makanan."
      ],
      jawaban: 0
    }
  ]
];

const skorPerSoal = 20; // 5 soal per level, 20 poin per soal
let level = 0;
let skor = 0;
let soalIndex = 0;
let timer = 30;
let timerInterval;
let highscore = localStorage.getItem('kuisHighscore') || 0;
let history = JSON.parse(localStorage.getItem('kuisHistory') || '[]');
let userName = '';

const kuisContent = document.getElementById('kuis-content');
const kuisScoreboard = document.getElementById('kuis-scoreboard');
const highscoreSpan = document.getElementById('highscore');
const kuisHistory = document.getElementById('kuis-history');
highscoreSpan.textContent = highscore;

function renderHistory() {
  kuisHistory.innerHTML = '<div class="kuis-history-title">History Skor:</div>';
  if (history.length === 0) {
    kuisHistory.innerHTML += '<div>Belum ada riwayat skor.</div>';
    return;
  }
  kuisHistory.innerHTML += `<div>Skor Tertinggi: <b>${Math.max(...history)}</b></div>`;
  kuisHistory.innerHTML += '<ol class="kuis-history-list">' + history.map(s => `<li>${s}</li>`).join('') + '</ol>';
}
renderHistory();

function getLoginUser() {
  let u = localStorage.getItem('loginUser');
  if (!u) return null;
  try { return JSON.parse(u); } catch { return null; }
}

function askUserNameIfNeeded() {
  const loginUser = getLoginUser();
  const namaDiv = document.getElementById('kuis-nama-user');
  if (loginUser) {
    userName = loginUser.namaDepan + ' ' + loginUser.namaMarga;
    namaDiv.style.display = 'block';
    namaDiv.innerHTML = `<b>Selamat datang, ${userName}!</b>`;
    return true;
  }
  userName = localStorage.getItem('kuisUserName') || '';
  namaDiv.style.display = 'block';
  namaDiv.innerHTML = `<label>Masukkan Nama Anda: <input id='input-nama-user' value='${userName}' style='padding:4px 10px;border-radius:5px;border:1px solid #bcd0d3;margin-left:8px;'></label>`;
  document.getElementById('start-btn').onclick = function() {
    const val = document.getElementById('input-nama-user').value.trim();
    if (!val) { alert('Nama harus diisi!'); return; }
    userName = val;
    localStorage.setItem('kuisUserName', userName);
    mulaiKuis();
  };
  return false;
}

function mulaiKuis() {
  level = 0;
  skor = 0;
  soalIndex = 0;
  kuisScoreboard.style.display = 'none';
  tampilSoal();
}

function tampilSoal() {
  kuisContent.innerHTML = '';
  const soalObj = soalKuis[level][soalIndex];
  const timerDiv = document.createElement('div');
  timerDiv.className = 'kuis-timer';
  timerDiv.id = 'timer';
  kuisContent.appendChild(timerDiv);
  timer = 30;
  timerDiv.textContent = `Sisa waktu: ${timer} detik`;
  timerInterval = setInterval(() => {
    timer--;
    timerDiv.textContent = `Sisa waktu: ${timer} detik`;
    if (timer <= 0) {
      clearInterval(timerInterval);
      pilihJawaban(-1); // timeout dianggap salah
    }
  }, 1000);

  const soalDiv = document.createElement('div');
  soalDiv.className = 'kuis-soal';
  soalDiv.textContent = `Level ${level+1}: ${soalObj.soal}`;
  kuisContent.appendChild(soalDiv);

  const pilihanDiv = document.createElement('div');
  pilihanDiv.className = 'kuis-pilihan';
  soalObj.pilihan.forEach((pil, idx) => {
    const btn = document.createElement('button');
    btn.textContent = pil;
    btn.onclick = () => pilihJawaban(idx);
    pilihanDiv.appendChild(btn);
  });
  kuisContent.appendChild(pilihanDiv);
}

function pilihJawaban(idx) {
  clearInterval(timerInterval);
  const benar = idx === soalKuis[level][soalIndex].jawaban;
  if (benar) skor += skorPerSoal;
  soalIndex++;
  if (soalIndex < soalKuis[level].length) {
    setTimeout(tampilSoal, 500);
  } else {
    // Level selesai
    if (level < soalKuis.length - 1) {
      tampilLevelSelesai(level+1);
    } else {
      tampilLevelSelesai('final');
    }
  }
}

function tampilLevelSelesai(lv) {
  kuisContent.innerHTML = '';
  let pesan = document.createElement('div');
  pesan.className = 'kuis-soal';
  if (lv === 'final') {
    pesan.innerHTML = `Level 5 selesai!<br>Skor kamu: <b>${skor-80}</b> dari 100.`;
    kuisContent.appendChild(pesan);
    if (skor-80 < 50) {
      const ulang = document.createElement('button');
      ulang.className = 'kuis-next-btn';
      ulang.textContent = 'Ulangi Level 1';
      ulang.onclick = () => {
        level = 0;
        skor = 0;
        soalIndex = 0;
        tampilSoal();
      };
      kuisContent.appendChild(document.createElement('br'));
      kuisContent.appendChild(ulang);
    } else {
      const selamat = document.createElement('div');
      selamat.className = 'kuis-soal';
      selamat.innerHTML = `<b>Selamat, ${userName}! Kamu telah menyelesaikan semua tantangan kuis budaya Karo! 🎉</b>`;
      kuisContent.appendChild(selamat);
      tampilScoreboard();
    }
  } else {
    pesan.innerHTML = `Level ${lv} selesai!<br>Skor kamu: <b>${skor-((lv-1)*100)}</b> dari 100.<br><br><button class='kuis-next-btn' id='next-level'>Lanjut ke Level ${lv+1}</button>`;
    kuisContent.appendChild(pesan);
    document.getElementById('next-level').onclick = () => {
      level = lv;
      soalIndex = 0;
      tampilSoal();
    };
  }
}

function tampilScoreboard() {
  kuisScoreboard.style.display = 'block';
  let skorAkhir = skor;
  if (skorAkhir > highscore) {
    highscore = skorAkhir;
    localStorage.setItem('kuisHighscore', highscore);
  }
  history.push(skorAkhir);
  localStorage.setItem('kuisHistory', JSON.stringify(history));
  highscoreSpan.textContent = highscore;
  renderHistory();
}

// --- Animasi background warna dan daun ---
function randomColor() {
  const colors = ['#f7b731','#eb3b5a','#20bf6b','#3867d6','#8854d0','#fd9644','#fed330','#26de81','#2d98da','#a55eea'];
  return colors[Math.floor(Math.random()*colors.length)];
}
function createBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'kuis-bubble';
  const size = Math.random()*32+24;
  bubble.style.width = bubble.style.height = size+'px';
  bubble.style.background = randomColor();
  bubble.style.borderRadius = '50%';
  bubble.style.left = Math.random()*window.innerWidth+'px';
  bubble.style.top = '-40px';
  bubble.style.opacity = 0.3+Math.random()*0.5;
  document.getElementById('kuis-animasi').appendChild(bubble);
  let speed = 1+Math.random()*1.5;
  let pos = -40;
  function animate() {
    pos += speed;
    bubble.style.top = pos+'px';
    if (pos < window.innerHeight+40) {
      requestAnimationFrame(animate);
    } else {
      bubble.remove();
    }
  }
  animate();
}
function createLeaf() {
  const leaf = document.createElement('div');
  leaf.className = 'kuis-leaf';
  leaf.innerHTML = '🍃';
  const size = Math.random()*24+18;
  leaf.style.fontSize = size+'px';
  leaf.style.left = Math.random()*window.innerWidth+'px';
  leaf.style.top = '-40px';
  leaf.style.opacity = 0.5+Math.random()*0.5;
  document.getElementById('kuis-animasi').appendChild(leaf);
  let speed = 1+Math.random()*1.2;
  let pos = -40;
  let sway = Math.random()*2+1;
  let phase = Math.random()*Math.PI*2;
  function animate() {
    pos += speed;
    leaf.style.top = pos+'px';
    leaf.style.left = (parseFloat(leaf.style.left)+Math.sin(pos/18+phase)*sway)+'px';
    if (pos < window.innerHeight+40) {
      requestAnimationFrame(animate);
    } else {
      leaf.remove();
    }
  }
  animate();
}
setInterval(()=>{
  if (Math.random()<0.7) createBubble();
  if (Math.random()<0.5) createLeaf();
}, 600);

document.getElementById('start-btn').onclick = function() {
  if (!askUserNameIfNeeded()) return;
  mulaiKuis();
}; 