import SignOut from '@/components/SignOut'
import { authConfig } from '@/configs/auth'
import { getServerSession } from 'next-auth'

const DashboardPage = async () => {
	// const session = useSession()
	const session = await getServerSession(authConfig)
	console.log(session)

	return (
		<div>
			<h1>Profile name is {session?.user?.name}</h1>
			{session?.user?.image && <img src={session?.user?.image} alt='profile' />}
			<SignOut />)
		</div>
	)
}

export default DashboardPage
