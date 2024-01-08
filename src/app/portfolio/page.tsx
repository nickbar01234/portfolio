import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
  // Fallback - Should not be directed here
  redirect("/portfolio/activity");
};
