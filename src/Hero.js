import styled from 'styled-components';

const StyledHero = styled.div.attrs({ className: 'animated fadeIn' })`
  display: flex;
  min-height: 100vh;
  padding-top: 6rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 6rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: var(--color-gray);
  background-color: ${({ theme }) => theme.hero.backgroundColor};
`;

export default StyledHero;
