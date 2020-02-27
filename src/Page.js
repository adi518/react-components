import React from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: var(--color-background);

  > h1:not(:first-child) {
    margin-top: 4rem;
  }

  > div {
    margin: 4rem 14rem;

    @media (max-width: 1024px) {
      margin-left: 6rem;
      margin-right: 6rem;
    }

    @media (max-width: 768px) {
      margin: 2rem;
    }
  }
`;

const Page = ({ children }) => <StyledPage>{children}</StyledPage>;

export default Page;
