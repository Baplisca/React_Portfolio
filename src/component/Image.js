import React, { useState } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

/* 画像を読み込むまでは、プレースホルダーを表示し、読み込んだら差し替える*/
const ImageComponent = ({ url, width, height, alt }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const img = new Image();
  img.src = url;
  img.onload = () => {
    setHasLoaded(true);
  };
  return (
    <div>
      {hasLoaded ? (
        <img src={url} width={width} height={height} alt={alt} />
      ) : (
        <Skeleton animation="wave" variant="rect" width={width} height={height} />
      )}
    </div>
  );
};
export default ImageComponent;
