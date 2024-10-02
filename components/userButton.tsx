import {
  Avatar,
  AvatarImage,
  AvatarFallback
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { FaUser } from "react-icons/fa";
import { currentUser } from "@/lib/auth";
import { SignIn } from "@/components/signin";
import { SignOut } from "@/components/signout";

export async function UserButton() {
  const user = await currentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-7 w-7 outline outline-2 outline-offset-2">
          <AvatarImage className="outline outline-1" src={user?.image || ""}/>
          <AvatarFallback className="bg-slate-200">
            <FaUser />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          {user ? <SignOut /> : <SignIn />}
          
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}