"use server";

import { signIn } from "@/lib/auth/auth";

export const SingInWithGitHub = async () => await signIn("github");
export const SingInWithGoogle = async () => await signIn("google");
