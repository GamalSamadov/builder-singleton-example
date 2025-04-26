import { PrismaClient } from '@prisma/client'

export class PrismaConnection {
	/*
		Singleton pattern to ensure that only one instance of PrismaClient is created
		and used throughout the application.
	*/
	private static instance: PrismaConnection
	private client: PrismaClient | null = null

	private constructor() {
		this.client = new PrismaClient()
	}

	static getInstance(): PrismaConnection {
		if (!this.instance) {
			this.instance = new PrismaConnection()
		}

		return this.instance
	}

	async connect() {
		if (!this.client) {
			this.client = new PrismaClient()
		}
		await this.client.$connect()
		return this.client
	}
}
