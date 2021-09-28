import React from 'react';

import { HighlightCard } from '../../Components/HighlightCard';
import { TransactionCard } from '../../Components/TransactionCard';

import {
  Container,
  Header,
  Photo,
  User,
  UserInfo,
  UserName,
  UserGreeting,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title
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
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Ultima transação feita em 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saidas"
          amount="R$ 1.259,00"
          lastTransaction="Ultima transação feita em 13 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 á 16 de abril"
        />
      </HighlightCards>
    
    <Transactions>
      
      <Title>Listagem</Title>

      <TransactionCard />
    </Transactions>
    
    </Container>
  );
}
