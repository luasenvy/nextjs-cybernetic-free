import * as S from "./styled";

import Container from "@/components/Container";

type ContentSectionProps = React.HTMLAttributes<HTMLElement> & {
  children?: any;
};

export default function ContentSection({ children, ...rest }: ContentSectionProps) {
  // do not render if there are no elements
  if (!children) {
    return null;
  }
  return (
    <S.ContentSectionStyled {...rest}>
      <Container>
        <S.ContentSectionWrapper>{children}</S.ContentSectionWrapper>
      </Container>
    </S.ContentSectionStyled>
  );
}
