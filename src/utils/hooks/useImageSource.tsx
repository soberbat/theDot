import React, { useEffect, useState } from "react";
import { Content } from "../types/Types";
import { ActiveCategory } from "../types/appTypes";

const useImageSource = (
  data: Content[],
  activeProduct: number | null,
  activeCategory: ActiveCategory,
  selectedProduct: any,
  bgImages: any
) => {
  const [imageSource, setimageSource] = useState<any>("");

  useEffect(() => {
    const firstOnTheLine = data.find(({ attributes: { contenType } }, i) =>
      activeCategory ? contenType === activeCategory : i === 0
    );

    const firstMediaUrl =
      firstOnTheLine?.attributes.slider.data[0].attributes.url;

    const activeItemUrl = bgImages && bgImages[activeProduct as number];
    const selectedItemUrl =
      bgImages && bgImages[(selectedProduct?.id - 1) as number];

    activeProduct
      ? setimageSource(activeItemUrl)
      : selectedProduct
      ? setimageSource(selectedItemUrl)
      : setimageSource(firstMediaUrl);
  }, [activeCategory, activeProduct, bgImages, data, selectedProduct]);

  return imageSource;
};

export default useImageSource;
