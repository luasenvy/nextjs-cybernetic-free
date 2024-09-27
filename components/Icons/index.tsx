import Image from "next/image";

import IconArrowCircle from "@/public/icons/icon-arrow-circle.svg";
import IconArrowDown from "@/public/icons/icon-arrow-down.svg";
import IconArrowRight from "@/public/icons/icon-arrow-right.svg";
import IconFacebook from "@/public/icons/icon-facebook.svg";
import IconGithub from "@/public/icons/icon-github.svg";
import IconInstagram from "@/public/icons/icon-instagram.svg";
import IconLinkedIn from "@/public/icons/icon-linkedin.svg";
import IconTwitter from "@/public/icons/icon-twitter.svg";

export const icons = {
  arrowDown: IconArrowDown,
  arrowCircle: IconArrowCircle,
  arrowRight: IconArrowRight,
  facebook: IconFacebook,
  instagram: IconInstagram,
  twitter: IconTwitter,
  linkedin: IconLinkedIn,
  github: IconGithub,
};

type IconName = {
  iconData: keyof typeof icons;
  alt: string;
};

/**
 * Icon is a component that renders an image with the specified icon name
 * @example
 * <Icon iconData="home" alt="home" />
 * for change color of icon use css filter
 */
export default function Icon({ alt, iconData, ...rest }: IconName) {
  const icon = icons[iconData];

  return (
    <Image
      src={icon.src}
      alt={alt}
      width={icon.width}
      height={icon.height}
      data-icon="true"
      {...rest}
    />
  );
}
