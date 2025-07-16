import Container from "@/components/Container";
import * as S from "./styled";

type ContentSectionProps = React.HTMLAttributes<HTMLElement> & React.PropsWithChildren;

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
