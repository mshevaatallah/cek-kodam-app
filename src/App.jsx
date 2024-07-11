import "./App.css";
import InputNama from "./InputNama";
import MainPages from "./MainPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<InputNama />} />
        <Route path="/cek-khodam" element={<MainPages />} />
      </Routes>
    </>
  );
}

export default App;
