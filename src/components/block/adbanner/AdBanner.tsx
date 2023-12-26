import Image from 'next/image'
import styles from './AdBanner.module.scss'

export default function AdBanner() {
	return (
		<div className={styles.adBanner}>
			<Image src='/megafon.png' alt='adBanner' fill />
		</div>
	)
}
