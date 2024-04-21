import Link from "next/link";
import { FaCog } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SignOut } from "@/components/sign-out";
import { auth } from "@/lib/auth/auth";
import { MountainIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const Navigation = async () => {
  const session = await auth();

  const authItems = (
    <>
      <div className="block">
        <ul className="flex items-center space-x-4 px-1">
          <Link href="/">Home</Link>
          <li>
            <ModeToggle />
          </li>

          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Avatar>
                <AvatarImage src={session?.user?.image} />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="block">
              <DropdownMenuItem className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src={session?.user?.image} />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="grid grid-cols-1">
                  <h6 className="font-bold">{session?.user?.name}</h6>
                  <span className="font-light">{session?.user?.email}</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <Link
                  href="/account/profile"
                  className="flex items-center gap-2"
                >
                  <FaCog />
                  <span>Manage account</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SignOut />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ul>
      </div>
    </>
  );

  return (
    <div className="border-b">
      <header className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center" href="/">
          <MountainIcon className="size-8" />
          <span className="sr-only">Acme Inc</span>
        </Link>

        {!session?.user && (
          <ul className="flex items-center space-x-4 px-1">
            <li>
              <ModeToggle />
            </li>
            <li>
              <Link href="/sign-in">
                <Button>Sign In</Button>
              </Link>
            </li>
          </ul>
        )}

        {session?.user && authItems}
      </header>
    </div>
  );
};

export default Navigation;
