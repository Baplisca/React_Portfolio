import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  li:active {
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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
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
