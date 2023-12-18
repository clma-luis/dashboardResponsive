import { ResponseAPI } from "../interfaces";

const API_PRINCIPAL_PATH = "https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326";
const CATEGORY_PATH = "https://api.mercadolibre.com/sites/MLA/search?category=$CATEGORY_ID";

export const getInitialProducts = async (param?: string): Promise<ResponseAPI> => {
  let currentPath = API_PRINCIPAL_PATH;
  if (!!param) currentPath = CATEGORY_PATH.replace("$CATEGORY_ID", param);

  try {
    const response = await fetch(currentPath);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
