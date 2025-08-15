import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import News from './Components/News';

function App() {
  const [category, setCategory] = useState("general");

  return (
    <Router>
      <Navbar onCategoryChange={setCategory} />
      <News key={category} category={category} />
    </Router>
  );
}

export default App;
