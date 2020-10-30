import React from 'react';

import twitter from "../images/twitter-icon.jpg"
import github from "../images/github-icon2.png";
import hatena from "../images/hatena-icon2.jpeg";

//Class Component
class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
            <hr color="#999999" /> 

            <div id="footer">
                <div className="flex">
                    <a href= "https://twitter.com/sooooouls" rel="noreferrer noopener" target="_blank"><img src= {twitter} alt="Twitter アイコン"　width="60px"
                            height="60px" /></a>
                    <a href="https://github.com/Baplisca" rel="noreferrer noopener" target="_blank"><img src= {github} alt="GitHub アイコン" width="60px"
                            height="60px" /></a>
                    <a href="https://baplisca.hatenablog.com/" rel="noreferrer noopener" target="_blank"><img src= {hatena} alt="はてなブログ アイコン"
                            width="60px" height="60px" /></a>
                </div>
                <p>This homepage is operated by Baplisca.</p>
            </div>
            <style jsx>
            {`
            #footer {
                font-size: 14px;
                height: 100px;
                clear: left;
                text-align: center;
            }
            /* flex説明　https://xn--web-oi9du9bc8tgu2a.com/css-basis-flex/ */
            .flex {
                padding: 2.5% 0;
                display: flex;
                flex-direction: row;
                justify-content: center;
            }
            .flex>* {
                width: 8%;
                background: #fff;
                font-size: 64px;
                text-align: center;
            }
            .flex, .flex>* {
                border: 0px solid #aaa;
            }
            `}
            </style>
            </React.Fragment>
        );

    }
}

export default Footer;