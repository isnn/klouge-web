import { BarChart, BarChart3, Mail } from "lucide-react"
// import { useNavigate } from "react-router"
// import { useNavigate } from "react-router-dom"
import { Link } from "react-router"
import { useNavigate } from "react-router"

function ResetPassword() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen items-center justify-center transition-colors duration-300">
      <div className="mx-4 w-full max-w-md rounded-2xl bg-gray-800 p-8 shadow-xl transition-colors duration-300">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="from-primary-300 to-accent-500 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white">Reset Password</h1>
          <p className="text-gray-300">Enter your email to receive reset instructions</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium">Email Address</label>
            <div className="relative">
              <Mail className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-300" />
              <input
                type="email"
                className="focus:ring-primary-400 w-full rounded-lg border border-gray-600 bg-gray-700 py-3 pr-4 pl-10 transition-all duration-200 focus:ring-2 focus:outline-none"
                placeholder="demo@example.com"
              />
            </div>
          </div>

          <button
            type="submit"
            className="from-primary-300 to-accent-500 hover:from-primary-400 hover:to-accent-400 focus:ring-primary-400 flex w-full items-center justify-center rounded-lg bg-gradient-to-r py-3 font-medium text-white transition-all duration-200 focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send Reset Link
          </button>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/login")}
            className="font-medium text-blue-500 transition-colors hover:text-blue-600"
          >
            ← Back to Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
