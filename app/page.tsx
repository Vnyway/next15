import Hello from "@/app/components/Hello";

export default function Home() {
  console.log("What am I doing here? -- SERVER/CLIENT?");
  return (
    <>
      <h1 className="text-3xl">Welcome to NEXT.js</h1>
      <Hello />
    </>
  );
}
