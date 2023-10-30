import express from "express"
import { config } from "dotenv"
import userRoutes from "./routes/users"

config()
const PORT = Number(process.env?.PORT) || 3000

const app = express()
app.use(express.json())

// Use the userRoutes for user-related endpoints
app.use("/users", userRoutes)

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
