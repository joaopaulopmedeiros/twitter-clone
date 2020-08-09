import React from 'react'

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        
        <ProfileInfo>
            <strong>João Paulo M.</strong>
            <span>100 Tweets</span>
        </ProfileInfo>

        {/* <ProfilePage /> */}
        {/* 
        <BottomMenu>
          <HomeIcon />
          <SearchIcon />
          <BellIcon />
          <EmailIcon />
        </BottomMenu> */}
        
      </Header>
    </Container>
  )
}

export default Main