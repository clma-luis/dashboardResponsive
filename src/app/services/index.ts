import { ResponseAPI, Result } from "../interfaces";

const API_PRINCIPAL_PATH = "https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326";

export const getInitialProducts = async (): Promise<ResponseAPI> => {
  try {
    const response = await fetch(API_PRINCIPAL_PATH);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
