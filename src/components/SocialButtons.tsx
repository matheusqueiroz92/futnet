import { getServerSession } from "next-auth";
import LoginGoogle from "./LoginGoogle";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function SocialButtons() {
  const session = await getServerSession(authOptions);
  
  return (
    <LoginGoogle session={session}/>
  )
}