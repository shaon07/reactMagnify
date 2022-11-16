import React from "react";

import ReactImageMagnify from "react-image-magnify";

const MyReactImageMagnify = () => {
  return (
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: "Wristwatch by Ted Baker London",
          isFluidWidth: true,
          src: require("./cover.png"),
        },
        largeImage: {
          src: require("./cover.png"),
          width: 640,
          height: 480,
        },
        enlargedImageContainerStyle: {
          zIndex: "1500",
        },
        enlargedImageContainerDimensions: {
          width: "100%",
          height: "100%",
        },
      }}
    />
  );
};

export default MyReactImageMagnify;
