import type { Metadata } from 'next'
import { IBM_Plex_Sans, Inter, Oswald } from 'next/font/google'

import Layout from '@/components/layout/Layout'
import './globals.scss'

export const ibm = IBM_Plex_Sans({
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
	style: 'normal',
	variable: '--font-ibm'
})

export const oswald = Oswald({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
	style: 'normal',
	variable: '--font-oswald'
})

export const inter = Inter({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
	style: 'normal',
	variable: '--font-inter'
})

export const metadata: Metadata = {
	title: 'techno-habardar',
	description: 'Ahli habarlar shu yerde'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='en'
			className={`
				${ibm.variable} ${inter.variable} ${oswald.variable}
			`}
		>
			<body>
				<Layout children={children} />
			</body>
		</html>
	)
}
