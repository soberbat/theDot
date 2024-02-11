import React, { useEffect, useState } from "react";
import { Content } from "../types/Types";

const useImageSource = (
  data: Content[],
  activeProduct: number | null,
  activeCategory: string | null,
  selectedProduct: unknown,
  bgImages: any
) => {
  const [imageSource, setimageSource] = useState<any>("");

  useEffect(() => {
    const firstOnTheLine = data.find(({ attributes: { contentType } }, i) =>
      activeCategory ? contentType === activeCategory : i === 0
    );

    const sourceDomainUrl = "http://localhost:1337";
    const firstMediaUrl =
      sourceDomainUrl +
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
