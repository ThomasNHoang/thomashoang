import { currentUser } from "@/lib/auth";
import { Separator } from "@/components/ui/separator";
import { AccountForm } from "@/components/settings/account";
import { linkedGithubAccount, linkedGoogleAccount } from "@/lib/actions/user/account";

export default async function AccountPage() {
  let googleConnected = false;
  let githubConnected = false;

  try {
    googleConnected = await linkedGoogleAccount();
  } catch (error) {
    console.log(error)
  }

  try {
    githubConnected = await linkedGithubAccount();
  } catch (error) {
    console.log(error)
  }


  const user = await currentUser();
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings.
        </p>
      </div>
      <Separator />
      <AccountForm
        name={user?.name as string}
        googleConnected={googleConnected}
        githubConnected={githubConnected}
      />
    </div>
  )
}