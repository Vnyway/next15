"use client";
import { AuthRequiredError } from "@/app/lib/exceptions";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    throw new AuthRequiredError();
  }, []);

  return <div>Dashboard</div>;
};

export default Page;
