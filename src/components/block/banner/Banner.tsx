import Image from 'next/image'
import styles from './Banner.module.scss'

export default function Banner() {
	return (
		<div className={styles.banner}>
			<Image src='/banner.png' alt='banner' fill />
		</div>
	)
}
