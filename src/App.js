import "./App.css";
import Editor from "./pages/editor/Editor";
import Trending from "./pages/trending/trending";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />} />
        <Route path="/editor" element={<Editor />} />
        <Route
          path="/trending"
          element={<RootLayout ScreenComponent={<Trending />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
