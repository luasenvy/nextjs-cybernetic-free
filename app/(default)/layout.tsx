"use client";

import { useEffect } from "react";

export default function SlideUpLayout({ children }: React.PropsWithChildren) {
  useEffect(() => {
    document.body.classList.add("hide-overflow");
  }, []);

  return <>{children}</>;
}
