import Image from 'next/image'
import styles from './StickyTop.module.scss'

export default function StickyTop() {
	return (
		<div className={styles.stickyTop}>
			<Image src='/arrow_up.svg' alt='stickyTop' width={18} height={18} />
		</div>
	)
}
