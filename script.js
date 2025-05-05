const symbols = ["GF", "YF", "FLAG", "?", "CAP", "LOCK"];
let provider, signer;

function spinReels() {
  const r1 = getRandomSymbol();
  const r2 = getRandomSymbol();
  const r3 = getRandomSymbol();

  document.getElementById('reel1').textContent = r1;
  document.getElementById('reel2').textContent = r2;
  document.getElementById('reel3').textContent = r3;

  const match = (r1 === r2 && r2 === r3);
  const resultText = match ? `JACKPOT! 3x ${r1}` : `Pulled: ${r1}, ${r2}, ${r3}`;
  document.getElementById('result').textContent = resultText;

  document.getElementById('mintButton').style.display = match ? 'block' : 'none';
}

function getRandomSymbol() {
  const idx = Math.floor(Math.random() * symbols.length);
  return symbols[idx];
}

document.getElementById('pullButton').addEventListener('click', spinReels);

document.getElementById('connectWallet').addEventListener('click', async () => {
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    const address = await signer.getAddress();
    document.getElementById('walletDisplay').textContent = `Connected: ${address}`;
  } else {
    alert("Please install MetaMask.");
  }
});

function mintNFT() {
  alert("Minting logic will go here.");
}
