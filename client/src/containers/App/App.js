import React from "react";
import "./App.css";
import MemeGenerator from "../../components/MemeGenerator/MemeGenerator";
import MemeFeed from  "../../components/MemeFeed/MemeFeed";

function App() {
  return (
    <div className="container App">
        <MemeGenerator />
        <MemeFeed />
    </div>
  );
}

export default App;
