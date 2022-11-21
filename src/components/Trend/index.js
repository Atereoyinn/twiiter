import { TrendContainer } from "../../styles/TrendStyle"
import TrendSearch from "./TrendSearch"
import TrendTable from "./TrendTable"
import WhoToFollow from "./WhoToFollow"


const index = () => {
  return (
    <TrendContainer>
      <TrendSearch />
      <TrendTable />
      <WhoToFollow />
    </TrendContainer>
  )
}

export default index