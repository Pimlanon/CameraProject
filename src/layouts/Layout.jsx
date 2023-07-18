import NavBar from './Nav/NavBar';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
