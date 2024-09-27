import type { StaticImageData } from "next/image";

import * as S from "./styled";

export type ParallaxImageProps = {
  image: StaticImageData;
  content?: {
    title?: string;
    paragraph?: string;
  };
};

export default function ParallaxImage({ image, content }: ParallaxImageProps) {
  // do not render this component if there is no image
  if (!content || !image) {
    return null;
  }

  return (
    <S.ParallaxImageStyled $bgImage={image}>
      {content.title && content.paragraph && (
        <S.ParallaxImageContent>
          {content.title && <h1>{content.title}</h1>}
          {content.paragraph && <p>{content.paragraph}</p>}
        </S.ParallaxImageContent>
      )}
    </S.ParallaxImageStyled>
  );
}
