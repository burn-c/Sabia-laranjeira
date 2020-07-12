import React from 'react';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body

} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <p>
          {'Aqui tem aluns elementos pode ter certeza. '.repeat(90)}
        </p>
      </Body>
    </Container>
  );
}

export default SideBar;