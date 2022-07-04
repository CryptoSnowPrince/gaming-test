/*
 * Gaming Arcade Frontend
 * Copyright (C) 2022, Oğuzhan Eroğlu <rohanrhu2@gmail.com> (https://oguzhaneroglu.com)
 * Copyright (C) 2022, Zelta Tech (https://zeltatech.com)
 */

import Web3 from "web3";
import { ethers, providers } from "ethers";

import WalletConnectProvider from "@walletconnect/web3-provider";

const Auth = {};
Auth.provider = null;
Auth.web3 = null;
Auth.web3Provider = null;
Auth.accounts = [];

// Auth.init = async () => {
//   await provider.enable();
//   const web3Provider = new ethers.providers.Web3Provider(provider);
//   await setProvider(provider);

//   const newSigner = web3Provider.getSigner();

//   await setSigner(newSigner);
//   console.log("New Signer: " + newSigner.getAddress());

//   Auth.provider = new WalletConnectProvider({
//       infuraId: "f6400b02eca149fd96a00882daa79e10",
//   });

// Auth.provider.on("accountsChanged", (accounts) => {
//     console.log('accounts:', accounts);
//     Auth.accounts = accounts;
// });

// Auth.provider.on("chainChanged", (chainId) => {
//     console.log('chainId:', chainId);
// });

// Auth.provider.on("disconnect", (code, reason) => {
//     console.log('disconnect:', code, reason);
// });

// Auth.provider.on("connect", (error) => {
//     console.log('connect:', error);
// });

//   Auth.web3 = new Web3(Auth.provider);
//   Auth.web3Provider = new providers.Web3Provider(Auth.provider);
// };

Auth.init = async () => {
  //   Auth.provider = new WalletConnectProvider({
  //     infuraId: "f6400b02eca149fd96a00882daa79e10",
  //   });
  Auth.provider = new WalletConnectProvider({
    infuraId: "f6400b02eca149fd96a00882daa79e10",
    qrcodeModalOptions: {
      mobileLinks: [
        "rainbow",
        "metamask",
        "argent",
        "trust",
        "imtoken",
        "pillar",
      ],
    },
  });
  //   const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`);
  // https://rinkeby.infura.io/v3/f6400b02eca149fd96a00882daa79e10
  // new WalletConnectProvider({
  //     infuraId: "f6400b02eca149fd96a00882daa79e10",
  // });

  Auth.provider.on("accountsChanged", (accounts) => {
    console.log("accounts:", accounts);
    Auth.accounts = accounts;
  });

  Auth.provider.on("chainChanged", (chainId) => {
    console.log("chainId:", chainId);
  });

  Auth.provider.on("disconnect", (code, reason) => {
    console.log("disconnect:", code, reason);
  });
  Auth.provider.enable();
  Auth.web3Provider = new providers.Web3Provider(Auth.provider);

  Auth.signer = await Auth.web3Provider.getSigner();
  console.log("===",Auth.provider);
  console.log("----",Auth.signer.getAddress());
};

Auth.login = async () => {
  return Auth.provider.enable();
};

Auth.logout = async () => {
  await Auth.provider.disconnect();
  window.location.reload();
};

// Auth.doPayment = async ({ether, addr, data}) => {
Auth.doPayment = async () => {
  let abi = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "num",
          type: "uint256",
        },
      ],
      name: "store",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "retrieve",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  let contract = new ethers.Contract(
    "0x9D6f767Ae375378abA409Bd7FCf2BC560D77bcE6",
    abi,
    Auth.signer
  );
  const options = {
    value: ethers.utils.parseEther("0.003".toString()),
  };
  //   setLoading(true);

  console.log(Auth.signer.getAddress());
  //   console.log(contract.owner());
  try {
    let resp = await contract.store(10);
    // if ((await signer.getAddress()) === (await contract.owner())) {
    //   await contract.mintBatch(token);
    // } else {
    //   await contract.mintBatch(token, options);
    // }
    // setTransactionStatus(true);
    console.log(resp);
  } catch (error) {
    console.log(error);
    // setTransactionStatus(false);
  } finally {
    // setLoading(false);
  }

  //   console.log(ethers.utils.parseEther("0.025")._hex);
  //   window.ethereum
  //     .request({
  //       method: "eth_sendTransaction",
  //       params: [
  //         {
  //           from: Auth.accounts[0],
  //           to: "0x7770Bb3E99FC4917729C4647AEc0a3dC9a8D4F55",
  //           // value: '0x29a2241af62c0000',
  //           value: ethers.utils.parseEther("0.005")._hex,
  //           gasPrice: "0x09184e72a000",
  //           gas: "0x2710",
  //         },
  //       ],
  //     })
  //     .then((txHash) => console.log(txHash))
  //     .catch((error) => console.error(error));

  // console.log('doPayment:', data);
  // console.log(Auth.accounts);
  // console.log(window.ethereum)

  // const INFURA_ID = '96da228a7a764ba79089e5914549d52d';
  // const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`);

  //   const provider = new WalletConnectProvider({
  //     infuraId: "f6400b02eca149fd96a00882daa79e10",
  //   });

  // const senderAcc = ethereum.selectedAddress;
  //   const recipientAcc = "0x9777588843A7C41430bB06f127A87b3062bfD6b4"; // Recipient

  // const privateKey1 = '0d9bdeeae892eb9367ad1a808be112c1bb2cfde42b9d27f37de21d6fa49487da' // Sender private key
  // const wallet = new ethers.Wallet(privateKey1, provider);

  // const senderBalanceBefore = await provider.getBalance(senderAcc)
  // const recieverBalanceBefore = await provider.getBalance(recipientAcc)

  // console.log(`\nSender balance before ${senderBalanceBefore}`)
  // console.log(`Reciver balance before: ${recieverBalanceBefore}\n`)
  // console.log(`wallet:`, wallet)

  //   const tx = {
  //     // from: "0x15aBe6070B63037b901E25e065E096aa1AA55625",
  //     to: recipientAcc,
  //     value: ethers.utils.parseEther("0.025"),
  //   };

  //   const txHash = await Web3.eth.sendTransaction(tx);

  //   await txHash.wait();
  //   console.log(txHash);

  // const senderBalanceAfter = await provider.getBalance(senderAcc)
  // const recieverBalanceAfter = await provider.getBalance(recipientAcc)

  // console.log(`\nSender balance after: ${senderBalanceAfter}`)
  // console.log(`Reciver balance after: ${recieverBalanceAfter}\n`)

  // const tx = {
  //     from: Auth.accounts[0],
  //     to: '0x7770Bb3E99FC4917729C4647AEc0a3dC9a8D4F55',
  //     value: ethers.utils.parseEther("0.025"),
  //     // value: ethers.utils.parseEther('0.000000000000000000'),
  //     // data: Web3.utils.toHex(JSON.stringify(data))
  // };
  // try {
  //     const tx_hash = await Auth.web3.eth.sendTransaction(tx);
  //     window.game_interface('payment_sent', {
  //         txid: tx_hash.transactionHash
  //     });
  // } catch (error) {
  //     window.game_interface('payment_rejected');
  // }
};

Auth.connect = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      Auth.accounts = accounts;
      return true;
    } catch (error) {
      window.alert("User denied account access");
      return false;
    }
  } else {
    window.alert("Install Wallet to use this feature.");
    return false;
  }
};

Auth.disconnect = async () => {
  if (window.ethereum) {
    try {
      window.ethereum.disconnect();

      return true;
    } catch (error) {
      window.alert("User denied account access");
      return false;
    }
  } else {
    window.alert("Install Wallet to use this feature.");
    return false;
  }
};

window.Auth = Auth;

export default Auth;
