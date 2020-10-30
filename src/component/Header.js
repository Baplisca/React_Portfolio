import React, { Component } from 'react';
import MediaQuery from "react-responsive";

class Header extends React.Component{
    render(){
        return(
        <React.Fragment>
        <div id = "outer">
            <div id="header">
                <div id="head-inner">
                    <h1>
                        <center>横田　光悦のホームページ</center>
                    </h1>
                    <br />
                    <center>
                        <p class="description">
                        情報をまとめるためにHPを作成しました。
                        </p>
                    </center>
                    <center>
                        <p class="description">
                        勉強中ですので、随時更新します。
                        </p>
                    </center>
                </div>
            </div>
        </div>
        <style jsx>
        {`
        #outer {
            font-size: 13px;
            line-height: 150%;
            text-align: left;
        }
        h1 {
            font-size: 30px;
            font-weight: bold;
            text-align: left;
            padding: 30px 0px 0px 0px;
            margin: 0px;
            color: #ffffff;
        }
        #header {
        text-align: left;
        background-color: #343a40;
        }
        .description {
            line-height: 100%;
            font-size:15px;
            color: #ffffff;
        }
        `}
        </style>
        <MediaQuery query='(min-width: 800px)'>
        <style jsx>
        {`
        #head-inner {
            margin: 0px auto 0px auto;
            padding: 10px 0px 0px 0px;
            width: 800px;
            background-color: #343a40;
            padding: 25px;
        }
        `}
        </style>
        </MediaQuery>
        <MediaQuery query='(max-width: 800px)'>
        <style jsx>
        {`
        #head-inner {
            margin: 0px auto 0px auto;
            padding: 10px 0px 0px 0px;
            width: 100%;
            background-color: #343a40;
            padding: 5px;
        }
        `}
        </style>
        </MediaQuery>
        </React.Fragment>
        );
    }
}
export default Header;