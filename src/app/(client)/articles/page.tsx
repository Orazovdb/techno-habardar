import AdBanner from '@/components/block/adbanner/AdBanner'
import PagesHeader from '@/components/block/pages-header/PagesHeader'
import { pagesHeader } from '@/datas/pagesHeader.data'

const ArticlesPage = () => {
	return (
		<>
			<PagesHeader pagesHeader={pagesHeader} />
			<AdBanner />
		</>
	)
}

export default ArticlesPage
