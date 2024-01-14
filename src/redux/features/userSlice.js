import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
  },
  reducers: {
    userAdd(state, action) {
      state.user = action.payload
    },
  },
})

export const { userAdd } = userSlice.actions
