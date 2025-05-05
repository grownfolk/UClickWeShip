let provider;
let signer;

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

document.getElementById('pullButton').addEventListener('click', async () => {
  if (!signer) {
    alert("Connect wallet first.");
    return;
  }

  // Placeholder for randomness
  const pulledAmount = Math.floor(Math.random() * 300) + 1;
  document.getElementById('result').textContent = `You pulled: $GF-${pulledAmount}`;

  // TODO: Add mint logic here
});
