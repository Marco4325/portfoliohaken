"use client";

import Image from "next/image";
import { useState } from "react";
import hakenEyesOpenedLogo from "../public/hakenPolvoOlhoAberto.png";
import hakenEyesClosedLogo from "../public/hakenPolvoOlhoFechado.png";

export default function Home() {
  const [isActive, setIsActive] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  /* buttons */
  const [firstButtonClicked, setFirstButtonClicked] = useState(false);
  const [secondButtonClicked, setSecondButtonClicked] = useState(false);
  const [thirdButtonClicked, setThirdButtonClicked] = useState(false);

  const [showButtons, setShowButtons] = useState(false);

  const handleLogoClick = () => {
    let blinkCount = 3; 
    let blinkInterval = 175; 

    setIsActive(false);
    setIsAnimating(true);

    setTimeout(() => {
      const blink = setInterval(() => {
        setIsOpen(prev => !prev); 
        blinkCount--;
        if (blinkCount === 0) { clearInterval(blink); }
      }, blinkInterval);
    }, 4000);

    setTimeout(() => {
      setIsAnimating(false);
      setIsVisible(false);
      setShowButtons(true);
    }, 6000);
    
  };

  const handleFistButtonClick = () =>{
    setFirstButtonClicked(true);
  }

  const handleSecondButtonClick = () =>{
    setSecondButtonClicked(true);
  }

  const handleThirdButtonClick = () =>{
    setThirdButtonClicked(true);
  }

  return (
    <div className="grid grid-rows-[50%px_1fr_50%px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={handleLogoClick} disabled={!isActive}>
        {isVisible && (
          <Image
            id="image"
            src={isOpen ? hakenEyesClosedLogo : hakenEyesOpenedLogo}
            width={360}
            height={306}
            alt="hakenLogo"

            className={`${
              isAnimating ? "scale-up-down" : ""
            }`}
            
          />
        )}

      </button>
        {showButtons && (
          <div className="absolute inset-0 flex flex-col items-center justify-between">

            <button onClick={handleFistButtonClick} className={firstButtonClicked ? "rounded-full scale-down-first-button bg-buttons text-white py-4 px-8 mb-8" : "rounded-full buttons button-fade-in bg-buttons text-white py-4 px-8 mb-8"} disabled={firstButtonClicked}>
              Quem sou eu?
            </button>

            <button onClick={handleSecondButtonClick} className={secondButtonClicked ? "rounded-full scale-down-second-button bg-buttons text-white py-4 px-8 mb-8" : "rounded-full buttons button-fade-in bg-buttons text-white py-0 px-0 mb-8"} disabled={secondButtonClicked}>
              Meus Projetos
            </button>

            <button onClick={handleThirdButtonClick} className={thirdButtonClicked ? "rounded-full scale-down-third-button bg-buttons text-white py-4 px-8 mb-8" : "rounded-full buttons button-fade-in bg-buttons text-white py-4 px-8 mb-8"} disabled={thirdButtonClicked}>
              Entrar em Contato
            </button>
            
          </div>
        )}

    </div>
  );
}