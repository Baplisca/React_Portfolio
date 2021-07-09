import React from 'react';
import styled from 'styled-components';
import { Img } from 'react-image';
const ImageWrapper = styled.div`
  img {
    flex: auto;
    width: 100%;
    @media (max-width: 800px) {
      max-width: 100%;
      height: auto;
      width: auto;
      margin: 0 auto;
    }
  }
`;
const PlaceHolder = styled.img`
  @media (max-width: 800px) {
    max-width: 100%;
    height: auto;
    width: auto;
  }
  background-color: #555;
  border: 10px solid #4169e1;
  padding: 100px;
  box-sizing: border-box;
`;
/* 画像を読み込むまでは、プレースホルダーを表示し、読み込んだら差し替える*/
const ImageComponent = ({ url, width, height, alt }) => {
  return (
    <ImageWrapper width={width} height={height}>
      <Img src={url} loader={<PlaceHolder width={width} height={height} />} unloader={alt} />
    </ImageWrapper>
  );
};
export default ImageComponent;
