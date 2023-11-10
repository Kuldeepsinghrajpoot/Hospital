import LoginForm from "./login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  // alert(session)

  if (session) redirect("/user");

  return (
    <main>
      <LoginForm />
    </main>
  );
}