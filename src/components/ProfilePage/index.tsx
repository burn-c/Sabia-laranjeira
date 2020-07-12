import React from 'react';

import { Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined >Editar perfil</EditButton>

        <h1>Carlos Oliveira</h1>
        <h2>carlos_burn</h2>

        <p>
          Developer <a href="https://github.com/burn-c" >@GitHub</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Ribeirão Preto, Brasil
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 00 de janeiro de 1900
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>144</strong>
          </span>
          <span>
            <strong>890 </strong>seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />

    </Container>
  );
}

export default ProfilePage;