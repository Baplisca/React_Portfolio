import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import './i18n';
import { withTranslation } from 'react-i18next';

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0px;
  z-index: 100;

  background-color: #343a40;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  height: 50px;
`;
const HeaderMenu = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 18px;
  list-style: none;
  display: flex;
`;

/* https://stackoverflow.com/questions/50208306/use-active-state-from-react-router-in-styled-components */
const MyNavLink = styled(NavLink)`
  color: #888;
  text-decoration: none;
  padding: 15px;
  &.${(props) => props.activeClassName} {
    // background-color: #555;
    // border: none;
    // border-radius: 10px;
    color: #fff;
    border-bottom: solid 2px cyan;
  }
  :hover {
    color: #fff;
  }
`;
const LngWrapper = styled.li`
  :hover {
    color: #fff;
  }
  cursor: pointer;
  color: ${(props) => (props.isJap ? '#fff' : '#888')};
  margin-right: 5px;
`;
const GapWrapper = styled.li`
  margin: 0 10px;
  color: #fff;
`;
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isJap: true,
    };
  }
  render() {
    const { t, i18n } = this.props;
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      const isJap = lng === 'ja';
      this.setState({
        isJap: isJap,
      });
    };
    return (
      <React.Fragment>
        <HeaderWrapper>
          <div></div>
          <HeaderMenu>
            <li>
              <MyNavLink activeClassName="active" exact to="/">
                {t('About')}
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
            <GapWrapper>|</GapWrapper>
            <LngWrapper
              language={!i18n.language}
              onClick={() => changeLanguage('ja')}
              isJap={this.state.isJap}>
              あ
            </LngWrapper>
            <LngWrapper
              language={i18n.language}
              onClick={() => changeLanguage('en')}
              isJap={!this.state.isJap}>
              A
            </LngWrapper>
          </HeaderMenu>
        </HeaderWrapper>
      </React.Fragment>
    );
  }
}

export default withTranslation()(Navbar);
