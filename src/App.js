import React, { useState } from "react";
import CryptoJS from "crypto-js";
import "./App.css";


function App() {
  const [plainText, setPlainText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const handleEncrypt = () => {
    const encrypted = CryptoJS.AES.encrypt(plainText, secretKey).toString();
    setEncryptedText(encrypted);
  };

  const handleDecrypt = () => {
    const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    setDecryptedText(originalText);
  };

  return (  
    <div class="header-container">
    <h1>Text Encryption and Decryption</h1>

    <div className="container">
    
      <div className="encryption">
        <h2>Text Encryption</h2>
        <textarea
          placeholder="Enter plain text to be Encrypted"
          value={plainText}
          onChange={(e) => setPlainText(e.target.value)}
        ></textarea>
       
        <input
          type="text"
          placeholder="Enter secret key"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
        />
        <button onClick={handleEncrypt}>Encrypt</button>
        <textarea
          placeholder="Encrypted Output"
          value={encryptedText}
          readOnly
        ></textarea>
      </div>

      <div className="decryption">
        <h2>Text Decryption</h2>
        <textarea
          placeholder="Enter text to be Decrypted"
          value={encryptedText}
          onChange={(e) => setEncryptedText(e.target.value)}
        ></textarea>
     
         
        <input
          type="text"
          placeholder="Enter secret key"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
        />
        <button onClick={handleDecrypt}>Decrypt</button>
        <textarea
          placeholder="Decrypted Text"
          value={decryptedText}
          readOnly
        ></textarea>
      </div>
    </div></div>
  );
}

export default App;
