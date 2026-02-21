import { useState, useEffect } from "react";

function App() {
 const quotes = [
  "Success is built daily.",
  "Discipline beats motivation.",
  "Small steps every day.",
  "Stay consistent.",
  "Dream big, work bigger.",
  "Believe you can and you're halfway there.",
  "Failure is the stepping stone to success.",
  "Push yourself, because no one else will.",
  "Every day is a new opportunity.",
  "Focus on progress, not perfection.",
  "Helping others gives you real happiness."
  
];


  const [darkMode, setDarkMode] = useState(false);
  const [currentQuote, setCurrentQuote] = useState("");

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  const appStyle = {
    backgroundColor: darkMode ? "#060505" : "#f4f4f4",
    color: darkMode ? "white" : "black",
    minHeight: "100vh",
    padding: "40px",
    textAlign: "center",
    transition: "0.3s"
  };

  return (
    <div style={appStyle}>
      <h1>Quote Generator</h1>

      <h2>{currentQuote}</h2>

      <button onClick={generateQuote}>New Quote</button>

      <br /><br />

      <button onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
</button>


      <p>Total Quotes: {quotes.length}</p>
    </div>
  );
}

export default App;
