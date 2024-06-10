import { GroupIcon, SchoolIcon, LightningIcon, CakeIcon } from '@goorm-dev/gds-icons';
import BeotkkotSmall from '../assets/svgs/BeotkkotSmall';
import Lightbulb from '../assets/svgs/Lightbulb';

import Img1 from '../assets/images/about/activity1.png';
import Img2 from '../assets/images/about/activity2.png';
import Img3 from '../assets/images/about/activity3.png';
import Img4 from '../assets/images/about/activity4.png';
import Img5 from '../assets/images/about/activity5.png';

import EduIcon from '../assets/svgs/favicon_edu.svg';
import ExpIcon from '../assets/svgs/favicon_exp.svg';
import InflearnIcon from '../assets/svgs/favicon_inflearn.svg';
import IdeIcon from '../assets/svgs/favicon_ide.svg';
import KakaoIcon from '../assets/svgs/favicon_kakao.svg';

import EduImg from '../assets/svgs/benefit-goormedu.svg';
import ExpImg from '../assets/svgs/benefit-goormexp.svg';
import IdeImg from '../assets/svgs/benefit-goormide.svg';
import InflearnImg from '../assets/svgs/benefit-inflearn.svg';
import KakaoImg from '../assets/svgs/benefit-kakao.svg';

export const TIMELINE_DATA = {
  1: {
    Icon: GroupIcon,
    title: '9oormthonUNIV 3기 모집!',
    description: '단풍톤을 함께 할 3기 운영진과 참가자를 모집해요.\n2024년을 함께 마무리해요!',
  },
  2: {
    Icon: SchoolIcon,
    title: 'OT',
    description: '구름톤 유니브 3기는 어떻게 진행될까요?\n이 시간에 알아보아요!!',
  },
  3: {
    Icon: Lightbulb,
    title: 'ONBOARDING',
    description: '해커톤을 시작하기 이전, 해커톤에 대해 알아봐요!\n다양한 연사자분께서 협업에 대해 알려주실거에요!',
  },
  4: {
    Icon: LightningIcon,
    title: '교육 및 세미 해커톤 기간',
    description: '단풍톤이 시작하기 이전 교내 스터디를 운영해요!세미 해커톤까지 해서 열심히 준비해보아요!)',
  },
  5: {
    Icon: BeotkkotSmall,
    title: '무박 2일, 단풍톤',
    description: '구름톤 유니브의 하이라이트, 단풍톤!\n모든 미르미가 밤을 새워 아이디어를 실현하는 장이에요.',
  },
  6: {
    Icon: CakeIcon,
    title: '구름톤 유니브 에프터 파티, 9UAP',
    description: '해커톤의 여운을 이어갈 수 있도록 현직자와 수상자의 세미나,\n그리고 마무리 회고를 진행해요.',
  },
};

export const ACTIVITY_DATA = [
  {
    imgSrc: Img1,
    title: '스터디',
    title_en: 'STUDY',
    description:
      '제공받은 IDE, EDU, 인프런 쿠폰을 사용하여\n교내 미르미 혹은 교외 미르미들과 자유롭게 스터디를 진행할 수 있습니다.',
  },
  {
    imgSrc: Img2,
    title: '온보딩',
    title_en: 'Onboarding',
    description:
      '단풍톤/단풍톤 진행이전에 \n온보딩을 통해 해커톤에 대해 다양한 인사이트를 얻어가세요!\n한 단계 더 성장할 수 있는 도약대가 될 거예요!',
  },
  {
    imgSrc: Img3,
    title: '해커톤',
    title_en: 'HACKATHON',
    description:
      '기획 1명, 디자인 1명, 프론트엔드 2명, 백엔드 2명 총 6명으로 하나의 팀을 구성하여 \n해커톤 기간까지 기획과 디자인 및 개발을 합니다. 봄에는 단풍톤, 가을에는 단풍톤이 진행됩니다.',
  },
  {
    imgSrc: Img4,
    title: '연합 행사',
    title_en: 'UNION EVENT',
    description:
      '본 해커톤이 끝난 후 2개 이상의 유니브가 모여 연합 해커톤 세미나를 진행하여 타 대학과 네트워킹을 더 할 수 있는 시간을 가질 수 있어요.',
  },
  {
    imgSrc: Img5,
    title: '애프터파티',
    title_en: '9UAP',
    description:
      '9UAP는 9oormthonUNIV After Party의 약자로, 해커톤 대상 및 최우수 수상자들과 현직 전문가들이 세미나를 진행합니다. 또한 지금까지의 과정을 회고하는 시간을 갖습니다.',
  },
];

export const BENEFIT_ITEM_DATA = [
  {
    imgSrc: IdeImg,
    iconSrc: IdeIcon,
    bgColor: 'gray800',
    title: '구름IDE',
    description: '손쉽게 개발환경을 만들고\n효율적으로 협업해요',
    url: 'https://ide.goorm.io/',
  },
  {
    imgSrc: ExpImg,
    iconSrc: ExpIcon,
    bgColor: 'gray300',
    title: '구름EXP',
    description: '업무를 게임하듯 관리하고\n조직 생산성을 쌓아요',
    url: 'https://exp.goorm.io/',
  },
  {
    imgSrc: EduImg,
    iconSrc: EduIcon,
    bgColor: 'blue400',
    title: '구름EDU',
    description: '교육 도구의 설치 없이\n수준 높은 IT교육을 받아요',
    url: 'https://edu.goorm.io/',
  },
  {
    imgSrc: InflearnImg,
    iconSrc: InflearnIcon,
    bgColor: 'inflearnGreen',
    title: '인프런 쿠폰',
    description: '인프런과 구름의 만남!\n더욱 다양한 강의를 만나요',
    url: 'https://www.inflearn.com/',
  },
  // {
  //   imgSrc: KakaoImg,
  //   iconSrc: KakaoIcon,
  //   bgColor: 'yellow300',
  //   title: '카카오 클라우드',
  //   description: '유연하고 확장성 높은\n클라우드 인프라를 누려요',
  //   url: 'https://www.kakaocorp.com/page/service/service/KakaoCloud',
  // },
];
