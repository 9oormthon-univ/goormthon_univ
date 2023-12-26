import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import { FacebookIcon, GithubIcon, InstagramIcon, MenuIcon } from '@goorm-dev/gds-icons';

function Footer() {
  return (
    <S.FooterWrapper>
      <S.FooterSlogan>Being All Seasons with goorm</S.FooterSlogan>
      <S.SocialContainer>
        <InstagramIcon style={{ marginRight: '2rem' }} />
        <GithubIcon style={{ marginRight: '2rem' }} />
        <FacebookIcon />
      </S.SocialContainer>
    </S.FooterWrapper>
  );
}
export default Footer;
