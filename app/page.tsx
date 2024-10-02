import UserAvatar from "@/components/avatar";
import { SignIn } from "@/components/signin";
import { SignOut } from "@/components/signout";

export default function Home() {
  return (
    <>
      <SignIn />
      <SignOut />
      <UserAvatar />
    </>
  );
}
