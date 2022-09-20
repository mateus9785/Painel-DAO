import { FooterContainer } from "./styles";
import { TwitterLogo } from "phosphor-react";
import { FacebookLogo } from "phosphor-react";
import { TwitchLogo } from "phosphor-react";
import { YoutubeLogo } from "phosphor-react";
import { InstagramLogo } from "phosphor-react";

export function Footer() {
  return (
    <FooterContainer>
        <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/UniversidadeLi3">
          <TwitterLogo className="icon-footer" color={"#F3BF22"}/>
        </a>
        <a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/universidadelibertariaoficial/">
          <FacebookLogo className="icon-footer" color={"#F3BF22"}/>
        </a>
        <a target="_blank" rel="noreferrer noopener" href="https://www.twitch.tv/libertariauniversidade">
          <TwitchLogo className="icon-footer" color={"#F3BF22"}/>
        </a>
        <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/c/UniversidadeLibert%C3%A1ria">
          <YoutubeLogo className="icon-footer" color={"#F3BF22"}/>
        </a>
        <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/libertariauniversidade/">
          <InstagramLogo className="icon-footer" color={"#F3BF22"}/>
        </a>
    </FooterContainer>
  );
}
