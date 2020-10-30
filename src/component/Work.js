import React from 'react';

import game1_1 from '../images/Game1-1.jpeg';
import game1_2 from '../images/Game1-2.jpeg';
import game1_3 from '../images/Game1-3.jpeg';

import game3_1 from '../images/Game3-1.jpeg';
import game3_2 from '../images/Game3-2.jpeg';
import game3_3 from '../images/Game3-3.jpeg';
import game3_4 from '../images/Game3-4.jpeg';

import game2_1 from '../images/Game2-1.jpeg';
import game2_2 from '../images/Game2-2.jpeg';
import game2_3 from '../images/Game2-3.jpeg';
import game2_4 from '../images/Game2-4.jpeg';

import heuristic from "../images/heuristic.gif";

import pre_annealing from "../images/no_annealing.jpeg";
import aft_annealing from "../images/annealing.jpeg";

import tapitapi1 from '../images/tapitapi1.png';
import tapitapi2 from "../images/tapitapi2.png";
import tapitapi3 from "../images/tapitapi3.png";


//Class Component
class Work extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div id = "contents">
                <h2>My Works</h2><br/><br/>

                <h2>競技プログラミングのために作成したライブラリ </h2>
                <p>競プロで頻繁に用いる処理をライブラリにしたものです。言語はC++です。</p>
                <details>
                    <summary className="bold">ライブラリ一覧</summary>
                    <ol>
                        <li>グラフ・木
                            <ul>
                                <li>幅優先探索 (BFS)</li>
                                <div className = "pl">辺彩色</div>

                                <li>深さ優先探索 (DFS)</li>
                                <div className = "pl">メモ化DFS</div>
                                <div className = "pl">2部グラフ判定</div>
                    
                                <li>ワーシャルフロイド法</li>
                                <li>ダイクストラ法</li>
                                <li>ベルマンフォード法</li>
                            </ul>
                        </li>
                        <li>動的計画法 (DP)
                            <ul>
                                <li>1次元DP</li>
                                <div className = "pl">LIS (最長増加部分文字列)</div>

                                <li>2次元DP</li>
                                <li>bitDP</li>
                                <li>区間DP</li>
                            </ul>
                        </li>
                        <li>数学 (整数論)
                            <ul>
                                <li>エラトステネスのふるい</li>
                                <li>二項係数 (light_ver)</li>
                                <li>二項係数 (mod_ver)</li>
                                <li>二項係数 (mod_memo_ver)</li>
                                <li>重複順列</li>
                                <li>約数列挙</li>
                                <li>包除原理</li>
                                <li>逆元を使った解答例</li>
                            </ul>
                        </li>
                        <li>その他データ構造
                            <ul>
                                <li>累積和</li>
                                <li>2次元累積和</li>
                                <li>BIT</li>
                                <div className = "pl">区間加算BIT</div>
                                <div className = "pl">RSQ</div>

                                <li>セグメント木</li>
                                <div className = "pl">1点更新セグメント木</div>
                                <div className = "pl">RMQ</div>
                                <div className = "pl">RSQ</div>
                                <div className = "pl">遅延評価セグメント木</div>

                                <li>Union-Find</li>
                                <div className = "pl">重み付きUnion-Find</div>

                                <li>ダブリング</li>
                                <li>双対問題</li>
                            </ul>
                        </li>
                        <li>その他
                            <ul>
                                <li>順列全探索</li>
                                <li>bit全探索</li>
                                <li>しゃくとり法</li>
                                <li>二分探索</li>
                                <li>いもす法</li>
                                <li>座標圧縮</li>
                            </ul>
                        </li>
                        <li>作れそうなもの
                            <ul>
                                <li>最小全域木 (Prim_ver)</li>
                                <li>クリーク全列挙</li>
                                <li>最大クリーク</li>
                                <li>トポロジカルソート</li>
                            </ul>
                        </li>
                    </ol>
                </details>
                <p>ライブラリは整備したのち、GitHubに公開します</p>
                <p>GitHubアカウントは<a href="https://github.com/Baplisca/" rel="noreferrer noopener" target="_blank">Baplisca</a>です</p>
                <br /> <br />

                <h2>海洋生物たちの復讐</h2>
                <p>大学1年次に制作した初めてのゲーム作品です</p>
                <p>縦スクロールシューティングゲームで, C言語とDXライブラリを用いました</p>
                <div className = "center">
                    <img src= {game1_1} alt="海洋生物たちの復讐 画像1" width="320px" height="200px" />
                    <img src= {game1_2} alt="海洋生物たちの復讐 画像2" width="320px" height="200px" />
                    <img src= {game1_3} alt="海洋生物たちの復讐 画像3" width="320px" height="200px" />
                </div>
                <br/>

                <details>
                    <summary className="bold">動画Ver</summary>
                    <div className = "center">
                        <p>
                        <div className="youtube">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/c98LeJbuA24" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen title = "Game1_1"></iframe>
                        </div>
                        </p>
                        <p>
                        <div className="youtube">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/pgpB8KDjwEI" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen title = "Game1_2"></iframe>
                        </div>
                        </p>
                        <p>
                        <div className="youtube">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/aorVrGWEC6M" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen title = "Game1_3"></iframe>
                        </div>
                        </p>
                    </div>
                </details><br/><br/><br/>


                <h2>ボイストラベラー (Voice Traveler)</h2>
                <p>音声認識と自身の声を周波数に変換して操作する前例のない世界初の音声アクションゲームです</p>
                <p>音声認識エンジンは<a href="https://julius.osdn.jp/" rel="noreferrer noopener" target="_blank">Julius</a>, 周波数変換は高速フーリエ変換 (FFT)
                    をゲームエンジンUnityに組み込みました</p>
                <p>言語はC#です</p>
                <p>サポーターズさんの<a href="https://talent.supporterz.jp/geekten/2020/" rel="noreferrer noopener" target="_blank">技育展</a>に登壇しました</p>

                <div className = "center">
                    <img src= {game3_1} alt="ボイストラベラー 画像1" width="320px" height="160px" />
                    <img src= {game3_2} alt="ボイストラベラー 画像2" width="320px" height="160px" />
                    <img src= {game3_3} alt="ボイストラベラー 画像3" width="320px" height="160px" />
                    <img src= {game3_4} alt="ボイストラベラー 画像4" width="320px" height="160px" />
                </div>
                <br />

                <details>
                    <summary className="bold">動画Ver</summary>

                    <div className = "center">
                        <p>円滑な撮影のため、周波数で上下操作は十字キー操作に置き換えています</p>
                        <p>各動画は約1分です</p>
                        <p>
                        <div className="youtube">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/vHEbxELAfvk"
                                frameborder="100"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen title = "Game3_Title"></iframe>
                        </div>
                        </p>
                        <p>
                        <div className="youtube">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/QdMbt3f5IYI" frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen title = "Game3_1"></iframe>
                        </div>
                        </p>
                        <p>
                        <div className="youtube">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/7fT2p6J7vUk" frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen title = "Game3_2"></iframe>
                        </div>
                        </p>
                        <p>
                        <div className="youtube">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/zQmdL67HYJE" frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen title = "Game3_3"></iframe>
                        </div>
                        </p>
                        <p>
                        <div className="youtube">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/qmUH2qNrAQw" frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen title = "Game3_4"></iframe>
                        </div>
                        </p>
                    </div>
                </details>
                <br/><br/>

                <h2>TadanoAction3DXGame</h2>
                <p>3Dゲームを作りたい and Blenderの勉強目的で制作した3Dアクションゲーム</p>
                <p>規模がデカすぎて, 制作は中断しています</p>
                <p>言語はC#で, ゲームエンジンはUnityを使用しています</p>
                <div className = "center">
                    <img src= {game2_1} alt="タダノアクション 画像1" width="320px" height="160px" />
                    <img src= {game2_2} alt="タダノアクション 画像2" width="320px" height="160px" />
                    <img src= {game2_3} alt="タダノアクション 画像3" width="320px" height="160px" />
                    <img src= {game2_4} alt="タダノアクション 画像4" width="320px" height="160px" />
                </div><br />

                <details>
                    <summary className="bold">動画Ver</summary>

                    <div className = "center">
                        <p>
                        <div className="youtube">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/js8clKiCJh4"
                                frameborder="100"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen title = "Game2_1"></iframe>
                        </div>
                        </p>
                        <p>
                        <div className="youtube">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/LSHmVqN65Hg" frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen title = "Game2_2"></iframe>
                        </div>
                        </p>
                        <p>
                        <div className="youtube">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/eoaY_FXo4lg" frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen title = "Game2_3"></iframe>
                        </div>
                        </p>
                        <p>
                        <div className="youtube">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/AwZZk7FH7T4" frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen title = "Game2_4"></iframe>
                        </div>
                        </p>
                        <p>
                        <div className="youtube">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/vP6oiT5K1Lw" frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen title = "Game2_5"></iframe>
                        </div>
                        </p>
                    </div>
                </details>
                <br /><br />

                <h2>卒業論文のシミュレーション結果</h2>
                <p>「ヒューリスティックソルバーによる安定した電力システムの構築と量子アニーリングによる比較」というテーマで研究を行いました.</p>
                <p>以下が研究の成果物の一部になります.</p>
                <p>こちらが<a href="https://journals.aps.org/pre/abstract/10.1103/PhysRevE.80.046112"
                        rel="noreferrer noopener" target="_blank">先行研究のアルゴリズム</a>にしたがって, 最適化を行った図です.</p>
                <div className = "center">
                    <img src= {heuristic} alt="電力最適化シミュレーション結果" width="500px" height="500px" />
                    <br />
                </div>
                <p>量子アニーリングを用いて, 最適化すると, 下の図のようになります.<br />
                    <div className = "center">(1枚目最適化前, 2枚目最適化後)</div>
                </p>
                <div className = "center">
                    <img src= {pre_annealing} alt="電力最適化前"　width="320px" height="320px" />
                    <img src= {aft_annealing} alt="電力最適化後" width="320px" height="320px" />
                </div><br />

                <p>言語はPythonで, グラフィックライブラリはNetworkXを用いました.</p>

                <h2>タピタピ</h2>
                <p>ハッカソンで制作しました</p>
                <p>コロナ禍でタピオカを満喫したいタピオカ女性向け混雑表示・レコメンドアプリです</p>
                <p>プラットフォームはWeb, Androidで言語はHTML, CSS, JavaScript, Javaで, IDEはAndroid Studioを使用しています</p>
                <p>下の図はAndroidでの表示になります</p>
                <div className = "center">
                    <img src= {tapitapi1} alt="タピタピ 画像1" width="211px" height="498px" />
                    <img src= {tapitapi2} alt="タピタピ 画像2" width="211px" height="498px" />
                    <img src= {tapitapi3} alt="タピタピ 画像3" width="211px" height="498px" />
                </div><br />

                <br /><br />
                </div> 

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
                    ul {
                        list-style-type: square;
                    }
                    ol {
                        list-style-type: decimal;
                    }
                    li.no {
                        list-style-type: none;
                    }
                    .pl {
                        font-size: 14px;
                    }
                    .center{
                        text-align:center;
                    }
                    .bold{
                        font-weight: bold;
                    }
                    /*説明URL https://design.webclips.jp/youtube-movie-size/ */
                    .youtube {
                        position: relative;
                        padding-bottom: 56.25%; /*アスペクト比 16:9の場合の縦幅*/
                        height: 0;
                        overflow: hidden;
                    }
                    .youtube iframe {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                `}
                </style>
            </React.Fragment>
        );
    }
}

export default Work;