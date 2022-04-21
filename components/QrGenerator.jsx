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
        <h1 className="pb-2 w-full font-montserrat  text-center  text-[#F2E9E4] text-6xl">
          URL to QR Code Generator
        </h1>
        <div className="h-1 w-4/5 bg-[#F2E9E4] mb-6"></div>
        <input
          className="w-2/5 h-9 bg-[#4A4E69] placeholder-opacity-40  placeholder-[#F2E9E4] rounded-3xl p-5 overflow-hidden border border-white text-[#F2E9E4] "
          onChange={handleQRCodeChange}
          placeholder="Enter URL Here"
        />
        <br />
        <QRCodeSVG
          value={text}
          size={350}
          className="border-4 border-[#F2E9E4] p-2"
        />
      </div>
    </div>
  );
};

export default QrGenerator;
