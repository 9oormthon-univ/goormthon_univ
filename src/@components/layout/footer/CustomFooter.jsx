import React from 'react';
import * as S from './style';
import { FacebookIcon, GithubIcon, InstagramIcon } from '@goorm-dev/gds-icons';

function CustomFooter() {
  return (
    <S.FooterWrapper>
      <S.FooterContents>
        <S.FooterSlogan>Being All Seasons with goorm</S.FooterSlogan>
        <S.SocialContainer>
          <S.SocialIcon href="https://github.com/9oormthon-univ" target="_blank" rel="noopener noreferrer">
            <GithubIcon width="40" height="40" />
          </S.SocialIcon>
          <S.SocialIcon
            href="https://www.instagram.com/9oormthonuniv.official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon width="40" height="40" />
          </S.SocialIcon>
          {/*} <S.SocialIcon href="https://facebook.com/9oormthonuniv.official/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon width="40" height="40" />
          </S.SocialIcon> */}
        </S.SocialContainer>
      </S.FooterContents>
    </S.FooterWrapper>
  );
}
export default CustomFooter;
