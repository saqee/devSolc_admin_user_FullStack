import { alertSlice } from "./features/alertSlice"
import { userSlice } from "./features/userSlice"
import { configureStore } from "@reduxjs/toolkit"
const store = configureStore({
  reducer: {
    alert: alertSlice.reducer,
    user: userSlice.reducer,
  },
})
export default store
