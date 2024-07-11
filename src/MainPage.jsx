import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import gambar1 from "./assets/1.jpg";
import gambar2 from "./assets/2.jpg";
import gambar3 from "./assets/3.jpg";
import gambar4 from "./assets/4.jpg";
import gambar5 from "./assets/5.jpg";
import gambar6 from "./assets/6.jpg";
import gambar7 from "./assets/7.jpg";
import gambar8 from "./assets/8.jpg";

const MainPages = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState({ url: "", name: "" });
  const location = useLocation();
  const nama = location.state;
  const balik = () => {
    navigate("/");
  };
  // Array gambar dengan nama keterangannya
  const images = [
    {
      url: gambar1,
      name: "Cogi Rizz",
    },
    {
      url: gambar2,
      name: "Wisnu Minta Jatah",
    },
    {
      url: gambar3,
      name: "Cimle Memelas",
    },
    {
      url: gambar4,
      name: "Cimot Hamaw",
    },
    {
      url: gambar5,
      name: "Kepala suku Shimu",
    },
    {
      url: gambar6,
      name: "Istri Tercantik pemsay",
    },
    {
      url: gambar7,
      name: "Cimot rizz no cap",
    },
    {
      url: gambar8,
      name: "WISNU CURIGAAA",
    },
  ];

  useEffect(() => {
    randomizeImage();
  }, []);

  const randomizeImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setImage(images[randomIndex]);
  };

  return (
    <div>
      <h1>Cek Khdoam Pershimuan Abady</h1>
      <p>
        aaamaaaww , <span style={{ fontWeight: "bold" }}>{nama}</span>
      </p>
      <div className="image-container">
        {image.url && (
          <div>
            <img src={image.url} alt={image.name} height={150} width={150} />
            <p>{image.name}</p>
          </div>
        )}
        <button onClick={balik}>Cek Lagi</button>
      </div>
    </div>
  );
};

export default MainPages;
