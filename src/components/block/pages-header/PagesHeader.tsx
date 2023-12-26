import { IPagesHeader } from '@/types/pagesHeader.types'
import styles from './PagesHeader.module.scss'

interface IPagesHeaderProps {
	pagesHeader: IPagesHeader
}

export default function PagesHeader({ pagesHeader }: IPagesHeaderProps) {
	return (
		<div className={styles.pagesHeader}>
			<h1>{pagesHeader.title}</h1>
			<div className={styles.authorBlock}>
				<h2>{pagesHeader.author}</h2>
				<h3>{pagesHeader.date}</h3>
			</div>
		</div>
	)
}
