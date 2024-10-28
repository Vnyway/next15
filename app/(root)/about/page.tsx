// app/(root)/about/page.tsx
import React from "react";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Page = async () => {
  await delay(2000); // 2-second delay to simulate loading
  return <div>About</div>;
};

export default Page;
