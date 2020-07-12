import React from 'react';


import { Container,
  Retweeted,
  BurnDevIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <BurnDevIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>BurnDev</strong>
            <span>@burndev</span>
            <Dot />
            <time>10 de jun</time>
          </Header>

          <Description>Foguete não tem ré 🚀</Description>

          <ImageContent />

          <Icons>
            
            <Status>
              <CommentIcon />
              100
            </Status>


            <Status>
              <RetweetIcon />
              100
            </Status>


            <Status>
              <LikeIcon />
              100
            </Status>

          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;