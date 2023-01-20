import { Header } from "./Components/Header/Header";
import React, { useEffect } from "react";
import { useState } from "react";
import { HomePage } from "./Components/HomePage/HomePage";


function App() {
  const [isDarkTheme, setDarkTheme] = useState(true);
  const Theme = isDarkTheme ? "Dark" : "Light";
  useEffect(() => {
    document.body.classList.add(Theme);
    return () => {
      document.body.classList.remove(Theme);
    };
  }, [Theme]);

  return (
    <div className="container">
      <Header setDarkTheme={setDarkTheme} isDarkTheme={isDarkTheme} />
      <HomePage isDarkTheme={isDarkTheme} />
    </div>
  );
}




export default App;
