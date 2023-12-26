import Button from '@/components/ui/button/Button'
import styles from './News.module.scss'
import NewsItem from './news-item/NewsItem'
import { NewsData } from './news.data'

export default function News() {
	return (
		<div className={styles.news}>
			<div className={styles.row}>
				{NewsData.map((item, i) => (
					<NewsItem key={i} news={item} />
				))}
			</div>
			<div className={styles.buttonWrapper}>
				<Button>ВСЕ НОВОСТИ</Button>
			</div>
		</div>
	)
}
