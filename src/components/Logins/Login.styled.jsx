import styled from 'styled-components';
import { COLORS } from '../../constant/colors';
import { TYPO } from '../../constant/typography';

export const Container = styled.section`
  position: absolute;
  width: 90%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 5rem;
  padding-bottom: 4rem;

  .login-logo {
    border: 1px solid rgb(210, 66, 66);
    width: 130px;
    height: 100px;
    margin: 0 auto;
    position: relative;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
  margin-top: 2.5rem;
  position: relative;

  .login-title {
    font-size: 55px;
    font-weight: bold;
    color: ${COLORS.COLOR.DEFAULT};
    padding-bottom: 0.5rem;
  }
`;

export const Wrapper = styled.div`
  margin-top: 2rem;
  width: 100%;

  .login-label {
    color: ${COLORS.COLOR.DEFAULT};
    font-size: 25px;
    font-weight: 380;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 2.5rem;
  border-radius: 5px;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.3);
  margin-top: 10px;
  position: relative;
  display: flex;
  align-items: center;

  &:focus-within {
    border: 1.5px solid ${COLORS.COLOR.PRIMARY};
  }

  .input-left {
    height: 100%;
    width: 50px;
    position: absolute;
    border-right: 1.5px solid ${COLORS.COLOR.PRIMARY};

    .icon-left {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${COLORS.COLOR.PRIMARY};
      height: 100%;
    }
  }

  .login-input {
    width: 84%;
    height: 100%;
    right: 0;
    border: none;
    border-radius: 0 5px 5px 0;
    padding-left: 10px;
    font-size: large;
    font-family: ${TYPO.FONT_FAMILY};
    color: ${COLORS.COLOR.DEFAULT};
    position: absolute;

    &:focus {
      outline: none;
    }
  }

  .eyes-icon {
    color: #2a2a2a;
    position: absolute;
    right: 0;
    margin-right: 10px;
    cursor: pointer;
    height: 20px;
  }
`;
//------------

export const LoginText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: large;
  color: ${COLORS.COLOR.DEFAULT};

  .login-desc {
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .checkbox {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }

  .forgot-password {
    text-decoration: none;
    color: ${COLORS.COLOR.ADDITIONAL};
    cursor: pointer;
  }
`;

export const Button = styled.button`
  margin-top: 3rem;
  height: 4rem;
  width: 100%;
  font-size: 30px;
  font-weight: 600;
  background-color: ${COLORS.COLOR.PRIMARY};
  border: 0;
  border-radius: 10px;
  color: ${COLORS.COLOR.SECONDARY};
  letter-spacing: 3px;
  cursor: pointer;
`;
