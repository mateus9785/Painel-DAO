import { useState } from "react";
import { HeaderContainer } from "./styles";
import logoAncap from "./../../assets/logo-ancap.svg";
import { Globe } from "phosphor-react";

export function Header() {
  const [appLanguage, setAppLanguage] = useState(!localStorage.getItem("app-language") ? "en" : localStorage.getItem("app-language"));

  async function changeAppLanguage(event : any, language: string) {
    event.preventDefault();
    localStorage.setItem("app-language", language);
    setAppLanguage(language);
    window.location.reload();
  }

  return (
    <HeaderContainer>
      <a href="/"><img src={logoAncap}/></a>
      <div className="div-right">
        <span>Token Sold: 1000</span>
        <span>HardCap: 10000</span>
        <div className="div-translate">
          <Globe className="icon-header" color={"#F3BF22"}/>
          <div className="div-buttons">
            <button className={appLanguage == "es" ? "select-language" : ""} onClick={(e)=> changeAppLanguage(e, "es")}>ES</button>
            <button className={appLanguage == "en" ? "select-language" : ""} onClick={(e)=> changeAppLanguage(e, "en")}>EN</button>
            <button className={appLanguage == "pt" ? "select-language" : ""} onClick={(e)=> changeAppLanguage(e, "pt")}>PT</button>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}
