import axios from "axios"

const authUser = {
  async userRegister(username, password) {
    try {
      const payload = {
        username: username,
        password: password,
      }

      console.log("Registering user with payload:", payload);
      

      const response = await axios.post(`${import.meta.env.VITE_APP_SERVICE_URL}/api/users`, payload)
      return response
    } catch (error) {
      throw error
    }

  },

  async userLogin(payload) {
    try {
      payload = {
        username: payload.username,
        password: payload.password,
        rememberMe: payload.rememberMe || false,
      }
      const response = await axios.post(`${import.meta.env.VITE_APP_SERVICE_URL}/api/users/login`, payload)
      return response
    } catch (error) {
      throw error
    }
  },
}

export default authUser

// export const userLogin = async (payload) => {
//   try {
//     payload = {
//       username: payload.username,
//       password: payload.password,
//       rememberMe: payload.rememberMe || false,
//     }
//     const response = await axios.post(
//       `${import.meta.env.VITE_APP_SERVICE_URL}/api/users/login`,
//       payload
//     )
//     return response
//   } catch (error) {
//     throw error
//   }
// }
