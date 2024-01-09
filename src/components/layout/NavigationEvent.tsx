"use client";

import { PortfolioContext, RootNavigationContext } from "@/context";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const NavigationEvent = () => {
  const { setCommandListenerActive } = React.useContext(PortfolioContext);
  const { setNavigating } = React.useContext(RootNavigationContext);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const _ = `${pathname}?${searchParams}`;
    setNavigating(false);
    setCommandListenerActive(false);
  }, [pathname, searchParams, setNavigating, setCommandListenerActive]);

  return null;
};

export default NavigationEvent;
