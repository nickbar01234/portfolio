"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface UseClosePortfolioProps {
  tabs: any[];
}

export const useClosePortfolio = ({ tabs }: UseClosePortfolioProps) => {
  const router = useRouter();

  React.useEffect(() => {
    if (tabs.length === 0) {
      router.push("/");
    }
  }, [tabs, router]);
};
