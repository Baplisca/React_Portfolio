import React from 'react';
import styled from 'styled-components';
import { Img } from 'react-image';
const ImageWrapper = styled.div`
  img {
    text-align: center;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    @media (max-width: 800px) {
      max-width: 100%;
      height: auto;
      width: auto;
    }
  }
`;
const PlaceHolder = styled.img`
  box-sizing: border-box;
  border: solid #5b6dcd 10px;
  background-color: rgba(54, 54, 54, 0.116);
`;
/* 画像を読み込むまでは、プレースホルダーを表示し、読み込んだら差し替える*/
const ImageComponent = ({ url, width, height, alt }) => {
  return (
    <ImageWrapper width={width} height={height}>
      <Img src={url} loader={<PlaceHolder />} unloader={alt} />
    </ImageWrapper>
  );
};
export default ImageComponent;
