import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

//Class Component
class About extends React.Component{
    constructor(props,context){
        super(props,context)
        
        let allItems = [
            {value:"インターン更新", date:"2020.4.10"},
            {value:"Aboutページ更新", date:"2020.11.18"},
            {value:<a href="https://baplisca.herokuapp.com/">React適用に伴うサイト移動</a>, date:"2020.11.1"},
            {value:<a href="https://www.youtube.com/channel/UCUEUc2teEFnYEXG-MtEncrA/playlists"
            rel="noreferrer noopener" target="_blank">TadanoAction3DXGameのYoutube追加</a>, date:"2020.10.16"},
            {value:<a href="https://baplisca.hatenablog.com/entry/intern/nssol"
            rel="noreferrer noopener" target="_blank">NSSOLインターンのブログリンク追加</a>, date:"2020.10.12"},
            {value:<a href="https://baplisca.hatenablog.com/entry/supporterz-1on1"
            rel="noreferrer noopener" target="_blank">エンジニア1on1に参加しました</a>, date:"2020.10.5"},
            {value:<a href="https://baplisca.hatenablog.com/entry/supporterz-geekten"
            rel="noreferrer noopener" target="_blank">技育展に登壇しました</a>, date:"2020.9.26"},
            {value:"Youtube埋め込み・デザイン変更", date:"2020.9.13"},
            {value:"フッターに各種リンク追加・ナビゲーションバー変更", date:"2020.9.4"},
            {value:"インターンのブログリンク追加・フッター作成", date:"2020.9.3"},
            {value:"インターン項目・受賞追加", date:"2020.8.23"},
            {value:"競プロライブラリ更新", date:"2020.7.22"},
            {value:"フォント変更 Google Map埋め込み", date:"2020.6.11"},
            {value:"スマホ対応, 画像圧縮 (PNG→JPEG)", date:"2020.5.29"},
            {value:"競プロライブラリ追加",date:"2020.5.28"},
            {value:"HP作成",date:"2020.5.24"}
        ]
        this.state = {items : allItems}
    }
    RenderItems(){
        return this.state.items.map(_item => {
            return(
                <React.Fragment>
                <li className="no">{_item.date}</li>
                <li className="no">{_item.value}</li>
                <hr className = "updatehr" />
                <br/>
                </React.Fragment>
            )
        })
    }
    render(){
        return(
            <React.Fragment>
                <div id="contents">
                    <h2>Self-Introduction</h2>

                    <ul><br/>
                        <li class="no">横田　光悦 (Koetsu Yokota)</li>
                        <li class="no">東北大学大学院 情報科学研究科 応用情報科学専攻 修士2年</li>
                        <li class="no"><a href="https://www.smapip.is.tohoku.ac.jp/" title="田中大関研究室ホームページ"
                            rel="noreferrer noopener" target="_blank">田中・大関研究室</a></li>
                    <br/>
                    </ul>

            <h2>Field of study (or maybe interests)</h2>

            <ul><br/>
                <li>量子アニーリング</li>
                <br/>
                <li>組合せ最適化問題</li>
                <br/>
                <li>機械学習</li>
                <br/>
            </ul>

            <h2>Career</h2>
            <ul><br/>
                <li>東北大学大学院 情報科学研究科 応用情報科学専攻 入学 2020.4</li>
                <br/>
                <li>東北大学 工学部 電気情報物理工学科 卒業 2020.3</li>
                <br/>
                <li>東北大学 工学部 電気情報物理工学科 入学 2016.4</li>
                <br/>
                <li>宮城県宮城野高等学校 総合学科 卒業 2016.3</li>
                <br/>
            </ul>

            <h2>Qualifications</h2>
            <ul><br/>
                <li><a href="https://www.jitec.ipa.go.jp/1_11seido/ap.html" rel="noreferrer noopener" target="_blank">応用情報技術者試験</a> (AP) 合格
                    2017.10</li>
                <br/>
                <li>TOEIC 750 2019.3</li>
                <br/>
            </ul>

            <h2>Employment</h2>
            <ul><br/>
                <li>東北電力さんと機械学習を用いた共同研究 (RA) 2019.4 ~ 2020.3</li>
                <br/>
                <li>東北大学 プログラミング演習A (TA) 2020.4 ~ 2020.7</li>
                <br/>
            </ul>

            <h2>Intern</h2>
            <ul><br/>
                <li>MUIT　2020.8 (3日間) <a href="https://baplisca.hatenablog.com/entry/intern/muit" rel="noreferrer noopener" target="_blank">インターン感想</a></li>
                <br/>
                <li>大和証券 金融商品開発・デリバティブ算定モデル開発・リスクマネジメント業務体験コース　2020.8.24 ~ 2020.8.28 (5日間)</li>
                <br/>
                <li>Amazon Web Services SA　2020.8.31 ~ 2020.9.2 (3日間) <a rel="noreferrer noopener" href="https://baplisca.hatenablog.com/entry/intern/aws" target="_blank">インターン感想</a></li>
                <br/>
                <li>日鉄ソリューションズ (NSSOL)　研究開発　2020.9.7 ~ 2020.9.25 (3週間) <a href="https://baplisca.hatenablog.com/entry/intern/nssol" rel="noreferrer noopener" target="_blank">インターン感想</a></li>
                <br/>
                <li>楽天　Webアプリケーションエンジニア　2020.11 ~ 2021.1 (3ヶ月)</li>
                <br/>
                <li>アカツキ　サーバーサイドエンジニア　2021.2.22 ~ 2021.3.8 (2週間) <a href="https://hackerslab.aktsk.jp/2021/03/31/102547" rel="noreferre noopener" target="_blank">インターン感想</a></li>
                <br/>
            </ul>

            <h2>Awards (Official)</h2>
            <ul><br/>
                <li><a href="https://www.softbank.jp/corp/news/press/sbkk/2019/20191015_02/"
                        rel="noreferrer noopener" target="_blank">ソフトバンクAI人材育成スカラーシップ</a> 2020.4 ~ 2021.3</li>
                <br/>
            </ul>
            <h2>Pastime</h2>
            <ul><br/>
                <li>麻雀</li>
                <br/>
                <li><a href="https://atcoder.jp/users/Baplisca" rel="noreferrer noopener" target="_blank">競技プログラミング</a></li>
                <li class ="no"><a href="https://atcoder.jp/users/Baplisca" rel="noreferrer noopener" target="_blank" title="Baplisca"><img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fatcoder-badges.now.sh%2Fapi%2Fatcoder%2Fjson%2FBaplisca" alt="競技プログラミング レート"/></a></li>
                <br/>
                <li>ピアノ (キーボード)</li>
                <br/>
                <li>野球観戦</li>
                <br/>
                <li><Link to="/work">ゲーム制作</Link></li>
                <br/>
            </ul>

            <h2>Updates</h2><br/>
            <div className="scroll">
                <ul>
                <br />
                {this.RenderItems()}
                </ul>
            </div>
            <br/><br/><br/>
        </div> 
        <style jsx>
        {`
            .updatehr{
                margin-right:50px;
                color:"#ffffff";
                border-width: 2.5px 0 0 0;
            }
            .scroll {
                height: 20em;
                overflow: scroll;
                background: rgba(54, 54, 54, 0.116);
                border: none;
                border-radius: 10px;
                box-shadow: inset 0 0 2px rgb(12, 12, 12);
            }
            li.no {
                list-style-type: none;
            }
            hr {
                border-width: 1px 0px 0px 0px;
                border-style: solid;
                border-color: #cccccc;
                height: 1px;
            }
        `}
        </style>
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
        `}
        </style>
        </MediaQuery>
        </React.Fragment>
        );
    }
}

export default About;