import {Text} from "../../styles/sideBarStyle"
import { TrendTableContainer } from '../../styles/TrendStyle'
import TrendCard from "./TrendCard"

const TrendTable = () => {
  return (
    <TrendTableContainer>
        <Text>Trends for you</Text>
        <TrendCard />
        <TrendCard />
        <TrendCard />
        <TrendCard />
    </TrendTableContainer>
  )
}

export default TrendTable