import { ModeToggle } from "@/components/mode-toggle";
import { SignOut } from "@/components/sign-out";
import { auth } from "@/lib/auth/auth";

import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <ModeToggle />
      <h1>Next.js Starter</h1>
      <pre>{JSON.stringify(session?.user, null, 2)}</pre>

      <Link className="underline" href="/about">
        About
      </Link>

      {session?.user && <SignOut />}
    </main>
  );
}
