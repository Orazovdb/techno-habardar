'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import './Header.module.scss'
import styles from './Header.module.scss'

export default function Header() {
	const [isOpenMenu, setIsOpenMenu] = useState(false)
	const handleClickMenu = () => {
		setIsOpenMenu(current => !current)
	}
	return (
		<header className={styles.header}>
			<div className={styles.row}>
				<div className={styles.left}>
					<button onClick={handleClickMenu} className={styles.burgerWrapper}>
						<div
							className={
								isOpenMenu ? styles.burger + ' ' + styles.active : styles.burger
							}
						>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</button>
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
			<nav
				className={
					isOpenMenu
						? styles.expandedMenu + ' ' + styles.open
						: styles.expandedMenu
				}
			>
				<ul className={styles.categoriesList}>
					<li>
						<Link href='/'>Новости</Link>
					</li>
					<li>
						<Link href='/'>Обзоры</Link>
					</li>
					<li>
						<Link href='/'>Статьи</Link>
					</li>
				</ul>
				<ul className={styles.expandedMenuList}>
					<li>
						<Link href='/'>СМАРТФОНЫ</Link>
					</li>
					<li>
						<Link href='/'>СМАРТФОНЫ</Link>
					</li>
					<li>
						<Link href='/'>СМАРТФОНЫ</Link>
					</li>
					<li>
						<Link href='/'>СМАРТФОНЫ</Link>
					</li>
					<li>
						<Link href='/'>СМАРТФОНЫ</Link>
					</li>
					<li>
						<Link href='/'>СМАРТФОНЫ</Link>
					</li>
					<li>
						<Link href='/'>СМАРТФОНЫ</Link>
					</li>
					<li>
						<Link href='/'>СМАРТФОНЫ</Link>
					</li>
				</ul>
				<ul className={styles.categoriesList}>
					<li>
						<Link href='/'>Новости</Link>
					</li>
					<li>
						<Link href='/'>Обзоры</Link>
					</li>
					<li>
						<Link href='/'>Статьи</Link>
					</li>
				</ul>
				<ul className={styles.misc}>
					<li>
						<Link href='/'>О Сайте</Link>
					</li>
					<li>
						<Link href='/'>О Сайте</Link>
					</li>
					<li>
						<Link href='/'>О Сайте</Link>
					</li>
					<li>
						<Link href='/' className={styles.social}>
							<Image
								src='/social-media.svg'
								alt='social'
								width={20}
								height={20}
							/>
						</Link>
						<Link href='/' className={styles.social}>
							<Image
								src='/social-media.svg'
								alt='social'
								width={20}
								height={20}
							/>
						</Link>
						<Link href='/' className={styles.social}>
							<Image
								src='/social-media.svg'
								alt='social'
								width={20}
								height={20}
							/>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
