import AdBanner from '@/components/block/adbanner/AdBanner'
import Banner from '@/components/block/banner/Banner'
import Common from '@/components/block/common/Common'
import News from '@/components/block/news/News'
import StickyTop from '@/components/ui/sticky-top/StickyTop'
import { CommonData } from '@/datas/common.data'
import styles from './page.module.scss'

export default function Home() {
	return (
		<>
			<Banner />
			<div className={styles.commonWrapper}>
				{CommonData.map((item, i) => (
					<Common key={i} common={item} />
				))}

				<News />

				<AdBanner />

				<StickyTop />
			</div>
		</>
	)
}
