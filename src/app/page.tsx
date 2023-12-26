"use client";
import { useRouter } from "next/navigation";
import App from "./_app";
export default function Home() {
  let Router = useRouter();

  return <App />;
}
