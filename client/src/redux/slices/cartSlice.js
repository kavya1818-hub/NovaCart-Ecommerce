import { createSlice } from "@reduxjs/toolkit"

const getCurrentUserCart = () => {

  const user = JSON.parse(

    localStorage.getItem(
      "novacartUser"
    )

  )

  if (!user) return []

  return JSON.parse(

    localStorage.getItem(
      `cart_${user.email}`
    )

  ) || []

}

const saveCart = (cartItems) => {

  const user = JSON.parse(

    localStorage.getItem(
      "novacartUser"
    )

  )

  if (!user) return

  localStorage.setItem(

    `cart_${user.email}`,

    JSON.stringify(cartItems)

  )

}

const initialState = {

  cartItems: [],

}

const cartSlice = createSlice({

  name: "cart",

  initialState,

  reducers: {

    loadCart: (state) => {

      state.cartItems =
        getCurrentUserCart()

    },

    addToCart: (state, action) => {

      const itemExists =
        state.cartItems.find(
          item =>
            item._id === action.payload._id
        )

      if (itemExists) {

        itemExists.quantity += 1

      } else {

        state.cartItems.push({

          ...action.payload,

          quantity: 1,

        })

      }

      saveCart(state.cartItems)

    },

    increaseQuantity: (state, action) => {

      const item = state.cartItems.find(
        item =>
          item._id === action.payload
      )

      if (item) {

        item.quantity += 1

      }

      saveCart(state.cartItems)

    },

    decreaseQuantity: (state, action) => {

      const item = state.cartItems.find(
        item =>
          item._id === action.payload
      )

      if (
        item &&
        item.quantity > 1
      ) {

        item.quantity -= 1

      }

      saveCart(state.cartItems)

    },

    removeFromCart: (state, action) => {

      state.cartItems =
        state.cartItems.filter(
          item =>
            item._id !== action.payload
        )

      saveCart(state.cartItems)

    },

    clearCart: (state) => {

      state.cartItems = []

    },

  },

})

export const {

  loadCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,

} = cartSlice.actions

export default cartSlice.reducer