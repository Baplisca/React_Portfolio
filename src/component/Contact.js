import React from 'react';
import MediaQuery from 'react-responsive';

//Class Component
class Contact extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div id="contents">
            <h2>Contact</h2>
            <p>Mail: koetsu.yokota.s2 at dc.tohoku.ac.jp</p>
            <p>送信する際にはatを@に変換してください</p><br />
            <p>Twitterは, Baplisca (<a href="https://twitter.com/sooooouls" rel="noreferrer noopener" target="_blank">@sooooouls</a>) です</p><br />
            <p>研究室は, ピン留めした4階の406が学生部屋です</p>

            <div className="google_map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d783.2521083083436!2d140.83455372924533!3d38.256110451833386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a294d2c3c68fb%3A0x75924e27fe226551!2z5p2x5YyX5aSn5a2m5bel5a2m6YOoIOmbu-WtkOaDheWgseOCt-OCueODhuODoOODu-W_nOeJqeezuzPlj7fppKg!5e0!3m2!1sja!2sjp!4v1591882223823!5m2!1sja!2sjp"
                 width="550" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0" title = "Lab Lacation"></iframe>
            </div>
            <br /><br /><br />
            </div>
            
            <MediaQuery query='(min-width: 800px)'>
            <style jsx>
            {`
            #contents {
                margin: 0px auto 0px auto;
                padding: 30px 0px 0px 0px;
                width: 800px;
                line-height: 150%;
                color: #333333;
                font-size: 16px;
            }
            /*説明URL https://akros-ac.jp/8277/ */
            .google_map {
                position: relative;
                width: 100%;
                height: 0;
                padding-top: 75%;
            }
            .google_map iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
            `}
            </style>
            </MediaQuery>
            <MediaQuery query='(max-width: 800px)'>
            <style jsx>
            {`
            #contents {
                margin: 0px auto 0px auto;
                padding: 30px 0px 0px 0px;
                width: 95%;
                line-height: 150%;
                color: #333333;
                font-size: 14px;
            }
            .google_map {
                position: relative;
                width: 100%;
                height: 0;
                padding-top: 75%;
            }
            .google_map iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
            `}
            </style>
            </MediaQuery>
            </React.Fragment>
        );
    }
}

export default Contact;