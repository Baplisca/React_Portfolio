import React from 'react';
import styled from 'styled-components';
import { Img } from 'react-image';

const Guam = require('../images/Guam.jpg');

const H2Wrapper = styled.h2`
  font-size: 4rem;
  position: absolute;
  top: 40%;
  width: 100%;
  color: white;
  text-align: center;
  border-bottom: none;
`;
const HomeWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;
const PlaceHolder = styled.img`
  background-color: #545454;
`;
//Class Component
class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HomeWrapper>
          <Img
            style={{
              height: '100vh',
              width: '100vw',
              backgroundSize: 'cover',
              verticalAlign: 'bottom',
            }}
            src={Guam}
            loader={<PlaceHolder />}
            unloader="グアムの写真"
          />
          <H2Wrapper>Welcome Baplisca's Homepage</H2Wrapper>
        </HomeWrapper>
      </React.Fragment>
    );
  }
}

export default Home;
