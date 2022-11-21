import { MoreHorizOutlined } from '@mui/icons-material'
import { Category, Trend, TrendDetails, TrendDetailsContainer, TrendDetailsWrapper, Trending } from '../../styles/TrendStyle'

const TrendCard = () => {
  return (
    <TrendDetailsContainer>
        <TrendDetailsWrapper>
            <TrendDetails>
                <Category>Politics.Trending</Category>
                <MoreHorizOutlined style={{color:"darkgray"}} />
            </TrendDetails>
            <Trend>Seyi Makinde</Trend>
        </TrendDetailsWrapper>
    </TrendDetailsContainer>
  )
}

export default TrendCard