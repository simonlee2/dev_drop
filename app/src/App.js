import React, { useEffect, useState } from 'react';
import './App.css';
import twitterLogo from './assets/twitter-logo.svg';
import CandyMachine from './CandyMachine';

// Constants
const TWITTER_HANDLE = 'simonlee_dev';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  // State
  const [walletAddress, setWalletAddress] = useState(null);

  // Actions
  const checkIfWalletIsConnected = async() => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log("Phantom wallet found!");

          // If user has previously authorized access, this will connect us with
          // the user's wallet. Otherwise, this would generate an error and the 
          // user needs to click the connect button to authroize access b
          const response = await solana.connect({ onlyIfTrusted: true });
          const publicKey = response.publicKey.toString();
          console.log('Connected with Public Key:', publicKey);
          setWalletAddress(publicKey);
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };

    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      const publicKey = response.publicKey.toString();
      console.log('Connected with Public Key:', publicKey);
      setWalletAddress(publicKey);
    }
  };

  // UI
  const renderNotConnectedContainer = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">💻 Dev Drop</p>
          <p className="sub-text">NFT drop machine with fair mint</p>
          { !walletAddress && renderNotConnectedContainer() }
        </div>
        { walletAddress && <CandyMachine walletAddress={window.solana} /> }
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
