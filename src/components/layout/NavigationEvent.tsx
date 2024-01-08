"use client";

import { RootNavigationContext } from "@/context";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const NavigationEvent = () => {
  const { setNavigating } = React.useContext(RootNavigationContext);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const _ = `${pathname}?${searchParams}`;
    setNavigating(false);
  }, [pathname, searchParams, setNavigating]);

  return null;
};

export default NavigationEvent;
