import { getInitialProducts } from "components/app/services";
import { handleFormatPrice } from "components/app/shared/helpers/helpers";

const Category = async ({ params: { category } }: { params: { category: string } }) => {
  const { results } = await getInitialProducts(category);

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {results.map((item) => (
        <li className="p-4 flex flex-col justify-center">
          <div className="w-full flex justify-center">
            <img src={item.thumbnail} alt="imagen del producto" width={100} />
          </div>

          <h3 className="whitespace-nowrap overflow-hidden overflow-ellipsis max-w-200">{item.title}</h3>
          <p>{handleFormatPrice(item.price, item.currency_id)}</p>
        </li>
      ))}
    </ul>
  );
};

export default Category;
