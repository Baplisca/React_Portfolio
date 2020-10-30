import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="navvar">
                    <h2>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/work">Work</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </h2>
                </div>
                <style jsx>
                    {`
                    h2 {
                        font-size: 20px;
                        margin: 0px 0px 0px 0px;
                        padding: 4px 0px 4px 7px;
                        border-bottom: 2px solid #999999;
                    }
                    .navvar {
                        text-align: left;
                        background-color: #e4e9ec6c;
                    }
                    /* ヘッダメニュー参考URL https://www.e-sanwa.co.jp/sbs/column/20180323/ 背景カラー＋シンプルメニュー */
                    nav ul {
                        display: table;
                        margin: 0 auto;
                        padding: 0;
                        width: 50%;
                        text-align: center;
                    }
                    nav ul li {
                        display: table-cell;
                        min-width: 50px;
                    }
                    nav ul li a {
                        display: block;
                        width: 100%;
                        padding: 10px 0;
                        text-decoration: none;
                        color: #555;
                        font-weight: bold;
                        transition: 0s;
                    }
                    nav ul li.current {
                        background-color: #e4e9ecfb;
                        border: none;
                        border-radius: 10px;
                    }
                    nav ul li.current a {
                        color: #555;
                        border: none;
                        border-radius: 10px;
                    }
                    nav ul li:hover {
                        background-color: #e4e9ecfb;
                        border: none;
                        border-radius: 10px;
                    }
                `}
                </style>
            </React.Fragment>
        )
    }
}

export default Navbar;