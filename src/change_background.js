import React, { useState, useEffect } from "react";

function Change_background() {
  const [backgroundImage, setBackgroundImage] = useState(
    "url('https://tse3.mm.bing.net/th?id=OIP.KgAn-o3TYLJlArsazDTcmgHaEK&pid=Api&P=0')"
  );
  const [index, setIndex] = useState(0);

  const images = [
    "url('https://tse4.mm.bing.net/th?id=OIP.JfNdlwKPrz_pQYu9ud1pNQHaEK&pid=Api&P=0')",
    "url('https://tse4.mm.bing.net/th?id=OIP.icBZi3NoQnDyWPWdsqLmywHaEK&pid=Api&P=0')",
    "url('https://tse4.mm.bing.net/th?id=OIP.JsBcRmuss1NUGMETkkn-DQHaE8&pid=Api&P=0')",
  ];

  const handleClick = () => {
    const newIndex = (index + 1) % images.length;
    setBackgroundImage(images[newIndex]);
    setIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (index + 1) % images.length;
      setBackgroundImage(images[newIndex]);
      setIndex(newIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div
      style={{
        backgroundImage: backgroundImage,
        height: "300px",
        width: '500px',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Change_background;
