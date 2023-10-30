import express, { Request, Response } from "express"
import prisma from "../db/prisma"

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
	const users = await prisma.user.findMany()
	res.json({ success: true, data: users })
})

router.get("/:id", async (req: Request, res: Response) => {
	const { id } = req.params
	if (!id) {
		return res
			.status(400)
			.json({ success: false, message: "Please provide an id" })
	}

	try {
		const user = await prisma.user.findUnique({
			where: {
				id: String(id),
			},
		})

		if (!user) {
			return res
				.status(404)
				.json({ success: false, message: "User not found" })
		}
		res.json({ success: true, data: user })
	} catch (error: any) {
		res.status(500).json({ success: false, message: error.meta.target })
	}
})

router.post("/", async (req: Request, res: Response) => {
	const { name, email, age } = req.body
	if (!name || !email || !age) {
		return res
			.status(400)
			.json({ success: false, message: "Please provide all fields" })
	}

	try {
		const user = await prisma.user.create({
			data: {
				name,
				email,
				age,
			},
		})
		res.status(201).json({ success: true, data: user })
	} catch (error: any) {
		res.status(500).json({ success: false, message: error.meta.target })
	}
})

router.put("/:id", async (req: Request, res: Response) => {
	const { id } = req.params
	const { name, email, age } = req.body
	if (!id || !name || !email || !age) {
		return res
			.status(400)
			.json({ success: false, message: "Please provide all fields" })
	}

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
		res.json({ success: true, data: user })
	} catch (error: any) {
		res.status(500).json({ success: false, message: error.meta.target })
	}
})

router.delete("/:id", async (req: Request, res: Response) => {
	const { id } = req.params
	if (!id) {
		return res
			.status(400)
			.json({ success: false, message: "Please provide an id" })
	}

	try {
		const user = await prisma.user.delete({
			where: {
				id: String(id),
			},
		})
		res.json({ success: true, data: user })
	} catch (error: any) {
		res.status(500).json({ success: false, message: error.meta.target })
	}
})

export default router
