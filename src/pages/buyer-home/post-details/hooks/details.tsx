import { useEffect, useState } from "react";

import { ProductSocialDetails } from "../types/product";

export const useProductSocialDetails = (productId: string) => {
  const [productDetails, setProductDetails] =
    useState<ProductSocialDetails | null>();

  useEffect(() => {
    setProductDetails({
      comments: 100,
      reactions: 200,
      newComments: 10,
    });
  }, []);

  return productDetails;
};
