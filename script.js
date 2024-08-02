// Daftar kata dan petunjuknya
const words = [
  { word: "apel", clue: "Buah yang sering berwarna merah atau hijau" },
  { word: "pisang", clue: "Buah yang berwarna kuning dan melengkung" },
  { word: "jeruk", clue: "Buah yang identik dengan vitamin C" },
  { word: "mangga", clue: "Buah yang berwarna hijau, kuning, atau oranye" },
  { word: "anggur", clue: "Buah yang sering dijadikan minuman" }
];

let currentWordIndex = 0;
let score = 0;
let attempts = 3;

// Menampilkan petunjuk pertama
document.querySelector(".clue").innerText = `Petunjuk: ${words[currentWordIndex].clue}`;
document.querySelector(".score").innerText = `Skor: ${score}`;
document.querySelector(".attempts").innerText = `Kesempatan: ${attempts}`;

function checkGuess() {
  const guessInput = document.getElementById("guess");
  const guess = guessInput.value.toLowerCase();
  const currentWord = words[currentWordIndex].word.toLowerCase();

  if (guess === currentWord) {
    score++;
    document.querySelector(".message").innerText = "Benar! Lanjut ke kata berikutnya.";
    guessInput.value = "";
    nextWord();
  } else {
    attempts--;
    document.querySelector(".message").innerText = `Salah! Kamu punya ${attempts} kesempatan lagi.`;
    if (attempts === 0) {
      gameOver();
    }
  }

  document.querySelector(".score").innerText = `Skor: ${score}`;
  document.querySelector(".attempts").innerText = `Kesempatan: ${attempts}`;
}

function nextWord() {
  currentWordIndex++;
  if (currentWordIndex < words.length) {
    document.querySelector(".clue").innerText = `Petunjuk: ${words[currentWordIndex].clue}`;
    attempts = 3;
    document.querySelector(".attempts").innerText = `Kesempatan: ${attempts}`;
  } else {
    document.querySelector(".message").innerText = "Kamu telah menyelesaikan semua kata!";
    document.getElementById("guess").disabled = true;
    document.querySelector("button").disabled = true;
  }
}

function gameOver() {
  document.querySelector(".message").innerText = "Game Over! Kamu telah kehabisan kesempatan.";
  document.getElementById("guess").disabled = true;
  document.querySelector("button").disabled = true;
}
