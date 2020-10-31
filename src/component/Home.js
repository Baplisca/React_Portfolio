import React from 'react';

import Guam from '../images/Guam.jpg'

//Class Component
class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className = "Home">
                <h2>Welcome Baplisca's Homepage</h2>
                <img src= {Guam} alt="グアム写真"/>
            </div>

            <style jsx>
            {`
            .Home img {
                heigth: 100%;
                width: auto;
                position:relative;
                object-fit: cover;
                z-index: -1;
            }
            {/* 下の説明 https://arts-factory.net/position/ */}
            .Home h2{
                font-size:4rem;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                -webkit-transform: translate(-50%, -50%);
                -ms-transform: translate(-50%, -50%);
                color: #ffffff;
                border-bottom: 0.5rem solid #ffffff;
            }
            `}
            </style>
            </React.Fragment>
        );
    }
}

export default Home;