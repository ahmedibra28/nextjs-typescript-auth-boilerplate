import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Error({ error }: { error: string }) {
  const errors = {
    OAuthAccountNotLinked:
      "Please sign in with the same account you used originally.",
  } as { [key: string]: string };

  return (
    <Alert variant="destructive">
      <FaExclamationTriangle className="h-4 w-4" />
      <AlertTitle>{error}</AlertTitle>
      <AlertDescription>
        {errors[error] || "Something went wrong. Please try again later."}
      </AlertDescription>
    </Alert>
  );
}
