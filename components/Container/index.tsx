import * as S from "./styled";

type ContainerProps = {
  children: React.ReactNode;
};

/**
 *  Custom container based on the Bootstrap container.
 */
export default function Container({ children, ...rest }: ContainerProps) {
  if (!children) {
    return null;
  }

  return <S.StyledContainer {...rest}>{children}</S.StyledContainer>;
}
