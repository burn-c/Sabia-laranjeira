import React from 'react';

import StickyBox from 'react-sticky-box';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body

} from './styles';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
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
          <News />,
          <News />,
          <News />
        ]}
        />
         <List
        title="Opa tudo bem?"
        elements={[
          <News />,
          <News />,
          <News />
        ]}
        />
         <List
        title="Opa tudo bem?"
        elements={[
          <News />,
          <News />,
          <News />
        ]}
        />
         <List
        title="Opa tudo bem?"
        elements={[
          <News />,
          <News />,
          <News />
        ]}
        />


      </Body>
      </StickyBox>
      
    </Container>
  );
}

export default SideBar;