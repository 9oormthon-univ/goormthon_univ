import React from 'react';
import * as S from './style';

import TextContent from './TextContent';

export default function SlidingText() {
  return (
    <S.SlidingTextWrapper>
      <S.TextContentWrapper>
        {[...Array(6)].map((_) => (
          <TextContent />
        ))}
      </S.TextContentWrapper>
    </S.SlidingTextWrapper>
  );
}
