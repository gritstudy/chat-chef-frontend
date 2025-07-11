import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Info from "./pages/Info";
function App() {
  // logic
  const [ingredientList, setIngredientList] = useState([]);

  const handleIngredientList = (data) => {
    console.log("🚀 ~ App ~ data:", data);
    setIngredientList(data);
  };

  // view
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/info"
        element={<Info sendIngredientList={handleIngredientList} />}
      />
      <Route path="/chat" element={<Chat ingredientList={ingredientList} />} />
    </Routes>
  );
}

export default App;
