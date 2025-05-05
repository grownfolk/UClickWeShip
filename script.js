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
  const slot1 = getRandomSymbol();
  const slot2 = getRandomSymbol();
  const slot3 = getRandomSymbol();

  document.getElementById("slot1").innerHTML = `<img src="${slot1.image}" alt="${slot1.name}" width="100" height="100"/>`;
  document.getElementById("slot2").innerHTML = `<img src="${slot2.image}" alt="${slot2.name}" width="100" height="100"/>`;
  document.getElementById("slot3").innerHTML = `<img src="${slot3.image}" alt="${slot3.name}" width="100" height="100"/>`;

  const resultText = document.getElementById("resultText");
  if (slot1.name === slot2.name && slot2.name === slot3.name) {
    resultText.innerText = `JACKPOT! 3x ${slot1.name}`;
  } else {
    resultText.innerText = `Pulled: ${slot1.name}, ${slot2.name}, ${slot3.name}`;
  }
}
