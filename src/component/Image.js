import React from 'react';
import styled from 'styled-components';
import { Img } from 'react-image';
import MediaQuery from 'react-responsive';

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
    <>
      <MediaQuery maxWidth={499}>
        <Img
          src={url}
          width="100%"
          height="100%"
          loader={<PlaceHolder width={'100%'} height={'100%'} />}
          unloader={alt}
        />
      </MediaQuery>
      <MediaQuery minWidth={500}>
        <Img
          src={url}
          width={width}
          height={height}
          loader={<PlaceHolder width={width} height={height} />}
          unloader={alt}
        />
      </MediaQuery>
    </>
  );
};
export default ImageComponent;
