import React from 'react';

export default function Lightbulb(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
      <path
        fill="#000"
        d="M4.5 9.5C4.5 5.36 7.86 2 12 2c4.14 0 7.5 3.36 7.5 7.5 0 3.82-2.66 5.86-3.77 6.5H8.27c-1.11-.64-3.77-2.68-3.77-6.5ZM16 17H8v2h8v-2ZM12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2Z"
      />
    </svg>
  );
}
