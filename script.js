// Music toggle
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let playing = false;

musicBtn.onclick = () => {
  playing ? music.pause() : music.play();
  playing = !playing;
};

// Countdown
const countdown = document.getElementById("countdown");
const target = new Date("2026-02-14");

setInterval(() => {
  const now = new Date();
  const diff = target - now;
  if (diff <= 0) {
    countdown.textContent = "It’s Valentine’s Day ❤️";
    return;
  }
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdown.textContent = `${d} days to go 💘`;
}, 1000);

// 🔐 Password unlock (Liverpool player)
const PASSWORD = "hugo ekitike"; 
// change to: "van dijk", "trent", "mac allister", etc (lowercase)

const input = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const letter = document.getElementById("letterText");
const silhouette = document.getElementById("playerSilhouette");
const realPlayer = document.getElementById("playerReal");

unlockBtn.onclick = () => {
  if (input.value.toLowerCase().trim() === PASSWORD) {
    letter.classList.remove("hidden");
    silhouette.classList.add("hidden");
    realPlayer.classList.remove("hidden");
  } else {
    input.value = "";
    input.placeholder = "Nope… try again 🧍🏾‍♂️";
  }
};

// No button escape
const noBtn = document.getElementById("noBtn");
noBtn.onmouseenter = () => {
  noBtn.style.transform = `translate(${Math.random()*200-100}px, ${Math.random()*100-50}px)`;
};

// Yes hearts
document.getElementById("yesBtn").onclick = () => {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.textContent = "❤️";
    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = "24px";
    document.body.appendChild(heart);

    heart.animate([
      { transform: "translate(0,0)", opacity: 1 },
      { transform: `translate(${Math.random()*300-150}px, ${Math.random()*-300}px)`, opacity: 0 }
    ], { duration: 1500 });

    setTimeout(() => heart.remove(), 1500);
  }
};

document.querySelectorAll(".story-buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    const popup = document.getElementById(`popup-${btn.dataset.popup}`);
    popup.classList.remove("hidden");
  });
});

document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".popup-overlay").classList.add("hidden");
  });
});