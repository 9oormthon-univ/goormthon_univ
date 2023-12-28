import React from 'react';

import EduIcon from '../../../assets/svgs/favicon_edu.svg';
import ExpIcon from '../../../assets/svgs/favicon_exp.svg';
import InflearnIcon from '../../../assets/svgs/favicon_inflearn.svg';
import IdeIcon from '../../../assets/svgs/favicon_ide.svg';
import KakaoIcon from '../../../assets/svgs/favicon_kakao.svg';

import EduImg from '../../../assets/svgs/benefit-goormedu.svg';
import ExpImg from '../../../assets/svgs/benefit-goormexp.svg';
import IdeImg from '../../../assets/svgs/benefit-goormide.svg';
import InflearnImg from '../../../assets/svgs/benefit-inflearn.svg';
import KakaoImg from '../../../assets/svgs/benefit-kakao.svg';
import BenefitItem from './BenefitItem';

import * as S from './style';

export default function BenefitList() {
  const BENEFIT_ITEM_DATA = [
    {
      imgSrc: IdeImg,
      iconSrc: IdeIcon,
      bgColor: 'var(--light-gray-gray-950, #252730)',
      title: '구름 IDE',
      description: '손쉽게 개발환경을 만들고\n효율적으로 협업해요',
    },
    {
      imgSrc: ExpImg,
      iconSrc: ExpIcon,
      bgColor: '#E1E1E8',
      title: '구름 EXP',
      description: '업무를 게임하듯 관리하고\n조직 생산성을 쌓아요',
    },
    {
      imgSrc: EduImg,
      iconSrc: EduIcon,
      bgColor: 'var(--light-blue-blue-400, #74AAFB)',
      title: '구름 EDU',
      description: '교육 도구의 설치 없이\n수준 높은 IT교육을 받아요',
    },
    {
      imgSrc: InflearnImg,
      iconSrc: InflearnIcon,
      bgColor: '#00CD72',
      title: '인프런 쿠폰',
      description: '인프런과 구름의 만남!\n더욱 다양한 강의를 만나요',
    },
    {
      imgSrc: KakaoImg,
      iconSrc: KakaoIcon,
      bgColor: 'var(--light-yellow-yellow-300, #FFD54F)',
      title: '카카오 클라우드',
      description: '유연하고 확장성 높은\n클라우드 인프라를 누려요',
    },
  ];

  return (
    <S.BenefitListWrapper>
      {BENEFIT_ITEM_DATA.map((item) => (
        <BenefitItem
          imgSrc={item.imgSrc}
          iconSrc={item.iconSrc}
          bgColor={item.bgColor}
          title={item.title}
          description={item.description}
        />
      ))}
    </S.BenefitListWrapper>
  );
}
