import styles from './Layout.module.scss'
import Footer from './footer/Footer'
import Header from './header/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>
				<div className='__container'>
					<div className={styles.wrapper}>{children}</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}
