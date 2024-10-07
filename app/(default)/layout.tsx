"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SlideUpLayout({ children }: React.PropsWithChildren) {
  const pathname = usePathname();

  useEffect(() => {
    // transition-delay is 0.2s migrate to javascript
    // classList remove and add is faster than css transition
    // so sometime can't see the transition
    // so i add setTimeout to make sure the classList add after the transition
    // 'hide-overflow' class will be remove before router change via `<Link>` tag
    setTimeout(() => document.body.classList.add("hide-overflow"), 200);
  }, [pathname]);

  return <>{children}</>;
}
