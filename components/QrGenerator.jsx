import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const QrGenerator = () => {
  const [text, setText] = useState("");

  const handleQRCodeChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col  p-5 justify-center items-center">
        <h1 className="pb-2 w-full font-montserrat  text-center font-bold  text-black text-6xl">
          URL to QR Code Generator
        </h1>
        <div className="h-1 w-4/5 bg-black mb-6"></div>
        <input
          className="w-2/5 h-9 bg-gradient-to-r from-[#08AEEA] to-[#2AF598] placeholder-opacity-40  placeholder-black rounded-3xl p-5 overflow-hidden border-4 ring-0 hover:scale-105 transition-all duration-200 ease-in-out focus:scale-105 shadow-lg border-black text-black "
          onChange={handleQRCodeChange}
          placeholder="Enter URL Here"
        />
        <br />
        <QRCodeSVG
          value={text}
          size={350}
          className="border-4 rounded-3xl border-black p-2"
        />
      </div>
    </div>
  );
};

export default QrGenerator;
