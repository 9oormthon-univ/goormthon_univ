import React from 'react';
import * as S from './style';

import TextContent from './TextContent';

export default function SlidingText() {
  return (
    <S.SlidingTextWrapper>
      <S.TextContentWrapper>
        {[...Array(6)].map((_, idx) => (
          <TextContent key={idx} />
        ))}
      </S.TextContentWrapper>
    </S.SlidingTextWrapper>
  );
}
