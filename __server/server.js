import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"

import { databaseConnect } from "./config/database.js"
import cors from "cors"

dotenv.config()

//database connection

databaseConnect()

//all the middlewares
const app = express()
app.use(express.json())
app.use(cors())

//all routes for the application
app.use("/api/v1/user/", userRoutes)

//server connection
app.listen(process.env.PORT, () => {
  console.log("server is running on port " + process.env.PORT)
})
