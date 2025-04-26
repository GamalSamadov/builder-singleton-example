export const config = {
	IS_DEBUG: process.env.APP_DEBUG === 'true',
	ENV: process.env.NODE_ENV || 'development',
	PORT: Number(process.env.PORT) || 4200
}
