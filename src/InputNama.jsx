import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InputNama() {
  const [first, setfirst] = useState("");
  const navigate = useNavigate();
  const onCLick = () => {
    if (first === "") {
      alert("Nama tidak boleh kosong");
      return;
    }
    navigate("/cek-khodam", { state: first });
  };
  return (
    <div>
      <h1>Masukan nama kamu !</h1>
      <p>made with love by pemsay ❤️</p>

      <div className="input-container">
        <input
          type="text"
          placeholder="Masukkan nama"
          value={first}
          onChange={(e) => setfirst(e.target.value)}
        />

        <button onClick={onCLick}>Cek Khodam mu</button>
      </div>
    </div>
  );
}

export default InputNama;
