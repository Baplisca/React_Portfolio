import React from 'react';
import Footer from './Footer.js';
import styled from 'styled-components';

const ContentWrapper = styled.div`
    margin: 0px auto 0px auto;
    padding: 30px 0px 0px 0px;
    width: 800px;
    line-height: 150%;
    color: #333333;
    font-size: 16px;

    @media (max-width: 800px){
        margin: 0px auto 0px auto;
        padding: 30px 0px 0px 0px;
        width: 95%;
        line-height: 150%;
        color: #333333;
        font-size: 14px;
    }
`;

/*説明URL https://akros-ac.jp/8277/ */
const GoogleMapWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 75%;

    & iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

//Class Component
class Contact extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ContentWrapper>
                    <h2>Contact</h2>
                    <Footer />
                    <p>研究室は, ピン留めした4階の406が学生部屋です</p>

                    <GoogleMapWrapper>
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d783.2521083083436!2d140.83455372924533!3d38.256110451833386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a294d2c3c68fb%3A0x75924e27fe226551!2z5p2x5YyX5aSn5a2m5bel5a2m6YOoIOmbu-WtkOaDheWgseOCt-OCueODhuODoOODu-W_nOeJqeezuzPlj7fppKg!5e0!3m2!1sja!2sjp!4v1591882223823!5m2!1sja!2sjp"
                        width="550" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0" title = "Lab Lacation"></iframe>
                        
                    </GoogleMapWrapper>
                    <br /><br /><br />
                </ContentWrapper>
            </React.Fragment>
        );
    }
}

export default Contact;