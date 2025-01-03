import React, { useState } from "react";

function LocalStorage() {
  const [secret, setSecret] = useState("");

  const handleStoreSecret = () => {
    localStorage.setItem("secret", secret);
    setSecret(""); // Limpia el valor del input
  };

  return (
    <div>
      <label htmlFor="secret-input">Secret</label>
      <input
        id="secret-input"
        type="password"
        placeholder="Enter your secret…"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
      />
      <button onClick={handleStoreSecret}>Store Secret</button>
    </div>
  );
}

export default LocalStorage;
