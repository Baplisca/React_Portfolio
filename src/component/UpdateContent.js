import React from 'react';
import styled from 'styled-components';

const UpdateItemWrapper = styled.div`
  margin-right: 50px;
`;
const DisableListDot = styled.li`
  list-style-type: none;
`;
const HrWrapper = styled.hr`
  border-width: 1px 0px 0px 0px;
  border-style: solid;
  border-color: #cccccc;
  height: 1px;
`;
const UpdateHrWrapper = styled.div`
  color: '#ffffff';
  border-width: 2.5px 0 0 0;
`;
class UpdateContent extends React.Component {
  render() {
    const UpdateItems = [
      { value: '一部英語対応', date: '2021.7.15' },
      { value: 'TOEICスコア更新', date: '2021.6.8' },
      { value: 'インターン更新', date: '2021.4.10' },
      { value: 'Aboutページ更新', date: '2020.11.18' },
      {
        value: <a href="https://baplisca.herokuapp.com/">React適用に伴うサイト移動</a>,
        date: '2020.11.1',
      },
      {
        value: (
          <a
            href="https://www.youtube.com/channel/UCUEUc2teEFnYEXG-MtEncrA/playlists"
            rel="noreferrer noopener"
            target="_blank">
            TadanoAction3DXGameのYoutube追加
          </a>
        ),
        date: '2020.10.16',
      },
      {
        value: (
          <a
            href="https://baplisca.hatenablog.com/entry/intern/nssol"
            rel="noreferrer noopener"
            target="_blank">
            NSSOLインターンのブログリンク追加
          </a>
        ),
        date: '2020.10.12',
      },
      {
        value: (
          <a
            href="https://baplisca.hatenablog.com/entry/supporterz-1on1"
            rel="noreferrer noopener"
            target="_blank">
            エンジニア1on1に参加しました
          </a>
        ),
        date: '2020.10.5',
      },
      {
        value: (
          <a
            href="https://baplisca.hatenablog.com/entry/supporterz-geekten"
            rel="noreferrer noopener"
            target="_blank">
            技育展に登壇しました
          </a>
        ),
        date: '2020.9.26',
      },
      { value: 'Youtube埋め込み・デザイン変更', date: '2020.9.13' },
      { value: 'フッターに各種リンク追加・ナビゲーションバー変更', date: '2020.9.4' },
      { value: 'インターンのブログリンク追加・フッター作成', date: '2020.9.3' },
      { value: 'インターン項目・受賞追加', date: '2020.8.23' },
      { value: '競プロライブラリ更新', date: '2020.7.22' },
      { value: 'フォント変更 Google Map埋め込み', date: '2020.6.11' },
      { value: 'スマホ対応, 画像圧縮 (PNG→JPEG)', date: '2020.5.29' },
      { value: '競プロライブラリ追加', date: '2020.5.28' },
      { value: 'HP作成', date: '2020.5.24' },
    ];
    return UpdateItems.map((_item) => {
      return (
        <React.Fragment>
          <UpdateItemWrapper>
            <DisableListDot>{_item.date}</DisableListDot>
            <DisableListDot>{_item.value}</DisableListDot>
            <UpdateHrWrapper>
              <HrWrapper />
            </UpdateHrWrapper>
          </UpdateItemWrapper>
          <br />
        </React.Fragment>
      );
    });
  }
}

export default UpdateContent;
