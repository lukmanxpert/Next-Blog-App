import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const res = await fetch("http://localhost:5000/api/auth/get-session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store"
  });
  console.log("response session data :>> ", await res.json());
  return (
    <div>
      <h1>This is home page.</h1>
      <Button variant={"outline"}>Click Me!</Button>
    </div>
  );
}
