let score = 0;
let walletConnected = false;
let userWallet = "";
let canSpin = true;

// Audio assets
const spinSound = new Audio("assets/spin.wav");
const winSound = new Audio("assets/win.wav");
const claimSound = new Audio("assets/claim.wav");

const symbols = [
  { name: "UClick", image: "assets/uclick.png" },
  { name: "YoungFolk", image: "assets/youngfolk.png" },
  { name: "GrownFolkMap", image: "assets/gfmap.png" },
  { name: "GrownFolkNeon", image: "assets/gfneon.png" },
  { name: "USAFlag", image: "assets/usaflag.png" },
  { name: "GoldSeal", image: "assets/goldseal.png" }
];

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function pullSlot() {
  if (!canSpin) return;

  canSpin = false;
  setTimeout(() => canSpin = true, 5000); // 5s cooldown

  spinSound.play();

  const slot1 = getRandomSymbol();
  const slot2 = getRandomSymbol();
  const slot3 = getRandomSymbol();

  animateReel("slot1", slot1);
  animateReel("slot2", slot2);
  animateReel("slot3", slot3);

  let resultText = document.getElementById("resultText");

  if (slot1.name === slot2.name && slot2.name === slot3.name) {
    winSound.play();
    score += 10;
    resultText.innerText = `JACKPOT! 3x ${slot1.name}`;
    document.getElementById("claimBtn").style.display = "inline-block";

    // Bonus multiplier for GoldSeal
    if (slot1.name === "GoldSeal") {
      score += 20;
      resultText.innerText += " + GOLD MULTIPLIER BONUS!";
    }
  } else {
    score += 1;
    resultText.innerText = `Pulled: ${slot1.name}, ${slot2.name}, ${slot3.name}`;
    document.getElementById("claimBtn").style.display = "none";
  }

  document.getElementById("score").innerText = "Score: " + score;
}

function animateReel(slotId, symbol) {
  const slot = document.getElementById(slotId);
  slot.innerHTML = "";
  const img = document.createElement("img");
  img.src = symbol.image;
  img.alt = symbol.name;
  img.style.opacity = 0;
  img.style.transform = "scale(1.5)";
  slot.appendChild(img);

  setTimeout(() => {
    img.style.transition = "all 0.4s ease";
    img.style.opacity = 1;
    img.style.transform = "scale(1)";
  }, 50);
}

function connectWallet() {
  userWallet = "0xFakeWallet123";
  walletConnected = true;
  alert("Wallet Connected: " + userWallet);
}

document.getElementById("claimBtn").addEventListener("click", function () {
  if (!walletConnected) {
    alert("Please connect wallet first.");
    return;
  }
  claimSound.play();
  alert("Reward claimed to wallet: " + userWallet);
  document.getElementById("claimBtn").style.display = "none";
});
