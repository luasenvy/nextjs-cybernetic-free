import * as S from "./styled";

import Icon from "@/components/Icons";

type ButtonProps = {
  children: any;
  link?: string;
  variant?: "primary" | "secondary";
  target?: "_blank" | "_self" | "_parent";
  align?: "left" | "center" | "right";
  asButton?: boolean;
  type?: "button" | "submit" | "reset";
  showIcon?: boolean;
};

/**
 * Button component
 * @param {string} link - link to the page
 * @example
 * <Button link="#">text</Button>
 */
export default function Button({
  link,
  target,
  children,
  align,
  showIcon = false,
  variant = "primary",
  asButton,
  type,
  ...rest
}: ButtonProps) {
  // render button as normal button, otherwise as link
  const ButtonComponent = asButton ? S.Button : S.ButtonLink;

  return (
    <S.ButtonWrapper $align={align}>
      <ButtonComponent href={link} target={target} {...rest} $variant={variant}>
        {showIcon && <Icon iconData="arrowRight" alt="arrow icon" />}
        {children}
      </ButtonComponent>
    </S.ButtonWrapper>
  );
}
