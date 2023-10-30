/**
 * This file contains all the routes for the users resource
 * It uses the Prisma client to interact with the database
 * It uses the Express Router to define the routes
 */

import express, { Request, Response } from "express"
import prisma from "../db/prisma"

// Create a new router
const router = express.Router()

// Get all users
router.get("/", async (req: Request, res: Response) => {
	try {
		const users = await prisma.user.findMany()
		res.json({ success: true, data: users })
	} catch (error: any) {
		res.status(500).json({ success: false, message: error.meta.target })
	}
})

// Get a specific user by ID
router.get("/:id", async (req: Request, res: Response) => {
	// Get the id from the request parameters
	const { id } = req.params

	// If no id is provided, send an error response
	if (!id) {
		return res
			.status(400)
			.json({ success: false, message: "Please provide an id" })
	}

	// If an id is provided, query the database for the user
	try {
		const user = await prisma.user.findUnique({
			where: {
				id: String(id),
			},
		})

		// If no user is found, send an error response
		if (!user) {
			return res
				.status(404)
				.json({ success: false, message: "User not found" })
		}

		// If a user is found, send it in the response
		res.json({ success: true, data: user })
	} catch (error: any) {
		res.status(500).json({ success: false, message: error.meta.target })
	}
})

// Create a new user
router.post("/", async (req: Request, res: Response) => {
	// Get the name, email and age from the request body
	const { name, email, age } = req.body

	// If any of the fields are missing, send an error response
	if (!name || !email || !age) {
		return res
			.status(400)
			.json({ success: false, message: "Please provide all fields" })
	}

	// Create the user in the database
	try {
		const user = await prisma.user.create({
			data: {
				name,
				email,
				age,
			},
		})

		// Send the created user in the response
		res.status(201).json({ success: true, data: user })
	} catch (error: any) {
		res.status(500).json({ success: false, message: error.meta.target })
	}
})

// Update a user by ID
router.put("/:id", async (req: Request, res: Response) => {
	// Get the id from the request parameters
	const { id } = req.params

	// Get the name, email and age from the request body
	const { name, email, age } = req.body

	// If any of the fields are missing, send an error response
	if (!id || !name || !email || !age) {
		return res
			.status(400)
			.json({ success: false, message: "Please provide all fields" })
	}

	// Update the user in the database
	try {
		const user = await prisma.user.update({
			where: {
				id: String(id),
			},
			data: {
				name,
				email,
				age,
			},
		})

		// Send the updated user in the response
		res.json({ success: true, data: user })
	} catch (error: any) {
		res.status(500).json({ success: false, message: error.meta.target })
	}
})

// Delete a user by ID
router.delete("/:id", async (req: Request, res: Response) => {
	// Get the id from the request parameters
	const { id } = req.params

	// If no id is provided, send an error response
	if (!id) {
		return res
			.status(400)
			.json({ success: false, message: "Please provide an id" })
	}

	// Delete the user from the database
	try {
		const user = await prisma.user.delete({
			where: {
				id: String(id),
			},
		})

		// Send the deleted user in the response
		res.json({ success: true, data: user })
	} catch (error: any) {
		res.status(500).json({ success: false, message: error.meta.target })
	}
})

export default router
