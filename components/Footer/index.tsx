"use client";

import * as S from "./styled";

import Container from "@/components/Container";
import Logo from "@/components/Logo";
import Socials from "@/components/Socials";

export default function Footer() {
  return (
    <S.FooterStyled>
      <Container>
        <S.FooterContainer>
          <Logo />
          <S.FooterContent>
            <p>© 2024 All rights reserved by codexcode.pl</p>
          </S.FooterContent>
        </S.FooterContainer>
        <Socials />
      </Container>
    </S.FooterStyled>
  );
}
