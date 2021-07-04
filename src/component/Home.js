import React from 'react';
import styled from 'styled-components';

const Guam = require('../images/Guam.jpg');
{/* 下記の設定 https://webdesignday.jp/inspiration/technique/css/7976/ */}
const HomeWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;
const H2Wrapper = styled.h2`
    font-size:4rem;
    position: absolute;
    top: 40%;
    width: 100%;
    color: white;
    text-align:center;
    border-bottom: none;
}
`;
//Class Component
class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <HomeWrapper>
                    <img style = {{height: '100vh',width: '100vw', backgroundSize: 'cover', 
                    verticalAlign: 'bottom' }} src={Guam} alt = "グアムの写真" />
                    <H2Wrapper>Welcome Baplisca's Homepage</H2Wrapper>
                </HomeWrapper>
            </React.Fragment>
        );
    }
}

export default Home;