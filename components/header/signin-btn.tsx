
import { signIn } from "@/auth"
import { FiUser } from "react-icons/fi"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button 
     className="mt-2"
      type="submit">
        <FiUser className="h-5 w-5" />
      </button>
    </form>
  )
} 