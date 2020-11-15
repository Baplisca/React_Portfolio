import React from 'react';

const Guam = require('../images/Guam.jpg');
//Class Component
class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
            <div className = "Home"> 
            <img style = {{height: '100vh',width: '100vw', backgroundSize: 'cover', 
            verticalAlign: 'bottom' }} src={Guam} alt = "グアムの写真" />
            <h2>Welcome Baplisca's Homepage</h2>
            </div>
            <style jsx>
            {`
            {/* 下記の設定 https://webdesignday.jp/inspiration/technique/css/7976/ */}
            .Home{
                position: absolute;
                overflow: hidden;
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