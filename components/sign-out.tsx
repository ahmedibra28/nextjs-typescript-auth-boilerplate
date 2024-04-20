import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button variant="destructive" type="submit">
        Sign Out
      </Button>
    </form>
  );
}
