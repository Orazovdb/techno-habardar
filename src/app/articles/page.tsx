import PagesHeader from '@/components/block/pages-header/PagesHeader'
import { pagesHeader } from '@/datas/pagesHeader.data'

const ArticlesPage = () => {
	return (
		<div>
			<PagesHeader pagesHeader={pagesHeader} />
		</div>
	)
}

export default ArticlesPage
