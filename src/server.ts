import express, { Request, Response } from 'express'
import { config } from './config'

const app = express()
const port = config.PORT

async function run() {
	app.all('/', (_: Request, res: Response): void => {
		res.status(200).json({
			message: 'Hello from the server!'
		})
	})
}

run().then(() => {
	app.listen(port, () => {
		console.log(`Server is running at http://localhost:${port}`)
	})
})
