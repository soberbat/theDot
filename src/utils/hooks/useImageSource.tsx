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

    const firstProductUrl = firstOnTheLine?.attributes.imageUrl;

    const activeItemUrl =
      bgImages && bgImages[activeProduct as number]?.imageUrl;

    activeProduct
      ? setimageSource(activeItemUrl)
      : setimageSource(firstProductUrl);
  }, [activeCategory, activeProduct, bgImages, data]);

  return imageSource;
};

export default useImageSource;
