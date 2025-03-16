
import { signOut } from "@/auth"
import { FiLogOut } from "react-icons/fi"
 
export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button 
      className="mt-2 ml-1 lg:ml-3"
      type="submit">
        <FiLogOut className="h-5 w-5" />
      </button>
    </form>
  )
} 