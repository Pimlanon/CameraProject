import styled from 'styled-components';
import { COLORS } from '../../../constant/colors';
import { TYPO } from '../../../constant/typography';

export const Form = styled.section`
  width: 90%;
  height: auto;
  margin: 0 auto;
  /* border: 1px solid green; */
  position: relative;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.5);
  color: ${COLORS.COLOR.DEFAULT};
  padding: 2.5rem 1.5rem 4rem;
  border-radius: 10px;
  margin-bottom: 4rem;

  .check-text {
    margin-top: 2rem;
    font-size: ${TYPO.FONT_SIZE.BODY3};
  }

  button {
    margin-top: 1rem;
    height: 3.5rem;
    width: 13rem;
    font-size: ${TYPO.FONT_SIZE.H1};
    text-align: center;
    background-color: ${COLORS.COLOR.PRIMARY};
    border: 0;
    border-radius: 10px;
    color: ${COLORS.COLOR.SECONDARY};
    letter-spacing: 2px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
  }
`;

export const ScanContainer = styled.div`
  /* border: 1px solid red;*/ //!!!
  width: 100%;

  h2 {
    font-size: ${TYPO.FONT_SIZE.H2};
    margin-bottom: 0.8rem;
  }

  label {
    font-size: ${TYPO.FONT_SIZE.BODY1};
  }
`;

export const InputWrapper = styled.div`
  border: 1px solid ${COLORS.COLOR.DEFAULT};
  margin-top: 0.8rem;
  width: 100%;
  height: 2rem;
  border-radius: 5px;
  position: relative;
  display: flex;

  &:focus-within {
    border: 1.5px solid ${COLORS.COLOR.PRIMARY};
  }

  .scan-input {
    width: 85%;
    height: 100%;
    position: relative;
    border: none;
    border-radius: 5px 0 0 5px;
    padding-left: 10px;
    padding-right: 10px;
    color: ${COLORS.COLOR.DEFAULT};
    font-size: ${TYPO.FONT_SIZE.BODY1};

    &:focus {
      outline: none;
    }
  }

  .scan-icon {
    border-left: 1px solid ${COLORS.COLOR.DEFAULT};
    width: 15%;
    height: 100%;
    right: 0;
    position: absolute;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .scan {
    position: absolute;
    margin: 0 auto;
    color: ${COLORS.COLOR.DEFAULT};
  }
`;

export const CardContainer = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  margin-top: 1.5rem;
`;

export const CardType = styled.div`
  /* border: 1px solid red; */
  width: 100%;

  h2 {
    font-size: ${TYPO.FONT_SIZE.H2};
    margin-bottom: 0.8rem;
  }

  label {
    font-size: ${TYPO.FONT_SIZE.BODY1};
  }
`;

export const IconContainer = styled.div`
  color: ${COLORS.COLOR.PRIMARY};
  font-size: ${TYPO.FONT_SIZE.BODY2};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1.8px solid ${COLORS.COLOR.PRIMARY};
  width: 80px;
  margin-top: 0.3rem;
  cursor: pointer;

  .icon-plus {
    font-size: 12px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 2rem;
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .card-input {
    width: 90%;
    height: 100%;
    border-radius: 5px;
    border: 1px solid ${COLORS.COLOR.DEFAULT};
    color: ${COLORS.COLOR.DEFAULT};
    font-size: ${TYPO.FONT_SIZE.BODY1};
    padding: 0 10px 0 10px;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  .cross-mark {
    font-size: 20px;
    color: ${COLORS.COLOR.ADDITIONAL2};
    cursor: pointer;
  }
`;

export const CardNumber = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  margin-top: 0.8rem;

  label {
    font-size: ${TYPO.FONT_SIZE.BODY1};
  }

  .add-card-digit {
    height: 2rem;
    width: 3.5rem;
    font-size: ${TYPO.FONT_SIZE.BODY1};
  }
`;
