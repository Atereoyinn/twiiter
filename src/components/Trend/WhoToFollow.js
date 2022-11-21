import React from 'react'
import { Text } from '../../styles/sideBarStyle'
import { TrendTableContainer } from '../../styles/TrendStyle'
import WhoToFollowCard from './WhoToFollowCard'


const WhoToFollow = () => {
  const WhoToFollowContainer = TrendTableContainer
  return (
    <WhoToFollowContainer style={{marginTop:"20px",paddingRight:"20px"}}>
      <WhoToFollowCard />
      <WhoToFollowCard />
      <WhoToFollowCard />
      <Text style={{fontWeight:"200",marginLeft:"20px",color:"rgb(78, 201, 255)"}}>Show more</Text>
    </WhoToFollowContainer>
  )
}

export default WhoToFollow