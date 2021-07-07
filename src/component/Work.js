import React from 'react';

import styled from 'styled-components';
import Image from '../component/Image';

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

import heuristic from '../images/heuristic.gif';

import pre_annealing from '../images/no_annealing.jpeg';
import aft_annealing from '../images/annealing.jpeg';

import tapitapi1 from '../images/tapitapi1.png';
import tapitapi2 from '../images/tapitapi2.png';
import tapitapi3 from '../images/tapitapi3.png';

const WorkH2Wrapper = styled.h2`
  padding: 0px 0px 5px 0px;
  border-bottom: 2px solid #999999;
`;
const UlWrapper = styled.ul`
  list-style-type: square;
`;
const OlWrapper = styled.ol`
  list-style-type: decimal;
`;
const PlWrapper = styled.div`
  font-size: 14px;
`;
const CenterWrapper = styled.div`
  text-align: center;
`;
const SmartImageDiv = styled.img`
  @media (max-width: 800px) {
    max-width: 100%;
    height: auto;
    width: auto;
  }
`;
const ContentWrapper = styled.div`
  margin: 0px auto 0px auto;
  padding: 30px 0px 0px 0px;
  width: 800px;
  line-height: 150%;
  color: #333333;
  font-size: 16px;

  @media (max-width: 800px) {
    margin: 0px auto 0px auto;
    padding: 30px 0px 0px 0px;
    width: 95%;
    line-height: 150%;
    color: #333333;
    font-size: 14px;
  }
`;
/*説明URL https://design.webclips.jp/youtube-movie-size/ */
const YoutubeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /*アスペクト比 16:9の場合の縦幅*/
  height: 0;
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

//Class Component
class Work extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ContentWrapper>
          <WorkH2Wrapper>My Works</WorkH2Wrapper>
          <br />
          <br />
          <WorkH2Wrapper>競技プログラミングのために作成したライブラリ </WorkH2Wrapper>
          <p>競プロで頻繁に用いる処理をライブラリにしたものです。言語はC++です。</p>
          <details>
            <summary>ライブラリ一覧</summary>
            <OlWrapper>
              <li>
                グラフ・木
                <UlWrapper>
                  <li>幅優先探索 (BFS)</li>
                  <PlWrapper>辺彩色</PlWrapper>

                  <li>深さ優先探索 (DFS)</li>
                  <PlWrapper>メモ化DFS</PlWrapper>
                  <PlWrapper>2部グラフ判定</PlWrapper>

                  <li>ワーシャルフロイド法</li>
                  <li>ダイクストラ法</li>
                  <li>ベルマンフォード法</li>
                </UlWrapper>
              </li>
              <li>
                動的計画法 (DP)
                <UlWrapper>
                  <li>1次元DP</li>
                  <PlWrapper>LIS (最長増加部分文字列)</PlWrapper>

                  <li>2次元DP</li>
                  <li>bitDP</li>
                  <li>区間DP</li>
                </UlWrapper>
              </li>
              <li>
                数学 (整数論)
                <UlWrapper>
                  <li>エラトステネスのふるい</li>
                  <li>二項係数 (light_ver)</li>
                  <li>二項係数 (mod_ver)</li>
                  <li>二項係数 (mod_memo_ver)</li>
                  <li>重複順列</li>
                  <li>約数列挙</li>
                  <li>包除原理</li>
                  <li>逆元を使った解答例</li>
                </UlWrapper>
              </li>
              <li>
                その他データ構造
                <UlWrapper>
                  <li>累積和</li>
                  <li>2次元累積和</li>
                  <li>BIT</li>
                  <PlWrapper>区間加算BIT</PlWrapper>
                  <PlWrapper>RSQ</PlWrapper>

                  <li>セグメント木</li>
                  <PlWrapper>1点更新セグメント木</PlWrapper>
                  <PlWrapper>RMQ</PlWrapper>
                  <PlWrapper>RSQ</PlWrapper>
                  <PlWrapper>遅延評価セグメント木</PlWrapper>

                  <li>Union-Find</li>
                  <PlWrapper>重み付きUnion-Find</PlWrapper>

                  <li>ダブリング</li>
                  <li>双対問題</li>
                </UlWrapper>
              </li>
              <li>
                その他
                <UlWrapper>
                  <li>順列全探索</li>
                  <li>bit全探索</li>
                  <li>しゃくとり法</li>
                  <li>二分探索</li>
                  <li>いもす法</li>
                  <li>座標圧縮</li>
                </UlWrapper>
              </li>
              <li>
                作れそうなもの
                <UlWrapper>
                  <li>最小全域木 (Prim_ver)</li>
                  <li>クリーク全列挙</li>
                  <li>最大クリーク</li>
                  <li>トポロジカルソート</li>
                </UlWrapper>
              </li>
            </OlWrapper>
          </details>
          <p>ライブラリは整備したのち、GitHubに公開します</p>
          <p>
            GitHubアカウントは
            <a href="https://github.com/Baplisca/" rel="noreferrer noopener" target="_blank">
              Baplisca
            </a>
            です
          </p>
          <br /> <br />
          <WorkH2Wrapper>海洋生物たちの復讐</WorkH2Wrapper>
          <p>大学1年次に制作した初めてのゲーム作品です</p>
          <p>縦スクロールシューティングゲームで, C言語とDXライブラリを用いました</p>
          <CenterWrapper>
            <Image url={game1_1} alt="海洋生物たちの復讐 画像1" width="320px" height="200px" />
            <Image url={game1_2} alt="海洋生物たちの復讐 画像2" width="320px" height="200px" />
            <Image url={game1_3} alt="海洋生物たちの復讐 画像3" width="320px" height="200px" />
          </CenterWrapper>
          <br />
          <details>
            <summary>動画Ver</summary>
            <CenterWrapper>
              <p>
                <YoutubeWrapper>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/c98LeJbuA24"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Game1_1"></iframe>
                </YoutubeWrapper>
              </p>
              <p>
                <YoutubeWrapper>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/pgpB8KDjwEI"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Game1_2"></iframe>
                </YoutubeWrapper>
              </p>
              <p>
                <YoutubeWrapper>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/aorVrGWEC6M"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Game1_3"></iframe>
                </YoutubeWrapper>
              </p>
            </CenterWrapper>
          </details>
          <br />
          <br />
          <br />
          <WorkH2Wrapper>ボイストラベラー (Voice Traveler)</WorkH2Wrapper>
          <p>
            音声認識と自身の声を周波数に変換して操作する前例のない世界初の音声アクションゲームです
          </p>
          <p>
            音声認識エンジンは
            <a href="https://julius.osdn.jp/" rel="noreferrer noopener" target="_blank">
              Julius
            </a>
            , 周波数変換は高速フーリエ変換 (FFT) をゲームエンジンUnityに組み込みました
          </p>
          <p>言語はC#です</p>
          <p>
            サポーターズさんの
            <a
              href="https://talent.supporterz.jp/geekten/2020/"
              rel="noreferrer noopener"
              target="_blank">
              技育展
            </a>
            に登壇しました
          </p>
          <CenterWrapper>
            <SmartImageDiv
              src={game3_1}
              alt="ボイストラベラー 画像1"
              width="320px"
              height="160px"
            />
            <SmartImageDiv
              src={game3_2}
              alt="ボイストラベラー 画像2"
              width="320px"
              height="160px"
            />
            <SmartImageDiv
              src={game3_3}
              alt="ボイストラベラー 画像3"
              width="320px"
              height="160px"
            />
            <SmartImageDiv
              src={game3_4}
              alt="ボイストラベラー 画像4"
              width="320px"
              height="160px"
            />
          </CenterWrapper>
          <br />
          <details>
            <summary>動画Ver</summary>

            <CenterWrapper>
              <p>円滑な撮影のため、周波数で上下操作は十字キー操作に置き換えています</p>
              <p>各動画は約1分です</p>
              <p>
                <YoutubeWrapper>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/vHEbxELAfvk"
                    frameborder="100"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Game3_Title"></iframe>
                </YoutubeWrapper>
              </p>
              <p>
                <YoutubeWrapper>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/QdMbt3f5IYI"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Game3_1"></iframe>
                </YoutubeWrapper>
              </p>
              <p>
                <YoutubeWrapper>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/7fT2p6J7vUk"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Game3_2"></iframe>
                </YoutubeWrapper>
              </p>
              <p>
                <YoutubeWrapper>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/zQmdL67HYJE"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Game3_3"></iframe>
                </YoutubeWrapper>
              </p>
              <p>
                <YoutubeWrapper>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/qmUH2qNrAQw"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Game3_4"></iframe>
                </YoutubeWrapper>
              </p>
            </CenterWrapper>
          </details>
          <br />
          <br />
          <WorkH2Wrapper>TadanoAction3DXGame</WorkH2Wrapper>
          <p>3Dゲームを作りたい and Blenderの勉強目的で制作した3Dアクションゲーム</p>
          <p>規模がデカすぎて, 制作は中断しています</p>
          <p>言語はC#で, ゲームエンジンはUnityを使用しています</p>
          <CenterWrapper>
            <SmartImageDiv
              src={game2_1}
              alt="タダノアクション 画像1"
              width="320px"
              height="160px"
            />
            <SmartImageDiv
              src={game2_2}
              alt="タダノアクション 画像2"
              width="320px"
              height="160px"
            />
            <SmartImageDiv
              src={game2_3}
              alt="タダノアクション 画像3"
              width="320px"
              height="160px"
            />
            <SmartImageDiv
              src={game2_4}
              alt="タダノアクション 画像4"
              width="320px"
              height="160px"
            />
          </CenterWrapper>
          <br />
          <details>
            <summary>動画Ver</summary>

            <CenterWrapper>
              <p>
                <YoutubeWrapper>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/js8clKiCJh4"
                    frameborder="100"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Game2_1"></iframe>
                </YoutubeWrapper>
              </p>
              <p>
                <YoutubeWrapper>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/LSHmVqN65Hg"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Game2_2"></iframe>
                </YoutubeWrapper>
              </p>
              <p>
                <YoutubeWrapper>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/eoaY_FXo4lg"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Game2_3"></iframe>
                </YoutubeWrapper>
              </p>
              <p>
                <YoutubeWrapper>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/AwZZk7FH7T4"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Game2_4"></iframe>
                </YoutubeWrapper>
              </p>
              <p>
                <YoutubeWrapper>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/vP6oiT5K1Lw"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Game2_5"></iframe>
                </YoutubeWrapper>
              </p>
            </CenterWrapper>
          </details>
          <br />
          <br />
          <WorkH2Wrapper>卒業論文のシミュレーション結果</WorkH2Wrapper>
          <p>
            「ヒューリスティックソルバーによる安定した電力システムの構築と量子アニーリングによる比較」というテーマで研究を行いました.
          </p>
          <p>以下が研究の成果物の一部になります.</p>
          <p>
            こちらが
            <a
              href="https://journals.aps.org/pre/abstract/10.1103/PhysRevE.80.046112"
              rel="noreferrer noopener"
              target="_blank">
              先行研究のアルゴリズム
            </a>
            にしたがって, 最適化を行った図です.
          </p>
          <CenterWrapper>
            <Image
              url={heuristic}
              alt="電力最適化シミュレーション結果"
              width="400px"
              height="400px"
            />
          </CenterWrapper>
          <p>
            量子アニーリングを用いて, 最適化すると, 下の図のようになります.
            <br />
            <CenterWrapper>(1枚目最適化前, 2枚目最適化後)</CenterWrapper>
          </p>
          <CenterWrapper>
            <SmartImageDiv src={pre_annealing} alt="電力最適化前" width="320px" height="320px" />
            <SmartImageDiv src={aft_annealing} alt="電力最適化後" width="320px" height="320px" />
          </CenterWrapper>
          <br />
          <p>言語はPythonで, グラフィックライブラリはNetworkXを用いました.</p>
          <WorkH2Wrapper>タピタピ</WorkH2Wrapper>
          <p>ハッカソンで制作しました</p>
          <p>コロナ禍でタピオカを満喫したいタピオカ女性向け混雑表示・レコメンドアプリです</p>
          <p>
            プラットフォームはWeb, Androidで言語はHTML, CSS, JavaScript, Javaで, IDEはAndroid
            Studioを使用しています
          </p>
          <p>下の図はAndroidでの表示になります</p>
          <CenterWrapper>
            <SmartImageDiv src={tapitapi1} alt="タピタピ 画像1" width="211px" height="498px" />
            <SmartImageDiv src={tapitapi2} alt="タピタピ 画像2" width="211px" height="498px" />
            <SmartImageDiv src={tapitapi3} alt="タピタピ 画像3" width="211px" height="498px" />
          </CenterWrapper>
          <br />
          <br />
          <br />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Work;
