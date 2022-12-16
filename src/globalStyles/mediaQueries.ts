import styled from 'styled-components';

const customMediaQueryMax = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;

const customMediaQueryMin = (minWidth: number) => `@media (min-width: ${minWidth}px)`;

export const media = {
  desktop: customMediaQueryMax(600),
  phone: customMediaQueryMin(600)
};
