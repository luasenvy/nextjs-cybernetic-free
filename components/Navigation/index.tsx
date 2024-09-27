import Link from "next/link";
import { useState } from "react";

import Hamburger from "./components/Hamburger";
import * as S from "./styled";

export default function Navigation() {
  // to update values for all components, keep the state here
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.NavigationStyled>
      <S.NavigationListWrapper $isOpen={isOpen}>
        <S.NavigationList>
          <li>
            <Link href="/">Cybernetic</Link>
          </li>
          <li>
            <Link href="/infinite">Infinite</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </S.NavigationList>
      </S.NavigationListWrapper>
      <Hamburger
        state={{
          open: isOpen,
          setOpen: setIsOpen,
        }}
      />
    </S.NavigationStyled>
  );
}
