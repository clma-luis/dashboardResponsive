import PrincipalPage from "./modules/PrincipalPage";
import { getInitialProducts } from "./services";

export default async function () {
  const { results } = await getInitialProducts();

  return <PrincipalPage results={results} />;
}
