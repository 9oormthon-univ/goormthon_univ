import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GoormNavbar } from '@goorm-dev/gds-components';

export const NavLogoIcon = styled.img`
  height: 0.9375rem;
  object-fit: cover;
  margin-right: 1.5rem;
`;

export const NavLink = styled(Link)`
  color: ${({ $isOpened, $isAbout }) =>
    $isAbout && !$isOpened
      ? 'var(--gray-300)'
      : $isAbout && $isOpened
      ? 'var(--gray-900)'
      : !$isAbout && $isOpened
      ? 'var(--gray-900)'
      : 'var(--gray-900)'};

  &:hover {
    color: ${({ $isAbout, $isOpened }) => ($isAbout && !$isOpened ? 'var(--gray-300)' : 'var(--gray-900)')};
    background-color: ${({ $isAbout, $isOpened }) =>
      $isAbout && !$isOpened ? 'var(--link-transparent-16)' : 'var(--link-transparent-8)'};
  }
  &:focus {
    color: ${({ $isAbout }) => ($isAbout ? 'var(--gray-300)' : 'var(--gray-900)')};
    background-color: var(--link-transparent-8);
  }
`;

export const Toggler = styled(GoormNavbar.Toggler)`
  & > span > span {
    background: ${({ $isAbout, isOpened }) => !$isAbout && !isOpened && 'var(--gray-900)!important'};
  }
`;
