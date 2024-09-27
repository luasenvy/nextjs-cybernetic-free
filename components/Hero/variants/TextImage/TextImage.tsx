import type { StaticImageData } from "next/image";

import * as S from "./styled";

import Button from "@/components/Button";
import FadeIn from "@/components/Utils/animations/FadeIn";

export type TextImageProps = {
  title?: string;
  paragraph?: string;
  switchPlaces?: boolean;
  buttons?: {
    text: string;
    link: string;
    variant?: "primary" | "secondary";
  }[];
  alt?: string;
  width?: number;
  height?: number;
  image?: StaticImageData;
};

export default function TextImage({
  title,
  paragraph,
  buttons,
  image,
  alt = "",
  width,
  height,
  switchPlaces = false,
}: TextImageProps) {
  // do not render this component if there is no title or image
  return (
    title &&
    paragraph &&
    image && (
      <S.TextImageStyled>
        <S.TextImageContainer $switchPlaces={switchPlaces}>
          <FadeIn delay={0.2}>
            <S.TextImageContent>
              {title && <h1 dangerouslySetInnerHTML={{ __html: title }} />}
              {paragraph && <p dangerouslySetInnerHTML={{ __html: paragraph }} />}

              {buttons && buttons.length > 0 && (
                <S.ButtonsWrapper>
                  {buttons.map((button, index) => {
                    return (
                      <Button key={index} link={button.link} variant={button.variant}>
                        {button.text}
                      </Button>
                    );
                  })}
                </S.ButtonsWrapper>
              )}
            </S.TextImageContent>
          </FadeIn>

          <FadeIn>
            <S.TextImageFigure>
              <S.TextImage src={image} alt={alt} width={width} height={height} />
            </S.TextImageFigure>
          </FadeIn>
        </S.TextImageContainer>
      </S.TextImageStyled>
    )
  );
}
