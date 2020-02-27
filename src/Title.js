import React from 'react';
import styled, { css } from 'styled-components';

import Emoji from './Emoji';
import MetadataContext from './MetadataContext';

const StyledTitle = styled.div`
  visibility: visible;
  text-transform: capitalize;
  transition: opacity var(--common-transition-time);

  span:not(:first-child) {
    margin-left: 1ch;
  }

  ${({ isSticky }) =>
    isSticky
      ? css`
          opacity: 1;
          color: var(--color-gray-light);
        `
      : css`
          opacity: 0.5;
          color: var(--color-gray);
        `};
`;

const Title = ({ pkg, docsPkg, ...restProps }) => (
  <MetadataContext.Consumer>
    {({ pkg, docsPkg }) =>
      pkg && docsPkg ? (
        <StyledTitle {...restProps}>
          {/* eslint-disable jsx-a11y/accessible-emoji */}
          <span>
            <Emoji>📦</Emoji> {pkg.version}
          </span>
          <span>
            <Emoji>📃</Emoji> {docsPkg.version}
          </span>
        </StyledTitle>
      ) : null
    }
  </MetadataContext.Consumer>
);

export default Title;
