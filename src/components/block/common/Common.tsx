import { ICommon } from '@/types/common.types'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Common.module.scss'

interface ICommonProps {
	common: ICommon
}

export default function Common({ common }: ICommonProps) {
	return (
		<article className={styles.common}>
			<Link href={common.categoryUrl} className={styles.topline}>
				{common.category}
			</Link>
			<div className={styles.image}>
				<Image src='/banner.png' alt='common' fill />
			</div>
			<div className={styles.content}>
				<Link href={common.authorUrl} className={styles.author}>
					{common.author}
				</Link>
				<Link href={common.titleUrl} className={styles.link}>
					<h1>{common.title}</h1>
					<p>{common.description}</p>
				</Link>
				<div className={styles.taglist}>
					<Link href={common.tagUrl}> {common.tag} </Link>
				</div>
			</div>
		</article>
	)
}
