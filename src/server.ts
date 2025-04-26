import express, { Request, Response } from 'express'
import { config } from './core/config'
import { PrismaConnection } from './core/db/connect'

const app = express()
const port = config.PORT

async function run() {
	app.all('/', (_: Request, res: Response): void => {
		res.status(200).json({
			message: 'Hello from the server!'
		})
	})
}

run()
	.then(async () => {
		await PrismaConnection.getInstance().connect()
		app.listen(port, () => {
			console.log(`Server is running at http://localhost:${port}`)
		})
	})
	.catch(err => {
		console.error('Error while connection on the server:', err)
		process.exit(1)
	})
