import { Metadata } from "next";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth/auth";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

export default function SignInPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4 px-4 py-6">
      <div className="flex w-1/2 flex-col items-center">
        <h1 className="text-3xl font-bold">Sign In to Next.js Starter</h1>
        <p>This is simple Next-Auth Authentication</p>
      </div>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <Button variant={"github"} type="submit">
          Sign In with Github
        </Button>
      </form>
      <ModeToggle />
    </div>
  );
}
