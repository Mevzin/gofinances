import React from 'react';

import {
  Container,
  Header,
  Photo,
  User,
  UserInfo,
  UserName,
  UserGreeting,
  UserWrapper
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: 'https://avatars.githubusercontent.com/u/47527659?v=4' }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Thiago</UserName>
            </User>
          </UserInfo>
        </UserWrapper>
      </Header>
    </Container>
  );
}
