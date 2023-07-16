import { FilterTransfer } from '../components/FilterTransfer'
import { ReportTransfer } from '../components/ReportTransfer'
import { SectionBody } from '../style/HomeStyle'

export const Home = () => {
    return <SectionBody>
        <FilterTransfer/>
        <ReportTransfer/>
    </SectionBody>
}