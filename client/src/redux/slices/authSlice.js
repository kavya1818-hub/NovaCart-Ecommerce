import { createSlice }
from "@reduxjs/toolkit"

const storedUser =

  localStorage.getItem(
    "novacartUser"
  )

const authSlice = createSlice({

  name: "auth",

  initialState: {

    user: storedUser

      ? JSON.parse(storedUser)

      : null,

  },

  reducers: {

    login: (state, action) => {

      state.user = action.payload

      localStorage.setItem(

        "novacartUser",

        JSON.stringify(
          action.payload
        )

      )

    },

    logout: (state) => {

      state.user = null

      localStorage.removeItem(
        "novacartUser"
      )

      window.location.reload()

    },

  },

})

export const {
  login,
  logout,
} = authSlice.actions

export default authSlice.reducer