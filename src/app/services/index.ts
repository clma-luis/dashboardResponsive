import { ResponseAPI, Result } from "../interfaces";

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

export type Category = {
  id: string;
  name: string;
  parentId: string | null;
};

export type CategoriesArray = Category[];

export type NestedCategoriesArray = CategoriesArray[];

export type GetCategoriesType = Record<string, Category>;

export const getCategories = async (products: Result[]): Promise<Category[]> => {
  const ids = Array.from(new Set(products.map((product) => product.category_id)));

  const response = await Promise.all(
    ids.map((id) =>
      fetch(`https://api.mercadolibre.com/categories/${id}`)
        .then((data) => data.json() as Promise<{ path_from_root: CategoriesArray }>)
        .then((data) => data.path_from_root)
    )
  );

  const draft: GetCategoriesType = {};

  response.forEach((allCategories) => {
    allCategories.forEach((category, index) => {
      const { id } = category;
      const parent = allCategories[index - 1];
      const parentId = parent?.id;

      draft[id] = { ...category, parentId };
    });
  });

  return Object.values(draft);
};
