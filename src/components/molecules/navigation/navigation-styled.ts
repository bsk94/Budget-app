import styled from 'styled-components';
import piggybank from '../../../assets/icons/piggy-bank.svg';
import bgNav from '../../../assets/backgrounds/bg-abstract.png';

export const StyledHeaderIcon = styled.img.attrs({
  src: `${piggybank}`
})``;

export const StyledBg = styled.nav`
  background-image: url(${bgNav});
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
    margin-left: 1.5rem;
  }
`;
