import Link from "next/link";

import * as S from "./styled";

import Image from "@/components/Images";

import LogoImage from "@/public/images/logo.webp";

/**
 * Logo is a text but if there is need to use img, add two img from <Image component
 * @import
 * @example
 * import Image from "@/components/Images";
 * <Image src="logo-light" alt="logo" data-theme-el="light" />
 * when is light
 * <Image src="logo-dark" alt="logo" data-theme-el="dark" />
 */
export default function Logo() {
  return (
    <S.LogoStyled>
      <Link href="/">
        <Image src={LogoImage} alt="logo" />
      </Link>
    </S.LogoStyled>
  );
}
