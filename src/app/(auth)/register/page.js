import Register from "./register";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function Home() {
    const session = await getServerSession(authOptions);
    if (session) redirect("/user");
    return (
        <main>
            <Register />
        </main>
    );
}

export async function generateMetadata({ params }) {
    return {
      title: 'Register',
      deScription: 'Register'
    }
  }