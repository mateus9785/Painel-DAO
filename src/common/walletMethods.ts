
async function connectMetamask() {
    return await window.ethereum.request({ method: 'eth_requestAccounts' });
}

async function switchRskChain(){
    return await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x1e' }],
    });
}

async function addRskChain() {
    return await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
            {
                chainId: '0x1f',
                chainName: 'RSK Testnet',
                nativeCurrency: {
                    name: 'Test RSK BTC',
                    symbol: 'tRBTC',
                    decimals: 18
                },
                rpcUrls: ['https://public-node.testnet.rsk.co'],
                blockExplorerUrls: ['https://explorer.testnet.rsk.co']
            },
        ],
    });
}

async function sendTransaction(value: string) {
    const transactionParameters = {
        nonce: '0x00',
        to: '0x0000000000000000000000000000000000000000',
        from: window.ethereum.selectedAddress,
        value,
        data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
      };
  
    return await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    });
}

async function getBalance() {
    await window.ethereum.request({ 
        id: 10,
        method: 'eth_getBalance',
        params: ["0xdc6bad79dab7ea733098f66f6c6f9dd008da3258", 'latest'],
    });
}

export { switchRskChain, addRskChain, connectMetamask, sendTransaction, getBalance }