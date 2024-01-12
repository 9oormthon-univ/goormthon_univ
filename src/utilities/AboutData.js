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
    title: '9oormthonUNIV 2기 모집!',
    description: '벚꽃톤을 함께 할 2기 운영진과 참가자를 모집해요.\n2024년을 힘차게 시작해요!',
  },
  2: {
    Icon: SchoolIcon,
    title: 'OT & 세미 해커톤',
    description: '학교별로 팀을 구성하여 당일 해커톤을 진행해요.\n교내 미르미들과 끈끈한 네트워크를 만드세요!',
  },
  3: {
    Icon: Lightbulb,
    title: '팀 빌딩',
    description: '타 학교 미르미에게 자신의 아이디어를 공유하고\n함께 성장할 시너지 있는 팀을 꾸려요.',
  },
  4: {
    Icon: BeotkkotSmall,
    title: '무박 2일, 벚꽃톤',
    description: '구름톤 유니브의 하이라이트, 벚꽃톤!\n모든 미르미가 밤을 새워 아이디어를 실현하는 장이에요.',
  },
  5: {
    Icon: CakeIcon,
    title: '구름톤 유니브 에프터 파티, GUAP',
    description: '해커톤의 여운을 이어갈 수 있도록 현직자와 수상자의 세미나, 그리고 마무리 회고를 진행해요.',
  },
  6: {
    Icon: LightningIcon,
    title: '연합 세미나 / 연합 해커톤',
    description: '2-3개 혹은 그 이상의 학교가 모여 또 한번 성장해요.\n판교 구름스퀘어에서 열릴 예정이에요 :)',
  },
};

export const ACTIVITY_DATA = [
  {
    imgSrc: Img1,
    title: '스터디',
    title_en: 'STUDY',
    description:
      '제공받은 구름IDE, 구름EDU, 인프런 쿠폰을 사용하여\n교내 미르미 혹은 교외 미르미들과 자유롭게 스터디를 진행할 수 있어요.',
  },
  {
    imgSrc: Img2,
    title: '세미 해커톤',
    title_en: 'SEMI HACKATHON',
    description:
      '벚꽃톤/단풍톤 전에 교내에서 진행되는 세미 해커톤에서\n교내 미르미들과 협업을 경험해보세요. 이 경험이 실전 해커톤\n에서 한 단계 더 성장할 수 있는 도약대가 될 거예요!',
  },
  {
    imgSrc: Img3,
    title: '해커톤',
    title_en: 'HACKATHON',
    description:
      '기획 1명, 디자인 1명, 프론트엔드 2명, 백엔드 2명 총 6명으로 하나의 팀을 구성하여 해커톤 기간까지 기획과 디자인 및 개발을 합니다. 봄에는 벚꽃톤, 가을에는 단풍톤이 진행됩니다.',
  },
  {
    imgSrc: Img4,
    title: '연합 행사 ',
    title_en: 'UNION EVENT',
    description:
      '본 해커톤이 끝난 후 2개 이상의 유니브가 모여 연합 해커톤 세미나를 진행하여 타 대학과 네트워킹을 더 할 수 있는 시간을 가질 수 있어요.',
  },
  {
    imgSrc: Img5,
    title: '에프터파티',
    title_en: 'GUAP',
    description:
      'GUAP는 Goormthon Univ After Party의 약자로, 해커톤의 대상 및 최우수 수상자들과 현직 전문가들이 세미나를 진행합니다. 또한 지금까지의 과정을 회고하는 시간을 갖습니다.',
  },
];

export const BENEFIT_ITEM_DATA = [
  {
    imgSrc: IdeImg,
    iconSrc: IdeIcon,
    bgColor: 'var(--gray-950)',
    title: '구름 IDE',
    description: '손쉽게 개발환경을 만들고\n효율적으로 협업해요',
    url: 'https://ide.goorm.io/',
  },
  {
    imgSrc: ExpImg,
    iconSrc: ExpIcon,
    bgColor: '#E1E1E8',
    title: '구름 EXP',
    description: '업무를 게임하듯 관리하고\n조직 생산성을 쌓아요',
    url: 'https://exp.goorm.io/',
  },
  {
    imgSrc: EduImg,
    iconSrc: EduIcon,
    bgColor: 'var(--blue-400, #74AAFB)',
    title: '구름 EDU',
    description: '교육 도구의 설치 없이\n수준 높은 IT교육을 받아요',
    url: 'https://edu.goorm.io/',
  },
  {
    imgSrc: InflearnImg,
    iconSrc: InflearnIcon,
    bgColor: '#00CD72',
    title: '인프런 쿠폰',
    description: '인프런과 구름의 만남!\n더욱 다양한 강의를 만나요',
    url: 'https://www.inflearn.com/',
  },
  {
    imgSrc: KakaoImg,
    iconSrc: KakaoIcon,
    bgColor: 'var(--yellow-300, #FFD54F)',
    title: '카카오 클라우드',
    description: '유연하고 확장성 높은\n클라우드 인프라를 누려요',
    url: 'https://www.kakaocorp.com/page/service/service/KakaoCloud',
  },
];
