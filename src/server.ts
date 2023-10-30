/**
 * This file is the entry point for the server.
 * It creates an Express application and starts listening on the specified port.
 * It also loads environment variables from the .env file.
 * The server is responsible for handling requests and responses.
 * It uses the "users" for user-related endpoints.
 */

import express from "express"
import { config } from "dotenv"
import users from "./routes/users"

// Load environment variables from .env
config()

// Define the port, defaulting to 3000 if not provided in the environment
const PORT = Number(process.env?.PORT) || 3000

// Create an Express application
const app = express()

// Parse JSON requests
app.use(express.json())

// Use the userRoutes for user-related endpoints
app.use("/users", users)

// Start the server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
