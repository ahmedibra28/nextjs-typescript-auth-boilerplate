"use client";

import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle, FaSpinner } from "react-icons/fa";
import { useTransition } from "react";
import { SingInWithGitHub, SingInWithGoogle } from "@/server/actions";

export default function SignInPage() {
  const [isPending, startTransition] = useTransition();

  const onSubmit = (state: string) => {
    startTransition(() => {
      if (state === "google") {
        SingInWithGoogle();
      }
      if (state === "github") {
        SingInWithGitHub();
      }
    });
  };
  return (
    <div className="mx-auto flex h-[90vh] max-w-sm flex-col items-center justify-center space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Sign in with your preferred social account.
        </p>
      </div>

      <div className="space-y-4">
        <Button
          onClick={() => onSubmit("google")}
          className="w-full"
          variant="outline"
          type="submit"
          aria-disabled={isPending}
          disabled={isPending}
        >
          {isPending ? (
            <FaSpinner className="mr-2 size-5 animate-spin" />
          ) : (
            <FaGoogle className="mr-2 size-5" />
          )}
          Sign in with Google
        </Button>

        <Button
          onClick={() => onSubmit("github")}
          className="w-full"
          variant="outline"
          type="submit"
          aria-disabled={isPending}
          disabled={isPending}
        >
          {isPending ? (
            <FaSpinner className="mr-2 size-5 animate-spin" />
          ) : (
            <FaGithub className="mr-2 size-5" />
          )}
          Sign in with Github
        </Button>
      </div>
    </div>
  );
}
