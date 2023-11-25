import LoginForm from "./login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  // alert(session)

  // if (session) redirect("/user");
  const role=session?.user?.role;
  if(role==='user'){
    redirect("/user")
  }
  
  if (role==='Doctor') {
    redirect("/doctor")
  }

  if (role==="Admin") {
    redirect("/page")
  }
  // {
  //   redirect("/doctor")
  // }

  return (
    <main>
      <LoginForm />
    </main>
  );
}