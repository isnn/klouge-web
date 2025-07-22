import React, { useState } from "react"
import { Container } from "@mui/material"
import { BarChart3, Eye, EyeOff, Lock, Mail, RefreshCw } from "lucide-react"
import { useNavigate } from "react-router"
import user from "../services/auth"

export default function Login() {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    // if (!validateForm('login')) return;

    setIsLoading(true)
    const payload = {
      username: username,
      password: password,
      rememberMe: rememberMe,
    }
    const res = await user.userLogin(payload)

    if (res.status === 200) {
      localStorage.setItem("user", JSON.stringify(res?.data?.data))
      setIsLoading(false)
      navigate("/dashboard")
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
            <h1 className="text-2xl font-bold text-white">Welcome</h1>
            <p className="text-gray-300">Sign in to your account</p>
          </div>

          <form
            onSubmit={handleLogin}
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
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoComplete="username"
                />
              </div>
              {/* {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>} */}
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
                  onChange={(e) => setPassword(e.target.value)}
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
              {/* {formErrors.password && <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>} */}
            </div>

            <div className="flex hidden items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  // checked={loginForm.rememberMe}
                  // onChange={(e) => setLoginForm({ ...loginForm, rememberMe: e.target.checked })}
                  className="text-primary-400 focus:ring-primary-400 h-4 w-4 rounded border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Remember me</span>
              </label>
              <button
                type="button"
                // onClick={() => setCurrentPage('forgot-password')}
                onClick={() => navigate("/reset")}
                className="text-accent-500 hover:text-accent-600 text-sm transition-colors"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="from-primary-300 to-accent-500 hover:from-primary-400 hover:to-accent-400 focus:ring-primary-400 flex w-full items-center justify-center rounded-lg bg-gradient-to-r py-3 font-medium text-white transition-all duration-200 focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? <RefreshCw className="h-6 w-6 animate-spin" /> : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600 dark:text-gray-300">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-accent-500 hover:text-accent-600 font-medium transition-colors"
              >
                Sign up
              </button>
            </p>
          </div>

          <div className="dark:bg-secondary-800/20 mt-4 rounded-lg bg-blue-50 p-3">
            <p className="text-secondary-600 text-sm">
              <strong>Demo Account:</strong>
              <br />
              Username: demo
              <br />
              Password: password123
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
