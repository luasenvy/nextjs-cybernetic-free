import type { StaticImageData } from "next/image";
import NextImage from "next/image";

import HeroImg from "@/public/images/hero-img.webp";

import HeroSlider1 from "@/public/images/hero-slider-01.webp";
import HeroSlider2 from "@/public/images/hero-slider-02.webp";
import HeroSlider3 from "@/public/images/hero-slider-03.webp";

import InfiniteImg1 from "@/public/images/infinite-img-1.webp";
import InfiniteImg2 from "@/public/images/infinite-img-2.webp";
import Logo from "@/public/images/logo.webp";
import PreviewPng from "@/public/images/preview.webp";

export const images = {
  preview: PreviewPng,
  heroImg: HeroImg,
  logo: Logo,
};

export type ImageProps = {
  srcLocal?: keyof typeof images;
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
};

/**
 * @example
 * <Image src="logo" alt="logo" width="50px" height="50px" />
 */
export default function Image({ alt, srcLocal, height, width, src, loading, ...rest }: ImageProps) {
  /**
   * If srcLocal or src is not provided throw an error
   */
  if (!srcLocal && !src) {
    throw new Error("srcLocal or src is required");
  }

  /**
   * this component should be able to use local images or images from external sources
   */
  const image = srcLocal ? images[srcLocal] : src;

  return (
    <NextImage src={image} alt={alt} width={width} height={height} loading={loading} {...rest} />
  );
}

// default export of the images
export { PreviewPng, HeroSlider1, HeroSlider2, HeroSlider3, InfiniteImg1, InfiniteImg2 };
