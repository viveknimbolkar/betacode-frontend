import "./App.css";
import Editor from "./pages/editor/Editor";
import Trending from "./pages/trending/trending";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import { APIProvider } from "./api/api";

function App() {
  return (
    <APIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />} />
          <Route path="/editor" element={<Editor />} />
          <Route
            path="/trending"
            element={<RootLayout ScreenComponent={<Trending />} />}
          />
          <Route path="*" element={<div>404</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </APIProvider>
  );
}

export default App;
