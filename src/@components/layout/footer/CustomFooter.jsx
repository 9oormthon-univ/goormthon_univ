import React from 'react';
import * as S from './style';
import { FacebookIcon, GithubIcon, InstagramIcon } from '@goorm-dev/gds-icons';

function CustomFooter() {
  return (
    <S.FooterWrapper>
      <S.FooterSlogan>Being All Seasons with goorm</S.FooterSlogan>
      <S.SocialContainer>
        <S.SocialContainer>
          <S.SocialIcon href="https://github.com/goormthon-Univ" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </S.SocialIcon>
          <S.SocialIcon
            href="https://www.instagram.com/9oormthonuniv.official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </S.SocialIcon>
          <S.SocialIcon href="https://facebook.com/9oormthonuniv.official/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </S.SocialIcon>
        </S.SocialContainer>
      </S.SocialContainer>
    </S.FooterWrapper>
  );
}
export default CustomFooter;
