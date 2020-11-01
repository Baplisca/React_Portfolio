import React from 'react';

import twitter from "../images/twitter-icon.jpg"
import github from "../images/github-icon2.png";
import hatena from "../images/hatena-icon2.jpeg";

//Class Component
class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
            <br />
            <div id="footer">
                <div className= "footer_list">
                    <a href= "https://twitter.com/sooooouls" rel="noreferrer noopener" target="_blank"><img src= {twitter} alt="Twitter アイコン"　width="60px"
                            height="60px" /></a>
                    <a href="https://github.com/Baplisca" rel="noreferrer noopener" target="_blank"><img src= {github} alt="GitHub アイコン" width="60px"
                            height="60px" /></a>
                    <a href="https://baplisca.hatenablog.com/" rel="noreferrer noopener" target="_blank"><img src= {hatena} alt="はてなブログ アイコン"
                            width="60px" height="60px" /></a>
                </div>
            </div>
            <style jsx>
            {`
            #footer {
                font-size: 14px;
                height: 100px;
                clear: left;
                text-align: center;
            }
            .footer_list{
                display:inline-block;
                margin: 0 8px;
            }
            .footer_list img {
                width: 60px;
                height: 60px;
            }
            `}
            </style>
            </React.Fragment>
        );

    }
}

export default Footer;