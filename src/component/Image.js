import React from 'react';
import styled from 'styled-components';
import { Img } from 'react-image';

const PlaceHolder = styled.img(
  (props) => `
  background-color: #555;
  width: ${props.width};
  height: ${props.height};
  border: 10px solid #333;
  padding: 100px;
  box-sizing: border-box;
`,
);
/* 画像を読み込むまでは、プレースホルダーを表示し、読み込んだら差し替える*/
const ImageComponent = ({ url, width, height, alt }) => {
  return (
    <Img
      src={url}
      width="100%"
      height="100%"
      loader={<PlaceHolder width={'100%'} height={'100%'} />}
      unloader={alt}
    />
  );
};
export default ImageComponent;
