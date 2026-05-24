import { configureStore }
from "@reduxjs/toolkit"

import authReducer
from "./slices/authSlice"

import cartReducer
from "./slices/cartSlice"

const user = JSON.parse(

  localStorage.getItem(
    "novacartUser"
  )

)

const cartFromStorage = user

  ? JSON.parse(

      localStorage.getItem(
        `cartItems_${user.email}`
      )

    ) || []

  : []

const store = configureStore({

  reducer: {

    auth: authReducer,

    cart: cartReducer,

  },

  preloadedState: {

    cart: {

      cartItems:
        cartFromStorage,

    },

  },

})

store.subscribe(() => {

  const currentUser = JSON.parse(

    localStorage.getItem(
      "novacartUser"
    )

  )

  if (currentUser) {

    localStorage.setItem(

      `cartItems_${currentUser.email}`,

      JSON.stringify(

        store.getState()
          .cart
          .cartItems

      )

    )

  }

})

export default store