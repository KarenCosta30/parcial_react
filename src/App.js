import React from "react";
import Card from "./Card";
import React, { useState } from "react";
function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input1.trim().length < 3 || input2.length < 6) {
      setError("Por favor chequea que la información sea correcta");
    } else {
      setError("");
    }
  };

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa algo (mín. 3 caracteres)"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Ingresa algo (mín. 6 caracteres)"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
      {error && <div>{error}</div>}
      {!error && (input1 || input2) && (
        <Card title={input1} description={input2} />
      )}
    </div>
  );
}

export default App; //karen 
