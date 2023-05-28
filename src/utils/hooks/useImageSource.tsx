import React, { useEffect, useState } from "react";
import { Content } from "../types/Types";

const useImageSource = (
  data: Content[],
  activeProduct: number | null,
  activeCategory: string | null,
  bgImages: any
) => {
  const [imageSource, setimageSource] = useState<any>("");

  useEffect(() => {
    const firstOnTheLine = data.find(
      ({ attributes: { contentType } }) => contentType === activeCategory
    );

    const sourceDomainUrl = "http://localhost:1337";
    const firstProductUrl =
      sourceDomainUrl +
      firstOnTheLine?.attributes.slider.data[0].attributes.url;

    const activeItemUrl = bgImages && bgImages[activeProduct as number];
    console.log({ activeItemUrl });
    console.log({ activeProduct });

    activeProduct || activeProduct === 0
      ? setimageSource(activeItemUrl)
      : setimageSource(firstProductUrl);
  }, [activeCategory, activeProduct, bgImages, data]);
  console.log(imageSource);
  return imageSource;
};

export default useImageSource;
