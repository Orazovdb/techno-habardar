import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className='__container'>
				<div className={styles.row}>
					<div className={styles.left}>
						<p>Copyright © 2002—2023 mobile-review.com</p>
						<p>
							Mobile-Review.com простым языком рассказывает о технологиях,
							гаджетах, устройстве бизнеса электроники изнутри и интересных
							событиях в мире IT. На сайте представлены как статьи для широкого
							круга читателей, так и профильные материалы для игроков
							рынка.Mobile-Review.com – ресурс для думающей аудитории, желающей
							знать сегодня, что произойдёт на рынке высоких технологий завтра.
						</p>
					</div>
					<div className={styles.right}>
						<ul>
							<li>
								<Link href='/about-us'>О НАС</Link>
							</li>
							<li>
								<Link href='/advertisers'>РЕКЛАМОДАТЕЛЯМ</Link>
							</li>
							<li>
								<Link href='/work-us'>РАБОТА У НАС</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
