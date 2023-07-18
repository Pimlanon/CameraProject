import styled from 'styled-components';
import { COLORS } from '../../../constant/colors';
import { TYPO } from '../../../constant/typography';

// ? need to check
export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 150px;
  margin: 0 auto;
  text-align: center;

  .p-logo {
    border: 1px solid rgb(210, 66, 66);
    width: 40px;
    height: 28%;
    position: relative;
    margin: 0 auto;
    margin-top: 2rem;
  }
`;

export const Text = styled.div`
  margin-top: 1rem;
  width: 100%;
  position: relative;
  color: ${COLORS.COLOR.DEFAULT}; //?need to check

  h1 {
    font-size: ${TYPO.FONT_SIZE.H1};
  }
`;
