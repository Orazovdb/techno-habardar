import Image from 'next/image'
import Link from 'next/link'
import './Header.module.scss'
import styles from './Header.module.scss'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.row}>
				<div className={styles.left}>
					<div className={styles.burgerWrapper}>
						<div className={styles.burger}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<div className={styles.menuList}>
						<Link href='/news'>Новости</Link>
						<Link href='/reviews'>Обзоры</Link>
						<Link href='/articles'>Статьи</Link>
					</div>
				</div>
				<div className={styles.center}>
					<Link href='/articles'>Статьи</Link>
					<Link href='/news'>Новости</Link>
				</div>
				<div className={styles.right}>
					<div className={styles.search}>
						<Image
							src='/search.svg'
							alt='social'
							width={20}
							height={20}
							priority
						/>
					</div>
					<div className={styles.icons}>
						<div className={styles.icon}>
							<Image
								src='/social-media.svg'
								alt='social'
								width={20}
								height={20}
								priority
							/>
						</div>
						<div className={styles.icon}>
							<Image
								src='/social-media.svg'
								alt='social'
								width={20}
								height={20}
								priority
							/>
						</div>
						<div className={styles.icon}>
							<Image
								src='/social-media.svg'
								alt='social'
								width={20}
								height={20}
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
