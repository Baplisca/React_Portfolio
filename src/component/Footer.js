import React from 'react';
import styled from 'styled-components';

import linkedin from '../images/linkedin.svg';
import twitter from '../images/twitter-icon.jpg';
import github from '../images/github-icon2.jpg';
import hatena from '../images/hatena-icon2.jpeg';

const FooterWrapper = styled.div`
  font-size: 14px;
  height: 100px;
  clear: left;
  text-align: center;
`;

const FooterInnerWrapper = styled.div`
  display: inline-block;
  margin: 0 8px;
  & img {
    width: 60px;
    height: 60px;
    margin: 0 10px;
  }
`;

//Class Component
class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <hr />
        <br />
        <FooterWrapper>
          <FooterInnerWrapper>
            <a
              href="https://www.linkedin.com/in/koetsu-yokota-9675811b5/"
              rel="noreferrer noopener"
              target="_blank">
              <img src={linkedin} alt="linkedin アイコン" width="60px" height="60px" />
            </a>
            <a href="https://twitter.com/sooooouls" rel="noreferrer noopener" target="_blank">
              <img src={twitter} alt="Twitter アイコン" width="60px" height="60px" />
            </a>
            <a href="https://github.com/Baplisca" rel="noreferrer noopener" target="_blank">
              <img src={github} alt="GitHub アイコン" width="60px" height="60px" />
            </a>
            <a href="https://baplisca.hatenablog.com/" rel="noreferrer noopener" target="_blank">
              <img src={hatena} alt="はてなブログ アイコン" width="60px" height="60px" />
            </a>
          </FooterInnerWrapper>
        </FooterWrapper>
      </React.Fragment>
    );
  }
}

export default Footer;
