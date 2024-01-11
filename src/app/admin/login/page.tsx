'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FormEventHandler } from 'react'
import styles from './Page.module.scss'

export default function LoginPage() {
	const router = useRouter()

	const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const res = await signIn('credentials', {
			login: formData.get('login'),
			password: formData.get('password'),
			redirect: false
		})
		console.log(res)

		if (res && !res.error) {
			router.push('/admin')
		} else {
			console.log(res)
		}
	}

	return (
		<div className={styles.login}>
			<div className={styles.box}>
				<form onSubmit={handleSubmit}>
					<h1 className={styles.title}>Techno-habardar</h1>
					<input type='text' name='login' required />
					<input type='password' name='password' required />
					<button>Go to admin</button>
				</form>
			</div>
		</div>
	)
}
