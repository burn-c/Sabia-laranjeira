import React from 'react';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body

} from './styles';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
        title="Talvez você curta"
        elements={[
          <FollowSuggestion
            name="Fulano Oliveira"
            nickname="@fulano2020"
          />,

          <FollowSuggestion
          name="Beltrano Oliveira"
          nickname="@beltrano2020"
        />,

        <FollowSuggestion
        name="Ciclano Oliveira"
        nickname="@ciclano2020"
      />

        ]}
        />

        <List
        title="Opa tudo bem?"
        elements={[
          <h1>Teste</h1>,
          <h1>Teste</h1>,
          <h1>Teste</h1>,
          <h1>Teste</h1>
        ]}
        />


      </Body>
    </Container>
  );
}

export default SideBar;