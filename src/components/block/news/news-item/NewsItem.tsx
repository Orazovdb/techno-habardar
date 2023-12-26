import { INews } from '@/types/news.types'
import styles from './NewsItem.module.scss'

interface INewsProps {
	news: INews
}

export default function NewsItem({ news }: INewsProps) {
	return (
		<div className={styles.newsItem}>
			<span>{news.date}</span>
			<p>{news.text}</p>
		</div>
	)
}
