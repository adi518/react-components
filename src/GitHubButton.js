import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import MetadataContext from './MetadataContext';

const StyledGitHubButton = styled(Button)`
  @media (max-width: 575.98px) {
    display: none;
  }
`;

const GitHubButton = () => (
  <MetadataContext.Consumer>
    {({ pkg }) =>
      pkg ? (
        <a href={pkg.repository.url} className="global-button">
          <StyledGitHubButton>GitHub</StyledGitHubButton>
        </a>
      ) : null
    }
  </MetadataContext.Consumer>
);

export default GitHubButton;
