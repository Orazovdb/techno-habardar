import type { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const authConfig: AuthOptions = {
	providers: [
		// GoogleProvider({
		// 	clientId: process.env.GOOGLE_ID!,
		// 	clientSecret: process.env.GOOGLE_SECRET!
		// }),
		Credentials({
			credentials: {
				login: { label: 'Username', type: 'text', required: true },
				password: { label: 'Password', type: 'password', required: true }
			},
			async authorize(credentials) {
				if (!credentials?.login || !credentials.password) return null

				const res = await fetch('http://216.250.12.77/api/v2/admin/login', {
					method: 'POST',
					body: JSON.stringify(credentials),
					headers: { 'Content-Type': 'application/json' }
				})

				const user = await res.json()

				if (res.ok && user) {
					return user
				}
				return null
			}
		})
	],
	pages: {
		signIn: '/admin/login'
	}
}
