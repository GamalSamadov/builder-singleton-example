import { PrismaConnection } from '@/core/db/connect'
import { User } from '@prisma/client'

const prisma = PrismaConnection.getInstance()

export class UserService {
	create(): Promise<User> {
		return prisma.user.create()
	}
}
