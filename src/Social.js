import React from 'react';
import styled from 'styled-components';

import GitHubStar from './GitHubStar';
import GitHubAnchor from './GitHubAnchor';
import FacebookAnchor from './FacebookAnchor';

const StyledSocial = styled.div`
  z-index: 1;
  display: grid;
  grid-gap: 0.5rem;
  margin-left: auto;
  grid-auto-flow: column;
`;

const Social = ({ children, isSticky }) => (
  <StyledSocial>
    {React.Children.map(children, child =>
      React.isValidElement(child)
        ? React.cloneElement(child, { isSticky })
        : child
    )}
  </StyledSocial>
);

const SocialContainer = props => (
  <Social {...props}>
    <GitHubStar />
    <FacebookAnchor />
    <GitHubAnchor />
  </Social>
);

export default SocialContainer;
