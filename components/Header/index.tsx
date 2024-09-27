"use client";

import { Global } from "@emotion/react";
import { useEffect } from "react";

import * as S from "./styled";

import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import NormalizeCSS from "@/components/Styles/normalize";

export default function Header() {
  // on scroll header needs to get class of "scrolled" and change its background color
  useEffect(() => {
    const header = document.querySelector("header");

    // add class to header when user scrolls
    const handleScroll = () => {
      if (window.scrollY > 0) header?.classList.add("scrolled");
      else header?.classList.remove("scrolled");
    };

    window.addEventListener("scroll", handleScroll);

    // if there is any listener, remove it to clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.HeaderStyled>
      <Global styles={NormalizeCSS} />

      <S.ContainerStyled>
        <Logo />
        <Navigation />
      </S.ContainerStyled>
    </S.HeaderStyled>
  );
}
