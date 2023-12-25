import { Component } from "@/type";
import { useRouter } from "next/navigation";
import React from "react";

interface UseClosePortfolioProps {
  tabs: Component[];
}

export const useClosePortfolio = ({ tabs }: UseClosePortfolioProps) => {
  const router = useRouter();

  React.useEffect(() => {
    if (tabs.length === 0) {
      router.push("/");
    }
  }, [tabs, router]);
};
