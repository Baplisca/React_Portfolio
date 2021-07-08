import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavWrapper = styled.div`
  position: relative; /* for IE11 */
  position: sticky;
  top: 0px;
  z-index: 100;

  background-color: #343a40;
`;
const H2Wrapper = styled.h2`
  font-size: 20px;
  margin: 0px 0px 0px 0px;
  padding: 4px 0px 4px 7px;
  border-bottom: 2px solid #999999;
`;
const NavInner = styled.nav``;
const NavUl = styled.ul`
  display: table;
  margin: 0 auto;
  padding: 0;
  width: 50%;
  text-align: center;

  li {
    display: table-cell;
    min-width: 20vw;
    color: #fff;
  }
  li a {
    display: block;
    width: 100%;
    padding: 10px 0;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: 0s;
  }
  li:hover {
    background-color: #555;
    border: none;
    border-radius: 10px;
  }
`;

/* https://stackoverflow.com/questions/34418254/how-do-i-add-an-active-class-to-a-link-from-react-router */
const MyNavLink = styled(NavLink)`
  &.${(props) => props.activeClassName} {
    background-color: #555;
    border: none;
    border-radius: 10px;
  }
`;
class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <NavWrapper>
          <H2Wrapper>
            <NavInner>
              <NavUl>
                <li>
                  <MyNavLink activeClassName="active" exact to="/">
                    Home
                  </MyNavLink>
                </li>
                <li>
                  <MyNavLink activeClassName="active" to="/about">
                    About
                  </MyNavLink>
                </li>
                <li>
                  <MyNavLink activeClassName="active" to="/work">
                    Work
                  </MyNavLink>
                </li>
                <li>
                  <MyNavLink activeClassName="active" to="/contact">
                    Contact
                  </MyNavLink>
                </li>
              </NavUl>
            </NavInner>
          </H2Wrapper>
        </NavWrapper>
      </React.Fragment>
    );
  }
}

export default Navbar;
