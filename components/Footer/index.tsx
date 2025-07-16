"use client";

import Container from "@/components/Container";
import Logo from "@/components/Logo";
import Socials from "@/components/Socials";
import * as S from "./styled";

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
