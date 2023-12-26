// css변수
const getCSSVariable = (name) => getComputedStyle(document.documentElement).getPropertyValue(name);

const colors = {
  // 예시
  gray100: getCSSVariable('--gray-100'), // Use the function to access CSS variable
};

const FONT = ({ family, weight, size, height }) => {
  return `
    font-family: ${family};
    font-weight: ${weight};
    font-size: ${size}rem;
    line-height: ${height}; 
  `;
};

const effects = {
  // 박스드랍 예시
  boxDrop: `
    box-shadow: 0 0.4rem 2.5rem 0 rgba(0, 0, 0, 0.10);
  `,
};

const fonts = {
  // heading1
  heading1: FONT({
    family: 'Pretendard',
    weight: 700,
    size: 2.375,
    height: 'normal',
  }),
  heading02: FONT({
    family: 'Pretendard',
    weight: 700,
    size: 2,
    height: 'normal',
  }),
  heading03: FONT({
    family: 'Pretendard',
    weight: 700,
    size: 1.5,
    height: 'normal',
  }),
  heading04: FONT({
    family: 'Pretendard',
    weight: 700,
    size: 1.25,
    height: 'normal',
  }),
  heading05: FONT({
    family: 'Pretendard',
    weight: 700,
    size: 1.125,
    height: 'normal',
  }),
  heading06: FONT({
    family: 'Pretendard',
    weight: 500,
    size: 1,
    height: 'normal',
  }),
  subtitle01: FONT({
    family: 'Pretendard',
    weight: 600,
    size: 0.875,
    height: 'normal',
  }),
  body01: FONT({
    family: 'Pretendard',
    weight: 400,
    size: 1,
    height: 'normal',
  }),
  body02: FONT({
    family: 'Pretendard',
    weight: 400,
    size: 0.875,
    height: 'normal',
  }),
};

export const theme = {
  colors,
  fonts,
  effects,
};
