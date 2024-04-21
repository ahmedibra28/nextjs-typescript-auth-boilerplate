import { signOut } from "@/lib/auth/auth";
import { FaPowerOff } from "react-icons/fa";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className="flex flex-row items-center gap-2">
        <FaPowerOff /> <span>Sign out</span>
      </button>
    </form>
  );
}
