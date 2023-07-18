import styled from 'styled-components';

export const HeadNav = styled.div`
  width: 100%;
  height: 48px;
  background-color: #4e1e68;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  .nav-logo {
    border: 1px solid white;
    width: 25%;
    height: 60%;
    margin-left: 10px;
  }
`;

export const NavRight = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  /* border: 1px solid white; */
  margin-right: 10px;
  cursor: pointer;
`;
