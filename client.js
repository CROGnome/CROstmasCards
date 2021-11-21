window.onload = function () {
  console.log("Client-side code running");

  document.getElementById("mint").onclick = function mint() {
    mintbetternft();
  };

  document.getElementById("connect wallet").onclick = function connect() {
    connectWallet();
  };

  document.getElementById("show nft").onclick = function show() {
    getNFTsOfUser();
  };

  document.getElementById("send").onclick = function show() {
    transferNFT();
  }
};
var walletID = "x";
var theTransactionHash = "";
var abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseExtension",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxMintAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_mintAmount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_state",
				"type": "bool"
			}
		],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "price",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "sendtoken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newBaseURI",
				"type": "string"
			}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newmaxMintAmount",
				"type": "uint256"
			}
		],
		"name": "setMaxMintAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newMaxSupply",
				"type": "uint256"
			}
		],
		"name": "setMaxSupply",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newPrice",
				"type": "uint256"
			}
		],
		"name": "setPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "walletOfOwner",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
];

var abi_gift = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenid",
				"type": "uint256"
			}
		],
		"name": "isCardWrapped",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_state",
				"type": "bool"
			}
		],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenid",
				"type": "uint256"
			}
		],
		"name": "unwrapCRO",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "wrapCRO",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
];

var address = "0xE8D59fB0259F440F5f17cE29975F98D728614f18";
var address_gift = "0xcd3381D175ab887040e7749aF51fB45ec1e0d24f";

var networkChain = 25;
var getJSON = function (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "json";
  xhr.onload = function () {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

function connectWallet() {
	if (window.ethereum) {
	  window.web3 = new Web3(ethereum);
	  ethereum
		.enable()
		.then(async () => {
			let chain = await web3.eth.getChainId();
			console.log(chain);
			if (chain != networkChain) {
				console.log( "Please use Cronos network");
				return;
			}
		  console.log("Ethereum enabled");
		  web3.eth.getAccounts(function (err, acc) {
			if (err != null) {
			  self.setStatus("There was an error fetching your accounts");
			  return;
			}
			if (acc.length > 0) {
			  console.log(acc);
			  walletID = acc[0];
			  document.getElementById("connect wallet").innerHTML = acc[0].substring(0,6) + "...";
			  return;
			}
		  });
		})
		.catch(() => {
		  console.warn("User didn't allow access to accounts.");
		  document.getElementById("demo").innerHTML = "CONNECTION REJECTED!";
		  waitLogin();
		});
	} else {
	  console.log("Non-Ethereum browser detected. You should consider installing MetaMask.");
	  document.getElementById("demo").innerHTML = "METAMASK NOT FOUND! PLEASE INSTALL OR USE A DAPP!";
	}
  }


async function mintbetternft() {
  let tokenAmount = document.getElementById("mintAmount").value
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    ethereum
      .enable()
      .then(() => {
        console.log("Ethereum enabled");
        web3.eth.getAccounts(function (err, acc) {
          if (err != null) {
            self.setStatus("There was an error fetching your accounts");
            return;
          }
          if (acc.length > 0) {
            var contract = new web3.eth.Contract(abi, address);
            let contractFunctionData = contract.methods.mint(acc[0], tokenAmount).encodeABI();
            var price = 0;
			var priceInt;
            contract.methods.getPrice().call((err, result) => {
              if (!err) {
                price = result;
				price = web3.utils.fromWei(price, 'ether');
				priceInt = parseFloat(price);
				priceInt *= tokenAmount;
				price = web3.utils.toWei(priceInt.toString(), 'ether');
                web3.eth.sendTransaction(
                  {
                    from: acc[0],
                    to: address,
                    value: price,
                    data: contractFunctionData,
                  }).on('receipt', function(receipt) {
                    console.log(web3.utils.hexToNumber(receipt.logs[0].topics[3]));
                  });
              }
            });
          }
        });
      })
      .catch(() => {
        console.warn("User didn't allow access to accounts.");
        waitLogin();
      });
  } else {
    console.log("ERROR.");
  }
}


function getNFTsOfUser() {
  // DELETE ALREADY SHOWING NFTs
  const myNode = document.getElementById("placetoshownfts");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

  var contract = new web3.eth.Contract(abi, address);
  var contractGift = new web3.eth.Contract(abi_gift, address_gift);
  contract.methods.balanceOf(walletID).call((err, result) => {
    if (!err) {
      numerOfTokensUserHas = result;
      arrayOfTokensUserHas = [];
      for (let i = 0; i < result; i++) {
        contract.methods.tokenOfOwnerByIndex(walletID, i).call((err, result) => {
          arrayOfTokensUserHas.push(result);

          contract.methods.tokenURI(result).call((err, result) => {
            console.log(result);
			var gnomeDiv = document.createElement("div");
			var giftInput = document.createElement("input");
			var giftButton = document.createElement("button");

			var divMinor = document.createElement("div");
			var giftForm = document.createElement("form");

			giftForm.setAttribute("class","u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form");
			divMinor.setAttribute("class","u-form u-form-2");
			giftInput.setAttribute("placeholder","Amount of CRO");
			giftButton.setAttribute("class", "u-border-2 u-border-custom-color-1 u-btn u-btn-submit u-button-style u-custom-font u-font-lobster u-gradient u-hover-black u-none u-text-custom-color-2 u-btn-1")
			giftInput.setAttribute("class", "u-border-2 u-border-custom-color-1 u-input u-input-rectangle u-text-custom-color-2 u-white u-input-1")
			//gnomeDiv.setAttribute("class", "u-skelly-div");          
            getJSON(result, function(err, data) {   
			  gnomeDiv.setAttribute("id", `div-${data.id}`);
			  giftButton.setAttribute("id", `button-${data.id}`)
			  giftInput.setAttribute("id", `input-${data.id}`)
			  divMinor.setAttribute("id", `divm-${data.id}`)
			  giftForm.setAttribute("id", `form-${data.id}`)
			  document.getElementById("placetoshownfts").appendChild(gnomeDiv);
			  var theURL = data.image;
              var img = document.createElement("img");
			  var tokenNumber = document.createElement("div");	
              var lineBreak = document.createElement("br");
			  tokenNumber.setAttribute("class", "u-border-2 u-border-custom-color-1 u-btn u-btn-submit u-button-style u-custom-font u-font-lobster u-gradient u-hover-black u-none u-text-custom-color-2 u-btn-1")
              tokenNumber.innerHTML = data.id;
              img.src = theURL;
              img.class = "nftimages";
              img.style = "width: 40%;max-width: 1000px;height: 40%;display: block;margin-left: auto;margin-right: auto;";
			  tokenNumber.style = "background-color:#ffffff"	
			  document.getElementById(`div-${data.id}`).appendChild(tokenNumber);
              document.getElementById(`div-${data.id}`).appendChild(img);
			  
              //document.getElementById(`div-${data.id}`).appendChild(lineBreak);

			  console.log(data.id);
			  contractGift.methods.isCardWrapped(walletID, data.id.toString()).call((err, result) => {
				  document.getElementById(`div-${data.id}`).appendChild(divMinor);
				  document.getElementById(`divm-${data.id}`).appendChild(giftForm);
				  console.log(result)
				  console.log(err)
				  if (result == true) {
					giftButton.innerHTML = "Unwrap CRO" 
					giftButton.setAttribute("onclick", `unwrap(${data.id})`);
					document.getElementById(`form-${data.id}`).appendChild(giftButton);

				  } else {
					giftButton.innerHTML = "Wrap CRO"  
					giftButton.setAttribute("onclick", `wrap(${data.id})`);
					document.getElementById(`form-${data.id}`).appendChild(giftButton);
					document.getElementById(`form-${data.id}`).appendChild(giftInput);
					
				  }
			  })
            });
          });
          
        });
      }
    } else document.getElementById("numberoftokens").innerHTML = err;
  });
}


function transferNFT(){
	var contract = new web3.eth.Contract(abi, address);
	let tokenid = document.getElementById("_tokenid").value
	let toaddress = document.getElementById("_address").value
	console.log(typeof parseInt(tokenid))
	console.log(typeof toaddress)
	console.log(typeof walletID)
	
	console.log( parseInt(tokenid))
	console.log( toaddress)
	console.log( walletID)
	contract.methods.sendtoken(walletID, toaddress, parseInt(tokenid)).send({ from: walletID}).on('transactionHash', function(hash){
		console.log(hash);
	}).on('confirmation', function(confirmationNumber, receipt){
		console.log(confirmationNumber);
	}).on('receipt', function(receipt){
		console.log(receipt);
	}).on('error', function(err, receipt){
		console.log(err);
	})
}

function unwrap(tokenId) {
	if (window.ethereum) {
		window.web3 = new Web3(ethereum);
		ethereum
		  .enable()
		  .then(() => {
			console.log("Ethereum enabled");
			web3.eth.getAccounts(function (err, acc) {
			  if (err != null) {
				self.setStatus("There was an error fetching your accounts");
				return;
			  }
			  if (acc.length > 0) {
				var contractGift = new web3.eth.Contract(abi_gift, address_gift);
				let contractFunctionData = contractGift.methods.unwrapCRO(tokenId).encodeABI();
				var price = 0;
				
				  if (!err) {
					web3.eth.sendTransaction(
					  {
						from: acc[0],
						to: address_gift,
						value: price,
						data: contractFunctionData,
					  }).on('receipt', function(receipt) {
						console.log(web3.utils.hexToNumber(receipt.logs[0].topics[3]));
					  });
				  } 			
			  }
			});
		  })
		  .catch(() => {
			console.warn("User didn't allow access to accounts.");
			waitLogin();
		  });
	  } else {
		console.log("ERROR.");
	  }
}

function wrap(tokenId) {
	let croGift = document.getElementById(`input-${tokenId}`).value
	if (window.ethereum) {
		window.web3 = new Web3(ethereum);
		ethereum
		  .enable()
		  .then(() => {
			console.log("Ethereum enabled");
			web3.eth.getAccounts(function (err, acc) {
			  if (err != null) {
				self.setStatus("There was an error fetching your accounts");
				return;
			  }
			  if (acc.length > 0) {
				var contractGift = new web3.eth.Contract(abi_gift, address_gift);
				let contractFunctionData = contractGift.methods.wrapCRO(tokenId, croGift).encodeABI();
				var price = 0;
				
				  if (!err) {
					price = web3.utils.toWei(croGift, 'ether');
					console.log(price)
					web3.eth.sendTransaction(
					  {
						from: acc[0],
						to: address_gift,
						value: price,
						data: contractFunctionData,
					  }).on('receipt', function(receipt) {
						console.log(web3.utils.hexToNumber(receipt.logs[0].topics[3]));
					  });
				  } 			
			  }
			});
		  })
		  .catch(() => {
			console.warn("User didn't allow access to accounts.");
			waitLogin();
		  });
	  } else {
		console.log("ERROR.");
	  }
}


