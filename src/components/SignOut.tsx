'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const SignOut = () => {
	const session = useSession()
	return (
		<>
			{session.data && (
				<Link href='#' onClick={() => signOut()}>
					Sign out Bro
				</Link>
			)}
		</>
	)
}

export default SignOut
