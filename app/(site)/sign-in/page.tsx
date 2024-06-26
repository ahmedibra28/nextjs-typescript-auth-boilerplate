"use client";

import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle, FaSpinner } from "react-icons/fa";
import { useState, useTransition } from "react";
import { SingInWithGitHub, SingInWithGoogle } from "@/server/actions/auth";
import Error from "@/components/error";
import { useSearchParams } from "next/navigation";

export default function SignInPage() {
  const [isPending, startTransition] = useTransition();
  const [selected, setSelected] = useState("");

  const searchParams = useSearchParams();
  const error = searchParams.get("error");

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
    <div className="mx-auto flex h-[85vh] max-w-sm flex-col items-center justify-center space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Sign in with your preferred social account.
        </p>
      </div>

      <div className="space-y-4">
        <Button
          onClick={() => {
            onSubmit("google");
            setSelected("google");
          }}
          className="w-full"
          variant="outline"
          type="submit"
          aria-disabled={isPending}
          disabled={isPending}
        >
          {isPending && selected === "google" ? (
            <FaSpinner className="mr-2 size-5 animate-spin" />
          ) : (
            <FaGoogle className="mr-2 size-5" />
          )}
          Sign in with Google
        </Button>

        <Button
          onClick={() => {
            onSubmit("github");
            setSelected("github");
          }}
          className="w-full"
          variant="outline"
          type="submit"
          aria-disabled={isPending}
          disabled={isPending}
        >
          {isPending && selected === "github" ? (
            <FaSpinner className="mr-2 size-5 animate-spin" />
          ) : (
            <FaGithub className="mr-2 size-5" />
          )}
          Sign in with Github
        </Button>
      </div>

      {error && <Error error={error} />}
    </div>
  );
}
