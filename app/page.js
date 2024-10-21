"use client";

import Image from "next/image";
import { useState } from "react";
import hakenLogo from "../public/H A K E N.png"
import hakenEyesOpenedLogo from "../public/hakenPolvoOlhoAberto.png";
import hakenEyesClosedLogo from "../public/hakenPolvoOlhoFechado.png";
import profileImage from "../public/profileImage.png";

export default function Home() {
  const [isActive, setIsActive] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  const [showHakenLogo, setShowHakenlogo] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  /* buttons */
  const [firstButtonText, setFirstButtonText] = useState("Quem sou eu?");
  const [secondButtonText, setSecondButtonText] = useState("Meus Projetos");
  const [thirdButtonText, setThirdButtonText] = useState("Entrar em Contato");

  const [firstButtonClicked, setFirstButtonClicked] = useState(false);
  const [secondButtonClicked, setSecondButtonClicked] = useState(false);
  const [thirdButtonClicked, setThirdButtonClicked] = useState(false);

  const [showButtons, setShowButtons] = useState(false);

  const handleLogoClick = () => {
    let blinkCount = 3; 
    let blinkInterval = 175; 

    setIsActive(false);
    setIsAnimating(true);
    setShowHakenlogo(true);

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
      setShowHakenlogo(false);
      setShowButtons(true);
    }, 6000);
    
  };

  const handleFirstButtonClick = () =>{
    setFirstButtonClicked(true);
    setFirstButtonText("");
    setShowBio(true);
  }

  const handleSecondButtonClick = () =>{
    setSecondButtonClicked(true);
    setSecondButtonText("");
    setShowProjects(true);
  }

  const handleThirdButtonClick = () =>{
    setThirdButtonClicked(true);
    setThirdButtonText("");
    setShowContacts(true);
  }

  return (
    <div className="grid grid-rows-[50%px_1fr_50%px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={handleLogoClick} disabled={!isActive}>
        {isVisible && (
          <Image
            src={isOpen ? hakenEyesClosedLogo : hakenEyesOpenedLogo}
            width={360}
            height={306}
            alt="hakenLogoEyes"

            className={`${
              isAnimating ? "scale-up-down" : ""
            }`}
            
          />
        )}
      </button>

      {showHakenLogo && (
        <Image
          src={hakenLogo}
          width={360}
          height={45}
          alt="hakenLogo"
          className={`absolute mt-10 ${isAnimating ? "scale-up-down-logo" : ""}`}
          style={{ top: '80%', transform: 'translate(-50%, -100%)' }}
        />
      )}

      {showButtons && (
        <div className="absolute inset-0 flex flex-col items-center justify-between">
          


          <button onClick={handleFirstButtonClick} className={firstButtonClicked ? "button-scale rounded-full scale-down-first-button bg-buttons text-white py-4 px-8 mb-8" : "rounded-full buttons button-fade-in bg-buttons text-white py-4 px-8 mb-8"} disabled={firstButtonClicked}>
            {firstButtonText}
            {showBio && (
              <div className={showBio ? "relative flex justify-between items-center w-full max-w-12x1 mt-10 p-8 bio-container bio-fade-in" : ""}>
                <div className="text-left w-1/2 pr-8">
                  <h2 className="text-4xl font-bold mb-4">Sobre mim</h2>
                  <p className="text-lg leading-relaxed">
                    Olá, muito prazer! Me chamo Marco Antônio, sou estudante de Ciências da Computação na Universidade Tecnológica Federal do Paraná (UTFPR).
                    Estou na área por paixão e isso faz eu me dedicar ao máximo todos os dias. 
                  </p>
                </div>

                <div className={showBio ? "w-1/2 flex justify-center bio-fade-in" : ""}>
                  <Image
                    src={profileImage}
                    width={200}
                    height={200}
                    className="rounded-full border-4 haken-border"
                  />
                </div>
              </div>
            )}
          </button>

          <button onClick={handleSecondButtonClick} className={secondButtonClicked ? "button-scale rounded-full scale-down-second-button bg-buttons text-white py-4 px-8 mb-8" : "rounded-full buttons button-fade-in bg-buttons text-white py-0 px-0 mb-8"} disabled={secondButtonClicked}>
            {secondButtonText}
            {showProjects && (
              <div className={showProjects ? "relative flex justify-between items-center w-full max-w-12x1 mt-10 p-8 bio-container bio-fade-in" : ""}>
                <div className="text-left w-1/2 pr-8">
                  <h2 className="text-4xl font-bold mb-4">Sobre mim</h2>
                  <p className="text-lg leading-relaxed">
                    Olá, muito prazer! Me chamo Marco Antônio, sou estudante de Ciências da Computação na Universidade Tecnológica Federal do Paraná (UTFPR).
                    Estou na área por paixão e isso faz eu me dedicar ao máximo todos os dias. 
                  </p>
                </div>

                <div className={showProjects ? "w-1/2 flex justify-center bio-fade-in" : ""}>
                  <Image
                    src={profileImage}
                    width={200}
                    height={200}
                    className="rounded-full border-4 haken-border"
                  />
                </div>
              </div>
            )}
          </button>

          <button onClick={handleThirdButtonClick} className={thirdButtonClicked ? "button-scale rounded-full scale-down-third-button bg-buttons text-white py-4 px-8 mb-8" : "rounded-full buttons button-fade-in bg-buttons text-white py-4 px-8 mb-8"} disabled={thirdButtonClicked}>
            {thirdButtonText}
            {showContacts && (
              <div className={showContacts ? "relative flex justify-between items-center w-full max-w-12x1 mt-10 p-8 bio-container bio-fade-in" : ""}>
                <div className="text-left w-1/2 pr-8">
                  <h2 className="text-4xl font-bold mb-4">Sobre mim</h2>
                  <p className="text-lg leading-relaxed">
                    Olá, muito prazer! Me chamo Marco Antônio, sou estudante de Ciências da Computação na Universidade Tecnológica Federal do Paraná (UTFPR).
                    Estou na área por paixão e isso faz eu me dedicar ao máximo todos os dias. 
                  </p>
                </div>

                <div className={showContacts ? "w-1/2 flex justify-center bio-fade-in" : ""}>
                  <Image
                    src={profileImage}
                    width={200}
                    height={200}
                    className="rounded-full border-4 haken-border"
                  />
                </div>
              </div>
            )}
          </button>
          
        </div>
      )}

      

    </div>
  );
}