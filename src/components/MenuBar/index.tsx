import React from 'react';

import { Container, TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon
 } from './styles';

import Button from '../Button';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>


        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>


        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>


        <MenuButton>
          <FavoriteIcon />
          <span>Favoritol</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>

      </TopSide>

      <BotSide>
        <Avatar />

        <ProfileData>
          <strong>Carlos Oliveira</strong>
          <span>@twitter</span>
        </ProfileData>

        <ExitIcon />

      </BotSide>

    </Container>
  );
}

export default MenuBar;