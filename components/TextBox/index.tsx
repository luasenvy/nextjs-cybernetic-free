import * as S from "./styled";

type TextBoxLinkProps = {
  href?: string;
  target?: string;
};

export type TextBoxProps = {
  children: React.ReactNode;
  variant?: "normal" | "background-text";
  bgText?: string;
  boxAsLink?: boolean;
} & TextBoxLinkProps;

export default function TextBox({ children, variant, bgText, boxAsLink, ...rest }: TextBoxProps) {
  /**
   * box can appear as a link if needed
   */
  const TextBoxComponent = boxAsLink ? S.TextBoxLinkStyled : S.TextBotStyed;

  return (
    <TextBoxComponent $variant={variant} {...rest}>
      {variant === "background-text" && bgText && <S.TextBotBgText>{bgText}</S.TextBotBgText>}
      <S.TextBotTextWrapper>{children}</S.TextBotTextWrapper>
    </TextBoxComponent>
  );
}
