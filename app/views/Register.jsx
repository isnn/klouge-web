import React, { useState } from "react"
import { Container } from "@mui/material"
import { BarChart3, Eye, EyeOff, Lock, Mail, RefreshCw } from "lucide-react"
import { useNavigate } from "react-router"
import user from "../services/auth"

export default function Register() {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formErrors, setFormErrors] = useState({})

  const handleRegister = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    try {
      const res = await user.userRegister(username, password)
      setIsLoading(false)
      navigate("/login")
    } catch (error) {
      setFormErrors({ username: error?.response?.data?.error })
      setIsLoading(false)
    }
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#111827",
      }}
    >
      <div className="flex min-h-screen items-center justify-center transition-colors duration-300">
        <div className="mx-4 w-full max-w-md rounded-2xl bg-gray-800 p-8 shadow-xl transition-colors duration-300">
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="from-primary-300 to-accent-500 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="mb-2 text-3xl font-extrabold text-white">Create Your Account</h1>
            <p className="text-base text-gray-300">Sign up in seconds and start your journey!</p>
          </div>

          <form
            onSubmit={handleRegister}
            className="space-y-6"
          >
            <div>
              <label className="mb-2 block text-sm font-medium">Username</label>
              <div className="relative">
                <Mail className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-300" />
                <input
                  className="focus:ring-primary-400 w-full rounded-lg border border-gray-600 bg-gray-700 py-3 pr-4 pl-10 transition-all duration-200 focus:ring-2 focus:outline-none"
                  placeholder="demo@example.com"
                  value={username}
                  onInput={(e) => setUsername(e.target.value)}
                  required
                  autoComplete="username"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-600 dark:text-gray-300" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="focus:ring-primary-400 w-full rounded-lg border border-gray-600 bg-gray-700 py-3 pr-4 pl-10 transition-all duration-200 focus:ring-2 focus:outline-none"
                  placeholder="password123"
                  value={password}
                  onInput={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="hover:text-primary-400 absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-600 transition-colors dark:text-gray-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {formErrors.username && (
              <p className="mt-4 text-sm text-red-500">{formErrors.username}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="from-primary-300 to-accent-500 hover:from-primary-400 hover:to-accent-400 focus:ring-primary-400 flex w-full items-center justify-center rounded-lg bg-gradient-to-r py-3 font-medium text-white transition-all duration-200 focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? <RefreshCw className="h-6 w-6 animate-spin" /> : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </Container>
  )
}
