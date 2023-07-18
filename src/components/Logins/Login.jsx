// import "../../assets/Login.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiUser, BiSolidLockAlt } from 'react-icons/bi';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import {
  Container,
  Form,
  Wrapper,
  InputWrapper,
  LoginText,
  Button,
} from './Login.styled';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const navigateTo = useNavigate();

  const handleCLick = () => {
    navigateTo('/scan');
  };
  return (
    <Container>
      {/* ! wait for logo */}
      <div className="login-logo"></div>

      <Form>
        <h1 className="login-title">Sign In</h1>

        {/* Email */}
        <Wrapper>
          <label className="login-label" htmlFor="email">
            Email
          </label>
          <InputWrapper>
            <div className="input-left">
              <div className="icon-left">
                <BiUser size={20} />
              </div>
            </div>

            <input
              className="login-input"
              type="email"
              name="email"
              id="email"
              placeholder="xxxxxx@powerbuy.co.th"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </InputWrapper>
        </Wrapper>

        {/* password */}
        <Wrapper>
          <label className="login-label" htmlFor="password">
            รหัสผ่าน
          </label>
          <InputWrapper>
            <div className="input-left">
              <div className="icon-left">
                <BiSolidLockAlt size={20} />
              </div>
            </div>

            <input
              className="login-input"
              type={visible ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <div className="eyes-icon">
              {visible ? (
                <AiFillEye size={20} onClick={() => setVisible(false)} />
              ) : (
                <AiFillEyeInvisible
                  size={20}
                  onClick={() => setVisible(true)}
                />
              )}
            </div>
          </InputWrapper>
        </Wrapper>

        {/* text for 'remember email' and 'forgot password' */}
        <LoginText>
          <div className="login-desc">
            <input
              className="checkbox"
              type="checkbox"
              name="remember-email"
              id="remember-email"
            ></input>
            <label htmlFor="remember-email">จดจำ Email</label>
          </div>
          <a className="forgot-password" href="#">
            ลืมรหัสผ่าน?
          </a>
        </LoginText>

        {/* Submit button */}
        <Button type="submit" className="login-submit">
          Sign In
        </Button>
      </Form>
      <button onClick={handleCLick}>scan</button>
    </Container>
  );
}

export default Login;
