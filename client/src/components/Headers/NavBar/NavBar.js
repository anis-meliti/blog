import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
} from 'reactstrap';

const NavBar = () => {
  const [navbarColor, setNavbarColor] = useState('navbar-transparent');
  const [navbarCollapse, setNavbarCollapse] = useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };
  //   const dispatch = useDispatch();

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  const isAuthorized = useSelector((state) => state.authReducer.isAuth);
  //   const dispatch = useDispatch();
  const authNavbar = (
    <Collapse className='justify-content-end' navbar isOpen={navbarCollapse}>
      <Nav navbar>
        <NavItem>
          <NavLink href='/profile'>
            <i className='nc-icon' />
          </NavLink>
        </NavItem>
        <NavItem>
          <Button className='btn-round' color='danger'>
            Se déconnecter
          </Button>
        </NavItem>
      </Nav>
    </Collapse>
  );

  return (
    <Navbar
      className={classnames('fixed-top', navbarColor)}
      color-on-scroll='300'
      expand='lg'
    >
      <Container>
        <div className='navbar-translate'>
          <NavbarBrand data-placement='bottom' to='/' tag={Link}>
            Blog
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames('navbar-toggler navbar-toggler', {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className='navbar-toggler-bar bar1' />
            <span className='navbar-toggler-bar bar2' />
            <span className='navbar-toggler-bar bar3' />
          </button>
        </div>
        <Collapse
          className='justify-content-end'
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            {isAuthorized && authNavbar}
            <NavItem>
              <NavLink
                data-placement='bottom'
                href='https://twitter.com/'
                target='_blank'
                title='Follow us on Twitter'
              >
                <i className='fa fa-twitter' />
                <p className='d-lg-none'>Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement='bottom'
                href='https://www.facebook.com/'
                target='_blank'
                title='Like us on Facebook'
              >
                <i className='fa fa-facebook-square' />
                <p className='d-lg-none'>Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement='bottom'
                href='https://www.instagram.com/'
                target='_blank'
                title='Follow us on Instagram'
              >
                <i className='fa fa-instagram' />
                <p className='d-lg-none'>Instagram</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
