import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default async function Home() {
  const { data: session } = await authClient.getSession();
  console.log("session :>> ", session);
  return (
    <div>
      <h1>This is home page.</h1>
      <Button variant={"outline"}>Click Me!</Button>
    </div>
  );
}
