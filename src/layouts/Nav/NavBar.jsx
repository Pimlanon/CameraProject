import { BsBoxArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { HeadNav, NavRight } from './NavBar-styled';

function NavBar() {
  const navigateTo = useNavigate();

  function handleNavLogo() {
    navigateTo('/scan');
  }

  return (
    <HeadNav>
      <div className="nav-logo" onClick={handleNavLogo}></div>

      <NavRight>
        {/* use for pc size */}
        {/* <h3>Sign Out</h3>  */}
        <BsBoxArrowRight size={30} style={{ color: '#ffff' }} />
      </NavRight>
    </HeadNav>
  );
}

export default NavBar;
