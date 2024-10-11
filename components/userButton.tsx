import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { FaUser } from "react-icons/fa";
import { currentUser } from "@/lib/auth";
import { SignedInContent } from "@/components/signedInContent";
import { SignedOutContent } from "@/components/signedOutContent";

export async function UserButton() {
  const user = await currentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-7 w-7 outline outline-2 outline-offset-2 cursor-pointer">
          <AvatarImage className="outline outline-1" src={user?.image || ""} />
          <AvatarFallback>
            <FaUser />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44" sideOffset={12}>
        {user ? <SignedInContent user={user} /> : <SignedOutContent />}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
