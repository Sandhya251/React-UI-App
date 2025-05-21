import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const pages = ['/', '/login', '/signup', '/account'];
  const location = useLocation();
  const currentIndex = pages.indexOf(location.pathname);

  return (
    <div className="navbar">
      <NavLink to="/">🏠</NavLink>
      {currentIndex > 0 && <NavLink to={pages[currentIndex - 1]}>⬅</NavLink>}
      <span>{currentIndex + 1} of 4</span>
      {currentIndex < 3 && <NavLink to={pages[currentIndex + 1]}>➡</NavLink>}
    </div>
  );
};

export default Navbar;
