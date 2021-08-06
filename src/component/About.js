import React from 'react';
import UpdateContent from './UpdateContent';
import styled from 'styled-components';

import { withTranslation } from 'react-i18next';

const AboutH2Wrapper = styled.h2`
  padding: 0px 0px 5px 0px;
  border-bottom: 2px solid #999999;
`;
const DisableListDot = styled.li`
  list-style-type: none;
`;
const ScrollWrapper = styled.div`
  height: 20em;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #f5f5f5;
    border: none;
    border-radius: 10px;
    box-shadow: inset 0 0 2px #777;
  }
  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 10px;
    box-shadow: none;
  }
`;
const ScrollOuterWrapper = styled.div`
  background: rgba(54, 54, 54, 0.116);
  box-shadow: inset 0 0 2px rgb(12, 12, 12);
  padding: 15px;
  border-radius: 10px;
  border: none;
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
//Class Component
class About extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <ContentWrapper>
          <AboutH2Wrapper>Self-Introduction</AboutH2Wrapper>

          <ul>
            <br />
            <DisableListDot>{t('横田　光悦')}</DisableListDot>
            <DisableListDot>
              {t('東北大学大学院 情報科学研究科 応用情報科学専攻 修士2年')}
            </DisableListDot>
            <DisableListDot>
              <a
                href="https://www.smapip.is.tohoku.ac.jp/"
                title="田中研究室ホームページ"
                rel="noreferrer noopener"
                target="_blank">
                {t('田中研究室')}
              </a>
            </DisableListDot>
            <br />
          </ul>

          <AboutH2Wrapper>Field of study</AboutH2Wrapper>

          <ul>
            <br />
            <li>{t('量子アニーリング')}</li>
            <br />
            <li>{t('組合せ最適化問題')}</li>
            <br />
          </ul>

          <AboutH2Wrapper>Career</AboutH2Wrapper>
          <ul>
            <br />
            <li>{t('東北大学大学院 情報科学研究科 応用情報科学専攻 入学 2020.4')}</li>
            <br />
            <li>{t('東北大学 工学部 電気情報物理工学科 卒業 2020.3')}</li>
            <br />
            <li>{t('東北大学 工学部 電気情報物理工学科 入学 2016.4')}</li>
            <br />
            <li>{t('宮城県宮城野高等学校 総合学科 卒業 2016.3')}</li>
            <br />
          </ul>

          <AboutH2Wrapper>Qualifications</AboutH2Wrapper>
          <ul>
            <br />
            <li>{t('応用情報技術者試験 (AP) 合格 2017.10')}</li>
            <br />
            <li>{t('TOEIC 875 (L 470 R 405) 2021.5')}</li>
            <br />
          </ul>

          <AboutH2Wrapper>Arbeit</AboutH2Wrapper>
          <ul>
            <br />
            <li>{t('東北電力さんと機械学習を用いた共同研究 (RA) 2019.4 ~ 2020.3')}</li>
            <br />
            <li>{t('東北大学 プログラミング演習A (TA) 2020.4 ~ 2020.7')}</li>
            <br />
            <li>{t('楽天 Webアプリケーションエンジニア 2021.7 ~')}</li>
            <br />
          </ul>

          <AboutH2Wrapper>Intern</AboutH2Wrapper>
          <ul>
            <br />
            <li>
              {t('MUIT　サーバーサイド　2020.8 (3日間)')}{' '}
              <a
                href="https://baplisca.hatenablog.com/entry/intern/muit"
                rel="noreferrer noopener"
                target="_blank">
                {t('インターン感想')}
              </a>
            </li>
            <br />
            <li>
              {t(
                '大和証券　金融商品開発・デリバティブ算定モデル開発・リスクマネジメント業務体験コース　2020.8 (5日間)',
              )}
            </li>
            <br />
            <li>
              {t('Amazon Web Services SA　2020.8 ~ 2020.9 (3日間)')}{' '}
              <a
                rel="noreferrer noopener"
                href="https://baplisca.hatenablog.com/entry/intern/aws"
                target="_blank">
                {t('インターン感想')}
              </a>
            </li>
            <br />
            <li>
              {t('日鉄ソリューションズ (NSSOL)　研究開発　2020.9 (3週間)')}{' '}
              <a
                href="https://baplisca.hatenablog.com/entry/intern/nssol"
                rel="noreferrer noopener"
                target="_blank">
                {t('インターン感想')}
              </a>
            </li>
            <br />
            <li>{t('楽天　Webアプリケーションエンジニア　2020.11 ~ 2021.1 (3ヶ月)')}</li>
            <br />
            <li>
              {t('アカツキ　サーバーサイドエンジニア　2021.2 ~ 2021.3 (2週間)')}{' '}
              <a
                href="https://hackerslab.aktsk.jp/2021/03/31/102547"
                rel="noreferrer noopener"
                target="_blank">
                {t('インターン感想')}
              </a>
            </li>
            <br />
          </ul>

          <AboutH2Wrapper>Awards (Official)</AboutH2Wrapper>
          <ul>
            <br />
            <li>
              <a
                href="https://www.softbank.jp/corp/news/press/sbkk/2019/20191015_02/"
                rel="noreferrer noopener"
                target="_blank">
                {t('ソフトバンクAI人材育成スカラーシップ')}
              </a>{' '}
              {t('2020.4 ~ 2021.3')}
            </li>
            <br />
          </ul>
          <AboutH2Wrapper>Free time</AboutH2Wrapper>
          <ul>
            <br />
            <li>{t('麻雀')}</li>
            <br />
            <li>
              <a href="https://atcoder.jp/users/Baplisca" rel="noreferrer noopener" target="_blank">
                {t('競技プログラミング')}
              </a>
            </li>
            <DisableListDot>
              <a
                href="https://atcoder.jp/users/Baplisca"
                rel="noreferrer noopener"
                target="_blank"
                title="Baplisca">
                <img
                  src="https://img.shields.io/endpoint?url=https%3A%2F%2Fatcoder-badges.now.sh%2Fapi%2Fatcoder%2Fjson%2FBaplisca"
                  alt="競技プログラミング レート"
                />
              </a>
            </DisableListDot>
            <br />
            <li>{t('ピアノ (キーボード)')}</li>
            <br />
            <li>{t('野球観戦 (楽天ファン)')}</li>
            <br />
            <li>{t('英会話')}</li>
            <br />
          </ul>

          <AboutH2Wrapper>Updates</AboutH2Wrapper>
          <br />
          <ScrollOuterWrapper>
            <ScrollWrapper>
              <ul>
                <UpdateContent />
              </ul>
            </ScrollWrapper>
          </ScrollOuterWrapper>
          <br />
          <br />
          <br />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default withTranslation()(About);
